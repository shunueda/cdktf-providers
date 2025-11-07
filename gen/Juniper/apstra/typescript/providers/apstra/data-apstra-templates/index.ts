// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraTemplatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional filter to select only Templates with the specified Overlay Control Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/templates#overlay_control_protocol DataApstraTemplates#overlay_control_protocol}
  */
  readonly overlayControlProtocol?: string;
  /**
  * Optional filter to select only Templates of the specified type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/templates#type DataApstraTemplates#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/templates apstra_templates}
*/
export class DataApstraTemplates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraTemplates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraTemplates to import
  * @param importFromId The id of the existing DataApstraTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/templates apstra_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraTemplatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraTemplatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_templates',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._overlayControlProtocol = config.overlayControlProtocol;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // overlay_control_protocol - computed: false, optional: true, required: false
  private _overlayControlProtocol?: string; 
  public get overlayControlProtocol() {
    return this.getStringAttribute('overlay_control_protocol');
  }
  public set overlayControlProtocol(value: string) {
    this._overlayControlProtocol = value;
  }
  public resetOverlayControlProtocol() {
    this._overlayControlProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayControlProtocolInput() {
    return this._overlayControlProtocol;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      overlay_control_protocol: cdktf.stringToTerraform(this._overlayControlProtocol),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      overlay_control_protocol: {
        value: cdktf.stringToHclTerraform(this._overlayControlProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
