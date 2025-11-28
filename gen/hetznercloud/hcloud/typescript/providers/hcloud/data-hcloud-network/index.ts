// https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/network#id DataHcloudNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/network#ip_range DataHcloudNetwork#ip_range}
  */
  readonly ipRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/network#labels DataHcloudNetwork#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/network#most_recent DataHcloudNetwork#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/network#name DataHcloudNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/network#with_selector DataHcloudNetwork#with_selector}
  */
  readonly withSelector?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/network hcloud_network}
*/
export class DataHcloudNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudNetwork to import
  * @param importFromId The id of the existing DataHcloudNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.57.0/docs/data-sources/network hcloud_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudNetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcloudNetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcloud_network',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.57.0',
        providerVersionConstraint: '1.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipRange = config.ipRange;
    this._labels = config.labels;
    this._mostRecent = config.mostRecent;
    this._name = config.name;
    this._withSelector = config.withSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_protection - computed: true, optional: false, required: false
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }

  // expose_routes_to_vswitch - computed: true, optional: false, required: false
  public get exposeRoutesToVswitch() {
    return this.getBooleanAttribute('expose_routes_to_vswitch');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_range - computed: true, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // labels - computed: true, optional: true, required: false
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

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // name - computed: true, optional: true, required: false
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

  // with_selector - computed: false, optional: true, required: false
  private _withSelector?: string; 
  public get withSelector() {
    return this.getStringAttribute('with_selector');
  }
  public set withSelector(value: string) {
    this._withSelector = value;
  }
  public resetWithSelector() {
    this._withSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSelectorInput() {
    return this._withSelector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      ip_range: cdktf.stringToTerraform(this._ipRange),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      name: cdktf.stringToTerraform(this._name),
      with_selector: cdktf.stringToTerraform(this._withSelector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_range: {
        value: cdktf.stringToHclTerraform(this._ipRange),
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
      most_recent: {
        value: cdktf.booleanToHclTerraform(this._mostRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_selector: {
        value: cdktf.stringToHclTerraform(this._withSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
