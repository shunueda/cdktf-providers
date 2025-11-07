// https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerspaceNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network#description DataServerspaceNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network#id DataServerspaceNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network#location DataServerspaceNetwork#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network#mask DataServerspaceNetwork#mask}
  */
  readonly mask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network#name DataServerspaceNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network#network_prefix DataServerspaceNetwork#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network#tags DataServerspaceNetwork#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network serverspace_network}
*/
export class DataServerspaceNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverspace_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerspaceNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerspaceNetwork to import
  * @param importFromId The id of the existing DataServerspaceNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerspaceNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverspace_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/network serverspace_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerspaceNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerspaceNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'serverspace_network',
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
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: number; 
  public get mask() {
    return this.getNumberAttribute('mask');
  }
  public set mask(value: number) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
