// https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallFilteringNetworkServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#description FirewallFilteringNetworkService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#is_name_l10n_tag FirewallFilteringNetworkService#is_name_l10n_tag}
  */
  readonly isNameL10NTag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#name FirewallFilteringNetworkService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#tag FirewallFilteringNetworkService#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#type FirewallFilteringNetworkService#type}
  */
  readonly type?: string;
  /**
  * dest_tcp_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#dest_tcp_ports FirewallFilteringNetworkService#dest_tcp_ports}
  */
  readonly destTcpPorts?: FirewallFilteringNetworkServiceDestTcpPorts[] | cdktf.IResolvable;
  /**
  * dest_udp_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#dest_udp_ports FirewallFilteringNetworkService#dest_udp_ports}
  */
  readonly destUdpPorts?: FirewallFilteringNetworkServiceDestUdpPorts[] | cdktf.IResolvable;
  /**
  * src_tcp_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#src_tcp_ports FirewallFilteringNetworkService#src_tcp_ports}
  */
  readonly srcTcpPorts?: FirewallFilteringNetworkServiceSrcTcpPorts[] | cdktf.IResolvable;
  /**
  * src_udp_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#src_udp_ports FirewallFilteringNetworkService#src_udp_ports}
  */
  readonly srcUdpPorts?: FirewallFilteringNetworkServiceSrcUdpPorts[] | cdktf.IResolvable;
}
export interface FirewallFilteringNetworkServiceDestTcpPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#end FirewallFilteringNetworkService#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#start FirewallFilteringNetworkService#start}
  */
  readonly start?: number;
}

export function firewallFilteringNetworkServiceDestTcpPortsToTerraform(struct?: FirewallFilteringNetworkServiceDestTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function firewallFilteringNetworkServiceDestTcpPortsToHclTerraform(struct?: FirewallFilteringNetworkServiceDestTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringNetworkServiceDestTcpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallFilteringNetworkServiceDestTcpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringNetworkServiceDestTcpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class FirewallFilteringNetworkServiceDestTcpPortsList extends cdktf.ComplexList {
  public internalValue? : FirewallFilteringNetworkServiceDestTcpPorts[] | cdktf.IResolvable

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
  public get(index: number): FirewallFilteringNetworkServiceDestTcpPortsOutputReference {
    return new FirewallFilteringNetworkServiceDestTcpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallFilteringNetworkServiceDestUdpPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#end FirewallFilteringNetworkService#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#start FirewallFilteringNetworkService#start}
  */
  readonly start?: number;
}

export function firewallFilteringNetworkServiceDestUdpPortsToTerraform(struct?: FirewallFilteringNetworkServiceDestUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function firewallFilteringNetworkServiceDestUdpPortsToHclTerraform(struct?: FirewallFilteringNetworkServiceDestUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringNetworkServiceDestUdpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallFilteringNetworkServiceDestUdpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringNetworkServiceDestUdpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class FirewallFilteringNetworkServiceDestUdpPortsList extends cdktf.ComplexList {
  public internalValue? : FirewallFilteringNetworkServiceDestUdpPorts[] | cdktf.IResolvable

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
  public get(index: number): FirewallFilteringNetworkServiceDestUdpPortsOutputReference {
    return new FirewallFilteringNetworkServiceDestUdpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallFilteringNetworkServiceSrcTcpPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#end FirewallFilteringNetworkService#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#start FirewallFilteringNetworkService#start}
  */
  readonly start?: number;
}

export function firewallFilteringNetworkServiceSrcTcpPortsToTerraform(struct?: FirewallFilteringNetworkServiceSrcTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function firewallFilteringNetworkServiceSrcTcpPortsToHclTerraform(struct?: FirewallFilteringNetworkServiceSrcTcpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringNetworkServiceSrcTcpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallFilteringNetworkServiceSrcTcpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringNetworkServiceSrcTcpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class FirewallFilteringNetworkServiceSrcTcpPortsList extends cdktf.ComplexList {
  public internalValue? : FirewallFilteringNetworkServiceSrcTcpPorts[] | cdktf.IResolvable

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
  public get(index: number): FirewallFilteringNetworkServiceSrcTcpPortsOutputReference {
    return new FirewallFilteringNetworkServiceSrcTcpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallFilteringNetworkServiceSrcUdpPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#end FirewallFilteringNetworkService#end}
  */
  readonly end?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#start FirewallFilteringNetworkService#start}
  */
  readonly start?: number;
}

export function firewallFilteringNetworkServiceSrcUdpPortsToTerraform(struct?: FirewallFilteringNetworkServiceSrcUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function firewallFilteringNetworkServiceSrcUdpPortsToHclTerraform(struct?: FirewallFilteringNetworkServiceSrcUdpPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallFilteringNetworkServiceSrcUdpPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallFilteringNetworkServiceSrcUdpPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallFilteringNetworkServiceSrcUdpPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class FirewallFilteringNetworkServiceSrcUdpPortsList extends cdktf.ComplexList {
  public internalValue? : FirewallFilteringNetworkServiceSrcUdpPorts[] | cdktf.IResolvable

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
  public get(index: number): FirewallFilteringNetworkServiceSrcUdpPortsOutputReference {
    return new FirewallFilteringNetworkServiceSrcUdpPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service zia_firewall_filtering_network_service}
*/
export class FirewallFilteringNetworkService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_firewall_filtering_network_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallFilteringNetworkService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallFilteringNetworkService to import
  * @param importFromId The id of the existing FirewallFilteringNetworkService that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallFilteringNetworkService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_firewall_filtering_network_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/firewall_filtering_network_service zia_firewall_filtering_network_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallFilteringNetworkServiceConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallFilteringNetworkServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_firewall_filtering_network_service',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.5',
        providerVersionConstraint: '4.6.5'
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
    this._isNameL10NTag = config.isNameL10NTag;
    this._name = config.name;
    this._tag = config.tag;
    this._type = config.type;
    this._destTcpPorts.internalValue = config.destTcpPorts;
    this._destUdpPorts.internalValue = config.destUdpPorts;
    this._srcTcpPorts.internalValue = config.srcTcpPorts;
    this._srcUdpPorts.internalValue = config.srcUdpPorts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_name_l10n_tag - computed: false, optional: true, required: false
  private _isNameL10NTag?: boolean | cdktf.IResolvable; 
  public get isNameL10NTag() {
    return this.getBooleanAttribute('is_name_l10n_tag');
  }
  public set isNameL10NTag(value: boolean | cdktf.IResolvable) {
    this._isNameL10NTag = value;
  }
  public resetIsNameL10NTag() {
    this._isNameL10NTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNameL10NTagInput() {
    return this._isNameL10NTag;
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

  // network_service_id - computed: true, optional: false, required: false
  public get networkServiceId() {
    return this.getNumberAttribute('network_service_id');
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // dest_tcp_ports - computed: false, optional: true, required: false
  private _destTcpPorts = new FirewallFilteringNetworkServiceDestTcpPortsList(this, "dest_tcp_ports", true);
  public get destTcpPorts() {
    return this._destTcpPorts;
  }
  public putDestTcpPorts(value: FirewallFilteringNetworkServiceDestTcpPorts[] | cdktf.IResolvable) {
    this._destTcpPorts.internalValue = value;
  }
  public resetDestTcpPorts() {
    this._destTcpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destTcpPortsInput() {
    return this._destTcpPorts.internalValue;
  }

  // dest_udp_ports - computed: false, optional: true, required: false
  private _destUdpPorts = new FirewallFilteringNetworkServiceDestUdpPortsList(this, "dest_udp_ports", true);
  public get destUdpPorts() {
    return this._destUdpPorts;
  }
  public putDestUdpPorts(value: FirewallFilteringNetworkServiceDestUdpPorts[] | cdktf.IResolvable) {
    this._destUdpPorts.internalValue = value;
  }
  public resetDestUdpPorts() {
    this._destUdpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destUdpPortsInput() {
    return this._destUdpPorts.internalValue;
  }

  // src_tcp_ports - computed: false, optional: true, required: false
  private _srcTcpPorts = new FirewallFilteringNetworkServiceSrcTcpPortsList(this, "src_tcp_ports", true);
  public get srcTcpPorts() {
    return this._srcTcpPorts;
  }
  public putSrcTcpPorts(value: FirewallFilteringNetworkServiceSrcTcpPorts[] | cdktf.IResolvable) {
    this._srcTcpPorts.internalValue = value;
  }
  public resetSrcTcpPorts() {
    this._srcTcpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpPortsInput() {
    return this._srcTcpPorts.internalValue;
  }

  // src_udp_ports - computed: false, optional: true, required: false
  private _srcUdpPorts = new FirewallFilteringNetworkServiceSrcUdpPortsList(this, "src_udp_ports", true);
  public get srcUdpPorts() {
    return this._srcUdpPorts;
  }
  public putSrcUdpPorts(value: FirewallFilteringNetworkServiceSrcUdpPorts[] | cdktf.IResolvable) {
    this._srcUdpPorts.internalValue = value;
  }
  public resetSrcUdpPorts() {
    this._srcUdpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpPortsInput() {
    return this._srcUdpPorts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      is_name_l10n_tag: cdktf.booleanToTerraform(this._isNameL10NTag),
      name: cdktf.stringToTerraform(this._name),
      tag: cdktf.stringToTerraform(this._tag),
      type: cdktf.stringToTerraform(this._type),
      dest_tcp_ports: cdktf.listMapper(firewallFilteringNetworkServiceDestTcpPortsToTerraform, true)(this._destTcpPorts.internalValue),
      dest_udp_ports: cdktf.listMapper(firewallFilteringNetworkServiceDestUdpPortsToTerraform, true)(this._destUdpPorts.internalValue),
      src_tcp_ports: cdktf.listMapper(firewallFilteringNetworkServiceSrcTcpPortsToTerraform, true)(this._srcTcpPorts.internalValue),
      src_udp_ports: cdktf.listMapper(firewallFilteringNetworkServiceSrcUdpPortsToTerraform, true)(this._srcUdpPorts.internalValue),
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
      is_name_l10n_tag: {
        value: cdktf.booleanToHclTerraform(this._isNameL10NTag),
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
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_tcp_ports: {
        value: cdktf.listMapperHcl(firewallFilteringNetworkServiceDestTcpPortsToHclTerraform, true)(this._destTcpPorts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringNetworkServiceDestTcpPortsList",
      },
      dest_udp_ports: {
        value: cdktf.listMapperHcl(firewallFilteringNetworkServiceDestUdpPortsToHclTerraform, true)(this._destUdpPorts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringNetworkServiceDestUdpPortsList",
      },
      src_tcp_ports: {
        value: cdktf.listMapperHcl(firewallFilteringNetworkServiceSrcTcpPortsToHclTerraform, true)(this._srcTcpPorts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringNetworkServiceSrcTcpPortsList",
      },
      src_udp_ports: {
        value: cdktf.listMapperHcl(firewallFilteringNetworkServiceSrcUdpPortsToHclTerraform, true)(this._srcUdpPorts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallFilteringNetworkServiceSrcUdpPortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
