// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_scim_synchronization_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityCenterScimSynchronizationStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_scim_synchronization_status#id IdentityCenterScimSynchronizationStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SCIM synchronization status. Enabled-enabled. Disabled-disables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_scim_synchronization_status#scim_synchronization_status IdentityCenterScimSynchronizationStatus#scim_synchronization_status}
  */
  readonly scimSynchronizationStatus: string;
  /**
  * Space ID. z-prefix starts with 12 random digits/lowercase letters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_scim_synchronization_status#zone_id IdentityCenterScimSynchronizationStatus#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_scim_synchronization_status tencentcloud_identity_center_scim_synchronization_status}
*/
export class IdentityCenterScimSynchronizationStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_identity_center_scim_synchronization_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityCenterScimSynchronizationStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityCenterScimSynchronizationStatus to import
  * @param importFromId The id of the existing IdentityCenterScimSynchronizationStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_scim_synchronization_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityCenterScimSynchronizationStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_identity_center_scim_synchronization_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/identity_center_scim_synchronization_status tencentcloud_identity_center_scim_synchronization_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityCenterScimSynchronizationStatusConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityCenterScimSynchronizationStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_identity_center_scim_synchronization_status',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._scimSynchronizationStatus = config.scimSynchronizationStatus;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // scim_synchronization_status - computed: false, optional: false, required: true
  private _scimSynchronizationStatus?: string; 
  public get scimSynchronizationStatus() {
    return this.getStringAttribute('scim_synchronization_status');
  }
  public set scimSynchronizationStatus(value: string) {
    this._scimSynchronizationStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimSynchronizationStatusInput() {
    return this._scimSynchronizationStatus;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scim_synchronization_status: cdktf.stringToTerraform(this._scimSynchronizationStatus),
      zone_id: cdktf.stringToTerraform(this._zoneId),
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
      scim_synchronization_status: {
        value: cdktf.stringToHclTerraform(this._scimSynchronizationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
