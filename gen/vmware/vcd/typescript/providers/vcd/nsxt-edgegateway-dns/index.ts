// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtEdgegatewayDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Edge gateway ID for DNS configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#edge_gateway_id NsxtEdgegatewayDns#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Status of the DNS Forwarder. Defaults to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#enabled NsxtEdgegatewayDns#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#id NsxtEdgegatewayDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP on which the DNS forwarder listens.Can be modified only if the Edge Gateway has a dedicated external network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#listener_ip NsxtEdgegatewayDns#listener_ip}
  */
  readonly listenerIp?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#org NsxtEdgegatewayDns#org}
  */
  readonly org?: string;
  /**
  * The external IP address of the SNAT rule. Can be modified only if the Edge Gateway's external network is using IP spaces. (VCD 10.5.0+)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#snat_rule_ip_address NsxtEdgegatewayDns#snat_rule_ip_address}
  */
  readonly snatRuleIpAddress?: string;
  /**
  * conditional_forwarder_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#conditional_forwarder_zone NsxtEdgegatewayDns#conditional_forwarder_zone}
  */
  readonly conditionalForwarderZone?: NsxtEdgegatewayDnsConditionalForwarderZone[] | cdktf.IResolvable;
  /**
  * default_forwarder_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#default_forwarder_zone NsxtEdgegatewayDns#default_forwarder_zone}
  */
  readonly defaultForwarderZone: NsxtEdgegatewayDnsDefaultForwarderZone;
}
export interface NsxtEdgegatewayDnsConditionalForwarderZone {
  /**
  * Set of domain names on which conditional forwarding is based.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#domain_names NsxtEdgegatewayDns#domain_names}
  */
  readonly domainNames: string[];
  /**
  * Name of the forwarder zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#name NsxtEdgegatewayDns#name}
  */
  readonly name: string;
  /**
  * Servers to which DNS requests should be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#upstream_servers NsxtEdgegatewayDns#upstream_servers}
  */
  readonly upstreamServers: string[];
}

export function nsxtEdgegatewayDnsConditionalForwarderZoneToTerraform(struct?: NsxtEdgegatewayDnsConditionalForwarderZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNames),
    name: cdktf.stringToTerraform(struct!.name),
    upstream_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upstreamServers),
  }
}


export function nsxtEdgegatewayDnsConditionalForwarderZoneToHclTerraform(struct?: NsxtEdgegatewayDnsConditionalForwarderZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upstreamServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtEdgegatewayDnsConditionalForwarderZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtEdgegatewayDnsConditionalForwarderZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNames = this._domainNames;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._upstreamServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamServers = this._upstreamServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtEdgegatewayDnsConditionalForwarderZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainNames = undefined;
      this._name = undefined;
      this._upstreamServers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainNames = value.domainNames;
      this._name = value.name;
      this._upstreamServers = value.upstreamServers;
    }
  }

  // domain_names - computed: false, optional: false, required: true
  private _domainNames?: string[]; 
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // upstream_servers - computed: false, optional: false, required: true
  private _upstreamServers?: string[]; 
  public get upstreamServers() {
    return cdktf.Fn.tolist(this.getListAttribute('upstream_servers'));
  }
  public set upstreamServers(value: string[]) {
    this._upstreamServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamServersInput() {
    return this._upstreamServers;
  }
}

export class NsxtEdgegatewayDnsConditionalForwarderZoneList extends cdktf.ComplexList {
  public internalValue? : NsxtEdgegatewayDnsConditionalForwarderZone[] | cdktf.IResolvable

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
  public get(index: number): NsxtEdgegatewayDnsConditionalForwarderZoneOutputReference {
    return new NsxtEdgegatewayDnsConditionalForwarderZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NsxtEdgegatewayDnsDefaultForwarderZone {
  /**
  * Name of the forwarder zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#name NsxtEdgegatewayDns#name}
  */
  readonly name: string;
  /**
  * Servers to which DNS requests should be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#upstream_servers NsxtEdgegatewayDns#upstream_servers}
  */
  readonly upstreamServers: string[];
}

export function nsxtEdgegatewayDnsDefaultForwarderZoneToTerraform(struct?: NsxtEdgegatewayDnsDefaultForwarderZoneOutputReference | NsxtEdgegatewayDnsDefaultForwarderZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    upstream_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upstreamServers),
  }
}


export function nsxtEdgegatewayDnsDefaultForwarderZoneToHclTerraform(struct?: NsxtEdgegatewayDnsDefaultForwarderZoneOutputReference | NsxtEdgegatewayDnsDefaultForwarderZone): any {
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
    upstream_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upstreamServers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtEdgegatewayDnsDefaultForwarderZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NsxtEdgegatewayDnsDefaultForwarderZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._upstreamServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamServers = this._upstreamServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtEdgegatewayDnsDefaultForwarderZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._upstreamServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._upstreamServers = value.upstreamServers;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // upstream_servers - computed: false, optional: false, required: true
  private _upstreamServers?: string[]; 
  public get upstreamServers() {
    return cdktf.Fn.tolist(this.getListAttribute('upstream_servers'));
  }
  public set upstreamServers(value: string[]) {
    this._upstreamServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamServersInput() {
    return this._upstreamServers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns vcd_nsxt_edgegateway_dns}
*/
export class NsxtEdgegatewayDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtEdgegatewayDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtEdgegatewayDns to import
  * @param importFromId The id of the existing NsxtEdgegatewayDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtEdgegatewayDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_dns vcd_nsxt_edgegateway_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtEdgegatewayDnsConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtEdgegatewayDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway_dns',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edgeGatewayId = config.edgeGatewayId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._listenerIp = config.listenerIp;
    this._org = config.org;
    this._snatRuleIpAddress = config.snatRuleIpAddress;
    this._conditionalForwarderZone.internalValue = config.conditionalForwarderZone;
    this._defaultForwarderZone.internalValue = config.defaultForwarderZone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
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

  // listener_ip - computed: true, optional: true, required: false
  private _listenerIp?: string; 
  public get listenerIp() {
    return this.getStringAttribute('listener_ip');
  }
  public set listenerIp(value: string) {
    this._listenerIp = value;
  }
  public resetListenerIp() {
    this._listenerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIpInput() {
    return this._listenerIp;
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

  // snat_rule_enabled - computed: true, optional: false, required: false
  public get snatRuleEnabled() {
    return this.getBooleanAttribute('snat_rule_enabled');
  }

  // snat_rule_ip_address - computed: true, optional: true, required: false
  private _snatRuleIpAddress?: string; 
  public get snatRuleIpAddress() {
    return this.getStringAttribute('snat_rule_ip_address');
  }
  public set snatRuleIpAddress(value: string) {
    this._snatRuleIpAddress = value;
  }
  public resetSnatRuleIpAddress() {
    this._snatRuleIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatRuleIpAddressInput() {
    return this._snatRuleIpAddress;
  }

  // conditional_forwarder_zone - computed: false, optional: true, required: false
  private _conditionalForwarderZone = new NsxtEdgegatewayDnsConditionalForwarderZoneList(this, "conditional_forwarder_zone", true);
  public get conditionalForwarderZone() {
    return this._conditionalForwarderZone;
  }
  public putConditionalForwarderZone(value: NsxtEdgegatewayDnsConditionalForwarderZone[] | cdktf.IResolvable) {
    this._conditionalForwarderZone.internalValue = value;
  }
  public resetConditionalForwarderZone() {
    this._conditionalForwarderZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalForwarderZoneInput() {
    return this._conditionalForwarderZone.internalValue;
  }

  // default_forwarder_zone - computed: false, optional: false, required: true
  private _defaultForwarderZone = new NsxtEdgegatewayDnsDefaultForwarderZoneOutputReference(this, "default_forwarder_zone");
  public get defaultForwarderZone() {
    return this._defaultForwarderZone;
  }
  public putDefaultForwarderZone(value: NsxtEdgegatewayDnsDefaultForwarderZone) {
    this._defaultForwarderZone.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultForwarderZoneInput() {
    return this._defaultForwarderZone.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      listener_ip: cdktf.stringToTerraform(this._listenerIp),
      org: cdktf.stringToTerraform(this._org),
      snat_rule_ip_address: cdktf.stringToTerraform(this._snatRuleIpAddress),
      conditional_forwarder_zone: cdktf.listMapper(nsxtEdgegatewayDnsConditionalForwarderZoneToTerraform, true)(this._conditionalForwarderZone.internalValue),
      default_forwarder_zone: nsxtEdgegatewayDnsDefaultForwarderZoneToTerraform(this._defaultForwarderZone.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
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
      listener_ip: {
        value: cdktf.stringToHclTerraform(this._listenerIp),
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
      snat_rule_ip_address: {
        value: cdktf.stringToHclTerraform(this._snatRuleIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditional_forwarder_zone: {
        value: cdktf.listMapperHcl(nsxtEdgegatewayDnsConditionalForwarderZoneToHclTerraform, true)(this._conditionalForwarderZone.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtEdgegatewayDnsConditionalForwarderZoneList",
      },
      default_forwarder_zone: {
        value: nsxtEdgegatewayDnsDefaultForwarderZoneToHclTerraform(this._defaultForwarderZone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NsxtEdgegatewayDnsDefaultForwarderZoneList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
