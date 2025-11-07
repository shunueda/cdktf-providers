// https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/private_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataExoscalePrivateNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The private network description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/private_network#description DataExoscalePrivateNetwork#description}
  */
  readonly description?: string;
  /**
  * The private network ID to match (conflicts with `name`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/private_network#id DataExoscalePrivateNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map of key/value labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/private_network#labels DataExoscalePrivateNetwork#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The network name to match (conflicts with `id`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/private_network#name DataExoscalePrivateNetwork#name}
  */
  readonly name?: string;
  /**
  * The Exoscale [Zone](https://www.exoscale.com/datacenters/) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/private_network#zone DataExoscalePrivateNetwork#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/private_network exoscale_private_network}
*/
export class DataExoscalePrivateNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_private_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataExoscalePrivateNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataExoscalePrivateNetwork to import
  * @param importFromId The id of the existing DataExoscalePrivateNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/private_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataExoscalePrivateNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_private_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/private_network exoscale_private_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataExoscalePrivateNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataExoscalePrivateNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_private_network',
      terraformGeneratorMetadata: {
        providerName: 'exoscale',
        providerVersion: '0.66.0'
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
    this._labels = config.labels;
    this._name = config.name;
    this._zone = config.zone;
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

  // end_ip - computed: true, optional: false, required: false
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }

  // id - computed: false, optional: true, required: false
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // netmask - computed: true, optional: false, required: false
  public get netmask() {
    return this.getStringAttribute('netmask');
  }

  // start_ip - computed: true, optional: false, required: false
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      zone: cdktf.stringToTerraform(this._zone),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
