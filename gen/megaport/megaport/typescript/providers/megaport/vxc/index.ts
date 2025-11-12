// https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VxcConfig extends cdktf.TerraformMetaArguments {
  /**
  * The current A-End configuration of the VXC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#a_end Vxc#a_end}
  */
  readonly aEnd: VxcAEnd;
  /**
  * The partner configuration of the A-End order configuration. Contains CSP and/or BGP Configuration settings. For any partner configuration besides "vrouter", this configuration cannot be changed after the VXC is created and if it is modified, the VXC will be deleted and re-created. Imported VXCs do not have this field populated by the API, so the initially provided configuration will be ignored as it can't be verified to be correct. If the user wants to change the configuration after importing the resource, they can then do so by changing the field after importing the resource and running terraform apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#a_end_partner_config Vxc#a_end_partner_config}
  */
  readonly aEndPartnerConfig?: VxcAEndPartnerConfig;
  /**
  * The current B-End configuration of the VXC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#b_end Vxc#b_end}
  */
  readonly bEnd: VxcBEnd;
  /**
  * The partner configuration of the B-End order configuration. Contains CSP and/or BGP Configuration settings. For any partner configuration besides "vrouter", this configuration cannot be changed after the VXC is created and if it is modified, the VXC will be deleted and re-created. Imported VXCs do not have this field populated by the API, so the initially provided configuration will be ignored as it can't be verified to be correct. If the user wants to change the configuration after importing the resource, they can then do so by changing the field after importing the resource and running terraform apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#b_end_partner_config Vxc#b_end_partner_config}
  */
  readonly bEndPartnerConfig?: VxcBEndPartnerConfig;
  /**
  * The term of the contract in months: valid values are 1, 12, 24, 36, 48, and 60. To set the product to a month-to-month contract with no minimum term, set the value to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#contract_term_months Vxc#contract_term_months}
  */
  readonly contractTermMonths: number;
  /**
  * A customer reference number to be included in billing information and invoices. Also known as the service level reference (SLR) number. Specify a unique identifying number for the product to be used for billing purposes, such as a cost center number or a unique customer ID. The service level reference number appears for each service under the Product section of the invoice. You can also edit this field for an existing service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#cost_centre Vxc#cost_centre}
  */
  readonly costCentre?: string;
  /**
  * The name of the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#product_name Vxc#product_name}
  */
  readonly productName: string;
  /**
  * Promo code is an optional string that can be used to enter a promotional code for the service order. The code is not validated, so if the code doesn't exist or doesn't work for the service, the request will still be successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#promo_code Vxc#promo_code}
  */
  readonly promoCode?: string;
  /**
  * The rate limit of the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#rate_limit Vxc#rate_limit}
  */
  readonly rateLimit: number;
  /**
  * The resource tags associated with the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#resource_tags Vxc#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
  /**
  * The service key of the VXC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#service_key Vxc#service_key}
  */
  readonly serviceKey?: string;
  /**
  * Temporarily shut down and re-enable the VXC. Valid values are true (shut down) and false (enabled). If not provided, it defaults to false (enabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#shutdown Vxc#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
}
export interface VxcAEnd {
  /**
  * The current product UID of the A-End configuration. The Megaport API may change a Partner Port from the Requested Port to a different Port in the same location and diversity zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#current_product_uid Vxc#current_product_uid}
  */
  readonly currentProductUid?: string;
  /**
  * The inner VLAN of the A-End configuration. If the A-End ordered_vlan is untagged and set as -1, this field cannot be set by the API, as the VLAN of the A-End is designated as untagged. Note: Setting inner_vlan to 0 for auto-assignment is not currently supported by the provider. This is a known limitation that will be resolved in a future release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#inner_vlan Vxc#inner_vlan}
  */
  readonly innerVlan?: number;
  /**
  * The customer-ordered unique VLAN ID of the A-End configuration. Values can range from 2 to 4093. If this value is set to 0, or not included, the Megaport system allocates a valid VLAN ID to the A-End configuration.  To set this VLAN to untagged, set the VLAN value to -1. Please note that if the A-End ordered_vlan is set to -1, the Megaport API will not allow for the A-End inner_vlan field to be set as the VLAN for this end configuration will be untagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ordered_vlan Vxc#ordered_vlan}
  */
  readonly orderedVlan?: number;
  /**
  * The Product UID requested by the user for the A-End configuration. Note: For cloud provider connections, the actual Product UID may differ from the requested UID due to Megaport's automatic port assignment for partner ports. This is expected behavior and ensures proper connectivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#requested_product_uid Vxc#requested_product_uid}
  */
  readonly requestedProductUid: string;
  /**
  * The network interface index of the A-End configuration. Required for MVE connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#vnic_index Vxc#vnic_index}
  */
  readonly vnicIndex?: number;
}

export function vxcAEndToTerraform(struct?: VxcAEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_product_uid: cdktf.stringToTerraform(struct!.currentProductUid),
    inner_vlan: cdktf.numberToTerraform(struct!.innerVlan),
    ordered_vlan: cdktf.numberToTerraform(struct!.orderedVlan),
    requested_product_uid: cdktf.stringToTerraform(struct!.requestedProductUid),
    vnic_index: cdktf.numberToTerraform(struct!.vnicIndex),
  }
}


export function vxcAEndToHclTerraform(struct?: VxcAEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_product_uid: {
      value: cdktf.stringToHclTerraform(struct!.currentProductUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inner_vlan: {
      value: cdktf.numberToHclTerraform(struct!.innerVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ordered_vlan: {
      value: cdktf.numberToHclTerraform(struct!.orderedVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requested_product_uid: {
      value: cdktf.stringToHclTerraform(struct!.requestedProductUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_index: {
      value: cdktf.numberToHclTerraform(struct!.vnicIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentProductUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentProductUid = this._currentProductUid;
    }
    if (this._innerVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.innerVlan = this._innerVlan;
    }
    if (this._orderedVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderedVlan = this._orderedVlan;
    }
    if (this._requestedProductUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedProductUid = this._requestedProductUid;
    }
    if (this._vnicIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicIndex = this._vnicIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentProductUid = undefined;
      this._innerVlan = undefined;
      this._orderedVlan = undefined;
      this._requestedProductUid = undefined;
      this._vnicIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentProductUid = value.currentProductUid;
      this._innerVlan = value.innerVlan;
      this._orderedVlan = value.orderedVlan;
      this._requestedProductUid = value.requestedProductUid;
      this._vnicIndex = value.vnicIndex;
    }
  }

  // current_product_uid - computed: true, optional: true, required: false
  private _currentProductUid?: string; 
  public get currentProductUid() {
    return this.getStringAttribute('current_product_uid');
  }
  public set currentProductUid(value: string) {
    this._currentProductUid = value;
  }
  public resetCurrentProductUid() {
    this._currentProductUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentProductUidInput() {
    return this._currentProductUid;
  }

  // inner_vlan - computed: true, optional: true, required: false
  private _innerVlan?: number; 
  public get innerVlan() {
    return this.getNumberAttribute('inner_vlan');
  }
  public set innerVlan(value: number) {
    this._innerVlan = value;
  }
  public resetInnerVlan() {
    this._innerVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVlanInput() {
    return this._innerVlan;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }

  // ordered_vlan - computed: true, optional: true, required: false
  private _orderedVlan?: number; 
  public get orderedVlan() {
    return this.getNumberAttribute('ordered_vlan');
  }
  public set orderedVlan(value: number) {
    this._orderedVlan = value;
  }
  public resetOrderedVlan() {
    this._orderedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedVlanInput() {
    return this._orderedVlan;
  }

  // owner_uid - computed: true, optional: false, required: false
  public get ownerUid() {
    return this.getStringAttribute('owner_uid');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // requested_product_uid - computed: false, optional: false, required: true
  private _requestedProductUid?: string; 
  public get requestedProductUid() {
    return this.getStringAttribute('requested_product_uid');
  }
  public set requestedProductUid(value: string) {
    this._requestedProductUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedProductUidInput() {
    return this._requestedProductUid;
  }

  // secondary_name - computed: true, optional: false, required: false
  public get secondaryName() {
    return this.getStringAttribute('secondary_name');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // vnic_index - computed: true, optional: true, required: false
  private _vnicIndex?: number; 
  public get vnicIndex() {
    return this.getNumberAttribute('vnic_index');
  }
  public set vnicIndex(value: number) {
    this._vnicIndex = value;
  }
  public resetVnicIndex() {
    this._vnicIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicIndexInput() {
    return this._vnicIndex;
  }
}
export interface VxcAEndPartnerConfigAwsConfig {
  /**
  * The Amazon ASN of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#amazon_asn Vxc#amazon_asn}
  */
  readonly amazonAsn?: number;
  /**
  * The Amazon IP address of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#amazon_ip_address Vxc#amazon_ip_address}
  */
  readonly amazonIpAddress?: string;
  /**
  * The ASN of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#asn Vxc#asn}
  */
  readonly asn?: number;
  /**
  * The authentication key of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#auth_key Vxc#auth_key}
  */
  readonly authKey?: string;
  /**
  * The connection type of the partner configuration. Required for AWS partner configurations - valid values are "AWS" for Virtual Interface or AWSHC for AWS Hosted Connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#connect_type Vxc#connect_type}
  */
  readonly connectType: string;
  /**
  * The customer IP address of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_ip_address Vxc#customer_ip_address}
  */
  readonly customerIpAddress?: string;
  /**
  * The name of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#name Vxc#name}
  */
  readonly name: string;
  /**
  * The owner AWS account of the partner configuration. Required for AWS partner configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#owner_account Vxc#owner_account}
  */
  readonly ownerAccount: string;
  /**
  * The prefixes of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#prefixes Vxc#prefixes}
  */
  readonly prefixes?: string;
  /**
  * The type of the AWS Virtual Interface. Required for AWS Virtual Interface Partner Configurations (e.g. if the connect_type is "AWS"). Valid values are "private", "public", or "transit".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#type Vxc#type}
  */
  readonly type?: string;
}

export function vxcAEndPartnerConfigAwsConfigToTerraform(struct?: VxcAEndPartnerConfigAwsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_asn: cdktf.numberToTerraform(struct!.amazonAsn),
    amazon_ip_address: cdktf.stringToTerraform(struct!.amazonIpAddress),
    asn: cdktf.numberToTerraform(struct!.asn),
    auth_key: cdktf.stringToTerraform(struct!.authKey),
    connect_type: cdktf.stringToTerraform(struct!.connectType),
    customer_ip_address: cdktf.stringToTerraform(struct!.customerIpAddress),
    name: cdktf.stringToTerraform(struct!.name),
    owner_account: cdktf.stringToTerraform(struct!.ownerAccount),
    prefixes: cdktf.stringToTerraform(struct!.prefixes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vxcAEndPartnerConfigAwsConfigToHclTerraform(struct?: VxcAEndPartnerConfigAwsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_asn: {
      value: cdktf.numberToHclTerraform(struct!.amazonAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    amazon_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.amazonIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_type: {
      value: cdktf.stringToHclTerraform(struct!.connectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.customerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_account: {
      value: cdktf.stringToHclTerraform(struct!.ownerAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefixes: {
      value: cdktf.stringToHclTerraform(struct!.prefixes),
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

export class VxcAEndPartnerConfigAwsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEndPartnerConfigAwsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonAsn = this._amazonAsn;
    }
    if (this._amazonIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonIpAddress = this._amazonIpAddress;
    }
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._connectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectType = this._connectType;
    }
    if (this._customerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerIpAddress = this._customerIpAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerAccount = this._ownerAccount;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigAwsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonAsn = undefined;
      this._amazonIpAddress = undefined;
      this._asn = undefined;
      this._authKey = undefined;
      this._connectType = undefined;
      this._customerIpAddress = undefined;
      this._name = undefined;
      this._ownerAccount = undefined;
      this._prefixes = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonAsn = value.amazonAsn;
      this._amazonIpAddress = value.amazonIpAddress;
      this._asn = value.asn;
      this._authKey = value.authKey;
      this._connectType = value.connectType;
      this._customerIpAddress = value.customerIpAddress;
      this._name = value.name;
      this._ownerAccount = value.ownerAccount;
      this._prefixes = value.prefixes;
      this._type = value.type;
    }
  }

  // amazon_asn - computed: false, optional: true, required: false
  private _amazonAsn?: number; 
  public get amazonAsn() {
    return this.getNumberAttribute('amazon_asn');
  }
  public set amazonAsn(value: number) {
    this._amazonAsn = value;
  }
  public resetAmazonAsn() {
    this._amazonAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonAsnInput() {
    return this._amazonAsn;
  }

  // amazon_ip_address - computed: false, optional: true, required: false
  private _amazonIpAddress?: string; 
  public get amazonIpAddress() {
    return this.getStringAttribute('amazon_ip_address');
  }
  public set amazonIpAddress(value: string) {
    this._amazonIpAddress = value;
  }
  public resetAmazonIpAddress() {
    this._amazonIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonIpAddressInput() {
    return this._amazonIpAddress;
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

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // connect_type - computed: false, optional: false, required: true
  private _connectType?: string; 
  public get connectType() {
    return this.getStringAttribute('connect_type');
  }
  public set connectType(value: string) {
    this._connectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTypeInput() {
    return this._connectType;
  }

  // customer_ip_address - computed: false, optional: true, required: false
  private _customerIpAddress?: string; 
  public get customerIpAddress() {
    return this.getStringAttribute('customer_ip_address');
  }
  public set customerIpAddress(value: string) {
    this._customerIpAddress = value;
  }
  public resetCustomerIpAddress() {
    this._customerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIpAddressInput() {
    return this._customerIpAddress;
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

  // owner_account - computed: false, optional: false, required: true
  private _ownerAccount?: string; 
  public get ownerAccount() {
    return this.getStringAttribute('owner_account');
  }
  public set ownerAccount(value: string) {
    this._ownerAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerAccountInput() {
    return this._ownerAccount;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string; 
  public get prefixes() {
    return this.getStringAttribute('prefixes');
  }
  public set prefixes(value: string) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
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
}
export interface VxcAEndPartnerConfigAzureConfigPeers {
  /**
  * The peer ASN of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_asn Vxc#peer_asn}
  */
  readonly peerAsn?: string;
  /**
  * The prefixes of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#prefixes Vxc#prefixes}
  */
  readonly prefixes?: string;
  /**
  * The primary subnet of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#primary_subnet Vxc#primary_subnet}
  */
  readonly primarySubnet?: string;
  /**
  * The secondary subnet of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#secondary_subnet Vxc#secondary_subnet}
  */
  readonly secondarySubnet?: string;
  /**
  * The shared key of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#shared_key Vxc#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * The type of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#type Vxc#type}
  */
  readonly type: string;
  /**
  * The VLAN of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#vlan Vxc#vlan}
  */
  readonly vlan?: number;
}

export function vxcAEndPartnerConfigAzureConfigPeersToTerraform(struct?: VxcAEndPartnerConfigAzureConfigPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_asn: cdktf.stringToTerraform(struct!.peerAsn),
    prefixes: cdktf.stringToTerraform(struct!.prefixes),
    primary_subnet: cdktf.stringToTerraform(struct!.primarySubnet),
    secondary_subnet: cdktf.stringToTerraform(struct!.secondarySubnet),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
    type: cdktf.stringToTerraform(struct!.type),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function vxcAEndPartnerConfigAzureConfigPeersToHclTerraform(struct?: VxcAEndPartnerConfigAzureConfigPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_asn: {
      value: cdktf.stringToHclTerraform(struct!.peerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefixes: {
      value: cdktf.stringToHclTerraform(struct!.prefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_subnet: {
      value: cdktf.stringToHclTerraform(struct!.primarySubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_subnet: {
      value: cdktf.stringToHclTerraform(struct!.secondarySubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_key: {
      value: cdktf.stringToHclTerraform(struct!.sharedKey),
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
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigAzureConfigPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcAEndPartnerConfigAzureConfigPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAsn = this._peerAsn;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    if (this._primarySubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySubnet = this._primarySubnet;
    }
    if (this._secondarySubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondarySubnet = this._secondarySubnet;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigAzureConfigPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerAsn = undefined;
      this._prefixes = undefined;
      this._primarySubnet = undefined;
      this._secondarySubnet = undefined;
      this._sharedKey = undefined;
      this._type = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerAsn = value.peerAsn;
      this._prefixes = value.prefixes;
      this._primarySubnet = value.primarySubnet;
      this._secondarySubnet = value.secondarySubnet;
      this._sharedKey = value.sharedKey;
      this._type = value.type;
      this._vlan = value.vlan;
    }
  }

  // peer_asn - computed: false, optional: true, required: false
  private _peerAsn?: string; 
  public get peerAsn() {
    return this.getStringAttribute('peer_asn');
  }
  public set peerAsn(value: string) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string; 
  public get prefixes() {
    return this.getStringAttribute('prefixes');
  }
  public set prefixes(value: string) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }

  // primary_subnet - computed: false, optional: true, required: false
  private _primarySubnet?: string; 
  public get primarySubnet() {
    return this.getStringAttribute('primary_subnet');
  }
  public set primarySubnet(value: string) {
    this._primarySubnet = value;
  }
  public resetPrimarySubnet() {
    this._primarySubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySubnetInput() {
    return this._primarySubnet;
  }

  // secondary_subnet - computed: false, optional: true, required: false
  private _secondarySubnet?: string; 
  public get secondarySubnet() {
    return this.getStringAttribute('secondary_subnet');
  }
  public set secondarySubnet(value: string) {
    this._secondarySubnet = value;
  }
  public resetSecondarySubnet() {
    this._secondarySubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySubnetInput() {
    return this._secondarySubnet;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
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

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class VxcAEndPartnerConfigAzureConfigPeersList extends cdktf.ComplexList {
  public internalValue? : VxcAEndPartnerConfigAzureConfigPeers[] | cdktf.IResolvable

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
  public get(index: number): VxcAEndPartnerConfigAzureConfigPeersOutputReference {
    return new VxcAEndPartnerConfigAzureConfigPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcAEndPartnerConfigAzureConfig {
  /**
  * The peers of the partner configuration. If this is set, the user must delete any Azure resources associated with the VXC on Azure before deleting the VXC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peers Vxc#peers}
  */
  readonly peers?: VxcAEndPartnerConfigAzureConfigPeers[] | cdktf.IResolvable;
  /**
  * Which port to choose when building the VXC. Can either be 'primary' or 'secondary'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#port_choice Vxc#port_choice}
  */
  readonly portChoice: string;
  /**
  * The service key of the partner configuration. Required for Azure partner configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#service_key Vxc#service_key}
  */
  readonly serviceKey: string;
}

export function vxcAEndPartnerConfigAzureConfigToTerraform(struct?: VxcAEndPartnerConfigAzureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peers: cdktf.listMapper(vxcAEndPartnerConfigAzureConfigPeersToTerraform, false)(struct!.peers),
    port_choice: cdktf.stringToTerraform(struct!.portChoice),
    service_key: cdktf.stringToTerraform(struct!.serviceKey),
  }
}


export function vxcAEndPartnerConfigAzureConfigToHclTerraform(struct?: VxcAEndPartnerConfigAzureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peers: {
      value: cdktf.listMapperHcl(vxcAEndPartnerConfigAzureConfigPeersToHclTerraform, false)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "VxcAEndPartnerConfigAzureConfigPeersList",
    },
    port_choice: {
      value: cdktf.stringToHclTerraform(struct!.portChoice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigAzureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEndPartnerConfigAzureConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._portChoice !== undefined) {
      hasAnyValues = true;
      internalValueResult.portChoice = this._portChoice;
    }
    if (this._serviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKey = this._serviceKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigAzureConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peers.internalValue = undefined;
      this._portChoice = undefined;
      this._serviceKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peers.internalValue = value.peers;
      this._portChoice = value.portChoice;
      this._serviceKey = value.serviceKey;
    }
  }

  // peers - computed: false, optional: true, required: false
  private _peers = new VxcAEndPartnerConfigAzureConfigPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: VxcAEndPartnerConfigAzureConfigPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // port_choice - computed: false, optional: false, required: true
  private _portChoice?: string; 
  public get portChoice() {
    return this.getStringAttribute('port_choice');
  }
  public set portChoice(value: string) {
    this._portChoice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portChoiceInput() {
    return this._portChoice;
  }

  // service_key - computed: false, optional: false, required: true
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
  }
}
export interface VxcAEndPartnerConfigGoogleConfig {
  /**
  * The pairing key of the partner configuration. Required for Google partner configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#pairing_key Vxc#pairing_key}
  */
  readonly pairingKey: string;
}

export function vxcAEndPartnerConfigGoogleConfigToTerraform(struct?: VxcAEndPartnerConfigGoogleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pairing_key: cdktf.stringToTerraform(struct!.pairingKey),
  }
}


export function vxcAEndPartnerConfigGoogleConfigToHclTerraform(struct?: VxcAEndPartnerConfigGoogleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pairing_key: {
      value: cdktf.stringToHclTerraform(struct!.pairingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigGoogleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEndPartnerConfigGoogleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pairingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingKey = this._pairingKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigGoogleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pairingKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pairingKey = value.pairingKey;
    }
  }

  // pairing_key - computed: false, optional: false, required: true
  private _pairingKey?: string; 
  public get pairingKey() {
    return this.getStringAttribute('pairing_key');
  }
  public set pairingKey(value: string) {
    this._pairingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingKeyInput() {
    return this._pairingKey;
  }
}
export interface VxcAEndPartnerConfigIbmConfig {
  /**
  * Customer's IBM Acount ID. Required for all IBM partner configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#account_id Vxc#account_id}
  */
  readonly accountId: string;
  /**
  * Customer's ASN. Valid ranges: 1-64495, 64999, 131072-4199999999, 4201000000-4201064511. Required unless the connection at the other end of the VXC is an MCR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_asn Vxc#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * Customer IPv4 network address including subnet mask. Default is /30 assigned from 169.254.0.0/16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_ip_address Vxc#customer_ip_address}
  */
  readonly customerIpAddress?: string;
  /**
  * Description of this connection for identification purposes. Max 100 characters from 0-9 a-z A-Z / - _ , Defaults to "MEGAPORT"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#name Vxc#name}
  */
  readonly name?: string;
  /**
  * Provider IPv4 network address including subnet mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#provider_ip_address Vxc#provider_ip_address}
  */
  readonly providerIpAddress?: string;
}

export function vxcAEndPartnerConfigIbmConfigToTerraform(struct?: VxcAEndPartnerConfigIbmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    customer_ip_address: cdktf.stringToTerraform(struct!.customerIpAddress),
    name: cdktf.stringToTerraform(struct!.name),
    provider_ip_address: cdktf.stringToTerraform(struct!.providerIpAddress),
  }
}


export function vxcAEndPartnerConfigIbmConfigToHclTerraform(struct?: VxcAEndPartnerConfigIbmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_asn: {
      value: cdktf.numberToHclTerraform(struct!.customerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.customerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.providerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigIbmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEndPartnerConfigIbmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._customerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerIpAddress = this._customerIpAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerIpAddress = this._providerIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigIbmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._customerAsn = undefined;
      this._customerIpAddress = undefined;
      this._name = undefined;
      this._providerIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._customerAsn = value.customerAsn;
      this._customerIpAddress = value.customerIpAddress;
      this._name = value.name;
      this._providerIpAddress = value.providerIpAddress;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // customer_asn - computed: false, optional: true, required: false
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // customer_ip_address - computed: false, optional: true, required: false
  private _customerIpAddress?: string; 
  public get customerIpAddress() {
    return this.getStringAttribute('customer_ip_address');
  }
  public set customerIpAddress(value: string) {
    this._customerIpAddress = value;
  }
  public resetCustomerIpAddress() {
    this._customerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIpAddressInput() {
    return this._customerIpAddress;
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

  // provider_ip_address - computed: false, optional: true, required: false
  private _providerIpAddress?: string; 
  public get providerIpAddress() {
    return this.getStringAttribute('provider_ip_address');
  }
  public set providerIpAddress(value: string) {
    this._providerIpAddress = value;
  }
  public resetProviderIpAddress() {
    this._providerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIpAddressInput() {
    return this._providerIpAddress;
  }
}
export interface VxcAEndPartnerConfigOracleConfig {
  /**
  * The virtual circuit ID of the partner configuration. Required for Oracle partner configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#virtual_circuit_id Vxc#virtual_circuit_id}
  */
  readonly virtualCircuitId: string;
}

export function vxcAEndPartnerConfigOracleConfigToTerraform(struct?: VxcAEndPartnerConfigOracleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_circuit_id: cdktf.stringToTerraform(struct!.virtualCircuitId),
  }
}


export function vxcAEndPartnerConfigOracleConfigToHclTerraform(struct?: VxcAEndPartnerConfigOracleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualCircuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigOracleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEndPartnerConfigOracleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualCircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualCircuitId = this._virtualCircuitId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigOracleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualCircuitId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualCircuitId = value.virtualCircuitId;
    }
  }

  // virtual_circuit_id - computed: false, optional: false, required: true
  private _virtualCircuitId?: string; 
  public get virtualCircuitId() {
    return this.getStringAttribute('virtual_circuit_id');
  }
  public set virtualCircuitId(value: string) {
    this._virtualCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualCircuitIdInput() {
    return this._virtualCircuitId;
  }
}
export interface VxcAEndPartnerConfigPartnerAEndConfigInterfacesBfd {
  /**
  * The multiplier of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#multiplier Vxc#multiplier}
  */
  readonly multiplier?: number;
  /**
  * The receive interval of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#rx_interval Vxc#rx_interval}
  */
  readonly rxInterval?: number;
  /**
  * The transmit interval of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#tx_interval Vxc#tx_interval}
  */
  readonly txInterval?: number;
}

export function vxcAEndPartnerConfigPartnerAEndConfigInterfacesBfdToTerraform(struct?: VxcAEndPartnerConfigPartnerAEndConfigInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    rx_interval: cdktf.numberToTerraform(struct!.rxInterval),
    tx_interval: cdktf.numberToTerraform(struct!.txInterval),
  }
}


export function vxcAEndPartnerConfigPartnerAEndConfigInterfacesBfdToHclTerraform(struct?: VxcAEndPartnerConfigPartnerAEndConfigInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_interval: {
      value: cdktf.numberToHclTerraform(struct!.rxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_interval: {
      value: cdktf.numberToHclTerraform(struct!.txInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigPartnerAEndConfigInterfacesBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEndPartnerConfigPartnerAEndConfigInterfacesBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._rxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxInterval = this._rxInterval;
    }
    if (this._txInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.txInterval = this._txInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigPartnerAEndConfigInterfacesBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multiplier = undefined;
      this._rxInterval = undefined;
      this._txInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multiplier = value.multiplier;
      this._rxInterval = value.rxInterval;
      this._txInterval = value.txInterval;
    }
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // rx_interval - computed: false, optional: true, required: false
  private _rxInterval?: number; 
  public get rxInterval() {
    return this.getNumberAttribute('rx_interval');
  }
  public set rxInterval(value: number) {
    this._rxInterval = value;
  }
  public resetRxInterval() {
    this._rxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxIntervalInput() {
    return this._rxInterval;
  }

  // tx_interval - computed: false, optional: true, required: false
  private _txInterval?: number; 
  public get txInterval() {
    return this.getNumberAttribute('tx_interval');
  }
  public set txInterval(value: number) {
    this._txInterval = value;
  }
  public resetTxInterval() {
    this._txInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txIntervalInput() {
    return this._txInterval;
  }
}
export interface VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections {
  /**
  * The AS path prepend count of the BGP connection. Minimum value of 0 and maximum value of 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#as_path_prepend_count Vxc#as_path_prepend_count}
  */
  readonly asPathPrependCount?: number;
  /**
  * Whether BFD is enabled for the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bfd_enabled Vxc#bfd_enabled}
  */
  readonly bfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * The denied export to of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#deny_export_to Vxc#deny_export_to}
  */
  readonly denyExportTo?: string[];
  /**
  * The description of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#description Vxc#description}
  */
  readonly description?: string;
  /**
  * The export blacklist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_blacklist Vxc#export_blacklist}
  */
  readonly exportBlacklist?: string;
  /**
  * The export policy of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_policy Vxc#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * The export whitelist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_whitelist Vxc#export_whitelist}
  */
  readonly exportWhitelist?: string;
  /**
  * The import blacklist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#import_blacklist Vxc#import_blacklist}
  */
  readonly importBlacklist?: string;
  /**
  * The import whitelist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#import_whitelist Vxc#import_whitelist}
  */
  readonly importWhitelist?: string;
  /**
  * The local ASN of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#local_asn Vxc#local_asn}
  */
  readonly localAsn?: number;
  /**
  * The local IP address of the BGP connection. Must be an IP address without a CIDR mask (e.g., "169.254.100.6").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#local_ip_address Vxc#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * The MED in of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#med_in Vxc#med_in}
  */
  readonly medIn?: number;
  /**
  * The MED out of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#med_out Vxc#med_out}
  */
  readonly medOut?: number;
  /**
  * The password of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#password Vxc#password}
  */
  readonly password?: string;
  /**
  * The peer ASN of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_asn Vxc#peer_asn}
  */
  readonly peerAsn?: number;
  /**
  * The peer IP address of the BGP connection. Must be an IP address without a CIDR mask (e.g., "169.254.100.1").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_ip_address Vxc#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * The permitted export to of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#permit_export_to Vxc#permit_export_to}
  */
  readonly permitExportTo?: string[];
  /**
  * Whether the BGP connection is shut down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#shutdown Vxc#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
}

export function vxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsToTerraform(struct?: VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_prepend_count: cdktf.numberToTerraform(struct!.asPathPrependCount),
    bfd_enabled: cdktf.booleanToTerraform(struct!.bfdEnabled),
    deny_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denyExportTo),
    description: cdktf.stringToTerraform(struct!.description),
    export_blacklist: cdktf.stringToTerraform(struct!.exportBlacklist),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    export_whitelist: cdktf.stringToTerraform(struct!.exportWhitelist),
    import_blacklist: cdktf.stringToTerraform(struct!.importBlacklist),
    import_whitelist: cdktf.stringToTerraform(struct!.importWhitelist),
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    med_in: cdktf.numberToTerraform(struct!.medIn),
    med_out: cdktf.numberToTerraform(struct!.medOut),
    password: cdktf.stringToTerraform(struct!.password),
    peer_asn: cdktf.numberToTerraform(struct!.peerAsn),
    peer_ip_address: cdktf.stringToTerraform(struct!.peerIpAddress),
    permit_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permitExportTo),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
  }
}


export function vxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsToHclTerraform(struct?: VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_prepend_count: {
      value: cdktf.numberToHclTerraform(struct!.asPathPrependCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bfdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denyExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.exportBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.exportWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.importBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.importWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_asn: {
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med_in: {
      value: cdktf.numberToHclTerraform(struct!.medIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    med_out: {
      value: cdktf.numberToHclTerraform(struct!.medOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_asn: {
      value: cdktf.numberToHclTerraform(struct!.peerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.peerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permitExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathPrependCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrependCount = this._asPathPrependCount;
    }
    if (this._bfdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdEnabled = this._bfdEnabled;
    }
    if (this._denyExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyExportTo = this._denyExportTo;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exportBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportBlacklist = this._exportBlacklist;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._exportWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportWhitelist = this._exportWhitelist;
    }
    if (this._importBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.importBlacklist = this._importBlacklist;
    }
    if (this._importWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.importWhitelist = this._importWhitelist;
    }
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._localIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpAddress = this._localIpAddress;
    }
    if (this._medIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.medIn = this._medIn;
    }
    if (this._medOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.medOut = this._medOut;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._peerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAsn = this._peerAsn;
    }
    if (this._peerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpAddress = this._peerIpAddress;
    }
    if (this._permitExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitExportTo = this._permitExportTo;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPathPrependCount = undefined;
      this._bfdEnabled = undefined;
      this._denyExportTo = undefined;
      this._description = undefined;
      this._exportBlacklist = undefined;
      this._exportPolicy = undefined;
      this._exportWhitelist = undefined;
      this._importBlacklist = undefined;
      this._importWhitelist = undefined;
      this._localAsn = undefined;
      this._localIpAddress = undefined;
      this._medIn = undefined;
      this._medOut = undefined;
      this._password = undefined;
      this._peerAsn = undefined;
      this._peerIpAddress = undefined;
      this._permitExportTo = undefined;
      this._shutdown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPathPrependCount = value.asPathPrependCount;
      this._bfdEnabled = value.bfdEnabled;
      this._denyExportTo = value.denyExportTo;
      this._description = value.description;
      this._exportBlacklist = value.exportBlacklist;
      this._exportPolicy = value.exportPolicy;
      this._exportWhitelist = value.exportWhitelist;
      this._importBlacklist = value.importBlacklist;
      this._importWhitelist = value.importWhitelist;
      this._localAsn = value.localAsn;
      this._localIpAddress = value.localIpAddress;
      this._medIn = value.medIn;
      this._medOut = value.medOut;
      this._password = value.password;
      this._peerAsn = value.peerAsn;
      this._peerIpAddress = value.peerIpAddress;
      this._permitExportTo = value.permitExportTo;
      this._shutdown = value.shutdown;
    }
  }

  // as_path_prepend_count - computed: false, optional: true, required: false
  private _asPathPrependCount?: number; 
  public get asPathPrependCount() {
    return this.getNumberAttribute('as_path_prepend_count');
  }
  public set asPathPrependCount(value: number) {
    this._asPathPrependCount = value;
  }
  public resetAsPathPrependCount() {
    this._asPathPrependCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependCountInput() {
    return this._asPathPrependCount;
  }

  // bfd_enabled - computed: false, optional: true, required: false
  private _bfdEnabled?: boolean | cdktf.IResolvable; 
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }
  public set bfdEnabled(value: boolean | cdktf.IResolvable) {
    this._bfdEnabled = value;
  }
  public resetBfdEnabled() {
    this._bfdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled;
  }

  // deny_export_to - computed: false, optional: true, required: false
  private _denyExportTo?: string[]; 
  public get denyExportTo() {
    return this.getListAttribute('deny_export_to');
  }
  public set denyExportTo(value: string[]) {
    this._denyExportTo = value;
  }
  public resetDenyExportTo() {
    this._denyExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyExportToInput() {
    return this._denyExportTo;
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

  // export_blacklist - computed: false, optional: true, required: false
  private _exportBlacklist?: string; 
  public get exportBlacklist() {
    return this.getStringAttribute('export_blacklist');
  }
  public set exportBlacklist(value: string) {
    this._exportBlacklist = value;
  }
  public resetExportBlacklist() {
    this._exportBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportBlacklistInput() {
    return this._exportBlacklist;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // export_whitelist - computed: false, optional: true, required: false
  private _exportWhitelist?: string; 
  public get exportWhitelist() {
    return this.getStringAttribute('export_whitelist');
  }
  public set exportWhitelist(value: string) {
    this._exportWhitelist = value;
  }
  public resetExportWhitelist() {
    this._exportWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportWhitelistInput() {
    return this._exportWhitelist;
  }

  // import_blacklist - computed: false, optional: true, required: false
  private _importBlacklist?: string; 
  public get importBlacklist() {
    return this.getStringAttribute('import_blacklist');
  }
  public set importBlacklist(value: string) {
    this._importBlacklist = value;
  }
  public resetImportBlacklist() {
    this._importBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importBlacklistInput() {
    return this._importBlacklist;
  }

  // import_whitelist - computed: false, optional: true, required: false
  private _importWhitelist?: string; 
  public get importWhitelist() {
    return this.getStringAttribute('import_whitelist');
  }
  public set importWhitelist(value: string) {
    this._importWhitelist = value;
  }
  public resetImportWhitelist() {
    this._importWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importWhitelistInput() {
    return this._importWhitelist;
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // local_ip_address - computed: false, optional: true, required: false
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  public resetLocalIpAddress() {
    this._localIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // med_in - computed: false, optional: true, required: false
  private _medIn?: number; 
  public get medIn() {
    return this.getNumberAttribute('med_in');
  }
  public set medIn(value: number) {
    this._medIn = value;
  }
  public resetMedIn() {
    this._medIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInInput() {
    return this._medIn;
  }

  // med_out - computed: false, optional: true, required: false
  private _medOut?: number; 
  public get medOut() {
    return this.getNumberAttribute('med_out');
  }
  public set medOut(value: number) {
    this._medOut = value;
  }
  public resetMedOut() {
    this._medOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medOutInput() {
    return this._medOut;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_asn - computed: false, optional: true, required: false
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // peer_ip_address - computed: false, optional: true, required: false
  private _peerIpAddress?: string; 
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  public resetPeerIpAddress() {
    this._peerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress;
  }

  // permit_export_to - computed: false, optional: true, required: false
  private _permitExportTo?: string[]; 
  public get permitExportTo() {
    return this.getListAttribute('permit_export_to');
  }
  public set permitExportTo(value: string[]) {
    this._permitExportTo = value;
  }
  public resetPermitExportTo() {
    this._permitExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitExportToInput() {
    return this._permitExportTo;
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
}

export class VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsList extends cdktf.ComplexList {
  public internalValue? : VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections[] | cdktf.IResolvable

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
  public get(index: number): VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsOutputReference {
    return new VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes {
  /**
  * The description of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#description Vxc#description}
  */
  readonly description?: string;
  /**
  * The next hop of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#next_hop Vxc#next_hop}
  */
  readonly nextHop?: string;
  /**
  * The prefix of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#prefix Vxc#prefix}
  */
  readonly prefix?: string;
}

export function vxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesToTerraform(struct?: VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function vxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesToHclTerraform(struct?: VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes | cdktf.IResolvable): any {
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
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nextHop = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nextHop = value.nextHop;
      this._prefix = value.prefix;
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

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesList extends cdktf.ComplexList {
  public internalValue? : VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes[] | cdktf.IResolvable

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
  public get(index: number): VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesOutputReference {
    return new VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcAEndPartnerConfigPartnerAEndConfigInterfaces {
  /**
  * The BFD of the partner configuration interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bfd Vxc#bfd}
  */
  readonly bfd?: VxcAEndPartnerConfigPartnerAEndConfigInterfacesBfd;
  /**
  * The BGP connections of the partner configuration interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bgp_connections Vxc#bgp_connections}
  */
  readonly bgpConnections?: VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections[] | cdktf.IResolvable;
  /**
  * The IP addresses of the partner configuration. Each entry must be in CIDR notation (e.g., "169.254.100.6/29").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_addresses Vxc#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * The IP routes of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_routes Vxc#ip_routes}
  */
  readonly ipRoutes?: VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes[] | cdktf.IResolvable;
  /**
  * The NAT IP addresses of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#nat_ip_addresses Vxc#nat_ip_addresses}
  */
  readonly natIpAddresses?: string[];
}

export function vxcAEndPartnerConfigPartnerAEndConfigInterfacesToTerraform(struct?: VxcAEndPartnerConfigPartnerAEndConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: vxcAEndPartnerConfigPartnerAEndConfigInterfacesBfdToTerraform(struct!.bfd),
    bgp_connections: cdktf.listMapper(vxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsToTerraform, false)(struct!.bgpConnections),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ip_routes: cdktf.listMapper(vxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesToTerraform, false)(struct!.ipRoutes),
    nat_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.natIpAddresses),
  }
}


export function vxcAEndPartnerConfigPartnerAEndConfigInterfacesToHclTerraform(struct?: VxcAEndPartnerConfigPartnerAEndConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: vxcAEndPartnerConfigPartnerAEndConfigInterfacesBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcAEndPartnerConfigPartnerAEndConfigInterfacesBfd",
    },
    bgp_connections: {
      value: cdktf.listMapperHcl(vxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsToHclTerraform, false)(struct!.bgpConnections),
      isBlock: true,
      type: "list",
      storageClassType: "VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsList",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_routes: {
      value: cdktf.listMapperHcl(vxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesToHclTerraform, false)(struct!.ipRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesList",
    },
    nat_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.natIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigPartnerAEndConfigInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcAEndPartnerConfigPartnerAEndConfigInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._bgpConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpConnections = this._bgpConnections?.internalValue;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ipRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRoutes = this._ipRoutes?.internalValue;
    }
    if (this._natIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpAddresses = this._natIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigPartnerAEndConfigInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfd.internalValue = undefined;
      this._bgpConnections.internalValue = undefined;
      this._ipAddresses = undefined;
      this._ipRoutes.internalValue = undefined;
      this._natIpAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfd.internalValue = value.bfd;
      this._bgpConnections.internalValue = value.bgpConnections;
      this._ipAddresses = value.ipAddresses;
      this._ipRoutes.internalValue = value.ipRoutes;
      this._natIpAddresses = value.natIpAddresses;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new VxcAEndPartnerConfigPartnerAEndConfigInterfacesBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: VxcAEndPartnerConfigPartnerAEndConfigInterfacesBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // bgp_connections - computed: false, optional: true, required: false
  private _bgpConnections = new VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsList(this, "bgp_connections", false);
  public get bgpConnections() {
    return this._bgpConnections;
  }
  public putBgpConnections(value: VxcAEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections[] | cdktf.IResolvable) {
    this._bgpConnections.internalValue = value;
  }
  public resetBgpConnections() {
    this._bgpConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpConnectionsInput() {
    return this._bgpConnections.internalValue;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_routes - computed: false, optional: true, required: false
  private _ipRoutes = new VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesList(this, "ip_routes", false);
  public get ipRoutes() {
    return this._ipRoutes;
  }
  public putIpRoutes(value: VxcAEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes[] | cdktf.IResolvable) {
    this._ipRoutes.internalValue = value;
  }
  public resetIpRoutes() {
    this._ipRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRoutesInput() {
    return this._ipRoutes.internalValue;
  }

  // nat_ip_addresses - computed: false, optional: true, required: false
  private _natIpAddresses?: string[]; 
  public get natIpAddresses() {
    return this.getListAttribute('nat_ip_addresses');
  }
  public set natIpAddresses(value: string[]) {
    this._natIpAddresses = value;
  }
  public resetNatIpAddresses() {
    this._natIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAddressesInput() {
    return this._natIpAddresses;
  }
}

export class VxcAEndPartnerConfigPartnerAEndConfigInterfacesList extends cdktf.ComplexList {
  public internalValue? : VxcAEndPartnerConfigPartnerAEndConfigInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VxcAEndPartnerConfigPartnerAEndConfigInterfacesOutputReference {
    return new VxcAEndPartnerConfigPartnerAEndConfigInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcAEndPartnerConfigPartnerAEndConfig {
  /**
  * The interfaces of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#interfaces Vxc#interfaces}
  */
  readonly interfaces: VxcAEndPartnerConfigPartnerAEndConfigInterfaces[] | cdktf.IResolvable;
}

export function vxcAEndPartnerConfigPartnerAEndConfigToTerraform(struct?: VxcAEndPartnerConfigPartnerAEndConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(vxcAEndPartnerConfigPartnerAEndConfigInterfacesToTerraform, false)(struct!.interfaces),
  }
}


export function vxcAEndPartnerConfigPartnerAEndConfigToHclTerraform(struct?: VxcAEndPartnerConfigPartnerAEndConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(vxcAEndPartnerConfigPartnerAEndConfigInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "VxcAEndPartnerConfigPartnerAEndConfigInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigPartnerAEndConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEndPartnerConfigPartnerAEndConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigPartnerAEndConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new VxcAEndPartnerConfigPartnerAEndConfigInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: VxcAEndPartnerConfigPartnerAEndConfigInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}
export interface VxcAEndPartnerConfigVrouterConfigInterfacesBfd {
  /**
  * The multiplier of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#multiplier Vxc#multiplier}
  */
  readonly multiplier?: number;
  /**
  * The receive interval of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#rx_interval Vxc#rx_interval}
  */
  readonly rxInterval?: number;
  /**
  * The transmit interval of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#tx_interval Vxc#tx_interval}
  */
  readonly txInterval?: number;
}

export function vxcAEndPartnerConfigVrouterConfigInterfacesBfdToTerraform(struct?: VxcAEndPartnerConfigVrouterConfigInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    rx_interval: cdktf.numberToTerraform(struct!.rxInterval),
    tx_interval: cdktf.numberToTerraform(struct!.txInterval),
  }
}


export function vxcAEndPartnerConfigVrouterConfigInterfacesBfdToHclTerraform(struct?: VxcAEndPartnerConfigVrouterConfigInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_interval: {
      value: cdktf.numberToHclTerraform(struct!.rxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_interval: {
      value: cdktf.numberToHclTerraform(struct!.txInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigVrouterConfigInterfacesBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEndPartnerConfigVrouterConfigInterfacesBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._rxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxInterval = this._rxInterval;
    }
    if (this._txInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.txInterval = this._txInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigVrouterConfigInterfacesBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multiplier = undefined;
      this._rxInterval = undefined;
      this._txInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multiplier = value.multiplier;
      this._rxInterval = value.rxInterval;
      this._txInterval = value.txInterval;
    }
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // rx_interval - computed: false, optional: true, required: false
  private _rxInterval?: number; 
  public get rxInterval() {
    return this.getNumberAttribute('rx_interval');
  }
  public set rxInterval(value: number) {
    this._rxInterval = value;
  }
  public resetRxInterval() {
    this._rxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxIntervalInput() {
    return this._rxInterval;
  }

  // tx_interval - computed: false, optional: true, required: false
  private _txInterval?: number; 
  public get txInterval() {
    return this.getNumberAttribute('tx_interval');
  }
  public set txInterval(value: number) {
    this._txInterval = value;
  }
  public resetTxInterval() {
    this._txInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txIntervalInput() {
    return this._txInterval;
  }
}
export interface VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnections {
  /**
  * The AS path prepend count of the BGP connection. Minimum value of 0 and maximum value of 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#as_path_prepend_count Vxc#as_path_prepend_count}
  */
  readonly asPathPrependCount?: number;
  /**
  * Whether BFD is enabled for the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bfd_enabled Vxc#bfd_enabled}
  */
  readonly bfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * The denied export to of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#deny_export_to Vxc#deny_export_to}
  */
  readonly denyExportTo?: string[];
  /**
  * The description of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#description Vxc#description}
  */
  readonly description?: string;
  /**
  * The export blacklist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_blacklist Vxc#export_blacklist}
  */
  readonly exportBlacklist?: string;
  /**
  * The export policy of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_policy Vxc#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * The export whitelist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_whitelist Vxc#export_whitelist}
  */
  readonly exportWhitelist?: string;
  /**
  * The import blacklist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#import_blacklist Vxc#import_blacklist}
  */
  readonly importBlacklist?: string;
  /**
  * The import whitelist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#import_whitelist Vxc#import_whitelist}
  */
  readonly importWhitelist?: string;
  /**
  * The local ASN of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#local_asn Vxc#local_asn}
  */
  readonly localAsn?: number;
  /**
  * The local IP address of the BGP connection. Must be an IP address without a CIDR mask (e.g., "169.254.100.6").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#local_ip_address Vxc#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * The MED in of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#med_in Vxc#med_in}
  */
  readonly medIn?: number;
  /**
  * The MED out of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#med_out Vxc#med_out}
  */
  readonly medOut?: number;
  /**
  * The password of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#password Vxc#password}
  */
  readonly password?: string;
  /**
  * The peer ASN of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_asn Vxc#peer_asn}
  */
  readonly peerAsn?: number;
  /**
  * The peer IP address of the BGP connection. Must be an IP address without a CIDR mask (e.g., "169.254.100.1").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_ip_address Vxc#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * Defines the default BGP routing policy for this BGP connection. The default depends on the CSP type of the far end of this VXC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_type Vxc#peer_type}
  */
  readonly peerType?: string;
  /**
  * The permitted export to of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#permit_export_to Vxc#permit_export_to}
  */
  readonly permitExportTo?: string[];
  /**
  * Whether the BGP connection is shut down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#shutdown Vxc#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
}

export function vxcAEndPartnerConfigVrouterConfigInterfacesBgpConnectionsToTerraform(struct?: VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_prepend_count: cdktf.numberToTerraform(struct!.asPathPrependCount),
    bfd_enabled: cdktf.booleanToTerraform(struct!.bfdEnabled),
    deny_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denyExportTo),
    description: cdktf.stringToTerraform(struct!.description),
    export_blacklist: cdktf.stringToTerraform(struct!.exportBlacklist),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    export_whitelist: cdktf.stringToTerraform(struct!.exportWhitelist),
    import_blacklist: cdktf.stringToTerraform(struct!.importBlacklist),
    import_whitelist: cdktf.stringToTerraform(struct!.importWhitelist),
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    med_in: cdktf.numberToTerraform(struct!.medIn),
    med_out: cdktf.numberToTerraform(struct!.medOut),
    password: cdktf.stringToTerraform(struct!.password),
    peer_asn: cdktf.numberToTerraform(struct!.peerAsn),
    peer_ip_address: cdktf.stringToTerraform(struct!.peerIpAddress),
    peer_type: cdktf.stringToTerraform(struct!.peerType),
    permit_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permitExportTo),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
  }
}


export function vxcAEndPartnerConfigVrouterConfigInterfacesBgpConnectionsToHclTerraform(struct?: VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_prepend_count: {
      value: cdktf.numberToHclTerraform(struct!.asPathPrependCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bfdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denyExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.exportBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.exportWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.importBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.importWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_asn: {
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med_in: {
      value: cdktf.numberToHclTerraform(struct!.medIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    med_out: {
      value: cdktf.numberToHclTerraform(struct!.medOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_asn: {
      value: cdktf.numberToHclTerraform(struct!.peerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.peerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_type: {
      value: cdktf.stringToHclTerraform(struct!.peerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permitExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathPrependCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrependCount = this._asPathPrependCount;
    }
    if (this._bfdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdEnabled = this._bfdEnabled;
    }
    if (this._denyExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyExportTo = this._denyExportTo;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exportBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportBlacklist = this._exportBlacklist;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._exportWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportWhitelist = this._exportWhitelist;
    }
    if (this._importBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.importBlacklist = this._importBlacklist;
    }
    if (this._importWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.importWhitelist = this._importWhitelist;
    }
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._localIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpAddress = this._localIpAddress;
    }
    if (this._medIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.medIn = this._medIn;
    }
    if (this._medOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.medOut = this._medOut;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._peerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAsn = this._peerAsn;
    }
    if (this._peerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpAddress = this._peerIpAddress;
    }
    if (this._peerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerType = this._peerType;
    }
    if (this._permitExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitExportTo = this._permitExportTo;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPathPrependCount = undefined;
      this._bfdEnabled = undefined;
      this._denyExportTo = undefined;
      this._description = undefined;
      this._exportBlacklist = undefined;
      this._exportPolicy = undefined;
      this._exportWhitelist = undefined;
      this._importBlacklist = undefined;
      this._importWhitelist = undefined;
      this._localAsn = undefined;
      this._localIpAddress = undefined;
      this._medIn = undefined;
      this._medOut = undefined;
      this._password = undefined;
      this._peerAsn = undefined;
      this._peerIpAddress = undefined;
      this._peerType = undefined;
      this._permitExportTo = undefined;
      this._shutdown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPathPrependCount = value.asPathPrependCount;
      this._bfdEnabled = value.bfdEnabled;
      this._denyExportTo = value.denyExportTo;
      this._description = value.description;
      this._exportBlacklist = value.exportBlacklist;
      this._exportPolicy = value.exportPolicy;
      this._exportWhitelist = value.exportWhitelist;
      this._importBlacklist = value.importBlacklist;
      this._importWhitelist = value.importWhitelist;
      this._localAsn = value.localAsn;
      this._localIpAddress = value.localIpAddress;
      this._medIn = value.medIn;
      this._medOut = value.medOut;
      this._password = value.password;
      this._peerAsn = value.peerAsn;
      this._peerIpAddress = value.peerIpAddress;
      this._peerType = value.peerType;
      this._permitExportTo = value.permitExportTo;
      this._shutdown = value.shutdown;
    }
  }

  // as_path_prepend_count - computed: false, optional: true, required: false
  private _asPathPrependCount?: number; 
  public get asPathPrependCount() {
    return this.getNumberAttribute('as_path_prepend_count');
  }
  public set asPathPrependCount(value: number) {
    this._asPathPrependCount = value;
  }
  public resetAsPathPrependCount() {
    this._asPathPrependCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependCountInput() {
    return this._asPathPrependCount;
  }

  // bfd_enabled - computed: false, optional: true, required: false
  private _bfdEnabled?: boolean | cdktf.IResolvable; 
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }
  public set bfdEnabled(value: boolean | cdktf.IResolvable) {
    this._bfdEnabled = value;
  }
  public resetBfdEnabled() {
    this._bfdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled;
  }

  // deny_export_to - computed: false, optional: true, required: false
  private _denyExportTo?: string[]; 
  public get denyExportTo() {
    return this.getListAttribute('deny_export_to');
  }
  public set denyExportTo(value: string[]) {
    this._denyExportTo = value;
  }
  public resetDenyExportTo() {
    this._denyExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyExportToInput() {
    return this._denyExportTo;
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

  // export_blacklist - computed: false, optional: true, required: false
  private _exportBlacklist?: string; 
  public get exportBlacklist() {
    return this.getStringAttribute('export_blacklist');
  }
  public set exportBlacklist(value: string) {
    this._exportBlacklist = value;
  }
  public resetExportBlacklist() {
    this._exportBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportBlacklistInput() {
    return this._exportBlacklist;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // export_whitelist - computed: false, optional: true, required: false
  private _exportWhitelist?: string; 
  public get exportWhitelist() {
    return this.getStringAttribute('export_whitelist');
  }
  public set exportWhitelist(value: string) {
    this._exportWhitelist = value;
  }
  public resetExportWhitelist() {
    this._exportWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportWhitelistInput() {
    return this._exportWhitelist;
  }

  // import_blacklist - computed: false, optional: true, required: false
  private _importBlacklist?: string; 
  public get importBlacklist() {
    return this.getStringAttribute('import_blacklist');
  }
  public set importBlacklist(value: string) {
    this._importBlacklist = value;
  }
  public resetImportBlacklist() {
    this._importBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importBlacklistInput() {
    return this._importBlacklist;
  }

  // import_whitelist - computed: false, optional: true, required: false
  private _importWhitelist?: string; 
  public get importWhitelist() {
    return this.getStringAttribute('import_whitelist');
  }
  public set importWhitelist(value: string) {
    this._importWhitelist = value;
  }
  public resetImportWhitelist() {
    this._importWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importWhitelistInput() {
    return this._importWhitelist;
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // local_ip_address - computed: false, optional: true, required: false
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  public resetLocalIpAddress() {
    this._localIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // med_in - computed: false, optional: true, required: false
  private _medIn?: number; 
  public get medIn() {
    return this.getNumberAttribute('med_in');
  }
  public set medIn(value: number) {
    this._medIn = value;
  }
  public resetMedIn() {
    this._medIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInInput() {
    return this._medIn;
  }

  // med_out - computed: false, optional: true, required: false
  private _medOut?: number; 
  public get medOut() {
    return this.getNumberAttribute('med_out');
  }
  public set medOut(value: number) {
    this._medOut = value;
  }
  public resetMedOut() {
    this._medOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medOutInput() {
    return this._medOut;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_asn - computed: false, optional: true, required: false
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // peer_ip_address - computed: false, optional: true, required: false
  private _peerIpAddress?: string; 
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  public resetPeerIpAddress() {
    this._peerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress;
  }

  // peer_type - computed: false, optional: true, required: false
  private _peerType?: string; 
  public get peerType() {
    return this.getStringAttribute('peer_type');
  }
  public set peerType(value: string) {
    this._peerType = value;
  }
  public resetPeerType() {
    this._peerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTypeInput() {
    return this._peerType;
  }

  // permit_export_to - computed: false, optional: true, required: false
  private _permitExportTo?: string[]; 
  public get permitExportTo() {
    return this.getListAttribute('permit_export_to');
  }
  public set permitExportTo(value: string[]) {
    this._permitExportTo = value;
  }
  public resetPermitExportTo() {
    this._permitExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitExportToInput() {
    return this._permitExportTo;
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
}

export class VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnectionsList extends cdktf.ComplexList {
  public internalValue? : VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnections[] | cdktf.IResolvable

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
  public get(index: number): VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnectionsOutputReference {
    return new VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutes {
  /**
  * The description of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#description Vxc#description}
  */
  readonly description?: string;
  /**
  * The next hop of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#next_hop Vxc#next_hop}
  */
  readonly nextHop?: string;
  /**
  * The prefix of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#prefix Vxc#prefix}
  */
  readonly prefix?: string;
}

export function vxcAEndPartnerConfigVrouterConfigInterfacesIpRoutesToTerraform(struct?: VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function vxcAEndPartnerConfigVrouterConfigInterfacesIpRoutesToHclTerraform(struct?: VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutes | cdktf.IResolvable): any {
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
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nextHop = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nextHop = value.nextHop;
      this._prefix = value.prefix;
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

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutesList extends cdktf.ComplexList {
  public internalValue? : VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutes[] | cdktf.IResolvable

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
  public get(index: number): VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutesOutputReference {
    return new VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcAEndPartnerConfigVrouterConfigInterfaces {
  /**
  * The BFD of the partner configuration interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bfd Vxc#bfd}
  */
  readonly bfd?: VxcAEndPartnerConfigVrouterConfigInterfacesBfd;
  /**
  * The BGP connections of the partner configuration interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bgp_connections Vxc#bgp_connections}
  */
  readonly bgpConnections?: VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnections[] | cdktf.IResolvable;
  /**
  * The IP addresses of the partner configuration. Each entry must be in CIDR notation (e.g., "169.254.100.6/29").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_addresses Vxc#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * The IP MTU of the partner configuration interface. Defaults to 1500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_mtu Vxc#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * The IP routes of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_routes Vxc#ip_routes}
  */
  readonly ipRoutes?: VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutes[] | cdktf.IResolvable;
  /**
  * The NAT IP addresses of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#nat_ip_addresses Vxc#nat_ip_addresses}
  */
  readonly natIpAddresses?: string[];
  /**
  * Inner-VLAN for implicit Q-inQ VXCs. Typically used only for Azure VXCs. The default is no inner-vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#vlan Vxc#vlan}
  */
  readonly vlan?: number;
}

export function vxcAEndPartnerConfigVrouterConfigInterfacesToTerraform(struct?: VxcAEndPartnerConfigVrouterConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: vxcAEndPartnerConfigVrouterConfigInterfacesBfdToTerraform(struct!.bfd),
    bgp_connections: cdktf.listMapper(vxcAEndPartnerConfigVrouterConfigInterfacesBgpConnectionsToTerraform, false)(struct!.bgpConnections),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ip_mtu: cdktf.numberToTerraform(struct!.ipMtu),
    ip_routes: cdktf.listMapper(vxcAEndPartnerConfigVrouterConfigInterfacesIpRoutesToTerraform, false)(struct!.ipRoutes),
    nat_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.natIpAddresses),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function vxcAEndPartnerConfigVrouterConfigInterfacesToHclTerraform(struct?: VxcAEndPartnerConfigVrouterConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: vxcAEndPartnerConfigVrouterConfigInterfacesBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcAEndPartnerConfigVrouterConfigInterfacesBfd",
    },
    bgp_connections: {
      value: cdktf.listMapperHcl(vxcAEndPartnerConfigVrouterConfigInterfacesBgpConnectionsToHclTerraform, false)(struct!.bgpConnections),
      isBlock: true,
      type: "list",
      storageClassType: "VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnectionsList",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_mtu: {
      value: cdktf.numberToHclTerraform(struct!.ipMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_routes: {
      value: cdktf.listMapperHcl(vxcAEndPartnerConfigVrouterConfigInterfacesIpRoutesToHclTerraform, false)(struct!.ipRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutesList",
    },
    nat_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.natIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigVrouterConfigInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcAEndPartnerConfigVrouterConfigInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._bgpConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpConnections = this._bgpConnections?.internalValue;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ipMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMtu = this._ipMtu;
    }
    if (this._ipRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRoutes = this._ipRoutes?.internalValue;
    }
    if (this._natIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpAddresses = this._natIpAddresses;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigVrouterConfigInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfd.internalValue = undefined;
      this._bgpConnections.internalValue = undefined;
      this._ipAddresses = undefined;
      this._ipMtu = undefined;
      this._ipRoutes.internalValue = undefined;
      this._natIpAddresses = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfd.internalValue = value.bfd;
      this._bgpConnections.internalValue = value.bgpConnections;
      this._ipAddresses = value.ipAddresses;
      this._ipMtu = value.ipMtu;
      this._ipRoutes.internalValue = value.ipRoutes;
      this._natIpAddresses = value.natIpAddresses;
      this._vlan = value.vlan;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new VxcAEndPartnerConfigVrouterConfigInterfacesBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: VxcAEndPartnerConfigVrouterConfigInterfacesBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // bgp_connections - computed: false, optional: true, required: false
  private _bgpConnections = new VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnectionsList(this, "bgp_connections", false);
  public get bgpConnections() {
    return this._bgpConnections;
  }
  public putBgpConnections(value: VxcAEndPartnerConfigVrouterConfigInterfacesBgpConnections[] | cdktf.IResolvable) {
    this._bgpConnections.internalValue = value;
  }
  public resetBgpConnections() {
    this._bgpConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpConnectionsInput() {
    return this._bgpConnections.internalValue;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_mtu - computed: false, optional: true, required: false
  private _ipMtu?: number; 
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }
  public set ipMtu(value: number) {
    this._ipMtu = value;
  }
  public resetIpMtu() {
    this._ipMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuInput() {
    return this._ipMtu;
  }

  // ip_routes - computed: false, optional: true, required: false
  private _ipRoutes = new VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutesList(this, "ip_routes", false);
  public get ipRoutes() {
    return this._ipRoutes;
  }
  public putIpRoutes(value: VxcAEndPartnerConfigVrouterConfigInterfacesIpRoutes[] | cdktf.IResolvable) {
    this._ipRoutes.internalValue = value;
  }
  public resetIpRoutes() {
    this._ipRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRoutesInput() {
    return this._ipRoutes.internalValue;
  }

  // nat_ip_addresses - computed: false, optional: true, required: false
  private _natIpAddresses?: string[]; 
  public get natIpAddresses() {
    return this.getListAttribute('nat_ip_addresses');
  }
  public set natIpAddresses(value: string[]) {
    this._natIpAddresses = value;
  }
  public resetNatIpAddresses() {
    this._natIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAddressesInput() {
    return this._natIpAddresses;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class VxcAEndPartnerConfigVrouterConfigInterfacesList extends cdktf.ComplexList {
  public internalValue? : VxcAEndPartnerConfigVrouterConfigInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VxcAEndPartnerConfigVrouterConfigInterfacesOutputReference {
    return new VxcAEndPartnerConfigVrouterConfigInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcAEndPartnerConfigVrouterConfig {
  /**
  * The interfaces of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#interfaces Vxc#interfaces}
  */
  readonly interfaces: VxcAEndPartnerConfigVrouterConfigInterfaces[] | cdktf.IResolvable;
}

export function vxcAEndPartnerConfigVrouterConfigToTerraform(struct?: VxcAEndPartnerConfigVrouterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(vxcAEndPartnerConfigVrouterConfigInterfacesToTerraform, false)(struct!.interfaces),
  }
}


export function vxcAEndPartnerConfigVrouterConfigToHclTerraform(struct?: VxcAEndPartnerConfigVrouterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(vxcAEndPartnerConfigVrouterConfigInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "VxcAEndPartnerConfigVrouterConfigInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigVrouterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEndPartnerConfigVrouterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfigVrouterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new VxcAEndPartnerConfigVrouterConfigInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: VxcAEndPartnerConfigVrouterConfigInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}
export interface VxcAEndPartnerConfig {
  /**
  * The AWS partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#aws_config Vxc#aws_config}
  */
  readonly awsConfig?: VxcAEndPartnerConfigAwsConfig;
  /**
  * The Azure partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#azure_config Vxc#azure_config}
  */
  readonly azureConfig?: VxcAEndPartnerConfigAzureConfig;
  /**
  * The Google partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#google_config Vxc#google_config}
  */
  readonly googleConfig?: VxcAEndPartnerConfigGoogleConfig;
  /**
  * The IBM partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ibm_config Vxc#ibm_config}
  */
  readonly ibmConfig?: VxcAEndPartnerConfigIbmConfig;
  /**
  * The Oracle partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#oracle_config Vxc#oracle_config}
  */
  readonly oracleConfig?: VxcAEndPartnerConfigOracleConfig;
  /**
  * The partner of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#partner Vxc#partner}
  */
  readonly partner: string;
  /**
  * The partner configuration of the A-End order configuration. Only exists for A-End Configurations. DEPRECATED: Use vrouter_config instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#partner_a_end_config Vxc#partner_a_end_config}
  */
  readonly partnerAEndConfig?: VxcAEndPartnerConfigPartnerAEndConfig;
  /**
  * The partner configuration of the virtual router configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#vrouter_config Vxc#vrouter_config}
  */
  readonly vrouterConfig?: VxcAEndPartnerConfigVrouterConfig;
}

export function vxcAEndPartnerConfigToTerraform(struct?: VxcAEndPartnerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_config: vxcAEndPartnerConfigAwsConfigToTerraform(struct!.awsConfig),
    azure_config: vxcAEndPartnerConfigAzureConfigToTerraform(struct!.azureConfig),
    google_config: vxcAEndPartnerConfigGoogleConfigToTerraform(struct!.googleConfig),
    ibm_config: vxcAEndPartnerConfigIbmConfigToTerraform(struct!.ibmConfig),
    oracle_config: vxcAEndPartnerConfigOracleConfigToTerraform(struct!.oracleConfig),
    partner: cdktf.stringToTerraform(struct!.partner),
    partner_a_end_config: vxcAEndPartnerConfigPartnerAEndConfigToTerraform(struct!.partnerAEndConfig),
    vrouter_config: vxcAEndPartnerConfigVrouterConfigToTerraform(struct!.vrouterConfig),
  }
}


export function vxcAEndPartnerConfigToHclTerraform(struct?: VxcAEndPartnerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_config: {
      value: vxcAEndPartnerConfigAwsConfigToHclTerraform(struct!.awsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcAEndPartnerConfigAwsConfig",
    },
    azure_config: {
      value: vxcAEndPartnerConfigAzureConfigToHclTerraform(struct!.azureConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcAEndPartnerConfigAzureConfig",
    },
    google_config: {
      value: vxcAEndPartnerConfigGoogleConfigToHclTerraform(struct!.googleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcAEndPartnerConfigGoogleConfig",
    },
    ibm_config: {
      value: vxcAEndPartnerConfigIbmConfigToHclTerraform(struct!.ibmConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcAEndPartnerConfigIbmConfig",
    },
    oracle_config: {
      value: vxcAEndPartnerConfigOracleConfigToHclTerraform(struct!.oracleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcAEndPartnerConfigOracleConfig",
    },
    partner: {
      value: cdktf.stringToHclTerraform(struct!.partner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partner_a_end_config: {
      value: vxcAEndPartnerConfigPartnerAEndConfigToHclTerraform(struct!.partnerAEndConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcAEndPartnerConfigPartnerAEndConfig",
    },
    vrouter_config: {
      value: vxcAEndPartnerConfigVrouterConfigToHclTerraform(struct!.vrouterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcAEndPartnerConfigVrouterConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcAEndPartnerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcAEndPartnerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsConfig = this._awsConfig?.internalValue;
    }
    if (this._azureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureConfig = this._azureConfig?.internalValue;
    }
    if (this._googleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleConfig = this._googleConfig?.internalValue;
    }
    if (this._ibmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibmConfig = this._ibmConfig?.internalValue;
    }
    if (this._oracleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleConfig = this._oracleConfig?.internalValue;
    }
    if (this._partner !== undefined) {
      hasAnyValues = true;
      internalValueResult.partner = this._partner;
    }
    if (this._partnerAEndConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerAEndConfig = this._partnerAEndConfig?.internalValue;
    }
    if (this._vrouterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrouterConfig = this._vrouterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcAEndPartnerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsConfig.internalValue = undefined;
      this._azureConfig.internalValue = undefined;
      this._googleConfig.internalValue = undefined;
      this._ibmConfig.internalValue = undefined;
      this._oracleConfig.internalValue = undefined;
      this._partner = undefined;
      this._partnerAEndConfig.internalValue = undefined;
      this._vrouterConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsConfig.internalValue = value.awsConfig;
      this._azureConfig.internalValue = value.azureConfig;
      this._googleConfig.internalValue = value.googleConfig;
      this._ibmConfig.internalValue = value.ibmConfig;
      this._oracleConfig.internalValue = value.oracleConfig;
      this._partner = value.partner;
      this._partnerAEndConfig.internalValue = value.partnerAEndConfig;
      this._vrouterConfig.internalValue = value.vrouterConfig;
    }
  }

  // aws_config - computed: false, optional: true, required: false
  private _awsConfig = new VxcAEndPartnerConfigAwsConfigOutputReference(this, "aws_config");
  public get awsConfig() {
    return this._awsConfig;
  }
  public putAwsConfig(value: VxcAEndPartnerConfigAwsConfig) {
    this._awsConfig.internalValue = value;
  }
  public resetAwsConfig() {
    this._awsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigInput() {
    return this._awsConfig.internalValue;
  }

  // azure_config - computed: false, optional: true, required: false
  private _azureConfig = new VxcAEndPartnerConfigAzureConfigOutputReference(this, "azure_config");
  public get azureConfig() {
    return this._azureConfig;
  }
  public putAzureConfig(value: VxcAEndPartnerConfigAzureConfig) {
    this._azureConfig.internalValue = value;
  }
  public resetAzureConfig() {
    this._azureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConfigInput() {
    return this._azureConfig.internalValue;
  }

  // google_config - computed: false, optional: true, required: false
  private _googleConfig = new VxcAEndPartnerConfigGoogleConfigOutputReference(this, "google_config");
  public get googleConfig() {
    return this._googleConfig;
  }
  public putGoogleConfig(value: VxcAEndPartnerConfigGoogleConfig) {
    this._googleConfig.internalValue = value;
  }
  public resetGoogleConfig() {
    this._googleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleConfigInput() {
    return this._googleConfig.internalValue;
  }

  // ibm_config - computed: false, optional: true, required: false
  private _ibmConfig = new VxcAEndPartnerConfigIbmConfigOutputReference(this, "ibm_config");
  public get ibmConfig() {
    return this._ibmConfig;
  }
  public putIbmConfig(value: VxcAEndPartnerConfigIbmConfig) {
    this._ibmConfig.internalValue = value;
  }
  public resetIbmConfig() {
    this._ibmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmConfigInput() {
    return this._ibmConfig.internalValue;
  }

  // oracle_config - computed: false, optional: true, required: false
  private _oracleConfig = new VxcAEndPartnerConfigOracleConfigOutputReference(this, "oracle_config");
  public get oracleConfig() {
    return this._oracleConfig;
  }
  public putOracleConfig(value: VxcAEndPartnerConfigOracleConfig) {
    this._oracleConfig.internalValue = value;
  }
  public resetOracleConfig() {
    this._oracleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleConfigInput() {
    return this._oracleConfig.internalValue;
  }

  // partner - computed: false, optional: false, required: true
  private _partner?: string; 
  public get partner() {
    return this.getStringAttribute('partner');
  }
  public set partner(value: string) {
    this._partner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerInput() {
    return this._partner;
  }

  // partner_a_end_config - computed: false, optional: true, required: false
  private _partnerAEndConfig = new VxcAEndPartnerConfigPartnerAEndConfigOutputReference(this, "partner_a_end_config");
  public get partnerAEndConfig() {
    return this._partnerAEndConfig;
  }
  public putPartnerAEndConfig(value: VxcAEndPartnerConfigPartnerAEndConfig) {
    this._partnerAEndConfig.internalValue = value;
  }
  public resetPartnerAEndConfig() {
    this._partnerAEndConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerAEndConfigInput() {
    return this._partnerAEndConfig.internalValue;
  }

  // vrouter_config - computed: false, optional: true, required: false
  private _vrouterConfig = new VxcAEndPartnerConfigVrouterConfigOutputReference(this, "vrouter_config");
  public get vrouterConfig() {
    return this._vrouterConfig;
  }
  public putVrouterConfig(value: VxcAEndPartnerConfigVrouterConfig) {
    this._vrouterConfig.internalValue = value;
  }
  public resetVrouterConfig() {
    this._vrouterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrouterConfigInput() {
    return this._vrouterConfig.internalValue;
  }
}
export interface VxcBEnd {
  /**
  * The current product UID of the B-End configuration. The Megaport API may change a Partner Port on the end configuration from the Requested Port UID to a different Port in the same location and diversity zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#current_product_uid Vxc#current_product_uid}
  */
  readonly currentProductUid?: string;
  /**
  * The inner VLAN of the B-End configuration. If the B-End ordered_vlan is untagged and set as -1, this field cannot be set by the API, as the VLAN of the B-End is designated as untagged. Note: Setting inner_vlan to 0 for auto-assignment is not currently supported by the provider. This is a known limitation that will be resolved in a future release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#inner_vlan Vxc#inner_vlan}
  */
  readonly innerVlan?: number;
  /**
  * The customer-ordered unique VLAN ID of the B-End configuration. Values can range from 2 to 4093. If this value is set to 0, or not included, the Megaport system allocates a valid VLAN ID to the B-End configuration.  To set this VLAN to untagged, set the VLAN value to -1. Please note that if the B-End ordered_vlan is set to -1, the Megaport API will not allow for the B-End inner_vlan field to be set as the VLAN for this end configuration will be untagged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ordered_vlan Vxc#ordered_vlan}
  */
  readonly orderedVlan?: number;
  /**
  * The Product UID requested by the user for the B-End configuration. Note: For cloud provider connections, the actual Product UID may differ from the requested UID due to Megaport's automatic port assignment for partner ports. This is expected behavior and ensures proper connectivity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#requested_product_uid Vxc#requested_product_uid}
  */
  readonly requestedProductUid?: string;
  /**
  * The network interface index of the B-End configuration. Required for MVE connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#vnic_index Vxc#vnic_index}
  */
  readonly vnicIndex?: number;
}

export function vxcBEndToTerraform(struct?: VxcBEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_product_uid: cdktf.stringToTerraform(struct!.currentProductUid),
    inner_vlan: cdktf.numberToTerraform(struct!.innerVlan),
    ordered_vlan: cdktf.numberToTerraform(struct!.orderedVlan),
    requested_product_uid: cdktf.stringToTerraform(struct!.requestedProductUid),
    vnic_index: cdktf.numberToTerraform(struct!.vnicIndex),
  }
}


export function vxcBEndToHclTerraform(struct?: VxcBEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_product_uid: {
      value: cdktf.stringToHclTerraform(struct!.currentProductUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inner_vlan: {
      value: cdktf.numberToHclTerraform(struct!.innerVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ordered_vlan: {
      value: cdktf.numberToHclTerraform(struct!.orderedVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requested_product_uid: {
      value: cdktf.stringToHclTerraform(struct!.requestedProductUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnic_index: {
      value: cdktf.numberToHclTerraform(struct!.vnicIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentProductUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentProductUid = this._currentProductUid;
    }
    if (this._innerVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.innerVlan = this._innerVlan;
    }
    if (this._orderedVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderedVlan = this._orderedVlan;
    }
    if (this._requestedProductUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedProductUid = this._requestedProductUid;
    }
    if (this._vnicIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicIndex = this._vnicIndex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentProductUid = undefined;
      this._innerVlan = undefined;
      this._orderedVlan = undefined;
      this._requestedProductUid = undefined;
      this._vnicIndex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentProductUid = value.currentProductUid;
      this._innerVlan = value.innerVlan;
      this._orderedVlan = value.orderedVlan;
      this._requestedProductUid = value.requestedProductUid;
      this._vnicIndex = value.vnicIndex;
    }
  }

  // current_product_uid - computed: true, optional: true, required: false
  private _currentProductUid?: string; 
  public get currentProductUid() {
    return this.getStringAttribute('current_product_uid');
  }
  public set currentProductUid(value: string) {
    this._currentProductUid = value;
  }
  public resetCurrentProductUid() {
    this._currentProductUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentProductUidInput() {
    return this._currentProductUid;
  }

  // inner_vlan - computed: true, optional: true, required: false
  private _innerVlan?: number; 
  public get innerVlan() {
    return this.getNumberAttribute('inner_vlan');
  }
  public set innerVlan(value: number) {
    this._innerVlan = value;
  }
  public resetInnerVlan() {
    this._innerVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVlanInput() {
    return this._innerVlan;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }

  // ordered_vlan - computed: true, optional: true, required: false
  private _orderedVlan?: number; 
  public get orderedVlan() {
    return this.getNumberAttribute('ordered_vlan');
  }
  public set orderedVlan(value: number) {
    this._orderedVlan = value;
  }
  public resetOrderedVlan() {
    this._orderedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedVlanInput() {
    return this._orderedVlan;
  }

  // owner_uid - computed: true, optional: false, required: false
  public get ownerUid() {
    return this.getStringAttribute('owner_uid');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // requested_product_uid - computed: true, optional: true, required: false
  private _requestedProductUid?: string; 
  public get requestedProductUid() {
    return this.getStringAttribute('requested_product_uid');
  }
  public set requestedProductUid(value: string) {
    this._requestedProductUid = value;
  }
  public resetRequestedProductUid() {
    this._requestedProductUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedProductUidInput() {
    return this._requestedProductUid;
  }

  // secondary_name - computed: true, optional: false, required: false
  public get secondaryName() {
    return this.getStringAttribute('secondary_name');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }

  // vnic_index - computed: true, optional: true, required: false
  private _vnicIndex?: number; 
  public get vnicIndex() {
    return this.getNumberAttribute('vnic_index');
  }
  public set vnicIndex(value: number) {
    this._vnicIndex = value;
  }
  public resetVnicIndex() {
    this._vnicIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicIndexInput() {
    return this._vnicIndex;
  }
}
export interface VxcBEndPartnerConfigAwsConfig {
  /**
  * The Amazon ASN of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#amazon_asn Vxc#amazon_asn}
  */
  readonly amazonAsn?: number;
  /**
  * The Amazon IP address of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#amazon_ip_address Vxc#amazon_ip_address}
  */
  readonly amazonIpAddress?: string;
  /**
  * The ASN of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#asn Vxc#asn}
  */
  readonly asn?: number;
  /**
  * The authentication key of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#auth_key Vxc#auth_key}
  */
  readonly authKey?: string;
  /**
  * The connection type of the partner configuration. Required for AWS partner configurations - valid values are "AWS" for Virtual Interface or AWSHC for AWS Hosted Connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#connect_type Vxc#connect_type}
  */
  readonly connectType: string;
  /**
  * The customer IP address of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_ip_address Vxc#customer_ip_address}
  */
  readonly customerIpAddress?: string;
  /**
  * The name of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#name Vxc#name}
  */
  readonly name: string;
  /**
  * The owner AWS account of the partner configuration. Required for AWS partner configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#owner_account Vxc#owner_account}
  */
  readonly ownerAccount: string;
  /**
  * The prefixes of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#prefixes Vxc#prefixes}
  */
  readonly prefixes?: string;
  /**
  * The type of the AWS Virtual Interface. Required for AWS Virtual Interface Partner Configurations (e.g. if the connect_type is "AWS"). Valid values are "private", "public", or "transit".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#type Vxc#type}
  */
  readonly type?: string;
}

export function vxcBEndPartnerConfigAwsConfigToTerraform(struct?: VxcBEndPartnerConfigAwsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_asn: cdktf.numberToTerraform(struct!.amazonAsn),
    amazon_ip_address: cdktf.stringToTerraform(struct!.amazonIpAddress),
    asn: cdktf.numberToTerraform(struct!.asn),
    auth_key: cdktf.stringToTerraform(struct!.authKey),
    connect_type: cdktf.stringToTerraform(struct!.connectType),
    customer_ip_address: cdktf.stringToTerraform(struct!.customerIpAddress),
    name: cdktf.stringToTerraform(struct!.name),
    owner_account: cdktf.stringToTerraform(struct!.ownerAccount),
    prefixes: cdktf.stringToTerraform(struct!.prefixes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vxcBEndPartnerConfigAwsConfigToHclTerraform(struct?: VxcBEndPartnerConfigAwsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_asn: {
      value: cdktf.numberToHclTerraform(struct!.amazonAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    amazon_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.amazonIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_type: {
      value: cdktf.stringToHclTerraform(struct!.connectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.customerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_account: {
      value: cdktf.stringToHclTerraform(struct!.ownerAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefixes: {
      value: cdktf.stringToHclTerraform(struct!.prefixes),
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

export class VxcBEndPartnerConfigAwsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEndPartnerConfigAwsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonAsn = this._amazonAsn;
    }
    if (this._amazonIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonIpAddress = this._amazonIpAddress;
    }
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._connectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectType = this._connectType;
    }
    if (this._customerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerIpAddress = this._customerIpAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerAccount = this._ownerAccount;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigAwsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonAsn = undefined;
      this._amazonIpAddress = undefined;
      this._asn = undefined;
      this._authKey = undefined;
      this._connectType = undefined;
      this._customerIpAddress = undefined;
      this._name = undefined;
      this._ownerAccount = undefined;
      this._prefixes = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonAsn = value.amazonAsn;
      this._amazonIpAddress = value.amazonIpAddress;
      this._asn = value.asn;
      this._authKey = value.authKey;
      this._connectType = value.connectType;
      this._customerIpAddress = value.customerIpAddress;
      this._name = value.name;
      this._ownerAccount = value.ownerAccount;
      this._prefixes = value.prefixes;
      this._type = value.type;
    }
  }

  // amazon_asn - computed: false, optional: true, required: false
  private _amazonAsn?: number; 
  public get amazonAsn() {
    return this.getNumberAttribute('amazon_asn');
  }
  public set amazonAsn(value: number) {
    this._amazonAsn = value;
  }
  public resetAmazonAsn() {
    this._amazonAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonAsnInput() {
    return this._amazonAsn;
  }

  // amazon_ip_address - computed: false, optional: true, required: false
  private _amazonIpAddress?: string; 
  public get amazonIpAddress() {
    return this.getStringAttribute('amazon_ip_address');
  }
  public set amazonIpAddress(value: string) {
    this._amazonIpAddress = value;
  }
  public resetAmazonIpAddress() {
    this._amazonIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonIpAddressInput() {
    return this._amazonIpAddress;
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

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // connect_type - computed: false, optional: false, required: true
  private _connectType?: string; 
  public get connectType() {
    return this.getStringAttribute('connect_type');
  }
  public set connectType(value: string) {
    this._connectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTypeInput() {
    return this._connectType;
  }

  // customer_ip_address - computed: false, optional: true, required: false
  private _customerIpAddress?: string; 
  public get customerIpAddress() {
    return this.getStringAttribute('customer_ip_address');
  }
  public set customerIpAddress(value: string) {
    this._customerIpAddress = value;
  }
  public resetCustomerIpAddress() {
    this._customerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIpAddressInput() {
    return this._customerIpAddress;
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

  // owner_account - computed: false, optional: false, required: true
  private _ownerAccount?: string; 
  public get ownerAccount() {
    return this.getStringAttribute('owner_account');
  }
  public set ownerAccount(value: string) {
    this._ownerAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerAccountInput() {
    return this._ownerAccount;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string; 
  public get prefixes() {
    return this.getStringAttribute('prefixes');
  }
  public set prefixes(value: string) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
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
}
export interface VxcBEndPartnerConfigAzureConfigPeers {
  /**
  * The peer ASN of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_asn Vxc#peer_asn}
  */
  readonly peerAsn?: string;
  /**
  * The prefixes of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#prefixes Vxc#prefixes}
  */
  readonly prefixes?: string;
  /**
  * The primary subnet of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#primary_subnet Vxc#primary_subnet}
  */
  readonly primarySubnet?: string;
  /**
  * The secondary subnet of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#secondary_subnet Vxc#secondary_subnet}
  */
  readonly secondarySubnet?: string;
  /**
  * The shared key of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#shared_key Vxc#shared_key}
  */
  readonly sharedKey?: string;
  /**
  * The type of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#type Vxc#type}
  */
  readonly type: string;
  /**
  * The VLAN of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#vlan Vxc#vlan}
  */
  readonly vlan?: number;
}

export function vxcBEndPartnerConfigAzureConfigPeersToTerraform(struct?: VxcBEndPartnerConfigAzureConfigPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_asn: cdktf.stringToTerraform(struct!.peerAsn),
    prefixes: cdktf.stringToTerraform(struct!.prefixes),
    primary_subnet: cdktf.stringToTerraform(struct!.primarySubnet),
    secondary_subnet: cdktf.stringToTerraform(struct!.secondarySubnet),
    shared_key: cdktf.stringToTerraform(struct!.sharedKey),
    type: cdktf.stringToTerraform(struct!.type),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function vxcBEndPartnerConfigAzureConfigPeersToHclTerraform(struct?: VxcBEndPartnerConfigAzureConfigPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_asn: {
      value: cdktf.stringToHclTerraform(struct!.peerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefixes: {
      value: cdktf.stringToHclTerraform(struct!.prefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_subnet: {
      value: cdktf.stringToHclTerraform(struct!.primarySubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_subnet: {
      value: cdktf.stringToHclTerraform(struct!.secondarySubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_key: {
      value: cdktf.stringToHclTerraform(struct!.sharedKey),
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
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigAzureConfigPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcBEndPartnerConfigAzureConfigPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAsn = this._peerAsn;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    if (this._primarySubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.primarySubnet = this._primarySubnet;
    }
    if (this._secondarySubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondarySubnet = this._secondarySubnet;
    }
    if (this._sharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedKey = this._sharedKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigAzureConfigPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerAsn = undefined;
      this._prefixes = undefined;
      this._primarySubnet = undefined;
      this._secondarySubnet = undefined;
      this._sharedKey = undefined;
      this._type = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerAsn = value.peerAsn;
      this._prefixes = value.prefixes;
      this._primarySubnet = value.primarySubnet;
      this._secondarySubnet = value.secondarySubnet;
      this._sharedKey = value.sharedKey;
      this._type = value.type;
      this._vlan = value.vlan;
    }
  }

  // peer_asn - computed: false, optional: true, required: false
  private _peerAsn?: string; 
  public get peerAsn() {
    return this.getStringAttribute('peer_asn');
  }
  public set peerAsn(value: string) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string; 
  public get prefixes() {
    return this.getStringAttribute('prefixes');
  }
  public set prefixes(value: string) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }

  // primary_subnet - computed: false, optional: true, required: false
  private _primarySubnet?: string; 
  public get primarySubnet() {
    return this.getStringAttribute('primary_subnet');
  }
  public set primarySubnet(value: string) {
    this._primarySubnet = value;
  }
  public resetPrimarySubnet() {
    this._primarySubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarySubnetInput() {
    return this._primarySubnet;
  }

  // secondary_subnet - computed: false, optional: true, required: false
  private _secondarySubnet?: string; 
  public get secondarySubnet() {
    return this.getStringAttribute('secondary_subnet');
  }
  public set secondarySubnet(value: string) {
    this._secondarySubnet = value;
  }
  public resetSecondarySubnet() {
    this._secondarySubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySubnetInput() {
    return this._secondarySubnet;
  }

  // shared_key - computed: false, optional: true, required: false
  private _sharedKey?: string; 
  public get sharedKey() {
    return this.getStringAttribute('shared_key');
  }
  public set sharedKey(value: string) {
    this._sharedKey = value;
  }
  public resetSharedKey() {
    this._sharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedKeyInput() {
    return this._sharedKey;
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

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class VxcBEndPartnerConfigAzureConfigPeersList extends cdktf.ComplexList {
  public internalValue? : VxcBEndPartnerConfigAzureConfigPeers[] | cdktf.IResolvable

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
  public get(index: number): VxcBEndPartnerConfigAzureConfigPeersOutputReference {
    return new VxcBEndPartnerConfigAzureConfigPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcBEndPartnerConfigAzureConfig {
  /**
  * The peers of the partner configuration. If this is set, the user must delete any Azure resources associated with the VXC on Azure before deleting the VXC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peers Vxc#peers}
  */
  readonly peers?: VxcBEndPartnerConfigAzureConfigPeers[] | cdktf.IResolvable;
  /**
  * Which port to choose when building the VXC. Can either be 'primary' or 'secondary'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#port_choice Vxc#port_choice}
  */
  readonly portChoice: string;
  /**
  * The service key of the partner configuration. Required for Azure partner configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#service_key Vxc#service_key}
  */
  readonly serviceKey: string;
}

export function vxcBEndPartnerConfigAzureConfigToTerraform(struct?: VxcBEndPartnerConfigAzureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peers: cdktf.listMapper(vxcBEndPartnerConfigAzureConfigPeersToTerraform, false)(struct!.peers),
    port_choice: cdktf.stringToTerraform(struct!.portChoice),
    service_key: cdktf.stringToTerraform(struct!.serviceKey),
  }
}


export function vxcBEndPartnerConfigAzureConfigToHclTerraform(struct?: VxcBEndPartnerConfigAzureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peers: {
      value: cdktf.listMapperHcl(vxcBEndPartnerConfigAzureConfigPeersToHclTerraform, false)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "VxcBEndPartnerConfigAzureConfigPeersList",
    },
    port_choice: {
      value: cdktf.stringToHclTerraform(struct!.portChoice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigAzureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEndPartnerConfigAzureConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._portChoice !== undefined) {
      hasAnyValues = true;
      internalValueResult.portChoice = this._portChoice;
    }
    if (this._serviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKey = this._serviceKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigAzureConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peers.internalValue = undefined;
      this._portChoice = undefined;
      this._serviceKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peers.internalValue = value.peers;
      this._portChoice = value.portChoice;
      this._serviceKey = value.serviceKey;
    }
  }

  // peers - computed: false, optional: true, required: false
  private _peers = new VxcBEndPartnerConfigAzureConfigPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: VxcBEndPartnerConfigAzureConfigPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // port_choice - computed: false, optional: false, required: true
  private _portChoice?: string; 
  public get portChoice() {
    return this.getStringAttribute('port_choice');
  }
  public set portChoice(value: string) {
    this._portChoice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portChoiceInput() {
    return this._portChoice;
  }

  // service_key - computed: false, optional: false, required: true
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
  }
}
export interface VxcBEndPartnerConfigGoogleConfig {
  /**
  * The pairing key of the partner configuration. Required for Google partner configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#pairing_key Vxc#pairing_key}
  */
  readonly pairingKey: string;
}

export function vxcBEndPartnerConfigGoogleConfigToTerraform(struct?: VxcBEndPartnerConfigGoogleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pairing_key: cdktf.stringToTerraform(struct!.pairingKey),
  }
}


export function vxcBEndPartnerConfigGoogleConfigToHclTerraform(struct?: VxcBEndPartnerConfigGoogleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pairing_key: {
      value: cdktf.stringToHclTerraform(struct!.pairingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigGoogleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEndPartnerConfigGoogleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pairingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingKey = this._pairingKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigGoogleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pairingKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pairingKey = value.pairingKey;
    }
  }

  // pairing_key - computed: false, optional: false, required: true
  private _pairingKey?: string; 
  public get pairingKey() {
    return this.getStringAttribute('pairing_key');
  }
  public set pairingKey(value: string) {
    this._pairingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingKeyInput() {
    return this._pairingKey;
  }
}
export interface VxcBEndPartnerConfigIbmConfig {
  /**
  * Customer's IBM Acount ID. Required for all IBM partner configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#account_id Vxc#account_id}
  */
  readonly accountId: string;
  /**
  * Customer's ASN. Valid ranges: 1-64495, 64999, 131072-4199999999, 4201000000-4201064511. Required unless the connection at the other end of the VXC is an MCR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_asn Vxc#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * Customer IPv4 network address including subnet mask. Default is /30 assigned from 169.254.0.0/16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_ip_address Vxc#customer_ip_address}
  */
  readonly customerIpAddress?: string;
  /**
  * Description of this connection for identification purposes. Max 100 characters from 0-9 a-z A-Z / - _ , Defaults to "MEGAPORT"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#name Vxc#name}
  */
  readonly name?: string;
  /**
  * Provider IPv4 network address including subnet mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#provider_ip_address Vxc#provider_ip_address}
  */
  readonly providerIpAddress?: string;
}

export function vxcBEndPartnerConfigIbmConfigToTerraform(struct?: VxcBEndPartnerConfigIbmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    customer_ip_address: cdktf.stringToTerraform(struct!.customerIpAddress),
    name: cdktf.stringToTerraform(struct!.name),
    provider_ip_address: cdktf.stringToTerraform(struct!.providerIpAddress),
  }
}


export function vxcBEndPartnerConfigIbmConfigToHclTerraform(struct?: VxcBEndPartnerConfigIbmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_asn: {
      value: cdktf.numberToHclTerraform(struct!.customerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.customerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.providerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigIbmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEndPartnerConfigIbmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._customerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerIpAddress = this._customerIpAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerIpAddress = this._providerIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigIbmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._customerAsn = undefined;
      this._customerIpAddress = undefined;
      this._name = undefined;
      this._providerIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._customerAsn = value.customerAsn;
      this._customerIpAddress = value.customerIpAddress;
      this._name = value.name;
      this._providerIpAddress = value.providerIpAddress;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // customer_asn - computed: false, optional: true, required: false
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // customer_ip_address - computed: false, optional: true, required: false
  private _customerIpAddress?: string; 
  public get customerIpAddress() {
    return this.getStringAttribute('customer_ip_address');
  }
  public set customerIpAddress(value: string) {
    this._customerIpAddress = value;
  }
  public resetCustomerIpAddress() {
    this._customerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIpAddressInput() {
    return this._customerIpAddress;
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

  // provider_ip_address - computed: false, optional: true, required: false
  private _providerIpAddress?: string; 
  public get providerIpAddress() {
    return this.getStringAttribute('provider_ip_address');
  }
  public set providerIpAddress(value: string) {
    this._providerIpAddress = value;
  }
  public resetProviderIpAddress() {
    this._providerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIpAddressInput() {
    return this._providerIpAddress;
  }
}
export interface VxcBEndPartnerConfigOracleConfig {
  /**
  * The virtual circuit ID of the partner configuration. Required for Oracle partner configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#virtual_circuit_id Vxc#virtual_circuit_id}
  */
  readonly virtualCircuitId: string;
}

export function vxcBEndPartnerConfigOracleConfigToTerraform(struct?: VxcBEndPartnerConfigOracleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_circuit_id: cdktf.stringToTerraform(struct!.virtualCircuitId),
  }
}


export function vxcBEndPartnerConfigOracleConfigToHclTerraform(struct?: VxcBEndPartnerConfigOracleConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.virtualCircuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigOracleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEndPartnerConfigOracleConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualCircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualCircuitId = this._virtualCircuitId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigOracleConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualCircuitId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualCircuitId = value.virtualCircuitId;
    }
  }

  // virtual_circuit_id - computed: false, optional: false, required: true
  private _virtualCircuitId?: string; 
  public get virtualCircuitId() {
    return this.getStringAttribute('virtual_circuit_id');
  }
  public set virtualCircuitId(value: string) {
    this._virtualCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualCircuitIdInput() {
    return this._virtualCircuitId;
  }
}
export interface VxcBEndPartnerConfigPartnerAEndConfigInterfacesBfd {
  /**
  * The multiplier of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#multiplier Vxc#multiplier}
  */
  readonly multiplier?: number;
  /**
  * The receive interval of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#rx_interval Vxc#rx_interval}
  */
  readonly rxInterval?: number;
  /**
  * The transmit interval of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#tx_interval Vxc#tx_interval}
  */
  readonly txInterval?: number;
}

export function vxcBEndPartnerConfigPartnerAEndConfigInterfacesBfdToTerraform(struct?: VxcBEndPartnerConfigPartnerAEndConfigInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    rx_interval: cdktf.numberToTerraform(struct!.rxInterval),
    tx_interval: cdktf.numberToTerraform(struct!.txInterval),
  }
}


export function vxcBEndPartnerConfigPartnerAEndConfigInterfacesBfdToHclTerraform(struct?: VxcBEndPartnerConfigPartnerAEndConfigInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_interval: {
      value: cdktf.numberToHclTerraform(struct!.rxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_interval: {
      value: cdktf.numberToHclTerraform(struct!.txInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigPartnerAEndConfigInterfacesBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEndPartnerConfigPartnerAEndConfigInterfacesBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._rxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxInterval = this._rxInterval;
    }
    if (this._txInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.txInterval = this._txInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigPartnerAEndConfigInterfacesBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multiplier = undefined;
      this._rxInterval = undefined;
      this._txInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multiplier = value.multiplier;
      this._rxInterval = value.rxInterval;
      this._txInterval = value.txInterval;
    }
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // rx_interval - computed: false, optional: true, required: false
  private _rxInterval?: number; 
  public get rxInterval() {
    return this.getNumberAttribute('rx_interval');
  }
  public set rxInterval(value: number) {
    this._rxInterval = value;
  }
  public resetRxInterval() {
    this._rxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxIntervalInput() {
    return this._rxInterval;
  }

  // tx_interval - computed: false, optional: true, required: false
  private _txInterval?: number; 
  public get txInterval() {
    return this.getNumberAttribute('tx_interval');
  }
  public set txInterval(value: number) {
    this._txInterval = value;
  }
  public resetTxInterval() {
    this._txInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txIntervalInput() {
    return this._txInterval;
  }
}
export interface VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections {
  /**
  * The AS path prepend count of the BGP connection. Minimum value of 0 and maximum value of 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#as_path_prepend_count Vxc#as_path_prepend_count}
  */
  readonly asPathPrependCount?: number;
  /**
  * Whether BFD is enabled for the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bfd_enabled Vxc#bfd_enabled}
  */
  readonly bfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * The denied export to of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#deny_export_to Vxc#deny_export_to}
  */
  readonly denyExportTo?: string[];
  /**
  * The description of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#description Vxc#description}
  */
  readonly description?: string;
  /**
  * The export blacklist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_blacklist Vxc#export_blacklist}
  */
  readonly exportBlacklist?: string;
  /**
  * The export policy of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_policy Vxc#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * The export whitelist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_whitelist Vxc#export_whitelist}
  */
  readonly exportWhitelist?: string;
  /**
  * The import blacklist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#import_blacklist Vxc#import_blacklist}
  */
  readonly importBlacklist?: string;
  /**
  * The import whitelist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#import_whitelist Vxc#import_whitelist}
  */
  readonly importWhitelist?: string;
  /**
  * The local ASN of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#local_asn Vxc#local_asn}
  */
  readonly localAsn?: number;
  /**
  * The local IP address of the BGP connection. Must be an IP address without a CIDR mask (e.g., "169.254.100.6").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#local_ip_address Vxc#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * The MED in of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#med_in Vxc#med_in}
  */
  readonly medIn?: number;
  /**
  * The MED out of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#med_out Vxc#med_out}
  */
  readonly medOut?: number;
  /**
  * The password of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#password Vxc#password}
  */
  readonly password?: string;
  /**
  * The peer ASN of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_asn Vxc#peer_asn}
  */
  readonly peerAsn?: number;
  /**
  * The peer IP address of the BGP connection. Must be an IP address without a CIDR mask (e.g., "169.254.100.1").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_ip_address Vxc#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * The permitted export to of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#permit_export_to Vxc#permit_export_to}
  */
  readonly permitExportTo?: string[];
  /**
  * Whether the BGP connection is shut down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#shutdown Vxc#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
}

export function vxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsToTerraform(struct?: VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_prepend_count: cdktf.numberToTerraform(struct!.asPathPrependCount),
    bfd_enabled: cdktf.booleanToTerraform(struct!.bfdEnabled),
    deny_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denyExportTo),
    description: cdktf.stringToTerraform(struct!.description),
    export_blacklist: cdktf.stringToTerraform(struct!.exportBlacklist),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    export_whitelist: cdktf.stringToTerraform(struct!.exportWhitelist),
    import_blacklist: cdktf.stringToTerraform(struct!.importBlacklist),
    import_whitelist: cdktf.stringToTerraform(struct!.importWhitelist),
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    med_in: cdktf.numberToTerraform(struct!.medIn),
    med_out: cdktf.numberToTerraform(struct!.medOut),
    password: cdktf.stringToTerraform(struct!.password),
    peer_asn: cdktf.numberToTerraform(struct!.peerAsn),
    peer_ip_address: cdktf.stringToTerraform(struct!.peerIpAddress),
    permit_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permitExportTo),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
  }
}


export function vxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsToHclTerraform(struct?: VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_prepend_count: {
      value: cdktf.numberToHclTerraform(struct!.asPathPrependCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bfdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denyExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.exportBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.exportWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.importBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.importWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_asn: {
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med_in: {
      value: cdktf.numberToHclTerraform(struct!.medIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    med_out: {
      value: cdktf.numberToHclTerraform(struct!.medOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_asn: {
      value: cdktf.numberToHclTerraform(struct!.peerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.peerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permitExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathPrependCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrependCount = this._asPathPrependCount;
    }
    if (this._bfdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdEnabled = this._bfdEnabled;
    }
    if (this._denyExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyExportTo = this._denyExportTo;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exportBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportBlacklist = this._exportBlacklist;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._exportWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportWhitelist = this._exportWhitelist;
    }
    if (this._importBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.importBlacklist = this._importBlacklist;
    }
    if (this._importWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.importWhitelist = this._importWhitelist;
    }
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._localIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpAddress = this._localIpAddress;
    }
    if (this._medIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.medIn = this._medIn;
    }
    if (this._medOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.medOut = this._medOut;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._peerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAsn = this._peerAsn;
    }
    if (this._peerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpAddress = this._peerIpAddress;
    }
    if (this._permitExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitExportTo = this._permitExportTo;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPathPrependCount = undefined;
      this._bfdEnabled = undefined;
      this._denyExportTo = undefined;
      this._description = undefined;
      this._exportBlacklist = undefined;
      this._exportPolicy = undefined;
      this._exportWhitelist = undefined;
      this._importBlacklist = undefined;
      this._importWhitelist = undefined;
      this._localAsn = undefined;
      this._localIpAddress = undefined;
      this._medIn = undefined;
      this._medOut = undefined;
      this._password = undefined;
      this._peerAsn = undefined;
      this._peerIpAddress = undefined;
      this._permitExportTo = undefined;
      this._shutdown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPathPrependCount = value.asPathPrependCount;
      this._bfdEnabled = value.bfdEnabled;
      this._denyExportTo = value.denyExportTo;
      this._description = value.description;
      this._exportBlacklist = value.exportBlacklist;
      this._exportPolicy = value.exportPolicy;
      this._exportWhitelist = value.exportWhitelist;
      this._importBlacklist = value.importBlacklist;
      this._importWhitelist = value.importWhitelist;
      this._localAsn = value.localAsn;
      this._localIpAddress = value.localIpAddress;
      this._medIn = value.medIn;
      this._medOut = value.medOut;
      this._password = value.password;
      this._peerAsn = value.peerAsn;
      this._peerIpAddress = value.peerIpAddress;
      this._permitExportTo = value.permitExportTo;
      this._shutdown = value.shutdown;
    }
  }

  // as_path_prepend_count - computed: false, optional: true, required: false
  private _asPathPrependCount?: number; 
  public get asPathPrependCount() {
    return this.getNumberAttribute('as_path_prepend_count');
  }
  public set asPathPrependCount(value: number) {
    this._asPathPrependCount = value;
  }
  public resetAsPathPrependCount() {
    this._asPathPrependCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependCountInput() {
    return this._asPathPrependCount;
  }

  // bfd_enabled - computed: false, optional: true, required: false
  private _bfdEnabled?: boolean | cdktf.IResolvable; 
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }
  public set bfdEnabled(value: boolean | cdktf.IResolvable) {
    this._bfdEnabled = value;
  }
  public resetBfdEnabled() {
    this._bfdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled;
  }

  // deny_export_to - computed: false, optional: true, required: false
  private _denyExportTo?: string[]; 
  public get denyExportTo() {
    return this.getListAttribute('deny_export_to');
  }
  public set denyExportTo(value: string[]) {
    this._denyExportTo = value;
  }
  public resetDenyExportTo() {
    this._denyExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyExportToInput() {
    return this._denyExportTo;
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

  // export_blacklist - computed: false, optional: true, required: false
  private _exportBlacklist?: string; 
  public get exportBlacklist() {
    return this.getStringAttribute('export_blacklist');
  }
  public set exportBlacklist(value: string) {
    this._exportBlacklist = value;
  }
  public resetExportBlacklist() {
    this._exportBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportBlacklistInput() {
    return this._exportBlacklist;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // export_whitelist - computed: false, optional: true, required: false
  private _exportWhitelist?: string; 
  public get exportWhitelist() {
    return this.getStringAttribute('export_whitelist');
  }
  public set exportWhitelist(value: string) {
    this._exportWhitelist = value;
  }
  public resetExportWhitelist() {
    this._exportWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportWhitelistInput() {
    return this._exportWhitelist;
  }

  // import_blacklist - computed: false, optional: true, required: false
  private _importBlacklist?: string; 
  public get importBlacklist() {
    return this.getStringAttribute('import_blacklist');
  }
  public set importBlacklist(value: string) {
    this._importBlacklist = value;
  }
  public resetImportBlacklist() {
    this._importBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importBlacklistInput() {
    return this._importBlacklist;
  }

  // import_whitelist - computed: false, optional: true, required: false
  private _importWhitelist?: string; 
  public get importWhitelist() {
    return this.getStringAttribute('import_whitelist');
  }
  public set importWhitelist(value: string) {
    this._importWhitelist = value;
  }
  public resetImportWhitelist() {
    this._importWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importWhitelistInput() {
    return this._importWhitelist;
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // local_ip_address - computed: false, optional: true, required: false
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  public resetLocalIpAddress() {
    this._localIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // med_in - computed: false, optional: true, required: false
  private _medIn?: number; 
  public get medIn() {
    return this.getNumberAttribute('med_in');
  }
  public set medIn(value: number) {
    this._medIn = value;
  }
  public resetMedIn() {
    this._medIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInInput() {
    return this._medIn;
  }

  // med_out - computed: false, optional: true, required: false
  private _medOut?: number; 
  public get medOut() {
    return this.getNumberAttribute('med_out');
  }
  public set medOut(value: number) {
    this._medOut = value;
  }
  public resetMedOut() {
    this._medOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medOutInput() {
    return this._medOut;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_asn - computed: false, optional: true, required: false
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // peer_ip_address - computed: false, optional: true, required: false
  private _peerIpAddress?: string; 
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  public resetPeerIpAddress() {
    this._peerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress;
  }

  // permit_export_to - computed: false, optional: true, required: false
  private _permitExportTo?: string[]; 
  public get permitExportTo() {
    return this.getListAttribute('permit_export_to');
  }
  public set permitExportTo(value: string[]) {
    this._permitExportTo = value;
  }
  public resetPermitExportTo() {
    this._permitExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitExportToInput() {
    return this._permitExportTo;
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
}

export class VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsList extends cdktf.ComplexList {
  public internalValue? : VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections[] | cdktf.IResolvable

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
  public get(index: number): VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsOutputReference {
    return new VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes {
  /**
  * The description of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#description Vxc#description}
  */
  readonly description?: string;
  /**
  * The next hop of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#next_hop Vxc#next_hop}
  */
  readonly nextHop?: string;
  /**
  * The prefix of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#prefix Vxc#prefix}
  */
  readonly prefix?: string;
}

export function vxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesToTerraform(struct?: VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function vxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesToHclTerraform(struct?: VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes | cdktf.IResolvable): any {
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
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nextHop = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nextHop = value.nextHop;
      this._prefix = value.prefix;
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

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesList extends cdktf.ComplexList {
  public internalValue? : VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes[] | cdktf.IResolvable

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
  public get(index: number): VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesOutputReference {
    return new VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcBEndPartnerConfigPartnerAEndConfigInterfaces {
  /**
  * The BFD of the partner configuration interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bfd Vxc#bfd}
  */
  readonly bfd?: VxcBEndPartnerConfigPartnerAEndConfigInterfacesBfd;
  /**
  * The BGP connections of the partner configuration interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bgp_connections Vxc#bgp_connections}
  */
  readonly bgpConnections?: VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections[] | cdktf.IResolvable;
  /**
  * The IP addresses of the partner configuration. Each entry must be in CIDR notation (e.g., "169.254.100.6/29").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_addresses Vxc#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * The IP routes of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_routes Vxc#ip_routes}
  */
  readonly ipRoutes?: VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes[] | cdktf.IResolvable;
  /**
  * The NAT IP addresses of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#nat_ip_addresses Vxc#nat_ip_addresses}
  */
  readonly natIpAddresses?: string[];
}

export function vxcBEndPartnerConfigPartnerAEndConfigInterfacesToTerraform(struct?: VxcBEndPartnerConfigPartnerAEndConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: vxcBEndPartnerConfigPartnerAEndConfigInterfacesBfdToTerraform(struct!.bfd),
    bgp_connections: cdktf.listMapper(vxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsToTerraform, false)(struct!.bgpConnections),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ip_routes: cdktf.listMapper(vxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesToTerraform, false)(struct!.ipRoutes),
    nat_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.natIpAddresses),
  }
}


export function vxcBEndPartnerConfigPartnerAEndConfigInterfacesToHclTerraform(struct?: VxcBEndPartnerConfigPartnerAEndConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: vxcBEndPartnerConfigPartnerAEndConfigInterfacesBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcBEndPartnerConfigPartnerAEndConfigInterfacesBfd",
    },
    bgp_connections: {
      value: cdktf.listMapperHcl(vxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsToHclTerraform, false)(struct!.bgpConnections),
      isBlock: true,
      type: "list",
      storageClassType: "VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsList",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_routes: {
      value: cdktf.listMapperHcl(vxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesToHclTerraform, false)(struct!.ipRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesList",
    },
    nat_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.natIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigPartnerAEndConfigInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcBEndPartnerConfigPartnerAEndConfigInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._bgpConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpConnections = this._bgpConnections?.internalValue;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ipRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRoutes = this._ipRoutes?.internalValue;
    }
    if (this._natIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpAddresses = this._natIpAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigPartnerAEndConfigInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfd.internalValue = undefined;
      this._bgpConnections.internalValue = undefined;
      this._ipAddresses = undefined;
      this._ipRoutes.internalValue = undefined;
      this._natIpAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfd.internalValue = value.bfd;
      this._bgpConnections.internalValue = value.bgpConnections;
      this._ipAddresses = value.ipAddresses;
      this._ipRoutes.internalValue = value.ipRoutes;
      this._natIpAddresses = value.natIpAddresses;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new VxcBEndPartnerConfigPartnerAEndConfigInterfacesBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: VxcBEndPartnerConfigPartnerAEndConfigInterfacesBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // bgp_connections - computed: false, optional: true, required: false
  private _bgpConnections = new VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnectionsList(this, "bgp_connections", false);
  public get bgpConnections() {
    return this._bgpConnections;
  }
  public putBgpConnections(value: VxcBEndPartnerConfigPartnerAEndConfigInterfacesBgpConnections[] | cdktf.IResolvable) {
    this._bgpConnections.internalValue = value;
  }
  public resetBgpConnections() {
    this._bgpConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpConnectionsInput() {
    return this._bgpConnections.internalValue;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_routes - computed: false, optional: true, required: false
  private _ipRoutes = new VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutesList(this, "ip_routes", false);
  public get ipRoutes() {
    return this._ipRoutes;
  }
  public putIpRoutes(value: VxcBEndPartnerConfigPartnerAEndConfigInterfacesIpRoutes[] | cdktf.IResolvable) {
    this._ipRoutes.internalValue = value;
  }
  public resetIpRoutes() {
    this._ipRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRoutesInput() {
    return this._ipRoutes.internalValue;
  }

  // nat_ip_addresses - computed: false, optional: true, required: false
  private _natIpAddresses?: string[]; 
  public get natIpAddresses() {
    return this.getListAttribute('nat_ip_addresses');
  }
  public set natIpAddresses(value: string[]) {
    this._natIpAddresses = value;
  }
  public resetNatIpAddresses() {
    this._natIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAddressesInput() {
    return this._natIpAddresses;
  }
}

export class VxcBEndPartnerConfigPartnerAEndConfigInterfacesList extends cdktf.ComplexList {
  public internalValue? : VxcBEndPartnerConfigPartnerAEndConfigInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VxcBEndPartnerConfigPartnerAEndConfigInterfacesOutputReference {
    return new VxcBEndPartnerConfigPartnerAEndConfigInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcBEndPartnerConfigPartnerAEndConfig {
  /**
  * The interfaces of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#interfaces Vxc#interfaces}
  */
  readonly interfaces: VxcBEndPartnerConfigPartnerAEndConfigInterfaces[] | cdktf.IResolvable;
}

export function vxcBEndPartnerConfigPartnerAEndConfigToTerraform(struct?: VxcBEndPartnerConfigPartnerAEndConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(vxcBEndPartnerConfigPartnerAEndConfigInterfacesToTerraform, false)(struct!.interfaces),
  }
}


export function vxcBEndPartnerConfigPartnerAEndConfigToHclTerraform(struct?: VxcBEndPartnerConfigPartnerAEndConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(vxcBEndPartnerConfigPartnerAEndConfigInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "VxcBEndPartnerConfigPartnerAEndConfigInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigPartnerAEndConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEndPartnerConfigPartnerAEndConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigPartnerAEndConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new VxcBEndPartnerConfigPartnerAEndConfigInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: VxcBEndPartnerConfigPartnerAEndConfigInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}
export interface VxcBEndPartnerConfigVrouterConfigInterfacesBfd {
  /**
  * The multiplier of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#multiplier Vxc#multiplier}
  */
  readonly multiplier?: number;
  /**
  * The receive interval of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#rx_interval Vxc#rx_interval}
  */
  readonly rxInterval?: number;
  /**
  * The transmit interval of the BFD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#tx_interval Vxc#tx_interval}
  */
  readonly txInterval?: number;
}

export function vxcBEndPartnerConfigVrouterConfigInterfacesBfdToTerraform(struct?: VxcBEndPartnerConfigVrouterConfigInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    rx_interval: cdktf.numberToTerraform(struct!.rxInterval),
    tx_interval: cdktf.numberToTerraform(struct!.txInterval),
  }
}


export function vxcBEndPartnerConfigVrouterConfigInterfacesBfdToHclTerraform(struct?: VxcBEndPartnerConfigVrouterConfigInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_interval: {
      value: cdktf.numberToHclTerraform(struct!.rxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_interval: {
      value: cdktf.numberToHclTerraform(struct!.txInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigVrouterConfigInterfacesBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEndPartnerConfigVrouterConfigInterfacesBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._rxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxInterval = this._rxInterval;
    }
    if (this._txInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.txInterval = this._txInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigVrouterConfigInterfacesBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multiplier = undefined;
      this._rxInterval = undefined;
      this._txInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multiplier = value.multiplier;
      this._rxInterval = value.rxInterval;
      this._txInterval = value.txInterval;
    }
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // rx_interval - computed: false, optional: true, required: false
  private _rxInterval?: number; 
  public get rxInterval() {
    return this.getNumberAttribute('rx_interval');
  }
  public set rxInterval(value: number) {
    this._rxInterval = value;
  }
  public resetRxInterval() {
    this._rxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxIntervalInput() {
    return this._rxInterval;
  }

  // tx_interval - computed: false, optional: true, required: false
  private _txInterval?: number; 
  public get txInterval() {
    return this.getNumberAttribute('tx_interval');
  }
  public set txInterval(value: number) {
    this._txInterval = value;
  }
  public resetTxInterval() {
    this._txInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txIntervalInput() {
    return this._txInterval;
  }
}
export interface VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnections {
  /**
  * The AS path prepend count of the BGP connection. Minimum value of 0 and maximum value of 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#as_path_prepend_count Vxc#as_path_prepend_count}
  */
  readonly asPathPrependCount?: number;
  /**
  * Whether BFD is enabled for the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bfd_enabled Vxc#bfd_enabled}
  */
  readonly bfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * The denied export to of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#deny_export_to Vxc#deny_export_to}
  */
  readonly denyExportTo?: string[];
  /**
  * The description of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#description Vxc#description}
  */
  readonly description?: string;
  /**
  * The export blacklist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_blacklist Vxc#export_blacklist}
  */
  readonly exportBlacklist?: string;
  /**
  * The export policy of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_policy Vxc#export_policy}
  */
  readonly exportPolicy?: string;
  /**
  * The export whitelist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#export_whitelist Vxc#export_whitelist}
  */
  readonly exportWhitelist?: string;
  /**
  * The import blacklist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#import_blacklist Vxc#import_blacklist}
  */
  readonly importBlacklist?: string;
  /**
  * The import whitelist of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#import_whitelist Vxc#import_whitelist}
  */
  readonly importWhitelist?: string;
  /**
  * The local ASN of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#local_asn Vxc#local_asn}
  */
  readonly localAsn?: number;
  /**
  * The local IP address of the BGP connection. Must be an IP address without a CIDR mask (e.g., "169.254.100.6").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#local_ip_address Vxc#local_ip_address}
  */
  readonly localIpAddress?: string;
  /**
  * The MED in of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#med_in Vxc#med_in}
  */
  readonly medIn?: number;
  /**
  * The MED out of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#med_out Vxc#med_out}
  */
  readonly medOut?: number;
  /**
  * The password of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#password Vxc#password}
  */
  readonly password?: string;
  /**
  * The peer ASN of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_asn Vxc#peer_asn}
  */
  readonly peerAsn?: number;
  /**
  * The peer IP address of the BGP connection. Must be an IP address without a CIDR mask (e.g., "169.254.100.1").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_ip_address Vxc#peer_ip_address}
  */
  readonly peerIpAddress?: string;
  /**
  * Defines the default BGP routing policy for this BGP connection. The default depends on the CSP type of the far end of this VXC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_type Vxc#peer_type}
  */
  readonly peerType?: string;
  /**
  * The permitted export to of the BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#permit_export_to Vxc#permit_export_to}
  */
  readonly permitExportTo?: string[];
  /**
  * Whether the BGP connection is shut down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#shutdown Vxc#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
}

export function vxcBEndPartnerConfigVrouterConfigInterfacesBgpConnectionsToTerraform(struct?: VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_prepend_count: cdktf.numberToTerraform(struct!.asPathPrependCount),
    bfd_enabled: cdktf.booleanToTerraform(struct!.bfdEnabled),
    deny_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denyExportTo),
    description: cdktf.stringToTerraform(struct!.description),
    export_blacklist: cdktf.stringToTerraform(struct!.exportBlacklist),
    export_policy: cdktf.stringToTerraform(struct!.exportPolicy),
    export_whitelist: cdktf.stringToTerraform(struct!.exportWhitelist),
    import_blacklist: cdktf.stringToTerraform(struct!.importBlacklist),
    import_whitelist: cdktf.stringToTerraform(struct!.importWhitelist),
    local_asn: cdktf.numberToTerraform(struct!.localAsn),
    local_ip_address: cdktf.stringToTerraform(struct!.localIpAddress),
    med_in: cdktf.numberToTerraform(struct!.medIn),
    med_out: cdktf.numberToTerraform(struct!.medOut),
    password: cdktf.stringToTerraform(struct!.password),
    peer_asn: cdktf.numberToTerraform(struct!.peerAsn),
    peer_ip_address: cdktf.stringToTerraform(struct!.peerIpAddress),
    peer_type: cdktf.stringToTerraform(struct!.peerType),
    permit_export_to: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permitExportTo),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
  }
}


export function vxcBEndPartnerConfigVrouterConfigInterfacesBgpConnectionsToHclTerraform(struct?: VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_prepend_count: {
      value: cdktf.numberToHclTerraform(struct!.asPathPrependCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bfdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denyExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.exportBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_policy: {
      value: cdktf.stringToHclTerraform(struct!.exportPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.exportWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_blacklist: {
      value: cdktf.stringToHclTerraform(struct!.importBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.importWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_asn: {
      value: cdktf.numberToHclTerraform(struct!.localAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.localIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med_in: {
      value: cdktf.numberToHclTerraform(struct!.medIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    med_out: {
      value: cdktf.numberToHclTerraform(struct!.medOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_asn: {
      value: cdktf.numberToHclTerraform(struct!.peerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.peerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_type: {
      value: cdktf.stringToHclTerraform(struct!.peerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_export_to: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permitExportTo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathPrependCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrependCount = this._asPathPrependCount;
    }
    if (this._bfdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdEnabled = this._bfdEnabled;
    }
    if (this._denyExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyExportTo = this._denyExportTo;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exportBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportBlacklist = this._exportBlacklist;
    }
    if (this._exportPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportPolicy = this._exportPolicy;
    }
    if (this._exportWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportWhitelist = this._exportWhitelist;
    }
    if (this._importBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.importBlacklist = this._importBlacklist;
    }
    if (this._importWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.importWhitelist = this._importWhitelist;
    }
    if (this._localAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsn = this._localAsn;
    }
    if (this._localIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIpAddress = this._localIpAddress;
    }
    if (this._medIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.medIn = this._medIn;
    }
    if (this._medOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.medOut = this._medOut;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._peerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAsn = this._peerAsn;
    }
    if (this._peerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpAddress = this._peerIpAddress;
    }
    if (this._peerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerType = this._peerType;
    }
    if (this._permitExportTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitExportTo = this._permitExportTo;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPathPrependCount = undefined;
      this._bfdEnabled = undefined;
      this._denyExportTo = undefined;
      this._description = undefined;
      this._exportBlacklist = undefined;
      this._exportPolicy = undefined;
      this._exportWhitelist = undefined;
      this._importBlacklist = undefined;
      this._importWhitelist = undefined;
      this._localAsn = undefined;
      this._localIpAddress = undefined;
      this._medIn = undefined;
      this._medOut = undefined;
      this._password = undefined;
      this._peerAsn = undefined;
      this._peerIpAddress = undefined;
      this._peerType = undefined;
      this._permitExportTo = undefined;
      this._shutdown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPathPrependCount = value.asPathPrependCount;
      this._bfdEnabled = value.bfdEnabled;
      this._denyExportTo = value.denyExportTo;
      this._description = value.description;
      this._exportBlacklist = value.exportBlacklist;
      this._exportPolicy = value.exportPolicy;
      this._exportWhitelist = value.exportWhitelist;
      this._importBlacklist = value.importBlacklist;
      this._importWhitelist = value.importWhitelist;
      this._localAsn = value.localAsn;
      this._localIpAddress = value.localIpAddress;
      this._medIn = value.medIn;
      this._medOut = value.medOut;
      this._password = value.password;
      this._peerAsn = value.peerAsn;
      this._peerIpAddress = value.peerIpAddress;
      this._peerType = value.peerType;
      this._permitExportTo = value.permitExportTo;
      this._shutdown = value.shutdown;
    }
  }

  // as_path_prepend_count - computed: false, optional: true, required: false
  private _asPathPrependCount?: number; 
  public get asPathPrependCount() {
    return this.getNumberAttribute('as_path_prepend_count');
  }
  public set asPathPrependCount(value: number) {
    this._asPathPrependCount = value;
  }
  public resetAsPathPrependCount() {
    this._asPathPrependCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependCountInput() {
    return this._asPathPrependCount;
  }

  // bfd_enabled - computed: false, optional: true, required: false
  private _bfdEnabled?: boolean | cdktf.IResolvable; 
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }
  public set bfdEnabled(value: boolean | cdktf.IResolvable) {
    this._bfdEnabled = value;
  }
  public resetBfdEnabled() {
    this._bfdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled;
  }

  // deny_export_to - computed: false, optional: true, required: false
  private _denyExportTo?: string[]; 
  public get denyExportTo() {
    return this.getListAttribute('deny_export_to');
  }
  public set denyExportTo(value: string[]) {
    this._denyExportTo = value;
  }
  public resetDenyExportTo() {
    this._denyExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyExportToInput() {
    return this._denyExportTo;
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

  // export_blacklist - computed: false, optional: true, required: false
  private _exportBlacklist?: string; 
  public get exportBlacklist() {
    return this.getStringAttribute('export_blacklist');
  }
  public set exportBlacklist(value: string) {
    this._exportBlacklist = value;
  }
  public resetExportBlacklist() {
    this._exportBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportBlacklistInput() {
    return this._exportBlacklist;
  }

  // export_policy - computed: false, optional: true, required: false
  private _exportPolicy?: string; 
  public get exportPolicy() {
    return this.getStringAttribute('export_policy');
  }
  public set exportPolicy(value: string) {
    this._exportPolicy = value;
  }
  public resetExportPolicy() {
    this._exportPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyInput() {
    return this._exportPolicy;
  }

  // export_whitelist - computed: false, optional: true, required: false
  private _exportWhitelist?: string; 
  public get exportWhitelist() {
    return this.getStringAttribute('export_whitelist');
  }
  public set exportWhitelist(value: string) {
    this._exportWhitelist = value;
  }
  public resetExportWhitelist() {
    this._exportWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportWhitelistInput() {
    return this._exportWhitelist;
  }

  // import_blacklist - computed: false, optional: true, required: false
  private _importBlacklist?: string; 
  public get importBlacklist() {
    return this.getStringAttribute('import_blacklist');
  }
  public set importBlacklist(value: string) {
    this._importBlacklist = value;
  }
  public resetImportBlacklist() {
    this._importBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importBlacklistInput() {
    return this._importBlacklist;
  }

  // import_whitelist - computed: false, optional: true, required: false
  private _importWhitelist?: string; 
  public get importWhitelist() {
    return this.getStringAttribute('import_whitelist');
  }
  public set importWhitelist(value: string) {
    this._importWhitelist = value;
  }
  public resetImportWhitelist() {
    this._importWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importWhitelistInput() {
    return this._importWhitelist;
  }

  // local_asn - computed: false, optional: true, required: false
  private _localAsn?: number; 
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }
  public set localAsn(value: number) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // local_ip_address - computed: false, optional: true, required: false
  private _localIpAddress?: string; 
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }
  public set localIpAddress(value: string) {
    this._localIpAddress = value;
  }
  public resetLocalIpAddress() {
    this._localIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpAddressInput() {
    return this._localIpAddress;
  }

  // med_in - computed: false, optional: true, required: false
  private _medIn?: number; 
  public get medIn() {
    return this.getNumberAttribute('med_in');
  }
  public set medIn(value: number) {
    this._medIn = value;
  }
  public resetMedIn() {
    this._medIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInInput() {
    return this._medIn;
  }

  // med_out - computed: false, optional: true, required: false
  private _medOut?: number; 
  public get medOut() {
    return this.getNumberAttribute('med_out');
  }
  public set medOut(value: number) {
    this._medOut = value;
  }
  public resetMedOut() {
    this._medOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medOutInput() {
    return this._medOut;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_asn - computed: false, optional: true, required: false
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // peer_ip_address - computed: false, optional: true, required: false
  private _peerIpAddress?: string; 
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }
  public set peerIpAddress(value: string) {
    this._peerIpAddress = value;
  }
  public resetPeerIpAddress() {
    this._peerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpAddressInput() {
    return this._peerIpAddress;
  }

  // peer_type - computed: false, optional: true, required: false
  private _peerType?: string; 
  public get peerType() {
    return this.getStringAttribute('peer_type');
  }
  public set peerType(value: string) {
    this._peerType = value;
  }
  public resetPeerType() {
    this._peerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTypeInput() {
    return this._peerType;
  }

  // permit_export_to - computed: false, optional: true, required: false
  private _permitExportTo?: string[]; 
  public get permitExportTo() {
    return this.getListAttribute('permit_export_to');
  }
  public set permitExportTo(value: string[]) {
    this._permitExportTo = value;
  }
  public resetPermitExportTo() {
    this._permitExportTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitExportToInput() {
    return this._permitExportTo;
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
}

export class VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnectionsList extends cdktf.ComplexList {
  public internalValue? : VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnections[] | cdktf.IResolvable

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
  public get(index: number): VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnectionsOutputReference {
    return new VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutes {
  /**
  * The description of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#description Vxc#description}
  */
  readonly description?: string;
  /**
  * The next hop of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#next_hop Vxc#next_hop}
  */
  readonly nextHop?: string;
  /**
  * The prefix of the IP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#prefix Vxc#prefix}
  */
  readonly prefix?: string;
}

export function vxcBEndPartnerConfigVrouterConfigInterfacesIpRoutesToTerraform(struct?: VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function vxcBEndPartnerConfigVrouterConfigInterfacesIpRoutesToHclTerraform(struct?: VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutes | cdktf.IResolvable): any {
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
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nextHop = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nextHop = value.nextHop;
      this._prefix = value.prefix;
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

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutesList extends cdktf.ComplexList {
  public internalValue? : VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutes[] | cdktf.IResolvable

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
  public get(index: number): VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutesOutputReference {
    return new VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcBEndPartnerConfigVrouterConfigInterfaces {
  /**
  * The BFD of the partner configuration interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bfd Vxc#bfd}
  */
  readonly bfd?: VxcBEndPartnerConfigVrouterConfigInterfacesBfd;
  /**
  * The BGP connections of the partner configuration interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bgp_connections Vxc#bgp_connections}
  */
  readonly bgpConnections?: VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnections[] | cdktf.IResolvable;
  /**
  * The IP addresses of the partner configuration. Each entry must be in CIDR notation (e.g., "169.254.100.6/29").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_addresses Vxc#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * The IP MTU of the partner configuration interface. Defaults to 1500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_mtu Vxc#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * The IP routes of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_routes Vxc#ip_routes}
  */
  readonly ipRoutes?: VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutes[] | cdktf.IResolvable;
  /**
  * The NAT IP addresses of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#nat_ip_addresses Vxc#nat_ip_addresses}
  */
  readonly natIpAddresses?: string[];
  /**
  * Inner-VLAN for implicit Q-inQ VXCs. Typically used only for Azure VXCs. The default is no inner-vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#vlan Vxc#vlan}
  */
  readonly vlan?: number;
}

export function vxcBEndPartnerConfigVrouterConfigInterfacesToTerraform(struct?: VxcBEndPartnerConfigVrouterConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: vxcBEndPartnerConfigVrouterConfigInterfacesBfdToTerraform(struct!.bfd),
    bgp_connections: cdktf.listMapper(vxcBEndPartnerConfigVrouterConfigInterfacesBgpConnectionsToTerraform, false)(struct!.bgpConnections),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ip_mtu: cdktf.numberToTerraform(struct!.ipMtu),
    ip_routes: cdktf.listMapper(vxcBEndPartnerConfigVrouterConfigInterfacesIpRoutesToTerraform, false)(struct!.ipRoutes),
    nat_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.natIpAddresses),
    vlan: cdktf.numberToTerraform(struct!.vlan),
  }
}


export function vxcBEndPartnerConfigVrouterConfigInterfacesToHclTerraform(struct?: VxcBEndPartnerConfigVrouterConfigInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: vxcBEndPartnerConfigVrouterConfigInterfacesBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcBEndPartnerConfigVrouterConfigInterfacesBfd",
    },
    bgp_connections: {
      value: cdktf.listMapperHcl(vxcBEndPartnerConfigVrouterConfigInterfacesBgpConnectionsToHclTerraform, false)(struct!.bgpConnections),
      isBlock: true,
      type: "list",
      storageClassType: "VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnectionsList",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_mtu: {
      value: cdktf.numberToHclTerraform(struct!.ipMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_routes: {
      value: cdktf.listMapperHcl(vxcBEndPartnerConfigVrouterConfigInterfacesIpRoutesToHclTerraform, false)(struct!.ipRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutesList",
    },
    nat_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.natIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigVrouterConfigInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcBEndPartnerConfigVrouterConfigInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._bgpConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpConnections = this._bgpConnections?.internalValue;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ipMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMtu = this._ipMtu;
    }
    if (this._ipRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRoutes = this._ipRoutes?.internalValue;
    }
    if (this._natIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpAddresses = this._natIpAddresses;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigVrouterConfigInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfd.internalValue = undefined;
      this._bgpConnections.internalValue = undefined;
      this._ipAddresses = undefined;
      this._ipMtu = undefined;
      this._ipRoutes.internalValue = undefined;
      this._natIpAddresses = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfd.internalValue = value.bfd;
      this._bgpConnections.internalValue = value.bgpConnections;
      this._ipAddresses = value.ipAddresses;
      this._ipMtu = value.ipMtu;
      this._ipRoutes.internalValue = value.ipRoutes;
      this._natIpAddresses = value.natIpAddresses;
      this._vlan = value.vlan;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new VxcBEndPartnerConfigVrouterConfigInterfacesBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: VxcBEndPartnerConfigVrouterConfigInterfacesBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // bgp_connections - computed: false, optional: true, required: false
  private _bgpConnections = new VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnectionsList(this, "bgp_connections", false);
  public get bgpConnections() {
    return this._bgpConnections;
  }
  public putBgpConnections(value: VxcBEndPartnerConfigVrouterConfigInterfacesBgpConnections[] | cdktf.IResolvable) {
    this._bgpConnections.internalValue = value;
  }
  public resetBgpConnections() {
    this._bgpConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpConnectionsInput() {
    return this._bgpConnections.internalValue;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_mtu - computed: false, optional: true, required: false
  private _ipMtu?: number; 
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }
  public set ipMtu(value: number) {
    this._ipMtu = value;
  }
  public resetIpMtu() {
    this._ipMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuInput() {
    return this._ipMtu;
  }

  // ip_routes - computed: false, optional: true, required: false
  private _ipRoutes = new VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutesList(this, "ip_routes", false);
  public get ipRoutes() {
    return this._ipRoutes;
  }
  public putIpRoutes(value: VxcBEndPartnerConfigVrouterConfigInterfacesIpRoutes[] | cdktf.IResolvable) {
    this._ipRoutes.internalValue = value;
  }
  public resetIpRoutes() {
    this._ipRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRoutesInput() {
    return this._ipRoutes.internalValue;
  }

  // nat_ip_addresses - computed: false, optional: true, required: false
  private _natIpAddresses?: string[]; 
  public get natIpAddresses() {
    return this.getListAttribute('nat_ip_addresses');
  }
  public set natIpAddresses(value: string[]) {
    this._natIpAddresses = value;
  }
  public resetNatIpAddresses() {
    this._natIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAddressesInput() {
    return this._natIpAddresses;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class VxcBEndPartnerConfigVrouterConfigInterfacesList extends cdktf.ComplexList {
  public internalValue? : VxcBEndPartnerConfigVrouterConfigInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VxcBEndPartnerConfigVrouterConfigInterfacesOutputReference {
    return new VxcBEndPartnerConfigVrouterConfigInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VxcBEndPartnerConfigVrouterConfig {
  /**
  * The interfaces of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#interfaces Vxc#interfaces}
  */
  readonly interfaces: VxcBEndPartnerConfigVrouterConfigInterfaces[] | cdktf.IResolvable;
}

export function vxcBEndPartnerConfigVrouterConfigToTerraform(struct?: VxcBEndPartnerConfigVrouterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interfaces: cdktf.listMapper(vxcBEndPartnerConfigVrouterConfigInterfacesToTerraform, false)(struct!.interfaces),
  }
}


export function vxcBEndPartnerConfigVrouterConfigToHclTerraform(struct?: VxcBEndPartnerConfigVrouterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interfaces: {
      value: cdktf.listMapperHcl(vxcBEndPartnerConfigVrouterConfigInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "VxcBEndPartnerConfigVrouterConfigInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigVrouterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEndPartnerConfigVrouterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfigVrouterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new VxcBEndPartnerConfigVrouterConfigInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: VxcBEndPartnerConfigVrouterConfigInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}
export interface VxcBEndPartnerConfig {
  /**
  * The AWS partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#aws_config Vxc#aws_config}
  */
  readonly awsConfig?: VxcBEndPartnerConfigAwsConfig;
  /**
  * The Azure partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#azure_config Vxc#azure_config}
  */
  readonly azureConfig?: VxcBEndPartnerConfigAzureConfig;
  /**
  * The Google partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#google_config Vxc#google_config}
  */
  readonly googleConfig?: VxcBEndPartnerConfigGoogleConfig;
  /**
  * The IBM partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ibm_config Vxc#ibm_config}
  */
  readonly ibmConfig?: VxcBEndPartnerConfigIbmConfig;
  /**
  * The Oracle partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#oracle_config Vxc#oracle_config}
  */
  readonly oracleConfig?: VxcBEndPartnerConfigOracleConfig;
  /**
  * The partner of the partner configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#partner Vxc#partner}
  */
  readonly partner: string;
  /**
  * The partner configuration of the A-End order configuration. Only exists for A-End Configurations. DEPRECATED: Use vrouter_config instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#partner_a_end_config Vxc#partner_a_end_config}
  */
  readonly partnerAEndConfig?: VxcBEndPartnerConfigPartnerAEndConfig;
  /**
  * The partner configuration of the virtual router configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#vrouter_config Vxc#vrouter_config}
  */
  readonly vrouterConfig?: VxcBEndPartnerConfigVrouterConfig;
}

export function vxcBEndPartnerConfigToTerraform(struct?: VxcBEndPartnerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_config: vxcBEndPartnerConfigAwsConfigToTerraform(struct!.awsConfig),
    azure_config: vxcBEndPartnerConfigAzureConfigToTerraform(struct!.azureConfig),
    google_config: vxcBEndPartnerConfigGoogleConfigToTerraform(struct!.googleConfig),
    ibm_config: vxcBEndPartnerConfigIbmConfigToTerraform(struct!.ibmConfig),
    oracle_config: vxcBEndPartnerConfigOracleConfigToTerraform(struct!.oracleConfig),
    partner: cdktf.stringToTerraform(struct!.partner),
    partner_a_end_config: vxcBEndPartnerConfigPartnerAEndConfigToTerraform(struct!.partnerAEndConfig),
    vrouter_config: vxcBEndPartnerConfigVrouterConfigToTerraform(struct!.vrouterConfig),
  }
}


export function vxcBEndPartnerConfigToHclTerraform(struct?: VxcBEndPartnerConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_config: {
      value: vxcBEndPartnerConfigAwsConfigToHclTerraform(struct!.awsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcBEndPartnerConfigAwsConfig",
    },
    azure_config: {
      value: vxcBEndPartnerConfigAzureConfigToHclTerraform(struct!.azureConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcBEndPartnerConfigAzureConfig",
    },
    google_config: {
      value: vxcBEndPartnerConfigGoogleConfigToHclTerraform(struct!.googleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcBEndPartnerConfigGoogleConfig",
    },
    ibm_config: {
      value: vxcBEndPartnerConfigIbmConfigToHclTerraform(struct!.ibmConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcBEndPartnerConfigIbmConfig",
    },
    oracle_config: {
      value: vxcBEndPartnerConfigOracleConfigToHclTerraform(struct!.oracleConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcBEndPartnerConfigOracleConfig",
    },
    partner: {
      value: cdktf.stringToHclTerraform(struct!.partner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partner_a_end_config: {
      value: vxcBEndPartnerConfigPartnerAEndConfigToHclTerraform(struct!.partnerAEndConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcBEndPartnerConfigPartnerAEndConfig",
    },
    vrouter_config: {
      value: vxcBEndPartnerConfigVrouterConfigToHclTerraform(struct!.vrouterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "VxcBEndPartnerConfigVrouterConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcBEndPartnerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VxcBEndPartnerConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsConfig = this._awsConfig?.internalValue;
    }
    if (this._azureConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureConfig = this._azureConfig?.internalValue;
    }
    if (this._googleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleConfig = this._googleConfig?.internalValue;
    }
    if (this._ibmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibmConfig = this._ibmConfig?.internalValue;
    }
    if (this._oracleConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleConfig = this._oracleConfig?.internalValue;
    }
    if (this._partner !== undefined) {
      hasAnyValues = true;
      internalValueResult.partner = this._partner;
    }
    if (this._partnerAEndConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerAEndConfig = this._partnerAEndConfig?.internalValue;
    }
    if (this._vrouterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrouterConfig = this._vrouterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcBEndPartnerConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsConfig.internalValue = undefined;
      this._azureConfig.internalValue = undefined;
      this._googleConfig.internalValue = undefined;
      this._ibmConfig.internalValue = undefined;
      this._oracleConfig.internalValue = undefined;
      this._partner = undefined;
      this._partnerAEndConfig.internalValue = undefined;
      this._vrouterConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsConfig.internalValue = value.awsConfig;
      this._azureConfig.internalValue = value.azureConfig;
      this._googleConfig.internalValue = value.googleConfig;
      this._ibmConfig.internalValue = value.ibmConfig;
      this._oracleConfig.internalValue = value.oracleConfig;
      this._partner = value.partner;
      this._partnerAEndConfig.internalValue = value.partnerAEndConfig;
      this._vrouterConfig.internalValue = value.vrouterConfig;
    }
  }

  // aws_config - computed: false, optional: true, required: false
  private _awsConfig = new VxcBEndPartnerConfigAwsConfigOutputReference(this, "aws_config");
  public get awsConfig() {
    return this._awsConfig;
  }
  public putAwsConfig(value: VxcBEndPartnerConfigAwsConfig) {
    this._awsConfig.internalValue = value;
  }
  public resetAwsConfig() {
    this._awsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigInput() {
    return this._awsConfig.internalValue;
  }

  // azure_config - computed: false, optional: true, required: false
  private _azureConfig = new VxcBEndPartnerConfigAzureConfigOutputReference(this, "azure_config");
  public get azureConfig() {
    return this._azureConfig;
  }
  public putAzureConfig(value: VxcBEndPartnerConfigAzureConfig) {
    this._azureConfig.internalValue = value;
  }
  public resetAzureConfig() {
    this._azureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConfigInput() {
    return this._azureConfig.internalValue;
  }

  // google_config - computed: false, optional: true, required: false
  private _googleConfig = new VxcBEndPartnerConfigGoogleConfigOutputReference(this, "google_config");
  public get googleConfig() {
    return this._googleConfig;
  }
  public putGoogleConfig(value: VxcBEndPartnerConfigGoogleConfig) {
    this._googleConfig.internalValue = value;
  }
  public resetGoogleConfig() {
    this._googleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleConfigInput() {
    return this._googleConfig.internalValue;
  }

  // ibm_config - computed: false, optional: true, required: false
  private _ibmConfig = new VxcBEndPartnerConfigIbmConfigOutputReference(this, "ibm_config");
  public get ibmConfig() {
    return this._ibmConfig;
  }
  public putIbmConfig(value: VxcBEndPartnerConfigIbmConfig) {
    this._ibmConfig.internalValue = value;
  }
  public resetIbmConfig() {
    this._ibmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmConfigInput() {
    return this._ibmConfig.internalValue;
  }

  // oracle_config - computed: false, optional: true, required: false
  private _oracleConfig = new VxcBEndPartnerConfigOracleConfigOutputReference(this, "oracle_config");
  public get oracleConfig() {
    return this._oracleConfig;
  }
  public putOracleConfig(value: VxcBEndPartnerConfigOracleConfig) {
    this._oracleConfig.internalValue = value;
  }
  public resetOracleConfig() {
    this._oracleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleConfigInput() {
    return this._oracleConfig.internalValue;
  }

  // partner - computed: false, optional: false, required: true
  private _partner?: string; 
  public get partner() {
    return this.getStringAttribute('partner');
  }
  public set partner(value: string) {
    this._partner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerInput() {
    return this._partner;
  }

  // partner_a_end_config - computed: false, optional: true, required: false
  private _partnerAEndConfig = new VxcBEndPartnerConfigPartnerAEndConfigOutputReference(this, "partner_a_end_config");
  public get partnerAEndConfig() {
    return this._partnerAEndConfig;
  }
  public putPartnerAEndConfig(value: VxcBEndPartnerConfigPartnerAEndConfig) {
    this._partnerAEndConfig.internalValue = value;
  }
  public resetPartnerAEndConfig() {
    this._partnerAEndConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerAEndConfigInput() {
    return this._partnerAEndConfig.internalValue;
  }

  // vrouter_config - computed: false, optional: true, required: false
  private _vrouterConfig = new VxcBEndPartnerConfigVrouterConfigOutputReference(this, "vrouter_config");
  public get vrouterConfig() {
    return this._vrouterConfig;
  }
  public putVrouterConfig(value: VxcBEndPartnerConfigVrouterConfig) {
    this._vrouterConfig.internalValue = value;
  }
  public resetVrouterConfig() {
    this._vrouterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrouterConfigInput() {
    return this._vrouterConfig.internalValue;
  }
}
export interface VxcCspConnections {
  /**
  * The account of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#account Vxc#account}
  */
  readonly account?: string;
  /**
  * The account ID of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#account_id Vxc#account_id}
  */
  readonly accountId?: string;
  /**
  * The Amazon address of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#amazon_address Vxc#amazon_address}
  */
  readonly amazonAddress?: string;
  /**
  * The ASN of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#asn Vxc#asn}
  */
  readonly asn?: number;
  /**
  * The authentication key of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#auth_key Vxc#auth_key}
  */
  readonly authKey?: string;
  /**
  * The bandwidth of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bandwidth Vxc#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * The bandwidths of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#bandwidths Vxc#bandwidths}
  */
  readonly bandwidths?: number[];
  /**
  * The connection type of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#connect_type Vxc#connect_type}
  */
  readonly connectType?: string;
  /**
  * The hosted connection ID of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#connection_id Vxc#connection_id}
  */
  readonly connectionId?: string;
  /**
  * The name of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#csp_name Vxc#csp_name}
  */
  readonly cspName?: string;
  /**
  * The customer address of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_address Vxc#customer_address}
  */
  readonly customerAddress?: string;
  /**
  * The customer ASN of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_asn Vxc#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * The customer IPv4 address of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_ip4_address Vxc#customer_ip4_address}
  */
  readonly customerIp4Address?: string;
  /**
  * The customer IPv6 network of the Transit VXC connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_ip6_network Vxc#customer_ip6_network}
  */
  readonly customerIp6Network?: string;
  /**
  * The customer IP address of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#customer_ip_address Vxc#customer_ip_address}
  */
  readonly customerIpAddress?: string;
  /**
  * The ID of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#id Vxc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The IP addresses of the Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ip_addresses Vxc#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * The IPv4 gateway address of the Transit VXC connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ipv4_gateway_address Vxc#ipv4_gateway_address}
  */
  readonly ipv4GatewayAddress?: string;
  /**
  * The IPv6 gateway address of the Transit VXC connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#ipv6_gateway_address Vxc#ipv6_gateway_address}
  */
  readonly ipv6GatewayAddress?: string;
  /**
  * Whether the CSP connection is managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#managed Vxc#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * The name of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#name Vxc#name}
  */
  readonly name?: string;
  /**
  * The owner's AWS account of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#owner_account Vxc#owner_account}
  */
  readonly ownerAccount?: string;
  /**
  * The pairing key of the Google Cloud connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#pairing_key Vxc#pairing_key}
  */
  readonly pairingKey?: string;
  /**
  * The peer ASN of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#peer_asn Vxc#peer_asn}
  */
  readonly peerAsn?: number;
  /**
  * The provider IP address of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#provider_ip_address Vxc#provider_ip_address}
  */
  readonly providerIpAddress?: string;
  /**
  * The resource name of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#resource_name Vxc#resource_name}
  */
  readonly resourceName?: string;
  /**
  * The resource type of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#resource_type Vxc#resource_type}
  */
  readonly resourceType?: string;
  /**
  * The Azure service key of the CSP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#service_key Vxc#service_key}
  */
  readonly serviceKey?: string;
  /**
  * The type of the AWS Virtual Interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#type Vxc#type}
  */
  readonly type?: string;
  /**
  * The ID of the AWS Virtual Interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#vif_id Vxc#vif_id}
  */
  readonly vifId?: string;
  /**
  * The name of the Virtual Router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#virtual_router_name Vxc#virtual_router_name}
  */
  readonly virtualRouterName?: string;
}

export function vxcCspConnectionsToTerraform(struct?: VxcCspConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    amazon_address: cdktf.stringToTerraform(struct!.amazonAddress),
    asn: cdktf.numberToTerraform(struct!.asn),
    auth_key: cdktf.stringToTerraform(struct!.authKey),
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    bandwidths: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.bandwidths),
    connect_type: cdktf.stringToTerraform(struct!.connectType),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    csp_name: cdktf.stringToTerraform(struct!.cspName),
    customer_address: cdktf.stringToTerraform(struct!.customerAddress),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    customer_ip4_address: cdktf.stringToTerraform(struct!.customerIp4Address),
    customer_ip6_network: cdktf.stringToTerraform(struct!.customerIp6Network),
    customer_ip_address: cdktf.stringToTerraform(struct!.customerIpAddress),
    id: cdktf.numberToTerraform(struct!.id),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    ipv4_gateway_address: cdktf.stringToTerraform(struct!.ipv4GatewayAddress),
    ipv6_gateway_address: cdktf.stringToTerraform(struct!.ipv6GatewayAddress),
    managed: cdktf.booleanToTerraform(struct!.managed),
    name: cdktf.stringToTerraform(struct!.name),
    owner_account: cdktf.stringToTerraform(struct!.ownerAccount),
    pairing_key: cdktf.stringToTerraform(struct!.pairingKey),
    peer_asn: cdktf.numberToTerraform(struct!.peerAsn),
    provider_ip_address: cdktf.stringToTerraform(struct!.providerIpAddress),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    service_key: cdktf.stringToTerraform(struct!.serviceKey),
    type: cdktf.stringToTerraform(struct!.type),
    vif_id: cdktf.stringToTerraform(struct!.vifId),
    virtual_router_name: cdktf.stringToTerraform(struct!.virtualRouterName),
  }
}


export function vxcCspConnectionsToHclTerraform(struct?: VxcCspConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amazon_address: {
      value: cdktf.stringToHclTerraform(struct!.amazonAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidths: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.bandwidths),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    connect_type: {
      value: cdktf.stringToHclTerraform(struct!.connectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    csp_name: {
      value: cdktf.stringToHclTerraform(struct!.cspName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_address: {
      value: cdktf.stringToHclTerraform(struct!.customerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_asn: {
      value: cdktf.numberToHclTerraform(struct!.customerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    customer_ip4_address: {
      value: cdktf.stringToHclTerraform(struct!.customerIp4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_ip6_network: {
      value: cdktf.stringToHclTerraform(struct!.customerIp6Network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.customerIpAddress),
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
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_gateway_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4GatewayAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_gateway_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6GatewayAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed: {
      value: cdktf.booleanToHclTerraform(struct!.managed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_account: {
      value: cdktf.stringToHclTerraform(struct!.ownerAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pairing_key: {
      value: cdktf.stringToHclTerraform(struct!.pairingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_asn: {
      value: cdktf.numberToHclTerraform(struct!.peerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.providerIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceKey),
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
    vif_id: {
      value: cdktf.stringToHclTerraform(struct!.vifId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_router_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualRouterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VxcCspConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VxcCspConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._amazonAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonAddress = this._amazonAddress;
    }
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._bandwidths !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidths = this._bandwidths;
    }
    if (this._connectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectType = this._connectType;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._cspName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cspName = this._cspName;
    }
    if (this._customerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAddress = this._customerAddress;
    }
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._customerIp4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerIp4Address = this._customerIp4Address;
    }
    if (this._customerIp6Network !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerIp6Network = this._customerIp6Network;
    }
    if (this._customerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerIpAddress = this._customerIpAddress;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._ipv4GatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4GatewayAddress = this._ipv4GatewayAddress;
    }
    if (this._ipv6GatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GatewayAddress = this._ipv6GatewayAddress;
    }
    if (this._managed !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ownerAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerAccount = this._ownerAccount;
    }
    if (this._pairingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingKey = this._pairingKey;
    }
    if (this._peerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAsn = this._peerAsn;
    }
    if (this._providerIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerIpAddress = this._providerIpAddress;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._serviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceKey = this._serviceKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vifId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vifId = this._vifId;
    }
    if (this._virtualRouterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouterName = this._virtualRouterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VxcCspConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._accountId = undefined;
      this._amazonAddress = undefined;
      this._asn = undefined;
      this._authKey = undefined;
      this._bandwidth = undefined;
      this._bandwidths = undefined;
      this._connectType = undefined;
      this._connectionId = undefined;
      this._cspName = undefined;
      this._customerAddress = undefined;
      this._customerAsn = undefined;
      this._customerIp4Address = undefined;
      this._customerIp6Network = undefined;
      this._customerIpAddress = undefined;
      this._id = undefined;
      this._ipAddresses = undefined;
      this._ipv4GatewayAddress = undefined;
      this._ipv6GatewayAddress = undefined;
      this._managed = undefined;
      this._name = undefined;
      this._ownerAccount = undefined;
      this._pairingKey = undefined;
      this._peerAsn = undefined;
      this._providerIpAddress = undefined;
      this._resourceName = undefined;
      this._resourceType = undefined;
      this._serviceKey = undefined;
      this._type = undefined;
      this._vifId = undefined;
      this._virtualRouterName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._accountId = value.accountId;
      this._amazonAddress = value.amazonAddress;
      this._asn = value.asn;
      this._authKey = value.authKey;
      this._bandwidth = value.bandwidth;
      this._bandwidths = value.bandwidths;
      this._connectType = value.connectType;
      this._connectionId = value.connectionId;
      this._cspName = value.cspName;
      this._customerAddress = value.customerAddress;
      this._customerAsn = value.customerAsn;
      this._customerIp4Address = value.customerIp4Address;
      this._customerIp6Network = value.customerIp6Network;
      this._customerIpAddress = value.customerIpAddress;
      this._id = value.id;
      this._ipAddresses = value.ipAddresses;
      this._ipv4GatewayAddress = value.ipv4GatewayAddress;
      this._ipv6GatewayAddress = value.ipv6GatewayAddress;
      this._managed = value.managed;
      this._name = value.name;
      this._ownerAccount = value.ownerAccount;
      this._pairingKey = value.pairingKey;
      this._peerAsn = value.peerAsn;
      this._providerIpAddress = value.providerIpAddress;
      this._resourceName = value.resourceName;
      this._resourceType = value.resourceType;
      this._serviceKey = value.serviceKey;
      this._type = value.type;
      this._vifId = value.vifId;
      this._virtualRouterName = value.virtualRouterName;
    }
  }

  // account - computed: true, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // amazon_address - computed: true, optional: true, required: false
  private _amazonAddress?: string; 
  public get amazonAddress() {
    return this.getStringAttribute('amazon_address');
  }
  public set amazonAddress(value: string) {
    this._amazonAddress = value;
  }
  public resetAmazonAddress() {
    this._amazonAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonAddressInput() {
    return this._amazonAddress;
  }

  // asn - computed: true, optional: true, required: false
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

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // bandwidths - computed: true, optional: true, required: false
  private _bandwidths?: number[]; 
  public get bandwidths() {
    return this.getNumberListAttribute('bandwidths');
  }
  public set bandwidths(value: number[]) {
    this._bandwidths = value;
  }
  public resetBandwidths() {
    this._bandwidths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthsInput() {
    return this._bandwidths;
  }

  // connect_type - computed: true, optional: true, required: false
  private _connectType?: string; 
  public get connectType() {
    return this.getStringAttribute('connect_type');
  }
  public set connectType(value: string) {
    this._connectType = value;
  }
  public resetConnectType() {
    this._connectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTypeInput() {
    return this._connectType;
  }

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // csp_name - computed: true, optional: true, required: false
  private _cspName?: string; 
  public get cspName() {
    return this.getStringAttribute('csp_name');
  }
  public set cspName(value: string) {
    this._cspName = value;
  }
  public resetCspName() {
    this._cspName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspNameInput() {
    return this._cspName;
  }

  // customer_address - computed: true, optional: true, required: false
  private _customerAddress?: string; 
  public get customerAddress() {
    return this.getStringAttribute('customer_address');
  }
  public set customerAddress(value: string) {
    this._customerAddress = value;
  }
  public resetCustomerAddress() {
    this._customerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAddressInput() {
    return this._customerAddress;
  }

  // customer_asn - computed: true, optional: true, required: false
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // customer_ip4_address - computed: true, optional: true, required: false
  private _customerIp4Address?: string; 
  public get customerIp4Address() {
    return this.getStringAttribute('customer_ip4_address');
  }
  public set customerIp4Address(value: string) {
    this._customerIp4Address = value;
  }
  public resetCustomerIp4Address() {
    this._customerIp4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIp4AddressInput() {
    return this._customerIp4Address;
  }

  // customer_ip6_network - computed: true, optional: true, required: false
  private _customerIp6Network?: string; 
  public get customerIp6Network() {
    return this.getStringAttribute('customer_ip6_network');
  }
  public set customerIp6Network(value: string) {
    this._customerIp6Network = value;
  }
  public resetCustomerIp6Network() {
    this._customerIp6Network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIp6NetworkInput() {
    return this._customerIp6Network;
  }

  // customer_ip_address - computed: true, optional: true, required: false
  private _customerIpAddress?: string; 
  public get customerIpAddress() {
    return this.getStringAttribute('customer_ip_address');
  }
  public set customerIpAddress(value: string) {
    this._customerIpAddress = value;
  }
  public resetCustomerIpAddress() {
    this._customerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerIpAddressInput() {
    return this._customerIpAddress;
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

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ipv4_gateway_address - computed: true, optional: true, required: false
  private _ipv4GatewayAddress?: string; 
  public get ipv4GatewayAddress() {
    return this.getStringAttribute('ipv4_gateway_address');
  }
  public set ipv4GatewayAddress(value: string) {
    this._ipv4GatewayAddress = value;
  }
  public resetIpv4GatewayAddress() {
    this._ipv4GatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayAddressInput() {
    return this._ipv4GatewayAddress;
  }

  // ipv6_gateway_address - computed: true, optional: true, required: false
  private _ipv6GatewayAddress?: string; 
  public get ipv6GatewayAddress() {
    return this.getStringAttribute('ipv6_gateway_address');
  }
  public set ipv6GatewayAddress(value: string) {
    this._ipv6GatewayAddress = value;
  }
  public resetIpv6GatewayAddress() {
    this._ipv6GatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayAddressInput() {
    return this._ipv6GatewayAddress;
  }

  // managed - computed: true, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // name - computed: true, optional: true, required: false
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

  // owner_account - computed: true, optional: true, required: false
  private _ownerAccount?: string; 
  public get ownerAccount() {
    return this.getStringAttribute('owner_account');
  }
  public set ownerAccount(value: string) {
    this._ownerAccount = value;
  }
  public resetOwnerAccount() {
    this._ownerAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerAccountInput() {
    return this._ownerAccount;
  }

  // pairing_key - computed: true, optional: true, required: false
  private _pairingKey?: string; 
  public get pairingKey() {
    return this.getStringAttribute('pairing_key');
  }
  public set pairingKey(value: string) {
    this._pairingKey = value;
  }
  public resetPairingKey() {
    this._pairingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingKeyInput() {
    return this._pairingKey;
  }

  // peer_asn - computed: true, optional: true, required: false
  private _peerAsn?: number; 
  public get peerAsn() {
    return this.getNumberAttribute('peer_asn');
  }
  public set peerAsn(value: number) {
    this._peerAsn = value;
  }
  public resetPeerAsn() {
    this._peerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsnInput() {
    return this._peerAsn;
  }

  // provider_ip_address - computed: true, optional: true, required: false
  private _providerIpAddress?: string; 
  public get providerIpAddress() {
    return this.getStringAttribute('provider_ip_address');
  }
  public set providerIpAddress(value: string) {
    this._providerIpAddress = value;
  }
  public resetProviderIpAddress() {
    this._providerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIpAddressInput() {
    return this._providerIpAddress;
  }

  // resource_name - computed: true, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // service_key - computed: true, optional: true, required: false
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  public resetServiceKey() {
    this._serviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
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

  // vif_id - computed: true, optional: true, required: false
  private _vifId?: string; 
  public get vifId() {
    return this.getStringAttribute('vif_id');
  }
  public set vifId(value: string) {
    this._vifId = value;
  }
  public resetVifId() {
    this._vifId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vifIdInput() {
    return this._vifId;
  }

  // virtual_router_name - computed: true, optional: true, required: false
  private _virtualRouterName?: string; 
  public get virtualRouterName() {
    return this.getStringAttribute('virtual_router_name');
  }
  public set virtualRouterName(value: string) {
    this._virtualRouterName = value;
  }
  public resetVirtualRouterName() {
    this._virtualRouterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterNameInput() {
    return this._virtualRouterName;
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
}

export class VxcCspConnectionsList extends cdktf.ComplexList {
  public internalValue? : VxcCspConnections[] | cdktf.IResolvable

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
  public get(index: number): VxcCspConnectionsOutputReference {
    return new VxcCspConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc megaport_vxc}
*/
export class Vxc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "megaport_vxc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vxc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vxc to import
  * @param importFromId The id of the existing Vxc that should be imported. Refer to the {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vxc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "megaport_vxc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/vxc megaport_vxc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VxcConfig
  */
  public constructor(scope: Construct, id: string, config: VxcConfig) {
    super(scope, id, {
      terraformResourceType: 'megaport_vxc',
      terraformGeneratorMetadata: {
        providerName: 'megaport',
        providerVersion: '1.4.6',
        providerVersionConstraint: '1.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aEnd.internalValue = config.aEnd;
    this._aEndPartnerConfig.internalValue = config.aEndPartnerConfig;
    this._bEnd.internalValue = config.bEnd;
    this._bEndPartnerConfig.internalValue = config.bEndPartnerConfig;
    this._contractTermMonths = config.contractTermMonths;
    this._costCentre = config.costCentre;
    this._productName = config.productName;
    this._promoCode = config.promoCode;
    this._rateLimit = config.rateLimit;
    this._resourceTags = config.resourceTags;
    this._serviceKey = config.serviceKey;
    this._shutdown = config.shutdown;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // a_end - computed: false, optional: false, required: true
  private _aEnd = new VxcAEndOutputReference(this, "a_end");
  public get aEnd() {
    return this._aEnd;
  }
  public putAEnd(value: VxcAEnd) {
    this._aEnd.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aEndInput() {
    return this._aEnd.internalValue;
  }

  // a_end_partner_config - computed: false, optional: true, required: false
  private _aEndPartnerConfig = new VxcAEndPartnerConfigOutputReference(this, "a_end_partner_config");
  public get aEndPartnerConfig() {
    return this._aEndPartnerConfig;
  }
  public putAEndPartnerConfig(value: VxcAEndPartnerConfig) {
    this._aEndPartnerConfig.internalValue = value;
  }
  public resetAEndPartnerConfig() {
    this._aEndPartnerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aEndPartnerConfigInput() {
    return this._aEndPartnerConfig.internalValue;
  }

  // admin_locked - computed: true, optional: false, required: false
  public get adminLocked() {
    return this.getBooleanAttribute('admin_locked');
  }

  // attribute_tags - computed: true, optional: false, required: false
  private _attributeTags = new cdktf.StringMap(this, "attribute_tags");
  public get attributeTags() {
    return this._attributeTags;
  }

  // b_end - computed: false, optional: false, required: true
  private _bEnd = new VxcBEndOutputReference(this, "b_end");
  public get bEnd() {
    return this._bEnd;
  }
  public putBEnd(value: VxcBEnd) {
    this._bEnd.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bEndInput() {
    return this._bEnd.internalValue;
  }

  // b_end_partner_config - computed: false, optional: true, required: false
  private _bEndPartnerConfig = new VxcBEndPartnerConfigOutputReference(this, "b_end_partner_config");
  public get bEndPartnerConfig() {
    return this._bEndPartnerConfig;
  }
  public putBEndPartnerConfig(value: VxcBEndPartnerConfig) {
    this._bEndPartnerConfig.internalValue = value;
  }
  public resetBEndPartnerConfig() {
    this._bEndPartnerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bEndPartnerConfigInput() {
    return this._bEndPartnerConfig.internalValue;
  }

  // cancelable - computed: true, optional: false, required: false
  public get cancelable() {
    return this.getBooleanAttribute('cancelable');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // company_uid - computed: true, optional: false, required: false
  public get companyUid() {
    return this.getStringAttribute('company_uid');
  }

  // contract_end_date - computed: true, optional: false, required: false
  public get contractEndDate() {
    return this.getStringAttribute('contract_end_date');
  }

  // contract_start_date - computed: true, optional: false, required: false
  public get contractStartDate() {
    return this.getStringAttribute('contract_start_date');
  }

  // contract_term_months - computed: false, optional: false, required: true
  private _contractTermMonths?: number; 
  public get contractTermMonths() {
    return this.getNumberAttribute('contract_term_months');
  }
  public set contractTermMonths(value: number) {
    this._contractTermMonths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractTermMonthsInput() {
    return this._contractTermMonths;
  }

  // cost_centre - computed: true, optional: true, required: false
  private _costCentre?: string; 
  public get costCentre() {
    return this.getStringAttribute('cost_centre');
  }
  public set costCentre(value: string) {
    this._costCentre = value;
  }
  public resetCostCentre() {
    this._costCentre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCentreInput() {
    return this._costCentre;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // csp_connections - computed: true, optional: false, required: false
  private _cspConnections = new VxcCspConnectionsList(this, "csp_connections", false);
  public get cspConnections() {
    return this._cspConnections;
  }

  // distance_band - computed: true, optional: false, required: false
  public get distanceBand() {
    return this.getStringAttribute('distance_band');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // live_date - computed: true, optional: false, required: false
  public get liveDate() {
    return this.getStringAttribute('live_date');
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getNumberAttribute('product_id');
  }

  // product_name - computed: false, optional: false, required: true
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // product_uid - computed: true, optional: false, required: false
  public get productUid() {
    return this.getStringAttribute('product_uid');
  }

  // promo_code - computed: false, optional: true, required: false
  private _promoCode?: string; 
  public get promoCode() {
    return this.getStringAttribute('promo_code');
  }
  public set promoCode(value: string) {
    this._promoCode = value;
  }
  public resetPromoCode() {
    this._promoCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promoCodeInput() {
    return this._promoCode;
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // rate_limit - computed: false, optional: false, required: true
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // secondary_name - computed: true, optional: false, required: false
  public get secondaryName() {
    return this.getStringAttribute('secondary_name');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }

  // service_key - computed: false, optional: true, required: false
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  public resetServiceKey() {
    this._serviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey;
  }

  // shutdown - computed: true, optional: true, required: false
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

  // usage_algorithm - computed: true, optional: false, required: false
  public get usageAlgorithm() {
    return this.getStringAttribute('usage_algorithm');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      a_end: vxcAEndToTerraform(this._aEnd.internalValue),
      a_end_partner_config: vxcAEndPartnerConfigToTerraform(this._aEndPartnerConfig.internalValue),
      b_end: vxcBEndToTerraform(this._bEnd.internalValue),
      b_end_partner_config: vxcBEndPartnerConfigToTerraform(this._bEndPartnerConfig.internalValue),
      contract_term_months: cdktf.numberToTerraform(this._contractTermMonths),
      cost_centre: cdktf.stringToTerraform(this._costCentre),
      product_name: cdktf.stringToTerraform(this._productName),
      promo_code: cdktf.stringToTerraform(this._promoCode),
      rate_limit: cdktf.numberToTerraform(this._rateLimit),
      resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceTags),
      service_key: cdktf.stringToTerraform(this._serviceKey),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      a_end: {
        value: vxcAEndToHclTerraform(this._aEnd.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VxcAEnd",
      },
      a_end_partner_config: {
        value: vxcAEndPartnerConfigToHclTerraform(this._aEndPartnerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VxcAEndPartnerConfig",
      },
      b_end: {
        value: vxcBEndToHclTerraform(this._bEnd.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VxcBEnd",
      },
      b_end_partner_config: {
        value: vxcBEndPartnerConfigToHclTerraform(this._bEndPartnerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VxcBEndPartnerConfig",
      },
      contract_term_months: {
        value: cdktf.numberToHclTerraform(this._contractTermMonths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cost_centre: {
        value: cdktf.stringToHclTerraform(this._costCentre),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promo_code: {
        value: cdktf.stringToHclTerraform(this._promoCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit: {
        value: cdktf.numberToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      service_key: {
        value: cdktf.stringToHclTerraform(this._serviceKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
