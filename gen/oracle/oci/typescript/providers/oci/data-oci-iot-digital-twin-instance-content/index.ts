// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_instance_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIotDigitalTwinInstanceContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_instance_content#digital_twin_instance_id DataOciIotDigitalTwinInstanceContent#digital_twin_instance_id}
  */
  readonly digitalTwinInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_instance_content#id DataOciIotDigitalTwinInstanceContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_instance_content#should_include_metadata DataOciIotDigitalTwinInstanceContent#should_include_metadata}
  */
  readonly shouldIncludeMetadata?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_instance_content oci_iot_digital_twin_instance_content}
*/
export class DataOciIotDigitalTwinInstanceContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_digital_twin_instance_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIotDigitalTwinInstanceContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIotDigitalTwinInstanceContent to import
  * @param importFromId The id of the existing DataOciIotDigitalTwinInstanceContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_instance_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIotDigitalTwinInstanceContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_digital_twin_instance_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/iot_digital_twin_instance_content oci_iot_digital_twin_instance_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIotDigitalTwinInstanceContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIotDigitalTwinInstanceContentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_digital_twin_instance_content',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
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
    this._id = config.id;
    this._shouldIncludeMetadata = config.shouldIncludeMetadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // should_include_metadata - computed: false, optional: true, required: false
  private _shouldIncludeMetadata?: boolean | cdktf.IResolvable; 
  public get shouldIncludeMetadata() {
    return this.getBooleanAttribute('should_include_metadata');
  }
  public set shouldIncludeMetadata(value: boolean | cdktf.IResolvable) {
    this._shouldIncludeMetadata = value;
  }
  public resetShouldIncludeMetadata() {
    this._shouldIncludeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldIncludeMetadataInput() {
    return this._shouldIncludeMetadata;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digital_twin_instance_id: cdktf.stringToTerraform(this._digitalTwinInstanceId),
      id: cdktf.stringToTerraform(this._id),
      should_include_metadata: cdktf.booleanToTerraform(this._shouldIncludeMetadata),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      should_include_metadata: {
        value: cdktf.booleanToHclTerraform(this._shouldIncludeMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
