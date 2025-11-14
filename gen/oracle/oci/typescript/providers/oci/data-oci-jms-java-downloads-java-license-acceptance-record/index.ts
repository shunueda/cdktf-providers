// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_downloads_java_license_acceptance_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_downloads_java_license_acceptance_record#java_license_acceptance_record_id DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecord#java_license_acceptance_record_id}
  */
  readonly javaLicenseAcceptanceRecordId: string;
}
export interface DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy {
}

export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByToTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByToHclTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedBy | undefined) {
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

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference {
    return new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy {
}

export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByToTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByToHclTerraform(struct?: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedBy | undefined) {
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

export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference {
    return new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_downloads_java_license_acceptance_record oci_jms_java_downloads_java_license_acceptance_record}
*/
export class DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_java_downloads_java_license_acceptance_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecord to import
  * @param importFromId The id of the existing DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_downloads_java_license_acceptance_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_java_downloads_java_license_acceptance_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_downloads_java_license_acceptance_record oci_jms_java_downloads_java_license_acceptance_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_java_downloads_java_license_acceptance_record',
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
    this._javaLicenseAcceptanceRecordId = config.javaLicenseAcceptanceRecordId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordCreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // java_license_acceptance_record_id - computed: false, optional: false, required: true
  private _javaLicenseAcceptanceRecordId?: string; 
  public get javaLicenseAcceptanceRecordId() {
    return this.getStringAttribute('java_license_acceptance_record_id');
  }
  public set javaLicenseAcceptanceRecordId(value: string) {
    this._javaLicenseAcceptanceRecordId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javaLicenseAcceptanceRecordIdInput() {
    return this._javaLicenseAcceptanceRecordId;
  }

  // last_updated_by - computed: true, optional: false, required: false
  private _lastUpdatedBy = new DataOciJmsJavaDownloadsJavaLicenseAcceptanceRecordLastUpdatedByList(this, "last_updated_by", false);
  public get lastUpdatedBy() {
    return this._lastUpdatedBy;
  }

  // license_acceptance_status - computed: true, optional: false, required: false
  public get licenseAcceptanceStatus() {
    return this.getStringAttribute('license_acceptance_status');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
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

  // time_accepted - computed: true, optional: false, required: false
  public get timeAccepted() {
    return this.getStringAttribute('time_accepted');
  }

  // time_last_updated - computed: true, optional: false, required: false
  public get timeLastUpdated() {
    return this.getStringAttribute('time_last_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      java_license_acceptance_record_id: cdktf.stringToTerraform(this._javaLicenseAcceptanceRecordId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      java_license_acceptance_record_id: {
        value: cdktf.stringToHclTerraform(this._javaLicenseAcceptanceRecordId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
