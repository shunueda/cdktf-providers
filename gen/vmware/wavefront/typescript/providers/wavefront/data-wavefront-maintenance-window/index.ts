// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/maintenance_window
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWavefrontMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/maintenance_window#id DataWavefrontMaintenanceWindow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/maintenance_window wavefront_maintenance_window}
*/
export class DataWavefrontMaintenanceWindow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_maintenance_window";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWavefrontMaintenanceWindow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWavefrontMaintenanceWindow to import
  * @param importFromId The id of the existing DataWavefrontMaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/maintenance_window#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWavefrontMaintenanceWindow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_maintenance_window", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/maintenance_window wavefront_maintenance_window} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWavefrontMaintenanceWindowConfig
  */
  public constructor(scope: Construct, id: string, config: DataWavefrontMaintenanceWindowConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_maintenance_window',
      terraformGeneratorMetadata: {
        providerName: 'wavefront',
        providerVersion: '5.1.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_epoch_millis - computed: true, optional: false, required: false
  public get createdEpochMillis() {
    return this.getNumberAttribute('created_epoch_millis');
  }

  // creator_id - computed: true, optional: false, required: false
  public get creatorId() {
    return this.getStringAttribute('creator_id');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // end_time_in_seconds - computed: true, optional: false, required: false
  public get endTimeInSeconds() {
    return this.getNumberAttribute('end_time_in_seconds');
  }

  // event_name - computed: true, optional: false, required: false
  public get eventName() {
    return this.getStringAttribute('event_name');
  }

  // host_tag_group_host_names_group_anded - computed: true, optional: false, required: false
  public get hostTagGroupHostNamesGroupAnded() {
    return this.getBooleanAttribute('host_tag_group_host_names_group_anded');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // relevant_customer_tags - computed: true, optional: false, required: false
  public get relevantCustomerTags() {
    return this.getListAttribute('relevant_customer_tags');
  }

  // relevant_host_names - computed: true, optional: false, required: false
  public get relevantHostNames() {
    return this.getListAttribute('relevant_host_names');
  }

  // relevant_host_tags - computed: true, optional: false, required: false
  public get relevantHostTags() {
    return this.getListAttribute('relevant_host_tags');
  }

  // relevant_host_tags_anded - computed: true, optional: false, required: false
  public get relevantHostTagsAnded() {
    return this.getBooleanAttribute('relevant_host_tags_anded');
  }

  // running_state - computed: true, optional: false, required: false
  public get runningState() {
    return this.getStringAttribute('running_state');
  }

  // sort_attr - computed: true, optional: false, required: false
  public get sortAttr() {
    return this.getNumberAttribute('sort_attr');
  }

  // start_time_in_seconds - computed: true, optional: false, required: false
  public get startTimeInSeconds() {
    return this.getNumberAttribute('start_time_in_seconds');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_epoch_millis - computed: true, optional: false, required: false
  public get updatedEpochMillis() {
    return this.getNumberAttribute('updated_epoch_millis');
  }

  // updater_id - computed: true, optional: false, required: false
  public get updaterId() {
    return this.getStringAttribute('updater_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
