// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#___path___ SystemCertificate#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#___skip___ SystemCertificate#___skip___}
  */
  readonly skip?: string;
  /**
  * Common Name (e.g. server FQDN or YOUR name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#common_name SystemCertificate#common_name}
  */
  readonly commonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#copy_from SystemCertificate#copy_from}
  */
  readonly copyFrom?: string;
  /**
  * Country Name (2 letter code).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#country SystemCertificate#country}
  */
  readonly country?: string;
  /**
  * Certificate lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#days_valid SystemCertificate#days_valid}
  */
  readonly daysValid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#id SystemCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#key_size SystemCertificate#key_size}
  */
  readonly keySize?: string;
  /**
  * Detailed key usage descriptions can be found in RFC 5280.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#key_usage SystemCertificate#key_usage}
  */
  readonly keyUsage?: string[];
  /**
  * Locality Name (eg, city).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#locality SystemCertificate#locality}
  */
  readonly locality?: string;
  /**
  * Name of the certificate. Name can be edited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#name SystemCertificate#name}
  */
  readonly name: string;
  /**
  * Organizational Unit Name (eg, section)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#organization SystemCertificate#organization}
  */
  readonly organization?: string;
  /**
  * State or Province Name (full name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#state SystemCertificate#state}
  */
  readonly state?: string;
  /**
  * SANs (subject alternative names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#subject_alt_name SystemCertificate#subject_alt_name}
  */
  readonly subjectAltName?: string;
  /**
  * If set to yes certificate is included 'in trusted certificate chain'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#trusted SystemCertificate#trusted}
  */
  readonly trusted?: boolean | cdktf.IResolvable;
  /**
  * Organizational Unit Name (eg, section).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#unit SystemCertificate#unit}
  */
  readonly unit?: string;
  /**
  * import block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#import SystemCertificate#import}
  */
  readonly import?: SystemCertificateImport;
  /**
  * sign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#sign SystemCertificate#sign}
  */
  readonly sign?: SystemCertificateSign[] | cdktf.IResolvable;
  /**
  * sign_via_scep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#sign_via_scep SystemCertificate#sign_via_scep}
  */
  readonly signViaScep?: SystemCertificateSignViaScep[] | cdktf.IResolvable;
}
export interface SystemCertificateImport {
  /**
  * Certificate in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#cert_file_content SystemCertificate#cert_file_content}
  */
  readonly certFileContent?: string;
  /**
  * Certificate file name that will be imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#cert_file_name SystemCertificate#cert_file_name}
  */
  readonly certFileName?: string;
  /**
  * Key in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#key_file_content SystemCertificate#key_file_content}
  */
  readonly keyFileContent?: string;
  /**
  * Key file name that will be imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#key_file_name SystemCertificate#key_file_name}
  */
  readonly keyFileName?: string;
  /**
  * File passphrase if there is such.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#passphrase SystemCertificate#passphrase}
  */
  readonly passphrase?: string;
}

export function systemCertificateImportToTerraform(struct?: SystemCertificateImportOutputReference | SystemCertificateImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file_content: cdktf.stringToTerraform(struct!.certFileContent),
    cert_file_name: cdktf.stringToTerraform(struct!.certFileName),
    key_file_content: cdktf.stringToTerraform(struct!.keyFileContent),
    key_file_name: cdktf.stringToTerraform(struct!.keyFileName),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
  }
}


export function systemCertificateImportToHclTerraform(struct?: SystemCertificateImportOutputReference | SystemCertificateImport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file_content: {
      value: cdktf.stringToHclTerraform(struct!.certFileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file_name: {
      value: cdktf.stringToHclTerraform(struct!.certFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file_content: {
      value: cdktf.stringToHclTerraform(struct!.keyFileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file_name: {
      value: cdktf.stringToHclTerraform(struct!.keyFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCertificateImportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemCertificateImport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certFileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFileContent = this._certFileContent;
    }
    if (this._certFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFileName = this._certFileName;
    }
    if (this._keyFileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFileContent = this._keyFileContent;
    }
    if (this._keyFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFileName = this._keyFileName;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCertificateImport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certFileContent = undefined;
      this._certFileName = undefined;
      this._keyFileContent = undefined;
      this._keyFileName = undefined;
      this._passphrase = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certFileContent = value.certFileContent;
      this._certFileName = value.certFileName;
      this._keyFileContent = value.keyFileContent;
      this._keyFileName = value.keyFileName;
      this._passphrase = value.passphrase;
    }
  }

  // cert_file_content - computed: false, optional: true, required: false
  private _certFileContent?: string; 
  public get certFileContent() {
    return this.getStringAttribute('cert_file_content');
  }
  public set certFileContent(value: string) {
    this._certFileContent = value;
  }
  public resetCertFileContent() {
    this._certFileContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileContentInput() {
    return this._certFileContent;
  }

  // cert_file_name - computed: false, optional: true, required: false
  private _certFileName?: string; 
  public get certFileName() {
    return this.getStringAttribute('cert_file_name');
  }
  public set certFileName(value: string) {
    this._certFileName = value;
  }
  public resetCertFileName() {
    this._certFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileNameInput() {
    return this._certFileName;
  }

  // key_file_content - computed: false, optional: true, required: false
  private _keyFileContent?: string; 
  public get keyFileContent() {
    return this.getStringAttribute('key_file_content');
  }
  public set keyFileContent(value: string) {
    this._keyFileContent = value;
  }
  public resetKeyFileContent() {
    this._keyFileContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileContentInput() {
    return this._keyFileContent;
  }

  // key_file_name - computed: false, optional: true, required: false
  private _keyFileName?: string; 
  public get keyFileName() {
    return this.getStringAttribute('key_file_name');
  }
  public set keyFileName(value: string) {
    this._keyFileName = value;
  }
  public resetKeyFileName() {
    this._keyFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileNameInput() {
    return this._keyFileName;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }
}
export interface SystemCertificateSign {
  /**
  * Which CA to use if signing issued certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#ca SystemCertificate#ca}
  */
  readonly ca?: string;
  /**
  * CRL host if issuing CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#ca_crl_host SystemCertificate#ca_crl_host}
  */
  readonly caCrlHost?: string;
}

export function systemCertificateSignToTerraform(struct?: SystemCertificateSign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    ca_crl_host: cdktf.stringToTerraform(struct!.caCrlHost),
  }
}


export function systemCertificateSignToHclTerraform(struct?: SystemCertificateSign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: cdktf.stringToHclTerraform(struct!.ca),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_crl_host: {
      value: cdktf.stringToHclTerraform(struct!.caCrlHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCertificateSignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemCertificateSign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._caCrlHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCrlHost = this._caCrlHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCertificateSign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca = undefined;
      this._caCrlHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca = value.ca;
      this._caCrlHost = value.caCrlHost;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // ca_crl_host - computed: false, optional: true, required: false
  private _caCrlHost?: string; 
  public get caCrlHost() {
    return this.getStringAttribute('ca_crl_host');
  }
  public set caCrlHost(value: string) {
    this._caCrlHost = value;
  }
  public resetCaCrlHost() {
    this._caCrlHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCrlHostInput() {
    return this._caCrlHost;
  }
}

export class SystemCertificateSignList extends cdktf.ComplexList {
  public internalValue? : SystemCertificateSign[] | cdktf.IResolvable

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
  public get(index: number): SystemCertificateSignOutputReference {
    return new SystemCertificateSignOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemCertificateSignViaScep {
  /**
  * SCEP CA identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#ca_identity SystemCertificate#ca_identity}
  */
  readonly caIdentity?: string;
  /**
  * A challenge password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#challenge_password SystemCertificate#challenge_password}
  */
  readonly challengePassword?: string;
  /**
  * Whether to store a private key on smart card if hardware supports it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#on_smart_card SystemCertificate#on_smart_card}
  */
  readonly onSmartCard?: boolean | cdktf.IResolvable;
  /**
  * Check certificate expiration and refresh it if expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#refresh SystemCertificate#refresh}
  */
  readonly refresh?: boolean | cdktf.IResolvable;
  /**
  * HTTP URL to the SCEP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#scep_url SystemCertificate#scep_url}
  */
  readonly scepUrl: string;
}

export function systemCertificateSignViaScepToTerraform(struct?: SystemCertificateSignViaScep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_identity: cdktf.stringToTerraform(struct!.caIdentity),
    challenge_password: cdktf.stringToTerraform(struct!.challengePassword),
    on_smart_card: cdktf.booleanToTerraform(struct!.onSmartCard),
    refresh: cdktf.booleanToTerraform(struct!.refresh),
    scep_url: cdktf.stringToTerraform(struct!.scepUrl),
  }
}


export function systemCertificateSignViaScepToHclTerraform(struct?: SystemCertificateSignViaScep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_identity: {
      value: cdktf.stringToHclTerraform(struct!.caIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_password: {
      value: cdktf.stringToHclTerraform(struct!.challengePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_smart_card: {
      value: cdktf.booleanToHclTerraform(struct!.onSmartCard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh: {
      value: cdktf.booleanToHclTerraform(struct!.refresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scep_url: {
      value: cdktf.stringToHclTerraform(struct!.scepUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCertificateSignViaScepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemCertificateSignViaScep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.caIdentity = this._caIdentity;
    }
    if (this._challengePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengePassword = this._challengePassword;
    }
    if (this._onSmartCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSmartCard = this._onSmartCard;
    }
    if (this._refresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh;
    }
    if (this._scepUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.scepUrl = this._scepUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCertificateSignViaScep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caIdentity = undefined;
      this._challengePassword = undefined;
      this._onSmartCard = undefined;
      this._refresh = undefined;
      this._scepUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caIdentity = value.caIdentity;
      this._challengePassword = value.challengePassword;
      this._onSmartCard = value.onSmartCard;
      this._refresh = value.refresh;
      this._scepUrl = value.scepUrl;
    }
  }

  // ca_identity - computed: false, optional: true, required: false
  private _caIdentity?: string; 
  public get caIdentity() {
    return this.getStringAttribute('ca_identity');
  }
  public set caIdentity(value: string) {
    this._caIdentity = value;
  }
  public resetCaIdentity() {
    this._caIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdentityInput() {
    return this._caIdentity;
  }

  // challenge_password - computed: false, optional: true, required: false
  private _challengePassword?: string; 
  public get challengePassword() {
    return this.getStringAttribute('challenge_password');
  }
  public set challengePassword(value: string) {
    this._challengePassword = value;
  }
  public resetChallengePassword() {
    this._challengePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengePasswordInput() {
    return this._challengePassword;
  }

  // on_smart_card - computed: false, optional: true, required: false
  private _onSmartCard?: boolean | cdktf.IResolvable; 
  public get onSmartCard() {
    return this.getBooleanAttribute('on_smart_card');
  }
  public set onSmartCard(value: boolean | cdktf.IResolvable) {
    this._onSmartCard = value;
  }
  public resetOnSmartCard() {
    this._onSmartCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSmartCardInput() {
    return this._onSmartCard;
  }

  // refresh - computed: false, optional: true, required: false
  private _refresh?: boolean | cdktf.IResolvable; 
  public get refresh() {
    return this.getBooleanAttribute('refresh');
  }
  public set refresh(value: boolean | cdktf.IResolvable) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // scep_url - computed: false, optional: false, required: true
  private _scepUrl?: string; 
  public get scepUrl() {
    return this.getStringAttribute('scep_url');
  }
  public set scepUrl(value: string) {
    this._scepUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scepUrlInput() {
    return this._scepUrl;
  }
}

export class SystemCertificateSignViaScepList extends cdktf.ComplexList {
  public internalValue? : SystemCertificateSignViaScep[] | cdktf.IResolvable

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
  public get(index: number): SystemCertificateSignViaScepOutputReference {
    return new SystemCertificateSignViaScepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate routeros_system_certificate}
*/
export class SystemCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCertificate to import
  * @param importFromId The id of the existing SystemCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/system_certificate routeros_system_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SystemCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_certificate',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._commonName = config.commonName;
    this._copyFrom = config.copyFrom;
    this._country = config.country;
    this._daysValid = config.daysValid;
    this._id = config.id;
    this._keySize = config.keySize;
    this._keyUsage = config.keyUsage;
    this._locality = config.locality;
    this._name = config.name;
    this._organization = config.organization;
    this._state = config.state;
    this._subjectAltName = config.subjectAltName;
    this._trusted = config.trusted;
    this._unit = config.unit;
    this._import.internalValue = config.import;
    this._sign.internalValue = config.sign;
    this._signViaScep.internalValue = config.signViaScep;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // akid - computed: true, optional: false, required: false
  public get akid() {
    return this.getStringAttribute('akid');
  }

  // authority - computed: true, optional: false, required: false
  public get authority() {
    return this.getStringAttribute('authority');
  }

  // ca - computed: true, optional: false, required: false
  public get ca() {
    return this.getStringAttribute('ca');
  }

  // ca_crl_host - computed: true, optional: false, required: false
  public get caCrlHost() {
    return this.getStringAttribute('ca_crl_host');
  }

  // ca_fingerprint - computed: true, optional: false, required: false
  public get caFingerprint() {
    return this.getStringAttribute('ca_fingerprint');
  }

  // challenge_password - computed: true, optional: false, required: false
  public get challengePassword() {
    return this.getStringAttribute('challenge_password');
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // copy_from - computed: false, optional: true, required: false
  private _copyFrom?: string; 
  public get copyFrom() {
    return this.getStringAttribute('copy_from');
  }
  public set copyFrom(value: string) {
    this._copyFrom = value;
  }
  public resetCopyFrom() {
    this._copyFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyFromInput() {
    return this._copyFrom;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // crl - computed: true, optional: false, required: false
  public get crl() {
    return this.getStringAttribute('crl');
  }

  // days_valid - computed: false, optional: true, required: false
  private _daysValid?: number; 
  public get daysValid() {
    return this.getNumberAttribute('days_valid');
  }
  public set daysValid(value: number) {
    this._daysValid = value;
  }
  public resetDaysValid() {
    this._daysValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysValidInput() {
    return this._daysValid;
  }

  // digest_algorithm - computed: true, optional: false, required: false
  public get digestAlgorithm() {
    return this.getBooleanAttribute('digest_algorithm');
  }

  // dsa - computed: true, optional: false, required: false
  public get dsa() {
    return this.getBooleanAttribute('dsa');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // expires_after - computed: true, optional: false, required: false
  public get expiresAfter() {
    return this.getStringAttribute('expires_after');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // invalid_after - computed: true, optional: false, required: false
  public get invalidAfter() {
    return this.getStringAttribute('invalid_after');
  }

  // invalid_before - computed: true, optional: false, required: false
  public get invalidBefore() {
    return this.getStringAttribute('invalid_before');
  }

  // issued - computed: true, optional: false, required: false
  public get issued() {
    return this.getStringAttribute('issued');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: string; 
  public get keySize() {
    return this.getStringAttribute('key_size');
  }
  public set keySize(value: string) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage?: string[]; 
  public get keyUsage() {
    return cdktf.Fn.tolist(this.getListAttribute('key_usage'));
  }
  public set keyUsage(value: string[]) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getBooleanAttribute('private_key');
  }

  // req_fingerprint - computed: true, optional: false, required: false
  public get reqFingerprint() {
    return this.getStringAttribute('req_fingerprint');
  }

  // revoked - computed: true, optional: false, required: false
  public get revoked() {
    return this.getStringAttribute('revoked');
  }

  // scep_url - computed: true, optional: false, required: false
  public get scepUrl() {
    return this.getStringAttribute('scep_url');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // skid - computed: true, optional: false, required: false
  public get skid() {
    return this.getStringAttribute('skid');
  }

  // smart_card_key - computed: true, optional: false, required: false
  public get smartCardKey() {
    return this.getStringAttribute('smart_card_key');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alt_name - computed: false, optional: true, required: false
  private _subjectAltName?: string; 
  public get subjectAltName() {
    return this.getStringAttribute('subject_alt_name');
  }
  public set subjectAltName(value: string) {
    this._subjectAltName = value;
  }
  public resetSubjectAltName() {
    this._subjectAltName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNameInput() {
    return this._subjectAltName;
  }

  // trusted - computed: false, optional: true, required: false
  private _trusted?: boolean | cdktf.IResolvable; 
  public get trusted() {
    return this.getBooleanAttribute('trusted');
  }
  public set trusted(value: boolean | cdktf.IResolvable) {
    this._trusted = value;
  }
  public resetTrusted() {
    this._trusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedInput() {
    return this._trusted;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // import - computed: false, optional: true, required: false
  private _import = new SystemCertificateImportOutputReference(this, "import");
  public get import() {
    return this._import;
  }
  public putImport(value: SystemCertificateImport) {
    this._import.internalValue = value;
  }
  public resetImport() {
    this._import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import.internalValue;
  }

  // sign - computed: false, optional: true, required: false
  private _sign = new SystemCertificateSignList(this, "sign", true);
  public get sign() {
    return this._sign;
  }
  public putSign(value: SystemCertificateSign[] | cdktf.IResolvable) {
    this._sign.internalValue = value;
  }
  public resetSign() {
    this._sign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInput() {
    return this._sign.internalValue;
  }

  // sign_via_scep - computed: false, optional: true, required: false
  private _signViaScep = new SystemCertificateSignViaScepList(this, "sign_via_scep", true);
  public get signViaScep() {
    return this._signViaScep;
  }
  public putSignViaScep(value: SystemCertificateSignViaScep[] | cdktf.IResolvable) {
    this._signViaScep.internalValue = value;
  }
  public resetSignViaScep() {
    this._signViaScep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signViaScepInput() {
    return this._signViaScep.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      common_name: cdktf.stringToTerraform(this._commonName),
      copy_from: cdktf.stringToTerraform(this._copyFrom),
      country: cdktf.stringToTerraform(this._country),
      days_valid: cdktf.numberToTerraform(this._daysValid),
      id: cdktf.stringToTerraform(this._id),
      key_size: cdktf.stringToTerraform(this._keySize),
      key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyUsage),
      locality: cdktf.stringToTerraform(this._locality),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      state: cdktf.stringToTerraform(this._state),
      subject_alt_name: cdktf.stringToTerraform(this._subjectAltName),
      trusted: cdktf.booleanToTerraform(this._trusted),
      unit: cdktf.stringToTerraform(this._unit),
      import: systemCertificateImportToTerraform(this._import.internalValue),
      sign: cdktf.listMapper(systemCertificateSignToTerraform, true)(this._sign.internalValue),
      sign_via_scep: cdktf.listMapper(systemCertificateSignViaScepToTerraform, true)(this._signViaScep.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_from: {
        value: cdktf.stringToHclTerraform(this._copyFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      days_valid: {
        value: cdktf.numberToHclTerraform(this._daysValid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_size: {
        value: cdktf.stringToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_usage: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyUsage),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      locality: {
        value: cdktf.stringToHclTerraform(this._locality),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_alt_name: {
        value: cdktf.stringToHclTerraform(this._subjectAltName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted: {
        value: cdktf.booleanToHclTerraform(this._trusted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import: {
        value: systemCertificateImportToHclTerraform(this._import.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemCertificateImportList",
      },
      sign: {
        value: cdktf.listMapperHcl(systemCertificateSignToHclTerraform, true)(this._sign.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemCertificateSignList",
      },
      sign_via_scep: {
        value: cdktf.listMapperHcl(systemCertificateSignViaScepToHclTerraform, true)(this._signViaScep.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemCertificateSignViaScepList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
