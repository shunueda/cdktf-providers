// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#api_key Datastore#api_key}
  */
  readonly apiKey?: string;
  /**
  * Detailed description of the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#description Datastore#description}
  */
  readonly description?: string;
  /**
  * Datastore Fully Qualified Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#ds_fqdn Datastore#ds_fqdn}
  */
  readonly dsFqdn: string;
  /**
  * Datastore relative path w.r.t. Datastore root
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#ds_path Datastore#ds_path}
  */
  readonly dsPath?: string;
  /**
  * Datastore status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#ds_status Datastore#ds_status}
  */
  readonly dsStatus?: string;
  /**
  * Datastore type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#ds_type Datastore#ds_type}
  */
  readonly dsType: string;
  /**
  * User defined name of the datastore, unique across the enterprise. Once datastore is created, name can’t be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#name Datastore#name}
  */
  readonly name: string;
  /**
  * knob for sending creds in clear text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#need_clear_text Datastore#need_clear_text}
  */
  readonly needClearText?: boolean | cdktf.IResolvable;
  /**
  * project access list of the datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#project_access_list Datastore#project_access_list}
  */
  readonly projectAccessList?: string[];
  /**
  * Datastore region - valid for AWS S3 and Azure BlobStorage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#region Datastore#region}
  */
  readonly region?: string;
  /**
  * User defined title of the datastore. Title can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#title Datastore#title}
  */
  readonly title: string;
  /**
  * certificate_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#certificate_chain Datastore#certificate_chain}
  */
  readonly certificateChain?: DatastoreCertificateChain[] | cdktf.IResolvable;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#revision Datastore#revision}
  */
  readonly revision?: DatastoreRevision[] | cdktf.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#secret Datastore#secret}
  */
  readonly secret?: DatastoreSecret[] | cdktf.IResolvable;
}
export interface DatastoreCertificateChainCertificatesEcdsaEncryption {
  /**
  * ECDSA curve to be used while signing the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#curve Datastore#curve}
  */
  readonly curve?: string;
}

export function datastoreCertificateChainCertificatesEcdsaEncryptionToTerraform(struct?: DatastoreCertificateChainCertificatesEcdsaEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curve: cdktf.stringToTerraform(struct!.curve),
  }
}


export function datastoreCertificateChainCertificatesEcdsaEncryptionToHclTerraform(struct?: DatastoreCertificateChainCertificatesEcdsaEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curve: {
      value: cdktf.stringToHclTerraform(struct!.curve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreCertificateChainCertificatesEcdsaEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreCertificateChainCertificatesEcdsaEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curve !== undefined) {
      hasAnyValues = true;
      internalValueResult.curve = this._curve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreCertificateChainCertificatesEcdsaEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curve = value.curve;
    }
  }

  // curve - computed: false, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }
}

export class DatastoreCertificateChainCertificatesEcdsaEncryptionList extends cdktf.ComplexList {
  public internalValue? : DatastoreCertificateChainCertificatesEcdsaEncryption[] | cdktf.IResolvable

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
  public get(index: number): DatastoreCertificateChainCertificatesEcdsaEncryptionOutputReference {
    return new DatastoreCertificateChainCertificatesEcdsaEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreCertificateChainCertificatesIssuer {
  /**
  * Certificate common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#common_name Datastore#common_name}
  */
  readonly commonName?: string;
  /**
  * List of countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#country Datastore#country}
  */
  readonly country?: string[];
  /**
  * List of locallity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#locality Datastore#locality}
  */
  readonly locality?: string[];
  /**
  * List of organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#organization Datastore#organization}
  */
  readonly organization?: string[];
  /**
  * List of Organizational Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#organizational_unit Datastore#organizational_unit}
  */
  readonly organizationalUnit?: string[];
  /**
  * List of Postal codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#postal_code Datastore#postal_code}
  */
  readonly postalCode?: string[];
  /**
  * List of List of Prvince.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#province Datastore#province}
  */
  readonly province?: string[];
  /**
  * Subject cerial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#serial_number Datastore#serial_number}
  */
  readonly serialNumber?: string;
}

export function datastoreCertificateChainCertificatesIssuerToTerraform(struct?: DatastoreCertificateChainCertificatesIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.country),
    locality: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locality),
    organization: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organization),
    organizational_unit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationalUnit),
    postal_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postalCode),
    province: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.province),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
  }
}


export function datastoreCertificateChainCertificatesIssuerToHclTerraform(struct?: DatastoreCertificateChainCertificatesIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.country),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    locality: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locality),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organization: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organization),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organizational_unit: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizationalUnit),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    postal_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postalCode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    province: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.province),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreCertificateChainCertificatesIssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreCertificateChainCertificatesIssuer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreCertificateChainCertificatesIssuer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._serialNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._serialNumber = value.serialNumber;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string[]; 
  public get country() {
    return this.getListAttribute('country');
  }
  public set country(value: string[]) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string[]; 
  public get locality() {
    return this.getListAttribute('locality');
  }
  public set locality(value: string[]) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string[]; 
  public get organization() {
    return this.getListAttribute('organization');
  }
  public set organization(value: string[]) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string[]; 
  public get organizationalUnit() {
    return this.getListAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string[]) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string[]; 
  public get postalCode() {
    return this.getListAttribute('postal_code');
  }
  public set postalCode(value: string[]) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string[]; 
  public get province() {
    return this.getListAttribute('province');
  }
  public set province(value: string[]) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }
}

export class DatastoreCertificateChainCertificatesIssuerList extends cdktf.ComplexList {
  public internalValue? : DatastoreCertificateChainCertificatesIssuer[] | cdktf.IResolvable

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
  public get(index: number): DatastoreCertificateChainCertificatesIssuerOutputReference {
    return new DatastoreCertificateChainCertificatesIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreCertificateChainCertificatesRsaEcryption {
  /**
  * RSA Encryption Key bit size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#rsa_bits Datastore#rsa_bits}
  */
  readonly rsaBits?: string;
}

export function datastoreCertificateChainCertificatesRsaEcryptionToTerraform(struct?: DatastoreCertificateChainCertificatesRsaEcryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rsa_bits: cdktf.stringToTerraform(struct!.rsaBits),
  }
}


export function datastoreCertificateChainCertificatesRsaEcryptionToHclTerraform(struct?: DatastoreCertificateChainCertificatesRsaEcryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rsa_bits: {
      value: cdktf.stringToHclTerraform(struct!.rsaBits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreCertificateChainCertificatesRsaEcryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreCertificateChainCertificatesRsaEcryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rsaBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaBits = this._rsaBits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreCertificateChainCertificatesRsaEcryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rsaBits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rsaBits = value.rsaBits;
    }
  }

  // rsa_bits - computed: false, optional: true, required: false
  private _rsaBits?: string; 
  public get rsaBits() {
    return this.getStringAttribute('rsa_bits');
  }
  public set rsaBits(value: string) {
    this._rsaBits = value;
  }
  public resetRsaBits() {
    this._rsaBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaBitsInput() {
    return this._rsaBits;
  }
}

export class DatastoreCertificateChainCertificatesRsaEcryptionList extends cdktf.ComplexList {
  public internalValue? : DatastoreCertificateChainCertificatesRsaEcryption[] | cdktf.IResolvable

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
  public get(index: number): DatastoreCertificateChainCertificatesRsaEcryptionOutputReference {
    return new DatastoreCertificateChainCertificatesRsaEcryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreCertificateChainCertificatesSanValues {
  /**
  * List of permitted DNS names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#dns Datastore#dns}
  */
  readonly dns?: string[];
  /**
  * List of permitted email addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#emaild_ids Datastore#emaild_ids}
  */
  readonly emaildIds?: string[];
  /**
  * List of permitted hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#hosts Datastore#hosts}
  */
  readonly hosts?: string[];
  /**
  * List of permitted IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#ips Datastore#ips}
  */
  readonly ips?: string[];
  /**
  * List of permitted User principal names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#upns Datastore#upns}
  */
  readonly upns?: string[];
  /**
  * List of permitted URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#uris Datastore#uris}
  */
  readonly uris?: string[];
}

export function datastoreCertificateChainCertificatesSanValuesToTerraform(struct?: DatastoreCertificateChainCertificatesSanValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    emaild_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emaildIds),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    upns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upns),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function datastoreCertificateChainCertificatesSanValuesToHclTerraform(struct?: DatastoreCertificateChainCertificatesSanValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    emaild_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emaildIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreCertificateChainCertificatesSanValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreCertificateChainCertificatesSanValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._emaildIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.emaildIds = this._emaildIds;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._upns !== undefined) {
      hasAnyValues = true;
      internalValueResult.upns = this._upns;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreCertificateChainCertificatesSanValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._emaildIds = undefined;
      this._hosts = undefined;
      this._ips = undefined;
      this._upns = undefined;
      this._uris = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._emaildIds = value.emaildIds;
      this._hosts = value.hosts;
      this._ips = value.ips;
      this._upns = value.upns;
      this._uris = value.uris;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // emaild_ids - computed: false, optional: true, required: false
  private _emaildIds?: string[]; 
  public get emaildIds() {
    return this.getListAttribute('emaild_ids');
  }
  public set emaildIds(value: string[]) {
    this._emaildIds = value;
  }
  public resetEmaildIds() {
    this._emaildIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emaildIdsInput() {
    return this._emaildIds;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // upns - computed: false, optional: true, required: false
  private _upns?: string[]; 
  public get upns() {
    return this.getListAttribute('upns');
  }
  public set upns(value: string[]) {
    this._upns = value;
  }
  public resetUpns() {
    this._upns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upnsInput() {
    return this._upns;
  }

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}

export class DatastoreCertificateChainCertificatesSanValuesList extends cdktf.ComplexList {
  public internalValue? : DatastoreCertificateChainCertificatesSanValues[] | cdktf.IResolvable

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
  public get(index: number): DatastoreCertificateChainCertificatesSanValuesOutputReference {
    return new DatastoreCertificateChainCertificatesSanValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreCertificateChainCertificatesSubject {
  /**
  * Certificate common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#common_name Datastore#common_name}
  */
  readonly commonName?: string;
  /**
  * List of countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#country Datastore#country}
  */
  readonly country?: string[];
  /**
  * List of locallity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#locality Datastore#locality}
  */
  readonly locality?: string[];
  /**
  * List of organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#organization Datastore#organization}
  */
  readonly organization?: string[];
  /**
  * List of Organizational Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#organizational_unit Datastore#organizational_unit}
  */
  readonly organizationalUnit?: string[];
  /**
  * List of Postal codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#postal_code Datastore#postal_code}
  */
  readonly postalCode?: string[];
  /**
  * List of List of Prvince.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#province Datastore#province}
  */
  readonly province?: string[];
  /**
  * Subject cerial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#serial_number Datastore#serial_number}
  */
  readonly serialNumber?: string;
}

export function datastoreCertificateChainCertificatesSubjectToTerraform(struct?: DatastoreCertificateChainCertificatesSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.country),
    locality: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locality),
    organization: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organization),
    organizational_unit: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizationalUnit),
    postal_code: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postalCode),
    province: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.province),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
  }
}


export function datastoreCertificateChainCertificatesSubjectToHclTerraform(struct?: DatastoreCertificateChainCertificatesSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.country),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    locality: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locality),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organization: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organization),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    organizational_unit: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizationalUnit),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    postal_code: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postalCode),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    province: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.province),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreCertificateChainCertificatesSubjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreCertificateChainCertificatesSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreCertificateChainCertificatesSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._serialNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._serialNumber = value.serialNumber;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string[]; 
  public get country() {
    return this.getListAttribute('country');
  }
  public set country(value: string[]) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string[]; 
  public get locality() {
    return this.getListAttribute('locality');
  }
  public set locality(value: string[]) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string[]; 
  public get organization() {
    return this.getListAttribute('organization');
  }
  public set organization(value: string[]) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string[]; 
  public get organizationalUnit() {
    return this.getListAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string[]) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string[]; 
  public get postalCode() {
    return this.getListAttribute('postal_code');
  }
  public set postalCode(value: string[]) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string[]; 
  public get province() {
    return this.getListAttribute('province');
  }
  public set province(value: string[]) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }
}

export class DatastoreCertificateChainCertificatesSubjectList extends cdktf.ComplexList {
  public internalValue? : DatastoreCertificateChainCertificatesSubject[] | cdktf.IResolvable

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
  public get(index: number): DatastoreCertificateChainCertificatesSubjectOutputReference {
    return new DatastoreCertificateChainCertificatesSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreCertificateChainCertificates {
  /**
  * This fields tells the basic constraints like isCA are correct.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#basic_contraints_valid Datastore#basic_contraints_valid}
  */
  readonly basicContraintsValid?: boolean | cdktf.IResolvable;
  /**
  * base64 string of the parent certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#cert Datastore#cert}
  */
  readonly cert?: string;
  /**
  * Crypto Key for decrypting user secret information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#crypto_key Datastore#crypto_key}
  */
  readonly cryptoKey?: string;
  /**
  * user encrypted secrets map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#encrypted_secrets Datastore#encrypted_secrets}
  */
  readonly encryptedSecrets?: { [key: string]: string };
  /**
  * Indicates if the private key can be exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#exportable Datastore#exportable}
  */
  readonly exportable?: boolean | cdktf.IResolvable;
  /**
  * Sequence of extended key usages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#extended_key_usage Datastore#extended_key_usage}
  */
  readonly extendedKeyUsage?: string[];
  /**
  * Key usage extensions define the purpose of the public key contained in a certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#key_usage Datastore#key_usage}
  */
  readonly keyUsage?: number;
  /**
  * pass phase for the pvt key, this has to be filled if pvt key is encrypted with a pass phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#pass_phrase Datastore#pass_phrase}
  */
  readonly passPhrase?: string;
  /**
  * base63 string of the public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#public_key Datastore#public_key}
  */
  readonly publicKey?: string;
  /**
  * Public key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#public_key_algorithm Datastore#public_key_algorithm}
  */
  readonly publicKeyAlgorithm?: string;
  /**
  * base64 string of the parent pvt key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#pvt_key Datastore#pvt_key}
  */
  readonly pvtKey?: string;
  /**
  * Indicates if the same key pair will be used on certificate renewal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#reuse_key Datastore#reuse_key}
  */
  readonly reuseKey?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier for each Certificate generated by an Certificate Issuer. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#serial_number Datastore#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#signature_algorithm Datastore#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Certificate validatity start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#valid_from Datastore#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Certificate validatity start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#valid_till Datastore#valid_till}
  */
  readonly validTill?: string;
  /**
  * ecdsa_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#ecdsa_encryption Datastore#ecdsa_encryption}
  */
  readonly ecdsaEncryption?: DatastoreCertificateChainCertificatesEcdsaEncryption[] | cdktf.IResolvable;
  /**
  * issuer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#issuer Datastore#issuer}
  */
  readonly issuer?: DatastoreCertificateChainCertificatesIssuer[] | cdktf.IResolvable;
  /**
  * rsa_ecryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#rsa_ecryption Datastore#rsa_ecryption}
  */
  readonly rsaEcryption?: DatastoreCertificateChainCertificatesRsaEcryption[] | cdktf.IResolvable;
  /**
  * san_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#san_values Datastore#san_values}
  */
  readonly sanValues?: DatastoreCertificateChainCertificatesSanValues[] | cdktf.IResolvable;
  /**
  * subject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#subject Datastore#subject}
  */
  readonly subject?: DatastoreCertificateChainCertificatesSubject[] | cdktf.IResolvable;
}

export function datastoreCertificateChainCertificatesToTerraform(struct?: DatastoreCertificateChainCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_contraints_valid: cdktf.booleanToTerraform(struct!.basicContraintsValid),
    cert: cdktf.stringToTerraform(struct!.cert),
    crypto_key: cdktf.stringToTerraform(struct!.cryptoKey),
    encrypted_secrets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.encryptedSecrets),
    exportable: cdktf.booleanToTerraform(struct!.exportable),
    extended_key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedKeyUsage),
    key_usage: cdktf.numberToTerraform(struct!.keyUsage),
    pass_phrase: cdktf.stringToTerraform(struct!.passPhrase),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    public_key_algorithm: cdktf.stringToTerraform(struct!.publicKeyAlgorithm),
    pvt_key: cdktf.stringToTerraform(struct!.pvtKey),
    reuse_key: cdktf.booleanToTerraform(struct!.reuseKey),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    valid_from: cdktf.stringToTerraform(struct!.validFrom),
    valid_till: cdktf.stringToTerraform(struct!.validTill),
    ecdsa_encryption: cdktf.listMapper(datastoreCertificateChainCertificatesEcdsaEncryptionToTerraform, true)(struct!.ecdsaEncryption),
    issuer: cdktf.listMapper(datastoreCertificateChainCertificatesIssuerToTerraform, true)(struct!.issuer),
    rsa_ecryption: cdktf.listMapper(datastoreCertificateChainCertificatesRsaEcryptionToTerraform, true)(struct!.rsaEcryption),
    san_values: cdktf.listMapper(datastoreCertificateChainCertificatesSanValuesToTerraform, true)(struct!.sanValues),
    subject: cdktf.listMapper(datastoreCertificateChainCertificatesSubjectToTerraform, true)(struct!.subject),
  }
}


export function datastoreCertificateChainCertificatesToHclTerraform(struct?: DatastoreCertificateChainCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_contraints_valid: {
      value: cdktf.booleanToHclTerraform(struct!.basicContraintsValid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_key: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_secrets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.encryptedSecrets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exportable: {
      value: cdktf.booleanToHclTerraform(struct!.exportable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extended_key_usage: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extendedKeyUsage),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_usage: {
      value: cdktf.numberToHclTerraform(struct!.keyUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pass_phrase: {
      value: cdktf.stringToHclTerraform(struct!.passPhrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.publicKeyAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvt_key: {
      value: cdktf.stringToHclTerraform(struct!.pvtKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reuse_key: {
      value: cdktf.booleanToHclTerraform(struct!.reuseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_from: {
      value: cdktf.stringToHclTerraform(struct!.validFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_till: {
      value: cdktf.stringToHclTerraform(struct!.validTill),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ecdsa_encryption: {
      value: cdktf.listMapperHcl(datastoreCertificateChainCertificatesEcdsaEncryptionToHclTerraform, true)(struct!.ecdsaEncryption),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreCertificateChainCertificatesEcdsaEncryptionList",
    },
    issuer: {
      value: cdktf.listMapperHcl(datastoreCertificateChainCertificatesIssuerToHclTerraform, true)(struct!.issuer),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreCertificateChainCertificatesIssuerList",
    },
    rsa_ecryption: {
      value: cdktf.listMapperHcl(datastoreCertificateChainCertificatesRsaEcryptionToHclTerraform, true)(struct!.rsaEcryption),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreCertificateChainCertificatesRsaEcryptionList",
    },
    san_values: {
      value: cdktf.listMapperHcl(datastoreCertificateChainCertificatesSanValuesToHclTerraform, true)(struct!.sanValues),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreCertificateChainCertificatesSanValuesList",
    },
    subject: {
      value: cdktf.listMapperHcl(datastoreCertificateChainCertificatesSubjectToHclTerraform, true)(struct!.subject),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreCertificateChainCertificatesSubjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreCertificateChainCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreCertificateChainCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicContraintsValid !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicContraintsValid = this._basicContraintsValid;
    }
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._cryptoKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey;
    }
    if (this._encryptedSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedSecrets = this._encryptedSecrets;
    }
    if (this._exportable !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportable = this._exportable;
    }
    if (this._extendedKeyUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsage = this._extendedKeyUsage;
    }
    if (this._keyUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage;
    }
    if (this._passPhrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passPhrase = this._passPhrase;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._publicKeyAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyAlgorithm = this._publicKeyAlgorithm;
    }
    if (this._pvtKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvtKey = this._pvtKey;
    }
    if (this._reuseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseKey = this._reuseKey;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._validFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.validFrom = this._validFrom;
    }
    if (this._validTill !== undefined) {
      hasAnyValues = true;
      internalValueResult.validTill = this._validTill;
    }
    if (this._ecdsaEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecdsaEncryption = this._ecdsaEncryption?.internalValue;
    }
    if (this._issuer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer?.internalValue;
    }
    if (this._rsaEcryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaEcryption = this._rsaEcryption?.internalValue;
    }
    if (this._sanValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanValues = this._sanValues?.internalValue;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreCertificateChainCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicContraintsValid = undefined;
      this._cert = undefined;
      this._cryptoKey = undefined;
      this._encryptedSecrets = undefined;
      this._exportable = undefined;
      this._extendedKeyUsage = undefined;
      this._keyUsage = undefined;
      this._passPhrase = undefined;
      this._publicKey = undefined;
      this._publicKeyAlgorithm = undefined;
      this._pvtKey = undefined;
      this._reuseKey = undefined;
      this._serialNumber = undefined;
      this._signatureAlgorithm = undefined;
      this._validFrom = undefined;
      this._validTill = undefined;
      this._ecdsaEncryption.internalValue = undefined;
      this._issuer.internalValue = undefined;
      this._rsaEcryption.internalValue = undefined;
      this._sanValues.internalValue = undefined;
      this._subject.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicContraintsValid = value.basicContraintsValid;
      this._cert = value.cert;
      this._cryptoKey = value.cryptoKey;
      this._encryptedSecrets = value.encryptedSecrets;
      this._exportable = value.exportable;
      this._extendedKeyUsage = value.extendedKeyUsage;
      this._keyUsage = value.keyUsage;
      this._passPhrase = value.passPhrase;
      this._publicKey = value.publicKey;
      this._publicKeyAlgorithm = value.publicKeyAlgorithm;
      this._pvtKey = value.pvtKey;
      this._reuseKey = value.reuseKey;
      this._serialNumber = value.serialNumber;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._validFrom = value.validFrom;
      this._validTill = value.validTill;
      this._ecdsaEncryption.internalValue = value.ecdsaEncryption;
      this._issuer.internalValue = value.issuer;
      this._rsaEcryption.internalValue = value.rsaEcryption;
      this._sanValues.internalValue = value.sanValues;
      this._subject.internalValue = value.subject;
    }
  }

  // basic_contraints_valid - computed: false, optional: true, required: false
  private _basicContraintsValid?: boolean | cdktf.IResolvable; 
  public get basicContraintsValid() {
    return this.getBooleanAttribute('basic_contraints_valid');
  }
  public set basicContraintsValid(value: boolean | cdktf.IResolvable) {
    this._basicContraintsValid = value;
  }
  public resetBasicContraintsValid() {
    this._basicContraintsValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicContraintsValidInput() {
    return this._basicContraintsValid;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey?: string; 
  public get cryptoKey() {
    return this.getStringAttribute('crypto_key');
  }
  public set cryptoKey(value: string) {
    this._cryptoKey = value;
  }
  public resetCryptoKey() {
    this._cryptoKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey;
  }

  // encrypted_secrets - computed: false, optional: true, required: false
  private _encryptedSecrets?: { [key: string]: string }; 
  public get encryptedSecrets() {
    return this.getStringMapAttribute('encrypted_secrets');
  }
  public set encryptedSecrets(value: { [key: string]: string }) {
    this._encryptedSecrets = value;
  }
  public resetEncryptedSecrets() {
    this._encryptedSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedSecretsInput() {
    return this._encryptedSecrets;
  }

  // exportable - computed: false, optional: true, required: false
  private _exportable?: boolean | cdktf.IResolvable; 
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }
  public set exportable(value: boolean | cdktf.IResolvable) {
    this._exportable = value;
  }
  public resetExportable() {
    this._exportable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableInput() {
    return this._exportable;
  }

  // extended_key_usage - computed: false, optional: true, required: false
  private _extendedKeyUsage?: string[]; 
  public get extendedKeyUsage() {
    return this.getListAttribute('extended_key_usage');
  }
  public set extendedKeyUsage(value: string[]) {
    this._extendedKeyUsage = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage;
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage?: number; 
  public get keyUsage() {
    return this.getNumberAttribute('key_usage');
  }
  public set keyUsage(value: number) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
  }

  // pass_phrase - computed: false, optional: true, required: false
  private _passPhrase?: string; 
  public get passPhrase() {
    return this.getStringAttribute('pass_phrase');
  }
  public set passPhrase(value: string) {
    this._passPhrase = value;
  }
  public resetPassPhrase() {
    this._passPhrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passPhraseInput() {
    return this._passPhrase;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // public_key_algorithm - computed: false, optional: true, required: false
  private _publicKeyAlgorithm?: string; 
  public get publicKeyAlgorithm() {
    return this.getStringAttribute('public_key_algorithm');
  }
  public set publicKeyAlgorithm(value: string) {
    this._publicKeyAlgorithm = value;
  }
  public resetPublicKeyAlgorithm() {
    this._publicKeyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyAlgorithmInput() {
    return this._publicKeyAlgorithm;
  }

  // pvt_key - computed: false, optional: true, required: false
  private _pvtKey?: string; 
  public get pvtKey() {
    return this.getStringAttribute('pvt_key');
  }
  public set pvtKey(value: string) {
    this._pvtKey = value;
  }
  public resetPvtKey() {
    this._pvtKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvtKeyInput() {
    return this._pvtKey;
  }

  // reuse_key - computed: false, optional: true, required: false
  private _reuseKey?: boolean | cdktf.IResolvable; 
  public get reuseKey() {
    return this.getBooleanAttribute('reuse_key');
  }
  public set reuseKey(value: boolean | cdktf.IResolvable) {
    this._reuseKey = value;
  }
  public resetReuseKey() {
    this._reuseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseKeyInput() {
    return this._reuseKey;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // valid_from - computed: false, optional: true, required: false
  private _validFrom?: string; 
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom;
  }

  // valid_till - computed: false, optional: true, required: false
  private _validTill?: string; 
  public get validTill() {
    return this.getStringAttribute('valid_till');
  }
  public set validTill(value: string) {
    this._validTill = value;
  }
  public resetValidTill() {
    this._validTill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validTillInput() {
    return this._validTill;
  }

  // ecdsa_encryption - computed: false, optional: true, required: false
  private _ecdsaEncryption = new DatastoreCertificateChainCertificatesEcdsaEncryptionList(this, "ecdsa_encryption", false);
  public get ecdsaEncryption() {
    return this._ecdsaEncryption;
  }
  public putEcdsaEncryption(value: DatastoreCertificateChainCertificatesEcdsaEncryption[] | cdktf.IResolvable) {
    this._ecdsaEncryption.internalValue = value;
  }
  public resetEcdsaEncryption() {
    this._ecdsaEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdsaEncryptionInput() {
    return this._ecdsaEncryption.internalValue;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer = new DatastoreCertificateChainCertificatesIssuerList(this, "issuer", false);
  public get issuer() {
    return this._issuer;
  }
  public putIssuer(value: DatastoreCertificateChainCertificatesIssuer[] | cdktf.IResolvable) {
    this._issuer.internalValue = value;
  }
  public resetIssuer() {
    this._issuer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer.internalValue;
  }

  // rsa_ecryption - computed: false, optional: true, required: false
  private _rsaEcryption = new DatastoreCertificateChainCertificatesRsaEcryptionList(this, "rsa_ecryption", false);
  public get rsaEcryption() {
    return this._rsaEcryption;
  }
  public putRsaEcryption(value: DatastoreCertificateChainCertificatesRsaEcryption[] | cdktf.IResolvable) {
    this._rsaEcryption.internalValue = value;
  }
  public resetRsaEcryption() {
    this._rsaEcryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaEcryptionInput() {
    return this._rsaEcryption.internalValue;
  }

  // san_values - computed: false, optional: true, required: false
  private _sanValues = new DatastoreCertificateChainCertificatesSanValuesList(this, "san_values", false);
  public get sanValues() {
    return this._sanValues;
  }
  public putSanValues(value: DatastoreCertificateChainCertificatesSanValues[] | cdktf.IResolvable) {
    this._sanValues.internalValue = value;
  }
  public resetSanValues() {
    this._sanValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanValuesInput() {
    return this._sanValues.internalValue;
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new DatastoreCertificateChainCertificatesSubjectList(this, "subject", false);
  public get subject() {
    return this._subject;
  }
  public putSubject(value: DatastoreCertificateChainCertificatesSubject[] | cdktf.IResolvable) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }
}

export class DatastoreCertificateChainCertificatesList extends cdktf.ComplexList {
  public internalValue? : DatastoreCertificateChainCertificates[] | cdktf.IResolvable

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
  public get(index: number): DatastoreCertificateChainCertificatesOutputReference {
    return new DatastoreCertificateChainCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreCertificateChain {
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#certificates Datastore#certificates}
  */
  readonly certificates?: DatastoreCertificateChainCertificates[] | cdktf.IResolvable;
}

export function datastoreCertificateChainToTerraform(struct?: DatastoreCertificateChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates: cdktf.listMapper(datastoreCertificateChainCertificatesToTerraform, true)(struct!.certificates),
  }
}


export function datastoreCertificateChainToHclTerraform(struct?: DatastoreCertificateChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates: {
      value: cdktf.listMapperHcl(datastoreCertificateChainCertificatesToHclTerraform, true)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "DatastoreCertificateChainCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreCertificateChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreCertificateChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreCertificateChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificates.internalValue = value.certificates;
    }
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new DatastoreCertificateChainCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: DatastoreCertificateChainCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }
}

export class DatastoreCertificateChainList extends cdktf.ComplexList {
  public internalValue? : DatastoreCertificateChain[] | cdktf.IResolvable

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
  public get(index: number): DatastoreCertificateChainOutputReference {
    return new DatastoreCertificateChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreRevision {
}

export function datastoreRevisionToTerraform(struct?: DatastoreRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datastoreRevisionToHclTerraform(struct?: DatastoreRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatastoreRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DatastoreRevisionList extends cdktf.ComplexList {
  public internalValue? : DatastoreRevision[] | cdktf.IResolvable

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
  public get(index: number): DatastoreRevisionOutputReference {
    return new DatastoreRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastoreSecret {
  /**
  * Datastore access API key in plain-text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#api_key Datastore#api_key}
  */
  readonly apiKey?: string;
  /**
  * Datastore access API password in plain-text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#api_passwd Datastore#api_passwd}
  */
  readonly apiPasswd?: string;
}

export function datastoreSecretToTerraform(struct?: DatastoreSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_passwd: cdktf.stringToTerraform(struct!.apiPasswd),
  }
}


export function datastoreSecretToHclTerraform(struct?: DatastoreSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_passwd: {
      value: cdktf.stringToHclTerraform(struct!.apiPasswd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatastoreSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastoreSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiPasswd !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPasswd = this._apiPasswd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastoreSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._apiPasswd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._apiPasswd = value.apiPasswd;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_passwd - computed: false, optional: true, required: false
  private _apiPasswd?: string; 
  public get apiPasswd() {
    return this.getStringAttribute('api_passwd');
  }
  public set apiPasswd(value: string) {
    this._apiPasswd = value;
  }
  public resetApiPasswd() {
    this._apiPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPasswdInput() {
    return this._apiPasswd;
  }
}

export class DatastoreSecretList extends cdktf.ComplexList {
  public internalValue? : DatastoreSecret[] | cdktf.IResolvable

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
  public get(index: number): DatastoreSecretOutputReference {
    return new DatastoreSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore zedcloud_datastore}
*/
export class Datastore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Datastore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Datastore to import
  * @param importFromId The id of the existing Datastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Datastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/datastore zedcloud_datastore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: DatastoreConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_datastore',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._description = config.description;
    this._dsFqdn = config.dsFqdn;
    this._dsPath = config.dsPath;
    this._dsStatus = config.dsStatus;
    this._dsType = config.dsType;
    this._name = config.name;
    this._needClearText = config.needClearText;
    this._projectAccessList = config.projectAccessList;
    this._region = config.region;
    this._title = config.title;
    this._certificateChain.internalValue = config.certificateChain;
    this._revision.internalValue = config.revision;
    this._secret.internalValue = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // crypto_key - computed: true, optional: false, required: false
  public get cryptoKey() {
    return this.getStringAttribute('crypto_key');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ds_fqdn - computed: false, optional: false, required: true
  private _dsFqdn?: string; 
  public get dsFqdn() {
    return this.getStringAttribute('ds_fqdn');
  }
  public set dsFqdn(value: string) {
    this._dsFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsFqdnInput() {
    return this._dsFqdn;
  }

  // ds_path - computed: false, optional: true, required: false
  private _dsPath?: string; 
  public get dsPath() {
    return this.getStringAttribute('ds_path');
  }
  public set dsPath(value: string) {
    this._dsPath = value;
  }
  public resetDsPath() {
    this._dsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsPathInput() {
    return this._dsPath;
  }

  // ds_status - computed: true, optional: true, required: false
  private _dsStatus?: string; 
  public get dsStatus() {
    return this.getStringAttribute('ds_status');
  }
  public set dsStatus(value: string) {
    this._dsStatus = value;
  }
  public resetDsStatus() {
    this._dsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsStatusInput() {
    return this._dsStatus;
  }

  // ds_type - computed: false, optional: false, required: true
  private _dsType?: string; 
  public get dsType() {
    return this.getStringAttribute('ds_type');
  }
  public set dsType(value: string) {
    this._dsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dsTypeInput() {
    return this._dsType;
  }

  // encrypted_secrets - computed: true, optional: false, required: false
  private _encryptedSecrets = new cdktf.StringMap(this, "encrypted_secrets");
  public get encryptedSecrets() {
    return this._encryptedSecrets;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // need_clear_text - computed: false, optional: true, required: false
  private _needClearText?: boolean | cdktf.IResolvable; 
  public get needClearText() {
    return this.getBooleanAttribute('need_clear_text');
  }
  public set needClearText(value: boolean | cdktf.IResolvable) {
    this._needClearText = value;
  }
  public resetNeedClearText() {
    this._needClearText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needClearTextInput() {
    return this._needClearText;
  }

  // origin_type - computed: true, optional: false, required: false
  public get originType() {
    return this.getStringAttribute('origin_type');
  }

  // project_access_list - computed: false, optional: true, required: false
  private _projectAccessList?: string[]; 
  public get projectAccessList() {
    return this.getListAttribute('project_access_list');
  }
  public set projectAccessList(value: string[]) {
    this._projectAccessList = value;
  }
  public resetProjectAccessList() {
    this._projectAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectAccessListInput() {
    return this._projectAccessList;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain = new DatastoreCertificateChainList(this, "certificate_chain", false);
  public get certificateChain() {
    return this._certificateChain;
  }
  public putCertificateChain(value: DatastoreCertificateChain[] | cdktf.IResolvable) {
    this._certificateChain.internalValue = value;
  }
  public resetCertificateChain() {
    this._certificateChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain.internalValue;
  }

  // revision - computed: false, optional: true, required: false
  private _revision = new DatastoreRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: DatastoreRevision[] | cdktf.IResolvable) {
    this._revision.internalValue = value;
  }
  public resetRevision() {
    this._revision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DatastoreSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DatastoreSecret[] | cdktf.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      description: cdktf.stringToTerraform(this._description),
      ds_fqdn: cdktf.stringToTerraform(this._dsFqdn),
      ds_path: cdktf.stringToTerraform(this._dsPath),
      ds_status: cdktf.stringToTerraform(this._dsStatus),
      ds_type: cdktf.stringToTerraform(this._dsType),
      name: cdktf.stringToTerraform(this._name),
      need_clear_text: cdktf.booleanToTerraform(this._needClearText),
      project_access_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectAccessList),
      region: cdktf.stringToTerraform(this._region),
      title: cdktf.stringToTerraform(this._title),
      certificate_chain: cdktf.listMapper(datastoreCertificateChainToTerraform, true)(this._certificateChain.internalValue),
      revision: cdktf.listMapper(datastoreRevisionToTerraform, true)(this._revision.internalValue),
      secret: cdktf.listMapper(datastoreSecretToTerraform, true)(this._secret.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ds_fqdn: {
        value: cdktf.stringToHclTerraform(this._dsFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ds_path: {
        value: cdktf.stringToHclTerraform(this._dsPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ds_status: {
        value: cdktf.stringToHclTerraform(this._dsStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ds_type: {
        value: cdktf.stringToHclTerraform(this._dsType),
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
      need_clear_text: {
        value: cdktf.booleanToHclTerraform(this._needClearText),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_access_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectAccessList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_chain: {
        value: cdktf.listMapperHcl(datastoreCertificateChainToHclTerraform, true)(this._certificateChain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastoreCertificateChainList",
      },
      revision: {
        value: cdktf.listMapperHcl(datastoreRevisionToHclTerraform, true)(this._revision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastoreRevisionList",
      },
      secret: {
        value: cdktf.listMapperHcl(datastoreSecretToHclTerraform, true)(this._secret.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatastoreSecretList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
