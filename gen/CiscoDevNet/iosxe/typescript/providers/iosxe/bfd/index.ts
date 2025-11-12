// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BfdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#delete_mode Bfd#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#device Bfd#device}
  */
  readonly device?: string;
  /**
  * IPv4 Address Family with vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#ipv4_both_vrfs Bfd#ipv4_both_vrfs}
  */
  readonly ipv4BothVrfs?: BfdIpv4BothVrfs[] | cdktf.IResolvable;
  /**
  * IPv4 Address Family with vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#ipv4_with_dst_vrfs Bfd#ipv4_with_dst_vrfs}
  */
  readonly ipv4WithDstVrfs?: BfdIpv4WithDstVrfs[] | cdktf.IResolvable;
  /**
  * IPv4 Address Family with vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#ipv4_with_src_vrfs Bfd#ipv4_with_src_vrfs}
  */
  readonly ipv4WithSrcVrfs?: BfdIpv4WithSrcVrfs[] | cdktf.IResolvable;
  /**
  * IPv4 Address Family with vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#ipv4_without_vrfs Bfd#ipv4_without_vrfs}
  */
  readonly ipv4WithoutVrfs?: BfdIpv4WithoutVrfs[] | cdktf.IResolvable;
  /**
  * IPv6 Address Family with vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#ipv6_with_both_vrfs Bfd#ipv6_with_both_vrfs}
  */
  readonly ipv6WithBothVrfs?: BfdIpv6WithBothVrfs[] | cdktf.IResolvable;
  /**
  * IPv6 Address Family with vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#ipv6_with_dst_vrfs Bfd#ipv6_with_dst_vrfs}
  */
  readonly ipv6WithDstVrfs?: BfdIpv6WithDstVrfs[] | cdktf.IResolvable;
  /**
  * IPv6 Address Family with vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#ipv6_with_src_vrfs Bfd#ipv6_with_src_vrfs}
  */
  readonly ipv6WithSrcVrfs?: BfdIpv6WithSrcVrfs[] | cdktf.IResolvable;
  /**
  * IPv6 Address Family with vrf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#ipv6_without_vrfs Bfd#ipv6_without_vrfs}
  */
  readonly ipv6WithoutVrfs?: BfdIpv6WithoutVrfs[] | cdktf.IResolvable;
  /**
  * Value in ms to use for slow timers
  *   - Range: `1000`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#slow_timers Bfd#slow_timers}
  */
  readonly slowTimers?: number;
}
export interface BfdIpv4BothVrfs {
  /**
  * Destination IP prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dest_ip Bfd#dest_ip}
  */
  readonly destIp: string;
  /**
  * Destination VRF instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dst_vrf Bfd#dst_vrf}
  */
  readonly dstVrf: string;
  /**
  * Source IP prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_ip Bfd#src_ip}
  */
  readonly srcIp: string;
  /**
  * source VRF instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_vrf Bfd#src_vrf}
  */
  readonly srcVrf: string;
  /**
  * BFD template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#template_name Bfd#template_name}
  */
  readonly templateName: string;
}

export function bfdIpv4BothVrfsToTerraform(struct?: BfdIpv4BothVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip: cdktf.stringToTerraform(struct!.destIp),
    dst_vrf: cdktf.stringToTerraform(struct!.dstVrf),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
    src_vrf: cdktf.stringToTerraform(struct!.srcVrf),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function bfdIpv4BothVrfsToHclTerraform(struct?: BfdIpv4BothVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ip: {
      value: cdktf.stringToHclTerraform(struct!.destIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_vrf: {
      value: cdktf.stringToHclTerraform(struct!.dstVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_vrf: {
      value: cdktf.stringToHclTerraform(struct!.srcVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BfdIpv4BothVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BfdIpv4BothVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIp = this._destIp;
    }
    if (this._dstVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstVrf = this._dstVrf;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._srcVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcVrf = this._srcVrf;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BfdIpv4BothVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destIp = undefined;
      this._dstVrf = undefined;
      this._srcIp = undefined;
      this._srcVrf = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destIp = value.destIp;
      this._dstVrf = value.dstVrf;
      this._srcIp = value.srcIp;
      this._srcVrf = value.srcVrf;
      this._templateName = value.templateName;
    }
  }

  // dest_ip - computed: false, optional: false, required: true
  private _destIp?: string; 
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }
  public set destIp(value: string) {
    this._destIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpInput() {
    return this._destIp;
  }

  // dst_vrf - computed: false, optional: false, required: true
  private _dstVrf?: string; 
  public get dstVrf() {
    return this.getStringAttribute('dst_vrf');
  }
  public set dstVrf(value: string) {
    this._dstVrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstVrfInput() {
    return this._dstVrf;
  }

  // src_ip - computed: false, optional: false, required: true
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_vrf - computed: false, optional: false, required: true
  private _srcVrf?: string; 
  public get srcVrf() {
    return this.getStringAttribute('src_vrf');
  }
  public set srcVrf(value: string) {
    this._srcVrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcVrfInput() {
    return this._srcVrf;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class BfdIpv4BothVrfsList extends cdktf.ComplexList {
  public internalValue? : BfdIpv4BothVrfs[] | cdktf.IResolvable

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
  public get(index: number): BfdIpv4BothVrfsOutputReference {
    return new BfdIpv4BothVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BfdIpv4WithDstVrfs {
  /**
  * Destination IP prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dest_ip Bfd#dest_ip}
  */
  readonly destIp: string;
  /**
  * Destination VRF instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dst_vrf Bfd#dst_vrf}
  */
  readonly dstVrf: string;
  /**
  * Source IP prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_ip Bfd#src_ip}
  */
  readonly srcIp: string;
  /**
  * BFD template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#template_name Bfd#template_name}
  */
  readonly templateName: string;
}

export function bfdIpv4WithDstVrfsToTerraform(struct?: BfdIpv4WithDstVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip: cdktf.stringToTerraform(struct!.destIp),
    dst_vrf: cdktf.stringToTerraform(struct!.dstVrf),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function bfdIpv4WithDstVrfsToHclTerraform(struct?: BfdIpv4WithDstVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ip: {
      value: cdktf.stringToHclTerraform(struct!.destIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_vrf: {
      value: cdktf.stringToHclTerraform(struct!.dstVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BfdIpv4WithDstVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BfdIpv4WithDstVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIp = this._destIp;
    }
    if (this._dstVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstVrf = this._dstVrf;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BfdIpv4WithDstVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destIp = undefined;
      this._dstVrf = undefined;
      this._srcIp = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destIp = value.destIp;
      this._dstVrf = value.dstVrf;
      this._srcIp = value.srcIp;
      this._templateName = value.templateName;
    }
  }

  // dest_ip - computed: false, optional: false, required: true
  private _destIp?: string; 
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }
  public set destIp(value: string) {
    this._destIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpInput() {
    return this._destIp;
  }

  // dst_vrf - computed: false, optional: false, required: true
  private _dstVrf?: string; 
  public get dstVrf() {
    return this.getStringAttribute('dst_vrf');
  }
  public set dstVrf(value: string) {
    this._dstVrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstVrfInput() {
    return this._dstVrf;
  }

  // src_ip - computed: false, optional: false, required: true
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class BfdIpv4WithDstVrfsList extends cdktf.ComplexList {
  public internalValue? : BfdIpv4WithDstVrfs[] | cdktf.IResolvable

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
  public get(index: number): BfdIpv4WithDstVrfsOutputReference {
    return new BfdIpv4WithDstVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BfdIpv4WithSrcVrfs {
  /**
  * Destination IP prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dest_ip Bfd#dest_ip}
  */
  readonly destIp: string;
  /**
  * Source IP prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_ip Bfd#src_ip}
  */
  readonly srcIp: string;
  /**
  * source VRF instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_vrf Bfd#src_vrf}
  */
  readonly srcVrf: string;
  /**
  * BFD template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#template_name Bfd#template_name}
  */
  readonly templateName: string;
}

export function bfdIpv4WithSrcVrfsToTerraform(struct?: BfdIpv4WithSrcVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip: cdktf.stringToTerraform(struct!.destIp),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
    src_vrf: cdktf.stringToTerraform(struct!.srcVrf),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function bfdIpv4WithSrcVrfsToHclTerraform(struct?: BfdIpv4WithSrcVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ip: {
      value: cdktf.stringToHclTerraform(struct!.destIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_vrf: {
      value: cdktf.stringToHclTerraform(struct!.srcVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BfdIpv4WithSrcVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BfdIpv4WithSrcVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIp = this._destIp;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._srcVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcVrf = this._srcVrf;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BfdIpv4WithSrcVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destIp = undefined;
      this._srcIp = undefined;
      this._srcVrf = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destIp = value.destIp;
      this._srcIp = value.srcIp;
      this._srcVrf = value.srcVrf;
      this._templateName = value.templateName;
    }
  }

  // dest_ip - computed: false, optional: false, required: true
  private _destIp?: string; 
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }
  public set destIp(value: string) {
    this._destIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpInput() {
    return this._destIp;
  }

  // src_ip - computed: false, optional: false, required: true
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_vrf - computed: false, optional: false, required: true
  private _srcVrf?: string; 
  public get srcVrf() {
    return this.getStringAttribute('src_vrf');
  }
  public set srcVrf(value: string) {
    this._srcVrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcVrfInput() {
    return this._srcVrf;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class BfdIpv4WithSrcVrfsList extends cdktf.ComplexList {
  public internalValue? : BfdIpv4WithSrcVrfs[] | cdktf.IResolvable

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
  public get(index: number): BfdIpv4WithSrcVrfsOutputReference {
    return new BfdIpv4WithSrcVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BfdIpv4WithoutVrfs {
  /**
  * Destination IP prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dest_ip Bfd#dest_ip}
  */
  readonly destIp: string;
  /**
  * Source IP prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_ip Bfd#src_ip}
  */
  readonly srcIp: string;
  /**
  * BFD template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#template_name Bfd#template_name}
  */
  readonly templateName: string;
}

export function bfdIpv4WithoutVrfsToTerraform(struct?: BfdIpv4WithoutVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ip: cdktf.stringToTerraform(struct!.destIp),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function bfdIpv4WithoutVrfsToHclTerraform(struct?: BfdIpv4WithoutVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ip: {
      value: cdktf.stringToHclTerraform(struct!.destIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BfdIpv4WithoutVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BfdIpv4WithoutVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIp = this._destIp;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BfdIpv4WithoutVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destIp = undefined;
      this._srcIp = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destIp = value.destIp;
      this._srcIp = value.srcIp;
      this._templateName = value.templateName;
    }
  }

  // dest_ip - computed: false, optional: false, required: true
  private _destIp?: string; 
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }
  public set destIp(value: string) {
    this._destIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpInput() {
    return this._destIp;
  }

  // src_ip - computed: false, optional: false, required: true
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class BfdIpv4WithoutVrfsList extends cdktf.ComplexList {
  public internalValue? : BfdIpv4WithoutVrfs[] | cdktf.IResolvable

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
  public get(index: number): BfdIpv4WithoutVrfsOutputReference {
    return new BfdIpv4WithoutVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BfdIpv6WithBothVrfs {
  /**
  * Destination IPv6 prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dest_ipv6 Bfd#dest_ipv6}
  */
  readonly destIpv6: string;
  /**
  * Destination VRF instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dst_vrf Bfd#dst_vrf}
  */
  readonly dstVrf: string;
  /**
  * Source IPv6 prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_ipv6 Bfd#src_ipv6}
  */
  readonly srcIpv6: string;
  /**
  * source VRF instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_vrf Bfd#src_vrf}
  */
  readonly srcVrf: string;
  /**
  * BFD template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#template_name Bfd#template_name}
  */
  readonly templateName: string;
}

export function bfdIpv6WithBothVrfsToTerraform(struct?: BfdIpv6WithBothVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ipv6: cdktf.stringToTerraform(struct!.destIpv6),
    dst_vrf: cdktf.stringToTerraform(struct!.dstVrf),
    src_ipv6: cdktf.stringToTerraform(struct!.srcIpv6),
    src_vrf: cdktf.stringToTerraform(struct!.srcVrf),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function bfdIpv6WithBothVrfsToHclTerraform(struct?: BfdIpv6WithBothVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.destIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_vrf: {
      value: cdktf.stringToHclTerraform(struct!.dstVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_vrf: {
      value: cdktf.stringToHclTerraform(struct!.srcVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BfdIpv6WithBothVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BfdIpv6WithBothVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpv6 = this._destIpv6;
    }
    if (this._dstVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstVrf = this._dstVrf;
    }
    if (this._srcIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6 = this._srcIpv6;
    }
    if (this._srcVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcVrf = this._srcVrf;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BfdIpv6WithBothVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destIpv6 = undefined;
      this._dstVrf = undefined;
      this._srcIpv6 = undefined;
      this._srcVrf = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destIpv6 = value.destIpv6;
      this._dstVrf = value.dstVrf;
      this._srcIpv6 = value.srcIpv6;
      this._srcVrf = value.srcVrf;
      this._templateName = value.templateName;
    }
  }

  // dest_ipv6 - computed: false, optional: false, required: true
  private _destIpv6?: string; 
  public get destIpv6() {
    return this.getStringAttribute('dest_ipv6');
  }
  public set destIpv6(value: string) {
    this._destIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpv6Input() {
    return this._destIpv6;
  }

  // dst_vrf - computed: false, optional: false, required: true
  private _dstVrf?: string; 
  public get dstVrf() {
    return this.getStringAttribute('dst_vrf');
  }
  public set dstVrf(value: string) {
    this._dstVrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstVrfInput() {
    return this._dstVrf;
  }

  // src_ipv6 - computed: false, optional: false, required: true
  private _srcIpv6?: string; 
  public get srcIpv6() {
    return this.getStringAttribute('src_ipv6');
  }
  public set srcIpv6(value: string) {
    this._srcIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6Input() {
    return this._srcIpv6;
  }

  // src_vrf - computed: false, optional: false, required: true
  private _srcVrf?: string; 
  public get srcVrf() {
    return this.getStringAttribute('src_vrf');
  }
  public set srcVrf(value: string) {
    this._srcVrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcVrfInput() {
    return this._srcVrf;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class BfdIpv6WithBothVrfsList extends cdktf.ComplexList {
  public internalValue? : BfdIpv6WithBothVrfs[] | cdktf.IResolvable

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
  public get(index: number): BfdIpv6WithBothVrfsOutputReference {
    return new BfdIpv6WithBothVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BfdIpv6WithDstVrfs {
  /**
  * Destination IPv6 prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dest_ipv6 Bfd#dest_ipv6}
  */
  readonly destIpv6: string;
  /**
  * Destination VRF instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dst_vrf Bfd#dst_vrf}
  */
  readonly dstVrf: string;
  /**
  * Source IPv6 prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_ipv6 Bfd#src_ipv6}
  */
  readonly srcIpv6: string;
  /**
  * BFD template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#template_name Bfd#template_name}
  */
  readonly templateName: string;
}

export function bfdIpv6WithDstVrfsToTerraform(struct?: BfdIpv6WithDstVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ipv6: cdktf.stringToTerraform(struct!.destIpv6),
    dst_vrf: cdktf.stringToTerraform(struct!.dstVrf),
    src_ipv6: cdktf.stringToTerraform(struct!.srcIpv6),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function bfdIpv6WithDstVrfsToHclTerraform(struct?: BfdIpv6WithDstVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.destIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_vrf: {
      value: cdktf.stringToHclTerraform(struct!.dstVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BfdIpv6WithDstVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BfdIpv6WithDstVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpv6 = this._destIpv6;
    }
    if (this._dstVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstVrf = this._dstVrf;
    }
    if (this._srcIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6 = this._srcIpv6;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BfdIpv6WithDstVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destIpv6 = undefined;
      this._dstVrf = undefined;
      this._srcIpv6 = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destIpv6 = value.destIpv6;
      this._dstVrf = value.dstVrf;
      this._srcIpv6 = value.srcIpv6;
      this._templateName = value.templateName;
    }
  }

  // dest_ipv6 - computed: false, optional: false, required: true
  private _destIpv6?: string; 
  public get destIpv6() {
    return this.getStringAttribute('dest_ipv6');
  }
  public set destIpv6(value: string) {
    this._destIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpv6Input() {
    return this._destIpv6;
  }

  // dst_vrf - computed: false, optional: false, required: true
  private _dstVrf?: string; 
  public get dstVrf() {
    return this.getStringAttribute('dst_vrf');
  }
  public set dstVrf(value: string) {
    this._dstVrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstVrfInput() {
    return this._dstVrf;
  }

  // src_ipv6 - computed: false, optional: false, required: true
  private _srcIpv6?: string; 
  public get srcIpv6() {
    return this.getStringAttribute('src_ipv6');
  }
  public set srcIpv6(value: string) {
    this._srcIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6Input() {
    return this._srcIpv6;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class BfdIpv6WithDstVrfsList extends cdktf.ComplexList {
  public internalValue? : BfdIpv6WithDstVrfs[] | cdktf.IResolvable

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
  public get(index: number): BfdIpv6WithDstVrfsOutputReference {
    return new BfdIpv6WithDstVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BfdIpv6WithSrcVrfs {
  /**
  * Destination IPv6 prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dest_ipv6 Bfd#dest_ipv6}
  */
  readonly destIpv6: string;
  /**
  * Source IPv6 prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_ipv6 Bfd#src_ipv6}
  */
  readonly srcIpv6: string;
  /**
  * source VRF instance name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_vrf Bfd#src_vrf}
  */
  readonly srcVrf: string;
  /**
  * BFD template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#template_name Bfd#template_name}
  */
  readonly templateName: string;
}

export function bfdIpv6WithSrcVrfsToTerraform(struct?: BfdIpv6WithSrcVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ipv6: cdktf.stringToTerraform(struct!.destIpv6),
    src_ipv6: cdktf.stringToTerraform(struct!.srcIpv6),
    src_vrf: cdktf.stringToTerraform(struct!.srcVrf),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function bfdIpv6WithSrcVrfsToHclTerraform(struct?: BfdIpv6WithSrcVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.destIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_vrf: {
      value: cdktf.stringToHclTerraform(struct!.srcVrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BfdIpv6WithSrcVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BfdIpv6WithSrcVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpv6 = this._destIpv6;
    }
    if (this._srcIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6 = this._srcIpv6;
    }
    if (this._srcVrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcVrf = this._srcVrf;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BfdIpv6WithSrcVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destIpv6 = undefined;
      this._srcIpv6 = undefined;
      this._srcVrf = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destIpv6 = value.destIpv6;
      this._srcIpv6 = value.srcIpv6;
      this._srcVrf = value.srcVrf;
      this._templateName = value.templateName;
    }
  }

  // dest_ipv6 - computed: false, optional: false, required: true
  private _destIpv6?: string; 
  public get destIpv6() {
    return this.getStringAttribute('dest_ipv6');
  }
  public set destIpv6(value: string) {
    this._destIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpv6Input() {
    return this._destIpv6;
  }

  // src_ipv6 - computed: false, optional: false, required: true
  private _srcIpv6?: string; 
  public get srcIpv6() {
    return this.getStringAttribute('src_ipv6');
  }
  public set srcIpv6(value: string) {
    this._srcIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6Input() {
    return this._srcIpv6;
  }

  // src_vrf - computed: false, optional: false, required: true
  private _srcVrf?: string; 
  public get srcVrf() {
    return this.getStringAttribute('src_vrf');
  }
  public set srcVrf(value: string) {
    this._srcVrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcVrfInput() {
    return this._srcVrf;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class BfdIpv6WithSrcVrfsList extends cdktf.ComplexList {
  public internalValue? : BfdIpv6WithSrcVrfs[] | cdktf.IResolvable

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
  public get(index: number): BfdIpv6WithSrcVrfsOutputReference {
    return new BfdIpv6WithSrcVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BfdIpv6WithoutVrfs {
  /**
  * Destination IPv6 prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#dest_ipv6 Bfd#dest_ipv6}
  */
  readonly destIpv6: string;
  /**
  * Source IPv6 prefix/len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#src_ipv6 Bfd#src_ipv6}
  */
  readonly srcIpv6: string;
  /**
  * BFD template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#template_name Bfd#template_name}
  */
  readonly templateName: string;
}

export function bfdIpv6WithoutVrfsToTerraform(struct?: BfdIpv6WithoutVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_ipv6: cdktf.stringToTerraform(struct!.destIpv6),
    src_ipv6: cdktf.stringToTerraform(struct!.srcIpv6),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function bfdIpv6WithoutVrfsToHclTerraform(struct?: BfdIpv6WithoutVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.destIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.srcIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BfdIpv6WithoutVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BfdIpv6WithoutVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destIpv6 = this._destIpv6;
    }
    if (this._srcIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpv6 = this._srcIpv6;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BfdIpv6WithoutVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destIpv6 = undefined;
      this._srcIpv6 = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destIpv6 = value.destIpv6;
      this._srcIpv6 = value.srcIpv6;
      this._templateName = value.templateName;
    }
  }

  // dest_ipv6 - computed: false, optional: false, required: true
  private _destIpv6?: string; 
  public get destIpv6() {
    return this.getStringAttribute('dest_ipv6');
  }
  public set destIpv6(value: string) {
    this._destIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpv6Input() {
    return this._destIpv6;
  }

  // src_ipv6 - computed: false, optional: false, required: true
  private _srcIpv6?: string; 
  public get srcIpv6() {
    return this.getStringAttribute('src_ipv6');
  }
  public set srcIpv6(value: string) {
    this._srcIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpv6Input() {
    return this._srcIpv6;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class BfdIpv6WithoutVrfsList extends cdktf.ComplexList {
  public internalValue? : BfdIpv6WithoutVrfs[] | cdktf.IResolvable

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
  public get(index: number): BfdIpv6WithoutVrfsOutputReference {
    return new BfdIpv6WithoutVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd iosxe_bfd}
*/
export class Bfd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bfd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bfd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bfd to import
  * @param importFromId The id of the existing Bfd that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bfd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bfd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bfd iosxe_bfd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BfdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BfdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bfd',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._ipv4BothVrfs.internalValue = config.ipv4BothVrfs;
    this._ipv4WithDstVrfs.internalValue = config.ipv4WithDstVrfs;
    this._ipv4WithSrcVrfs.internalValue = config.ipv4WithSrcVrfs;
    this._ipv4WithoutVrfs.internalValue = config.ipv4WithoutVrfs;
    this._ipv6WithBothVrfs.internalValue = config.ipv6WithBothVrfs;
    this._ipv6WithDstVrfs.internalValue = config.ipv6WithDstVrfs;
    this._ipv6WithSrcVrfs.internalValue = config.ipv6WithSrcVrfs;
    this._ipv6WithoutVrfs.internalValue = config.ipv6WithoutVrfs;
    this._slowTimers = config.slowTimers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_both_vrfs - computed: false, optional: true, required: false
  private _ipv4BothVrfs = new BfdIpv4BothVrfsList(this, "ipv4_both_vrfs", false);
  public get ipv4BothVrfs() {
    return this._ipv4BothVrfs;
  }
  public putIpv4BothVrfs(value: BfdIpv4BothVrfs[] | cdktf.IResolvable) {
    this._ipv4BothVrfs.internalValue = value;
  }
  public resetIpv4BothVrfs() {
    this._ipv4BothVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4BothVrfsInput() {
    return this._ipv4BothVrfs.internalValue;
  }

  // ipv4_with_dst_vrfs - computed: false, optional: true, required: false
  private _ipv4WithDstVrfs = new BfdIpv4WithDstVrfsList(this, "ipv4_with_dst_vrfs", false);
  public get ipv4WithDstVrfs() {
    return this._ipv4WithDstVrfs;
  }
  public putIpv4WithDstVrfs(value: BfdIpv4WithDstVrfs[] | cdktf.IResolvable) {
    this._ipv4WithDstVrfs.internalValue = value;
  }
  public resetIpv4WithDstVrfs() {
    this._ipv4WithDstVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4WithDstVrfsInput() {
    return this._ipv4WithDstVrfs.internalValue;
  }

  // ipv4_with_src_vrfs - computed: false, optional: true, required: false
  private _ipv4WithSrcVrfs = new BfdIpv4WithSrcVrfsList(this, "ipv4_with_src_vrfs", false);
  public get ipv4WithSrcVrfs() {
    return this._ipv4WithSrcVrfs;
  }
  public putIpv4WithSrcVrfs(value: BfdIpv4WithSrcVrfs[] | cdktf.IResolvable) {
    this._ipv4WithSrcVrfs.internalValue = value;
  }
  public resetIpv4WithSrcVrfs() {
    this._ipv4WithSrcVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4WithSrcVrfsInput() {
    return this._ipv4WithSrcVrfs.internalValue;
  }

  // ipv4_without_vrfs - computed: false, optional: true, required: false
  private _ipv4WithoutVrfs = new BfdIpv4WithoutVrfsList(this, "ipv4_without_vrfs", false);
  public get ipv4WithoutVrfs() {
    return this._ipv4WithoutVrfs;
  }
  public putIpv4WithoutVrfs(value: BfdIpv4WithoutVrfs[] | cdktf.IResolvable) {
    this._ipv4WithoutVrfs.internalValue = value;
  }
  public resetIpv4WithoutVrfs() {
    this._ipv4WithoutVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4WithoutVrfsInput() {
    return this._ipv4WithoutVrfs.internalValue;
  }

  // ipv6_with_both_vrfs - computed: false, optional: true, required: false
  private _ipv6WithBothVrfs = new BfdIpv6WithBothVrfsList(this, "ipv6_with_both_vrfs", false);
  public get ipv6WithBothVrfs() {
    return this._ipv6WithBothVrfs;
  }
  public putIpv6WithBothVrfs(value: BfdIpv6WithBothVrfs[] | cdktf.IResolvable) {
    this._ipv6WithBothVrfs.internalValue = value;
  }
  public resetIpv6WithBothVrfs() {
    this._ipv6WithBothVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6WithBothVrfsInput() {
    return this._ipv6WithBothVrfs.internalValue;
  }

  // ipv6_with_dst_vrfs - computed: false, optional: true, required: false
  private _ipv6WithDstVrfs = new BfdIpv6WithDstVrfsList(this, "ipv6_with_dst_vrfs", false);
  public get ipv6WithDstVrfs() {
    return this._ipv6WithDstVrfs;
  }
  public putIpv6WithDstVrfs(value: BfdIpv6WithDstVrfs[] | cdktf.IResolvable) {
    this._ipv6WithDstVrfs.internalValue = value;
  }
  public resetIpv6WithDstVrfs() {
    this._ipv6WithDstVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6WithDstVrfsInput() {
    return this._ipv6WithDstVrfs.internalValue;
  }

  // ipv6_with_src_vrfs - computed: false, optional: true, required: false
  private _ipv6WithSrcVrfs = new BfdIpv6WithSrcVrfsList(this, "ipv6_with_src_vrfs", false);
  public get ipv6WithSrcVrfs() {
    return this._ipv6WithSrcVrfs;
  }
  public putIpv6WithSrcVrfs(value: BfdIpv6WithSrcVrfs[] | cdktf.IResolvable) {
    this._ipv6WithSrcVrfs.internalValue = value;
  }
  public resetIpv6WithSrcVrfs() {
    this._ipv6WithSrcVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6WithSrcVrfsInput() {
    return this._ipv6WithSrcVrfs.internalValue;
  }

  // ipv6_without_vrfs - computed: false, optional: true, required: false
  private _ipv6WithoutVrfs = new BfdIpv6WithoutVrfsList(this, "ipv6_without_vrfs", false);
  public get ipv6WithoutVrfs() {
    return this._ipv6WithoutVrfs;
  }
  public putIpv6WithoutVrfs(value: BfdIpv6WithoutVrfs[] | cdktf.IResolvable) {
    this._ipv6WithoutVrfs.internalValue = value;
  }
  public resetIpv6WithoutVrfs() {
    this._ipv6WithoutVrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6WithoutVrfsInput() {
    return this._ipv6WithoutVrfs.internalValue;
  }

  // slow_timers - computed: false, optional: true, required: false
  private _slowTimers?: number; 
  public get slowTimers() {
    return this.getNumberAttribute('slow_timers');
  }
  public set slowTimers(value: number) {
    this._slowTimers = value;
  }
  public resetSlowTimers() {
    this._slowTimers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowTimersInput() {
    return this._slowTimers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      ipv4_both_vrfs: cdktf.listMapper(bfdIpv4BothVrfsToTerraform, false)(this._ipv4BothVrfs.internalValue),
      ipv4_with_dst_vrfs: cdktf.listMapper(bfdIpv4WithDstVrfsToTerraform, false)(this._ipv4WithDstVrfs.internalValue),
      ipv4_with_src_vrfs: cdktf.listMapper(bfdIpv4WithSrcVrfsToTerraform, false)(this._ipv4WithSrcVrfs.internalValue),
      ipv4_without_vrfs: cdktf.listMapper(bfdIpv4WithoutVrfsToTerraform, false)(this._ipv4WithoutVrfs.internalValue),
      ipv6_with_both_vrfs: cdktf.listMapper(bfdIpv6WithBothVrfsToTerraform, false)(this._ipv6WithBothVrfs.internalValue),
      ipv6_with_dst_vrfs: cdktf.listMapper(bfdIpv6WithDstVrfsToTerraform, false)(this._ipv6WithDstVrfs.internalValue),
      ipv6_with_src_vrfs: cdktf.listMapper(bfdIpv6WithSrcVrfsToTerraform, false)(this._ipv6WithSrcVrfs.internalValue),
      ipv6_without_vrfs: cdktf.listMapper(bfdIpv6WithoutVrfsToTerraform, false)(this._ipv6WithoutVrfs.internalValue),
      slow_timers: cdktf.numberToTerraform(this._slowTimers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ipv4_both_vrfs: {
        value: cdktf.listMapperHcl(bfdIpv4BothVrfsToHclTerraform, false)(this._ipv4BothVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BfdIpv4BothVrfsList",
      },
      ipv4_with_dst_vrfs: {
        value: cdktf.listMapperHcl(bfdIpv4WithDstVrfsToHclTerraform, false)(this._ipv4WithDstVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BfdIpv4WithDstVrfsList",
      },
      ipv4_with_src_vrfs: {
        value: cdktf.listMapperHcl(bfdIpv4WithSrcVrfsToHclTerraform, false)(this._ipv4WithSrcVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BfdIpv4WithSrcVrfsList",
      },
      ipv4_without_vrfs: {
        value: cdktf.listMapperHcl(bfdIpv4WithoutVrfsToHclTerraform, false)(this._ipv4WithoutVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BfdIpv4WithoutVrfsList",
      },
      ipv6_with_both_vrfs: {
        value: cdktf.listMapperHcl(bfdIpv6WithBothVrfsToHclTerraform, false)(this._ipv6WithBothVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BfdIpv6WithBothVrfsList",
      },
      ipv6_with_dst_vrfs: {
        value: cdktf.listMapperHcl(bfdIpv6WithDstVrfsToHclTerraform, false)(this._ipv6WithDstVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BfdIpv6WithDstVrfsList",
      },
      ipv6_with_src_vrfs: {
        value: cdktf.listMapperHcl(bfdIpv6WithSrcVrfsToHclTerraform, false)(this._ipv6WithSrcVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BfdIpv6WithSrcVrfsList",
      },
      ipv6_without_vrfs: {
        value: cdktf.listMapperHcl(bfdIpv6WithoutVrfsToHclTerraform, false)(this._ipv6WithoutVrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BfdIpv6WithoutVrfsList",
      },
      slow_timers: {
        value: cdktf.numberToHclTerraform(this._slowTimers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
