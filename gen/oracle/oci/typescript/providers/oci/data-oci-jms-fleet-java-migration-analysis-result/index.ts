// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_java_migration_analysis_result
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetJavaMigrationAnalysisResultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_java_migration_analysis_result#fleet_id DataOciJmsFleetJavaMigrationAnalysisResult#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_java_migration_analysis_result#id DataOciJmsFleetJavaMigrationAnalysisResult#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_java_migration_analysis_result#java_migration_analysis_result_id DataOciJmsFleetJavaMigrationAnalysisResult#java_migration_analysis_result_id}
  */
  readonly javaMigrationAnalysisResultId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_java_migration_analysis_result oci_jms_fleet_java_migration_analysis_result}
*/
export class DataOciJmsFleetJavaMigrationAnalysisResult extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_java_migration_analysis_result";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetJavaMigrationAnalysisResult resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetJavaMigrationAnalysisResult to import
  * @param importFromId The id of the existing DataOciJmsFleetJavaMigrationAnalysisResult that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_java_migration_analysis_result#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetJavaMigrationAnalysisResult to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_java_migration_analysis_result", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_java_migration_analysis_result oci_jms_fleet_java_migration_analysis_result} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetJavaMigrationAnalysisResultConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetJavaMigrationAnalysisResultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_java_migration_analysis_result',
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
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._javaMigrationAnalysisResultId = config.javaMigrationAnalysisResultId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_execution_type - computed: true, optional: false, required: false
  public get applicationExecutionType() {
    return this.getStringAttribute('application_execution_type');
  }

  // application_key - computed: true, optional: false, required: false
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // application_path - computed: true, optional: false, required: false
  public get applicationPath() {
    return this.getStringAttribute('application_path');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
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

  // java_migration_analysis_result_id - computed: false, optional: false, required: true
  private _javaMigrationAnalysisResultId?: string; 
  public get javaMigrationAnalysisResultId() {
    return this.getStringAttribute('java_migration_analysis_result_id');
  }
  public set javaMigrationAnalysisResultId(value: string) {
    this._javaMigrationAnalysisResultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javaMigrationAnalysisResultIdInput() {
    return this._javaMigrationAnalysisResultId;
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.getStringAttribute('metadata');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object_list - computed: true, optional: false, required: false
  public get objectList() {
    return this.getListAttribute('object_list');
  }

  // object_storage_upload_dir_path - computed: true, optional: false, required: false
  public get objectStorageUploadDirPath() {
    return this.getStringAttribute('object_storage_upload_dir_path');
  }

  // source_jdk_version - computed: true, optional: false, required: false
  public get sourceJdkVersion() {
    return this.getStringAttribute('source_jdk_version');
  }

  // target_jdk_version - computed: true, optional: false, required: false
  public get targetJdkVersion() {
    return this.getStringAttribute('target_jdk_version');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
      java_migration_analysis_result_id: cdktf.stringToTerraform(this._javaMigrationAnalysisResultId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
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
      java_migration_analysis_result_id: {
        value: cdktf.stringToHclTerraform(this._javaMigrationAnalysisResultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
