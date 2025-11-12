// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxvFirewallRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * This firewall rule will be inserted above the referred one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#above_rule_id NsxvFirewallRule#above_rule_id}
  */
  readonly aboveRuleId?: string;
  /**
  * 'accept' or 'deny'. Default 'accept'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#action NsxvFirewallRule#action}
  */
  readonly action?: string;
  /**
  * Edge gateway name in which Firewall Rule is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#edge_gateway NsxvFirewallRule#edge_gateway}
  */
  readonly edgeGateway: string;
  /**
  * Whether the rule should be enabled. Default 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#enabled NsxvFirewallRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#id NsxvFirewallRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether logging should be enabled for this rule. Default 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#logging_enabled NsxvFirewallRule#logging_enabled}
  */
  readonly loggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Firewall rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#name NsxvFirewallRule#name}
  */
  readonly name?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#org NsxvFirewallRule#org}
  */
  readonly org?: string;
  /**
  * Optional. Allows to set custom rule tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#rule_tag NsxvFirewallRule#rule_tag}
  */
  readonly ruleTag?: number;
  /**
  * Read only. Possible values 'user', 'internal_high'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#rule_type NsxvFirewallRule#rule_type}
  */
  readonly ruleType?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#vdc NsxvFirewallRule#vdc}
  */
  readonly vdc?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#destination NsxvFirewallRule#destination}
  */
  readonly destination: NsxvFirewallRuleDestination;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#service NsxvFirewallRule#service}
  */
  readonly service: NsxvFirewallRuleService[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#source NsxvFirewallRule#source}
  */
  readonly source: NsxvFirewallRuleSource;
}
export interface NsxvFirewallRuleDestination {
  /**
  * Rule is applied to traffic going to any destinations except for the excluded destination. Default 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#exclude NsxvFirewallRule#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * 'vse', 'internal', 'external' or network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#gateway_interfaces NsxvFirewallRule#gateway_interfaces}
  */
  readonly gatewayInterfaces?: string[];
  /**
  * IP address, CIDR, an IP range, or the keyword 'any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#ip_addresses NsxvFirewallRule#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Set of IP set names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#ip_sets NsxvFirewallRule#ip_sets}
  */
  readonly ipSets?: string[];
  /**
  * Set of org network names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#org_networks NsxvFirewallRule#org_networks}
  */
  readonly orgNetworks?: string[];
  /**
  * Set of VM IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#vm_ids NsxvFirewallRule#vm_ids}
  */
  readonly vmIds?: string[];
}

export function nsxvFirewallRuleDestinationToTerraform(struct?: NsxvFirewallRuleDestinationOutputReference | NsxvFirewallRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    gateway_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gatewayInterfaces),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ip_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipSets),
    org_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.orgNetworks),
    vm_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vmIds),
  }
}


export function nsxvFirewallRuleDestinationToHclTerraform(struct?: NsxvFirewallRuleDestinationOutputReference | NsxvFirewallRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gatewayInterfaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_sets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipSets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    org_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.orgNetworks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vm_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vmIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxvFirewallRuleDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxvFirewallRuleDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._gatewayInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayInterfaces = this._gatewayInterfaces;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ipSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSets = this._ipSets;
    }
    if (this._orgNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgNetworks = this._orgNetworks;
    }
    if (this._vmIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmIds = this._vmIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxvFirewallRuleDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._gatewayInterfaces = undefined;
      this._ipAddresses = undefined;
      this._ipSets = undefined;
      this._orgNetworks = undefined;
      this._vmIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._gatewayInterfaces = value.gatewayInterfaces;
      this._ipAddresses = value.ipAddresses;
      this._ipSets = value.ipSets;
      this._orgNetworks = value.orgNetworks;
      this._vmIds = value.vmIds;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // gateway_interfaces - computed: false, optional: true, required: false
  private _gatewayInterfaces?: string[]; 
  public get gatewayInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('gateway_interfaces'));
  }
  public set gatewayInterfaces(value: string[]) {
    this._gatewayInterfaces = value;
  }
  public resetGatewayInterfaces() {
    this._gatewayInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInterfacesInput() {
    return this._gatewayInterfaces;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_sets - computed: false, optional: true, required: false
  private _ipSets?: string[]; 
  public get ipSets() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_sets'));
  }
  public set ipSets(value: string[]) {
    this._ipSets = value;
  }
  public resetIpSets() {
    this._ipSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetsInput() {
    return this._ipSets;
  }

  // org_networks - computed: false, optional: true, required: false
  private _orgNetworks?: string[]; 
  public get orgNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('org_networks'));
  }
  public set orgNetworks(value: string[]) {
    this._orgNetworks = value;
  }
  public resetOrgNetworks() {
    this._orgNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNetworksInput() {
    return this._orgNetworks;
  }

  // vm_ids - computed: false, optional: true, required: false
  private _vmIds?: string[]; 
  public get vmIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_ids'));
  }
  public set vmIds(value: string[]) {
    this._vmIds = value;
  }
  public resetVmIds() {
    this._vmIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdsInput() {
    return this._vmIds;
  }
}
export interface NsxvFirewallRuleService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#port NsxvFirewallRule#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#protocol NsxvFirewallRule#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#source_port NsxvFirewallRule#source_port}
  */
  readonly sourcePort?: string;
}

export function nsxvFirewallRuleServiceToTerraform(struct?: NsxvFirewallRuleService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_port: cdktf.stringToTerraform(struct!.sourcePort),
  }
}


export function nsxvFirewallRuleServiceToHclTerraform(struct?: NsxvFirewallRuleService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.stringToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxvFirewallRuleServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxvFirewallRuleService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxvFirewallRuleService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._sourcePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
      this._sourcePort = value.sourcePort;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
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

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }
}

export class NsxvFirewallRuleServiceList extends cdktf.ComplexList {
  public internalValue? : NsxvFirewallRuleService[] | cdktf.IResolvable

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
  public get(index: number): NsxvFirewallRuleServiceOutputReference {
    return new NsxvFirewallRuleServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxvFirewallRuleSource {
  /**
  * Rule is applied to traffic coming from all sources except for the excluded source. Default 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#exclude NsxvFirewallRule#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * 'vse', 'internal', 'external' or network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#gateway_interfaces NsxvFirewallRule#gateway_interfaces}
  */
  readonly gatewayInterfaces?: string[];
  /**
  * IP address, CIDR, an IP range, or the keyword 'any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#ip_addresses NsxvFirewallRule#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Set of IP set names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#ip_sets NsxvFirewallRule#ip_sets}
  */
  readonly ipSets?: string[];
  /**
  * Set of org network names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#org_networks NsxvFirewallRule#org_networks}
  */
  readonly orgNetworks?: string[];
  /**
  * Set of VM IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#vm_ids NsxvFirewallRule#vm_ids}
  */
  readonly vmIds?: string[];
}

export function nsxvFirewallRuleSourceToTerraform(struct?: NsxvFirewallRuleSourceOutputReference | NsxvFirewallRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    gateway_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gatewayInterfaces),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ip_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipSets),
    org_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.orgNetworks),
    vm_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vmIds),
  }
}


export function nsxvFirewallRuleSourceToHclTerraform(struct?: NsxvFirewallRuleSourceOutputReference | NsxvFirewallRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gatewayInterfaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_sets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipSets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    org_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.orgNetworks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vm_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vmIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxvFirewallRuleSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxvFirewallRuleSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._gatewayInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayInterfaces = this._gatewayInterfaces;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ipSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSets = this._ipSets;
    }
    if (this._orgNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgNetworks = this._orgNetworks;
    }
    if (this._vmIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmIds = this._vmIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxvFirewallRuleSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._gatewayInterfaces = undefined;
      this._ipAddresses = undefined;
      this._ipSets = undefined;
      this._orgNetworks = undefined;
      this._vmIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._gatewayInterfaces = value.gatewayInterfaces;
      this._ipAddresses = value.ipAddresses;
      this._ipSets = value.ipSets;
      this._orgNetworks = value.orgNetworks;
      this._vmIds = value.vmIds;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // gateway_interfaces - computed: false, optional: true, required: false
  private _gatewayInterfaces?: string[]; 
  public get gatewayInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('gateway_interfaces'));
  }
  public set gatewayInterfaces(value: string[]) {
    this._gatewayInterfaces = value;
  }
  public resetGatewayInterfaces() {
    this._gatewayInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInterfacesInput() {
    return this._gatewayInterfaces;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_sets - computed: false, optional: true, required: false
  private _ipSets?: string[]; 
  public get ipSets() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_sets'));
  }
  public set ipSets(value: string[]) {
    this._ipSets = value;
  }
  public resetIpSets() {
    this._ipSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetsInput() {
    return this._ipSets;
  }

  // org_networks - computed: false, optional: true, required: false
  private _orgNetworks?: string[]; 
  public get orgNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('org_networks'));
  }
  public set orgNetworks(value: string[]) {
    this._orgNetworks = value;
  }
  public resetOrgNetworks() {
    this._orgNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNetworksInput() {
    return this._orgNetworks;
  }

  // vm_ids - computed: false, optional: true, required: false
  private _vmIds?: string[]; 
  public get vmIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_ids'));
  }
  public set vmIds(value: string[]) {
    this._vmIds = value;
  }
  public resetVmIds() {
    this._vmIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdsInput() {
    return this._vmIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule vcd_nsxv_firewall_rule}
*/
export class NsxvFirewallRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxv_firewall_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxvFirewallRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxvFirewallRule to import
  * @param importFromId The id of the existing NsxvFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxvFirewallRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxv_firewall_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_firewall_rule vcd_nsxv_firewall_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxvFirewallRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NsxvFirewallRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxv_firewall_rule',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aboveRuleId = config.aboveRuleId;
    this._action = config.action;
    this._edgeGateway = config.edgeGateway;
    this._enabled = config.enabled;
    this._id = config.id;
    this._loggingEnabled = config.loggingEnabled;
    this._name = config.name;
    this._org = config.org;
    this._ruleTag = config.ruleTag;
    this._ruleType = config.ruleType;
    this._vdc = config.vdc;
    this._destination.internalValue = config.destination;
    this._service.internalValue = config.service;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // above_rule_id - computed: false, optional: true, required: false
  private _aboveRuleId?: string; 
  public get aboveRuleId() {
    return this.getStringAttribute('above_rule_id');
  }
  public set aboveRuleId(value: string) {
    this._aboveRuleId = value;
  }
  public resetAboveRuleId() {
    this._aboveRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aboveRuleIdInput() {
    return this._aboveRuleId;
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // edge_gateway - computed: false, optional: false, required: true
  private _edgeGateway?: string; 
  public get edgeGateway() {
    return this.getStringAttribute('edge_gateway');
  }
  public set edgeGateway(value: string) {
    this._edgeGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayInput() {
    return this._edgeGateway;
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

  // logging_enabled - computed: false, optional: true, required: false
  private _loggingEnabled?: boolean | cdktf.IResolvable; 
  public get loggingEnabled() {
    return this.getBooleanAttribute('logging_enabled');
  }
  public set loggingEnabled(value: boolean | cdktf.IResolvable) {
    this._loggingEnabled = value;
  }
  public resetLoggingEnabled() {
    this._loggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEnabledInput() {
    return this._loggingEnabled;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // rule_tag - computed: true, optional: true, required: false
  private _ruleTag?: number; 
  public get ruleTag() {
    return this.getNumberAttribute('rule_tag');
  }
  public set ruleTag(value: number) {
    this._ruleTag = value;
  }
  public resetRuleTag() {
    this._ruleTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTagInput() {
    return this._ruleTag;
  }

  // rule_type - computed: true, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new NsxvFirewallRuleDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: NsxvFirewallRuleDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // service - computed: false, optional: false, required: true
  private _service = new NsxvFirewallRuleServiceList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: NsxvFirewallRuleService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new NsxvFirewallRuleSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: NsxvFirewallRuleSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      above_rule_id: cdktf.stringToTerraform(this._aboveRuleId),
      action: cdktf.stringToTerraform(this._action),
      edge_gateway: cdktf.stringToTerraform(this._edgeGateway),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      logging_enabled: cdktf.booleanToTerraform(this._loggingEnabled),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      rule_tag: cdktf.numberToTerraform(this._ruleTag),
      rule_type: cdktf.stringToTerraform(this._ruleType),
      vdc: cdktf.stringToTerraform(this._vdc),
      destination: nsxvFirewallRuleDestinationToTerraform(this._destination.internalValue),
      service: cdktf.listMapper(nsxvFirewallRuleServiceToTerraform, true)(this._service.internalValue),
      source: nsxvFirewallRuleSourceToTerraform(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      above_rule_id: {
        value: cdktf.stringToHclTerraform(this._aboveRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_gateway: {
        value: cdktf.stringToHclTerraform(this._edgeGateway),
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
      logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._loggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_tag: {
        value: cdktf.numberToHclTerraform(this._ruleTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_type: {
        value: cdktf.stringToHclTerraform(this._ruleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: nsxvFirewallRuleDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxvFirewallRuleDestinationList",
      },
      service: {
        value: cdktf.listMapperHcl(nsxvFirewallRuleServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxvFirewallRuleServiceList",
      },
      source: {
        value: nsxvFirewallRuleSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxvFirewallRuleSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
