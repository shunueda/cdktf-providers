// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseVpnGatewayV5Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_1 EnterpriseVpnGatewayV5#access_private_ip_1}
  */
  readonly accessPrivateIp1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#access_private_ip_2 EnterpriseVpnGatewayV5#access_private_ip_2}
  */
  readonly accessPrivateIp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#access_subnet_id EnterpriseVpnGatewayV5#access_subnet_id}
  */
  readonly accessSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#access_vpc_id EnterpriseVpnGatewayV5#access_vpc_id}
  */
  readonly accessVpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#asn EnterpriseVpnGatewayV5#asn}
  */
  readonly asn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#attachment_type EnterpriseVpnGatewayV5#attachment_type}
  */
  readonly attachmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#availability_zones EnterpriseVpnGatewayV5#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#connect_subnet EnterpriseVpnGatewayV5#connect_subnet}
  */
  readonly connectSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#delete_eip EnterpriseVpnGatewayV5#delete_eip}
  */
  readonly deleteEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#er_id EnterpriseVpnGatewayV5#er_id}
  */
  readonly erId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#flavor EnterpriseVpnGatewayV5#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#ha_mode EnterpriseVpnGatewayV5#ha_mode}
  */
  readonly haMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#local_subnets EnterpriseVpnGatewayV5#local_subnets}
  */
  readonly localSubnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#name EnterpriseVpnGatewayV5#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#network_type EnterpriseVpnGatewayV5#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#tags EnterpriseVpnGatewayV5#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#vpc_id EnterpriseVpnGatewayV5#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * eip1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#eip1 EnterpriseVpnGatewayV5#eip1}
  */
  readonly eip1?: EnterpriseVpnGatewayV5Eip1;
  /**
  * eip2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#eip2 EnterpriseVpnGatewayV5#eip2}
  */
  readonly eip2?: EnterpriseVpnGatewayV5Eip2;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#timeouts EnterpriseVpnGatewayV5#timeouts}
  */
  readonly timeouts?: EnterpriseVpnGatewayV5Timeouts;
}
export interface EnterpriseVpnGatewayV5Eip1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}
  */
  readonly bandwidthName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}
  */
  readonly bandwidthSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}
  */
  readonly chargeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}
  */
  readonly type?: string;
}

export function enterpriseVpnGatewayV5Eip1ToTerraform(struct?: EnterpriseVpnGatewayV5Eip1OutputReference | EnterpriseVpnGatewayV5Eip1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_name: cdktf.stringToTerraform(struct!.bandwidthName),
    bandwidth_size: cdktf.numberToTerraform(struct!.bandwidthSize),
    charge_mode: cdktf.stringToTerraform(struct!.chargeMode),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function enterpriseVpnGatewayV5Eip1ToHclTerraform(struct?: EnterpriseVpnGatewayV5Eip1OutputReference | EnterpriseVpnGatewayV5Eip1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_name: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_size: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    charge_mode: {
      value: cdktf.stringToHclTerraform(struct!.chargeMode),
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

export class EnterpriseVpnGatewayV5Eip1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnterpriseVpnGatewayV5Eip1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthName = this._bandwidthName;
    }
    if (this._bandwidthSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthSize = this._bandwidthSize;
    }
    if (this._chargeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargeMode = this._chargeMode;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseVpnGatewayV5Eip1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidthName = undefined;
      this._bandwidthSize = undefined;
      this._chargeMode = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidthName = value.bandwidthName;
      this._bandwidthSize = value.bandwidthSize;
      this._chargeMode = value.chargeMode;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // bandwidth_id - computed: true, optional: false, required: false
  public get bandwidthId() {
    return this.getStringAttribute('bandwidth_id');
  }

  // bandwidth_name - computed: true, optional: true, required: false
  private _bandwidthName?: string; 
  public get bandwidthName() {
    return this.getStringAttribute('bandwidth_name');
  }
  public set bandwidthName(value: string) {
    this._bandwidthName = value;
  }
  public resetBandwidthName() {
    this._bandwidthName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthNameInput() {
    return this._bandwidthName;
  }

  // bandwidth_size - computed: true, optional: true, required: false
  private _bandwidthSize?: number; 
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }
  public set bandwidthSize(value: number) {
    this._bandwidthSize = value;
  }
  public resetBandwidthSize() {
    this._bandwidthSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthSizeInput() {
    return this._bandwidthSize;
  }

  // charge_mode - computed: true, optional: true, required: false
  private _chargeMode?: string; 
  public get chargeMode() {
    return this.getStringAttribute('charge_mode');
  }
  public set chargeMode(value: string) {
    this._chargeMode = value;
  }
  public resetChargeMode() {
    this._chargeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeModeInput() {
    return this._chargeMode;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }

  // type - computed: true, optional: true, required: false
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
}
export interface EnterpriseVpnGatewayV5Eip2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#bandwidth_name EnterpriseVpnGatewayV5#bandwidth_name}
  */
  readonly bandwidthName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#bandwidth_size EnterpriseVpnGatewayV5#bandwidth_size}
  */
  readonly bandwidthSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#charge_mode EnterpriseVpnGatewayV5#charge_mode}
  */
  readonly chargeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#id EnterpriseVpnGatewayV5#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#type EnterpriseVpnGatewayV5#type}
  */
  readonly type?: string;
}

export function enterpriseVpnGatewayV5Eip2ToTerraform(struct?: EnterpriseVpnGatewayV5Eip2OutputReference | EnterpriseVpnGatewayV5Eip2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_name: cdktf.stringToTerraform(struct!.bandwidthName),
    bandwidth_size: cdktf.numberToTerraform(struct!.bandwidthSize),
    charge_mode: cdktf.stringToTerraform(struct!.chargeMode),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function enterpriseVpnGatewayV5Eip2ToHclTerraform(struct?: EnterpriseVpnGatewayV5Eip2OutputReference | EnterpriseVpnGatewayV5Eip2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_name: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_size: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    charge_mode: {
      value: cdktf.stringToHclTerraform(struct!.chargeMode),
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

export class EnterpriseVpnGatewayV5Eip2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnterpriseVpnGatewayV5Eip2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthName = this._bandwidthName;
    }
    if (this._bandwidthSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthSize = this._bandwidthSize;
    }
    if (this._chargeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargeMode = this._chargeMode;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseVpnGatewayV5Eip2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidthName = undefined;
      this._bandwidthSize = undefined;
      this._chargeMode = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidthName = value.bandwidthName;
      this._bandwidthSize = value.bandwidthSize;
      this._chargeMode = value.chargeMode;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // bandwidth_id - computed: true, optional: false, required: false
  public get bandwidthId() {
    return this.getStringAttribute('bandwidth_id');
  }

  // bandwidth_name - computed: true, optional: true, required: false
  private _bandwidthName?: string; 
  public get bandwidthName() {
    return this.getStringAttribute('bandwidth_name');
  }
  public set bandwidthName(value: string) {
    this._bandwidthName = value;
  }
  public resetBandwidthName() {
    this._bandwidthName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthNameInput() {
    return this._bandwidthName;
  }

  // bandwidth_size - computed: true, optional: true, required: false
  private _bandwidthSize?: number; 
  public get bandwidthSize() {
    return this.getNumberAttribute('bandwidth_size');
  }
  public set bandwidthSize(value: number) {
    this._bandwidthSize = value;
  }
  public resetBandwidthSize() {
    this._bandwidthSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthSizeInput() {
    return this._bandwidthSize;
  }

  // charge_mode - computed: true, optional: true, required: false
  private _chargeMode?: string; 
  public get chargeMode() {
    return this.getStringAttribute('charge_mode');
  }
  public set chargeMode(value: string) {
    this._chargeMode = value;
  }
  public resetChargeMode() {
    this._chargeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeModeInput() {
    return this._chargeMode;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }

  // type - computed: true, optional: true, required: false
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
}
export interface EnterpriseVpnGatewayV5Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#create EnterpriseVpnGatewayV5#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#delete EnterpriseVpnGatewayV5#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#update EnterpriseVpnGatewayV5#update}
  */
  readonly update?: string;
}

export function enterpriseVpnGatewayV5TimeoutsToTerraform(struct?: EnterpriseVpnGatewayV5Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function enterpriseVpnGatewayV5TimeoutsToHclTerraform(struct?: EnterpriseVpnGatewayV5Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseVpnGatewayV5TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnterpriseVpnGatewayV5Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseVpnGatewayV5Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5 opentelekomcloud_enterprise_vpn_gateway_v5}
*/
export class EnterpriseVpnGatewayV5 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_enterprise_vpn_gateway_v5";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnterpriseVpnGatewayV5 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnterpriseVpnGatewayV5 to import
  * @param importFromId The id of the existing EnterpriseVpnGatewayV5 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnterpriseVpnGatewayV5 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_enterprise_vpn_gateway_v5", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/enterprise_vpn_gateway_v5 opentelekomcloud_enterprise_vpn_gateway_v5} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseVpnGatewayV5Config
  */
  public constructor(scope: Construct, id: string, config: EnterpriseVpnGatewayV5Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_enterprise_vpn_gateway_v5',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.55',
        providerVersionConstraint: '1.36.55'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPrivateIp1 = config.accessPrivateIp1;
    this._accessPrivateIp2 = config.accessPrivateIp2;
    this._accessSubnetId = config.accessSubnetId;
    this._accessVpcId = config.accessVpcId;
    this._asn = config.asn;
    this._attachmentType = config.attachmentType;
    this._availabilityZones = config.availabilityZones;
    this._connectSubnet = config.connectSubnet;
    this._deleteEip = config.deleteEip;
    this._erId = config.erId;
    this._flavor = config.flavor;
    this._haMode = config.haMode;
    this._id = config.id;
    this._localSubnets = config.localSubnets;
    this._name = config.name;
    this._networkType = config.networkType;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._eip1.internalValue = config.eip1;
    this._eip2.internalValue = config.eip2;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_private_ip_1 - computed: true, optional: true, required: false
  private _accessPrivateIp1?: string; 
  public get accessPrivateIp1() {
    return this.getStringAttribute('access_private_ip_1');
  }
  public set accessPrivateIp1(value: string) {
    this._accessPrivateIp1 = value;
  }
  public resetAccessPrivateIp1() {
    this._accessPrivateIp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPrivateIp1Input() {
    return this._accessPrivateIp1;
  }

  // access_private_ip_2 - computed: true, optional: true, required: false
  private _accessPrivateIp2?: string; 
  public get accessPrivateIp2() {
    return this.getStringAttribute('access_private_ip_2');
  }
  public set accessPrivateIp2(value: string) {
    this._accessPrivateIp2 = value;
  }
  public resetAccessPrivateIp2() {
    this._accessPrivateIp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPrivateIp2Input() {
    return this._accessPrivateIp2;
  }

  // access_subnet_id - computed: true, optional: true, required: false
  private _accessSubnetId?: string; 
  public get accessSubnetId() {
    return this.getStringAttribute('access_subnet_id');
  }
  public set accessSubnetId(value: string) {
    this._accessSubnetId = value;
  }
  public resetAccessSubnetId() {
    this._accessSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSubnetIdInput() {
    return this._accessSubnetId;
  }

  // access_vpc_id - computed: true, optional: true, required: false
  private _accessVpcId?: string; 
  public get accessVpcId() {
    return this.getStringAttribute('access_vpc_id');
  }
  public set accessVpcId(value: string) {
    this._accessVpcId = value;
  }
  public resetAccessVpcId() {
    this._accessVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVpcIdInput() {
    return this._accessVpcId;
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

  // attachment_type - computed: false, optional: true, required: false
  private _attachmentType?: string; 
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }
  public resetAttachmentType() {
    this._attachmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTypeInput() {
    return this._attachmentType;
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // connect_subnet - computed: true, optional: true, required: false
  private _connectSubnet?: string; 
  public get connectSubnet() {
    return this.getStringAttribute('connect_subnet');
  }
  public set connectSubnet(value: string) {
    this._connectSubnet = value;
  }
  public resetConnectSubnet() {
    this._connectSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectSubnetInput() {
    return this._connectSubnet;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // delete_eip - computed: false, optional: true, required: false
  private _deleteEip?: boolean | cdktf.IResolvable; 
  public get deleteEip() {
    return this.getBooleanAttribute('delete_eip');
  }
  public set deleteEip(value: boolean | cdktf.IResolvable) {
    this._deleteEip = value;
  }
  public resetDeleteEip() {
    this._deleteEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteEipInput() {
    return this._deleteEip;
  }

  // er_attachment_id - computed: true, optional: false, required: false
  public get erAttachmentId() {
    return this.getStringAttribute('er_attachment_id');
  }

  // er_id - computed: true, optional: true, required: false
  private _erId?: string; 
  public get erId() {
    return this.getStringAttribute('er_id');
  }
  public set erId(value: string) {
    this._erId = value;
  }
  public resetErId() {
    this._erId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erIdInput() {
    return this._erId;
  }

  // flavor - computed: true, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // ha_mode - computed: true, optional: true, required: false
  private _haMode?: string; 
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }
  public set haMode(value: string) {
    this._haMode = value;
  }
  public resetHaMode() {
    this._haMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeInput() {
    return this._haMode;
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

  // local_subnets - computed: true, optional: true, required: false
  private _localSubnets?: string[]; 
  public get localSubnets() {
    return this.getListAttribute('local_subnets');
  }
  public set localSubnets(value: string[]) {
    this._localSubnets = value;
  }
  public resetLocalSubnets() {
    this._localSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetsInput() {
    return this._localSubnets;
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

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // used_connection_group - computed: true, optional: false, required: false
  public get usedConnectionGroup() {
    return this.getNumberAttribute('used_connection_group');
  }

  // used_connection_number - computed: true, optional: false, required: false
  public get usedConnectionNumber() {
    return this.getNumberAttribute('used_connection_number');
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // eip1 - computed: false, optional: true, required: false
  private _eip1 = new EnterpriseVpnGatewayV5Eip1OutputReference(this, "eip1");
  public get eip1() {
    return this._eip1;
  }
  public putEip1(value: EnterpriseVpnGatewayV5Eip1) {
    this._eip1.internalValue = value;
  }
  public resetEip1() {
    this._eip1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eip1Input() {
    return this._eip1.internalValue;
  }

  // eip2 - computed: false, optional: true, required: false
  private _eip2 = new EnterpriseVpnGatewayV5Eip2OutputReference(this, "eip2");
  public get eip2() {
    return this._eip2;
  }
  public putEip2(value: EnterpriseVpnGatewayV5Eip2) {
    this._eip2.internalValue = value;
  }
  public resetEip2() {
    this._eip2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eip2Input() {
    return this._eip2.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EnterpriseVpnGatewayV5TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EnterpriseVpnGatewayV5Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_private_ip_1: cdktf.stringToTerraform(this._accessPrivateIp1),
      access_private_ip_2: cdktf.stringToTerraform(this._accessPrivateIp2),
      access_subnet_id: cdktf.stringToTerraform(this._accessSubnetId),
      access_vpc_id: cdktf.stringToTerraform(this._accessVpcId),
      asn: cdktf.numberToTerraform(this._asn),
      attachment_type: cdktf.stringToTerraform(this._attachmentType),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      connect_subnet: cdktf.stringToTerraform(this._connectSubnet),
      delete_eip: cdktf.booleanToTerraform(this._deleteEip),
      er_id: cdktf.stringToTerraform(this._erId),
      flavor: cdktf.stringToTerraform(this._flavor),
      ha_mode: cdktf.stringToTerraform(this._haMode),
      id: cdktf.stringToTerraform(this._id),
      local_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localSubnets),
      name: cdktf.stringToTerraform(this._name),
      network_type: cdktf.stringToTerraform(this._networkType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      eip1: enterpriseVpnGatewayV5Eip1ToTerraform(this._eip1.internalValue),
      eip2: enterpriseVpnGatewayV5Eip2ToTerraform(this._eip2.internalValue),
      timeouts: enterpriseVpnGatewayV5TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_private_ip_1: {
        value: cdktf.stringToHclTerraform(this._accessPrivateIp1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_private_ip_2: {
        value: cdktf.stringToHclTerraform(this._accessPrivateIp2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_subnet_id: {
        value: cdktf.stringToHclTerraform(this._accessSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_vpc_id: {
        value: cdktf.stringToHclTerraform(this._accessVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attachment_type: {
        value: cdktf.stringToHclTerraform(this._attachmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      connect_subnet: {
        value: cdktf.stringToHclTerraform(this._connectSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_eip: {
        value: cdktf.booleanToHclTerraform(this._deleteEip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      er_id: {
        value: cdktf.stringToHclTerraform(this._erId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor: {
        value: cdktf.stringToHclTerraform(this._flavor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_mode: {
        value: cdktf.stringToHclTerraform(this._haMode),
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
      local_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localSubnets),
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
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip1: {
        value: enterpriseVpnGatewayV5Eip1ToHclTerraform(this._eip1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseVpnGatewayV5Eip1List",
      },
      eip2: {
        value: enterpriseVpnGatewayV5Eip2ToHclTerraform(this._eip2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseVpnGatewayV5Eip2List",
      },
      timeouts: {
        value: enterpriseVpnGatewayV5TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnterpriseVpnGatewayV5Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
