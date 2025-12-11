// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_model_spec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciIotDigitalTwinModelSpecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_model_spec#digital_twin_model_id DataOciIotDigitalTwinModelSpec#digital_twin_model_id}
  */
  readonly digitalTwinModelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_model_spec#id DataOciIotDigitalTwinModelSpec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_model_spec oci_iot_digital_twin_model_spec}
*/
export class DataOciIotDigitalTwinModelSpec extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_iot_digital_twin_model_spec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciIotDigitalTwinModelSpec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciIotDigitalTwinModelSpec to import
  * @param importFromId The id of the existing DataOciIotDigitalTwinModelSpec that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_model_spec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciIotDigitalTwinModelSpec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_iot_digital_twin_model_spec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/iot_digital_twin_model_spec oci_iot_digital_twin_model_spec} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciIotDigitalTwinModelSpecConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciIotDigitalTwinModelSpecConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_iot_digital_twin_model_spec',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digitalTwinModelId = config.digitalTwinModelId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digital_twin_model_id - computed: false, optional: false, required: true
  private _digitalTwinModelId?: string; 
  public get digitalTwinModelId() {
    return this.getStringAttribute('digital_twin_model_id');
  }
  public set digitalTwinModelId(value: string) {
    this._digitalTwinModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalTwinModelIdInput() {
    return this._digitalTwinModelId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digital_twin_model_id: cdktf.stringToTerraform(this._digitalTwinModelId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digital_twin_model_id: {
        value: cdktf.stringToHclTerraform(this._digitalTwinModelId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
