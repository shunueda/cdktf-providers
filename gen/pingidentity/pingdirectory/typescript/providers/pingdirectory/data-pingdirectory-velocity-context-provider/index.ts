// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_context_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryVelocityContextProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent HTTP Servlet Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_context_provider#http_servlet_extension_name DataPingdirectoryVelocityContextProvider#http_servlet_extension_name}
  */
  readonly httpServletExtensionName: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_context_provider#name DataPingdirectoryVelocityContextProvider#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_context_provider pingdirectory_velocity_context_provider}
*/
export class DataPingdirectoryVelocityContextProvider extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_velocity_context_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryVelocityContextProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryVelocityContextProvider to import
  * @param importFromId The id of the existing DataPingdirectoryVelocityContextProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_context_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryVelocityContextProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_velocity_context_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_context_provider pingdirectory_velocity_context_provider} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryVelocityContextProviderConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryVelocityContextProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_velocity_context_provider',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._httpServletExtensionName = config.httpServletExtensionName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_tool - computed: true, optional: false, required: false
  public get applicationTool() {
    return cdktf.Fn.tolist(this.getListAttribute('application_tool'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // excluded_view - computed: true, optional: false, required: false
  public get excludedView() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_view'));
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return cdktf.Fn.tolist(this.getListAttribute('http_method'));
  }

  // http_servlet_extension_name - computed: false, optional: false, required: true
  private _httpServletExtensionName?: string; 
  public get httpServletExtensionName() {
    return this.getStringAttribute('http_servlet_extension_name');
  }
  public set httpServletExtensionName(value: string) {
    this._httpServletExtensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServletExtensionNameInput() {
    return this._httpServletExtensionName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // included_view - computed: true, optional: false, required: false
  public get includedView() {
    return cdktf.Fn.tolist(this.getListAttribute('included_view'));
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

  // object_scope - computed: true, optional: false, required: false
  public get objectScope() {
    return this.getStringAttribute('object_scope');
  }

  // request_tool - computed: true, optional: false, required: false
  public get requestTool() {
    return cdktf.Fn.tolist(this.getListAttribute('request_tool'));
  }

  // response_header - computed: true, optional: false, required: false
  public get responseHeader() {
    return cdktf.Fn.tolist(this.getListAttribute('response_header'));
  }

  // session_tool - computed: true, optional: false, required: false
  public get sessionTool() {
    return cdktf.Fn.tolist(this.getListAttribute('session_tool'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_servlet_extension_name: cdktf.stringToTerraform(this._httpServletExtensionName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_servlet_extension_name: {
        value: cdktf.stringToHclTerraform(this._httpServletExtensionName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
