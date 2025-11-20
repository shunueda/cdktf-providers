// https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/compose_convert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComposeConvertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content of the docker-compose.yml file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/compose_convert#compose_content ComposeConvert#compose_content}
  */
  readonly composeContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/compose_convert#id ComposeConvert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/compose_convert portainer_compose_convert}
*/
export class ComposeConvert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_compose_convert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComposeConvert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComposeConvert to import
  * @param importFromId The id of the existing ComposeConvert that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/compose_convert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComposeConvert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_compose_convert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.17.0/docs/resources/compose_convert portainer_compose_convert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComposeConvertConfig
  */
  public constructor(scope: Construct, id: string, config: ComposeConvertConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_compose_convert',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._composeContent = config.composeContent;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compose_content - computed: false, optional: false, required: true
  private _composeContent?: string; 
  public get composeContent() {
    return this.getStringAttribute('compose_content');
  }
  public set composeContent(value: string) {
    this._composeContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get composeContentInput() {
    return this._composeContent;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // manifests - computed: true, optional: false, required: false
  private _manifests = new cdktf.StringMap(this, "manifests");
  public get manifests() {
    return this._manifests;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compose_content: cdktf.stringToTerraform(this._composeContent),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compose_content: {
        value: cdktf.stringToHclTerraform(this._composeContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
