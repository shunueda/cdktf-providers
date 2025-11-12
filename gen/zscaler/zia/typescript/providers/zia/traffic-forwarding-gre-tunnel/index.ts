// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficForwardingGreTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional information about this GRE tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#comment TrafficForwardingGreTunnel#comment}
  */
  readonly comment?: string;
  /**
  * When within_country is enabled, you must set this to the country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#country_code TrafficForwardingGreTunnel#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#id TrafficForwardingGreTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The start of the internal IP address in /29 CIDR range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#internal_ip_range TrafficForwardingGreTunnel#internal_ip_range}
  */
  readonly internalIpRange?: string;
  /**
  * This is required to support the automated SD-WAN provisioning of GRE tunnels, when set to true gre_tun_ip and gre_tun_id are set to null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#ip_unnumbered TrafficForwardingGreTunnel#ip_unnumbered}
  */
  readonly ipUnnumbered?: boolean | cdktf.IResolvable;
  /**
  * The source IP address of the GRE tunnel. This is typically a static IP address in the organization or SD-WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#source_ip TrafficForwardingGreTunnel#source_ip}
  */
  readonly sourceIp: string;
  /**
  * Restrict the data center virtual IP addresses (VIPs) only to those within the same country as the source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#within_country TrafficForwardingGreTunnel#within_country}
  */
  readonly withinCountry?: boolean | cdktf.IResolvable;
  /**
  * primary_dest_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#primary_dest_vip TrafficForwardingGreTunnel#primary_dest_vip}
  */
  readonly primaryDestVip?: TrafficForwardingGreTunnelPrimaryDestVip[] | cdktf.IResolvable;
  /**
  * secondary_dest_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#secondary_dest_vip TrafficForwardingGreTunnel#secondary_dest_vip}
  */
  readonly secondaryDestVip?: TrafficForwardingGreTunnelSecondaryDestVip[] | cdktf.IResolvable;
}
export interface TrafficForwardingGreTunnelPrimaryDestVip {
  /**
  * Data center information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#datacenter TrafficForwardingGreTunnel#datacenter}
  */
  readonly datacenter?: string;
  /**
  * GRE cluster virtual IP ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#id TrafficForwardingGreTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * GRE cluster virtual IP address (VIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#virtual_ip TrafficForwardingGreTunnel#virtual_ip}
  */
  readonly virtualIp?: string;
}

export function trafficForwardingGreTunnelPrimaryDestVipToTerraform(struct?: TrafficForwardingGreTunnelPrimaryDestVip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    id: cdktf.numberToTerraform(struct!.id),
    virtual_ip: cdktf.stringToTerraform(struct!.virtualIp),
  }
}


export function trafficForwardingGreTunnelPrimaryDestVipToHclTerraform(struct?: TrafficForwardingGreTunnelPrimaryDestVip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_ip: {
      value: cdktf.stringToHclTerraform(struct!.virtualIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficForwardingGreTunnelPrimaryDestVipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficForwardingGreTunnelPrimaryDestVip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._virtualIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualIp = this._virtualIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficForwardingGreTunnelPrimaryDestVip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenter = undefined;
      this._id = undefined;
      this._virtualIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenter = value.datacenter;
      this._id = value.id;
      this._virtualIp = value.virtualIp;
    }
  }

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // virtual_ip - computed: true, optional: true, required: false
  private _virtualIp?: string; 
  public get virtualIp() {
    return this.getStringAttribute('virtual_ip');
  }
  public set virtualIp(value: string) {
    this._virtualIp = value;
  }
  public resetVirtualIp() {
    this._virtualIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpInput() {
    return this._virtualIp;
  }
}

export class TrafficForwardingGreTunnelPrimaryDestVipList extends cdktf.ComplexList {
  public internalValue? : TrafficForwardingGreTunnelPrimaryDestVip[] | cdktf.IResolvable

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
  public get(index: number): TrafficForwardingGreTunnelPrimaryDestVipOutputReference {
    return new TrafficForwardingGreTunnelPrimaryDestVipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficForwardingGreTunnelSecondaryDestVip {
  /**
  * Data center information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#datacenter TrafficForwardingGreTunnel#datacenter}
  */
  readonly datacenter?: string;
  /**
  * GRE cluster virtual IP ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#id TrafficForwardingGreTunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * GRE cluster virtual IP address (VIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#virtual_ip TrafficForwardingGreTunnel#virtual_ip}
  */
  readonly virtualIp?: string;
}

export function trafficForwardingGreTunnelSecondaryDestVipToTerraform(struct?: TrafficForwardingGreTunnelSecondaryDestVip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    id: cdktf.numberToTerraform(struct!.id),
    virtual_ip: cdktf.stringToTerraform(struct!.virtualIp),
  }
}


export function trafficForwardingGreTunnelSecondaryDestVipToHclTerraform(struct?: TrafficForwardingGreTunnelSecondaryDestVip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_ip: {
      value: cdktf.stringToHclTerraform(struct!.virtualIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficForwardingGreTunnelSecondaryDestVipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficForwardingGreTunnelSecondaryDestVip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._virtualIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualIp = this._virtualIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficForwardingGreTunnelSecondaryDestVip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenter = undefined;
      this._id = undefined;
      this._virtualIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenter = value.datacenter;
      this._id = value.id;
      this._virtualIp = value.virtualIp;
    }
  }

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // virtual_ip - computed: true, optional: true, required: false
  private _virtualIp?: string; 
  public get virtualIp() {
    return this.getStringAttribute('virtual_ip');
  }
  public set virtualIp(value: string) {
    this._virtualIp = value;
  }
  public resetVirtualIp() {
    this._virtualIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpInput() {
    return this._virtualIp;
  }
}

export class TrafficForwardingGreTunnelSecondaryDestVipList extends cdktf.ComplexList {
  public internalValue? : TrafficForwardingGreTunnelSecondaryDestVip[] | cdktf.IResolvable

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
  public get(index: number): TrafficForwardingGreTunnelSecondaryDestVipOutputReference {
    return new TrafficForwardingGreTunnelSecondaryDestVipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel zia_traffic_forwarding_gre_tunnel}
*/
export class TrafficForwardingGreTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_traffic_forwarding_gre_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficForwardingGreTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficForwardingGreTunnel to import
  * @param importFromId The id of the existing TrafficForwardingGreTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficForwardingGreTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_traffic_forwarding_gre_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_gre_tunnel zia_traffic_forwarding_gre_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficForwardingGreTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficForwardingGreTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_traffic_forwarding_gre_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._countryCode = config.countryCode;
    this._id = config.id;
    this._internalIpRange = config.internalIpRange;
    this._ipUnnumbered = config.ipUnnumbered;
    this._sourceIp = config.sourceIp;
    this._withinCountry = config.withinCountry;
    this._primaryDestVip.internalValue = config.primaryDestVip;
    this._secondaryDestVip.internalValue = config.secondaryDestVip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
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

  // internal_ip_range - computed: false, optional: true, required: false
  private _internalIpRange?: string; 
  public get internalIpRange() {
    return this.getStringAttribute('internal_ip_range');
  }
  public set internalIpRange(value: string) {
    this._internalIpRange = value;
  }
  public resetInternalIpRange() {
    this._internalIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpRangeInput() {
    return this._internalIpRange;
  }

  // ip_unnumbered - computed: true, optional: true, required: false
  private _ipUnnumbered?: boolean | cdktf.IResolvable; 
  public get ipUnnumbered() {
    return this.getBooleanAttribute('ip_unnumbered');
  }
  public set ipUnnumbered(value: boolean | cdktf.IResolvable) {
    this._ipUnnumbered = value;
  }
  public resetIpUnnumbered() {
    this._ipUnnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnnumberedInput() {
    return this._ipUnnumbered;
  }

  // source_ip - computed: false, optional: false, required: true
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getNumberAttribute('tunnel_id');
  }

  // within_country - computed: true, optional: true, required: false
  private _withinCountry?: boolean | cdktf.IResolvable; 
  public get withinCountry() {
    return this.getBooleanAttribute('within_country');
  }
  public set withinCountry(value: boolean | cdktf.IResolvable) {
    this._withinCountry = value;
  }
  public resetWithinCountry() {
    this._withinCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinCountryInput() {
    return this._withinCountry;
  }

  // primary_dest_vip - computed: false, optional: true, required: false
  private _primaryDestVip = new TrafficForwardingGreTunnelPrimaryDestVipList(this, "primary_dest_vip", true);
  public get primaryDestVip() {
    return this._primaryDestVip;
  }
  public putPrimaryDestVip(value: TrafficForwardingGreTunnelPrimaryDestVip[] | cdktf.IResolvable) {
    this._primaryDestVip.internalValue = value;
  }
  public resetPrimaryDestVip() {
    this._primaryDestVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDestVipInput() {
    return this._primaryDestVip.internalValue;
  }

  // secondary_dest_vip - computed: false, optional: true, required: false
  private _secondaryDestVip = new TrafficForwardingGreTunnelSecondaryDestVipList(this, "secondary_dest_vip", true);
  public get secondaryDestVip() {
    return this._secondaryDestVip;
  }
  public putSecondaryDestVip(value: TrafficForwardingGreTunnelSecondaryDestVip[] | cdktf.IResolvable) {
    this._secondaryDestVip.internalValue = value;
  }
  public resetSecondaryDestVip() {
    this._secondaryDestVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDestVipInput() {
    return this._secondaryDestVip.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      country_code: cdktf.stringToTerraform(this._countryCode),
      id: cdktf.stringToTerraform(this._id),
      internal_ip_range: cdktf.stringToTerraform(this._internalIpRange),
      ip_unnumbered: cdktf.booleanToTerraform(this._ipUnnumbered),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      within_country: cdktf.booleanToTerraform(this._withinCountry),
      primary_dest_vip: cdktf.listMapper(trafficForwardingGreTunnelPrimaryDestVipToTerraform, true)(this._primaryDestVip.internalValue),
      secondary_dest_vip: cdktf.listMapper(trafficForwardingGreTunnelSecondaryDestVipToTerraform, true)(this._secondaryDestVip.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
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
      internal_ip_range: {
        value: cdktf.stringToHclTerraform(this._internalIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_unnumbered: {
        value: cdktf.booleanToHclTerraform(this._ipUnnumbered),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      within_country: {
        value: cdktf.booleanToHclTerraform(this._withinCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_dest_vip: {
        value: cdktf.listMapperHcl(trafficForwardingGreTunnelPrimaryDestVipToHclTerraform, true)(this._primaryDestVip.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficForwardingGreTunnelPrimaryDestVipList",
      },
      secondary_dest_vip: {
        value: cdktf.listMapperHcl(trafficForwardingGreTunnelSecondaryDestVipToHclTerraform, true)(this._secondaryDestVip.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TrafficForwardingGreTunnelSecondaryDestVipList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
