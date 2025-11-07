// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiMtlstruststoreCaSetCertificatesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies each CA set. Either 'id' or 'name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates#id DataAkamaiMtlstruststoreCaSetCertificatesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When true, returns all active (not expired) certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates#include_active DataAkamaiMtlstruststoreCaSetCertificatesA#include_active}
  */
  readonly includeActive?: boolean | cdktf.IResolvable;
  /**
  * When true, returns all expired certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates#include_expired DataAkamaiMtlstruststoreCaSetCertificatesA#include_expired}
  */
  readonly includeExpired?: boolean | cdktf.IResolvable;
  /**
  * When provided it returns certificates that will expire by the specified date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates#include_expiring_by_date DataAkamaiMtlstruststoreCaSetCertificatesA#include_expiring_by_date}
  */
  readonly includeExpiringByDate?: string;
  /**
  * When provided it returns certificates that will expire within the specified number of days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates#include_expiring_in_days DataAkamaiMtlstruststoreCaSetCertificatesA#include_expiring_in_days}
  */
  readonly includeExpiringInDays?: number;
  /**
  * The name of the CA set. Either 'id' or 'name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates#name DataAkamaiMtlstruststoreCaSetCertificatesA#name}
  */
  readonly name?: string;
  /**
  * Version identifier of the CA Set. If not provided, the latest version is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates#version DataAkamaiMtlstruststoreCaSetCertificatesA#version}
  */
  readonly version?: number;
}
export interface DataAkamaiMtlstruststoreCaSetCertificatesCertificates {
}

export function dataAkamaiMtlstruststoreCaSetCertificatesCertificatesToTerraform(struct?: DataAkamaiMtlstruststoreCaSetCertificatesCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiMtlstruststoreCaSetCertificatesCertificatesToHclTerraform(struct?: DataAkamaiMtlstruststoreCaSetCertificatesCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiMtlstruststoreCaSetCertificatesCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiMtlstruststoreCaSetCertificatesCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiMtlstruststoreCaSetCertificatesCertificates | undefined) {
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

export class DataAkamaiMtlstruststoreCaSetCertificatesCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiMtlstruststoreCaSetCertificatesCertificatesOutputReference {
    return new DataAkamaiMtlstruststoreCaSetCertificatesCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates akamai_mtlstruststore_ca_set_certificates}
*/
export class DataAkamaiMtlstruststoreCaSetCertificatesA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_mtlstruststore_ca_set_certificates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiMtlstruststoreCaSetCertificatesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiMtlstruststoreCaSetCertificatesA to import
  * @param importFromId The id of the existing DataAkamaiMtlstruststoreCaSetCertificatesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiMtlstruststoreCaSetCertificatesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_mtlstruststore_ca_set_certificates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/mtlstruststore_ca_set_certificates akamai_mtlstruststore_ca_set_certificates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiMtlstruststoreCaSetCertificatesAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiMtlstruststoreCaSetCertificatesAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_mtlstruststore_ca_set_certificates',
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
    this._id = config.id;
    this._includeActive = config.includeActive;
    this._includeExpired = config.includeExpired;
    this._includeExpiringByDate = config.includeExpiringByDate;
    this._includeExpiringInDays = config.includeExpiringInDays;
    this._name = config.name;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataAkamaiMtlstruststoreCaSetCertificatesCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
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

  // include_active - computed: false, optional: true, required: false
  private _includeActive?: boolean | cdktf.IResolvable; 
  public get includeActive() {
    return this.getBooleanAttribute('include_active');
  }
  public set includeActive(value: boolean | cdktf.IResolvable) {
    this._includeActive = value;
  }
  public resetIncludeActive() {
    this._includeActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeActiveInput() {
    return this._includeActive;
  }

  // include_expired - computed: false, optional: true, required: false
  private _includeExpired?: boolean | cdktf.IResolvable; 
  public get includeExpired() {
    return this.getBooleanAttribute('include_expired');
  }
  public set includeExpired(value: boolean | cdktf.IResolvable) {
    this._includeExpired = value;
  }
  public resetIncludeExpired() {
    this._includeExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExpiredInput() {
    return this._includeExpired;
  }

  // include_expiring_by_date - computed: false, optional: true, required: false
  private _includeExpiringByDate?: string; 
  public get includeExpiringByDate() {
    return this.getStringAttribute('include_expiring_by_date');
  }
  public set includeExpiringByDate(value: string) {
    this._includeExpiringByDate = value;
  }
  public resetIncludeExpiringByDate() {
    this._includeExpiringByDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExpiringByDateInput() {
    return this._includeExpiringByDate;
  }

  // include_expiring_in_days - computed: false, optional: true, required: false
  private _includeExpiringInDays?: number; 
  public get includeExpiringInDays() {
    return this.getNumberAttribute('include_expiring_in_days');
  }
  public set includeExpiringInDays(value: number) {
    this._includeExpiringInDays = value;
  }
  public resetIncludeExpiringInDays() {
    this._includeExpiringInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExpiringInDaysInput() {
    return this._includeExpiringInDays;
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

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_active: cdktf.booleanToTerraform(this._includeActive),
      include_expired: cdktf.booleanToTerraform(this._includeExpired),
      include_expiring_by_date: cdktf.stringToTerraform(this._includeExpiringByDate),
      include_expiring_in_days: cdktf.numberToTerraform(this._includeExpiringInDays),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.numberToTerraform(this._version),
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
      include_active: {
        value: cdktf.booleanToHclTerraform(this._includeActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_expired: {
        value: cdktf.booleanToHclTerraform(this._includeExpired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_expiring_by_date: {
        value: cdktf.stringToHclTerraform(this._includeExpiringByDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_expiring_in_days: {
        value: cdktf.numberToHclTerraform(this._includeExpiringInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
