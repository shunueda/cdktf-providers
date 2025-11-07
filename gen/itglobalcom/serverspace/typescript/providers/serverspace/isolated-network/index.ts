// https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/isolated_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IsolatedNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/isolated_network#description IsolatedNetwork#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/isolated_network#id IsolatedNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/isolated_network#location IsolatedNetwork#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/isolated_network#mask IsolatedNetwork#mask}
  */
  readonly mask: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/isolated_network#name IsolatedNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/isolated_network#network_prefix IsolatedNetwork#network_prefix}
  */
  readonly networkPrefix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/isolated_network serverspace_isolated_network}
*/
export class IsolatedNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverspace_isolated_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IsolatedNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IsolatedNetwork to import
  * @param importFromId The id of the existing IsolatedNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/isolated_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IsolatedNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverspace_isolated_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/resources/isolated_network serverspace_isolated_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IsolatedNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: IsolatedNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'serverspace_isolated_network',
      terraformGeneratorMetadata: {
        providerName: 'serverspace',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._mask = config.mask;
    this._name = config.name;
    this._networkPrefix = config.networkPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: number; 
  public get mask() {
    return this.getNumberAttribute('mask');
  }
  public set mask(value: number) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
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

  // network_prefix - computed: false, optional: false, required: true
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      mask: cdktf.numberToTerraform(this._mask),
      name: cdktf.stringToTerraform(this._name),
      network_prefix: cdktf.stringToTerraform(this._networkPrefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mask: {
        value: cdktf.numberToHclTerraform(this._mask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_prefix: {
        value: cdktf.stringToHclTerraform(this._networkPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
