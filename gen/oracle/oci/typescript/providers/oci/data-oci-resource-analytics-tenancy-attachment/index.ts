// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resource_analytics_tenancy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciResourceAnalyticsTenancyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resource_analytics_tenancy_attachment#tenancy_attachment_id DataOciResourceAnalyticsTenancyAttachment#tenancy_attachment_id}
  */
  readonly tenancyAttachmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resource_analytics_tenancy_attachment oci_resource_analytics_tenancy_attachment}
*/
export class DataOciResourceAnalyticsTenancyAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_resource_analytics_tenancy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciResourceAnalyticsTenancyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciResourceAnalyticsTenancyAttachment to import
  * @param importFromId The id of the existing DataOciResourceAnalyticsTenancyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resource_analytics_tenancy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciResourceAnalyticsTenancyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_resource_analytics_tenancy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/resource_analytics_tenancy_attachment oci_resource_analytics_tenancy_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciResourceAnalyticsTenancyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciResourceAnalyticsTenancyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resource_analytics_tenancy_attachment',
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
    this._tenancyAttachmentId = config.tenancyAttachmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_reporting_tenancy - computed: true, optional: false, required: false
  public get isReportingTenancy() {
    return this.getBooleanAttribute('is_reporting_tenancy');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // resource_analytics_instance_id - computed: true, optional: false, required: false
  public get resourceAnalyticsInstanceId() {
    return this.getStringAttribute('resource_analytics_instance_id');
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

  // tenancy_attachment_id - computed: false, optional: false, required: true
  private _tenancyAttachmentId?: string; 
  public get tenancyAttachmentId() {
    return this.getStringAttribute('tenancy_attachment_id');
  }
  public set tenancyAttachmentId(value: string) {
    this._tenancyAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenancyAttachmentIdInput() {
    return this._tenancyAttachmentId;
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
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
      tenancy_attachment_id: cdktf.stringToTerraform(this._tenancyAttachmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tenancy_attachment_id: {
        value: cdktf.stringToHclTerraform(this._tenancyAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
