// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_relationship
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIotDigitalTwinRelationshipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_relationship#digital_twin_relationship_id DataOciIotDigitalTwinRelationship#digital_twin_relationship_id}
  */
  readonly digitalTwinRelationshipId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_relationship oci_iot_digital_twin_relationship}
*/
export class DataOciIotDigitalTwinRelationship extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_digital_twin_relationship";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIotDigitalTwinRelationship resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIotDigitalTwinRelationship to import
  * @param importFromId The id of the existing DataOciIotDigitalTwinRelationship that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_relationship#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIotDigitalTwinRelationship to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_digital_twin_relationship", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/iot_digital_twin_relationship oci_iot_digital_twin_relationship} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIotDigitalTwinRelationshipConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIotDigitalTwinRelationshipConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_digital_twin_relationship',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digitalTwinRelationshipId = config.digitalTwinRelationshipId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_path - computed: true, optional: false, required: false
  public get contentPath() {
    return this.getStringAttribute('content_path');
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

  // digital_twin_relationship_id - computed: false, optional: false, required: true
  private _digitalTwinRelationshipId?: string; 
  public get digitalTwinRelationshipId() {
    return this.getStringAttribute('digital_twin_relationship_id');
  }
  public set digitalTwinRelationshipId(value: string) {
    this._digitalTwinRelationshipId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinRelationshipIdInput() {
    return this._digitalTwinRelationshipId;
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

  // iot_domain_id - computed: true, optional: false, required: false
  public get iotDomainId() {
    return this.getStringAttribute('iot_domain_id');
  }

  // source_digital_twin_instance_id - computed: true, optional: false, required: false
  public get sourceDigitalTwinInstanceId() {
    return this.getStringAttribute('source_digital_twin_instance_id');
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

  // target_digital_twin_instance_id - computed: true, optional: false, required: false
  public get targetDigitalTwinInstanceId() {
    return this.getStringAttribute('target_digital_twin_instance_id');
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
      digital_twin_relationship_id: cdktf.stringToTerraform(this._digitalTwinRelationshipId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digital_twin_relationship_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinRelationshipId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
