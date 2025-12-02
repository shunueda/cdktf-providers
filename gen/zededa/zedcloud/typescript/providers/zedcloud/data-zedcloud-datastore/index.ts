// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZedcloudDatastoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#api_key DataZedcloudDatastore#api_key}
  */
  readonly apiKey?: string;
  /**
  * Detailed description of the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#description DataZedcloudDatastore#description}
  */
  readonly description?: string;
  /**
  * Datastore Fully Qualified Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#ds_fqdn DataZedcloudDatastore#ds_fqdn}
  */
  readonly dsFqdn: string;
  /**
  * Datastore relative path w.r.t. Datastore root
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#ds_path DataZedcloudDatastore#ds_path}
  */
  readonly dsPath?: string;
  /**
  * Datastore status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#ds_status DataZedcloudDatastore#ds_status}
  */
  readonly dsStatus?: string;
  /**
  * Datastore type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#ds_type DataZedcloudDatastore#ds_type}
  */
  readonly dsType: string;
  /**
  * User defined name of the datastore, unique across the enterprise. Once datastore is created, name can’t be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#name DataZedcloudDatastore#name}
  */
  readonly name: string;
  /**
  * knob for sending creds in clear text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#need_clear_text DataZedcloudDatastore#need_clear_text}
  */
  readonly needClearText?: boolean | cdktf.IResolvable;
  /**
  * project access list of the datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#project_access_list DataZedcloudDatastore#project_access_list}
  */
  readonly projectAccessList?: string[];
  /**
  * Datastore region - valid for AWS S3 and Azure BlobStorage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#region DataZedcloudDatastore#region}
  */
  readonly region?: string;
  /**
  * User defined title of the datastore. Title can be changed at any time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#title DataZedcloudDatastore#title}
  */
  readonly title: string;
  /**
  * certificate_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#certificate_chain DataZedcloudDatastore#certificate_chain}
  */
  readonly certificateChain?: DataZedcloudDatastoreCertificateChain[] | cdktf.IResolvable;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#revision DataZedcloudDatastore#revision}
  */
  readonly revision?: DataZedcloudDatastoreRevision[] | cdktf.IResolvable;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#secret DataZedcloudDatastore#secret}
  */
  readonly secret?: DataZedcloudDatastoreSecret[] | cdktf.IResolvable;
}
export interface DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryption {
  /**
  * ECDSA curve to be used while signing the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#curve DataZedcloudDatastore#curve}
  */
  readonly curve?: string;
}

export function dataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryptionToTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curve: cdktf.stringToTerraform(struct!.curve),
  }
}


export function dataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryptionToHclTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryption | cdktf.IResolvable): any {
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

export class DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryption | cdktf.IResolvable | undefined) {
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

export class DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryptionList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryption[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryptionOutputReference {
    return new DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudDatastoreCertificateChainCertificatesIssuer {
  /**
  * Certificate common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#common_name DataZedcloudDatastore#common_name}
  */
  readonly commonName?: string;
  /**
  * List of countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#country DataZedcloudDatastore#country}
  */
  readonly country?: string[];
  /**
  * List of locallity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#locality DataZedcloudDatastore#locality}
  */
  readonly locality?: string[];
  /**
  * List of organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#organization DataZedcloudDatastore#organization}
  */
  readonly organization?: string[];
  /**
  * List of Organizational Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#organizational_unit DataZedcloudDatastore#organizational_unit}
  */
  readonly organizationalUnit?: string[];
  /**
  * List of Postal codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#postal_code DataZedcloudDatastore#postal_code}
  */
  readonly postalCode?: string[];
  /**
  * List of List of Prvince.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#province DataZedcloudDatastore#province}
  */
  readonly province?: string[];
  /**
  * Subject cerial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#serial_number DataZedcloudDatastore#serial_number}
  */
  readonly serialNumber?: string;
}

export function dataZedcloudDatastoreCertificateChainCertificatesIssuerToTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificatesIssuer | cdktf.IResolvable): any {
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


export function dataZedcloudDatastoreCertificateChainCertificatesIssuerToHclTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificatesIssuer | cdktf.IResolvable): any {
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

export class DataZedcloudDatastoreCertificateChainCertificatesIssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudDatastoreCertificateChainCertificatesIssuer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudDatastoreCertificateChainCertificatesIssuer | cdktf.IResolvable | undefined) {
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

export class DataZedcloudDatastoreCertificateChainCertificatesIssuerList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudDatastoreCertificateChainCertificatesIssuer[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudDatastoreCertificateChainCertificatesIssuerOutputReference {
    return new DataZedcloudDatastoreCertificateChainCertificatesIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudDatastoreCertificateChainCertificatesRsaEcryption {
  /**
  * RSA Encryption Key bit size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#rsa_bits DataZedcloudDatastore#rsa_bits}
  */
  readonly rsaBits?: string;
}

export function dataZedcloudDatastoreCertificateChainCertificatesRsaEcryptionToTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificatesRsaEcryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rsa_bits: cdktf.stringToTerraform(struct!.rsaBits),
  }
}


export function dataZedcloudDatastoreCertificateChainCertificatesRsaEcryptionToHclTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificatesRsaEcryption | cdktf.IResolvable): any {
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

export class DataZedcloudDatastoreCertificateChainCertificatesRsaEcryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudDatastoreCertificateChainCertificatesRsaEcryption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudDatastoreCertificateChainCertificatesRsaEcryption | cdktf.IResolvable | undefined) {
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

export class DataZedcloudDatastoreCertificateChainCertificatesRsaEcryptionList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudDatastoreCertificateChainCertificatesRsaEcryption[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudDatastoreCertificateChainCertificatesRsaEcryptionOutputReference {
    return new DataZedcloudDatastoreCertificateChainCertificatesRsaEcryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudDatastoreCertificateChainCertificatesSanValues {
  /**
  * List of permitted DNS names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#dns DataZedcloudDatastore#dns}
  */
  readonly dns?: string[];
  /**
  * List of permitted email addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#emaild_ids DataZedcloudDatastore#emaild_ids}
  */
  readonly emaildIds?: string[];
  /**
  * List of permitted hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#hosts DataZedcloudDatastore#hosts}
  */
  readonly hosts?: string[];
  /**
  * List of permitted IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#ips DataZedcloudDatastore#ips}
  */
  readonly ips?: string[];
  /**
  * List of permitted User principal names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#upns DataZedcloudDatastore#upns}
  */
  readonly upns?: string[];
  /**
  * List of permitted URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#uris DataZedcloudDatastore#uris}
  */
  readonly uris?: string[];
}

export function dataZedcloudDatastoreCertificateChainCertificatesSanValuesToTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificatesSanValues | cdktf.IResolvable): any {
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


export function dataZedcloudDatastoreCertificateChainCertificatesSanValuesToHclTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificatesSanValues | cdktf.IResolvable): any {
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

export class DataZedcloudDatastoreCertificateChainCertificatesSanValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudDatastoreCertificateChainCertificatesSanValues | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudDatastoreCertificateChainCertificatesSanValues | cdktf.IResolvable | undefined) {
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

export class DataZedcloudDatastoreCertificateChainCertificatesSanValuesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudDatastoreCertificateChainCertificatesSanValues[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudDatastoreCertificateChainCertificatesSanValuesOutputReference {
    return new DataZedcloudDatastoreCertificateChainCertificatesSanValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudDatastoreCertificateChainCertificatesSubject {
  /**
  * Certificate common name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#common_name DataZedcloudDatastore#common_name}
  */
  readonly commonName?: string;
  /**
  * List of countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#country DataZedcloudDatastore#country}
  */
  readonly country?: string[];
  /**
  * List of locallity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#locality DataZedcloudDatastore#locality}
  */
  readonly locality?: string[];
  /**
  * List of organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#organization DataZedcloudDatastore#organization}
  */
  readonly organization?: string[];
  /**
  * List of Organizational Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#organizational_unit DataZedcloudDatastore#organizational_unit}
  */
  readonly organizationalUnit?: string[];
  /**
  * List of Postal codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#postal_code DataZedcloudDatastore#postal_code}
  */
  readonly postalCode?: string[];
  /**
  * List of List of Prvince.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#province DataZedcloudDatastore#province}
  */
  readonly province?: string[];
  /**
  * Subject cerial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#serial_number DataZedcloudDatastore#serial_number}
  */
  readonly serialNumber?: string;
}

export function dataZedcloudDatastoreCertificateChainCertificatesSubjectToTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificatesSubject | cdktf.IResolvable): any {
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


export function dataZedcloudDatastoreCertificateChainCertificatesSubjectToHclTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificatesSubject | cdktf.IResolvable): any {
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

export class DataZedcloudDatastoreCertificateChainCertificatesSubjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudDatastoreCertificateChainCertificatesSubject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudDatastoreCertificateChainCertificatesSubject | cdktf.IResolvable | undefined) {
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

export class DataZedcloudDatastoreCertificateChainCertificatesSubjectList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudDatastoreCertificateChainCertificatesSubject[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudDatastoreCertificateChainCertificatesSubjectOutputReference {
    return new DataZedcloudDatastoreCertificateChainCertificatesSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudDatastoreCertificateChainCertificates {
  /**
  * This fields tells the basic constraints like isCA are correct.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#basic_contraints_valid DataZedcloudDatastore#basic_contraints_valid}
  */
  readonly basicContraintsValid?: boolean | cdktf.IResolvable;
  /**
  * base64 string of the parent certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#cert DataZedcloudDatastore#cert}
  */
  readonly cert?: string;
  /**
  * Crypto Key for decrypting user secret information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#crypto_key DataZedcloudDatastore#crypto_key}
  */
  readonly cryptoKey?: string;
  /**
  * user encrypted secrets map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#encrypted_secrets DataZedcloudDatastore#encrypted_secrets}
  */
  readonly encryptedSecrets?: { [key: string]: string };
  /**
  * Indicates if the private key can be exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#exportable DataZedcloudDatastore#exportable}
  */
  readonly exportable?: boolean | cdktf.IResolvable;
  /**
  * Sequence of extended key usages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#extended_key_usage DataZedcloudDatastore#extended_key_usage}
  */
  readonly extendedKeyUsage?: string[];
  /**
  * Key usage extensions define the purpose of the public key contained in a certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#key_usage DataZedcloudDatastore#key_usage}
  */
  readonly keyUsage?: number;
  /**
  * pass phase for the pvt key, this has to be filled if pvt key is encrypted with a pass phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#pass_phrase DataZedcloudDatastore#pass_phrase}
  */
  readonly passPhrase?: string;
  /**
  * base63 string of the public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#public_key DataZedcloudDatastore#public_key}
  */
  readonly publicKey?: string;
  /**
  * Public key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#public_key_algorithm DataZedcloudDatastore#public_key_algorithm}
  */
  readonly publicKeyAlgorithm?: string;
  /**
  * base64 string of the parent pvt key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#pvt_key DataZedcloudDatastore#pvt_key}
  */
  readonly pvtKey?: string;
  /**
  * Indicates if the same key pair will be used on certificate renewal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#reuse_key DataZedcloudDatastore#reuse_key}
  */
  readonly reuseKey?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier for each Certificate generated by an Certificate Issuer. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#serial_number DataZedcloudDatastore#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#signature_algorithm DataZedcloudDatastore#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Certificate validatity start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#valid_from DataZedcloudDatastore#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Certificate validatity start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#valid_till DataZedcloudDatastore#valid_till}
  */
  readonly validTill?: string;
  /**
  * ecdsa_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#ecdsa_encryption DataZedcloudDatastore#ecdsa_encryption}
  */
  readonly ecdsaEncryption?: DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryption[] | cdktf.IResolvable;
  /**
  * issuer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#issuer DataZedcloudDatastore#issuer}
  */
  readonly issuer?: DataZedcloudDatastoreCertificateChainCertificatesIssuer[] | cdktf.IResolvable;
  /**
  * rsa_ecryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#rsa_ecryption DataZedcloudDatastore#rsa_ecryption}
  */
  readonly rsaEcryption?: DataZedcloudDatastoreCertificateChainCertificatesRsaEcryption[] | cdktf.IResolvable;
  /**
  * san_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#san_values DataZedcloudDatastore#san_values}
  */
  readonly sanValues?: DataZedcloudDatastoreCertificateChainCertificatesSanValues[] | cdktf.IResolvable;
  /**
  * subject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#subject DataZedcloudDatastore#subject}
  */
  readonly subject?: DataZedcloudDatastoreCertificateChainCertificatesSubject[] | cdktf.IResolvable;
}

export function dataZedcloudDatastoreCertificateChainCertificatesToTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificates | cdktf.IResolvable): any {
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
    ecdsa_encryption: cdktf.listMapper(dataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryptionToTerraform, true)(struct!.ecdsaEncryption),
    issuer: cdktf.listMapper(dataZedcloudDatastoreCertificateChainCertificatesIssuerToTerraform, true)(struct!.issuer),
    rsa_ecryption: cdktf.listMapper(dataZedcloudDatastoreCertificateChainCertificatesRsaEcryptionToTerraform, true)(struct!.rsaEcryption),
    san_values: cdktf.listMapper(dataZedcloudDatastoreCertificateChainCertificatesSanValuesToTerraform, true)(struct!.sanValues),
    subject: cdktf.listMapper(dataZedcloudDatastoreCertificateChainCertificatesSubjectToTerraform, true)(struct!.subject),
  }
}


export function dataZedcloudDatastoreCertificateChainCertificatesToHclTerraform(struct?: DataZedcloudDatastoreCertificateChainCertificates | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryptionToHclTerraform, true)(struct!.ecdsaEncryption),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryptionList",
    },
    issuer: {
      value: cdktf.listMapperHcl(dataZedcloudDatastoreCertificateChainCertificatesIssuerToHclTerraform, true)(struct!.issuer),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudDatastoreCertificateChainCertificatesIssuerList",
    },
    rsa_ecryption: {
      value: cdktf.listMapperHcl(dataZedcloudDatastoreCertificateChainCertificatesRsaEcryptionToHclTerraform, true)(struct!.rsaEcryption),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudDatastoreCertificateChainCertificatesRsaEcryptionList",
    },
    san_values: {
      value: cdktf.listMapperHcl(dataZedcloudDatastoreCertificateChainCertificatesSanValuesToHclTerraform, true)(struct!.sanValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudDatastoreCertificateChainCertificatesSanValuesList",
    },
    subject: {
      value: cdktf.listMapperHcl(dataZedcloudDatastoreCertificateChainCertificatesSubjectToHclTerraform, true)(struct!.subject),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudDatastoreCertificateChainCertificatesSubjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudDatastoreCertificateChainCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudDatastoreCertificateChainCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudDatastoreCertificateChainCertificates | cdktf.IResolvable | undefined) {
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
  private _ecdsaEncryption = new DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryptionList(this, "ecdsa_encryption", false);
  public get ecdsaEncryption() {
    return this._ecdsaEncryption;
  }
  public putEcdsaEncryption(value: DataZedcloudDatastoreCertificateChainCertificatesEcdsaEncryption[] | cdktf.IResolvable) {
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
  private _issuer = new DataZedcloudDatastoreCertificateChainCertificatesIssuerList(this, "issuer", false);
  public get issuer() {
    return this._issuer;
  }
  public putIssuer(value: DataZedcloudDatastoreCertificateChainCertificatesIssuer[] | cdktf.IResolvable) {
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
  private _rsaEcryption = new DataZedcloudDatastoreCertificateChainCertificatesRsaEcryptionList(this, "rsa_ecryption", false);
  public get rsaEcryption() {
    return this._rsaEcryption;
  }
  public putRsaEcryption(value: DataZedcloudDatastoreCertificateChainCertificatesRsaEcryption[] | cdktf.IResolvable) {
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
  private _sanValues = new DataZedcloudDatastoreCertificateChainCertificatesSanValuesList(this, "san_values", false);
  public get sanValues() {
    return this._sanValues;
  }
  public putSanValues(value: DataZedcloudDatastoreCertificateChainCertificatesSanValues[] | cdktf.IResolvable) {
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
  private _subject = new DataZedcloudDatastoreCertificateChainCertificatesSubjectList(this, "subject", false);
  public get subject() {
    return this._subject;
  }
  public putSubject(value: DataZedcloudDatastoreCertificateChainCertificatesSubject[] | cdktf.IResolvable) {
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

export class DataZedcloudDatastoreCertificateChainCertificatesList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudDatastoreCertificateChainCertificates[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudDatastoreCertificateChainCertificatesOutputReference {
    return new DataZedcloudDatastoreCertificateChainCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudDatastoreCertificateChain {
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#certificates DataZedcloudDatastore#certificates}
  */
  readonly certificates?: DataZedcloudDatastoreCertificateChainCertificates[] | cdktf.IResolvable;
}

export function dataZedcloudDatastoreCertificateChainToTerraform(struct?: DataZedcloudDatastoreCertificateChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates: cdktf.listMapper(dataZedcloudDatastoreCertificateChainCertificatesToTerraform, true)(struct!.certificates),
  }
}


export function dataZedcloudDatastoreCertificateChainToHclTerraform(struct?: DataZedcloudDatastoreCertificateChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates: {
      value: cdktf.listMapperHcl(dataZedcloudDatastoreCertificateChainCertificatesToHclTerraform, true)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudDatastoreCertificateChainCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudDatastoreCertificateChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudDatastoreCertificateChain | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudDatastoreCertificateChain | cdktf.IResolvable | undefined) {
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
  private _certificates = new DataZedcloudDatastoreCertificateChainCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: DataZedcloudDatastoreCertificateChainCertificates[] | cdktf.IResolvable) {
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

export class DataZedcloudDatastoreCertificateChainList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudDatastoreCertificateChain[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudDatastoreCertificateChainOutputReference {
    return new DataZedcloudDatastoreCertificateChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudDatastoreRevision {
}

export function dataZedcloudDatastoreRevisionToTerraform(struct?: DataZedcloudDatastoreRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudDatastoreRevisionToHclTerraform(struct?: DataZedcloudDatastoreRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudDatastoreRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudDatastoreRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudDatastoreRevision | cdktf.IResolvable | undefined) {
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

export class DataZedcloudDatastoreRevisionList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudDatastoreRevision[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudDatastoreRevisionOutputReference {
    return new DataZedcloudDatastoreRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudDatastoreSecret {
  /**
  * Datastore access API key in plain-text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#api_key DataZedcloudDatastore#api_key}
  */
  readonly apiKey?: string;
  /**
  * Datastore access API password in plain-text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#api_passwd DataZedcloudDatastore#api_passwd}
  */
  readonly apiPasswd?: string;
}

export function dataZedcloudDatastoreSecretToTerraform(struct?: DataZedcloudDatastoreSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    api_passwd: cdktf.stringToTerraform(struct!.apiPasswd),
  }
}


export function dataZedcloudDatastoreSecretToHclTerraform(struct?: DataZedcloudDatastoreSecret | cdktf.IResolvable): any {
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

export class DataZedcloudDatastoreSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudDatastoreSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataZedcloudDatastoreSecret | cdktf.IResolvable | undefined) {
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

export class DataZedcloudDatastoreSecretList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudDatastoreSecret[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudDatastoreSecretOutputReference {
    return new DataZedcloudDatastoreSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore zedcloud_datastore}
*/
export class DataZedcloudDatastore extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_datastore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZedcloudDatastore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZedcloudDatastore to import
  * @param importFromId The id of the existing DataZedcloudDatastore that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZedcloudDatastore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_datastore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/data-sources/datastore zedcloud_datastore} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZedcloudDatastoreConfig
  */
  public constructor(scope: Construct, id: string, config: DataZedcloudDatastoreConfig) {
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
  private _certificateChain = new DataZedcloudDatastoreCertificateChainList(this, "certificate_chain", false);
  public get certificateChain() {
    return this._certificateChain;
  }
  public putCertificateChain(value: DataZedcloudDatastoreCertificateChain[] | cdktf.IResolvable) {
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
  private _revision = new DataZedcloudDatastoreRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: DataZedcloudDatastoreRevision[] | cdktf.IResolvable) {
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
  private _secret = new DataZedcloudDatastoreSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataZedcloudDatastoreSecret[] | cdktf.IResolvable) {
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
      certificate_chain: cdktf.listMapper(dataZedcloudDatastoreCertificateChainToTerraform, true)(this._certificateChain.internalValue),
      revision: cdktf.listMapper(dataZedcloudDatastoreRevisionToTerraform, true)(this._revision.internalValue),
      secret: cdktf.listMapper(dataZedcloudDatastoreSecretToTerraform, true)(this._secret.internalValue),
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
        value: cdktf.listMapperHcl(dataZedcloudDatastoreCertificateChainToHclTerraform, true)(this._certificateChain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudDatastoreCertificateChainList",
      },
      revision: {
        value: cdktf.listMapperHcl(dataZedcloudDatastoreRevisionToHclTerraform, true)(this._revision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudDatastoreRevisionList",
      },
      secret: {
        value: cdktf.listMapperHcl(dataZedcloudDatastoreSecretToHclTerraform, true)(this._secret.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudDatastoreSecretList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
