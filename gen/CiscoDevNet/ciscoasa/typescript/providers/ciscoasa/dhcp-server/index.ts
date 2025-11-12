// https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#auto_config_enabled DhcpServer#auto_config_enabled}
  */
  readonly autoConfigEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#auto_config_interface DhcpServer#auto_config_interface}
  */
  readonly autoConfigInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#ddns_override_client_settings DhcpServer#ddns_override_client_settings}
  */
  readonly ddnsOverrideClientSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#ddns_update_both_records DhcpServer#ddns_update_both_records}
  */
  readonly ddnsUpdateBothRecords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#ddns_update_dns_client DhcpServer#ddns_update_dns_client}
  */
  readonly ddnsUpdateDnsClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#dns_ip_primary DhcpServer#dns_ip_primary}
  */
  readonly dnsIpPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#dns_ip_secondary DhcpServer#dns_ip_secondary}
  */
  readonly dnsIpSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#domain_name DhcpServer#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#enabled DhcpServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#id DhcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#interface DhcpServer#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#lease_length DhcpServer#lease_length}
  */
  readonly leaseLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#ping_timeout DhcpServer#ping_timeout}
  */
  readonly pingTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#pool_end_ip DhcpServer#pool_end_ip}
  */
  readonly poolEndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#pool_start_ip DhcpServer#pool_start_ip}
  */
  readonly poolStartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#vpn_override DhcpServer#vpn_override}
  */
  readonly vpnOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#wins_ip_primary DhcpServer#wins_ip_primary}
  */
  readonly winsIpPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#wins_ip_secondary DhcpServer#wins_ip_secondary}
  */
  readonly winsIpSecondary?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#options DhcpServer#options}
  */
  readonly options?: DhcpServerOptions[] | cdktf.IResolvable;
}
export interface DhcpServerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#code DhcpServer#code}
  */
  readonly code: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#type DhcpServer#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#value1 DhcpServer#value1}
  */
  readonly value1: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#value2 DhcpServer#value2}
  */
  readonly value2?: string;
}

export function dhcpServerOptionsToTerraform(struct?: DhcpServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    type: cdktf.stringToTerraform(struct!.type),
    value1: cdktf.stringToTerraform(struct!.value1),
    value2: cdktf.stringToTerraform(struct!.value2),
  }
}


export function dhcpServerOptionsToHclTerraform(struct?: DhcpServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value1: {
      value: cdktf.stringToHclTerraform(struct!.value1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value2: {
      value: cdktf.stringToHclTerraform(struct!.value2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DhcpServerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpServerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.value1 = this._value1;
    }
    if (this._value2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.value2 = this._value2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpServerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._type = undefined;
      this._value1 = undefined;
      this._value2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._type = value.type;
      this._value1 = value.value1;
      this._value2 = value.value2;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value1 - computed: false, optional: false, required: true
  private _value1?: string; 
  public get value1() {
    return this.getStringAttribute('value1');
  }
  public set value1(value: string) {
    this._value1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get value1Input() {
    return this._value1;
  }

  // value2 - computed: false, optional: true, required: false
  private _value2?: string; 
  public get value2() {
    return this.getStringAttribute('value2');
  }
  public set value2(value: string) {
    this._value2 = value;
  }
  public resetValue2() {
    this._value2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value2Input() {
    return this._value2;
  }
}

export class DhcpServerOptionsList extends cdktf.ComplexList {
  public internalValue? : DhcpServerOptions[] | cdktf.IResolvable

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
  public get(index: number): DhcpServerOptionsOutputReference {
    return new DhcpServerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server ciscoasa_dhcp_server}
*/
export class DhcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscoasa_dhcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpServer to import
  * @param importFromId The id of the existing DhcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscoasa_dhcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscoasa/1.3.0/docs/resources/dhcp_server ciscoasa_dhcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscoasa_dhcp_server',
      terraformGeneratorMetadata: {
        providerName: 'ciscoasa',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoConfigEnabled = config.autoConfigEnabled;
    this._autoConfigInterface = config.autoConfigInterface;
    this._ddnsOverrideClientSettings = config.ddnsOverrideClientSettings;
    this._ddnsUpdateBothRecords = config.ddnsUpdateBothRecords;
    this._ddnsUpdateDnsClient = config.ddnsUpdateDnsClient;
    this._dnsIpPrimary = config.dnsIpPrimary;
    this._dnsIpSecondary = config.dnsIpSecondary;
    this._domainName = config.domainName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._interface = config.interface;
    this._leaseLength = config.leaseLength;
    this._pingTimeout = config.pingTimeout;
    this._poolEndIp = config.poolEndIp;
    this._poolStartIp = config.poolStartIp;
    this._vpnOverride = config.vpnOverride;
    this._winsIpPrimary = config.winsIpPrimary;
    this._winsIpSecondary = config.winsIpSecondary;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_config_enabled - computed: false, optional: true, required: false
  private _autoConfigEnabled?: boolean | cdktf.IResolvable; 
  public get autoConfigEnabled() {
    return this.getBooleanAttribute('auto_config_enabled');
  }
  public set autoConfigEnabled(value: boolean | cdktf.IResolvable) {
    this._autoConfigEnabled = value;
  }
  public resetAutoConfigEnabled() {
    this._autoConfigEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigEnabledInput() {
    return this._autoConfigEnabled;
  }

  // auto_config_interface - computed: false, optional: true, required: false
  private _autoConfigInterface?: string; 
  public get autoConfigInterface() {
    return this.getStringAttribute('auto_config_interface');
  }
  public set autoConfigInterface(value: string) {
    this._autoConfigInterface = value;
  }
  public resetAutoConfigInterface() {
    this._autoConfigInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigInterfaceInput() {
    return this._autoConfigInterface;
  }

  // ddns_override_client_settings - computed: false, optional: true, required: false
  private _ddnsOverrideClientSettings?: boolean | cdktf.IResolvable; 
  public get ddnsOverrideClientSettings() {
    return this.getBooleanAttribute('ddns_override_client_settings');
  }
  public set ddnsOverrideClientSettings(value: boolean | cdktf.IResolvable) {
    this._ddnsOverrideClientSettings = value;
  }
  public resetDdnsOverrideClientSettings() {
    this._ddnsOverrideClientSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsOverrideClientSettingsInput() {
    return this._ddnsOverrideClientSettings;
  }

  // ddns_update_both_records - computed: false, optional: true, required: false
  private _ddnsUpdateBothRecords?: boolean | cdktf.IResolvable; 
  public get ddnsUpdateBothRecords() {
    return this.getBooleanAttribute('ddns_update_both_records');
  }
  public set ddnsUpdateBothRecords(value: boolean | cdktf.IResolvable) {
    this._ddnsUpdateBothRecords = value;
  }
  public resetDdnsUpdateBothRecords() {
    this._ddnsUpdateBothRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateBothRecordsInput() {
    return this._ddnsUpdateBothRecords;
  }

  // ddns_update_dns_client - computed: false, optional: true, required: false
  private _ddnsUpdateDnsClient?: boolean | cdktf.IResolvable; 
  public get ddnsUpdateDnsClient() {
    return this.getBooleanAttribute('ddns_update_dns_client');
  }
  public set ddnsUpdateDnsClient(value: boolean | cdktf.IResolvable) {
    this._ddnsUpdateDnsClient = value;
  }
  public resetDdnsUpdateDnsClient() {
    this._ddnsUpdateDnsClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateDnsClientInput() {
    return this._ddnsUpdateDnsClient;
  }

  // dns_ip_primary - computed: false, optional: true, required: false
  private _dnsIpPrimary?: string; 
  public get dnsIpPrimary() {
    return this.getStringAttribute('dns_ip_primary');
  }
  public set dnsIpPrimary(value: string) {
    this._dnsIpPrimary = value;
  }
  public resetDnsIpPrimary() {
    this._dnsIpPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpPrimaryInput() {
    return this._dnsIpPrimary;
  }

  // dns_ip_secondary - computed: false, optional: true, required: false
  private _dnsIpSecondary?: string; 
  public get dnsIpSecondary() {
    return this.getStringAttribute('dns_ip_secondary');
  }
  public set dnsIpSecondary(value: string) {
    this._dnsIpSecondary = value;
  }
  public resetDnsIpSecondary() {
    this._dnsIpSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpSecondaryInput() {
    return this._dnsIpSecondary;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // lease_length - computed: false, optional: true, required: false
  private _leaseLength?: string; 
  public get leaseLength() {
    return this.getStringAttribute('lease_length');
  }
  public set leaseLength(value: string) {
    this._leaseLength = value;
  }
  public resetLeaseLength() {
    this._leaseLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseLengthInput() {
    return this._leaseLength;
  }

  // ping_timeout - computed: false, optional: true, required: false
  private _pingTimeout?: string; 
  public get pingTimeout() {
    return this.getStringAttribute('ping_timeout');
  }
  public set pingTimeout(value: string) {
    this._pingTimeout = value;
  }
  public resetPingTimeout() {
    this._pingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingTimeoutInput() {
    return this._pingTimeout;
  }

  // pool_end_ip - computed: false, optional: true, required: false
  private _poolEndIp?: string; 
  public get poolEndIp() {
    return this.getStringAttribute('pool_end_ip');
  }
  public set poolEndIp(value: string) {
    this._poolEndIp = value;
  }
  public resetPoolEndIp() {
    this._poolEndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolEndIpInput() {
    return this._poolEndIp;
  }

  // pool_start_ip - computed: false, optional: true, required: false
  private _poolStartIp?: string; 
  public get poolStartIp() {
    return this.getStringAttribute('pool_start_ip');
  }
  public set poolStartIp(value: string) {
    this._poolStartIp = value;
  }
  public resetPoolStartIp() {
    this._poolStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolStartIpInput() {
    return this._poolStartIp;
  }

  // vpn_override - computed: false, optional: true, required: false
  private _vpnOverride?: boolean | cdktf.IResolvable; 
  public get vpnOverride() {
    return this.getBooleanAttribute('vpn_override');
  }
  public set vpnOverride(value: boolean | cdktf.IResolvable) {
    this._vpnOverride = value;
  }
  public resetVpnOverride() {
    this._vpnOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnOverrideInput() {
    return this._vpnOverride;
  }

  // wins_ip_primary - computed: false, optional: true, required: false
  private _winsIpPrimary?: string; 
  public get winsIpPrimary() {
    return this.getStringAttribute('wins_ip_primary');
  }
  public set winsIpPrimary(value: string) {
    this._winsIpPrimary = value;
  }
  public resetWinsIpPrimary() {
    this._winsIpPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsIpPrimaryInput() {
    return this._winsIpPrimary;
  }

  // wins_ip_secondary - computed: false, optional: true, required: false
  private _winsIpSecondary?: string; 
  public get winsIpSecondary() {
    return this.getStringAttribute('wins_ip_secondary');
  }
  public set winsIpSecondary(value: string) {
    this._winsIpSecondary = value;
  }
  public resetWinsIpSecondary() {
    this._winsIpSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsIpSecondaryInput() {
    return this._winsIpSecondary;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DhcpServerOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DhcpServerOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_config_enabled: cdktf.booleanToTerraform(this._autoConfigEnabled),
      auto_config_interface: cdktf.stringToTerraform(this._autoConfigInterface),
      ddns_override_client_settings: cdktf.booleanToTerraform(this._ddnsOverrideClientSettings),
      ddns_update_both_records: cdktf.booleanToTerraform(this._ddnsUpdateBothRecords),
      ddns_update_dns_client: cdktf.booleanToTerraform(this._ddnsUpdateDnsClient),
      dns_ip_primary: cdktf.stringToTerraform(this._dnsIpPrimary),
      dns_ip_secondary: cdktf.stringToTerraform(this._dnsIpSecondary),
      domain_name: cdktf.stringToTerraform(this._domainName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      lease_length: cdktf.stringToTerraform(this._leaseLength),
      ping_timeout: cdktf.stringToTerraform(this._pingTimeout),
      pool_end_ip: cdktf.stringToTerraform(this._poolEndIp),
      pool_start_ip: cdktf.stringToTerraform(this._poolStartIp),
      vpn_override: cdktf.booleanToTerraform(this._vpnOverride),
      wins_ip_primary: cdktf.stringToTerraform(this._winsIpPrimary),
      wins_ip_secondary: cdktf.stringToTerraform(this._winsIpSecondary),
      options: cdktf.listMapper(dhcpServerOptionsToTerraform, true)(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_config_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoConfigEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_config_interface: {
        value: cdktf.stringToHclTerraform(this._autoConfigInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddns_override_client_settings: {
        value: cdktf.booleanToHclTerraform(this._ddnsOverrideClientSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_update_both_records: {
        value: cdktf.booleanToHclTerraform(this._ddnsUpdateBothRecords),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ddns_update_dns_client: {
        value: cdktf.booleanToHclTerraform(this._ddnsUpdateDnsClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_ip_primary: {
        value: cdktf.stringToHclTerraform(this._dnsIpPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_ip_secondary: {
        value: cdktf.stringToHclTerraform(this._dnsIpSecondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_length: {
        value: cdktf.stringToHclTerraform(this._leaseLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_timeout: {
        value: cdktf.stringToHclTerraform(this._pingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_end_ip: {
        value: cdktf.stringToHclTerraform(this._poolEndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_start_ip: {
        value: cdktf.stringToHclTerraform(this._poolStartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_override: {
        value: cdktf.booleanToHclTerraform(this._vpnOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wins_ip_primary: {
        value: cdktf.stringToHclTerraform(this._winsIpPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wins_ip_secondary: {
        value: cdktf.stringToHclTerraform(this._winsIpSecondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(dhcpServerOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpServerOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
