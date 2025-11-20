// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TgwInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#id TgwInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#name TgwInfo#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#private_ips TgwInfo#private_ips}
  */
  readonly privateIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#public_ips TgwInfo#public_ips}
  */
  readonly publicIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#tgw_id TgwInfo#tgw_id}
  */
  readonly tgwId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#vpc_id TgwInfo#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#vpc_name TgwInfo#vpc_name}
  */
  readonly vpcName?: string;
  /**
  * direct_connect_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#direct_connect_info TgwInfo#direct_connect_info}
  */
  readonly directConnectInfo?: TgwInfoDirectConnectInfo[] | cdktf.IResolvable;
  /**
  * subnet_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#subnet_ids TgwInfo#subnet_ids}
  */
  readonly subnetIds: TgwInfoSubnetIds[] | cdktf.IResolvable;
}
export interface TgwInfoDirectConnectInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#asn TgwInfo#asn}
  */
  readonly asn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#direct_connect_gateway_id TgwInfo#direct_connect_gateway_id}
  */
  readonly directConnectGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#vgw_id TgwInfo#vgw_id}
  */
  readonly vgwId?: string;
}

export function tgwInfoDirectConnectInfoToTerraform(struct?: TgwInfoDirectConnectInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    direct_connect_gateway_id: cdktf.stringToTerraform(struct!.directConnectGatewayId),
    vgw_id: cdktf.stringToTerraform(struct!.vgwId),
  }
}


export function tgwInfoDirectConnectInfoToHclTerraform(struct?: TgwInfoDirectConnectInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direct_connect_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.directConnectGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vgw_id: {
      value: cdktf.stringToHclTerraform(struct!.vgwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TgwInfoDirectConnectInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TgwInfoDirectConnectInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._directConnectGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.directConnectGatewayId = this._directConnectGatewayId;
    }
    if (this._vgwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vgwId = this._vgwId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TgwInfoDirectConnectInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._directConnectGatewayId = undefined;
      this._vgwId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._directConnectGatewayId = value.directConnectGatewayId;
      this._vgwId = value.vgwId;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // direct_connect_gateway_id - computed: false, optional: true, required: false
  private _directConnectGatewayId?: string; 
  public get directConnectGatewayId() {
    return this.getStringAttribute('direct_connect_gateway_id');
  }
  public set directConnectGatewayId(value: string) {
    this._directConnectGatewayId = value;
  }
  public resetDirectConnectGatewayId() {
    this._directConnectGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectGatewayIdInput() {
    return this._directConnectGatewayId;
  }

  // vgw_id - computed: false, optional: true, required: false
  private _vgwId?: string; 
  public get vgwId() {
    return this.getStringAttribute('vgw_id');
  }
  public set vgwId(value: string) {
    this._vgwId = value;
  }
  public resetVgwId() {
    this._vgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgwIdInput() {
    return this._vgwId;
  }
}

export class TgwInfoDirectConnectInfoList extends cdktf.ComplexList {
  public internalValue? : TgwInfoDirectConnectInfo[] | cdktf.IResolvable

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
  public get(index: number): TgwInfoDirectConnectInfoOutputReference {
    return new TgwInfoDirectConnectInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TgwInfoSubnetIdsInsideSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#az_name TgwInfo#az_name}
  */
  readonly azName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#id TgwInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#ipv4_prefix TgwInfo#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
}

export function tgwInfoSubnetIdsInsideSubnetToTerraform(struct?: TgwInfoSubnetIdsInsideSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az_name: cdktf.stringToTerraform(struct!.azName),
    id: cdktf.stringToTerraform(struct!.id),
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
  }
}


export function tgwInfoSubnetIdsInsideSubnetToHclTerraform(struct?: TgwInfoSubnetIdsInsideSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az_name: {
      value: cdktf.stringToHclTerraform(struct!.azName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TgwInfoSubnetIdsInsideSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TgwInfoSubnetIdsInsideSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azName = this._azName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TgwInfoSubnetIdsInsideSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azName = undefined;
      this._id = undefined;
      this._ipv4Prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azName = value.azName;
      this._id = value.id;
      this._ipv4Prefix = value.ipv4Prefix;
    }
  }

  // az_name - computed: false, optional: true, required: false
  private _azName?: string; 
  public get azName() {
    return this.getStringAttribute('az_name');
  }
  public set azName(value: string) {
    this._azName = value;
  }
  public resetAzName() {
    this._azName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azNameInput() {
    return this._azName;
  }

  // id - computed: false, optional: true, required: false
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

  // ipv4_prefix - computed: false, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }
}

export class TgwInfoSubnetIdsInsideSubnetList extends cdktf.ComplexList {
  public internalValue? : TgwInfoSubnetIdsInsideSubnet[] | cdktf.IResolvable

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
  public get(index: number): TgwInfoSubnetIdsInsideSubnetOutputReference {
    return new TgwInfoSubnetIdsInsideSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TgwInfoSubnetIdsOutsideSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#az_name TgwInfo#az_name}
  */
  readonly azName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#id TgwInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#ipv4_prefix TgwInfo#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
}

export function tgwInfoSubnetIdsOutsideSubnetToTerraform(struct?: TgwInfoSubnetIdsOutsideSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az_name: cdktf.stringToTerraform(struct!.azName),
    id: cdktf.stringToTerraform(struct!.id),
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
  }
}


export function tgwInfoSubnetIdsOutsideSubnetToHclTerraform(struct?: TgwInfoSubnetIdsOutsideSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az_name: {
      value: cdktf.stringToHclTerraform(struct!.azName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TgwInfoSubnetIdsOutsideSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TgwInfoSubnetIdsOutsideSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azName = this._azName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TgwInfoSubnetIdsOutsideSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azName = undefined;
      this._id = undefined;
      this._ipv4Prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azName = value.azName;
      this._id = value.id;
      this._ipv4Prefix = value.ipv4Prefix;
    }
  }

  // az_name - computed: false, optional: true, required: false
  private _azName?: string; 
  public get azName() {
    return this.getStringAttribute('az_name');
  }
  public set azName(value: string) {
    this._azName = value;
  }
  public resetAzName() {
    this._azName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azNameInput() {
    return this._azName;
  }

  // id - computed: false, optional: true, required: false
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

  // ipv4_prefix - computed: false, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }
}

export class TgwInfoSubnetIdsOutsideSubnetList extends cdktf.ComplexList {
  public internalValue? : TgwInfoSubnetIdsOutsideSubnet[] | cdktf.IResolvable

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
  public get(index: number): TgwInfoSubnetIdsOutsideSubnetOutputReference {
    return new TgwInfoSubnetIdsOutsideSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TgwInfoSubnetIdsWorkloadSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#az_name TgwInfo#az_name}
  */
  readonly azName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#id TgwInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#ipv4_prefix TgwInfo#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
}

export function tgwInfoSubnetIdsWorkloadSubnetToTerraform(struct?: TgwInfoSubnetIdsWorkloadSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az_name: cdktf.stringToTerraform(struct!.azName),
    id: cdktf.stringToTerraform(struct!.id),
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
  }
}


export function tgwInfoSubnetIdsWorkloadSubnetToHclTerraform(struct?: TgwInfoSubnetIdsWorkloadSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az_name: {
      value: cdktf.stringToHclTerraform(struct!.azName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TgwInfoSubnetIdsWorkloadSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TgwInfoSubnetIdsWorkloadSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azName = this._azName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TgwInfoSubnetIdsWorkloadSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azName = undefined;
      this._id = undefined;
      this._ipv4Prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azName = value.azName;
      this._id = value.id;
      this._ipv4Prefix = value.ipv4Prefix;
    }
  }

  // az_name - computed: false, optional: true, required: false
  private _azName?: string; 
  public get azName() {
    return this.getStringAttribute('az_name');
  }
  public set azName(value: string) {
    this._azName = value;
  }
  public resetAzName() {
    this._azName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azNameInput() {
    return this._azName;
  }

  // id - computed: false, optional: true, required: false
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

  // ipv4_prefix - computed: false, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }
}

export class TgwInfoSubnetIdsWorkloadSubnetList extends cdktf.ComplexList {
  public internalValue? : TgwInfoSubnetIdsWorkloadSubnet[] | cdktf.IResolvable

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
  public get(index: number): TgwInfoSubnetIdsWorkloadSubnetOutputReference {
    return new TgwInfoSubnetIdsWorkloadSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TgwInfoSubnetIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#az TgwInfo#az}
  */
  readonly az?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#inside_subnet_id TgwInfo#inside_subnet_id}
  */
  readonly insideSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#outside_subnet_id TgwInfo#outside_subnet_id}
  */
  readonly outsideSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#workload_subnet_id TgwInfo#workload_subnet_id}
  */
  readonly workloadSubnetId?: string;
  /**
  * inside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#inside_subnet TgwInfo#inside_subnet}
  */
  readonly insideSubnet?: TgwInfoSubnetIdsInsideSubnet[] | cdktf.IResolvable;
  /**
  * outside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#outside_subnet TgwInfo#outside_subnet}
  */
  readonly outsideSubnet?: TgwInfoSubnetIdsOutsideSubnet[] | cdktf.IResolvable;
  /**
  * workload_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#workload_subnet TgwInfo#workload_subnet}
  */
  readonly workloadSubnet?: TgwInfoSubnetIdsWorkloadSubnet[] | cdktf.IResolvable;
}

export function tgwInfoSubnetIdsToTerraform(struct?: TgwInfoSubnetIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az: cdktf.stringToTerraform(struct!.az),
    inside_subnet_id: cdktf.stringToTerraform(struct!.insideSubnetId),
    outside_subnet_id: cdktf.stringToTerraform(struct!.outsideSubnetId),
    workload_subnet_id: cdktf.stringToTerraform(struct!.workloadSubnetId),
    inside_subnet: cdktf.listMapper(tgwInfoSubnetIdsInsideSubnetToTerraform, true)(struct!.insideSubnet),
    outside_subnet: cdktf.listMapper(tgwInfoSubnetIdsOutsideSubnetToTerraform, true)(struct!.outsideSubnet),
    workload_subnet: cdktf.listMapper(tgwInfoSubnetIdsWorkloadSubnetToTerraform, true)(struct!.workloadSubnet),
  }
}


export function tgwInfoSubnetIdsToHclTerraform(struct?: TgwInfoSubnetIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az: {
      value: cdktf.stringToHclTerraform(struct!.az),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.insideSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.outsideSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.workloadSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_subnet: {
      value: cdktf.listMapperHcl(tgwInfoSubnetIdsInsideSubnetToHclTerraform, true)(struct!.insideSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "TgwInfoSubnetIdsInsideSubnetList",
    },
    outside_subnet: {
      value: cdktf.listMapperHcl(tgwInfoSubnetIdsOutsideSubnetToHclTerraform, true)(struct!.outsideSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "TgwInfoSubnetIdsOutsideSubnetList",
    },
    workload_subnet: {
      value: cdktf.listMapperHcl(tgwInfoSubnetIdsWorkloadSubnetToHclTerraform, true)(struct!.workloadSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "TgwInfoSubnetIdsWorkloadSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TgwInfoSubnetIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TgwInfoSubnetIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._az !== undefined) {
      hasAnyValues = true;
      internalValueResult.az = this._az;
    }
    if (this._insideSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSubnetId = this._insideSubnetId;
    }
    if (this._outsideSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSubnetId = this._outsideSubnetId;
    }
    if (this._workloadSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSubnetId = this._workloadSubnetId;
    }
    if (this._insideSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSubnet = this._insideSubnet?.internalValue;
    }
    if (this._outsideSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSubnet = this._outsideSubnet?.internalValue;
    }
    if (this._workloadSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSubnet = this._workloadSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TgwInfoSubnetIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._az = undefined;
      this._insideSubnetId = undefined;
      this._outsideSubnetId = undefined;
      this._workloadSubnetId = undefined;
      this._insideSubnet.internalValue = undefined;
      this._outsideSubnet.internalValue = undefined;
      this._workloadSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._az = value.az;
      this._insideSubnetId = value.insideSubnetId;
      this._outsideSubnetId = value.outsideSubnetId;
      this._workloadSubnetId = value.workloadSubnetId;
      this._insideSubnet.internalValue = value.insideSubnet;
      this._outsideSubnet.internalValue = value.outsideSubnet;
      this._workloadSubnet.internalValue = value.workloadSubnet;
    }
  }

  // az - computed: false, optional: true, required: false
  private _az?: string; 
  public get az() {
    return this.getStringAttribute('az');
  }
  public set az(value: string) {
    this._az = value;
  }
  public resetAz() {
    this._az = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az;
  }

  // inside_subnet_id - computed: false, optional: true, required: false
  private _insideSubnetId?: string; 
  public get insideSubnetId() {
    return this.getStringAttribute('inside_subnet_id');
  }
  public set insideSubnetId(value: string) {
    this._insideSubnetId = value;
  }
  public resetInsideSubnetId() {
    this._insideSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSubnetIdInput() {
    return this._insideSubnetId;
  }

  // outside_subnet_id - computed: false, optional: true, required: false
  private _outsideSubnetId?: string; 
  public get outsideSubnetId() {
    return this.getStringAttribute('outside_subnet_id');
  }
  public set outsideSubnetId(value: string) {
    this._outsideSubnetId = value;
  }
  public resetOutsideSubnetId() {
    this._outsideSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSubnetIdInput() {
    return this._outsideSubnetId;
  }

  // workload_subnet_id - computed: false, optional: true, required: false
  private _workloadSubnetId?: string; 
  public get workloadSubnetId() {
    return this.getStringAttribute('workload_subnet_id');
  }
  public set workloadSubnetId(value: string) {
    this._workloadSubnetId = value;
  }
  public resetWorkloadSubnetId() {
    this._workloadSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSubnetIdInput() {
    return this._workloadSubnetId;
  }

  // inside_subnet - computed: false, optional: true, required: false
  private _insideSubnet = new TgwInfoSubnetIdsInsideSubnetList(this, "inside_subnet", true);
  public get insideSubnet() {
    return this._insideSubnet;
  }
  public putInsideSubnet(value: TgwInfoSubnetIdsInsideSubnet[] | cdktf.IResolvable) {
    this._insideSubnet.internalValue = value;
  }
  public resetInsideSubnet() {
    this._insideSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSubnetInput() {
    return this._insideSubnet.internalValue;
  }

  // outside_subnet - computed: false, optional: true, required: false
  private _outsideSubnet = new TgwInfoSubnetIdsOutsideSubnetList(this, "outside_subnet", true);
  public get outsideSubnet() {
    return this._outsideSubnet;
  }
  public putOutsideSubnet(value: TgwInfoSubnetIdsOutsideSubnet[] | cdktf.IResolvable) {
    this._outsideSubnet.internalValue = value;
  }
  public resetOutsideSubnet() {
    this._outsideSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSubnetInput() {
    return this._outsideSubnet.internalValue;
  }

  // workload_subnet - computed: false, optional: true, required: false
  private _workloadSubnet = new TgwInfoSubnetIdsWorkloadSubnetList(this, "workload_subnet", true);
  public get workloadSubnet() {
    return this._workloadSubnet;
  }
  public putWorkloadSubnet(value: TgwInfoSubnetIdsWorkloadSubnet[] | cdktf.IResolvable) {
    this._workloadSubnet.internalValue = value;
  }
  public resetWorkloadSubnet() {
    this._workloadSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSubnetInput() {
    return this._workloadSubnet.internalValue;
  }
}

export class TgwInfoSubnetIdsList extends cdktf.ComplexList {
  public internalValue? : TgwInfoSubnetIds[] | cdktf.IResolvable

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
  public get(index: number): TgwInfoSubnetIdsOutputReference {
    return new TgwInfoSubnetIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info volterra_tgw_info}
*/
export class TgwInfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_tgw_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TgwInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TgwInfo to import
  * @param importFromId The id of the existing TgwInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TgwInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_tgw_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/tgw_info volterra_tgw_info} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TgwInfoConfig
  */
  public constructor(scope: Construct, id: string, config: TgwInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_tgw_info',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
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
    this._name = config.name;
    this._privateIps = config.privateIps;
    this._publicIps = config.publicIps;
    this._tgwId = config.tgwId;
    this._vpcId = config.vpcId;
    this._vpcName = config.vpcName;
    this._directConnectInfo.internalValue = config.directConnectInfo;
    this._subnetIds.internalValue = config.subnetIds;
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

  // private_ips - computed: false, optional: false, required: true
  private _privateIps?: string[]; 
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }
  public set privateIps(value: string[]) {
    this._privateIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsInput() {
    return this._privateIps;
  }

  // public_ips - computed: false, optional: false, required: true
  private _publicIps?: string[]; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[]) {
    this._publicIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps;
  }

  // tgw_id - computed: false, optional: false, required: true
  private _tgwId?: string; 
  public get tgwId() {
    return this.getStringAttribute('tgw_id');
  }
  public set tgwId(value: string) {
    this._tgwId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwIdInput() {
    return this._tgwId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_name - computed: false, optional: true, required: false
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  public resetVpcName() {
    this._vpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }

  // direct_connect_info - computed: false, optional: true, required: false
  private _directConnectInfo = new TgwInfoDirectConnectInfoList(this, "direct_connect_info", true);
  public get directConnectInfo() {
    return this._directConnectInfo;
  }
  public putDirectConnectInfo(value: TgwInfoDirectConnectInfo[] | cdktf.IResolvable) {
    this._directConnectInfo.internalValue = value;
  }
  public resetDirectConnectInfo() {
    this._directConnectInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectInfoInput() {
    return this._directConnectInfo.internalValue;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds = new TgwInfoSubnetIdsList(this, "subnet_ids", false);
  public get subnetIds() {
    return this._subnetIds;
  }
  public putSubnetIds(value: TgwInfoSubnetIds[] | cdktf.IResolvable) {
    this._subnetIds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIps),
      public_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicIps),
      tgw_id: cdktf.stringToTerraform(this._tgwId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_name: cdktf.stringToTerraform(this._vpcName),
      direct_connect_info: cdktf.listMapper(tgwInfoDirectConnectInfoToTerraform, true)(this._directConnectInfo.internalValue),
      subnet_ids: cdktf.listMapper(tgwInfoSubnetIdsToTerraform, true)(this._subnetIds.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      public_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tgw_id: {
        value: cdktf.stringToHclTerraform(this._tgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_name: {
        value: cdktf.stringToHclTerraform(this._vpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_connect_info: {
        value: cdktf.listMapperHcl(tgwInfoDirectConnectInfoToHclTerraform, true)(this._directConnectInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TgwInfoDirectConnectInfoList",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(tgwInfoSubnetIdsToHclTerraform, true)(this._subnetIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TgwInfoSubnetIdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
