// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoOmpFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advertise locally learned routes to OMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#advertise_ipv4_routes CiscoOmpFeatureTemplate#advertise_ipv4_routes}
  */
  readonly advertiseIpv4Routes?: CiscoOmpFeatureTemplateAdvertiseIpv4Routes[] | cdktf.IResolvable;
  /**
  * Advertise locally learned routes to OMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#advertise_ipv6_routes CiscoOmpFeatureTemplate#advertise_ipv6_routes}
  */
  readonly advertiseIpv6Routes?: CiscoOmpFeatureTemplateAdvertiseIpv6Routes[] | cdktf.IResolvable;
  /**
  * Set the time between OMP Update packets
  *   - Range: `0`-`65535`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#advertisement_interval CiscoOmpFeatureTemplate#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#advertisement_interval_variable CiscoOmpFeatureTemplate#advertisement_interval_variable}
  */
  readonly advertisementIntervalVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#description CiscoOmpFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#device_types CiscoOmpFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Set maximum number of OMP paths to install in vEdge route table
  *   - Range: `1`-`16`
  *   - Default value: `4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#ecmp_limit CiscoOmpFeatureTemplate#ecmp_limit}
  */
  readonly ecmpLimit?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#ecmp_limit_variable CiscoOmpFeatureTemplate#ecmp_limit_variable}
  */
  readonly ecmpLimitVariable?: string;
  /**
  * End of RIB timer <1..604800> seconds
  *   - Range: `1`-`3600`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#eor_timer CiscoOmpFeatureTemplate#eor_timer}
  */
  readonly eorTimer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#eor_timer_variable CiscoOmpFeatureTemplate#eor_timer_variable}
  */
  readonly eorTimerVariable?: string;
  /**
  * Enable or disable OMP graceful restart
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#graceful_restart CiscoOmpFeatureTemplate#graceful_restart}
  */
  readonly gracefulRestart?: boolean | cdktf.IResolvable;
  /**
  * Set the OMP graceful restart timer
  *   - Range: `1`-`604800`
  *   - Default value: `43200`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#graceful_restart_timer CiscoOmpFeatureTemplate#graceful_restart_timer}
  */
  readonly gracefulRestartTimer?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#graceful_restart_timer_variable CiscoOmpFeatureTemplate#graceful_restart_timer_variable}
  */
  readonly gracefulRestartTimerVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#graceful_restart_variable CiscoOmpFeatureTemplate#graceful_restart_variable}
  */
  readonly gracefulRestartVariable?: string;
  /**
  * Set how long to wait before closing OMP peer connection
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#holdtime CiscoOmpFeatureTemplate#holdtime}
  */
  readonly holdtime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#holdtime_variable CiscoOmpFeatureTemplate#holdtime_variable}
  */
  readonly holdtimeVariable?: string;
  /**
  * Ignore Region-Path Length During Best-Path Algorithm
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#ignore_region_path_length CiscoOmpFeatureTemplate#ignore_region_path_length}
  */
  readonly ignoreRegionPathLength?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#ignore_region_path_length_variable CiscoOmpFeatureTemplate#ignore_region_path_length_variable}
  */
  readonly ignoreRegionPathLengthVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#name CiscoOmpFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * omp-admin-distance-ipv4
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#omp_admin_distance_ipv4 CiscoOmpFeatureTemplate#omp_admin_distance_ipv4}
  */
  readonly ompAdminDistanceIpv4?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#omp_admin_distance_ipv4_variable CiscoOmpFeatureTemplate#omp_admin_distance_ipv4_variable}
  */
  readonly ompAdminDistanceIpv4Variable?: string;
  /**
  * omp-admin-distance-ipv6
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#omp_admin_distance_ipv6 CiscoOmpFeatureTemplate#omp_admin_distance_ipv6}
  */
  readonly ompAdminDistanceIpv6?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#omp_admin_distance_ipv6_variable CiscoOmpFeatureTemplate#omp_admin_distance_ipv6_variable}
  */
  readonly ompAdminDistanceIpv6Variable?: string;
  /**
  * Set Overlay AS number <1..4294967295> or <XX.YY>
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#overlay_as CiscoOmpFeatureTemplate#overlay_as}
  */
  readonly overlayAs?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#overlay_as_variable CiscoOmpFeatureTemplate#overlay_as_variable}
  */
  readonly overlayAsVariable?: string;
  /**
  * Set number of TLOC routes advertised between vSmart and vEdge
  *   - Range: `1`-`16`
  *   - Default value: `4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#send_path_limit CiscoOmpFeatureTemplate#send_path_limit}
  */
  readonly sendPathLimit?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#send_path_limit_variable CiscoOmpFeatureTemplate#send_path_limit_variable}
  */
  readonly sendPathLimitVariable?: string;
  /**
  * Enable or disable OMP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#shutdown CiscoOmpFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#shutdown_variable CiscoOmpFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Transport gateway path computation
  *   - Choices: `prefer`, `ecmp-with-direct-path`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#transport_gateway CiscoOmpFeatureTemplate#transport_gateway}
  */
  readonly transportGateway?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#transport_gateway_variable CiscoOmpFeatureTemplate#transport_gateway_variable}
  */
  readonly transportGatewayVariable?: string;
}
export interface CiscoOmpFeatureTemplateAdvertiseIpv4Routes {
  /**
  * Advertise OSPF external routes
  *   - Choices: `external`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#advertise_external_ospf CiscoOmpFeatureTemplate#advertise_external_ospf}
  */
  readonly advertiseExternalOspf?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#advertise_external_ospf_variable CiscoOmpFeatureTemplate#advertise_external_ospf_variable}
  */
  readonly advertiseExternalOspfVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#optional CiscoOmpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set routes to advertise
  *   - Choices: `bgp`, `ospf`, `ospfv3`, `connected`, `static`, `eigrp`, `lisp`, `isis`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#protocol CiscoOmpFeatureTemplate#protocol}
  */
  readonly protocol?: string;
}

export function ciscoOmpFeatureTemplateAdvertiseIpv4RoutesToTerraform(struct?: CiscoOmpFeatureTemplateAdvertiseIpv4Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_external_ospf: cdktf.stringToTerraform(struct!.advertiseExternalOspf),
    advertise_external_ospf_variable: cdktf.stringToTerraform(struct!.advertiseExternalOspfVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function ciscoOmpFeatureTemplateAdvertiseIpv4RoutesToHclTerraform(struct?: CiscoOmpFeatureTemplateAdvertiseIpv4Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_external_ospf: {
      value: cdktf.stringToHclTerraform(struct!.advertiseExternalOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advertise_external_ospf_variable: {
      value: cdktf.stringToHclTerraform(struct!.advertiseExternalOspfVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOmpFeatureTemplateAdvertiseIpv4RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoOmpFeatureTemplateAdvertiseIpv4Routes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseExternalOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseExternalOspf = this._advertiseExternalOspf;
    }
    if (this._advertiseExternalOspfVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseExternalOspfVariable = this._advertiseExternalOspfVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOmpFeatureTemplateAdvertiseIpv4Routes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseExternalOspf = undefined;
      this._advertiseExternalOspfVariable = undefined;
      this._optional = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseExternalOspf = value.advertiseExternalOspf;
      this._advertiseExternalOspfVariable = value.advertiseExternalOspfVariable;
      this._optional = value.optional;
      this._protocol = value.protocol;
    }
  }

  // advertise_external_ospf - computed: false, optional: true, required: false
  private _advertiseExternalOspf?: string; 
  public get advertiseExternalOspf() {
    return this.getStringAttribute('advertise_external_ospf');
  }
  public set advertiseExternalOspf(value: string) {
    this._advertiseExternalOspf = value;
  }
  public resetAdvertiseExternalOspf() {
    this._advertiseExternalOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseExternalOspfInput() {
    return this._advertiseExternalOspf;
  }

  // advertise_external_ospf_variable - computed: false, optional: true, required: false
  private _advertiseExternalOspfVariable?: string; 
  public get advertiseExternalOspfVariable() {
    return this.getStringAttribute('advertise_external_ospf_variable');
  }
  public set advertiseExternalOspfVariable(value: string) {
    this._advertiseExternalOspfVariable = value;
  }
  public resetAdvertiseExternalOspfVariable() {
    this._advertiseExternalOspfVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseExternalOspfVariableInput() {
    return this._advertiseExternalOspfVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class CiscoOmpFeatureTemplateAdvertiseIpv4RoutesList extends cdktf.ComplexList {
  public internalValue? : CiscoOmpFeatureTemplateAdvertiseIpv4Routes[] | cdktf.IResolvable

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
  public get(index: number): CiscoOmpFeatureTemplateAdvertiseIpv4RoutesOutputReference {
    return new CiscoOmpFeatureTemplateAdvertiseIpv4RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoOmpFeatureTemplateAdvertiseIpv6Routes {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#optional CiscoOmpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set routes to advertise
  *   - Choices: `bgp`, `ospf`, `connected`, `static`, `eigrp`, `lisp`, `isis`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#protocol CiscoOmpFeatureTemplate#protocol}
  */
  readonly protocol?: string;
}

export function ciscoOmpFeatureTemplateAdvertiseIpv6RoutesToTerraform(struct?: CiscoOmpFeatureTemplateAdvertiseIpv6Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function ciscoOmpFeatureTemplateAdvertiseIpv6RoutesToHclTerraform(struct?: CiscoOmpFeatureTemplateAdvertiseIpv6Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoOmpFeatureTemplateAdvertiseIpv6RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoOmpFeatureTemplateAdvertiseIpv6Routes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoOmpFeatureTemplateAdvertiseIpv6Routes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
    }
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class CiscoOmpFeatureTemplateAdvertiseIpv6RoutesList extends cdktf.ComplexList {
  public internalValue? : CiscoOmpFeatureTemplateAdvertiseIpv6Routes[] | cdktf.IResolvable

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
  public get(index: number): CiscoOmpFeatureTemplateAdvertiseIpv6RoutesOutputReference {
    return new CiscoOmpFeatureTemplateAdvertiseIpv6RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template sdwan_cisco_omp_feature_template}
*/
export class CiscoOmpFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_omp_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoOmpFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoOmpFeatureTemplate to import
  * @param importFromId The id of the existing CiscoOmpFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoOmpFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_omp_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_omp_feature_template sdwan_cisco_omp_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoOmpFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoOmpFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_omp_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertiseIpv4Routes.internalValue = config.advertiseIpv4Routes;
    this._advertiseIpv6Routes.internalValue = config.advertiseIpv6Routes;
    this._advertisementInterval = config.advertisementInterval;
    this._advertisementIntervalVariable = config.advertisementIntervalVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._ecmpLimit = config.ecmpLimit;
    this._ecmpLimitVariable = config.ecmpLimitVariable;
    this._eorTimer = config.eorTimer;
    this._eorTimerVariable = config.eorTimerVariable;
    this._gracefulRestart = config.gracefulRestart;
    this._gracefulRestartTimer = config.gracefulRestartTimer;
    this._gracefulRestartTimerVariable = config.gracefulRestartTimerVariable;
    this._gracefulRestartVariable = config.gracefulRestartVariable;
    this._holdtime = config.holdtime;
    this._holdtimeVariable = config.holdtimeVariable;
    this._ignoreRegionPathLength = config.ignoreRegionPathLength;
    this._ignoreRegionPathLengthVariable = config.ignoreRegionPathLengthVariable;
    this._name = config.name;
    this._ompAdminDistanceIpv4 = config.ompAdminDistanceIpv4;
    this._ompAdminDistanceIpv4Variable = config.ompAdminDistanceIpv4Variable;
    this._ompAdminDistanceIpv6 = config.ompAdminDistanceIpv6;
    this._ompAdminDistanceIpv6Variable = config.ompAdminDistanceIpv6Variable;
    this._overlayAs = config.overlayAs;
    this._overlayAsVariable = config.overlayAsVariable;
    this._sendPathLimit = config.sendPathLimit;
    this._sendPathLimitVariable = config.sendPathLimitVariable;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._transportGateway = config.transportGateway;
    this._transportGatewayVariable = config.transportGatewayVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_ipv4_routes - computed: false, optional: true, required: false
  private _advertiseIpv4Routes = new CiscoOmpFeatureTemplateAdvertiseIpv4RoutesList(this, "advertise_ipv4_routes", false);
  public get advertiseIpv4Routes() {
    return this._advertiseIpv4Routes;
  }
  public putAdvertiseIpv4Routes(value: CiscoOmpFeatureTemplateAdvertiseIpv4Routes[] | cdktf.IResolvable) {
    this._advertiseIpv4Routes.internalValue = value;
  }
  public resetAdvertiseIpv4Routes() {
    this._advertiseIpv4Routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv4RoutesInput() {
    return this._advertiseIpv4Routes.internalValue;
  }

  // advertise_ipv6_routes - computed: false, optional: true, required: false
  private _advertiseIpv6Routes = new CiscoOmpFeatureTemplateAdvertiseIpv6RoutesList(this, "advertise_ipv6_routes", false);
  public get advertiseIpv6Routes() {
    return this._advertiseIpv6Routes;
  }
  public putAdvertiseIpv6Routes(value: CiscoOmpFeatureTemplateAdvertiseIpv6Routes[] | cdktf.IResolvable) {
    this._advertiseIpv6Routes.internalValue = value;
  }
  public resetAdvertiseIpv6Routes() {
    this._advertiseIpv6Routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseIpv6RoutesInput() {
    return this._advertiseIpv6Routes.internalValue;
  }

  // advertisement_interval - computed: false, optional: true, required: false
  private _advertisementInterval?: number; 
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }
  public set advertisementInterval(value: number) {
    this._advertisementInterval = value;
  }
  public resetAdvertisementInterval() {
    this._advertisementInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalInput() {
    return this._advertisementInterval;
  }

  // advertisement_interval_variable - computed: false, optional: true, required: false
  private _advertisementIntervalVariable?: string; 
  public get advertisementIntervalVariable() {
    return this.getStringAttribute('advertisement_interval_variable');
  }
  public set advertisementIntervalVariable(value: string) {
    this._advertisementIntervalVariable = value;
  }
  public resetAdvertisementIntervalVariable() {
    this._advertisementIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalVariableInput() {
    return this._advertisementIntervalVariable;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // ecmp_limit - computed: false, optional: true, required: false
  private _ecmpLimit?: number; 
  public get ecmpLimit() {
    return this.getNumberAttribute('ecmp_limit');
  }
  public set ecmpLimit(value: number) {
    this._ecmpLimit = value;
  }
  public resetEcmpLimit() {
    this._ecmpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpLimitInput() {
    return this._ecmpLimit;
  }

  // ecmp_limit_variable - computed: false, optional: true, required: false
  private _ecmpLimitVariable?: string; 
  public get ecmpLimitVariable() {
    return this.getStringAttribute('ecmp_limit_variable');
  }
  public set ecmpLimitVariable(value: string) {
    this._ecmpLimitVariable = value;
  }
  public resetEcmpLimitVariable() {
    this._ecmpLimitVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpLimitVariableInput() {
    return this._ecmpLimitVariable;
  }

  // eor_timer - computed: false, optional: true, required: false
  private _eorTimer?: number; 
  public get eorTimer() {
    return this.getNumberAttribute('eor_timer');
  }
  public set eorTimer(value: number) {
    this._eorTimer = value;
  }
  public resetEorTimer() {
    this._eorTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eorTimerInput() {
    return this._eorTimer;
  }

  // eor_timer_variable - computed: false, optional: true, required: false
  private _eorTimerVariable?: string; 
  public get eorTimerVariable() {
    return this.getStringAttribute('eor_timer_variable');
  }
  public set eorTimerVariable(value: string) {
    this._eorTimerVariable = value;
  }
  public resetEorTimerVariable() {
    this._eorTimerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eorTimerVariableInput() {
    return this._eorTimerVariable;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart?: boolean | cdktf.IResolvable; 
  public get gracefulRestart() {
    return this.getBooleanAttribute('graceful_restart');
  }
  public set gracefulRestart(value: boolean | cdktf.IResolvable) {
    this._gracefulRestart = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart;
  }

  // graceful_restart_timer - computed: false, optional: true, required: false
  private _gracefulRestartTimer?: number; 
  public get gracefulRestartTimer() {
    return this.getNumberAttribute('graceful_restart_timer');
  }
  public set gracefulRestartTimer(value: number) {
    this._gracefulRestartTimer = value;
  }
  public resetGracefulRestartTimer() {
    this._gracefulRestartTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartTimerInput() {
    return this._gracefulRestartTimer;
  }

  // graceful_restart_timer_variable - computed: false, optional: true, required: false
  private _gracefulRestartTimerVariable?: string; 
  public get gracefulRestartTimerVariable() {
    return this.getStringAttribute('graceful_restart_timer_variable');
  }
  public set gracefulRestartTimerVariable(value: string) {
    this._gracefulRestartTimerVariable = value;
  }
  public resetGracefulRestartTimerVariable() {
    this._gracefulRestartTimerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartTimerVariableInput() {
    return this._gracefulRestartTimerVariable;
  }

  // graceful_restart_variable - computed: false, optional: true, required: false
  private _gracefulRestartVariable?: string; 
  public get gracefulRestartVariable() {
    return this.getStringAttribute('graceful_restart_variable');
  }
  public set gracefulRestartVariable(value: string) {
    this._gracefulRestartVariable = value;
  }
  public resetGracefulRestartVariable() {
    this._gracefulRestartVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartVariableInput() {
    return this._gracefulRestartVariable;
  }

  // holdtime - computed: false, optional: true, required: false
  private _holdtime?: number; 
  public get holdtime() {
    return this.getNumberAttribute('holdtime');
  }
  public set holdtime(value: number) {
    this._holdtime = value;
  }
  public resetHoldtime() {
    this._holdtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeInput() {
    return this._holdtime;
  }

  // holdtime_variable - computed: false, optional: true, required: false
  private _holdtimeVariable?: string; 
  public get holdtimeVariable() {
    return this.getStringAttribute('holdtime_variable');
  }
  public set holdtimeVariable(value: string) {
    this._holdtimeVariable = value;
  }
  public resetHoldtimeVariable() {
    this._holdtimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeVariableInput() {
    return this._holdtimeVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_region_path_length - computed: false, optional: true, required: false
  private _ignoreRegionPathLength?: boolean | cdktf.IResolvable; 
  public get ignoreRegionPathLength() {
    return this.getBooleanAttribute('ignore_region_path_length');
  }
  public set ignoreRegionPathLength(value: boolean | cdktf.IResolvable) {
    this._ignoreRegionPathLength = value;
  }
  public resetIgnoreRegionPathLength() {
    this._ignoreRegionPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRegionPathLengthInput() {
    return this._ignoreRegionPathLength;
  }

  // ignore_region_path_length_variable - computed: false, optional: true, required: false
  private _ignoreRegionPathLengthVariable?: string; 
  public get ignoreRegionPathLengthVariable() {
    return this.getStringAttribute('ignore_region_path_length_variable');
  }
  public set ignoreRegionPathLengthVariable(value: string) {
    this._ignoreRegionPathLengthVariable = value;
  }
  public resetIgnoreRegionPathLengthVariable() {
    this._ignoreRegionPathLengthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRegionPathLengthVariableInput() {
    return this._ignoreRegionPathLengthVariable;
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

  // omp_admin_distance_ipv4 - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv4?: number; 
  public get ompAdminDistanceIpv4() {
    return this.getNumberAttribute('omp_admin_distance_ipv4');
  }
  public set ompAdminDistanceIpv4(value: number) {
    this._ompAdminDistanceIpv4 = value;
  }
  public resetOmpAdminDistanceIpv4() {
    this._ompAdminDistanceIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv4Input() {
    return this._ompAdminDistanceIpv4;
  }

  // omp_admin_distance_ipv4_variable - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv4Variable?: string; 
  public get ompAdminDistanceIpv4Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv4_variable');
  }
  public set ompAdminDistanceIpv4Variable(value: string) {
    this._ompAdminDistanceIpv4Variable = value;
  }
  public resetOmpAdminDistanceIpv4Variable() {
    this._ompAdminDistanceIpv4Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv4VariableInput() {
    return this._ompAdminDistanceIpv4Variable;
  }

  // omp_admin_distance_ipv6 - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv6?: number; 
  public get ompAdminDistanceIpv6() {
    return this.getNumberAttribute('omp_admin_distance_ipv6');
  }
  public set ompAdminDistanceIpv6(value: number) {
    this._ompAdminDistanceIpv6 = value;
  }
  public resetOmpAdminDistanceIpv6() {
    this._ompAdminDistanceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv6Input() {
    return this._ompAdminDistanceIpv6;
  }

  // omp_admin_distance_ipv6_variable - computed: false, optional: true, required: false
  private _ompAdminDistanceIpv6Variable?: string; 
  public get ompAdminDistanceIpv6Variable() {
    return this.getStringAttribute('omp_admin_distance_ipv6_variable');
  }
  public set ompAdminDistanceIpv6Variable(value: string) {
    this._ompAdminDistanceIpv6Variable = value;
  }
  public resetOmpAdminDistanceIpv6Variable() {
    this._ompAdminDistanceIpv6Variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ompAdminDistanceIpv6VariableInput() {
    return this._ompAdminDistanceIpv6Variable;
  }

  // overlay_as - computed: false, optional: true, required: false
  private _overlayAs?: number; 
  public get overlayAs() {
    return this.getNumberAttribute('overlay_as');
  }
  public set overlayAs(value: number) {
    this._overlayAs = value;
  }
  public resetOverlayAs() {
    this._overlayAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayAsInput() {
    return this._overlayAs;
  }

  // overlay_as_variable - computed: false, optional: true, required: false
  private _overlayAsVariable?: string; 
  public get overlayAsVariable() {
    return this.getStringAttribute('overlay_as_variable');
  }
  public set overlayAsVariable(value: string) {
    this._overlayAsVariable = value;
  }
  public resetOverlayAsVariable() {
    this._overlayAsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayAsVariableInput() {
    return this._overlayAsVariable;
  }

  // send_path_limit - computed: false, optional: true, required: false
  private _sendPathLimit?: number; 
  public get sendPathLimit() {
    return this.getNumberAttribute('send_path_limit');
  }
  public set sendPathLimit(value: number) {
    this._sendPathLimit = value;
  }
  public resetSendPathLimit() {
    this._sendPathLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPathLimitInput() {
    return this._sendPathLimit;
  }

  // send_path_limit_variable - computed: false, optional: true, required: false
  private _sendPathLimitVariable?: string; 
  public get sendPathLimitVariable() {
    return this.getStringAttribute('send_path_limit_variable');
  }
  public set sendPathLimitVariable(value: string) {
    this._sendPathLimitVariable = value;
  }
  public resetSendPathLimitVariable() {
    this._sendPathLimitVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPathLimitVariableInput() {
    return this._sendPathLimitVariable;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // transport_gateway - computed: false, optional: true, required: false
  private _transportGateway?: string; 
  public get transportGateway() {
    return this.getStringAttribute('transport_gateway');
  }
  public set transportGateway(value: string) {
    this._transportGateway = value;
  }
  public resetTransportGateway() {
    this._transportGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportGatewayInput() {
    return this._transportGateway;
  }

  // transport_gateway_variable - computed: false, optional: true, required: false
  private _transportGatewayVariable?: string; 
  public get transportGatewayVariable() {
    return this.getStringAttribute('transport_gateway_variable');
  }
  public set transportGatewayVariable(value: string) {
    this._transportGatewayVariable = value;
  }
  public resetTransportGatewayVariable() {
    this._transportGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportGatewayVariableInput() {
    return this._transportGatewayVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_ipv4_routes: cdktf.listMapper(ciscoOmpFeatureTemplateAdvertiseIpv4RoutesToTerraform, false)(this._advertiseIpv4Routes.internalValue),
      advertise_ipv6_routes: cdktf.listMapper(ciscoOmpFeatureTemplateAdvertiseIpv6RoutesToTerraform, false)(this._advertiseIpv6Routes.internalValue),
      advertisement_interval: cdktf.numberToTerraform(this._advertisementInterval),
      advertisement_interval_variable: cdktf.stringToTerraform(this._advertisementIntervalVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      ecmp_limit: cdktf.numberToTerraform(this._ecmpLimit),
      ecmp_limit_variable: cdktf.stringToTerraform(this._ecmpLimitVariable),
      eor_timer: cdktf.numberToTerraform(this._eorTimer),
      eor_timer_variable: cdktf.stringToTerraform(this._eorTimerVariable),
      graceful_restart: cdktf.booleanToTerraform(this._gracefulRestart),
      graceful_restart_timer: cdktf.numberToTerraform(this._gracefulRestartTimer),
      graceful_restart_timer_variable: cdktf.stringToTerraform(this._gracefulRestartTimerVariable),
      graceful_restart_variable: cdktf.stringToTerraform(this._gracefulRestartVariable),
      holdtime: cdktf.numberToTerraform(this._holdtime),
      holdtime_variable: cdktf.stringToTerraform(this._holdtimeVariable),
      ignore_region_path_length: cdktf.booleanToTerraform(this._ignoreRegionPathLength),
      ignore_region_path_length_variable: cdktf.stringToTerraform(this._ignoreRegionPathLengthVariable),
      name: cdktf.stringToTerraform(this._name),
      omp_admin_distance_ipv4: cdktf.numberToTerraform(this._ompAdminDistanceIpv4),
      omp_admin_distance_ipv4_variable: cdktf.stringToTerraform(this._ompAdminDistanceIpv4Variable),
      omp_admin_distance_ipv6: cdktf.numberToTerraform(this._ompAdminDistanceIpv6),
      omp_admin_distance_ipv6_variable: cdktf.stringToTerraform(this._ompAdminDistanceIpv6Variable),
      overlay_as: cdktf.numberToTerraform(this._overlayAs),
      overlay_as_variable: cdktf.stringToTerraform(this._overlayAsVariable),
      send_path_limit: cdktf.numberToTerraform(this._sendPathLimit),
      send_path_limit_variable: cdktf.stringToTerraform(this._sendPathLimitVariable),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      transport_gateway: cdktf.stringToTerraform(this._transportGateway),
      transport_gateway_variable: cdktf.stringToTerraform(this._transportGatewayVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_ipv4_routes: {
        value: cdktf.listMapperHcl(ciscoOmpFeatureTemplateAdvertiseIpv4RoutesToHclTerraform, false)(this._advertiseIpv4Routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOmpFeatureTemplateAdvertiseIpv4RoutesList",
      },
      advertise_ipv6_routes: {
        value: cdktf.listMapperHcl(ciscoOmpFeatureTemplateAdvertiseIpv6RoutesToHclTerraform, false)(this._advertiseIpv6Routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoOmpFeatureTemplateAdvertiseIpv6RoutesList",
      },
      advertisement_interval: {
        value: cdktf.numberToHclTerraform(this._advertisementInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      advertisement_interval_variable: {
        value: cdktf.stringToHclTerraform(this._advertisementIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ecmp_limit: {
        value: cdktf.numberToHclTerraform(this._ecmpLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ecmp_limit_variable: {
        value: cdktf.stringToHclTerraform(this._ecmpLimitVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eor_timer: {
        value: cdktf.numberToHclTerraform(this._eorTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eor_timer_variable: {
        value: cdktf.stringToHclTerraform(this._eorTimerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart: {
        value: cdktf.booleanToHclTerraform(this._gracefulRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graceful_restart_timer: {
        value: cdktf.numberToHclTerraform(this._gracefulRestartTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      graceful_restart_timer_variable: {
        value: cdktf.stringToHclTerraform(this._gracefulRestartTimerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart_variable: {
        value: cdktf.stringToHclTerraform(this._gracefulRestartVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      holdtime: {
        value: cdktf.numberToHclTerraform(this._holdtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      holdtime_variable: {
        value: cdktf.stringToHclTerraform(this._holdtimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_region_path_length: {
        value: cdktf.booleanToHclTerraform(this._ignoreRegionPathLength),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_region_path_length_variable: {
        value: cdktf.stringToHclTerraform(this._ignoreRegionPathLengthVariable),
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
      omp_admin_distance_ipv4: {
        value: cdktf.numberToHclTerraform(this._ompAdminDistanceIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      omp_admin_distance_ipv4_variable: {
        value: cdktf.stringToHclTerraform(this._ompAdminDistanceIpv4Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      omp_admin_distance_ipv6: {
        value: cdktf.numberToHclTerraform(this._ompAdminDistanceIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      omp_admin_distance_ipv6_variable: {
        value: cdktf.stringToHclTerraform(this._ompAdminDistanceIpv6Variable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlay_as: {
        value: cdktf.numberToHclTerraform(this._overlayAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      overlay_as_variable: {
        value: cdktf.stringToHclTerraform(this._overlayAsVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_path_limit: {
        value: cdktf.numberToHclTerraform(this._sendPathLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_path_limit_variable: {
        value: cdktf.stringToHclTerraform(this._sendPathLimitVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_variable: {
        value: cdktf.stringToHclTerraform(this._shutdownVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_gateway: {
        value: cdktf.stringToHclTerraform(this._transportGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_gateway_variable: {
        value: cdktf.stringToHclTerraform(this._transportGatewayVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
