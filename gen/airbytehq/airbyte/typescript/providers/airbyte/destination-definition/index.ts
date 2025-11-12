// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_definition#docker_image_tag DestinationDefinition#docker_image_tag}
  */
  readonly dockerImageTag: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_definition#docker_repository DestinationDefinition#docker_repository}
  */
  readonly dockerRepository: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_definition#documentation_url DestinationDefinition#documentation_url}
  */
  readonly documentationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_definition#name DestinationDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_definition#workspace_id DestinationDefinition#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_definition airbyte_destination_definition}
*/
export class DestinationDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationDefinition to import
  * @param importFromId The id of the existing DestinationDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_definition airbyte_destination_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_definition',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dockerImageTag = config.dockerImageTag;
    this._dockerRepository = config.dockerRepository;
    this._documentationUrl = config.documentationUrl;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // docker_image_tag - computed: false, optional: false, required: true
  private _dockerImageTag?: string; 
  public get dockerImageTag() {
    return this.getStringAttribute('docker_image_tag');
  }
  public set dockerImageTag(value: string) {
    this._dockerImageTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageTagInput() {
    return this._dockerImageTag;
  }

  // docker_repository - computed: false, optional: false, required: true
  private _dockerRepository?: string; 
  public get dockerRepository() {
    return this.getStringAttribute('docker_repository');
  }
  public set dockerRepository(value: string) {
    this._dockerRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRepositoryInput() {
    return this._dockerRepository;
  }

  // documentation_url - computed: true, optional: true, required: false
  private _documentationUrl?: string; 
  public get documentationUrl() {
    return this.getStringAttribute('documentation_url');
  }
  public set documentationUrl(value: string) {
    this._documentationUrl = value;
  }
  public resetDocumentationUrl() {
    this._documentationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationUrlInput() {
    return this._documentationUrl;
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

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      docker_image_tag: cdktf.stringToTerraform(this._dockerImageTag),
      docker_repository: cdktf.stringToTerraform(this._dockerRepository),
      documentation_url: cdktf.stringToTerraform(this._documentationUrl),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      docker_image_tag: {
        value: cdktf.stringToHclTerraform(this._dockerImageTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_repository: {
        value: cdktf.stringToHclTerraform(this._dockerRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      documentation_url: {
        value: cdktf.stringToHclTerraform(this._documentationUrl),
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
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
