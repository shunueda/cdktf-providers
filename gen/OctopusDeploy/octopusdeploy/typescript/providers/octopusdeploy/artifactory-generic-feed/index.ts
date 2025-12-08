// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArtifactoryGenericFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed#feed_uri ArtifactoryGenericFeed#feed_uri}
  */
  readonly feedUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed#layout_regex ArtifactoryGenericFeed#layout_regex}
  */
  readonly layoutRegex?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed#name ArtifactoryGenericFeed#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed#package_acquisition_location_options ArtifactoryGenericFeed#package_acquisition_location_options}
  */
  readonly packageAcquisitionLocationOptions?: string[];
  /**
  * The password associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed#password ArtifactoryGenericFeed#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed#repository ArtifactoryGenericFeed#repository}
  */
  readonly repository: string;
  /**
  * The space ID associated with this artifactory generic feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed#space_id ArtifactoryGenericFeed#space_id}
  */
  readonly spaceId?: string;
  /**
  * The username associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed#username ArtifactoryGenericFeed#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed octopusdeploy_artifactory_generic_feed}
*/
export class ArtifactoryGenericFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_artifactory_generic_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArtifactoryGenericFeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArtifactoryGenericFeed to import
  * @param importFromId The id of the existing ArtifactoryGenericFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArtifactoryGenericFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_artifactory_generic_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.6.0/docs/resources/artifactory_generic_feed octopusdeploy_artifactory_generic_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArtifactoryGenericFeedConfig
  */
  public constructor(scope: Construct, id: string, config: ArtifactoryGenericFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_artifactory_generic_feed',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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
    this._layoutRegex = config.layoutRegex;
    this._name = config.name;
    this._packageAcquisitionLocationOptions = config.packageAcquisitionLocationOptions;
    this._password = config.password;
    this._repository = config.repository;
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

  // layout_regex - computed: false, optional: true, required: false
  private _layoutRegex?: string; 
  public get layoutRegex() {
    return this.getStringAttribute('layout_regex');
  }
  public set layoutRegex(value: string) {
    this._layoutRegex = value;
  }
  public resetLayoutRegex() {
    this._layoutRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutRegexInput() {
    return this._layoutRegex;
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

  // package_acquisition_location_options - computed: true, optional: true, required: false
  private _packageAcquisitionLocationOptions?: string[]; 
  public get packageAcquisitionLocationOptions() {
    return this.getListAttribute('package_acquisition_location_options');
  }
  public set packageAcquisitionLocationOptions(value: string[]) {
    this._packageAcquisitionLocationOptions = value;
  }
  public resetPackageAcquisitionLocationOptions() {
    this._packageAcquisitionLocationOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageAcquisitionLocationOptionsInput() {
    return this._packageAcquisitionLocationOptions;
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

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
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
      layout_regex: cdktf.stringToTerraform(this._layoutRegex),
      name: cdktf.stringToTerraform(this._name),
      package_acquisition_location_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packageAcquisitionLocationOptions),
      password: cdktf.stringToTerraform(this._password),
      repository: cdktf.stringToTerraform(this._repository),
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
      layout_regex: {
        value: cdktf.stringToHclTerraform(this._layoutRegex),
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
      package_acquisition_location_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packageAcquisitionLocationOptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
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
