// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslFreeCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify alias for remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#alias SslFreeCertificate#alias}
  */
  readonly alias?: string;
  /**
  * Email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#contact_email SslFreeCertificate#contact_email}
  */
  readonly contactEmail?: string;
  /**
  * Phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#contact_phone SslFreeCertificate#contact_phone}
  */
  readonly contactPhone?: string;
  /**
  * Specify CSR encrypt algorithm, only support `RSA` for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#csr_encrypt_algo SslFreeCertificate#csr_encrypt_algo}
  */
  readonly csrEncryptAlgo?: string;
  /**
  * Specify CSR key parameter, only support `"2048"` for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#csr_key_parameter SslFreeCertificate#csr_key_parameter}
  */
  readonly csrKeyParameter?: string;
  /**
  * Specify CSR key password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#csr_key_password SslFreeCertificate#csr_key_password}
  */
  readonly csrKeyPassword?: string;
  /**
  * Specify domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#domain SslFreeCertificate#domain}
  */
  readonly domain: string;
  /**
  * Specify DV authorize method. Available values: `DNS_AUTO` - automatic DNS auth, `DNS` - manual DNS auth, `FILE` - auth by file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#dv_auth_method SslFreeCertificate#dv_auth_method}
  */
  readonly dvAuthMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#id SslFreeCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify old certificate ID, used for re-apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#old_certificate_id SslFreeCertificate#old_certificate_id}
  */
  readonly oldCertificateId?: string;
  /**
  * Type of package. Only support `"83"` (TrustAsia TLS RSA CA).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#package_type SslFreeCertificate#package_type}
  */
  readonly packageType?: string;
  /**
  * ID of projects which this certification belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#project_id SslFreeCertificate#project_id}
  */
  readonly projectId?: number;
  /**
  * Specify validity period in month, only support `"3"` months for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#validity_period SslFreeCertificate#validity_period}
  */
  readonly validityPeriod?: string;
}
export interface SslFreeCertificateDvAuths {
}

export function sslFreeCertificateDvAuthsToTerraform(struct?: SslFreeCertificateDvAuths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sslFreeCertificateDvAuthsToHclTerraform(struct?: SslFreeCertificateDvAuths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SslFreeCertificateDvAuthsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslFreeCertificateDvAuths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslFreeCertificateDvAuths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dv_auth_key - computed: true, optional: false, required: false
  public get dvAuthKey() {
    return this.getStringAttribute('dv_auth_key');
  }

  // dv_auth_value - computed: true, optional: false, required: false
  public get dvAuthValue() {
    return this.getStringAttribute('dv_auth_value');
  }

  // dv_auth_verify_type - computed: true, optional: false, required: false
  public get dvAuthVerifyType() {
    return this.getStringAttribute('dv_auth_verify_type');
  }
}

export class SslFreeCertificateDvAuthsList extends cdktf.ComplexList {

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
  public get(index: number): SslFreeCertificateDvAuthsOutputReference {
    return new SslFreeCertificateDvAuthsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate tencentcloud_ssl_free_certificate}
*/
export class SslFreeCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_free_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslFreeCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslFreeCertificate to import
  * @param importFromId The id of the existing SslFreeCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslFreeCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_free_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/ssl_free_certificate tencentcloud_ssl_free_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslFreeCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SslFreeCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_free_certificate',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._contactEmail = config.contactEmail;
    this._contactPhone = config.contactPhone;
    this._csrEncryptAlgo = config.csrEncryptAlgo;
    this._csrKeyParameter = config.csrKeyParameter;
    this._csrKeyPassword = config.csrKeyPassword;
    this._domain = config.domain;
    this._dvAuthMethod = config.dvAuthMethod;
    this._id = config.id;
    this._oldCertificateId = config.oldCertificateId;
    this._packageType = config.packageType;
    this._projectId = config.projectId;
    this._validityPeriod = config.validityPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cert_begin_time - computed: true, optional: false, required: false
  public get certBeginTime() {
    return this.getStringAttribute('cert_begin_time');
  }

  // cert_end_time - computed: true, optional: false, required: false
  public get certEndTime() {
    return this.getStringAttribute('cert_end_time');
  }

  // certificate_private_key - computed: true, optional: false, required: false
  public get certificatePrivateKey() {
    return this.getStringAttribute('certificate_private_key');
  }

  // certificate_public_key - computed: true, optional: false, required: false
  public get certificatePublicKey() {
    return this.getStringAttribute('certificate_public_key');
  }

  // contact_email - computed: false, optional: true, required: false
  private _contactEmail?: string; 
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }
  public set contactEmail(value: string) {
    this._contactEmail = value;
  }
  public resetContactEmail() {
    this._contactEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailInput() {
    return this._contactEmail;
  }

  // contact_phone - computed: false, optional: true, required: false
  private _contactPhone?: string; 
  public get contactPhone() {
    return this.getStringAttribute('contact_phone');
  }
  public set contactPhone(value: string) {
    this._contactPhone = value;
  }
  public resetContactPhone() {
    this._contactPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPhoneInput() {
    return this._contactPhone;
  }

  // csr_encrypt_algo - computed: false, optional: true, required: false
  private _csrEncryptAlgo?: string; 
  public get csrEncryptAlgo() {
    return this.getStringAttribute('csr_encrypt_algo');
  }
  public set csrEncryptAlgo(value: string) {
    this._csrEncryptAlgo = value;
  }
  public resetCsrEncryptAlgo() {
    this._csrEncryptAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrEncryptAlgoInput() {
    return this._csrEncryptAlgo;
  }

  // csr_key_parameter - computed: false, optional: true, required: false
  private _csrKeyParameter?: string; 
  public get csrKeyParameter() {
    return this.getStringAttribute('csr_key_parameter');
  }
  public set csrKeyParameter(value: string) {
    this._csrKeyParameter = value;
  }
  public resetCsrKeyParameter() {
    this._csrKeyParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrKeyParameterInput() {
    return this._csrKeyParameter;
  }

  // csr_key_password - computed: false, optional: true, required: false
  private _csrKeyPassword?: string; 
  public get csrKeyPassword() {
    return this.getStringAttribute('csr_key_password');
  }
  public set csrKeyPassword(value: string) {
    this._csrKeyPassword = value;
  }
  public resetCsrKeyPassword() {
    this._csrKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrKeyPasswordInput() {
    return this._csrKeyPassword;
  }

  // deployable - computed: true, optional: false, required: false
  public get deployable() {
    return this.getBooleanAttribute('deployable');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dv_auth_method - computed: false, optional: false, required: true
  private _dvAuthMethod?: string; 
  public get dvAuthMethod() {
    return this.getStringAttribute('dv_auth_method');
  }
  public set dvAuthMethod(value: string) {
    this._dvAuthMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dvAuthMethodInput() {
    return this._dvAuthMethod;
  }

  // dv_auths - computed: true, optional: false, required: false
  private _dvAuths = new SslFreeCertificateDvAuthsList(this, "dv_auths", false);
  public get dvAuths() {
    return this._dvAuths;
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

  // insert_time - computed: true, optional: false, required: false
  public get insertTime() {
    return this.getStringAttribute('insert_time');
  }

  // old_certificate_id - computed: false, optional: true, required: false
  private _oldCertificateId?: string; 
  public get oldCertificateId() {
    return this.getStringAttribute('old_certificate_id');
  }
  public set oldCertificateId(value: string) {
    this._oldCertificateId = value;
  }
  public resetOldCertificateId() {
    this._oldCertificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldCertificateIdInput() {
    return this._oldCertificateId;
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // product_zh_name - computed: true, optional: false, required: false
  public get productZhName() {
    return this.getStringAttribute('product_zh_name');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // renewable - computed: true, optional: false, required: false
  public get renewable() {
    return this.getBooleanAttribute('renewable');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_msg - computed: true, optional: false, required: false
  public get statusMsg() {
    return this.getStringAttribute('status_msg');
  }

  // status_name - computed: true, optional: false, required: false
  public get statusName() {
    return this.getStringAttribute('status_name');
  }

  // validity_period - computed: false, optional: true, required: false
  private _validityPeriod?: string; 
  public get validityPeriod() {
    return this.getStringAttribute('validity_period');
  }
  public set validityPeriod(value: string) {
    this._validityPeriod = value;
  }
  public resetValidityPeriod() {
    this._validityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodInput() {
    return this._validityPeriod;
  }

  // vulnerability_status - computed: true, optional: false, required: false
  public get vulnerabilityStatus() {
    return this.getStringAttribute('vulnerability_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      contact_email: cdktf.stringToTerraform(this._contactEmail),
      contact_phone: cdktf.stringToTerraform(this._contactPhone),
      csr_encrypt_algo: cdktf.stringToTerraform(this._csrEncryptAlgo),
      csr_key_parameter: cdktf.stringToTerraform(this._csrKeyParameter),
      csr_key_password: cdktf.stringToTerraform(this._csrKeyPassword),
      domain: cdktf.stringToTerraform(this._domain),
      dv_auth_method: cdktf.stringToTerraform(this._dvAuthMethod),
      id: cdktf.stringToTerraform(this._id),
      old_certificate_id: cdktf.stringToTerraform(this._oldCertificateId),
      package_type: cdktf.stringToTerraform(this._packageType),
      project_id: cdktf.numberToTerraform(this._projectId),
      validity_period: cdktf.stringToTerraform(this._validityPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_email: {
        value: cdktf.stringToHclTerraform(this._contactEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_phone: {
        value: cdktf.stringToHclTerraform(this._contactPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_encrypt_algo: {
        value: cdktf.stringToHclTerraform(this._csrEncryptAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_key_parameter: {
        value: cdktf.stringToHclTerraform(this._csrKeyParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_key_password: {
        value: cdktf.stringToHclTerraform(this._csrKeyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dv_auth_method: {
        value: cdktf.stringToHclTerraform(this._dvAuthMethod),
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
      old_certificate_id: {
        value: cdktf.stringToHclTerraform(this._oldCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      validity_period: {
        value: cdktf.stringToHclTerraform(this._validityPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
