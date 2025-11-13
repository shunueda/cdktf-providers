// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfw_sync_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwSyncRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Firewall type; nat: nat firewall; ew: inter-vpc firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfw_sync_route#fw_type CfwSyncRoute#fw_type}
  */
  readonly fwType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfw_sync_route#id CfwSyncRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Synchronization operation type: Route, synchronize firewall routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfw_sync_route#sync_type CfwSyncRoute#sync_type}
  */
  readonly syncType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfw_sync_route tencentcloud_cfw_sync_route}
*/
export class CfwSyncRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfw_sync_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwSyncRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwSyncRoute to import
  * @param importFromId The id of the existing CfwSyncRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfw_sync_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwSyncRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfw_sync_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/cfw_sync_route tencentcloud_cfw_sync_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwSyncRouteConfig
  */
  public constructor(scope: Construct, id: string, config: CfwSyncRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfw_sync_route',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fwType = config.fwType;
    this._id = config.id;
    this._syncType = config.syncType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fw_type - computed: false, optional: true, required: false
  private _fwType?: string; 
  public get fwType() {
    return this.getStringAttribute('fw_type');
  }
  public set fwType(value: string) {
    this._fwType = value;
  }
  public resetFwType() {
    this._fwType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwTypeInput() {
    return this._fwType;
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

  // sync_type - computed: false, optional: false, required: true
  private _syncType?: string; 
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }
  public set syncType(value: string) {
    this._syncType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTypeInput() {
    return this._syncType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fw_type: cdktf.stringToTerraform(this._fwType),
      id: cdktf.stringToTerraform(this._id),
      sync_type: cdktf.stringToTerraform(this._syncType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fw_type: {
        value: cdktf.stringToHclTerraform(this._fwType),
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
      sync_type: {
        value: cdktf.stringToHclTerraform(this._syncType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
