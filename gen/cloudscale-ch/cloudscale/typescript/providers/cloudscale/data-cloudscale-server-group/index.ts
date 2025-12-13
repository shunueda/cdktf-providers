// https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/server_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudscaleServerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/server_group#id DataCloudscaleServerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/server_group#name DataCloudscaleServerGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/server_group#tags DataCloudscaleServerGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/server_group#zone_slug DataCloudscaleServerGroup#zone_slug}
  */
  readonly zoneSlug?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/server_group cloudscale_server_group}
*/
export class DataCloudscaleServerGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudscale_server_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudscaleServerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudscaleServerGroup to import
  * @param importFromId The id of the existing DataCloudscaleServerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/server_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudscaleServerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudscale_server_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.1/docs/data-sources/server_group cloudscale_server_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudscaleServerGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudscaleServerGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudscale_server_group',
      terraformGeneratorMetadata: {
        providerName: 'cloudscale',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
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
    this._name = config.name;
    this._tags = config.tags;
    this._zoneSlug = config.zoneSlug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // zone_slug - computed: true, optional: true, required: false
  private _zoneSlug?: string; 
  public get zoneSlug() {
    return this.getStringAttribute('zone_slug');
  }
  public set zoneSlug(value: string) {
    this._zoneSlug = value;
  }
  public resetZoneSlug() {
    this._zoneSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSlugInput() {
    return this._zoneSlug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone_slug: cdktf.stringToTerraform(this._zoneSlug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zone_slug: {
        value: cdktf.stringToHclTerraform(this._zoneSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
