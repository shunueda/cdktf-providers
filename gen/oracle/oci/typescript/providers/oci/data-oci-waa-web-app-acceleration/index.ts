// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waa_web_app_acceleration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWaaWebAppAccelerationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waa_web_app_acceleration#web_app_acceleration_id DataOciWaaWebAppAcceleration#web_app_acceleration_id}
  */
  readonly webAppAccelerationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waa_web_app_acceleration oci_waa_web_app_acceleration}
*/
export class DataOciWaaWebAppAcceleration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waa_web_app_acceleration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciWaaWebAppAcceleration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciWaaWebAppAcceleration to import
  * @param importFromId The id of the existing DataOciWaaWebAppAcceleration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waa_web_app_acceleration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciWaaWebAppAcceleration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_waa_web_app_acceleration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waa_web_app_acceleration oci_waa_web_app_acceleration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWaaWebAppAccelerationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWaaWebAppAccelerationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waa_web_app_acceleration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._webAppAccelerationId = config.webAppAccelerationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_type - computed: true, optional: false, required: false
  public get backendType() {
    return this.getStringAttribute('backend_type');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // web_app_acceleration_id - computed: false, optional: false, required: true
  private _webAppAccelerationId?: string; 
  public get webAppAccelerationId() {
    return this.getStringAttribute('web_app_acceleration_id');
  }
  public set webAppAccelerationId(value: string) {
    this._webAppAccelerationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppAccelerationIdInput() {
    return this._webAppAccelerationId;
  }

  // web_app_acceleration_policy_id - computed: true, optional: false, required: false
  public get webAppAccelerationPolicyId() {
    return this.getStringAttribute('web_app_acceleration_policy_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      web_app_acceleration_id: cdktf.stringToTerraform(this._webAppAccelerationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      web_app_acceleration_id: {
        value: cdktf.stringToHclTerraform(this._webAppAccelerationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
