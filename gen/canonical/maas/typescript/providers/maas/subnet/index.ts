// https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean value that indicates if the MAAS DNS resolution is enabled for this subnet. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#allow_dns Subnet#allow_dns}
  */
  readonly allowDns?: boolean | cdktf.IResolvable;
  /**
  * Boolean value that indicates if `maas-proxy` allows requests from this subnet. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#allow_proxy Subnet#allow_proxy}
  */
  readonly allowProxy?: boolean | cdktf.IResolvable;
  /**
  * The subnet CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#cidr Subnet#cidr}
  */
  readonly cidr: string;
  /**
  * List of IP addresses set as DNS servers for the new subnet. This argument is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#dns_servers Subnet#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * The fabric identifier (ID or name) for the new subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#fabric Subnet#fabric}
  */
  readonly fabric?: string;
  /**
  * Gateway IP address for the new subnet. This argument is computed if it's not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#gateway_ip Subnet#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#id Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The subnet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#name Subnet#name}
  */
  readonly name?: string;
  /**
  * How reverse DNS is handled for this subnet. Defaults to `2`. Valid options are:
  * 	* `0` - Disabled, no reverse zone is created.
  * 	* `1` - Enabled, generate reverse zone.
  * 	* `2` - RFC2317, extends `1` to create the necessary parent zone with the appropriate CNAME resource records for the network, if the network is small enough to require the support described in RFC2317.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#rdns_mode Subnet#rdns_mode}
  */
  readonly rdnsMode?: number;
  /**
  * The VLAN identifier (ID or traffic segregation ID) for the new subnet. If this is set, the `fabric` argument is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#vlan Subnet#vlan}
  */
  readonly vlan?: string;
  /**
  * ip_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#ip_ranges Subnet#ip_ranges}
  */
  readonly ipRanges?: SubnetIpRanges[] | cdktf.IResolvable;
}
export interface SubnetIpRanges {
  /**
  * A description of this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#comment Subnet#comment}
  */
  readonly comment?: string;
  /**
  * The end IP for the new IP range (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#end_ip Subnet#end_ip}
  */
  readonly endIp: string;
  /**
  * The start IP for the new IP range (inclusive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#start_ip Subnet#start_ip}
  */
  readonly startIp: string;
  /**
  * The IP range type. Valid options are: `dynamic`, `reserved`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#type Subnet#type}
  */
  readonly type: string;
}

export function subnetIpRangesToTerraform(struct?: SubnetIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function subnetIpRangesToHclTerraform(struct?: SubnetIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class SubnetIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubnetIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._endIp = undefined;
      this._startIp = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._endIp = value.endIp;
      this._startIp = value.startIp;
      this._type = value.type;
    }
  }

  // comment - computed: false, optional: true, required: false
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

  // end_ip - computed: false, optional: false, required: true
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // start_ip - computed: false, optional: false, required: true
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
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
}

export class SubnetIpRangesList extends cdktf.ComplexList {
  public internalValue? : SubnetIpRanges[] | cdktf.IResolvable

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
  public get(index: number): SubnetIpRangesOutputReference {
    return new SubnetIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet maas_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "maas_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subnet to import
  * @param importFromId The id of the existing Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "maas_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/canonical/maas/2.6.0/docs/resources/subnet maas_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'maas_subnet',
      terraformGeneratorMetadata: {
        providerName: 'maas',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDns = config.allowDns;
    this._allowProxy = config.allowProxy;
    this._cidr = config.cidr;
    this._dnsServers = config.dnsServers;
    this._fabric = config.fabric;
    this._gatewayIp = config.gatewayIp;
    this._id = config.id;
    this._name = config.name;
    this._rdnsMode = config.rdnsMode;
    this._vlan = config.vlan;
    this._ipRanges.internalValue = config.ipRanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_dns - computed: false, optional: true, required: false
  private _allowDns?: boolean | cdktf.IResolvable; 
  public get allowDns() {
    return this.getBooleanAttribute('allow_dns');
  }
  public set allowDns(value: boolean | cdktf.IResolvable) {
    this._allowDns = value;
  }
  public resetAllowDns() {
    this._allowDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDnsInput() {
    return this._allowDns;
  }

  // allow_proxy - computed: false, optional: true, required: false
  private _allowProxy?: boolean | cdktf.IResolvable; 
  public get allowProxy() {
    return this.getBooleanAttribute('allow_proxy');
  }
  public set allowProxy(value: boolean | cdktf.IResolvable) {
    this._allowProxy = value;
  }
  public resetAllowProxy() {
    this._allowProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowProxyInput() {
    return this._allowProxy;
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dns_servers - computed: true, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // fabric - computed: false, optional: true, required: false
  private _fabric?: string; 
  public get fabric() {
    return this.getStringAttribute('fabric');
  }
  public set fabric(value: string) {
    this._fabric = value;
  }
  public resetFabric() {
    this._fabric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricInput() {
    return this._fabric;
  }

  // gateway_ip - computed: true, optional: true, required: false
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

  // rdns_mode - computed: false, optional: true, required: false
  private _rdnsMode?: number; 
  public get rdnsMode() {
    return this.getNumberAttribute('rdns_mode');
  }
  public set rdnsMode(value: number) {
    this._rdnsMode = value;
  }
  public resetRdnsMode() {
    this._rdnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnsModeInput() {
    return this._rdnsMode;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges = new SubnetIpRangesList(this, "ip_ranges", true);
  public get ipRanges() {
    return this._ipRanges;
  }
  public putIpRanges(value: SubnetIpRanges[] | cdktf.IResolvable) {
    this._ipRanges.internalValue = value;
  }
  public resetIpRanges() {
    this._ipRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_dns: cdktf.booleanToTerraform(this._allowDns),
      allow_proxy: cdktf.booleanToTerraform(this._allowProxy),
      cidr: cdktf.stringToTerraform(this._cidr),
      dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServers),
      fabric: cdktf.stringToTerraform(this._fabric),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rdns_mode: cdktf.numberToTerraform(this._rdnsMode),
      vlan: cdktf.stringToTerraform(this._vlan),
      ip_ranges: cdktf.listMapper(subnetIpRangesToTerraform, true)(this._ipRanges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_dns: {
        value: cdktf.booleanToHclTerraform(this._allowDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_proxy: {
        value: cdktf.booleanToHclTerraform(this._allowProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fabric: {
        value: cdktf.stringToHclTerraform(this._fabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_ip: {
        value: cdktf.stringToHclTerraform(this._gatewayIp),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdns_mode: {
        value: cdktf.numberToHclTerraform(this._rdnsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_ranges: {
        value: cdktf.listMapperHcl(subnetIpRangesToHclTerraform, true)(this._ipRanges.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SubnetIpRangesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
