// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_export_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsFleetExportSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_export_setting#fleet_id DataOciJmsFleetExportSetting#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_export_setting#id DataOciJmsFleetExportSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciJmsFleetExportSettingExportDataFilters {
}

export function dataOciJmsFleetExportSettingExportDataFiltersToTerraform(struct?: DataOciJmsFleetExportSettingExportDataFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsFleetExportSettingExportDataFiltersToHclTerraform(struct?: DataOciJmsFleetExportSettingExportDataFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsFleetExportSettingExportDataFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciJmsFleetExportSettingExportDataFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsFleetExportSettingExportDataFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_name_contains - computed: true, optional: false, required: false
  public get applicationNameContains() {
    return this.getListAttribute('application_name_contains');
  }

  // application_name_equal_to - computed: true, optional: false, required: false
  public get applicationNameEqualTo() {
    return this.getListAttribute('application_name_equal_to');
  }

  // java_major_versions - computed: true, optional: false, required: false
  public get javaMajorVersions() {
    return this.getListAttribute('java_major_versions');
  }

  // java_vendors - computed: true, optional: false, required: false
  public get javaVendors() {
    return this.getListAttribute('java_vendors');
  }

  // java_versions - computed: true, optional: false, required: false
  public get javaVersions() {
    return this.getListAttribute('java_versions');
  }

  // security_statuses - computed: true, optional: false, required: false
  public get securityStatuses() {
    return this.getListAttribute('security_statuses');
  }
}

export class DataOciJmsFleetExportSettingExportDataFiltersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciJmsFleetExportSettingExportDataFiltersOutputReference {
    return new DataOciJmsFleetExportSettingExportDataFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_export_setting oci_jms_fleet_export_setting}
*/
export class DataOciJmsFleetExportSetting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_fleet_export_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsFleetExportSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsFleetExportSetting to import
  * @param importFromId The id of the existing DataOciJmsFleetExportSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_export_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsFleetExportSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_fleet_export_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/jms_fleet_export_setting oci_jms_fleet_export_setting} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsFleetExportSettingConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsFleetExportSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_fleet_export_setting',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_data_filters - computed: true, optional: false, required: false
  private _exportDataFilters = new DataOciJmsFleetExportSettingExportDataFiltersList(this, "export_data_filters", false);
  public get exportDataFilters() {
    return this._exportDataFilters;
  }

  // export_duration - computed: true, optional: false, required: false
  public get exportDuration() {
    return this.getStringAttribute('export_duration');
  }

  // export_frequency - computed: true, optional: false, required: false
  public get exportFrequency() {
    return this.getStringAttribute('export_frequency');
  }

  // export_resources - computed: true, optional: false, required: false
  public get exportResources() {
    return this.getStringAttribute('export_resources');
  }

  // export_setting_key - computed: true, optional: false, required: false
  public get exportSettingKey() {
    return this.getStringAttribute('export_setting_key');
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

  // is_cross_region_acknowledged - computed: true, optional: false, required: false
  public get isCrossRegionAcknowledged() {
    return this.getBooleanAttribute('is_cross_region_acknowledged');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // target_bucket_name - computed: true, optional: false, required: false
  public get targetBucketName() {
    return this.getStringAttribute('target_bucket_name');
  }

  // target_bucket_namespace - computed: true, optional: false, required: false
  public get targetBucketNamespace() {
    return this.getStringAttribute('target_bucket_namespace');
  }

  // target_bucket_region - computed: true, optional: false, required: false
  public get targetBucketRegion() {
    return this.getStringAttribute('target_bucket_region');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_modified - computed: true, optional: false, required: false
  public get timeLastModified() {
    return this.getStringAttribute('time_last_modified');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
