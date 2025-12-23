// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgePlatformDeviceOnboardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge NEO account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#account_name EdgePlatformDeviceOnboarding#account_name}
  */
  readonly accountName: string;
  /**
  * The location where the config file will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#config_file_download_path EdgePlatformDeviceOnboarding#config_file_download_path}
  */
  readonly configFileDownloadPath?: string;
  /**
  * Device name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#device_name EdgePlatformDeviceOnboarding#device_name}
  */
  readonly deviceName: string;
  /**
  * Set to true to download the Edge Platform static config file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#download_config_file EdgePlatformDeviceOnboarding#download_config_file}
  */
  readonly downloadConfigFile?: boolean | cdktf.IResolvable;
  /**
  * Hardware Model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#hardware_model EdgePlatformDeviceOnboarding#hardware_model}
  */
  readonly hardwareModel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#id EdgePlatformDeviceOnboarding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#serial_number EdgePlatformDeviceOnboarding#serial_number}
  */
  readonly serialNumber: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#network EdgePlatformDeviceOnboarding#network}
  */
  readonly network?: EdgePlatformDeviceOnboardingNetwork[] | cdktf.IResolvable;
}
export interface EdgePlatformDeviceOnboardingNetwork {
  /**
  * Set of DNS server IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#dns_server_ips EdgePlatformDeviceOnboarding#dns_server_ips}
  */
  readonly dnsServerIps?: string[];
  /**
  * Enable DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#enable_dhcp EdgePlatformDeviceOnboarding#enable_dhcp}
  */
  readonly enableDhcp?: boolean | cdktf.IResolvable;
  /**
  * Gateway IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#gateway_ip EdgePlatformDeviceOnboarding#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#interface_name EdgePlatformDeviceOnboarding#interface_name}
  */
  readonly interfaceName: string;
  /**
  * IPV4 CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#ipv4_cidr EdgePlatformDeviceOnboarding#ipv4_cidr}
  */
  readonly ipv4Cidr?: string;
  /**
  * Proxy Profile ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#proxy_profile_id EdgePlatformDeviceOnboarding#proxy_profile_id}
  */
  readonly proxyProfileId?: string;
}

export function edgePlatformDeviceOnboardingNetworkToTerraform(struct?: EdgePlatformDeviceOnboardingNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerIps),
    enable_dhcp: cdktf.booleanToTerraform(struct!.enableDhcp),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ipv4_cidr: cdktf.stringToTerraform(struct!.ipv4Cidr),
    proxy_profile_id: cdktf.stringToTerraform(struct!.proxyProfileId),
  }
}


export function edgePlatformDeviceOnboardingNetworkToHclTerraform(struct?: EdgePlatformDeviceOnboardingNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_server_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServerIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.enableDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_cidr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.proxyProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgePlatformDeviceOnboardingNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgePlatformDeviceOnboardingNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServerIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerIps = this._dnsServerIps;
    }
    if (this._enableDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDhcp = this._enableDhcp;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipv4Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Cidr = this._ipv4Cidr;
    }
    if (this._proxyProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProfileId = this._proxyProfileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgePlatformDeviceOnboardingNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsServerIps = undefined;
      this._enableDhcp = undefined;
      this._gatewayIp = undefined;
      this._interfaceName = undefined;
      this._ipv4Cidr = undefined;
      this._proxyProfileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsServerIps = value.dnsServerIps;
      this._enableDhcp = value.enableDhcp;
      this._gatewayIp = value.gatewayIp;
      this._interfaceName = value.interfaceName;
      this._ipv4Cidr = value.ipv4Cidr;
      this._proxyProfileId = value.proxyProfileId;
    }
  }

  // dns_server_ips - computed: false, optional: true, required: false
  private _dnsServerIps?: string[]; 
  public get dnsServerIps() {
    return this.getListAttribute('dns_server_ips');
  }
  public set dnsServerIps(value: string[]) {
    this._dnsServerIps = value;
  }
  public resetDnsServerIps() {
    this._dnsServerIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpsInput() {
    return this._dnsServerIps;
  }

  // enable_dhcp - computed: false, optional: true, required: false
  private _enableDhcp?: boolean | cdktf.IResolvable; 
  public get enableDhcp() {
    return this.getBooleanAttribute('enable_dhcp');
  }
  public set enableDhcp(value: boolean | cdktf.IResolvable) {
    this._enableDhcp = value;
  }
  public resetEnableDhcp() {
    this._enableDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpInput() {
    return this._enableDhcp;
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

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ipv4_cidr - computed: false, optional: true, required: false
  private _ipv4Cidr?: string; 
  public get ipv4Cidr() {
    return this.getStringAttribute('ipv4_cidr');
  }
  public set ipv4Cidr(value: string) {
    this._ipv4Cidr = value;
  }
  public resetIpv4Cidr() {
    this._ipv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrInput() {
    return this._ipv4Cidr;
  }

  // proxy_profile_id - computed: false, optional: true, required: false
  private _proxyProfileId?: string; 
  public get proxyProfileId() {
    return this.getStringAttribute('proxy_profile_id');
  }
  public set proxyProfileId(value: string) {
    this._proxyProfileId = value;
  }
  public resetProxyProfileId() {
    this._proxyProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProfileIdInput() {
    return this._proxyProfileId;
  }
}

export class EdgePlatformDeviceOnboardingNetworkList extends cdktf.ComplexList {
  public internalValue? : EdgePlatformDeviceOnboardingNetwork[] | cdktf.IResolvable

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
  public get(index: number): EdgePlatformDeviceOnboardingNetworkOutputReference {
    return new EdgePlatformDeviceOnboardingNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding aviatrix_edge_platform_device_onboarding}
*/
export class EdgePlatformDeviceOnboarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_edge_platform_device_onboarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgePlatformDeviceOnboarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgePlatformDeviceOnboarding to import
  * @param importFromId The id of the existing EdgePlatformDeviceOnboarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgePlatformDeviceOnboarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_edge_platform_device_onboarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_platform_device_onboarding aviatrix_edge_platform_device_onboarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgePlatformDeviceOnboardingConfig
  */
  public constructor(scope: Construct, id: string, config: EdgePlatformDeviceOnboardingConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_edge_platform_device_onboarding',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._configFileDownloadPath = config.configFileDownloadPath;
    this._deviceName = config.deviceName;
    this._downloadConfigFile = config.downloadConfigFile;
    this._hardwareModel = config.hardwareModel;
    this._id = config.id;
    this._serialNumber = config.serialNumber;
    this._network.internalValue = config.network;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // config_file_download_path - computed: false, optional: true, required: false
  private _configFileDownloadPath?: string; 
  public get configFileDownloadPath() {
    return this.getStringAttribute('config_file_download_path');
  }
  public set configFileDownloadPath(value: string) {
    this._configFileDownloadPath = value;
  }
  public resetConfigFileDownloadPath() {
    this._configFileDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileDownloadPathInput() {
    return this._configFileDownloadPath;
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // download_config_file - computed: false, optional: true, required: false
  private _downloadConfigFile?: boolean | cdktf.IResolvable; 
  public get downloadConfigFile() {
    return this.getBooleanAttribute('download_config_file');
  }
  public set downloadConfigFile(value: boolean | cdktf.IResolvable) {
    this._downloadConfigFile = value;
  }
  public resetDownloadConfigFile() {
    this._downloadConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadConfigFileInput() {
    return this._downloadConfigFile;
  }

  // hardware_model - computed: false, optional: false, required: true
  private _hardwareModel?: string; 
  public get hardwareModel() {
    return this.getStringAttribute('hardware_model');
  }
  public set hardwareModel(value: string) {
    this._hardwareModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareModelInput() {
    return this._hardwareModel;
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

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // network - computed: false, optional: true, required: false
  private _network = new EdgePlatformDeviceOnboardingNetworkList(this, "network", true);
  public get network() {
    return this._network;
  }
  public putNetwork(value: EdgePlatformDeviceOnboardingNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      config_file_download_path: cdktf.stringToTerraform(this._configFileDownloadPath),
      device_name: cdktf.stringToTerraform(this._deviceName),
      download_config_file: cdktf.booleanToTerraform(this._downloadConfigFile),
      hardware_model: cdktf.stringToTerraform(this._hardwareModel),
      id: cdktf.stringToTerraform(this._id),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      network: cdktf.listMapper(edgePlatformDeviceOnboardingNetworkToTerraform, true)(this._network.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file_download_path: {
        value: cdktf.stringToHclTerraform(this._configFileDownloadPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_config_file: {
        value: cdktf.booleanToHclTerraform(this._downloadConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hardware_model: {
        value: cdktf.stringToHclTerraform(this._hardwareModel),
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
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.listMapperHcl(edgePlatformDeviceOnboardingNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgePlatformDeviceOnboardingNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
