// https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/service_tool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceToolConfig extends cdktf.TerraformMetaArguments {
  /**
  * The category that the tool belongs to. One of `admin`, `api_documentation`, `architecture_diagram`, `backlog`, `code`, `continuous_integration`, `deployment`, `design_documentation`, `errors`, `feature_flag`, `health_checks`, `incidents`, `issue_tracking`, `logs`, `metrics`, `observability`, `orchestrator`, `other`, `resiliency`, `runbooks`, `security_scans`, `status_page`, `wiki`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/service_tool#category ServiceTool#category}
  */
  readonly category: string;
  /**
  * The environment that the tool belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/service_tool#environment ServiceTool#environment}
  */
  readonly environment?: string;
  /**
  * The display name of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/service_tool#name ServiceTool#name}
  */
  readonly name: string;
  /**
  * The id of the service that this will be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/service_tool#service ServiceTool#service}
  */
  readonly service?: string;
  /**
  * The alias of the service that this will be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/service_tool#service_alias ServiceTool#service_alias}
  */
  readonly serviceAlias?: string;
  /**
  * The URL of the tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/service_tool#url ServiceTool#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/service_tool opslevel_service_tool}
*/
export class ServiceTool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_service_tool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceTool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceTool to import
  * @param importFromId The id of the existing ServiceTool that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/service_tool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceTool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_service_tool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.0/docs/resources/service_tool opslevel_service_tool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceToolConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceToolConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_service_tool',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._environment = config.environment;
    this._name = config.name;
    this._service = config.service;
    this._serviceAlias = config.serviceAlias;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_alias - computed: false, optional: true, required: false
  private _serviceAlias?: string; 
  public get serviceAlias() {
    return this.getStringAttribute('service_alias');
  }
  public set serviceAlias(value: string) {
    this._serviceAlias = value;
  }
  public resetServiceAlias() {
    this._serviceAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAliasInput() {
    return this._serviceAlias;
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
      category: cdktf.stringToTerraform(this._category),
      environment: cdktf.stringToTerraform(this._environment),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.stringToTerraform(this._service),
      service_alias: cdktf.stringToTerraform(this._serviceAlias),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_alias: {
        value: cdktf.stringToHclTerraform(this._serviceAlias),
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
