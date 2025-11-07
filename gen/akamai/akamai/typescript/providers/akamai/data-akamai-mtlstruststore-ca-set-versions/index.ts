// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiMtlstruststoreCaSetVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, only the active versions of the CA set will be returned. The default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_versions#active_versions_only DataAkamaiMtlstruststoreCaSetVersions#active_versions_only}
  */
  readonly activeVersionsOnly?: boolean | cdktf.IResolvable;
  /**
  * Identifies each CA set. Either 'id' or 'name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_versions#id DataAkamaiMtlstruststoreCaSetVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If this option is set to true, the response includes certificates belonging to the version. The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_versions#include_certificates DataAkamaiMtlstruststoreCaSetVersions#include_certificates}
  */
  readonly includeCertificates?: boolean | cdktf.IResolvable;
  /**
  * The name of the CA set. Either 'id' or 'name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_versions#name DataAkamaiMtlstruststoreCaSetVersions#name}
  */
  readonly name?: string;
}
export interface DataAkamaiMtlstruststoreCaSetVersionsVersionsCertificates {
}

export function dataAkamaiMtlstruststoreCaSetVersionsVersionsCertificatesToTerraform(struct?: DataAkamaiMtlstruststoreCaSetVersionsVersionsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlstruststoreCaSetVersionsVersionsCertificatesToHclTerraform(struct?: DataAkamaiMtlstruststoreCaSetVersionsVersionsCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlstruststoreCaSetVersionsVersionsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiMtlstruststoreCaSetVersionsVersionsCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlstruststoreCaSetVersionsVersionsCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_pem - computed: true, optional: false, required: false
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }
}

export class DataAkamaiMtlstruststoreCaSetVersionsVersionsCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlstruststoreCaSetVersionsVersionsCertificatesOutputReference {
    return new DataAkamaiMtlstruststoreCaSetVersionsVersionsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiMtlstruststoreCaSetVersionsVersions {
}

export function dataAkamaiMtlstruststoreCaSetVersionsVersionsToTerraform(struct?: DataAkamaiMtlstruststoreCaSetVersionsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlstruststoreCaSetVersionsVersionsToHclTerraform(struct?: DataAkamaiMtlstruststoreCaSetVersionsVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlstruststoreCaSetVersionsVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiMtlstruststoreCaSetVersionsVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlstruststoreCaSetVersionsVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_insecure_sha1 - computed: true, optional: false, required: false
  public get allowInsecureSha1() {
    return this.getBooleanAttribute('allow_insecure_sha1');
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataAkamaiMtlstruststoreCaSetVersionsVersionsCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_date - computed: true, optional: false, required: false
  public get modifiedDate() {
    return this.getStringAttribute('modified_date');
  }

  // production_status - computed: true, optional: false, required: false
  public get productionStatus() {
    return this.getStringAttribute('production_status');
  }

  // staging_status - computed: true, optional: false, required: false
  public get stagingStatus() {
    return this.getStringAttribute('staging_status');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // version_description - computed: true, optional: false, required: false
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
}

export class DataAkamaiMtlstruststoreCaSetVersionsVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlstruststoreCaSetVersionsVersionsOutputReference {
    return new DataAkamaiMtlstruststoreCaSetVersionsVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_versions akamai_mtlstruststore_ca_set_versions}
*/
export class DataAkamaiMtlstruststoreCaSetVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_mtlstruststore_ca_set_versions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiMtlstruststoreCaSetVersions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiMtlstruststoreCaSetVersions to import
  * @param importFromId The id of the existing DataAkamaiMtlstruststoreCaSetVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_versions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiMtlstruststoreCaSetVersions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_mtlstruststore_ca_set_versions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_versions akamai_mtlstruststore_ca_set_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiMtlstruststoreCaSetVersionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiMtlstruststoreCaSetVersionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_mtlstruststore_ca_set_versions',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeVersionsOnly = config.activeVersionsOnly;
    this._id = config.id;
    this._includeCertificates = config.includeCertificates;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_versions_only - computed: false, optional: true, required: false
  private _activeVersionsOnly?: boolean | cdktf.IResolvable; 
  public get activeVersionsOnly() {
    return this.getBooleanAttribute('active_versions_only');
  }
  public set activeVersionsOnly(value: boolean | cdktf.IResolvable) {
    this._activeVersionsOnly = value;
  }
  public resetActiveVersionsOnly() {
    this._activeVersionsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeVersionsOnlyInput() {
    return this._activeVersionsOnly;
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

  // include_certificates - computed: false, optional: true, required: false
  private _includeCertificates?: boolean | cdktf.IResolvable; 
  public get includeCertificates() {
    return this.getBooleanAttribute('include_certificates');
  }
  public set includeCertificates(value: boolean | cdktf.IResolvable) {
    this._includeCertificates = value;
  }
  public resetIncludeCertificates() {
    this._includeCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCertificatesInput() {
    return this._includeCertificates;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new DataAkamaiMtlstruststoreCaSetVersionsVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_versions_only: cdktf.booleanToTerraform(this._activeVersionsOnly),
      id: cdktf.stringToTerraform(this._id),
      include_certificates: cdktf.booleanToTerraform(this._includeCertificates),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_versions_only: {
        value: cdktf.booleanToHclTerraform(this._activeVersionsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_certificates: {
        value: cdktf.booleanToHclTerraform(this._includeCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
