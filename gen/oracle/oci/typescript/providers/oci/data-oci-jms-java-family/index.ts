// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsJavaFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_family#family_version DataOciJmsJavaFamily#family_version}
  */
  readonly familyVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_family#id DataOciJmsJavaFamily#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciJmsJavaFamilyLatestReleaseArtifacts {
}

export function dataOciJmsJavaFamilyLatestReleaseArtifactsToTerraform(struct?: DataOciJmsJavaFamilyLatestReleaseArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsJavaFamilyLatestReleaseArtifactsToHclTerraform(struct?: DataOciJmsJavaFamilyLatestReleaseArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsJavaFamilyLatestReleaseArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsJavaFamilyLatestReleaseArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approximate_file_size_in_bytes - computed: true, optional: false, required: false
  public get approximateFileSizeInBytes() {
    return this.getStringAttribute('approximate_file_size_in_bytes');
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // artifact_content_type - computed: true, optional: false, required: false
  public get artifactContentType() {
    return this.getStringAttribute('artifact_content_type');
  }

  // artifact_description - computed: true, optional: false, required: false
  public get artifactDescription() {
    return this.getStringAttribute('artifact_description');
  }

  // artifact_file_name - computed: true, optional: false, required: false
  public get artifactFileName() {
    return this.getStringAttribute('artifact_file_name');
  }

  // artifact_id - computed: true, optional: false, required: false
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }

  // download_url - computed: true, optional: false, required: false
  public get downloadUrl() {
    return this.getStringAttribute('download_url');
  }

  // os_family - computed: true, optional: false, required: false
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // package_type_detail - computed: true, optional: false, required: false
  public get packageTypeDetail() {
    return this.getStringAttribute('package_type_detail');
  }

  // script_checksum_url - computed: true, optional: false, required: false
  public get scriptChecksumUrl() {
    return this.getStringAttribute('script_checksum_url');
  }

  // script_download_url - computed: true, optional: false, required: false
  public get scriptDownloadUrl() {
    return this.getStringAttribute('script_download_url');
  }

  // sha256 - computed: true, optional: false, required: false
  public get sha256() {
    return this.getStringAttribute('sha256');
  }
}

export class DataOciJmsJavaFamilyLatestReleaseArtifactsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference {
    return new DataOciJmsJavaFamilyLatestReleaseArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_family oci_jms_java_family}
*/
export class DataOciJmsJavaFamily extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_java_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsJavaFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsJavaFamily to import
  * @param importFromId The id of the existing DataOciJmsJavaFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsJavaFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_java_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/jms_java_family oci_jms_java_family} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsJavaFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsJavaFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_java_family',
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
    this._familyVersion = config.familyVersion;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // doc_url - computed: true, optional: false, required: false
  public get docUrl() {
    return this.getStringAttribute('doc_url');
  }

  // end_of_support_life_date - computed: true, optional: false, required: false
  public get endOfSupportLifeDate() {
    return this.getStringAttribute('end_of_support_life_date');
  }

  // family_version - computed: false, optional: false, required: true
  private _familyVersion?: string; 
  public get familyVersion() {
    return this.getStringAttribute('family_version');
  }
  public set familyVersion(value: string) {
    this._familyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyVersionInput() {
    return this._familyVersion;
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

  // is_supported_version - computed: true, optional: false, required: false
  public get isSupportedVersion() {
    return this.getBooleanAttribute('is_supported_version');
  }

  // latest_release_artifacts - computed: true, optional: false, required: false
  private _latestReleaseArtifacts = new DataOciJmsJavaFamilyLatestReleaseArtifactsList(this, "latest_release_artifacts", false);
  public get latestReleaseArtifacts() {
    return this._latestReleaseArtifacts;
  }

  // latest_release_version - computed: true, optional: false, required: false
  public get latestReleaseVersion() {
    return this.getStringAttribute('latest_release_version');
  }

  // license_types - computed: true, optional: false, required: false
  public get licenseTypes() {
    return this.getListAttribute('license_types');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // support_type - computed: true, optional: false, required: false
  public get supportType() {
    return this.getStringAttribute('support_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      family_version: cdktf.stringToTerraform(this._familyVersion),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      family_version: {
        value: cdktf.stringToHclTerraform(this._familyVersion),
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
