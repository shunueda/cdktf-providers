// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosSecurityAdminUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#extattrfilters DataNiosSecurityAdminUser#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#filters DataNiosSecurityAdminUser#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#max_results DataNiosSecurityAdminUser#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#paging DataNiosSecurityAdminUser#paging}
  */
  readonly paging?: number;
}
export interface DataNiosSecurityAdminUserResultSshKeys {
  /**
  * Unique identifier for the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#key_name DataNiosSecurityAdminUser#key_name}
  */
  readonly keyName?: string;
  /**
  * ssh_key_types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#key_type DataNiosSecurityAdminUser#key_type}
  */
  readonly keyType?: string;
  /**
  * ssh key text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#key_value DataNiosSecurityAdminUser#key_value}
  */
  readonly keyValue?: string;
}

export function dataNiosSecurityAdminUserResultSshKeysToTerraform(struct?: DataNiosSecurityAdminUserResultSshKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    key_value: cdktf.stringToTerraform(struct!.keyValue),
  }
}


export function dataNiosSecurityAdminUserResultSshKeysToHclTerraform(struct?: DataNiosSecurityAdminUserResultSshKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_value: {
      value: cdktf.stringToHclTerraform(struct!.keyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminUserResultSshKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosSecurityAdminUserResultSshKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._keyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValue = this._keyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminUserResultSshKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyName = undefined;
      this._keyType = undefined;
      this._keyValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyName = value.keyName;
      this._keyType = value.keyType;
      this._keyValue = value.keyValue;
    }
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // key_value - computed: true, optional: true, required: false
  private _keyValue?: string; 
  public get keyValue() {
    return this.getStringAttribute('key_value');
  }
  public set keyValue(value: string) {
    this._keyValue = value;
  }
  public resetKeyValue() {
    this._keyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueInput() {
    return this._keyValue;
  }
}

export class DataNiosSecurityAdminUserResultSshKeysList extends cdktf.ComplexList {
  public internalValue? : DataNiosSecurityAdminUserResultSshKeys[] | cdktf.IResolvable

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
  public get(index: number): DataNiosSecurityAdminUserResultSshKeysOutputReference {
    return new DataNiosSecurityAdminUserResultSshKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosSecurityAdminUserResult {
  /**
  * The names of the Admin Groups to which this Admin User belongs. Currently, this is limited to only one Admin Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#admin_groups DataNiosSecurityAdminUser#admin_groups}
  */
  readonly adminGroups: string[];
  /**
  * Determines the way of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#auth_method DataNiosSecurityAdminUser#auth_method}
  */
  readonly authMethod?: string;
  /**
  * The authentication type for the admin user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#auth_type DataNiosSecurityAdminUser#auth_type}
  */
  readonly authType?: string;
  /**
  * The CA certificate that is used for user lookup during authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#ca_certificate_issuer DataNiosSecurityAdminUser#ca_certificate_issuer}
  */
  readonly caCertificateIssuer?: string;
  /**
  * The serial number of the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#client_certificate_serial_number DataNiosSecurityAdminUser#client_certificate_serial_number}
  */
  readonly clientCertificateSerialNumber?: string;
  /**
  * Comment for the admin user; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#comment DataNiosSecurityAdminUser#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether the admin user is disabled or not. When this is set to False, the admin user is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#disable DataNiosSecurityAdminUser#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The e-mail address for the admin user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#email DataNiosSecurityAdminUser#email}
  */
  readonly email?: string;
  /**
  * Determines whether the user is allowed to log in only with the certificate. Regular username/password authentication will be disabled for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#enable_certificate_authentication DataNiosSecurityAdminUser#enable_certificate_authentication}
  */
  readonly enableCertificateAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#extattrs DataNiosSecurityAdminUser#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The name of the admin user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#name DataNiosSecurityAdminUser#name}
  */
  readonly name: string;
  /**
  * The password for the administrator to use when logging in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#password DataNiosSecurityAdminUser#password}
  */
  readonly password: string;
  /**
  * List of ssh keys for a particular user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#ssh_keys DataNiosSecurityAdminUser#ssh_keys}
  */
  readonly sshKeys?: DataNiosSecurityAdminUserResultSshKeys[] | cdktf.IResolvable;
  /**
  * The time zone for this admin user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#time_zone DataNiosSecurityAdminUser#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Enable/disable the ssh keypair authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#use_ssh_keys DataNiosSecurityAdminUser#use_ssh_keys}
  */
  readonly useSshKeys?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: time_zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#use_time_zone DataNiosSecurityAdminUser#use_time_zone}
  */
  readonly useTimeZone?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminUserResultToTerraform(struct?: DataNiosSecurityAdminUserResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminGroups),
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    ca_certificate_issuer: cdktf.stringToTerraform(struct!.caCertificateIssuer),
    client_certificate_serial_number: cdktf.stringToTerraform(struct!.clientCertificateSerialNumber),
    comment: cdktf.stringToTerraform(struct!.comment),
    disable: cdktf.booleanToTerraform(struct!.disable),
    email: cdktf.stringToTerraform(struct!.email),
    enable_certificate_authentication: cdktf.booleanToTerraform(struct!.enableCertificateAuthentication),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(dataNiosSecurityAdminUserResultSshKeysToTerraform, false)(struct!.sshKeys),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    use_ssh_keys: cdktf.booleanToTerraform(struct!.useSshKeys),
    use_time_zone: cdktf.booleanToTerraform(struct!.useTimeZone),
  }
}


export function dataNiosSecurityAdminUserResultToHclTerraform(struct?: DataNiosSecurityAdminUserResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_certificate_issuer: {
      value: cdktf.stringToHclTerraform(struct!.caCertificateIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_certificate_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.enableCertificateAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(dataNiosSecurityAdminUserResultSshKeysToHclTerraform, false)(struct!.sshKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosSecurityAdminUserResultSshKeysList",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ssh_keys: {
      value: cdktf.booleanToHclTerraform(struct!.useSshKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_time_zone: {
      value: cdktf.booleanToHclTerraform(struct!.useTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminUserResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosSecurityAdminUserResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroups = this._adminGroups;
    }
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._caCertificateIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateIssuer = this._caCertificateIssuer;
    }
    if (this._clientCertificateSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateSerialNumber = this._clientCertificateSerialNumber;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._enableCertificateAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCertificateAuthentication = this._enableCertificateAuthentication;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys?.internalValue;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._useSshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSshKeys = this._useSshKeys;
    }
    if (this._useTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTimeZone = this._useTimeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminUserResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminGroups = undefined;
      this._authMethod = undefined;
      this._authType = undefined;
      this._caCertificateIssuer = undefined;
      this._clientCertificateSerialNumber = undefined;
      this._comment = undefined;
      this._disable = undefined;
      this._email = undefined;
      this._enableCertificateAuthentication = undefined;
      this._extattrs = undefined;
      this._name = undefined;
      this._password = undefined;
      this._sshKeys.internalValue = undefined;
      this._timeZone = undefined;
      this._useSshKeys = undefined;
      this._useTimeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminGroups = value.adminGroups;
      this._authMethod = value.authMethod;
      this._authType = value.authType;
      this._caCertificateIssuer = value.caCertificateIssuer;
      this._clientCertificateSerialNumber = value.clientCertificateSerialNumber;
      this._comment = value.comment;
      this._disable = value.disable;
      this._email = value.email;
      this._enableCertificateAuthentication = value.enableCertificateAuthentication;
      this._extattrs = value.extattrs;
      this._name = value.name;
      this._password = value.password;
      this._sshKeys.internalValue = value.sshKeys;
      this._timeZone = value.timeZone;
      this._useSshKeys = value.useSshKeys;
      this._useTimeZone = value.useTimeZone;
    }
  }

  // admin_groups - computed: true, optional: false, required: true
  private _adminGroups?: string[]; 
  public get adminGroups() {
    return this.getListAttribute('admin_groups');
  }
  public set adminGroups(value: string[]) {
    this._adminGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupsInput() {
    return this._adminGroups;
  }

  // auth_method - computed: true, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // ca_certificate_issuer - computed: true, optional: true, required: false
  private _caCertificateIssuer?: string; 
  public get caCertificateIssuer() {
    return this.getStringAttribute('ca_certificate_issuer');
  }
  public set caCertificateIssuer(value: string) {
    this._caCertificateIssuer = value;
  }
  public resetCaCertificateIssuer() {
    this._caCertificateIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIssuerInput() {
    return this._caCertificateIssuer;
  }

  // client_certificate_serial_number - computed: true, optional: true, required: false
  private _clientCertificateSerialNumber?: string; 
  public get clientCertificateSerialNumber() {
    return this.getStringAttribute('client_certificate_serial_number');
  }
  public set clientCertificateSerialNumber(value: string) {
    this._clientCertificateSerialNumber = value;
  }
  public resetClientCertificateSerialNumber() {
    this._clientCertificateSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateSerialNumberInput() {
    return this._clientCertificateSerialNumber;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enable_certificate_authentication - computed: true, optional: true, required: false
  private _enableCertificateAuthentication?: boolean | cdktf.IResolvable; 
  public get enableCertificateAuthentication() {
    return this.getBooleanAttribute('enable_certificate_authentication');
  }
  public set enableCertificateAuthentication(value: boolean | cdktf.IResolvable) {
    this._enableCertificateAuthentication = value;
  }
  public resetEnableCertificateAuthentication() {
    this._enableCertificateAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertificateAuthenticationInput() {
    return this._enableCertificateAuthentication;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // name - computed: true, optional: false, required: true
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

  // password - computed: true, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // ssh_keys - computed: true, optional: true, required: false
  private _sshKeys = new DataNiosSecurityAdminUserResultSshKeysList(this, "ssh_keys", false);
  public get sshKeys() {
    return this._sshKeys;
  }
  public putSshKeys(value: DataNiosSecurityAdminUserResultSshKeys[] | cdktf.IResolvable) {
    this._sshKeys.internalValue = value;
  }
  public resetSshKeys() {
    this._sshKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // use_ssh_keys - computed: true, optional: true, required: false
  private _useSshKeys?: boolean | cdktf.IResolvable; 
  public get useSshKeys() {
    return this.getBooleanAttribute('use_ssh_keys');
  }
  public set useSshKeys(value: boolean | cdktf.IResolvable) {
    this._useSshKeys = value;
  }
  public resetUseSshKeys() {
    this._useSshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSshKeysInput() {
    return this._useSshKeys;
  }

  // use_time_zone - computed: true, optional: true, required: false
  private _useTimeZone?: boolean | cdktf.IResolvable; 
  public get useTimeZone() {
    return this.getBooleanAttribute('use_time_zone');
  }
  public set useTimeZone(value: boolean | cdktf.IResolvable) {
    this._useTimeZone = value;
  }
  public resetUseTimeZone() {
    this._useTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTimeZoneInput() {
    return this._useTimeZone;
  }
}

export class DataNiosSecurityAdminUserResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosSecurityAdminUserResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosSecurityAdminUserResultOutputReference {
    return new DataNiosSecurityAdminUserResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user nios_security_admin_user}
*/
export class DataNiosSecurityAdminUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_security_admin_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosSecurityAdminUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosSecurityAdminUser to import
  * @param importFromId The id of the existing DataNiosSecurityAdminUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosSecurityAdminUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_security_admin_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/security_admin_user nios_security_admin_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosSecurityAdminUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosSecurityAdminUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_security_admin_user',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosSecurityAdminUserResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
