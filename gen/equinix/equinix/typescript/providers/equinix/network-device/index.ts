// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device billing account number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#account_number NetworkDevice#account_number}
  */
  readonly accountNumber: string;
  /**
  * Unique identifier of applied ACL template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#acl_template_id NetworkDevice#acl_template_id}
  */
  readonly aclTemplateId?: string;
  /**
  * Additional Internet bandwidth, in Mbps, that will be allocated to the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#additional_bandwidth NetworkDevice#additional_bandwidth}
  */
  readonly additionalBandwidth?: number;
  /**
  * Boolean value that determines device licensing mode: bring your own license or subscription (default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#byol NetworkDevice#byol}
  */
  readonly byol?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of applied cloud init file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#cloud_init_file_id NetworkDevice#cloud_init_file_id}
  */
  readonly cloudInitFileId?: string;
  /**
  * Parameter to identify internet access for device. Supported Values: INTERNET-ACCESS(default) or PRIVATE or INTERNET-ACCESS-WITH-PRVT-MGMT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#connectivity NetworkDevice#connectivity}
  */
  readonly connectivity?: string;
  /**
  * Number of CPU cores used by device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#core_count NetworkDevice#core_count}
  */
  readonly coreCount: number;
  /**
  * Unique ID of an existing device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#diverse_device_id NetworkDevice#diverse_device_id}
  */
  readonly diverseDeviceId?: string;
  /**
  * Boolean value that decides to generate default admin password for devices. Default value is true if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#generate_default_password NetworkDevice#generate_default_password}
  */
  readonly generateDefaultPassword?: boolean | cdktf.IResolvable;
  /**
  * Device hostname prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#hostname NetworkDevice#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#id NetworkDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of network interfaces on a device. If not specified, default number for a given device type will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#interface_count NetworkDevice#interface_count}
  */
  readonly interfaceCount?: number;
  /**
  * Path to the license file that will be uploaded and applied on a device, applicable for some device types in BYOL licensing mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_file NetworkDevice#license_file}
  */
  readonly licenseFile?: string;
  /**
  * Unique identifier of applied license file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_file_id NetworkDevice#license_file_id}
  */
  readonly licenseFileId?: string;
  /**
  * License Token applicable for some device types in BYOL licensing mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_token NetworkDevice#license_token}
  */
  readonly licenseToken?: string;
  /**
  * Device location metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#metro_code NetworkDevice#metro_code}
  */
  readonly metroCode: string;
  /**
  * Unique identifier of applied MGMT ACL template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#mgmt_acl_template_uuid NetworkDevice#mgmt_acl_template_uuid}
  */
  readonly mgmtAclTemplateUuid?: string;
  /**
  * Device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#name NetworkDevice#name}
  */
  readonly name: string;
  /**
  * List of email addresses that will receive device status notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#notifications NetworkDevice#notifications}
  */
  readonly notifications: string[];
  /**
  * Name/number used to identify device order on the invoice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#order_reference NetworkDevice#order_reference}
  */
  readonly orderReference?: string;
  /**
  * Device software package code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#package_code NetworkDevice#package_code}
  */
  readonly packageCode: string;
  /**
  * The unique identifier of Project Resource to which device is scoped to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#project_id NetworkDevice#project_id}
  */
  readonly projectId?: string;
  /**
  * Purchase order number associated with a device order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#purchase_order_number NetworkDevice#purchase_order_number}
  */
  readonly purchaseOrderNumber?: string;
  /**
  * Boolean value that determines device management mode: self-managed or subscription (default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#self_managed NetworkDevice#self_managed}
  */
  readonly selfManaged?: boolean | cdktf.IResolvable;
  /**
  * Device term length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#term_length NetworkDevice#term_length}
  */
  readonly termLength: number;
  /**
  * Device license throughput
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#throughput NetworkDevice#throughput}
  */
  readonly throughput?: number;
  /**
  * Device license throughput unit (Mbps or Gbps)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#throughput_unit NetworkDevice#throughput_unit}
  */
  readonly throughputUnit?: string;
  /**
  * Bandwidth Tiers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#tier NetworkDevice#tier}
  */
  readonly tier?: number;
  /**
  * Device type code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#type_code NetworkDevice#type_code}
  */
  readonly typeCode: string;
  /**
  * Map of vendor specific configuration parameters for a device (controller1, activationKey, managementType, siteId, systemIpAddress)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#vendor_configuration NetworkDevice#vendor_configuration}
  */
  readonly vendorConfiguration?: { [key: string]: string };
  /**
  * Device software software version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#version NetworkDevice#version}
  */
  readonly version: string;
  /**
  * device interface id picked for WAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#wan_interface_id NetworkDevice#wan_interface_id}
  */
  readonly wanInterfaceId?: string;
  /**
  * cluster_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#cluster_details NetworkDevice#cluster_details}
  */
  readonly clusterDetails?: NetworkDeviceClusterDetails;
  /**
  * secondary_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#secondary_device NetworkDevice#secondary_device}
  */
  readonly secondaryDevice?: NetworkDeviceSecondaryDevice;
  /**
  * ssh_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#ssh_key NetworkDevice#ssh_key}
  */
  readonly sshKey?: NetworkDeviceSshKey;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#timeouts NetworkDevice#timeouts}
  */
  readonly timeouts?: NetworkDeviceTimeouts;
}
export interface NetworkDeviceInterface {
}

export function networkDeviceInterfaceToTerraform(struct?: NetworkDeviceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkDeviceInterfaceToHclTerraform(struct?: NetworkDeviceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkDeviceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_type - computed: true, optional: false, required: false
  public get assignedType() {
    return this.getStringAttribute('assigned_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class NetworkDeviceInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): NetworkDeviceInterfaceOutputReference {
    return new NetworkDeviceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDeviceClusterDetailsNode0VendorConfiguration {
  /**
  * Activation key. This is required for Velocloud clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#activation_key NetworkDevice#activation_key}
  */
  readonly activationKey?: string;
  /**
  * The administrative password of the device. You can use it to log in to the console. This field is not available for all device types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#admin_password NetworkDevice#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * System IP Address. Mandatory for the Fortinet SDWAN cluster device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#controller1 NetworkDevice#controller1}
  */
  readonly controller1?: string;
  /**
  * Controller fqdn. This is required for Velocloud clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#controller_fqdn NetworkDevice#controller_fqdn}
  */
  readonly controllerFqdn?: string;
  /**
  * LAN1 Gateway. This field is relevant only for Infoblox Grid Member devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#gateway_ip NetworkDevice#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Hostname. This is necessary for Palo Alto, Juniper, and Fortinet clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#hostname NetworkDevice#hostname}
  */
  readonly hostname?: string;
  /**
  * LAN1 Private Network. This field is relevant only for Infoblox Grid Member devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#ip_address NetworkDevice#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * License id. This field is relevant only for the BlueCat DNS and DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_id NetworkDevice#license_id}
  */
  readonly licenseId?: string;
  /**
  * License key. This field is relevant only for the BlueCat DNS and DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_key NetworkDevice#license_key}
  */
  readonly licenseKey?: string;
  /**
  * Management Type. This field is relevant only for Cisco FTD Firewall devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#management_type NetworkDevice#management_type}
  */
  readonly managementType?: string;
  /**
  * Panorama Server Auth Key. This field is relevant only for Palo Alto Networks Firewall devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#panorama_auth_key NetworkDevice#panorama_auth_key}
  */
  readonly panoramaAuthKey?: string;
  /**
  * Panorama Server IP Address. This field is relevant only for Palo Alto Networks Firewall devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#panorama_ip_address NetworkDevice#panorama_ip_address}
  */
  readonly panoramaIpAddress?: string;
  /**
  * Private address. This field is relevant only for the BlueCat DNS and DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#private_address NetworkDevice#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Private CIDR Mask. This field is relevant only for the BlueCat DNS and DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#private_cidr_mask NetworkDevice#private_cidr_mask}
  */
  readonly privateCidrMask?: string;
  /**
  * Private gateway. This field is relevant only for the BlueCat DNS and DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#private_gateway NetworkDevice#private_gateway}
  */
  readonly privateGateway?: string;
  /**
  * The CLI password of the device. This field is relevant only for the Velocloud SDWAN cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#root_password NetworkDevice#root_password}
  */
  readonly rootPassword?: string;
  /**
  * LAN1 Subnet Mask. This field is relevant only for Infoblox Grid Member devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#subnet_mask_ip NetworkDevice#subnet_mask_ip}
  */
  readonly subnetMaskIp?: string;
}

export function networkDeviceClusterDetailsNode0VendorConfigurationToTerraform(struct?: NetworkDeviceClusterDetailsNode0VendorConfigurationOutputReference | NetworkDeviceClusterDetailsNode0VendorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_key: cdktf.stringToTerraform(struct!.activationKey),
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    controller1: cdktf.stringToTerraform(struct!.controller1),
    controller_fqdn: cdktf.stringToTerraform(struct!.controllerFqdn),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    license_id: cdktf.stringToTerraform(struct!.licenseId),
    license_key: cdktf.stringToTerraform(struct!.licenseKey),
    management_type: cdktf.stringToTerraform(struct!.managementType),
    panorama_auth_key: cdktf.stringToTerraform(struct!.panoramaAuthKey),
    panorama_ip_address: cdktf.stringToTerraform(struct!.panoramaIpAddress),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    private_cidr_mask: cdktf.stringToTerraform(struct!.privateCidrMask),
    private_gateway: cdktf.stringToTerraform(struct!.privateGateway),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
    subnet_mask_ip: cdktf.stringToTerraform(struct!.subnetMaskIp),
  }
}


export function networkDeviceClusterDetailsNode0VendorConfigurationToHclTerraform(struct?: NetworkDeviceClusterDetailsNode0VendorConfigurationOutputReference | NetworkDeviceClusterDetailsNode0VendorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_key: {
      value: cdktf.stringToHclTerraform(struct!.activationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller1: {
      value: cdktf.stringToHclTerraform(struct!.controller1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.controllerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    license_id: {
      value: cdktf.stringToHclTerraform(struct!.licenseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_key: {
      value: cdktf.stringToHclTerraform(struct!.licenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_type: {
      value: cdktf.stringToHclTerraform(struct!.managementType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_auth_key: {
      value: cdktf.stringToHclTerraform(struct!.panoramaAuthKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.panoramaIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_cidr_mask: {
      value: cdktf.stringToHclTerraform(struct!.privateCidrMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_gateway: {
      value: cdktf.stringToHclTerraform(struct!.privateGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_password: {
      value: cdktf.stringToHclTerraform(struct!.rootPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask_ip: {
      value: cdktf.stringToHclTerraform(struct!.subnetMaskIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceClusterDetailsNode0VendorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkDeviceClusterDetailsNode0VendorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationKey = this._activationKey;
    }
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._controller1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller1 = this._controller1;
    }
    if (this._controllerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerFqdn = this._controllerFqdn;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._licenseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseId = this._licenseId;
    }
    if (this._licenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseKey = this._licenseKey;
    }
    if (this._managementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementType = this._managementType;
    }
    if (this._panoramaAuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaAuthKey = this._panoramaAuthKey;
    }
    if (this._panoramaIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaIpAddress = this._panoramaIpAddress;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._privateCidrMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateCidrMask = this._privateCidrMask;
    }
    if (this._privateGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateGateway = this._privateGateway;
    }
    if (this._rootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPassword = this._rootPassword;
    }
    if (this._subnetMaskIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMaskIp = this._subnetMaskIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceClusterDetailsNode0VendorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activationKey = undefined;
      this._adminPassword = undefined;
      this._controller1 = undefined;
      this._controllerFqdn = undefined;
      this._gatewayIp = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
      this._licenseId = undefined;
      this._licenseKey = undefined;
      this._managementType = undefined;
      this._panoramaAuthKey = undefined;
      this._panoramaIpAddress = undefined;
      this._privateAddress = undefined;
      this._privateCidrMask = undefined;
      this._privateGateway = undefined;
      this._rootPassword = undefined;
      this._subnetMaskIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activationKey = value.activationKey;
      this._adminPassword = value.adminPassword;
      this._controller1 = value.controller1;
      this._controllerFqdn = value.controllerFqdn;
      this._gatewayIp = value.gatewayIp;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
      this._licenseId = value.licenseId;
      this._licenseKey = value.licenseKey;
      this._managementType = value.managementType;
      this._panoramaAuthKey = value.panoramaAuthKey;
      this._panoramaIpAddress = value.panoramaIpAddress;
      this._privateAddress = value.privateAddress;
      this._privateCidrMask = value.privateCidrMask;
      this._privateGateway = value.privateGateway;
      this._rootPassword = value.rootPassword;
      this._subnetMaskIp = value.subnetMaskIp;
    }
  }

  // activation_key - computed: false, optional: true, required: false
  private _activationKey?: string; 
  public get activationKey() {
    return this.getStringAttribute('activation_key');
  }
  public set activationKey(value: string) {
    this._activationKey = value;
  }
  public resetActivationKey() {
    this._activationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationKeyInput() {
    return this._activationKey;
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // controller1 - computed: false, optional: true, required: false
  private _controller1?: string; 
  public get controller1() {
    return this.getStringAttribute('controller1');
  }
  public set controller1(value: string) {
    this._controller1 = value;
  }
  public resetController1() {
    this._controller1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controller1Input() {
    return this._controller1;
  }

  // controller_fqdn - computed: false, optional: true, required: false
  private _controllerFqdn?: string; 
  public get controllerFqdn() {
    return this.getStringAttribute('controller_fqdn');
  }
  public set controllerFqdn(value: string) {
    this._controllerFqdn = value;
  }
  public resetControllerFqdn() {
    this._controllerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerFqdnInput() {
    return this._controllerFqdn;
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // license_id - computed: false, optional: true, required: false
  private _licenseId?: string; 
  public get licenseId() {
    return this.getStringAttribute('license_id');
  }
  public set licenseId(value: string) {
    this._licenseId = value;
  }
  public resetLicenseId() {
    this._licenseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseIdInput() {
    return this._licenseId;
  }

  // license_key - computed: false, optional: true, required: false
  private _licenseKey?: string; 
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }
  public set licenseKey(value: string) {
    this._licenseKey = value;
  }
  public resetLicenseKey() {
    this._licenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyInput() {
    return this._licenseKey;
  }

  // management_type - computed: false, optional: true, required: false
  private _managementType?: string; 
  public get managementType() {
    return this.getStringAttribute('management_type');
  }
  public set managementType(value: string) {
    this._managementType = value;
  }
  public resetManagementType() {
    this._managementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementTypeInput() {
    return this._managementType;
  }

  // panorama_auth_key - computed: false, optional: true, required: false
  private _panoramaAuthKey?: string; 
  public get panoramaAuthKey() {
    return this.getStringAttribute('panorama_auth_key');
  }
  public set panoramaAuthKey(value: string) {
    this._panoramaAuthKey = value;
  }
  public resetPanoramaAuthKey() {
    this._panoramaAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaAuthKeyInput() {
    return this._panoramaAuthKey;
  }

  // panorama_ip_address - computed: false, optional: true, required: false
  private _panoramaIpAddress?: string; 
  public get panoramaIpAddress() {
    return this.getStringAttribute('panorama_ip_address');
  }
  public set panoramaIpAddress(value: string) {
    this._panoramaIpAddress = value;
  }
  public resetPanoramaIpAddress() {
    this._panoramaIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaIpAddressInput() {
    return this._panoramaIpAddress;
  }

  // private_address - computed: false, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // private_cidr_mask - computed: false, optional: true, required: false
  private _privateCidrMask?: string; 
  public get privateCidrMask() {
    return this.getStringAttribute('private_cidr_mask');
  }
  public set privateCidrMask(value: string) {
    this._privateCidrMask = value;
  }
  public resetPrivateCidrMask() {
    this._privateCidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCidrMaskInput() {
    return this._privateCidrMask;
  }

  // private_gateway - computed: false, optional: true, required: false
  private _privateGateway?: string; 
  public get privateGateway() {
    return this.getStringAttribute('private_gateway');
  }
  public set privateGateway(value: string) {
    this._privateGateway = value;
  }
  public resetPrivateGateway() {
    this._privateGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateGatewayInput() {
    return this._privateGateway;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // subnet_mask_ip - computed: false, optional: true, required: false
  private _subnetMaskIp?: string; 
  public get subnetMaskIp() {
    return this.getStringAttribute('subnet_mask_ip');
  }
  public set subnetMaskIp(value: string) {
    this._subnetMaskIp = value;
  }
  public resetSubnetMaskIp() {
    this._subnetMaskIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskIpInput() {
    return this._subnetMaskIp;
  }
}
export interface NetworkDeviceClusterDetailsNode0 {
  /**
  * License file id. This is necessary for Fortinet and Juniper clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_file_id NetworkDevice#license_file_id}
  */
  readonly licenseFileId?: string;
  /**
  * License token. This is necessary for Palo Alto clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_token NetworkDevice#license_token}
  */
  readonly licenseToken?: string;
  /**
  * vendor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#vendor_configuration NetworkDevice#vendor_configuration}
  */
  readonly vendorConfiguration?: NetworkDeviceClusterDetailsNode0VendorConfiguration;
}

export function networkDeviceClusterDetailsNode0ToTerraform(struct?: NetworkDeviceClusterDetailsNode0OutputReference | NetworkDeviceClusterDetailsNode0): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_file_id: cdktf.stringToTerraform(struct!.licenseFileId),
    license_token: cdktf.stringToTerraform(struct!.licenseToken),
    vendor_configuration: networkDeviceClusterDetailsNode0VendorConfigurationToTerraform(struct!.vendorConfiguration),
  }
}


export function networkDeviceClusterDetailsNode0ToHclTerraform(struct?: NetworkDeviceClusterDetailsNode0OutputReference | NetworkDeviceClusterDetailsNode0): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_file_id: {
      value: cdktf.stringToHclTerraform(struct!.licenseFileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_token: {
      value: cdktf.stringToHclTerraform(struct!.licenseToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_configuration: {
      value: networkDeviceClusterDetailsNode0VendorConfigurationToHclTerraform(struct!.vendorConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDeviceClusterDetailsNode0VendorConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceClusterDetailsNode0OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkDeviceClusterDetailsNode0 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseFileId = this._licenseFileId;
    }
    if (this._licenseToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseToken = this._licenseToken;
    }
    if (this._vendorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorConfiguration = this._vendorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceClusterDetailsNode0 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._licenseFileId = undefined;
      this._licenseToken = undefined;
      this._vendorConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._licenseFileId = value.licenseFileId;
      this._licenseToken = value.licenseToken;
      this._vendorConfiguration.internalValue = value.vendorConfiguration;
    }
  }

  // license_file_id - computed: false, optional: true, required: false
  private _licenseFileId?: string; 
  public get licenseFileId() {
    return this.getStringAttribute('license_file_id');
  }
  public set licenseFileId(value: string) {
    this._licenseFileId = value;
  }
  public resetLicenseFileId() {
    this._licenseFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseFileIdInput() {
    return this._licenseFileId;
  }

  // license_token - computed: false, optional: true, required: false
  private _licenseToken?: string; 
  public get licenseToken() {
    return this.getStringAttribute('license_token');
  }
  public set licenseToken(value: string) {
    this._licenseToken = value;
  }
  public resetLicenseToken() {
    this._licenseToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTokenInput() {
    return this._licenseToken;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vendor_configuration - computed: false, optional: true, required: false
  private _vendorConfiguration = new NetworkDeviceClusterDetailsNode0VendorConfigurationOutputReference(this, "vendor_configuration");
  public get vendorConfiguration() {
    return this._vendorConfiguration;
  }
  public putVendorConfiguration(value: NetworkDeviceClusterDetailsNode0VendorConfiguration) {
    this._vendorConfiguration.internalValue = value;
  }
  public resetVendorConfiguration() {
    this._vendorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorConfigurationInput() {
    return this._vendorConfiguration.internalValue;
  }
}
export interface NetworkDeviceClusterDetailsNode1VendorConfiguration {
  /**
  * Activation key. This is required for Velocloud clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#activation_key NetworkDevice#activation_key}
  */
  readonly activationKey?: string;
  /**
  * The administrative password of the device. You can use it to log in to the console. This field is not available for all device types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#admin_password NetworkDevice#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * System IP Address. Mandatory for the Fortinet SDWAN cluster device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#controller1 NetworkDevice#controller1}
  */
  readonly controller1?: string;
  /**
  * Controller fqdn. This is required for Velocloud clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#controller_fqdn NetworkDevice#controller_fqdn}
  */
  readonly controllerFqdn?: string;
  /**
  * LAN1 Gateway. This field is relevant only for Infoblox Grid Member devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#gateway_ip NetworkDevice#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Hostname. This is necessary for Palo Alto, Juniper, and Fortinet clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#hostname NetworkDevice#hostname}
  */
  readonly hostname?: string;
  /**
  * LAN1 Private Network. This field is relevant only for Infoblox Grid Member devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#ip_address NetworkDevice#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * License id. This field is relevant only for the BlueCat DNS and DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_id NetworkDevice#license_id}
  */
  readonly licenseId?: string;
  /**
  * License key. This field is relevant only for the BlueCat DNS and DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_key NetworkDevice#license_key}
  */
  readonly licenseKey?: string;
  /**
  * Management Type. This field is relevant only for Cisco FTD Firewall devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#management_type NetworkDevice#management_type}
  */
  readonly managementType?: string;
  /**
  * Panorama Server Auth Key. This field is relevant only for Palo Alto Networks Firewall devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#panorama_auth_key NetworkDevice#panorama_auth_key}
  */
  readonly panoramaAuthKey?: string;
  /**
  * Panorama Server IP Address. This field is relevant only for Palo Alto Networks Firewall devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#panorama_ip_address NetworkDevice#panorama_ip_address}
  */
  readonly panoramaIpAddress?: string;
  /**
  * Private address. This field is relevant only for the BlueCat DNS and DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#private_address NetworkDevice#private_address}
  */
  readonly privateAddress?: string;
  /**
  * Private CIDR Mask. This field is relevant only for the BlueCat DNS and DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#private_cidr_mask NetworkDevice#private_cidr_mask}
  */
  readonly privateCidrMask?: string;
  /**
  * Private gateway. This field is relevant only for the BlueCat DNS and DHCP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#private_gateway NetworkDevice#private_gateway}
  */
  readonly privateGateway?: string;
  /**
  * The CLI password of the device. This field is relevant only for the Velocloud SDWAN cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#root_password NetworkDevice#root_password}
  */
  readonly rootPassword?: string;
  /**
  * LAN1 Subnet Mask. This field is relevant only for Infoblox Grid Member devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#subnet_mask_ip NetworkDevice#subnet_mask_ip}
  */
  readonly subnetMaskIp?: string;
}

export function networkDeviceClusterDetailsNode1VendorConfigurationToTerraform(struct?: NetworkDeviceClusterDetailsNode1VendorConfigurationOutputReference | NetworkDeviceClusterDetailsNode1VendorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_key: cdktf.stringToTerraform(struct!.activationKey),
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    controller1: cdktf.stringToTerraform(struct!.controller1),
    controller_fqdn: cdktf.stringToTerraform(struct!.controllerFqdn),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    license_id: cdktf.stringToTerraform(struct!.licenseId),
    license_key: cdktf.stringToTerraform(struct!.licenseKey),
    management_type: cdktf.stringToTerraform(struct!.managementType),
    panorama_auth_key: cdktf.stringToTerraform(struct!.panoramaAuthKey),
    panorama_ip_address: cdktf.stringToTerraform(struct!.panoramaIpAddress),
    private_address: cdktf.stringToTerraform(struct!.privateAddress),
    private_cidr_mask: cdktf.stringToTerraform(struct!.privateCidrMask),
    private_gateway: cdktf.stringToTerraform(struct!.privateGateway),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
    subnet_mask_ip: cdktf.stringToTerraform(struct!.subnetMaskIp),
  }
}


export function networkDeviceClusterDetailsNode1VendorConfigurationToHclTerraform(struct?: NetworkDeviceClusterDetailsNode1VendorConfigurationOutputReference | NetworkDeviceClusterDetailsNode1VendorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_key: {
      value: cdktf.stringToHclTerraform(struct!.activationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller1: {
      value: cdktf.stringToHclTerraform(struct!.controller1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.controllerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    license_id: {
      value: cdktf.stringToHclTerraform(struct!.licenseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_key: {
      value: cdktf.stringToHclTerraform(struct!.licenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_type: {
      value: cdktf.stringToHclTerraform(struct!.managementType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_auth_key: {
      value: cdktf.stringToHclTerraform(struct!.panoramaAuthKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.panoramaIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_address: {
      value: cdktf.stringToHclTerraform(struct!.privateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_cidr_mask: {
      value: cdktf.stringToHclTerraform(struct!.privateCidrMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_gateway: {
      value: cdktf.stringToHclTerraform(struct!.privateGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_password: {
      value: cdktf.stringToHclTerraform(struct!.rootPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask_ip: {
      value: cdktf.stringToHclTerraform(struct!.subnetMaskIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceClusterDetailsNode1VendorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkDeviceClusterDetailsNode1VendorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationKey = this._activationKey;
    }
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._controller1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller1 = this._controller1;
    }
    if (this._controllerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerFqdn = this._controllerFqdn;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._licenseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseId = this._licenseId;
    }
    if (this._licenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseKey = this._licenseKey;
    }
    if (this._managementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementType = this._managementType;
    }
    if (this._panoramaAuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaAuthKey = this._panoramaAuthKey;
    }
    if (this._panoramaIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaIpAddress = this._panoramaIpAddress;
    }
    if (this._privateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddress = this._privateAddress;
    }
    if (this._privateCidrMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateCidrMask = this._privateCidrMask;
    }
    if (this._privateGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateGateway = this._privateGateway;
    }
    if (this._rootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPassword = this._rootPassword;
    }
    if (this._subnetMaskIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMaskIp = this._subnetMaskIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceClusterDetailsNode1VendorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activationKey = undefined;
      this._adminPassword = undefined;
      this._controller1 = undefined;
      this._controllerFqdn = undefined;
      this._gatewayIp = undefined;
      this._hostname = undefined;
      this._ipAddress = undefined;
      this._licenseId = undefined;
      this._licenseKey = undefined;
      this._managementType = undefined;
      this._panoramaAuthKey = undefined;
      this._panoramaIpAddress = undefined;
      this._privateAddress = undefined;
      this._privateCidrMask = undefined;
      this._privateGateway = undefined;
      this._rootPassword = undefined;
      this._subnetMaskIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activationKey = value.activationKey;
      this._adminPassword = value.adminPassword;
      this._controller1 = value.controller1;
      this._controllerFqdn = value.controllerFqdn;
      this._gatewayIp = value.gatewayIp;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
      this._licenseId = value.licenseId;
      this._licenseKey = value.licenseKey;
      this._managementType = value.managementType;
      this._panoramaAuthKey = value.panoramaAuthKey;
      this._panoramaIpAddress = value.panoramaIpAddress;
      this._privateAddress = value.privateAddress;
      this._privateCidrMask = value.privateCidrMask;
      this._privateGateway = value.privateGateway;
      this._rootPassword = value.rootPassword;
      this._subnetMaskIp = value.subnetMaskIp;
    }
  }

  // activation_key - computed: false, optional: true, required: false
  private _activationKey?: string; 
  public get activationKey() {
    return this.getStringAttribute('activation_key');
  }
  public set activationKey(value: string) {
    this._activationKey = value;
  }
  public resetActivationKey() {
    this._activationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationKeyInput() {
    return this._activationKey;
  }

  // admin_password - computed: true, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // controller1 - computed: false, optional: true, required: false
  private _controller1?: string; 
  public get controller1() {
    return this.getStringAttribute('controller1');
  }
  public set controller1(value: string) {
    this._controller1 = value;
  }
  public resetController1() {
    this._controller1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controller1Input() {
    return this._controller1;
  }

  // controller_fqdn - computed: false, optional: true, required: false
  private _controllerFqdn?: string; 
  public get controllerFqdn() {
    return this.getStringAttribute('controller_fqdn');
  }
  public set controllerFqdn(value: string) {
    this._controllerFqdn = value;
  }
  public resetControllerFqdn() {
    this._controllerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerFqdnInput() {
    return this._controllerFqdn;
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // license_id - computed: false, optional: true, required: false
  private _licenseId?: string; 
  public get licenseId() {
    return this.getStringAttribute('license_id');
  }
  public set licenseId(value: string) {
    this._licenseId = value;
  }
  public resetLicenseId() {
    this._licenseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseIdInput() {
    return this._licenseId;
  }

  // license_key - computed: false, optional: true, required: false
  private _licenseKey?: string; 
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }
  public set licenseKey(value: string) {
    this._licenseKey = value;
  }
  public resetLicenseKey() {
    this._licenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyInput() {
    return this._licenseKey;
  }

  // management_type - computed: false, optional: true, required: false
  private _managementType?: string; 
  public get managementType() {
    return this.getStringAttribute('management_type');
  }
  public set managementType(value: string) {
    this._managementType = value;
  }
  public resetManagementType() {
    this._managementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementTypeInput() {
    return this._managementType;
  }

  // panorama_auth_key - computed: false, optional: true, required: false
  private _panoramaAuthKey?: string; 
  public get panoramaAuthKey() {
    return this.getStringAttribute('panorama_auth_key');
  }
  public set panoramaAuthKey(value: string) {
    this._panoramaAuthKey = value;
  }
  public resetPanoramaAuthKey() {
    this._panoramaAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaAuthKeyInput() {
    return this._panoramaAuthKey;
  }

  // panorama_ip_address - computed: false, optional: true, required: false
  private _panoramaIpAddress?: string; 
  public get panoramaIpAddress() {
    return this.getStringAttribute('panorama_ip_address');
  }
  public set panoramaIpAddress(value: string) {
    this._panoramaIpAddress = value;
  }
  public resetPanoramaIpAddress() {
    this._panoramaIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaIpAddressInput() {
    return this._panoramaIpAddress;
  }

  // private_address - computed: false, optional: true, required: false
  private _privateAddress?: string; 
  public get privateAddress() {
    return this.getStringAttribute('private_address');
  }
  public set privateAddress(value: string) {
    this._privateAddress = value;
  }
  public resetPrivateAddress() {
    this._privateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressInput() {
    return this._privateAddress;
  }

  // private_cidr_mask - computed: false, optional: true, required: false
  private _privateCidrMask?: string; 
  public get privateCidrMask() {
    return this.getStringAttribute('private_cidr_mask');
  }
  public set privateCidrMask(value: string) {
    this._privateCidrMask = value;
  }
  public resetPrivateCidrMask() {
    this._privateCidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCidrMaskInput() {
    return this._privateCidrMask;
  }

  // private_gateway - computed: false, optional: true, required: false
  private _privateGateway?: string; 
  public get privateGateway() {
    return this.getStringAttribute('private_gateway');
  }
  public set privateGateway(value: string) {
    this._privateGateway = value;
  }
  public resetPrivateGateway() {
    this._privateGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateGatewayInput() {
    return this._privateGateway;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // subnet_mask_ip - computed: false, optional: true, required: false
  private _subnetMaskIp?: string; 
  public get subnetMaskIp() {
    return this.getStringAttribute('subnet_mask_ip');
  }
  public set subnetMaskIp(value: string) {
    this._subnetMaskIp = value;
  }
  public resetSubnetMaskIp() {
    this._subnetMaskIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskIpInput() {
    return this._subnetMaskIp;
  }
}
export interface NetworkDeviceClusterDetailsNode1 {
  /**
  * License file id. This is necessary for Fortinet and Juniper clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_file_id NetworkDevice#license_file_id}
  */
  readonly licenseFileId?: string;
  /**
  * License token. This is necessary for Palo Alto clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_token NetworkDevice#license_token}
  */
  readonly licenseToken?: string;
  /**
  * vendor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#vendor_configuration NetworkDevice#vendor_configuration}
  */
  readonly vendorConfiguration?: NetworkDeviceClusterDetailsNode1VendorConfiguration;
}

export function networkDeviceClusterDetailsNode1ToTerraform(struct?: NetworkDeviceClusterDetailsNode1OutputReference | NetworkDeviceClusterDetailsNode1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_file_id: cdktf.stringToTerraform(struct!.licenseFileId),
    license_token: cdktf.stringToTerraform(struct!.licenseToken),
    vendor_configuration: networkDeviceClusterDetailsNode1VendorConfigurationToTerraform(struct!.vendorConfiguration),
  }
}


export function networkDeviceClusterDetailsNode1ToHclTerraform(struct?: NetworkDeviceClusterDetailsNode1OutputReference | NetworkDeviceClusterDetailsNode1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_file_id: {
      value: cdktf.stringToHclTerraform(struct!.licenseFileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_token: {
      value: cdktf.stringToHclTerraform(struct!.licenseToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_configuration: {
      value: networkDeviceClusterDetailsNode1VendorConfigurationToHclTerraform(struct!.vendorConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDeviceClusterDetailsNode1VendorConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceClusterDetailsNode1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkDeviceClusterDetailsNode1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licenseFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseFileId = this._licenseFileId;
    }
    if (this._licenseToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseToken = this._licenseToken;
    }
    if (this._vendorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorConfiguration = this._vendorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceClusterDetailsNode1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._licenseFileId = undefined;
      this._licenseToken = undefined;
      this._vendorConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._licenseFileId = value.licenseFileId;
      this._licenseToken = value.licenseToken;
      this._vendorConfiguration.internalValue = value.vendorConfiguration;
    }
  }

  // license_file_id - computed: false, optional: true, required: false
  private _licenseFileId?: string; 
  public get licenseFileId() {
    return this.getStringAttribute('license_file_id');
  }
  public set licenseFileId(value: string) {
    this._licenseFileId = value;
  }
  public resetLicenseFileId() {
    this._licenseFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseFileIdInput() {
    return this._licenseFileId;
  }

  // license_token - computed: false, optional: true, required: false
  private _licenseToken?: string; 
  public get licenseToken() {
    return this.getStringAttribute('license_token');
  }
  public set licenseToken(value: string) {
    this._licenseToken = value;
  }
  public resetLicenseToken() {
    this._licenseToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTokenInput() {
    return this._licenseToken;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vendor_configuration - computed: false, optional: true, required: false
  private _vendorConfiguration = new NetworkDeviceClusterDetailsNode1VendorConfigurationOutputReference(this, "vendor_configuration");
  public get vendorConfiguration() {
    return this._vendorConfiguration;
  }
  public putVendorConfiguration(value: NetworkDeviceClusterDetailsNode1VendorConfiguration) {
    this._vendorConfiguration.internalValue = value;
  }
  public resetVendorConfiguration() {
    this._vendorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorConfigurationInput() {
    return this._vendorConfiguration.internalValue;
  }
}
export interface NetworkDeviceClusterDetails {
  /**
  * The name of the cluster device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#cluster_name NetworkDevice#cluster_name}
  */
  readonly clusterName: string;
  /**
  * node0 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#node0 NetworkDevice#node0}
  */
  readonly node0: NetworkDeviceClusterDetailsNode0;
  /**
  * node1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#node1 NetworkDevice#node1}
  */
  readonly node1: NetworkDeviceClusterDetailsNode1;
}

export function networkDeviceClusterDetailsToTerraform(struct?: NetworkDeviceClusterDetailsOutputReference | NetworkDeviceClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    node0: networkDeviceClusterDetailsNode0ToTerraform(struct!.node0),
    node1: networkDeviceClusterDetailsNode1ToTerraform(struct!.node1),
  }
}


export function networkDeviceClusterDetailsToHclTerraform(struct?: NetworkDeviceClusterDetailsOutputReference | NetworkDeviceClusterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node0: {
      value: networkDeviceClusterDetailsNode0ToHclTerraform(struct!.node0),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDeviceClusterDetailsNode0List",
    },
    node1: {
      value: networkDeviceClusterDetailsNode1ToHclTerraform(struct!.node1),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkDeviceClusterDetailsNode1List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceClusterDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkDeviceClusterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._node0?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.node0 = this._node0?.internalValue;
    }
    if (this._node1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.node1 = this._node1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceClusterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterName = undefined;
      this._node0.internalValue = undefined;
      this._node1.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterName = value.clusterName;
      this._node0.internalValue = value.node0;
      this._node1.internalValue = value.node1;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // num_of_nodes - computed: true, optional: false, required: false
  public get numOfNodes() {
    return this.getNumberAttribute('num_of_nodes');
  }

  // node0 - computed: false, optional: false, required: true
  private _node0 = new NetworkDeviceClusterDetailsNode0OutputReference(this, "node0");
  public get node0() {
    return this._node0;
  }
  public putNode0(value: NetworkDeviceClusterDetailsNode0) {
    this._node0.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get node0Input() {
    return this._node0.internalValue;
  }

  // node1 - computed: false, optional: false, required: true
  private _node1 = new NetworkDeviceClusterDetailsNode1OutputReference(this, "node1");
  public get node1() {
    return this._node1;
  }
  public putNode1(value: NetworkDeviceClusterDetailsNode1) {
    this._node1.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get node1Input() {
    return this._node1.internalValue;
  }
}
export interface NetworkDeviceSecondaryDeviceInterface {
}

export function networkDeviceSecondaryDeviceInterfaceToTerraform(struct?: NetworkDeviceSecondaryDeviceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkDeviceSecondaryDeviceInterfaceToHclTerraform(struct?: NetworkDeviceSecondaryDeviceInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkDeviceSecondaryDeviceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceSecondaryDeviceInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceSecondaryDeviceInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_type - computed: true, optional: false, required: false
  public get assignedType() {
    return this.getStringAttribute('assigned_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operational_status - computed: true, optional: false, required: false
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class NetworkDeviceSecondaryDeviceInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): NetworkDeviceSecondaryDeviceInterfaceOutputReference {
    return new NetworkDeviceSecondaryDeviceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkDeviceSecondaryDeviceSshKey {
  /**
  * Reference by name to previously provisioned public SSH key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#key_name NetworkDevice#key_name}
  */
  readonly keyName?: string;
  /**
  * Username associated with given key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#username NetworkDevice#username}
  */
  readonly username: string;
}

export function networkDeviceSecondaryDeviceSshKeyToTerraform(struct?: NetworkDeviceSecondaryDeviceSshKeyOutputReference | NetworkDeviceSecondaryDeviceSshKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function networkDeviceSecondaryDeviceSshKeyToHclTerraform(struct?: NetworkDeviceSecondaryDeviceSshKeyOutputReference | NetworkDeviceSecondaryDeviceSshKey): any {
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceSecondaryDeviceSshKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkDeviceSecondaryDeviceSshKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceSecondaryDeviceSshKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyName = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyName = value.keyName;
      this._username = value.username;
    }
  }

  // key_name - computed: false, optional: true, required: false
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface NetworkDeviceSecondaryDevice {
  /**
  * Device billing account number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#account_number NetworkDevice#account_number}
  */
  readonly accountNumber: string;
  /**
  * Unique identifier of applied ACL template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#acl_template_id NetworkDevice#acl_template_id}
  */
  readonly aclTemplateId?: string;
  /**
  * Additional Internet bandwidth, in Mbps, that will be allocated to the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#additional_bandwidth NetworkDevice#additional_bandwidth}
  */
  readonly additionalBandwidth?: number;
  /**
  * Unique identifier of applied cloud init file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#cloud_init_file_id NetworkDevice#cloud_init_file_id}
  */
  readonly cloudInitFileId?: string;
  /**
  * Device hostname prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#hostname NetworkDevice#hostname}
  */
  readonly hostname?: string;
  /**
  * Path to the license file that will be uploaded and applied on a device, applicable for some device types in BYOL licensing mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_file NetworkDevice#license_file}
  */
  readonly licenseFile?: string;
  /**
  * Unique identifier of applied license file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_file_id NetworkDevice#license_file_id}
  */
  readonly licenseFileId?: string;
  /**
  * License Token applicable for some device types in BYOL licensing mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#license_token NetworkDevice#license_token}
  */
  readonly licenseToken?: string;
  /**
  * Device location metro code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#metro_code NetworkDevice#metro_code}
  */
  readonly metroCode: string;
  /**
  * Unique identifier of applied MGMT ACL template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#mgmt_acl_template_uuid NetworkDevice#mgmt_acl_template_uuid}
  */
  readonly mgmtAclTemplateUuid?: string;
  /**
  * Device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#name NetworkDevice#name}
  */
  readonly name: string;
  /**
  * List of email addresses that will receive device status notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#notifications NetworkDevice#notifications}
  */
  readonly notifications: string[];
  /**
  * Purchase order number associated with a device order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#purchase_order_number NetworkDevice#purchase_order_number}
  */
  readonly purchaseOrderNumber?: string;
  /**
  * Map of vendor specific configuration parameters for a device (controller1, activationKey, managementType, siteId, systemIpAddress)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#vendor_configuration NetworkDevice#vendor_configuration}
  */
  readonly vendorConfiguration?: { [key: string]: string };
  /**
  * device interface id picked for WAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#wan_interface_id NetworkDevice#wan_interface_id}
  */
  readonly wanInterfaceId?: string;
  /**
  * ssh_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#ssh_key NetworkDevice#ssh_key}
  */
  readonly sshKey?: NetworkDeviceSecondaryDeviceSshKey;
}

export function networkDeviceSecondaryDeviceToTerraform(struct?: NetworkDeviceSecondaryDeviceOutputReference | NetworkDeviceSecondaryDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_number: cdktf.stringToTerraform(struct!.accountNumber),
    acl_template_id: cdktf.stringToTerraform(struct!.aclTemplateId),
    additional_bandwidth: cdktf.numberToTerraform(struct!.additionalBandwidth),
    cloud_init_file_id: cdktf.stringToTerraform(struct!.cloudInitFileId),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    license_file: cdktf.stringToTerraform(struct!.licenseFile),
    license_file_id: cdktf.stringToTerraform(struct!.licenseFileId),
    license_token: cdktf.stringToTerraform(struct!.licenseToken),
    metro_code: cdktf.stringToTerraform(struct!.metroCode),
    mgmt_acl_template_uuid: cdktf.stringToTerraform(struct!.mgmtAclTemplateUuid),
    name: cdktf.stringToTerraform(struct!.name),
    notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifications),
    purchase_order_number: cdktf.stringToTerraform(struct!.purchaseOrderNumber),
    vendor_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vendorConfiguration),
    wan_interface_id: cdktf.stringToTerraform(struct!.wanInterfaceId),
    ssh_key: networkDeviceSecondaryDeviceSshKeyToTerraform(struct!.sshKey),
  }
}


export function networkDeviceSecondaryDeviceToHclTerraform(struct?: NetworkDeviceSecondaryDeviceOutputReference | NetworkDeviceSecondaryDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_number: {
      value: cdktf.stringToHclTerraform(struct!.accountNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_template_id: {
      value: cdktf.stringToHclTerraform(struct!.aclTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.additionalBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cloud_init_file_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudInitFileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_file: {
      value: cdktf.stringToHclTerraform(struct!.licenseFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_file_id: {
      value: cdktf.stringToHclTerraform(struct!.licenseFileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_token: {
      value: cdktf.stringToHclTerraform(struct!.licenseToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metro_code: {
      value: cdktf.stringToHclTerraform(struct!.metroCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_acl_template_uuid: {
      value: cdktf.stringToHclTerraform(struct!.mgmtAclTemplateUuid),
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
    notifications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifications),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    purchase_order_number: {
      value: cdktf.stringToHclTerraform(struct!.purchaseOrderNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vendorConfiguration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    wan_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.wanInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: networkDeviceSecondaryDeviceSshKeyToHclTerraform(struct!.sshKey),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkDeviceSecondaryDeviceSshKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceSecondaryDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkDeviceSecondaryDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber;
    }
    if (this._aclTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclTemplateId = this._aclTemplateId;
    }
    if (this._additionalBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBandwidth = this._additionalBandwidth;
    }
    if (this._cloudInitFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInitFileId = this._cloudInitFileId;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._licenseFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseFile = this._licenseFile;
    }
    if (this._licenseFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseFileId = this._licenseFileId;
    }
    if (this._licenseToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseToken = this._licenseToken;
    }
    if (this._metroCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metroCode = this._metroCode;
    }
    if (this._mgmtAclTemplateUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtAclTemplateUuid = this._mgmtAclTemplateUuid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._purchaseOrderNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.purchaseOrderNumber = this._purchaseOrderNumber;
    }
    if (this._vendorConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorConfiguration = this._vendorConfiguration;
    }
    if (this._wanInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanInterfaceId = this._wanInterfaceId;
    }
    if (this._sshKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceSecondaryDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountNumber = undefined;
      this._aclTemplateId = undefined;
      this._additionalBandwidth = undefined;
      this._cloudInitFileId = undefined;
      this._hostname = undefined;
      this._licenseFile = undefined;
      this._licenseFileId = undefined;
      this._licenseToken = undefined;
      this._metroCode = undefined;
      this._mgmtAclTemplateUuid = undefined;
      this._name = undefined;
      this._notifications = undefined;
      this._purchaseOrderNumber = undefined;
      this._vendorConfiguration = undefined;
      this._wanInterfaceId = undefined;
      this._sshKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountNumber = value.accountNumber;
      this._aclTemplateId = value.aclTemplateId;
      this._additionalBandwidth = value.additionalBandwidth;
      this._cloudInitFileId = value.cloudInitFileId;
      this._hostname = value.hostname;
      this._licenseFile = value.licenseFile;
      this._licenseFileId = value.licenseFileId;
      this._licenseToken = value.licenseToken;
      this._metroCode = value.metroCode;
      this._mgmtAclTemplateUuid = value.mgmtAclTemplateUuid;
      this._name = value.name;
      this._notifications = value.notifications;
      this._purchaseOrderNumber = value.purchaseOrderNumber;
      this._vendorConfiguration = value.vendorConfiguration;
      this._wanInterfaceId = value.wanInterfaceId;
      this._sshKey.internalValue = value.sshKey;
    }
  }

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // acl_template_id - computed: false, optional: true, required: false
  private _aclTemplateId?: string; 
  public get aclTemplateId() {
    return this.getStringAttribute('acl_template_id');
  }
  public set aclTemplateId(value: string) {
    this._aclTemplateId = value;
  }
  public resetAclTemplateId() {
    this._aclTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclTemplateIdInput() {
    return this._aclTemplateId;
  }

  // additional_bandwidth - computed: true, optional: true, required: false
  private _additionalBandwidth?: number; 
  public get additionalBandwidth() {
    return this.getNumberAttribute('additional_bandwidth');
  }
  public set additionalBandwidth(value: number) {
    this._additionalBandwidth = value;
  }
  public resetAdditionalBandwidth() {
    this._additionalBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalBandwidthInput() {
    return this._additionalBandwidth;
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // cloud_init_file_id - computed: false, optional: true, required: false
  private _cloudInitFileId?: string; 
  public get cloudInitFileId() {
    return this.getStringAttribute('cloud_init_file_id');
  }
  public set cloudInitFileId(value: string) {
    this._cloudInitFileId = value;
  }
  public resetCloudInitFileId() {
    this._cloudInitFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitFileIdInput() {
    return this._cloudInitFileId;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ibx - computed: true, optional: false, required: false
  public get ibx() {
    return this.getStringAttribute('ibx');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new NetworkDeviceSecondaryDeviceInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // license_file - computed: false, optional: true, required: false
  private _licenseFile?: string; 
  public get licenseFile() {
    return this.getStringAttribute('license_file');
  }
  public set licenseFile(value: string) {
    this._licenseFile = value;
  }
  public resetLicenseFile() {
    this._licenseFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseFileInput() {
    return this._licenseFile;
  }

  // license_file_id - computed: true, optional: true, required: false
  private _licenseFileId?: string; 
  public get licenseFileId() {
    return this.getStringAttribute('license_file_id');
  }
  public set licenseFileId(value: string) {
    this._licenseFileId = value;
  }
  public resetLicenseFileId() {
    this._licenseFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseFileIdInput() {
    return this._licenseFileId;
  }

  // license_status - computed: true, optional: false, required: false
  public get licenseStatus() {
    return this.getStringAttribute('license_status');
  }

  // license_token - computed: false, optional: true, required: false
  private _licenseToken?: string; 
  public get licenseToken() {
    return this.getStringAttribute('license_token');
  }
  public set licenseToken(value: string) {
    this._licenseToken = value;
  }
  public resetLicenseToken() {
    this._licenseToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTokenInput() {
    return this._licenseToken;
  }

  // metro_code - computed: false, optional: false, required: true
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }

  // mgmt_acl_template_uuid - computed: false, optional: true, required: false
  private _mgmtAclTemplateUuid?: string; 
  public get mgmtAclTemplateUuid() {
    return this.getStringAttribute('mgmt_acl_template_uuid');
  }
  public set mgmtAclTemplateUuid(value: string) {
    this._mgmtAclTemplateUuid = value;
  }
  public resetMgmtAclTemplateUuid() {
    this._mgmtAclTemplateUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtAclTemplateUuidInput() {
    return this._mgmtAclTemplateUuid;
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

  // notifications - computed: false, optional: false, required: true
  private _notifications?: string[]; 
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // purchase_order_number - computed: true, optional: true, required: false
  private _purchaseOrderNumber?: string; 
  public get purchaseOrderNumber() {
    return this.getStringAttribute('purchase_order_number');
  }
  public set purchaseOrderNumber(value: string) {
    this._purchaseOrderNumber = value;
  }
  public resetPurchaseOrderNumber() {
    this._purchaseOrderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purchaseOrderNumberInput() {
    return this._purchaseOrderNumber;
  }

  // redundancy_type - computed: true, optional: false, required: false
  public get redundancyType() {
    return this.getStringAttribute('redundancy_type');
  }

  // redundant_id - computed: true, optional: false, required: false
  public get redundantId() {
    return this.getStringAttribute('redundant_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // ssh_ip_address - computed: true, optional: false, required: false
  public get sshIpAddress() {
    return this.getStringAttribute('ssh_ip_address');
  }

  // ssh_ip_fqdn - computed: true, optional: false, required: false
  public get sshIpFqdn() {
    return this.getStringAttribute('ssh_ip_fqdn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vendor_configuration - computed: true, optional: true, required: false
  private _vendorConfiguration?: { [key: string]: string }; 
  public get vendorConfiguration() {
    return this.getStringMapAttribute('vendor_configuration');
  }
  public set vendorConfiguration(value: { [key: string]: string }) {
    this._vendorConfiguration = value;
  }
  public resetVendorConfiguration() {
    this._vendorConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorConfigurationInput() {
    return this._vendorConfiguration;
  }

  // wan_interface_id - computed: false, optional: true, required: false
  private _wanInterfaceId?: string; 
  public get wanInterfaceId() {
    return this.getStringAttribute('wan_interface_id');
  }
  public set wanInterfaceId(value: string) {
    this._wanInterfaceId = value;
  }
  public resetWanInterfaceId() {
    this._wanInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanInterfaceIdInput() {
    return this._wanInterfaceId;
  }

  // zone_code - computed: true, optional: false, required: false
  public get zoneCode() {
    return this.getStringAttribute('zone_code');
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey = new NetworkDeviceSecondaryDeviceSshKeyOutputReference(this, "ssh_key");
  public get sshKey() {
    return this._sshKey;
  }
  public putSshKey(value: NetworkDeviceSecondaryDeviceSshKey) {
    this._sshKey.internalValue = value;
  }
  public resetSshKey() {
    this._sshKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey.internalValue;
  }
}
export interface NetworkDeviceSshKey {
  /**
  * Reference by name to previously provisioned public SSH key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#key_name NetworkDevice#key_name}
  */
  readonly keyName?: string;
  /**
  * Username associated with given key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#username NetworkDevice#username}
  */
  readonly username: string;
}

export function networkDeviceSshKeyToTerraform(struct?: NetworkDeviceSshKeyOutputReference | NetworkDeviceSshKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function networkDeviceSshKeyToHclTerraform(struct?: NetworkDeviceSshKeyOutputReference | NetworkDeviceSshKey): any {
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceSshKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkDeviceSshKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceSshKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyName = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyName = value.keyName;
      this._username = value.username;
    }
  }

  // key_name - computed: false, optional: true, required: false
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface NetworkDeviceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#create NetworkDevice#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#delete NetworkDevice#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#update NetworkDevice#update}
  */
  readonly update?: string;
}

export function networkDeviceTimeoutsToTerraform(struct?: NetworkDeviceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function networkDeviceTimeoutsToHclTerraform(struct?: NetworkDeviceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkDeviceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device equinix_network_device}
*/
export class NetworkDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_network_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkDevice to import
  * @param importFromId The id of the existing NetworkDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_network_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/network_device equinix_network_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_network_device',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountNumber = config.accountNumber;
    this._aclTemplateId = config.aclTemplateId;
    this._additionalBandwidth = config.additionalBandwidth;
    this._byol = config.byol;
    this._cloudInitFileId = config.cloudInitFileId;
    this._connectivity = config.connectivity;
    this._coreCount = config.coreCount;
    this._diverseDeviceId = config.diverseDeviceId;
    this._generateDefaultPassword = config.generateDefaultPassword;
    this._hostname = config.hostname;
    this._id = config.id;
    this._interfaceCount = config.interfaceCount;
    this._licenseFile = config.licenseFile;
    this._licenseFileId = config.licenseFileId;
    this._licenseToken = config.licenseToken;
    this._metroCode = config.metroCode;
    this._mgmtAclTemplateUuid = config.mgmtAclTemplateUuid;
    this._name = config.name;
    this._notifications = config.notifications;
    this._orderReference = config.orderReference;
    this._packageCode = config.packageCode;
    this._projectId = config.projectId;
    this._purchaseOrderNumber = config.purchaseOrderNumber;
    this._selfManaged = config.selfManaged;
    this._termLength = config.termLength;
    this._throughput = config.throughput;
    this._throughputUnit = config.throughputUnit;
    this._tier = config.tier;
    this._typeCode = config.typeCode;
    this._vendorConfiguration = config.vendorConfiguration;
    this._version = config.version;
    this._wanInterfaceId = config.wanInterfaceId;
    this._clusterDetails.internalValue = config.clusterDetails;
    this._secondaryDevice.internalValue = config.secondaryDevice;
    this._sshKey.internalValue = config.sshKey;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_number - computed: false, optional: false, required: true
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // acl_template_id - computed: false, optional: true, required: false
  private _aclTemplateId?: string; 
  public get aclTemplateId() {
    return this.getStringAttribute('acl_template_id');
  }
  public set aclTemplateId(value: string) {
    this._aclTemplateId = value;
  }
  public resetAclTemplateId() {
    this._aclTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclTemplateIdInput() {
    return this._aclTemplateId;
  }

  // additional_bandwidth - computed: true, optional: true, required: false
  private _additionalBandwidth?: number; 
  public get additionalBandwidth() {
    return this.getNumberAttribute('additional_bandwidth');
  }
  public set additionalBandwidth(value: number) {
    this._additionalBandwidth = value;
  }
  public resetAdditionalBandwidth() {
    this._additionalBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalBandwidthInput() {
    return this._additionalBandwidth;
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // byol - computed: false, optional: true, required: false
  private _byol?: boolean | cdktf.IResolvable; 
  public get byol() {
    return this.getBooleanAttribute('byol');
  }
  public set byol(value: boolean | cdktf.IResolvable) {
    this._byol = value;
  }
  public resetByol() {
    this._byol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byolInput() {
    return this._byol;
  }

  // cloud_init_file_id - computed: false, optional: true, required: false
  private _cloudInitFileId?: string; 
  public get cloudInitFileId() {
    return this.getStringAttribute('cloud_init_file_id');
  }
  public set cloudInitFileId(value: string) {
    this._cloudInitFileId = value;
  }
  public resetCloudInitFileId() {
    this._cloudInitFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitFileIdInput() {
    return this._cloudInitFileId;
  }

  // connectivity - computed: false, optional: true, required: false
  private _connectivity?: string; 
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }
  public set connectivity(value: string) {
    this._connectivity = value;
  }
  public resetConnectivity() {
    this._connectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity;
  }

  // core_count - computed: false, optional: false, required: true
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // diverse_device_id - computed: true, optional: true, required: false
  private _diverseDeviceId?: string; 
  public get diverseDeviceId() {
    return this.getStringAttribute('diverse_device_id');
  }
  public set diverseDeviceId(value: string) {
    this._diverseDeviceId = value;
  }
  public resetDiverseDeviceId() {
    this._diverseDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diverseDeviceIdInput() {
    return this._diverseDeviceId;
  }

  // diverse_device_name - computed: true, optional: false, required: false
  public get diverseDeviceName() {
    return this.getStringAttribute('diverse_device_name');
  }

  // generate_default_password - computed: false, optional: true, required: false
  private _generateDefaultPassword?: boolean | cdktf.IResolvable; 
  public get generateDefaultPassword() {
    return this.getBooleanAttribute('generate_default_password');
  }
  public set generateDefaultPassword(value: boolean | cdktf.IResolvable) {
    this._generateDefaultPassword = value;
  }
  public resetGenerateDefaultPassword() {
    this._generateDefaultPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateDefaultPasswordInput() {
    return this._generateDefaultPassword;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ibx - computed: true, optional: false, required: false
  public get ibx() {
    return this.getStringAttribute('ibx');
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

  // interface - computed: true, optional: false, required: false
  private _interface = new NetworkDeviceInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // interface_count - computed: true, optional: true, required: false
  private _interfaceCount?: number; 
  public get interfaceCount() {
    return this.getNumberAttribute('interface_count');
  }
  public set interfaceCount(value: number) {
    this._interfaceCount = value;
  }
  public resetInterfaceCount() {
    this._interfaceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceCountInput() {
    return this._interfaceCount;
  }

  // license_file - computed: false, optional: true, required: false
  private _licenseFile?: string; 
  public get licenseFile() {
    return this.getStringAttribute('license_file');
  }
  public set licenseFile(value: string) {
    this._licenseFile = value;
  }
  public resetLicenseFile() {
    this._licenseFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseFileInput() {
    return this._licenseFile;
  }

  // license_file_id - computed: true, optional: true, required: false
  private _licenseFileId?: string; 
  public get licenseFileId() {
    return this.getStringAttribute('license_file_id');
  }
  public set licenseFileId(value: string) {
    this._licenseFileId = value;
  }
  public resetLicenseFileId() {
    this._licenseFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseFileIdInput() {
    return this._licenseFileId;
  }

  // license_status - computed: true, optional: false, required: false
  public get licenseStatus() {
    return this.getStringAttribute('license_status');
  }

  // license_token - computed: false, optional: true, required: false
  private _licenseToken?: string; 
  public get licenseToken() {
    return this.getStringAttribute('license_token');
  }
  public set licenseToken(value: string) {
    this._licenseToken = value;
  }
  public resetLicenseToken() {
    this._licenseToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTokenInput() {
    return this._licenseToken;
  }

  // metro_code - computed: false, optional: false, required: true
  private _metroCode?: string; 
  public get metroCode() {
    return this.getStringAttribute('metro_code');
  }
  public set metroCode(value: string) {
    this._metroCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metroCodeInput() {
    return this._metroCode;
  }

  // mgmt_acl_template_uuid - computed: false, optional: true, required: false
  private _mgmtAclTemplateUuid?: string; 
  public get mgmtAclTemplateUuid() {
    return this.getStringAttribute('mgmt_acl_template_uuid');
  }
  public set mgmtAclTemplateUuid(value: string) {
    this._mgmtAclTemplateUuid = value;
  }
  public resetMgmtAclTemplateUuid() {
    this._mgmtAclTemplateUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtAclTemplateUuidInput() {
    return this._mgmtAclTemplateUuid;
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

  // notifications - computed: false, optional: false, required: true
  private _notifications?: string[]; 
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // order_reference - computed: false, optional: true, required: false
  private _orderReference?: string; 
  public get orderReference() {
    return this.getStringAttribute('order_reference');
  }
  public set orderReference(value: string) {
    this._orderReference = value;
  }
  public resetOrderReference() {
    this._orderReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderReferenceInput() {
    return this._orderReference;
  }

  // package_code - computed: false, optional: false, required: true
  private _packageCode?: string; 
  public get packageCode() {
    return this.getStringAttribute('package_code');
  }
  public set packageCode(value: string) {
    this._packageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageCodeInput() {
    return this._packageCode;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // purchase_order_number - computed: false, optional: true, required: false
  private _purchaseOrderNumber?: string; 
  public get purchaseOrderNumber() {
    return this.getStringAttribute('purchase_order_number');
  }
  public set purchaseOrderNumber(value: string) {
    this._purchaseOrderNumber = value;
  }
  public resetPurchaseOrderNumber() {
    this._purchaseOrderNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purchaseOrderNumberInput() {
    return this._purchaseOrderNumber;
  }

  // redundancy_type - computed: true, optional: false, required: false
  public get redundancyType() {
    return this.getStringAttribute('redundancy_type');
  }

  // redundant_id - computed: true, optional: false, required: false
  public get redundantId() {
    return this.getStringAttribute('redundant_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // self_managed - computed: false, optional: true, required: false
  private _selfManaged?: boolean | cdktf.IResolvable; 
  public get selfManaged() {
    return this.getBooleanAttribute('self_managed');
  }
  public set selfManaged(value: boolean | cdktf.IResolvable) {
    this._selfManaged = value;
  }
  public resetSelfManaged() {
    this._selfManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedInput() {
    return this._selfManaged;
  }

  // ssh_ip_address - computed: true, optional: false, required: false
  public get sshIpAddress() {
    return this.getStringAttribute('ssh_ip_address');
  }

  // ssh_ip_fqdn - computed: true, optional: false, required: false
  public get sshIpFqdn() {
    return this.getStringAttribute('ssh_ip_fqdn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // term_length - computed: false, optional: false, required: true
  private _termLength?: number; 
  public get termLength() {
    return this.getNumberAttribute('term_length');
  }
  public set termLength(value: number) {
    this._termLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get termLengthInput() {
    return this._termLength;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // throughput_unit - computed: false, optional: true, required: false
  private _throughputUnit?: string; 
  public get throughputUnit() {
    return this.getStringAttribute('throughput_unit');
  }
  public set throughputUnit(value: string) {
    this._throughputUnit = value;
  }
  public resetThroughputUnit() {
    this._throughputUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputUnitInput() {
    return this._throughputUnit;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: number; 
  public get tier() {
    return this.getNumberAttribute('tier');
  }
  public set tier(value: number) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // type_code - computed: false, optional: false, required: true
  private _typeCode?: string; 
  public get typeCode() {
    return this.getStringAttribute('type_code');
  }
  public set typeCode(value: string) {
    this._typeCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCodeInput() {
    return this._typeCode;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vendor_configuration - computed: true, optional: true, required: false
  private _vendorConfiguration?: { [key: string]: string }; 
  public get vendorConfiguration() {
    return this.getStringMapAttribute('vendor_configuration');
  }
  public set vendorConfiguration(value: { [key: string]: string }) {
    this._vendorConfiguration = value;
  }
  public resetVendorConfiguration() {
    this._vendorConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorConfigurationInput() {
    return this._vendorConfiguration;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wan_interface_id - computed: false, optional: true, required: false
  private _wanInterfaceId?: string; 
  public get wanInterfaceId() {
    return this.getStringAttribute('wan_interface_id');
  }
  public set wanInterfaceId(value: string) {
    this._wanInterfaceId = value;
  }
  public resetWanInterfaceId() {
    this._wanInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanInterfaceIdInput() {
    return this._wanInterfaceId;
  }

  // zone_code - computed: true, optional: false, required: false
  public get zoneCode() {
    return this.getStringAttribute('zone_code');
  }

  // cluster_details - computed: false, optional: true, required: false
  private _clusterDetails = new NetworkDeviceClusterDetailsOutputReference(this, "cluster_details");
  public get clusterDetails() {
    return this._clusterDetails;
  }
  public putClusterDetails(value: NetworkDeviceClusterDetails) {
    this._clusterDetails.internalValue = value;
  }
  public resetClusterDetails() {
    this._clusterDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDetailsInput() {
    return this._clusterDetails.internalValue;
  }

  // secondary_device - computed: false, optional: true, required: false
  private _secondaryDevice = new NetworkDeviceSecondaryDeviceOutputReference(this, "secondary_device");
  public get secondaryDevice() {
    return this._secondaryDevice;
  }
  public putSecondaryDevice(value: NetworkDeviceSecondaryDevice) {
    this._secondaryDevice.internalValue = value;
  }
  public resetSecondaryDevice() {
    this._secondaryDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDeviceInput() {
    return this._secondaryDevice.internalValue;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey = new NetworkDeviceSshKeyOutputReference(this, "ssh_key");
  public get sshKey() {
    return this._sshKey;
  }
  public putSshKey(value: NetworkDeviceSshKey) {
    this._sshKey.internalValue = value;
  }
  public resetSshKey() {
    this._sshKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkDeviceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkDeviceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_number: cdktf.stringToTerraform(this._accountNumber),
      acl_template_id: cdktf.stringToTerraform(this._aclTemplateId),
      additional_bandwidth: cdktf.numberToTerraform(this._additionalBandwidth),
      byol: cdktf.booleanToTerraform(this._byol),
      cloud_init_file_id: cdktf.stringToTerraform(this._cloudInitFileId),
      connectivity: cdktf.stringToTerraform(this._connectivity),
      core_count: cdktf.numberToTerraform(this._coreCount),
      diverse_device_id: cdktf.stringToTerraform(this._diverseDeviceId),
      generate_default_password: cdktf.booleanToTerraform(this._generateDefaultPassword),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      interface_count: cdktf.numberToTerraform(this._interfaceCount),
      license_file: cdktf.stringToTerraform(this._licenseFile),
      license_file_id: cdktf.stringToTerraform(this._licenseFileId),
      license_token: cdktf.stringToTerraform(this._licenseToken),
      metro_code: cdktf.stringToTerraform(this._metroCode),
      mgmt_acl_template_uuid: cdktf.stringToTerraform(this._mgmtAclTemplateUuid),
      name: cdktf.stringToTerraform(this._name),
      notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notifications),
      order_reference: cdktf.stringToTerraform(this._orderReference),
      package_code: cdktf.stringToTerraform(this._packageCode),
      project_id: cdktf.stringToTerraform(this._projectId),
      purchase_order_number: cdktf.stringToTerraform(this._purchaseOrderNumber),
      self_managed: cdktf.booleanToTerraform(this._selfManaged),
      term_length: cdktf.numberToTerraform(this._termLength),
      throughput: cdktf.numberToTerraform(this._throughput),
      throughput_unit: cdktf.stringToTerraform(this._throughputUnit),
      tier: cdktf.numberToTerraform(this._tier),
      type_code: cdktf.stringToTerraform(this._typeCode),
      vendor_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._vendorConfiguration),
      version: cdktf.stringToTerraform(this._version),
      wan_interface_id: cdktf.stringToTerraform(this._wanInterfaceId),
      cluster_details: networkDeviceClusterDetailsToTerraform(this._clusterDetails.internalValue),
      secondary_device: networkDeviceSecondaryDeviceToTerraform(this._secondaryDevice.internalValue),
      ssh_key: networkDeviceSshKeyToTerraform(this._sshKey.internalValue),
      timeouts: networkDeviceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_number: {
        value: cdktf.stringToHclTerraform(this._accountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acl_template_id: {
        value: cdktf.stringToHclTerraform(this._aclTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_bandwidth: {
        value: cdktf.numberToHclTerraform(this._additionalBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      byol: {
        value: cdktf.booleanToHclTerraform(this._byol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_init_file_id: {
        value: cdktf.stringToHclTerraform(this._cloudInitFileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectivity: {
        value: cdktf.stringToHclTerraform(this._connectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_count: {
        value: cdktf.numberToHclTerraform(this._coreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      diverse_device_id: {
        value: cdktf.stringToHclTerraform(this._diverseDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_default_password: {
        value: cdktf.booleanToHclTerraform(this._generateDefaultPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      interface_count: {
        value: cdktf.numberToHclTerraform(this._interfaceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      license_file: {
        value: cdktf.stringToHclTerraform(this._licenseFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_file_id: {
        value: cdktf.stringToHclTerraform(this._licenseFileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_token: {
        value: cdktf.stringToHclTerraform(this._licenseToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metro_code: {
        value: cdktf.stringToHclTerraform(this._metroCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_acl_template_uuid: {
        value: cdktf.stringToHclTerraform(this._mgmtAclTemplateUuid),
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
      notifications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notifications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      order_reference: {
        value: cdktf.stringToHclTerraform(this._orderReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_code: {
        value: cdktf.stringToHclTerraform(this._packageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purchase_order_number: {
        value: cdktf.stringToHclTerraform(this._purchaseOrderNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_managed: {
        value: cdktf.booleanToHclTerraform(this._selfManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      term_length: {
        value: cdktf.numberToHclTerraform(this._termLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throughput: {
        value: cdktf.numberToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throughput_unit: {
        value: cdktf.stringToHclTerraform(this._throughputUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.numberToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_code: {
        value: cdktf.stringToHclTerraform(this._typeCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vendorConfiguration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_interface_id: {
        value: cdktf.stringToHclTerraform(this._wanInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_details: {
        value: networkDeviceClusterDetailsToHclTerraform(this._clusterDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkDeviceClusterDetailsList",
      },
      secondary_device: {
        value: networkDeviceSecondaryDeviceToHclTerraform(this._secondaryDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkDeviceSecondaryDeviceList",
      },
      ssh_key: {
        value: networkDeviceSshKeyToHclTerraform(this._sshKey.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkDeviceSshKeyList",
      },
      timeouts: {
        value: networkDeviceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkDeviceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
