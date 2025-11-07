// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_template_loader
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryVelocityTemplateLoaderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent HTTP Servlet Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_template_loader#http_servlet_extension_name DataPingdirectoryVelocityTemplateLoader#http_servlet_extension_name}
  */
  readonly httpServletExtensionName: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_template_loader#name DataPingdirectoryVelocityTemplateLoader#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_template_loader pingdirectory_velocity_template_loader}
*/
export class DataPingdirectoryVelocityTemplateLoader extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_velocity_template_loader";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryVelocityTemplateLoader resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryVelocityTemplateLoader to import
  * @param importFromId The id of the existing DataPingdirectoryVelocityTemplateLoader that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_template_loader#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryVelocityTemplateLoader to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_velocity_template_loader", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/velocity_template_loader pingdirectory_velocity_template_loader} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryVelocityTemplateLoaderConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryVelocityTemplateLoaderConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_velocity_template_loader',
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // evaluation_order_index - computed: true, optional: false, required: false
  public get evaluationOrderIndex() {
    return this.getNumberAttribute('evaluation_order_index');
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

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // mime_type_matcher - computed: true, optional: false, required: false
  public get mimeTypeMatcher() {
    return this.getStringAttribute('mime_type_matcher');
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

  // template_directory - computed: true, optional: false, required: false
  public get templateDirectory() {
    return this.getStringAttribute('template_directory');
  }

  // template_suffix - computed: true, optional: false, required: false
  public get templateSuffix() {
    return this.getStringAttribute('template_suffix');
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
