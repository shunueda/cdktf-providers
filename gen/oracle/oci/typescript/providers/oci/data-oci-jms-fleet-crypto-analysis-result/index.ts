// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_crypto_analysis_result
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetCryptoAnalysisResultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_crypto_analysis_result#crypto_analysis_result_id DataOciJmsFleetCryptoAnalysisResult#crypto_analysis_result_id}
  */
  readonly cryptoAnalysisResultId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_crypto_analysis_result#fleet_id DataOciJmsFleetCryptoAnalysisResult#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_crypto_analysis_result#id DataOciJmsFleetCryptoAnalysisResult#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_crypto_analysis_result oci_jms_fleet_crypto_analysis_result}
*/
export class DataOciJmsFleetCryptoAnalysisResult extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_crypto_analysis_result";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResult resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetCryptoAnalysisResult to import
  * @param importFromId The id of the existing DataOciJmsFleetCryptoAnalysisResult that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_crypto_analysis_result#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetCryptoAnalysisResult to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_crypto_analysis_result", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_fleet_crypto_analysis_result oci_jms_fleet_crypto_analysis_result} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetCryptoAnalysisResultConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetCryptoAnalysisResultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_crypto_analysis_result',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cryptoAnalysisResultId = config.cryptoAnalysisResultId;
    this._fleetId = config.fleetId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_mode - computed: true, optional: false, required: false
  public get aggregationMode() {
    return this.getStringAttribute('aggregation_mode');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // crypto_analysis_result_id - computed: false, optional: false, required: true
  private _cryptoAnalysisResultId?: string; 
  public get cryptoAnalysisResultId() {
    return this.getStringAttribute('crypto_analysis_result_id');
  }
  public set cryptoAnalysisResultId(value: string) {
    this._cryptoAnalysisResultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoAnalysisResultIdInput() {
    return this._cryptoAnalysisResultId;
  }

  // crypto_roadmap_version - computed: true, optional: false, required: false
  public get cryptoRoadmapVersion() {
    return this.getStringAttribute('crypto_roadmap_version');
  }

  // finding_count - computed: true, optional: false, required: false
  public get findingCount() {
    return this.getNumberAttribute('finding_count');
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

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // non_compliant_finding_count - computed: true, optional: false, required: false
  public get nonCompliantFindingCount() {
    return this.getNumberAttribute('non_compliant_finding_count');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // summarized_event_count - computed: true, optional: false, required: false
  public get summarizedEventCount() {
    return this.getNumberAttribute('summarized_event_count');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_first_event - computed: true, optional: false, required: false
  public get timeFirstEvent() {
    return this.getStringAttribute('time_first_event');
  }

  // time_last_event - computed: true, optional: false, required: false
  public get timeLastEvent() {
    return this.getStringAttribute('time_last_event');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // total_event_count - computed: true, optional: false, required: false
  public get totalEventCount() {
    return this.getNumberAttribute('total_event_count');
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
      crypto_analysis_result_id: cdktf.stringToTerraform(this._cryptoAnalysisResultId),
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crypto_analysis_result_id: {
        value: cdktf.stringToHclTerraform(this._cryptoAnalysisResultId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
