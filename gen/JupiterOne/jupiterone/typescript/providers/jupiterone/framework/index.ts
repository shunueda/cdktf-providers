// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/framework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrameworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether this is a standard, benchmark, or questionnaire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/framework#framework_type Framework#framework_type}
  */
  readonly frameworkType: string;
  /**
  * The framework's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/framework#name Framework#name}
  */
  readonly name: string;
  /**
  * JSON encoded filters for scoping the framework.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/framework#scope_filters Framework#scope_filters}
  */
  readonly scopeFilters?: string[];
  /**
  * Version of the framework itself (not an J1 API version)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/framework#version Framework#version}
  */
  readonly version: string;
  /**
  * A URL for referencing additional information about the framework
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/framework#web_link Framework#web_link}
  */
  readonly webLink?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/framework jupiterone_framework}
*/
export class Framework extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_framework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Framework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Framework to import
  * @param importFromId The id of the existing Framework that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/framework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Framework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_framework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/framework jupiterone_framework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: FrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_framework',
      terraformGeneratorMetadata: {
        providerName: 'jupiterone',
        providerVersion: '1.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._frameworkType = config.frameworkType;
    this._name = config.name;
    this._scopeFilters = config.scopeFilters;
    this._version = config.version;
    this._webLink = config.webLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // framework_type - computed: false, optional: false, required: true
  private _frameworkType?: string; 
  public get frameworkType() {
    return this.getStringAttribute('framework_type');
  }
  public set frameworkType(value: string) {
    this._frameworkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkTypeInput() {
    return this._frameworkType;
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

  // scope_filters - computed: true, optional: true, required: false
  private _scopeFilters?: string[]; 
  public get scopeFilters() {
    return this.getListAttribute('scope_filters');
  }
  public set scopeFilters(value: string[]) {
    this._scopeFilters = value;
  }
  public resetScopeFilters() {
    this._scopeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeFiltersInput() {
    return this._scopeFilters;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // web_link - computed: false, optional: true, required: false
  private _webLink?: string; 
  public get webLink() {
    return this.getStringAttribute('web_link');
  }
  public set webLink(value: string) {
    this._webLink = value;
  }
  public resetWebLink() {
    this._webLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webLinkInput() {
    return this._webLink;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      framework_type: cdktf.stringToTerraform(this._frameworkType),
      name: cdktf.stringToTerraform(this._name),
      scope_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopeFilters),
      version: cdktf.stringToTerraform(this._version),
      web_link: cdktf.stringToTerraform(this._webLink),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      framework_type: {
        value: cdktf.stringToHclTerraform(this._frameworkType),
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
      scope_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopeFilters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_link: {
        value: cdktf.stringToHclTerraform(this._webLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
