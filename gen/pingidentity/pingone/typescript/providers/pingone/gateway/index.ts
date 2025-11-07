// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * For LDAP gateways only: A string that specifies the distinguished name information to bind to the LDAP directory (for example, `uid=pingone,dc=bxretail,dc=org`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#bind_dn Gateway#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * For LDAP gateways only: A string that specifies the bind password for the LDAP directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#bind_password Gateway#bind_password}
  */
  readonly bindPassword?: string;
  /**
  * For LDAP gateways only: A string that specifies the connection security type.  Options are `None`, `StartTLS`, `TLS`.  Defaults to `None`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#connection_security Gateway#connection_security}
  */
  readonly connectionSecurity?: string;
  /**
  * A string that specifies a description to apply to the gateway resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#description Gateway#description}
  */
  readonly description?: string;
  /**
  * A boolean that specifies whether the gateway is enabled in the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#enabled Gateway#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The ID of the environment to manage the gateway in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#environment_id Gateway#environment_id}
  */
  readonly environmentId: string;
  /**
  * For LDAP gateways only: A boolean that, when set to true, PingOne sends LDAP queries per referrals it receives from the LDAP servers.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#follow_referrals Gateway#follow_referrals}
  */
  readonly followReferrals?: boolean | cdktf.IResolvable;
  /**
  * For LDAP gateways only: A single object that specifies Kerberos connection details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#kerberos Gateway#kerberos}
  */
  readonly kerberos?: GatewayKerberos;
  /**
  * A string that specifies the name of the gateway resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#name Gateway#name}
  */
  readonly name: string;
  /**
  * For RADIUS gateways only: A set of objects describing RADIUS client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#radius_clients Gateway#radius_clients}
  */
  readonly radiusClients?: GatewayRadiusClients[] | cdktf.IResolvable;
  /**
  * For RADIUS gateways only: A string that specifies the ID of the DaVinci flow policy to use. Must be a valid PingOne DaVinci resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#radius_davinci_policy_id Gateway#radius_davinci_policy_id}
  */
  readonly radiusDavinciPolicyId?: string;
  /**
  * For RADIUS gateways only: A string that specifies the value to use for the shared secret if the shared secret is not provided for one or more of the RADIUS clients specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#radius_default_shared_secret Gateway#radius_default_shared_secret}
  */
  readonly radiusDefaultSharedSecret?: string;
  /**
  * For RADIUS gateways only: A single object that allows configuration of the RADIUS gateway to authenticate using the MS-CHAP v2 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#radius_network_policy_server Gateway#radius_network_policy_server}
  */
  readonly radiusNetworkPolicyServer?: GatewayRadiusNetworkPolicyServer;
  /**
  * For LDAP gateways only: A set of LDAP server host name and port number combinations (for example, [`ds1.bxretail.org:636`, `ds2.bxretail.org:636`]).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#servers Gateway#servers}
  */
  readonly servers?: string[];
  /**
  * A string that specifies the type of gateway.  Options are `API_GATEWAY_INTEGRATION`, `LDAP`, `PING_FEDERATE`, `PING_INTELLIGENCE`, `RADIUS`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#type Gateway#type}
  */
  readonly type: string;
  /**
  * For LDAP gateways only: A map of objects that define how users should be provisioned in PingOne, where the map key is the name to apply to the user type configuration. The `user_types` map of objects specifies which user properties in PingOne correspond to the user properties in an external LDAP directory. You can use an LDAP browser to view the user properties in the external LDAP directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#user_types Gateway#user_types}
  */
  readonly userTypes?: { [key: string]: GatewayUserTypes } | cdktf.IResolvable;
  /**
  * For LDAP gateways only: A boolean that specifies whether or not to trust all SSL certificates, including self-signed. If this value is `false`, TLS certificates are not validated. When the value is set to `true`, only certificates that are signed by the default JVM CAs, or the CA certs that the customer has uploaded to the certificate service are trusted.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#validate_tls_certificates Gateway#validate_tls_certificates}
  */
  readonly validateTlsCertificates?: boolean | cdktf.IResolvable;
  /**
  * For LDAP gateways only: A string that specifies the LDAP vendor.  Options are `CA Directory`, `IBM (Tivoli) Security Directory Server`, `LDAPv3-compliant Directory Server`, `Microsoft Active Directory`, `OpenDJ Directory Server`, `Oracle Directory Server Enterprise Edition`, `Oracle Unified Directory`, `PingDirectory`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#vendor Gateway#vendor}
  */
  readonly vendor?: string;
}
export interface GatewayKerberos {
  /**
  * An integer that specifies the number of minutes for which the previous credentials are persisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#retain_previous_credentials_mins Gateway#retain_previous_credentials_mins}
  */
  readonly retainPreviousCredentialsMins?: number;
  /**
  * A string that specifies the password for the Kerberos service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#service_account_password Gateway#service_account_password}
  */
  readonly serviceAccountPassword?: string;
  /**
  * A string that specifies the Kerberos service account user principal name (for example, `username@bxretail.org`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#service_account_upn Gateway#service_account_upn}
  */
  readonly serviceAccountUpn: string;
}

export function gatewayKerberosToTerraform(struct?: GatewayKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retain_previous_credentials_mins: cdktf.numberToTerraform(struct!.retainPreviousCredentialsMins),
    service_account_password: cdktf.stringToTerraform(struct!.serviceAccountPassword),
    service_account_upn: cdktf.stringToTerraform(struct!.serviceAccountUpn),
  }
}


export function gatewayKerberosToHclTerraform(struct?: GatewayKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retain_previous_credentials_mins: {
      value: cdktf.numberToHclTerraform(struct!.retainPreviousCredentialsMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_password: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_upn: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountUpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayKerberos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainPreviousCredentialsMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainPreviousCredentialsMins = this._retainPreviousCredentialsMins;
    }
    if (this._serviceAccountPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountPassword = this._serviceAccountPassword;
    }
    if (this._serviceAccountUpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountUpn = this._serviceAccountUpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayKerberos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retainPreviousCredentialsMins = undefined;
      this._serviceAccountPassword = undefined;
      this._serviceAccountUpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retainPreviousCredentialsMins = value.retainPreviousCredentialsMins;
      this._serviceAccountPassword = value.serviceAccountPassword;
      this._serviceAccountUpn = value.serviceAccountUpn;
    }
  }

  // retain_previous_credentials_mins - computed: false, optional: true, required: false
  private _retainPreviousCredentialsMins?: number; 
  public get retainPreviousCredentialsMins() {
    return this.getNumberAttribute('retain_previous_credentials_mins');
  }
  public set retainPreviousCredentialsMins(value: number) {
    this._retainPreviousCredentialsMins = value;
  }
  public resetRetainPreviousCredentialsMins() {
    this._retainPreviousCredentialsMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousCredentialsMinsInput() {
    return this._retainPreviousCredentialsMins;
  }

  // service_account_password - computed: false, optional: true, required: false
  private _serviceAccountPassword?: string; 
  public get serviceAccountPassword() {
    return this.getStringAttribute('service_account_password');
  }
  public set serviceAccountPassword(value: string) {
    this._serviceAccountPassword = value;
  }
  public resetServiceAccountPassword() {
    this._serviceAccountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountPasswordInput() {
    return this._serviceAccountPassword;
  }

  // service_account_upn - computed: false, optional: false, required: true
  private _serviceAccountUpn?: string; 
  public get serviceAccountUpn() {
    return this.getStringAttribute('service_account_upn');
  }
  public set serviceAccountUpn(value: string) {
    this._serviceAccountUpn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountUpnInput() {
    return this._serviceAccountUpn;
  }
}
export interface GatewayRadiusClients {
  /**
  * A string that specifies the IP address of the RADIUS client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#ip Gateway#ip}
  */
  readonly ip: string;
  /**
  * A string that specifies the shared secret for the RADIUS client. If this value is not provided, the shared secret specified with `radius_default_shared_secret` is used. If you are not providing a shared secret for the client, this parameter is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#shared_secret Gateway#shared_secret}
  */
  readonly sharedSecret?: string;
}

export function gatewayRadiusClientsToTerraform(struct?: GatewayRadiusClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    shared_secret: cdktf.stringToTerraform(struct!.sharedSecret),
  }
}


export function gatewayRadiusClientsToHclTerraform(struct?: GatewayRadiusClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayRadiusClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayRadiusClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._sharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecret = this._sharedSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayRadiusClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._sharedSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._sharedSecret = value.sharedSecret;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // shared_secret - computed: false, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }
}

export class GatewayRadiusClientsList extends cdktf.ComplexList {
  public internalValue? : GatewayRadiusClients[] | cdktf.IResolvable

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
  public get(index: number): GatewayRadiusClientsOutputReference {
    return new GatewayRadiusClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayRadiusNetworkPolicyServer {
  /**
  * A string that specifies the IP address of the Network Policy Server (NPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#ip Gateway#ip}
  */
  readonly ip: string;
  /**
  * An integer that specifies the port number of the NPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#port Gateway#port}
  */
  readonly port: number;
}

export function gatewayRadiusNetworkPolicyServerToTerraform(struct?: GatewayRadiusNetworkPolicyServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayRadiusNetworkPolicyServerToHclTerraform(struct?: GatewayRadiusNetworkPolicyServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayRadiusNetworkPolicyServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayRadiusNetworkPolicyServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayRadiusNetworkPolicyServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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
}
export interface GatewayUserTypesNewUserLookupAttributeMappings {
  /**
  * A string that specifies the name of a user attribute in PingOne. See [Users properties](https://apidocs.pingidentity.com/pingone/platform/v1/api/#users) for the complete list of available PingOne user attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#name Gateway#name}
  */
  readonly name: string;
  /**
  * A string that specifies the reference to the corresponding external LDAP attribute.  Values are in the format `${ldapAttributes.mail}`, while Terraform HCL requires an additional `$` prefix character. For example, `$${ldapAttributes.mail}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#value Gateway#value}
  */
  readonly value: string;
}

export function gatewayUserTypesNewUserLookupAttributeMappingsToTerraform(struct?: GatewayUserTypesNewUserLookupAttributeMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gatewayUserTypesNewUserLookupAttributeMappingsToHclTerraform(struct?: GatewayUserTypesNewUserLookupAttributeMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUserTypesNewUserLookupAttributeMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayUserTypesNewUserLookupAttributeMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUserTypesNewUserLookupAttributeMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GatewayUserTypesNewUserLookupAttributeMappingsList extends cdktf.ComplexList {
  public internalValue? : GatewayUserTypesNewUserLookupAttributeMappings[] | cdktf.IResolvable

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
  public get(index: number): GatewayUserTypesNewUserLookupAttributeMappingsOutputReference {
    return new GatewayUserTypesNewUserLookupAttributeMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayUserTypesNewUserLookup {
  /**
  * A set of objects supplying a mapping of PingOne attributes to external LDAP attributes. One of the entries must be a mapping for `username`. This is required for the PingOne user schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#attribute_mappings Gateway#attribute_mappings}
  */
  readonly attributeMappings: GatewayUserTypesNewUserLookupAttributeMappings[] | cdktf.IResolvable;
  /**
  * The LDAP user search filter to use to match users against the entered user identifier at login. For example, `(((uid=${identifier})(mail=${identifier}))`. Alternatively, this can be a search against the user directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#ldap_filter_pattern Gateway#ldap_filter_pattern}
  */
  readonly ldapFilterPattern: string;
  /**
  * A string that specifies the ID of the population to use to create user entries during lookup.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#population_id Gateway#population_id}
  */
  readonly populationId: string;
}

export function gatewayUserTypesNewUserLookupToTerraform(struct?: GatewayUserTypesNewUserLookup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_mappings: cdktf.listMapper(gatewayUserTypesNewUserLookupAttributeMappingsToTerraform, false)(struct!.attributeMappings),
    ldap_filter_pattern: cdktf.stringToTerraform(struct!.ldapFilterPattern),
    population_id: cdktf.stringToTerraform(struct!.populationId),
  }
}


export function gatewayUserTypesNewUserLookupToHclTerraform(struct?: GatewayUserTypesNewUserLookup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_mappings: {
      value: cdktf.listMapperHcl(gatewayUserTypesNewUserLookupAttributeMappingsToHclTerraform, false)(struct!.attributeMappings),
      isBlock: true,
      type: "set",
      storageClassType: "GatewayUserTypesNewUserLookupAttributeMappingsList",
    },
    ldap_filter_pattern: {
      value: cdktf.stringToHclTerraform(struct!.ldapFilterPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    population_id: {
      value: cdktf.stringToHclTerraform(struct!.populationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUserTypesNewUserLookupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayUserTypesNewUserLookup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMappings = this._attributeMappings?.internalValue;
    }
    if (this._ldapFilterPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapFilterPattern = this._ldapFilterPattern;
    }
    if (this._populationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.populationId = this._populationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUserTypesNewUserLookup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeMappings.internalValue = undefined;
      this._ldapFilterPattern = undefined;
      this._populationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeMappings.internalValue = value.attributeMappings;
      this._ldapFilterPattern = value.ldapFilterPattern;
      this._populationId = value.populationId;
    }
  }

  // attribute_mappings - computed: false, optional: false, required: true
  private _attributeMappings = new GatewayUserTypesNewUserLookupAttributeMappingsList(this, "attribute_mappings", true);
  public get attributeMappings() {
    return this._attributeMappings;
  }
  public putAttributeMappings(value: GatewayUserTypesNewUserLookupAttributeMappings[] | cdktf.IResolvable) {
    this._attributeMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMappingsInput() {
    return this._attributeMappings.internalValue;
  }

  // ldap_filter_pattern - computed: false, optional: false, required: true
  private _ldapFilterPattern?: string; 
  public get ldapFilterPattern() {
    return this.getStringAttribute('ldap_filter_pattern');
  }
  public set ldapFilterPattern(value: string) {
    this._ldapFilterPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapFilterPatternInput() {
    return this._ldapFilterPattern;
  }

  // population_id - computed: false, optional: false, required: true
  private _populationId?: string; 
  public get populationId() {
    return this.getStringAttribute('population_id');
  }
  public set populationId(value: string) {
    this._populationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get populationIdInput() {
    return this._populationId;
  }
}
export interface GatewayUserTypes {
  /**
  * A boolean that, if set to `false`, the user cannot change the password in the remote LDAP directory. In this case, operations for forgotten passwords or resetting of passwords are not available to a user referencing this gateway.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#allow_password_changes Gateway#allow_password_changes}
  */
  readonly allowPasswordChanges?: boolean | cdktf.IResolvable;
  /**
  * A single object that describes the configurations for initially authenticating new users who will be migrated to PingOne. Note: If there are multiple users having the same user name, only the first user processed is provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#new_user_lookup Gateway#new_user_lookup}
  */
  readonly newUserLookup?: GatewayUserTypesNewUserLookup;
  /**
  * A string that specifies the password authority for the user type.  Options are `LDAP`, `PING_ONE`.  If set to `PING_ONE`, PingOne authenticates with the external directory initially, then PingOne authenticates all subsequent sign-ons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#password_authority Gateway#password_authority}
  */
  readonly passwordAuthority: string;
  /**
  * A string that specifies the LDAP base domain name (DN) for this user type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#search_base_dn Gateway#search_base_dn}
  */
  readonly searchBaseDn: string;
  /**
  * A boolean that, if set to `true`, when users sign on through an LDAP Gateway client, user attributes are updated based on responses from the LDAP server.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#update_user_on_successful_authentication Gateway#update_user_on_successful_authentication}
  */
  readonly updateUserOnSuccessfulAuthentication?: boolean | cdktf.IResolvable;
  /**
  * A list of strings that represent LDAP attribute names that uniquely identify the user, and link to users in PingOne.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#user_link_attributes Gateway#user_link_attributes}
  */
  readonly userLinkAttributes: string[];
}

export function gatewayUserTypesToTerraform(struct?: GatewayUserTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_password_changes: cdktf.booleanToTerraform(struct!.allowPasswordChanges),
    new_user_lookup: gatewayUserTypesNewUserLookupToTerraform(struct!.newUserLookup),
    password_authority: cdktf.stringToTerraform(struct!.passwordAuthority),
    search_base_dn: cdktf.stringToTerraform(struct!.searchBaseDn),
    update_user_on_successful_authentication: cdktf.booleanToTerraform(struct!.updateUserOnSuccessfulAuthentication),
    user_link_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userLinkAttributes),
  }
}


export function gatewayUserTypesToHclTerraform(struct?: GatewayUserTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_password_changes: {
      value: cdktf.booleanToHclTerraform(struct!.allowPasswordChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    new_user_lookup: {
      value: gatewayUserTypesNewUserLookupToHclTerraform(struct!.newUserLookup),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayUserTypesNewUserLookup",
    },
    password_authority: {
      value: cdktf.stringToHclTerraform(struct!.passwordAuthority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_base_dn: {
      value: cdktf.stringToHclTerraform(struct!.searchBaseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_user_on_successful_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.updateUserOnSuccessfulAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_link_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userLinkAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayUserTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): GatewayUserTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPasswordChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPasswordChanges = this._allowPasswordChanges;
    }
    if (this._newUserLookup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newUserLookup = this._newUserLookup?.internalValue;
    }
    if (this._passwordAuthority !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAuthority = this._passwordAuthority;
    }
    if (this._searchBaseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBaseDn = this._searchBaseDn;
    }
    if (this._updateUserOnSuccessfulAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateUserOnSuccessfulAuthentication = this._updateUserOnSuccessfulAuthentication;
    }
    if (this._userLinkAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLinkAttributes = this._userLinkAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayUserTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPasswordChanges = undefined;
      this._newUserLookup.internalValue = undefined;
      this._passwordAuthority = undefined;
      this._searchBaseDn = undefined;
      this._updateUserOnSuccessfulAuthentication = undefined;
      this._userLinkAttributes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPasswordChanges = value.allowPasswordChanges;
      this._newUserLookup.internalValue = value.newUserLookup;
      this._passwordAuthority = value.passwordAuthority;
      this._searchBaseDn = value.searchBaseDn;
      this._updateUserOnSuccessfulAuthentication = value.updateUserOnSuccessfulAuthentication;
      this._userLinkAttributes = value.userLinkAttributes;
    }
  }

  // allow_password_changes - computed: true, optional: true, required: false
  private _allowPasswordChanges?: boolean | cdktf.IResolvable; 
  public get allowPasswordChanges() {
    return this.getBooleanAttribute('allow_password_changes');
  }
  public set allowPasswordChanges(value: boolean | cdktf.IResolvable) {
    this._allowPasswordChanges = value;
  }
  public resetAllowPasswordChanges() {
    this._allowPasswordChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPasswordChangesInput() {
    return this._allowPasswordChanges;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // new_user_lookup - computed: false, optional: true, required: false
  private _newUserLookup = new GatewayUserTypesNewUserLookupOutputReference(this, "new_user_lookup");
  public get newUserLookup() {
    return this._newUserLookup;
  }
  public putNewUserLookup(value: GatewayUserTypesNewUserLookup) {
    this._newUserLookup.internalValue = value;
  }
  public resetNewUserLookup() {
    this._newUserLookup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUserLookupInput() {
    return this._newUserLookup.internalValue;
  }

  // password_authority - computed: false, optional: false, required: true
  private _passwordAuthority?: string; 
  public get passwordAuthority() {
    return this.getStringAttribute('password_authority');
  }
  public set passwordAuthority(value: string) {
    this._passwordAuthority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthorityInput() {
    return this._passwordAuthority;
  }

  // search_base_dn - computed: false, optional: false, required: true
  private _searchBaseDn?: string; 
  public get searchBaseDn() {
    return this.getStringAttribute('search_base_dn');
  }
  public set searchBaseDn(value: string) {
    this._searchBaseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseDnInput() {
    return this._searchBaseDn;
  }

  // update_user_on_successful_authentication - computed: true, optional: true, required: false
  private _updateUserOnSuccessfulAuthentication?: boolean | cdktf.IResolvable; 
  public get updateUserOnSuccessfulAuthentication() {
    return this.getBooleanAttribute('update_user_on_successful_authentication');
  }
  public set updateUserOnSuccessfulAuthentication(value: boolean | cdktf.IResolvable) {
    this._updateUserOnSuccessfulAuthentication = value;
  }
  public resetUpdateUserOnSuccessfulAuthentication() {
    this._updateUserOnSuccessfulAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUserOnSuccessfulAuthenticationInput() {
    return this._updateUserOnSuccessfulAuthentication;
  }

  // user_link_attributes - computed: false, optional: false, required: true
  private _userLinkAttributes?: string[]; 
  public get userLinkAttributes() {
    return this.getListAttribute('user_link_attributes');
  }
  public set userLinkAttributes(value: string[]) {
    this._userLinkAttributes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userLinkAttributesInput() {
    return this._userLinkAttributes;
  }
}

export class GatewayUserTypesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: GatewayUserTypes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): GatewayUserTypesOutputReference {
    return new GatewayUserTypesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway pingone_gateway}
*/
export class Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gateway to import
  * @param importFromId The id of the existing Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/gateway pingone_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_gateway',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindDn = config.bindDn;
    this._bindPassword = config.bindPassword;
    this._connectionSecurity = config.connectionSecurity;
    this._description = config.description;
    this._enabled = config.enabled;
    this._environmentId = config.environmentId;
    this._followReferrals = config.followReferrals;
    this._kerberos.internalValue = config.kerberos;
    this._name = config.name;
    this._radiusClients.internalValue = config.radiusClients;
    this._radiusDavinciPolicyId = config.radiusDavinciPolicyId;
    this._radiusDefaultSharedSecret = config.radiusDefaultSharedSecret;
    this._radiusNetworkPolicyServer.internalValue = config.radiusNetworkPolicyServer;
    this._servers = config.servers;
    this._type = config.type;
    this._userTypes.internalValue = config.userTypes;
    this._validateTlsCertificates = config.validateTlsCertificates;
    this._vendor = config.vendor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind_dn - computed: false, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // bind_password - computed: false, optional: true, required: false
  private _bindPassword?: string; 
  public get bindPassword() {
    return this.getStringAttribute('bind_password');
  }
  public set bindPassword(value: string) {
    this._bindPassword = value;
  }
  public resetBindPassword() {
    this._bindPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
  }

  // connection_security - computed: true, optional: true, required: false
  private _connectionSecurity?: string; 
  public get connectionSecurity() {
    return this.getStringAttribute('connection_security');
  }
  public set connectionSecurity(value: string) {
    this._connectionSecurity = value;
  }
  public resetConnectionSecurity() {
    this._connectionSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSecurityInput() {
    return this._connectionSecurity;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // follow_referrals - computed: true, optional: true, required: false
  private _followReferrals?: boolean | cdktf.IResolvable; 
  public get followReferrals() {
    return this.getBooleanAttribute('follow_referrals');
  }
  public set followReferrals(value: boolean | cdktf.IResolvable) {
    this._followReferrals = value;
  }
  public resetFollowReferrals() {
    this._followReferrals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followReferralsInput() {
    return this._followReferrals;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kerberos - computed: false, optional: true, required: false
  private _kerberos = new GatewayKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: GatewayKerberos) {
    this._kerberos.internalValue = value;
  }
  public resetKerberos() {
    this._kerberos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
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

  // radius_clients - computed: false, optional: true, required: false
  private _radiusClients = new GatewayRadiusClientsList(this, "radius_clients", true);
  public get radiusClients() {
    return this._radiusClients;
  }
  public putRadiusClients(value: GatewayRadiusClients[] | cdktf.IResolvable) {
    this._radiusClients.internalValue = value;
  }
  public resetRadiusClients() {
    this._radiusClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusClientsInput() {
    return this._radiusClients.internalValue;
  }

  // radius_davinci_policy_id - computed: false, optional: true, required: false
  private _radiusDavinciPolicyId?: string; 
  public get radiusDavinciPolicyId() {
    return this.getStringAttribute('radius_davinci_policy_id');
  }
  public set radiusDavinciPolicyId(value: string) {
    this._radiusDavinciPolicyId = value;
  }
  public resetRadiusDavinciPolicyId() {
    this._radiusDavinciPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDavinciPolicyIdInput() {
    return this._radiusDavinciPolicyId;
  }

  // radius_default_shared_secret - computed: false, optional: true, required: false
  private _radiusDefaultSharedSecret?: string; 
  public get radiusDefaultSharedSecret() {
    return this.getStringAttribute('radius_default_shared_secret');
  }
  public set radiusDefaultSharedSecret(value: string) {
    this._radiusDefaultSharedSecret = value;
  }
  public resetRadiusDefaultSharedSecret() {
    this._radiusDefaultSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusDefaultSharedSecretInput() {
    return this._radiusDefaultSharedSecret;
  }

  // radius_network_policy_server - computed: false, optional: true, required: false
  private _radiusNetworkPolicyServer = new GatewayRadiusNetworkPolicyServerOutputReference(this, "radius_network_policy_server");
  public get radiusNetworkPolicyServer() {
    return this._radiusNetworkPolicyServer;
  }
  public putRadiusNetworkPolicyServer(value: GatewayRadiusNetworkPolicyServer) {
    this._radiusNetworkPolicyServer.internalValue = value;
  }
  public resetRadiusNetworkPolicyServer() {
    this._radiusNetworkPolicyServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusNetworkPolicyServerInput() {
    return this._radiusNetworkPolicyServer.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return cdktf.Fn.tolist(this.getListAttribute('servers'));
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_types - computed: false, optional: true, required: false
  private _userTypes = new GatewayUserTypesMap(this, "user_types");
  public get userTypes() {
    return this._userTypes;
  }
  public putUserTypes(value: { [key: string]: GatewayUserTypes } | cdktf.IResolvable) {
    this._userTypes.internalValue = value;
  }
  public resetUserTypes() {
    this._userTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypesInput() {
    return this._userTypes.internalValue;
  }

  // validate_tls_certificates - computed: true, optional: true, required: false
  private _validateTlsCertificates?: boolean | cdktf.IResolvable; 
  public get validateTlsCertificates() {
    return this.getBooleanAttribute('validate_tls_certificates');
  }
  public set validateTlsCertificates(value: boolean | cdktf.IResolvable) {
    this._validateTlsCertificates = value;
  }
  public resetValidateTlsCertificates() {
    this._validateTlsCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateTlsCertificatesInput() {
    return this._validateTlsCertificates;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bind_dn: cdktf.stringToTerraform(this._bindDn),
      bind_password: cdktf.stringToTerraform(this._bindPassword),
      connection_security: cdktf.stringToTerraform(this._connectionSecurity),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      follow_referrals: cdktf.booleanToTerraform(this._followReferrals),
      kerberos: gatewayKerberosToTerraform(this._kerberos.internalValue),
      name: cdktf.stringToTerraform(this._name),
      radius_clients: cdktf.listMapper(gatewayRadiusClientsToTerraform, false)(this._radiusClients.internalValue),
      radius_davinci_policy_id: cdktf.stringToTerraform(this._radiusDavinciPolicyId),
      radius_default_shared_secret: cdktf.stringToTerraform(this._radiusDefaultSharedSecret),
      radius_network_policy_server: gatewayRadiusNetworkPolicyServerToTerraform(this._radiusNetworkPolicyServer.internalValue),
      servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servers),
      type: cdktf.stringToTerraform(this._type),
      user_types: cdktf.hashMapper(gatewayUserTypesToTerraform)(this._userTypes.internalValue),
      validate_tls_certificates: cdktf.booleanToTerraform(this._validateTlsCertificates),
      vendor: cdktf.stringToTerraform(this._vendor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bind_dn: {
        value: cdktf.stringToHclTerraform(this._bindDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_password: {
        value: cdktf.stringToHclTerraform(this._bindPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_security: {
        value: cdktf.stringToHclTerraform(this._connectionSecurity),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      follow_referrals: {
        value: cdktf.booleanToHclTerraform(this._followReferrals),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kerberos: {
        value: gatewayKerberosToHclTerraform(this._kerberos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayKerberos",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_clients: {
        value: cdktf.listMapperHcl(gatewayRadiusClientsToHclTerraform, false)(this._radiusClients.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GatewayRadiusClientsList",
      },
      radius_davinci_policy_id: {
        value: cdktf.stringToHclTerraform(this._radiusDavinciPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_default_shared_secret: {
        value: cdktf.stringToHclTerraform(this._radiusDefaultSharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_network_policy_server: {
        value: gatewayRadiusNetworkPolicyServerToHclTerraform(this._radiusNetworkPolicyServer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayRadiusNetworkPolicyServer",
      },
      servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_types: {
        value: cdktf.hashMapperHcl(gatewayUserTypesToHclTerraform)(this._userTypes.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "GatewayUserTypesMap",
      },
      validate_tls_certificates: {
        value: cdktf.booleanToHclTerraform(this._validateTlsCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
