// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/data-sources/tenant_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataF5OsTenantImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the tenant image to check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/data-sources/tenant_image#image_name DataF5OsTenantImage#image_name}
  */
  readonly imageName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/data-sources/tenant_image f5os_tenant_image}
*/
export class DataF5OsTenantImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_tenant_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataF5OsTenantImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataF5OsTenantImage to import
  * @param importFromId The id of the existing DataF5OsTenantImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/data-sources/tenant_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataF5OsTenantImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_tenant_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/data-sources/tenant_image f5os_tenant_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataF5OsTenantImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataF5OsTenantImageConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_tenant_image',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._imageName = config.imageName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_status - computed: true, optional: false, required: false
  public get imageStatus() {
    return this.getStringAttribute('image_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image_name: cdktf.stringToTerraform(this._imageName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
