// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_logo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalLogoConfig extends cdktf.TerraformMetaArguments {
  /**
  * must be a data URL with base64 image data, e.g., data:image/jpeg;base64,<BASE64_IMAGE_DATA>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_logo#data PortalLogo#data}
  */
  readonly data: string;
  /**
  * The Portal identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_logo#portal_id PortalLogo#portal_id}
  */
  readonly portalId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_logo konnect_portal_logo}
*/
export class PortalLogo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_portal_logo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortalLogo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortalLogo to import
  * @param importFromId The id of the existing PortalLogo that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_logo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortalLogo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_portal_logo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_logo konnect_portal_logo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalLogoConfig
  */
  public constructor(scope: Construct, id: string, config: PortalLogoConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_portal_logo',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._data = config.data;
    this._portalId = config.portalId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // portal_id - computed: false, optional: false, required: true
  private _portalId?: string; 
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }
  public set portalId(value: string) {
    this._portalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalIdInput() {
    return this._portalId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data: cdktf.stringToTerraform(this._data),
      portal_id: cdktf.stringToTerraform(this._portalId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_id: {
        value: cdktf.stringToHclTerraform(this._portalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
