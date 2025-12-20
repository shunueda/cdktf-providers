// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#device ManagementInterface#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#folder ManagementInterface#folder}
  */
  readonly folder?: string;
  /**
  * Management interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#management_interface ManagementInterface#management_interface}
  */
  readonly managementInterface?: ManagementInterfaceManagementInterface;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#snippet ManagementInterface#snippet}
  */
  readonly snippet?: string;
}
export interface ManagementInterfaceManagementInterfaceMgmtTypeDhcpClient {
  /**
  * Accept DHCP server provided domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#accept_dhcp_domain ManagementInterface#accept_dhcp_domain}
  */
  readonly acceptDhcpDomain?: boolean | cdktf.IResolvable;
  /**
  * Accept DHCP server provided hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#accept_dhcp_hostname ManagementInterface#accept_dhcp_hostname}
  */
  readonly acceptDhcpHostname?: boolean | cdktf.IResolvable;
  /**
  * Send client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#send_client_id ManagementInterface#send_client_id}
  */
  readonly sendClientId?: boolean | cdktf.IResolvable;
  /**
  * Send hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#send_hostname ManagementInterface#send_hostname}
  */
  readonly sendHostname?: boolean | cdktf.IResolvable;
}

export function managementInterfaceManagementInterfaceMgmtTypeDhcpClientToTerraform(struct?: ManagementInterfaceManagementInterfaceMgmtTypeDhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_dhcp_domain: cdktf.booleanToTerraform(struct!.acceptDhcpDomain),
    accept_dhcp_hostname: cdktf.booleanToTerraform(struct!.acceptDhcpHostname),
    send_client_id: cdktf.booleanToTerraform(struct!.sendClientId),
    send_hostname: cdktf.booleanToTerraform(struct!.sendHostname),
  }
}


export function managementInterfaceManagementInterfaceMgmtTypeDhcpClientToHclTerraform(struct?: ManagementInterfaceManagementInterfaceMgmtTypeDhcpClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_dhcp_domain: {
      value: cdktf.booleanToHclTerraform(struct!.acceptDhcpDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accept_dhcp_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.acceptDhcpHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_client_id: {
      value: cdktf.booleanToHclTerraform(struct!.sendClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.sendHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInterfaceManagementInterfaceMgmtTypeDhcpClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementInterfaceManagementInterfaceMgmtTypeDhcpClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptDhcpDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptDhcpDomain = this._acceptDhcpDomain;
    }
    if (this._acceptDhcpHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptDhcpHostname = this._acceptDhcpHostname;
    }
    if (this._sendClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientId = this._sendClientId;
    }
    if (this._sendHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendHostname = this._sendHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceManagementInterfaceMgmtTypeDhcpClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptDhcpDomain = undefined;
      this._acceptDhcpHostname = undefined;
      this._sendClientId = undefined;
      this._sendHostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptDhcpDomain = value.acceptDhcpDomain;
      this._acceptDhcpHostname = value.acceptDhcpHostname;
      this._sendClientId = value.sendClientId;
      this._sendHostname = value.sendHostname;
    }
  }

  // accept_dhcp_domain - computed: true, optional: true, required: false
  private _acceptDhcpDomain?: boolean | cdktf.IResolvable; 
  public get acceptDhcpDomain() {
    return this.getBooleanAttribute('accept_dhcp_domain');
  }
  public set acceptDhcpDomain(value: boolean | cdktf.IResolvable) {
    this._acceptDhcpDomain = value;
  }
  public resetAcceptDhcpDomain() {
    this._acceptDhcpDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptDhcpDomainInput() {
    return this._acceptDhcpDomain;
  }

  // accept_dhcp_hostname - computed: true, optional: true, required: false
  private _acceptDhcpHostname?: boolean | cdktf.IResolvable; 
  public get acceptDhcpHostname() {
    return this.getBooleanAttribute('accept_dhcp_hostname');
  }
  public set acceptDhcpHostname(value: boolean | cdktf.IResolvable) {
    this._acceptDhcpHostname = value;
  }
  public resetAcceptDhcpHostname() {
    this._acceptDhcpHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptDhcpHostnameInput() {
    return this._acceptDhcpHostname;
  }

  // send_client_id - computed: true, optional: true, required: false
  private _sendClientId?: boolean | cdktf.IResolvable; 
  public get sendClientId() {
    return this.getBooleanAttribute('send_client_id');
  }
  public set sendClientId(value: boolean | cdktf.IResolvable) {
    this._sendClientId = value;
  }
  public resetSendClientId() {
    this._sendClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientIdInput() {
    return this._sendClientId;
  }

  // send_hostname - computed: true, optional: true, required: false
  private _sendHostname?: boolean | cdktf.IResolvable; 
  public get sendHostname() {
    return this.getBooleanAttribute('send_hostname');
  }
  public set sendHostname(value: boolean | cdktf.IResolvable) {
    this._sendHostname = value;
  }
  public resetSendHostname() {
    this._sendHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendHostnameInput() {
    return this._sendHostname;
  }
}
export interface ManagementInterfaceManagementInterfaceMgmtTypeStatic {
  /**
  * Default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#default_gateway ManagementInterface#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#ip_address ManagementInterface#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#netmask ManagementInterface#netmask}
  */
  readonly netmask: string;
}

export function managementInterfaceManagementInterfaceMgmtTypeStaticToTerraform(struct?: ManagementInterfaceManagementInterfaceMgmtTypeStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    netmask: cdktf.stringToTerraform(struct!.netmask),
  }
}


export function managementInterfaceManagementInterfaceMgmtTypeStaticToHclTerraform(struct?: ManagementInterfaceManagementInterfaceMgmtTypeStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
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
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInterfaceManagementInterfaceMgmtTypeStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementInterfaceManagementInterfaceMgmtTypeStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceManagementInterfaceMgmtTypeStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultGateway = undefined;
      this._ipAddress = undefined;
      this._netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultGateway = value.defaultGateway;
      this._ipAddress = value.ipAddress;
      this._netmask = value.netmask;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
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

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }
}
export interface ManagementInterfaceManagementInterfaceMgmtType {
  /**
  * Dhcp client
  * > ℹ️ **Note:** You must specify exactly one of `dhcp_client` and `static`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#dhcp_client ManagementInterface#dhcp_client}
  */
  readonly dhcpClient?: ManagementInterfaceManagementInterfaceMgmtTypeDhcpClient;
  /**
  * Static
  * > ℹ️ **Note:** You must specify exactly one of `dhcp_client` and `static`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#static ManagementInterface#static}
  */
  readonly static?: ManagementInterfaceManagementInterfaceMgmtTypeStatic;
}

export function managementInterfaceManagementInterfaceMgmtTypeToTerraform(struct?: ManagementInterfaceManagementInterfaceMgmtType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_client: managementInterfaceManagementInterfaceMgmtTypeDhcpClientToTerraform(struct!.dhcpClient),
    static: managementInterfaceManagementInterfaceMgmtTypeStaticToTerraform(struct!.static),
  }
}


export function managementInterfaceManagementInterfaceMgmtTypeToHclTerraform(struct?: ManagementInterfaceManagementInterfaceMgmtType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_client: {
      value: managementInterfaceManagementInterfaceMgmtTypeDhcpClientToHclTerraform(struct!.dhcpClient),
      isBlock: true,
      type: "struct",
      storageClassType: "ManagementInterfaceManagementInterfaceMgmtTypeDhcpClient",
    },
    static: {
      value: managementInterfaceManagementInterfaceMgmtTypeStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "ManagementInterfaceManagementInterfaceMgmtTypeStatic",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInterfaceManagementInterfaceMgmtTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementInterfaceManagementInterfaceMgmtType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceManagementInterfaceMgmtType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpClient.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpClient.internalValue = value.dhcpClient;
      this._static.internalValue = value.static;
    }
  }

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient = new ManagementInterfaceManagementInterfaceMgmtTypeDhcpClientOutputReference(this, "dhcp_client");
  public get dhcpClient() {
    return this._dhcpClient;
  }
  public putDhcpClient(value: ManagementInterfaceManagementInterfaceMgmtTypeDhcpClient) {
    this._dhcpClient.internalValue = value;
  }
  public resetDhcpClient() {
    this._dhcpClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new ManagementInterfaceManagementInterfaceMgmtTypeStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: ManagementInterfaceManagementInterfaceMgmtTypeStatic) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface ManagementInterfaceManagementInterfacePermittedIp {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#description ManagementInterface#description}
  */
  readonly description?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#name ManagementInterface#name}
  */
  readonly name?: string;
}

export function managementInterfaceManagementInterfacePermittedIpToTerraform(struct?: ManagementInterfaceManagementInterfacePermittedIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function managementInterfaceManagementInterfacePermittedIpToHclTerraform(struct?: ManagementInterfaceManagementInterfacePermittedIp | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInterfaceManagementInterfacePermittedIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementInterfaceManagementInterfacePermittedIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceManagementInterfacePermittedIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
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

  // name - computed: false, optional: true, required: false
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
}

export class ManagementInterfaceManagementInterfacePermittedIpList extends cdktf.ComplexList {
  public internalValue? : ManagementInterfaceManagementInterfacePermittedIp[] | cdktf.IResolvable

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
  public get(index: number): ManagementInterfaceManagementInterfacePermittedIpOutputReference {
    return new ManagementInterfaceManagementInterfacePermittedIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementInterfaceManagementInterfaceService {
  /**
  * HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#disable_http ManagementInterface#disable_http}
  */
  readonly disableHttp?: boolean | cdktf.IResolvable;
  /**
  * HTTP OCSP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#disable_http_ocsp ManagementInterface#disable_http_ocsp}
  */
  readonly disableHttpOcsp?: boolean | cdktf.IResolvable;
  /**
  * HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#disable_https ManagementInterface#disable_https}
  */
  readonly disableHttps?: boolean | cdktf.IResolvable;
  /**
  * Ping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#disable_icmp ManagementInterface#disable_icmp}
  */
  readonly disableIcmp?: boolean | cdktf.IResolvable;
  /**
  * SNMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#disable_snmp ManagementInterface#disable_snmp}
  */
  readonly disableSnmp?: boolean | cdktf.IResolvable;
  /**
  * SSH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#disable_ssh ManagementInterface#disable_ssh}
  */
  readonly disableSsh?: boolean | cdktf.IResolvable;
  /**
  * Telnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#disable_telnet ManagementInterface#disable_telnet}
  */
  readonly disableTelnet?: boolean | cdktf.IResolvable;
  /**
  * User-ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#disable_userid_service ManagementInterface#disable_userid_service}
  */
  readonly disableUseridService?: boolean | cdktf.IResolvable;
  /**
  * User-ID syslog listener over SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#disable_userid_syslog_listener_ssl ManagementInterface#disable_userid_syslog_listener_ssl}
  */
  readonly disableUseridSyslogListenerSsl?: boolean | cdktf.IResolvable;
  /**
  * User-ID syslog listener over UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#disable_userid_syslog_listener_udp ManagementInterface#disable_userid_syslog_listener_udp}
  */
  readonly disableUseridSyslogListenerUdp?: boolean | cdktf.IResolvable;
}

export function managementInterfaceManagementInterfaceServiceToTerraform(struct?: ManagementInterfaceManagementInterfaceService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_http: cdktf.booleanToTerraform(struct!.disableHttp),
    disable_http_ocsp: cdktf.booleanToTerraform(struct!.disableHttpOcsp),
    disable_https: cdktf.booleanToTerraform(struct!.disableHttps),
    disable_icmp: cdktf.booleanToTerraform(struct!.disableIcmp),
    disable_snmp: cdktf.booleanToTerraform(struct!.disableSnmp),
    disable_ssh: cdktf.booleanToTerraform(struct!.disableSsh),
    disable_telnet: cdktf.booleanToTerraform(struct!.disableTelnet),
    disable_userid_service: cdktf.booleanToTerraform(struct!.disableUseridService),
    disable_userid_syslog_listener_ssl: cdktf.booleanToTerraform(struct!.disableUseridSyslogListenerSsl),
    disable_userid_syslog_listener_udp: cdktf.booleanToTerraform(struct!.disableUseridSyslogListenerUdp),
  }
}


export function managementInterfaceManagementInterfaceServiceToHclTerraform(struct?: ManagementInterfaceManagementInterfaceService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_http: {
      value: cdktf.booleanToHclTerraform(struct!.disableHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_http_ocsp: {
      value: cdktf.booleanToHclTerraform(struct!.disableHttpOcsp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_https: {
      value: cdktf.booleanToHclTerraform(struct!.disableHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_icmp: {
      value: cdktf.booleanToHclTerraform(struct!.disableIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_snmp: {
      value: cdktf.booleanToHclTerraform(struct!.disableSnmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_ssh: {
      value: cdktf.booleanToHclTerraform(struct!.disableSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_telnet: {
      value: cdktf.booleanToHclTerraform(struct!.disableTelnet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_userid_service: {
      value: cdktf.booleanToHclTerraform(struct!.disableUseridService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_userid_syslog_listener_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.disableUseridSyslogListenerSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_userid_syslog_listener_udp: {
      value: cdktf.booleanToHclTerraform(struct!.disableUseridSyslogListenerUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInterfaceManagementInterfaceServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementInterfaceManagementInterfaceService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHttp = this._disableHttp;
    }
    if (this._disableHttpOcsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHttpOcsp = this._disableHttpOcsp;
    }
    if (this._disableHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHttps = this._disableHttps;
    }
    if (this._disableIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIcmp = this._disableIcmp;
    }
    if (this._disableSnmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSnmp = this._disableSnmp;
    }
    if (this._disableSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSsh = this._disableSsh;
    }
    if (this._disableTelnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTelnet = this._disableTelnet;
    }
    if (this._disableUseridService !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUseridService = this._disableUseridService;
    }
    if (this._disableUseridSyslogListenerSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUseridSyslogListenerSsl = this._disableUseridSyslogListenerSsl;
    }
    if (this._disableUseridSyslogListenerUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUseridSyslogListenerUdp = this._disableUseridSyslogListenerUdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceManagementInterfaceService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableHttp = undefined;
      this._disableHttpOcsp = undefined;
      this._disableHttps = undefined;
      this._disableIcmp = undefined;
      this._disableSnmp = undefined;
      this._disableSsh = undefined;
      this._disableTelnet = undefined;
      this._disableUseridService = undefined;
      this._disableUseridSyslogListenerSsl = undefined;
      this._disableUseridSyslogListenerUdp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableHttp = value.disableHttp;
      this._disableHttpOcsp = value.disableHttpOcsp;
      this._disableHttps = value.disableHttps;
      this._disableIcmp = value.disableIcmp;
      this._disableSnmp = value.disableSnmp;
      this._disableSsh = value.disableSsh;
      this._disableTelnet = value.disableTelnet;
      this._disableUseridService = value.disableUseridService;
      this._disableUseridSyslogListenerSsl = value.disableUseridSyslogListenerSsl;
      this._disableUseridSyslogListenerUdp = value.disableUseridSyslogListenerUdp;
    }
  }

  // disable_http - computed: true, optional: true, required: false
  private _disableHttp?: boolean | cdktf.IResolvable; 
  public get disableHttp() {
    return this.getBooleanAttribute('disable_http');
  }
  public set disableHttp(value: boolean | cdktf.IResolvable) {
    this._disableHttp = value;
  }
  public resetDisableHttp() {
    this._disableHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHttpInput() {
    return this._disableHttp;
  }

  // disable_http_ocsp - computed: true, optional: true, required: false
  private _disableHttpOcsp?: boolean | cdktf.IResolvable; 
  public get disableHttpOcsp() {
    return this.getBooleanAttribute('disable_http_ocsp');
  }
  public set disableHttpOcsp(value: boolean | cdktf.IResolvable) {
    this._disableHttpOcsp = value;
  }
  public resetDisableHttpOcsp() {
    this._disableHttpOcsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHttpOcspInput() {
    return this._disableHttpOcsp;
  }

  // disable_https - computed: true, optional: true, required: false
  private _disableHttps?: boolean | cdktf.IResolvable; 
  public get disableHttps() {
    return this.getBooleanAttribute('disable_https');
  }
  public set disableHttps(value: boolean | cdktf.IResolvable) {
    this._disableHttps = value;
  }
  public resetDisableHttps() {
    this._disableHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHttpsInput() {
    return this._disableHttps;
  }

  // disable_icmp - computed: true, optional: true, required: false
  private _disableIcmp?: boolean | cdktf.IResolvable; 
  public get disableIcmp() {
    return this.getBooleanAttribute('disable_icmp');
  }
  public set disableIcmp(value: boolean | cdktf.IResolvable) {
    this._disableIcmp = value;
  }
  public resetDisableIcmp() {
    this._disableIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIcmpInput() {
    return this._disableIcmp;
  }

  // disable_snmp - computed: true, optional: true, required: false
  private _disableSnmp?: boolean | cdktf.IResolvable; 
  public get disableSnmp() {
    return this.getBooleanAttribute('disable_snmp');
  }
  public set disableSnmp(value: boolean | cdktf.IResolvable) {
    this._disableSnmp = value;
  }
  public resetDisableSnmp() {
    this._disableSnmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSnmpInput() {
    return this._disableSnmp;
  }

  // disable_ssh - computed: true, optional: true, required: false
  private _disableSsh?: boolean | cdktf.IResolvable; 
  public get disableSsh() {
    return this.getBooleanAttribute('disable_ssh');
  }
  public set disableSsh(value: boolean | cdktf.IResolvable) {
    this._disableSsh = value;
  }
  public resetDisableSsh() {
    this._disableSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSshInput() {
    return this._disableSsh;
  }

  // disable_telnet - computed: true, optional: true, required: false
  private _disableTelnet?: boolean | cdktf.IResolvable; 
  public get disableTelnet() {
    return this.getBooleanAttribute('disable_telnet');
  }
  public set disableTelnet(value: boolean | cdktf.IResolvable) {
    this._disableTelnet = value;
  }
  public resetDisableTelnet() {
    this._disableTelnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTelnetInput() {
    return this._disableTelnet;
  }

  // disable_userid_service - computed: true, optional: true, required: false
  private _disableUseridService?: boolean | cdktf.IResolvable; 
  public get disableUseridService() {
    return this.getBooleanAttribute('disable_userid_service');
  }
  public set disableUseridService(value: boolean | cdktf.IResolvable) {
    this._disableUseridService = value;
  }
  public resetDisableUseridService() {
    this._disableUseridService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUseridServiceInput() {
    return this._disableUseridService;
  }

  // disable_userid_syslog_listener_ssl - computed: true, optional: true, required: false
  private _disableUseridSyslogListenerSsl?: boolean | cdktf.IResolvable; 
  public get disableUseridSyslogListenerSsl() {
    return this.getBooleanAttribute('disable_userid_syslog_listener_ssl');
  }
  public set disableUseridSyslogListenerSsl(value: boolean | cdktf.IResolvable) {
    this._disableUseridSyslogListenerSsl = value;
  }
  public resetDisableUseridSyslogListenerSsl() {
    this._disableUseridSyslogListenerSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUseridSyslogListenerSslInput() {
    return this._disableUseridSyslogListenerSsl;
  }

  // disable_userid_syslog_listener_udp - computed: true, optional: true, required: false
  private _disableUseridSyslogListenerUdp?: boolean | cdktf.IResolvable; 
  public get disableUseridSyslogListenerUdp() {
    return this.getBooleanAttribute('disable_userid_syslog_listener_udp');
  }
  public set disableUseridSyslogListenerUdp(value: boolean | cdktf.IResolvable) {
    this._disableUseridSyslogListenerUdp = value;
  }
  public resetDisableUseridSyslogListenerUdp() {
    this._disableUseridSyslogListenerUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUseridSyslogListenerUdpInput() {
    return this._disableUseridSyslogListenerUdp;
  }
}
export interface ManagementInterfaceManagementInterface {
  /**
  * IP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#mgmt_type ManagementInterface#mgmt_type}
  */
  readonly mgmtType?: ManagementInterfaceManagementInterfaceMgmtType;
  /**
  * MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#mtu ManagementInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * Permitting IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#permitted_ip ManagementInterface#permitted_ip}
  */
  readonly permittedIp?: ManagementInterfaceManagementInterfacePermittedIp[] | cdktf.IResolvable;
  /**
  * Network services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#service ManagementInterface#service}
  */
  readonly service?: ManagementInterfaceManagementInterfaceService;
  /**
  * Speed and duplex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#speed_duplex ManagementInterface#speed_duplex}
  */
  readonly speedDuplex?: string;
}

export function managementInterfaceManagementInterfaceToTerraform(struct?: ManagementInterfaceManagementInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mgmt_type: managementInterfaceManagementInterfaceMgmtTypeToTerraform(struct!.mgmtType),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    permitted_ip: cdktf.listMapper(managementInterfaceManagementInterfacePermittedIpToTerraform, false)(struct!.permittedIp),
    service: managementInterfaceManagementInterfaceServiceToTerraform(struct!.service),
    speed_duplex: cdktf.stringToTerraform(struct!.speedDuplex),
  }
}


export function managementInterfaceManagementInterfaceToHclTerraform(struct?: ManagementInterfaceManagementInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mgmt_type: {
      value: managementInterfaceManagementInterfaceMgmtTypeToHclTerraform(struct!.mgmtType),
      isBlock: true,
      type: "struct",
      storageClassType: "ManagementInterfaceManagementInterfaceMgmtType",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permitted_ip: {
      value: cdktf.listMapperHcl(managementInterfaceManagementInterfacePermittedIpToHclTerraform, false)(struct!.permittedIp),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementInterfaceManagementInterfacePermittedIpList",
    },
    service: {
      value: managementInterfaceManagementInterfaceServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "ManagementInterfaceManagementInterfaceService",
    },
    speed_duplex: {
      value: cdktf.stringToHclTerraform(struct!.speedDuplex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInterfaceManagementInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementInterfaceManagementInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mgmtType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtType = this._mgmtType?.internalValue;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._permittedIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permittedIp = this._permittedIp?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._speedDuplex !== undefined) {
      hasAnyValues = true;
      internalValueResult.speedDuplex = this._speedDuplex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceManagementInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mgmtType.internalValue = undefined;
      this._mtu = undefined;
      this._permittedIp.internalValue = undefined;
      this._service.internalValue = undefined;
      this._speedDuplex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mgmtType.internalValue = value.mgmtType;
      this._mtu = value.mtu;
      this._permittedIp.internalValue = value.permittedIp;
      this._service.internalValue = value.service;
      this._speedDuplex = value.speedDuplex;
    }
  }

  // mgmt_type - computed: false, optional: true, required: false
  private _mgmtType = new ManagementInterfaceManagementInterfaceMgmtTypeOutputReference(this, "mgmt_type");
  public get mgmtType() {
    return this._mgmtType;
  }
  public putMgmtType(value: ManagementInterfaceManagementInterfaceMgmtType) {
    this._mgmtType.internalValue = value;
  }
  public resetMgmtType() {
    this._mgmtType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtTypeInput() {
    return this._mgmtType.internalValue;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // permitted_ip - computed: false, optional: true, required: false
  private _permittedIp = new ManagementInterfaceManagementInterfacePermittedIpList(this, "permitted_ip", false);
  public get permittedIp() {
    return this._permittedIp;
  }
  public putPermittedIp(value: ManagementInterfaceManagementInterfacePermittedIp[] | cdktf.IResolvable) {
    this._permittedIp.internalValue = value;
  }
  public resetPermittedIp() {
    this._permittedIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedIpInput() {
    return this._permittedIp.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new ManagementInterfaceManagementInterfaceServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: ManagementInterfaceManagementInterfaceService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // speed_duplex - computed: true, optional: true, required: false
  private _speedDuplex?: string; 
  public get speedDuplex() {
    return this.getStringAttribute('speed_duplex');
  }
  public set speedDuplex(value: string) {
    this._speedDuplex = value;
  }
  public resetSpeedDuplex() {
    this._speedDuplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedDuplexInput() {
    return this._speedDuplex;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface scm_management_interface}
*/
export class ManagementInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_management_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementInterface to import
  * @param importFromId The id of the existing ManagementInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_management_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/management_interface scm_management_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementInterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_management_interface',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._managementInterface.internalValue = config.managementInterface;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // management_interface - computed: false, optional: true, required: false
  private _managementInterface = new ManagementInterfaceManagementInterfaceOutputReference(this, "management_interface");
  public get managementInterface() {
    return this._managementInterface;
  }
  public putManagementInterface(value: ManagementInterfaceManagementInterface) {
    this._managementInterface.internalValue = value;
  }
  public resetManagementInterface() {
    this._managementInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInterfaceInput() {
    return this._managementInterface.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      management_interface: managementInterfaceManagementInterfaceToTerraform(this._managementInterface.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_interface: {
        value: managementInterfaceManagementInterfaceToHclTerraform(this._managementInterface.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagementInterfaceManagementInterface",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
