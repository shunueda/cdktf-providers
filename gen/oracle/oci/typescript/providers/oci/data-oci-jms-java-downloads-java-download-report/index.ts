// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_downloads_java_download_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsJavaDownloadsJavaDownloadReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_downloads_java_download_report#java_download_report_id DataOciJmsJavaDownloadsJavaDownloadReport#java_download_report_id}
  */
  readonly javaDownloadReportId: string;
}
export interface DataOciJmsJavaDownloadsJavaDownloadReportCreatedBy {
}

export function dataOciJmsJavaDownloadsJavaDownloadReportCreatedByToTerraform(struct?: DataOciJmsJavaDownloadsJavaDownloadReportCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaDownloadsJavaDownloadReportCreatedByToHclTerraform(struct?: DataOciJmsJavaDownloadsJavaDownloadReportCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaDownloadsJavaDownloadReportCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaDownloadsJavaDownloadReportCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaDownloadsJavaDownloadReportCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciJmsJavaDownloadsJavaDownloadReportCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaDownloadsJavaDownloadReportCreatedByOutputReference {
    return new DataOciJmsJavaDownloadsJavaDownloadReportCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_downloads_java_download_report oci_jms_java_downloads_java_download_report}
*/
export class DataOciJmsJavaDownloadsJavaDownloadReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_java_downloads_java_download_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaDownloadReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaDownloadReport to import
  * @param importFromId The id of the existing DataOciJmsJavaDownloadsJavaDownloadReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_downloads_java_download_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaDownloadReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_java_downloads_java_download_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_java_downloads_java_download_report oci_jms_java_downloads_java_download_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsJavaDownloadsJavaDownloadReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsJavaDownloadsJavaDownloadReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_java_downloads_java_download_report',
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
    this._javaDownloadReportId = config.javaDownloadReportId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum_type - computed: true, optional: false, required: false
  public get checksumType() {
    return this.getStringAttribute('checksum_type');
  }

  // checksum_value - computed: true, optional: false, required: false
  public get checksumValue() {
    return this.getStringAttribute('checksum_value');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataOciJmsJavaDownloadsJavaDownloadReportCreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
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

  // file_size_in_bytes - computed: true, optional: false, required: false
  public get fileSizeInBytes() {
    return this.getStringAttribute('file_size_in_bytes');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
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

  // java_download_report_id - computed: false, optional: false, required: true
  private _javaDownloadReportId?: string; 
  public get javaDownloadReportId() {
    return this.getStringAttribute('java_download_report_id');
  }
  public set javaDownloadReportId(value: string) {
    this._javaDownloadReportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javaDownloadReportIdInput() {
    return this._javaDownloadReportId;
  }

  // sort_by - computed: true, optional: false, required: false
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }

  // sort_order - computed: true, optional: false, required: false
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
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

  // time_end - computed: true, optional: false, required: false
  public get timeEnd() {
    return this.getStringAttribute('time_end');
  }

  // time_start - computed: true, optional: false, required: false
  public get timeStart() {
    return this.getStringAttribute('time_start');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      java_download_report_id: cdktf.stringToTerraform(this._javaDownloadReportId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      java_download_report_id: {
        value: cdktf.stringToHclTerraform(this._javaDownloadReportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
