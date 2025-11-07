// https://registry.terraform.io/providers/suse/susepubliccloud/0.6.1/docs/data-sources/image_ids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSusepubliccloudImageIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/suse/susepubliccloud/0.6.1/docs/data-sources/image_ids#cloud DataSusepubliccloudImageIds#cloud}
  */
  readonly cloud: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/suse/susepubliccloud/0.6.1/docs/data-sources/image_ids#id DataSusepubliccloudImageIds#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/suse/susepubliccloud/0.6.1/docs/data-sources/image_ids#name_regex DataSusepubliccloudImageIds#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/suse/susepubliccloud/0.6.1/docs/data-sources/image_ids#region DataSusepubliccloudImageIds#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/suse/susepubliccloud/0.6.1/docs/data-sources/image_ids#sort_ascending DataSusepubliccloudImageIds#sort_ascending}
  */
  readonly sortAscending?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/suse/susepubliccloud/0.6.1/docs/data-sources/image_ids#state DataSusepubliccloudImageIds#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/suse/susepubliccloud/0.6.1/docs/data-sources/image_ids susepubliccloud_image_ids}
*/
export class DataSusepubliccloudImageIds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "susepubliccloud_image_ids";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSusepubliccloudImageIds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSusepubliccloudImageIds to import
  * @param importFromId The id of the existing DataSusepubliccloudImageIds that should be imported. Refer to the {@link https://registry.terraform.io/providers/suse/susepubliccloud/0.6.1/docs/data-sources/image_ids#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSusepubliccloudImageIds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "susepubliccloud_image_ids", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/suse/susepubliccloud/0.6.1/docs/data-sources/image_ids susepubliccloud_image_ids} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSusepubliccloudImageIdsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSusepubliccloudImageIdsConfig) {
    super(scope, id, {
      terraformResourceType: 'susepubliccloud_image_ids',
      terraformGeneratorMetadata: {
        providerName: 'susepubliccloud',
        providerVersion: '0.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloud = config.cloud;
    this._id = config.id;
    this._nameRegex = config.nameRegex;
    this._region = config.region;
    this._sortAscending = config.sortAscending;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud - computed: false, optional: false, required: true
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sort_ascending - computed: false, optional: true, required: false
  private _sortAscending?: boolean | cdktf.IResolvable; 
  public get sortAscending() {
    return this.getBooleanAttribute('sort_ascending');
  }
  public set sortAscending(value: boolean | cdktf.IResolvable) {
    this._sortAscending = value;
  }
  public resetSortAscending() {
    this._sortAscending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortAscendingInput() {
    return this._sortAscending;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: cdktf.stringToTerraform(this._cloud),
      id: cdktf.stringToTerraform(this._id),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      region: cdktf.stringToTerraform(this._region),
      sort_ascending: cdktf.booleanToTerraform(this._sortAscending),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_ascending: {
        value: cdktf.booleanToHclTerraform(this._sortAscending),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
