// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/vbs_inst_vbs_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciVbsInstVbsInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/vbs_inst_vbs_instance#vbs_instance_id DataOciVbsInstVbsInstance#vbs_instance_id}
  */
  readonly vbsInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/vbs_inst_vbs_instance oci_vbs_inst_vbs_instance}
*/
export class DataOciVbsInstVbsInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_vbs_inst_vbs_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciVbsInstVbsInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciVbsInstVbsInstance to import
  * @param importFromId The id of the existing DataOciVbsInstVbsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/vbs_inst_vbs_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciVbsInstVbsInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_vbs_inst_vbs_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/vbs_inst_vbs_instance oci_vbs_inst_vbs_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciVbsInstVbsInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciVbsInstVbsInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_vbs_inst_vbs_instance',
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
    this._vbsInstanceId = config.vbsInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // idcs_access_token - computed: true, optional: false, required: false
  public get idcsAccessToken() {
    return this.getStringAttribute('idcs_access_token');
  }

  // is_resource_usage_agreement_granted - computed: true, optional: false, required: false
  public get isResourceUsageAgreementGranted() {
    return this.getBooleanAttribute('is_resource_usage_agreement_granted');
  }

  // lifecyle_details - computed: true, optional: false, required: false
  public get lifecyleDetails() {
    return this.getStringAttribute('lifecyle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_compartment_id - computed: true, optional: false, required: false
  public get resourceCompartmentId() {
    return this.getStringAttribute('resource_compartment_id');
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

  // vbs_access_url - computed: true, optional: false, required: false
  public get vbsAccessUrl() {
    return this.getStringAttribute('vbs_access_url');
  }

  // vbs_instance_id - computed: false, optional: false, required: true
  private _vbsInstanceId?: string; 
  public get vbsInstanceId() {
    return this.getStringAttribute('vbs_instance_id');
  }
  public set vbsInstanceId(value: string) {
    this._vbsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vbsInstanceIdInput() {
    return this._vbsInstanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      vbs_instance_id: cdktf.stringToTerraform(this._vbsInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      vbs_instance_id: {
        value: cdktf.stringToHclTerraform(this._vbsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
