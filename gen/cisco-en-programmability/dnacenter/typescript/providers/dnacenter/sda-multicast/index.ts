// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdaMulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#id SdaMulticast#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#parameters SdaMulticast#parameters}
  */
  readonly parameters?: SdaMulticastParameters[] | cdktf.IResolvable;
}
export interface SdaMulticastItemMulticastVnInfoSsmInfo {
}

export function sdaMulticastItemMulticastVnInfoSsmInfoToTerraform(struct?: SdaMulticastItemMulticastVnInfoSsmInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaMulticastItemMulticastVnInfoSsmInfoToHclTerraform(struct?: SdaMulticastItemMulticastVnInfoSsmInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaMulticastItemMulticastVnInfoSsmInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaMulticastItemMulticastVnInfoSsmInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaMulticastItemMulticastVnInfoSsmInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ssm_group_range - computed: true, optional: false, required: false
  public get ssmGroupRange() {
    return this.getStringAttribute('ssm_group_range');
  }

  // ssm_wildcard_mask - computed: true, optional: false, required: false
  public get ssmWildcardMask() {
    return this.getStringAttribute('ssm_wildcard_mask');
  }
}

export class SdaMulticastItemMulticastVnInfoSsmInfoList extends cdktf.ComplexList {

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
  public get(index: number): SdaMulticastItemMulticastVnInfoSsmInfoOutputReference {
    return new SdaMulticastItemMulticastVnInfoSsmInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaMulticastItemMulticastVnInfo {
}

export function sdaMulticastItemMulticastVnInfoToTerraform(struct?: SdaMulticastItemMulticastVnInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaMulticastItemMulticastVnInfoToHclTerraform(struct?: SdaMulticastItemMulticastVnInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaMulticastItemMulticastVnInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaMulticastItemMulticastVnInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaMulticastItemMulticastVnInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_rp_ip_address - computed: true, optional: false, required: false
  public get externalRpIpAddress() {
    return this.getStringAttribute('external_rp_ip_address');
  }

  // internal_rp_ip_address - computed: true, optional: false, required: false
  public get internalRpIpAddress() {
    return this.getListAttribute('internal_rp_ip_address');
  }

  // ip_pool_name - computed: true, optional: false, required: false
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }

  // ssm_info - computed: true, optional: false, required: false
  private _ssmInfo = new SdaMulticastItemMulticastVnInfoSsmInfoList(this, "ssm_info", false);
  public get ssmInfo() {
    return this._ssmInfo;
  }

  // virtual_network_name - computed: true, optional: false, required: false
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
}

export class SdaMulticastItemMulticastVnInfoList extends cdktf.ComplexList {

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
  public get(index: number): SdaMulticastItemMulticastVnInfoOutputReference {
    return new SdaMulticastItemMulticastVnInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaMulticastItem {
}

export function sdaMulticastItemToTerraform(struct?: SdaMulticastItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sdaMulticastItemToHclTerraform(struct?: SdaMulticastItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SdaMulticastItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SdaMulticastItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaMulticastItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // multicast_method - computed: true, optional: false, required: false
  public get multicastMethod() {
    return this.getStringAttribute('multicast_method');
  }

  // multicast_type - computed: true, optional: false, required: false
  public get multicastType() {
    return this.getStringAttribute('multicast_type');
  }

  // multicast_vn_info - computed: true, optional: false, required: false
  private _multicastVnInfo = new SdaMulticastItemMulticastVnInfoList(this, "multicast_vn_info", false);
  public get multicastVnInfo() {
    return this._multicastVnInfo;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class SdaMulticastItemList extends cdktf.ComplexList {

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
  public get(index: number): SdaMulticastItemOutputReference {
    return new SdaMulticastItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaMulticastParametersMulticastVnInfoSsmInfo {
  /**
  * Valid SSM group range ip address(e.g., 230.0.0.0)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#ssm_group_range SdaMulticast#ssm_group_range}
  */
  readonly ssmGroupRange?: string;
  /**
  * Valid SSM Wildcard Mask ip address(e.g.,0.255.255.255)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#ssm_wildcard_mask SdaMulticast#ssm_wildcard_mask}
  */
  readonly ssmWildcardMask?: string;
}

export function sdaMulticastParametersMulticastVnInfoSsmInfoToTerraform(struct?: SdaMulticastParametersMulticastVnInfoSsmInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssm_group_range: cdktf.stringToTerraform(struct!.ssmGroupRange),
    ssm_wildcard_mask: cdktf.stringToTerraform(struct!.ssmWildcardMask),
  }
}


export function sdaMulticastParametersMulticastVnInfoSsmInfoToHclTerraform(struct?: SdaMulticastParametersMulticastVnInfoSsmInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssm_group_range: {
      value: cdktf.stringToHclTerraform(struct!.ssmGroupRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssm_wildcard_mask: {
      value: cdktf.stringToHclTerraform(struct!.ssmWildcardMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaMulticastParametersMulticastVnInfoSsmInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaMulticastParametersMulticastVnInfoSsmInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssmGroupRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmGroupRange = this._ssmGroupRange;
    }
    if (this._ssmWildcardMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmWildcardMask = this._ssmWildcardMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaMulticastParametersMulticastVnInfoSsmInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssmGroupRange = undefined;
      this._ssmWildcardMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssmGroupRange = value.ssmGroupRange;
      this._ssmWildcardMask = value.ssmWildcardMask;
    }
  }

  // ssm_group_range - computed: true, optional: true, required: false
  private _ssmGroupRange?: string; 
  public get ssmGroupRange() {
    return this.getStringAttribute('ssm_group_range');
  }
  public set ssmGroupRange(value: string) {
    this._ssmGroupRange = value;
  }
  public resetSsmGroupRange() {
    this._ssmGroupRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmGroupRangeInput() {
    return this._ssmGroupRange;
  }

  // ssm_wildcard_mask - computed: true, optional: true, required: false
  private _ssmWildcardMask?: string; 
  public get ssmWildcardMask() {
    return this.getStringAttribute('ssm_wildcard_mask');
  }
  public set ssmWildcardMask(value: string) {
    this._ssmWildcardMask = value;
  }
  public resetSsmWildcardMask() {
    this._ssmWildcardMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmWildcardMaskInput() {
    return this._ssmWildcardMask;
  }
}

export class SdaMulticastParametersMulticastVnInfoSsmInfoList extends cdktf.ComplexList {
  public internalValue? : SdaMulticastParametersMulticastVnInfoSsmInfo[] | cdktf.IResolvable

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
  public get(index: number): SdaMulticastParametersMulticastVnInfoSsmInfoOutputReference {
    return new SdaMulticastParametersMulticastVnInfoSsmInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaMulticastParametersMulticastVnInfo {
  /**
  * ExternalRpIpAddress, required if multicastType is asm_with_external_rp
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#external_rp_ip_address SdaMulticast#external_rp_ip_address}
  */
  readonly externalRpIpAddress?: string;
  /**
  * InternalRpIpAddress, required if multicastType is asm_with_internal_rp
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#internal_rp_ip_address SdaMulticast#internal_rp_ip_address}
  */
  readonly internalRpIpAddress?: string[];
  /**
  * Ip Pool Name, that is reserved to Fabric Site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#ip_pool_name SdaMulticast#ip_pool_name}
  */
  readonly ipPoolName?: string;
  /**
  * Virtual Network Name, that is associated to Fabric Site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#virtual_network_name SdaMulticast#virtual_network_name}
  */
  readonly virtualNetworkName?: string;
  /**
  * ssm_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#ssm_info SdaMulticast#ssm_info}
  */
  readonly ssmInfo?: SdaMulticastParametersMulticastVnInfoSsmInfo[] | cdktf.IResolvable;
}

export function sdaMulticastParametersMulticastVnInfoToTerraform(struct?: SdaMulticastParametersMulticastVnInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_rp_ip_address: cdktf.stringToTerraform(struct!.externalRpIpAddress),
    internal_rp_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.internalRpIpAddress),
    ip_pool_name: cdktf.stringToTerraform(struct!.ipPoolName),
    virtual_network_name: cdktf.stringToTerraform(struct!.virtualNetworkName),
    ssm_info: cdktf.listMapper(sdaMulticastParametersMulticastVnInfoSsmInfoToTerraform, true)(struct!.ssmInfo),
  }
}


export function sdaMulticastParametersMulticastVnInfoToHclTerraform(struct?: SdaMulticastParametersMulticastVnInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_rp_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.externalRpIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_rp_ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.internalRpIpAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.ipPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssm_info: {
      value: cdktf.listMapperHcl(sdaMulticastParametersMulticastVnInfoSsmInfoToHclTerraform, true)(struct!.ssmInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SdaMulticastParametersMulticastVnInfoSsmInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaMulticastParametersMulticastVnInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaMulticastParametersMulticastVnInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalRpIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalRpIpAddress = this._externalRpIpAddress;
    }
    if (this._internalRpIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalRpIpAddress = this._internalRpIpAddress;
    }
    if (this._ipPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolName = this._ipPoolName;
    }
    if (this._virtualNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkName = this._virtualNetworkName;
    }
    if (this._ssmInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmInfo = this._ssmInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaMulticastParametersMulticastVnInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalRpIpAddress = undefined;
      this._internalRpIpAddress = undefined;
      this._ipPoolName = undefined;
      this._virtualNetworkName = undefined;
      this._ssmInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalRpIpAddress = value.externalRpIpAddress;
      this._internalRpIpAddress = value.internalRpIpAddress;
      this._ipPoolName = value.ipPoolName;
      this._virtualNetworkName = value.virtualNetworkName;
      this._ssmInfo.internalValue = value.ssmInfo;
    }
  }

  // external_rp_ip_address - computed: true, optional: true, required: false
  private _externalRpIpAddress?: string; 
  public get externalRpIpAddress() {
    return this.getStringAttribute('external_rp_ip_address');
  }
  public set externalRpIpAddress(value: string) {
    this._externalRpIpAddress = value;
  }
  public resetExternalRpIpAddress() {
    this._externalRpIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRpIpAddressInput() {
    return this._externalRpIpAddress;
  }

  // internal_rp_ip_address - computed: true, optional: true, required: false
  private _internalRpIpAddress?: string[]; 
  public get internalRpIpAddress() {
    return this.getListAttribute('internal_rp_ip_address');
  }
  public set internalRpIpAddress(value: string[]) {
    this._internalRpIpAddress = value;
  }
  public resetInternalRpIpAddress() {
    this._internalRpIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalRpIpAddressInput() {
    return this._internalRpIpAddress;
  }

  // ip_pool_name - computed: true, optional: true, required: false
  private _ipPoolName?: string; 
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }
  public set ipPoolName(value: string) {
    this._ipPoolName = value;
  }
  public resetIpPoolName() {
    this._ipPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolNameInput() {
    return this._ipPoolName;
  }

  // virtual_network_name - computed: true, optional: true, required: false
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  public resetVirtualNetworkName() {
    this._virtualNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // ssm_info - computed: false, optional: true, required: false
  private _ssmInfo = new SdaMulticastParametersMulticastVnInfoSsmInfoList(this, "ssm_info", false);
  public get ssmInfo() {
    return this._ssmInfo;
  }
  public putSsmInfo(value: SdaMulticastParametersMulticastVnInfoSsmInfo[] | cdktf.IResolvable) {
    this._ssmInfo.internalValue = value;
  }
  public resetSsmInfo() {
    this._ssmInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmInfoInput() {
    return this._ssmInfo.internalValue;
  }
}

export class SdaMulticastParametersMulticastVnInfoList extends cdktf.ComplexList {
  public internalValue? : SdaMulticastParametersMulticastVnInfo[] | cdktf.IResolvable

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
  public get(index: number): SdaMulticastParametersMulticastVnInfoOutputReference {
    return new SdaMulticastParametersMulticastVnInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SdaMulticastParameters {
  /**
  * Multicast Method
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#multicast_method SdaMulticast#multicast_method}
  */
  readonly multicastMethod?: string;
  /**
  * Multicast Type
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#multicast_type SdaMulticast#multicast_type}
  */
  readonly multicastType?: string;
  /**
  * Full path of sda Fabric Site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#site_name_hierarchy SdaMulticast#site_name_hierarchy}
  */
  readonly siteNameHierarchy?: string;
  /**
  * multicast_vn_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#multicast_vn_info SdaMulticast#multicast_vn_info}
  */
  readonly multicastVnInfo?: SdaMulticastParametersMulticastVnInfo[] | cdktf.IResolvable;
}

export function sdaMulticastParametersToTerraform(struct?: SdaMulticastParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multicast_method: cdktf.stringToTerraform(struct!.multicastMethod),
    multicast_type: cdktf.stringToTerraform(struct!.multicastType),
    site_name_hierarchy: cdktf.stringToTerraform(struct!.siteNameHierarchy),
    multicast_vn_info: cdktf.listMapper(sdaMulticastParametersMulticastVnInfoToTerraform, true)(struct!.multicastVnInfo),
  }
}


export function sdaMulticastParametersToHclTerraform(struct?: SdaMulticastParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multicast_method: {
      value: cdktf.stringToHclTerraform(struct!.multicastMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicast_type: {
      value: cdktf.stringToHclTerraform(struct!.multicastType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_name_hierarchy: {
      value: cdktf.stringToHclTerraform(struct!.siteNameHierarchy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicast_vn_info: {
      value: cdktf.listMapperHcl(sdaMulticastParametersMulticastVnInfoToHclTerraform, true)(struct!.multicastVnInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SdaMulticastParametersMulticastVnInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdaMulticastParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdaMulticastParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multicastMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastMethod = this._multicastMethod;
    }
    if (this._multicastType !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastType = this._multicastType;
    }
    if (this._siteNameHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteNameHierarchy = this._siteNameHierarchy;
    }
    if (this._multicastVnInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastVnInfo = this._multicastVnInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdaMulticastParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multicastMethod = undefined;
      this._multicastType = undefined;
      this._siteNameHierarchy = undefined;
      this._multicastVnInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multicastMethod = value.multicastMethod;
      this._multicastType = value.multicastType;
      this._siteNameHierarchy = value.siteNameHierarchy;
      this._multicastVnInfo.internalValue = value.multicastVnInfo;
    }
  }

  // multicast_method - computed: true, optional: true, required: false
  private _multicastMethod?: string; 
  public get multicastMethod() {
    return this.getStringAttribute('multicast_method');
  }
  public set multicastMethod(value: string) {
    this._multicastMethod = value;
  }
  public resetMulticastMethod() {
    this._multicastMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastMethodInput() {
    return this._multicastMethod;
  }

  // multicast_type - computed: true, optional: true, required: false
  private _multicastType?: string; 
  public get multicastType() {
    return this.getStringAttribute('multicast_type');
  }
  public set multicastType(value: string) {
    this._multicastType = value;
  }
  public resetMulticastType() {
    this._multicastType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastTypeInput() {
    return this._multicastType;
  }

  // site_name_hierarchy - computed: true, optional: true, required: false
  private _siteNameHierarchy?: string; 
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
  public set siteNameHierarchy(value: string) {
    this._siteNameHierarchy = value;
  }
  public resetSiteNameHierarchy() {
    this._siteNameHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameHierarchyInput() {
    return this._siteNameHierarchy;
  }

  // multicast_vn_info - computed: false, optional: true, required: false
  private _multicastVnInfo = new SdaMulticastParametersMulticastVnInfoList(this, "multicast_vn_info", false);
  public get multicastVnInfo() {
    return this._multicastVnInfo;
  }
  public putMulticastVnInfo(value: SdaMulticastParametersMulticastVnInfo[] | cdktf.IResolvable) {
    this._multicastVnInfo.internalValue = value;
  }
  public resetMulticastVnInfo() {
    this._multicastVnInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastVnInfoInput() {
    return this._multicastVnInfo.internalValue;
  }
}

export class SdaMulticastParametersList extends cdktf.ComplexList {
  public internalValue? : SdaMulticastParameters[] | cdktf.IResolvable

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
  public get(index: number): SdaMulticastParametersOutputReference {
    return new SdaMulticastParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast dnacenter_sda_multicast}
*/
export class SdaMulticast extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sda_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdaMulticast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdaMulticast to import
  * @param importFromId The id of the existing SdaMulticast that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdaMulticast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sda_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/sda_multicast dnacenter_sda_multicast} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdaMulticastConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SdaMulticastConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sda_multicast',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new SdaMulticastItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new SdaMulticastParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SdaMulticastParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(sdaMulticastParametersToTerraform, true)(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(sdaMulticastParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdaMulticastParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
