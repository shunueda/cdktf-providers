// https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_default_data_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaDefaultDataViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The data view identifier to set as default. NOTE: The API does not validate whether it is a valid identifier. Leave this unset (or explicitly `null`) to unset the default data view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_default_data_view#data_view_id KibanaDefaultDataView#data_view_id}
  */
  readonly dataViewId?: string;
  /**
  * Update an existing default data view identifier. If set to false and a default data view already exists, the operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_default_data_view#force KibanaDefaultDataView#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the default data view will not be unset when the resource is destroyed. The existing default data view will remain unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_default_data_view#skip_delete KibanaDefaultDataView#skip_delete}
  */
  readonly skipDelete?: boolean | cdktf.IResolvable;
  /**
  * The Kibana space ID to set the default data view in. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_default_data_view#space_id KibanaDefaultDataView#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_default_data_view elasticstack_kibana_default_data_view}
*/
export class KibanaDefaultDataView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_default_data_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaDefaultDataView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaDefaultDataView to import
  * @param importFromId The id of the existing KibanaDefaultDataView that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_default_data_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaDefaultDataView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_default_data_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_default_data_view elasticstack_kibana_default_data_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaDefaultDataViewConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KibanaDefaultDataViewConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_default_data_view',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataViewId = config.dataViewId;
    this._force = config.force;
    this._skipDelete = config.skipDelete;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_view_id - computed: false, optional: true, required: false
  private _dataViewId?: string; 
  public get dataViewId() {
    return this.getStringAttribute('data_view_id');
  }
  public set dataViewId(value: string) {
    this._dataViewId = value;
  }
  public resetDataViewId() {
    this._dataViewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataViewIdInput() {
    return this._dataViewId;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // skip_delete - computed: true, optional: true, required: false
  private _skipDelete?: boolean | cdktf.IResolvable; 
  public get skipDelete() {
    return this.getBooleanAttribute('skip_delete');
  }
  public set skipDelete(value: boolean | cdktf.IResolvable) {
    this._skipDelete = value;
  }
  public resetSkipDelete() {
    this._skipDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDeleteInput() {
    return this._skipDelete;
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
      data_view_id: cdktf.stringToTerraform(this._dataViewId),
      force: cdktf.booleanToTerraform(this._force),
      skip_delete: cdktf.booleanToTerraform(this._skipDelete),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_view_id: {
        value: cdktf.stringToHclTerraform(this._dataViewId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_delete: {
        value: cdktf.booleanToHclTerraform(this._skipDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
