// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIotDigitalTwinInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_instance#digital_twin_instance_id DataOciIotDigitalTwinInstance#digital_twin_instance_id}
  */
  readonly digitalTwinInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_instance oci_iot_digital_twin_instance}
*/
export class DataOciIotDigitalTwinInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_digital_twin_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIotDigitalTwinInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIotDigitalTwinInstance to import
  * @param importFromId The id of the existing DataOciIotDigitalTwinInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIotDigitalTwinInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_digital_twin_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_instance oci_iot_digital_twin_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIotDigitalTwinInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIotDigitalTwinInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_digital_twin_instance',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digitalTwinInstanceId = config.digitalTwinInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_id - computed: true, optional: false, required: false
  public get authId() {
    return this.getStringAttribute('auth_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // digital_twin_adapter_id - computed: true, optional: false, required: false
  public get digitalTwinAdapterId() {
    return this.getStringAttribute('digital_twin_adapter_id');
  }

  // digital_twin_instance_id - computed: false, optional: false, required: true
  private _digitalTwinInstanceId?: string; 
  public get digitalTwinInstanceId() {
    return this.getStringAttribute('digital_twin_instance_id');
  }
  public set digitalTwinInstanceId(value: string) {
    this._digitalTwinInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinInstanceIdInput() {
    return this._digitalTwinInstanceId;
  }

  // digital_twin_model_id - computed: true, optional: false, required: false
  public get digitalTwinModelId() {
    return this.getStringAttribute('digital_twin_model_id');
  }

  // digital_twin_model_spec_uri - computed: true, optional: false, required: false
  public get digitalTwinModelSpecUri() {
    return this.getStringAttribute('digital_twin_model_spec_uri');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_key - computed: true, optional: false, required: false
  public get externalKey() {
    return this.getStringAttribute('external_key');
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

  // iot_domain_id - computed: true, optional: false, required: false
  public get iotDomainId() {
    return this.getStringAttribute('iot_domain_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digital_twin_instance_id: cdktf.stringToTerraform(this._digitalTwinInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digital_twin_instance_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
