// https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/project_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/project_link#name ProjectLink#name}
  */
  readonly name: string;
  /**
  * The key of the project to add the link to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/project_link#project_key ProjectLink#project_key}
  */
  readonly projectKey: string;
  /**
  * The url of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/project_link#url ProjectLink#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/project_link sonarcloud_project_link}
*/
export class ProjectLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarcloud_project_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectLink to import
  * @param importFromId The id of the existing ProjectLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/project_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarcloud_project_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rewe-digital/sonarcloud/0.5.2/docs/resources/project_link sonarcloud_project_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectLinkConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarcloud_project_link',
      terraformGeneratorMetadata: {
        providerName: 'sonarcloud',
        providerVersion: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._projectKey = config.projectKey;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project_key: cdktf.stringToTerraform(this._projectKey),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
