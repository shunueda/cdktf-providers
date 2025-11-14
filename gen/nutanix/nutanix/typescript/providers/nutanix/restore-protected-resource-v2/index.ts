// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/restore_protected_resource_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RestoreProtectedResourceV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/restore_protected_resource_v2#cluster_ext_id RestoreProtectedResourceV2#cluster_ext_id}
  */
  readonly clusterExtId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/restore_protected_resource_v2#ext_id RestoreProtectedResourceV2#ext_id}
  */
  readonly extId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/restore_protected_resource_v2#id RestoreProtectedResourceV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/restore_protected_resource_v2#restore_time RestoreProtectedResourceV2#restore_time}
  */
  readonly restoreTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/restore_protected_resource_v2 nutanix_restore_protected_resource_v2}
*/
export class RestoreProtectedResourceV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_restore_protected_resource_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RestoreProtectedResourceV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RestoreProtectedResourceV2 to import
  * @param importFromId The id of the existing RestoreProtectedResourceV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/restore_protected_resource_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RestoreProtectedResourceV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_restore_protected_resource_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/restore_protected_resource_v2 nutanix_restore_protected_resource_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RestoreProtectedResourceV2Config
  */
  public constructor(scope: Construct, id: string, config: RestoreProtectedResourceV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_restore_protected_resource_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterExtId = config.clusterExtId;
    this._extId = config.extId;
    this._id = config.id;
    this._restoreTime = config.restoreTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ext_id - computed: false, optional: false, required: true
  private _clusterExtId?: string; 
  public get clusterExtId() {
    return this.getStringAttribute('cluster_ext_id');
  }
  public set clusterExtId(value: string) {
    this._clusterExtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtIdInput() {
    return this._clusterExtId;
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
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

  // restore_time - computed: false, optional: true, required: false
  private _restoreTime?: string; 
  public get restoreTime() {
    return this.getStringAttribute('restore_time');
  }
  public set restoreTime(value: string) {
    this._restoreTime = value;
  }
  public resetRestoreTime() {
    this._restoreTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTimeInput() {
    return this._restoreTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_ext_id: cdktf.stringToTerraform(this._clusterExtId),
      ext_id: cdktf.stringToTerraform(this._extId),
      id: cdktf.stringToTerraform(this._id),
      restore_time: cdktf.stringToTerraform(this._restoreTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_ext_id: {
        value: cdktf.stringToHclTerraform(this._clusterExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
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
      restore_time: {
        value: cdktf.stringToHclTerraform(this._restoreTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
