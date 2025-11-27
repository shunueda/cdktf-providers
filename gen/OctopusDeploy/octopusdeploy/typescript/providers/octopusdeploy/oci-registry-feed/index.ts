// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/oci_registry_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OciRegistryFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/oci_registry_feed#feed_uri OciRegistryFeed#feed_uri}
  */
  readonly feedUri: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/oci_registry_feed#name OciRegistryFeed#name}
  */
  readonly name: string;
  /**
  * The password associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/oci_registry_feed#password OciRegistryFeed#password}
  */
  readonly password?: string;
  /**
  * The space ID associated with this OCI registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/oci_registry_feed#space_id OciRegistryFeed#space_id}
  */
  readonly spaceId?: string;
  /**
  * The username associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/oci_registry_feed#username OciRegistryFeed#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/oci_registry_feed octopusdeploy_oci_registry_feed}
*/
export class OciRegistryFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_oci_registry_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OciRegistryFeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciRegistryFeed to import
  * @param importFromId The id of the existing OciRegistryFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/oci_registry_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciRegistryFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_oci_registry_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/oci_registry_feed octopusdeploy_oci_registry_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciRegistryFeedConfig
  */
  public constructor(scope: Construct, id: string, config: OciRegistryFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_oci_registry_feed',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._feedUri = config.feedUri;
    this._name = config.name;
    this._password = config.password;
    this._spaceId = config.spaceId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feed_uri - computed: false, optional: false, required: true
  private _feedUri?: string; 
  public get feedUri() {
    return this.getStringAttribute('feed_uri');
  }
  public set feedUri(value: string) {
    this._feedUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get feedUriInput() {
    return this._feedUri;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feed_uri: cdktf.stringToTerraform(this._feedUri),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      space_id: cdktf.stringToTerraform(this._spaceId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feed_uri: {
        value: cdktf.stringToHclTerraform(this._feedUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
