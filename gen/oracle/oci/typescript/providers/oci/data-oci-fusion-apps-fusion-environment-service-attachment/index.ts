// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment#fusion_environment_id DataOciFusionAppsFusionEnvironmentServiceAttachment#fusion_environment_id}
  */
  readonly fusionEnvironmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment#service_attachment_id DataOciFusionAppsFusionEnvironmentServiceAttachment#service_attachment_id}
  */
  readonly serviceAttachmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment oci_fusion_apps_fusion_environment_service_attachment}
*/
export class DataOciFusionAppsFusionEnvironmentServiceAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environment_service_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentServiceAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentServiceAttachment to import
  * @param importFromId The id of the existing DataOciFusionAppsFusionEnvironmentServiceAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentServiceAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fusion_apps_fusion_environment_service_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment oci_fusion_apps_fusion_environment_service_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environment_service_attachment',
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
    this._fusionEnvironmentId = config.fusionEnvironmentId;
    this._serviceAttachmentId = config.serviceAttachmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // fusion_environment_id - computed: false, optional: false, required: true
  private _fusionEnvironmentId?: string; 
  public get fusionEnvironmentId() {
    return this.getStringAttribute('fusion_environment_id');
  }
  public set fusionEnvironmentId(value: string) {
    this._fusionEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fusionEnvironmentIdInput() {
    return this._fusionEnvironmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_sku_based - computed: true, optional: false, required: false
  public get isSkuBased() {
    return this.getBooleanAttribute('is_sku_based');
  }

  // service_attachment_id - computed: false, optional: false, required: true
  private _serviceAttachmentId?: string; 
  public get serviceAttachmentId() {
    return this.getStringAttribute('service_attachment_id');
  }
  public set serviceAttachmentId(value: string) {
    this._serviceAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentIdInput() {
    return this._serviceAttachmentId;
  }

  // service_instance_id - computed: true, optional: false, required: false
  public get serviceInstanceId() {
    return this.getStringAttribute('service_instance_id');
  }

  // service_instance_type - computed: true, optional: false, required: false
  public get serviceInstanceType() {
    return this.getStringAttribute('service_instance_type');
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      fusion_environment_id: cdktf.stringToTerraform(this._fusionEnvironmentId),
      service_attachment_id: cdktf.stringToTerraform(this._serviceAttachmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fusion_environment_id: {
        value: cdktf.stringToHclTerraform(this._fusionEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_attachment_id: {
        value: cdktf.stringToHclTerraform(this._serviceAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
