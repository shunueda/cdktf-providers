// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_bulk_hostname_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpamBulkHostnameTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The format of bulk host name template. It should follow certain rules (please use Administration Guide as reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_bulk_hostname_template#template_format IpamBulkHostnameTemplate#template_format}
  */
  readonly templateFormat: string;
  /**
  * The name of bulk host name template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_bulk_hostname_template#template_name IpamBulkHostnameTemplate#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_bulk_hostname_template nios_ipam_bulk_hostname_template}
*/
export class IpamBulkHostnameTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_ipam_bulk_hostname_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpamBulkHostnameTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpamBulkHostnameTemplate to import
  * @param importFromId The id of the existing IpamBulkHostnameTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_bulk_hostname_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpamBulkHostnameTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_ipam_bulk_hostname_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ipam_bulk_hostname_template nios_ipam_bulk_hostname_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpamBulkHostnameTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: IpamBulkHostnameTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_ipam_bulk_hostname_template',
      terraformGeneratorMetadata: {
        providerName: 'nios',
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
    this._templateFormat = config.templateFormat;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // is_grid_default - computed: true, optional: false, required: false
  public get isGridDefault() {
    return this.getBooleanAttribute('is_grid_default');
  }

  // pre_defined - computed: true, optional: false, required: false
  public get preDefined() {
    return this.getBooleanAttribute('pre_defined');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // template_format - computed: false, optional: false, required: true
  private _templateFormat?: string; 
  public get templateFormat() {
    return this.getStringAttribute('template_format');
  }
  public set templateFormat(value: string) {
    this._templateFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFormatInput() {
    return this._templateFormat;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      template_format: cdktf.stringToTerraform(this._templateFormat),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      template_format: {
        value: cdktf.stringToHclTerraform(this._templateFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
