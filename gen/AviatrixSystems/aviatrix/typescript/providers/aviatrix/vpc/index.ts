// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account name. This account will be used to create an Aviatrix VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#account_name Vpc#account_name}
  */
  readonly accountName: string;
  /**
  * Specify the VPC as Aviatrix FireNet VPC or not. Required to be false for GCP provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#aviatrix_firenet_vpc Vpc#aviatrix_firenet_vpc}
  */
  readonly aviatrixFirenetVpc?: boolean | cdktf.IResolvable;
  /**
  * Specify the VPC as Aviatrix Transit VPC or not. Required to be false for GCP provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#aviatrix_transit_vpc Vpc#aviatrix_transit_vpc}
  */
  readonly aviatrixTransitVpc?: boolean | cdktf.IResolvable;
  /**
  * Subnet of the VPC to be created. Required to be empty for GCP provider, and non-empty for other providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#cidr Vpc#cidr}
  */
  readonly cidr?: string;
  /**
  * Type of cloud service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#cloud_type Vpc#cloud_type}
  */
  readonly cloudType: number;
  /**
  * Enable IPv6 for the VPC. Only supported for AWS (1), Azure (8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#enable_ipv6 Vpc#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Enable Native AWS GWLB for FireNet Function. Only valid with cloud_type = 1 (AWS). Valid values: true or false. Default value: false. Available as of provider version R2.18+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#enable_native_gwlb Vpc#enable_native_gwlb}
  */
  readonly enableNativeGwlb?: boolean | cdktf.IResolvable;
  /**
  * Switch to enable private oob subnet. Only supported for AWS/AWSGov provider. Valid values: true, false. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#enable_private_oob_subnet Vpc#enable_private_oob_subnet}
  */
  readonly enablePrivateOobSubnet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#id Vpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the VPC to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#name Vpc#name}
  */
  readonly name: string;
  /**
  * Number of public subnet and private subnet pair to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#num_of_subnet_pairs Vpc#num_of_subnet_pairs}
  */
  readonly numOfSubnetPairs?: number;
  /**
  * Switch to only launch private subnets. Only available when Private Mode is enabled on the Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#private_mode_subnets Vpc#private_mode_subnets}
  */
  readonly privateModeSubnets?: boolean | cdktf.IResolvable;
  /**
  * Region of cloud provider. Required to be empty for GCP provider, and non-empty for other providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#region Vpc#region}
  */
  readonly region?: string;
  /**
  * Resource group of the Azure VPC created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#resource_group Vpc#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Subnet size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#subnet_size Vpc#subnet_size}
  */
  readonly subnetSize?: number;
  /**
  * IPv6 CIDR for the VPC. Required when enable_ipv6 is true for Azure (8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#vpc_ipv6_cidr Vpc#vpc_ipv6_cidr}
  */
  readonly vpcIpv6Cidr?: string;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#subnets Vpc#subnets}
  */
  readonly subnets?: VpcSubnets[] | cdktf.IResolvable;
}
export interface VpcPrivateSubnets {
}

export function vpcPrivateSubnetsToTerraform(struct?: VpcPrivateSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcPrivateSubnetsToHclTerraform(struct?: VpcPrivateSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcPrivateSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcPrivateSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPrivateSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // ipv6_cidr - computed: true, optional: false, required: false
  public get ipv6Cidr() {
    return this.getStringAttribute('ipv6_cidr');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VpcPrivateSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): VpcPrivateSubnetsOutputReference {
    return new VpcPrivateSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcPublicSubnets {
}

export function vpcPublicSubnetsToTerraform(struct?: VpcPublicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vpcPublicSubnetsToHclTerraform(struct?: VpcPublicSubnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VpcPublicSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcPublicSubnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPublicSubnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // ipv6_cidr - computed: true, optional: false, required: false
  public get ipv6Cidr() {
    return this.getStringAttribute('ipv6_cidr');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VpcPublicSubnetsList extends cdktf.ComplexList {

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
  public get(index: number): VpcPublicSubnetsOutputReference {
    return new VpcPublicSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpcSubnets {
  /**
  * Subnet cidr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#cidr Vpc#cidr}
  */
  readonly cidr?: string;
  /**
  * Subnet name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#name Vpc#name}
  */
  readonly name?: string;
  /**
  * Subnet region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#region Vpc#region}
  */
  readonly region?: string;
}

export function vpcSubnetsToTerraform(struct?: VpcSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function vpcSubnetsToHclTerraform(struct?: VpcSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._name = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._name = value.name;
      this._region = value.region;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // ipv6_cidr - computed: true, optional: false, required: false
  public get ipv6Cidr() {
    return this.getStringAttribute('ipv6_cidr');
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class VpcSubnetsList extends cdktf.ComplexList {
  public internalValue? : VpcSubnets[] | cdktf.IResolvable

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
  public get(index: number): VpcSubnetsOutputReference {
    return new VpcSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc aviatrix_vpc}
*/
export class Vpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpc to import
  * @param importFromId The id of the existing Vpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/vpc aviatrix_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcConfig
  */
  public constructor(scope: Construct, id: string, config: VpcConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_vpc',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._aviatrixFirenetVpc = config.aviatrixFirenetVpc;
    this._aviatrixTransitVpc = config.aviatrixTransitVpc;
    this._cidr = config.cidr;
    this._cloudType = config.cloudType;
    this._enableIpv6 = config.enableIpv6;
    this._enableNativeGwlb = config.enableNativeGwlb;
    this._enablePrivateOobSubnet = config.enablePrivateOobSubnet;
    this._id = config.id;
    this._name = config.name;
    this._numOfSubnetPairs = config.numOfSubnetPairs;
    this._privateModeSubnets = config.privateModeSubnets;
    this._region = config.region;
    this._resourceGroup = config.resourceGroup;
    this._subnetSize = config.subnetSize;
    this._vpcIpv6Cidr = config.vpcIpv6Cidr;
    this._subnets.internalValue = config.subnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // availability_domains - computed: true, optional: false, required: false
  public get availabilityDomains() {
    return this.getListAttribute('availability_domains');
  }

  // aviatrix_firenet_vpc - computed: false, optional: true, required: false
  private _aviatrixFirenetVpc?: boolean | cdktf.IResolvable; 
  public get aviatrixFirenetVpc() {
    return this.getBooleanAttribute('aviatrix_firenet_vpc');
  }
  public set aviatrixFirenetVpc(value: boolean | cdktf.IResolvable) {
    this._aviatrixFirenetVpc = value;
  }
  public resetAviatrixFirenetVpc() {
    this._aviatrixFirenetVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviatrixFirenetVpcInput() {
    return this._aviatrixFirenetVpc;
  }

  // aviatrix_transit_vpc - computed: false, optional: true, required: false
  private _aviatrixTransitVpc?: boolean | cdktf.IResolvable; 
  public get aviatrixTransitVpc() {
    return this.getBooleanAttribute('aviatrix_transit_vpc');
  }
  public set aviatrixTransitVpc(value: boolean | cdktf.IResolvable) {
    this._aviatrixTransitVpc = value;
  }
  public resetAviatrixTransitVpc() {
    this._aviatrixTransitVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aviatrixTransitVpcInput() {
    return this._aviatrixTransitVpc;
  }

  // azure_vnet_resource_id - computed: true, optional: false, required: false
  public get azureVnetResourceId() {
    return this.getStringAttribute('azure_vnet_resource_id');
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: number; 
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }
  public set cloudType(value: number) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
  }

  // enable_native_gwlb - computed: false, optional: true, required: false
  private _enableNativeGwlb?: boolean | cdktf.IResolvable; 
  public get enableNativeGwlb() {
    return this.getBooleanAttribute('enable_native_gwlb');
  }
  public set enableNativeGwlb(value: boolean | cdktf.IResolvable) {
    this._enableNativeGwlb = value;
  }
  public resetEnableNativeGwlb() {
    this._enableNativeGwlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNativeGwlbInput() {
    return this._enableNativeGwlb;
  }

  // enable_private_oob_subnet - computed: false, optional: true, required: false
  private _enablePrivateOobSubnet?: boolean | cdktf.IResolvable; 
  public get enablePrivateOobSubnet() {
    return this.getBooleanAttribute('enable_private_oob_subnet');
  }
  public set enablePrivateOobSubnet(value: boolean | cdktf.IResolvable) {
    this._enablePrivateOobSubnet = value;
  }
  public resetEnablePrivateOobSubnet() {
    this._enablePrivateOobSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateOobSubnetInput() {
    return this._enablePrivateOobSubnet;
  }

  // fault_domains - computed: true, optional: false, required: false
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
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

  // num_of_subnet_pairs - computed: false, optional: true, required: false
  private _numOfSubnetPairs?: number; 
  public get numOfSubnetPairs() {
    return this.getNumberAttribute('num_of_subnet_pairs');
  }
  public set numOfSubnetPairs(value: number) {
    this._numOfSubnetPairs = value;
  }
  public resetNumOfSubnetPairs() {
    this._numOfSubnetPairs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfSubnetPairsInput() {
    return this._numOfSubnetPairs;
  }

  // private_mode_subnets - computed: false, optional: true, required: false
  private _privateModeSubnets?: boolean | cdktf.IResolvable; 
  public get privateModeSubnets() {
    return this.getBooleanAttribute('private_mode_subnets');
  }
  public set privateModeSubnets(value: boolean | cdktf.IResolvable) {
    this._privateModeSubnets = value;
  }
  public resetPrivateModeSubnets() {
    this._privateModeSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateModeSubnetsInput() {
    return this._privateModeSubnets;
  }

  // private_subnets - computed: true, optional: false, required: false
  private _privateSubnets = new VpcPrivateSubnetsList(this, "private_subnets", false);
  public get privateSubnets() {
    return this._privateSubnets;
  }

  // public_subnets - computed: true, optional: false, required: false
  private _publicSubnets = new VpcPublicSubnetsList(this, "public_subnets", false);
  public get publicSubnets() {
    return this._publicSubnets;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // route_tables - computed: true, optional: false, required: false
  public get routeTables() {
    return this.getListAttribute('route_tables');
  }

  // subnet_size - computed: false, optional: true, required: false
  private _subnetSize?: number; 
  public get subnetSize() {
    return this.getNumberAttribute('subnet_size');
  }
  public set subnetSize(value: number) {
    this._subnetSize = value;
  }
  public resetSubnetSize() {
    this._subnetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetSizeInput() {
    return this._subnetSize;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_ipv6_cidr - computed: true, optional: true, required: false
  private _vpcIpv6Cidr?: string; 
  public get vpcIpv6Cidr() {
    return this.getStringAttribute('vpc_ipv6_cidr');
  }
  public set vpcIpv6Cidr(value: string) {
    this._vpcIpv6Cidr = value;
  }
  public resetVpcIpv6Cidr() {
    this._vpcIpv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIpv6CidrInput() {
    return this._vpcIpv6Cidr;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new VpcSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: VpcSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      aviatrix_firenet_vpc: cdktf.booleanToTerraform(this._aviatrixFirenetVpc),
      aviatrix_transit_vpc: cdktf.booleanToTerraform(this._aviatrixTransitVpc),
      cidr: cdktf.stringToTerraform(this._cidr),
      cloud_type: cdktf.numberToTerraform(this._cloudType),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      enable_native_gwlb: cdktf.booleanToTerraform(this._enableNativeGwlb),
      enable_private_oob_subnet: cdktf.booleanToTerraform(this._enablePrivateOobSubnet),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_of_subnet_pairs: cdktf.numberToTerraform(this._numOfSubnetPairs),
      private_mode_subnets: cdktf.booleanToTerraform(this._privateModeSubnets),
      region: cdktf.stringToTerraform(this._region),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      subnet_size: cdktf.numberToTerraform(this._subnetSize),
      vpc_ipv6_cidr: cdktf.stringToTerraform(this._vpcIpv6Cidr),
      subnets: cdktf.listMapper(vpcSubnetsToTerraform, true)(this._subnets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aviatrix_firenet_vpc: {
        value: cdktf.booleanToHclTerraform(this._aviatrixFirenetVpc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aviatrix_transit_vpc: {
        value: cdktf.booleanToHclTerraform(this._aviatrixTransitVpc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_type: {
        value: cdktf.numberToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_native_gwlb: {
        value: cdktf.booleanToHclTerraform(this._enableNativeGwlb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_private_oob_subnet: {
        value: cdktf.booleanToHclTerraform(this._enablePrivateOobSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      num_of_subnet_pairs: {
        value: cdktf.numberToHclTerraform(this._numOfSubnetPairs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_mode_subnets: {
        value: cdktf.booleanToHclTerraform(this._privateModeSubnets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_size: {
        value: cdktf.numberToHclTerraform(this._subnetSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_ipv6_cidr: {
        value: cdktf.stringToHclTerraform(this._vpcIpv6Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.listMapperHcl(vpcSubnetsToHclTerraform, true)(this._subnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcSubnetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
