// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/access_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access level of the grant. Must be either `allowed` or `denied`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/access_grant#access AccessGrant#access}
  */
  readonly access?: string;
  /**
  * Token of the resource being granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/access_grant#resource_token AccessGrant#resource_token}
  */
  readonly resourceToken: string;
  /**
  * Token of the team being granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/access_grant#team_token AccessGrant#team_token}
  */
  readonly teamToken: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/access_grant vantage_access_grant}
*/
export class AccessGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_access_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessGrant to import
  * @param importFromId The id of the existing AccessGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/access_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_access_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/access_grant vantage_access_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessGrantConfig
  */
  public constructor(scope: Construct, id: string, config: AccessGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_access_grant',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._resourceToken = config.resourceToken;
    this._teamToken = config.teamToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: true, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_token - computed: false, optional: false, required: true
  private _resourceToken?: string; 
  public get resourceToken() {
    return this.getStringAttribute('resource_token');
  }
  public set resourceToken(value: string) {
    this._resourceToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTokenInput() {
    return this._resourceToken;
  }

  // team_token - computed: false, optional: false, required: true
  private _teamToken?: string; 
  public get teamToken() {
    return this.getStringAttribute('team_token');
  }
  public set teamToken(value: string) {
    this._teamToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamTokenInput() {
    return this._teamToken;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      resource_token: cdktf.stringToTerraform(this._resourceToken),
      team_token: cdktf.stringToTerraform(this._teamToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_token: {
        value: cdktf.stringToHclTerraform(this._resourceToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_token: {
        value: cdktf.stringToHclTerraform(this._teamToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
