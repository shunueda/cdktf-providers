// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/batch_batch_job_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBatchBatchJobPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/batch_batch_job_pool#batch_job_pool_id DataOciBatchBatchJobPool#batch_job_pool_id}
  */
  readonly batchJobPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/batch_batch_job_pool oci_batch_batch_job_pool}
*/
export class DataOciBatchBatchJobPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_batch_batch_job_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBatchBatchJobPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBatchBatchJobPool to import
  * @param importFromId The id of the existing DataOciBatchBatchJobPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/batch_batch_job_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBatchBatchJobPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_batch_batch_job_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/batch_batch_job_pool oci_batch_batch_job_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBatchBatchJobPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBatchBatchJobPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_batch_batch_job_pool',
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
    this._batchJobPoolId = config.batchJobPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_context_id - computed: true, optional: false, required: false
  public get batchContextId() {
    return this.getStringAttribute('batch_context_id');
  }

  // batch_job_pool_id - computed: false, optional: false, required: true
  private _batchJobPoolId?: string; 
  public get batchJobPoolId() {
    return this.getStringAttribute('batch_job_pool_id');
  }
  public set batchJobPoolId(value: string) {
    this._batchJobPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get batchJobPoolIdInput() {
    return this._batchJobPoolId;
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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
      batch_job_pool_id: cdktf.stringToTerraform(this._batchJobPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batch_job_pool_id: {
        value: cdktf.stringToHclTerraform(this._batchJobPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
