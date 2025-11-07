// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetboxClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/cluster#cluster_group_id DataNetboxCluster#cluster_group_id}
  */
  readonly clusterGroupId?: number;
  /**
  * At least one of `name`, `site_id` or `id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/cluster#id DataNetboxCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * At least one of `name`, `site_id` or `id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/cluster#name DataNetboxCluster#name}
  */
  readonly name?: string;
  /**
  * At least one of `name`, `site_id` or `id` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/cluster#site_id DataNetboxCluster#site_id}
  */
  readonly siteId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/cluster netbox_cluster}
*/
export class DataNetboxCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetboxCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetboxCluster to import
  * @param importFromId The id of the existing DataNetboxCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetboxCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/data-sources/cluster netbox_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetboxClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetboxClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netbox_cluster',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterGroupId = config.clusterGroupId;
    this._id = config.id;
    this._name = config.name;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_group_id - computed: true, optional: true, required: false
  private _clusterGroupId?: number; 
  public get clusterGroupId() {
    return this.getNumberAttribute('cluster_group_id');
  }
  public set clusterGroupId(value: number) {
    this._clusterGroupId = value;
  }
  public resetClusterGroupId() {
    this._clusterGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupIdInput() {
    return this._clusterGroupId;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }

  // cluster_type_id - computed: true, optional: false, required: false
  public get clusterTypeId() {
    return this.getNumberAttribute('cluster_type_id');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // custom_fields - computed: true, optional: false, required: false
  private _customFields = new cdktf.StringMap(this, "custom_fields");
  public get customFields() {
    return this._customFields;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getNumberAttribute('location_id');
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // scope_id - computed: true, optional: false, required: false
  public get scopeId() {
    return this.getNumberAttribute('scope_id');
  }

  // scope_type - computed: true, optional: false, required: false
  public get scopeType() {
    return this.getStringAttribute('scope_type');
  }

  // site_group_id - computed: true, optional: false, required: false
  public get siteGroupId() {
    return this.getNumberAttribute('site_group_id');
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_group_id: cdktf.numberToTerraform(this._clusterGroupId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      site_id: cdktf.numberToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_group_id: {
        value: cdktf.numberToHclTerraform(this._clusterGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
