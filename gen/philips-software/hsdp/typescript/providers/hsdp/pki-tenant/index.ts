// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#iam_orgs PkiTenant#iam_orgs}
  */
  readonly iamOrgs: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#id PkiTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#organization_name PkiTenant#organization_name}
  */
  readonly organizationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#space_name PkiTenant#space_name}
  */
  readonly spaceName: string;
  /**
  * A map of arbitrary strings that, when changed, will force the resource to be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#triggers PkiTenant#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#ca PkiTenant#ca}
  */
  readonly ca: PkiTenantCa;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#role PkiTenant#role}
  */
  readonly role: PkiTenantRole[] | cdktf.IResolvable;
}
export interface PkiTenantCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#common_name PkiTenant#common_name}
  */
  readonly commonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#ttl PkiTenant#ttl}
  */
  readonly ttl?: string;
}

export function pkiTenantCaToTerraform(struct?: PkiTenantCaOutputReference | PkiTenantCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function pkiTenantCaToHclTerraform(struct?: PkiTenantCaOutputReference | PkiTenantCa): any {
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
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PkiTenantCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PkiTenantCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PkiTenantCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonName = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonName = value.commonName;
      this._ttl = value.ttl;
    }
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface PkiTenantRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#allow_any_name PkiTenant#allow_any_name}
  */
  readonly allowAnyName: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#allow_ip_sans PkiTenant#allow_ip_sans}
  */
  readonly allowIpSans: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#allow_subdomains PkiTenant#allow_subdomains}
  */
  readonly allowSubdomains: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#allowed_domains PkiTenant#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#allowed_other_sans PkiTenant#allowed_other_sans}
  */
  readonly allowedOtherSans: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#allowed_serial_numbers PkiTenant#allowed_serial_numbers}
  */
  readonly allowedSerialNumbers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#allowed_uri_sans PkiTenant#allowed_uri_sans}
  */
  readonly allowedUriSans: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#client_flag PkiTenant#client_flag}
  */
  readonly clientFlag: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#enforce_hostnames PkiTenant#enforce_hostnames}
  */
  readonly enforceHostnames?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#key_bits PkiTenant#key_bits}
  */
  readonly keyBits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#key_type PkiTenant#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#name PkiTenant#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#server_flag PkiTenant#server_flag}
  */
  readonly serverFlag: boolean | cdktf.IResolvable;
}

export function pkiTenantRoleToTerraform(struct?: PkiTenantRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_any_name: cdktf.booleanToTerraform(struct!.allowAnyName),
    allow_ip_sans: cdktf.booleanToTerraform(struct!.allowIpSans),
    allow_subdomains: cdktf.booleanToTerraform(struct!.allowSubdomains),
    allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDomains),
    allowed_other_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOtherSans),
    allowed_serial_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedSerialNumbers),
    allowed_uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUriSans),
    client_flag: cdktf.booleanToTerraform(struct!.clientFlag),
    enforce_hostnames: cdktf.booleanToTerraform(struct!.enforceHostnames),
    key_bits: cdktf.numberToTerraform(struct!.keyBits),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    name: cdktf.stringToTerraform(struct!.name),
    server_flag: cdktf.booleanToTerraform(struct!.serverFlag),
  }
}


export function pkiTenantRoleToHclTerraform(struct?: PkiTenantRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_any_name: {
      value: cdktf.booleanToHclTerraform(struct!.allowAnyName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_ip_sans: {
      value: cdktf.booleanToHclTerraform(struct!.allowIpSans),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_subdomains: {
      value: cdktf.booleanToHclTerraform(struct!.allowSubdomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDomains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_other_sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOtherSans),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_serial_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedSerialNumbers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_uri_sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUriSans),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    client_flag: {
      value: cdktf.booleanToHclTerraform(struct!.clientFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_hostnames: {
      value: cdktf.booleanToHclTerraform(struct!.enforceHostnames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_bits: {
      value: cdktf.numberToHclTerraform(struct!.keyBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_flag: {
      value: cdktf.booleanToHclTerraform(struct!.serverFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PkiTenantRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PkiTenantRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAnyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAnyName = this._allowAnyName;
    }
    if (this._allowIpSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIpSans = this._allowIpSans;
    }
    if (this._allowSubdomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSubdomains = this._allowSubdomains;
    }
    if (this._allowedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDomains = this._allowedDomains;
    }
    if (this._allowedOtherSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOtherSans = this._allowedOtherSans;
    }
    if (this._allowedSerialNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSerialNumbers = this._allowedSerialNumbers;
    }
    if (this._allowedUriSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUriSans = this._allowedUriSans;
    }
    if (this._clientFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFlag = this._clientFlag;
    }
    if (this._enforceHostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceHostnames = this._enforceHostnames;
    }
    if (this._keyBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyBits = this._keyBits;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serverFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFlag = this._serverFlag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PkiTenantRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowAnyName = undefined;
      this._allowIpSans = undefined;
      this._allowSubdomains = undefined;
      this._allowedDomains = undefined;
      this._allowedOtherSans = undefined;
      this._allowedSerialNumbers = undefined;
      this._allowedUriSans = undefined;
      this._clientFlag = undefined;
      this._enforceHostnames = undefined;
      this._keyBits = undefined;
      this._keyType = undefined;
      this._name = undefined;
      this._serverFlag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowAnyName = value.allowAnyName;
      this._allowIpSans = value.allowIpSans;
      this._allowSubdomains = value.allowSubdomains;
      this._allowedDomains = value.allowedDomains;
      this._allowedOtherSans = value.allowedOtherSans;
      this._allowedSerialNumbers = value.allowedSerialNumbers;
      this._allowedUriSans = value.allowedUriSans;
      this._clientFlag = value.clientFlag;
      this._enforceHostnames = value.enforceHostnames;
      this._keyBits = value.keyBits;
      this._keyType = value.keyType;
      this._name = value.name;
      this._serverFlag = value.serverFlag;
    }
  }

  // allow_any_name - computed: false, optional: false, required: true
  private _allowAnyName?: boolean | cdktf.IResolvable; 
  public get allowAnyName() {
    return this.getBooleanAttribute('allow_any_name');
  }
  public set allowAnyName(value: boolean | cdktf.IResolvable) {
    this._allowAnyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnyNameInput() {
    return this._allowAnyName;
  }

  // allow_ip_sans - computed: false, optional: false, required: true
  private _allowIpSans?: boolean | cdktf.IResolvable; 
  public get allowIpSans() {
    return this.getBooleanAttribute('allow_ip_sans');
  }
  public set allowIpSans(value: boolean | cdktf.IResolvable) {
    this._allowIpSans = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpSansInput() {
    return this._allowIpSans;
  }

  // allow_subdomains - computed: false, optional: false, required: true
  private _allowSubdomains?: boolean | cdktf.IResolvable; 
  public get allowSubdomains() {
    return this.getBooleanAttribute('allow_subdomains');
  }
  public set allowSubdomains(value: boolean | cdktf.IResolvable) {
    this._allowSubdomains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubdomainsInput() {
    return this._allowSubdomains;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_domains'));
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // allowed_other_sans - computed: false, optional: false, required: true
  private _allowedOtherSans?: string[]; 
  public get allowedOtherSans() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_other_sans'));
  }
  public set allowedOtherSans(value: string[]) {
    this._allowedOtherSans = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOtherSansInput() {
    return this._allowedOtherSans;
  }

  // allowed_serial_numbers - computed: false, optional: true, required: false
  private _allowedSerialNumbers?: string[]; 
  public get allowedSerialNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_serial_numbers'));
  }
  public set allowedSerialNumbers(value: string[]) {
    this._allowedSerialNumbers = value;
  }
  public resetAllowedSerialNumbers() {
    this._allowedSerialNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSerialNumbersInput() {
    return this._allowedSerialNumbers;
  }

  // allowed_uri_sans - computed: false, optional: false, required: true
  private _allowedUriSans?: string[]; 
  public get allowedUriSans() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_uri_sans'));
  }
  public set allowedUriSans(value: string[]) {
    this._allowedUriSans = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUriSansInput() {
    return this._allowedUriSans;
  }

  // client_flag - computed: false, optional: false, required: true
  private _clientFlag?: boolean | cdktf.IResolvable; 
  public get clientFlag() {
    return this.getBooleanAttribute('client_flag');
  }
  public set clientFlag(value: boolean | cdktf.IResolvable) {
    this._clientFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFlagInput() {
    return this._clientFlag;
  }

  // enforce_hostnames - computed: false, optional: true, required: false
  private _enforceHostnames?: boolean | cdktf.IResolvable; 
  public get enforceHostnames() {
    return this.getBooleanAttribute('enforce_hostnames');
  }
  public set enforceHostnames(value: boolean | cdktf.IResolvable) {
    this._enforceHostnames = value;
  }
  public resetEnforceHostnames() {
    this._enforceHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceHostnamesInput() {
    return this._enforceHostnames;
  }

  // key_bits - computed: false, optional: false, required: true
  private _keyBits?: number; 
  public get keyBits() {
    return this.getNumberAttribute('key_bits');
  }
  public set keyBits(value: number) {
    this._keyBits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBitsInput() {
    return this._keyBits;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
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

  // server_flag - computed: false, optional: false, required: true
  private _serverFlag?: boolean | cdktf.IResolvable; 
  public get serverFlag() {
    return this.getBooleanAttribute('server_flag');
  }
  public set serverFlag(value: boolean | cdktf.IResolvable) {
    this._serverFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFlagInput() {
    return this._serverFlag;
  }
}

export class PkiTenantRoleList extends cdktf.ComplexList {
  public internalValue? : PkiTenantRole[] | cdktf.IResolvable

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
  public get(index: number): PkiTenantRoleOutputReference {
    return new PkiTenantRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant hsdp_pki_tenant}
*/
export class PkiTenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_pki_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiTenant to import
  * @param importFromId The id of the existing PkiTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_pki_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/resources/pki_tenant hsdp_pki_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiTenantConfig
  */
  public constructor(scope: Construct, id: string, config: PkiTenantConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_pki_tenant',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._iamOrgs = config.iamOrgs;
    this._id = config.id;
    this._organizationName = config.organizationName;
    this._spaceName = config.spaceName;
    this._triggers = config.triggers;
    this._ca.internalValue = config.ca;
    this._role.internalValue = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: true, optional: false, required: false
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }

  // iam_orgs - computed: false, optional: false, required: true
  private _iamOrgs?: string[]; 
  public get iamOrgs() {
    return cdktf.Fn.tolist(this.getListAttribute('iam_orgs'));
  }
  public set iamOrgs(value: string[]) {
    this._iamOrgs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamOrgsInput() {
    return this._iamOrgs;
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

  // logical_path - computed: true, optional: false, required: false
  public get logicalPath() {
    return this.getStringAttribute('logical_path');
  }

  // organization_name - computed: false, optional: false, required: true
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // plan_name - computed: true, optional: false, required: false
  public get planName() {
    return this.getStringAttribute('plan_name');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // space_name - computed: false, optional: false, required: true
  private _spaceName?: string; 
  public get spaceName() {
    return this.getStringAttribute('space_name');
  }
  public set spaceName(value: string) {
    this._spaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceNameInput() {
    return this._spaceName;
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // ca - computed: false, optional: false, required: true
  private _ca = new PkiTenantCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: PkiTenantCa) {
    this._ca.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // role - computed: false, optional: false, required: true
  private _role = new PkiTenantRoleList(this, "role", true);
  public get role() {
    return this._role;
  }
  public putRole(value: PkiTenantRole[] | cdktf.IResolvable) {
    this._role.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iam_orgs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._iamOrgs),
      id: cdktf.stringToTerraform(this._id),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      space_name: cdktf.stringToTerraform(this._spaceName),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      ca: pkiTenantCaToTerraform(this._ca.internalValue),
      role: cdktf.listMapper(pkiTenantRoleToTerraform, true)(this._role.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      iam_orgs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._iamOrgs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_name: {
        value: cdktf.stringToHclTerraform(this._spaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ca: {
        value: pkiTenantCaToHclTerraform(this._ca.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PkiTenantCaList",
      },
      role: {
        value: cdktf.listMapperHcl(pkiTenantRoleToHclTerraform, true)(this._role.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PkiTenantRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
