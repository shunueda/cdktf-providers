// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/custom_framework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomFrameworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * URL to the custom compliance framework data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/custom_framework#data_url CustomFramework#data_url}
  */
  readonly dataUrl: string;
  /**
  * Mondoo space identifier. If there's no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/custom_framework#space_id CustomFramework#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/custom_framework mondoo_custom_framework}
*/
export class CustomFramework extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_custom_framework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomFramework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomFramework to import
  * @param importFromId The id of the existing CustomFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/custom_framework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomFramework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_custom_framework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/custom_framework mondoo_custom_framework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomFrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: CustomFrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_custom_framework',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.3',
        providerVersionConstraint: '0.35.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataUrl = config.dataUrl;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_url - computed: false, optional: false, required: true
  private _dataUrl?: string; 
  public get dataUrl() {
    return this.getStringAttribute('data_url');
  }
  public set dataUrl(value: string) {
    this._dataUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataUrlInput() {
    return this._dataUrl;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_url: cdktf.stringToTerraform(this._dataUrl),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_url: {
        value: cdktf.stringToHclTerraform(this._dataUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
