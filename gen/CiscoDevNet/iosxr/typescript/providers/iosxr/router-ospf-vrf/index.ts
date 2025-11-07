// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspfVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enter the OSPF area configuration submode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#areas RouterOspfVrf#areas}
  */
  readonly areas?: RouterOspfVrfAreas[] | cdktf.IResolvable;
  /**
  * Assign OSPF cost based on interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#auto_cost_disable RouterOspfVrf#auto_cost_disable}
  */
  readonly autoCostDisable?: boolean | cdktf.IResolvable;
  /**
  * Specify reference bandwidth for OSPF cost computations
  *   - Range: `1`-`4294967`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#auto_cost_reference_bandwidth RouterOspfVrf#auto_cost_reference_bandwidth}
  */
  readonly autoCostReferenceBandwidth?: number;
  /**
  * Enable Fast detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#bfd_fast_detect RouterOspfVrf#bfd_fast_detect}
  */
  readonly bfdFastDetect?: boolean | cdktf.IResolvable;
  /**
  * Minimum interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#bfd_minimum_interval RouterOspfVrf#bfd_minimum_interval}
  */
  readonly bfdMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `2`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#bfd_multiplier RouterOspfVrf#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Seconds
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#dead_interval RouterOspfVrf#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Distribute a default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#default_information_originate RouterOspfVrf#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Always advertise default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#default_information_originate_always RouterOspfVrf#default_information_originate_always}
  */
  readonly defaultInformationOriginateAlways?: boolean | cdktf.IResolvable;
  /**
  * OSPF metric type for default routes
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#default_information_originate_metric_type RouterOspfVrf#default_information_originate_metric_type}
  */
  readonly defaultInformationOriginateMetricType?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#delete_mode RouterOspfVrf#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#device RouterOspfVrf#device}
  */
  readonly device?: string;
  /**
  * Time between HELLO packets
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#hello_interval RouterOspfVrf#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Enable LDP IGP synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#mpls_ldp_sync RouterOspfVrf#mpls_ldp_sync}
  */
  readonly mplsLdpSync?: boolean | cdktf.IResolvable;
  /**
  * Disable ignoring the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#mtu_ignore_disable RouterOspfVrf#mtu_ignore_disable}
  */
  readonly mtuIgnoreDisable?: boolean | cdktf.IResolvable;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#mtu_ignore_enable RouterOspfVrf#mtu_ignore_enable}
  */
  readonly mtuIgnoreEnable?: boolean | cdktf.IResolvable;
  /**
  * Disable passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#passive_disable RouterOspfVrf#passive_disable}
  */
  readonly passiveDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable passive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#passive_enable RouterOspfVrf#passive_enable}
  */
  readonly passiveEnable?: boolean | cdktf.IResolvable;
  /**
  * Router priority
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#priority RouterOspfVrf#priority}
  */
  readonly priority?: number;
  /**
  * Name for this OSPF process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#process_name RouterOspfVrf#process_name}
  */
  readonly processName: string;
  /**
  * Redistribute BGP routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#redistribute_bgp RouterOspfVrf#redistribute_bgp}
  */
  readonly redistributeBgp?: RouterOspfVrfRedistributeBgp[] | cdktf.IResolvable;
  /**
  * Redistribute connected routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#redistribute_connected RouterOspfVrf#redistribute_connected}
  */
  readonly redistributeConnected?: boolean | cdktf.IResolvable;
  /**
  * OSPF exterior metric type for redistributed routes
  *   - Choices: `1`, `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#redistribute_connected_metric_type RouterOspfVrf#redistribute_connected_metric_type}
  */
  readonly redistributeConnectedMetricType?: string;
  /**
  * Set tag for routes redistributed into OSPF
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#redistribute_connected_tag RouterOspfVrf#redistribute_connected_tag}
  */
  readonly redistributeConnectedTag?: number;
  /**
  * Redistribute ISIS routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#redistribute_isis RouterOspfVrf#redistribute_isis}
  */
  readonly redistributeIsis?: RouterOspfVrfRedistributeIsis[] | cdktf.IResolvable;
  /**
  * Redistribute OSPF routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#redistribute_ospf RouterOspfVrf#redistribute_ospf}
  */
  readonly redistributeOspf?: RouterOspfVrfRedistributeOspf[] | cdktf.IResolvable;
  /**
  * Redistribute static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#redistribute_static RouterOspfVrf#redistribute_static}
  */
  readonly redistributeStatic?: boolean | cdktf.IResolvable;
  /**
  * OSPF exterior metric type for redistributed routes
  *   - Choices: `1`, `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#redistribute_static_metric_type RouterOspfVrf#redistribute_static_metric_type}
  */
  readonly redistributeStaticMetricType?: string;
  /**
  * Set tag for routes redistributed into OSPF
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#redistribute_static_tag RouterOspfVrf#redistribute_static_tag}
  */
  readonly redistributeStaticTag?: number;
  /**
  * configure this node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#router_id RouterOspfVrf#router_id}
  */
  readonly routerId?: string;
  /**
  * Name for this OSPF vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#vrf_name RouterOspfVrf#vrf_name}
  */
  readonly vrfName: string;
}
export interface RouterOspfVrfAreas {
  /**
  * Enter the OSPF area configuration submode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#area_id RouterOspfVrf#area_id}
  */
  readonly areaId: string;
}

export function routerOspfVrfAreasToTerraform(struct?: RouterOspfVrfAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id: cdktf.stringToTerraform(struct!.areaId),
  }
}


export function routerOspfVrfAreasToHclTerraform(struct?: RouterOspfVrfAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id: {
      value: cdktf.stringToHclTerraform(struct!.areaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfAreas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaId = this._areaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfAreas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaId = value.areaId;
    }
  }

  // area_id - computed: false, optional: false, required: true
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }
}

export class RouterOspfVrfAreasList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfAreas[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfAreasOutputReference {
    return new RouterOspfVrfAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfRedistributeBgp {
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#as_number RouterOspfVrf#as_number}
  */
  readonly asNumber: string;
  /**
  * OSPF exterior metric type for redistributed routes
  *   - Choices: `1`, `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#metric_type RouterOspfVrf#metric_type}
  */
  readonly metricType?: string;
  /**
  * Set tag for routes redistributed into OSPF
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#tag RouterOspfVrf#tag}
  */
  readonly tag?: number;
}

export function routerOspfVrfRedistributeBgpToTerraform(struct?: RouterOspfVrfRedistributeBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_number: cdktf.stringToTerraform(struct!.asNumber),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerOspfVrfRedistributeBgpToHclTerraform(struct?: RouterOspfVrfRedistributeBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_number: {
      value: cdktf.stringToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfRedistributeBgpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfRedistributeBgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfRedistributeBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumber = undefined;
      this._metricType = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asNumber = value.asNumber;
      this._metricType = value.metricType;
      this._tag = value.tag;
    }
  }

  // as_number - computed: false, optional: false, required: true
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterOspfVrfRedistributeBgpList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfRedistributeBgp[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfRedistributeBgpOutputReference {
    return new RouterOspfVrfRedistributeBgpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfRedistributeIsis {
  /**
  * ISO IS-IS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#instance_name RouterOspfVrf#instance_name}
  */
  readonly instanceName: string;
  /**
  * IS-IS level-1 routes only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#level_1 RouterOspfVrf#level_1}
  */
  readonly level1?: boolean | cdktf.IResolvable;
  /**
  * IS-IS level-1 and level-2 routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#level_1_2 RouterOspfVrf#level_1_2}
  */
  readonly level12?: boolean | cdktf.IResolvable;
  /**
  * IS-IS level-2 routes only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#level_2 RouterOspfVrf#level_2}
  */
  readonly level2?: boolean | cdktf.IResolvable;
  /**
  * OSPF exterior metric type for redistributed routes
  *   - Choices: `1`, `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#metric_type RouterOspfVrf#metric_type}
  */
  readonly metricType?: string;
  /**
  * Set tag for routes redistributed into OSPF
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#tag RouterOspfVrf#tag}
  */
  readonly tag?: number;
}

export function routerOspfVrfRedistributeIsisToTerraform(struct?: RouterOspfVrfRedistributeIsis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    level_1: cdktf.booleanToTerraform(struct!.level1),
    level_1_2: cdktf.booleanToTerraform(struct!.level12),
    level_2: cdktf.booleanToTerraform(struct!.level2),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerOspfVrfRedistributeIsisToHclTerraform(struct?: RouterOspfVrfRedistributeIsis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_1: {
      value: cdktf.booleanToHclTerraform(struct!.level1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level_1_2: {
      value: cdktf.booleanToHclTerraform(struct!.level12),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level_2: {
      value: cdktf.booleanToHclTerraform(struct!.level2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfRedistributeIsisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfRedistributeIsis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._level1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.level1 = this._level1;
    }
    if (this._level12 !== undefined) {
      hasAnyValues = true;
      internalValueResult.level12 = this._level12;
    }
    if (this._level2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.level2 = this._level2;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfRedistributeIsis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceName = undefined;
      this._level1 = undefined;
      this._level12 = undefined;
      this._level2 = undefined;
      this._metricType = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceName = value.instanceName;
      this._level1 = value.level1;
      this._level12 = value.level12;
      this._level2 = value.level2;
      this._metricType = value.metricType;
      this._tag = value.tag;
    }
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // level_1 - computed: false, optional: true, required: false
  private _level1?: boolean | cdktf.IResolvable; 
  public get level1() {
    return this.getBooleanAttribute('level_1');
  }
  public set level1(value: boolean | cdktf.IResolvable) {
    this._level1 = value;
  }
  public resetLevel1() {
    this._level1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level1Input() {
    return this._level1;
  }

  // level_1_2 - computed: false, optional: true, required: false
  private _level12?: boolean | cdktf.IResolvable; 
  public get level12() {
    return this.getBooleanAttribute('level_1_2');
  }
  public set level12(value: boolean | cdktf.IResolvable) {
    this._level12 = value;
  }
  public resetLevel12() {
    this._level12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level12Input() {
    return this._level12;
  }

  // level_2 - computed: false, optional: true, required: false
  private _level2?: boolean | cdktf.IResolvable; 
  public get level2() {
    return this.getBooleanAttribute('level_2');
  }
  public set level2(value: boolean | cdktf.IResolvable) {
    this._level2 = value;
  }
  public resetLevel2() {
    this._level2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get level2Input() {
    return this._level2;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterOspfVrfRedistributeIsisList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfRedistributeIsis[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfRedistributeIsisOutputReference {
    return new RouterOspfVrfRedistributeIsisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfVrfRedistributeOspf {
  /**
  * Open Shortest Path First (OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#instance_name RouterOspfVrf#instance_name}
  */
  readonly instanceName: string;
  /**
  * Redistribute OSPF external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#match_external RouterOspfVrf#match_external}
  */
  readonly matchExternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF internal routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#match_internal RouterOspfVrf#match_internal}
  */
  readonly matchInternal?: boolean | cdktf.IResolvable;
  /**
  * Redistribute OSPF NSSA external routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#match_nssa_external RouterOspfVrf#match_nssa_external}
  */
  readonly matchNssaExternal?: boolean | cdktf.IResolvable;
  /**
  * OSPF exterior metric type for redistributed routes
  *   - Choices: `1`, `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#metric_type RouterOspfVrf#metric_type}
  */
  readonly metricType?: string;
  /**
  * Set tag for routes redistributed into OSPF
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#tag RouterOspfVrf#tag}
  */
  readonly tag?: number;
}

export function routerOspfVrfRedistributeOspfToTerraform(struct?: RouterOspfVrfRedistributeOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_name: cdktf.stringToTerraform(struct!.instanceName),
    match_external: cdktf.booleanToTerraform(struct!.matchExternal),
    match_internal: cdktf.booleanToTerraform(struct!.matchInternal),
    match_nssa_external: cdktf.booleanToTerraform(struct!.matchNssaExternal),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerOspfVrfRedistributeOspfToHclTerraform(struct?: RouterOspfVrfRedistributeOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_internal: {
      value: cdktf.booleanToHclTerraform(struct!.matchInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_nssa_external: {
      value: cdktf.booleanToHclTerraform(struct!.matchNssaExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfVrfRedistributeOspfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfVrfRedistributeOspf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._matchExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExternal = this._matchExternal;
    }
    if (this._matchInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchInternal = this._matchInternal;
    }
    if (this._matchNssaExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNssaExternal = this._matchNssaExternal;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfVrfRedistributeOspf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceName = undefined;
      this._matchExternal = undefined;
      this._matchInternal = undefined;
      this._matchNssaExternal = undefined;
      this._metricType = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceName = value.instanceName;
      this._matchExternal = value.matchExternal;
      this._matchInternal = value.matchInternal;
      this._matchNssaExternal = value.matchNssaExternal;
      this._metricType = value.metricType;
      this._tag = value.tag;
    }
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // match_external - computed: false, optional: true, required: false
  private _matchExternal?: boolean | cdktf.IResolvable; 
  public get matchExternal() {
    return this.getBooleanAttribute('match_external');
  }
  public set matchExternal(value: boolean | cdktf.IResolvable) {
    this._matchExternal = value;
  }
  public resetMatchExternal() {
    this._matchExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExternalInput() {
    return this._matchExternal;
  }

  // match_internal - computed: false, optional: true, required: false
  private _matchInternal?: boolean | cdktf.IResolvable; 
  public get matchInternal() {
    return this.getBooleanAttribute('match_internal');
  }
  public set matchInternal(value: boolean | cdktf.IResolvable) {
    this._matchInternal = value;
  }
  public resetMatchInternal() {
    this._matchInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInternalInput() {
    return this._matchInternal;
  }

  // match_nssa_external - computed: false, optional: true, required: false
  private _matchNssaExternal?: boolean | cdktf.IResolvable; 
  public get matchNssaExternal() {
    return this.getBooleanAttribute('match_nssa_external');
  }
  public set matchNssaExternal(value: boolean | cdktf.IResolvable) {
    this._matchNssaExternal = value;
  }
  public resetMatchNssaExternal() {
    this._matchNssaExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNssaExternalInput() {
    return this._matchNssaExternal;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterOspfVrfRedistributeOspfList extends cdktf.ComplexList {
  public internalValue? : RouterOspfVrfRedistributeOspf[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfVrfRedistributeOspfOutputReference {
    return new RouterOspfVrfRedistributeOspfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf iosxr_router_ospf_vrf}
*/
export class RouterOspfVrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_ospf_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspfVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspfVrf to import
  * @param importFromId The id of the existing RouterOspfVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspfVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_ospf_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_ospf_vrf iosxr_router_ospf_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspfVrfConfig
  */
  public constructor(scope: Construct, id: string, config: RouterOspfVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_ospf_vrf',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areas.internalValue = config.areas;
    this._autoCostDisable = config.autoCostDisable;
    this._autoCostReferenceBandwidth = config.autoCostReferenceBandwidth;
    this._bfdFastDetect = config.bfdFastDetect;
    this._bfdMinimumInterval = config.bfdMinimumInterval;
    this._bfdMultiplier = config.bfdMultiplier;
    this._deadInterval = config.deadInterval;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._defaultInformationOriginateAlways = config.defaultInformationOriginateAlways;
    this._defaultInformationOriginateMetricType = config.defaultInformationOriginateMetricType;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._helloInterval = config.helloInterval;
    this._mplsLdpSync = config.mplsLdpSync;
    this._mtuIgnoreDisable = config.mtuIgnoreDisable;
    this._mtuIgnoreEnable = config.mtuIgnoreEnable;
    this._passiveDisable = config.passiveDisable;
    this._passiveEnable = config.passiveEnable;
    this._priority = config.priority;
    this._processName = config.processName;
    this._redistributeBgp.internalValue = config.redistributeBgp;
    this._redistributeConnected = config.redistributeConnected;
    this._redistributeConnectedMetricType = config.redistributeConnectedMetricType;
    this._redistributeConnectedTag = config.redistributeConnectedTag;
    this._redistributeIsis.internalValue = config.redistributeIsis;
    this._redistributeOspf.internalValue = config.redistributeOspf;
    this._redistributeStatic = config.redistributeStatic;
    this._redistributeStaticMetricType = config.redistributeStaticMetricType;
    this._redistributeStaticTag = config.redistributeStaticTag;
    this._routerId = config.routerId;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: false, optional: true, required: false
  private _areas = new RouterOspfVrfAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }
  public putAreas(value: RouterOspfVrfAreas[] | cdktf.IResolvable) {
    this._areas.internalValue = value;
  }
  public resetAreas() {
    this._areas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areasInput() {
    return this._areas.internalValue;
  }

  // auto_cost_disable - computed: false, optional: true, required: false
  private _autoCostDisable?: boolean | cdktf.IResolvable; 
  public get autoCostDisable() {
    return this.getBooleanAttribute('auto_cost_disable');
  }
  public set autoCostDisable(value: boolean | cdktf.IResolvable) {
    this._autoCostDisable = value;
  }
  public resetAutoCostDisable() {
    this._autoCostDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCostDisableInput() {
    return this._autoCostDisable;
  }

  // auto_cost_reference_bandwidth - computed: false, optional: true, required: false
  private _autoCostReferenceBandwidth?: number; 
  public get autoCostReferenceBandwidth() {
    return this.getNumberAttribute('auto_cost_reference_bandwidth');
  }
  public set autoCostReferenceBandwidth(value: number) {
    this._autoCostReferenceBandwidth = value;
  }
  public resetAutoCostReferenceBandwidth() {
    this._autoCostReferenceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCostReferenceBandwidthInput() {
    return this._autoCostReferenceBandwidth;
  }

  // bfd_fast_detect - computed: false, optional: true, required: false
  private _bfdFastDetect?: boolean | cdktf.IResolvable; 
  public get bfdFastDetect() {
    return this.getBooleanAttribute('bfd_fast_detect');
  }
  public set bfdFastDetect(value: boolean | cdktf.IResolvable) {
    this._bfdFastDetect = value;
  }
  public resetBfdFastDetect() {
    this._bfdFastDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectInput() {
    return this._bfdFastDetect;
  }

  // bfd_minimum_interval - computed: false, optional: true, required: false
  private _bfdMinimumInterval?: number; 
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }
  public set bfdMinimumInterval(value: number) {
    this._bfdMinimumInterval = value;
  }
  public resetBfdMinimumInterval() {
    this._bfdMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMinimumIntervalInput() {
    return this._bfdMinimumInterval;
  }

  // bfd_multiplier - computed: false, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate?: boolean | cdktf.IResolvable; 
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // default_information_originate_always - computed: false, optional: true, required: false
  private _defaultInformationOriginateAlways?: boolean | cdktf.IResolvable; 
  public get defaultInformationOriginateAlways() {
    return this.getBooleanAttribute('default_information_originate_always');
  }
  public set defaultInformationOriginateAlways(value: boolean | cdktf.IResolvable) {
    this._defaultInformationOriginateAlways = value;
  }
  public resetDefaultInformationOriginateAlways() {
    this._defaultInformationOriginateAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateAlwaysInput() {
    return this._defaultInformationOriginateAlways;
  }

  // default_information_originate_metric_type - computed: false, optional: true, required: false
  private _defaultInformationOriginateMetricType?: number; 
  public get defaultInformationOriginateMetricType() {
    return this.getNumberAttribute('default_information_originate_metric_type');
  }
  public set defaultInformationOriginateMetricType(value: number) {
    this._defaultInformationOriginateMetricType = value;
  }
  public resetDefaultInformationOriginateMetricType() {
    this._defaultInformationOriginateMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateMetricTypeInput() {
    return this._defaultInformationOriginateMetricType;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mpls_ldp_sync - computed: false, optional: true, required: false
  private _mplsLdpSync?: boolean | cdktf.IResolvable; 
  public get mplsLdpSync() {
    return this.getBooleanAttribute('mpls_ldp_sync');
  }
  public set mplsLdpSync(value: boolean | cdktf.IResolvable) {
    this._mplsLdpSync = value;
  }
  public resetMplsLdpSync() {
    this._mplsLdpSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsLdpSyncInput() {
    return this._mplsLdpSync;
  }

  // mtu_ignore_disable - computed: false, optional: true, required: false
  private _mtuIgnoreDisable?: boolean | cdktf.IResolvable; 
  public get mtuIgnoreDisable() {
    return this.getBooleanAttribute('mtu_ignore_disable');
  }
  public set mtuIgnoreDisable(value: boolean | cdktf.IResolvable) {
    this._mtuIgnoreDisable = value;
  }
  public resetMtuIgnoreDisable() {
    this._mtuIgnoreDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreDisableInput() {
    return this._mtuIgnoreDisable;
  }

  // mtu_ignore_enable - computed: false, optional: true, required: false
  private _mtuIgnoreEnable?: boolean | cdktf.IResolvable; 
  public get mtuIgnoreEnable() {
    return this.getBooleanAttribute('mtu_ignore_enable');
  }
  public set mtuIgnoreEnable(value: boolean | cdktf.IResolvable) {
    this._mtuIgnoreEnable = value;
  }
  public resetMtuIgnoreEnable() {
    this._mtuIgnoreEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreEnableInput() {
    return this._mtuIgnoreEnable;
  }

  // passive_disable - computed: false, optional: true, required: false
  private _passiveDisable?: boolean | cdktf.IResolvable; 
  public get passiveDisable() {
    return this.getBooleanAttribute('passive_disable');
  }
  public set passiveDisable(value: boolean | cdktf.IResolvable) {
    this._passiveDisable = value;
  }
  public resetPassiveDisable() {
    this._passiveDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveDisableInput() {
    return this._passiveDisable;
  }

  // passive_enable - computed: false, optional: true, required: false
  private _passiveEnable?: boolean | cdktf.IResolvable; 
  public get passiveEnable() {
    return this.getBooleanAttribute('passive_enable');
  }
  public set passiveEnable(value: boolean | cdktf.IResolvable) {
    this._passiveEnable = value;
  }
  public resetPassiveEnable() {
    this._passiveEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveEnableInput() {
    return this._passiveEnable;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // process_name - computed: false, optional: false, required: true
  private _processName?: string; 
  public get processName() {
    return this.getStringAttribute('process_name');
  }
  public set processName(value: string) {
    this._processName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processNameInput() {
    return this._processName;
  }

  // redistribute_bgp - computed: false, optional: true, required: false
  private _redistributeBgp = new RouterOspfVrfRedistributeBgpList(this, "redistribute_bgp", false);
  public get redistributeBgp() {
    return this._redistributeBgp;
  }
  public putRedistributeBgp(value: RouterOspfVrfRedistributeBgp[] | cdktf.IResolvable) {
    this._redistributeBgp.internalValue = value;
  }
  public resetRedistributeBgp() {
    this._redistributeBgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeBgpInput() {
    return this._redistributeBgp.internalValue;
  }

  // redistribute_connected - computed: false, optional: true, required: false
  private _redistributeConnected?: boolean | cdktf.IResolvable; 
  public get redistributeConnected() {
    return this.getBooleanAttribute('redistribute_connected');
  }
  public set redistributeConnected(value: boolean | cdktf.IResolvable) {
    this._redistributeConnected = value;
  }
  public resetRedistributeConnected() {
    this._redistributeConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedInput() {
    return this._redistributeConnected;
  }

  // redistribute_connected_metric_type - computed: false, optional: true, required: false
  private _redistributeConnectedMetricType?: string; 
  public get redistributeConnectedMetricType() {
    return this.getStringAttribute('redistribute_connected_metric_type');
  }
  public set redistributeConnectedMetricType(value: string) {
    this._redistributeConnectedMetricType = value;
  }
  public resetRedistributeConnectedMetricType() {
    this._redistributeConnectedMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedMetricTypeInput() {
    return this._redistributeConnectedMetricType;
  }

  // redistribute_connected_tag - computed: false, optional: true, required: false
  private _redistributeConnectedTag?: number; 
  public get redistributeConnectedTag() {
    return this.getNumberAttribute('redistribute_connected_tag');
  }
  public set redistributeConnectedTag(value: number) {
    this._redistributeConnectedTag = value;
  }
  public resetRedistributeConnectedTag() {
    this._redistributeConnectedTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedTagInput() {
    return this._redistributeConnectedTag;
  }

  // redistribute_isis - computed: false, optional: true, required: false
  private _redistributeIsis = new RouterOspfVrfRedistributeIsisList(this, "redistribute_isis", false);
  public get redistributeIsis() {
    return this._redistributeIsis;
  }
  public putRedistributeIsis(value: RouterOspfVrfRedistributeIsis[] | cdktf.IResolvable) {
    this._redistributeIsis.internalValue = value;
  }
  public resetRedistributeIsis() {
    this._redistributeIsis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeIsisInput() {
    return this._redistributeIsis.internalValue;
  }

  // redistribute_ospf - computed: false, optional: true, required: false
  private _redistributeOspf = new RouterOspfVrfRedistributeOspfList(this, "redistribute_ospf", false);
  public get redistributeOspf() {
    return this._redistributeOspf;
  }
  public putRedistributeOspf(value: RouterOspfVrfRedistributeOspf[] | cdktf.IResolvable) {
    this._redistributeOspf.internalValue = value;
  }
  public resetRedistributeOspf() {
    this._redistributeOspf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeOspfInput() {
    return this._redistributeOspf.internalValue;
  }

  // redistribute_static - computed: false, optional: true, required: false
  private _redistributeStatic?: boolean | cdktf.IResolvable; 
  public get redistributeStatic() {
    return this.getBooleanAttribute('redistribute_static');
  }
  public set redistributeStatic(value: boolean | cdktf.IResolvable) {
    this._redistributeStatic = value;
  }
  public resetRedistributeStatic() {
    this._redistributeStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticInput() {
    return this._redistributeStatic;
  }

  // redistribute_static_metric_type - computed: false, optional: true, required: false
  private _redistributeStaticMetricType?: string; 
  public get redistributeStaticMetricType() {
    return this.getStringAttribute('redistribute_static_metric_type');
  }
  public set redistributeStaticMetricType(value: string) {
    this._redistributeStaticMetricType = value;
  }
  public resetRedistributeStaticMetricType() {
    this._redistributeStaticMetricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticMetricTypeInput() {
    return this._redistributeStaticMetricType;
  }

  // redistribute_static_tag - computed: false, optional: true, required: false
  private _redistributeStaticTag?: number; 
  public get redistributeStaticTag() {
    return this.getNumberAttribute('redistribute_static_tag');
  }
  public set redistributeStaticTag(value: number) {
    this._redistributeStaticTag = value;
  }
  public resetRedistributeStaticTag() {
    this._redistributeStaticTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticTagInput() {
    return this._redistributeStaticTag;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      areas: cdktf.listMapper(routerOspfVrfAreasToTerraform, false)(this._areas.internalValue),
      auto_cost_disable: cdktf.booleanToTerraform(this._autoCostDisable),
      auto_cost_reference_bandwidth: cdktf.numberToTerraform(this._autoCostReferenceBandwidth),
      bfd_fast_detect: cdktf.booleanToTerraform(this._bfdFastDetect),
      bfd_minimum_interval: cdktf.numberToTerraform(this._bfdMinimumInterval),
      bfd_multiplier: cdktf.numberToTerraform(this._bfdMultiplier),
      dead_interval: cdktf.numberToTerraform(this._deadInterval),
      default_information_originate: cdktf.booleanToTerraform(this._defaultInformationOriginate),
      default_information_originate_always: cdktf.booleanToTerraform(this._defaultInformationOriginateAlways),
      default_information_originate_metric_type: cdktf.numberToTerraform(this._defaultInformationOriginateMetricType),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      hello_interval: cdktf.numberToTerraform(this._helloInterval),
      mpls_ldp_sync: cdktf.booleanToTerraform(this._mplsLdpSync),
      mtu_ignore_disable: cdktf.booleanToTerraform(this._mtuIgnoreDisable),
      mtu_ignore_enable: cdktf.booleanToTerraform(this._mtuIgnoreEnable),
      passive_disable: cdktf.booleanToTerraform(this._passiveDisable),
      passive_enable: cdktf.booleanToTerraform(this._passiveEnable),
      priority: cdktf.numberToTerraform(this._priority),
      process_name: cdktf.stringToTerraform(this._processName),
      redistribute_bgp: cdktf.listMapper(routerOspfVrfRedistributeBgpToTerraform, false)(this._redistributeBgp.internalValue),
      redistribute_connected: cdktf.booleanToTerraform(this._redistributeConnected),
      redistribute_connected_metric_type: cdktf.stringToTerraform(this._redistributeConnectedMetricType),
      redistribute_connected_tag: cdktf.numberToTerraform(this._redistributeConnectedTag),
      redistribute_isis: cdktf.listMapper(routerOspfVrfRedistributeIsisToTerraform, false)(this._redistributeIsis.internalValue),
      redistribute_ospf: cdktf.listMapper(routerOspfVrfRedistributeOspfToTerraform, false)(this._redistributeOspf.internalValue),
      redistribute_static: cdktf.booleanToTerraform(this._redistributeStatic),
      redistribute_static_metric_type: cdktf.stringToTerraform(this._redistributeStaticMetricType),
      redistribute_static_tag: cdktf.numberToTerraform(this._redistributeStaticTag),
      router_id: cdktf.stringToTerraform(this._routerId),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      areas: {
        value: cdktf.listMapperHcl(routerOspfVrfAreasToHclTerraform, false)(this._areas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfVrfAreasList",
      },
      auto_cost_disable: {
        value: cdktf.booleanToHclTerraform(this._autoCostDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_cost_reference_bandwidth: {
        value: cdktf.numberToHclTerraform(this._autoCostReferenceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_fast_detect: {
        value: cdktf.booleanToHclTerraform(this._bfdFastDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_minimum_interval: {
        value: cdktf.numberToHclTerraform(this._bfdMinimumInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_multiplier: {
        value: cdktf.numberToHclTerraform(this._bfdMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_interval: {
        value: cdktf.numberToHclTerraform(this._deadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_information_originate: {
        value: cdktf.booleanToHclTerraform(this._defaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_information_originate_always: {
        value: cdktf.booleanToHclTerraform(this._defaultInformationOriginateAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_information_originate_metric_type: {
        value: cdktf.numberToHclTerraform(this._defaultInformationOriginateMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_interval: {
        value: cdktf.numberToHclTerraform(this._helloInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpls_ldp_sync: {
        value: cdktf.booleanToHclTerraform(this._mplsLdpSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mtu_ignore_disable: {
        value: cdktf.booleanToHclTerraform(this._mtuIgnoreDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mtu_ignore_enable: {
        value: cdktf.booleanToHclTerraform(this._mtuIgnoreEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passive_disable: {
        value: cdktf.booleanToHclTerraform(this._passiveDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passive_enable: {
        value: cdktf.booleanToHclTerraform(this._passiveEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_name: {
        value: cdktf.stringToHclTerraform(this._processName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_bgp: {
        value: cdktf.listMapperHcl(routerOspfVrfRedistributeBgpToHclTerraform, false)(this._redistributeBgp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfVrfRedistributeBgpList",
      },
      redistribute_connected: {
        value: cdktf.booleanToHclTerraform(this._redistributeConnected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_connected_metric_type: {
        value: cdktf.stringToHclTerraform(this._redistributeConnectedMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_connected_tag: {
        value: cdktf.numberToHclTerraform(this._redistributeConnectedTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redistribute_isis: {
        value: cdktf.listMapperHcl(routerOspfVrfRedistributeIsisToHclTerraform, false)(this._redistributeIsis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfVrfRedistributeIsisList",
      },
      redistribute_ospf: {
        value: cdktf.listMapperHcl(routerOspfVrfRedistributeOspfToHclTerraform, false)(this._redistributeOspf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfVrfRedistributeOspfList",
      },
      redistribute_static: {
        value: cdktf.booleanToHclTerraform(this._redistributeStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redistribute_static_metric_type: {
        value: cdktf.stringToHclTerraform(this._redistributeStaticMetricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_static_tag: {
        value: cdktf.numberToHclTerraform(this._redistributeStaticTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
