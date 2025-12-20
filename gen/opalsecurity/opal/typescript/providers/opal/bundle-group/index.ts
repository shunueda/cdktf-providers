// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BundleGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the access level to grant to this user. If omitted, the default access level name value (empty string) is used. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle_group#access_level_name BundleGroup#access_level_name}
  */
  readonly accessLevelName?: string;
  /**
  * The remote ID of the access level to grant to this user. Required if the group being added requires an access level. If omitted, the default access level remote ID value (empty string) is used. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle_group#access_level_remote_id BundleGroup#access_level_remote_id}
  */
  readonly accessLevelRemoteId?: string;
  /**
  * The ID of the bundle. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle_group#bundle_id BundleGroup#bundle_id}
  */
  readonly bundleId: string;
  /**
  * The ID of the group to add. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle_group#group_id BundleGroup#group_id}
  */
  readonly groupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle_group opal_bundle_group}
*/
export class BundleGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_bundle_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BundleGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BundleGroup to import
  * @param importFromId The id of the existing BundleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BundleGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_bundle_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/bundle_group opal_bundle_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BundleGroupConfig
  */
  public constructor(scope: Construct, id: string, config: BundleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_bundle_group',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevelName = config.accessLevelName;
    this._accessLevelRemoteId = config.accessLevelRemoteId;
    this._bundleId = config.bundleId;
    this._groupId = config.groupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level_name - computed: true, optional: true, required: false
  private _accessLevelName?: string; 
  public get accessLevelName() {
    return this.getStringAttribute('access_level_name');
  }
  public set accessLevelName(value: string) {
    this._accessLevelName = value;
  }
  public resetAccessLevelName() {
    this._accessLevelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelNameInput() {
    return this._accessLevelName;
  }

  // access_level_remote_id - computed: true, optional: true, required: false
  private _accessLevelRemoteId?: string; 
  public get accessLevelRemoteId() {
    return this.getStringAttribute('access_level_remote_id');
  }
  public set accessLevelRemoteId(value: string) {
    this._accessLevelRemoteId = value;
  }
  public resetAccessLevelRemoteId() {
    this._accessLevelRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelRemoteIdInput() {
    return this._accessLevelRemoteId;
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level_name: cdktf.stringToTerraform(this._accessLevelName),
      access_level_remote_id: cdktf.stringToTerraform(this._accessLevelRemoteId),
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      group_id: cdktf.stringToTerraform(this._groupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level_name: {
        value: cdktf.stringToHclTerraform(this._accessLevelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_level_remote_id: {
        value: cdktf.stringToHclTerraform(this._accessLevelRemoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
