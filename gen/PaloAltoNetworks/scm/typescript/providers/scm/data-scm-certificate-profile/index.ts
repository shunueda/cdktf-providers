// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/certificate_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmCertificateProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/certificate_profile#id DataScmCertificateProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the certificate profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/certificate_profile#name DataScmCertificateProfile#name}
  */
  readonly name?: string;
}
export interface DataScmCertificateProfileCaCertificates {
}

export function dataScmCertificateProfileCaCertificatesToTerraform(struct?: DataScmCertificateProfileCaCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmCertificateProfileCaCertificatesToHclTerraform(struct?: DataScmCertificateProfileCaCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmCertificateProfileCaCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmCertificateProfileCaCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmCertificateProfileCaCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_ocsp_url - computed: true, optional: false, required: false
  public get defaultOcspUrl() {
    return this.getStringAttribute('default_ocsp_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ocsp_verify_cert - computed: true, optional: false, required: false
  public get ocspVerifyCert() {
    return this.getStringAttribute('ocsp_verify_cert');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
}

export class DataScmCertificateProfileCaCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataScmCertificateProfileCaCertificatesOutputReference {
    return new DataScmCertificateProfileCaCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmCertificateProfileUsernameField {
}

export function dataScmCertificateProfileUsernameFieldToTerraform(struct?: DataScmCertificateProfileUsernameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmCertificateProfileUsernameFieldToHclTerraform(struct?: DataScmCertificateProfileUsernameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmCertificateProfileUsernameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmCertificateProfileUsernameField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmCertificateProfileUsernameField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subject_alt - computed: true, optional: false, required: false
  public get subjectAlt() {
    return this.getStringAttribute('subject_alt');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/certificate_profile scm_certificate_profile}
*/
export class DataScmCertificateProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_certificate_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmCertificateProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmCertificateProfile to import
  * @param importFromId The id of the existing DataScmCertificateProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/certificate_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmCertificateProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_certificate_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/certificate_profile scm_certificate_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmCertificateProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmCertificateProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_certificate_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_expired_cert - computed: true, optional: false, required: false
  public get blockExpiredCert() {
    return this.getBooleanAttribute('block_expired_cert');
  }

  // block_timeout_cert - computed: true, optional: false, required: false
  public get blockTimeoutCert() {
    return this.getBooleanAttribute('block_timeout_cert');
  }

  // block_unauthenticated_cert - computed: true, optional: false, required: false
  public get blockUnauthenticatedCert() {
    return this.getBooleanAttribute('block_unauthenticated_cert');
  }

  // block_unknown_cert - computed: true, optional: false, required: false
  public get blockUnknownCert() {
    return this.getBooleanAttribute('block_unknown_cert');
  }

  // ca_certificates - computed: true, optional: false, required: false
  private _caCertificates = new DataScmCertificateProfileCaCertificatesList(this, "ca_certificates", false);
  public get caCertificates() {
    return this._caCertificates;
  }

  // cert_status_timeout - computed: true, optional: false, required: false
  public get certStatusTimeout() {
    return this.getStringAttribute('cert_status_timeout');
  }

  // crl_receive_timeout - computed: true, optional: false, required: false
  public get crlReceiveTimeout() {
    return this.getStringAttribute('crl_receive_timeout');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
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

  // ocsp_receive_timeout - computed: true, optional: false, required: false
  public get ocspReceiveTimeout() {
    return this.getStringAttribute('ocsp_receive_timeout');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // use_crl - computed: true, optional: false, required: false
  public get useCrl() {
    return this.getBooleanAttribute('use_crl');
  }

  // use_ocsp - computed: true, optional: false, required: false
  public get useOcsp() {
    return this.getBooleanAttribute('use_ocsp');
  }

  // username_field - computed: true, optional: false, required: false
  private _usernameField = new DataScmCertificateProfileUsernameFieldOutputReference(this, "username_field");
  public get usernameField() {
    return this._usernameField;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
