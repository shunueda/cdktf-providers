// https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/bundle_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BundleResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the access level to grant to this user. If omitted, the default access level name value (empty string) is used. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/bundle_resource#access_level_name BundleResource#access_level_name}
  */
  readonly accessLevelName?: string;
  /**
  * The remote ID of the access level to grant to this user. Required if the resource being added requires an access level. If omitted, the default access level remote ID value (empty string) is used. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/bundle_resource#access_level_remote_id BundleResource#access_level_remote_id}
  */
  readonly accessLevelRemoteId?: string;
  /**
  * The ID of the bundle. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/bundle_resource#bundle_id BundleResource#bundle_id}
  */
  readonly bundleId: string;
  /**
  * The ID of the resource to add. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/bundle_resource#resource_id BundleResource#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/bundle_resource opal_bundle_resource}
*/
export class BundleResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_bundle_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BundleResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BundleResource to import
  * @param importFromId The id of the existing BundleResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/bundle_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BundleResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_bundle_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.3.3/docs/resources/bundle_resource opal_bundle_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BundleResourceConfig
  */
  public constructor(scope: Construct, id: string, config: BundleResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_bundle_resource',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.3.3',
        providerVersionConstraint: '3.3.3'
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
    this._resourceId = config.resourceId;
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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level_name: cdktf.stringToTerraform(this._accessLevelName),
      access_level_remote_id: cdktf.stringToTerraform(this._accessLevelRemoteId),
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
