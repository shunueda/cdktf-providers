// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InventoryProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Inventory profile description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#description InventoryProfile#description}
  */
  readonly description?: string;
  /**
  * List of IP addresses of DNS servers. Example `["1.1.1.1", "8.8.8.8"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#dnsservers InventoryProfile#dnsservers}
  */
  readonly dnsservers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#id InventoryProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of IPv4 subnets allowed to ssh. Example `["10.0.10.0/24", "172.16.16.16"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#ipv4ssh InventoryProfile#ipv4ssh}
  */
  readonly ipv4Ssh: string[];
  /**
  * List of IPv6 subnets allowed to ssh. Example `["2001:DB8::/32"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#ipv6ssh InventoryProfile#ipv6ssh}
  */
  readonly ipv6Ssh?: string[];
  /**
  * The name of inventory profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#name InventoryProfile#name}
  */
  readonly name: string;
  /**
  * List of domain names or IP addresses of NTP servers. Example `["0.pool.ntp.org", "132.163.96.5"]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#ntpservers InventoryProfile#ntpservers}
  */
  readonly ntpservers?: string[];
  /**
  * Devices using this inventory profile will adjust their system time to the selected timezone. Valid value is a name from the TZ [database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#timezone InventoryProfile#timezone}
  */
  readonly timezone?: string;
  /**
  * customrule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#customrule InventoryProfile#customrule}
  */
  readonly customrule?: InventoryProfileCustomrule[] | cdktf.IResolvable;
  /**
  * fabricsettings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#fabricsettings InventoryProfile#fabricsettings}
  */
  readonly fabricsettings?: InventoryProfileFabricsettings[] | cdktf.IResolvable;
  /**
  * gpuclustersettings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#gpuclustersettings InventoryProfile#gpuclustersettings}
  */
  readonly gpuclustersettings?: InventoryProfileGpuclustersettings[] | cdktf.IResolvable;
}
export interface InventoryProfileCustomrule {
  /**
  * Custom rule's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#description InventoryProfile#description}
  */
  readonly description?: string;
  /**
  * Destination port. 1-65535, or empty for any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#dstport InventoryProfile#dstport}
  */
  readonly dstport: string;
  /**
  * Protocol. Valid value is `udp`, `tcp` or `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#protocol InventoryProfile#protocol}
  */
  readonly protocol: string;
  /**
  * Source Subnet. Example `10.0.0.0/8`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#sourcesubnet InventoryProfile#sourcesubnet}
  */
  readonly sourcesubnet: string;
  /**
  * Source port. 1-65535, or empty for any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#srcport InventoryProfile#srcport}
  */
  readonly srcport: string;
}

export function inventoryProfileCustomruleToTerraform(struct?: InventoryProfileCustomrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dstport: cdktf.stringToTerraform(struct!.dstport),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sourcesubnet: cdktf.stringToTerraform(struct!.sourcesubnet),
    srcport: cdktf.stringToTerraform(struct!.srcport),
  }
}


export function inventoryProfileCustomruleToHclTerraform(struct?: InventoryProfileCustomrule | cdktf.IResolvable): any {
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
    dstport: {
      value: cdktf.stringToHclTerraform(struct!.dstport),
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
    sourcesubnet: {
      value: cdktf.stringToHclTerraform(struct!.sourcesubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcport: {
      value: cdktf.stringToHclTerraform(struct!.srcport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InventoryProfileCustomruleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InventoryProfileCustomrule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dstport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstport = this._dstport;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourcesubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcesubnet = this._sourcesubnet;
    }
    if (this._srcport !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcport = this._srcport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InventoryProfileCustomrule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dstport = undefined;
      this._protocol = undefined;
      this._sourcesubnet = undefined;
      this._srcport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dstport = value.dstport;
      this._protocol = value.protocol;
      this._sourcesubnet = value.sourcesubnet;
      this._srcport = value.srcport;
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

  // dstport - computed: false, optional: false, required: true
  private _dstport?: string; 
  public get dstport() {
    return this.getStringAttribute('dstport');
  }
  public set dstport(value: string) {
    this._dstport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
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

  // sourcesubnet - computed: false, optional: false, required: true
  private _sourcesubnet?: string; 
  public get sourcesubnet() {
    return this.getStringAttribute('sourcesubnet');
  }
  public set sourcesubnet(value: string) {
    this._sourcesubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesubnetInput() {
    return this._sourcesubnet;
  }

  // srcport - computed: false, optional: false, required: true
  private _srcport?: string; 
  public get srcport() {
    return this.getStringAttribute('srcport');
  }
  public set srcport(value: string) {
    this._srcport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }
}

export class InventoryProfileCustomruleList extends cdktf.ComplexList {
  public internalValue? : InventoryProfileCustomrule[] | cdktf.IResolvable

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
  public get(index: number): InventoryProfileCustomruleOutputReference {
    return new InventoryProfileCustomruleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InventoryProfileFabricsettings {
  /**
  * Automatically configure non-backbone switch ports under a single legged link aggregation (agg) interface. This allows for active/standby multihoming if LACP is enabled on the server side. Active/Active multihoming with EVPN-MH will be automatically configured on Nvidia Spectrum-2 and higher switch models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#automaticlinkaggregation InventoryProfile#automaticlinkaggregation}
  */
  readonly automaticlinkaggregation?: boolean | cdktf.IResolvable;
  /**
  * Enabling MC-LAG functionality will disable any EVPN-MH functionality. Two multihoming methods are not supported simultaneously on the same switches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#mclag InventoryProfile#mclag}
  */
  readonly mclag?: boolean | cdktf.IResolvable;
  /**
  * Optimize BGP Overlay for leaf-spine topology. When checked, overlay BGP updates will be optimized for large scale. Each leaf switch (based on name) will form its overlay BGP sessions only with two spine switches (with the lowest IDs). Otherwise, Overlay BGP sessions will be configured on p2p links alongside underlay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#optimisebgpoverlay InventoryProfile#optimisebgpoverlay}
  */
  readonly optimisebgpoverlay?: boolean | cdktf.IResolvable;
  /**
  * Required for BGP/EVPN VXLAN integration with compute hypervisor networking. This optimization makes sure that a large number of hypervisor virtual networking EVPN prefixes do not overflow switch TCAM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#optimisebgpoverlayhypervisor InventoryProfile#optimisebgpoverlayhypervisor}
  */
  readonly optimisebgpoverlayhypervisor?: boolean | cdktf.IResolvable;
  /**
  * When checked, BGP underlay sessions will be configured using p2p IPv4 addresses configured on link objects in the Netris controller. Otherwise, BGP unnumbered method is used and p2p ipv6 link-local addresses are used for BGP sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#unnumberedbgpunderlay InventoryProfile#unnumberedbgpunderlay}
  */
  readonly unnumberedbgpunderlay?: boolean | cdktf.IResolvable;
}

export function inventoryProfileFabricsettingsToTerraform(struct?: InventoryProfileFabricsettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automaticlinkaggregation: cdktf.booleanToTerraform(struct!.automaticlinkaggregation),
    mclag: cdktf.booleanToTerraform(struct!.mclag),
    optimisebgpoverlay: cdktf.booleanToTerraform(struct!.optimisebgpoverlay),
    optimisebgpoverlayhypervisor: cdktf.booleanToTerraform(struct!.optimisebgpoverlayhypervisor),
    unnumberedbgpunderlay: cdktf.booleanToTerraform(struct!.unnumberedbgpunderlay),
  }
}


export function inventoryProfileFabricsettingsToHclTerraform(struct?: InventoryProfileFabricsettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automaticlinkaggregation: {
      value: cdktf.booleanToHclTerraform(struct!.automaticlinkaggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mclag: {
      value: cdktf.booleanToHclTerraform(struct!.mclag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    optimisebgpoverlay: {
      value: cdktf.booleanToHclTerraform(struct!.optimisebgpoverlay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    optimisebgpoverlayhypervisor: {
      value: cdktf.booleanToHclTerraform(struct!.optimisebgpoverlayhypervisor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unnumberedbgpunderlay: {
      value: cdktf.booleanToHclTerraform(struct!.unnumberedbgpunderlay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InventoryProfileFabricsettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InventoryProfileFabricsettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticlinkaggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticlinkaggregation = this._automaticlinkaggregation;
    }
    if (this._mclag !== undefined) {
      hasAnyValues = true;
      internalValueResult.mclag = this._mclag;
    }
    if (this._optimisebgpoverlay !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimisebgpoverlay = this._optimisebgpoverlay;
    }
    if (this._optimisebgpoverlayhypervisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimisebgpoverlayhypervisor = this._optimisebgpoverlayhypervisor;
    }
    if (this._unnumberedbgpunderlay !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnumberedbgpunderlay = this._unnumberedbgpunderlay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InventoryProfileFabricsettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automaticlinkaggregation = undefined;
      this._mclag = undefined;
      this._optimisebgpoverlay = undefined;
      this._optimisebgpoverlayhypervisor = undefined;
      this._unnumberedbgpunderlay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automaticlinkaggregation = value.automaticlinkaggregation;
      this._mclag = value.mclag;
      this._optimisebgpoverlay = value.optimisebgpoverlay;
      this._optimisebgpoverlayhypervisor = value.optimisebgpoverlayhypervisor;
      this._unnumberedbgpunderlay = value.unnumberedbgpunderlay;
    }
  }

  // automaticlinkaggregation - computed: false, optional: true, required: false
  private _automaticlinkaggregation?: boolean | cdktf.IResolvable; 
  public get automaticlinkaggregation() {
    return this.getBooleanAttribute('automaticlinkaggregation');
  }
  public set automaticlinkaggregation(value: boolean | cdktf.IResolvable) {
    this._automaticlinkaggregation = value;
  }
  public resetAutomaticlinkaggregation() {
    this._automaticlinkaggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticlinkaggregationInput() {
    return this._automaticlinkaggregation;
  }

  // mclag - computed: false, optional: true, required: false
  private _mclag?: boolean | cdktf.IResolvable; 
  public get mclag() {
    return this.getBooleanAttribute('mclag');
  }
  public set mclag(value: boolean | cdktf.IResolvable) {
    this._mclag = value;
  }
  public resetMclag() {
    this._mclag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagInput() {
    return this._mclag;
  }

  // optimisebgpoverlay - computed: false, optional: true, required: false
  private _optimisebgpoverlay?: boolean | cdktf.IResolvable; 
  public get optimisebgpoverlay() {
    return this.getBooleanAttribute('optimisebgpoverlay');
  }
  public set optimisebgpoverlay(value: boolean | cdktf.IResolvable) {
    this._optimisebgpoverlay = value;
  }
  public resetOptimisebgpoverlay() {
    this._optimisebgpoverlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimisebgpoverlayInput() {
    return this._optimisebgpoverlay;
  }

  // optimisebgpoverlayhypervisor - computed: false, optional: true, required: false
  private _optimisebgpoverlayhypervisor?: boolean | cdktf.IResolvable; 
  public get optimisebgpoverlayhypervisor() {
    return this.getBooleanAttribute('optimisebgpoverlayhypervisor');
  }
  public set optimisebgpoverlayhypervisor(value: boolean | cdktf.IResolvable) {
    this._optimisebgpoverlayhypervisor = value;
  }
  public resetOptimisebgpoverlayhypervisor() {
    this._optimisebgpoverlayhypervisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimisebgpoverlayhypervisorInput() {
    return this._optimisebgpoverlayhypervisor;
  }

  // unnumberedbgpunderlay - computed: false, optional: true, required: false
  private _unnumberedbgpunderlay?: boolean | cdktf.IResolvable; 
  public get unnumberedbgpunderlay() {
    return this.getBooleanAttribute('unnumberedbgpunderlay');
  }
  public set unnumberedbgpunderlay(value: boolean | cdktf.IResolvable) {
    this._unnumberedbgpunderlay = value;
  }
  public resetUnnumberedbgpunderlay() {
    this._unnumberedbgpunderlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedbgpunderlayInput() {
    return this._unnumberedbgpunderlay;
  }
}

export class InventoryProfileFabricsettingsList extends cdktf.ComplexList {
  public internalValue? : InventoryProfileFabricsettings[] | cdktf.IResolvable

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
  public get(index: number): InventoryProfileFabricsettingsOutputReference {
    return new InventoryProfileFabricsettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InventoryProfileGpuclustersettings {
  /**
  * Minimize prefix updates over BGP Overlay for L3VPN p2p links in rail-optimized topology and IP addressing schemes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#aggregatel3vpnprefix InventoryProfile#aggregatel3vpnprefix}
  */
  readonly aggregatel3Vpnprefix?: boolean | cdktf.IResolvable;
  /**
  * Enable ASIC monitoring: Histograms and Telemetry Snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#asicmonitoring InventoryProfile#asicmonitoring}
  */
  readonly asicmonitoring?: boolean | cdktf.IResolvable;
  /**
  * Enable Zero Touch RoCE Congestion Control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#congestioncontrol InventoryProfile#congestioncontrol}
  */
  readonly congestioncontrol?: boolean | cdktf.IResolvable;
  /**
  * Optimize for RDMA over Converged Ethernet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#qosandroce InventoryProfile#qosandroce}
  */
  readonly qosandroce?: boolean | cdktf.IResolvable;
  /**
  * Enable Adaptive Routing for RoCE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#roceadaptiverouting InventoryProfile#roceadaptiverouting}
  */
  readonly roceadaptiverouting?: boolean | cdktf.IResolvable;
}

export function inventoryProfileGpuclustersettingsToTerraform(struct?: InventoryProfileGpuclustersettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregatel3vpnprefix: cdktf.booleanToTerraform(struct!.aggregatel3Vpnprefix),
    asicmonitoring: cdktf.booleanToTerraform(struct!.asicmonitoring),
    congestioncontrol: cdktf.booleanToTerraform(struct!.congestioncontrol),
    qosandroce: cdktf.booleanToTerraform(struct!.qosandroce),
    roceadaptiverouting: cdktf.booleanToTerraform(struct!.roceadaptiverouting),
  }
}


export function inventoryProfileGpuclustersettingsToHclTerraform(struct?: InventoryProfileGpuclustersettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregatel3vpnprefix: {
      value: cdktf.booleanToHclTerraform(struct!.aggregatel3Vpnprefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asicmonitoring: {
      value: cdktf.booleanToHclTerraform(struct!.asicmonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    congestioncontrol: {
      value: cdktf.booleanToHclTerraform(struct!.congestioncontrol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qosandroce: {
      value: cdktf.booleanToHclTerraform(struct!.qosandroce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roceadaptiverouting: {
      value: cdktf.booleanToHclTerraform(struct!.roceadaptiverouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InventoryProfileGpuclustersettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InventoryProfileGpuclustersettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregatel3Vpnprefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatel3Vpnprefix = this._aggregatel3Vpnprefix;
    }
    if (this._asicmonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.asicmonitoring = this._asicmonitoring;
    }
    if (this._congestioncontrol !== undefined) {
      hasAnyValues = true;
      internalValueResult.congestioncontrol = this._congestioncontrol;
    }
    if (this._qosandroce !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosandroce = this._qosandroce;
    }
    if (this._roceadaptiverouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.roceadaptiverouting = this._roceadaptiverouting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InventoryProfileGpuclustersettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregatel3Vpnprefix = undefined;
      this._asicmonitoring = undefined;
      this._congestioncontrol = undefined;
      this._qosandroce = undefined;
      this._roceadaptiverouting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregatel3Vpnprefix = value.aggregatel3Vpnprefix;
      this._asicmonitoring = value.asicmonitoring;
      this._congestioncontrol = value.congestioncontrol;
      this._qosandroce = value.qosandroce;
      this._roceadaptiverouting = value.roceadaptiverouting;
    }
  }

  // aggregatel3vpnprefix - computed: false, optional: true, required: false
  private _aggregatel3Vpnprefix?: boolean | cdktf.IResolvable; 
  public get aggregatel3Vpnprefix() {
    return this.getBooleanAttribute('aggregatel3vpnprefix');
  }
  public set aggregatel3Vpnprefix(value: boolean | cdktf.IResolvable) {
    this._aggregatel3Vpnprefix = value;
  }
  public resetAggregatel3Vpnprefix() {
    this._aggregatel3Vpnprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatel3VpnprefixInput() {
    return this._aggregatel3Vpnprefix;
  }

  // asicmonitoring - computed: false, optional: true, required: false
  private _asicmonitoring?: boolean | cdktf.IResolvable; 
  public get asicmonitoring() {
    return this.getBooleanAttribute('asicmonitoring');
  }
  public set asicmonitoring(value: boolean | cdktf.IResolvable) {
    this._asicmonitoring = value;
  }
  public resetAsicmonitoring() {
    this._asicmonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asicmonitoringInput() {
    return this._asicmonitoring;
  }

  // congestioncontrol - computed: false, optional: true, required: false
  private _congestioncontrol?: boolean | cdktf.IResolvable; 
  public get congestioncontrol() {
    return this.getBooleanAttribute('congestioncontrol');
  }
  public set congestioncontrol(value: boolean | cdktf.IResolvable) {
    this._congestioncontrol = value;
  }
  public resetCongestioncontrol() {
    this._congestioncontrol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get congestioncontrolInput() {
    return this._congestioncontrol;
  }

  // qosandroce - computed: false, optional: true, required: false
  private _qosandroce?: boolean | cdktf.IResolvable; 
  public get qosandroce() {
    return this.getBooleanAttribute('qosandroce');
  }
  public set qosandroce(value: boolean | cdktf.IResolvable) {
    this._qosandroce = value;
  }
  public resetQosandroce() {
    this._qosandroce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosandroceInput() {
    return this._qosandroce;
  }

  // roceadaptiverouting - computed: false, optional: true, required: false
  private _roceadaptiverouting?: boolean | cdktf.IResolvable; 
  public get roceadaptiverouting() {
    return this.getBooleanAttribute('roceadaptiverouting');
  }
  public set roceadaptiverouting(value: boolean | cdktf.IResolvable) {
    this._roceadaptiverouting = value;
  }
  public resetRoceadaptiverouting() {
    this._roceadaptiverouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roceadaptiveroutingInput() {
    return this._roceadaptiverouting;
  }
}

export class InventoryProfileGpuclustersettingsList extends cdktf.ComplexList {
  public internalValue? : InventoryProfileGpuclustersettings[] | cdktf.IResolvable

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
  public get(index: number): InventoryProfileGpuclustersettingsOutputReference {
    return new InventoryProfileGpuclustersettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile netris_inventory_profile}
*/
export class InventoryProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_inventory_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InventoryProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InventoryProfile to import
  * @param importFromId The id of the existing InventoryProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InventoryProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_inventory_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/inventory_profile netris_inventory_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InventoryProfileConfig
  */
  public constructor(scope: Construct, id: string, config: InventoryProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_inventory_profile',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6'
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
    this._dnsservers = config.dnsservers;
    this._id = config.id;
    this._ipv4Ssh = config.ipv4Ssh;
    this._ipv6Ssh = config.ipv6Ssh;
    this._name = config.name;
    this._ntpservers = config.ntpservers;
    this._timezone = config.timezone;
    this._customrule.internalValue = config.customrule;
    this._fabricsettings.internalValue = config.fabricsettings;
    this._gpuclustersettings.internalValue = config.gpuclustersettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // dnsservers - computed: false, optional: true, required: false
  private _dnsservers?: string[]; 
  public get dnsservers() {
    return this.getListAttribute('dnsservers');
  }
  public set dnsservers(value: string[]) {
    this._dnsservers = value;
  }
  public resetDnsservers() {
    this._dnsservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsserversInput() {
    return this._dnsservers;
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

  // ipv4ssh - computed: false, optional: false, required: true
  private _ipv4Ssh?: string[]; 
  public get ipv4Ssh() {
    return this.getListAttribute('ipv4ssh');
  }
  public set ipv4Ssh(value: string[]) {
    this._ipv4Ssh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SshInput() {
    return this._ipv4Ssh;
  }

  // ipv6ssh - computed: false, optional: true, required: false
  private _ipv6Ssh?: string[]; 
  public get ipv6Ssh() {
    return this.getListAttribute('ipv6ssh');
  }
  public set ipv6Ssh(value: string[]) {
    this._ipv6Ssh = value;
  }
  public resetIpv6Ssh() {
    this._ipv6Ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SshInput() {
    return this._ipv6Ssh;
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

  // ntpservers - computed: false, optional: true, required: false
  private _ntpservers?: string[]; 
  public get ntpservers() {
    return this.getListAttribute('ntpservers');
  }
  public set ntpservers(value: string[]) {
    this._ntpservers = value;
  }
  public resetNtpservers() {
    this._ntpservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpserversInput() {
    return this._ntpservers;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // customrule - computed: false, optional: true, required: false
  private _customrule = new InventoryProfileCustomruleList(this, "customrule", false);
  public get customrule() {
    return this._customrule;
  }
  public putCustomrule(value: InventoryProfileCustomrule[] | cdktf.IResolvable) {
    this._customrule.internalValue = value;
  }
  public resetCustomrule() {
    this._customrule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customruleInput() {
    return this._customrule.internalValue;
  }

  // fabricsettings - computed: false, optional: true, required: false
  private _fabricsettings = new InventoryProfileFabricsettingsList(this, "fabricsettings", true);
  public get fabricsettings() {
    return this._fabricsettings;
  }
  public putFabricsettings(value: InventoryProfileFabricsettings[] | cdktf.IResolvable) {
    this._fabricsettings.internalValue = value;
  }
  public resetFabricsettings() {
    this._fabricsettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricsettingsInput() {
    return this._fabricsettings.internalValue;
  }

  // gpuclustersettings - computed: false, optional: true, required: false
  private _gpuclustersettings = new InventoryProfileGpuclustersettingsList(this, "gpuclustersettings", true);
  public get gpuclustersettings() {
    return this._gpuclustersettings;
  }
  public putGpuclustersettings(value: InventoryProfileGpuclustersettings[] | cdktf.IResolvable) {
    this._gpuclustersettings.internalValue = value;
  }
  public resetGpuclustersettings() {
    this._gpuclustersettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuclustersettingsInput() {
    return this._gpuclustersettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dnsservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsservers),
      id: cdktf.stringToTerraform(this._id),
      ipv4ssh: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4Ssh),
      ipv6ssh: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Ssh),
      name: cdktf.stringToTerraform(this._name),
      ntpservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpservers),
      timezone: cdktf.stringToTerraform(this._timezone),
      customrule: cdktf.listMapper(inventoryProfileCustomruleToTerraform, true)(this._customrule.internalValue),
      fabricsettings: cdktf.listMapper(inventoryProfileFabricsettingsToTerraform, true)(this._fabricsettings.internalValue),
      gpuclustersettings: cdktf.listMapper(inventoryProfileGpuclustersettingsToTerraform, true)(this._gpuclustersettings.internalValue),
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
      dnsservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4ssh: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4Ssh),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6ssh: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Ssh),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntpservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customrule: {
        value: cdktf.listMapperHcl(inventoryProfileCustomruleToHclTerraform, true)(this._customrule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InventoryProfileCustomruleList",
      },
      fabricsettings: {
        value: cdktf.listMapperHcl(inventoryProfileFabricsettingsToHclTerraform, true)(this._fabricsettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InventoryProfileFabricsettingsList",
      },
      gpuclustersettings: {
        value: cdktf.listMapperHcl(inventoryProfileGpuclustersettingsToHclTerraform, true)(this._gpuclustersettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InventoryProfileGpuclustersettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
