// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationPolicyServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accounting port of RADIUS server
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#accounting_port AuthenticationPolicyServer#accounting_port}
  */
  readonly accountingPort: number;
  /**
  * Authentication port of RADIUS server
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#authentication_port AuthenticationPolicyServer#authentication_port}
  */
  readonly authenticationPort: number;
  /**
  * Cisco ISE Server DTOs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#cisco_ise_dtos AuthenticationPolicyServer#cisco_ise_dtos}
  */
  readonly ciscoIseDtos?: AuthenticationPolicyServerCiscoIseDtos[] | cdktf.IResolvable;
  /**
  * Encryption key used to encrypt shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#encryption_key AuthenticationPolicyServer#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Type of encryption scheme for additional security
  *   - Choices: `KEYWRAP`, `RADSEC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#encryption_scheme AuthenticationPolicyServer#encryption_scheme}
  */
  readonly encryptionScheme?: string;
  /**
  * For future use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#external_cisco_ise_ip_addr_dtos AuthenticationPolicyServer#external_cisco_ise_ip_addr_dtos}
  */
  readonly externalCiscoIseIpAddrDtos?: AuthenticationPolicyServerExternalCiscoIseIpAddrDtos[] | cdktf.IResolvable;
  /**
  * IP address of authentication and policy server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#ip_address AuthenticationPolicyServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Value true for Cisco ISE Server. Default value is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#is_ise_enabled AuthenticationPolicyServer#is_ise_enabled}
  */
  readonly isIseEnabled?: boolean | cdktf.IResolvable;
  /**
  * Message key used to encrypt shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#message_key AuthenticationPolicyServer#message_key}
  */
  readonly messageKey?: string;
  /**
  * Port of TACACS server
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#port AuthenticationPolicyServer#port}
  */
  readonly port: number;
  /**
  * Type of protocol for authentication and policy server. If already saved with RADIUS, can update to RADIUS_TACACS. If already saved with TACACS, can update to RADIUS_TACACS
  *   - Choices: `TACACS`, `RADIUS`, `RADIUS_TACACS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#protocol AuthenticationPolicyServer#protocol}
  */
  readonly protocol: string;
  /**
  * Value true for enable, false for disable. Default value is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#pxgrid_enabled AuthenticationPolicyServer#pxgrid_enabled}
  */
  readonly pxgridEnabled?: boolean | cdktf.IResolvable;
  /**
  * Number of communication retries between devices and authentication and policy server. The range is from 1 to 3
  *   - Range: `1`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#retries AuthenticationPolicyServer#retries}
  */
  readonly retries: number;
  /**
  * Role of authentication and policy server
  *   - Choices: `primary`, `secondary`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#role AuthenticationPolicyServer#role}
  */
  readonly role: string;
  /**
  * Shared secret between devices and authentication and policy server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#shared_secret AuthenticationPolicyServer#shared_secret}
  */
  readonly sharedSecret: string;
  /**
  * Number of seconds before timing out between devices and authentication and policy server. The range is from 2 to 20
  *   - Range: `2`-`20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#timeout_seconds AuthenticationPolicyServer#timeout_seconds}
  */
  readonly timeoutSeconds: number;
  /**
  * Value true to use DNAC certificate for Pxgrid. Default value is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#use_dnac_cert_for_pxgrid AuthenticationPolicyServer#use_dnac_cert_for_pxgrid}
  */
  readonly useDnacCertForPxgrid?: boolean | cdktf.IResolvable;
}
export interface AuthenticationPolicyServerCiscoIseDtos {
  /**
  * Description about the Cisco ISE server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#description AuthenticationPolicyServer#description}
  */
  readonly description?: string;
  /**
  * Fully-qualified domain name of the Cisco ISE server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#fqdn AuthenticationPolicyServer#fqdn}
  */
  readonly fqdn: string;
  /**
  * IP Address of the Cisco ISE Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#ip_address AuthenticationPolicyServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Password of the Cisco ISE server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#password AuthenticationPolicyServer#password}
  */
  readonly password: string;
  /**
  * SSH key of the Cisco ISE server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#sshkey AuthenticationPolicyServer#sshkey}
  */
  readonly sshkey?: string;
  /**
  * Subscriber name of the Cisco ISE server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#subscriber_name AuthenticationPolicyServer#subscriber_name}
  */
  readonly subscriberName: string;
  /**
  * User name of the Cisco ISE server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#user_name AuthenticationPolicyServer#user_name}
  */
  readonly userName: string;
}

export function authenticationPolicyServerCiscoIseDtosToTerraform(struct?: AuthenticationPolicyServerCiscoIseDtos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    password: cdktf.stringToTerraform(struct!.password),
    sshkey: cdktf.stringToTerraform(struct!.sshkey),
    subscriber_name: cdktf.stringToTerraform(struct!.subscriberName),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function authenticationPolicyServerCiscoIseDtosToHclTerraform(struct?: AuthenticationPolicyServerCiscoIseDtos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    sshkey: {
      value: cdktf.stringToHclTerraform(struct!.sshkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscriber_name: {
      value: cdktf.stringToHclTerraform(struct!.subscriberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationPolicyServerCiscoIseDtosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationPolicyServerCiscoIseDtos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshkey = this._sshkey;
    }
    if (this._subscriberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriberName = this._subscriberName;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyServerCiscoIseDtos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
      this._password = undefined;
      this._sshkey = undefined;
      this._subscriberName = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
      this._password = value.password;
      this._sshkey = value.sshkey;
      this._subscriberName = value.subscriberName;
      this._userName = value.userName;
    }
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

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // password - computed: false, optional: false, required: true
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

  // sshkey - computed: false, optional: true, required: false
  private _sshkey?: string; 
  public get sshkey() {
    return this.getStringAttribute('sshkey');
  }
  public set sshkey(value: string) {
    this._sshkey = value;
  }
  public resetSshkey() {
    this._sshkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshkeyInput() {
    return this._sshkey;
  }

  // subscriber_name - computed: false, optional: false, required: true
  private _subscriberName?: string; 
  public get subscriberName() {
    return this.getStringAttribute('subscriber_name');
  }
  public set subscriberName(value: string) {
    this._subscriberName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberNameInput() {
    return this._subscriberName;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class AuthenticationPolicyServerCiscoIseDtosList extends cdktf.ComplexList {
  public internalValue? : AuthenticationPolicyServerCiscoIseDtos[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationPolicyServerCiscoIseDtosOutputReference {
    return new AuthenticationPolicyServerCiscoIseDtosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#external_ip_address AuthenticationPolicyServer#external_ip_address}
  */
  readonly externalIpAddress?: string;
}

export function authenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesToTerraform(struct?: AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ip_address: cdktf.stringToTerraform(struct!.externalIpAddress),
  }
}


export function authenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesToHclTerraform(struct?: AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.externalIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpAddress = this._externalIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIpAddress = value.externalIpAddress;
    }
  }

  // external_ip_address - computed: false, optional: true, required: false
  private _externalIpAddress?: string; 
  public get externalIpAddress() {
    return this.getStringAttribute('external_ip_address');
  }
  public set externalIpAddress(value: string) {
    this._externalIpAddress = value;
  }
  public resetExternalIpAddress() {
    this._externalIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpAddressInput() {
    return this._externalIpAddress;
  }
}

export class AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesList extends cdktf.ComplexList {
  public internalValue? : AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesOutputReference {
    return new AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationPolicyServerExternalCiscoIseIpAddrDtos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#external_cisco_ise_ip_addresses AuthenticationPolicyServer#external_cisco_ise_ip_addresses}
  */
  readonly externalCiscoIseIpAddresses?: AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#type AuthenticationPolicyServer#type}
  */
  readonly type?: string;
}

export function authenticationPolicyServerExternalCiscoIseIpAddrDtosToTerraform(struct?: AuthenticationPolicyServerExternalCiscoIseIpAddrDtos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_cisco_ise_ip_addresses: cdktf.listMapper(authenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesToTerraform, false)(struct!.externalCiscoIseIpAddresses),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function authenticationPolicyServerExternalCiscoIseIpAddrDtosToHclTerraform(struct?: AuthenticationPolicyServerExternalCiscoIseIpAddrDtos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_cisco_ise_ip_addresses: {
      value: cdktf.listMapperHcl(authenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesToHclTerraform, false)(struct!.externalCiscoIseIpAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationPolicyServerExternalCiscoIseIpAddrDtosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationPolicyServerExternalCiscoIseIpAddrDtos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalCiscoIseIpAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalCiscoIseIpAddresses = this._externalCiscoIseIpAddresses?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyServerExternalCiscoIseIpAddrDtos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalCiscoIseIpAddresses.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalCiscoIseIpAddresses.internalValue = value.externalCiscoIseIpAddresses;
      this._type = value.type;
    }
  }

  // external_cisco_ise_ip_addresses - computed: false, optional: true, required: false
  private _externalCiscoIseIpAddresses = new AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddressesList(this, "external_cisco_ise_ip_addresses", false);
  public get externalCiscoIseIpAddresses() {
    return this._externalCiscoIseIpAddresses;
  }
  public putExternalCiscoIseIpAddresses(value: AuthenticationPolicyServerExternalCiscoIseIpAddrDtosExternalCiscoIseIpAddresses[] | cdktf.IResolvable) {
    this._externalCiscoIseIpAddresses.internalValue = value;
  }
  public resetExternalCiscoIseIpAddresses() {
    this._externalCiscoIseIpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalCiscoIseIpAddressesInput() {
    return this._externalCiscoIseIpAddresses.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class AuthenticationPolicyServerExternalCiscoIseIpAddrDtosList extends cdktf.ComplexList {
  public internalValue? : AuthenticationPolicyServerExternalCiscoIseIpAddrDtos[] | cdktf.IResolvable

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
  public get(index: number): AuthenticationPolicyServerExternalCiscoIseIpAddrDtosOutputReference {
    return new AuthenticationPolicyServerExternalCiscoIseIpAddrDtosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server catalystcenter_authentication_policy_server}
*/
export class AuthenticationPolicyServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_authentication_policy_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationPolicyServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationPolicyServer to import
  * @param importFromId The id of the existing AuthenticationPolicyServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationPolicyServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_authentication_policy_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/authentication_policy_server catalystcenter_authentication_policy_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationPolicyServerConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationPolicyServerConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_authentication_policy_server',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountingPort = config.accountingPort;
    this._authenticationPort = config.authenticationPort;
    this._ciscoIseDtos.internalValue = config.ciscoIseDtos;
    this._encryptionKey = config.encryptionKey;
    this._encryptionScheme = config.encryptionScheme;
    this._externalCiscoIseIpAddrDtos.internalValue = config.externalCiscoIseIpAddrDtos;
    this._ipAddress = config.ipAddress;
    this._isIseEnabled = config.isIseEnabled;
    this._messageKey = config.messageKey;
    this._port = config.port;
    this._protocol = config.protocol;
    this._pxgridEnabled = config.pxgridEnabled;
    this._retries = config.retries;
    this._role = config.role;
    this._sharedSecret = config.sharedSecret;
    this._timeoutSeconds = config.timeoutSeconds;
    this._useDnacCertForPxgrid = config.useDnacCertForPxgrid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounting_port - computed: false, optional: false, required: true
  private _accountingPort?: number; 
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }
  public set accountingPort(value: number) {
    this._accountingPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingPortInput() {
    return this._accountingPort;
  }

  // authentication_port - computed: false, optional: false, required: true
  private _authenticationPort?: number; 
  public get authenticationPort() {
    return this.getNumberAttribute('authentication_port');
  }
  public set authenticationPort(value: number) {
    this._authenticationPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPortInput() {
    return this._authenticationPort;
  }

  // cisco_ise_dtos - computed: false, optional: true, required: false
  private _ciscoIseDtos = new AuthenticationPolicyServerCiscoIseDtosList(this, "cisco_ise_dtos", false);
  public get ciscoIseDtos() {
    return this._ciscoIseDtos;
  }
  public putCiscoIseDtos(value: AuthenticationPolicyServerCiscoIseDtos[] | cdktf.IResolvable) {
    this._ciscoIseDtos.internalValue = value;
  }
  public resetCiscoIseDtos() {
    this._ciscoIseDtos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoIseDtosInput() {
    return this._ciscoIseDtos.internalValue;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // encryption_scheme - computed: false, optional: true, required: false
  private _encryptionScheme?: string; 
  public get encryptionScheme() {
    return this.getStringAttribute('encryption_scheme');
  }
  public set encryptionScheme(value: string) {
    this._encryptionScheme = value;
  }
  public resetEncryptionScheme() {
    this._encryptionScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSchemeInput() {
    return this._encryptionScheme;
  }

  // external_cisco_ise_ip_addr_dtos - computed: false, optional: true, required: false
  private _externalCiscoIseIpAddrDtos = new AuthenticationPolicyServerExternalCiscoIseIpAddrDtosList(this, "external_cisco_ise_ip_addr_dtos", false);
  public get externalCiscoIseIpAddrDtos() {
    return this._externalCiscoIseIpAddrDtos;
  }
  public putExternalCiscoIseIpAddrDtos(value: AuthenticationPolicyServerExternalCiscoIseIpAddrDtos[] | cdktf.IResolvable) {
    this._externalCiscoIseIpAddrDtos.internalValue = value;
  }
  public resetExternalCiscoIseIpAddrDtos() {
    this._externalCiscoIseIpAddrDtos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalCiscoIseIpAddrDtosInput() {
    return this._externalCiscoIseIpAddrDtos.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // is_ise_enabled - computed: false, optional: true, required: false
  private _isIseEnabled?: boolean | cdktf.IResolvable; 
  public get isIseEnabled() {
    return this.getBooleanAttribute('is_ise_enabled');
  }
  public set isIseEnabled(value: boolean | cdktf.IResolvable) {
    this._isIseEnabled = value;
  }
  public resetIsIseEnabled() {
    this._isIseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIseEnabledInput() {
    return this._isIseEnabled;
  }

  // message_key - computed: false, optional: true, required: false
  private _messageKey?: string; 
  public get messageKey() {
    return this.getStringAttribute('message_key');
  }
  public set messageKey(value: string) {
    this._messageKey = value;
  }
  public resetMessageKey() {
    this._messageKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageKeyInput() {
    return this._messageKey;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // pxgrid_enabled - computed: false, optional: true, required: false
  private _pxgridEnabled?: boolean | cdktf.IResolvable; 
  public get pxgridEnabled() {
    return this.getBooleanAttribute('pxgrid_enabled');
  }
  public set pxgridEnabled(value: boolean | cdktf.IResolvable) {
    this._pxgridEnabled = value;
  }
  public resetPxgridEnabled() {
    this._pxgridEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxgridEnabledInput() {
    return this._pxgridEnabled;
  }

  // retries - computed: false, optional: false, required: true
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // shared_secret - computed: false, optional: false, required: true
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }

  // timeout_seconds - computed: false, optional: false, required: true
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // use_dnac_cert_for_pxgrid - computed: false, optional: true, required: false
  private _useDnacCertForPxgrid?: boolean | cdktf.IResolvable; 
  public get useDnacCertForPxgrid() {
    return this.getBooleanAttribute('use_dnac_cert_for_pxgrid');
  }
  public set useDnacCertForPxgrid(value: boolean | cdktf.IResolvable) {
    this._useDnacCertForPxgrid = value;
  }
  public resetUseDnacCertForPxgrid() {
    this._useDnacCertForPxgrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDnacCertForPxgridInput() {
    return this._useDnacCertForPxgrid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accounting_port: cdktf.numberToTerraform(this._accountingPort),
      authentication_port: cdktf.numberToTerraform(this._authenticationPort),
      cisco_ise_dtos: cdktf.listMapper(authenticationPolicyServerCiscoIseDtosToTerraform, false)(this._ciscoIseDtos.internalValue),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      encryption_scheme: cdktf.stringToTerraform(this._encryptionScheme),
      external_cisco_ise_ip_addr_dtos: cdktf.listMapper(authenticationPolicyServerExternalCiscoIseIpAddrDtosToTerraform, false)(this._externalCiscoIseIpAddrDtos.internalValue),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      is_ise_enabled: cdktf.booleanToTerraform(this._isIseEnabled),
      message_key: cdktf.stringToTerraform(this._messageKey),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      pxgrid_enabled: cdktf.booleanToTerraform(this._pxgridEnabled),
      retries: cdktf.numberToTerraform(this._retries),
      role: cdktf.stringToTerraform(this._role),
      shared_secret: cdktf.stringToTerraform(this._sharedSecret),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
      use_dnac_cert_for_pxgrid: cdktf.booleanToTerraform(this._useDnacCertForPxgrid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accounting_port: {
        value: cdktf.numberToHclTerraform(this._accountingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_port: {
        value: cdktf.numberToHclTerraform(this._authenticationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cisco_ise_dtos: {
        value: cdktf.listMapperHcl(authenticationPolicyServerCiscoIseDtosToHclTerraform, false)(this._ciscoIseDtos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationPolicyServerCiscoIseDtosList",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_scheme: {
        value: cdktf.stringToHclTerraform(this._encryptionScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_cisco_ise_ip_addr_dtos: {
        value: cdktf.listMapperHcl(authenticationPolicyServerExternalCiscoIseIpAddrDtosToHclTerraform, false)(this._externalCiscoIseIpAddrDtos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationPolicyServerExternalCiscoIseIpAddrDtosList",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_ise_enabled: {
        value: cdktf.booleanToHclTerraform(this._isIseEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      message_key: {
        value: cdktf.stringToHclTerraform(this._messageKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pxgrid_enabled: {
        value: cdktf.booleanToHclTerraform(this._pxgridEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_secret: {
        value: cdktf.stringToHclTerraform(this._sharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_dnac_cert_for_pxgrid: {
        value: cdktf.booleanToHclTerraform(this._useDnacCertForPxgrid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
