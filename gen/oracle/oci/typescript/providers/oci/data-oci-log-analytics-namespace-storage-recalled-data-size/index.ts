// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#id DataOciLogAnalyticsNamespaceStorageRecalledDataSize#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#namespace DataOciLogAnalyticsNamespaceStorageRecalledDataSize#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_ended DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_ended}
  */
  readonly timeDataEnded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#time_data_started DataOciLogAnalyticsNamespaceStorageRecalledDataSize#time_data_started}
  */
  readonly timeDataStarted?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size oci_log_analytics_namespace_storage_recalled_data_size}
*/
export class DataOciLogAnalyticsNamespaceStorageRecalledDataSize extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_storage_recalled_data_size";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceStorageRecalledDataSize resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLogAnalyticsNamespaceStorageRecalledDataSize to import
  * @param importFromId The id of the existing DataOciLogAnalyticsNamespaceStorageRecalledDataSize that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLogAnalyticsNamespaceStorageRecalledDataSize to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_namespace_storage_recalled_data_size", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/log_analytics_namespace_storage_recalled_data_size oci_log_analytics_namespace_storage_recalled_data_size} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceStorageRecalledDataSizeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_storage_recalled_data_size',
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
    this._id = config.id;
    this._namespace = config.namespace;
    this._timeDataEnded = config.timeDataEnded;
    this._timeDataStarted = config.timeDataStarted;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // not_recalled_data_in_bytes - computed: true, optional: false, required: false
  public get notRecalledDataInBytes() {
    return this.getStringAttribute('not_recalled_data_in_bytes');
  }

  // recalled_data_in_bytes - computed: true, optional: false, required: false
  public get recalledDataInBytes() {
    return this.getStringAttribute('recalled_data_in_bytes');
  }

  // time_data_ended - computed: true, optional: true, required: false
  private _timeDataEnded?: string; 
  public get timeDataEnded() {
    return this.getStringAttribute('time_data_ended');
  }
  public set timeDataEnded(value: string) {
    this._timeDataEnded = value;
  }
  public resetTimeDataEnded() {
    this._timeDataEnded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeDataEndedInput() {
    return this._timeDataEnded;
  }

  // time_data_started - computed: true, optional: true, required: false
  private _timeDataStarted?: string; 
  public get timeDataStarted() {
    return this.getStringAttribute('time_data_started');
  }
  public set timeDataStarted(value: string) {
    this._timeDataStarted = value;
  }
  public resetTimeDataStarted() {
    this._timeDataStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeDataStartedInput() {
    return this._timeDataStarted;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      time_data_ended: cdktf.stringToTerraform(this._timeDataEnded),
      time_data_started: cdktf.stringToTerraform(this._timeDataStarted),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_data_ended: {
        value: cdktf.stringToHclTerraform(this._timeDataEnded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_data_started: {
        value: cdktf.stringToHclTerraform(this._timeDataStarted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
