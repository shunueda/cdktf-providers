// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#description AdminRole#description}
  */
  readonly description?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#location AdminRole#location}
  */
  readonly location: AdminRoleLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#name AdminRole#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#role AdminRole#role}
  */
  readonly role?: AdminRoleRole;
}
export interface AdminRoleLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#name AdminRole#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#panorama_device AdminRole#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function adminRoleLocationTemplateToTerraform(struct?: AdminRoleLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function adminRoleLocationTemplateToHclTerraform(struct?: AdminRoleLocationTemplate | cdktf.IResolvable): any {
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
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
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

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface AdminRoleLocation {
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#template AdminRole#template}
  */
  readonly template?: AdminRoleLocationTemplate;
}

export function adminRoleLocationToTerraform(struct?: AdminRoleLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: adminRoleLocationTemplateToTerraform(struct!.template),
  }
}


export function adminRoleLocationToHclTerraform(struct?: AdminRoleLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: adminRoleLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleLocationTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template = new AdminRoleLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: AdminRoleLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
export interface AdminRoleRoleDeviceRestapiDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#email_server_profiles AdminRole#email_server_profiles}
  */
  readonly emailServerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#http_server_profiles AdminRole#http_server_profiles}
  */
  readonly httpServerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ldap_server_profiles AdminRole#ldap_server_profiles}
  */
  readonly ldapServerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log_interface_setting AdminRole#log_interface_setting}
  */
  readonly logInterfaceSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#snmp_trap_server_profiles AdminRole#snmp_trap_server_profiles}
  */
  readonly snmpTrapServerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#syslog_server_profiles AdminRole#syslog_server_profiles}
  */
  readonly syslogServerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#virtual_systems AdminRole#virtual_systems}
  */
  readonly virtualSystems?: string;
}

export function adminRoleRoleDeviceRestapiDeviceToTerraform(struct?: AdminRoleRoleDeviceRestapiDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_server_profiles: cdktf.stringToTerraform(struct!.emailServerProfiles),
    http_server_profiles: cdktf.stringToTerraform(struct!.httpServerProfiles),
    ldap_server_profiles: cdktf.stringToTerraform(struct!.ldapServerProfiles),
    log_interface_setting: cdktf.stringToTerraform(struct!.logInterfaceSetting),
    snmp_trap_server_profiles: cdktf.stringToTerraform(struct!.snmpTrapServerProfiles),
    syslog_server_profiles: cdktf.stringToTerraform(struct!.syslogServerProfiles),
    virtual_systems: cdktf.stringToTerraform(struct!.virtualSystems),
  }
}


export function adminRoleRoleDeviceRestapiDeviceToHclTerraform(struct?: AdminRoleRoleDeviceRestapiDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_server_profiles: {
      value: cdktf.stringToHclTerraform(struct!.emailServerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_server_profiles: {
      value: cdktf.stringToHclTerraform(struct!.httpServerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_server_profiles: {
      value: cdktf.stringToHclTerraform(struct!.ldapServerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_interface_setting: {
      value: cdktf.stringToHclTerraform(struct!.logInterfaceSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_trap_server_profiles: {
      value: cdktf.stringToHclTerraform(struct!.snmpTrapServerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_server_profiles: {
      value: cdktf.stringToHclTerraform(struct!.syslogServerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_systems: {
      value: cdktf.stringToHclTerraform(struct!.virtualSystems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceRestapiDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceRestapiDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailServerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailServerProfiles = this._emailServerProfiles;
    }
    if (this._httpServerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpServerProfiles = this._httpServerProfiles;
    }
    if (this._ldapServerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapServerProfiles = this._ldapServerProfiles;
    }
    if (this._logInterfaceSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.logInterfaceSetting = this._logInterfaceSetting;
    }
    if (this._snmpTrapServerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpTrapServerProfiles = this._snmpTrapServerProfiles;
    }
    if (this._syslogServerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogServerProfiles = this._syslogServerProfiles;
    }
    if (this._virtualSystems !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSystems = this._virtualSystems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceRestapiDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailServerProfiles = undefined;
      this._httpServerProfiles = undefined;
      this._ldapServerProfiles = undefined;
      this._logInterfaceSetting = undefined;
      this._snmpTrapServerProfiles = undefined;
      this._syslogServerProfiles = undefined;
      this._virtualSystems = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailServerProfiles = value.emailServerProfiles;
      this._httpServerProfiles = value.httpServerProfiles;
      this._ldapServerProfiles = value.ldapServerProfiles;
      this._logInterfaceSetting = value.logInterfaceSetting;
      this._snmpTrapServerProfiles = value.snmpTrapServerProfiles;
      this._syslogServerProfiles = value.syslogServerProfiles;
      this._virtualSystems = value.virtualSystems;
    }
  }

  // email_server_profiles - computed: false, optional: true, required: false
  private _emailServerProfiles?: string; 
  public get emailServerProfiles() {
    return this.getStringAttribute('email_server_profiles');
  }
  public set emailServerProfiles(value: string) {
    this._emailServerProfiles = value;
  }
  public resetEmailServerProfiles() {
    this._emailServerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailServerProfilesInput() {
    return this._emailServerProfiles;
  }

  // http_server_profiles - computed: false, optional: true, required: false
  private _httpServerProfiles?: string; 
  public get httpServerProfiles() {
    return this.getStringAttribute('http_server_profiles');
  }
  public set httpServerProfiles(value: string) {
    this._httpServerProfiles = value;
  }
  public resetHttpServerProfiles() {
    this._httpServerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerProfilesInput() {
    return this._httpServerProfiles;
  }

  // ldap_server_profiles - computed: false, optional: true, required: false
  private _ldapServerProfiles?: string; 
  public get ldapServerProfiles() {
    return this.getStringAttribute('ldap_server_profiles');
  }
  public set ldapServerProfiles(value: string) {
    this._ldapServerProfiles = value;
  }
  public resetLdapServerProfiles() {
    this._ldapServerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerProfilesInput() {
    return this._ldapServerProfiles;
  }

  // log_interface_setting - computed: false, optional: true, required: false
  private _logInterfaceSetting?: string; 
  public get logInterfaceSetting() {
    return this.getStringAttribute('log_interface_setting');
  }
  public set logInterfaceSetting(value: string) {
    this._logInterfaceSetting = value;
  }
  public resetLogInterfaceSetting() {
    this._logInterfaceSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInterfaceSettingInput() {
    return this._logInterfaceSetting;
  }

  // snmp_trap_server_profiles - computed: false, optional: true, required: false
  private _snmpTrapServerProfiles?: string; 
  public get snmpTrapServerProfiles() {
    return this.getStringAttribute('snmp_trap_server_profiles');
  }
  public set snmpTrapServerProfiles(value: string) {
    this._snmpTrapServerProfiles = value;
  }
  public resetSnmpTrapServerProfiles() {
    this._snmpTrapServerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapServerProfilesInput() {
    return this._snmpTrapServerProfiles;
  }

  // syslog_server_profiles - computed: false, optional: true, required: false
  private _syslogServerProfiles?: string; 
  public get syslogServerProfiles() {
    return this.getStringAttribute('syslog_server_profiles');
  }
  public set syslogServerProfiles(value: string) {
    this._syslogServerProfiles = value;
  }
  public resetSyslogServerProfiles() {
    this._syslogServerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerProfilesInput() {
    return this._syslogServerProfiles;
  }

  // virtual_systems - computed: false, optional: true, required: false
  private _virtualSystems?: string; 
  public get virtualSystems() {
    return this.getStringAttribute('virtual_systems');
  }
  public set virtualSystems(value: string) {
    this._virtualSystems = value;
  }
  public resetVirtualSystems() {
    this._virtualSystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSystemsInput() {
    return this._virtualSystems;
  }
}
export interface AdminRoleRoleDeviceRestapiNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#aggregate_ethernet_interfaces AdminRole#aggregate_ethernet_interfaces}
  */
  readonly aggregateEthernetInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#bfd_network_profiles AdminRole#bfd_network_profiles}
  */
  readonly bfdNetworkProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#bgp_routing_profiles AdminRole#bgp_routing_profiles}
  */
  readonly bgpRoutingProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dhcp_relays AdminRole#dhcp_relays}
  */
  readonly dhcpRelays?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dhcp_servers AdminRole#dhcp_servers}
  */
  readonly dhcpServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dns_proxies AdminRole#dns_proxies}
  */
  readonly dnsProxies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ethernet_interfaces AdminRole#ethernet_interfaces}
  */
  readonly ethernetInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_clientless_app_groups AdminRole#globalprotect_clientless_app_groups}
  */
  readonly globalprotectClientlessAppGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_clientless_apps AdminRole#globalprotect_clientless_apps}
  */
  readonly globalprotectClientlessApps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_gateways AdminRole#globalprotect_gateways}
  */
  readonly globalprotectGateways?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_ipsec_crypto_network_profiles AdminRole#globalprotect_ipsec_crypto_network_profiles}
  */
  readonly globalprotectIpsecCryptoNetworkProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_mdm_servers AdminRole#globalprotect_mdm_servers}
  */
  readonly globalprotectMdmServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_portals AdminRole#globalprotect_portals}
  */
  readonly globalprotectPortals?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gre_tunnels AdminRole#gre_tunnels}
  */
  readonly greTunnels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ike_crypto_network_profiles AdminRole#ike_crypto_network_profiles}
  */
  readonly ikeCryptoNetworkProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ike_gateway_network_profiles AdminRole#ike_gateway_network_profiles}
  */
  readonly ikeGatewayNetworkProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#interface_management_network_profiles AdminRole#interface_management_network_profiles}
  */
  readonly interfaceManagementNetworkProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ipsec_crypto_network_profiles AdminRole#ipsec_crypto_network_profiles}
  */
  readonly ipsecCryptoNetworkProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ipsec_tunnels AdminRole#ipsec_tunnels}
  */
  readonly ipsecTunnels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#lldp AdminRole#lldp}
  */
  readonly lldp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#lldp_network_profiles AdminRole#lldp_network_profiles}
  */
  readonly lldpNetworkProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#logical_routers AdminRole#logical_routers}
  */
  readonly logicalRouters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#loopback_interfaces AdminRole#loopback_interfaces}
  */
  readonly loopbackInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#qos_interfaces AdminRole#qos_interfaces}
  */
  readonly qosInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#qos_network_profiles AdminRole#qos_network_profiles}
  */
  readonly qosNetworkProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_interface_profiles AdminRole#sdwan_interface_profiles}
  */
  readonly sdwanInterfaceProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_interfaces AdminRole#sdwan_interfaces}
  */
  readonly sdwanInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_interfaces AdminRole#tunnel_interfaces}
  */
  readonly tunnelInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_monitor_network_profiles AdminRole#tunnel_monitor_network_profiles}
  */
  readonly tunnelMonitorNetworkProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#virtual_routers AdminRole#virtual_routers}
  */
  readonly virtualRouters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#virtual_wires AdminRole#virtual_wires}
  */
  readonly virtualWires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vlan_interfaces AdminRole#vlan_interfaces}
  */
  readonly vlanInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vlans AdminRole#vlans}
  */
  readonly vlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#zone_protection_network_profiles AdminRole#zone_protection_network_profiles}
  */
  readonly zoneProtectionNetworkProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#zones AdminRole#zones}
  */
  readonly zones?: string;
}

export function adminRoleRoleDeviceRestapiNetworkToTerraform(struct?: AdminRoleRoleDeviceRestapiNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_ethernet_interfaces: cdktf.stringToTerraform(struct!.aggregateEthernetInterfaces),
    bfd_network_profiles: cdktf.stringToTerraform(struct!.bfdNetworkProfiles),
    bgp_routing_profiles: cdktf.stringToTerraform(struct!.bgpRoutingProfiles),
    dhcp_relays: cdktf.stringToTerraform(struct!.dhcpRelays),
    dhcp_servers: cdktf.stringToTerraform(struct!.dhcpServers),
    dns_proxies: cdktf.stringToTerraform(struct!.dnsProxies),
    ethernet_interfaces: cdktf.stringToTerraform(struct!.ethernetInterfaces),
    globalprotect_clientless_app_groups: cdktf.stringToTerraform(struct!.globalprotectClientlessAppGroups),
    globalprotect_clientless_apps: cdktf.stringToTerraform(struct!.globalprotectClientlessApps),
    globalprotect_gateways: cdktf.stringToTerraform(struct!.globalprotectGateways),
    globalprotect_ipsec_crypto_network_profiles: cdktf.stringToTerraform(struct!.globalprotectIpsecCryptoNetworkProfiles),
    globalprotect_mdm_servers: cdktf.stringToTerraform(struct!.globalprotectMdmServers),
    globalprotect_portals: cdktf.stringToTerraform(struct!.globalprotectPortals),
    gre_tunnels: cdktf.stringToTerraform(struct!.greTunnels),
    ike_crypto_network_profiles: cdktf.stringToTerraform(struct!.ikeCryptoNetworkProfiles),
    ike_gateway_network_profiles: cdktf.stringToTerraform(struct!.ikeGatewayNetworkProfiles),
    interface_management_network_profiles: cdktf.stringToTerraform(struct!.interfaceManagementNetworkProfiles),
    ipsec_crypto_network_profiles: cdktf.stringToTerraform(struct!.ipsecCryptoNetworkProfiles),
    ipsec_tunnels: cdktf.stringToTerraform(struct!.ipsecTunnels),
    lldp: cdktf.stringToTerraform(struct!.lldp),
    lldp_network_profiles: cdktf.stringToTerraform(struct!.lldpNetworkProfiles),
    logical_routers: cdktf.stringToTerraform(struct!.logicalRouters),
    loopback_interfaces: cdktf.stringToTerraform(struct!.loopbackInterfaces),
    qos_interfaces: cdktf.stringToTerraform(struct!.qosInterfaces),
    qos_network_profiles: cdktf.stringToTerraform(struct!.qosNetworkProfiles),
    sdwan_interface_profiles: cdktf.stringToTerraform(struct!.sdwanInterfaceProfiles),
    sdwan_interfaces: cdktf.stringToTerraform(struct!.sdwanInterfaces),
    tunnel_interfaces: cdktf.stringToTerraform(struct!.tunnelInterfaces),
    tunnel_monitor_network_profiles: cdktf.stringToTerraform(struct!.tunnelMonitorNetworkProfiles),
    virtual_routers: cdktf.stringToTerraform(struct!.virtualRouters),
    virtual_wires: cdktf.stringToTerraform(struct!.virtualWires),
    vlan_interfaces: cdktf.stringToTerraform(struct!.vlanInterfaces),
    vlans: cdktf.stringToTerraform(struct!.vlans),
    zone_protection_network_profiles: cdktf.stringToTerraform(struct!.zoneProtectionNetworkProfiles),
    zones: cdktf.stringToTerraform(struct!.zones),
  }
}


export function adminRoleRoleDeviceRestapiNetworkToHclTerraform(struct?: AdminRoleRoleDeviceRestapiNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_ethernet_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.aggregateEthernetInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_network_profiles: {
      value: cdktf.stringToHclTerraform(struct!.bfdNetworkProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_routing_profiles: {
      value: cdktf.stringToHclTerraform(struct!.bgpRoutingProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relays: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_servers: {
      value: cdktf.stringToHclTerraform(struct!.dhcpServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_proxies: {
      value: cdktf.stringToHclTerraform(struct!.dnsProxies),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethernet_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.ethernetInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_clientless_app_groups: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectClientlessAppGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_clientless_apps: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectClientlessApps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_gateways: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectGateways),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_ipsec_crypto_network_profiles: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectIpsecCryptoNetworkProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_mdm_servers: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectMdmServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_portals: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectPortals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gre_tunnels: {
      value: cdktf.stringToHclTerraform(struct!.greTunnels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_crypto_network_profiles: {
      value: cdktf.stringToHclTerraform(struct!.ikeCryptoNetworkProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_gateway_network_profiles: {
      value: cdktf.stringToHclTerraform(struct!.ikeGatewayNetworkProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_management_network_profiles: {
      value: cdktf.stringToHclTerraform(struct!.interfaceManagementNetworkProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_crypto_network_profiles: {
      value: cdktf.stringToHclTerraform(struct!.ipsecCryptoNetworkProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_tunnels: {
      value: cdktf.stringToHclTerraform(struct!.ipsecTunnels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp: {
      value: cdktf.stringToHclTerraform(struct!.lldp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_network_profiles: {
      value: cdktf.stringToHclTerraform(struct!.lldpNetworkProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_routers: {
      value: cdktf.stringToHclTerraform(struct!.logicalRouters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.loopbackInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.qosInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_network_profiles: {
      value: cdktf.stringToHclTerraform(struct!.qosNetworkProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_interface_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaceProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.tunnelInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_monitor_network_profiles: {
      value: cdktf.stringToHclTerraform(struct!.tunnelMonitorNetworkProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_routers: {
      value: cdktf.stringToHclTerraform(struct!.virtualRouters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_wires: {
      value: cdktf.stringToHclTerraform(struct!.virtualWires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.vlanInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlans: {
      value: cdktf.stringToHclTerraform(struct!.vlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_protection_network_profiles: {
      value: cdktf.stringToHclTerraform(struct!.zoneProtectionNetworkProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.stringToHclTerraform(struct!.zones),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceRestapiNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceRestapiNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateEthernetInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateEthernetInterfaces = this._aggregateEthernetInterfaces;
    }
    if (this._bfdNetworkProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdNetworkProfiles = this._bfdNetworkProfiles;
    }
    if (this._bgpRoutingProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRoutingProfiles = this._bgpRoutingProfiles;
    }
    if (this._dhcpRelays !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelays = this._dhcpRelays;
    }
    if (this._dhcpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServers = this._dhcpServers;
    }
    if (this._dnsProxies !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsProxies = this._dnsProxies;
    }
    if (this._ethernetInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetInterfaces = this._ethernetInterfaces;
    }
    if (this._globalprotectClientlessAppGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectClientlessAppGroups = this._globalprotectClientlessAppGroups;
    }
    if (this._globalprotectClientlessApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectClientlessApps = this._globalprotectClientlessApps;
    }
    if (this._globalprotectGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectGateways = this._globalprotectGateways;
    }
    if (this._globalprotectIpsecCryptoNetworkProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectIpsecCryptoNetworkProfiles = this._globalprotectIpsecCryptoNetworkProfiles;
    }
    if (this._globalprotectMdmServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectMdmServers = this._globalprotectMdmServers;
    }
    if (this._globalprotectPortals !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectPortals = this._globalprotectPortals;
    }
    if (this._greTunnels !== undefined) {
      hasAnyValues = true;
      internalValueResult.greTunnels = this._greTunnels;
    }
    if (this._ikeCryptoNetworkProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeCryptoNetworkProfiles = this._ikeCryptoNetworkProfiles;
    }
    if (this._ikeGatewayNetworkProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGatewayNetworkProfiles = this._ikeGatewayNetworkProfiles;
    }
    if (this._interfaceManagementNetworkProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceManagementNetworkProfiles = this._interfaceManagementNetworkProfiles;
    }
    if (this._ipsecCryptoNetworkProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecCryptoNetworkProfiles = this._ipsecCryptoNetworkProfiles;
    }
    if (this._ipsecTunnels !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTunnels = this._ipsecTunnels;
    }
    if (this._lldp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldp = this._lldp;
    }
    if (this._lldpNetworkProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpNetworkProfiles = this._lldpNetworkProfiles;
    }
    if (this._logicalRouters !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalRouters = this._logicalRouters;
    }
    if (this._loopbackInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackInterfaces = this._loopbackInterfaces;
    }
    if (this._qosInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosInterfaces = this._qosInterfaces;
    }
    if (this._qosNetworkProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosNetworkProfiles = this._qosNetworkProfiles;
    }
    if (this._sdwanInterfaceProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaceProfiles = this._sdwanInterfaceProfiles;
    }
    if (this._sdwanInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaces = this._sdwanInterfaces;
    }
    if (this._tunnelInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelInterfaces = this._tunnelInterfaces;
    }
    if (this._tunnelMonitorNetworkProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMonitorNetworkProfiles = this._tunnelMonitorNetworkProfiles;
    }
    if (this._virtualRouters !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouters = this._virtualRouters;
    }
    if (this._virtualWires !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualWires = this._virtualWires;
    }
    if (this._vlanInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanInterfaces = this._vlanInterfaces;
    }
    if (this._vlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans;
    }
    if (this._zoneProtectionNetworkProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneProtectionNetworkProfiles = this._zoneProtectionNetworkProfiles;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceRestapiNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateEthernetInterfaces = undefined;
      this._bfdNetworkProfiles = undefined;
      this._bgpRoutingProfiles = undefined;
      this._dhcpRelays = undefined;
      this._dhcpServers = undefined;
      this._dnsProxies = undefined;
      this._ethernetInterfaces = undefined;
      this._globalprotectClientlessAppGroups = undefined;
      this._globalprotectClientlessApps = undefined;
      this._globalprotectGateways = undefined;
      this._globalprotectIpsecCryptoNetworkProfiles = undefined;
      this._globalprotectMdmServers = undefined;
      this._globalprotectPortals = undefined;
      this._greTunnels = undefined;
      this._ikeCryptoNetworkProfiles = undefined;
      this._ikeGatewayNetworkProfiles = undefined;
      this._interfaceManagementNetworkProfiles = undefined;
      this._ipsecCryptoNetworkProfiles = undefined;
      this._ipsecTunnels = undefined;
      this._lldp = undefined;
      this._lldpNetworkProfiles = undefined;
      this._logicalRouters = undefined;
      this._loopbackInterfaces = undefined;
      this._qosInterfaces = undefined;
      this._qosNetworkProfiles = undefined;
      this._sdwanInterfaceProfiles = undefined;
      this._sdwanInterfaces = undefined;
      this._tunnelInterfaces = undefined;
      this._tunnelMonitorNetworkProfiles = undefined;
      this._virtualRouters = undefined;
      this._virtualWires = undefined;
      this._vlanInterfaces = undefined;
      this._vlans = undefined;
      this._zoneProtectionNetworkProfiles = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateEthernetInterfaces = value.aggregateEthernetInterfaces;
      this._bfdNetworkProfiles = value.bfdNetworkProfiles;
      this._bgpRoutingProfiles = value.bgpRoutingProfiles;
      this._dhcpRelays = value.dhcpRelays;
      this._dhcpServers = value.dhcpServers;
      this._dnsProxies = value.dnsProxies;
      this._ethernetInterfaces = value.ethernetInterfaces;
      this._globalprotectClientlessAppGroups = value.globalprotectClientlessAppGroups;
      this._globalprotectClientlessApps = value.globalprotectClientlessApps;
      this._globalprotectGateways = value.globalprotectGateways;
      this._globalprotectIpsecCryptoNetworkProfiles = value.globalprotectIpsecCryptoNetworkProfiles;
      this._globalprotectMdmServers = value.globalprotectMdmServers;
      this._globalprotectPortals = value.globalprotectPortals;
      this._greTunnels = value.greTunnels;
      this._ikeCryptoNetworkProfiles = value.ikeCryptoNetworkProfiles;
      this._ikeGatewayNetworkProfiles = value.ikeGatewayNetworkProfiles;
      this._interfaceManagementNetworkProfiles = value.interfaceManagementNetworkProfiles;
      this._ipsecCryptoNetworkProfiles = value.ipsecCryptoNetworkProfiles;
      this._ipsecTunnels = value.ipsecTunnels;
      this._lldp = value.lldp;
      this._lldpNetworkProfiles = value.lldpNetworkProfiles;
      this._logicalRouters = value.logicalRouters;
      this._loopbackInterfaces = value.loopbackInterfaces;
      this._qosInterfaces = value.qosInterfaces;
      this._qosNetworkProfiles = value.qosNetworkProfiles;
      this._sdwanInterfaceProfiles = value.sdwanInterfaceProfiles;
      this._sdwanInterfaces = value.sdwanInterfaces;
      this._tunnelInterfaces = value.tunnelInterfaces;
      this._tunnelMonitorNetworkProfiles = value.tunnelMonitorNetworkProfiles;
      this._virtualRouters = value.virtualRouters;
      this._virtualWires = value.virtualWires;
      this._vlanInterfaces = value.vlanInterfaces;
      this._vlans = value.vlans;
      this._zoneProtectionNetworkProfiles = value.zoneProtectionNetworkProfiles;
      this._zones = value.zones;
    }
  }

  // aggregate_ethernet_interfaces - computed: false, optional: true, required: false
  private _aggregateEthernetInterfaces?: string; 
  public get aggregateEthernetInterfaces() {
    return this.getStringAttribute('aggregate_ethernet_interfaces');
  }
  public set aggregateEthernetInterfaces(value: string) {
    this._aggregateEthernetInterfaces = value;
  }
  public resetAggregateEthernetInterfaces() {
    this._aggregateEthernetInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateEthernetInterfacesInput() {
    return this._aggregateEthernetInterfaces;
  }

  // bfd_network_profiles - computed: false, optional: true, required: false
  private _bfdNetworkProfiles?: string; 
  public get bfdNetworkProfiles() {
    return this.getStringAttribute('bfd_network_profiles');
  }
  public set bfdNetworkProfiles(value: string) {
    this._bfdNetworkProfiles = value;
  }
  public resetBfdNetworkProfiles() {
    this._bfdNetworkProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdNetworkProfilesInput() {
    return this._bfdNetworkProfiles;
  }

  // bgp_routing_profiles - computed: false, optional: true, required: false
  private _bgpRoutingProfiles?: string; 
  public get bgpRoutingProfiles() {
    return this.getStringAttribute('bgp_routing_profiles');
  }
  public set bgpRoutingProfiles(value: string) {
    this._bgpRoutingProfiles = value;
  }
  public resetBgpRoutingProfiles() {
    this._bgpRoutingProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRoutingProfilesInput() {
    return this._bgpRoutingProfiles;
  }

  // dhcp_relays - computed: false, optional: true, required: false
  private _dhcpRelays?: string; 
  public get dhcpRelays() {
    return this.getStringAttribute('dhcp_relays');
  }
  public set dhcpRelays(value: string) {
    this._dhcpRelays = value;
  }
  public resetDhcpRelays() {
    this._dhcpRelays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelaysInput() {
    return this._dhcpRelays;
  }

  // dhcp_servers - computed: false, optional: true, required: false
  private _dhcpServers?: string; 
  public get dhcpServers() {
    return this.getStringAttribute('dhcp_servers');
  }
  public set dhcpServers(value: string) {
    this._dhcpServers = value;
  }
  public resetDhcpServers() {
    this._dhcpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServersInput() {
    return this._dhcpServers;
  }

  // dns_proxies - computed: false, optional: true, required: false
  private _dnsProxies?: string; 
  public get dnsProxies() {
    return this.getStringAttribute('dns_proxies');
  }
  public set dnsProxies(value: string) {
    this._dnsProxies = value;
  }
  public resetDnsProxies() {
    this._dnsProxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProxiesInput() {
    return this._dnsProxies;
  }

  // ethernet_interfaces - computed: false, optional: true, required: false
  private _ethernetInterfaces?: string; 
  public get ethernetInterfaces() {
    return this.getStringAttribute('ethernet_interfaces');
  }
  public set ethernetInterfaces(value: string) {
    this._ethernetInterfaces = value;
  }
  public resetEthernetInterfaces() {
    this._ethernetInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfacesInput() {
    return this._ethernetInterfaces;
  }

  // globalprotect_clientless_app_groups - computed: false, optional: true, required: false
  private _globalprotectClientlessAppGroups?: string; 
  public get globalprotectClientlessAppGroups() {
    return this.getStringAttribute('globalprotect_clientless_app_groups');
  }
  public set globalprotectClientlessAppGroups(value: string) {
    this._globalprotectClientlessAppGroups = value;
  }
  public resetGlobalprotectClientlessAppGroups() {
    this._globalprotectClientlessAppGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectClientlessAppGroupsInput() {
    return this._globalprotectClientlessAppGroups;
  }

  // globalprotect_clientless_apps - computed: false, optional: true, required: false
  private _globalprotectClientlessApps?: string; 
  public get globalprotectClientlessApps() {
    return this.getStringAttribute('globalprotect_clientless_apps');
  }
  public set globalprotectClientlessApps(value: string) {
    this._globalprotectClientlessApps = value;
  }
  public resetGlobalprotectClientlessApps() {
    this._globalprotectClientlessApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectClientlessAppsInput() {
    return this._globalprotectClientlessApps;
  }

  // globalprotect_gateways - computed: false, optional: true, required: false
  private _globalprotectGateways?: string; 
  public get globalprotectGateways() {
    return this.getStringAttribute('globalprotect_gateways');
  }
  public set globalprotectGateways(value: string) {
    this._globalprotectGateways = value;
  }
  public resetGlobalprotectGateways() {
    this._globalprotectGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectGatewaysInput() {
    return this._globalprotectGateways;
  }

  // globalprotect_ipsec_crypto_network_profiles - computed: false, optional: true, required: false
  private _globalprotectIpsecCryptoNetworkProfiles?: string; 
  public get globalprotectIpsecCryptoNetworkProfiles() {
    return this.getStringAttribute('globalprotect_ipsec_crypto_network_profiles');
  }
  public set globalprotectIpsecCryptoNetworkProfiles(value: string) {
    this._globalprotectIpsecCryptoNetworkProfiles = value;
  }
  public resetGlobalprotectIpsecCryptoNetworkProfiles() {
    this._globalprotectIpsecCryptoNetworkProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectIpsecCryptoNetworkProfilesInput() {
    return this._globalprotectIpsecCryptoNetworkProfiles;
  }

  // globalprotect_mdm_servers - computed: false, optional: true, required: false
  private _globalprotectMdmServers?: string; 
  public get globalprotectMdmServers() {
    return this.getStringAttribute('globalprotect_mdm_servers');
  }
  public set globalprotectMdmServers(value: string) {
    this._globalprotectMdmServers = value;
  }
  public resetGlobalprotectMdmServers() {
    this._globalprotectMdmServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectMdmServersInput() {
    return this._globalprotectMdmServers;
  }

  // globalprotect_portals - computed: false, optional: true, required: false
  private _globalprotectPortals?: string; 
  public get globalprotectPortals() {
    return this.getStringAttribute('globalprotect_portals');
  }
  public set globalprotectPortals(value: string) {
    this._globalprotectPortals = value;
  }
  public resetGlobalprotectPortals() {
    this._globalprotectPortals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectPortalsInput() {
    return this._globalprotectPortals;
  }

  // gre_tunnels - computed: false, optional: true, required: false
  private _greTunnels?: string; 
  public get greTunnels() {
    return this.getStringAttribute('gre_tunnels');
  }
  public set greTunnels(value: string) {
    this._greTunnels = value;
  }
  public resetGreTunnels() {
    this._greTunnels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greTunnelsInput() {
    return this._greTunnels;
  }

  // ike_crypto_network_profiles - computed: false, optional: true, required: false
  private _ikeCryptoNetworkProfiles?: string; 
  public get ikeCryptoNetworkProfiles() {
    return this.getStringAttribute('ike_crypto_network_profiles');
  }
  public set ikeCryptoNetworkProfiles(value: string) {
    this._ikeCryptoNetworkProfiles = value;
  }
  public resetIkeCryptoNetworkProfiles() {
    this._ikeCryptoNetworkProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeCryptoNetworkProfilesInput() {
    return this._ikeCryptoNetworkProfiles;
  }

  // ike_gateway_network_profiles - computed: false, optional: true, required: false
  private _ikeGatewayNetworkProfiles?: string; 
  public get ikeGatewayNetworkProfiles() {
    return this.getStringAttribute('ike_gateway_network_profiles');
  }
  public set ikeGatewayNetworkProfiles(value: string) {
    this._ikeGatewayNetworkProfiles = value;
  }
  public resetIkeGatewayNetworkProfiles() {
    this._ikeGatewayNetworkProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewayNetworkProfilesInput() {
    return this._ikeGatewayNetworkProfiles;
  }

  // interface_management_network_profiles - computed: false, optional: true, required: false
  private _interfaceManagementNetworkProfiles?: string; 
  public get interfaceManagementNetworkProfiles() {
    return this.getStringAttribute('interface_management_network_profiles');
  }
  public set interfaceManagementNetworkProfiles(value: string) {
    this._interfaceManagementNetworkProfiles = value;
  }
  public resetInterfaceManagementNetworkProfiles() {
    this._interfaceManagementNetworkProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceManagementNetworkProfilesInput() {
    return this._interfaceManagementNetworkProfiles;
  }

  // ipsec_crypto_network_profiles - computed: false, optional: true, required: false
  private _ipsecCryptoNetworkProfiles?: string; 
  public get ipsecCryptoNetworkProfiles() {
    return this.getStringAttribute('ipsec_crypto_network_profiles');
  }
  public set ipsecCryptoNetworkProfiles(value: string) {
    this._ipsecCryptoNetworkProfiles = value;
  }
  public resetIpsecCryptoNetworkProfiles() {
    this._ipsecCryptoNetworkProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCryptoNetworkProfilesInput() {
    return this._ipsecCryptoNetworkProfiles;
  }

  // ipsec_tunnels - computed: false, optional: true, required: false
  private _ipsecTunnels?: string; 
  public get ipsecTunnels() {
    return this.getStringAttribute('ipsec_tunnels');
  }
  public set ipsecTunnels(value: string) {
    this._ipsecTunnels = value;
  }
  public resetIpsecTunnels() {
    this._ipsecTunnels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelsInput() {
    return this._ipsecTunnels;
  }

  // lldp - computed: false, optional: true, required: false
  private _lldp?: string; 
  public get lldp() {
    return this.getStringAttribute('lldp');
  }
  public set lldp(value: string) {
    this._lldp = value;
  }
  public resetLldp() {
    this._lldp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpInput() {
    return this._lldp;
  }

  // lldp_network_profiles - computed: false, optional: true, required: false
  private _lldpNetworkProfiles?: string; 
  public get lldpNetworkProfiles() {
    return this.getStringAttribute('lldp_network_profiles');
  }
  public set lldpNetworkProfiles(value: string) {
    this._lldpNetworkProfiles = value;
  }
  public resetLldpNetworkProfiles() {
    this._lldpNetworkProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpNetworkProfilesInput() {
    return this._lldpNetworkProfiles;
  }

  // logical_routers - computed: false, optional: true, required: false
  private _logicalRouters?: string; 
  public get logicalRouters() {
    return this.getStringAttribute('logical_routers');
  }
  public set logicalRouters(value: string) {
    this._logicalRouters = value;
  }
  public resetLogicalRouters() {
    this._logicalRouters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalRoutersInput() {
    return this._logicalRouters;
  }

  // loopback_interfaces - computed: false, optional: true, required: false
  private _loopbackInterfaces?: string; 
  public get loopbackInterfaces() {
    return this.getStringAttribute('loopback_interfaces');
  }
  public set loopbackInterfaces(value: string) {
    this._loopbackInterfaces = value;
  }
  public resetLoopbackInterfaces() {
    this._loopbackInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInterfacesInput() {
    return this._loopbackInterfaces;
  }

  // qos_interfaces - computed: false, optional: true, required: false
  private _qosInterfaces?: string; 
  public get qosInterfaces() {
    return this.getStringAttribute('qos_interfaces');
  }
  public set qosInterfaces(value: string) {
    this._qosInterfaces = value;
  }
  public resetQosInterfaces() {
    this._qosInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInterfacesInput() {
    return this._qosInterfaces;
  }

  // qos_network_profiles - computed: false, optional: true, required: false
  private _qosNetworkProfiles?: string; 
  public get qosNetworkProfiles() {
    return this.getStringAttribute('qos_network_profiles');
  }
  public set qosNetworkProfiles(value: string) {
    this._qosNetworkProfiles = value;
  }
  public resetQosNetworkProfiles() {
    this._qosNetworkProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosNetworkProfilesInput() {
    return this._qosNetworkProfiles;
  }

  // sdwan_interface_profiles - computed: false, optional: true, required: false
  private _sdwanInterfaceProfiles?: string; 
  public get sdwanInterfaceProfiles() {
    return this.getStringAttribute('sdwan_interface_profiles');
  }
  public set sdwanInterfaceProfiles(value: string) {
    this._sdwanInterfaceProfiles = value;
  }
  public resetSdwanInterfaceProfiles() {
    this._sdwanInterfaceProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfaceProfilesInput() {
    return this._sdwanInterfaceProfiles;
  }

  // sdwan_interfaces - computed: false, optional: true, required: false
  private _sdwanInterfaces?: string; 
  public get sdwanInterfaces() {
    return this.getStringAttribute('sdwan_interfaces');
  }
  public set sdwanInterfaces(value: string) {
    this._sdwanInterfaces = value;
  }
  public resetSdwanInterfaces() {
    this._sdwanInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfacesInput() {
    return this._sdwanInterfaces;
  }

  // tunnel_interfaces - computed: false, optional: true, required: false
  private _tunnelInterfaces?: string; 
  public get tunnelInterfaces() {
    return this.getStringAttribute('tunnel_interfaces');
  }
  public set tunnelInterfaces(value: string) {
    this._tunnelInterfaces = value;
  }
  public resetTunnelInterfaces() {
    this._tunnelInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfacesInput() {
    return this._tunnelInterfaces;
  }

  // tunnel_monitor_network_profiles - computed: false, optional: true, required: false
  private _tunnelMonitorNetworkProfiles?: string; 
  public get tunnelMonitorNetworkProfiles() {
    return this.getStringAttribute('tunnel_monitor_network_profiles');
  }
  public set tunnelMonitorNetworkProfiles(value: string) {
    this._tunnelMonitorNetworkProfiles = value;
  }
  public resetTunnelMonitorNetworkProfiles() {
    this._tunnelMonitorNetworkProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMonitorNetworkProfilesInput() {
    return this._tunnelMonitorNetworkProfiles;
  }

  // virtual_routers - computed: false, optional: true, required: false
  private _virtualRouters?: string; 
  public get virtualRouters() {
    return this.getStringAttribute('virtual_routers');
  }
  public set virtualRouters(value: string) {
    this._virtualRouters = value;
  }
  public resetVirtualRouters() {
    this._virtualRouters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRoutersInput() {
    return this._virtualRouters;
  }

  // virtual_wires - computed: false, optional: true, required: false
  private _virtualWires?: string; 
  public get virtualWires() {
    return this.getStringAttribute('virtual_wires');
  }
  public set virtualWires(value: string) {
    this._virtualWires = value;
  }
  public resetVirtualWires() {
    this._virtualWires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWiresInput() {
    return this._virtualWires;
  }

  // vlan_interfaces - computed: false, optional: true, required: false
  private _vlanInterfaces?: string; 
  public get vlanInterfaces() {
    return this.getStringAttribute('vlan_interfaces');
  }
  public set vlanInterfaces(value: string) {
    this._vlanInterfaces = value;
  }
  public resetVlanInterfaces() {
    this._vlanInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInterfacesInput() {
    return this._vlanInterfaces;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans?: string; 
  public get vlans() {
    return this.getStringAttribute('vlans');
  }
  public set vlans(value: string) {
    this._vlans = value;
  }
  public resetVlans() {
    this._vlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans;
  }

  // zone_protection_network_profiles - computed: false, optional: true, required: false
  private _zoneProtectionNetworkProfiles?: string; 
  public get zoneProtectionNetworkProfiles() {
    return this.getStringAttribute('zone_protection_network_profiles');
  }
  public set zoneProtectionNetworkProfiles(value: string) {
    this._zoneProtectionNetworkProfiles = value;
  }
  public resetZoneProtectionNetworkProfiles() {
    this._zoneProtectionNetworkProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneProtectionNetworkProfilesInput() {
    return this._zoneProtectionNetworkProfiles;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string; 
  public get zones() {
    return this.getStringAttribute('zones');
  }
  public set zones(value: string) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface AdminRoleRoleDeviceRestapiObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#address_groups AdminRole#address_groups}
  */
  readonly addressGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#addresses AdminRole#addresses}
  */
  readonly addresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#anti_spyware_security_profiles AdminRole#anti_spyware_security_profiles}
  */
  readonly antiSpywareSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#antivirus_security_profiles AdminRole#antivirus_security_profiles}
  */
  readonly antivirusSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_filters AdminRole#application_filters}
  */
  readonly applicationFilters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_groups AdminRole#application_groups}
  */
  readonly applicationGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#applications AdminRole#applications}
  */
  readonly applications?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication_enforcements AdminRole#authentication_enforcements}
  */
  readonly authenticationEnforcements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_data_patterns AdminRole#custom_data_patterns}
  */
  readonly customDataPatterns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_spyware_signatures AdminRole#custom_spyware_signatures}
  */
  readonly customSpywareSignatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_url_categories AdminRole#custom_url_categories}
  */
  readonly customUrlCategories?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_vulnerability_signatures AdminRole#custom_vulnerability_signatures}
  */
  readonly customVulnerabilitySignatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_filtering_security_profiles AdminRole#data_filtering_security_profiles}
  */
  readonly dataFilteringSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption_profiles AdminRole#decryption_profiles}
  */
  readonly decryptionProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#devices AdminRole#devices}
  */
  readonly devices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dos_protection_security_profiles AdminRole#dos_protection_security_profiles}
  */
  readonly dosProtectionSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dynamic_user_groups AdminRole#dynamic_user_groups}
  */
  readonly dynamicUserGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#external_dynamic_lists AdminRole#external_dynamic_lists}
  */
  readonly externalDynamicLists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#file_blocking_security_profiles AdminRole#file_blocking_security_profiles}
  */
  readonly fileBlockingSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_hip_objects AdminRole#globalprotect_hip_objects}
  */
  readonly globalprotectHipObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_hip_profiles AdminRole#globalprotect_hip_profiles}
  */
  readonly globalprotectHipProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp_protection_security_profiles AdminRole#gtp_protection_security_profiles}
  */
  readonly gtpProtectionSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log_forwarding_profiles AdminRole#log_forwarding_profiles}
  */
  readonly logForwardingProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#packet_broker_profiles AdminRole#packet_broker_profiles}
  */
  readonly packetBrokerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#regions AdminRole#regions}
  */
  readonly regions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#schedules AdminRole#schedules}
  */
  readonly schedules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp_protection_security_profiles AdminRole#sctp_protection_security_profiles}
  */
  readonly sctpProtectionSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_error_correction_profiles AdminRole#sdwan_error_correction_profiles}
  */
  readonly sdwanErrorCorrectionProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_path_quality_profiles AdminRole#sdwan_path_quality_profiles}
  */
  readonly sdwanPathQualityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_saas_quality_profiles AdminRole#sdwan_saas_quality_profiles}
  */
  readonly sdwanSaasQualityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_traffic_distribution_profiles AdminRole#sdwan_traffic_distribution_profiles}
  */
  readonly sdwanTrafficDistributionProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#security_profile_groups AdminRole#security_profile_groups}
  */
  readonly securityProfileGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#service_groups AdminRole#service_groups}
  */
  readonly serviceGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#services AdminRole#services}
  */
  readonly services?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tags AdminRole#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_filtering_security_profiles AdminRole#url_filtering_security_profiles}
  */
  readonly urlFilteringSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vulnerability_protection_security_profiles AdminRole#vulnerability_protection_security_profiles}
  */
  readonly vulnerabilityProtectionSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#wildfire_analysis_security_profiles AdminRole#wildfire_analysis_security_profiles}
  */
  readonly wildfireAnalysisSecurityProfiles?: string;
}

export function adminRoleRoleDeviceRestapiObjectsToTerraform(struct?: AdminRoleRoleDeviceRestapiObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_groups: cdktf.stringToTerraform(struct!.addressGroups),
    addresses: cdktf.stringToTerraform(struct!.addresses),
    anti_spyware_security_profiles: cdktf.stringToTerraform(struct!.antiSpywareSecurityProfiles),
    antivirus_security_profiles: cdktf.stringToTerraform(struct!.antivirusSecurityProfiles),
    application_filters: cdktf.stringToTerraform(struct!.applicationFilters),
    application_groups: cdktf.stringToTerraform(struct!.applicationGroups),
    applications: cdktf.stringToTerraform(struct!.applications),
    authentication_enforcements: cdktf.stringToTerraform(struct!.authenticationEnforcements),
    custom_data_patterns: cdktf.stringToTerraform(struct!.customDataPatterns),
    custom_spyware_signatures: cdktf.stringToTerraform(struct!.customSpywareSignatures),
    custom_url_categories: cdktf.stringToTerraform(struct!.customUrlCategories),
    custom_vulnerability_signatures: cdktf.stringToTerraform(struct!.customVulnerabilitySignatures),
    data_filtering_security_profiles: cdktf.stringToTerraform(struct!.dataFilteringSecurityProfiles),
    decryption_profiles: cdktf.stringToTerraform(struct!.decryptionProfiles),
    devices: cdktf.stringToTerraform(struct!.devices),
    dos_protection_security_profiles: cdktf.stringToTerraform(struct!.dosProtectionSecurityProfiles),
    dynamic_user_groups: cdktf.stringToTerraform(struct!.dynamicUserGroups),
    external_dynamic_lists: cdktf.stringToTerraform(struct!.externalDynamicLists),
    file_blocking_security_profiles: cdktf.stringToTerraform(struct!.fileBlockingSecurityProfiles),
    globalprotect_hip_objects: cdktf.stringToTerraform(struct!.globalprotectHipObjects),
    globalprotect_hip_profiles: cdktf.stringToTerraform(struct!.globalprotectHipProfiles),
    gtp_protection_security_profiles: cdktf.stringToTerraform(struct!.gtpProtectionSecurityProfiles),
    log_forwarding_profiles: cdktf.stringToTerraform(struct!.logForwardingProfiles),
    packet_broker_profiles: cdktf.stringToTerraform(struct!.packetBrokerProfiles),
    regions: cdktf.stringToTerraform(struct!.regions),
    schedules: cdktf.stringToTerraform(struct!.schedules),
    sctp_protection_security_profiles: cdktf.stringToTerraform(struct!.sctpProtectionSecurityProfiles),
    sdwan_error_correction_profiles: cdktf.stringToTerraform(struct!.sdwanErrorCorrectionProfiles),
    sdwan_path_quality_profiles: cdktf.stringToTerraform(struct!.sdwanPathQualityProfiles),
    sdwan_saas_quality_profiles: cdktf.stringToTerraform(struct!.sdwanSaasQualityProfiles),
    sdwan_traffic_distribution_profiles: cdktf.stringToTerraform(struct!.sdwanTrafficDistributionProfiles),
    security_profile_groups: cdktf.stringToTerraform(struct!.securityProfileGroups),
    service_groups: cdktf.stringToTerraform(struct!.serviceGroups),
    services: cdktf.stringToTerraform(struct!.services),
    tags: cdktf.stringToTerraform(struct!.tags),
    url_filtering_security_profiles: cdktf.stringToTerraform(struct!.urlFilteringSecurityProfiles),
    vulnerability_protection_security_profiles: cdktf.stringToTerraform(struct!.vulnerabilityProtectionSecurityProfiles),
    wildfire_analysis_security_profiles: cdktf.stringToTerraform(struct!.wildfireAnalysisSecurityProfiles),
  }
}


export function adminRoleRoleDeviceRestapiObjectsToHclTerraform(struct?: AdminRoleRoleDeviceRestapiObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_groups: {
      value: cdktf.stringToHclTerraform(struct!.addressGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addresses: {
      value: cdktf.stringToHclTerraform(struct!.addresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anti_spyware_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.antiSpywareSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    antivirus_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.antivirusSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_filters: {
      value: cdktf.stringToHclTerraform(struct!.applicationFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_groups: {
      value: cdktf.stringToHclTerraform(struct!.applicationGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applications: {
      value: cdktf.stringToHclTerraform(struct!.applications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_enforcements: {
      value: cdktf.stringToHclTerraform(struct!.authenticationEnforcements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_data_patterns: {
      value: cdktf.stringToHclTerraform(struct!.customDataPatterns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_spyware_signatures: {
      value: cdktf.stringToHclTerraform(struct!.customSpywareSignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_url_categories: {
      value: cdktf.stringToHclTerraform(struct!.customUrlCategories),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_vulnerability_signatures: {
      value: cdktf.stringToHclTerraform(struct!.customVulnerabilitySignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_filtering_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.dataFilteringSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_profiles: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devices: {
      value: cdktf.stringToHclTerraform(struct!.devices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_protection_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.dosProtectionSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_user_groups: {
      value: cdktf.stringToHclTerraform(struct!.dynamicUserGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_dynamic_lists: {
      value: cdktf.stringToHclTerraform(struct!.externalDynamicLists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_blocking_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.fileBlockingSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_hip_objects: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectHipObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_hip_profiles: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectHipProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_protection_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.gtpProtectionSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_forwarding_profiles: {
      value: cdktf.stringToHclTerraform(struct!.logForwardingProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_broker_profiles: {
      value: cdktf.stringToHclTerraform(struct!.packetBrokerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.stringToHclTerraform(struct!.regions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedules: {
      value: cdktf.stringToHclTerraform(struct!.schedules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_protection_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sctpProtectionSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_error_correction_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sdwanErrorCorrectionProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_path_quality_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sdwanPathQualityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_saas_quality_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sdwanSaasQualityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_traffic_distribution_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sdwanTrafficDistributionProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_profile_groups: {
      value: cdktf.stringToHclTerraform(struct!.securityProfileGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_groups: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_filtering_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.urlFilteringSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerability_protection_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.vulnerabilityProtectionSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire_analysis_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.wildfireAnalysisSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceRestapiObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceRestapiObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressGroups = this._addressGroups;
    }
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._antiSpywareSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpywareSecurityProfiles = this._antiSpywareSecurityProfiles;
    }
    if (this._antivirusSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.antivirusSecurityProfiles = this._antivirusSecurityProfiles;
    }
    if (this._applicationFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationFilters = this._applicationFilters;
    }
    if (this._applicationGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationGroups = this._applicationGroups;
    }
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._authenticationEnforcements !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationEnforcements = this._authenticationEnforcements;
    }
    if (this._customDataPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDataPatterns = this._customDataPatterns;
    }
    if (this._customSpywareSignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSpywareSignatures = this._customSpywareSignatures;
    }
    if (this._customUrlCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUrlCategories = this._customUrlCategories;
    }
    if (this._customVulnerabilitySignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVulnerabilitySignatures = this._customVulnerabilitySignatures;
    }
    if (this._dataFilteringSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFilteringSecurityProfiles = this._dataFilteringSecurityProfiles;
    }
    if (this._decryptionProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProfiles = this._decryptionProfiles;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._dosProtectionSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosProtectionSecurityProfiles = this._dosProtectionSecurityProfiles;
    }
    if (this._dynamicUserGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicUserGroups = this._dynamicUserGroups;
    }
    if (this._externalDynamicLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDynamicLists = this._externalDynamicLists;
    }
    if (this._fileBlockingSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlockingSecurityProfiles = this._fileBlockingSecurityProfiles;
    }
    if (this._globalprotectHipObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectHipObjects = this._globalprotectHipObjects;
    }
    if (this._globalprotectHipProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectHipProfiles = this._globalprotectHipProfiles;
    }
    if (this._gtpProtectionSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpProtectionSecurityProfiles = this._gtpProtectionSecurityProfiles;
    }
    if (this._logForwardingProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.logForwardingProfiles = this._logForwardingProfiles;
    }
    if (this._packetBrokerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBrokerProfiles = this._packetBrokerProfiles;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._schedules !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules;
    }
    if (this._sctpProtectionSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpProtectionSecurityProfiles = this._sctpProtectionSecurityProfiles;
    }
    if (this._sdwanErrorCorrectionProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanErrorCorrectionProfiles = this._sdwanErrorCorrectionProfiles;
    }
    if (this._sdwanPathQualityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanPathQualityProfiles = this._sdwanPathQualityProfiles;
    }
    if (this._sdwanSaasQualityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanSaasQualityProfiles = this._sdwanSaasQualityProfiles;
    }
    if (this._sdwanTrafficDistributionProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanTrafficDistributionProfiles = this._sdwanTrafficDistributionProfiles;
    }
    if (this._securityProfileGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfileGroups = this._securityProfileGroups;
    }
    if (this._serviceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroups = this._serviceGroups;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._urlFilteringSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFilteringSecurityProfiles = this._urlFilteringSecurityProfiles;
    }
    if (this._vulnerabilityProtectionSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityProtectionSecurityProfiles = this._vulnerabilityProtectionSecurityProfiles;
    }
    if (this._wildfireAnalysisSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireAnalysisSecurityProfiles = this._wildfireAnalysisSecurityProfiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceRestapiObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressGroups = undefined;
      this._addresses = undefined;
      this._antiSpywareSecurityProfiles = undefined;
      this._antivirusSecurityProfiles = undefined;
      this._applicationFilters = undefined;
      this._applicationGroups = undefined;
      this._applications = undefined;
      this._authenticationEnforcements = undefined;
      this._customDataPatterns = undefined;
      this._customSpywareSignatures = undefined;
      this._customUrlCategories = undefined;
      this._customVulnerabilitySignatures = undefined;
      this._dataFilteringSecurityProfiles = undefined;
      this._decryptionProfiles = undefined;
      this._devices = undefined;
      this._dosProtectionSecurityProfiles = undefined;
      this._dynamicUserGroups = undefined;
      this._externalDynamicLists = undefined;
      this._fileBlockingSecurityProfiles = undefined;
      this._globalprotectHipObjects = undefined;
      this._globalprotectHipProfiles = undefined;
      this._gtpProtectionSecurityProfiles = undefined;
      this._logForwardingProfiles = undefined;
      this._packetBrokerProfiles = undefined;
      this._regions = undefined;
      this._schedules = undefined;
      this._sctpProtectionSecurityProfiles = undefined;
      this._sdwanErrorCorrectionProfiles = undefined;
      this._sdwanPathQualityProfiles = undefined;
      this._sdwanSaasQualityProfiles = undefined;
      this._sdwanTrafficDistributionProfiles = undefined;
      this._securityProfileGroups = undefined;
      this._serviceGroups = undefined;
      this._services = undefined;
      this._tags = undefined;
      this._urlFilteringSecurityProfiles = undefined;
      this._vulnerabilityProtectionSecurityProfiles = undefined;
      this._wildfireAnalysisSecurityProfiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressGroups = value.addressGroups;
      this._addresses = value.addresses;
      this._antiSpywareSecurityProfiles = value.antiSpywareSecurityProfiles;
      this._antivirusSecurityProfiles = value.antivirusSecurityProfiles;
      this._applicationFilters = value.applicationFilters;
      this._applicationGroups = value.applicationGroups;
      this._applications = value.applications;
      this._authenticationEnforcements = value.authenticationEnforcements;
      this._customDataPatterns = value.customDataPatterns;
      this._customSpywareSignatures = value.customSpywareSignatures;
      this._customUrlCategories = value.customUrlCategories;
      this._customVulnerabilitySignatures = value.customVulnerabilitySignatures;
      this._dataFilteringSecurityProfiles = value.dataFilteringSecurityProfiles;
      this._decryptionProfiles = value.decryptionProfiles;
      this._devices = value.devices;
      this._dosProtectionSecurityProfiles = value.dosProtectionSecurityProfiles;
      this._dynamicUserGroups = value.dynamicUserGroups;
      this._externalDynamicLists = value.externalDynamicLists;
      this._fileBlockingSecurityProfiles = value.fileBlockingSecurityProfiles;
      this._globalprotectHipObjects = value.globalprotectHipObjects;
      this._globalprotectHipProfiles = value.globalprotectHipProfiles;
      this._gtpProtectionSecurityProfiles = value.gtpProtectionSecurityProfiles;
      this._logForwardingProfiles = value.logForwardingProfiles;
      this._packetBrokerProfiles = value.packetBrokerProfiles;
      this._regions = value.regions;
      this._schedules = value.schedules;
      this._sctpProtectionSecurityProfiles = value.sctpProtectionSecurityProfiles;
      this._sdwanErrorCorrectionProfiles = value.sdwanErrorCorrectionProfiles;
      this._sdwanPathQualityProfiles = value.sdwanPathQualityProfiles;
      this._sdwanSaasQualityProfiles = value.sdwanSaasQualityProfiles;
      this._sdwanTrafficDistributionProfiles = value.sdwanTrafficDistributionProfiles;
      this._securityProfileGroups = value.securityProfileGroups;
      this._serviceGroups = value.serviceGroups;
      this._services = value.services;
      this._tags = value.tags;
      this._urlFilteringSecurityProfiles = value.urlFilteringSecurityProfiles;
      this._vulnerabilityProtectionSecurityProfiles = value.vulnerabilityProtectionSecurityProfiles;
      this._wildfireAnalysisSecurityProfiles = value.wildfireAnalysisSecurityProfiles;
    }
  }

  // address_groups - computed: false, optional: true, required: false
  private _addressGroups?: string; 
  public get addressGroups() {
    return this.getStringAttribute('address_groups');
  }
  public set addressGroups(value: string) {
    this._addressGroups = value;
  }
  public resetAddressGroups() {
    this._addressGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupsInput() {
    return this._addressGroups;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string; 
  public get addresses() {
    return this.getStringAttribute('addresses');
  }
  public set addresses(value: string) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // anti_spyware_security_profiles - computed: false, optional: true, required: false
  private _antiSpywareSecurityProfiles?: string; 
  public get antiSpywareSecurityProfiles() {
    return this.getStringAttribute('anti_spyware_security_profiles');
  }
  public set antiSpywareSecurityProfiles(value: string) {
    this._antiSpywareSecurityProfiles = value;
  }
  public resetAntiSpywareSecurityProfiles() {
    this._antiSpywareSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpywareSecurityProfilesInput() {
    return this._antiSpywareSecurityProfiles;
  }

  // antivirus_security_profiles - computed: false, optional: true, required: false
  private _antivirusSecurityProfiles?: string; 
  public get antivirusSecurityProfiles() {
    return this.getStringAttribute('antivirus_security_profiles');
  }
  public set antivirusSecurityProfiles(value: string) {
    this._antivirusSecurityProfiles = value;
  }
  public resetAntivirusSecurityProfiles() {
    this._antivirusSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusSecurityProfilesInput() {
    return this._antivirusSecurityProfiles;
  }

  // application_filters - computed: false, optional: true, required: false
  private _applicationFilters?: string; 
  public get applicationFilters() {
    return this.getStringAttribute('application_filters');
  }
  public set applicationFilters(value: string) {
    this._applicationFilters = value;
  }
  public resetApplicationFilters() {
    this._applicationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFiltersInput() {
    return this._applicationFilters;
  }

  // application_groups - computed: false, optional: true, required: false
  private _applicationGroups?: string; 
  public get applicationGroups() {
    return this.getStringAttribute('application_groups');
  }
  public set applicationGroups(value: string) {
    this._applicationGroups = value;
  }
  public resetApplicationGroups() {
    this._applicationGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupsInput() {
    return this._applicationGroups;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string; 
  public get applications() {
    return this.getStringAttribute('applications');
  }
  public set applications(value: string) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // authentication_enforcements - computed: false, optional: true, required: false
  private _authenticationEnforcements?: string; 
  public get authenticationEnforcements() {
    return this.getStringAttribute('authentication_enforcements');
  }
  public set authenticationEnforcements(value: string) {
    this._authenticationEnforcements = value;
  }
  public resetAuthenticationEnforcements() {
    this._authenticationEnforcements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEnforcementsInput() {
    return this._authenticationEnforcements;
  }

  // custom_data_patterns - computed: false, optional: true, required: false
  private _customDataPatterns?: string; 
  public get customDataPatterns() {
    return this.getStringAttribute('custom_data_patterns');
  }
  public set customDataPatterns(value: string) {
    this._customDataPatterns = value;
  }
  public resetCustomDataPatterns() {
    this._customDataPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataPatternsInput() {
    return this._customDataPatterns;
  }

  // custom_spyware_signatures - computed: false, optional: true, required: false
  private _customSpywareSignatures?: string; 
  public get customSpywareSignatures() {
    return this.getStringAttribute('custom_spyware_signatures');
  }
  public set customSpywareSignatures(value: string) {
    this._customSpywareSignatures = value;
  }
  public resetCustomSpywareSignatures() {
    this._customSpywareSignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSpywareSignaturesInput() {
    return this._customSpywareSignatures;
  }

  // custom_url_categories - computed: false, optional: true, required: false
  private _customUrlCategories?: string; 
  public get customUrlCategories() {
    return this.getStringAttribute('custom_url_categories');
  }
  public set customUrlCategories(value: string) {
    this._customUrlCategories = value;
  }
  public resetCustomUrlCategories() {
    this._customUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUrlCategoriesInput() {
    return this._customUrlCategories;
  }

  // custom_vulnerability_signatures - computed: false, optional: true, required: false
  private _customVulnerabilitySignatures?: string; 
  public get customVulnerabilitySignatures() {
    return this.getStringAttribute('custom_vulnerability_signatures');
  }
  public set customVulnerabilitySignatures(value: string) {
    this._customVulnerabilitySignatures = value;
  }
  public resetCustomVulnerabilitySignatures() {
    this._customVulnerabilitySignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVulnerabilitySignaturesInput() {
    return this._customVulnerabilitySignatures;
  }

  // data_filtering_security_profiles - computed: false, optional: true, required: false
  private _dataFilteringSecurityProfiles?: string; 
  public get dataFilteringSecurityProfiles() {
    return this.getStringAttribute('data_filtering_security_profiles');
  }
  public set dataFilteringSecurityProfiles(value: string) {
    this._dataFilteringSecurityProfiles = value;
  }
  public resetDataFilteringSecurityProfiles() {
    this._dataFilteringSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringSecurityProfilesInput() {
    return this._dataFilteringSecurityProfiles;
  }

  // decryption_profiles - computed: false, optional: true, required: false
  private _decryptionProfiles?: string; 
  public get decryptionProfiles() {
    return this.getStringAttribute('decryption_profiles');
  }
  public set decryptionProfiles(value: string) {
    this._decryptionProfiles = value;
  }
  public resetDecryptionProfiles() {
    this._decryptionProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProfilesInput() {
    return this._decryptionProfiles;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: string; 
  public get devices() {
    return this.getStringAttribute('devices');
  }
  public set devices(value: string) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // dos_protection_security_profiles - computed: false, optional: true, required: false
  private _dosProtectionSecurityProfiles?: string; 
  public get dosProtectionSecurityProfiles() {
    return this.getStringAttribute('dos_protection_security_profiles');
  }
  public set dosProtectionSecurityProfiles(value: string) {
    this._dosProtectionSecurityProfiles = value;
  }
  public resetDosProtectionSecurityProfiles() {
    this._dosProtectionSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosProtectionSecurityProfilesInput() {
    return this._dosProtectionSecurityProfiles;
  }

  // dynamic_user_groups - computed: false, optional: true, required: false
  private _dynamicUserGroups?: string; 
  public get dynamicUserGroups() {
    return this.getStringAttribute('dynamic_user_groups');
  }
  public set dynamicUserGroups(value: string) {
    this._dynamicUserGroups = value;
  }
  public resetDynamicUserGroups() {
    this._dynamicUserGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicUserGroupsInput() {
    return this._dynamicUserGroups;
  }

  // external_dynamic_lists - computed: false, optional: true, required: false
  private _externalDynamicLists?: string; 
  public get externalDynamicLists() {
    return this.getStringAttribute('external_dynamic_lists');
  }
  public set externalDynamicLists(value: string) {
    this._externalDynamicLists = value;
  }
  public resetExternalDynamicLists() {
    this._externalDynamicLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDynamicListsInput() {
    return this._externalDynamicLists;
  }

  // file_blocking_security_profiles - computed: false, optional: true, required: false
  private _fileBlockingSecurityProfiles?: string; 
  public get fileBlockingSecurityProfiles() {
    return this.getStringAttribute('file_blocking_security_profiles');
  }
  public set fileBlockingSecurityProfiles(value: string) {
    this._fileBlockingSecurityProfiles = value;
  }
  public resetFileBlockingSecurityProfiles() {
    this._fileBlockingSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockingSecurityProfilesInput() {
    return this._fileBlockingSecurityProfiles;
  }

  // globalprotect_hip_objects - computed: false, optional: true, required: false
  private _globalprotectHipObjects?: string; 
  public get globalprotectHipObjects() {
    return this.getStringAttribute('globalprotect_hip_objects');
  }
  public set globalprotectHipObjects(value: string) {
    this._globalprotectHipObjects = value;
  }
  public resetGlobalprotectHipObjects() {
    this._globalprotectHipObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectHipObjectsInput() {
    return this._globalprotectHipObjects;
  }

  // globalprotect_hip_profiles - computed: false, optional: true, required: false
  private _globalprotectHipProfiles?: string; 
  public get globalprotectHipProfiles() {
    return this.getStringAttribute('globalprotect_hip_profiles');
  }
  public set globalprotectHipProfiles(value: string) {
    this._globalprotectHipProfiles = value;
  }
  public resetGlobalprotectHipProfiles() {
    this._globalprotectHipProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectHipProfilesInput() {
    return this._globalprotectHipProfiles;
  }

  // gtp_protection_security_profiles - computed: false, optional: true, required: false
  private _gtpProtectionSecurityProfiles?: string; 
  public get gtpProtectionSecurityProfiles() {
    return this.getStringAttribute('gtp_protection_security_profiles');
  }
  public set gtpProtectionSecurityProfiles(value: string) {
    this._gtpProtectionSecurityProfiles = value;
  }
  public resetGtpProtectionSecurityProfiles() {
    this._gtpProtectionSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpProtectionSecurityProfilesInput() {
    return this._gtpProtectionSecurityProfiles;
  }

  // log_forwarding_profiles - computed: false, optional: true, required: false
  private _logForwardingProfiles?: string; 
  public get logForwardingProfiles() {
    return this.getStringAttribute('log_forwarding_profiles');
  }
  public set logForwardingProfiles(value: string) {
    this._logForwardingProfiles = value;
  }
  public resetLogForwardingProfiles() {
    this._logForwardingProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardingProfilesInput() {
    return this._logForwardingProfiles;
  }

  // packet_broker_profiles - computed: false, optional: true, required: false
  private _packetBrokerProfiles?: string; 
  public get packetBrokerProfiles() {
    return this.getStringAttribute('packet_broker_profiles');
  }
  public set packetBrokerProfiles(value: string) {
    this._packetBrokerProfiles = value;
  }
  public resetPacketBrokerProfiles() {
    this._packetBrokerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBrokerProfilesInput() {
    return this._packetBrokerProfiles;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string; 
  public get regions() {
    return this.getStringAttribute('regions');
  }
  public set regions(value: string) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules?: string; 
  public get schedules() {
    return this.getStringAttribute('schedules');
  }
  public set schedules(value: string) {
    this._schedules = value;
  }
  public resetSchedules() {
    this._schedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules;
  }

  // sctp_protection_security_profiles - computed: false, optional: true, required: false
  private _sctpProtectionSecurityProfiles?: string; 
  public get sctpProtectionSecurityProfiles() {
    return this.getStringAttribute('sctp_protection_security_profiles');
  }
  public set sctpProtectionSecurityProfiles(value: string) {
    this._sctpProtectionSecurityProfiles = value;
  }
  public resetSctpProtectionSecurityProfiles() {
    this._sctpProtectionSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpProtectionSecurityProfilesInput() {
    return this._sctpProtectionSecurityProfiles;
  }

  // sdwan_error_correction_profiles - computed: false, optional: true, required: false
  private _sdwanErrorCorrectionProfiles?: string; 
  public get sdwanErrorCorrectionProfiles() {
    return this.getStringAttribute('sdwan_error_correction_profiles');
  }
  public set sdwanErrorCorrectionProfiles(value: string) {
    this._sdwanErrorCorrectionProfiles = value;
  }
  public resetSdwanErrorCorrectionProfiles() {
    this._sdwanErrorCorrectionProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanErrorCorrectionProfilesInput() {
    return this._sdwanErrorCorrectionProfiles;
  }

  // sdwan_path_quality_profiles - computed: false, optional: true, required: false
  private _sdwanPathQualityProfiles?: string; 
  public get sdwanPathQualityProfiles() {
    return this.getStringAttribute('sdwan_path_quality_profiles');
  }
  public set sdwanPathQualityProfiles(value: string) {
    this._sdwanPathQualityProfiles = value;
  }
  public resetSdwanPathQualityProfiles() {
    this._sdwanPathQualityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanPathQualityProfilesInput() {
    return this._sdwanPathQualityProfiles;
  }

  // sdwan_saas_quality_profiles - computed: false, optional: true, required: false
  private _sdwanSaasQualityProfiles?: string; 
  public get sdwanSaasQualityProfiles() {
    return this.getStringAttribute('sdwan_saas_quality_profiles');
  }
  public set sdwanSaasQualityProfiles(value: string) {
    this._sdwanSaasQualityProfiles = value;
  }
  public resetSdwanSaasQualityProfiles() {
    this._sdwanSaasQualityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanSaasQualityProfilesInput() {
    return this._sdwanSaasQualityProfiles;
  }

  // sdwan_traffic_distribution_profiles - computed: false, optional: true, required: false
  private _sdwanTrafficDistributionProfiles?: string; 
  public get sdwanTrafficDistributionProfiles() {
    return this.getStringAttribute('sdwan_traffic_distribution_profiles');
  }
  public set sdwanTrafficDistributionProfiles(value: string) {
    this._sdwanTrafficDistributionProfiles = value;
  }
  public resetSdwanTrafficDistributionProfiles() {
    this._sdwanTrafficDistributionProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanTrafficDistributionProfilesInput() {
    return this._sdwanTrafficDistributionProfiles;
  }

  // security_profile_groups - computed: false, optional: true, required: false
  private _securityProfileGroups?: string; 
  public get securityProfileGroups() {
    return this.getStringAttribute('security_profile_groups');
  }
  public set securityProfileGroups(value: string) {
    this._securityProfileGroups = value;
  }
  public resetSecurityProfileGroups() {
    this._securityProfileGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileGroupsInput() {
    return this._securityProfileGroups;
  }

  // service_groups - computed: false, optional: true, required: false
  private _serviceGroups?: string; 
  public get serviceGroups() {
    return this.getStringAttribute('service_groups');
  }
  public set serviceGroups(value: string) {
    this._serviceGroups = value;
  }
  public resetServiceGroups() {
    this._serviceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupsInput() {
    return this._serviceGroups;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url_filtering_security_profiles - computed: false, optional: true, required: false
  private _urlFilteringSecurityProfiles?: string; 
  public get urlFilteringSecurityProfiles() {
    return this.getStringAttribute('url_filtering_security_profiles');
  }
  public set urlFilteringSecurityProfiles(value: string) {
    this._urlFilteringSecurityProfiles = value;
  }
  public resetUrlFilteringSecurityProfiles() {
    this._urlFilteringSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringSecurityProfilesInput() {
    return this._urlFilteringSecurityProfiles;
  }

  // vulnerability_protection_security_profiles - computed: false, optional: true, required: false
  private _vulnerabilityProtectionSecurityProfiles?: string; 
  public get vulnerabilityProtectionSecurityProfiles() {
    return this.getStringAttribute('vulnerability_protection_security_profiles');
  }
  public set vulnerabilityProtectionSecurityProfiles(value: string) {
    this._vulnerabilityProtectionSecurityProfiles = value;
  }
  public resetVulnerabilityProtectionSecurityProfiles() {
    this._vulnerabilityProtectionSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityProtectionSecurityProfilesInput() {
    return this._vulnerabilityProtectionSecurityProfiles;
  }

  // wildfire_analysis_security_profiles - computed: false, optional: true, required: false
  private _wildfireAnalysisSecurityProfiles?: string; 
  public get wildfireAnalysisSecurityProfiles() {
    return this.getStringAttribute('wildfire_analysis_security_profiles');
  }
  public set wildfireAnalysisSecurityProfiles(value: string) {
    this._wildfireAnalysisSecurityProfiles = value;
  }
  public resetWildfireAnalysisSecurityProfiles() {
    this._wildfireAnalysisSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireAnalysisSecurityProfilesInput() {
    return this._wildfireAnalysisSecurityProfiles;
  }
}
export interface AdminRoleRoleDeviceRestapiPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_override_rules AdminRole#application_override_rules}
  */
  readonly applicationOverrideRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication_rules AdminRole#authentication_rules}
  */
  readonly authenticationRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption_rules AdminRole#decryption_rules}
  */
  readonly decryptionRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dos_rules AdminRole#dos_rules}
  */
  readonly dosRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#nat_rules AdminRole#nat_rules}
  */
  readonly natRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#network_packet_broker_rules AdminRole#network_packet_broker_rules}
  */
  readonly networkPacketBrokerRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#policy_based_forwarding_rules AdminRole#policy_based_forwarding_rules}
  */
  readonly policyBasedForwardingRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#qos_rules AdminRole#qos_rules}
  */
  readonly qosRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_rules AdminRole#sdwan_rules}
  */
  readonly sdwanRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#security_rules AdminRole#security_rules}
  */
  readonly securityRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_inspection_rules AdminRole#tunnel_inspection_rules}
  */
  readonly tunnelInspectionRules?: string;
}

export function adminRoleRoleDeviceRestapiPoliciesToTerraform(struct?: AdminRoleRoleDeviceRestapiPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_override_rules: cdktf.stringToTerraform(struct!.applicationOverrideRules),
    authentication_rules: cdktf.stringToTerraform(struct!.authenticationRules),
    decryption_rules: cdktf.stringToTerraform(struct!.decryptionRules),
    dos_rules: cdktf.stringToTerraform(struct!.dosRules),
    nat_rules: cdktf.stringToTerraform(struct!.natRules),
    network_packet_broker_rules: cdktf.stringToTerraform(struct!.networkPacketBrokerRules),
    policy_based_forwarding_rules: cdktf.stringToTerraform(struct!.policyBasedForwardingRules),
    qos_rules: cdktf.stringToTerraform(struct!.qosRules),
    sdwan_rules: cdktf.stringToTerraform(struct!.sdwanRules),
    security_rules: cdktf.stringToTerraform(struct!.securityRules),
    tunnel_inspection_rules: cdktf.stringToTerraform(struct!.tunnelInspectionRules),
  }
}


export function adminRoleRoleDeviceRestapiPoliciesToHclTerraform(struct?: AdminRoleRoleDeviceRestapiPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_override_rules: {
      value: cdktf.stringToHclTerraform(struct!.applicationOverrideRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_rules: {
      value: cdktf.stringToHclTerraform(struct!.authenticationRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_rules: {
      value: cdktf.stringToHclTerraform(struct!.decryptionRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_rules: {
      value: cdktf.stringToHclTerraform(struct!.dosRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_rules: {
      value: cdktf.stringToHclTerraform(struct!.natRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_packet_broker_rules: {
      value: cdktf.stringToHclTerraform(struct!.networkPacketBrokerRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_based_forwarding_rules: {
      value: cdktf.stringToHclTerraform(struct!.policyBasedForwardingRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_rules: {
      value: cdktf.stringToHclTerraform(struct!.qosRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_rules: {
      value: cdktf.stringToHclTerraform(struct!.sdwanRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_rules: {
      value: cdktf.stringToHclTerraform(struct!.securityRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_inspection_rules: {
      value: cdktf.stringToHclTerraform(struct!.tunnelInspectionRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceRestapiPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceRestapiPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationOverrideRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationOverrideRules = this._applicationOverrideRules;
    }
    if (this._authenticationRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRules = this._authenticationRules;
    }
    if (this._decryptionRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionRules = this._decryptionRules;
    }
    if (this._dosRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosRules = this._dosRules;
    }
    if (this._natRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.natRules = this._natRules;
    }
    if (this._networkPacketBrokerRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPacketBrokerRules = this._networkPacketBrokerRules;
    }
    if (this._policyBasedForwardingRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyBasedForwardingRules = this._policyBasedForwardingRules;
    }
    if (this._qosRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosRules = this._qosRules;
    }
    if (this._sdwanRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanRules = this._sdwanRules;
    }
    if (this._securityRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityRules = this._securityRules;
    }
    if (this._tunnelInspectionRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelInspectionRules = this._tunnelInspectionRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceRestapiPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationOverrideRules = undefined;
      this._authenticationRules = undefined;
      this._decryptionRules = undefined;
      this._dosRules = undefined;
      this._natRules = undefined;
      this._networkPacketBrokerRules = undefined;
      this._policyBasedForwardingRules = undefined;
      this._qosRules = undefined;
      this._sdwanRules = undefined;
      this._securityRules = undefined;
      this._tunnelInspectionRules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationOverrideRules = value.applicationOverrideRules;
      this._authenticationRules = value.authenticationRules;
      this._decryptionRules = value.decryptionRules;
      this._dosRules = value.dosRules;
      this._natRules = value.natRules;
      this._networkPacketBrokerRules = value.networkPacketBrokerRules;
      this._policyBasedForwardingRules = value.policyBasedForwardingRules;
      this._qosRules = value.qosRules;
      this._sdwanRules = value.sdwanRules;
      this._securityRules = value.securityRules;
      this._tunnelInspectionRules = value.tunnelInspectionRules;
    }
  }

  // application_override_rules - computed: false, optional: true, required: false
  private _applicationOverrideRules?: string; 
  public get applicationOverrideRules() {
    return this.getStringAttribute('application_override_rules');
  }
  public set applicationOverrideRules(value: string) {
    this._applicationOverrideRules = value;
  }
  public resetApplicationOverrideRules() {
    this._applicationOverrideRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationOverrideRulesInput() {
    return this._applicationOverrideRules;
  }

  // authentication_rules - computed: false, optional: true, required: false
  private _authenticationRules?: string; 
  public get authenticationRules() {
    return this.getStringAttribute('authentication_rules');
  }
  public set authenticationRules(value: string) {
    this._authenticationRules = value;
  }
  public resetAuthenticationRules() {
    this._authenticationRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRulesInput() {
    return this._authenticationRules;
  }

  // decryption_rules - computed: false, optional: true, required: false
  private _decryptionRules?: string; 
  public get decryptionRules() {
    return this.getStringAttribute('decryption_rules');
  }
  public set decryptionRules(value: string) {
    this._decryptionRules = value;
  }
  public resetDecryptionRules() {
    this._decryptionRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionRulesInput() {
    return this._decryptionRules;
  }

  // dos_rules - computed: false, optional: true, required: false
  private _dosRules?: string; 
  public get dosRules() {
    return this.getStringAttribute('dos_rules');
  }
  public set dosRules(value: string) {
    this._dosRules = value;
  }
  public resetDosRules() {
    this._dosRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosRulesInput() {
    return this._dosRules;
  }

  // nat_rules - computed: false, optional: true, required: false
  private _natRules?: string; 
  public get natRules() {
    return this.getStringAttribute('nat_rules');
  }
  public set natRules(value: string) {
    this._natRules = value;
  }
  public resetNatRules() {
    this._natRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRulesInput() {
    return this._natRules;
  }

  // network_packet_broker_rules - computed: false, optional: true, required: false
  private _networkPacketBrokerRules?: string; 
  public get networkPacketBrokerRules() {
    return this.getStringAttribute('network_packet_broker_rules');
  }
  public set networkPacketBrokerRules(value: string) {
    this._networkPacketBrokerRules = value;
  }
  public resetNetworkPacketBrokerRules() {
    this._networkPacketBrokerRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPacketBrokerRulesInput() {
    return this._networkPacketBrokerRules;
  }

  // policy_based_forwarding_rules - computed: false, optional: true, required: false
  private _policyBasedForwardingRules?: string; 
  public get policyBasedForwardingRules() {
    return this.getStringAttribute('policy_based_forwarding_rules');
  }
  public set policyBasedForwardingRules(value: string) {
    this._policyBasedForwardingRules = value;
  }
  public resetPolicyBasedForwardingRules() {
    this._policyBasedForwardingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBasedForwardingRulesInput() {
    return this._policyBasedForwardingRules;
  }

  // qos_rules - computed: false, optional: true, required: false
  private _qosRules?: string; 
  public get qosRules() {
    return this.getStringAttribute('qos_rules');
  }
  public set qosRules(value: string) {
    this._qosRules = value;
  }
  public resetQosRules() {
    this._qosRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosRulesInput() {
    return this._qosRules;
  }

  // sdwan_rules - computed: false, optional: true, required: false
  private _sdwanRules?: string; 
  public get sdwanRules() {
    return this.getStringAttribute('sdwan_rules');
  }
  public set sdwanRules(value: string) {
    this._sdwanRules = value;
  }
  public resetSdwanRules() {
    this._sdwanRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanRulesInput() {
    return this._sdwanRules;
  }

  // security_rules - computed: false, optional: true, required: false
  private _securityRules?: string; 
  public get securityRules() {
    return this.getStringAttribute('security_rules');
  }
  public set securityRules(value: string) {
    this._securityRules = value;
  }
  public resetSecurityRules() {
    this._securityRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRulesInput() {
    return this._securityRules;
  }

  // tunnel_inspection_rules - computed: false, optional: true, required: false
  private _tunnelInspectionRules?: string; 
  public get tunnelInspectionRules() {
    return this.getStringAttribute('tunnel_inspection_rules');
  }
  public set tunnelInspectionRules(value: string) {
    this._tunnelInspectionRules = value;
  }
  public resetTunnelInspectionRules() {
    this._tunnelInspectionRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInspectionRulesInput() {
    return this._tunnelInspectionRules;
  }
}
export interface AdminRoleRoleDeviceRestapiSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#configuration AdminRole#configuration}
  */
  readonly configuration?: string;
}

export function adminRoleRoleDeviceRestapiSystemToTerraform(struct?: AdminRoleRoleDeviceRestapiSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
  }
}


export function adminRoleRoleDeviceRestapiSystemToHclTerraform(struct?: AdminRoleRoleDeviceRestapiSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceRestapiSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceRestapiSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceRestapiSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }
}
export interface AdminRoleRoleDeviceRestapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#device AdminRole#device}
  */
  readonly device?: AdminRoleRoleDeviceRestapiDevice;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#network AdminRole#network}
  */
  readonly network?: AdminRoleRoleDeviceRestapiNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#objects AdminRole#objects}
  */
  readonly objects?: AdminRoleRoleDeviceRestapiObjects;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#policies AdminRole#policies}
  */
  readonly policies?: AdminRoleRoleDeviceRestapiPolicies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#system AdminRole#system}
  */
  readonly systemAttribute?: AdminRoleRoleDeviceRestapiSystem;
}

export function adminRoleRoleDeviceRestapiToTerraform(struct?: AdminRoleRoleDeviceRestapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: adminRoleRoleDeviceRestapiDeviceToTerraform(struct!.device),
    network: adminRoleRoleDeviceRestapiNetworkToTerraform(struct!.network),
    objects: adminRoleRoleDeviceRestapiObjectsToTerraform(struct!.objects),
    policies: adminRoleRoleDeviceRestapiPoliciesToTerraform(struct!.policies),
    system: adminRoleRoleDeviceRestapiSystemToTerraform(struct!.systemAttribute),
  }
}


export function adminRoleRoleDeviceRestapiToHclTerraform(struct?: AdminRoleRoleDeviceRestapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: adminRoleRoleDeviceRestapiDeviceToHclTerraform(struct!.device),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceRestapiDevice",
    },
    network: {
      value: adminRoleRoleDeviceRestapiNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceRestapiNetwork",
    },
    objects: {
      value: adminRoleRoleDeviceRestapiObjectsToHclTerraform(struct!.objects),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceRestapiObjects",
    },
    policies: {
      value: adminRoleRoleDeviceRestapiPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceRestapiPolicies",
    },
    system: {
      value: adminRoleRoleDeviceRestapiSystemToHclTerraform(struct!.systemAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceRestapiSystem",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceRestapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceRestapi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._system?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceRestapi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device.internalValue = undefined;
      this._network.internalValue = undefined;
      this._objects.internalValue = undefined;
      this._policies.internalValue = undefined;
      this._system.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device.internalValue = value.device;
      this._network.internalValue = value.network;
      this._objects.internalValue = value.objects;
      this._policies.internalValue = value.policies;
      this._system.internalValue = value.systemAttribute;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device = new AdminRoleRoleDeviceRestapiDeviceOutputReference(this, "device");
  public get device() {
    return this._device;
  }
  public putDevice(value: AdminRoleRoleDeviceRestapiDevice) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new AdminRoleRoleDeviceRestapiNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: AdminRoleRoleDeviceRestapiNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new AdminRoleRoleDeviceRestapiObjectsOutputReference(this, "objects");
  public get objects() {
    return this._objects;
  }
  public putObjects(value: AdminRoleRoleDeviceRestapiObjects) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new AdminRoleRoleDeviceRestapiPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: AdminRoleRoleDeviceRestapiPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // system - computed: false, optional: true, required: false
  private _system = new AdminRoleRoleDeviceRestapiSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: AdminRoleRoleDeviceRestapiSystem) {
    this._system.internalValue = value;
  }
  public resetSystemAttribute() {
    this._system.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }
}
export interface AdminRoleRoleDeviceWebuiCommit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#commit_for_other_admins AdminRole#commit_for_other_admins}
  */
  readonly commitForOtherAdmins?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#device AdminRole#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#object_level_changes AdminRole#object_level_changes}
  */
  readonly objectLevelChanges?: string;
}

export function adminRoleRoleDeviceWebuiCommitToTerraform(struct?: AdminRoleRoleDeviceWebuiCommit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit_for_other_admins: cdktf.stringToTerraform(struct!.commitForOtherAdmins),
    device: cdktf.stringToTerraform(struct!.device),
    object_level_changes: cdktf.stringToTerraform(struct!.objectLevelChanges),
  }
}


export function adminRoleRoleDeviceWebuiCommitToHclTerraform(struct?: AdminRoleRoleDeviceWebuiCommit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit_for_other_admins: {
      value: cdktf.stringToHclTerraform(struct!.commitForOtherAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_level_changes: {
      value: cdktf.stringToHclTerraform(struct!.objectLevelChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiCommitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiCommit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitForOtherAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitForOtherAdmins = this._commitForOtherAdmins;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._objectLevelChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLevelChanges = this._objectLevelChanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiCommit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commitForOtherAdmins = undefined;
      this._device = undefined;
      this._objectLevelChanges = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commitForOtherAdmins = value.commitForOtherAdmins;
      this._device = value.device;
      this._objectLevelChanges = value.objectLevelChanges;
    }
  }

  // commit_for_other_admins - computed: false, optional: true, required: false
  private _commitForOtherAdmins?: string; 
  public get commitForOtherAdmins() {
    return this.getStringAttribute('commit_for_other_admins');
  }
  public set commitForOtherAdmins(value: string) {
    this._commitForOtherAdmins = value;
  }
  public resetCommitForOtherAdmins() {
    this._commitForOtherAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitForOtherAdminsInput() {
    return this._commitForOtherAdmins;
  }

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

  // object_level_changes - computed: false, optional: true, required: false
  private _objectLevelChanges?: string; 
  public get objectLevelChanges() {
    return this.getStringAttribute('object_level_changes');
  }
  public set objectLevelChanges(value: string) {
    this._objectLevelChanges = value;
  }
  public resetObjectLevelChanges() {
    this._objectLevelChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLevelChangesInput() {
    return this._objectLevelChanges;
  }
}
export interface AdminRoleRoleDeviceWebuiDeviceCertificateManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#certificate_profile AdminRole#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#certificates AdminRole#certificates}
  */
  readonly certificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ocsp_responder AdminRole#ocsp_responder}
  */
  readonly ocspResponder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#scep AdminRole#scep}
  */
  readonly scep?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ssh_service_profile AdminRole#ssh_service_profile}
  */
  readonly sshServiceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ssl_decryption_exclusion AdminRole#ssl_decryption_exclusion}
  */
  readonly sslDecryptionExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ssl_tls_service_profile AdminRole#ssl_tls_service_profile}
  */
  readonly sslTlsServiceProfile?: string;
}

export function adminRoleRoleDeviceWebuiDeviceCertificateManagementToTerraform(struct?: AdminRoleRoleDeviceWebuiDeviceCertificateManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    certificates: cdktf.stringToTerraform(struct!.certificates),
    ocsp_responder: cdktf.stringToTerraform(struct!.ocspResponder),
    scep: cdktf.stringToTerraform(struct!.scep),
    ssh_service_profile: cdktf.stringToTerraform(struct!.sshServiceProfile),
    ssl_decryption_exclusion: cdktf.stringToTerraform(struct!.sslDecryptionExclusion),
    ssl_tls_service_profile: cdktf.stringToTerraform(struct!.sslTlsServiceProfile),
  }
}


export function adminRoleRoleDeviceWebuiDeviceCertificateManagementToHclTerraform(struct?: AdminRoleRoleDeviceWebuiDeviceCertificateManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificates: {
      value: cdktf.stringToHclTerraform(struct!.certificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_responder: {
      value: cdktf.stringToHclTerraform(struct!.ocspResponder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scep: {
      value: cdktf.stringToHclTerraform(struct!.scep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_service_profile: {
      value: cdktf.stringToHclTerraform(struct!.sshServiceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_decryption_exclusion: {
      value: cdktf.stringToHclTerraform(struct!.sslDecryptionExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_tls_service_profile: {
      value: cdktf.stringToHclTerraform(struct!.sslTlsServiceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiDeviceCertificateManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiDeviceCertificateManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._certificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates;
    }
    if (this._ocspResponder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponder = this._ocspResponder;
    }
    if (this._scep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scep = this._scep;
    }
    if (this._sshServiceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshServiceProfile = this._sshServiceProfile;
    }
    if (this._sslDecryptionExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslDecryptionExclusion = this._sslDecryptionExclusion;
    }
    if (this._sslTlsServiceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTlsServiceProfile = this._sslTlsServiceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiDeviceCertificateManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateProfile = undefined;
      this._certificates = undefined;
      this._ocspResponder = undefined;
      this._scep = undefined;
      this._sshServiceProfile = undefined;
      this._sslDecryptionExclusion = undefined;
      this._sslTlsServiceProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateProfile = value.certificateProfile;
      this._certificates = value.certificates;
      this._ocspResponder = value.ocspResponder;
      this._scep = value.scep;
      this._sshServiceProfile = value.sshServiceProfile;
      this._sslDecryptionExclusion = value.sslDecryptionExclusion;
      this._sslTlsServiceProfile = value.sslTlsServiceProfile;
    }
  }

  // certificate_profile - computed: false, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates?: string; 
  public get certificates() {
    return this.getStringAttribute('certificates');
  }
  public set certificates(value: string) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

  // ocsp_responder - computed: false, optional: true, required: false
  private _ocspResponder?: string; 
  public get ocspResponder() {
    return this.getStringAttribute('ocsp_responder');
  }
  public set ocspResponder(value: string) {
    this._ocspResponder = value;
  }
  public resetOcspResponder() {
    this._ocspResponder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponderInput() {
    return this._ocspResponder;
  }

  // scep - computed: false, optional: true, required: false
  private _scep?: string; 
  public get scep() {
    return this.getStringAttribute('scep');
  }
  public set scep(value: string) {
    this._scep = value;
  }
  public resetScep() {
    this._scep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepInput() {
    return this._scep;
  }

  // ssh_service_profile - computed: false, optional: true, required: false
  private _sshServiceProfile?: string; 
  public get sshServiceProfile() {
    return this.getStringAttribute('ssh_service_profile');
  }
  public set sshServiceProfile(value: string) {
    this._sshServiceProfile = value;
  }
  public resetSshServiceProfile() {
    this._sshServiceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshServiceProfileInput() {
    return this._sshServiceProfile;
  }

  // ssl_decryption_exclusion - computed: false, optional: true, required: false
  private _sslDecryptionExclusion?: string; 
  public get sslDecryptionExclusion() {
    return this.getStringAttribute('ssl_decryption_exclusion');
  }
  public set sslDecryptionExclusion(value: string) {
    this._sslDecryptionExclusion = value;
  }
  public resetSslDecryptionExclusion() {
    this._sslDecryptionExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDecryptionExclusionInput() {
    return this._sslDecryptionExclusion;
  }

  // ssl_tls_service_profile - computed: false, optional: true, required: false
  private _sslTlsServiceProfile?: string; 
  public get sslTlsServiceProfile() {
    return this.getStringAttribute('ssl_tls_service_profile');
  }
  public set sslTlsServiceProfile(value: string) {
    this._sslTlsServiceProfile = value;
  }
  public resetSslTlsServiceProfile() {
    this._sslTlsServiceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTlsServiceProfileInput() {
    return this._sslTlsServiceProfile;
  }
}
export interface AdminRoleRoleDeviceWebuiDeviceLocalUserDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#user_groups AdminRole#user_groups}
  */
  readonly userGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#users AdminRole#users}
  */
  readonly users?: string;
}

export function adminRoleRoleDeviceWebuiDeviceLocalUserDatabaseToTerraform(struct?: AdminRoleRoleDeviceWebuiDeviceLocalUserDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_groups: cdktf.stringToTerraform(struct!.userGroups),
    users: cdktf.stringToTerraform(struct!.users),
  }
}


export function adminRoleRoleDeviceWebuiDeviceLocalUserDatabaseToHclTerraform(struct?: AdminRoleRoleDeviceWebuiDeviceLocalUserDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_groups: {
      value: cdktf.stringToHclTerraform(struct!.userGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.stringToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiDeviceLocalUserDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiDeviceLocalUserDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiDeviceLocalUserDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userGroups = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userGroups = value.userGroups;
      this._users = value.users;
    }
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string; 
  public get userGroups() {
    return this.getStringAttribute('user_groups');
  }
  public set userGroups(value: string) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string; 
  public get users() {
    return this.getStringAttribute('users');
  }
  public set users(value: string) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}
export interface AdminRoleRoleDeviceWebuiDeviceLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#cc_alarm AdminRole#cc_alarm}
  */
  readonly ccAlarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#config AdminRole#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#correlation AdminRole#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect AdminRole#globalprotect}
  */
  readonly globalprotect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hipmatch AdminRole#hipmatch}
  */
  readonly hipmatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#iptag AdminRole#iptag}
  */
  readonly iptag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#manage_log AdminRole#manage_log}
  */
  readonly manageLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#system AdminRole#system}
  */
  readonly systemAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#user_id AdminRole#user_id}
  */
  readonly userId?: string;
}

export function adminRoleRoleDeviceWebuiDeviceLogSettingsToTerraform(struct?: AdminRoleRoleDeviceWebuiDeviceLogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cc_alarm: cdktf.stringToTerraform(struct!.ccAlarm),
    config: cdktf.stringToTerraform(struct!.config),
    correlation: cdktf.stringToTerraform(struct!.correlation),
    globalprotect: cdktf.stringToTerraform(struct!.globalprotect),
    hipmatch: cdktf.stringToTerraform(struct!.hipmatch),
    iptag: cdktf.stringToTerraform(struct!.iptag),
    manage_log: cdktf.stringToTerraform(struct!.manageLog),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function adminRoleRoleDeviceWebuiDeviceLogSettingsToHclTerraform(struct?: AdminRoleRoleDeviceWebuiDeviceLogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cc_alarm: {
      value: cdktf.stringToHclTerraform(struct!.ccAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlation: {
      value: cdktf.stringToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect: {
      value: cdktf.stringToHclTerraform(struct!.globalprotect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hipmatch: {
      value: cdktf.stringToHclTerraform(struct!.hipmatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptag: {
      value: cdktf.stringToHclTerraform(struct!.iptag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage_log: {
      value: cdktf.stringToHclTerraform(struct!.manageLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiDeviceLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiDeviceLogSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ccAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccAlarm = this._ccAlarm;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._globalprotect !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotect = this._globalprotect;
    }
    if (this._hipmatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipmatch = this._hipmatch;
    }
    if (this._iptag !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptag = this._iptag;
    }
    if (this._manageLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageLog = this._manageLog;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiDeviceLogSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ccAlarm = undefined;
      this._config = undefined;
      this._correlation = undefined;
      this._globalprotect = undefined;
      this._hipmatch = undefined;
      this._iptag = undefined;
      this._manageLog = undefined;
      this._system = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ccAlarm = value.ccAlarm;
      this._config = value.config;
      this._correlation = value.correlation;
      this._globalprotect = value.globalprotect;
      this._hipmatch = value.hipmatch;
      this._iptag = value.iptag;
      this._manageLog = value.manageLog;
      this._system = value.systemAttribute;
      this._userId = value.userId;
    }
  }

  // cc_alarm - computed: false, optional: true, required: false
  private _ccAlarm?: string; 
  public get ccAlarm() {
    return this.getStringAttribute('cc_alarm');
  }
  public set ccAlarm(value: string) {
    this._ccAlarm = value;
  }
  public resetCcAlarm() {
    this._ccAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccAlarmInput() {
    return this._ccAlarm;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: string; 
  public get correlation() {
    return this.getStringAttribute('correlation');
  }
  public set correlation(value: string) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }

  // globalprotect - computed: false, optional: true, required: false
  private _globalprotect?: string; 
  public get globalprotect() {
    return this.getStringAttribute('globalprotect');
  }
  public set globalprotect(value: string) {
    this._globalprotect = value;
  }
  public resetGlobalprotect() {
    this._globalprotect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectInput() {
    return this._globalprotect;
  }

  // hipmatch - computed: false, optional: true, required: false
  private _hipmatch?: string; 
  public get hipmatch() {
    return this.getStringAttribute('hipmatch');
  }
  public set hipmatch(value: string) {
    this._hipmatch = value;
  }
  public resetHipmatch() {
    this._hipmatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipmatchInput() {
    return this._hipmatch;
  }

  // iptag - computed: false, optional: true, required: false
  private _iptag?: string; 
  public get iptag() {
    return this.getStringAttribute('iptag');
  }
  public set iptag(value: string) {
    this._iptag = value;
  }
  public resetIptag() {
    this._iptag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptagInput() {
    return this._iptag;
  }

  // manage_log - computed: false, optional: true, required: false
  private _manageLog?: string; 
  public get manageLog() {
    return this.getStringAttribute('manage_log');
  }
  public set manageLog(value: string) {
    this._manageLog = value;
  }
  public resetManageLog() {
    this._manageLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageLogInput() {
    return this._manageLog;
  }

  // system - computed: false, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface AdminRoleRoleDeviceWebuiDevicePolicyRecommendations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#iot AdminRole#iot}
  */
  readonly iot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#saas AdminRole#saas}
  */
  readonly saas?: string;
}

export function adminRoleRoleDeviceWebuiDevicePolicyRecommendationsToTerraform(struct?: AdminRoleRoleDeviceWebuiDevicePolicyRecommendations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iot: cdktf.stringToTerraform(struct!.iot),
    saas: cdktf.stringToTerraform(struct!.saas),
  }
}


export function adminRoleRoleDeviceWebuiDevicePolicyRecommendationsToHclTerraform(struct?: AdminRoleRoleDeviceWebuiDevicePolicyRecommendations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iot: {
      value: cdktf.stringToHclTerraform(struct!.iot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saas: {
      value: cdktf.stringToHclTerraform(struct!.saas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiDevicePolicyRecommendationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiDevicePolicyRecommendations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iot !== undefined) {
      hasAnyValues = true;
      internalValueResult.iot = this._iot;
    }
    if (this._saas !== undefined) {
      hasAnyValues = true;
      internalValueResult.saas = this._saas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiDevicePolicyRecommendations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iot = undefined;
      this._saas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iot = value.iot;
      this._saas = value.saas;
    }
  }

  // iot - computed: false, optional: true, required: false
  private _iot?: string; 
  public get iot() {
    return this.getStringAttribute('iot');
  }
  public set iot(value: string) {
    this._iot = value;
  }
  public resetIot() {
    this._iot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotInput() {
    return this._iot;
  }

  // saas - computed: false, optional: true, required: false
  private _saas?: string; 
  public get saas() {
    return this.getStringAttribute('saas');
  }
  public set saas(value: string) {
    this._saas = value;
  }
  public resetSaas() {
    this._saas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasInput() {
    return this._saas;
  }
}
export interface AdminRoleRoleDeviceWebuiDeviceServerProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dns AdminRole#dns}
  */
  readonly dns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#email AdminRole#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#http AdminRole#http}
  */
  readonly http?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#kerberos AdminRole#kerberos}
  */
  readonly kerberos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ldap AdminRole#ldap}
  */
  readonly ldap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#mfa AdminRole#mfa}
  */
  readonly mfa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#netflow AdminRole#netflow}
  */
  readonly netflow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#radius AdminRole#radius}
  */
  readonly radius?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#saml_idp AdminRole#saml_idp}
  */
  readonly samlIdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#scp AdminRole#scp}
  */
  readonly scp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#snmp_trap AdminRole#snmp_trap}
  */
  readonly snmpTrap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#syslog AdminRole#syslog}
  */
  readonly syslog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tacplus AdminRole#tacplus}
  */
  readonly tacplus?: string;
}

export function adminRoleRoleDeviceWebuiDeviceServerProfileToTerraform(struct?: AdminRoleRoleDeviceWebuiDeviceServerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    email: cdktf.stringToTerraform(struct!.email),
    http: cdktf.stringToTerraform(struct!.http),
    kerberos: cdktf.stringToTerraform(struct!.kerberos),
    ldap: cdktf.stringToTerraform(struct!.ldap),
    mfa: cdktf.stringToTerraform(struct!.mfa),
    netflow: cdktf.stringToTerraform(struct!.netflow),
    radius: cdktf.stringToTerraform(struct!.radius),
    saml_idp: cdktf.stringToTerraform(struct!.samlIdp),
    scp: cdktf.stringToTerraform(struct!.scp),
    snmp_trap: cdktf.stringToTerraform(struct!.snmpTrap),
    syslog: cdktf.stringToTerraform(struct!.syslog),
    tacplus: cdktf.stringToTerraform(struct!.tacplus),
  }
}


export function adminRoleRoleDeviceWebuiDeviceServerProfileToHclTerraform(struct?: AdminRoleRoleDeviceWebuiDeviceServerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos: {
      value: cdktf.stringToHclTerraform(struct!.kerberos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap: {
      value: cdktf.stringToHclTerraform(struct!.ldap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mfa: {
      value: cdktf.stringToHclTerraform(struct!.mfa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netflow: {
      value: cdktf.stringToHclTerraform(struct!.netflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius: {
      value: cdktf.stringToHclTerraform(struct!.radius),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_idp: {
      value: cdktf.stringToHclTerraform(struct!.samlIdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scp: {
      value: cdktf.stringToHclTerraform(struct!.scp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_trap: {
      value: cdktf.stringToHclTerraform(struct!.snmpTrap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog: {
      value: cdktf.stringToHclTerraform(struct!.syslog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tacplus: {
      value: cdktf.stringToHclTerraform(struct!.tacplus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiDeviceServerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiDeviceServerProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._kerberos !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos = this._kerberos;
    }
    if (this._ldap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap;
    }
    if (this._mfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfa = this._mfa;
    }
    if (this._netflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflow = this._netflow;
    }
    if (this._radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius;
    }
    if (this._samlIdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlIdp = this._samlIdp;
    }
    if (this._scp !== undefined) {
      hasAnyValues = true;
      internalValueResult.scp = this._scp;
    }
    if (this._snmpTrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpTrap = this._snmpTrap;
    }
    if (this._syslog !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog;
    }
    if (this._tacplus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplus = this._tacplus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiDeviceServerProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._email = undefined;
      this._http = undefined;
      this._kerberos = undefined;
      this._ldap = undefined;
      this._mfa = undefined;
      this._netflow = undefined;
      this._radius = undefined;
      this._samlIdp = undefined;
      this._scp = undefined;
      this._snmpTrap = undefined;
      this._syslog = undefined;
      this._tacplus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._email = value.email;
      this._http = value.http;
      this._kerberos = value.kerberos;
      this._ldap = value.ldap;
      this._mfa = value.mfa;
      this._netflow = value.netflow;
      this._radius = value.radius;
      this._samlIdp = value.samlIdp;
      this._scp = value.scp;
      this._snmpTrap = value.snmpTrap;
      this._syslog = value.syslog;
      this._tacplus = value.tacplus;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // email - computed: false, optional: true, required: false
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

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // kerberos - computed: false, optional: true, required: false
  private _kerberos?: string; 
  public get kerberos() {
    return this.getStringAttribute('kerberos');
  }
  public set kerberos(value: string) {
    this._kerberos = value;
  }
  public resetKerberos() {
    this._kerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap?: string; 
  public get ldap() {
    return this.getStringAttribute('ldap');
  }
  public set ldap(value: string) {
    this._ldap = value;
  }
  public resetLdap() {
    this._ldap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa?: string; 
  public get mfa() {
    return this.getStringAttribute('mfa');
  }
  public set mfa(value: string) {
    this._mfa = value;
  }
  public resetMfa() {
    this._mfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa;
  }

  // netflow - computed: false, optional: true, required: false
  private _netflow?: string; 
  public get netflow() {
    return this.getStringAttribute('netflow');
  }
  public set netflow(value: string) {
    this._netflow = value;
  }
  public resetNetflow() {
    this._netflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow;
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: string; 
  public get radius() {
    return this.getStringAttribute('radius');
  }
  public set radius(value: string) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // saml_idp - computed: false, optional: true, required: false
  private _samlIdp?: string; 
  public get samlIdp() {
    return this.getStringAttribute('saml_idp');
  }
  public set samlIdp(value: string) {
    this._samlIdp = value;
  }
  public resetSamlIdp() {
    this._samlIdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpInput() {
    return this._samlIdp;
  }

  // scp - computed: false, optional: true, required: false
  private _scp?: string; 
  public get scp() {
    return this.getStringAttribute('scp');
  }
  public set scp(value: string) {
    this._scp = value;
  }
  public resetScp() {
    this._scp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scpInput() {
    return this._scp;
  }

  // snmp_trap - computed: false, optional: true, required: false
  private _snmpTrap?: string; 
  public get snmpTrap() {
    return this.getStringAttribute('snmp_trap');
  }
  public set snmpTrap(value: string) {
    this._snmpTrap = value;
  }
  public resetSnmpTrap() {
    this._snmpTrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapInput() {
    return this._snmpTrap;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog?: string; 
  public get syslog() {
    return this.getStringAttribute('syslog');
  }
  public set syslog(value: string) {
    this._syslog = value;
  }
  public resetSyslog() {
    this._syslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog;
  }

  // tacplus - computed: false, optional: true, required: false
  private _tacplus?: string; 
  public get tacplus() {
    return this.getStringAttribute('tacplus');
  }
  public set tacplus(value: string) {
    this._tacplus = value;
  }
  public resetTacplus() {
    this._tacplus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusInput() {
    return this._tacplus;
  }
}
export interface AdminRoleRoleDeviceWebuiDeviceSetup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#content_id AdminRole#content_id}
  */
  readonly contentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hsm AdminRole#hsm}
  */
  readonly hsm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#interfaces AdminRole#interfaces}
  */
  readonly interfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#management AdminRole#management}
  */
  readonly management?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#operations AdminRole#operations}
  */
  readonly operations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#services AdminRole#services}
  */
  readonly services?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#session AdminRole#session}
  */
  readonly session?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#telemetry AdminRole#telemetry}
  */
  readonly telemetry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#wildfire AdminRole#wildfire}
  */
  readonly wildfire?: string;
}

export function adminRoleRoleDeviceWebuiDeviceSetupToTerraform(struct?: AdminRoleRoleDeviceWebuiDeviceSetup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_id: cdktf.stringToTerraform(struct!.contentId),
    hsm: cdktf.stringToTerraform(struct!.hsm),
    interfaces: cdktf.stringToTerraform(struct!.interfaces),
    management: cdktf.stringToTerraform(struct!.management),
    operations: cdktf.stringToTerraform(struct!.operations),
    services: cdktf.stringToTerraform(struct!.services),
    session: cdktf.stringToTerraform(struct!.session),
    telemetry: cdktf.stringToTerraform(struct!.telemetry),
    wildfire: cdktf.stringToTerraform(struct!.wildfire),
  }
}


export function adminRoleRoleDeviceWebuiDeviceSetupToHclTerraform(struct?: AdminRoleRoleDeviceWebuiDeviceSetup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_id: {
      value: cdktf.stringToHclTerraform(struct!.contentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsm: {
      value: cdktf.stringToHclTerraform(struct!.hsm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.stringToHclTerraform(struct!.interfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management: {
      value: cdktf.stringToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.stringToHclTerraform(struct!.operations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session: {
      value: cdktf.stringToHclTerraform(struct!.session),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telemetry: {
      value: cdktf.stringToHclTerraform(struct!.telemetry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire: {
      value: cdktf.stringToHclTerraform(struct!.wildfire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiDeviceSetupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiDeviceSetup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentId = this._contentId;
    }
    if (this._hsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsm = this._hsm;
    }
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._session !== undefined) {
      hasAnyValues = true;
      internalValueResult.session = this._session;
    }
    if (this._telemetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry;
    }
    if (this._wildfire !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfire = this._wildfire;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiDeviceSetup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentId = undefined;
      this._hsm = undefined;
      this._interfaces = undefined;
      this._management = undefined;
      this._operations = undefined;
      this._services = undefined;
      this._session = undefined;
      this._telemetry = undefined;
      this._wildfire = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentId = value.contentId;
      this._hsm = value.hsm;
      this._interfaces = value.interfaces;
      this._management = value.management;
      this._operations = value.operations;
      this._services = value.services;
      this._session = value.session;
      this._telemetry = value.telemetry;
      this._wildfire = value.wildfire;
    }
  }

  // content_id - computed: false, optional: true, required: false
  private _contentId?: string; 
  public get contentId() {
    return this.getStringAttribute('content_id');
  }
  public set contentId(value: string) {
    this._contentId = value;
  }
  public resetContentId() {
    this._contentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdInput() {
    return this._contentId;
  }

  // hsm - computed: false, optional: true, required: false
  private _hsm?: string; 
  public get hsm() {
    return this.getStringAttribute('hsm');
  }
  public set hsm(value: string) {
    this._hsm = value;
  }
  public resetHsm() {
    this._hsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmInput() {
    return this._hsm;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string; 
  public get interfaces() {
    return this.getStringAttribute('interfaces');
  }
  public set interfaces(value: string) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // management - computed: false, optional: true, required: false
  private _management?: string; 
  public get management() {
    return this.getStringAttribute('management');
  }
  public set management(value: string) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string; 
  public get operations() {
    return this.getStringAttribute('operations');
  }
  public set operations(value: string) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // session - computed: false, optional: true, required: false
  private _session?: string; 
  public get session() {
    return this.getStringAttribute('session');
  }
  public set session(value: string) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // telemetry - computed: false, optional: true, required: false
  private _telemetry?: string; 
  public get telemetry() {
    return this.getStringAttribute('telemetry');
  }
  public set telemetry(value: string) {
    this._telemetry = value;
  }
  public resetTelemetry() {
    this._telemetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry;
  }

  // wildfire - computed: false, optional: true, required: false
  private _wildfire?: string; 
  public get wildfire() {
    return this.getStringAttribute('wildfire');
  }
  public set wildfire(value: string) {
    this._wildfire = value;
  }
  public resetWildfire() {
    this._wildfire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInput() {
    return this._wildfire;
  }
}
export interface AdminRoleRoleDeviceWebuiDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#access_domain AdminRole#access_domain}
  */
  readonly accessDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#admin_roles AdminRole#admin_roles}
  */
  readonly adminRoles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#administrators AdminRole#administrators}
  */
  readonly administrators?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication_profile AdminRole#authentication_profile}
  */
  readonly authenticationProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication_sequence AdminRole#authentication_sequence}
  */
  readonly authenticationSequence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#block_pages AdminRole#block_pages}
  */
  readonly blockPages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#certificate_management AdminRole#certificate_management}
  */
  readonly certificateManagement?: AdminRoleRoleDeviceWebuiDeviceCertificateManagement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#config_audit AdminRole#config_audit}
  */
  readonly configAudit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_redistribution AdminRole#data_redistribution}
  */
  readonly dataRedistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#device_quarantine AdminRole#device_quarantine}
  */
  readonly deviceQuarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dhcp_syslog_server AdminRole#dhcp_syslog_server}
  */
  readonly dhcpSyslogServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dynamic_updates AdminRole#dynamic_updates}
  */
  readonly dynamicUpdates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#global_protect_client AdminRole#global_protect_client}
  */
  readonly globalProtectClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#high_availability AdminRole#high_availability}
  */
  readonly highAvailability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#licenses AdminRole#licenses}
  */
  readonly licenses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#local_user_database AdminRole#local_user_database}
  */
  readonly localUserDatabase?: AdminRoleRoleDeviceWebuiDeviceLocalUserDatabase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log_fwd_card AdminRole#log_fwd_card}
  */
  readonly logFwdCard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log_settings AdminRole#log_settings}
  */
  readonly logSettings?: AdminRoleRoleDeviceWebuiDeviceLogSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#master_key AdminRole#master_key}
  */
  readonly masterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#plugins AdminRole#plugins}
  */
  readonly plugins?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#policy_recommendations AdminRole#policy_recommendations}
  */
  readonly policyRecommendations?: AdminRoleRoleDeviceWebuiDevicePolicyRecommendations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#scheduled_log_export AdminRole#scheduled_log_export}
  */
  readonly scheduledLogExport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#server_profile AdminRole#server_profile}
  */
  readonly serverProfile?: AdminRoleRoleDeviceWebuiDeviceServerProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#setup AdminRole#setup}
  */
  readonly setup?: AdminRoleRoleDeviceWebuiDeviceSetup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#shared_gateways AdminRole#shared_gateways}
  */
  readonly sharedGateways?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#software AdminRole#software}
  */
  readonly softwareAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#support AdminRole#support}
  */
  readonly support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#troubleshooting AdminRole#troubleshooting}
  */
  readonly troubleshooting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#user_identification AdminRole#user_identification}
  */
  readonly userIdentification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#virtual_systems AdminRole#virtual_systems}
  */
  readonly virtualSystems?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vm_info_source AdminRole#vm_info_source}
  */
  readonly vmInfoSource?: string;
}

export function adminRoleRoleDeviceWebuiDeviceToTerraform(struct?: AdminRoleRoleDeviceWebuiDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_domain: cdktf.stringToTerraform(struct!.accessDomain),
    admin_roles: cdktf.stringToTerraform(struct!.adminRoles),
    administrators: cdktf.stringToTerraform(struct!.administrators),
    authentication_profile: cdktf.stringToTerraform(struct!.authenticationProfile),
    authentication_sequence: cdktf.stringToTerraform(struct!.authenticationSequence),
    block_pages: cdktf.stringToTerraform(struct!.blockPages),
    certificate_management: adminRoleRoleDeviceWebuiDeviceCertificateManagementToTerraform(struct!.certificateManagement),
    config_audit: cdktf.stringToTerraform(struct!.configAudit),
    data_redistribution: cdktf.stringToTerraform(struct!.dataRedistribution),
    device_quarantine: cdktf.stringToTerraform(struct!.deviceQuarantine),
    dhcp_syslog_server: cdktf.stringToTerraform(struct!.dhcpSyslogServer),
    dynamic_updates: cdktf.stringToTerraform(struct!.dynamicUpdates),
    global_protect_client: cdktf.stringToTerraform(struct!.globalProtectClient),
    high_availability: cdktf.stringToTerraform(struct!.highAvailability),
    licenses: cdktf.stringToTerraform(struct!.licenses),
    local_user_database: adminRoleRoleDeviceWebuiDeviceLocalUserDatabaseToTerraform(struct!.localUserDatabase),
    log_fwd_card: cdktf.stringToTerraform(struct!.logFwdCard),
    log_settings: adminRoleRoleDeviceWebuiDeviceLogSettingsToTerraform(struct!.logSettings),
    master_key: cdktf.stringToTerraform(struct!.masterKey),
    plugins: cdktf.stringToTerraform(struct!.plugins),
    policy_recommendations: adminRoleRoleDeviceWebuiDevicePolicyRecommendationsToTerraform(struct!.policyRecommendations),
    scheduled_log_export: cdktf.stringToTerraform(struct!.scheduledLogExport),
    server_profile: adminRoleRoleDeviceWebuiDeviceServerProfileToTerraform(struct!.serverProfile),
    setup: adminRoleRoleDeviceWebuiDeviceSetupToTerraform(struct!.setup),
    shared_gateways: cdktf.stringToTerraform(struct!.sharedGateways),
    software: cdktf.stringToTerraform(struct!.softwareAttribute),
    support: cdktf.stringToTerraform(struct!.support),
    troubleshooting: cdktf.stringToTerraform(struct!.troubleshooting),
    user_identification: cdktf.stringToTerraform(struct!.userIdentification),
    virtual_systems: cdktf.stringToTerraform(struct!.virtualSystems),
    vm_info_source: cdktf.stringToTerraform(struct!.vmInfoSource),
  }
}


export function adminRoleRoleDeviceWebuiDeviceToHclTerraform(struct?: AdminRoleRoleDeviceWebuiDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_domain: {
      value: cdktf.stringToHclTerraform(struct!.accessDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_roles: {
      value: cdktf.stringToHclTerraform(struct!.adminRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    administrators: {
      value: cdktf.stringToHclTerraform(struct!.administrators),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_profile: {
      value: cdktf.stringToHclTerraform(struct!.authenticationProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_sequence: {
      value: cdktf.stringToHclTerraform(struct!.authenticationSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_pages: {
      value: cdktf.stringToHclTerraform(struct!.blockPages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_management: {
      value: adminRoleRoleDeviceWebuiDeviceCertificateManagementToHclTerraform(struct!.certificateManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiDeviceCertificateManagement",
    },
    config_audit: {
      value: cdktf.stringToHclTerraform(struct!.configAudit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_redistribution: {
      value: cdktf.stringToHclTerraform(struct!.dataRedistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_quarantine: {
      value: cdktf.stringToHclTerraform(struct!.deviceQuarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_syslog_server: {
      value: cdktf.stringToHclTerraform(struct!.dhcpSyslogServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_updates: {
      value: cdktf.stringToHclTerraform(struct!.dynamicUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_protect_client: {
      value: cdktf.stringToHclTerraform(struct!.globalProtectClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    high_availability: {
      value: cdktf.stringToHclTerraform(struct!.highAvailability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    licenses: {
      value: cdktf.stringToHclTerraform(struct!.licenses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_user_database: {
      value: adminRoleRoleDeviceWebuiDeviceLocalUserDatabaseToHclTerraform(struct!.localUserDatabase),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiDeviceLocalUserDatabase",
    },
    log_fwd_card: {
      value: cdktf.stringToHclTerraform(struct!.logFwdCard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_settings: {
      value: adminRoleRoleDeviceWebuiDeviceLogSettingsToHclTerraform(struct!.logSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiDeviceLogSettings",
    },
    master_key: {
      value: cdktf.stringToHclTerraform(struct!.masterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugins: {
      value: cdktf.stringToHclTerraform(struct!.plugins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_recommendations: {
      value: adminRoleRoleDeviceWebuiDevicePolicyRecommendationsToHclTerraform(struct!.policyRecommendations),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiDevicePolicyRecommendations",
    },
    scheduled_log_export: {
      value: cdktf.stringToHclTerraform(struct!.scheduledLogExport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_profile: {
      value: adminRoleRoleDeviceWebuiDeviceServerProfileToHclTerraform(struct!.serverProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiDeviceServerProfile",
    },
    setup: {
      value: adminRoleRoleDeviceWebuiDeviceSetupToHclTerraform(struct!.setup),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiDeviceSetup",
    },
    shared_gateways: {
      value: cdktf.stringToHclTerraform(struct!.sharedGateways),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    software: {
      value: cdktf.stringToHclTerraform(struct!.softwareAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support: {
      value: cdktf.stringToHclTerraform(struct!.support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    troubleshooting: {
      value: cdktf.stringToHclTerraform(struct!.troubleshooting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_identification: {
      value: cdktf.stringToHclTerraform(struct!.userIdentification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_systems: {
      value: cdktf.stringToHclTerraform(struct!.virtualSystems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_info_source: {
      value: cdktf.stringToHclTerraform(struct!.vmInfoSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessDomain = this._accessDomain;
    }
    if (this._adminRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminRoles = this._adminRoles;
    }
    if (this._administrators !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrators = this._administrators;
    }
    if (this._authenticationProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationProfile = this._authenticationProfile;
    }
    if (this._authenticationSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationSequence = this._authenticationSequence;
    }
    if (this._blockPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPages = this._blockPages;
    }
    if (this._certificateManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateManagement = this._certificateManagement?.internalValue;
    }
    if (this._configAudit !== undefined) {
      hasAnyValues = true;
      internalValueResult.configAudit = this._configAudit;
    }
    if (this._dataRedistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRedistribution = this._dataRedistribution;
    }
    if (this._deviceQuarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceQuarantine = this._deviceQuarantine;
    }
    if (this._dhcpSyslogServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSyslogServer = this._dhcpSyslogServer;
    }
    if (this._dynamicUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicUpdates = this._dynamicUpdates;
    }
    if (this._globalProtectClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalProtectClient = this._globalProtectClient;
    }
    if (this._highAvailability !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability;
    }
    if (this._licenses !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenses = this._licenses;
    }
    if (this._localUserDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUserDatabase = this._localUserDatabase?.internalValue;
    }
    if (this._logFwdCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFwdCard = this._logFwdCard;
    }
    if (this._logSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSettings = this._logSettings?.internalValue;
    }
    if (this._masterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterKey = this._masterKey;
    }
    if (this._plugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins;
    }
    if (this._policyRecommendations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRecommendations = this._policyRecommendations?.internalValue;
    }
    if (this._scheduledLogExport !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledLogExport = this._scheduledLogExport;
    }
    if (this._serverProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile?.internalValue;
    }
    if (this._setup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setup = this._setup?.internalValue;
    }
    if (this._sharedGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedGateways = this._sharedGateways;
    }
    if (this._software !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareAttribute = this._software;
    }
    if (this._support !== undefined) {
      hasAnyValues = true;
      internalValueResult.support = this._support;
    }
    if (this._troubleshooting !== undefined) {
      hasAnyValues = true;
      internalValueResult.troubleshooting = this._troubleshooting;
    }
    if (this._userIdentification !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentification = this._userIdentification;
    }
    if (this._virtualSystems !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSystems = this._virtualSystems;
    }
    if (this._vmInfoSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmInfoSource = this._vmInfoSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessDomain = undefined;
      this._adminRoles = undefined;
      this._administrators = undefined;
      this._authenticationProfile = undefined;
      this._authenticationSequence = undefined;
      this._blockPages = undefined;
      this._certificateManagement.internalValue = undefined;
      this._configAudit = undefined;
      this._dataRedistribution = undefined;
      this._deviceQuarantine = undefined;
      this._dhcpSyslogServer = undefined;
      this._dynamicUpdates = undefined;
      this._globalProtectClient = undefined;
      this._highAvailability = undefined;
      this._licenses = undefined;
      this._localUserDatabase.internalValue = undefined;
      this._logFwdCard = undefined;
      this._logSettings.internalValue = undefined;
      this._masterKey = undefined;
      this._plugins = undefined;
      this._policyRecommendations.internalValue = undefined;
      this._scheduledLogExport = undefined;
      this._serverProfile.internalValue = undefined;
      this._setup.internalValue = undefined;
      this._sharedGateways = undefined;
      this._software = undefined;
      this._support = undefined;
      this._troubleshooting = undefined;
      this._userIdentification = undefined;
      this._virtualSystems = undefined;
      this._vmInfoSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessDomain = value.accessDomain;
      this._adminRoles = value.adminRoles;
      this._administrators = value.administrators;
      this._authenticationProfile = value.authenticationProfile;
      this._authenticationSequence = value.authenticationSequence;
      this._blockPages = value.blockPages;
      this._certificateManagement.internalValue = value.certificateManagement;
      this._configAudit = value.configAudit;
      this._dataRedistribution = value.dataRedistribution;
      this._deviceQuarantine = value.deviceQuarantine;
      this._dhcpSyslogServer = value.dhcpSyslogServer;
      this._dynamicUpdates = value.dynamicUpdates;
      this._globalProtectClient = value.globalProtectClient;
      this._highAvailability = value.highAvailability;
      this._licenses = value.licenses;
      this._localUserDatabase.internalValue = value.localUserDatabase;
      this._logFwdCard = value.logFwdCard;
      this._logSettings.internalValue = value.logSettings;
      this._masterKey = value.masterKey;
      this._plugins = value.plugins;
      this._policyRecommendations.internalValue = value.policyRecommendations;
      this._scheduledLogExport = value.scheduledLogExport;
      this._serverProfile.internalValue = value.serverProfile;
      this._setup.internalValue = value.setup;
      this._sharedGateways = value.sharedGateways;
      this._software = value.softwareAttribute;
      this._support = value.support;
      this._troubleshooting = value.troubleshooting;
      this._userIdentification = value.userIdentification;
      this._virtualSystems = value.virtualSystems;
      this._vmInfoSource = value.vmInfoSource;
    }
  }

  // access_domain - computed: false, optional: true, required: false
  private _accessDomain?: string; 
  public get accessDomain() {
    return this.getStringAttribute('access_domain');
  }
  public set accessDomain(value: string) {
    this._accessDomain = value;
  }
  public resetAccessDomain() {
    this._accessDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDomainInput() {
    return this._accessDomain;
  }

  // admin_roles - computed: false, optional: true, required: false
  private _adminRoles?: string; 
  public get adminRoles() {
    return this.getStringAttribute('admin_roles');
  }
  public set adminRoles(value: string) {
    this._adminRoles = value;
  }
  public resetAdminRoles() {
    this._adminRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRolesInput() {
    return this._adminRoles;
  }

  // administrators - computed: false, optional: true, required: false
  private _administrators?: string; 
  public get administrators() {
    return this.getStringAttribute('administrators');
  }
  public set administrators(value: string) {
    this._administrators = value;
  }
  public resetAdministrators() {
    this._administrators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorsInput() {
    return this._administrators;
  }

  // authentication_profile - computed: false, optional: true, required: false
  private _authenticationProfile?: string; 
  public get authenticationProfile() {
    return this.getStringAttribute('authentication_profile');
  }
  public set authenticationProfile(value: string) {
    this._authenticationProfile = value;
  }
  public resetAuthenticationProfile() {
    this._authenticationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileInput() {
    return this._authenticationProfile;
  }

  // authentication_sequence - computed: false, optional: true, required: false
  private _authenticationSequence?: string; 
  public get authenticationSequence() {
    return this.getStringAttribute('authentication_sequence');
  }
  public set authenticationSequence(value: string) {
    this._authenticationSequence = value;
  }
  public resetAuthenticationSequence() {
    this._authenticationSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSequenceInput() {
    return this._authenticationSequence;
  }

  // block_pages - computed: false, optional: true, required: false
  private _blockPages?: string; 
  public get blockPages() {
    return this.getStringAttribute('block_pages');
  }
  public set blockPages(value: string) {
    this._blockPages = value;
  }
  public resetBlockPages() {
    this._blockPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPagesInput() {
    return this._blockPages;
  }

  // certificate_management - computed: false, optional: true, required: false
  private _certificateManagement = new AdminRoleRoleDeviceWebuiDeviceCertificateManagementOutputReference(this, "certificate_management");
  public get certificateManagement() {
    return this._certificateManagement;
  }
  public putCertificateManagement(value: AdminRoleRoleDeviceWebuiDeviceCertificateManagement) {
    this._certificateManagement.internalValue = value;
  }
  public resetCertificateManagement() {
    this._certificateManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagementInput() {
    return this._certificateManagement.internalValue;
  }

  // config_audit - computed: false, optional: true, required: false
  private _configAudit?: string; 
  public get configAudit() {
    return this.getStringAttribute('config_audit');
  }
  public set configAudit(value: string) {
    this._configAudit = value;
  }
  public resetConfigAudit() {
    this._configAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configAuditInput() {
    return this._configAudit;
  }

  // data_redistribution - computed: false, optional: true, required: false
  private _dataRedistribution?: string; 
  public get dataRedistribution() {
    return this.getStringAttribute('data_redistribution');
  }
  public set dataRedistribution(value: string) {
    this._dataRedistribution = value;
  }
  public resetDataRedistribution() {
    this._dataRedistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRedistributionInput() {
    return this._dataRedistribution;
  }

  // device_quarantine - computed: false, optional: true, required: false
  private _deviceQuarantine?: string; 
  public get deviceQuarantine() {
    return this.getStringAttribute('device_quarantine');
  }
  public set deviceQuarantine(value: string) {
    this._deviceQuarantine = value;
  }
  public resetDeviceQuarantine() {
    this._deviceQuarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceQuarantineInput() {
    return this._deviceQuarantine;
  }

  // dhcp_syslog_server - computed: false, optional: true, required: false
  private _dhcpSyslogServer?: string; 
  public get dhcpSyslogServer() {
    return this.getStringAttribute('dhcp_syslog_server');
  }
  public set dhcpSyslogServer(value: string) {
    this._dhcpSyslogServer = value;
  }
  public resetDhcpSyslogServer() {
    this._dhcpSyslogServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSyslogServerInput() {
    return this._dhcpSyslogServer;
  }

  // dynamic_updates - computed: false, optional: true, required: false
  private _dynamicUpdates?: string; 
  public get dynamicUpdates() {
    return this.getStringAttribute('dynamic_updates');
  }
  public set dynamicUpdates(value: string) {
    this._dynamicUpdates = value;
  }
  public resetDynamicUpdates() {
    this._dynamicUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicUpdatesInput() {
    return this._dynamicUpdates;
  }

  // global_protect_client - computed: false, optional: true, required: false
  private _globalProtectClient?: string; 
  public get globalProtectClient() {
    return this.getStringAttribute('global_protect_client');
  }
  public set globalProtectClient(value: string) {
    this._globalProtectClient = value;
  }
  public resetGlobalProtectClient() {
    this._globalProtectClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectClientInput() {
    return this._globalProtectClient;
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability?: string; 
  public get highAvailability() {
    return this.getStringAttribute('high_availability');
  }
  public set highAvailability(value: string) {
    this._highAvailability = value;
  }
  public resetHighAvailability() {
    this._highAvailability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability;
  }

  // licenses - computed: false, optional: true, required: false
  private _licenses?: string; 
  public get licenses() {
    return this.getStringAttribute('licenses');
  }
  public set licenses(value: string) {
    this._licenses = value;
  }
  public resetLicenses() {
    this._licenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses;
  }

  // local_user_database - computed: false, optional: true, required: false
  private _localUserDatabase = new AdminRoleRoleDeviceWebuiDeviceLocalUserDatabaseOutputReference(this, "local_user_database");
  public get localUserDatabase() {
    return this._localUserDatabase;
  }
  public putLocalUserDatabase(value: AdminRoleRoleDeviceWebuiDeviceLocalUserDatabase) {
    this._localUserDatabase.internalValue = value;
  }
  public resetLocalUserDatabase() {
    this._localUserDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUserDatabaseInput() {
    return this._localUserDatabase.internalValue;
  }

  // log_fwd_card - computed: false, optional: true, required: false
  private _logFwdCard?: string; 
  public get logFwdCard() {
    return this.getStringAttribute('log_fwd_card');
  }
  public set logFwdCard(value: string) {
    this._logFwdCard = value;
  }
  public resetLogFwdCard() {
    this._logFwdCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFwdCardInput() {
    return this._logFwdCard;
  }

  // log_settings - computed: false, optional: true, required: false
  private _logSettings = new AdminRoleRoleDeviceWebuiDeviceLogSettingsOutputReference(this, "log_settings");
  public get logSettings() {
    return this._logSettings;
  }
  public putLogSettings(value: AdminRoleRoleDeviceWebuiDeviceLogSettings) {
    this._logSettings.internalValue = value;
  }
  public resetLogSettings() {
    this._logSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingsInput() {
    return this._logSettings.internalValue;
  }

  // master_key - computed: false, optional: true, required: false
  private _masterKey?: string; 
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }
  public set masterKey(value: string) {
    this._masterKey = value;
  }
  public resetMasterKey() {
    this._masterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyInput() {
    return this._masterKey;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins?: string; 
  public get plugins() {
    return this.getStringAttribute('plugins');
  }
  public set plugins(value: string) {
    this._plugins = value;
  }
  public resetPlugins() {
    this._plugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins;
  }

  // policy_recommendations - computed: false, optional: true, required: false
  private _policyRecommendations = new AdminRoleRoleDeviceWebuiDevicePolicyRecommendationsOutputReference(this, "policy_recommendations");
  public get policyRecommendations() {
    return this._policyRecommendations;
  }
  public putPolicyRecommendations(value: AdminRoleRoleDeviceWebuiDevicePolicyRecommendations) {
    this._policyRecommendations.internalValue = value;
  }
  public resetPolicyRecommendations() {
    this._policyRecommendations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRecommendationsInput() {
    return this._policyRecommendations.internalValue;
  }

  // scheduled_log_export - computed: false, optional: true, required: false
  private _scheduledLogExport?: string; 
  public get scheduledLogExport() {
    return this.getStringAttribute('scheduled_log_export');
  }
  public set scheduledLogExport(value: string) {
    this._scheduledLogExport = value;
  }
  public resetScheduledLogExport() {
    this._scheduledLogExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledLogExportInput() {
    return this._scheduledLogExport;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile = new AdminRoleRoleDeviceWebuiDeviceServerProfileOutputReference(this, "server_profile");
  public get serverProfile() {
    return this._serverProfile;
  }
  public putServerProfile(value: AdminRoleRoleDeviceWebuiDeviceServerProfile) {
    this._serverProfile.internalValue = value;
  }
  public resetServerProfile() {
    this._serverProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile.internalValue;
  }

  // setup - computed: false, optional: true, required: false
  private _setup = new AdminRoleRoleDeviceWebuiDeviceSetupOutputReference(this, "setup");
  public get setup() {
    return this._setup;
  }
  public putSetup(value: AdminRoleRoleDeviceWebuiDeviceSetup) {
    this._setup.internalValue = value;
  }
  public resetSetup() {
    this._setup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setupInput() {
    return this._setup.internalValue;
  }

  // shared_gateways - computed: false, optional: true, required: false
  private _sharedGateways?: string; 
  public get sharedGateways() {
    return this.getStringAttribute('shared_gateways');
  }
  public set sharedGateways(value: string) {
    this._sharedGateways = value;
  }
  public resetSharedGateways() {
    this._sharedGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedGatewaysInput() {
    return this._sharedGateways;
  }

  // software - computed: false, optional: true, required: false
  private _software?: string; 
  public get softwareAttribute() {
    return this.getStringAttribute('software');
  }
  public set softwareAttribute(value: string) {
    this._software = value;
  }
  public resetSoftwareAttribute() {
    this._software = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareAttributeInput() {
    return this._software;
  }

  // support - computed: false, optional: true, required: false
  private _support?: string; 
  public get support() {
    return this.getStringAttribute('support');
  }
  public set support(value: string) {
    this._support = value;
  }
  public resetSupport() {
    this._support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportInput() {
    return this._support;
  }

  // troubleshooting - computed: false, optional: true, required: false
  private _troubleshooting?: string; 
  public get troubleshooting() {
    return this.getStringAttribute('troubleshooting');
  }
  public set troubleshooting(value: string) {
    this._troubleshooting = value;
  }
  public resetTroubleshooting() {
    this._troubleshooting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get troubleshootingInput() {
    return this._troubleshooting;
  }

  // user_identification - computed: false, optional: true, required: false
  private _userIdentification?: string; 
  public get userIdentification() {
    return this.getStringAttribute('user_identification');
  }
  public set userIdentification(value: string) {
    this._userIdentification = value;
  }
  public resetUserIdentification() {
    this._userIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentificationInput() {
    return this._userIdentification;
  }

  // virtual_systems - computed: false, optional: true, required: false
  private _virtualSystems?: string; 
  public get virtualSystems() {
    return this.getStringAttribute('virtual_systems');
  }
  public set virtualSystems(value: string) {
    this._virtualSystems = value;
  }
  public resetVirtualSystems() {
    this._virtualSystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSystemsInput() {
    return this._virtualSystems;
  }

  // vm_info_source - computed: false, optional: true, required: false
  private _vmInfoSource?: string; 
  public get vmInfoSource() {
    return this.getStringAttribute('vm_info_source');
  }
  public set vmInfoSource(value: string) {
    this._vmInfoSource = value;
  }
  public resetVmInfoSource() {
    this._vmInfoSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInfoSourceInput() {
    return this._vmInfoSource;
  }
}
export interface AdminRoleRoleDeviceWebuiGlobal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#system_alarms AdminRole#system_alarms}
  */
  readonly systemAlarms?: string;
}

export function adminRoleRoleDeviceWebuiGlobalToTerraform(struct?: AdminRoleRoleDeviceWebuiGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_alarms: cdktf.stringToTerraform(struct!.systemAlarms),
  }
}


export function adminRoleRoleDeviceWebuiGlobalToHclTerraform(struct?: AdminRoleRoleDeviceWebuiGlobal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system_alarms: {
      value: cdktf.stringToHclTerraform(struct!.systemAlarms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiGlobal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemAlarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAlarms = this._systemAlarms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiGlobal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._systemAlarms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._systemAlarms = value.systemAlarms;
    }
  }

  // system_alarms - computed: false, optional: true, required: false
  private _systemAlarms?: string; 
  public get systemAlarms() {
    return this.getStringAttribute('system_alarms');
  }
  public set systemAlarms(value: string) {
    this._systemAlarms = value;
  }
  public resetSystemAlarms() {
    this._systemAlarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAlarmsInput() {
    return this._systemAlarms;
  }
}
export interface AdminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#correlated_events AdminRole#correlated_events}
  */
  readonly correlatedEvents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#correlation_objects AdminRole#correlation_objects}
  */
  readonly correlationObjects?: string;
}

export function adminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngineToTerraform(struct?: AdminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlated_events: cdktf.stringToTerraform(struct!.correlatedEvents),
    correlation_objects: cdktf.stringToTerraform(struct!.correlationObjects),
  }
}


export function adminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngineToHclTerraform(struct?: AdminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlated_events: {
      value: cdktf.stringToHclTerraform(struct!.correlatedEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlation_objects: {
      value: cdktf.stringToHclTerraform(struct!.correlationObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlatedEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlatedEvents = this._correlatedEvents;
    }
    if (this._correlationObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlationObjects = this._correlationObjects;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlatedEvents = undefined;
      this._correlationObjects = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlatedEvents = value.correlatedEvents;
      this._correlationObjects = value.correlationObjects;
    }
  }

  // correlated_events - computed: false, optional: true, required: false
  private _correlatedEvents?: string; 
  public get correlatedEvents() {
    return this.getStringAttribute('correlated_events');
  }
  public set correlatedEvents(value: string) {
    this._correlatedEvents = value;
  }
  public resetCorrelatedEvents() {
    this._correlatedEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlatedEventsInput() {
    return this._correlatedEvents;
  }

  // correlation_objects - computed: false, optional: true, required: false
  private _correlationObjects?: string; 
  public get correlationObjects() {
    return this.getStringAttribute('correlation_objects');
  }
  public set correlationObjects(value: string) {
    this._correlationObjects = value;
  }
  public resetCorrelationObjects() {
    this._correlationObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationObjectsInput() {
    return this._correlationObjects;
  }
}
export interface AdminRoleRoleDeviceWebuiMonitorCustomReports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_statistics AdminRole#application_statistics}
  */
  readonly applicationStatistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#auth AdminRole#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_filtering_log AdminRole#data_filtering_log}
  */
  readonly dataFilteringLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption_log AdminRole#decryption_log}
  */
  readonly decryptionLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption_summary AdminRole#decryption_summary}
  */
  readonly decryptionSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect AdminRole#globalprotect}
  */
  readonly globalprotect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp_log AdminRole#gtp_log}
  */
  readonly gtpLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp_summary AdminRole#gtp_summary}
  */
  readonly gtpSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hipmatch AdminRole#hipmatch}
  */
  readonly hipmatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#iptag AdminRole#iptag}
  */
  readonly iptag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp_log AdminRole#sctp_log}
  */
  readonly sctpLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp_summary AdminRole#sctp_summary}
  */
  readonly sctpSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#threat_log AdminRole#threat_log}
  */
  readonly threatLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#threat_summary AdminRole#threat_summary}
  */
  readonly threatSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#traffic_log AdminRole#traffic_log}
  */
  readonly trafficLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#traffic_summary AdminRole#traffic_summary}
  */
  readonly trafficSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_log AdminRole#tunnel_log}
  */
  readonly tunnelLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_summary AdminRole#tunnel_summary}
  */
  readonly tunnelSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_log AdminRole#url_log}
  */
  readonly urlLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_summary AdminRole#url_summary}
  */
  readonly urlSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#userid AdminRole#userid}
  */
  readonly userid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#wildfire_log AdminRole#wildfire_log}
  */
  readonly wildfireLog?: string;
}

export function adminRoleRoleDeviceWebuiMonitorCustomReportsToTerraform(struct?: AdminRoleRoleDeviceWebuiMonitorCustomReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_statistics: cdktf.stringToTerraform(struct!.applicationStatistics),
    auth: cdktf.stringToTerraform(struct!.auth),
    data_filtering_log: cdktf.stringToTerraform(struct!.dataFilteringLog),
    decryption_log: cdktf.stringToTerraform(struct!.decryptionLog),
    decryption_summary: cdktf.stringToTerraform(struct!.decryptionSummary),
    globalprotect: cdktf.stringToTerraform(struct!.globalprotect),
    gtp_log: cdktf.stringToTerraform(struct!.gtpLog),
    gtp_summary: cdktf.stringToTerraform(struct!.gtpSummary),
    hipmatch: cdktf.stringToTerraform(struct!.hipmatch),
    iptag: cdktf.stringToTerraform(struct!.iptag),
    sctp_log: cdktf.stringToTerraform(struct!.sctpLog),
    sctp_summary: cdktf.stringToTerraform(struct!.sctpSummary),
    threat_log: cdktf.stringToTerraform(struct!.threatLog),
    threat_summary: cdktf.stringToTerraform(struct!.threatSummary),
    traffic_log: cdktf.stringToTerraform(struct!.trafficLog),
    traffic_summary: cdktf.stringToTerraform(struct!.trafficSummary),
    tunnel_log: cdktf.stringToTerraform(struct!.tunnelLog),
    tunnel_summary: cdktf.stringToTerraform(struct!.tunnelSummary),
    url_log: cdktf.stringToTerraform(struct!.urlLog),
    url_summary: cdktf.stringToTerraform(struct!.urlSummary),
    userid: cdktf.stringToTerraform(struct!.userid),
    wildfire_log: cdktf.stringToTerraform(struct!.wildfireLog),
  }
}


export function adminRoleRoleDeviceWebuiMonitorCustomReportsToHclTerraform(struct?: AdminRoleRoleDeviceWebuiMonitorCustomReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_statistics: {
      value: cdktf.stringToHclTerraform(struct!.applicationStatistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_filtering_log: {
      value: cdktf.stringToHclTerraform(struct!.dataFilteringLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_log: {
      value: cdktf.stringToHclTerraform(struct!.decryptionLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_summary: {
      value: cdktf.stringToHclTerraform(struct!.decryptionSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect: {
      value: cdktf.stringToHclTerraform(struct!.globalprotect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_log: {
      value: cdktf.stringToHclTerraform(struct!.gtpLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_summary: {
      value: cdktf.stringToHclTerraform(struct!.gtpSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hipmatch: {
      value: cdktf.stringToHclTerraform(struct!.hipmatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptag: {
      value: cdktf.stringToHclTerraform(struct!.iptag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_log: {
      value: cdktf.stringToHclTerraform(struct!.sctpLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_summary: {
      value: cdktf.stringToHclTerraform(struct!.sctpSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_log: {
      value: cdktf.stringToHclTerraform(struct!.threatLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_summary: {
      value: cdktf.stringToHclTerraform(struct!.threatSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_log: {
      value: cdktf.stringToHclTerraform(struct!.trafficLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_summary: {
      value: cdktf.stringToHclTerraform(struct!.trafficSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_log: {
      value: cdktf.stringToHclTerraform(struct!.tunnelLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_summary: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_log: {
      value: cdktf.stringToHclTerraform(struct!.urlLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_summary: {
      value: cdktf.stringToHclTerraform(struct!.urlSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userid: {
      value: cdktf.stringToHclTerraform(struct!.userid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire_log: {
      value: cdktf.stringToHclTerraform(struct!.wildfireLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiMonitorCustomReportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiMonitorCustomReports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationStatistics = this._applicationStatistics;
    }
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._dataFilteringLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFilteringLog = this._dataFilteringLog;
    }
    if (this._decryptionLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionLog = this._decryptionLog;
    }
    if (this._decryptionSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionSummary = this._decryptionSummary;
    }
    if (this._globalprotect !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotect = this._globalprotect;
    }
    if (this._gtpLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpLog = this._gtpLog;
    }
    if (this._gtpSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSummary = this._gtpSummary;
    }
    if (this._hipmatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipmatch = this._hipmatch;
    }
    if (this._iptag !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptag = this._iptag;
    }
    if (this._sctpLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpLog = this._sctpLog;
    }
    if (this._sctpSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpSummary = this._sctpSummary;
    }
    if (this._threatLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatLog = this._threatLog;
    }
    if (this._threatSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatSummary = this._threatSummary;
    }
    if (this._trafficLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficLog = this._trafficLog;
    }
    if (this._trafficSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSummary = this._trafficSummary;
    }
    if (this._tunnelLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelLog = this._tunnelLog;
    }
    if (this._tunnelSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSummary = this._tunnelSummary;
    }
    if (this._urlLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlLog = this._urlLog;
    }
    if (this._urlSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSummary = this._urlSummary;
    }
    if (this._userid !== undefined) {
      hasAnyValues = true;
      internalValueResult.userid = this._userid;
    }
    if (this._wildfireLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireLog = this._wildfireLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiMonitorCustomReports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationStatistics = undefined;
      this._auth = undefined;
      this._dataFilteringLog = undefined;
      this._decryptionLog = undefined;
      this._decryptionSummary = undefined;
      this._globalprotect = undefined;
      this._gtpLog = undefined;
      this._gtpSummary = undefined;
      this._hipmatch = undefined;
      this._iptag = undefined;
      this._sctpLog = undefined;
      this._sctpSummary = undefined;
      this._threatLog = undefined;
      this._threatSummary = undefined;
      this._trafficLog = undefined;
      this._trafficSummary = undefined;
      this._tunnelLog = undefined;
      this._tunnelSummary = undefined;
      this._urlLog = undefined;
      this._urlSummary = undefined;
      this._userid = undefined;
      this._wildfireLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationStatistics = value.applicationStatistics;
      this._auth = value.auth;
      this._dataFilteringLog = value.dataFilteringLog;
      this._decryptionLog = value.decryptionLog;
      this._decryptionSummary = value.decryptionSummary;
      this._globalprotect = value.globalprotect;
      this._gtpLog = value.gtpLog;
      this._gtpSummary = value.gtpSummary;
      this._hipmatch = value.hipmatch;
      this._iptag = value.iptag;
      this._sctpLog = value.sctpLog;
      this._sctpSummary = value.sctpSummary;
      this._threatLog = value.threatLog;
      this._threatSummary = value.threatSummary;
      this._trafficLog = value.trafficLog;
      this._trafficSummary = value.trafficSummary;
      this._tunnelLog = value.tunnelLog;
      this._tunnelSummary = value.tunnelSummary;
      this._urlLog = value.urlLog;
      this._urlSummary = value.urlSummary;
      this._userid = value.userid;
      this._wildfireLog = value.wildfireLog;
    }
  }

  // application_statistics - computed: false, optional: true, required: false
  private _applicationStatistics?: string; 
  public get applicationStatistics() {
    return this.getStringAttribute('application_statistics');
  }
  public set applicationStatistics(value: string) {
    this._applicationStatistics = value;
  }
  public resetApplicationStatistics() {
    this._applicationStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationStatisticsInput() {
    return this._applicationStatistics;
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // data_filtering_log - computed: false, optional: true, required: false
  private _dataFilteringLog?: string; 
  public get dataFilteringLog() {
    return this.getStringAttribute('data_filtering_log');
  }
  public set dataFilteringLog(value: string) {
    this._dataFilteringLog = value;
  }
  public resetDataFilteringLog() {
    this._dataFilteringLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringLogInput() {
    return this._dataFilteringLog;
  }

  // decryption_log - computed: false, optional: true, required: false
  private _decryptionLog?: string; 
  public get decryptionLog() {
    return this.getStringAttribute('decryption_log');
  }
  public set decryptionLog(value: string) {
    this._decryptionLog = value;
  }
  public resetDecryptionLog() {
    this._decryptionLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionLogInput() {
    return this._decryptionLog;
  }

  // decryption_summary - computed: false, optional: true, required: false
  private _decryptionSummary?: string; 
  public get decryptionSummary() {
    return this.getStringAttribute('decryption_summary');
  }
  public set decryptionSummary(value: string) {
    this._decryptionSummary = value;
  }
  public resetDecryptionSummary() {
    this._decryptionSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionSummaryInput() {
    return this._decryptionSummary;
  }

  // globalprotect - computed: false, optional: true, required: false
  private _globalprotect?: string; 
  public get globalprotect() {
    return this.getStringAttribute('globalprotect');
  }
  public set globalprotect(value: string) {
    this._globalprotect = value;
  }
  public resetGlobalprotect() {
    this._globalprotect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectInput() {
    return this._globalprotect;
  }

  // gtp_log - computed: false, optional: true, required: false
  private _gtpLog?: string; 
  public get gtpLog() {
    return this.getStringAttribute('gtp_log');
  }
  public set gtpLog(value: string) {
    this._gtpLog = value;
  }
  public resetGtpLog() {
    this._gtpLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpLogInput() {
    return this._gtpLog;
  }

  // gtp_summary - computed: false, optional: true, required: false
  private _gtpSummary?: string; 
  public get gtpSummary() {
    return this.getStringAttribute('gtp_summary');
  }
  public set gtpSummary(value: string) {
    this._gtpSummary = value;
  }
  public resetGtpSummary() {
    this._gtpSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSummaryInput() {
    return this._gtpSummary;
  }

  // hipmatch - computed: false, optional: true, required: false
  private _hipmatch?: string; 
  public get hipmatch() {
    return this.getStringAttribute('hipmatch');
  }
  public set hipmatch(value: string) {
    this._hipmatch = value;
  }
  public resetHipmatch() {
    this._hipmatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipmatchInput() {
    return this._hipmatch;
  }

  // iptag - computed: false, optional: true, required: false
  private _iptag?: string; 
  public get iptag() {
    return this.getStringAttribute('iptag');
  }
  public set iptag(value: string) {
    this._iptag = value;
  }
  public resetIptag() {
    this._iptag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptagInput() {
    return this._iptag;
  }

  // sctp_log - computed: false, optional: true, required: false
  private _sctpLog?: string; 
  public get sctpLog() {
    return this.getStringAttribute('sctp_log');
  }
  public set sctpLog(value: string) {
    this._sctpLog = value;
  }
  public resetSctpLog() {
    this._sctpLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpLogInput() {
    return this._sctpLog;
  }

  // sctp_summary - computed: false, optional: true, required: false
  private _sctpSummary?: string; 
  public get sctpSummary() {
    return this.getStringAttribute('sctp_summary');
  }
  public set sctpSummary(value: string) {
    this._sctpSummary = value;
  }
  public resetSctpSummary() {
    this._sctpSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpSummaryInput() {
    return this._sctpSummary;
  }

  // threat_log - computed: false, optional: true, required: false
  private _threatLog?: string; 
  public get threatLog() {
    return this.getStringAttribute('threat_log');
  }
  public set threatLog(value: string) {
    this._threatLog = value;
  }
  public resetThreatLog() {
    this._threatLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatLogInput() {
    return this._threatLog;
  }

  // threat_summary - computed: false, optional: true, required: false
  private _threatSummary?: string; 
  public get threatSummary() {
    return this.getStringAttribute('threat_summary');
  }
  public set threatSummary(value: string) {
    this._threatSummary = value;
  }
  public resetThreatSummary() {
    this._threatSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatSummaryInput() {
    return this._threatSummary;
  }

  // traffic_log - computed: false, optional: true, required: false
  private _trafficLog?: string; 
  public get trafficLog() {
    return this.getStringAttribute('traffic_log');
  }
  public set trafficLog(value: string) {
    this._trafficLog = value;
  }
  public resetTrafficLog() {
    this._trafficLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficLogInput() {
    return this._trafficLog;
  }

  // traffic_summary - computed: false, optional: true, required: false
  private _trafficSummary?: string; 
  public get trafficSummary() {
    return this.getStringAttribute('traffic_summary');
  }
  public set trafficSummary(value: string) {
    this._trafficSummary = value;
  }
  public resetTrafficSummary() {
    this._trafficSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSummaryInput() {
    return this._trafficSummary;
  }

  // tunnel_log - computed: false, optional: true, required: false
  private _tunnelLog?: string; 
  public get tunnelLog() {
    return this.getStringAttribute('tunnel_log');
  }
  public set tunnelLog(value: string) {
    this._tunnelLog = value;
  }
  public resetTunnelLog() {
    this._tunnelLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelLogInput() {
    return this._tunnelLog;
  }

  // tunnel_summary - computed: false, optional: true, required: false
  private _tunnelSummary?: string; 
  public get tunnelSummary() {
    return this.getStringAttribute('tunnel_summary');
  }
  public set tunnelSummary(value: string) {
    this._tunnelSummary = value;
  }
  public resetTunnelSummary() {
    this._tunnelSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSummaryInput() {
    return this._tunnelSummary;
  }

  // url_log - computed: false, optional: true, required: false
  private _urlLog?: string; 
  public get urlLog() {
    return this.getStringAttribute('url_log');
  }
  public set urlLog(value: string) {
    this._urlLog = value;
  }
  public resetUrlLog() {
    this._urlLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlLogInput() {
    return this._urlLog;
  }

  // url_summary - computed: false, optional: true, required: false
  private _urlSummary?: string; 
  public get urlSummary() {
    return this.getStringAttribute('url_summary');
  }
  public set urlSummary(value: string) {
    this._urlSummary = value;
  }
  public resetUrlSummary() {
    this._urlSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSummaryInput() {
    return this._urlSummary;
  }

  // userid - computed: false, optional: true, required: false
  private _userid?: string; 
  public get userid() {
    return this.getStringAttribute('userid');
  }
  public set userid(value: string) {
    this._userid = value;
  }
  public resetUserid() {
    this._userid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridInput() {
    return this._userid;
  }

  // wildfire_log - computed: false, optional: true, required: false
  private _wildfireLog?: string; 
  public get wildfireLog() {
    return this.getStringAttribute('wildfire_log');
  }
  public set wildfireLog(value: string) {
    this._wildfireLog = value;
  }
  public resetWildfireLog() {
    this._wildfireLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireLogInput() {
    return this._wildfireLog;
  }
}
export interface AdminRoleRoleDeviceWebuiMonitorLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#alarm AdminRole#alarm}
  */
  readonly alarm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication AdminRole#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#configuration AdminRole#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_filtering AdminRole#data_filtering}
  */
  readonly dataFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption AdminRole#decryption}
  */
  readonly decryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect AdminRole#globalprotect}
  */
  readonly globalprotect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp AdminRole#gtp}
  */
  readonly gtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hipmatch AdminRole#hipmatch}
  */
  readonly hipmatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#iptag AdminRole#iptag}
  */
  readonly iptag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp AdminRole#sctp}
  */
  readonly sctp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#system AdminRole#system}
  */
  readonly systemAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#threat AdminRole#threat}
  */
  readonly threat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#traffic AdminRole#traffic}
  */
  readonly traffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel AdminRole#tunnel}
  */
  readonly tunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url AdminRole#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#userid AdminRole#userid}
  */
  readonly userid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#wildfire AdminRole#wildfire}
  */
  readonly wildfire?: string;
}

export function adminRoleRoleDeviceWebuiMonitorLogsToTerraform(struct?: AdminRoleRoleDeviceWebuiMonitorLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm: cdktf.stringToTerraform(struct!.alarm),
    authentication: cdktf.stringToTerraform(struct!.authentication),
    configuration: cdktf.stringToTerraform(struct!.configuration),
    data_filtering: cdktf.stringToTerraform(struct!.dataFiltering),
    decryption: cdktf.stringToTerraform(struct!.decryption),
    globalprotect: cdktf.stringToTerraform(struct!.globalprotect),
    gtp: cdktf.stringToTerraform(struct!.gtp),
    hipmatch: cdktf.stringToTerraform(struct!.hipmatch),
    iptag: cdktf.stringToTerraform(struct!.iptag),
    sctp: cdktf.stringToTerraform(struct!.sctp),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    threat: cdktf.stringToTerraform(struct!.threat),
    traffic: cdktf.stringToTerraform(struct!.traffic),
    tunnel: cdktf.stringToTerraform(struct!.tunnel),
    url: cdktf.stringToTerraform(struct!.url),
    userid: cdktf.stringToTerraform(struct!.userid),
    wildfire: cdktf.stringToTerraform(struct!.wildfire),
  }
}


export function adminRoleRoleDeviceWebuiMonitorLogsToHclTerraform(struct?: AdminRoleRoleDeviceWebuiMonitorLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm: {
      value: cdktf.stringToHclTerraform(struct!.alarm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_filtering: {
      value: cdktf.stringToHclTerraform(struct!.dataFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption: {
      value: cdktf.stringToHclTerraform(struct!.decryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect: {
      value: cdktf.stringToHclTerraform(struct!.globalprotect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp: {
      value: cdktf.stringToHclTerraform(struct!.gtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hipmatch: {
      value: cdktf.stringToHclTerraform(struct!.hipmatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptag: {
      value: cdktf.stringToHclTerraform(struct!.iptag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp: {
      value: cdktf.stringToHclTerraform(struct!.sctp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat: {
      value: cdktf.stringToHclTerraform(struct!.threat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic: {
      value: cdktf.stringToHclTerraform(struct!.traffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel: {
      value: cdktf.stringToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userid: {
      value: cdktf.stringToHclTerraform(struct!.userid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire: {
      value: cdktf.stringToHclTerraform(struct!.wildfire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiMonitorLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiMonitorLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarm = this._alarm;
    }
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._dataFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFiltering = this._dataFiltering;
    }
    if (this._decryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryption = this._decryption;
    }
    if (this._globalprotect !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotect = this._globalprotect;
    }
    if (this._gtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtp = this._gtp;
    }
    if (this._hipmatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipmatch = this._hipmatch;
    }
    if (this._iptag !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptag = this._iptag;
    }
    if (this._sctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctp = this._sctp;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._threat !== undefined) {
      hasAnyValues = true;
      internalValueResult.threat = this._threat;
    }
    if (this._traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userid !== undefined) {
      hasAnyValues = true;
      internalValueResult.userid = this._userid;
    }
    if (this._wildfire !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfire = this._wildfire;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiMonitorLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarm = undefined;
      this._authentication = undefined;
      this._configuration = undefined;
      this._dataFiltering = undefined;
      this._decryption = undefined;
      this._globalprotect = undefined;
      this._gtp = undefined;
      this._hipmatch = undefined;
      this._iptag = undefined;
      this._sctp = undefined;
      this._system = undefined;
      this._threat = undefined;
      this._traffic = undefined;
      this._tunnel = undefined;
      this._url = undefined;
      this._userid = undefined;
      this._wildfire = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarm = value.alarm;
      this._authentication = value.authentication;
      this._configuration = value.configuration;
      this._dataFiltering = value.dataFiltering;
      this._decryption = value.decryption;
      this._globalprotect = value.globalprotect;
      this._gtp = value.gtp;
      this._hipmatch = value.hipmatch;
      this._iptag = value.iptag;
      this._sctp = value.sctp;
      this._system = value.systemAttribute;
      this._threat = value.threat;
      this._traffic = value.traffic;
      this._tunnel = value.tunnel;
      this._url = value.url;
      this._userid = value.userid;
      this._wildfire = value.wildfire;
    }
  }

  // alarm - computed: false, optional: true, required: false
  private _alarm?: string; 
  public get alarm() {
    return this.getStringAttribute('alarm');
  }
  public set alarm(value: string) {
    this._alarm = value;
  }
  public resetAlarm() {
    this._alarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmInput() {
    return this._alarm;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // data_filtering - computed: false, optional: true, required: false
  private _dataFiltering?: string; 
  public get dataFiltering() {
    return this.getStringAttribute('data_filtering');
  }
  public set dataFiltering(value: string) {
    this._dataFiltering = value;
  }
  public resetDataFiltering() {
    this._dataFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringInput() {
    return this._dataFiltering;
  }

  // decryption - computed: false, optional: true, required: false
  private _decryption?: string; 
  public get decryption() {
    return this.getStringAttribute('decryption');
  }
  public set decryption(value: string) {
    this._decryption = value;
  }
  public resetDecryption() {
    this._decryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionInput() {
    return this._decryption;
  }

  // globalprotect - computed: false, optional: true, required: false
  private _globalprotect?: string; 
  public get globalprotect() {
    return this.getStringAttribute('globalprotect');
  }
  public set globalprotect(value: string) {
    this._globalprotect = value;
  }
  public resetGlobalprotect() {
    this._globalprotect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectInput() {
    return this._globalprotect;
  }

  // gtp - computed: false, optional: true, required: false
  private _gtp?: string; 
  public get gtp() {
    return this.getStringAttribute('gtp');
  }
  public set gtp(value: string) {
    this._gtp = value;
  }
  public resetGtp() {
    this._gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
  }

  // hipmatch - computed: false, optional: true, required: false
  private _hipmatch?: string; 
  public get hipmatch() {
    return this.getStringAttribute('hipmatch');
  }
  public set hipmatch(value: string) {
    this._hipmatch = value;
  }
  public resetHipmatch() {
    this._hipmatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipmatchInput() {
    return this._hipmatch;
  }

  // iptag - computed: false, optional: true, required: false
  private _iptag?: string; 
  public get iptag() {
    return this.getStringAttribute('iptag');
  }
  public set iptag(value: string) {
    this._iptag = value;
  }
  public resetIptag() {
    this._iptag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptagInput() {
    return this._iptag;
  }

  // sctp - computed: false, optional: true, required: false
  private _sctp?: string; 
  public get sctp() {
    return this.getStringAttribute('sctp');
  }
  public set sctp(value: string) {
    this._sctp = value;
  }
  public resetSctp() {
    this._sctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpInput() {
    return this._sctp;
  }

  // system - computed: false, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // threat - computed: false, optional: true, required: false
  private _threat?: string; 
  public get threat() {
    return this.getStringAttribute('threat');
  }
  public set threat(value: string) {
    this._threat = value;
  }
  public resetThreat() {
    this._threat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatInput() {
    return this._threat;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: string; 
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
  public set tunnel(value: string) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // userid - computed: false, optional: true, required: false
  private _userid?: string; 
  public get userid() {
    return this.getStringAttribute('userid');
  }
  public set userid(value: string) {
    this._userid = value;
  }
  public resetUserid() {
    this._userid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridInput() {
    return this._userid;
  }

  // wildfire - computed: false, optional: true, required: false
  private _wildfire?: string; 
  public get wildfire() {
    return this.getStringAttribute('wildfire');
  }
  public set wildfire(value: string) {
    this._wildfire = value;
  }
  public resetWildfire() {
    this._wildfire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInput() {
    return this._wildfire;
  }
}
export interface AdminRoleRoleDeviceWebuiMonitorPdfReports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#email_scheduler AdminRole#email_scheduler}
  */
  readonly emailScheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#manage_pdf_summary AdminRole#manage_pdf_summary}
  */
  readonly managePdfSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#pdf_summary_reports AdminRole#pdf_summary_reports}
  */
  readonly pdfSummaryReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#report_groups AdminRole#report_groups}
  */
  readonly reportGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#saas_application_usage_report AdminRole#saas_application_usage_report}
  */
  readonly saasApplicationUsageReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#user_activity_report AdminRole#user_activity_report}
  */
  readonly userActivityReport?: string;
}

export function adminRoleRoleDeviceWebuiMonitorPdfReportsToTerraform(struct?: AdminRoleRoleDeviceWebuiMonitorPdfReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_scheduler: cdktf.stringToTerraform(struct!.emailScheduler),
    manage_pdf_summary: cdktf.stringToTerraform(struct!.managePdfSummary),
    pdf_summary_reports: cdktf.stringToTerraform(struct!.pdfSummaryReports),
    report_groups: cdktf.stringToTerraform(struct!.reportGroups),
    saas_application_usage_report: cdktf.stringToTerraform(struct!.saasApplicationUsageReport),
    user_activity_report: cdktf.stringToTerraform(struct!.userActivityReport),
  }
}


export function adminRoleRoleDeviceWebuiMonitorPdfReportsToHclTerraform(struct?: AdminRoleRoleDeviceWebuiMonitorPdfReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_scheduler: {
      value: cdktf.stringToHclTerraform(struct!.emailScheduler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage_pdf_summary: {
      value: cdktf.stringToHclTerraform(struct!.managePdfSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_summary_reports: {
      value: cdktf.stringToHclTerraform(struct!.pdfSummaryReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_groups: {
      value: cdktf.stringToHclTerraform(struct!.reportGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saas_application_usage_report: {
      value: cdktf.stringToHclTerraform(struct!.saasApplicationUsageReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_activity_report: {
      value: cdktf.stringToHclTerraform(struct!.userActivityReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiMonitorPdfReportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiMonitorPdfReports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailScheduler !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailScheduler = this._emailScheduler;
    }
    if (this._managePdfSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.managePdfSummary = this._managePdfSummary;
    }
    if (this._pdfSummaryReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfSummaryReports = this._pdfSummaryReports;
    }
    if (this._reportGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportGroups = this._reportGroups;
    }
    if (this._saasApplicationUsageReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.saasApplicationUsageReport = this._saasApplicationUsageReport;
    }
    if (this._userActivityReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.userActivityReport = this._userActivityReport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiMonitorPdfReports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailScheduler = undefined;
      this._managePdfSummary = undefined;
      this._pdfSummaryReports = undefined;
      this._reportGroups = undefined;
      this._saasApplicationUsageReport = undefined;
      this._userActivityReport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailScheduler = value.emailScheduler;
      this._managePdfSummary = value.managePdfSummary;
      this._pdfSummaryReports = value.pdfSummaryReports;
      this._reportGroups = value.reportGroups;
      this._saasApplicationUsageReport = value.saasApplicationUsageReport;
      this._userActivityReport = value.userActivityReport;
    }
  }

  // email_scheduler - computed: false, optional: true, required: false
  private _emailScheduler?: string; 
  public get emailScheduler() {
    return this.getStringAttribute('email_scheduler');
  }
  public set emailScheduler(value: string) {
    this._emailScheduler = value;
  }
  public resetEmailScheduler() {
    this._emailScheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSchedulerInput() {
    return this._emailScheduler;
  }

  // manage_pdf_summary - computed: false, optional: true, required: false
  private _managePdfSummary?: string; 
  public get managePdfSummary() {
    return this.getStringAttribute('manage_pdf_summary');
  }
  public set managePdfSummary(value: string) {
    this._managePdfSummary = value;
  }
  public resetManagePdfSummary() {
    this._managePdfSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managePdfSummaryInput() {
    return this._managePdfSummary;
  }

  // pdf_summary_reports - computed: false, optional: true, required: false
  private _pdfSummaryReports?: string; 
  public get pdfSummaryReports() {
    return this.getStringAttribute('pdf_summary_reports');
  }
  public set pdfSummaryReports(value: string) {
    this._pdfSummaryReports = value;
  }
  public resetPdfSummaryReports() {
    this._pdfSummaryReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfSummaryReportsInput() {
    return this._pdfSummaryReports;
  }

  // report_groups - computed: false, optional: true, required: false
  private _reportGroups?: string; 
  public get reportGroups() {
    return this.getStringAttribute('report_groups');
  }
  public set reportGroups(value: string) {
    this._reportGroups = value;
  }
  public resetReportGroups() {
    this._reportGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportGroupsInput() {
    return this._reportGroups;
  }

  // saas_application_usage_report - computed: false, optional: true, required: false
  private _saasApplicationUsageReport?: string; 
  public get saasApplicationUsageReport() {
    return this.getStringAttribute('saas_application_usage_report');
  }
  public set saasApplicationUsageReport(value: string) {
    this._saasApplicationUsageReport = value;
  }
  public resetSaasApplicationUsageReport() {
    this._saasApplicationUsageReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasApplicationUsageReportInput() {
    return this._saasApplicationUsageReport;
  }

  // user_activity_report - computed: false, optional: true, required: false
  private _userActivityReport?: string; 
  public get userActivityReport() {
    return this.getStringAttribute('user_activity_report');
  }
  public set userActivityReport(value: string) {
    this._userActivityReport = value;
  }
  public resetUserActivityReport() {
    this._userActivityReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActivityReportInput() {
    return this._userActivityReport;
  }
}
export interface AdminRoleRoleDeviceWebuiMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#app_scope AdminRole#app_scope}
  */
  readonly appScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_reports AdminRole#application_reports}
  */
  readonly applicationReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#automated_correlation_engine AdminRole#automated_correlation_engine}
  */
  readonly automatedCorrelationEngine?: AdminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngine;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#block_ip_list AdminRole#block_ip_list}
  */
  readonly blockIpList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#botnet AdminRole#botnet}
  */
  readonly botnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_reports AdminRole#custom_reports}
  */
  readonly customReports?: AdminRoleRoleDeviceWebuiMonitorCustomReports;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#external_logs AdminRole#external_logs}
  */
  readonly externalLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp_reports AdminRole#gtp_reports}
  */
  readonly gtpReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#logs AdminRole#logs}
  */
  readonly logs?: AdminRoleRoleDeviceWebuiMonitorLogs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#packet_capture AdminRole#packet_capture}
  */
  readonly packetCapture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#pdf_reports AdminRole#pdf_reports}
  */
  readonly pdfReports?: AdminRoleRoleDeviceWebuiMonitorPdfReports;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp_reports AdminRole#sctp_reports}
  */
  readonly sctpReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#session_browser AdminRole#session_browser}
  */
  readonly sessionBrowser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#threat_reports AdminRole#threat_reports}
  */
  readonly threatReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#traffic_reports AdminRole#traffic_reports}
  */
  readonly trafficReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_filtering_reports AdminRole#url_filtering_reports}
  */
  readonly urlFilteringReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#view_custom_reports AdminRole#view_custom_reports}
  */
  readonly viewCustomReports?: string;
}

export function adminRoleRoleDeviceWebuiMonitorToTerraform(struct?: AdminRoleRoleDeviceWebuiMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_scope: cdktf.stringToTerraform(struct!.appScope),
    application_reports: cdktf.stringToTerraform(struct!.applicationReports),
    automated_correlation_engine: adminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngineToTerraform(struct!.automatedCorrelationEngine),
    block_ip_list: cdktf.stringToTerraform(struct!.blockIpList),
    botnet: cdktf.stringToTerraform(struct!.botnet),
    custom_reports: adminRoleRoleDeviceWebuiMonitorCustomReportsToTerraform(struct!.customReports),
    external_logs: cdktf.stringToTerraform(struct!.externalLogs),
    gtp_reports: cdktf.stringToTerraform(struct!.gtpReports),
    logs: adminRoleRoleDeviceWebuiMonitorLogsToTerraform(struct!.logs),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
    pdf_reports: adminRoleRoleDeviceWebuiMonitorPdfReportsToTerraform(struct!.pdfReports),
    sctp_reports: cdktf.stringToTerraform(struct!.sctpReports),
    session_browser: cdktf.stringToTerraform(struct!.sessionBrowser),
    threat_reports: cdktf.stringToTerraform(struct!.threatReports),
    traffic_reports: cdktf.stringToTerraform(struct!.trafficReports),
    url_filtering_reports: cdktf.stringToTerraform(struct!.urlFilteringReports),
    view_custom_reports: cdktf.stringToTerraform(struct!.viewCustomReports),
  }
}


export function adminRoleRoleDeviceWebuiMonitorToHclTerraform(struct?: AdminRoleRoleDeviceWebuiMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_scope: {
      value: cdktf.stringToHclTerraform(struct!.appScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_reports: {
      value: cdktf.stringToHclTerraform(struct!.applicationReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automated_correlation_engine: {
      value: adminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngineToHclTerraform(struct!.automatedCorrelationEngine),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngine",
    },
    block_ip_list: {
      value: cdktf.stringToHclTerraform(struct!.blockIpList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    botnet: {
      value: cdktf.stringToHclTerraform(struct!.botnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_reports: {
      value: adminRoleRoleDeviceWebuiMonitorCustomReportsToHclTerraform(struct!.customReports),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiMonitorCustomReports",
    },
    external_logs: {
      value: cdktf.stringToHclTerraform(struct!.externalLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_reports: {
      value: cdktf.stringToHclTerraform(struct!.gtpReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs: {
      value: adminRoleRoleDeviceWebuiMonitorLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiMonitorLogs",
    },
    packet_capture: {
      value: cdktf.stringToHclTerraform(struct!.packetCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_reports: {
      value: adminRoleRoleDeviceWebuiMonitorPdfReportsToHclTerraform(struct!.pdfReports),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiMonitorPdfReports",
    },
    sctp_reports: {
      value: cdktf.stringToHclTerraform(struct!.sctpReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_browser: {
      value: cdktf.stringToHclTerraform(struct!.sessionBrowser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_reports: {
      value: cdktf.stringToHclTerraform(struct!.threatReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_reports: {
      value: cdktf.stringToHclTerraform(struct!.trafficReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_filtering_reports: {
      value: cdktf.stringToHclTerraform(struct!.urlFilteringReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_custom_reports: {
      value: cdktf.stringToHclTerraform(struct!.viewCustomReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.appScope = this._appScope;
    }
    if (this._applicationReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationReports = this._applicationReports;
    }
    if (this._automatedCorrelationEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatedCorrelationEngine = this._automatedCorrelationEngine?.internalValue;
    }
    if (this._blockIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpList = this._blockIpList;
    }
    if (this._botnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.botnet = this._botnet;
    }
    if (this._customReports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customReports = this._customReports?.internalValue;
    }
    if (this._externalLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLogs = this._externalLogs;
    }
    if (this._gtpReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpReports = this._gtpReports;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._packetCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCapture = this._packetCapture;
    }
    if (this._pdfReports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfReports = this._pdfReports?.internalValue;
    }
    if (this._sctpReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpReports = this._sctpReports;
    }
    if (this._sessionBrowser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionBrowser = this._sessionBrowser;
    }
    if (this._threatReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatReports = this._threatReports;
    }
    if (this._trafficReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficReports = this._trafficReports;
    }
    if (this._urlFilteringReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFilteringReports = this._urlFilteringReports;
    }
    if (this._viewCustomReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewCustomReports = this._viewCustomReports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appScope = undefined;
      this._applicationReports = undefined;
      this._automatedCorrelationEngine.internalValue = undefined;
      this._blockIpList = undefined;
      this._botnet = undefined;
      this._customReports.internalValue = undefined;
      this._externalLogs = undefined;
      this._gtpReports = undefined;
      this._logs.internalValue = undefined;
      this._packetCapture = undefined;
      this._pdfReports.internalValue = undefined;
      this._sctpReports = undefined;
      this._sessionBrowser = undefined;
      this._threatReports = undefined;
      this._trafficReports = undefined;
      this._urlFilteringReports = undefined;
      this._viewCustomReports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appScope = value.appScope;
      this._applicationReports = value.applicationReports;
      this._automatedCorrelationEngine.internalValue = value.automatedCorrelationEngine;
      this._blockIpList = value.blockIpList;
      this._botnet = value.botnet;
      this._customReports.internalValue = value.customReports;
      this._externalLogs = value.externalLogs;
      this._gtpReports = value.gtpReports;
      this._logs.internalValue = value.logs;
      this._packetCapture = value.packetCapture;
      this._pdfReports.internalValue = value.pdfReports;
      this._sctpReports = value.sctpReports;
      this._sessionBrowser = value.sessionBrowser;
      this._threatReports = value.threatReports;
      this._trafficReports = value.trafficReports;
      this._urlFilteringReports = value.urlFilteringReports;
      this._viewCustomReports = value.viewCustomReports;
    }
  }

  // app_scope - computed: false, optional: true, required: false
  private _appScope?: string; 
  public get appScope() {
    return this.getStringAttribute('app_scope');
  }
  public set appScope(value: string) {
    this._appScope = value;
  }
  public resetAppScope() {
    this._appScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appScopeInput() {
    return this._appScope;
  }

  // application_reports - computed: false, optional: true, required: false
  private _applicationReports?: string; 
  public get applicationReports() {
    return this.getStringAttribute('application_reports');
  }
  public set applicationReports(value: string) {
    this._applicationReports = value;
  }
  public resetApplicationReports() {
    this._applicationReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationReportsInput() {
    return this._applicationReports;
  }

  // automated_correlation_engine - computed: false, optional: true, required: false
  private _automatedCorrelationEngine = new AdminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngineOutputReference(this, "automated_correlation_engine");
  public get automatedCorrelationEngine() {
    return this._automatedCorrelationEngine;
  }
  public putAutomatedCorrelationEngine(value: AdminRoleRoleDeviceWebuiMonitorAutomatedCorrelationEngine) {
    this._automatedCorrelationEngine.internalValue = value;
  }
  public resetAutomatedCorrelationEngine() {
    this._automatedCorrelationEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedCorrelationEngineInput() {
    return this._automatedCorrelationEngine.internalValue;
  }

  // block_ip_list - computed: false, optional: true, required: false
  private _blockIpList?: string; 
  public get blockIpList() {
    return this.getStringAttribute('block_ip_list');
  }
  public set blockIpList(value: string) {
    this._blockIpList = value;
  }
  public resetBlockIpList() {
    this._blockIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpListInput() {
    return this._blockIpList;
  }

  // botnet - computed: false, optional: true, required: false
  private _botnet?: string; 
  public get botnet() {
    return this.getStringAttribute('botnet');
  }
  public set botnet(value: string) {
    this._botnet = value;
  }
  public resetBotnet() {
    this._botnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botnetInput() {
    return this._botnet;
  }

  // custom_reports - computed: false, optional: true, required: false
  private _customReports = new AdminRoleRoleDeviceWebuiMonitorCustomReportsOutputReference(this, "custom_reports");
  public get customReports() {
    return this._customReports;
  }
  public putCustomReports(value: AdminRoleRoleDeviceWebuiMonitorCustomReports) {
    this._customReports.internalValue = value;
  }
  public resetCustomReports() {
    this._customReports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customReportsInput() {
    return this._customReports.internalValue;
  }

  // external_logs - computed: false, optional: true, required: false
  private _externalLogs?: string; 
  public get externalLogs() {
    return this.getStringAttribute('external_logs');
  }
  public set externalLogs(value: string) {
    this._externalLogs = value;
  }
  public resetExternalLogs() {
    this._externalLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLogsInput() {
    return this._externalLogs;
  }

  // gtp_reports - computed: false, optional: true, required: false
  private _gtpReports?: string; 
  public get gtpReports() {
    return this.getStringAttribute('gtp_reports');
  }
  public set gtpReports(value: string) {
    this._gtpReports = value;
  }
  public resetGtpReports() {
    this._gtpReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpReportsInput() {
    return this._gtpReports;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new AdminRoleRoleDeviceWebuiMonitorLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: AdminRoleRoleDeviceWebuiMonitorLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // packet_capture - computed: false, optional: true, required: false
  private _packetCapture?: string; 
  public get packetCapture() {
    return this.getStringAttribute('packet_capture');
  }
  public set packetCapture(value: string) {
    this._packetCapture = value;
  }
  public resetPacketCapture() {
    this._packetCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture;
  }

  // pdf_reports - computed: false, optional: true, required: false
  private _pdfReports = new AdminRoleRoleDeviceWebuiMonitorPdfReportsOutputReference(this, "pdf_reports");
  public get pdfReports() {
    return this._pdfReports;
  }
  public putPdfReports(value: AdminRoleRoleDeviceWebuiMonitorPdfReports) {
    this._pdfReports.internalValue = value;
  }
  public resetPdfReports() {
    this._pdfReports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfReportsInput() {
    return this._pdfReports.internalValue;
  }

  // sctp_reports - computed: false, optional: true, required: false
  private _sctpReports?: string; 
  public get sctpReports() {
    return this.getStringAttribute('sctp_reports');
  }
  public set sctpReports(value: string) {
    this._sctpReports = value;
  }
  public resetSctpReports() {
    this._sctpReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpReportsInput() {
    return this._sctpReports;
  }

  // session_browser - computed: false, optional: true, required: false
  private _sessionBrowser?: string; 
  public get sessionBrowser() {
    return this.getStringAttribute('session_browser');
  }
  public set sessionBrowser(value: string) {
    this._sessionBrowser = value;
  }
  public resetSessionBrowser() {
    this._sessionBrowser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionBrowserInput() {
    return this._sessionBrowser;
  }

  // threat_reports - computed: false, optional: true, required: false
  private _threatReports?: string; 
  public get threatReports() {
    return this.getStringAttribute('threat_reports');
  }
  public set threatReports(value: string) {
    this._threatReports = value;
  }
  public resetThreatReports() {
    this._threatReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatReportsInput() {
    return this._threatReports;
  }

  // traffic_reports - computed: false, optional: true, required: false
  private _trafficReports?: string; 
  public get trafficReports() {
    return this.getStringAttribute('traffic_reports');
  }
  public set trafficReports(value: string) {
    this._trafficReports = value;
  }
  public resetTrafficReports() {
    this._trafficReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficReportsInput() {
    return this._trafficReports;
  }

  // url_filtering_reports - computed: false, optional: true, required: false
  private _urlFilteringReports?: string; 
  public get urlFilteringReports() {
    return this.getStringAttribute('url_filtering_reports');
  }
  public set urlFilteringReports(value: string) {
    this._urlFilteringReports = value;
  }
  public resetUrlFilteringReports() {
    this._urlFilteringReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringReportsInput() {
    return this._urlFilteringReports;
  }

  // view_custom_reports - computed: false, optional: true, required: false
  private _viewCustomReports?: string; 
  public get viewCustomReports() {
    return this.getStringAttribute('view_custom_reports');
  }
  public set viewCustomReports(value: string) {
    this._viewCustomReports = value;
  }
  public resetViewCustomReports() {
    this._viewCustomReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewCustomReportsInput() {
    return this._viewCustomReports;
  }
}
export interface AdminRoleRoleDeviceWebuiNetworkGlobalProtect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#clientless_app_groups AdminRole#clientless_app_groups}
  */
  readonly clientlessAppGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#clientless_apps AdminRole#clientless_apps}
  */
  readonly clientlessApps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gateways AdminRole#gateways}
  */
  readonly gateways?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#mdm AdminRole#mdm}
  */
  readonly mdm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#portals AdminRole#portals}
  */
  readonly portals?: string;
}

export function adminRoleRoleDeviceWebuiNetworkGlobalProtectToTerraform(struct?: AdminRoleRoleDeviceWebuiNetworkGlobalProtect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clientless_app_groups: cdktf.stringToTerraform(struct!.clientlessAppGroups),
    clientless_apps: cdktf.stringToTerraform(struct!.clientlessApps),
    gateways: cdktf.stringToTerraform(struct!.gateways),
    mdm: cdktf.stringToTerraform(struct!.mdm),
    portals: cdktf.stringToTerraform(struct!.portals),
  }
}


export function adminRoleRoleDeviceWebuiNetworkGlobalProtectToHclTerraform(struct?: AdminRoleRoleDeviceWebuiNetworkGlobalProtect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clientless_app_groups: {
      value: cdktf.stringToHclTerraform(struct!.clientlessAppGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clientless_apps: {
      value: cdktf.stringToHclTerraform(struct!.clientlessApps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateways: {
      value: cdktf.stringToHclTerraform(struct!.gateways),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdm: {
      value: cdktf.stringToHclTerraform(struct!.mdm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portals: {
      value: cdktf.stringToHclTerraform(struct!.portals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiNetworkGlobalProtectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiNetworkGlobalProtect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientlessAppGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientlessAppGroups = this._clientlessAppGroups;
    }
    if (this._clientlessApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientlessApps = this._clientlessApps;
    }
    if (this._gateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways;
    }
    if (this._mdm !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdm = this._mdm;
    }
    if (this._portals !== undefined) {
      hasAnyValues = true;
      internalValueResult.portals = this._portals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiNetworkGlobalProtect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientlessAppGroups = undefined;
      this._clientlessApps = undefined;
      this._gateways = undefined;
      this._mdm = undefined;
      this._portals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientlessAppGroups = value.clientlessAppGroups;
      this._clientlessApps = value.clientlessApps;
      this._gateways = value.gateways;
      this._mdm = value.mdm;
      this._portals = value.portals;
    }
  }

  // clientless_app_groups - computed: false, optional: true, required: false
  private _clientlessAppGroups?: string; 
  public get clientlessAppGroups() {
    return this.getStringAttribute('clientless_app_groups');
  }
  public set clientlessAppGroups(value: string) {
    this._clientlessAppGroups = value;
  }
  public resetClientlessAppGroups() {
    this._clientlessAppGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlessAppGroupsInput() {
    return this._clientlessAppGroups;
  }

  // clientless_apps - computed: false, optional: true, required: false
  private _clientlessApps?: string; 
  public get clientlessApps() {
    return this.getStringAttribute('clientless_apps');
  }
  public set clientlessApps(value: string) {
    this._clientlessApps = value;
  }
  public resetClientlessApps() {
    this._clientlessApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlessAppsInput() {
    return this._clientlessApps;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string; 
  public get gateways() {
    return this.getStringAttribute('gateways');
  }
  public set gateways(value: string) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
  }

  // mdm - computed: false, optional: true, required: false
  private _mdm?: string; 
  public get mdm() {
    return this.getStringAttribute('mdm');
  }
  public set mdm(value: string) {
    this._mdm = value;
  }
  public resetMdm() {
    this._mdm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmInput() {
    return this._mdm;
  }

  // portals - computed: false, optional: true, required: false
  private _portals?: string; 
  public get portals() {
    return this.getStringAttribute('portals');
  }
  public set portals(value: string) {
    this._portals = value;
  }
  public resetPortals() {
    this._portals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalsInput() {
    return this._portals;
  }
}
export interface AdminRoleRoleDeviceWebuiNetworkNetworkProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#bfd_profile AdminRole#bfd_profile}
  */
  readonly bfdProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gp_app_ipsec_crypto AdminRole#gp_app_ipsec_crypto}
  */
  readonly gpAppIpsecCrypto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ike_crypto AdminRole#ike_crypto}
  */
  readonly ikeCrypto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ike_gateways AdminRole#ike_gateways}
  */
  readonly ikeGateways?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#interface_mgmt AdminRole#interface_mgmt}
  */
  readonly interfaceMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ipsec_crypto AdminRole#ipsec_crypto}
  */
  readonly ipsecCrypto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#lldp_profile AdminRole#lldp_profile}
  */
  readonly lldpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#qos_profile AdminRole#qos_profile}
  */
  readonly qosProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_monitor AdminRole#tunnel_monitor}
  */
  readonly tunnelMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#zone_protection AdminRole#zone_protection}
  */
  readonly zoneProtection?: string;
}

export function adminRoleRoleDeviceWebuiNetworkNetworkProfilesToTerraform(struct?: AdminRoleRoleDeviceWebuiNetworkNetworkProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd_profile: cdktf.stringToTerraform(struct!.bfdProfile),
    gp_app_ipsec_crypto: cdktf.stringToTerraform(struct!.gpAppIpsecCrypto),
    ike_crypto: cdktf.stringToTerraform(struct!.ikeCrypto),
    ike_gateways: cdktf.stringToTerraform(struct!.ikeGateways),
    interface_mgmt: cdktf.stringToTerraform(struct!.interfaceMgmt),
    ipsec_crypto: cdktf.stringToTerraform(struct!.ipsecCrypto),
    lldp_profile: cdktf.stringToTerraform(struct!.lldpProfile),
    qos_profile: cdktf.stringToTerraform(struct!.qosProfile),
    tunnel_monitor: cdktf.stringToTerraform(struct!.tunnelMonitor),
    zone_protection: cdktf.stringToTerraform(struct!.zoneProtection),
  }
}


export function adminRoleRoleDeviceWebuiNetworkNetworkProfilesToHclTerraform(struct?: AdminRoleRoleDeviceWebuiNetworkNetworkProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd_profile: {
      value: cdktf.stringToHclTerraform(struct!.bfdProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gp_app_ipsec_crypto: {
      value: cdktf.stringToHclTerraform(struct!.gpAppIpsecCrypto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_crypto: {
      value: cdktf.stringToHclTerraform(struct!.ikeCrypto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_gateways: {
      value: cdktf.stringToHclTerraform(struct!.ikeGateways),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_mgmt: {
      value: cdktf.stringToHclTerraform(struct!.interfaceMgmt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_crypto: {
      value: cdktf.stringToHclTerraform(struct!.ipsecCrypto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_profile: {
      value: cdktf.stringToHclTerraform(struct!.lldpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_profile: {
      value: cdktf.stringToHclTerraform(struct!.qosProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_monitor: {
      value: cdktf.stringToHclTerraform(struct!.tunnelMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_protection: {
      value: cdktf.stringToHclTerraform(struct!.zoneProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiNetworkNetworkProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiNetworkNetworkProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfdProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdProfile = this._bfdProfile;
    }
    if (this._gpAppIpsecCrypto !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpAppIpsecCrypto = this._gpAppIpsecCrypto;
    }
    if (this._ikeCrypto !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeCrypto = this._ikeCrypto;
    }
    if (this._ikeGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGateways = this._ikeGateways;
    }
    if (this._interfaceMgmt !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceMgmt = this._interfaceMgmt;
    }
    if (this._ipsecCrypto !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecCrypto = this._ipsecCrypto;
    }
    if (this._lldpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpProfile = this._lldpProfile;
    }
    if (this._qosProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosProfile = this._qosProfile;
    }
    if (this._tunnelMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMonitor = this._tunnelMonitor;
    }
    if (this._zoneProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneProtection = this._zoneProtection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiNetworkNetworkProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfdProfile = undefined;
      this._gpAppIpsecCrypto = undefined;
      this._ikeCrypto = undefined;
      this._ikeGateways = undefined;
      this._interfaceMgmt = undefined;
      this._ipsecCrypto = undefined;
      this._lldpProfile = undefined;
      this._qosProfile = undefined;
      this._tunnelMonitor = undefined;
      this._zoneProtection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfdProfile = value.bfdProfile;
      this._gpAppIpsecCrypto = value.gpAppIpsecCrypto;
      this._ikeCrypto = value.ikeCrypto;
      this._ikeGateways = value.ikeGateways;
      this._interfaceMgmt = value.interfaceMgmt;
      this._ipsecCrypto = value.ipsecCrypto;
      this._lldpProfile = value.lldpProfile;
      this._qosProfile = value.qosProfile;
      this._tunnelMonitor = value.tunnelMonitor;
      this._zoneProtection = value.zoneProtection;
    }
  }

  // bfd_profile - computed: false, optional: true, required: false
  private _bfdProfile?: string; 
  public get bfdProfile() {
    return this.getStringAttribute('bfd_profile');
  }
  public set bfdProfile(value: string) {
    this._bfdProfile = value;
  }
  public resetBfdProfile() {
    this._bfdProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdProfileInput() {
    return this._bfdProfile;
  }

  // gp_app_ipsec_crypto - computed: false, optional: true, required: false
  private _gpAppIpsecCrypto?: string; 
  public get gpAppIpsecCrypto() {
    return this.getStringAttribute('gp_app_ipsec_crypto');
  }
  public set gpAppIpsecCrypto(value: string) {
    this._gpAppIpsecCrypto = value;
  }
  public resetGpAppIpsecCrypto() {
    this._gpAppIpsecCrypto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpAppIpsecCryptoInput() {
    return this._gpAppIpsecCrypto;
  }

  // ike_crypto - computed: false, optional: true, required: false
  private _ikeCrypto?: string; 
  public get ikeCrypto() {
    return this.getStringAttribute('ike_crypto');
  }
  public set ikeCrypto(value: string) {
    this._ikeCrypto = value;
  }
  public resetIkeCrypto() {
    this._ikeCrypto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeCryptoInput() {
    return this._ikeCrypto;
  }

  // ike_gateways - computed: false, optional: true, required: false
  private _ikeGateways?: string; 
  public get ikeGateways() {
    return this.getStringAttribute('ike_gateways');
  }
  public set ikeGateways(value: string) {
    this._ikeGateways = value;
  }
  public resetIkeGateways() {
    this._ikeGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGatewaysInput() {
    return this._ikeGateways;
  }

  // interface_mgmt - computed: false, optional: true, required: false
  private _interfaceMgmt?: string; 
  public get interfaceMgmt() {
    return this.getStringAttribute('interface_mgmt');
  }
  public set interfaceMgmt(value: string) {
    this._interfaceMgmt = value;
  }
  public resetInterfaceMgmt() {
    this._interfaceMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceMgmtInput() {
    return this._interfaceMgmt;
  }

  // ipsec_crypto - computed: false, optional: true, required: false
  private _ipsecCrypto?: string; 
  public get ipsecCrypto() {
    return this.getStringAttribute('ipsec_crypto');
  }
  public set ipsecCrypto(value: string) {
    this._ipsecCrypto = value;
  }
  public resetIpsecCrypto() {
    this._ipsecCrypto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCryptoInput() {
    return this._ipsecCrypto;
  }

  // lldp_profile - computed: false, optional: true, required: false
  private _lldpProfile?: string; 
  public get lldpProfile() {
    return this.getStringAttribute('lldp_profile');
  }
  public set lldpProfile(value: string) {
    this._lldpProfile = value;
  }
  public resetLldpProfile() {
    this._lldpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpProfileInput() {
    return this._lldpProfile;
  }

  // qos_profile - computed: false, optional: true, required: false
  private _qosProfile?: string; 
  public get qosProfile() {
    return this.getStringAttribute('qos_profile');
  }
  public set qosProfile(value: string) {
    this._qosProfile = value;
  }
  public resetQosProfile() {
    this._qosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfileInput() {
    return this._qosProfile;
  }

  // tunnel_monitor - computed: false, optional: true, required: false
  private _tunnelMonitor?: string; 
  public get tunnelMonitor() {
    return this.getStringAttribute('tunnel_monitor');
  }
  public set tunnelMonitor(value: string) {
    this._tunnelMonitor = value;
  }
  public resetTunnelMonitor() {
    this._tunnelMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMonitorInput() {
    return this._tunnelMonitor;
  }

  // zone_protection - computed: false, optional: true, required: false
  private _zoneProtection?: string; 
  public get zoneProtection() {
    return this.getStringAttribute('zone_protection');
  }
  public set zoneProtection(value: string) {
    this._zoneProtection = value;
  }
  public resetZoneProtection() {
    this._zoneProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneProtectionInput() {
    return this._zoneProtection;
  }
}
export interface AdminRoleRoleDeviceWebuiNetworkRoutingRoutingProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#bfd AdminRole#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#bgp AdminRole#bgp}
  */
  readonly bgp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#filters AdminRole#filters}
  */
  readonly filters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#multicast AdminRole#multicast}
  */
  readonly multicast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ospf AdminRole#ospf}
  */
  readonly ospf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ospfv3 AdminRole#ospfv3}
  */
  readonly ospfv3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ripv2 AdminRole#ripv2}
  */
  readonly ripv2?: string;
}

export function adminRoleRoleDeviceWebuiNetworkRoutingRoutingProfilesToTerraform(struct?: AdminRoleRoleDeviceWebuiNetworkRoutingRoutingProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.stringToTerraform(struct!.bfd),
    bgp: cdktf.stringToTerraform(struct!.bgp),
    filters: cdktf.stringToTerraform(struct!.filters),
    multicast: cdktf.stringToTerraform(struct!.multicast),
    ospf: cdktf.stringToTerraform(struct!.ospf),
    ospfv3: cdktf.stringToTerraform(struct!.ospfv3),
    ripv2: cdktf.stringToTerraform(struct!.ripv2),
  }
}


export function adminRoleRoleDeviceWebuiNetworkRoutingRoutingProfilesToHclTerraform(struct?: AdminRoleRoleDeviceWebuiNetworkRoutingRoutingProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.stringToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp: {
      value: cdktf.stringToHclTerraform(struct!.bgp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.stringToHclTerraform(struct!.filters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicast: {
      value: cdktf.stringToHclTerraform(struct!.multicast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf: {
      value: cdktf.stringToHclTerraform(struct!.ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospfv3: {
      value: cdktf.stringToHclTerraform(struct!.ospfv3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ripv2: {
      value: cdktf.stringToHclTerraform(struct!.ripv2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiNetworkRoutingRoutingProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiNetworkRoutingRoutingProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._bgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._multicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast;
    }
    if (this._ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf;
    }
    if (this._ospfv3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3 = this._ospfv3;
    }
    if (this._ripv2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ripv2 = this._ripv2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiNetworkRoutingRoutingProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfd = undefined;
      this._bgp = undefined;
      this._filters = undefined;
      this._multicast = undefined;
      this._ospf = undefined;
      this._ospfv3 = undefined;
      this._ripv2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfd = value.bfd;
      this._bgp = value.bgp;
      this._filters = value.filters;
      this._multicast = value.multicast;
      this._ospf = value.ospf;
      this._ospfv3 = value.ospfv3;
      this._ripv2 = value.ripv2;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp?: string; 
  public get bgp() {
    return this.getStringAttribute('bgp');
  }
  public set bgp(value: string) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string; 
  public get filters() {
    return this.getStringAttribute('filters');
  }
  public set filters(value: string) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast?: string; 
  public get multicast() {
    return this.getStringAttribute('multicast');
  }
  public set multicast(value: string) {
    this._multicast = value;
  }
  public resetMulticast() {
    this._multicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf?: string; 
  public get ospf() {
    return this.getStringAttribute('ospf');
  }
  public set ospf(value: string) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
  }

  // ospfv3 - computed: false, optional: true, required: false
  private _ospfv3?: string; 
  public get ospfv3() {
    return this.getStringAttribute('ospfv3');
  }
  public set ospfv3(value: string) {
    this._ospfv3 = value;
  }
  public resetOspfv3() {
    this._ospfv3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3;
  }

  // ripv2 - computed: false, optional: true, required: false
  private _ripv2?: string; 
  public get ripv2() {
    return this.getStringAttribute('ripv2');
  }
  public set ripv2(value: string) {
    this._ripv2 = value;
  }
  public resetRipv2() {
    this._ripv2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripv2Input() {
    return this._ripv2;
  }
}
export interface AdminRoleRoleDeviceWebuiNetworkRouting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#logical_routers AdminRole#logical_routers}
  */
  readonly logicalRouters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#routing_profiles AdminRole#routing_profiles}
  */
  readonly routingProfiles?: AdminRoleRoleDeviceWebuiNetworkRoutingRoutingProfiles;
}

export function adminRoleRoleDeviceWebuiNetworkRoutingToTerraform(struct?: AdminRoleRoleDeviceWebuiNetworkRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_routers: cdktf.stringToTerraform(struct!.logicalRouters),
    routing_profiles: adminRoleRoleDeviceWebuiNetworkRoutingRoutingProfilesToTerraform(struct!.routingProfiles),
  }
}


export function adminRoleRoleDeviceWebuiNetworkRoutingToHclTerraform(struct?: AdminRoleRoleDeviceWebuiNetworkRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logical_routers: {
      value: cdktf.stringToHclTerraform(struct!.logicalRouters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_profiles: {
      value: adminRoleRoleDeviceWebuiNetworkRoutingRoutingProfilesToHclTerraform(struct!.routingProfiles),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiNetworkRoutingRoutingProfiles",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiNetworkRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiNetworkRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalRouters !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalRouters = this._logicalRouters;
    }
    if (this._routingProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingProfiles = this._routingProfiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiNetworkRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logicalRouters = undefined;
      this._routingProfiles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logicalRouters = value.logicalRouters;
      this._routingProfiles.internalValue = value.routingProfiles;
    }
  }

  // logical_routers - computed: false, optional: true, required: false
  private _logicalRouters?: string; 
  public get logicalRouters() {
    return this.getStringAttribute('logical_routers');
  }
  public set logicalRouters(value: string) {
    this._logicalRouters = value;
  }
  public resetLogicalRouters() {
    this._logicalRouters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalRoutersInput() {
    return this._logicalRouters;
  }

  // routing_profiles - computed: false, optional: true, required: false
  private _routingProfiles = new AdminRoleRoleDeviceWebuiNetworkRoutingRoutingProfilesOutputReference(this, "routing_profiles");
  public get routingProfiles() {
    return this._routingProfiles;
  }
  public putRoutingProfiles(value: AdminRoleRoleDeviceWebuiNetworkRoutingRoutingProfiles) {
    this._routingProfiles.internalValue = value;
  }
  public resetRoutingProfiles() {
    this._routingProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingProfilesInput() {
    return this._routingProfiles.internalValue;
  }
}
export interface AdminRoleRoleDeviceWebuiNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dhcp AdminRole#dhcp}
  */
  readonly dhcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dns_proxy AdminRole#dns_proxy}
  */
  readonly dnsProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#global_protect AdminRole#global_protect}
  */
  readonly globalProtect?: AdminRoleRoleDeviceWebuiNetworkGlobalProtect;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gre_tunnels AdminRole#gre_tunnels}
  */
  readonly greTunnels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#interfaces AdminRole#interfaces}
  */
  readonly interfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ipsec_tunnels AdminRole#ipsec_tunnels}
  */
  readonly ipsecTunnels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#lldp AdminRole#lldp}
  */
  readonly lldp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#network_profiles AdminRole#network_profiles}
  */
  readonly networkProfiles?: AdminRoleRoleDeviceWebuiNetworkNetworkProfiles;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#qos AdminRole#qos}
  */
  readonly qos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#routing AdminRole#routing}
  */
  readonly routing?: AdminRoleRoleDeviceWebuiNetworkRouting;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_interface_profile AdminRole#sdwan_interface_profile}
  */
  readonly sdwanInterfaceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#secure_web_gateway AdminRole#secure_web_gateway}
  */
  readonly secureWebGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#virtual_routers AdminRole#virtual_routers}
  */
  readonly virtualRouters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#virtual_wires AdminRole#virtual_wires}
  */
  readonly virtualWires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vlans AdminRole#vlans}
  */
  readonly vlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#zones AdminRole#zones}
  */
  readonly zones?: string;
}

export function adminRoleRoleDeviceWebuiNetworkToTerraform(struct?: AdminRoleRoleDeviceWebuiNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.stringToTerraform(struct!.dhcp),
    dns_proxy: cdktf.stringToTerraform(struct!.dnsProxy),
    global_protect: adminRoleRoleDeviceWebuiNetworkGlobalProtectToTerraform(struct!.globalProtect),
    gre_tunnels: cdktf.stringToTerraform(struct!.greTunnels),
    interfaces: cdktf.stringToTerraform(struct!.interfaces),
    ipsec_tunnels: cdktf.stringToTerraform(struct!.ipsecTunnels),
    lldp: cdktf.stringToTerraform(struct!.lldp),
    network_profiles: adminRoleRoleDeviceWebuiNetworkNetworkProfilesToTerraform(struct!.networkProfiles),
    qos: cdktf.stringToTerraform(struct!.qos),
    routing: adminRoleRoleDeviceWebuiNetworkRoutingToTerraform(struct!.routing),
    sdwan_interface_profile: cdktf.stringToTerraform(struct!.sdwanInterfaceProfile),
    secure_web_gateway: cdktf.stringToTerraform(struct!.secureWebGateway),
    virtual_routers: cdktf.stringToTerraform(struct!.virtualRouters),
    virtual_wires: cdktf.stringToTerraform(struct!.virtualWires),
    vlans: cdktf.stringToTerraform(struct!.vlans),
    zones: cdktf.stringToTerraform(struct!.zones),
  }
}


export function adminRoleRoleDeviceWebuiNetworkToHclTerraform(struct?: AdminRoleRoleDeviceWebuiNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.stringToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_proxy: {
      value: cdktf.stringToHclTerraform(struct!.dnsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_protect: {
      value: adminRoleRoleDeviceWebuiNetworkGlobalProtectToHclTerraform(struct!.globalProtect),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiNetworkGlobalProtect",
    },
    gre_tunnels: {
      value: cdktf.stringToHclTerraform(struct!.greTunnels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.stringToHclTerraform(struct!.interfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_tunnels: {
      value: cdktf.stringToHclTerraform(struct!.ipsecTunnels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp: {
      value: cdktf.stringToHclTerraform(struct!.lldp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_profiles: {
      value: adminRoleRoleDeviceWebuiNetworkNetworkProfilesToHclTerraform(struct!.networkProfiles),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiNetworkNetworkProfiles",
    },
    qos: {
      value: cdktf.stringToHclTerraform(struct!.qos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing: {
      value: adminRoleRoleDeviceWebuiNetworkRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiNetworkRouting",
    },
    sdwan_interface_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_web_gateway: {
      value: cdktf.stringToHclTerraform(struct!.secureWebGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_routers: {
      value: cdktf.stringToHclTerraform(struct!.virtualRouters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_wires: {
      value: cdktf.stringToHclTerraform(struct!.virtualWires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlans: {
      value: cdktf.stringToHclTerraform(struct!.vlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.stringToHclTerraform(struct!.zones),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._dnsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsProxy = this._dnsProxy;
    }
    if (this._globalProtect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalProtect = this._globalProtect?.internalValue;
    }
    if (this._greTunnels !== undefined) {
      hasAnyValues = true;
      internalValueResult.greTunnels = this._greTunnels;
    }
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    if (this._ipsecTunnels !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecTunnels = this._ipsecTunnels;
    }
    if (this._lldp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldp = this._lldp;
    }
    if (this._networkProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProfiles = this._networkProfiles?.internalValue;
    }
    if (this._qos !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos;
    }
    if (this._routing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing?.internalValue;
    }
    if (this._sdwanInterfaceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaceProfile = this._sdwanInterfaceProfile;
    }
    if (this._secureWebGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureWebGateway = this._secureWebGateway;
    }
    if (this._virtualRouters !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouters = this._virtualRouters;
    }
    if (this._virtualWires !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualWires = this._virtualWires;
    }
    if (this._vlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp = undefined;
      this._dnsProxy = undefined;
      this._globalProtect.internalValue = undefined;
      this._greTunnels = undefined;
      this._interfaces = undefined;
      this._ipsecTunnels = undefined;
      this._lldp = undefined;
      this._networkProfiles.internalValue = undefined;
      this._qos = undefined;
      this._routing.internalValue = undefined;
      this._sdwanInterfaceProfile = undefined;
      this._secureWebGateway = undefined;
      this._virtualRouters = undefined;
      this._virtualWires = undefined;
      this._vlans = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp = value.dhcp;
      this._dnsProxy = value.dnsProxy;
      this._globalProtect.internalValue = value.globalProtect;
      this._greTunnels = value.greTunnels;
      this._interfaces = value.interfaces;
      this._ipsecTunnels = value.ipsecTunnels;
      this._lldp = value.lldp;
      this._networkProfiles.internalValue = value.networkProfiles;
      this._qos = value.qos;
      this._routing.internalValue = value.routing;
      this._sdwanInterfaceProfile = value.sdwanInterfaceProfile;
      this._secureWebGateway = value.secureWebGateway;
      this._virtualRouters = value.virtualRouters;
      this._virtualWires = value.virtualWires;
      this._vlans = value.vlans;
      this._zones = value.zones;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: string; 
  public get dhcp() {
    return this.getStringAttribute('dhcp');
  }
  public set dhcp(value: string) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dns_proxy - computed: false, optional: true, required: false
  private _dnsProxy?: string; 
  public get dnsProxy() {
    return this.getStringAttribute('dns_proxy');
  }
  public set dnsProxy(value: string) {
    this._dnsProxy = value;
  }
  public resetDnsProxy() {
    this._dnsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProxyInput() {
    return this._dnsProxy;
  }

  // global_protect - computed: false, optional: true, required: false
  private _globalProtect = new AdminRoleRoleDeviceWebuiNetworkGlobalProtectOutputReference(this, "global_protect");
  public get globalProtect() {
    return this._globalProtect;
  }
  public putGlobalProtect(value: AdminRoleRoleDeviceWebuiNetworkGlobalProtect) {
    this._globalProtect.internalValue = value;
  }
  public resetGlobalProtect() {
    this._globalProtect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectInput() {
    return this._globalProtect.internalValue;
  }

  // gre_tunnels - computed: false, optional: true, required: false
  private _greTunnels?: string; 
  public get greTunnels() {
    return this.getStringAttribute('gre_tunnels');
  }
  public set greTunnels(value: string) {
    this._greTunnels = value;
  }
  public resetGreTunnels() {
    this._greTunnels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greTunnelsInput() {
    return this._greTunnels;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string; 
  public get interfaces() {
    return this.getStringAttribute('interfaces');
  }
  public set interfaces(value: string) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // ipsec_tunnels - computed: false, optional: true, required: false
  private _ipsecTunnels?: string; 
  public get ipsecTunnels() {
    return this.getStringAttribute('ipsec_tunnels');
  }
  public set ipsecTunnels(value: string) {
    this._ipsecTunnels = value;
  }
  public resetIpsecTunnels() {
    this._ipsecTunnels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelsInput() {
    return this._ipsecTunnels;
  }

  // lldp - computed: false, optional: true, required: false
  private _lldp?: string; 
  public get lldp() {
    return this.getStringAttribute('lldp');
  }
  public set lldp(value: string) {
    this._lldp = value;
  }
  public resetLldp() {
    this._lldp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpInput() {
    return this._lldp;
  }

  // network_profiles - computed: false, optional: true, required: false
  private _networkProfiles = new AdminRoleRoleDeviceWebuiNetworkNetworkProfilesOutputReference(this, "network_profiles");
  public get networkProfiles() {
    return this._networkProfiles;
  }
  public putNetworkProfiles(value: AdminRoleRoleDeviceWebuiNetworkNetworkProfiles) {
    this._networkProfiles.internalValue = value;
  }
  public resetNetworkProfiles() {
    this._networkProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfilesInput() {
    return this._networkProfiles.internalValue;
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: string; 
  public get qos() {
    return this.getStringAttribute('qos');
  }
  public set qos(value: string) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new AdminRoleRoleDeviceWebuiNetworkRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: AdminRoleRoleDeviceWebuiNetworkRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // sdwan_interface_profile - computed: false, optional: true, required: false
  private _sdwanInterfaceProfile?: string; 
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }
  public set sdwanInterfaceProfile(value: string) {
    this._sdwanInterfaceProfile = value;
  }
  public resetSdwanInterfaceProfile() {
    this._sdwanInterfaceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfaceProfileInput() {
    return this._sdwanInterfaceProfile;
  }

  // secure_web_gateway - computed: false, optional: true, required: false
  private _secureWebGateway?: string; 
  public get secureWebGateway() {
    return this.getStringAttribute('secure_web_gateway');
  }
  public set secureWebGateway(value: string) {
    this._secureWebGateway = value;
  }
  public resetSecureWebGateway() {
    this._secureWebGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureWebGatewayInput() {
    return this._secureWebGateway;
  }

  // virtual_routers - computed: false, optional: true, required: false
  private _virtualRouters?: string; 
  public get virtualRouters() {
    return this.getStringAttribute('virtual_routers');
  }
  public set virtualRouters(value: string) {
    this._virtualRouters = value;
  }
  public resetVirtualRouters() {
    this._virtualRouters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRoutersInput() {
    return this._virtualRouters;
  }

  // virtual_wires - computed: false, optional: true, required: false
  private _virtualWires?: string; 
  public get virtualWires() {
    return this.getStringAttribute('virtual_wires');
  }
  public set virtualWires(value: string) {
    this._virtualWires = value;
  }
  public resetVirtualWires() {
    this._virtualWires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualWiresInput() {
    return this._virtualWires;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans?: string; 
  public get vlans() {
    return this.getStringAttribute('vlans');
  }
  public set vlans(value: string) {
    this._vlans = value;
  }
  public resetVlans() {
    this._vlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string; 
  public get zones() {
    return this.getStringAttribute('zones');
  }
  public set zones(value: string) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface AdminRoleRoleDeviceWebuiObjectsCustomObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_patterns AdminRole#data_patterns}
  */
  readonly dataPatterns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#spyware AdminRole#spyware}
  */
  readonly spyware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_category AdminRole#url_category}
  */
  readonly urlCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vulnerability AdminRole#vulnerability}
  */
  readonly vulnerability?: string;
}

export function adminRoleRoleDeviceWebuiObjectsCustomObjectsToTerraform(struct?: AdminRoleRoleDeviceWebuiObjectsCustomObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_patterns: cdktf.stringToTerraform(struct!.dataPatterns),
    spyware: cdktf.stringToTerraform(struct!.spyware),
    url_category: cdktf.stringToTerraform(struct!.urlCategory),
    vulnerability: cdktf.stringToTerraform(struct!.vulnerability),
  }
}


export function adminRoleRoleDeviceWebuiObjectsCustomObjectsToHclTerraform(struct?: AdminRoleRoleDeviceWebuiObjectsCustomObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_patterns: {
      value: cdktf.stringToHclTerraform(struct!.dataPatterns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spyware: {
      value: cdktf.stringToHclTerraform(struct!.spyware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_category: {
      value: cdktf.stringToHclTerraform(struct!.urlCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerability: {
      value: cdktf.stringToHclTerraform(struct!.vulnerability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiObjectsCustomObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiObjectsCustomObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPatterns = this._dataPatterns;
    }
    if (this._spyware !== undefined) {
      hasAnyValues = true;
      internalValueResult.spyware = this._spyware;
    }
    if (this._urlCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlCategory = this._urlCategory;
    }
    if (this._vulnerability !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerability = this._vulnerability;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiObjectsCustomObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPatterns = undefined;
      this._spyware = undefined;
      this._urlCategory = undefined;
      this._vulnerability = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPatterns = value.dataPatterns;
      this._spyware = value.spyware;
      this._urlCategory = value.urlCategory;
      this._vulnerability = value.vulnerability;
    }
  }

  // data_patterns - computed: false, optional: true, required: false
  private _dataPatterns?: string; 
  public get dataPatterns() {
    return this.getStringAttribute('data_patterns');
  }
  public set dataPatterns(value: string) {
    this._dataPatterns = value;
  }
  public resetDataPatterns() {
    this._dataPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPatternsInput() {
    return this._dataPatterns;
  }

  // spyware - computed: false, optional: true, required: false
  private _spyware?: string; 
  public get spyware() {
    return this.getStringAttribute('spyware');
  }
  public set spyware(value: string) {
    this._spyware = value;
  }
  public resetSpyware() {
    this._spyware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spywareInput() {
    return this._spyware;
  }

  // url_category - computed: false, optional: true, required: false
  private _urlCategory?: string; 
  public get urlCategory() {
    return this.getStringAttribute('url_category');
  }
  public set urlCategory(value: string) {
    this._urlCategory = value;
  }
  public resetUrlCategory() {
    this._urlCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoryInput() {
    return this._urlCategory;
  }

  // vulnerability - computed: false, optional: true, required: false
  private _vulnerability?: string; 
  public get vulnerability() {
    return this.getStringAttribute('vulnerability');
  }
  public set vulnerability(value: string) {
    this._vulnerability = value;
  }
  public resetVulnerability() {
    this._vulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityInput() {
    return this._vulnerability;
  }
}
export interface AdminRoleRoleDeviceWebuiObjectsDecryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption_profile AdminRole#decryption_profile}
  */
  readonly decryptionProfile?: string;
}

export function adminRoleRoleDeviceWebuiObjectsDecryptionToTerraform(struct?: AdminRoleRoleDeviceWebuiObjectsDecryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_profile: cdktf.stringToTerraform(struct!.decryptionProfile),
  }
}


export function adminRoleRoleDeviceWebuiObjectsDecryptionToHclTerraform(struct?: AdminRoleRoleDeviceWebuiObjectsDecryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_profile: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiObjectsDecryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiObjectsDecryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProfile = this._decryptionProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiObjectsDecryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decryptionProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decryptionProfile = value.decryptionProfile;
    }
  }

  // decryption_profile - computed: false, optional: true, required: false
  private _decryptionProfile?: string; 
  public get decryptionProfile() {
    return this.getStringAttribute('decryption_profile');
  }
  public set decryptionProfile(value: string) {
    this._decryptionProfile = value;
  }
  public resetDecryptionProfile() {
    this._decryptionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProfileInput() {
    return this._decryptionProfile;
  }
}
export interface AdminRoleRoleDeviceWebuiObjectsGlobalProtect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hip_objects AdminRole#hip_objects}
  */
  readonly hipObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hip_profiles AdminRole#hip_profiles}
  */
  readonly hipProfiles?: string;
}

export function adminRoleRoleDeviceWebuiObjectsGlobalProtectToTerraform(struct?: AdminRoleRoleDeviceWebuiObjectsGlobalProtect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hip_objects: cdktf.stringToTerraform(struct!.hipObjects),
    hip_profiles: cdktf.stringToTerraform(struct!.hipProfiles),
  }
}


export function adminRoleRoleDeviceWebuiObjectsGlobalProtectToHclTerraform(struct?: AdminRoleRoleDeviceWebuiObjectsGlobalProtect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hip_objects: {
      value: cdktf.stringToHclTerraform(struct!.hipObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hip_profiles: {
      value: cdktf.stringToHclTerraform(struct!.hipProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiObjectsGlobalProtectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiObjectsGlobalProtect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hipObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipObjects = this._hipObjects;
    }
    if (this._hipProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipProfiles = this._hipProfiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiObjectsGlobalProtect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hipObjects = undefined;
      this._hipProfiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hipObjects = value.hipObjects;
      this._hipProfiles = value.hipProfiles;
    }
  }

  // hip_objects - computed: false, optional: true, required: false
  private _hipObjects?: string; 
  public get hipObjects() {
    return this.getStringAttribute('hip_objects');
  }
  public set hipObjects(value: string) {
    this._hipObjects = value;
  }
  public resetHipObjects() {
    this._hipObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipObjectsInput() {
    return this._hipObjects;
  }

  // hip_profiles - computed: false, optional: true, required: false
  private _hipProfiles?: string; 
  public get hipProfiles() {
    return this.getStringAttribute('hip_profiles');
  }
  public set hipProfiles(value: string) {
    this._hipProfiles = value;
  }
  public resetHipProfiles() {
    this._hipProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipProfilesInput() {
    return this._hipProfiles;
  }
}
export interface AdminRoleRoleDeviceWebuiObjectsSdwan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_dist_profile AdminRole#sdwan_dist_profile}
  */
  readonly sdwanDistProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_error_correction_profile AdminRole#sdwan_error_correction_profile}
  */
  readonly sdwanErrorCorrectionProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_profile AdminRole#sdwan_profile}
  */
  readonly sdwanProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_saas_quality_profile AdminRole#sdwan_saas_quality_profile}
  */
  readonly sdwanSaasQualityProfile?: string;
}

export function adminRoleRoleDeviceWebuiObjectsSdwanToTerraform(struct?: AdminRoleRoleDeviceWebuiObjectsSdwan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sdwan_dist_profile: cdktf.stringToTerraform(struct!.sdwanDistProfile),
    sdwan_error_correction_profile: cdktf.stringToTerraform(struct!.sdwanErrorCorrectionProfile),
    sdwan_profile: cdktf.stringToTerraform(struct!.sdwanProfile),
    sdwan_saas_quality_profile: cdktf.stringToTerraform(struct!.sdwanSaasQualityProfile),
  }
}


export function adminRoleRoleDeviceWebuiObjectsSdwanToHclTerraform(struct?: AdminRoleRoleDeviceWebuiObjectsSdwan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sdwan_dist_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanDistProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_error_correction_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanErrorCorrectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_saas_quality_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanSaasQualityProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiObjectsSdwanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiObjectsSdwan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sdwanDistProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanDistProfile = this._sdwanDistProfile;
    }
    if (this._sdwanErrorCorrectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanErrorCorrectionProfile = this._sdwanErrorCorrectionProfile;
    }
    if (this._sdwanProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanProfile = this._sdwanProfile;
    }
    if (this._sdwanSaasQualityProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanSaasQualityProfile = this._sdwanSaasQualityProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiObjectsSdwan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sdwanDistProfile = undefined;
      this._sdwanErrorCorrectionProfile = undefined;
      this._sdwanProfile = undefined;
      this._sdwanSaasQualityProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sdwanDistProfile = value.sdwanDistProfile;
      this._sdwanErrorCorrectionProfile = value.sdwanErrorCorrectionProfile;
      this._sdwanProfile = value.sdwanProfile;
      this._sdwanSaasQualityProfile = value.sdwanSaasQualityProfile;
    }
  }

  // sdwan_dist_profile - computed: false, optional: true, required: false
  private _sdwanDistProfile?: string; 
  public get sdwanDistProfile() {
    return this.getStringAttribute('sdwan_dist_profile');
  }
  public set sdwanDistProfile(value: string) {
    this._sdwanDistProfile = value;
  }
  public resetSdwanDistProfile() {
    this._sdwanDistProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanDistProfileInput() {
    return this._sdwanDistProfile;
  }

  // sdwan_error_correction_profile - computed: false, optional: true, required: false
  private _sdwanErrorCorrectionProfile?: string; 
  public get sdwanErrorCorrectionProfile() {
    return this.getStringAttribute('sdwan_error_correction_profile');
  }
  public set sdwanErrorCorrectionProfile(value: string) {
    this._sdwanErrorCorrectionProfile = value;
  }
  public resetSdwanErrorCorrectionProfile() {
    this._sdwanErrorCorrectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanErrorCorrectionProfileInput() {
    return this._sdwanErrorCorrectionProfile;
  }

  // sdwan_profile - computed: false, optional: true, required: false
  private _sdwanProfile?: string; 
  public get sdwanProfile() {
    return this.getStringAttribute('sdwan_profile');
  }
  public set sdwanProfile(value: string) {
    this._sdwanProfile = value;
  }
  public resetSdwanProfile() {
    this._sdwanProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanProfileInput() {
    return this._sdwanProfile;
  }

  // sdwan_saas_quality_profile - computed: false, optional: true, required: false
  private _sdwanSaasQualityProfile?: string; 
  public get sdwanSaasQualityProfile() {
    return this.getStringAttribute('sdwan_saas_quality_profile');
  }
  public set sdwanSaasQualityProfile(value: string) {
    this._sdwanSaasQualityProfile = value;
  }
  public resetSdwanSaasQualityProfile() {
    this._sdwanSaasQualityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanSaasQualityProfileInput() {
    return this._sdwanSaasQualityProfile;
  }
}
export interface AdminRoleRoleDeviceWebuiObjectsSecurityProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#anti_spyware AdminRole#anti_spyware}
  */
  readonly antiSpyware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#antivirus AdminRole#antivirus}
  */
  readonly antivirus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_filtering AdminRole#data_filtering}
  */
  readonly dataFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dos_protection AdminRole#dos_protection}
  */
  readonly dosProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#file_blocking AdminRole#file_blocking}
  */
  readonly fileBlocking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp_protection AdminRole#gtp_protection}
  */
  readonly gtpProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp_protection AdminRole#sctp_protection}
  */
  readonly sctpProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_filtering AdminRole#url_filtering}
  */
  readonly urlFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vulnerability_protection AdminRole#vulnerability_protection}
  */
  readonly vulnerabilityProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#wildfire_analysis AdminRole#wildfire_analysis}
  */
  readonly wildfireAnalysis?: string;
}

export function adminRoleRoleDeviceWebuiObjectsSecurityProfilesToTerraform(struct?: AdminRoleRoleDeviceWebuiObjectsSecurityProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_spyware: cdktf.stringToTerraform(struct!.antiSpyware),
    antivirus: cdktf.stringToTerraform(struct!.antivirus),
    data_filtering: cdktf.stringToTerraform(struct!.dataFiltering),
    dos_protection: cdktf.stringToTerraform(struct!.dosProtection),
    file_blocking: cdktf.stringToTerraform(struct!.fileBlocking),
    gtp_protection: cdktf.stringToTerraform(struct!.gtpProtection),
    sctp_protection: cdktf.stringToTerraform(struct!.sctpProtection),
    url_filtering: cdktf.stringToTerraform(struct!.urlFiltering),
    vulnerability_protection: cdktf.stringToTerraform(struct!.vulnerabilityProtection),
    wildfire_analysis: cdktf.stringToTerraform(struct!.wildfireAnalysis),
  }
}


export function adminRoleRoleDeviceWebuiObjectsSecurityProfilesToHclTerraform(struct?: AdminRoleRoleDeviceWebuiObjectsSecurityProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_spyware: {
      value: cdktf.stringToHclTerraform(struct!.antiSpyware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    antivirus: {
      value: cdktf.stringToHclTerraform(struct!.antivirus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_filtering: {
      value: cdktf.stringToHclTerraform(struct!.dataFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_protection: {
      value: cdktf.stringToHclTerraform(struct!.dosProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_blocking: {
      value: cdktf.stringToHclTerraform(struct!.fileBlocking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_protection: {
      value: cdktf.stringToHclTerraform(struct!.gtpProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_protection: {
      value: cdktf.stringToHclTerraform(struct!.sctpProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_filtering: {
      value: cdktf.stringToHclTerraform(struct!.urlFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerability_protection: {
      value: cdktf.stringToHclTerraform(struct!.vulnerabilityProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire_analysis: {
      value: cdktf.stringToHclTerraform(struct!.wildfireAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiObjectsSecurityProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiObjectsSecurityProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiSpyware !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpyware = this._antiSpyware;
    }
    if (this._antivirus !== undefined) {
      hasAnyValues = true;
      internalValueResult.antivirus = this._antivirus;
    }
    if (this._dataFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFiltering = this._dataFiltering;
    }
    if (this._dosProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosProtection = this._dosProtection;
    }
    if (this._fileBlocking !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlocking = this._fileBlocking;
    }
    if (this._gtpProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpProtection = this._gtpProtection;
    }
    if (this._sctpProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpProtection = this._sctpProtection;
    }
    if (this._urlFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFiltering = this._urlFiltering;
    }
    if (this._vulnerabilityProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityProtection = this._vulnerabilityProtection;
    }
    if (this._wildfireAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireAnalysis = this._wildfireAnalysis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiObjectsSecurityProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiSpyware = undefined;
      this._antivirus = undefined;
      this._dataFiltering = undefined;
      this._dosProtection = undefined;
      this._fileBlocking = undefined;
      this._gtpProtection = undefined;
      this._sctpProtection = undefined;
      this._urlFiltering = undefined;
      this._vulnerabilityProtection = undefined;
      this._wildfireAnalysis = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiSpyware = value.antiSpyware;
      this._antivirus = value.antivirus;
      this._dataFiltering = value.dataFiltering;
      this._dosProtection = value.dosProtection;
      this._fileBlocking = value.fileBlocking;
      this._gtpProtection = value.gtpProtection;
      this._sctpProtection = value.sctpProtection;
      this._urlFiltering = value.urlFiltering;
      this._vulnerabilityProtection = value.vulnerabilityProtection;
      this._wildfireAnalysis = value.wildfireAnalysis;
    }
  }

  // anti_spyware - computed: false, optional: true, required: false
  private _antiSpyware?: string; 
  public get antiSpyware() {
    return this.getStringAttribute('anti_spyware');
  }
  public set antiSpyware(value: string) {
    this._antiSpyware = value;
  }
  public resetAntiSpyware() {
    this._antiSpyware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpywareInput() {
    return this._antiSpyware;
  }

  // antivirus - computed: false, optional: true, required: false
  private _antivirus?: string; 
  public get antivirus() {
    return this.getStringAttribute('antivirus');
  }
  public set antivirus(value: string) {
    this._antivirus = value;
  }
  public resetAntivirus() {
    this._antivirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusInput() {
    return this._antivirus;
  }

  // data_filtering - computed: false, optional: true, required: false
  private _dataFiltering?: string; 
  public get dataFiltering() {
    return this.getStringAttribute('data_filtering');
  }
  public set dataFiltering(value: string) {
    this._dataFiltering = value;
  }
  public resetDataFiltering() {
    this._dataFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringInput() {
    return this._dataFiltering;
  }

  // dos_protection - computed: false, optional: true, required: false
  private _dosProtection?: string; 
  public get dosProtection() {
    return this.getStringAttribute('dos_protection');
  }
  public set dosProtection(value: string) {
    this._dosProtection = value;
  }
  public resetDosProtection() {
    this._dosProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosProtectionInput() {
    return this._dosProtection;
  }

  // file_blocking - computed: false, optional: true, required: false
  private _fileBlocking?: string; 
  public get fileBlocking() {
    return this.getStringAttribute('file_blocking');
  }
  public set fileBlocking(value: string) {
    this._fileBlocking = value;
  }
  public resetFileBlocking() {
    this._fileBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockingInput() {
    return this._fileBlocking;
  }

  // gtp_protection - computed: false, optional: true, required: false
  private _gtpProtection?: string; 
  public get gtpProtection() {
    return this.getStringAttribute('gtp_protection');
  }
  public set gtpProtection(value: string) {
    this._gtpProtection = value;
  }
  public resetGtpProtection() {
    this._gtpProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpProtectionInput() {
    return this._gtpProtection;
  }

  // sctp_protection - computed: false, optional: true, required: false
  private _sctpProtection?: string; 
  public get sctpProtection() {
    return this.getStringAttribute('sctp_protection');
  }
  public set sctpProtection(value: string) {
    this._sctpProtection = value;
  }
  public resetSctpProtection() {
    this._sctpProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpProtectionInput() {
    return this._sctpProtection;
  }

  // url_filtering - computed: false, optional: true, required: false
  private _urlFiltering?: string; 
  public get urlFiltering() {
    return this.getStringAttribute('url_filtering');
  }
  public set urlFiltering(value: string) {
    this._urlFiltering = value;
  }
  public resetUrlFiltering() {
    this._urlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringInput() {
    return this._urlFiltering;
  }

  // vulnerability_protection - computed: false, optional: true, required: false
  private _vulnerabilityProtection?: string; 
  public get vulnerabilityProtection() {
    return this.getStringAttribute('vulnerability_protection');
  }
  public set vulnerabilityProtection(value: string) {
    this._vulnerabilityProtection = value;
  }
  public resetVulnerabilityProtection() {
    this._vulnerabilityProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityProtectionInput() {
    return this._vulnerabilityProtection;
  }

  // wildfire_analysis - computed: false, optional: true, required: false
  private _wildfireAnalysis?: string; 
  public get wildfireAnalysis() {
    return this.getStringAttribute('wildfire_analysis');
  }
  public set wildfireAnalysis(value: string) {
    this._wildfireAnalysis = value;
  }
  public resetWildfireAnalysis() {
    this._wildfireAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireAnalysisInput() {
    return this._wildfireAnalysis;
  }
}
export interface AdminRoleRoleDeviceWebuiObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#address_groups AdminRole#address_groups}
  */
  readonly addressGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#addresses AdminRole#addresses}
  */
  readonly addresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_filters AdminRole#application_filters}
  */
  readonly applicationFilters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_groups AdminRole#application_groups}
  */
  readonly applicationGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#applications AdminRole#applications}
  */
  readonly applications?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication AdminRole#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_objects AdminRole#custom_objects}
  */
  readonly customObjects?: AdminRoleRoleDeviceWebuiObjectsCustomObjects;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption AdminRole#decryption}
  */
  readonly decryption?: AdminRoleRoleDeviceWebuiObjectsDecryption;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#devices AdminRole#devices}
  */
  readonly devices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dynamic_block_lists AdminRole#dynamic_block_lists}
  */
  readonly dynamicBlockLists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dynamic_user_groups AdminRole#dynamic_user_groups}
  */
  readonly dynamicUserGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#global_protect AdminRole#global_protect}
  */
  readonly globalProtect?: AdminRoleRoleDeviceWebuiObjectsGlobalProtect;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log_forwarding AdminRole#log_forwarding}
  */
  readonly logForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#packet_broker_profile AdminRole#packet_broker_profile}
  */
  readonly packetBrokerProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#regions AdminRole#regions}
  */
  readonly regions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#schedules AdminRole#schedules}
  */
  readonly schedules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan AdminRole#sdwan}
  */
  readonly sdwan?: AdminRoleRoleDeviceWebuiObjectsSdwan;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#security_profile_groups AdminRole#security_profile_groups}
  */
  readonly securityProfileGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#security_profiles AdminRole#security_profiles}
  */
  readonly securityProfiles?: AdminRoleRoleDeviceWebuiObjectsSecurityProfiles;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#service_groups AdminRole#service_groups}
  */
  readonly serviceGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#services AdminRole#services}
  */
  readonly services?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tags AdminRole#tags}
  */
  readonly tags?: string;
}

export function adminRoleRoleDeviceWebuiObjectsToTerraform(struct?: AdminRoleRoleDeviceWebuiObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_groups: cdktf.stringToTerraform(struct!.addressGroups),
    addresses: cdktf.stringToTerraform(struct!.addresses),
    application_filters: cdktf.stringToTerraform(struct!.applicationFilters),
    application_groups: cdktf.stringToTerraform(struct!.applicationGroups),
    applications: cdktf.stringToTerraform(struct!.applications),
    authentication: cdktf.stringToTerraform(struct!.authentication),
    custom_objects: adminRoleRoleDeviceWebuiObjectsCustomObjectsToTerraform(struct!.customObjects),
    decryption: adminRoleRoleDeviceWebuiObjectsDecryptionToTerraform(struct!.decryption),
    devices: cdktf.stringToTerraform(struct!.devices),
    dynamic_block_lists: cdktf.stringToTerraform(struct!.dynamicBlockLists),
    dynamic_user_groups: cdktf.stringToTerraform(struct!.dynamicUserGroups),
    global_protect: adminRoleRoleDeviceWebuiObjectsGlobalProtectToTerraform(struct!.globalProtect),
    log_forwarding: cdktf.stringToTerraform(struct!.logForwarding),
    packet_broker_profile: cdktf.stringToTerraform(struct!.packetBrokerProfile),
    regions: cdktf.stringToTerraform(struct!.regions),
    schedules: cdktf.stringToTerraform(struct!.schedules),
    sdwan: adminRoleRoleDeviceWebuiObjectsSdwanToTerraform(struct!.sdwan),
    security_profile_groups: cdktf.stringToTerraform(struct!.securityProfileGroups),
    security_profiles: adminRoleRoleDeviceWebuiObjectsSecurityProfilesToTerraform(struct!.securityProfiles),
    service_groups: cdktf.stringToTerraform(struct!.serviceGroups),
    services: cdktf.stringToTerraform(struct!.services),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function adminRoleRoleDeviceWebuiObjectsToHclTerraform(struct?: AdminRoleRoleDeviceWebuiObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_groups: {
      value: cdktf.stringToHclTerraform(struct!.addressGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addresses: {
      value: cdktf.stringToHclTerraform(struct!.addresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_filters: {
      value: cdktf.stringToHclTerraform(struct!.applicationFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_groups: {
      value: cdktf.stringToHclTerraform(struct!.applicationGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applications: {
      value: cdktf.stringToHclTerraform(struct!.applications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_objects: {
      value: adminRoleRoleDeviceWebuiObjectsCustomObjectsToHclTerraform(struct!.customObjects),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiObjectsCustomObjects",
    },
    decryption: {
      value: adminRoleRoleDeviceWebuiObjectsDecryptionToHclTerraform(struct!.decryption),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiObjectsDecryption",
    },
    devices: {
      value: cdktf.stringToHclTerraform(struct!.devices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_block_lists: {
      value: cdktf.stringToHclTerraform(struct!.dynamicBlockLists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_user_groups: {
      value: cdktf.stringToHclTerraform(struct!.dynamicUserGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_protect: {
      value: adminRoleRoleDeviceWebuiObjectsGlobalProtectToHclTerraform(struct!.globalProtect),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiObjectsGlobalProtect",
    },
    log_forwarding: {
      value: cdktf.stringToHclTerraform(struct!.logForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_broker_profile: {
      value: cdktf.stringToHclTerraform(struct!.packetBrokerProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.stringToHclTerraform(struct!.regions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedules: {
      value: cdktf.stringToHclTerraform(struct!.schedules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan: {
      value: adminRoleRoleDeviceWebuiObjectsSdwanToHclTerraform(struct!.sdwan),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiObjectsSdwan",
    },
    security_profile_groups: {
      value: cdktf.stringToHclTerraform(struct!.securityProfileGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_profiles: {
      value: adminRoleRoleDeviceWebuiObjectsSecurityProfilesToHclTerraform(struct!.securityProfiles),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiObjectsSecurityProfiles",
    },
    service_groups: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressGroups = this._addressGroups;
    }
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._applicationFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationFilters = this._applicationFilters;
    }
    if (this._applicationGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationGroups = this._applicationGroups;
    }
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._customObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customObjects = this._customObjects?.internalValue;
    }
    if (this._decryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryption = this._decryption?.internalValue;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._dynamicBlockLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicBlockLists = this._dynamicBlockLists;
    }
    if (this._dynamicUserGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicUserGroups = this._dynamicUserGroups;
    }
    if (this._globalProtect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalProtect = this._globalProtect?.internalValue;
    }
    if (this._logForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.logForwarding = this._logForwarding;
    }
    if (this._packetBrokerProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBrokerProfile = this._packetBrokerProfile;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._schedules !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules;
    }
    if (this._sdwan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwan = this._sdwan?.internalValue;
    }
    if (this._securityProfileGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfileGroups = this._securityProfileGroups;
    }
    if (this._securityProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfiles = this._securityProfiles?.internalValue;
    }
    if (this._serviceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroups = this._serviceGroups;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressGroups = undefined;
      this._addresses = undefined;
      this._applicationFilters = undefined;
      this._applicationGroups = undefined;
      this._applications = undefined;
      this._authentication = undefined;
      this._customObjects.internalValue = undefined;
      this._decryption.internalValue = undefined;
      this._devices = undefined;
      this._dynamicBlockLists = undefined;
      this._dynamicUserGroups = undefined;
      this._globalProtect.internalValue = undefined;
      this._logForwarding = undefined;
      this._packetBrokerProfile = undefined;
      this._regions = undefined;
      this._schedules = undefined;
      this._sdwan.internalValue = undefined;
      this._securityProfileGroups = undefined;
      this._securityProfiles.internalValue = undefined;
      this._serviceGroups = undefined;
      this._services = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressGroups = value.addressGroups;
      this._addresses = value.addresses;
      this._applicationFilters = value.applicationFilters;
      this._applicationGroups = value.applicationGroups;
      this._applications = value.applications;
      this._authentication = value.authentication;
      this._customObjects.internalValue = value.customObjects;
      this._decryption.internalValue = value.decryption;
      this._devices = value.devices;
      this._dynamicBlockLists = value.dynamicBlockLists;
      this._dynamicUserGroups = value.dynamicUserGroups;
      this._globalProtect.internalValue = value.globalProtect;
      this._logForwarding = value.logForwarding;
      this._packetBrokerProfile = value.packetBrokerProfile;
      this._regions = value.regions;
      this._schedules = value.schedules;
      this._sdwan.internalValue = value.sdwan;
      this._securityProfileGroups = value.securityProfileGroups;
      this._securityProfiles.internalValue = value.securityProfiles;
      this._serviceGroups = value.serviceGroups;
      this._services = value.services;
      this._tags = value.tags;
    }
  }

  // address_groups - computed: false, optional: true, required: false
  private _addressGroups?: string; 
  public get addressGroups() {
    return this.getStringAttribute('address_groups');
  }
  public set addressGroups(value: string) {
    this._addressGroups = value;
  }
  public resetAddressGroups() {
    this._addressGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupsInput() {
    return this._addressGroups;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string; 
  public get addresses() {
    return this.getStringAttribute('addresses');
  }
  public set addresses(value: string) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // application_filters - computed: false, optional: true, required: false
  private _applicationFilters?: string; 
  public get applicationFilters() {
    return this.getStringAttribute('application_filters');
  }
  public set applicationFilters(value: string) {
    this._applicationFilters = value;
  }
  public resetApplicationFilters() {
    this._applicationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFiltersInput() {
    return this._applicationFilters;
  }

  // application_groups - computed: false, optional: true, required: false
  private _applicationGroups?: string; 
  public get applicationGroups() {
    return this.getStringAttribute('application_groups');
  }
  public set applicationGroups(value: string) {
    this._applicationGroups = value;
  }
  public resetApplicationGroups() {
    this._applicationGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupsInput() {
    return this._applicationGroups;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string; 
  public get applications() {
    return this.getStringAttribute('applications');
  }
  public set applications(value: string) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // custom_objects - computed: false, optional: true, required: false
  private _customObjects = new AdminRoleRoleDeviceWebuiObjectsCustomObjectsOutputReference(this, "custom_objects");
  public get customObjects() {
    return this._customObjects;
  }
  public putCustomObjects(value: AdminRoleRoleDeviceWebuiObjectsCustomObjects) {
    this._customObjects.internalValue = value;
  }
  public resetCustomObjects() {
    this._customObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customObjectsInput() {
    return this._customObjects.internalValue;
  }

  // decryption - computed: false, optional: true, required: false
  private _decryption = new AdminRoleRoleDeviceWebuiObjectsDecryptionOutputReference(this, "decryption");
  public get decryption() {
    return this._decryption;
  }
  public putDecryption(value: AdminRoleRoleDeviceWebuiObjectsDecryption) {
    this._decryption.internalValue = value;
  }
  public resetDecryption() {
    this._decryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionInput() {
    return this._decryption.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: string; 
  public get devices() {
    return this.getStringAttribute('devices');
  }
  public set devices(value: string) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // dynamic_block_lists - computed: false, optional: true, required: false
  private _dynamicBlockLists?: string; 
  public get dynamicBlockLists() {
    return this.getStringAttribute('dynamic_block_lists');
  }
  public set dynamicBlockLists(value: string) {
    this._dynamicBlockLists = value;
  }
  public resetDynamicBlockLists() {
    this._dynamicBlockLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicBlockListsInput() {
    return this._dynamicBlockLists;
  }

  // dynamic_user_groups - computed: false, optional: true, required: false
  private _dynamicUserGroups?: string; 
  public get dynamicUserGroups() {
    return this.getStringAttribute('dynamic_user_groups');
  }
  public set dynamicUserGroups(value: string) {
    this._dynamicUserGroups = value;
  }
  public resetDynamicUserGroups() {
    this._dynamicUserGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicUserGroupsInput() {
    return this._dynamicUserGroups;
  }

  // global_protect - computed: false, optional: true, required: false
  private _globalProtect = new AdminRoleRoleDeviceWebuiObjectsGlobalProtectOutputReference(this, "global_protect");
  public get globalProtect() {
    return this._globalProtect;
  }
  public putGlobalProtect(value: AdminRoleRoleDeviceWebuiObjectsGlobalProtect) {
    this._globalProtect.internalValue = value;
  }
  public resetGlobalProtect() {
    this._globalProtect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectInput() {
    return this._globalProtect.internalValue;
  }

  // log_forwarding - computed: false, optional: true, required: false
  private _logForwarding?: string; 
  public get logForwarding() {
    return this.getStringAttribute('log_forwarding');
  }
  public set logForwarding(value: string) {
    this._logForwarding = value;
  }
  public resetLogForwarding() {
    this._logForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardingInput() {
    return this._logForwarding;
  }

  // packet_broker_profile - computed: false, optional: true, required: false
  private _packetBrokerProfile?: string; 
  public get packetBrokerProfile() {
    return this.getStringAttribute('packet_broker_profile');
  }
  public set packetBrokerProfile(value: string) {
    this._packetBrokerProfile = value;
  }
  public resetPacketBrokerProfile() {
    this._packetBrokerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBrokerProfileInput() {
    return this._packetBrokerProfile;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string; 
  public get regions() {
    return this.getStringAttribute('regions');
  }
  public set regions(value: string) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules?: string; 
  public get schedules() {
    return this.getStringAttribute('schedules');
  }
  public set schedules(value: string) {
    this._schedules = value;
  }
  public resetSchedules() {
    this._schedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules;
  }

  // sdwan - computed: false, optional: true, required: false
  private _sdwan = new AdminRoleRoleDeviceWebuiObjectsSdwanOutputReference(this, "sdwan");
  public get sdwan() {
    return this._sdwan;
  }
  public putSdwan(value: AdminRoleRoleDeviceWebuiObjectsSdwan) {
    this._sdwan.internalValue = value;
  }
  public resetSdwan() {
    this._sdwan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInput() {
    return this._sdwan.internalValue;
  }

  // security_profile_groups - computed: false, optional: true, required: false
  private _securityProfileGroups?: string; 
  public get securityProfileGroups() {
    return this.getStringAttribute('security_profile_groups');
  }
  public set securityProfileGroups(value: string) {
    this._securityProfileGroups = value;
  }
  public resetSecurityProfileGroups() {
    this._securityProfileGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileGroupsInput() {
    return this._securityProfileGroups;
  }

  // security_profiles - computed: false, optional: true, required: false
  private _securityProfiles = new AdminRoleRoleDeviceWebuiObjectsSecurityProfilesOutputReference(this, "security_profiles");
  public get securityProfiles() {
    return this._securityProfiles;
  }
  public putSecurityProfiles(value: AdminRoleRoleDeviceWebuiObjectsSecurityProfiles) {
    this._securityProfiles.internalValue = value;
  }
  public resetSecurityProfiles() {
    this._securityProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfilesInput() {
    return this._securityProfiles.internalValue;
  }

  // service_groups - computed: false, optional: true, required: false
  private _serviceGroups?: string; 
  public get serviceGroups() {
    return this.getStringAttribute('service_groups');
  }
  public set serviceGroups(value: string) {
    this._serviceGroups = value;
  }
  public resetServiceGroups() {
    this._serviceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupsInput() {
    return this._serviceGroups;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface AdminRoleRoleDeviceWebuiOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#download_core_files AdminRole#download_core_files}
  */
  readonly downloadCoreFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#download_pcap_files AdminRole#download_pcap_files}
  */
  readonly downloadPcapFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#generate_stats_dump_file AdminRole#generate_stats_dump_file}
  */
  readonly generateStatsDumpFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#generate_tech_support_file AdminRole#generate_tech_support_file}
  */
  readonly generateTechSupportFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#reboot AdminRole#reboot}
  */
  readonly reboot?: string;
}

export function adminRoleRoleDeviceWebuiOperationsToTerraform(struct?: AdminRoleRoleDeviceWebuiOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download_core_files: cdktf.stringToTerraform(struct!.downloadCoreFiles),
    download_pcap_files: cdktf.stringToTerraform(struct!.downloadPcapFiles),
    generate_stats_dump_file: cdktf.stringToTerraform(struct!.generateStatsDumpFile),
    generate_tech_support_file: cdktf.stringToTerraform(struct!.generateTechSupportFile),
    reboot: cdktf.stringToTerraform(struct!.reboot),
  }
}


export function adminRoleRoleDeviceWebuiOperationsToHclTerraform(struct?: AdminRoleRoleDeviceWebuiOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download_core_files: {
      value: cdktf.stringToHclTerraform(struct!.downloadCoreFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    download_pcap_files: {
      value: cdktf.stringToHclTerraform(struct!.downloadPcapFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_stats_dump_file: {
      value: cdktf.stringToHclTerraform(struct!.generateStatsDumpFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_tech_support_file: {
      value: cdktf.stringToHclTerraform(struct!.generateTechSupportFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reboot: {
      value: cdktf.stringToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downloadCoreFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadCoreFiles = this._downloadCoreFiles;
    }
    if (this._downloadPcapFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadPcapFiles = this._downloadPcapFiles;
    }
    if (this._generateStatsDumpFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateStatsDumpFile = this._generateStatsDumpFile;
    }
    if (this._generateTechSupportFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateTechSupportFile = this._generateTechSupportFile;
    }
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downloadCoreFiles = undefined;
      this._downloadPcapFiles = undefined;
      this._generateStatsDumpFile = undefined;
      this._generateTechSupportFile = undefined;
      this._reboot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downloadCoreFiles = value.downloadCoreFiles;
      this._downloadPcapFiles = value.downloadPcapFiles;
      this._generateStatsDumpFile = value.generateStatsDumpFile;
      this._generateTechSupportFile = value.generateTechSupportFile;
      this._reboot = value.reboot;
    }
  }

  // download_core_files - computed: false, optional: true, required: false
  private _downloadCoreFiles?: string; 
  public get downloadCoreFiles() {
    return this.getStringAttribute('download_core_files');
  }
  public set downloadCoreFiles(value: string) {
    this._downloadCoreFiles = value;
  }
  public resetDownloadCoreFiles() {
    this._downloadCoreFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadCoreFilesInput() {
    return this._downloadCoreFiles;
  }

  // download_pcap_files - computed: false, optional: true, required: false
  private _downloadPcapFiles?: string; 
  public get downloadPcapFiles() {
    return this.getStringAttribute('download_pcap_files');
  }
  public set downloadPcapFiles(value: string) {
    this._downloadPcapFiles = value;
  }
  public resetDownloadPcapFiles() {
    this._downloadPcapFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadPcapFilesInput() {
    return this._downloadPcapFiles;
  }

  // generate_stats_dump_file - computed: false, optional: true, required: false
  private _generateStatsDumpFile?: string; 
  public get generateStatsDumpFile() {
    return this.getStringAttribute('generate_stats_dump_file');
  }
  public set generateStatsDumpFile(value: string) {
    this._generateStatsDumpFile = value;
  }
  public resetGenerateStatsDumpFile() {
    this._generateStatsDumpFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateStatsDumpFileInput() {
    return this._generateStatsDumpFile;
  }

  // generate_tech_support_file - computed: false, optional: true, required: false
  private _generateTechSupportFile?: string; 
  public get generateTechSupportFile() {
    return this.getStringAttribute('generate_tech_support_file');
  }
  public set generateTechSupportFile(value: string) {
    this._generateTechSupportFile = value;
  }
  public resetGenerateTechSupportFile() {
    this._generateTechSupportFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateTechSupportFileInput() {
    return this._generateTechSupportFile;
  }

  // reboot - computed: false, optional: true, required: false
  private _reboot?: string; 
  public get reboot() {
    return this.getStringAttribute('reboot');
  }
  public set reboot(value: string) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }
}
export interface AdminRoleRoleDeviceWebuiPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_override_rulebase AdminRole#application_override_rulebase}
  */
  readonly applicationOverrideRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication_rulebase AdminRole#authentication_rulebase}
  */
  readonly authenticationRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dos_rulebase AdminRole#dos_rulebase}
  */
  readonly dosRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#nat_rulebase AdminRole#nat_rulebase}
  */
  readonly natRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#network_packet_broker_rulebase AdminRole#network_packet_broker_rulebase}
  */
  readonly networkPacketBrokerRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#pbf_rulebase AdminRole#pbf_rulebase}
  */
  readonly pbfRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#qos_rulebase AdminRole#qos_rulebase}
  */
  readonly qosRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#rule_hit_count_reset AdminRole#rule_hit_count_reset}
  */
  readonly ruleHitCountReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_rulebase AdminRole#sdwan_rulebase}
  */
  readonly sdwanRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#security_rulebase AdminRole#security_rulebase}
  */
  readonly securityRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ssl_decryption_rulebase AdminRole#ssl_decryption_rulebase}
  */
  readonly sslDecryptionRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_inspect_rulebase AdminRole#tunnel_inspect_rulebase}
  */
  readonly tunnelInspectRulebase?: string;
}

export function adminRoleRoleDeviceWebuiPoliciesToTerraform(struct?: AdminRoleRoleDeviceWebuiPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_override_rulebase: cdktf.stringToTerraform(struct!.applicationOverrideRulebase),
    authentication_rulebase: cdktf.stringToTerraform(struct!.authenticationRulebase),
    dos_rulebase: cdktf.stringToTerraform(struct!.dosRulebase),
    nat_rulebase: cdktf.stringToTerraform(struct!.natRulebase),
    network_packet_broker_rulebase: cdktf.stringToTerraform(struct!.networkPacketBrokerRulebase),
    pbf_rulebase: cdktf.stringToTerraform(struct!.pbfRulebase),
    qos_rulebase: cdktf.stringToTerraform(struct!.qosRulebase),
    rule_hit_count_reset: cdktf.stringToTerraform(struct!.ruleHitCountReset),
    sdwan_rulebase: cdktf.stringToTerraform(struct!.sdwanRulebase),
    security_rulebase: cdktf.stringToTerraform(struct!.securityRulebase),
    ssl_decryption_rulebase: cdktf.stringToTerraform(struct!.sslDecryptionRulebase),
    tunnel_inspect_rulebase: cdktf.stringToTerraform(struct!.tunnelInspectRulebase),
  }
}


export function adminRoleRoleDeviceWebuiPoliciesToHclTerraform(struct?: AdminRoleRoleDeviceWebuiPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_override_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.applicationOverrideRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.authenticationRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.dosRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.natRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_packet_broker_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.networkPacketBrokerRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pbf_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.pbfRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.qosRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_hit_count_reset: {
      value: cdktf.stringToHclTerraform(struct!.ruleHitCountReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.sdwanRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.securityRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_decryption_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.sslDecryptionRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_inspect_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.tunnelInspectRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationOverrideRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationOverrideRulebase = this._applicationOverrideRulebase;
    }
    if (this._authenticationRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRulebase = this._authenticationRulebase;
    }
    if (this._dosRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosRulebase = this._dosRulebase;
    }
    if (this._natRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.natRulebase = this._natRulebase;
    }
    if (this._networkPacketBrokerRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPacketBrokerRulebase = this._networkPacketBrokerRulebase;
    }
    if (this._pbfRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbfRulebase = this._pbfRulebase;
    }
    if (this._qosRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosRulebase = this._qosRulebase;
    }
    if (this._ruleHitCountReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleHitCountReset = this._ruleHitCountReset;
    }
    if (this._sdwanRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanRulebase = this._sdwanRulebase;
    }
    if (this._securityRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityRulebase = this._securityRulebase;
    }
    if (this._sslDecryptionRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslDecryptionRulebase = this._sslDecryptionRulebase;
    }
    if (this._tunnelInspectRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelInspectRulebase = this._tunnelInspectRulebase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationOverrideRulebase = undefined;
      this._authenticationRulebase = undefined;
      this._dosRulebase = undefined;
      this._natRulebase = undefined;
      this._networkPacketBrokerRulebase = undefined;
      this._pbfRulebase = undefined;
      this._qosRulebase = undefined;
      this._ruleHitCountReset = undefined;
      this._sdwanRulebase = undefined;
      this._securityRulebase = undefined;
      this._sslDecryptionRulebase = undefined;
      this._tunnelInspectRulebase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationOverrideRulebase = value.applicationOverrideRulebase;
      this._authenticationRulebase = value.authenticationRulebase;
      this._dosRulebase = value.dosRulebase;
      this._natRulebase = value.natRulebase;
      this._networkPacketBrokerRulebase = value.networkPacketBrokerRulebase;
      this._pbfRulebase = value.pbfRulebase;
      this._qosRulebase = value.qosRulebase;
      this._ruleHitCountReset = value.ruleHitCountReset;
      this._sdwanRulebase = value.sdwanRulebase;
      this._securityRulebase = value.securityRulebase;
      this._sslDecryptionRulebase = value.sslDecryptionRulebase;
      this._tunnelInspectRulebase = value.tunnelInspectRulebase;
    }
  }

  // application_override_rulebase - computed: false, optional: true, required: false
  private _applicationOverrideRulebase?: string; 
  public get applicationOverrideRulebase() {
    return this.getStringAttribute('application_override_rulebase');
  }
  public set applicationOverrideRulebase(value: string) {
    this._applicationOverrideRulebase = value;
  }
  public resetApplicationOverrideRulebase() {
    this._applicationOverrideRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationOverrideRulebaseInput() {
    return this._applicationOverrideRulebase;
  }

  // authentication_rulebase - computed: false, optional: true, required: false
  private _authenticationRulebase?: string; 
  public get authenticationRulebase() {
    return this.getStringAttribute('authentication_rulebase');
  }
  public set authenticationRulebase(value: string) {
    this._authenticationRulebase = value;
  }
  public resetAuthenticationRulebase() {
    this._authenticationRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRulebaseInput() {
    return this._authenticationRulebase;
  }

  // dos_rulebase - computed: false, optional: true, required: false
  private _dosRulebase?: string; 
  public get dosRulebase() {
    return this.getStringAttribute('dos_rulebase');
  }
  public set dosRulebase(value: string) {
    this._dosRulebase = value;
  }
  public resetDosRulebase() {
    this._dosRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosRulebaseInput() {
    return this._dosRulebase;
  }

  // nat_rulebase - computed: false, optional: true, required: false
  private _natRulebase?: string; 
  public get natRulebase() {
    return this.getStringAttribute('nat_rulebase');
  }
  public set natRulebase(value: string) {
    this._natRulebase = value;
  }
  public resetNatRulebase() {
    this._natRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRulebaseInput() {
    return this._natRulebase;
  }

  // network_packet_broker_rulebase - computed: false, optional: true, required: false
  private _networkPacketBrokerRulebase?: string; 
  public get networkPacketBrokerRulebase() {
    return this.getStringAttribute('network_packet_broker_rulebase');
  }
  public set networkPacketBrokerRulebase(value: string) {
    this._networkPacketBrokerRulebase = value;
  }
  public resetNetworkPacketBrokerRulebase() {
    this._networkPacketBrokerRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPacketBrokerRulebaseInput() {
    return this._networkPacketBrokerRulebase;
  }

  // pbf_rulebase - computed: false, optional: true, required: false
  private _pbfRulebase?: string; 
  public get pbfRulebase() {
    return this.getStringAttribute('pbf_rulebase');
  }
  public set pbfRulebase(value: string) {
    this._pbfRulebase = value;
  }
  public resetPbfRulebase() {
    this._pbfRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbfRulebaseInput() {
    return this._pbfRulebase;
  }

  // qos_rulebase - computed: false, optional: true, required: false
  private _qosRulebase?: string; 
  public get qosRulebase() {
    return this.getStringAttribute('qos_rulebase');
  }
  public set qosRulebase(value: string) {
    this._qosRulebase = value;
  }
  public resetQosRulebase() {
    this._qosRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosRulebaseInput() {
    return this._qosRulebase;
  }

  // rule_hit_count_reset - computed: false, optional: true, required: false
  private _ruleHitCountReset?: string; 
  public get ruleHitCountReset() {
    return this.getStringAttribute('rule_hit_count_reset');
  }
  public set ruleHitCountReset(value: string) {
    this._ruleHitCountReset = value;
  }
  public resetRuleHitCountReset() {
    this._ruleHitCountReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleHitCountResetInput() {
    return this._ruleHitCountReset;
  }

  // sdwan_rulebase - computed: false, optional: true, required: false
  private _sdwanRulebase?: string; 
  public get sdwanRulebase() {
    return this.getStringAttribute('sdwan_rulebase');
  }
  public set sdwanRulebase(value: string) {
    this._sdwanRulebase = value;
  }
  public resetSdwanRulebase() {
    this._sdwanRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanRulebaseInput() {
    return this._sdwanRulebase;
  }

  // security_rulebase - computed: false, optional: true, required: false
  private _securityRulebase?: string; 
  public get securityRulebase() {
    return this.getStringAttribute('security_rulebase');
  }
  public set securityRulebase(value: string) {
    this._securityRulebase = value;
  }
  public resetSecurityRulebase() {
    this._securityRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRulebaseInput() {
    return this._securityRulebase;
  }

  // ssl_decryption_rulebase - computed: false, optional: true, required: false
  private _sslDecryptionRulebase?: string; 
  public get sslDecryptionRulebase() {
    return this.getStringAttribute('ssl_decryption_rulebase');
  }
  public set sslDecryptionRulebase(value: string) {
    this._sslDecryptionRulebase = value;
  }
  public resetSslDecryptionRulebase() {
    this._sslDecryptionRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDecryptionRulebaseInput() {
    return this._sslDecryptionRulebase;
  }

  // tunnel_inspect_rulebase - computed: false, optional: true, required: false
  private _tunnelInspectRulebase?: string; 
  public get tunnelInspectRulebase() {
    return this.getStringAttribute('tunnel_inspect_rulebase');
  }
  public set tunnelInspectRulebase(value: string) {
    this._tunnelInspectRulebase = value;
  }
  public resetTunnelInspectRulebase() {
    this._tunnelInspectRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInspectRulebaseInput() {
    return this._tunnelInspectRulebase;
  }
}
export interface AdminRoleRoleDeviceWebuiPrivacy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#show_full_ip_addresses AdminRole#show_full_ip_addresses}
  */
  readonly showFullIpAddresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#show_user_names_in_logs_and_reports AdminRole#show_user_names_in_logs_and_reports}
  */
  readonly showUserNamesInLogsAndReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#view_pcap_files AdminRole#view_pcap_files}
  */
  readonly viewPcapFiles?: string;
}

export function adminRoleRoleDeviceWebuiPrivacyToTerraform(struct?: AdminRoleRoleDeviceWebuiPrivacy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_full_ip_addresses: cdktf.stringToTerraform(struct!.showFullIpAddresses),
    show_user_names_in_logs_and_reports: cdktf.stringToTerraform(struct!.showUserNamesInLogsAndReports),
    view_pcap_files: cdktf.stringToTerraform(struct!.viewPcapFiles),
  }
}


export function adminRoleRoleDeviceWebuiPrivacyToHclTerraform(struct?: AdminRoleRoleDeviceWebuiPrivacy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_full_ip_addresses: {
      value: cdktf.stringToHclTerraform(struct!.showFullIpAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_user_names_in_logs_and_reports: {
      value: cdktf.stringToHclTerraform(struct!.showUserNamesInLogsAndReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_pcap_files: {
      value: cdktf.stringToHclTerraform(struct!.viewPcapFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiPrivacyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiPrivacy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showFullIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.showFullIpAddresses = this._showFullIpAddresses;
    }
    if (this._showUserNamesInLogsAndReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.showUserNamesInLogsAndReports = this._showUserNamesInLogsAndReports;
    }
    if (this._viewPcapFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewPcapFiles = this._viewPcapFiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiPrivacy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showFullIpAddresses = undefined;
      this._showUserNamesInLogsAndReports = undefined;
      this._viewPcapFiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showFullIpAddresses = value.showFullIpAddresses;
      this._showUserNamesInLogsAndReports = value.showUserNamesInLogsAndReports;
      this._viewPcapFiles = value.viewPcapFiles;
    }
  }

  // show_full_ip_addresses - computed: false, optional: true, required: false
  private _showFullIpAddresses?: string; 
  public get showFullIpAddresses() {
    return this.getStringAttribute('show_full_ip_addresses');
  }
  public set showFullIpAddresses(value: string) {
    this._showFullIpAddresses = value;
  }
  public resetShowFullIpAddresses() {
    this._showFullIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showFullIpAddressesInput() {
    return this._showFullIpAddresses;
  }

  // show_user_names_in_logs_and_reports - computed: false, optional: true, required: false
  private _showUserNamesInLogsAndReports?: string; 
  public get showUserNamesInLogsAndReports() {
    return this.getStringAttribute('show_user_names_in_logs_and_reports');
  }
  public set showUserNamesInLogsAndReports(value: string) {
    this._showUserNamesInLogsAndReports = value;
  }
  public resetShowUserNamesInLogsAndReports() {
    this._showUserNamesInLogsAndReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUserNamesInLogsAndReportsInput() {
    return this._showUserNamesInLogsAndReports;
  }

  // view_pcap_files - computed: false, optional: true, required: false
  private _viewPcapFiles?: string; 
  public get viewPcapFiles() {
    return this.getStringAttribute('view_pcap_files');
  }
  public set viewPcapFiles(value: string) {
    this._viewPcapFiles = value;
  }
  public resetViewPcapFiles() {
    this._viewPcapFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewPcapFilesInput() {
    return this._viewPcapFiles;
  }
}
export interface AdminRoleRoleDeviceWebuiSave {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#object_level_changes AdminRole#object_level_changes}
  */
  readonly objectLevelChanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#partial_save AdminRole#partial_save}
  */
  readonly partialSave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#save_for_other_admins AdminRole#save_for_other_admins}
  */
  readonly saveForOtherAdmins?: string;
}

export function adminRoleRoleDeviceWebuiSaveToTerraform(struct?: AdminRoleRoleDeviceWebuiSave | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_level_changes: cdktf.stringToTerraform(struct!.objectLevelChanges),
    partial_save: cdktf.stringToTerraform(struct!.partialSave),
    save_for_other_admins: cdktf.stringToTerraform(struct!.saveForOtherAdmins),
  }
}


export function adminRoleRoleDeviceWebuiSaveToHclTerraform(struct?: AdminRoleRoleDeviceWebuiSave | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_level_changes: {
      value: cdktf.stringToHclTerraform(struct!.objectLevelChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partial_save: {
      value: cdktf.stringToHclTerraform(struct!.partialSave),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    save_for_other_admins: {
      value: cdktf.stringToHclTerraform(struct!.saveForOtherAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiSaveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebuiSave | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectLevelChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLevelChanges = this._objectLevelChanges;
    }
    if (this._partialSave !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialSave = this._partialSave;
    }
    if (this._saveForOtherAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveForOtherAdmins = this._saveForOtherAdmins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebuiSave | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectLevelChanges = undefined;
      this._partialSave = undefined;
      this._saveForOtherAdmins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectLevelChanges = value.objectLevelChanges;
      this._partialSave = value.partialSave;
      this._saveForOtherAdmins = value.saveForOtherAdmins;
    }
  }

  // object_level_changes - computed: false, optional: true, required: false
  private _objectLevelChanges?: string; 
  public get objectLevelChanges() {
    return this.getStringAttribute('object_level_changes');
  }
  public set objectLevelChanges(value: string) {
    this._objectLevelChanges = value;
  }
  public resetObjectLevelChanges() {
    this._objectLevelChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLevelChangesInput() {
    return this._objectLevelChanges;
  }

  // partial_save - computed: false, optional: true, required: false
  private _partialSave?: string; 
  public get partialSave() {
    return this.getStringAttribute('partial_save');
  }
  public set partialSave(value: string) {
    this._partialSave = value;
  }
  public resetPartialSave() {
    this._partialSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialSaveInput() {
    return this._partialSave;
  }

  // save_for_other_admins - computed: false, optional: true, required: false
  private _saveForOtherAdmins?: string; 
  public get saveForOtherAdmins() {
    return this.getStringAttribute('save_for_other_admins');
  }
  public set saveForOtherAdmins(value: string) {
    this._saveForOtherAdmins = value;
  }
  public resetSaveForOtherAdmins() {
    this._saveForOtherAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveForOtherAdminsInput() {
    return this._saveForOtherAdmins;
  }
}
export interface AdminRoleRoleDeviceWebui {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#acc AdminRole#acc}
  */
  readonly acc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#commit AdminRole#commit}
  */
  readonly commit?: AdminRoleRoleDeviceWebuiCommit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dashboard AdminRole#dashboard}
  */
  readonly dashboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#device AdminRole#device}
  */
  readonly device?: AdminRoleRoleDeviceWebuiDevice;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#global AdminRole#global}
  */
  readonly global?: AdminRoleRoleDeviceWebuiGlobal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#monitor AdminRole#monitor}
  */
  readonly monitor?: AdminRoleRoleDeviceWebuiMonitor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#network AdminRole#network}
  */
  readonly network?: AdminRoleRoleDeviceWebuiNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#objects AdminRole#objects}
  */
  readonly objects?: AdminRoleRoleDeviceWebuiObjects;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#operations AdminRole#operations}
  */
  readonly operations?: AdminRoleRoleDeviceWebuiOperations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#policies AdminRole#policies}
  */
  readonly policies?: AdminRoleRoleDeviceWebuiPolicies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#privacy AdminRole#privacy}
  */
  readonly privacy?: AdminRoleRoleDeviceWebuiPrivacy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#save AdminRole#save}
  */
  readonly save?: AdminRoleRoleDeviceWebuiSave;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tasks AdminRole#tasks}
  */
  readonly tasks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#validate AdminRole#validate}
  */
  readonly validate?: string;
}

export function adminRoleRoleDeviceWebuiToTerraform(struct?: AdminRoleRoleDeviceWebui | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acc: cdktf.stringToTerraform(struct!.acc),
    commit: adminRoleRoleDeviceWebuiCommitToTerraform(struct!.commit),
    dashboard: cdktf.stringToTerraform(struct!.dashboard),
    device: adminRoleRoleDeviceWebuiDeviceToTerraform(struct!.device),
    global: adminRoleRoleDeviceWebuiGlobalToTerraform(struct!.global),
    monitor: adminRoleRoleDeviceWebuiMonitorToTerraform(struct!.monitor),
    network: adminRoleRoleDeviceWebuiNetworkToTerraform(struct!.network),
    objects: adminRoleRoleDeviceWebuiObjectsToTerraform(struct!.objects),
    operations: adminRoleRoleDeviceWebuiOperationsToTerraform(struct!.operations),
    policies: adminRoleRoleDeviceWebuiPoliciesToTerraform(struct!.policies),
    privacy: adminRoleRoleDeviceWebuiPrivacyToTerraform(struct!.privacy),
    save: adminRoleRoleDeviceWebuiSaveToTerraform(struct!.save),
    tasks: cdktf.stringToTerraform(struct!.tasks),
    validate: cdktf.stringToTerraform(struct!.validate),
  }
}


export function adminRoleRoleDeviceWebuiToHclTerraform(struct?: AdminRoleRoleDeviceWebui | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acc: {
      value: cdktf.stringToHclTerraform(struct!.acc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit: {
      value: adminRoleRoleDeviceWebuiCommitToHclTerraform(struct!.commit),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiCommit",
    },
    dashboard: {
      value: cdktf.stringToHclTerraform(struct!.dashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: adminRoleRoleDeviceWebuiDeviceToHclTerraform(struct!.device),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiDevice",
    },
    global: {
      value: adminRoleRoleDeviceWebuiGlobalToHclTerraform(struct!.global),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiGlobal",
    },
    monitor: {
      value: adminRoleRoleDeviceWebuiMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiMonitor",
    },
    network: {
      value: adminRoleRoleDeviceWebuiNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiNetwork",
    },
    objects: {
      value: adminRoleRoleDeviceWebuiObjectsToHclTerraform(struct!.objects),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiObjects",
    },
    operations: {
      value: adminRoleRoleDeviceWebuiOperationsToHclTerraform(struct!.operations),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiOperations",
    },
    policies: {
      value: adminRoleRoleDeviceWebuiPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiPolicies",
    },
    privacy: {
      value: adminRoleRoleDeviceWebuiPrivacyToHclTerraform(struct!.privacy),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiPrivacy",
    },
    save: {
      value: adminRoleRoleDeviceWebuiSaveToHclTerraform(struct!.save),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebuiSave",
    },
    tasks: {
      value: cdktf.stringToHclTerraform(struct!.tasks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate: {
      value: cdktf.stringToHclTerraform(struct!.validate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceWebuiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceWebui | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acc !== undefined) {
      hasAnyValues = true;
      internalValueResult.acc = this._acc;
    }
    if (this._commit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit?.internalValue;
    }
    if (this._dashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard;
    }
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    if (this._global?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.global = this._global?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._privacy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacy = this._privacy?.internalValue;
    }
    if (this._save?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.save = this._save?.internalValue;
    }
    if (this._tasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks;
    }
    if (this._validate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceWebui | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acc = undefined;
      this._commit.internalValue = undefined;
      this._dashboard = undefined;
      this._device.internalValue = undefined;
      this._global.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._network.internalValue = undefined;
      this._objects.internalValue = undefined;
      this._operations.internalValue = undefined;
      this._policies.internalValue = undefined;
      this._privacy.internalValue = undefined;
      this._save.internalValue = undefined;
      this._tasks = undefined;
      this._validate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acc = value.acc;
      this._commit.internalValue = value.commit;
      this._dashboard = value.dashboard;
      this._device.internalValue = value.device;
      this._global.internalValue = value.global;
      this._monitor.internalValue = value.monitor;
      this._network.internalValue = value.network;
      this._objects.internalValue = value.objects;
      this._operations.internalValue = value.operations;
      this._policies.internalValue = value.policies;
      this._privacy.internalValue = value.privacy;
      this._save.internalValue = value.save;
      this._tasks = value.tasks;
      this._validate = value.validate;
    }
  }

  // acc - computed: false, optional: true, required: false
  private _acc?: string; 
  public get acc() {
    return this.getStringAttribute('acc');
  }
  public set acc(value: string) {
    this._acc = value;
  }
  public resetAcc() {
    this._acc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accInput() {
    return this._acc;
  }

  // commit - computed: false, optional: true, required: false
  private _commit = new AdminRoleRoleDeviceWebuiCommitOutputReference(this, "commit");
  public get commit() {
    return this._commit;
  }
  public putCommit(value: AdminRoleRoleDeviceWebuiCommit) {
    this._commit.internalValue = value;
  }
  public resetCommit() {
    this._commit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit.internalValue;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard?: string; 
  public get dashboard() {
    return this.getStringAttribute('dashboard');
  }
  public set dashboard(value: string) {
    this._dashboard = value;
  }
  public resetDashboard() {
    this._dashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard;
  }

  // device - computed: false, optional: true, required: false
  private _device = new AdminRoleRoleDeviceWebuiDeviceOutputReference(this, "device");
  public get device() {
    return this._device;
  }
  public putDevice(value: AdminRoleRoleDeviceWebuiDevice) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // global - computed: false, optional: true, required: false
  private _global = new AdminRoleRoleDeviceWebuiGlobalOutputReference(this, "global");
  public get global() {
    return this._global;
  }
  public putGlobal(value: AdminRoleRoleDeviceWebuiGlobal) {
    this._global.internalValue = value;
  }
  public resetGlobal() {
    this._global.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInput() {
    return this._global.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new AdminRoleRoleDeviceWebuiMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: AdminRoleRoleDeviceWebuiMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new AdminRoleRoleDeviceWebuiNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: AdminRoleRoleDeviceWebuiNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new AdminRoleRoleDeviceWebuiObjectsOutputReference(this, "objects");
  public get objects() {
    return this._objects;
  }
  public putObjects(value: AdminRoleRoleDeviceWebuiObjects) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new AdminRoleRoleDeviceWebuiOperationsOutputReference(this, "operations");
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AdminRoleRoleDeviceWebuiOperations) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new AdminRoleRoleDeviceWebuiPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: AdminRoleRoleDeviceWebuiPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // privacy - computed: false, optional: true, required: false
  private _privacy = new AdminRoleRoleDeviceWebuiPrivacyOutputReference(this, "privacy");
  public get privacy() {
    return this._privacy;
  }
  public putPrivacy(value: AdminRoleRoleDeviceWebuiPrivacy) {
    this._privacy.internalValue = value;
  }
  public resetPrivacy() {
    this._privacy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy.internalValue;
  }

  // save - computed: false, optional: true, required: false
  private _save = new AdminRoleRoleDeviceWebuiSaveOutputReference(this, "save");
  public get save() {
    return this._save;
  }
  public putSave(value: AdminRoleRoleDeviceWebuiSave) {
    this._save.internalValue = value;
  }
  public resetSave() {
    this._save.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInput() {
    return this._save.internalValue;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks?: string; 
  public get tasks() {
    return this.getStringAttribute('tasks');
  }
  public set tasks(value: string) {
    this._tasks = value;
  }
  public resetTasks() {
    this._tasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: string; 
  public get validate() {
    return this.getStringAttribute('validate');
  }
  public set validate(value: string) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }
}
export interface AdminRoleRoleDeviceXmlapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#commit AdminRole#commit}
  */
  readonly commit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#config AdminRole#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#export AdminRole#export}
  */
  readonly export?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#import AdminRole#import}
  */
  readonly import?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#iot AdminRole#iot}
  */
  readonly iot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log AdminRole#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#op AdminRole#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#report AdminRole#report}
  */
  readonly report?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#user_id AdminRole#user_id}
  */
  readonly userId?: string;
}

export function adminRoleRoleDeviceXmlapiToTerraform(struct?: AdminRoleRoleDeviceXmlapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit: cdktf.stringToTerraform(struct!.commit),
    config: cdktf.stringToTerraform(struct!.config),
    export: cdktf.stringToTerraform(struct!.export),
    import: cdktf.stringToTerraform(struct!.import),
    iot: cdktf.stringToTerraform(struct!.iot),
    log: cdktf.stringToTerraform(struct!.log),
    op: cdktf.stringToTerraform(struct!.op),
    report: cdktf.stringToTerraform(struct!.report),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function adminRoleRoleDeviceXmlapiToHclTerraform(struct?: AdminRoleRoleDeviceXmlapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export: {
      value: cdktf.stringToHclTerraform(struct!.export),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import: {
      value: cdktf.stringToHclTerraform(struct!.import),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iot: {
      value: cdktf.stringToHclTerraform(struct!.iot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report: {
      value: cdktf.stringToHclTerraform(struct!.report),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceXmlapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDeviceXmlapi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._export !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export;
    }
    if (this._import !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import;
    }
    if (this._iot !== undefined) {
      hasAnyValues = true;
      internalValueResult.iot = this._iot;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._report !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDeviceXmlapi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commit = undefined;
      this._config = undefined;
      this._export = undefined;
      this._import = undefined;
      this._iot = undefined;
      this._log = undefined;
      this._op = undefined;
      this._report = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commit = value.commit;
      this._config = value.config;
      this._export = value.export;
      this._import = value.import;
      this._iot = value.iot;
      this._log = value.log;
      this._op = value.op;
      this._report = value.report;
      this._userId = value.userId;
    }
  }

  // commit - computed: false, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // export - computed: false, optional: true, required: false
  private _export?: string; 
  public get export() {
    return this.getStringAttribute('export');
  }
  public set export(value: string) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
  }

  // import - computed: false, optional: true, required: false
  private _import?: string; 
  public get import() {
    return this.getStringAttribute('import');
  }
  public set import(value: string) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // iot - computed: false, optional: true, required: false
  private _iot?: string; 
  public get iot() {
    return this.getStringAttribute('iot');
  }
  public set iot(value: string) {
    this._iot = value;
  }
  public resetIot() {
    this._iot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotInput() {
    return this._iot;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // report - computed: false, optional: true, required: false
  private _report?: string; 
  public get report() {
    return this.getStringAttribute('report');
  }
  public set report(value: string) {
    this._report = value;
  }
  public resetReport() {
    this._report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface AdminRoleRoleDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#cli AdminRole#cli}
  */
  readonly cli?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#restapi AdminRole#restapi}
  */
  readonly restapi?: AdminRoleRoleDeviceRestapi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#webui AdminRole#webui}
  */
  readonly webui?: AdminRoleRoleDeviceWebui;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#xmlapi AdminRole#xmlapi}
  */
  readonly xmlapi?: AdminRoleRoleDeviceXmlapi;
}

export function adminRoleRoleDeviceToTerraform(struct?: AdminRoleRoleDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli: cdktf.stringToTerraform(struct!.cli),
    restapi: adminRoleRoleDeviceRestapiToTerraform(struct!.restapi),
    webui: adminRoleRoleDeviceWebuiToTerraform(struct!.webui),
    xmlapi: adminRoleRoleDeviceXmlapiToTerraform(struct!.xmlapi),
  }
}


export function adminRoleRoleDeviceToHclTerraform(struct?: AdminRoleRoleDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli: {
      value: cdktf.stringToHclTerraform(struct!.cli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restapi: {
      value: adminRoleRoleDeviceRestapiToHclTerraform(struct!.restapi),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceRestapi",
    },
    webui: {
      value: adminRoleRoleDeviceWebuiToHclTerraform(struct!.webui),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceWebui",
    },
    xmlapi: {
      value: adminRoleRoleDeviceXmlapiToHclTerraform(struct!.xmlapi),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDeviceXmlapi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cli = this._cli;
    }
    if (this._restapi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restapi = this._restapi?.internalValue;
    }
    if (this._webui?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webui = this._webui?.internalValue;
    }
    if (this._xmlapi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlapi = this._xmlapi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cli = undefined;
      this._restapi.internalValue = undefined;
      this._webui.internalValue = undefined;
      this._xmlapi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cli = value.cli;
      this._restapi.internalValue = value.restapi;
      this._webui.internalValue = value.webui;
      this._xmlapi.internalValue = value.xmlapi;
    }
  }

  // cli - computed: false, optional: true, required: false
  private _cli?: string; 
  public get cli() {
    return this.getStringAttribute('cli');
  }
  public set cli(value: string) {
    this._cli = value;
  }
  public resetCli() {
    this._cli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliInput() {
    return this._cli;
  }

  // restapi - computed: false, optional: true, required: false
  private _restapi = new AdminRoleRoleDeviceRestapiOutputReference(this, "restapi");
  public get restapi() {
    return this._restapi;
  }
  public putRestapi(value: AdminRoleRoleDeviceRestapi) {
    this._restapi.internalValue = value;
  }
  public resetRestapi() {
    this._restapi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restapiInput() {
    return this._restapi.internalValue;
  }

  // webui - computed: false, optional: true, required: false
  private _webui = new AdminRoleRoleDeviceWebuiOutputReference(this, "webui");
  public get webui() {
    return this._webui;
  }
  public putWebui(value: AdminRoleRoleDeviceWebui) {
    this._webui.internalValue = value;
  }
  public resetWebui() {
    this._webui.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webuiInput() {
    return this._webui.internalValue;
  }

  // xmlapi - computed: false, optional: true, required: false
  private _xmlapi = new AdminRoleRoleDeviceXmlapiOutputReference(this, "xmlapi");
  public get xmlapi() {
    return this._xmlapi;
  }
  public putXmlapi(value: AdminRoleRoleDeviceXmlapi) {
    this._xmlapi.internalValue = value;
  }
  public resetXmlapi() {
    this._xmlapi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlapiInput() {
    return this._xmlapi.internalValue;
  }
}
export interface AdminRoleRoleVsysRestapiDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#email_server_profiles AdminRole#email_server_profiles}
  */
  readonly emailServerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#http_server_profiles AdminRole#http_server_profiles}
  */
  readonly httpServerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ldap_server_profiles AdminRole#ldap_server_profiles}
  */
  readonly ldapServerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log_interface_setting AdminRole#log_interface_setting}
  */
  readonly logInterfaceSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#snmp_trap_server_profiles AdminRole#snmp_trap_server_profiles}
  */
  readonly snmpTrapServerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#syslog_server_profiles AdminRole#syslog_server_profiles}
  */
  readonly syslogServerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#virtual_systems AdminRole#virtual_systems}
  */
  readonly virtualSystems?: string;
}

export function adminRoleRoleVsysRestapiDeviceToTerraform(struct?: AdminRoleRoleVsysRestapiDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_server_profiles: cdktf.stringToTerraform(struct!.emailServerProfiles),
    http_server_profiles: cdktf.stringToTerraform(struct!.httpServerProfiles),
    ldap_server_profiles: cdktf.stringToTerraform(struct!.ldapServerProfiles),
    log_interface_setting: cdktf.stringToTerraform(struct!.logInterfaceSetting),
    snmp_trap_server_profiles: cdktf.stringToTerraform(struct!.snmpTrapServerProfiles),
    syslog_server_profiles: cdktf.stringToTerraform(struct!.syslogServerProfiles),
    virtual_systems: cdktf.stringToTerraform(struct!.virtualSystems),
  }
}


export function adminRoleRoleVsysRestapiDeviceToHclTerraform(struct?: AdminRoleRoleVsysRestapiDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_server_profiles: {
      value: cdktf.stringToHclTerraform(struct!.emailServerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_server_profiles: {
      value: cdktf.stringToHclTerraform(struct!.httpServerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_server_profiles: {
      value: cdktf.stringToHclTerraform(struct!.ldapServerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_interface_setting: {
      value: cdktf.stringToHclTerraform(struct!.logInterfaceSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_trap_server_profiles: {
      value: cdktf.stringToHclTerraform(struct!.snmpTrapServerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_server_profiles: {
      value: cdktf.stringToHclTerraform(struct!.syslogServerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_systems: {
      value: cdktf.stringToHclTerraform(struct!.virtualSystems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysRestapiDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysRestapiDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailServerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailServerProfiles = this._emailServerProfiles;
    }
    if (this._httpServerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpServerProfiles = this._httpServerProfiles;
    }
    if (this._ldapServerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapServerProfiles = this._ldapServerProfiles;
    }
    if (this._logInterfaceSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.logInterfaceSetting = this._logInterfaceSetting;
    }
    if (this._snmpTrapServerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpTrapServerProfiles = this._snmpTrapServerProfiles;
    }
    if (this._syslogServerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogServerProfiles = this._syslogServerProfiles;
    }
    if (this._virtualSystems !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSystems = this._virtualSystems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysRestapiDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailServerProfiles = undefined;
      this._httpServerProfiles = undefined;
      this._ldapServerProfiles = undefined;
      this._logInterfaceSetting = undefined;
      this._snmpTrapServerProfiles = undefined;
      this._syslogServerProfiles = undefined;
      this._virtualSystems = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailServerProfiles = value.emailServerProfiles;
      this._httpServerProfiles = value.httpServerProfiles;
      this._ldapServerProfiles = value.ldapServerProfiles;
      this._logInterfaceSetting = value.logInterfaceSetting;
      this._snmpTrapServerProfiles = value.snmpTrapServerProfiles;
      this._syslogServerProfiles = value.syslogServerProfiles;
      this._virtualSystems = value.virtualSystems;
    }
  }

  // email_server_profiles - computed: false, optional: true, required: false
  private _emailServerProfiles?: string; 
  public get emailServerProfiles() {
    return this.getStringAttribute('email_server_profiles');
  }
  public set emailServerProfiles(value: string) {
    this._emailServerProfiles = value;
  }
  public resetEmailServerProfiles() {
    this._emailServerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailServerProfilesInput() {
    return this._emailServerProfiles;
  }

  // http_server_profiles - computed: false, optional: true, required: false
  private _httpServerProfiles?: string; 
  public get httpServerProfiles() {
    return this.getStringAttribute('http_server_profiles');
  }
  public set httpServerProfiles(value: string) {
    this._httpServerProfiles = value;
  }
  public resetHttpServerProfiles() {
    this._httpServerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServerProfilesInput() {
    return this._httpServerProfiles;
  }

  // ldap_server_profiles - computed: false, optional: true, required: false
  private _ldapServerProfiles?: string; 
  public get ldapServerProfiles() {
    return this.getStringAttribute('ldap_server_profiles');
  }
  public set ldapServerProfiles(value: string) {
    this._ldapServerProfiles = value;
  }
  public resetLdapServerProfiles() {
    this._ldapServerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerProfilesInput() {
    return this._ldapServerProfiles;
  }

  // log_interface_setting - computed: false, optional: true, required: false
  private _logInterfaceSetting?: string; 
  public get logInterfaceSetting() {
    return this.getStringAttribute('log_interface_setting');
  }
  public set logInterfaceSetting(value: string) {
    this._logInterfaceSetting = value;
  }
  public resetLogInterfaceSetting() {
    this._logInterfaceSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInterfaceSettingInput() {
    return this._logInterfaceSetting;
  }

  // snmp_trap_server_profiles - computed: false, optional: true, required: false
  private _snmpTrapServerProfiles?: string; 
  public get snmpTrapServerProfiles() {
    return this.getStringAttribute('snmp_trap_server_profiles');
  }
  public set snmpTrapServerProfiles(value: string) {
    this._snmpTrapServerProfiles = value;
  }
  public resetSnmpTrapServerProfiles() {
    this._snmpTrapServerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapServerProfilesInput() {
    return this._snmpTrapServerProfiles;
  }

  // syslog_server_profiles - computed: false, optional: true, required: false
  private _syslogServerProfiles?: string; 
  public get syslogServerProfiles() {
    return this.getStringAttribute('syslog_server_profiles');
  }
  public set syslogServerProfiles(value: string) {
    this._syslogServerProfiles = value;
  }
  public resetSyslogServerProfiles() {
    this._syslogServerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerProfilesInput() {
    return this._syslogServerProfiles;
  }

  // virtual_systems - computed: false, optional: true, required: false
  private _virtualSystems?: string; 
  public get virtualSystems() {
    return this.getStringAttribute('virtual_systems');
  }
  public set virtualSystems(value: string) {
    this._virtualSystems = value;
  }
  public resetVirtualSystems() {
    this._virtualSystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSystemsInput() {
    return this._virtualSystems;
  }
}
export interface AdminRoleRoleVsysRestapiNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_clientless_app_groups AdminRole#globalprotect_clientless_app_groups}
  */
  readonly globalprotectClientlessAppGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_clientless_apps AdminRole#globalprotect_clientless_apps}
  */
  readonly globalprotectClientlessApps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_gateways AdminRole#globalprotect_gateways}
  */
  readonly globalprotectGateways?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_mdm_servers AdminRole#globalprotect_mdm_servers}
  */
  readonly globalprotectMdmServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_portals AdminRole#globalprotect_portals}
  */
  readonly globalprotectPortals?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_interface_profiles AdminRole#sdwan_interface_profiles}
  */
  readonly sdwanInterfaceProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#zones AdminRole#zones}
  */
  readonly zones?: string;
}

export function adminRoleRoleVsysRestapiNetworkToTerraform(struct?: AdminRoleRoleVsysRestapiNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    globalprotect_clientless_app_groups: cdktf.stringToTerraform(struct!.globalprotectClientlessAppGroups),
    globalprotect_clientless_apps: cdktf.stringToTerraform(struct!.globalprotectClientlessApps),
    globalprotect_gateways: cdktf.stringToTerraform(struct!.globalprotectGateways),
    globalprotect_mdm_servers: cdktf.stringToTerraform(struct!.globalprotectMdmServers),
    globalprotect_portals: cdktf.stringToTerraform(struct!.globalprotectPortals),
    sdwan_interface_profiles: cdktf.stringToTerraform(struct!.sdwanInterfaceProfiles),
    zones: cdktf.stringToTerraform(struct!.zones),
  }
}


export function adminRoleRoleVsysRestapiNetworkToHclTerraform(struct?: AdminRoleRoleVsysRestapiNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    globalprotect_clientless_app_groups: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectClientlessAppGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_clientless_apps: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectClientlessApps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_gateways: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectGateways),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_mdm_servers: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectMdmServers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_portals: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectPortals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_interface_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaceProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.stringToHclTerraform(struct!.zones),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysRestapiNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysRestapiNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalprotectClientlessAppGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectClientlessAppGroups = this._globalprotectClientlessAppGroups;
    }
    if (this._globalprotectClientlessApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectClientlessApps = this._globalprotectClientlessApps;
    }
    if (this._globalprotectGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectGateways = this._globalprotectGateways;
    }
    if (this._globalprotectMdmServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectMdmServers = this._globalprotectMdmServers;
    }
    if (this._globalprotectPortals !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectPortals = this._globalprotectPortals;
    }
    if (this._sdwanInterfaceProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaceProfiles = this._sdwanInterfaceProfiles;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysRestapiNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalprotectClientlessAppGroups = undefined;
      this._globalprotectClientlessApps = undefined;
      this._globalprotectGateways = undefined;
      this._globalprotectMdmServers = undefined;
      this._globalprotectPortals = undefined;
      this._sdwanInterfaceProfiles = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalprotectClientlessAppGroups = value.globalprotectClientlessAppGroups;
      this._globalprotectClientlessApps = value.globalprotectClientlessApps;
      this._globalprotectGateways = value.globalprotectGateways;
      this._globalprotectMdmServers = value.globalprotectMdmServers;
      this._globalprotectPortals = value.globalprotectPortals;
      this._sdwanInterfaceProfiles = value.sdwanInterfaceProfiles;
      this._zones = value.zones;
    }
  }

  // globalprotect_clientless_app_groups - computed: false, optional: true, required: false
  private _globalprotectClientlessAppGroups?: string; 
  public get globalprotectClientlessAppGroups() {
    return this.getStringAttribute('globalprotect_clientless_app_groups');
  }
  public set globalprotectClientlessAppGroups(value: string) {
    this._globalprotectClientlessAppGroups = value;
  }
  public resetGlobalprotectClientlessAppGroups() {
    this._globalprotectClientlessAppGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectClientlessAppGroupsInput() {
    return this._globalprotectClientlessAppGroups;
  }

  // globalprotect_clientless_apps - computed: false, optional: true, required: false
  private _globalprotectClientlessApps?: string; 
  public get globalprotectClientlessApps() {
    return this.getStringAttribute('globalprotect_clientless_apps');
  }
  public set globalprotectClientlessApps(value: string) {
    this._globalprotectClientlessApps = value;
  }
  public resetGlobalprotectClientlessApps() {
    this._globalprotectClientlessApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectClientlessAppsInput() {
    return this._globalprotectClientlessApps;
  }

  // globalprotect_gateways - computed: false, optional: true, required: false
  private _globalprotectGateways?: string; 
  public get globalprotectGateways() {
    return this.getStringAttribute('globalprotect_gateways');
  }
  public set globalprotectGateways(value: string) {
    this._globalprotectGateways = value;
  }
  public resetGlobalprotectGateways() {
    this._globalprotectGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectGatewaysInput() {
    return this._globalprotectGateways;
  }

  // globalprotect_mdm_servers - computed: false, optional: true, required: false
  private _globalprotectMdmServers?: string; 
  public get globalprotectMdmServers() {
    return this.getStringAttribute('globalprotect_mdm_servers');
  }
  public set globalprotectMdmServers(value: string) {
    this._globalprotectMdmServers = value;
  }
  public resetGlobalprotectMdmServers() {
    this._globalprotectMdmServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectMdmServersInput() {
    return this._globalprotectMdmServers;
  }

  // globalprotect_portals - computed: false, optional: true, required: false
  private _globalprotectPortals?: string; 
  public get globalprotectPortals() {
    return this.getStringAttribute('globalprotect_portals');
  }
  public set globalprotectPortals(value: string) {
    this._globalprotectPortals = value;
  }
  public resetGlobalprotectPortals() {
    this._globalprotectPortals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectPortalsInput() {
    return this._globalprotectPortals;
  }

  // sdwan_interface_profiles - computed: false, optional: true, required: false
  private _sdwanInterfaceProfiles?: string; 
  public get sdwanInterfaceProfiles() {
    return this.getStringAttribute('sdwan_interface_profiles');
  }
  public set sdwanInterfaceProfiles(value: string) {
    this._sdwanInterfaceProfiles = value;
  }
  public resetSdwanInterfaceProfiles() {
    this._sdwanInterfaceProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfaceProfilesInput() {
    return this._sdwanInterfaceProfiles;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string; 
  public get zones() {
    return this.getStringAttribute('zones');
  }
  public set zones(value: string) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface AdminRoleRoleVsysRestapiObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#address_groups AdminRole#address_groups}
  */
  readonly addressGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#addresses AdminRole#addresses}
  */
  readonly addresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#anti_spyware_security_profiles AdminRole#anti_spyware_security_profiles}
  */
  readonly antiSpywareSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#antivirus_security_profiles AdminRole#antivirus_security_profiles}
  */
  readonly antivirusSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_filters AdminRole#application_filters}
  */
  readonly applicationFilters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_groups AdminRole#application_groups}
  */
  readonly applicationGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#applications AdminRole#applications}
  */
  readonly applications?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication_enforcements AdminRole#authentication_enforcements}
  */
  readonly authenticationEnforcements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_data_patterns AdminRole#custom_data_patterns}
  */
  readonly customDataPatterns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_spyware_signatures AdminRole#custom_spyware_signatures}
  */
  readonly customSpywareSignatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_url_categories AdminRole#custom_url_categories}
  */
  readonly customUrlCategories?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_vulnerability_signatures AdminRole#custom_vulnerability_signatures}
  */
  readonly customVulnerabilitySignatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_filtering_security_profiles AdminRole#data_filtering_security_profiles}
  */
  readonly dataFilteringSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption_profiles AdminRole#decryption_profiles}
  */
  readonly decryptionProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#devices AdminRole#devices}
  */
  readonly devices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dos_protection_security_profiles AdminRole#dos_protection_security_profiles}
  */
  readonly dosProtectionSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dynamic_user_groups AdminRole#dynamic_user_groups}
  */
  readonly dynamicUserGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#external_dynamic_lists AdminRole#external_dynamic_lists}
  */
  readonly externalDynamicLists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#file_blocking_security_profiles AdminRole#file_blocking_security_profiles}
  */
  readonly fileBlockingSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_hip_objects AdminRole#globalprotect_hip_objects}
  */
  readonly globalprotectHipObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect_hip_profiles AdminRole#globalprotect_hip_profiles}
  */
  readonly globalprotectHipProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp_protection_security_profiles AdminRole#gtp_protection_security_profiles}
  */
  readonly gtpProtectionSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log_forwarding_profiles AdminRole#log_forwarding_profiles}
  */
  readonly logForwardingProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#packet_broker_profiles AdminRole#packet_broker_profiles}
  */
  readonly packetBrokerProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#regions AdminRole#regions}
  */
  readonly regions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#schedules AdminRole#schedules}
  */
  readonly schedules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp_protection_security_profiles AdminRole#sctp_protection_security_profiles}
  */
  readonly sctpProtectionSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_error_correction_profiles AdminRole#sdwan_error_correction_profiles}
  */
  readonly sdwanErrorCorrectionProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_path_quality_profiles AdminRole#sdwan_path_quality_profiles}
  */
  readonly sdwanPathQualityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_saas_quality_profiles AdminRole#sdwan_saas_quality_profiles}
  */
  readonly sdwanSaasQualityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_traffic_distribution_profiles AdminRole#sdwan_traffic_distribution_profiles}
  */
  readonly sdwanTrafficDistributionProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#security_profile_groups AdminRole#security_profile_groups}
  */
  readonly securityProfileGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#service_groups AdminRole#service_groups}
  */
  readonly serviceGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#services AdminRole#services}
  */
  readonly services?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tags AdminRole#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_filtering_security_profiles AdminRole#url_filtering_security_profiles}
  */
  readonly urlFilteringSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vulnerability_protection_security_profiles AdminRole#vulnerability_protection_security_profiles}
  */
  readonly vulnerabilityProtectionSecurityProfiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#wildfire_analysis_security_profiles AdminRole#wildfire_analysis_security_profiles}
  */
  readonly wildfireAnalysisSecurityProfiles?: string;
}

export function adminRoleRoleVsysRestapiObjectsToTerraform(struct?: AdminRoleRoleVsysRestapiObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_groups: cdktf.stringToTerraform(struct!.addressGroups),
    addresses: cdktf.stringToTerraform(struct!.addresses),
    anti_spyware_security_profiles: cdktf.stringToTerraform(struct!.antiSpywareSecurityProfiles),
    antivirus_security_profiles: cdktf.stringToTerraform(struct!.antivirusSecurityProfiles),
    application_filters: cdktf.stringToTerraform(struct!.applicationFilters),
    application_groups: cdktf.stringToTerraform(struct!.applicationGroups),
    applications: cdktf.stringToTerraform(struct!.applications),
    authentication_enforcements: cdktf.stringToTerraform(struct!.authenticationEnforcements),
    custom_data_patterns: cdktf.stringToTerraform(struct!.customDataPatterns),
    custom_spyware_signatures: cdktf.stringToTerraform(struct!.customSpywareSignatures),
    custom_url_categories: cdktf.stringToTerraform(struct!.customUrlCategories),
    custom_vulnerability_signatures: cdktf.stringToTerraform(struct!.customVulnerabilitySignatures),
    data_filtering_security_profiles: cdktf.stringToTerraform(struct!.dataFilteringSecurityProfiles),
    decryption_profiles: cdktf.stringToTerraform(struct!.decryptionProfiles),
    devices: cdktf.stringToTerraform(struct!.devices),
    dos_protection_security_profiles: cdktf.stringToTerraform(struct!.dosProtectionSecurityProfiles),
    dynamic_user_groups: cdktf.stringToTerraform(struct!.dynamicUserGroups),
    external_dynamic_lists: cdktf.stringToTerraform(struct!.externalDynamicLists),
    file_blocking_security_profiles: cdktf.stringToTerraform(struct!.fileBlockingSecurityProfiles),
    globalprotect_hip_objects: cdktf.stringToTerraform(struct!.globalprotectHipObjects),
    globalprotect_hip_profiles: cdktf.stringToTerraform(struct!.globalprotectHipProfiles),
    gtp_protection_security_profiles: cdktf.stringToTerraform(struct!.gtpProtectionSecurityProfiles),
    log_forwarding_profiles: cdktf.stringToTerraform(struct!.logForwardingProfiles),
    packet_broker_profiles: cdktf.stringToTerraform(struct!.packetBrokerProfiles),
    regions: cdktf.stringToTerraform(struct!.regions),
    schedules: cdktf.stringToTerraform(struct!.schedules),
    sctp_protection_security_profiles: cdktf.stringToTerraform(struct!.sctpProtectionSecurityProfiles),
    sdwan_error_correction_profiles: cdktf.stringToTerraform(struct!.sdwanErrorCorrectionProfiles),
    sdwan_path_quality_profiles: cdktf.stringToTerraform(struct!.sdwanPathQualityProfiles),
    sdwan_saas_quality_profiles: cdktf.stringToTerraform(struct!.sdwanSaasQualityProfiles),
    sdwan_traffic_distribution_profiles: cdktf.stringToTerraform(struct!.sdwanTrafficDistributionProfiles),
    security_profile_groups: cdktf.stringToTerraform(struct!.securityProfileGroups),
    service_groups: cdktf.stringToTerraform(struct!.serviceGroups),
    services: cdktf.stringToTerraform(struct!.services),
    tags: cdktf.stringToTerraform(struct!.tags),
    url_filtering_security_profiles: cdktf.stringToTerraform(struct!.urlFilteringSecurityProfiles),
    vulnerability_protection_security_profiles: cdktf.stringToTerraform(struct!.vulnerabilityProtectionSecurityProfiles),
    wildfire_analysis_security_profiles: cdktf.stringToTerraform(struct!.wildfireAnalysisSecurityProfiles),
  }
}


export function adminRoleRoleVsysRestapiObjectsToHclTerraform(struct?: AdminRoleRoleVsysRestapiObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_groups: {
      value: cdktf.stringToHclTerraform(struct!.addressGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addresses: {
      value: cdktf.stringToHclTerraform(struct!.addresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anti_spyware_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.antiSpywareSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    antivirus_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.antivirusSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_filters: {
      value: cdktf.stringToHclTerraform(struct!.applicationFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_groups: {
      value: cdktf.stringToHclTerraform(struct!.applicationGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applications: {
      value: cdktf.stringToHclTerraform(struct!.applications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_enforcements: {
      value: cdktf.stringToHclTerraform(struct!.authenticationEnforcements),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_data_patterns: {
      value: cdktf.stringToHclTerraform(struct!.customDataPatterns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_spyware_signatures: {
      value: cdktf.stringToHclTerraform(struct!.customSpywareSignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_url_categories: {
      value: cdktf.stringToHclTerraform(struct!.customUrlCategories),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_vulnerability_signatures: {
      value: cdktf.stringToHclTerraform(struct!.customVulnerabilitySignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_filtering_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.dataFilteringSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_profiles: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devices: {
      value: cdktf.stringToHclTerraform(struct!.devices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_protection_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.dosProtectionSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_user_groups: {
      value: cdktf.stringToHclTerraform(struct!.dynamicUserGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_dynamic_lists: {
      value: cdktf.stringToHclTerraform(struct!.externalDynamicLists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_blocking_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.fileBlockingSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_hip_objects: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectHipObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect_hip_profiles: {
      value: cdktf.stringToHclTerraform(struct!.globalprotectHipProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_protection_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.gtpProtectionSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_forwarding_profiles: {
      value: cdktf.stringToHclTerraform(struct!.logForwardingProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_broker_profiles: {
      value: cdktf.stringToHclTerraform(struct!.packetBrokerProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.stringToHclTerraform(struct!.regions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedules: {
      value: cdktf.stringToHclTerraform(struct!.schedules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_protection_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sctpProtectionSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_error_correction_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sdwanErrorCorrectionProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_path_quality_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sdwanPathQualityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_saas_quality_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sdwanSaasQualityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_traffic_distribution_profiles: {
      value: cdktf.stringToHclTerraform(struct!.sdwanTrafficDistributionProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_profile_groups: {
      value: cdktf.stringToHclTerraform(struct!.securityProfileGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_groups: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_filtering_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.urlFilteringSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerability_protection_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.vulnerabilityProtectionSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire_analysis_security_profiles: {
      value: cdktf.stringToHclTerraform(struct!.wildfireAnalysisSecurityProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysRestapiObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysRestapiObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressGroups = this._addressGroups;
    }
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._antiSpywareSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpywareSecurityProfiles = this._antiSpywareSecurityProfiles;
    }
    if (this._antivirusSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.antivirusSecurityProfiles = this._antivirusSecurityProfiles;
    }
    if (this._applicationFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationFilters = this._applicationFilters;
    }
    if (this._applicationGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationGroups = this._applicationGroups;
    }
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._authenticationEnforcements !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationEnforcements = this._authenticationEnforcements;
    }
    if (this._customDataPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDataPatterns = this._customDataPatterns;
    }
    if (this._customSpywareSignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSpywareSignatures = this._customSpywareSignatures;
    }
    if (this._customUrlCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUrlCategories = this._customUrlCategories;
    }
    if (this._customVulnerabilitySignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVulnerabilitySignatures = this._customVulnerabilitySignatures;
    }
    if (this._dataFilteringSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFilteringSecurityProfiles = this._dataFilteringSecurityProfiles;
    }
    if (this._decryptionProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProfiles = this._decryptionProfiles;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._dosProtectionSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosProtectionSecurityProfiles = this._dosProtectionSecurityProfiles;
    }
    if (this._dynamicUserGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicUserGroups = this._dynamicUserGroups;
    }
    if (this._externalDynamicLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDynamicLists = this._externalDynamicLists;
    }
    if (this._fileBlockingSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlockingSecurityProfiles = this._fileBlockingSecurityProfiles;
    }
    if (this._globalprotectHipObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectHipObjects = this._globalprotectHipObjects;
    }
    if (this._globalprotectHipProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotectHipProfiles = this._globalprotectHipProfiles;
    }
    if (this._gtpProtectionSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpProtectionSecurityProfiles = this._gtpProtectionSecurityProfiles;
    }
    if (this._logForwardingProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.logForwardingProfiles = this._logForwardingProfiles;
    }
    if (this._packetBrokerProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBrokerProfiles = this._packetBrokerProfiles;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._schedules !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules;
    }
    if (this._sctpProtectionSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpProtectionSecurityProfiles = this._sctpProtectionSecurityProfiles;
    }
    if (this._sdwanErrorCorrectionProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanErrorCorrectionProfiles = this._sdwanErrorCorrectionProfiles;
    }
    if (this._sdwanPathQualityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanPathQualityProfiles = this._sdwanPathQualityProfiles;
    }
    if (this._sdwanSaasQualityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanSaasQualityProfiles = this._sdwanSaasQualityProfiles;
    }
    if (this._sdwanTrafficDistributionProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanTrafficDistributionProfiles = this._sdwanTrafficDistributionProfiles;
    }
    if (this._securityProfileGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfileGroups = this._securityProfileGroups;
    }
    if (this._serviceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroups = this._serviceGroups;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._urlFilteringSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFilteringSecurityProfiles = this._urlFilteringSecurityProfiles;
    }
    if (this._vulnerabilityProtectionSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityProtectionSecurityProfiles = this._vulnerabilityProtectionSecurityProfiles;
    }
    if (this._wildfireAnalysisSecurityProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireAnalysisSecurityProfiles = this._wildfireAnalysisSecurityProfiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysRestapiObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressGroups = undefined;
      this._addresses = undefined;
      this._antiSpywareSecurityProfiles = undefined;
      this._antivirusSecurityProfiles = undefined;
      this._applicationFilters = undefined;
      this._applicationGroups = undefined;
      this._applications = undefined;
      this._authenticationEnforcements = undefined;
      this._customDataPatterns = undefined;
      this._customSpywareSignatures = undefined;
      this._customUrlCategories = undefined;
      this._customVulnerabilitySignatures = undefined;
      this._dataFilteringSecurityProfiles = undefined;
      this._decryptionProfiles = undefined;
      this._devices = undefined;
      this._dosProtectionSecurityProfiles = undefined;
      this._dynamicUserGroups = undefined;
      this._externalDynamicLists = undefined;
      this._fileBlockingSecurityProfiles = undefined;
      this._globalprotectHipObjects = undefined;
      this._globalprotectHipProfiles = undefined;
      this._gtpProtectionSecurityProfiles = undefined;
      this._logForwardingProfiles = undefined;
      this._packetBrokerProfiles = undefined;
      this._regions = undefined;
      this._schedules = undefined;
      this._sctpProtectionSecurityProfiles = undefined;
      this._sdwanErrorCorrectionProfiles = undefined;
      this._sdwanPathQualityProfiles = undefined;
      this._sdwanSaasQualityProfiles = undefined;
      this._sdwanTrafficDistributionProfiles = undefined;
      this._securityProfileGroups = undefined;
      this._serviceGroups = undefined;
      this._services = undefined;
      this._tags = undefined;
      this._urlFilteringSecurityProfiles = undefined;
      this._vulnerabilityProtectionSecurityProfiles = undefined;
      this._wildfireAnalysisSecurityProfiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressGroups = value.addressGroups;
      this._addresses = value.addresses;
      this._antiSpywareSecurityProfiles = value.antiSpywareSecurityProfiles;
      this._antivirusSecurityProfiles = value.antivirusSecurityProfiles;
      this._applicationFilters = value.applicationFilters;
      this._applicationGroups = value.applicationGroups;
      this._applications = value.applications;
      this._authenticationEnforcements = value.authenticationEnforcements;
      this._customDataPatterns = value.customDataPatterns;
      this._customSpywareSignatures = value.customSpywareSignatures;
      this._customUrlCategories = value.customUrlCategories;
      this._customVulnerabilitySignatures = value.customVulnerabilitySignatures;
      this._dataFilteringSecurityProfiles = value.dataFilteringSecurityProfiles;
      this._decryptionProfiles = value.decryptionProfiles;
      this._devices = value.devices;
      this._dosProtectionSecurityProfiles = value.dosProtectionSecurityProfiles;
      this._dynamicUserGroups = value.dynamicUserGroups;
      this._externalDynamicLists = value.externalDynamicLists;
      this._fileBlockingSecurityProfiles = value.fileBlockingSecurityProfiles;
      this._globalprotectHipObjects = value.globalprotectHipObjects;
      this._globalprotectHipProfiles = value.globalprotectHipProfiles;
      this._gtpProtectionSecurityProfiles = value.gtpProtectionSecurityProfiles;
      this._logForwardingProfiles = value.logForwardingProfiles;
      this._packetBrokerProfiles = value.packetBrokerProfiles;
      this._regions = value.regions;
      this._schedules = value.schedules;
      this._sctpProtectionSecurityProfiles = value.sctpProtectionSecurityProfiles;
      this._sdwanErrorCorrectionProfiles = value.sdwanErrorCorrectionProfiles;
      this._sdwanPathQualityProfiles = value.sdwanPathQualityProfiles;
      this._sdwanSaasQualityProfiles = value.sdwanSaasQualityProfiles;
      this._sdwanTrafficDistributionProfiles = value.sdwanTrafficDistributionProfiles;
      this._securityProfileGroups = value.securityProfileGroups;
      this._serviceGroups = value.serviceGroups;
      this._services = value.services;
      this._tags = value.tags;
      this._urlFilteringSecurityProfiles = value.urlFilteringSecurityProfiles;
      this._vulnerabilityProtectionSecurityProfiles = value.vulnerabilityProtectionSecurityProfiles;
      this._wildfireAnalysisSecurityProfiles = value.wildfireAnalysisSecurityProfiles;
    }
  }

  // address_groups - computed: false, optional: true, required: false
  private _addressGroups?: string; 
  public get addressGroups() {
    return this.getStringAttribute('address_groups');
  }
  public set addressGroups(value: string) {
    this._addressGroups = value;
  }
  public resetAddressGroups() {
    this._addressGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupsInput() {
    return this._addressGroups;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string; 
  public get addresses() {
    return this.getStringAttribute('addresses');
  }
  public set addresses(value: string) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // anti_spyware_security_profiles - computed: false, optional: true, required: false
  private _antiSpywareSecurityProfiles?: string; 
  public get antiSpywareSecurityProfiles() {
    return this.getStringAttribute('anti_spyware_security_profiles');
  }
  public set antiSpywareSecurityProfiles(value: string) {
    this._antiSpywareSecurityProfiles = value;
  }
  public resetAntiSpywareSecurityProfiles() {
    this._antiSpywareSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpywareSecurityProfilesInput() {
    return this._antiSpywareSecurityProfiles;
  }

  // antivirus_security_profiles - computed: false, optional: true, required: false
  private _antivirusSecurityProfiles?: string; 
  public get antivirusSecurityProfiles() {
    return this.getStringAttribute('antivirus_security_profiles');
  }
  public set antivirusSecurityProfiles(value: string) {
    this._antivirusSecurityProfiles = value;
  }
  public resetAntivirusSecurityProfiles() {
    this._antivirusSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusSecurityProfilesInput() {
    return this._antivirusSecurityProfiles;
  }

  // application_filters - computed: false, optional: true, required: false
  private _applicationFilters?: string; 
  public get applicationFilters() {
    return this.getStringAttribute('application_filters');
  }
  public set applicationFilters(value: string) {
    this._applicationFilters = value;
  }
  public resetApplicationFilters() {
    this._applicationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFiltersInput() {
    return this._applicationFilters;
  }

  // application_groups - computed: false, optional: true, required: false
  private _applicationGroups?: string; 
  public get applicationGroups() {
    return this.getStringAttribute('application_groups');
  }
  public set applicationGroups(value: string) {
    this._applicationGroups = value;
  }
  public resetApplicationGroups() {
    this._applicationGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupsInput() {
    return this._applicationGroups;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string; 
  public get applications() {
    return this.getStringAttribute('applications');
  }
  public set applications(value: string) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // authentication_enforcements - computed: false, optional: true, required: false
  private _authenticationEnforcements?: string; 
  public get authenticationEnforcements() {
    return this.getStringAttribute('authentication_enforcements');
  }
  public set authenticationEnforcements(value: string) {
    this._authenticationEnforcements = value;
  }
  public resetAuthenticationEnforcements() {
    this._authenticationEnforcements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEnforcementsInput() {
    return this._authenticationEnforcements;
  }

  // custom_data_patterns - computed: false, optional: true, required: false
  private _customDataPatterns?: string; 
  public get customDataPatterns() {
    return this.getStringAttribute('custom_data_patterns');
  }
  public set customDataPatterns(value: string) {
    this._customDataPatterns = value;
  }
  public resetCustomDataPatterns() {
    this._customDataPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataPatternsInput() {
    return this._customDataPatterns;
  }

  // custom_spyware_signatures - computed: false, optional: true, required: false
  private _customSpywareSignatures?: string; 
  public get customSpywareSignatures() {
    return this.getStringAttribute('custom_spyware_signatures');
  }
  public set customSpywareSignatures(value: string) {
    this._customSpywareSignatures = value;
  }
  public resetCustomSpywareSignatures() {
    this._customSpywareSignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSpywareSignaturesInput() {
    return this._customSpywareSignatures;
  }

  // custom_url_categories - computed: false, optional: true, required: false
  private _customUrlCategories?: string; 
  public get customUrlCategories() {
    return this.getStringAttribute('custom_url_categories');
  }
  public set customUrlCategories(value: string) {
    this._customUrlCategories = value;
  }
  public resetCustomUrlCategories() {
    this._customUrlCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUrlCategoriesInput() {
    return this._customUrlCategories;
  }

  // custom_vulnerability_signatures - computed: false, optional: true, required: false
  private _customVulnerabilitySignatures?: string; 
  public get customVulnerabilitySignatures() {
    return this.getStringAttribute('custom_vulnerability_signatures');
  }
  public set customVulnerabilitySignatures(value: string) {
    this._customVulnerabilitySignatures = value;
  }
  public resetCustomVulnerabilitySignatures() {
    this._customVulnerabilitySignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVulnerabilitySignaturesInput() {
    return this._customVulnerabilitySignatures;
  }

  // data_filtering_security_profiles - computed: false, optional: true, required: false
  private _dataFilteringSecurityProfiles?: string; 
  public get dataFilteringSecurityProfiles() {
    return this.getStringAttribute('data_filtering_security_profiles');
  }
  public set dataFilteringSecurityProfiles(value: string) {
    this._dataFilteringSecurityProfiles = value;
  }
  public resetDataFilteringSecurityProfiles() {
    this._dataFilteringSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringSecurityProfilesInput() {
    return this._dataFilteringSecurityProfiles;
  }

  // decryption_profiles - computed: false, optional: true, required: false
  private _decryptionProfiles?: string; 
  public get decryptionProfiles() {
    return this.getStringAttribute('decryption_profiles');
  }
  public set decryptionProfiles(value: string) {
    this._decryptionProfiles = value;
  }
  public resetDecryptionProfiles() {
    this._decryptionProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProfilesInput() {
    return this._decryptionProfiles;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: string; 
  public get devices() {
    return this.getStringAttribute('devices');
  }
  public set devices(value: string) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // dos_protection_security_profiles - computed: false, optional: true, required: false
  private _dosProtectionSecurityProfiles?: string; 
  public get dosProtectionSecurityProfiles() {
    return this.getStringAttribute('dos_protection_security_profiles');
  }
  public set dosProtectionSecurityProfiles(value: string) {
    this._dosProtectionSecurityProfiles = value;
  }
  public resetDosProtectionSecurityProfiles() {
    this._dosProtectionSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosProtectionSecurityProfilesInput() {
    return this._dosProtectionSecurityProfiles;
  }

  // dynamic_user_groups - computed: false, optional: true, required: false
  private _dynamicUserGroups?: string; 
  public get dynamicUserGroups() {
    return this.getStringAttribute('dynamic_user_groups');
  }
  public set dynamicUserGroups(value: string) {
    this._dynamicUserGroups = value;
  }
  public resetDynamicUserGroups() {
    this._dynamicUserGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicUserGroupsInput() {
    return this._dynamicUserGroups;
  }

  // external_dynamic_lists - computed: false, optional: true, required: false
  private _externalDynamicLists?: string; 
  public get externalDynamicLists() {
    return this.getStringAttribute('external_dynamic_lists');
  }
  public set externalDynamicLists(value: string) {
    this._externalDynamicLists = value;
  }
  public resetExternalDynamicLists() {
    this._externalDynamicLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDynamicListsInput() {
    return this._externalDynamicLists;
  }

  // file_blocking_security_profiles - computed: false, optional: true, required: false
  private _fileBlockingSecurityProfiles?: string; 
  public get fileBlockingSecurityProfiles() {
    return this.getStringAttribute('file_blocking_security_profiles');
  }
  public set fileBlockingSecurityProfiles(value: string) {
    this._fileBlockingSecurityProfiles = value;
  }
  public resetFileBlockingSecurityProfiles() {
    this._fileBlockingSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockingSecurityProfilesInput() {
    return this._fileBlockingSecurityProfiles;
  }

  // globalprotect_hip_objects - computed: false, optional: true, required: false
  private _globalprotectHipObjects?: string; 
  public get globalprotectHipObjects() {
    return this.getStringAttribute('globalprotect_hip_objects');
  }
  public set globalprotectHipObjects(value: string) {
    this._globalprotectHipObjects = value;
  }
  public resetGlobalprotectHipObjects() {
    this._globalprotectHipObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectHipObjectsInput() {
    return this._globalprotectHipObjects;
  }

  // globalprotect_hip_profiles - computed: false, optional: true, required: false
  private _globalprotectHipProfiles?: string; 
  public get globalprotectHipProfiles() {
    return this.getStringAttribute('globalprotect_hip_profiles');
  }
  public set globalprotectHipProfiles(value: string) {
    this._globalprotectHipProfiles = value;
  }
  public resetGlobalprotectHipProfiles() {
    this._globalprotectHipProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectHipProfilesInput() {
    return this._globalprotectHipProfiles;
  }

  // gtp_protection_security_profiles - computed: false, optional: true, required: false
  private _gtpProtectionSecurityProfiles?: string; 
  public get gtpProtectionSecurityProfiles() {
    return this.getStringAttribute('gtp_protection_security_profiles');
  }
  public set gtpProtectionSecurityProfiles(value: string) {
    this._gtpProtectionSecurityProfiles = value;
  }
  public resetGtpProtectionSecurityProfiles() {
    this._gtpProtectionSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpProtectionSecurityProfilesInput() {
    return this._gtpProtectionSecurityProfiles;
  }

  // log_forwarding_profiles - computed: false, optional: true, required: false
  private _logForwardingProfiles?: string; 
  public get logForwardingProfiles() {
    return this.getStringAttribute('log_forwarding_profiles');
  }
  public set logForwardingProfiles(value: string) {
    this._logForwardingProfiles = value;
  }
  public resetLogForwardingProfiles() {
    this._logForwardingProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardingProfilesInput() {
    return this._logForwardingProfiles;
  }

  // packet_broker_profiles - computed: false, optional: true, required: false
  private _packetBrokerProfiles?: string; 
  public get packetBrokerProfiles() {
    return this.getStringAttribute('packet_broker_profiles');
  }
  public set packetBrokerProfiles(value: string) {
    this._packetBrokerProfiles = value;
  }
  public resetPacketBrokerProfiles() {
    this._packetBrokerProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBrokerProfilesInput() {
    return this._packetBrokerProfiles;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string; 
  public get regions() {
    return this.getStringAttribute('regions');
  }
  public set regions(value: string) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules?: string; 
  public get schedules() {
    return this.getStringAttribute('schedules');
  }
  public set schedules(value: string) {
    this._schedules = value;
  }
  public resetSchedules() {
    this._schedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules;
  }

  // sctp_protection_security_profiles - computed: false, optional: true, required: false
  private _sctpProtectionSecurityProfiles?: string; 
  public get sctpProtectionSecurityProfiles() {
    return this.getStringAttribute('sctp_protection_security_profiles');
  }
  public set sctpProtectionSecurityProfiles(value: string) {
    this._sctpProtectionSecurityProfiles = value;
  }
  public resetSctpProtectionSecurityProfiles() {
    this._sctpProtectionSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpProtectionSecurityProfilesInput() {
    return this._sctpProtectionSecurityProfiles;
  }

  // sdwan_error_correction_profiles - computed: false, optional: true, required: false
  private _sdwanErrorCorrectionProfiles?: string; 
  public get sdwanErrorCorrectionProfiles() {
    return this.getStringAttribute('sdwan_error_correction_profiles');
  }
  public set sdwanErrorCorrectionProfiles(value: string) {
    this._sdwanErrorCorrectionProfiles = value;
  }
  public resetSdwanErrorCorrectionProfiles() {
    this._sdwanErrorCorrectionProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanErrorCorrectionProfilesInput() {
    return this._sdwanErrorCorrectionProfiles;
  }

  // sdwan_path_quality_profiles - computed: false, optional: true, required: false
  private _sdwanPathQualityProfiles?: string; 
  public get sdwanPathQualityProfiles() {
    return this.getStringAttribute('sdwan_path_quality_profiles');
  }
  public set sdwanPathQualityProfiles(value: string) {
    this._sdwanPathQualityProfiles = value;
  }
  public resetSdwanPathQualityProfiles() {
    this._sdwanPathQualityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanPathQualityProfilesInput() {
    return this._sdwanPathQualityProfiles;
  }

  // sdwan_saas_quality_profiles - computed: false, optional: true, required: false
  private _sdwanSaasQualityProfiles?: string; 
  public get sdwanSaasQualityProfiles() {
    return this.getStringAttribute('sdwan_saas_quality_profiles');
  }
  public set sdwanSaasQualityProfiles(value: string) {
    this._sdwanSaasQualityProfiles = value;
  }
  public resetSdwanSaasQualityProfiles() {
    this._sdwanSaasQualityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanSaasQualityProfilesInput() {
    return this._sdwanSaasQualityProfiles;
  }

  // sdwan_traffic_distribution_profiles - computed: false, optional: true, required: false
  private _sdwanTrafficDistributionProfiles?: string; 
  public get sdwanTrafficDistributionProfiles() {
    return this.getStringAttribute('sdwan_traffic_distribution_profiles');
  }
  public set sdwanTrafficDistributionProfiles(value: string) {
    this._sdwanTrafficDistributionProfiles = value;
  }
  public resetSdwanTrafficDistributionProfiles() {
    this._sdwanTrafficDistributionProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanTrafficDistributionProfilesInput() {
    return this._sdwanTrafficDistributionProfiles;
  }

  // security_profile_groups - computed: false, optional: true, required: false
  private _securityProfileGroups?: string; 
  public get securityProfileGroups() {
    return this.getStringAttribute('security_profile_groups');
  }
  public set securityProfileGroups(value: string) {
    this._securityProfileGroups = value;
  }
  public resetSecurityProfileGroups() {
    this._securityProfileGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileGroupsInput() {
    return this._securityProfileGroups;
  }

  // service_groups - computed: false, optional: true, required: false
  private _serviceGroups?: string; 
  public get serviceGroups() {
    return this.getStringAttribute('service_groups');
  }
  public set serviceGroups(value: string) {
    this._serviceGroups = value;
  }
  public resetServiceGroups() {
    this._serviceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupsInput() {
    return this._serviceGroups;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url_filtering_security_profiles - computed: false, optional: true, required: false
  private _urlFilteringSecurityProfiles?: string; 
  public get urlFilteringSecurityProfiles() {
    return this.getStringAttribute('url_filtering_security_profiles');
  }
  public set urlFilteringSecurityProfiles(value: string) {
    this._urlFilteringSecurityProfiles = value;
  }
  public resetUrlFilteringSecurityProfiles() {
    this._urlFilteringSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringSecurityProfilesInput() {
    return this._urlFilteringSecurityProfiles;
  }

  // vulnerability_protection_security_profiles - computed: false, optional: true, required: false
  private _vulnerabilityProtectionSecurityProfiles?: string; 
  public get vulnerabilityProtectionSecurityProfiles() {
    return this.getStringAttribute('vulnerability_protection_security_profiles');
  }
  public set vulnerabilityProtectionSecurityProfiles(value: string) {
    this._vulnerabilityProtectionSecurityProfiles = value;
  }
  public resetVulnerabilityProtectionSecurityProfiles() {
    this._vulnerabilityProtectionSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityProtectionSecurityProfilesInput() {
    return this._vulnerabilityProtectionSecurityProfiles;
  }

  // wildfire_analysis_security_profiles - computed: false, optional: true, required: false
  private _wildfireAnalysisSecurityProfiles?: string; 
  public get wildfireAnalysisSecurityProfiles() {
    return this.getStringAttribute('wildfire_analysis_security_profiles');
  }
  public set wildfireAnalysisSecurityProfiles(value: string) {
    this._wildfireAnalysisSecurityProfiles = value;
  }
  public resetWildfireAnalysisSecurityProfiles() {
    this._wildfireAnalysisSecurityProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireAnalysisSecurityProfilesInput() {
    return this._wildfireAnalysisSecurityProfiles;
  }
}
export interface AdminRoleRoleVsysRestapiPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_override_rules AdminRole#application_override_rules}
  */
  readonly applicationOverrideRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication_rules AdminRole#authentication_rules}
  */
  readonly authenticationRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption_rules AdminRole#decryption_rules}
  */
  readonly decryptionRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dos_rules AdminRole#dos_rules}
  */
  readonly dosRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#nat_rules AdminRole#nat_rules}
  */
  readonly natRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#network_packet_broker_rules AdminRole#network_packet_broker_rules}
  */
  readonly networkPacketBrokerRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#policy_based_forwarding_rules AdminRole#policy_based_forwarding_rules}
  */
  readonly policyBasedForwardingRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#qos_rules AdminRole#qos_rules}
  */
  readonly qosRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_rules AdminRole#sdwan_rules}
  */
  readonly sdwanRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#security_rules AdminRole#security_rules}
  */
  readonly securityRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_inspection_rules AdminRole#tunnel_inspection_rules}
  */
  readonly tunnelInspectionRules?: string;
}

export function adminRoleRoleVsysRestapiPoliciesToTerraform(struct?: AdminRoleRoleVsysRestapiPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_override_rules: cdktf.stringToTerraform(struct!.applicationOverrideRules),
    authentication_rules: cdktf.stringToTerraform(struct!.authenticationRules),
    decryption_rules: cdktf.stringToTerraform(struct!.decryptionRules),
    dos_rules: cdktf.stringToTerraform(struct!.dosRules),
    nat_rules: cdktf.stringToTerraform(struct!.natRules),
    network_packet_broker_rules: cdktf.stringToTerraform(struct!.networkPacketBrokerRules),
    policy_based_forwarding_rules: cdktf.stringToTerraform(struct!.policyBasedForwardingRules),
    qos_rules: cdktf.stringToTerraform(struct!.qosRules),
    sdwan_rules: cdktf.stringToTerraform(struct!.sdwanRules),
    security_rules: cdktf.stringToTerraform(struct!.securityRules),
    tunnel_inspection_rules: cdktf.stringToTerraform(struct!.tunnelInspectionRules),
  }
}


export function adminRoleRoleVsysRestapiPoliciesToHclTerraform(struct?: AdminRoleRoleVsysRestapiPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_override_rules: {
      value: cdktf.stringToHclTerraform(struct!.applicationOverrideRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_rules: {
      value: cdktf.stringToHclTerraform(struct!.authenticationRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_rules: {
      value: cdktf.stringToHclTerraform(struct!.decryptionRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_rules: {
      value: cdktf.stringToHclTerraform(struct!.dosRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_rules: {
      value: cdktf.stringToHclTerraform(struct!.natRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_packet_broker_rules: {
      value: cdktf.stringToHclTerraform(struct!.networkPacketBrokerRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_based_forwarding_rules: {
      value: cdktf.stringToHclTerraform(struct!.policyBasedForwardingRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_rules: {
      value: cdktf.stringToHclTerraform(struct!.qosRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_rules: {
      value: cdktf.stringToHclTerraform(struct!.sdwanRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_rules: {
      value: cdktf.stringToHclTerraform(struct!.securityRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_inspection_rules: {
      value: cdktf.stringToHclTerraform(struct!.tunnelInspectionRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysRestapiPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysRestapiPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationOverrideRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationOverrideRules = this._applicationOverrideRules;
    }
    if (this._authenticationRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRules = this._authenticationRules;
    }
    if (this._decryptionRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionRules = this._decryptionRules;
    }
    if (this._dosRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosRules = this._dosRules;
    }
    if (this._natRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.natRules = this._natRules;
    }
    if (this._networkPacketBrokerRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPacketBrokerRules = this._networkPacketBrokerRules;
    }
    if (this._policyBasedForwardingRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyBasedForwardingRules = this._policyBasedForwardingRules;
    }
    if (this._qosRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosRules = this._qosRules;
    }
    if (this._sdwanRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanRules = this._sdwanRules;
    }
    if (this._securityRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityRules = this._securityRules;
    }
    if (this._tunnelInspectionRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelInspectionRules = this._tunnelInspectionRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysRestapiPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationOverrideRules = undefined;
      this._authenticationRules = undefined;
      this._decryptionRules = undefined;
      this._dosRules = undefined;
      this._natRules = undefined;
      this._networkPacketBrokerRules = undefined;
      this._policyBasedForwardingRules = undefined;
      this._qosRules = undefined;
      this._sdwanRules = undefined;
      this._securityRules = undefined;
      this._tunnelInspectionRules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationOverrideRules = value.applicationOverrideRules;
      this._authenticationRules = value.authenticationRules;
      this._decryptionRules = value.decryptionRules;
      this._dosRules = value.dosRules;
      this._natRules = value.natRules;
      this._networkPacketBrokerRules = value.networkPacketBrokerRules;
      this._policyBasedForwardingRules = value.policyBasedForwardingRules;
      this._qosRules = value.qosRules;
      this._sdwanRules = value.sdwanRules;
      this._securityRules = value.securityRules;
      this._tunnelInspectionRules = value.tunnelInspectionRules;
    }
  }

  // application_override_rules - computed: false, optional: true, required: false
  private _applicationOverrideRules?: string; 
  public get applicationOverrideRules() {
    return this.getStringAttribute('application_override_rules');
  }
  public set applicationOverrideRules(value: string) {
    this._applicationOverrideRules = value;
  }
  public resetApplicationOverrideRules() {
    this._applicationOverrideRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationOverrideRulesInput() {
    return this._applicationOverrideRules;
  }

  // authentication_rules - computed: false, optional: true, required: false
  private _authenticationRules?: string; 
  public get authenticationRules() {
    return this.getStringAttribute('authentication_rules');
  }
  public set authenticationRules(value: string) {
    this._authenticationRules = value;
  }
  public resetAuthenticationRules() {
    this._authenticationRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRulesInput() {
    return this._authenticationRules;
  }

  // decryption_rules - computed: false, optional: true, required: false
  private _decryptionRules?: string; 
  public get decryptionRules() {
    return this.getStringAttribute('decryption_rules');
  }
  public set decryptionRules(value: string) {
    this._decryptionRules = value;
  }
  public resetDecryptionRules() {
    this._decryptionRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionRulesInput() {
    return this._decryptionRules;
  }

  // dos_rules - computed: false, optional: true, required: false
  private _dosRules?: string; 
  public get dosRules() {
    return this.getStringAttribute('dos_rules');
  }
  public set dosRules(value: string) {
    this._dosRules = value;
  }
  public resetDosRules() {
    this._dosRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosRulesInput() {
    return this._dosRules;
  }

  // nat_rules - computed: false, optional: true, required: false
  private _natRules?: string; 
  public get natRules() {
    return this.getStringAttribute('nat_rules');
  }
  public set natRules(value: string) {
    this._natRules = value;
  }
  public resetNatRules() {
    this._natRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRulesInput() {
    return this._natRules;
  }

  // network_packet_broker_rules - computed: false, optional: true, required: false
  private _networkPacketBrokerRules?: string; 
  public get networkPacketBrokerRules() {
    return this.getStringAttribute('network_packet_broker_rules');
  }
  public set networkPacketBrokerRules(value: string) {
    this._networkPacketBrokerRules = value;
  }
  public resetNetworkPacketBrokerRules() {
    this._networkPacketBrokerRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPacketBrokerRulesInput() {
    return this._networkPacketBrokerRules;
  }

  // policy_based_forwarding_rules - computed: false, optional: true, required: false
  private _policyBasedForwardingRules?: string; 
  public get policyBasedForwardingRules() {
    return this.getStringAttribute('policy_based_forwarding_rules');
  }
  public set policyBasedForwardingRules(value: string) {
    this._policyBasedForwardingRules = value;
  }
  public resetPolicyBasedForwardingRules() {
    this._policyBasedForwardingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBasedForwardingRulesInput() {
    return this._policyBasedForwardingRules;
  }

  // qos_rules - computed: false, optional: true, required: false
  private _qosRules?: string; 
  public get qosRules() {
    return this.getStringAttribute('qos_rules');
  }
  public set qosRules(value: string) {
    this._qosRules = value;
  }
  public resetQosRules() {
    this._qosRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosRulesInput() {
    return this._qosRules;
  }

  // sdwan_rules - computed: false, optional: true, required: false
  private _sdwanRules?: string; 
  public get sdwanRules() {
    return this.getStringAttribute('sdwan_rules');
  }
  public set sdwanRules(value: string) {
    this._sdwanRules = value;
  }
  public resetSdwanRules() {
    this._sdwanRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanRulesInput() {
    return this._sdwanRules;
  }

  // security_rules - computed: false, optional: true, required: false
  private _securityRules?: string; 
  public get securityRules() {
    return this.getStringAttribute('security_rules');
  }
  public set securityRules(value: string) {
    this._securityRules = value;
  }
  public resetSecurityRules() {
    this._securityRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRulesInput() {
    return this._securityRules;
  }

  // tunnel_inspection_rules - computed: false, optional: true, required: false
  private _tunnelInspectionRules?: string; 
  public get tunnelInspectionRules() {
    return this.getStringAttribute('tunnel_inspection_rules');
  }
  public set tunnelInspectionRules(value: string) {
    this._tunnelInspectionRules = value;
  }
  public resetTunnelInspectionRules() {
    this._tunnelInspectionRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInspectionRulesInput() {
    return this._tunnelInspectionRules;
  }
}
export interface AdminRoleRoleVsysRestapiSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#configuration AdminRole#configuration}
  */
  readonly configuration?: string;
}

export function adminRoleRoleVsysRestapiSystemToTerraform(struct?: AdminRoleRoleVsysRestapiSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
  }
}


export function adminRoleRoleVsysRestapiSystemToHclTerraform(struct?: AdminRoleRoleVsysRestapiSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysRestapiSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysRestapiSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysRestapiSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }
}
export interface AdminRoleRoleVsysRestapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#device AdminRole#device}
  */
  readonly device?: AdminRoleRoleVsysRestapiDevice;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#network AdminRole#network}
  */
  readonly network?: AdminRoleRoleVsysRestapiNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#objects AdminRole#objects}
  */
  readonly objects?: AdminRoleRoleVsysRestapiObjects;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#policies AdminRole#policies}
  */
  readonly policies?: AdminRoleRoleVsysRestapiPolicies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#system AdminRole#system}
  */
  readonly systemAttribute?: AdminRoleRoleVsysRestapiSystem;
}

export function adminRoleRoleVsysRestapiToTerraform(struct?: AdminRoleRoleVsysRestapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: adminRoleRoleVsysRestapiDeviceToTerraform(struct!.device),
    network: adminRoleRoleVsysRestapiNetworkToTerraform(struct!.network),
    objects: adminRoleRoleVsysRestapiObjectsToTerraform(struct!.objects),
    policies: adminRoleRoleVsysRestapiPoliciesToTerraform(struct!.policies),
    system: adminRoleRoleVsysRestapiSystemToTerraform(struct!.systemAttribute),
  }
}


export function adminRoleRoleVsysRestapiToHclTerraform(struct?: AdminRoleRoleVsysRestapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: adminRoleRoleVsysRestapiDeviceToHclTerraform(struct!.device),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysRestapiDevice",
    },
    network: {
      value: adminRoleRoleVsysRestapiNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysRestapiNetwork",
    },
    objects: {
      value: adminRoleRoleVsysRestapiObjectsToHclTerraform(struct!.objects),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysRestapiObjects",
    },
    policies: {
      value: adminRoleRoleVsysRestapiPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysRestapiPolicies",
    },
    system: {
      value: adminRoleRoleVsysRestapiSystemToHclTerraform(struct!.systemAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysRestapiSystem",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysRestapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysRestapi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._system?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysRestapi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device.internalValue = undefined;
      this._network.internalValue = undefined;
      this._objects.internalValue = undefined;
      this._policies.internalValue = undefined;
      this._system.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device.internalValue = value.device;
      this._network.internalValue = value.network;
      this._objects.internalValue = value.objects;
      this._policies.internalValue = value.policies;
      this._system.internalValue = value.systemAttribute;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device = new AdminRoleRoleVsysRestapiDeviceOutputReference(this, "device");
  public get device() {
    return this._device;
  }
  public putDevice(value: AdminRoleRoleVsysRestapiDevice) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new AdminRoleRoleVsysRestapiNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: AdminRoleRoleVsysRestapiNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new AdminRoleRoleVsysRestapiObjectsOutputReference(this, "objects");
  public get objects() {
    return this._objects;
  }
  public putObjects(value: AdminRoleRoleVsysRestapiObjects) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new AdminRoleRoleVsysRestapiPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: AdminRoleRoleVsysRestapiPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // system - computed: false, optional: true, required: false
  private _system = new AdminRoleRoleVsysRestapiSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: AdminRoleRoleVsysRestapiSystem) {
    this._system.internalValue = value;
  }
  public resetSystemAttribute() {
    this._system.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }
}
export interface AdminRoleRoleVsysWebuiCommit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#commit_for_other_admins AdminRole#commit_for_other_admins}
  */
  readonly commitForOtherAdmins?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#virtual_systems AdminRole#virtual_systems}
  */
  readonly virtualSystems?: string;
}

export function adminRoleRoleVsysWebuiCommitToTerraform(struct?: AdminRoleRoleVsysWebuiCommit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit_for_other_admins: cdktf.stringToTerraform(struct!.commitForOtherAdmins),
    virtual_systems: cdktf.stringToTerraform(struct!.virtualSystems),
  }
}


export function adminRoleRoleVsysWebuiCommitToHclTerraform(struct?: AdminRoleRoleVsysWebuiCommit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit_for_other_admins: {
      value: cdktf.stringToHclTerraform(struct!.commitForOtherAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_systems: {
      value: cdktf.stringToHclTerraform(struct!.virtualSystems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiCommitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiCommit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commitForOtherAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitForOtherAdmins = this._commitForOtherAdmins;
    }
    if (this._virtualSystems !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSystems = this._virtualSystems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiCommit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commitForOtherAdmins = undefined;
      this._virtualSystems = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commitForOtherAdmins = value.commitForOtherAdmins;
      this._virtualSystems = value.virtualSystems;
    }
  }

  // commit_for_other_admins - computed: false, optional: true, required: false
  private _commitForOtherAdmins?: string; 
  public get commitForOtherAdmins() {
    return this.getStringAttribute('commit_for_other_admins');
  }
  public set commitForOtherAdmins(value: string) {
    this._commitForOtherAdmins = value;
  }
  public resetCommitForOtherAdmins() {
    this._commitForOtherAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitForOtherAdminsInput() {
    return this._commitForOtherAdmins;
  }

  // virtual_systems - computed: false, optional: true, required: false
  private _virtualSystems?: string; 
  public get virtualSystems() {
    return this.getStringAttribute('virtual_systems');
  }
  public set virtualSystems(value: string) {
    this._virtualSystems = value;
  }
  public resetVirtualSystems() {
    this._virtualSystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSystemsInput() {
    return this._virtualSystems;
  }
}
export interface AdminRoleRoleVsysWebuiDeviceCertificateManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#certificate_profile AdminRole#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#certificates AdminRole#certificates}
  */
  readonly certificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ocsp_responder AdminRole#ocsp_responder}
  */
  readonly ocspResponder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#scep AdminRole#scep}
  */
  readonly scep?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ssh_service_profile AdminRole#ssh_service_profile}
  */
  readonly sshServiceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ssl_decryption_exclusion AdminRole#ssl_decryption_exclusion}
  */
  readonly sslDecryptionExclusion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ssl_tls_service_profile AdminRole#ssl_tls_service_profile}
  */
  readonly sslTlsServiceProfile?: string;
}

export function adminRoleRoleVsysWebuiDeviceCertificateManagementToTerraform(struct?: AdminRoleRoleVsysWebuiDeviceCertificateManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    certificates: cdktf.stringToTerraform(struct!.certificates),
    ocsp_responder: cdktf.stringToTerraform(struct!.ocspResponder),
    scep: cdktf.stringToTerraform(struct!.scep),
    ssh_service_profile: cdktf.stringToTerraform(struct!.sshServiceProfile),
    ssl_decryption_exclusion: cdktf.stringToTerraform(struct!.sslDecryptionExclusion),
    ssl_tls_service_profile: cdktf.stringToTerraform(struct!.sslTlsServiceProfile),
  }
}


export function adminRoleRoleVsysWebuiDeviceCertificateManagementToHclTerraform(struct?: AdminRoleRoleVsysWebuiDeviceCertificateManagement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificates: {
      value: cdktf.stringToHclTerraform(struct!.certificates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_responder: {
      value: cdktf.stringToHclTerraform(struct!.ocspResponder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scep: {
      value: cdktf.stringToHclTerraform(struct!.scep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_service_profile: {
      value: cdktf.stringToHclTerraform(struct!.sshServiceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_decryption_exclusion: {
      value: cdktf.stringToHclTerraform(struct!.sslDecryptionExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_tls_service_profile: {
      value: cdktf.stringToHclTerraform(struct!.sslTlsServiceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiDeviceCertificateManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiDeviceCertificateManagement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._certificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates;
    }
    if (this._ocspResponder !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspResponder = this._ocspResponder;
    }
    if (this._scep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scep = this._scep;
    }
    if (this._sshServiceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshServiceProfile = this._sshServiceProfile;
    }
    if (this._sslDecryptionExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslDecryptionExclusion = this._sslDecryptionExclusion;
    }
    if (this._sslTlsServiceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTlsServiceProfile = this._sslTlsServiceProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiDeviceCertificateManagement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateProfile = undefined;
      this._certificates = undefined;
      this._ocspResponder = undefined;
      this._scep = undefined;
      this._sshServiceProfile = undefined;
      this._sslDecryptionExclusion = undefined;
      this._sslTlsServiceProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateProfile = value.certificateProfile;
      this._certificates = value.certificates;
      this._ocspResponder = value.ocspResponder;
      this._scep = value.scep;
      this._sshServiceProfile = value.sshServiceProfile;
      this._sslDecryptionExclusion = value.sslDecryptionExclusion;
      this._sslTlsServiceProfile = value.sslTlsServiceProfile;
    }
  }

  // certificate_profile - computed: false, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates?: string; 
  public get certificates() {
    return this.getStringAttribute('certificates');
  }
  public set certificates(value: string) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

  // ocsp_responder - computed: false, optional: true, required: false
  private _ocspResponder?: string; 
  public get ocspResponder() {
    return this.getStringAttribute('ocsp_responder');
  }
  public set ocspResponder(value: string) {
    this._ocspResponder = value;
  }
  public resetOcspResponder() {
    this._ocspResponder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspResponderInput() {
    return this._ocspResponder;
  }

  // scep - computed: false, optional: true, required: false
  private _scep?: string; 
  public get scep() {
    return this.getStringAttribute('scep');
  }
  public set scep(value: string) {
    this._scep = value;
  }
  public resetScep() {
    this._scep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepInput() {
    return this._scep;
  }

  // ssh_service_profile - computed: false, optional: true, required: false
  private _sshServiceProfile?: string; 
  public get sshServiceProfile() {
    return this.getStringAttribute('ssh_service_profile');
  }
  public set sshServiceProfile(value: string) {
    this._sshServiceProfile = value;
  }
  public resetSshServiceProfile() {
    this._sshServiceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshServiceProfileInput() {
    return this._sshServiceProfile;
  }

  // ssl_decryption_exclusion - computed: false, optional: true, required: false
  private _sslDecryptionExclusion?: string; 
  public get sslDecryptionExclusion() {
    return this.getStringAttribute('ssl_decryption_exclusion');
  }
  public set sslDecryptionExclusion(value: string) {
    this._sslDecryptionExclusion = value;
  }
  public resetSslDecryptionExclusion() {
    this._sslDecryptionExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDecryptionExclusionInput() {
    return this._sslDecryptionExclusion;
  }

  // ssl_tls_service_profile - computed: false, optional: true, required: false
  private _sslTlsServiceProfile?: string; 
  public get sslTlsServiceProfile() {
    return this.getStringAttribute('ssl_tls_service_profile');
  }
  public set sslTlsServiceProfile(value: string) {
    this._sslTlsServiceProfile = value;
  }
  public resetSslTlsServiceProfile() {
    this._sslTlsServiceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTlsServiceProfileInput() {
    return this._sslTlsServiceProfile;
  }
}
export interface AdminRoleRoleVsysWebuiDeviceLocalUserDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#user_groups AdminRole#user_groups}
  */
  readonly userGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#users AdminRole#users}
  */
  readonly users?: string;
}

export function adminRoleRoleVsysWebuiDeviceLocalUserDatabaseToTerraform(struct?: AdminRoleRoleVsysWebuiDeviceLocalUserDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_groups: cdktf.stringToTerraform(struct!.userGroups),
    users: cdktf.stringToTerraform(struct!.users),
  }
}


export function adminRoleRoleVsysWebuiDeviceLocalUserDatabaseToHclTerraform(struct?: AdminRoleRoleVsysWebuiDeviceLocalUserDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_groups: {
      value: cdktf.stringToHclTerraform(struct!.userGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.stringToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiDeviceLocalUserDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiDeviceLocalUserDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiDeviceLocalUserDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userGroups = undefined;
      this._users = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userGroups = value.userGroups;
      this._users = value.users;
    }
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string; 
  public get userGroups() {
    return this.getStringAttribute('user_groups');
  }
  public set userGroups(value: string) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string; 
  public get users() {
    return this.getStringAttribute('users');
  }
  public set users(value: string) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}
export interface AdminRoleRoleVsysWebuiDeviceLogSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#config AdminRole#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#correlation AdminRole#correlation}
  */
  readonly correlation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect AdminRole#globalprotect}
  */
  readonly globalprotect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hipmatch AdminRole#hipmatch}
  */
  readonly hipmatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#iptag AdminRole#iptag}
  */
  readonly iptag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#system AdminRole#system}
  */
  readonly systemAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#user_id AdminRole#user_id}
  */
  readonly userId?: string;
}

export function adminRoleRoleVsysWebuiDeviceLogSettingsToTerraform(struct?: AdminRoleRoleVsysWebuiDeviceLogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    correlation: cdktf.stringToTerraform(struct!.correlation),
    globalprotect: cdktf.stringToTerraform(struct!.globalprotect),
    hipmatch: cdktf.stringToTerraform(struct!.hipmatch),
    iptag: cdktf.stringToTerraform(struct!.iptag),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function adminRoleRoleVsysWebuiDeviceLogSettingsToHclTerraform(struct?: AdminRoleRoleVsysWebuiDeviceLogSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlation: {
      value: cdktf.stringToHclTerraform(struct!.correlation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect: {
      value: cdktf.stringToHclTerraform(struct!.globalprotect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hipmatch: {
      value: cdktf.stringToHclTerraform(struct!.hipmatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptag: {
      value: cdktf.stringToHclTerraform(struct!.iptag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiDeviceLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiDeviceLogSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._correlation !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlation = this._correlation;
    }
    if (this._globalprotect !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotect = this._globalprotect;
    }
    if (this._hipmatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipmatch = this._hipmatch;
    }
    if (this._iptag !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptag = this._iptag;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiDeviceLogSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._correlation = undefined;
      this._globalprotect = undefined;
      this._hipmatch = undefined;
      this._iptag = undefined;
      this._system = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._correlation = value.correlation;
      this._globalprotect = value.globalprotect;
      this._hipmatch = value.hipmatch;
      this._iptag = value.iptag;
      this._system = value.systemAttribute;
      this._userId = value.userId;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // correlation - computed: false, optional: true, required: false
  private _correlation?: string; 
  public get correlation() {
    return this.getStringAttribute('correlation');
  }
  public set correlation(value: string) {
    this._correlation = value;
  }
  public resetCorrelation() {
    this._correlation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationInput() {
    return this._correlation;
  }

  // globalprotect - computed: false, optional: true, required: false
  private _globalprotect?: string; 
  public get globalprotect() {
    return this.getStringAttribute('globalprotect');
  }
  public set globalprotect(value: string) {
    this._globalprotect = value;
  }
  public resetGlobalprotect() {
    this._globalprotect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectInput() {
    return this._globalprotect;
  }

  // hipmatch - computed: false, optional: true, required: false
  private _hipmatch?: string; 
  public get hipmatch() {
    return this.getStringAttribute('hipmatch');
  }
  public set hipmatch(value: string) {
    this._hipmatch = value;
  }
  public resetHipmatch() {
    this._hipmatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipmatchInput() {
    return this._hipmatch;
  }

  // iptag - computed: false, optional: true, required: false
  private _iptag?: string; 
  public get iptag() {
    return this.getStringAttribute('iptag');
  }
  public set iptag(value: string) {
    this._iptag = value;
  }
  public resetIptag() {
    this._iptag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptagInput() {
    return this._iptag;
  }

  // system - computed: false, optional: true, required: false
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface AdminRoleRoleVsysWebuiDevicePolicyRecommendations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#iot AdminRole#iot}
  */
  readonly iot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#saas AdminRole#saas}
  */
  readonly saas?: string;
}

export function adminRoleRoleVsysWebuiDevicePolicyRecommendationsToTerraform(struct?: AdminRoleRoleVsysWebuiDevicePolicyRecommendations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iot: cdktf.stringToTerraform(struct!.iot),
    saas: cdktf.stringToTerraform(struct!.saas),
  }
}


export function adminRoleRoleVsysWebuiDevicePolicyRecommendationsToHclTerraform(struct?: AdminRoleRoleVsysWebuiDevicePolicyRecommendations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iot: {
      value: cdktf.stringToHclTerraform(struct!.iot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saas: {
      value: cdktf.stringToHclTerraform(struct!.saas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiDevicePolicyRecommendationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiDevicePolicyRecommendations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iot !== undefined) {
      hasAnyValues = true;
      internalValueResult.iot = this._iot;
    }
    if (this._saas !== undefined) {
      hasAnyValues = true;
      internalValueResult.saas = this._saas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiDevicePolicyRecommendations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iot = undefined;
      this._saas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iot = value.iot;
      this._saas = value.saas;
    }
  }

  // iot - computed: false, optional: true, required: false
  private _iot?: string; 
  public get iot() {
    return this.getStringAttribute('iot');
  }
  public set iot(value: string) {
    this._iot = value;
  }
  public resetIot() {
    this._iot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotInput() {
    return this._iot;
  }

  // saas - computed: false, optional: true, required: false
  private _saas?: string; 
  public get saas() {
    return this.getStringAttribute('saas');
  }
  public set saas(value: string) {
    this._saas = value;
  }
  public resetSaas() {
    this._saas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasInput() {
    return this._saas;
  }
}
export interface AdminRoleRoleVsysWebuiDeviceServerProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dns AdminRole#dns}
  */
  readonly dns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#email AdminRole#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#http AdminRole#http}
  */
  readonly http?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#kerberos AdminRole#kerberos}
  */
  readonly kerberos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ldap AdminRole#ldap}
  */
  readonly ldap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#mfa AdminRole#mfa}
  */
  readonly mfa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#netflow AdminRole#netflow}
  */
  readonly netflow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#radius AdminRole#radius}
  */
  readonly radius?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#saml_idp AdminRole#saml_idp}
  */
  readonly samlIdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#scp AdminRole#scp}
  */
  readonly scp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#snmp_trap AdminRole#snmp_trap}
  */
  readonly snmpTrap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#syslog AdminRole#syslog}
  */
  readonly syslog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tacplus AdminRole#tacplus}
  */
  readonly tacplus?: string;
}

export function adminRoleRoleVsysWebuiDeviceServerProfileToTerraform(struct?: AdminRoleRoleVsysWebuiDeviceServerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.stringToTerraform(struct!.dns),
    email: cdktf.stringToTerraform(struct!.email),
    http: cdktf.stringToTerraform(struct!.http),
    kerberos: cdktf.stringToTerraform(struct!.kerberos),
    ldap: cdktf.stringToTerraform(struct!.ldap),
    mfa: cdktf.stringToTerraform(struct!.mfa),
    netflow: cdktf.stringToTerraform(struct!.netflow),
    radius: cdktf.stringToTerraform(struct!.radius),
    saml_idp: cdktf.stringToTerraform(struct!.samlIdp),
    scp: cdktf.stringToTerraform(struct!.scp),
    snmp_trap: cdktf.stringToTerraform(struct!.snmpTrap),
    syslog: cdktf.stringToTerraform(struct!.syslog),
    tacplus: cdktf.stringToTerraform(struct!.tacplus),
  }
}


export function adminRoleRoleVsysWebuiDeviceServerProfileToHclTerraform(struct?: AdminRoleRoleVsysWebuiDeviceServerProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos: {
      value: cdktf.stringToHclTerraform(struct!.kerberos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap: {
      value: cdktf.stringToHclTerraform(struct!.ldap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mfa: {
      value: cdktf.stringToHclTerraform(struct!.mfa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netflow: {
      value: cdktf.stringToHclTerraform(struct!.netflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius: {
      value: cdktf.stringToHclTerraform(struct!.radius),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_idp: {
      value: cdktf.stringToHclTerraform(struct!.samlIdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scp: {
      value: cdktf.stringToHclTerraform(struct!.scp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_trap: {
      value: cdktf.stringToHclTerraform(struct!.snmpTrap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog: {
      value: cdktf.stringToHclTerraform(struct!.syslog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tacplus: {
      value: cdktf.stringToHclTerraform(struct!.tacplus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiDeviceServerProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiDeviceServerProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._kerberos !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos = this._kerberos;
    }
    if (this._ldap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap;
    }
    if (this._mfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfa = this._mfa;
    }
    if (this._netflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflow = this._netflow;
    }
    if (this._radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius;
    }
    if (this._samlIdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlIdp = this._samlIdp;
    }
    if (this._scp !== undefined) {
      hasAnyValues = true;
      internalValueResult.scp = this._scp;
    }
    if (this._snmpTrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpTrap = this._snmpTrap;
    }
    if (this._syslog !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog;
    }
    if (this._tacplus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplus = this._tacplus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiDeviceServerProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._email = undefined;
      this._http = undefined;
      this._kerberos = undefined;
      this._ldap = undefined;
      this._mfa = undefined;
      this._netflow = undefined;
      this._radius = undefined;
      this._samlIdp = undefined;
      this._scp = undefined;
      this._snmpTrap = undefined;
      this._syslog = undefined;
      this._tacplus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._email = value.email;
      this._http = value.http;
      this._kerberos = value.kerberos;
      this._ldap = value.ldap;
      this._mfa = value.mfa;
      this._netflow = value.netflow;
      this._radius = value.radius;
      this._samlIdp = value.samlIdp;
      this._scp = value.scp;
      this._snmpTrap = value.snmpTrap;
      this._syslog = value.syslog;
      this._tacplus = value.tacplus;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // email - computed: false, optional: true, required: false
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

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // kerberos - computed: false, optional: true, required: false
  private _kerberos?: string; 
  public get kerberos() {
    return this.getStringAttribute('kerberos');
  }
  public set kerberos(value: string) {
    this._kerberos = value;
  }
  public resetKerberos() {
    this._kerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap?: string; 
  public get ldap() {
    return this.getStringAttribute('ldap');
  }
  public set ldap(value: string) {
    this._ldap = value;
  }
  public resetLdap() {
    this._ldap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa?: string; 
  public get mfa() {
    return this.getStringAttribute('mfa');
  }
  public set mfa(value: string) {
    this._mfa = value;
  }
  public resetMfa() {
    this._mfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa;
  }

  // netflow - computed: false, optional: true, required: false
  private _netflow?: string; 
  public get netflow() {
    return this.getStringAttribute('netflow');
  }
  public set netflow(value: string) {
    this._netflow = value;
  }
  public resetNetflow() {
    this._netflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow;
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: string; 
  public get radius() {
    return this.getStringAttribute('radius');
  }
  public set radius(value: string) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // saml_idp - computed: false, optional: true, required: false
  private _samlIdp?: string; 
  public get samlIdp() {
    return this.getStringAttribute('saml_idp');
  }
  public set samlIdp(value: string) {
    this._samlIdp = value;
  }
  public resetSamlIdp() {
    this._samlIdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpInput() {
    return this._samlIdp;
  }

  // scp - computed: false, optional: true, required: false
  private _scp?: string; 
  public get scp() {
    return this.getStringAttribute('scp');
  }
  public set scp(value: string) {
    this._scp = value;
  }
  public resetScp() {
    this._scp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scpInput() {
    return this._scp;
  }

  // snmp_trap - computed: false, optional: true, required: false
  private _snmpTrap?: string; 
  public get snmpTrap() {
    return this.getStringAttribute('snmp_trap');
  }
  public set snmpTrap(value: string) {
    this._snmpTrap = value;
  }
  public resetSnmpTrap() {
    this._snmpTrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapInput() {
    return this._snmpTrap;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog?: string; 
  public get syslog() {
    return this.getStringAttribute('syslog');
  }
  public set syslog(value: string) {
    this._syslog = value;
  }
  public resetSyslog() {
    this._syslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog;
  }

  // tacplus - computed: false, optional: true, required: false
  private _tacplus?: string; 
  public get tacplus() {
    return this.getStringAttribute('tacplus');
  }
  public set tacplus(value: string) {
    this._tacplus = value;
  }
  public resetTacplus() {
    this._tacplus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusInput() {
    return this._tacplus;
  }
}
export interface AdminRoleRoleVsysWebuiDeviceSetup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#content_id AdminRole#content_id}
  */
  readonly contentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hsm AdminRole#hsm}
  */
  readonly hsm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#interfaces AdminRole#interfaces}
  */
  readonly interfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#management AdminRole#management}
  */
  readonly management?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#operations AdminRole#operations}
  */
  readonly operations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#services AdminRole#services}
  */
  readonly services?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#session AdminRole#session}
  */
  readonly session?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#telemetry AdminRole#telemetry}
  */
  readonly telemetry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#wildfire AdminRole#wildfire}
  */
  readonly wildfire?: string;
}

export function adminRoleRoleVsysWebuiDeviceSetupToTerraform(struct?: AdminRoleRoleVsysWebuiDeviceSetup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_id: cdktf.stringToTerraform(struct!.contentId),
    hsm: cdktf.stringToTerraform(struct!.hsm),
    interfaces: cdktf.stringToTerraform(struct!.interfaces),
    management: cdktf.stringToTerraform(struct!.management),
    operations: cdktf.stringToTerraform(struct!.operations),
    services: cdktf.stringToTerraform(struct!.services),
    session: cdktf.stringToTerraform(struct!.session),
    telemetry: cdktf.stringToTerraform(struct!.telemetry),
    wildfire: cdktf.stringToTerraform(struct!.wildfire),
  }
}


export function adminRoleRoleVsysWebuiDeviceSetupToHclTerraform(struct?: AdminRoleRoleVsysWebuiDeviceSetup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_id: {
      value: cdktf.stringToHclTerraform(struct!.contentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsm: {
      value: cdktf.stringToHclTerraform(struct!.hsm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.stringToHclTerraform(struct!.interfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management: {
      value: cdktf.stringToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.stringToHclTerraform(struct!.operations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session: {
      value: cdktf.stringToHclTerraform(struct!.session),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telemetry: {
      value: cdktf.stringToHclTerraform(struct!.telemetry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire: {
      value: cdktf.stringToHclTerraform(struct!.wildfire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiDeviceSetupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiDeviceSetup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentId = this._contentId;
    }
    if (this._hsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsm = this._hsm;
    }
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._session !== undefined) {
      hasAnyValues = true;
      internalValueResult.session = this._session;
    }
    if (this._telemetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry;
    }
    if (this._wildfire !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfire = this._wildfire;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiDeviceSetup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentId = undefined;
      this._hsm = undefined;
      this._interfaces = undefined;
      this._management = undefined;
      this._operations = undefined;
      this._services = undefined;
      this._session = undefined;
      this._telemetry = undefined;
      this._wildfire = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentId = value.contentId;
      this._hsm = value.hsm;
      this._interfaces = value.interfaces;
      this._management = value.management;
      this._operations = value.operations;
      this._services = value.services;
      this._session = value.session;
      this._telemetry = value.telemetry;
      this._wildfire = value.wildfire;
    }
  }

  // content_id - computed: false, optional: true, required: false
  private _contentId?: string; 
  public get contentId() {
    return this.getStringAttribute('content_id');
  }
  public set contentId(value: string) {
    this._contentId = value;
  }
  public resetContentId() {
    this._contentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdInput() {
    return this._contentId;
  }

  // hsm - computed: false, optional: true, required: false
  private _hsm?: string; 
  public get hsm() {
    return this.getStringAttribute('hsm');
  }
  public set hsm(value: string) {
    this._hsm = value;
  }
  public resetHsm() {
    this._hsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmInput() {
    return this._hsm;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces?: string; 
  public get interfaces() {
    return this.getStringAttribute('interfaces');
  }
  public set interfaces(value: string) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // management - computed: false, optional: true, required: false
  private _management?: string; 
  public get management() {
    return this.getStringAttribute('management');
  }
  public set management(value: string) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string; 
  public get operations() {
    return this.getStringAttribute('operations');
  }
  public set operations(value: string) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // session - computed: false, optional: true, required: false
  private _session?: string; 
  public get session() {
    return this.getStringAttribute('session');
  }
  public set session(value: string) {
    this._session = value;
  }
  public resetSession() {
    this._session = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInput() {
    return this._session;
  }

  // telemetry - computed: false, optional: true, required: false
  private _telemetry?: string; 
  public get telemetry() {
    return this.getStringAttribute('telemetry');
  }
  public set telemetry(value: string) {
    this._telemetry = value;
  }
  public resetTelemetry() {
    this._telemetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry;
  }

  // wildfire - computed: false, optional: true, required: false
  private _wildfire?: string; 
  public get wildfire() {
    return this.getStringAttribute('wildfire');
  }
  public set wildfire(value: string) {
    this._wildfire = value;
  }
  public resetWildfire() {
    this._wildfire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInput() {
    return this._wildfire;
  }
}
export interface AdminRoleRoleVsysWebuiDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#administrators AdminRole#administrators}
  */
  readonly administrators?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication_profile AdminRole#authentication_profile}
  */
  readonly authenticationProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication_sequence AdminRole#authentication_sequence}
  */
  readonly authenticationSequence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#block_pages AdminRole#block_pages}
  */
  readonly blockPages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#certificate_management AdminRole#certificate_management}
  */
  readonly certificateManagement?: AdminRoleRoleVsysWebuiDeviceCertificateManagement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_redistribution AdminRole#data_redistribution}
  */
  readonly dataRedistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#device_quarantine AdminRole#device_quarantine}
  */
  readonly deviceQuarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dhcp_syslog_server AdminRole#dhcp_syslog_server}
  */
  readonly dhcpSyslogServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#local_user_database AdminRole#local_user_database}
  */
  readonly localUserDatabase?: AdminRoleRoleVsysWebuiDeviceLocalUserDatabase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log_settings AdminRole#log_settings}
  */
  readonly logSettings?: AdminRoleRoleVsysWebuiDeviceLogSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#policy_recommendations AdminRole#policy_recommendations}
  */
  readonly policyRecommendations?: AdminRoleRoleVsysWebuiDevicePolicyRecommendations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#server_profile AdminRole#server_profile}
  */
  readonly serverProfile?: AdminRoleRoleVsysWebuiDeviceServerProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#setup AdminRole#setup}
  */
  readonly setup?: AdminRoleRoleVsysWebuiDeviceSetup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#troubleshooting AdminRole#troubleshooting}
  */
  readonly troubleshooting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#user_identification AdminRole#user_identification}
  */
  readonly userIdentification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vm_info_source AdminRole#vm_info_source}
  */
  readonly vmInfoSource?: string;
}

export function adminRoleRoleVsysWebuiDeviceToTerraform(struct?: AdminRoleRoleVsysWebuiDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrators: cdktf.stringToTerraform(struct!.administrators),
    authentication_profile: cdktf.stringToTerraform(struct!.authenticationProfile),
    authentication_sequence: cdktf.stringToTerraform(struct!.authenticationSequence),
    block_pages: cdktf.stringToTerraform(struct!.blockPages),
    certificate_management: adminRoleRoleVsysWebuiDeviceCertificateManagementToTerraform(struct!.certificateManagement),
    data_redistribution: cdktf.stringToTerraform(struct!.dataRedistribution),
    device_quarantine: cdktf.stringToTerraform(struct!.deviceQuarantine),
    dhcp_syslog_server: cdktf.stringToTerraform(struct!.dhcpSyslogServer),
    local_user_database: adminRoleRoleVsysWebuiDeviceLocalUserDatabaseToTerraform(struct!.localUserDatabase),
    log_settings: adminRoleRoleVsysWebuiDeviceLogSettingsToTerraform(struct!.logSettings),
    policy_recommendations: adminRoleRoleVsysWebuiDevicePolicyRecommendationsToTerraform(struct!.policyRecommendations),
    server_profile: adminRoleRoleVsysWebuiDeviceServerProfileToTerraform(struct!.serverProfile),
    setup: adminRoleRoleVsysWebuiDeviceSetupToTerraform(struct!.setup),
    troubleshooting: cdktf.stringToTerraform(struct!.troubleshooting),
    user_identification: cdktf.stringToTerraform(struct!.userIdentification),
    vm_info_source: cdktf.stringToTerraform(struct!.vmInfoSource),
  }
}


export function adminRoleRoleVsysWebuiDeviceToHclTerraform(struct?: AdminRoleRoleVsysWebuiDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administrators: {
      value: cdktf.stringToHclTerraform(struct!.administrators),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_profile: {
      value: cdktf.stringToHclTerraform(struct!.authenticationProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_sequence: {
      value: cdktf.stringToHclTerraform(struct!.authenticationSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_pages: {
      value: cdktf.stringToHclTerraform(struct!.blockPages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_management: {
      value: adminRoleRoleVsysWebuiDeviceCertificateManagementToHclTerraform(struct!.certificateManagement),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiDeviceCertificateManagement",
    },
    data_redistribution: {
      value: cdktf.stringToHclTerraform(struct!.dataRedistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_quarantine: {
      value: cdktf.stringToHclTerraform(struct!.deviceQuarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_syslog_server: {
      value: cdktf.stringToHclTerraform(struct!.dhcpSyslogServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_user_database: {
      value: adminRoleRoleVsysWebuiDeviceLocalUserDatabaseToHclTerraform(struct!.localUserDatabase),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiDeviceLocalUserDatabase",
    },
    log_settings: {
      value: adminRoleRoleVsysWebuiDeviceLogSettingsToHclTerraform(struct!.logSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiDeviceLogSettings",
    },
    policy_recommendations: {
      value: adminRoleRoleVsysWebuiDevicePolicyRecommendationsToHclTerraform(struct!.policyRecommendations),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiDevicePolicyRecommendations",
    },
    server_profile: {
      value: adminRoleRoleVsysWebuiDeviceServerProfileToHclTerraform(struct!.serverProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiDeviceServerProfile",
    },
    setup: {
      value: adminRoleRoleVsysWebuiDeviceSetupToHclTerraform(struct!.setup),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiDeviceSetup",
    },
    troubleshooting: {
      value: cdktf.stringToHclTerraform(struct!.troubleshooting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_identification: {
      value: cdktf.stringToHclTerraform(struct!.userIdentification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_info_source: {
      value: cdktf.stringToHclTerraform(struct!.vmInfoSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administrators !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrators = this._administrators;
    }
    if (this._authenticationProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationProfile = this._authenticationProfile;
    }
    if (this._authenticationSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationSequence = this._authenticationSequence;
    }
    if (this._blockPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPages = this._blockPages;
    }
    if (this._certificateManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateManagement = this._certificateManagement?.internalValue;
    }
    if (this._dataRedistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRedistribution = this._dataRedistribution;
    }
    if (this._deviceQuarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceQuarantine = this._deviceQuarantine;
    }
    if (this._dhcpSyslogServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSyslogServer = this._dhcpSyslogServer;
    }
    if (this._localUserDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUserDatabase = this._localUserDatabase?.internalValue;
    }
    if (this._logSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSettings = this._logSettings?.internalValue;
    }
    if (this._policyRecommendations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRecommendations = this._policyRecommendations?.internalValue;
    }
    if (this._serverProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProfile = this._serverProfile?.internalValue;
    }
    if (this._setup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setup = this._setup?.internalValue;
    }
    if (this._troubleshooting !== undefined) {
      hasAnyValues = true;
      internalValueResult.troubleshooting = this._troubleshooting;
    }
    if (this._userIdentification !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentification = this._userIdentification;
    }
    if (this._vmInfoSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmInfoSource = this._vmInfoSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._administrators = undefined;
      this._authenticationProfile = undefined;
      this._authenticationSequence = undefined;
      this._blockPages = undefined;
      this._certificateManagement.internalValue = undefined;
      this._dataRedistribution = undefined;
      this._deviceQuarantine = undefined;
      this._dhcpSyslogServer = undefined;
      this._localUserDatabase.internalValue = undefined;
      this._logSettings.internalValue = undefined;
      this._policyRecommendations.internalValue = undefined;
      this._serverProfile.internalValue = undefined;
      this._setup.internalValue = undefined;
      this._troubleshooting = undefined;
      this._userIdentification = undefined;
      this._vmInfoSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._administrators = value.administrators;
      this._authenticationProfile = value.authenticationProfile;
      this._authenticationSequence = value.authenticationSequence;
      this._blockPages = value.blockPages;
      this._certificateManagement.internalValue = value.certificateManagement;
      this._dataRedistribution = value.dataRedistribution;
      this._deviceQuarantine = value.deviceQuarantine;
      this._dhcpSyslogServer = value.dhcpSyslogServer;
      this._localUserDatabase.internalValue = value.localUserDatabase;
      this._logSettings.internalValue = value.logSettings;
      this._policyRecommendations.internalValue = value.policyRecommendations;
      this._serverProfile.internalValue = value.serverProfile;
      this._setup.internalValue = value.setup;
      this._troubleshooting = value.troubleshooting;
      this._userIdentification = value.userIdentification;
      this._vmInfoSource = value.vmInfoSource;
    }
  }

  // administrators - computed: false, optional: true, required: false
  private _administrators?: string; 
  public get administrators() {
    return this.getStringAttribute('administrators');
  }
  public set administrators(value: string) {
    this._administrators = value;
  }
  public resetAdministrators() {
    this._administrators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorsInput() {
    return this._administrators;
  }

  // authentication_profile - computed: false, optional: true, required: false
  private _authenticationProfile?: string; 
  public get authenticationProfile() {
    return this.getStringAttribute('authentication_profile');
  }
  public set authenticationProfile(value: string) {
    this._authenticationProfile = value;
  }
  public resetAuthenticationProfile() {
    this._authenticationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfileInput() {
    return this._authenticationProfile;
  }

  // authentication_sequence - computed: false, optional: true, required: false
  private _authenticationSequence?: string; 
  public get authenticationSequence() {
    return this.getStringAttribute('authentication_sequence');
  }
  public set authenticationSequence(value: string) {
    this._authenticationSequence = value;
  }
  public resetAuthenticationSequence() {
    this._authenticationSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSequenceInput() {
    return this._authenticationSequence;
  }

  // block_pages - computed: false, optional: true, required: false
  private _blockPages?: string; 
  public get blockPages() {
    return this.getStringAttribute('block_pages');
  }
  public set blockPages(value: string) {
    this._blockPages = value;
  }
  public resetBlockPages() {
    this._blockPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPagesInput() {
    return this._blockPages;
  }

  // certificate_management - computed: false, optional: true, required: false
  private _certificateManagement = new AdminRoleRoleVsysWebuiDeviceCertificateManagementOutputReference(this, "certificate_management");
  public get certificateManagement() {
    return this._certificateManagement;
  }
  public putCertificateManagement(value: AdminRoleRoleVsysWebuiDeviceCertificateManagement) {
    this._certificateManagement.internalValue = value;
  }
  public resetCertificateManagement() {
    this._certificateManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagementInput() {
    return this._certificateManagement.internalValue;
  }

  // data_redistribution - computed: false, optional: true, required: false
  private _dataRedistribution?: string; 
  public get dataRedistribution() {
    return this.getStringAttribute('data_redistribution');
  }
  public set dataRedistribution(value: string) {
    this._dataRedistribution = value;
  }
  public resetDataRedistribution() {
    this._dataRedistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRedistributionInput() {
    return this._dataRedistribution;
  }

  // device_quarantine - computed: false, optional: true, required: false
  private _deviceQuarantine?: string; 
  public get deviceQuarantine() {
    return this.getStringAttribute('device_quarantine');
  }
  public set deviceQuarantine(value: string) {
    this._deviceQuarantine = value;
  }
  public resetDeviceQuarantine() {
    this._deviceQuarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceQuarantineInput() {
    return this._deviceQuarantine;
  }

  // dhcp_syslog_server - computed: false, optional: true, required: false
  private _dhcpSyslogServer?: string; 
  public get dhcpSyslogServer() {
    return this.getStringAttribute('dhcp_syslog_server');
  }
  public set dhcpSyslogServer(value: string) {
    this._dhcpSyslogServer = value;
  }
  public resetDhcpSyslogServer() {
    this._dhcpSyslogServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSyslogServerInput() {
    return this._dhcpSyslogServer;
  }

  // local_user_database - computed: false, optional: true, required: false
  private _localUserDatabase = new AdminRoleRoleVsysWebuiDeviceLocalUserDatabaseOutputReference(this, "local_user_database");
  public get localUserDatabase() {
    return this._localUserDatabase;
  }
  public putLocalUserDatabase(value: AdminRoleRoleVsysWebuiDeviceLocalUserDatabase) {
    this._localUserDatabase.internalValue = value;
  }
  public resetLocalUserDatabase() {
    this._localUserDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUserDatabaseInput() {
    return this._localUserDatabase.internalValue;
  }

  // log_settings - computed: false, optional: true, required: false
  private _logSettings = new AdminRoleRoleVsysWebuiDeviceLogSettingsOutputReference(this, "log_settings");
  public get logSettings() {
    return this._logSettings;
  }
  public putLogSettings(value: AdminRoleRoleVsysWebuiDeviceLogSettings) {
    this._logSettings.internalValue = value;
  }
  public resetLogSettings() {
    this._logSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingsInput() {
    return this._logSettings.internalValue;
  }

  // policy_recommendations - computed: false, optional: true, required: false
  private _policyRecommendations = new AdminRoleRoleVsysWebuiDevicePolicyRecommendationsOutputReference(this, "policy_recommendations");
  public get policyRecommendations() {
    return this._policyRecommendations;
  }
  public putPolicyRecommendations(value: AdminRoleRoleVsysWebuiDevicePolicyRecommendations) {
    this._policyRecommendations.internalValue = value;
  }
  public resetPolicyRecommendations() {
    this._policyRecommendations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRecommendationsInput() {
    return this._policyRecommendations.internalValue;
  }

  // server_profile - computed: false, optional: true, required: false
  private _serverProfile = new AdminRoleRoleVsysWebuiDeviceServerProfileOutputReference(this, "server_profile");
  public get serverProfile() {
    return this._serverProfile;
  }
  public putServerProfile(value: AdminRoleRoleVsysWebuiDeviceServerProfile) {
    this._serverProfile.internalValue = value;
  }
  public resetServerProfile() {
    this._serverProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfileInput() {
    return this._serverProfile.internalValue;
  }

  // setup - computed: false, optional: true, required: false
  private _setup = new AdminRoleRoleVsysWebuiDeviceSetupOutputReference(this, "setup");
  public get setup() {
    return this._setup;
  }
  public putSetup(value: AdminRoleRoleVsysWebuiDeviceSetup) {
    this._setup.internalValue = value;
  }
  public resetSetup() {
    this._setup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setupInput() {
    return this._setup.internalValue;
  }

  // troubleshooting - computed: false, optional: true, required: false
  private _troubleshooting?: string; 
  public get troubleshooting() {
    return this.getStringAttribute('troubleshooting');
  }
  public set troubleshooting(value: string) {
    this._troubleshooting = value;
  }
  public resetTroubleshooting() {
    this._troubleshooting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get troubleshootingInput() {
    return this._troubleshooting;
  }

  // user_identification - computed: false, optional: true, required: false
  private _userIdentification?: string; 
  public get userIdentification() {
    return this.getStringAttribute('user_identification');
  }
  public set userIdentification(value: string) {
    this._userIdentification = value;
  }
  public resetUserIdentification() {
    this._userIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentificationInput() {
    return this._userIdentification;
  }

  // vm_info_source - computed: false, optional: true, required: false
  private _vmInfoSource?: string; 
  public get vmInfoSource() {
    return this.getStringAttribute('vm_info_source');
  }
  public set vmInfoSource(value: string) {
    this._vmInfoSource = value;
  }
  public resetVmInfoSource() {
    this._vmInfoSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInfoSourceInput() {
    return this._vmInfoSource;
  }
}
export interface AdminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#correlated_events AdminRole#correlated_events}
  */
  readonly correlatedEvents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#correlation_objects AdminRole#correlation_objects}
  */
  readonly correlationObjects?: string;
}

export function adminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngineToTerraform(struct?: AdminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlated_events: cdktf.stringToTerraform(struct!.correlatedEvents),
    correlation_objects: cdktf.stringToTerraform(struct!.correlationObjects),
  }
}


export function adminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngineToHclTerraform(struct?: AdminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlated_events: {
      value: cdktf.stringToHclTerraform(struct!.correlatedEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    correlation_objects: {
      value: cdktf.stringToHclTerraform(struct!.correlationObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlatedEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlatedEvents = this._correlatedEvents;
    }
    if (this._correlationObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlationObjects = this._correlationObjects;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._correlatedEvents = undefined;
      this._correlationObjects = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._correlatedEvents = value.correlatedEvents;
      this._correlationObjects = value.correlationObjects;
    }
  }

  // correlated_events - computed: false, optional: true, required: false
  private _correlatedEvents?: string; 
  public get correlatedEvents() {
    return this.getStringAttribute('correlated_events');
  }
  public set correlatedEvents(value: string) {
    this._correlatedEvents = value;
  }
  public resetCorrelatedEvents() {
    this._correlatedEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlatedEventsInput() {
    return this._correlatedEvents;
  }

  // correlation_objects - computed: false, optional: true, required: false
  private _correlationObjects?: string; 
  public get correlationObjects() {
    return this.getStringAttribute('correlation_objects');
  }
  public set correlationObjects(value: string) {
    this._correlationObjects = value;
  }
  public resetCorrelationObjects() {
    this._correlationObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationObjectsInput() {
    return this._correlationObjects;
  }
}
export interface AdminRoleRoleVsysWebuiMonitorCustomReports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_statistics AdminRole#application_statistics}
  */
  readonly applicationStatistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#auth AdminRole#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_filtering_log AdminRole#data_filtering_log}
  */
  readonly dataFilteringLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption_log AdminRole#decryption_log}
  */
  readonly decryptionLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption_summary AdminRole#decryption_summary}
  */
  readonly decryptionSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect AdminRole#globalprotect}
  */
  readonly globalprotect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp_log AdminRole#gtp_log}
  */
  readonly gtpLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp_summary AdminRole#gtp_summary}
  */
  readonly gtpSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hipmatch AdminRole#hipmatch}
  */
  readonly hipmatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#iptag AdminRole#iptag}
  */
  readonly iptag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp_log AdminRole#sctp_log}
  */
  readonly sctpLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp_summary AdminRole#sctp_summary}
  */
  readonly sctpSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#threat_log AdminRole#threat_log}
  */
  readonly threatLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#threat_summary AdminRole#threat_summary}
  */
  readonly threatSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#traffic_log AdminRole#traffic_log}
  */
  readonly trafficLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#traffic_summary AdminRole#traffic_summary}
  */
  readonly trafficSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_log AdminRole#tunnel_log}
  */
  readonly tunnelLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_summary AdminRole#tunnel_summary}
  */
  readonly tunnelSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_log AdminRole#url_log}
  */
  readonly urlLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_summary AdminRole#url_summary}
  */
  readonly urlSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#userid AdminRole#userid}
  */
  readonly userid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#wildfire_log AdminRole#wildfire_log}
  */
  readonly wildfireLog?: string;
}

export function adminRoleRoleVsysWebuiMonitorCustomReportsToTerraform(struct?: AdminRoleRoleVsysWebuiMonitorCustomReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_statistics: cdktf.stringToTerraform(struct!.applicationStatistics),
    auth: cdktf.stringToTerraform(struct!.auth),
    data_filtering_log: cdktf.stringToTerraform(struct!.dataFilteringLog),
    decryption_log: cdktf.stringToTerraform(struct!.decryptionLog),
    decryption_summary: cdktf.stringToTerraform(struct!.decryptionSummary),
    globalprotect: cdktf.stringToTerraform(struct!.globalprotect),
    gtp_log: cdktf.stringToTerraform(struct!.gtpLog),
    gtp_summary: cdktf.stringToTerraform(struct!.gtpSummary),
    hipmatch: cdktf.stringToTerraform(struct!.hipmatch),
    iptag: cdktf.stringToTerraform(struct!.iptag),
    sctp_log: cdktf.stringToTerraform(struct!.sctpLog),
    sctp_summary: cdktf.stringToTerraform(struct!.sctpSummary),
    threat_log: cdktf.stringToTerraform(struct!.threatLog),
    threat_summary: cdktf.stringToTerraform(struct!.threatSummary),
    traffic_log: cdktf.stringToTerraform(struct!.trafficLog),
    traffic_summary: cdktf.stringToTerraform(struct!.trafficSummary),
    tunnel_log: cdktf.stringToTerraform(struct!.tunnelLog),
    tunnel_summary: cdktf.stringToTerraform(struct!.tunnelSummary),
    url_log: cdktf.stringToTerraform(struct!.urlLog),
    url_summary: cdktf.stringToTerraform(struct!.urlSummary),
    userid: cdktf.stringToTerraform(struct!.userid),
    wildfire_log: cdktf.stringToTerraform(struct!.wildfireLog),
  }
}


export function adminRoleRoleVsysWebuiMonitorCustomReportsToHclTerraform(struct?: AdminRoleRoleVsysWebuiMonitorCustomReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_statistics: {
      value: cdktf.stringToHclTerraform(struct!.applicationStatistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_filtering_log: {
      value: cdktf.stringToHclTerraform(struct!.dataFilteringLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_log: {
      value: cdktf.stringToHclTerraform(struct!.decryptionLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_summary: {
      value: cdktf.stringToHclTerraform(struct!.decryptionSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect: {
      value: cdktf.stringToHclTerraform(struct!.globalprotect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_log: {
      value: cdktf.stringToHclTerraform(struct!.gtpLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_summary: {
      value: cdktf.stringToHclTerraform(struct!.gtpSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hipmatch: {
      value: cdktf.stringToHclTerraform(struct!.hipmatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptag: {
      value: cdktf.stringToHclTerraform(struct!.iptag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_log: {
      value: cdktf.stringToHclTerraform(struct!.sctpLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_summary: {
      value: cdktf.stringToHclTerraform(struct!.sctpSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_log: {
      value: cdktf.stringToHclTerraform(struct!.threatLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_summary: {
      value: cdktf.stringToHclTerraform(struct!.threatSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_log: {
      value: cdktf.stringToHclTerraform(struct!.trafficLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_summary: {
      value: cdktf.stringToHclTerraform(struct!.trafficSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_log: {
      value: cdktf.stringToHclTerraform(struct!.tunnelLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_summary: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_log: {
      value: cdktf.stringToHclTerraform(struct!.urlLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_summary: {
      value: cdktf.stringToHclTerraform(struct!.urlSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userid: {
      value: cdktf.stringToHclTerraform(struct!.userid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire_log: {
      value: cdktf.stringToHclTerraform(struct!.wildfireLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiMonitorCustomReportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiMonitorCustomReports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationStatistics = this._applicationStatistics;
    }
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._dataFilteringLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFilteringLog = this._dataFilteringLog;
    }
    if (this._decryptionLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionLog = this._decryptionLog;
    }
    if (this._decryptionSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionSummary = this._decryptionSummary;
    }
    if (this._globalprotect !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotect = this._globalprotect;
    }
    if (this._gtpLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpLog = this._gtpLog;
    }
    if (this._gtpSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSummary = this._gtpSummary;
    }
    if (this._hipmatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipmatch = this._hipmatch;
    }
    if (this._iptag !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptag = this._iptag;
    }
    if (this._sctpLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpLog = this._sctpLog;
    }
    if (this._sctpSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpSummary = this._sctpSummary;
    }
    if (this._threatLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatLog = this._threatLog;
    }
    if (this._threatSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatSummary = this._threatSummary;
    }
    if (this._trafficLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficLog = this._trafficLog;
    }
    if (this._trafficSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficSummary = this._trafficSummary;
    }
    if (this._tunnelLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelLog = this._tunnelLog;
    }
    if (this._tunnelSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSummary = this._tunnelSummary;
    }
    if (this._urlLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlLog = this._urlLog;
    }
    if (this._urlSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSummary = this._urlSummary;
    }
    if (this._userid !== undefined) {
      hasAnyValues = true;
      internalValueResult.userid = this._userid;
    }
    if (this._wildfireLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireLog = this._wildfireLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiMonitorCustomReports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationStatistics = undefined;
      this._auth = undefined;
      this._dataFilteringLog = undefined;
      this._decryptionLog = undefined;
      this._decryptionSummary = undefined;
      this._globalprotect = undefined;
      this._gtpLog = undefined;
      this._gtpSummary = undefined;
      this._hipmatch = undefined;
      this._iptag = undefined;
      this._sctpLog = undefined;
      this._sctpSummary = undefined;
      this._threatLog = undefined;
      this._threatSummary = undefined;
      this._trafficLog = undefined;
      this._trafficSummary = undefined;
      this._tunnelLog = undefined;
      this._tunnelSummary = undefined;
      this._urlLog = undefined;
      this._urlSummary = undefined;
      this._userid = undefined;
      this._wildfireLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationStatistics = value.applicationStatistics;
      this._auth = value.auth;
      this._dataFilteringLog = value.dataFilteringLog;
      this._decryptionLog = value.decryptionLog;
      this._decryptionSummary = value.decryptionSummary;
      this._globalprotect = value.globalprotect;
      this._gtpLog = value.gtpLog;
      this._gtpSummary = value.gtpSummary;
      this._hipmatch = value.hipmatch;
      this._iptag = value.iptag;
      this._sctpLog = value.sctpLog;
      this._sctpSummary = value.sctpSummary;
      this._threatLog = value.threatLog;
      this._threatSummary = value.threatSummary;
      this._trafficLog = value.trafficLog;
      this._trafficSummary = value.trafficSummary;
      this._tunnelLog = value.tunnelLog;
      this._tunnelSummary = value.tunnelSummary;
      this._urlLog = value.urlLog;
      this._urlSummary = value.urlSummary;
      this._userid = value.userid;
      this._wildfireLog = value.wildfireLog;
    }
  }

  // application_statistics - computed: false, optional: true, required: false
  private _applicationStatistics?: string; 
  public get applicationStatistics() {
    return this.getStringAttribute('application_statistics');
  }
  public set applicationStatistics(value: string) {
    this._applicationStatistics = value;
  }
  public resetApplicationStatistics() {
    this._applicationStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationStatisticsInput() {
    return this._applicationStatistics;
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // data_filtering_log - computed: false, optional: true, required: false
  private _dataFilteringLog?: string; 
  public get dataFilteringLog() {
    return this.getStringAttribute('data_filtering_log');
  }
  public set dataFilteringLog(value: string) {
    this._dataFilteringLog = value;
  }
  public resetDataFilteringLog() {
    this._dataFilteringLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringLogInput() {
    return this._dataFilteringLog;
  }

  // decryption_log - computed: false, optional: true, required: false
  private _decryptionLog?: string; 
  public get decryptionLog() {
    return this.getStringAttribute('decryption_log');
  }
  public set decryptionLog(value: string) {
    this._decryptionLog = value;
  }
  public resetDecryptionLog() {
    this._decryptionLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionLogInput() {
    return this._decryptionLog;
  }

  // decryption_summary - computed: false, optional: true, required: false
  private _decryptionSummary?: string; 
  public get decryptionSummary() {
    return this.getStringAttribute('decryption_summary');
  }
  public set decryptionSummary(value: string) {
    this._decryptionSummary = value;
  }
  public resetDecryptionSummary() {
    this._decryptionSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionSummaryInput() {
    return this._decryptionSummary;
  }

  // globalprotect - computed: false, optional: true, required: false
  private _globalprotect?: string; 
  public get globalprotect() {
    return this.getStringAttribute('globalprotect');
  }
  public set globalprotect(value: string) {
    this._globalprotect = value;
  }
  public resetGlobalprotect() {
    this._globalprotect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectInput() {
    return this._globalprotect;
  }

  // gtp_log - computed: false, optional: true, required: false
  private _gtpLog?: string; 
  public get gtpLog() {
    return this.getStringAttribute('gtp_log');
  }
  public set gtpLog(value: string) {
    this._gtpLog = value;
  }
  public resetGtpLog() {
    this._gtpLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpLogInput() {
    return this._gtpLog;
  }

  // gtp_summary - computed: false, optional: true, required: false
  private _gtpSummary?: string; 
  public get gtpSummary() {
    return this.getStringAttribute('gtp_summary');
  }
  public set gtpSummary(value: string) {
    this._gtpSummary = value;
  }
  public resetGtpSummary() {
    this._gtpSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSummaryInput() {
    return this._gtpSummary;
  }

  // hipmatch - computed: false, optional: true, required: false
  private _hipmatch?: string; 
  public get hipmatch() {
    return this.getStringAttribute('hipmatch');
  }
  public set hipmatch(value: string) {
    this._hipmatch = value;
  }
  public resetHipmatch() {
    this._hipmatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipmatchInput() {
    return this._hipmatch;
  }

  // iptag - computed: false, optional: true, required: false
  private _iptag?: string; 
  public get iptag() {
    return this.getStringAttribute('iptag');
  }
  public set iptag(value: string) {
    this._iptag = value;
  }
  public resetIptag() {
    this._iptag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptagInput() {
    return this._iptag;
  }

  // sctp_log - computed: false, optional: true, required: false
  private _sctpLog?: string; 
  public get sctpLog() {
    return this.getStringAttribute('sctp_log');
  }
  public set sctpLog(value: string) {
    this._sctpLog = value;
  }
  public resetSctpLog() {
    this._sctpLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpLogInput() {
    return this._sctpLog;
  }

  // sctp_summary - computed: false, optional: true, required: false
  private _sctpSummary?: string; 
  public get sctpSummary() {
    return this.getStringAttribute('sctp_summary');
  }
  public set sctpSummary(value: string) {
    this._sctpSummary = value;
  }
  public resetSctpSummary() {
    this._sctpSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpSummaryInput() {
    return this._sctpSummary;
  }

  // threat_log - computed: false, optional: true, required: false
  private _threatLog?: string; 
  public get threatLog() {
    return this.getStringAttribute('threat_log');
  }
  public set threatLog(value: string) {
    this._threatLog = value;
  }
  public resetThreatLog() {
    this._threatLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatLogInput() {
    return this._threatLog;
  }

  // threat_summary - computed: false, optional: true, required: false
  private _threatSummary?: string; 
  public get threatSummary() {
    return this.getStringAttribute('threat_summary');
  }
  public set threatSummary(value: string) {
    this._threatSummary = value;
  }
  public resetThreatSummary() {
    this._threatSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatSummaryInput() {
    return this._threatSummary;
  }

  // traffic_log - computed: false, optional: true, required: false
  private _trafficLog?: string; 
  public get trafficLog() {
    return this.getStringAttribute('traffic_log');
  }
  public set trafficLog(value: string) {
    this._trafficLog = value;
  }
  public resetTrafficLog() {
    this._trafficLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficLogInput() {
    return this._trafficLog;
  }

  // traffic_summary - computed: false, optional: true, required: false
  private _trafficSummary?: string; 
  public get trafficSummary() {
    return this.getStringAttribute('traffic_summary');
  }
  public set trafficSummary(value: string) {
    this._trafficSummary = value;
  }
  public resetTrafficSummary() {
    this._trafficSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSummaryInput() {
    return this._trafficSummary;
  }

  // tunnel_log - computed: false, optional: true, required: false
  private _tunnelLog?: string; 
  public get tunnelLog() {
    return this.getStringAttribute('tunnel_log');
  }
  public set tunnelLog(value: string) {
    this._tunnelLog = value;
  }
  public resetTunnelLog() {
    this._tunnelLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelLogInput() {
    return this._tunnelLog;
  }

  // tunnel_summary - computed: false, optional: true, required: false
  private _tunnelSummary?: string; 
  public get tunnelSummary() {
    return this.getStringAttribute('tunnel_summary');
  }
  public set tunnelSummary(value: string) {
    this._tunnelSummary = value;
  }
  public resetTunnelSummary() {
    this._tunnelSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSummaryInput() {
    return this._tunnelSummary;
  }

  // url_log - computed: false, optional: true, required: false
  private _urlLog?: string; 
  public get urlLog() {
    return this.getStringAttribute('url_log');
  }
  public set urlLog(value: string) {
    this._urlLog = value;
  }
  public resetUrlLog() {
    this._urlLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlLogInput() {
    return this._urlLog;
  }

  // url_summary - computed: false, optional: true, required: false
  private _urlSummary?: string; 
  public get urlSummary() {
    return this.getStringAttribute('url_summary');
  }
  public set urlSummary(value: string) {
    this._urlSummary = value;
  }
  public resetUrlSummary() {
    this._urlSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSummaryInput() {
    return this._urlSummary;
  }

  // userid - computed: false, optional: true, required: false
  private _userid?: string; 
  public get userid() {
    return this.getStringAttribute('userid');
  }
  public set userid(value: string) {
    this._userid = value;
  }
  public resetUserid() {
    this._userid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridInput() {
    return this._userid;
  }

  // wildfire_log - computed: false, optional: true, required: false
  private _wildfireLog?: string; 
  public get wildfireLog() {
    return this.getStringAttribute('wildfire_log');
  }
  public set wildfireLog(value: string) {
    this._wildfireLog = value;
  }
  public resetWildfireLog() {
    this._wildfireLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireLogInput() {
    return this._wildfireLog;
  }
}
export interface AdminRoleRoleVsysWebuiMonitorLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication AdminRole#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_filtering AdminRole#data_filtering}
  */
  readonly dataFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption AdminRole#decryption}
  */
  readonly decryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#globalprotect AdminRole#globalprotect}
  */
  readonly globalprotect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp AdminRole#gtp}
  */
  readonly gtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hipmatch AdminRole#hipmatch}
  */
  readonly hipmatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#iptag AdminRole#iptag}
  */
  readonly iptag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp AdminRole#sctp}
  */
  readonly sctp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#threat AdminRole#threat}
  */
  readonly threat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#traffic AdminRole#traffic}
  */
  readonly traffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel AdminRole#tunnel}
  */
  readonly tunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url AdminRole#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#userid AdminRole#userid}
  */
  readonly userid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#wildfire AdminRole#wildfire}
  */
  readonly wildfire?: string;
}

export function adminRoleRoleVsysWebuiMonitorLogsToTerraform(struct?: AdminRoleRoleVsysWebuiMonitorLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    data_filtering: cdktf.stringToTerraform(struct!.dataFiltering),
    decryption: cdktf.stringToTerraform(struct!.decryption),
    globalprotect: cdktf.stringToTerraform(struct!.globalprotect),
    gtp: cdktf.stringToTerraform(struct!.gtp),
    hipmatch: cdktf.stringToTerraform(struct!.hipmatch),
    iptag: cdktf.stringToTerraform(struct!.iptag),
    sctp: cdktf.stringToTerraform(struct!.sctp),
    threat: cdktf.stringToTerraform(struct!.threat),
    traffic: cdktf.stringToTerraform(struct!.traffic),
    tunnel: cdktf.stringToTerraform(struct!.tunnel),
    url: cdktf.stringToTerraform(struct!.url),
    userid: cdktf.stringToTerraform(struct!.userid),
    wildfire: cdktf.stringToTerraform(struct!.wildfire),
  }
}


export function adminRoleRoleVsysWebuiMonitorLogsToHclTerraform(struct?: AdminRoleRoleVsysWebuiMonitorLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_filtering: {
      value: cdktf.stringToHclTerraform(struct!.dataFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption: {
      value: cdktf.stringToHclTerraform(struct!.decryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalprotect: {
      value: cdktf.stringToHclTerraform(struct!.globalprotect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp: {
      value: cdktf.stringToHclTerraform(struct!.gtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hipmatch: {
      value: cdktf.stringToHclTerraform(struct!.hipmatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptag: {
      value: cdktf.stringToHclTerraform(struct!.iptag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp: {
      value: cdktf.stringToHclTerraform(struct!.sctp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat: {
      value: cdktf.stringToHclTerraform(struct!.threat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic: {
      value: cdktf.stringToHclTerraform(struct!.traffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel: {
      value: cdktf.stringToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userid: {
      value: cdktf.stringToHclTerraform(struct!.userid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire: {
      value: cdktf.stringToHclTerraform(struct!.wildfire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiMonitorLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiMonitorLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._dataFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFiltering = this._dataFiltering;
    }
    if (this._decryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryption = this._decryption;
    }
    if (this._globalprotect !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalprotect = this._globalprotect;
    }
    if (this._gtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtp = this._gtp;
    }
    if (this._hipmatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipmatch = this._hipmatch;
    }
    if (this._iptag !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptag = this._iptag;
    }
    if (this._sctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctp = this._sctp;
    }
    if (this._threat !== undefined) {
      hasAnyValues = true;
      internalValueResult.threat = this._threat;
    }
    if (this._traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userid !== undefined) {
      hasAnyValues = true;
      internalValueResult.userid = this._userid;
    }
    if (this._wildfire !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfire = this._wildfire;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiMonitorLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._dataFiltering = undefined;
      this._decryption = undefined;
      this._globalprotect = undefined;
      this._gtp = undefined;
      this._hipmatch = undefined;
      this._iptag = undefined;
      this._sctp = undefined;
      this._threat = undefined;
      this._traffic = undefined;
      this._tunnel = undefined;
      this._url = undefined;
      this._userid = undefined;
      this._wildfire = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._dataFiltering = value.dataFiltering;
      this._decryption = value.decryption;
      this._globalprotect = value.globalprotect;
      this._gtp = value.gtp;
      this._hipmatch = value.hipmatch;
      this._iptag = value.iptag;
      this._sctp = value.sctp;
      this._threat = value.threat;
      this._traffic = value.traffic;
      this._tunnel = value.tunnel;
      this._url = value.url;
      this._userid = value.userid;
      this._wildfire = value.wildfire;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // data_filtering - computed: false, optional: true, required: false
  private _dataFiltering?: string; 
  public get dataFiltering() {
    return this.getStringAttribute('data_filtering');
  }
  public set dataFiltering(value: string) {
    this._dataFiltering = value;
  }
  public resetDataFiltering() {
    this._dataFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringInput() {
    return this._dataFiltering;
  }

  // decryption - computed: false, optional: true, required: false
  private _decryption?: string; 
  public get decryption() {
    return this.getStringAttribute('decryption');
  }
  public set decryption(value: string) {
    this._decryption = value;
  }
  public resetDecryption() {
    this._decryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionInput() {
    return this._decryption;
  }

  // globalprotect - computed: false, optional: true, required: false
  private _globalprotect?: string; 
  public get globalprotect() {
    return this.getStringAttribute('globalprotect');
  }
  public set globalprotect(value: string) {
    this._globalprotect = value;
  }
  public resetGlobalprotect() {
    this._globalprotect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalprotectInput() {
    return this._globalprotect;
  }

  // gtp - computed: false, optional: true, required: false
  private _gtp?: string; 
  public get gtp() {
    return this.getStringAttribute('gtp');
  }
  public set gtp(value: string) {
    this._gtp = value;
  }
  public resetGtp() {
    this._gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
  }

  // hipmatch - computed: false, optional: true, required: false
  private _hipmatch?: string; 
  public get hipmatch() {
    return this.getStringAttribute('hipmatch');
  }
  public set hipmatch(value: string) {
    this._hipmatch = value;
  }
  public resetHipmatch() {
    this._hipmatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipmatchInput() {
    return this._hipmatch;
  }

  // iptag - computed: false, optional: true, required: false
  private _iptag?: string; 
  public get iptag() {
    return this.getStringAttribute('iptag');
  }
  public set iptag(value: string) {
    this._iptag = value;
  }
  public resetIptag() {
    this._iptag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptagInput() {
    return this._iptag;
  }

  // sctp - computed: false, optional: true, required: false
  private _sctp?: string; 
  public get sctp() {
    return this.getStringAttribute('sctp');
  }
  public set sctp(value: string) {
    this._sctp = value;
  }
  public resetSctp() {
    this._sctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpInput() {
    return this._sctp;
  }

  // threat - computed: false, optional: true, required: false
  private _threat?: string; 
  public get threat() {
    return this.getStringAttribute('threat');
  }
  public set threat(value: string) {
    this._threat = value;
  }
  public resetThreat() {
    this._threat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatInput() {
    return this._threat;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: string; 
  public get tunnel() {
    return this.getStringAttribute('tunnel');
  }
  public set tunnel(value: string) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // userid - computed: false, optional: true, required: false
  private _userid?: string; 
  public get userid() {
    return this.getStringAttribute('userid');
  }
  public set userid(value: string) {
    this._userid = value;
  }
  public resetUserid() {
    this._userid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridInput() {
    return this._userid;
  }

  // wildfire - computed: false, optional: true, required: false
  private _wildfire?: string; 
  public get wildfire() {
    return this.getStringAttribute('wildfire');
  }
  public set wildfire(value: string) {
    this._wildfire = value;
  }
  public resetWildfire() {
    this._wildfire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireInput() {
    return this._wildfire;
  }
}
export interface AdminRoleRoleVsysWebuiMonitorPdfReports {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#email_scheduler AdminRole#email_scheduler}
  */
  readonly emailScheduler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#manage_pdf_summary AdminRole#manage_pdf_summary}
  */
  readonly managePdfSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#pdf_summary_reports AdminRole#pdf_summary_reports}
  */
  readonly pdfSummaryReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#report_groups AdminRole#report_groups}
  */
  readonly reportGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#saas_application_usage_report AdminRole#saas_application_usage_report}
  */
  readonly saasApplicationUsageReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#user_activity_report AdminRole#user_activity_report}
  */
  readonly userActivityReport?: string;
}

export function adminRoleRoleVsysWebuiMonitorPdfReportsToTerraform(struct?: AdminRoleRoleVsysWebuiMonitorPdfReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_scheduler: cdktf.stringToTerraform(struct!.emailScheduler),
    manage_pdf_summary: cdktf.stringToTerraform(struct!.managePdfSummary),
    pdf_summary_reports: cdktf.stringToTerraform(struct!.pdfSummaryReports),
    report_groups: cdktf.stringToTerraform(struct!.reportGroups),
    saas_application_usage_report: cdktf.stringToTerraform(struct!.saasApplicationUsageReport),
    user_activity_report: cdktf.stringToTerraform(struct!.userActivityReport),
  }
}


export function adminRoleRoleVsysWebuiMonitorPdfReportsToHclTerraform(struct?: AdminRoleRoleVsysWebuiMonitorPdfReports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_scheduler: {
      value: cdktf.stringToHclTerraform(struct!.emailScheduler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manage_pdf_summary: {
      value: cdktf.stringToHclTerraform(struct!.managePdfSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdf_summary_reports: {
      value: cdktf.stringToHclTerraform(struct!.pdfSummaryReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_groups: {
      value: cdktf.stringToHclTerraform(struct!.reportGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saas_application_usage_report: {
      value: cdktf.stringToHclTerraform(struct!.saasApplicationUsageReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_activity_report: {
      value: cdktf.stringToHclTerraform(struct!.userActivityReport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiMonitorPdfReportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiMonitorPdfReports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailScheduler !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailScheduler = this._emailScheduler;
    }
    if (this._managePdfSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.managePdfSummary = this._managePdfSummary;
    }
    if (this._pdfSummaryReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfSummaryReports = this._pdfSummaryReports;
    }
    if (this._reportGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportGroups = this._reportGroups;
    }
    if (this._saasApplicationUsageReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.saasApplicationUsageReport = this._saasApplicationUsageReport;
    }
    if (this._userActivityReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.userActivityReport = this._userActivityReport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiMonitorPdfReports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailScheduler = undefined;
      this._managePdfSummary = undefined;
      this._pdfSummaryReports = undefined;
      this._reportGroups = undefined;
      this._saasApplicationUsageReport = undefined;
      this._userActivityReport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailScheduler = value.emailScheduler;
      this._managePdfSummary = value.managePdfSummary;
      this._pdfSummaryReports = value.pdfSummaryReports;
      this._reportGroups = value.reportGroups;
      this._saasApplicationUsageReport = value.saasApplicationUsageReport;
      this._userActivityReport = value.userActivityReport;
    }
  }

  // email_scheduler - computed: false, optional: true, required: false
  private _emailScheduler?: string; 
  public get emailScheduler() {
    return this.getStringAttribute('email_scheduler');
  }
  public set emailScheduler(value: string) {
    this._emailScheduler = value;
  }
  public resetEmailScheduler() {
    this._emailScheduler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSchedulerInput() {
    return this._emailScheduler;
  }

  // manage_pdf_summary - computed: false, optional: true, required: false
  private _managePdfSummary?: string; 
  public get managePdfSummary() {
    return this.getStringAttribute('manage_pdf_summary');
  }
  public set managePdfSummary(value: string) {
    this._managePdfSummary = value;
  }
  public resetManagePdfSummary() {
    this._managePdfSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managePdfSummaryInput() {
    return this._managePdfSummary;
  }

  // pdf_summary_reports - computed: false, optional: true, required: false
  private _pdfSummaryReports?: string; 
  public get pdfSummaryReports() {
    return this.getStringAttribute('pdf_summary_reports');
  }
  public set pdfSummaryReports(value: string) {
    this._pdfSummaryReports = value;
  }
  public resetPdfSummaryReports() {
    this._pdfSummaryReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfSummaryReportsInput() {
    return this._pdfSummaryReports;
  }

  // report_groups - computed: false, optional: true, required: false
  private _reportGroups?: string; 
  public get reportGroups() {
    return this.getStringAttribute('report_groups');
  }
  public set reportGroups(value: string) {
    this._reportGroups = value;
  }
  public resetReportGroups() {
    this._reportGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportGroupsInput() {
    return this._reportGroups;
  }

  // saas_application_usage_report - computed: false, optional: true, required: false
  private _saasApplicationUsageReport?: string; 
  public get saasApplicationUsageReport() {
    return this.getStringAttribute('saas_application_usage_report');
  }
  public set saasApplicationUsageReport(value: string) {
    this._saasApplicationUsageReport = value;
  }
  public resetSaasApplicationUsageReport() {
    this._saasApplicationUsageReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasApplicationUsageReportInput() {
    return this._saasApplicationUsageReport;
  }

  // user_activity_report - computed: false, optional: true, required: false
  private _userActivityReport?: string; 
  public get userActivityReport() {
    return this.getStringAttribute('user_activity_report');
  }
  public set userActivityReport(value: string) {
    this._userActivityReport = value;
  }
  public resetUserActivityReport() {
    this._userActivityReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActivityReportInput() {
    return this._userActivityReport;
  }
}
export interface AdminRoleRoleVsysWebuiMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#app_scope AdminRole#app_scope}
  */
  readonly appScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#automated_correlation_engine AdminRole#automated_correlation_engine}
  */
  readonly automatedCorrelationEngine?: AdminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngine;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#block_ip_list AdminRole#block_ip_list}
  */
  readonly blockIpList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_reports AdminRole#custom_reports}
  */
  readonly customReports?: AdminRoleRoleVsysWebuiMonitorCustomReports;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#external_logs AdminRole#external_logs}
  */
  readonly externalLogs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#logs AdminRole#logs}
  */
  readonly logs?: AdminRoleRoleVsysWebuiMonitorLogs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#pdf_reports AdminRole#pdf_reports}
  */
  readonly pdfReports?: AdminRoleRoleVsysWebuiMonitorPdfReports;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#session_browser AdminRole#session_browser}
  */
  readonly sessionBrowser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#view_custom_reports AdminRole#view_custom_reports}
  */
  readonly viewCustomReports?: string;
}

export function adminRoleRoleVsysWebuiMonitorToTerraform(struct?: AdminRoleRoleVsysWebuiMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_scope: cdktf.stringToTerraform(struct!.appScope),
    automated_correlation_engine: adminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngineToTerraform(struct!.automatedCorrelationEngine),
    block_ip_list: cdktf.stringToTerraform(struct!.blockIpList),
    custom_reports: adminRoleRoleVsysWebuiMonitorCustomReportsToTerraform(struct!.customReports),
    external_logs: cdktf.stringToTerraform(struct!.externalLogs),
    logs: adminRoleRoleVsysWebuiMonitorLogsToTerraform(struct!.logs),
    pdf_reports: adminRoleRoleVsysWebuiMonitorPdfReportsToTerraform(struct!.pdfReports),
    session_browser: cdktf.stringToTerraform(struct!.sessionBrowser),
    view_custom_reports: cdktf.stringToTerraform(struct!.viewCustomReports),
  }
}


export function adminRoleRoleVsysWebuiMonitorToHclTerraform(struct?: AdminRoleRoleVsysWebuiMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_scope: {
      value: cdktf.stringToHclTerraform(struct!.appScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automated_correlation_engine: {
      value: adminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngineToHclTerraform(struct!.automatedCorrelationEngine),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngine",
    },
    block_ip_list: {
      value: cdktf.stringToHclTerraform(struct!.blockIpList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_reports: {
      value: adminRoleRoleVsysWebuiMonitorCustomReportsToHclTerraform(struct!.customReports),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiMonitorCustomReports",
    },
    external_logs: {
      value: cdktf.stringToHclTerraform(struct!.externalLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logs: {
      value: adminRoleRoleVsysWebuiMonitorLogsToHclTerraform(struct!.logs),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiMonitorLogs",
    },
    pdf_reports: {
      value: adminRoleRoleVsysWebuiMonitorPdfReportsToHclTerraform(struct!.pdfReports),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiMonitorPdfReports",
    },
    session_browser: {
      value: cdktf.stringToHclTerraform(struct!.sessionBrowser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_custom_reports: {
      value: cdktf.stringToHclTerraform(struct!.viewCustomReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.appScope = this._appScope;
    }
    if (this._automatedCorrelationEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatedCorrelationEngine = this._automatedCorrelationEngine?.internalValue;
    }
    if (this._blockIpList !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpList = this._blockIpList;
    }
    if (this._customReports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customReports = this._customReports?.internalValue;
    }
    if (this._externalLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLogs = this._externalLogs;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._pdfReports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdfReports = this._pdfReports?.internalValue;
    }
    if (this._sessionBrowser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionBrowser = this._sessionBrowser;
    }
    if (this._viewCustomReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewCustomReports = this._viewCustomReports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appScope = undefined;
      this._automatedCorrelationEngine.internalValue = undefined;
      this._blockIpList = undefined;
      this._customReports.internalValue = undefined;
      this._externalLogs = undefined;
      this._logs.internalValue = undefined;
      this._pdfReports.internalValue = undefined;
      this._sessionBrowser = undefined;
      this._viewCustomReports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appScope = value.appScope;
      this._automatedCorrelationEngine.internalValue = value.automatedCorrelationEngine;
      this._blockIpList = value.blockIpList;
      this._customReports.internalValue = value.customReports;
      this._externalLogs = value.externalLogs;
      this._logs.internalValue = value.logs;
      this._pdfReports.internalValue = value.pdfReports;
      this._sessionBrowser = value.sessionBrowser;
      this._viewCustomReports = value.viewCustomReports;
    }
  }

  // app_scope - computed: false, optional: true, required: false
  private _appScope?: string; 
  public get appScope() {
    return this.getStringAttribute('app_scope');
  }
  public set appScope(value: string) {
    this._appScope = value;
  }
  public resetAppScope() {
    this._appScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appScopeInput() {
    return this._appScope;
  }

  // automated_correlation_engine - computed: false, optional: true, required: false
  private _automatedCorrelationEngine = new AdminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngineOutputReference(this, "automated_correlation_engine");
  public get automatedCorrelationEngine() {
    return this._automatedCorrelationEngine;
  }
  public putAutomatedCorrelationEngine(value: AdminRoleRoleVsysWebuiMonitorAutomatedCorrelationEngine) {
    this._automatedCorrelationEngine.internalValue = value;
  }
  public resetAutomatedCorrelationEngine() {
    this._automatedCorrelationEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedCorrelationEngineInput() {
    return this._automatedCorrelationEngine.internalValue;
  }

  // block_ip_list - computed: false, optional: true, required: false
  private _blockIpList?: string; 
  public get blockIpList() {
    return this.getStringAttribute('block_ip_list');
  }
  public set blockIpList(value: string) {
    this._blockIpList = value;
  }
  public resetBlockIpList() {
    this._blockIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpListInput() {
    return this._blockIpList;
  }

  // custom_reports - computed: false, optional: true, required: false
  private _customReports = new AdminRoleRoleVsysWebuiMonitorCustomReportsOutputReference(this, "custom_reports");
  public get customReports() {
    return this._customReports;
  }
  public putCustomReports(value: AdminRoleRoleVsysWebuiMonitorCustomReports) {
    this._customReports.internalValue = value;
  }
  public resetCustomReports() {
    this._customReports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customReportsInput() {
    return this._customReports.internalValue;
  }

  // external_logs - computed: false, optional: true, required: false
  private _externalLogs?: string; 
  public get externalLogs() {
    return this.getStringAttribute('external_logs');
  }
  public set externalLogs(value: string) {
    this._externalLogs = value;
  }
  public resetExternalLogs() {
    this._externalLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLogsInput() {
    return this._externalLogs;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new AdminRoleRoleVsysWebuiMonitorLogsOutputReference(this, "logs");
  public get logs() {
    return this._logs;
  }
  public putLogs(value: AdminRoleRoleVsysWebuiMonitorLogs) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // pdf_reports - computed: false, optional: true, required: false
  private _pdfReports = new AdminRoleRoleVsysWebuiMonitorPdfReportsOutputReference(this, "pdf_reports");
  public get pdfReports() {
    return this._pdfReports;
  }
  public putPdfReports(value: AdminRoleRoleVsysWebuiMonitorPdfReports) {
    this._pdfReports.internalValue = value;
  }
  public resetPdfReports() {
    this._pdfReports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfReportsInput() {
    return this._pdfReports.internalValue;
  }

  // session_browser - computed: false, optional: true, required: false
  private _sessionBrowser?: string; 
  public get sessionBrowser() {
    return this.getStringAttribute('session_browser');
  }
  public set sessionBrowser(value: string) {
    this._sessionBrowser = value;
  }
  public resetSessionBrowser() {
    this._sessionBrowser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionBrowserInput() {
    return this._sessionBrowser;
  }

  // view_custom_reports - computed: false, optional: true, required: false
  private _viewCustomReports?: string; 
  public get viewCustomReports() {
    return this.getStringAttribute('view_custom_reports');
  }
  public set viewCustomReports(value: string) {
    this._viewCustomReports = value;
  }
  public resetViewCustomReports() {
    this._viewCustomReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewCustomReportsInput() {
    return this._viewCustomReports;
  }
}
export interface AdminRoleRoleVsysWebuiNetworkGlobalProtect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#clientless_app_groups AdminRole#clientless_app_groups}
  */
  readonly clientlessAppGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#clientless_apps AdminRole#clientless_apps}
  */
  readonly clientlessApps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gateways AdminRole#gateways}
  */
  readonly gateways?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#mdm AdminRole#mdm}
  */
  readonly mdm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#portals AdminRole#portals}
  */
  readonly portals?: string;
}

export function adminRoleRoleVsysWebuiNetworkGlobalProtectToTerraform(struct?: AdminRoleRoleVsysWebuiNetworkGlobalProtect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clientless_app_groups: cdktf.stringToTerraform(struct!.clientlessAppGroups),
    clientless_apps: cdktf.stringToTerraform(struct!.clientlessApps),
    gateways: cdktf.stringToTerraform(struct!.gateways),
    mdm: cdktf.stringToTerraform(struct!.mdm),
    portals: cdktf.stringToTerraform(struct!.portals),
  }
}


export function adminRoleRoleVsysWebuiNetworkGlobalProtectToHclTerraform(struct?: AdminRoleRoleVsysWebuiNetworkGlobalProtect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clientless_app_groups: {
      value: cdktf.stringToHclTerraform(struct!.clientlessAppGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clientless_apps: {
      value: cdktf.stringToHclTerraform(struct!.clientlessApps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateways: {
      value: cdktf.stringToHclTerraform(struct!.gateways),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdm: {
      value: cdktf.stringToHclTerraform(struct!.mdm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portals: {
      value: cdktf.stringToHclTerraform(struct!.portals),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiNetworkGlobalProtectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiNetworkGlobalProtect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientlessAppGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientlessAppGroups = this._clientlessAppGroups;
    }
    if (this._clientlessApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientlessApps = this._clientlessApps;
    }
    if (this._gateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways;
    }
    if (this._mdm !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdm = this._mdm;
    }
    if (this._portals !== undefined) {
      hasAnyValues = true;
      internalValueResult.portals = this._portals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiNetworkGlobalProtect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientlessAppGroups = undefined;
      this._clientlessApps = undefined;
      this._gateways = undefined;
      this._mdm = undefined;
      this._portals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientlessAppGroups = value.clientlessAppGroups;
      this._clientlessApps = value.clientlessApps;
      this._gateways = value.gateways;
      this._mdm = value.mdm;
      this._portals = value.portals;
    }
  }

  // clientless_app_groups - computed: false, optional: true, required: false
  private _clientlessAppGroups?: string; 
  public get clientlessAppGroups() {
    return this.getStringAttribute('clientless_app_groups');
  }
  public set clientlessAppGroups(value: string) {
    this._clientlessAppGroups = value;
  }
  public resetClientlessAppGroups() {
    this._clientlessAppGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlessAppGroupsInput() {
    return this._clientlessAppGroups;
  }

  // clientless_apps - computed: false, optional: true, required: false
  private _clientlessApps?: string; 
  public get clientlessApps() {
    return this.getStringAttribute('clientless_apps');
  }
  public set clientlessApps(value: string) {
    this._clientlessApps = value;
  }
  public resetClientlessApps() {
    this._clientlessApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlessAppsInput() {
    return this._clientlessApps;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string; 
  public get gateways() {
    return this.getStringAttribute('gateways');
  }
  public set gateways(value: string) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
  }

  // mdm - computed: false, optional: true, required: false
  private _mdm?: string; 
  public get mdm() {
    return this.getStringAttribute('mdm');
  }
  public set mdm(value: string) {
    this._mdm = value;
  }
  public resetMdm() {
    this._mdm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmInput() {
    return this._mdm;
  }

  // portals - computed: false, optional: true, required: false
  private _portals?: string; 
  public get portals() {
    return this.getStringAttribute('portals');
  }
  public set portals(value: string) {
    this._portals = value;
  }
  public resetPortals() {
    this._portals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalsInput() {
    return this._portals;
  }
}
export interface AdminRoleRoleVsysWebuiNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#global_protect AdminRole#global_protect}
  */
  readonly globalProtect?: AdminRoleRoleVsysWebuiNetworkGlobalProtect;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_interface_profile AdminRole#sdwan_interface_profile}
  */
  readonly sdwanInterfaceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#zones AdminRole#zones}
  */
  readonly zones?: string;
}

export function adminRoleRoleVsysWebuiNetworkToTerraform(struct?: AdminRoleRoleVsysWebuiNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_protect: adminRoleRoleVsysWebuiNetworkGlobalProtectToTerraform(struct!.globalProtect),
    sdwan_interface_profile: cdktf.stringToTerraform(struct!.sdwanInterfaceProfile),
    zones: cdktf.stringToTerraform(struct!.zones),
  }
}


export function adminRoleRoleVsysWebuiNetworkToHclTerraform(struct?: AdminRoleRoleVsysWebuiNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_protect: {
      value: adminRoleRoleVsysWebuiNetworkGlobalProtectToHclTerraform(struct!.globalProtect),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiNetworkGlobalProtect",
    },
    sdwan_interface_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanInterfaceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.stringToHclTerraform(struct!.zones),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalProtect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalProtect = this._globalProtect?.internalValue;
    }
    if (this._sdwanInterfaceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanInterfaceProfile = this._sdwanInterfaceProfile;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalProtect.internalValue = undefined;
      this._sdwanInterfaceProfile = undefined;
      this._zones = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalProtect.internalValue = value.globalProtect;
      this._sdwanInterfaceProfile = value.sdwanInterfaceProfile;
      this._zones = value.zones;
    }
  }

  // global_protect - computed: false, optional: true, required: false
  private _globalProtect = new AdminRoleRoleVsysWebuiNetworkGlobalProtectOutputReference(this, "global_protect");
  public get globalProtect() {
    return this._globalProtect;
  }
  public putGlobalProtect(value: AdminRoleRoleVsysWebuiNetworkGlobalProtect) {
    this._globalProtect.internalValue = value;
  }
  public resetGlobalProtect() {
    this._globalProtect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectInput() {
    return this._globalProtect.internalValue;
  }

  // sdwan_interface_profile - computed: false, optional: true, required: false
  private _sdwanInterfaceProfile?: string; 
  public get sdwanInterfaceProfile() {
    return this.getStringAttribute('sdwan_interface_profile');
  }
  public set sdwanInterfaceProfile(value: string) {
    this._sdwanInterfaceProfile = value;
  }
  public resetSdwanInterfaceProfile() {
    this._sdwanInterfaceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInterfaceProfileInput() {
    return this._sdwanInterfaceProfile;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string; 
  public get zones() {
    return this.getStringAttribute('zones');
  }
  public set zones(value: string) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }
}
export interface AdminRoleRoleVsysWebuiObjectsCustomObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_patterns AdminRole#data_patterns}
  */
  readonly dataPatterns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#spyware AdminRole#spyware}
  */
  readonly spyware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_category AdminRole#url_category}
  */
  readonly urlCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vulnerability AdminRole#vulnerability}
  */
  readonly vulnerability?: string;
}

export function adminRoleRoleVsysWebuiObjectsCustomObjectsToTerraform(struct?: AdminRoleRoleVsysWebuiObjectsCustomObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_patterns: cdktf.stringToTerraform(struct!.dataPatterns),
    spyware: cdktf.stringToTerraform(struct!.spyware),
    url_category: cdktf.stringToTerraform(struct!.urlCategory),
    vulnerability: cdktf.stringToTerraform(struct!.vulnerability),
  }
}


export function adminRoleRoleVsysWebuiObjectsCustomObjectsToHclTerraform(struct?: AdminRoleRoleVsysWebuiObjectsCustomObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_patterns: {
      value: cdktf.stringToHclTerraform(struct!.dataPatterns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spyware: {
      value: cdktf.stringToHclTerraform(struct!.spyware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_category: {
      value: cdktf.stringToHclTerraform(struct!.urlCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerability: {
      value: cdktf.stringToHclTerraform(struct!.vulnerability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiObjectsCustomObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiObjectsCustomObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPatterns = this._dataPatterns;
    }
    if (this._spyware !== undefined) {
      hasAnyValues = true;
      internalValueResult.spyware = this._spyware;
    }
    if (this._urlCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlCategory = this._urlCategory;
    }
    if (this._vulnerability !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerability = this._vulnerability;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiObjectsCustomObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPatterns = undefined;
      this._spyware = undefined;
      this._urlCategory = undefined;
      this._vulnerability = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPatterns = value.dataPatterns;
      this._spyware = value.spyware;
      this._urlCategory = value.urlCategory;
      this._vulnerability = value.vulnerability;
    }
  }

  // data_patterns - computed: false, optional: true, required: false
  private _dataPatterns?: string; 
  public get dataPatterns() {
    return this.getStringAttribute('data_patterns');
  }
  public set dataPatterns(value: string) {
    this._dataPatterns = value;
  }
  public resetDataPatterns() {
    this._dataPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPatternsInput() {
    return this._dataPatterns;
  }

  // spyware - computed: false, optional: true, required: false
  private _spyware?: string; 
  public get spyware() {
    return this.getStringAttribute('spyware');
  }
  public set spyware(value: string) {
    this._spyware = value;
  }
  public resetSpyware() {
    this._spyware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spywareInput() {
    return this._spyware;
  }

  // url_category - computed: false, optional: true, required: false
  private _urlCategory?: string; 
  public get urlCategory() {
    return this.getStringAttribute('url_category');
  }
  public set urlCategory(value: string) {
    this._urlCategory = value;
  }
  public resetUrlCategory() {
    this._urlCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoryInput() {
    return this._urlCategory;
  }

  // vulnerability - computed: false, optional: true, required: false
  private _vulnerability?: string; 
  public get vulnerability() {
    return this.getStringAttribute('vulnerability');
  }
  public set vulnerability(value: string) {
    this._vulnerability = value;
  }
  public resetVulnerability() {
    this._vulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityInput() {
    return this._vulnerability;
  }
}
export interface AdminRoleRoleVsysWebuiObjectsDecryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption_profile AdminRole#decryption_profile}
  */
  readonly decryptionProfile?: string;
}

export function adminRoleRoleVsysWebuiObjectsDecryptionToTerraform(struct?: AdminRoleRoleVsysWebuiObjectsDecryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_profile: cdktf.stringToTerraform(struct!.decryptionProfile),
  }
}


export function adminRoleRoleVsysWebuiObjectsDecryptionToHclTerraform(struct?: AdminRoleRoleVsysWebuiObjectsDecryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_profile: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiObjectsDecryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiObjectsDecryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProfile = this._decryptionProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiObjectsDecryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decryptionProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decryptionProfile = value.decryptionProfile;
    }
  }

  // decryption_profile - computed: false, optional: true, required: false
  private _decryptionProfile?: string; 
  public get decryptionProfile() {
    return this.getStringAttribute('decryption_profile');
  }
  public set decryptionProfile(value: string) {
    this._decryptionProfile = value;
  }
  public resetDecryptionProfile() {
    this._decryptionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProfileInput() {
    return this._decryptionProfile;
  }
}
export interface AdminRoleRoleVsysWebuiObjectsGlobalProtect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hip_objects AdminRole#hip_objects}
  */
  readonly hipObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#hip_profiles AdminRole#hip_profiles}
  */
  readonly hipProfiles?: string;
}

export function adminRoleRoleVsysWebuiObjectsGlobalProtectToTerraform(struct?: AdminRoleRoleVsysWebuiObjectsGlobalProtect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hip_objects: cdktf.stringToTerraform(struct!.hipObjects),
    hip_profiles: cdktf.stringToTerraform(struct!.hipProfiles),
  }
}


export function adminRoleRoleVsysWebuiObjectsGlobalProtectToHclTerraform(struct?: AdminRoleRoleVsysWebuiObjectsGlobalProtect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hip_objects: {
      value: cdktf.stringToHclTerraform(struct!.hipObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hip_profiles: {
      value: cdktf.stringToHclTerraform(struct!.hipProfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiObjectsGlobalProtectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiObjectsGlobalProtect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hipObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipObjects = this._hipObjects;
    }
    if (this._hipProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipProfiles = this._hipProfiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiObjectsGlobalProtect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hipObjects = undefined;
      this._hipProfiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hipObjects = value.hipObjects;
      this._hipProfiles = value.hipProfiles;
    }
  }

  // hip_objects - computed: false, optional: true, required: false
  private _hipObjects?: string; 
  public get hipObjects() {
    return this.getStringAttribute('hip_objects');
  }
  public set hipObjects(value: string) {
    this._hipObjects = value;
  }
  public resetHipObjects() {
    this._hipObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipObjectsInput() {
    return this._hipObjects;
  }

  // hip_profiles - computed: false, optional: true, required: false
  private _hipProfiles?: string; 
  public get hipProfiles() {
    return this.getStringAttribute('hip_profiles');
  }
  public set hipProfiles(value: string) {
    this._hipProfiles = value;
  }
  public resetHipProfiles() {
    this._hipProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipProfilesInput() {
    return this._hipProfiles;
  }
}
export interface AdminRoleRoleVsysWebuiObjectsSdwan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_dist_profile AdminRole#sdwan_dist_profile}
  */
  readonly sdwanDistProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_error_correction_profile AdminRole#sdwan_error_correction_profile}
  */
  readonly sdwanErrorCorrectionProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_profile AdminRole#sdwan_profile}
  */
  readonly sdwanProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_saas_quality_profile AdminRole#sdwan_saas_quality_profile}
  */
  readonly sdwanSaasQualityProfile?: string;
}

export function adminRoleRoleVsysWebuiObjectsSdwanToTerraform(struct?: AdminRoleRoleVsysWebuiObjectsSdwan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sdwan_dist_profile: cdktf.stringToTerraform(struct!.sdwanDistProfile),
    sdwan_error_correction_profile: cdktf.stringToTerraform(struct!.sdwanErrorCorrectionProfile),
    sdwan_profile: cdktf.stringToTerraform(struct!.sdwanProfile),
    sdwan_saas_quality_profile: cdktf.stringToTerraform(struct!.sdwanSaasQualityProfile),
  }
}


export function adminRoleRoleVsysWebuiObjectsSdwanToHclTerraform(struct?: AdminRoleRoleVsysWebuiObjectsSdwan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sdwan_dist_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanDistProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_error_correction_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanErrorCorrectionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_saas_quality_profile: {
      value: cdktf.stringToHclTerraform(struct!.sdwanSaasQualityProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiObjectsSdwanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiObjectsSdwan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sdwanDistProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanDistProfile = this._sdwanDistProfile;
    }
    if (this._sdwanErrorCorrectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanErrorCorrectionProfile = this._sdwanErrorCorrectionProfile;
    }
    if (this._sdwanProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanProfile = this._sdwanProfile;
    }
    if (this._sdwanSaasQualityProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanSaasQualityProfile = this._sdwanSaasQualityProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiObjectsSdwan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sdwanDistProfile = undefined;
      this._sdwanErrorCorrectionProfile = undefined;
      this._sdwanProfile = undefined;
      this._sdwanSaasQualityProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sdwanDistProfile = value.sdwanDistProfile;
      this._sdwanErrorCorrectionProfile = value.sdwanErrorCorrectionProfile;
      this._sdwanProfile = value.sdwanProfile;
      this._sdwanSaasQualityProfile = value.sdwanSaasQualityProfile;
    }
  }

  // sdwan_dist_profile - computed: false, optional: true, required: false
  private _sdwanDistProfile?: string; 
  public get sdwanDistProfile() {
    return this.getStringAttribute('sdwan_dist_profile');
  }
  public set sdwanDistProfile(value: string) {
    this._sdwanDistProfile = value;
  }
  public resetSdwanDistProfile() {
    this._sdwanDistProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanDistProfileInput() {
    return this._sdwanDistProfile;
  }

  // sdwan_error_correction_profile - computed: false, optional: true, required: false
  private _sdwanErrorCorrectionProfile?: string; 
  public get sdwanErrorCorrectionProfile() {
    return this.getStringAttribute('sdwan_error_correction_profile');
  }
  public set sdwanErrorCorrectionProfile(value: string) {
    this._sdwanErrorCorrectionProfile = value;
  }
  public resetSdwanErrorCorrectionProfile() {
    this._sdwanErrorCorrectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanErrorCorrectionProfileInput() {
    return this._sdwanErrorCorrectionProfile;
  }

  // sdwan_profile - computed: false, optional: true, required: false
  private _sdwanProfile?: string; 
  public get sdwanProfile() {
    return this.getStringAttribute('sdwan_profile');
  }
  public set sdwanProfile(value: string) {
    this._sdwanProfile = value;
  }
  public resetSdwanProfile() {
    this._sdwanProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanProfileInput() {
    return this._sdwanProfile;
  }

  // sdwan_saas_quality_profile - computed: false, optional: true, required: false
  private _sdwanSaasQualityProfile?: string; 
  public get sdwanSaasQualityProfile() {
    return this.getStringAttribute('sdwan_saas_quality_profile');
  }
  public set sdwanSaasQualityProfile(value: string) {
    this._sdwanSaasQualityProfile = value;
  }
  public resetSdwanSaasQualityProfile() {
    this._sdwanSaasQualityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanSaasQualityProfileInput() {
    return this._sdwanSaasQualityProfile;
  }
}
export interface AdminRoleRoleVsysWebuiObjectsSecurityProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#anti_spyware AdminRole#anti_spyware}
  */
  readonly antiSpyware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#antivirus AdminRole#antivirus}
  */
  readonly antivirus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#data_filtering AdminRole#data_filtering}
  */
  readonly dataFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dos_protection AdminRole#dos_protection}
  */
  readonly dosProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#file_blocking AdminRole#file_blocking}
  */
  readonly fileBlocking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#gtp_protection AdminRole#gtp_protection}
  */
  readonly gtpProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sctp_protection AdminRole#sctp_protection}
  */
  readonly sctpProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#url_filtering AdminRole#url_filtering}
  */
  readonly urlFiltering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vulnerability_protection AdminRole#vulnerability_protection}
  */
  readonly vulnerabilityProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#wildfire_analysis AdminRole#wildfire_analysis}
  */
  readonly wildfireAnalysis?: string;
}

export function adminRoleRoleVsysWebuiObjectsSecurityProfilesToTerraform(struct?: AdminRoleRoleVsysWebuiObjectsSecurityProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_spyware: cdktf.stringToTerraform(struct!.antiSpyware),
    antivirus: cdktf.stringToTerraform(struct!.antivirus),
    data_filtering: cdktf.stringToTerraform(struct!.dataFiltering),
    dos_protection: cdktf.stringToTerraform(struct!.dosProtection),
    file_blocking: cdktf.stringToTerraform(struct!.fileBlocking),
    gtp_protection: cdktf.stringToTerraform(struct!.gtpProtection),
    sctp_protection: cdktf.stringToTerraform(struct!.sctpProtection),
    url_filtering: cdktf.stringToTerraform(struct!.urlFiltering),
    vulnerability_protection: cdktf.stringToTerraform(struct!.vulnerabilityProtection),
    wildfire_analysis: cdktf.stringToTerraform(struct!.wildfireAnalysis),
  }
}


export function adminRoleRoleVsysWebuiObjectsSecurityProfilesToHclTerraform(struct?: AdminRoleRoleVsysWebuiObjectsSecurityProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_spyware: {
      value: cdktf.stringToHclTerraform(struct!.antiSpyware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    antivirus: {
      value: cdktf.stringToHclTerraform(struct!.antivirus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_filtering: {
      value: cdktf.stringToHclTerraform(struct!.dataFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_protection: {
      value: cdktf.stringToHclTerraform(struct!.dosProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_blocking: {
      value: cdktf.stringToHclTerraform(struct!.fileBlocking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gtp_protection: {
      value: cdktf.stringToHclTerraform(struct!.gtpProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_protection: {
      value: cdktf.stringToHclTerraform(struct!.sctpProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_filtering: {
      value: cdktf.stringToHclTerraform(struct!.urlFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerability_protection: {
      value: cdktf.stringToHclTerraform(struct!.vulnerabilityProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildfire_analysis: {
      value: cdktf.stringToHclTerraform(struct!.wildfireAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiObjectsSecurityProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiObjectsSecurityProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiSpyware !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpyware = this._antiSpyware;
    }
    if (this._antivirus !== undefined) {
      hasAnyValues = true;
      internalValueResult.antivirus = this._antivirus;
    }
    if (this._dataFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFiltering = this._dataFiltering;
    }
    if (this._dosProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosProtection = this._dosProtection;
    }
    if (this._fileBlocking !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlocking = this._fileBlocking;
    }
    if (this._gtpProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpProtection = this._gtpProtection;
    }
    if (this._sctpProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpProtection = this._sctpProtection;
    }
    if (this._urlFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFiltering = this._urlFiltering;
    }
    if (this._vulnerabilityProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityProtection = this._vulnerabilityProtection;
    }
    if (this._wildfireAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireAnalysis = this._wildfireAnalysis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiObjectsSecurityProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._antiSpyware = undefined;
      this._antivirus = undefined;
      this._dataFiltering = undefined;
      this._dosProtection = undefined;
      this._fileBlocking = undefined;
      this._gtpProtection = undefined;
      this._sctpProtection = undefined;
      this._urlFiltering = undefined;
      this._vulnerabilityProtection = undefined;
      this._wildfireAnalysis = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._antiSpyware = value.antiSpyware;
      this._antivirus = value.antivirus;
      this._dataFiltering = value.dataFiltering;
      this._dosProtection = value.dosProtection;
      this._fileBlocking = value.fileBlocking;
      this._gtpProtection = value.gtpProtection;
      this._sctpProtection = value.sctpProtection;
      this._urlFiltering = value.urlFiltering;
      this._vulnerabilityProtection = value.vulnerabilityProtection;
      this._wildfireAnalysis = value.wildfireAnalysis;
    }
  }

  // anti_spyware - computed: false, optional: true, required: false
  private _antiSpyware?: string; 
  public get antiSpyware() {
    return this.getStringAttribute('anti_spyware');
  }
  public set antiSpyware(value: string) {
    this._antiSpyware = value;
  }
  public resetAntiSpyware() {
    this._antiSpyware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpywareInput() {
    return this._antiSpyware;
  }

  // antivirus - computed: false, optional: true, required: false
  private _antivirus?: string; 
  public get antivirus() {
    return this.getStringAttribute('antivirus');
  }
  public set antivirus(value: string) {
    this._antivirus = value;
  }
  public resetAntivirus() {
    this._antivirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusInput() {
    return this._antivirus;
  }

  // data_filtering - computed: false, optional: true, required: false
  private _dataFiltering?: string; 
  public get dataFiltering() {
    return this.getStringAttribute('data_filtering');
  }
  public set dataFiltering(value: string) {
    this._dataFiltering = value;
  }
  public resetDataFiltering() {
    this._dataFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringInput() {
    return this._dataFiltering;
  }

  // dos_protection - computed: false, optional: true, required: false
  private _dosProtection?: string; 
  public get dosProtection() {
    return this.getStringAttribute('dos_protection');
  }
  public set dosProtection(value: string) {
    this._dosProtection = value;
  }
  public resetDosProtection() {
    this._dosProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosProtectionInput() {
    return this._dosProtection;
  }

  // file_blocking - computed: false, optional: true, required: false
  private _fileBlocking?: string; 
  public get fileBlocking() {
    return this.getStringAttribute('file_blocking');
  }
  public set fileBlocking(value: string) {
    this._fileBlocking = value;
  }
  public resetFileBlocking() {
    this._fileBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockingInput() {
    return this._fileBlocking;
  }

  // gtp_protection - computed: false, optional: true, required: false
  private _gtpProtection?: string; 
  public get gtpProtection() {
    return this.getStringAttribute('gtp_protection');
  }
  public set gtpProtection(value: string) {
    this._gtpProtection = value;
  }
  public resetGtpProtection() {
    this._gtpProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpProtectionInput() {
    return this._gtpProtection;
  }

  // sctp_protection - computed: false, optional: true, required: false
  private _sctpProtection?: string; 
  public get sctpProtection() {
    return this.getStringAttribute('sctp_protection');
  }
  public set sctpProtection(value: string) {
    this._sctpProtection = value;
  }
  public resetSctpProtection() {
    this._sctpProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpProtectionInput() {
    return this._sctpProtection;
  }

  // url_filtering - computed: false, optional: true, required: false
  private _urlFiltering?: string; 
  public get urlFiltering() {
    return this.getStringAttribute('url_filtering');
  }
  public set urlFiltering(value: string) {
    this._urlFiltering = value;
  }
  public resetUrlFiltering() {
    this._urlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringInput() {
    return this._urlFiltering;
  }

  // vulnerability_protection - computed: false, optional: true, required: false
  private _vulnerabilityProtection?: string; 
  public get vulnerabilityProtection() {
    return this.getStringAttribute('vulnerability_protection');
  }
  public set vulnerabilityProtection(value: string) {
    this._vulnerabilityProtection = value;
  }
  public resetVulnerabilityProtection() {
    this._vulnerabilityProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityProtectionInput() {
    return this._vulnerabilityProtection;
  }

  // wildfire_analysis - computed: false, optional: true, required: false
  private _wildfireAnalysis?: string; 
  public get wildfireAnalysis() {
    return this.getStringAttribute('wildfire_analysis');
  }
  public set wildfireAnalysis(value: string) {
    this._wildfireAnalysis = value;
  }
  public resetWildfireAnalysis() {
    this._wildfireAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireAnalysisInput() {
    return this._wildfireAnalysis;
  }
}
export interface AdminRoleRoleVsysWebuiObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#address_groups AdminRole#address_groups}
  */
  readonly addressGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#addresses AdminRole#addresses}
  */
  readonly addresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_filters AdminRole#application_filters}
  */
  readonly applicationFilters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_groups AdminRole#application_groups}
  */
  readonly applicationGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#applications AdminRole#applications}
  */
  readonly applications?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication AdminRole#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#custom_objects AdminRole#custom_objects}
  */
  readonly customObjects?: AdminRoleRoleVsysWebuiObjectsCustomObjects;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#decryption AdminRole#decryption}
  */
  readonly decryption?: AdminRoleRoleVsysWebuiObjectsDecryption;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#devices AdminRole#devices}
  */
  readonly devices?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dynamic_block_lists AdminRole#dynamic_block_lists}
  */
  readonly dynamicBlockLists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dynamic_user_groups AdminRole#dynamic_user_groups}
  */
  readonly dynamicUserGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#global_protect AdminRole#global_protect}
  */
  readonly globalProtect?: AdminRoleRoleVsysWebuiObjectsGlobalProtect;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log_forwarding AdminRole#log_forwarding}
  */
  readonly logForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#packet_broker_profile AdminRole#packet_broker_profile}
  */
  readonly packetBrokerProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#regions AdminRole#regions}
  */
  readonly regions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#schedules AdminRole#schedules}
  */
  readonly schedules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan AdminRole#sdwan}
  */
  readonly sdwan?: AdminRoleRoleVsysWebuiObjectsSdwan;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#security_profile_groups AdminRole#security_profile_groups}
  */
  readonly securityProfileGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#security_profiles AdminRole#security_profiles}
  */
  readonly securityProfiles?: AdminRoleRoleVsysWebuiObjectsSecurityProfiles;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#service_groups AdminRole#service_groups}
  */
  readonly serviceGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#services AdminRole#services}
  */
  readonly services?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tags AdminRole#tags}
  */
  readonly tags?: string;
}

export function adminRoleRoleVsysWebuiObjectsToTerraform(struct?: AdminRoleRoleVsysWebuiObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_groups: cdktf.stringToTerraform(struct!.addressGroups),
    addresses: cdktf.stringToTerraform(struct!.addresses),
    application_filters: cdktf.stringToTerraform(struct!.applicationFilters),
    application_groups: cdktf.stringToTerraform(struct!.applicationGroups),
    applications: cdktf.stringToTerraform(struct!.applications),
    authentication: cdktf.stringToTerraform(struct!.authentication),
    custom_objects: adminRoleRoleVsysWebuiObjectsCustomObjectsToTerraform(struct!.customObjects),
    decryption: adminRoleRoleVsysWebuiObjectsDecryptionToTerraform(struct!.decryption),
    devices: cdktf.stringToTerraform(struct!.devices),
    dynamic_block_lists: cdktf.stringToTerraform(struct!.dynamicBlockLists),
    dynamic_user_groups: cdktf.stringToTerraform(struct!.dynamicUserGroups),
    global_protect: adminRoleRoleVsysWebuiObjectsGlobalProtectToTerraform(struct!.globalProtect),
    log_forwarding: cdktf.stringToTerraform(struct!.logForwarding),
    packet_broker_profile: cdktf.stringToTerraform(struct!.packetBrokerProfile),
    regions: cdktf.stringToTerraform(struct!.regions),
    schedules: cdktf.stringToTerraform(struct!.schedules),
    sdwan: adminRoleRoleVsysWebuiObjectsSdwanToTerraform(struct!.sdwan),
    security_profile_groups: cdktf.stringToTerraform(struct!.securityProfileGroups),
    security_profiles: adminRoleRoleVsysWebuiObjectsSecurityProfilesToTerraform(struct!.securityProfiles),
    service_groups: cdktf.stringToTerraform(struct!.serviceGroups),
    services: cdktf.stringToTerraform(struct!.services),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function adminRoleRoleVsysWebuiObjectsToHclTerraform(struct?: AdminRoleRoleVsysWebuiObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_groups: {
      value: cdktf.stringToHclTerraform(struct!.addressGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addresses: {
      value: cdktf.stringToHclTerraform(struct!.addresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_filters: {
      value: cdktf.stringToHclTerraform(struct!.applicationFilters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_groups: {
      value: cdktf.stringToHclTerraform(struct!.applicationGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applications: {
      value: cdktf.stringToHclTerraform(struct!.applications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_objects: {
      value: adminRoleRoleVsysWebuiObjectsCustomObjectsToHclTerraform(struct!.customObjects),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiObjectsCustomObjects",
    },
    decryption: {
      value: adminRoleRoleVsysWebuiObjectsDecryptionToHclTerraform(struct!.decryption),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiObjectsDecryption",
    },
    devices: {
      value: cdktf.stringToHclTerraform(struct!.devices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_block_lists: {
      value: cdktf.stringToHclTerraform(struct!.dynamicBlockLists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_user_groups: {
      value: cdktf.stringToHclTerraform(struct!.dynamicUserGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_protect: {
      value: adminRoleRoleVsysWebuiObjectsGlobalProtectToHclTerraform(struct!.globalProtect),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiObjectsGlobalProtect",
    },
    log_forwarding: {
      value: cdktf.stringToHclTerraform(struct!.logForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_broker_profile: {
      value: cdktf.stringToHclTerraform(struct!.packetBrokerProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.stringToHclTerraform(struct!.regions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedules: {
      value: cdktf.stringToHclTerraform(struct!.schedules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan: {
      value: adminRoleRoleVsysWebuiObjectsSdwanToHclTerraform(struct!.sdwan),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiObjectsSdwan",
    },
    security_profile_groups: {
      value: cdktf.stringToHclTerraform(struct!.securityProfileGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_profiles: {
      value: adminRoleRoleVsysWebuiObjectsSecurityProfilesToHclTerraform(struct!.securityProfiles),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiObjectsSecurityProfiles",
    },
    service_groups: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressGroups = this._addressGroups;
    }
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._applicationFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationFilters = this._applicationFilters;
    }
    if (this._applicationGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationGroups = this._applicationGroups;
    }
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._customObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customObjects = this._customObjects?.internalValue;
    }
    if (this._decryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryption = this._decryption?.internalValue;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._dynamicBlockLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicBlockLists = this._dynamicBlockLists;
    }
    if (this._dynamicUserGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicUserGroups = this._dynamicUserGroups;
    }
    if (this._globalProtect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalProtect = this._globalProtect?.internalValue;
    }
    if (this._logForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.logForwarding = this._logForwarding;
    }
    if (this._packetBrokerProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBrokerProfile = this._packetBrokerProfile;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._schedules !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules;
    }
    if (this._sdwan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwan = this._sdwan?.internalValue;
    }
    if (this._securityProfileGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfileGroups = this._securityProfileGroups;
    }
    if (this._securityProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfiles = this._securityProfiles?.internalValue;
    }
    if (this._serviceGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroups = this._serviceGroups;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressGroups = undefined;
      this._addresses = undefined;
      this._applicationFilters = undefined;
      this._applicationGroups = undefined;
      this._applications = undefined;
      this._authentication = undefined;
      this._customObjects.internalValue = undefined;
      this._decryption.internalValue = undefined;
      this._devices = undefined;
      this._dynamicBlockLists = undefined;
      this._dynamicUserGroups = undefined;
      this._globalProtect.internalValue = undefined;
      this._logForwarding = undefined;
      this._packetBrokerProfile = undefined;
      this._regions = undefined;
      this._schedules = undefined;
      this._sdwan.internalValue = undefined;
      this._securityProfileGroups = undefined;
      this._securityProfiles.internalValue = undefined;
      this._serviceGroups = undefined;
      this._services = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressGroups = value.addressGroups;
      this._addresses = value.addresses;
      this._applicationFilters = value.applicationFilters;
      this._applicationGroups = value.applicationGroups;
      this._applications = value.applications;
      this._authentication = value.authentication;
      this._customObjects.internalValue = value.customObjects;
      this._decryption.internalValue = value.decryption;
      this._devices = value.devices;
      this._dynamicBlockLists = value.dynamicBlockLists;
      this._dynamicUserGroups = value.dynamicUserGroups;
      this._globalProtect.internalValue = value.globalProtect;
      this._logForwarding = value.logForwarding;
      this._packetBrokerProfile = value.packetBrokerProfile;
      this._regions = value.regions;
      this._schedules = value.schedules;
      this._sdwan.internalValue = value.sdwan;
      this._securityProfileGroups = value.securityProfileGroups;
      this._securityProfiles.internalValue = value.securityProfiles;
      this._serviceGroups = value.serviceGroups;
      this._services = value.services;
      this._tags = value.tags;
    }
  }

  // address_groups - computed: false, optional: true, required: false
  private _addressGroups?: string; 
  public get addressGroups() {
    return this.getStringAttribute('address_groups');
  }
  public set addressGroups(value: string) {
    this._addressGroups = value;
  }
  public resetAddressGroups() {
    this._addressGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressGroupsInput() {
    return this._addressGroups;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string; 
  public get addresses() {
    return this.getStringAttribute('addresses');
  }
  public set addresses(value: string) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // application_filters - computed: false, optional: true, required: false
  private _applicationFilters?: string; 
  public get applicationFilters() {
    return this.getStringAttribute('application_filters');
  }
  public set applicationFilters(value: string) {
    this._applicationFilters = value;
  }
  public resetApplicationFilters() {
    this._applicationFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFiltersInput() {
    return this._applicationFilters;
  }

  // application_groups - computed: false, optional: true, required: false
  private _applicationGroups?: string; 
  public get applicationGroups() {
    return this.getStringAttribute('application_groups');
  }
  public set applicationGroups(value: string) {
    this._applicationGroups = value;
  }
  public resetApplicationGroups() {
    this._applicationGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupsInput() {
    return this._applicationGroups;
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string; 
  public get applications() {
    return this.getStringAttribute('applications');
  }
  public set applications(value: string) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // custom_objects - computed: false, optional: true, required: false
  private _customObjects = new AdminRoleRoleVsysWebuiObjectsCustomObjectsOutputReference(this, "custom_objects");
  public get customObjects() {
    return this._customObjects;
  }
  public putCustomObjects(value: AdminRoleRoleVsysWebuiObjectsCustomObjects) {
    this._customObjects.internalValue = value;
  }
  public resetCustomObjects() {
    this._customObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customObjectsInput() {
    return this._customObjects.internalValue;
  }

  // decryption - computed: false, optional: true, required: false
  private _decryption = new AdminRoleRoleVsysWebuiObjectsDecryptionOutputReference(this, "decryption");
  public get decryption() {
    return this._decryption;
  }
  public putDecryption(value: AdminRoleRoleVsysWebuiObjectsDecryption) {
    this._decryption.internalValue = value;
  }
  public resetDecryption() {
    this._decryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionInput() {
    return this._decryption.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices?: string; 
  public get devices() {
    return this.getStringAttribute('devices');
  }
  public set devices(value: string) {
    this._devices = value;
  }
  public resetDevices() {
    this._devices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // dynamic_block_lists - computed: false, optional: true, required: false
  private _dynamicBlockLists?: string; 
  public get dynamicBlockLists() {
    return this.getStringAttribute('dynamic_block_lists');
  }
  public set dynamicBlockLists(value: string) {
    this._dynamicBlockLists = value;
  }
  public resetDynamicBlockLists() {
    this._dynamicBlockLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicBlockListsInput() {
    return this._dynamicBlockLists;
  }

  // dynamic_user_groups - computed: false, optional: true, required: false
  private _dynamicUserGroups?: string; 
  public get dynamicUserGroups() {
    return this.getStringAttribute('dynamic_user_groups');
  }
  public set dynamicUserGroups(value: string) {
    this._dynamicUserGroups = value;
  }
  public resetDynamicUserGroups() {
    this._dynamicUserGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicUserGroupsInput() {
    return this._dynamicUserGroups;
  }

  // global_protect - computed: false, optional: true, required: false
  private _globalProtect = new AdminRoleRoleVsysWebuiObjectsGlobalProtectOutputReference(this, "global_protect");
  public get globalProtect() {
    return this._globalProtect;
  }
  public putGlobalProtect(value: AdminRoleRoleVsysWebuiObjectsGlobalProtect) {
    this._globalProtect.internalValue = value;
  }
  public resetGlobalProtect() {
    this._globalProtect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalProtectInput() {
    return this._globalProtect.internalValue;
  }

  // log_forwarding - computed: false, optional: true, required: false
  private _logForwarding?: string; 
  public get logForwarding() {
    return this.getStringAttribute('log_forwarding');
  }
  public set logForwarding(value: string) {
    this._logForwarding = value;
  }
  public resetLogForwarding() {
    this._logForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardingInput() {
    return this._logForwarding;
  }

  // packet_broker_profile - computed: false, optional: true, required: false
  private _packetBrokerProfile?: string; 
  public get packetBrokerProfile() {
    return this.getStringAttribute('packet_broker_profile');
  }
  public set packetBrokerProfile(value: string) {
    this._packetBrokerProfile = value;
  }
  public resetPacketBrokerProfile() {
    this._packetBrokerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBrokerProfileInput() {
    return this._packetBrokerProfile;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string; 
  public get regions() {
    return this.getStringAttribute('regions');
  }
  public set regions(value: string) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules?: string; 
  public get schedules() {
    return this.getStringAttribute('schedules');
  }
  public set schedules(value: string) {
    this._schedules = value;
  }
  public resetSchedules() {
    this._schedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules;
  }

  // sdwan - computed: false, optional: true, required: false
  private _sdwan = new AdminRoleRoleVsysWebuiObjectsSdwanOutputReference(this, "sdwan");
  public get sdwan() {
    return this._sdwan;
  }
  public putSdwan(value: AdminRoleRoleVsysWebuiObjectsSdwan) {
    this._sdwan.internalValue = value;
  }
  public resetSdwan() {
    this._sdwan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanInput() {
    return this._sdwan.internalValue;
  }

  // security_profile_groups - computed: false, optional: true, required: false
  private _securityProfileGroups?: string; 
  public get securityProfileGroups() {
    return this.getStringAttribute('security_profile_groups');
  }
  public set securityProfileGroups(value: string) {
    this._securityProfileGroups = value;
  }
  public resetSecurityProfileGroups() {
    this._securityProfileGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileGroupsInput() {
    return this._securityProfileGroups;
  }

  // security_profiles - computed: false, optional: true, required: false
  private _securityProfiles = new AdminRoleRoleVsysWebuiObjectsSecurityProfilesOutputReference(this, "security_profiles");
  public get securityProfiles() {
    return this._securityProfiles;
  }
  public putSecurityProfiles(value: AdminRoleRoleVsysWebuiObjectsSecurityProfiles) {
    this._securityProfiles.internalValue = value;
  }
  public resetSecurityProfiles() {
    this._securityProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfilesInput() {
    return this._securityProfiles.internalValue;
  }

  // service_groups - computed: false, optional: true, required: false
  private _serviceGroups?: string; 
  public get serviceGroups() {
    return this.getStringAttribute('service_groups');
  }
  public set serviceGroups(value: string) {
    this._serviceGroups = value;
  }
  public resetServiceGroups() {
    this._serviceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupsInput() {
    return this._serviceGroups;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface AdminRoleRoleVsysWebuiOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#download_core_files AdminRole#download_core_files}
  */
  readonly downloadCoreFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#download_pcap_files AdminRole#download_pcap_files}
  */
  readonly downloadPcapFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#generate_stats_dump_file AdminRole#generate_stats_dump_file}
  */
  readonly generateStatsDumpFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#generate_tech_support_file AdminRole#generate_tech_support_file}
  */
  readonly generateTechSupportFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#reboot AdminRole#reboot}
  */
  readonly reboot?: string;
}

export function adminRoleRoleVsysWebuiOperationsToTerraform(struct?: AdminRoleRoleVsysWebuiOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    download_core_files: cdktf.stringToTerraform(struct!.downloadCoreFiles),
    download_pcap_files: cdktf.stringToTerraform(struct!.downloadPcapFiles),
    generate_stats_dump_file: cdktf.stringToTerraform(struct!.generateStatsDumpFile),
    generate_tech_support_file: cdktf.stringToTerraform(struct!.generateTechSupportFile),
    reboot: cdktf.stringToTerraform(struct!.reboot),
  }
}


export function adminRoleRoleVsysWebuiOperationsToHclTerraform(struct?: AdminRoleRoleVsysWebuiOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    download_core_files: {
      value: cdktf.stringToHclTerraform(struct!.downloadCoreFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    download_pcap_files: {
      value: cdktf.stringToHclTerraform(struct!.downloadPcapFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_stats_dump_file: {
      value: cdktf.stringToHclTerraform(struct!.generateStatsDumpFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_tech_support_file: {
      value: cdktf.stringToHclTerraform(struct!.generateTechSupportFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reboot: {
      value: cdktf.stringToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downloadCoreFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadCoreFiles = this._downloadCoreFiles;
    }
    if (this._downloadPcapFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadPcapFiles = this._downloadPcapFiles;
    }
    if (this._generateStatsDumpFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateStatsDumpFile = this._generateStatsDumpFile;
    }
    if (this._generateTechSupportFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateTechSupportFile = this._generateTechSupportFile;
    }
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downloadCoreFiles = undefined;
      this._downloadPcapFiles = undefined;
      this._generateStatsDumpFile = undefined;
      this._generateTechSupportFile = undefined;
      this._reboot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downloadCoreFiles = value.downloadCoreFiles;
      this._downloadPcapFiles = value.downloadPcapFiles;
      this._generateStatsDumpFile = value.generateStatsDumpFile;
      this._generateTechSupportFile = value.generateTechSupportFile;
      this._reboot = value.reboot;
    }
  }

  // download_core_files - computed: false, optional: true, required: false
  private _downloadCoreFiles?: string; 
  public get downloadCoreFiles() {
    return this.getStringAttribute('download_core_files');
  }
  public set downloadCoreFiles(value: string) {
    this._downloadCoreFiles = value;
  }
  public resetDownloadCoreFiles() {
    this._downloadCoreFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadCoreFilesInput() {
    return this._downloadCoreFiles;
  }

  // download_pcap_files - computed: false, optional: true, required: false
  private _downloadPcapFiles?: string; 
  public get downloadPcapFiles() {
    return this.getStringAttribute('download_pcap_files');
  }
  public set downloadPcapFiles(value: string) {
    this._downloadPcapFiles = value;
  }
  public resetDownloadPcapFiles() {
    this._downloadPcapFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadPcapFilesInput() {
    return this._downloadPcapFiles;
  }

  // generate_stats_dump_file - computed: false, optional: true, required: false
  private _generateStatsDumpFile?: string; 
  public get generateStatsDumpFile() {
    return this.getStringAttribute('generate_stats_dump_file');
  }
  public set generateStatsDumpFile(value: string) {
    this._generateStatsDumpFile = value;
  }
  public resetGenerateStatsDumpFile() {
    this._generateStatsDumpFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateStatsDumpFileInput() {
    return this._generateStatsDumpFile;
  }

  // generate_tech_support_file - computed: false, optional: true, required: false
  private _generateTechSupportFile?: string; 
  public get generateTechSupportFile() {
    return this.getStringAttribute('generate_tech_support_file');
  }
  public set generateTechSupportFile(value: string) {
    this._generateTechSupportFile = value;
  }
  public resetGenerateTechSupportFile() {
    this._generateTechSupportFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateTechSupportFileInput() {
    return this._generateTechSupportFile;
  }

  // reboot - computed: false, optional: true, required: false
  private _reboot?: string; 
  public get reboot() {
    return this.getStringAttribute('reboot');
  }
  public set reboot(value: string) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }
}
export interface AdminRoleRoleVsysWebuiPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#application_override_rulebase AdminRole#application_override_rulebase}
  */
  readonly applicationOverrideRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#authentication_rulebase AdminRole#authentication_rulebase}
  */
  readonly authenticationRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dos_rulebase AdminRole#dos_rulebase}
  */
  readonly dosRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#nat_rulebase AdminRole#nat_rulebase}
  */
  readonly natRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#network_packet_broker_rulebase AdminRole#network_packet_broker_rulebase}
  */
  readonly networkPacketBrokerRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#pbf_rulebase AdminRole#pbf_rulebase}
  */
  readonly pbfRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#qos_rulebase AdminRole#qos_rulebase}
  */
  readonly qosRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#rule_hit_count_reset AdminRole#rule_hit_count_reset}
  */
  readonly ruleHitCountReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#sdwan_rulebase AdminRole#sdwan_rulebase}
  */
  readonly sdwanRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#security_rulebase AdminRole#security_rulebase}
  */
  readonly securityRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#ssl_decryption_rulebase AdminRole#ssl_decryption_rulebase}
  */
  readonly sslDecryptionRulebase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tunnel_inspect_rulebase AdminRole#tunnel_inspect_rulebase}
  */
  readonly tunnelInspectRulebase?: string;
}

export function adminRoleRoleVsysWebuiPoliciesToTerraform(struct?: AdminRoleRoleVsysWebuiPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_override_rulebase: cdktf.stringToTerraform(struct!.applicationOverrideRulebase),
    authentication_rulebase: cdktf.stringToTerraform(struct!.authenticationRulebase),
    dos_rulebase: cdktf.stringToTerraform(struct!.dosRulebase),
    nat_rulebase: cdktf.stringToTerraform(struct!.natRulebase),
    network_packet_broker_rulebase: cdktf.stringToTerraform(struct!.networkPacketBrokerRulebase),
    pbf_rulebase: cdktf.stringToTerraform(struct!.pbfRulebase),
    qos_rulebase: cdktf.stringToTerraform(struct!.qosRulebase),
    rule_hit_count_reset: cdktf.stringToTerraform(struct!.ruleHitCountReset),
    sdwan_rulebase: cdktf.stringToTerraform(struct!.sdwanRulebase),
    security_rulebase: cdktf.stringToTerraform(struct!.securityRulebase),
    ssl_decryption_rulebase: cdktf.stringToTerraform(struct!.sslDecryptionRulebase),
    tunnel_inspect_rulebase: cdktf.stringToTerraform(struct!.tunnelInspectRulebase),
  }
}


export function adminRoleRoleVsysWebuiPoliciesToHclTerraform(struct?: AdminRoleRoleVsysWebuiPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_override_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.applicationOverrideRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.authenticationRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dos_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.dosRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.natRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_packet_broker_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.networkPacketBrokerRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pbf_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.pbfRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.qosRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_hit_count_reset: {
      value: cdktf.stringToHclTerraform(struct!.ruleHitCountReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdwan_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.sdwanRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.securityRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_decryption_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.sslDecryptionRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_inspect_rulebase: {
      value: cdktf.stringToHclTerraform(struct!.tunnelInspectRulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationOverrideRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationOverrideRulebase = this._applicationOverrideRulebase;
    }
    if (this._authenticationRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRulebase = this._authenticationRulebase;
    }
    if (this._dosRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosRulebase = this._dosRulebase;
    }
    if (this._natRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.natRulebase = this._natRulebase;
    }
    if (this._networkPacketBrokerRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPacketBrokerRulebase = this._networkPacketBrokerRulebase;
    }
    if (this._pbfRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbfRulebase = this._pbfRulebase;
    }
    if (this._qosRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosRulebase = this._qosRulebase;
    }
    if (this._ruleHitCountReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleHitCountReset = this._ruleHitCountReset;
    }
    if (this._sdwanRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdwanRulebase = this._sdwanRulebase;
    }
    if (this._securityRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityRulebase = this._securityRulebase;
    }
    if (this._sslDecryptionRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslDecryptionRulebase = this._sslDecryptionRulebase;
    }
    if (this._tunnelInspectRulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelInspectRulebase = this._tunnelInspectRulebase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationOverrideRulebase = undefined;
      this._authenticationRulebase = undefined;
      this._dosRulebase = undefined;
      this._natRulebase = undefined;
      this._networkPacketBrokerRulebase = undefined;
      this._pbfRulebase = undefined;
      this._qosRulebase = undefined;
      this._ruleHitCountReset = undefined;
      this._sdwanRulebase = undefined;
      this._securityRulebase = undefined;
      this._sslDecryptionRulebase = undefined;
      this._tunnelInspectRulebase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationOverrideRulebase = value.applicationOverrideRulebase;
      this._authenticationRulebase = value.authenticationRulebase;
      this._dosRulebase = value.dosRulebase;
      this._natRulebase = value.natRulebase;
      this._networkPacketBrokerRulebase = value.networkPacketBrokerRulebase;
      this._pbfRulebase = value.pbfRulebase;
      this._qosRulebase = value.qosRulebase;
      this._ruleHitCountReset = value.ruleHitCountReset;
      this._sdwanRulebase = value.sdwanRulebase;
      this._securityRulebase = value.securityRulebase;
      this._sslDecryptionRulebase = value.sslDecryptionRulebase;
      this._tunnelInspectRulebase = value.tunnelInspectRulebase;
    }
  }

  // application_override_rulebase - computed: false, optional: true, required: false
  private _applicationOverrideRulebase?: string; 
  public get applicationOverrideRulebase() {
    return this.getStringAttribute('application_override_rulebase');
  }
  public set applicationOverrideRulebase(value: string) {
    this._applicationOverrideRulebase = value;
  }
  public resetApplicationOverrideRulebase() {
    this._applicationOverrideRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationOverrideRulebaseInput() {
    return this._applicationOverrideRulebase;
  }

  // authentication_rulebase - computed: false, optional: true, required: false
  private _authenticationRulebase?: string; 
  public get authenticationRulebase() {
    return this.getStringAttribute('authentication_rulebase');
  }
  public set authenticationRulebase(value: string) {
    this._authenticationRulebase = value;
  }
  public resetAuthenticationRulebase() {
    this._authenticationRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRulebaseInput() {
    return this._authenticationRulebase;
  }

  // dos_rulebase - computed: false, optional: true, required: false
  private _dosRulebase?: string; 
  public get dosRulebase() {
    return this.getStringAttribute('dos_rulebase');
  }
  public set dosRulebase(value: string) {
    this._dosRulebase = value;
  }
  public resetDosRulebase() {
    this._dosRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosRulebaseInput() {
    return this._dosRulebase;
  }

  // nat_rulebase - computed: false, optional: true, required: false
  private _natRulebase?: string; 
  public get natRulebase() {
    return this.getStringAttribute('nat_rulebase');
  }
  public set natRulebase(value: string) {
    this._natRulebase = value;
  }
  public resetNatRulebase() {
    this._natRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natRulebaseInput() {
    return this._natRulebase;
  }

  // network_packet_broker_rulebase - computed: false, optional: true, required: false
  private _networkPacketBrokerRulebase?: string; 
  public get networkPacketBrokerRulebase() {
    return this.getStringAttribute('network_packet_broker_rulebase');
  }
  public set networkPacketBrokerRulebase(value: string) {
    this._networkPacketBrokerRulebase = value;
  }
  public resetNetworkPacketBrokerRulebase() {
    this._networkPacketBrokerRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPacketBrokerRulebaseInput() {
    return this._networkPacketBrokerRulebase;
  }

  // pbf_rulebase - computed: false, optional: true, required: false
  private _pbfRulebase?: string; 
  public get pbfRulebase() {
    return this.getStringAttribute('pbf_rulebase');
  }
  public set pbfRulebase(value: string) {
    this._pbfRulebase = value;
  }
  public resetPbfRulebase() {
    this._pbfRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbfRulebaseInput() {
    return this._pbfRulebase;
  }

  // qos_rulebase - computed: false, optional: true, required: false
  private _qosRulebase?: string; 
  public get qosRulebase() {
    return this.getStringAttribute('qos_rulebase');
  }
  public set qosRulebase(value: string) {
    this._qosRulebase = value;
  }
  public resetQosRulebase() {
    this._qosRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosRulebaseInput() {
    return this._qosRulebase;
  }

  // rule_hit_count_reset - computed: false, optional: true, required: false
  private _ruleHitCountReset?: string; 
  public get ruleHitCountReset() {
    return this.getStringAttribute('rule_hit_count_reset');
  }
  public set ruleHitCountReset(value: string) {
    this._ruleHitCountReset = value;
  }
  public resetRuleHitCountReset() {
    this._ruleHitCountReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleHitCountResetInput() {
    return this._ruleHitCountReset;
  }

  // sdwan_rulebase - computed: false, optional: true, required: false
  private _sdwanRulebase?: string; 
  public get sdwanRulebase() {
    return this.getStringAttribute('sdwan_rulebase');
  }
  public set sdwanRulebase(value: string) {
    this._sdwanRulebase = value;
  }
  public resetSdwanRulebase() {
    this._sdwanRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanRulebaseInput() {
    return this._sdwanRulebase;
  }

  // security_rulebase - computed: false, optional: true, required: false
  private _securityRulebase?: string; 
  public get securityRulebase() {
    return this.getStringAttribute('security_rulebase');
  }
  public set securityRulebase(value: string) {
    this._securityRulebase = value;
  }
  public resetSecurityRulebase() {
    this._securityRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRulebaseInput() {
    return this._securityRulebase;
  }

  // ssl_decryption_rulebase - computed: false, optional: true, required: false
  private _sslDecryptionRulebase?: string; 
  public get sslDecryptionRulebase() {
    return this.getStringAttribute('ssl_decryption_rulebase');
  }
  public set sslDecryptionRulebase(value: string) {
    this._sslDecryptionRulebase = value;
  }
  public resetSslDecryptionRulebase() {
    this._sslDecryptionRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDecryptionRulebaseInput() {
    return this._sslDecryptionRulebase;
  }

  // tunnel_inspect_rulebase - computed: false, optional: true, required: false
  private _tunnelInspectRulebase?: string; 
  public get tunnelInspectRulebase() {
    return this.getStringAttribute('tunnel_inspect_rulebase');
  }
  public set tunnelInspectRulebase(value: string) {
    this._tunnelInspectRulebase = value;
  }
  public resetTunnelInspectRulebase() {
    this._tunnelInspectRulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInspectRulebaseInput() {
    return this._tunnelInspectRulebase;
  }
}
export interface AdminRoleRoleVsysWebuiPrivacy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#show_full_ip_addresses AdminRole#show_full_ip_addresses}
  */
  readonly showFullIpAddresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#show_user_names_in_logs_and_reports AdminRole#show_user_names_in_logs_and_reports}
  */
  readonly showUserNamesInLogsAndReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#view_pcap_files AdminRole#view_pcap_files}
  */
  readonly viewPcapFiles?: string;
}

export function adminRoleRoleVsysWebuiPrivacyToTerraform(struct?: AdminRoleRoleVsysWebuiPrivacy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_full_ip_addresses: cdktf.stringToTerraform(struct!.showFullIpAddresses),
    show_user_names_in_logs_and_reports: cdktf.stringToTerraform(struct!.showUserNamesInLogsAndReports),
    view_pcap_files: cdktf.stringToTerraform(struct!.viewPcapFiles),
  }
}


export function adminRoleRoleVsysWebuiPrivacyToHclTerraform(struct?: AdminRoleRoleVsysWebuiPrivacy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_full_ip_addresses: {
      value: cdktf.stringToHclTerraform(struct!.showFullIpAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_user_names_in_logs_and_reports: {
      value: cdktf.stringToHclTerraform(struct!.showUserNamesInLogsAndReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view_pcap_files: {
      value: cdktf.stringToHclTerraform(struct!.viewPcapFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiPrivacyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiPrivacy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showFullIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.showFullIpAddresses = this._showFullIpAddresses;
    }
    if (this._showUserNamesInLogsAndReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.showUserNamesInLogsAndReports = this._showUserNamesInLogsAndReports;
    }
    if (this._viewPcapFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewPcapFiles = this._viewPcapFiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiPrivacy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showFullIpAddresses = undefined;
      this._showUserNamesInLogsAndReports = undefined;
      this._viewPcapFiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showFullIpAddresses = value.showFullIpAddresses;
      this._showUserNamesInLogsAndReports = value.showUserNamesInLogsAndReports;
      this._viewPcapFiles = value.viewPcapFiles;
    }
  }

  // show_full_ip_addresses - computed: false, optional: true, required: false
  private _showFullIpAddresses?: string; 
  public get showFullIpAddresses() {
    return this.getStringAttribute('show_full_ip_addresses');
  }
  public set showFullIpAddresses(value: string) {
    this._showFullIpAddresses = value;
  }
  public resetShowFullIpAddresses() {
    this._showFullIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showFullIpAddressesInput() {
    return this._showFullIpAddresses;
  }

  // show_user_names_in_logs_and_reports - computed: false, optional: true, required: false
  private _showUserNamesInLogsAndReports?: string; 
  public get showUserNamesInLogsAndReports() {
    return this.getStringAttribute('show_user_names_in_logs_and_reports');
  }
  public set showUserNamesInLogsAndReports(value: string) {
    this._showUserNamesInLogsAndReports = value;
  }
  public resetShowUserNamesInLogsAndReports() {
    this._showUserNamesInLogsAndReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUserNamesInLogsAndReportsInput() {
    return this._showUserNamesInLogsAndReports;
  }

  // view_pcap_files - computed: false, optional: true, required: false
  private _viewPcapFiles?: string; 
  public get viewPcapFiles() {
    return this.getStringAttribute('view_pcap_files');
  }
  public set viewPcapFiles(value: string) {
    this._viewPcapFiles = value;
  }
  public resetViewPcapFiles() {
    this._viewPcapFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewPcapFilesInput() {
    return this._viewPcapFiles;
  }
}
export interface AdminRoleRoleVsysWebuiSave {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#object_level_changes AdminRole#object_level_changes}
  */
  readonly objectLevelChanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#partial_save AdminRole#partial_save}
  */
  readonly partialSave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#save_for_other_admins AdminRole#save_for_other_admins}
  */
  readonly saveForOtherAdmins?: string;
}

export function adminRoleRoleVsysWebuiSaveToTerraform(struct?: AdminRoleRoleVsysWebuiSave | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_level_changes: cdktf.stringToTerraform(struct!.objectLevelChanges),
    partial_save: cdktf.stringToTerraform(struct!.partialSave),
    save_for_other_admins: cdktf.stringToTerraform(struct!.saveForOtherAdmins),
  }
}


export function adminRoleRoleVsysWebuiSaveToHclTerraform(struct?: AdminRoleRoleVsysWebuiSave | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_level_changes: {
      value: cdktf.stringToHclTerraform(struct!.objectLevelChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partial_save: {
      value: cdktf.stringToHclTerraform(struct!.partialSave),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    save_for_other_admins: {
      value: cdktf.stringToHclTerraform(struct!.saveForOtherAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiSaveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebuiSave | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectLevelChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLevelChanges = this._objectLevelChanges;
    }
    if (this._partialSave !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialSave = this._partialSave;
    }
    if (this._saveForOtherAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveForOtherAdmins = this._saveForOtherAdmins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebuiSave | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectLevelChanges = undefined;
      this._partialSave = undefined;
      this._saveForOtherAdmins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectLevelChanges = value.objectLevelChanges;
      this._partialSave = value.partialSave;
      this._saveForOtherAdmins = value.saveForOtherAdmins;
    }
  }

  // object_level_changes - computed: false, optional: true, required: false
  private _objectLevelChanges?: string; 
  public get objectLevelChanges() {
    return this.getStringAttribute('object_level_changes');
  }
  public set objectLevelChanges(value: string) {
    this._objectLevelChanges = value;
  }
  public resetObjectLevelChanges() {
    this._objectLevelChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLevelChangesInput() {
    return this._objectLevelChanges;
  }

  // partial_save - computed: false, optional: true, required: false
  private _partialSave?: string; 
  public get partialSave() {
    return this.getStringAttribute('partial_save');
  }
  public set partialSave(value: string) {
    this._partialSave = value;
  }
  public resetPartialSave() {
    this._partialSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialSaveInput() {
    return this._partialSave;
  }

  // save_for_other_admins - computed: false, optional: true, required: false
  private _saveForOtherAdmins?: string; 
  public get saveForOtherAdmins() {
    return this.getStringAttribute('save_for_other_admins');
  }
  public set saveForOtherAdmins(value: string) {
    this._saveForOtherAdmins = value;
  }
  public resetSaveForOtherAdmins() {
    this._saveForOtherAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveForOtherAdminsInput() {
    return this._saveForOtherAdmins;
  }
}
export interface AdminRoleRoleVsysWebui {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#acc AdminRole#acc}
  */
  readonly acc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#commit AdminRole#commit}
  */
  readonly commit?: AdminRoleRoleVsysWebuiCommit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#dashboard AdminRole#dashboard}
  */
  readonly dashboard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#device AdminRole#device}
  */
  readonly device?: AdminRoleRoleVsysWebuiDevice;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#monitor AdminRole#monitor}
  */
  readonly monitor?: AdminRoleRoleVsysWebuiMonitor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#network AdminRole#network}
  */
  readonly network?: AdminRoleRoleVsysWebuiNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#objects AdminRole#objects}
  */
  readonly objects?: AdminRoleRoleVsysWebuiObjects;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#operations AdminRole#operations}
  */
  readonly operations?: AdminRoleRoleVsysWebuiOperations;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#policies AdminRole#policies}
  */
  readonly policies?: AdminRoleRoleVsysWebuiPolicies;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#privacy AdminRole#privacy}
  */
  readonly privacy?: AdminRoleRoleVsysWebuiPrivacy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#save AdminRole#save}
  */
  readonly save?: AdminRoleRoleVsysWebuiSave;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#tasks AdminRole#tasks}
  */
  readonly tasks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#validate AdminRole#validate}
  */
  readonly validate?: string;
}

export function adminRoleRoleVsysWebuiToTerraform(struct?: AdminRoleRoleVsysWebui | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acc: cdktf.stringToTerraform(struct!.acc),
    commit: adminRoleRoleVsysWebuiCommitToTerraform(struct!.commit),
    dashboard: cdktf.stringToTerraform(struct!.dashboard),
    device: adminRoleRoleVsysWebuiDeviceToTerraform(struct!.device),
    monitor: adminRoleRoleVsysWebuiMonitorToTerraform(struct!.monitor),
    network: adminRoleRoleVsysWebuiNetworkToTerraform(struct!.network),
    objects: adminRoleRoleVsysWebuiObjectsToTerraform(struct!.objects),
    operations: adminRoleRoleVsysWebuiOperationsToTerraform(struct!.operations),
    policies: adminRoleRoleVsysWebuiPoliciesToTerraform(struct!.policies),
    privacy: adminRoleRoleVsysWebuiPrivacyToTerraform(struct!.privacy),
    save: adminRoleRoleVsysWebuiSaveToTerraform(struct!.save),
    tasks: cdktf.stringToTerraform(struct!.tasks),
    validate: cdktf.stringToTerraform(struct!.validate),
  }
}


export function adminRoleRoleVsysWebuiToHclTerraform(struct?: AdminRoleRoleVsysWebui | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acc: {
      value: cdktf.stringToHclTerraform(struct!.acc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit: {
      value: adminRoleRoleVsysWebuiCommitToHclTerraform(struct!.commit),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiCommit",
    },
    dashboard: {
      value: cdktf.stringToHclTerraform(struct!.dashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: adminRoleRoleVsysWebuiDeviceToHclTerraform(struct!.device),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiDevice",
    },
    monitor: {
      value: adminRoleRoleVsysWebuiMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiMonitor",
    },
    network: {
      value: adminRoleRoleVsysWebuiNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiNetwork",
    },
    objects: {
      value: adminRoleRoleVsysWebuiObjectsToHclTerraform(struct!.objects),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiObjects",
    },
    operations: {
      value: adminRoleRoleVsysWebuiOperationsToHclTerraform(struct!.operations),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiOperations",
    },
    policies: {
      value: adminRoleRoleVsysWebuiPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiPolicies",
    },
    privacy: {
      value: adminRoleRoleVsysWebuiPrivacyToHclTerraform(struct!.privacy),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiPrivacy",
    },
    save: {
      value: adminRoleRoleVsysWebuiSaveToHclTerraform(struct!.save),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebuiSave",
    },
    tasks: {
      value: cdktf.stringToHclTerraform(struct!.tasks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate: {
      value: cdktf.stringToHclTerraform(struct!.validate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysWebuiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysWebui | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acc !== undefined) {
      hasAnyValues = true;
      internalValueResult.acc = this._acc;
    }
    if (this._commit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit?.internalValue;
    }
    if (this._dashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard;
    }
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._privacy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacy = this._privacy?.internalValue;
    }
    if (this._save?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.save = this._save?.internalValue;
    }
    if (this._tasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks;
    }
    if (this._validate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysWebui | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acc = undefined;
      this._commit.internalValue = undefined;
      this._dashboard = undefined;
      this._device.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._network.internalValue = undefined;
      this._objects.internalValue = undefined;
      this._operations.internalValue = undefined;
      this._policies.internalValue = undefined;
      this._privacy.internalValue = undefined;
      this._save.internalValue = undefined;
      this._tasks = undefined;
      this._validate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acc = value.acc;
      this._commit.internalValue = value.commit;
      this._dashboard = value.dashboard;
      this._device.internalValue = value.device;
      this._monitor.internalValue = value.monitor;
      this._network.internalValue = value.network;
      this._objects.internalValue = value.objects;
      this._operations.internalValue = value.operations;
      this._policies.internalValue = value.policies;
      this._privacy.internalValue = value.privacy;
      this._save.internalValue = value.save;
      this._tasks = value.tasks;
      this._validate = value.validate;
    }
  }

  // acc - computed: false, optional: true, required: false
  private _acc?: string; 
  public get acc() {
    return this.getStringAttribute('acc');
  }
  public set acc(value: string) {
    this._acc = value;
  }
  public resetAcc() {
    this._acc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accInput() {
    return this._acc;
  }

  // commit - computed: false, optional: true, required: false
  private _commit = new AdminRoleRoleVsysWebuiCommitOutputReference(this, "commit");
  public get commit() {
    return this._commit;
  }
  public putCommit(value: AdminRoleRoleVsysWebuiCommit) {
    this._commit.internalValue = value;
  }
  public resetCommit() {
    this._commit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit.internalValue;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard?: string; 
  public get dashboard() {
    return this.getStringAttribute('dashboard');
  }
  public set dashboard(value: string) {
    this._dashboard = value;
  }
  public resetDashboard() {
    this._dashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard;
  }

  // device - computed: false, optional: true, required: false
  private _device = new AdminRoleRoleVsysWebuiDeviceOutputReference(this, "device");
  public get device() {
    return this._device;
  }
  public putDevice(value: AdminRoleRoleVsysWebuiDevice) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new AdminRoleRoleVsysWebuiMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: AdminRoleRoleVsysWebuiMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new AdminRoleRoleVsysWebuiNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: AdminRoleRoleVsysWebuiNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new AdminRoleRoleVsysWebuiObjectsOutputReference(this, "objects");
  public get objects() {
    return this._objects;
  }
  public putObjects(value: AdminRoleRoleVsysWebuiObjects) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new AdminRoleRoleVsysWebuiOperationsOutputReference(this, "operations");
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AdminRoleRoleVsysWebuiOperations) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new AdminRoleRoleVsysWebuiPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: AdminRoleRoleVsysWebuiPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // privacy - computed: false, optional: true, required: false
  private _privacy = new AdminRoleRoleVsysWebuiPrivacyOutputReference(this, "privacy");
  public get privacy() {
    return this._privacy;
  }
  public putPrivacy(value: AdminRoleRoleVsysWebuiPrivacy) {
    this._privacy.internalValue = value;
  }
  public resetPrivacy() {
    this._privacy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyInput() {
    return this._privacy.internalValue;
  }

  // save - computed: false, optional: true, required: false
  private _save = new AdminRoleRoleVsysWebuiSaveOutputReference(this, "save");
  public get save() {
    return this._save;
  }
  public putSave(value: AdminRoleRoleVsysWebuiSave) {
    this._save.internalValue = value;
  }
  public resetSave() {
    this._save.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInput() {
    return this._save.internalValue;
  }

  // tasks - computed: false, optional: true, required: false
  private _tasks?: string; 
  public get tasks() {
    return this.getStringAttribute('tasks');
  }
  public set tasks(value: string) {
    this._tasks = value;
  }
  public resetTasks() {
    this._tasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: string; 
  public get validate() {
    return this.getStringAttribute('validate');
  }
  public set validate(value: string) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }
}
export interface AdminRoleRoleVsysXmlapi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#commit AdminRole#commit}
  */
  readonly commit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#config AdminRole#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#export AdminRole#export}
  */
  readonly export?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#import AdminRole#import}
  */
  readonly import?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#iot AdminRole#iot}
  */
  readonly iot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#log AdminRole#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#op AdminRole#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#report AdminRole#report}
  */
  readonly report?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#user_id AdminRole#user_id}
  */
  readonly userId?: string;
}

export function adminRoleRoleVsysXmlapiToTerraform(struct?: AdminRoleRoleVsysXmlapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commit: cdktf.stringToTerraform(struct!.commit),
    config: cdktf.stringToTerraform(struct!.config),
    export: cdktf.stringToTerraform(struct!.export),
    import: cdktf.stringToTerraform(struct!.import),
    iot: cdktf.stringToTerraform(struct!.iot),
    log: cdktf.stringToTerraform(struct!.log),
    op: cdktf.stringToTerraform(struct!.op),
    report: cdktf.stringToTerraform(struct!.report),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function adminRoleRoleVsysXmlapiToHclTerraform(struct?: AdminRoleRoleVsysXmlapi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export: {
      value: cdktf.stringToHclTerraform(struct!.export),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import: {
      value: cdktf.stringToHclTerraform(struct!.import),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iot: {
      value: cdktf.stringToHclTerraform(struct!.iot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report: {
      value: cdktf.stringToHclTerraform(struct!.report),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysXmlapiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsysXmlapi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._export !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export;
    }
    if (this._import !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import;
    }
    if (this._iot !== undefined) {
      hasAnyValues = true;
      internalValueResult.iot = this._iot;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._report !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsysXmlapi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commit = undefined;
      this._config = undefined;
      this._export = undefined;
      this._import = undefined;
      this._iot = undefined;
      this._log = undefined;
      this._op = undefined;
      this._report = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commit = value.commit;
      this._config = value.config;
      this._export = value.export;
      this._import = value.import;
      this._iot = value.iot;
      this._log = value.log;
      this._op = value.op;
      this._report = value.report;
      this._userId = value.userId;
    }
  }

  // commit - computed: false, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // export - computed: false, optional: true, required: false
  private _export?: string; 
  public get export() {
    return this.getStringAttribute('export');
  }
  public set export(value: string) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
  }

  // import - computed: false, optional: true, required: false
  private _import?: string; 
  public get import() {
    return this.getStringAttribute('import');
  }
  public set import(value: string) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // iot - computed: false, optional: true, required: false
  private _iot?: string; 
  public get iot() {
    return this.getStringAttribute('iot');
  }
  public set iot(value: string) {
    this._iot = value;
  }
  public resetIot() {
    this._iot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotInput() {
    return this._iot;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // op - computed: false, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // report - computed: false, optional: true, required: false
  private _report?: string; 
  public get report() {
    return this.getStringAttribute('report');
  }
  public set report(value: string) {
    this._report = value;
  }
  public resetReport() {
    this._report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}
export interface AdminRoleRoleVsys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#cli AdminRole#cli}
  */
  readonly cli?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#restapi AdminRole#restapi}
  */
  readonly restapi?: AdminRoleRoleVsysRestapi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#webui AdminRole#webui}
  */
  readonly webui?: AdminRoleRoleVsysWebui;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#xmlapi AdminRole#xmlapi}
  */
  readonly xmlapi?: AdminRoleRoleVsysXmlapi;
}

export function adminRoleRoleVsysToTerraform(struct?: AdminRoleRoleVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli: cdktf.stringToTerraform(struct!.cli),
    restapi: adminRoleRoleVsysRestapiToTerraform(struct!.restapi),
    webui: adminRoleRoleVsysWebuiToTerraform(struct!.webui),
    xmlapi: adminRoleRoleVsysXmlapiToTerraform(struct!.xmlapi),
  }
}


export function adminRoleRoleVsysToHclTerraform(struct?: AdminRoleRoleVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli: {
      value: cdktf.stringToHclTerraform(struct!.cli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restapi: {
      value: adminRoleRoleVsysRestapiToHclTerraform(struct!.restapi),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysRestapi",
    },
    webui: {
      value: adminRoleRoleVsysWebuiToHclTerraform(struct!.webui),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysWebui",
    },
    xmlapi: {
      value: adminRoleRoleVsysXmlapiToHclTerraform(struct!.xmlapi),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsysXmlapi",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRoleVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cli = this._cli;
    }
    if (this._restapi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restapi = this._restapi?.internalValue;
    }
    if (this._webui?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webui = this._webui?.internalValue;
    }
    if (this._xmlapi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlapi = this._xmlapi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRoleVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cli = undefined;
      this._restapi.internalValue = undefined;
      this._webui.internalValue = undefined;
      this._xmlapi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cli = value.cli;
      this._restapi.internalValue = value.restapi;
      this._webui.internalValue = value.webui;
      this._xmlapi.internalValue = value.xmlapi;
    }
  }

  // cli - computed: false, optional: true, required: false
  private _cli?: string; 
  public get cli() {
    return this.getStringAttribute('cli');
  }
  public set cli(value: string) {
    this._cli = value;
  }
  public resetCli() {
    this._cli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliInput() {
    return this._cli;
  }

  // restapi - computed: false, optional: true, required: false
  private _restapi = new AdminRoleRoleVsysRestapiOutputReference(this, "restapi");
  public get restapi() {
    return this._restapi;
  }
  public putRestapi(value: AdminRoleRoleVsysRestapi) {
    this._restapi.internalValue = value;
  }
  public resetRestapi() {
    this._restapi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restapiInput() {
    return this._restapi.internalValue;
  }

  // webui - computed: false, optional: true, required: false
  private _webui = new AdminRoleRoleVsysWebuiOutputReference(this, "webui");
  public get webui() {
    return this._webui;
  }
  public putWebui(value: AdminRoleRoleVsysWebui) {
    this._webui.internalValue = value;
  }
  public resetWebui() {
    this._webui.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webuiInput() {
    return this._webui.internalValue;
  }

  // xmlapi - computed: false, optional: true, required: false
  private _xmlapi = new AdminRoleRoleVsysXmlapiOutputReference(this, "xmlapi");
  public get xmlapi() {
    return this._xmlapi;
  }
  public putXmlapi(value: AdminRoleRoleVsysXmlapi) {
    this._xmlapi.internalValue = value;
  }
  public resetXmlapi() {
    this._xmlapi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlapiInput() {
    return this._xmlapi.internalValue;
  }
}
export interface AdminRoleRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#device AdminRole#device}
  */
  readonly device?: AdminRoleRoleDevice;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#vsys AdminRole#vsys}
  */
  readonly vsys?: AdminRoleRoleVsys;
}

export function adminRoleRoleToTerraform(struct?: AdminRoleRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: adminRoleRoleDeviceToTerraform(struct!.device),
    vsys: adminRoleRoleVsysToTerraform(struct!.vsys),
  }
}


export function adminRoleRoleToHclTerraform(struct?: AdminRoleRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: adminRoleRoleDeviceToHclTerraform(struct!.device),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleDevice",
    },
    vsys: {
      value: adminRoleRoleVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminRoleRoleVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminRoleRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminRoleRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminRoleRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device.internalValue = value.device;
      this._vsys.internalValue = value.vsys;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device = new AdminRoleRoleDeviceOutputReference(this, "device");
  public get device() {
    return this._device;
  }
  public putDevice(value: AdminRoleRoleDevice) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new AdminRoleRoleVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: AdminRoleRoleVsys) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role panos_admin_role}
*/
export class AdminRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_admin_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminRole to import
  * @param importFromId The id of the existing AdminRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_admin_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/admin_role panos_admin_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AdminRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_admin_role',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._role.internalValue = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location - computed: false, optional: false, required: true
  private _location = new AdminRoleLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: AdminRoleLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // role - computed: false, optional: true, required: false
  private _role = new AdminRoleRoleOutputReference(this, "role");
  public get role() {
    return this._role;
  }
  public putRole(value: AdminRoleRole) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
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
      description: cdktf.stringToTerraform(this._description),
      location: adminRoleLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      role: adminRoleRoleToTerraform(this._role.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: adminRoleLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdminRoleLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: adminRoleRoleToHclTerraform(this._role.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdminRoleRole",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
