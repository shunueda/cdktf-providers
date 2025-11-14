// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenerativeAiAgentDataIngestionJobLogContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#data_ingestion_job_id DataOciGenerativeAiAgentDataIngestionJobLogContent#data_ingestion_job_id}
  */
  readonly dataIngestionJobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#id DataOciGenerativeAiAgentDataIngestionJobLogContent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content oci_generative_ai_agent_data_ingestion_job_log_content}
*/
export class DataOciGenerativeAiAgentDataIngestionJobLogContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_agent_data_ingestion_job_log_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGenerativeAiAgentDataIngestionJobLogContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGenerativeAiAgentDataIngestionJobLogContent to import
  * @param importFromId The id of the existing DataOciGenerativeAiAgentDataIngestionJobLogContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGenerativeAiAgentDataIngestionJobLogContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_agent_data_ingestion_job_log_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content oci_generative_ai_agent_data_ingestion_job_log_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenerativeAiAgentDataIngestionJobLogContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGenerativeAiAgentDataIngestionJobLogContentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_agent_data_ingestion_job_log_content',
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
    this._dataIngestionJobId = config.dataIngestionJobId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_ingestion_job_id - computed: false, optional: false, required: true
  private _dataIngestionJobId?: string; 
  public get dataIngestionJobId() {
    return this.getStringAttribute('data_ingestion_job_id');
  }
  public set dataIngestionJobId(value: string) {
    this._dataIngestionJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIngestionJobIdInput() {
    return this._dataIngestionJobId;
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
      data_ingestion_job_id: cdktf.stringToTerraform(this._dataIngestionJobId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_ingestion_job_id: {
        value: cdktf.stringToHclTerraform(this._dataIngestionJobId),
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
