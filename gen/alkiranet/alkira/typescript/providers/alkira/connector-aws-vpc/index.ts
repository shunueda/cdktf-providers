// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorAwsVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#aws_account_id ConnectorAwsVpc#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * AWS Region where VPC resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#aws_region ConnectorAwsVpc#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#billing_tag_ids ConnectorAwsVpc#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * ID of resource `credential_aws_vpc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#credential_id ConnectorAwsVpc#credential_id}
  */
  readonly credentialId: string;
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#cxp ConnectorAwsVpc#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#description ConnectorAwsVpc#description}
  */
  readonly description?: string;
  /**
  * Enable direct inter-vpc communication. Default is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#direct_inter_vpc_communication_enabled ConnectorAwsVpc#direct_inter_vpc_communication_enabled}
  */
  readonly directInterVpcCommunicationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Direct inter-vpc communication group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#direct_inter_vpc_communication_group ConnectorAwsVpc#direct_inter_vpc_communication_group}
  */
  readonly directInterVpcCommunicationGroup?: string;
  /**
  * Whether the connector is enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#enabled ConnectorAwsVpc#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A list of additional CXPs where the connector should be provisioned for failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#failover_cxps ConnectorAwsVpc#failover_cxps}
  */
  readonly failoverCxps?: string[];
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#group ConnectorAwsVpc#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#id ConnectorAwsVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#name ConnectorAwsVpc#name}
  */
  readonly name: string;
  /**
  * Overlay subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#overlay_subnets ConnectorAwsVpc#overlay_subnets}
  */
  readonly overlaySubnets?: string[];
  /**
  * The ID of the scale group associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#scale_group_id ConnectorAwsVpc#scale_group_id}
  */
  readonly scaleGroupId?: string;
  /**
  * The ID of segments associated with the connector. Currently, only `1` segment is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#segment_id ConnectorAwsVpc#segment_id}
  */
  readonly segmentId: string;
  /**
  * The size of the connector, one of `5XSMALL`,`XSMALL`,`SMALL`, `MEDIUM`, `LARGE`, `2LARGE`, `5LARGE`, `10LARGE`, `20LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#size ConnectorAwsVpc#size}
  */
  readonly size: string;
  /**
  * When it's set to `true`, Alkira will use TGW Connect attachments to build connection to AWS Transit Gateway. Connect Attachments suppport GRE tunnel protocol for high performance and BGP for dynamic routing. This applies to all TGW attachments. This field can be set to `true` only if the VPC is in the same AWS region as the Alkira CXP it is being deployed onto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#tgw_connect_enabled ConnectorAwsVpc#tgw_connect_enabled}
  */
  readonly tgwConnectEnabled?: boolean | cdktf.IResolvable;
  /**
  * The list of CIDR attached to the target VPC for routing purpose. It could be only specified if `vpc_subnet` is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#vpc_cidr ConnectorAwsVpc#vpc_cidr}
  */
  readonly vpcCidr?: string[];
  /**
  * The ID of the target VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#vpc_id ConnectorAwsVpc#vpc_id}
  */
  readonly vpcId: string;
  /**
  * tgw_attachment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#tgw_attachment ConnectorAwsVpc#tgw_attachment}
  */
  readonly tgwAttachment?: ConnectorAwsVpcTgwAttachment[] | cdktf.IResolvable;
  /**
  * vpc_route_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#vpc_route_table ConnectorAwsVpc#vpc_route_table}
  */
  readonly vpcRouteTable?: ConnectorAwsVpcVpcRouteTable[] | cdktf.IResolvable;
  /**
  * vpc_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#vpc_subnet ConnectorAwsVpc#vpc_subnet}
  */
  readonly vpcSubnet?: ConnectorAwsVpcVpcSubnet[] | cdktf.IResolvable;
}
export interface ConnectorAwsVpcTgwAttachment {
  /**
  * The availability zone of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#az ConnectorAwsVpc#az}
  */
  readonly az: string;
  /**
  * The Id of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#subnet_id ConnectorAwsVpc#subnet_id}
  */
  readonly subnetId: string;
}

export function connectorAwsVpcTgwAttachmentToTerraform(struct?: ConnectorAwsVpcTgwAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az: cdktf.stringToTerraform(struct!.az),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function connectorAwsVpcTgwAttachmentToHclTerraform(struct?: ConnectorAwsVpcTgwAttachment | cdktf.IResolvable): any {
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
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAwsVpcTgwAttachmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAwsVpcTgwAttachment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._az !== undefined) {
      hasAnyValues = true;
      internalValueResult.az = this._az;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAwsVpcTgwAttachment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._az = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._az = value.az;
      this._subnetId = value.subnetId;
    }
  }

  // az - computed: false, optional: false, required: true
  private _az?: string; 
  public get az() {
    return this.getStringAttribute('az');
  }
  public set az(value: string) {
    this._az = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class ConnectorAwsVpcTgwAttachmentList extends cdktf.ComplexList {
  public internalValue? : ConnectorAwsVpcTgwAttachment[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAwsVpcTgwAttachmentOutputReference {
    return new ConnectorAwsVpcTgwAttachmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorAwsVpcVpcRouteTable {
  /**
  * The Id of the route table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#id ConnectorAwsVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Routing options, one of `ADVERTISE_DEFAULT_ROUTE`, `OVERRIDE_DEFAULT_ROUTE` or `ADVERTISE_CUSTOM_PREFIX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#options ConnectorAwsVpc#options}
  */
  readonly options?: string;
  /**
  * Prefix List IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#prefix_list_ids ConnectorAwsVpc#prefix_list_ids}
  */
  readonly prefixListIds?: number[];
}

export function connectorAwsVpcVpcRouteTableToTerraform(struct?: ConnectorAwsVpcVpcRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    options: cdktf.stringToTerraform(struct!.options),
    prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.prefixListIds),
  }
}


export function connectorAwsVpcVpcRouteTableToHclTerraform(struct?: ConnectorAwsVpcVpcRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.prefixListIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAwsVpcVpcRouteTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAwsVpcVpcRouteTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._prefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIds = this._prefixListIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAwsVpcVpcRouteTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._options = undefined;
      this._prefixListIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._options = value.options;
      this._prefixListIds = value.prefixListIds;
    }
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // prefix_list_ids - computed: false, optional: true, required: false
  private _prefixListIds?: number[]; 
  public get prefixListIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('prefix_list_ids')));
  }
  public set prefixListIds(value: number[]) {
    this._prefixListIds = value;
  }
  public resetPrefixListIds() {
    this._prefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdsInput() {
    return this._prefixListIds;
  }
}

export class ConnectorAwsVpcVpcRouteTableList extends cdktf.ComplexList {
  public internalValue? : ConnectorAwsVpcVpcRouteTable[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAwsVpcVpcRouteTableOutputReference {
    return new ConnectorAwsVpcVpcRouteTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorAwsVpcVpcSubnet {
  /**
  * The CIDR of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#cidr ConnectorAwsVpc#cidr}
  */
  readonly cidr?: string;
  /**
  * The Id of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#id ConnectorAwsVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function connectorAwsVpcVpcSubnetToTerraform(struct?: ConnectorAwsVpcVpcSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function connectorAwsVpcVpcSubnetToHclTerraform(struct?: ConnectorAwsVpcVpcSubnet | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAwsVpcVpcSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAwsVpcVpcSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAwsVpcVpcSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._id = value.id;
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
}

export class ConnectorAwsVpcVpcSubnetList extends cdktf.ComplexList {
  public internalValue? : ConnectorAwsVpcVpcSubnet[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAwsVpcVpcSubnetOutputReference {
    return new ConnectorAwsVpcVpcSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc alkira_connector_aws_vpc}
*/
export class ConnectorAwsVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_aws_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorAwsVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorAwsVpc to import
  * @param importFromId The id of the existing ConnectorAwsVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorAwsVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_aws_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_vpc alkira_connector_aws_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorAwsVpcConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorAwsVpcConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_aws_vpc',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccountId = config.awsAccountId;
    this._awsRegion = config.awsRegion;
    this._billingTagIds = config.billingTagIds;
    this._credentialId = config.credentialId;
    this._cxp = config.cxp;
    this._description = config.description;
    this._directInterVpcCommunicationEnabled = config.directInterVpcCommunicationEnabled;
    this._directInterVpcCommunicationGroup = config.directInterVpcCommunicationGroup;
    this._enabled = config.enabled;
    this._failoverCxps = config.failoverCxps;
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._overlaySubnets = config.overlaySubnets;
    this._scaleGroupId = config.scaleGroupId;
    this._segmentId = config.segmentId;
    this._size = config.size;
    this._tgwConnectEnabled = config.tgwConnectEnabled;
    this._vpcCidr = config.vpcCidr;
    this._vpcId = config.vpcId;
    this._tgwAttachment.internalValue = config.tgwAttachment;
    this._vpcRouteTable.internalValue = config.vpcRouteTable;
    this._vpcSubnet.internalValue = config.vpcSubnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_account_id - computed: false, optional: false, required: true
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // credential_id - computed: false, optional: false, required: true
  private _credentialId?: string; 
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }
  public set credentialId(value: string) {
    this._credentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
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

  // direct_inter_vpc_communication_enabled - computed: false, optional: true, required: false
  private _directInterVpcCommunicationEnabled?: boolean | cdktf.IResolvable; 
  public get directInterVpcCommunicationEnabled() {
    return this.getBooleanAttribute('direct_inter_vpc_communication_enabled');
  }
  public set directInterVpcCommunicationEnabled(value: boolean | cdktf.IResolvable) {
    this._directInterVpcCommunicationEnabled = value;
  }
  public resetDirectInterVpcCommunicationEnabled() {
    this._directInterVpcCommunicationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInterVpcCommunicationEnabledInput() {
    return this._directInterVpcCommunicationEnabled;
  }

  // direct_inter_vpc_communication_group - computed: false, optional: true, required: false
  private _directInterVpcCommunicationGroup?: string; 
  public get directInterVpcCommunicationGroup() {
    return this.getStringAttribute('direct_inter_vpc_communication_group');
  }
  public set directInterVpcCommunicationGroup(value: string) {
    this._directInterVpcCommunicationGroup = value;
  }
  public resetDirectInterVpcCommunicationGroup() {
    this._directInterVpcCommunicationGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInterVpcCommunicationGroupInput() {
    return this._directInterVpcCommunicationGroup;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // failover_cxps - computed: false, optional: true, required: false
  private _failoverCxps?: string[]; 
  public get failoverCxps() {
    return cdktf.Fn.tolist(this.getListAttribute('failover_cxps'));
  }
  public set failoverCxps(value: string[]) {
    this._failoverCxps = value;
  }
  public resetFailoverCxps() {
    this._failoverCxps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverCxpsInput() {
    return this._failoverCxps;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // implicit_group_id - computed: true, optional: false, required: false
  public get implicitGroupId() {
    return this.getNumberAttribute('implicit_group_id');
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

  // overlay_subnets - computed: false, optional: true, required: false
  private _overlaySubnets?: string[]; 
  public get overlaySubnets() {
    return this.getListAttribute('overlay_subnets');
  }
  public set overlaySubnets(value: string[]) {
    this._overlaySubnets = value;
  }
  public resetOverlaySubnets() {
    this._overlaySubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlaySubnetsInput() {
    return this._overlaySubnets;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // scale_group_id - computed: false, optional: true, required: false
  private _scaleGroupId?: string; 
  public get scaleGroupId() {
    return this.getStringAttribute('scale_group_id');
  }
  public set scaleGroupId(value: string) {
    this._scaleGroupId = value;
  }
  public resetScaleGroupId() {
    this._scaleGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleGroupIdInput() {
    return this._scaleGroupId;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tgw_connect_enabled - computed: false, optional: true, required: false
  private _tgwConnectEnabled?: boolean | cdktf.IResolvable; 
  public get tgwConnectEnabled() {
    return this.getBooleanAttribute('tgw_connect_enabled');
  }
  public set tgwConnectEnabled(value: boolean | cdktf.IResolvable) {
    this._tgwConnectEnabled = value;
  }
  public resetTgwConnectEnabled() {
    this._tgwConnectEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwConnectEnabledInput() {
    return this._tgwConnectEnabled;
  }

  // vpc_cidr - computed: false, optional: true, required: false
  private _vpcCidr?: string[]; 
  public get vpcCidr() {
    return this.getListAttribute('vpc_cidr');
  }
  public set vpcCidr(value: string[]) {
    this._vpcCidr = value;
  }
  public resetVpcCidr() {
    this._vpcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcCidrInput() {
    return this._vpcCidr;
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

  // tgw_attachment - computed: false, optional: true, required: false
  private _tgwAttachment = new ConnectorAwsVpcTgwAttachmentList(this, "tgw_attachment", false);
  public get tgwAttachment() {
    return this._tgwAttachment;
  }
  public putTgwAttachment(value: ConnectorAwsVpcTgwAttachment[] | cdktf.IResolvable) {
    this._tgwAttachment.internalValue = value;
  }
  public resetTgwAttachment() {
    this._tgwAttachment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwAttachmentInput() {
    return this._tgwAttachment.internalValue;
  }

  // vpc_route_table - computed: false, optional: true, required: false
  private _vpcRouteTable = new ConnectorAwsVpcVpcRouteTableList(this, "vpc_route_table", true);
  public get vpcRouteTable() {
    return this._vpcRouteTable;
  }
  public putVpcRouteTable(value: ConnectorAwsVpcVpcRouteTable[] | cdktf.IResolvable) {
    this._vpcRouteTable.internalValue = value;
  }
  public resetVpcRouteTable() {
    this._vpcRouteTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcRouteTableInput() {
    return this._vpcRouteTable.internalValue;
  }

  // vpc_subnet - computed: false, optional: true, required: false
  private _vpcSubnet = new ConnectorAwsVpcVpcSubnetList(this, "vpc_subnet", true);
  public get vpcSubnet() {
    return this._vpcSubnet;
  }
  public putVpcSubnet(value: ConnectorAwsVpcVpcSubnet[] | cdktf.IResolvable) {
    this._vpcSubnet.internalValue = value;
  }
  public resetVpcSubnet() {
    this._vpcSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetInput() {
    return this._vpcSubnet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      credential_id: cdktf.stringToTerraform(this._credentialId),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      direct_inter_vpc_communication_enabled: cdktf.booleanToTerraform(this._directInterVpcCommunicationEnabled),
      direct_inter_vpc_communication_group: cdktf.stringToTerraform(this._directInterVpcCommunicationGroup),
      enabled: cdktf.booleanToTerraform(this._enabled),
      failover_cxps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._failoverCxps),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      overlay_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._overlaySubnets),
      scale_group_id: cdktf.stringToTerraform(this._scaleGroupId),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      size: cdktf.stringToTerraform(this._size),
      tgw_connect_enabled: cdktf.booleanToTerraform(this._tgwConnectEnabled),
      vpc_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcCidr),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      tgw_attachment: cdktf.listMapper(connectorAwsVpcTgwAttachmentToTerraform, true)(this._tgwAttachment.internalValue),
      vpc_route_table: cdktf.listMapper(connectorAwsVpcVpcRouteTableToTerraform, true)(this._vpcRouteTable.internalValue),
      vpc_subnet: cdktf.listMapper(connectorAwsVpcVpcSubnetToTerraform, true)(this._vpcSubnet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._billingTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      credential_id: {
        value: cdktf.stringToHclTerraform(this._credentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
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
      direct_inter_vpc_communication_enabled: {
        value: cdktf.booleanToHclTerraform(this._directInterVpcCommunicationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      direct_inter_vpc_communication_group: {
        value: cdktf.stringToHclTerraform(this._directInterVpcCommunicationGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failover_cxps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._failoverCxps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlay_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._overlaySubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scale_group_id: {
        value: cdktf.stringToHclTerraform(this._scaleGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_connect_enabled: {
        value: cdktf.booleanToHclTerraform(this._tgwConnectEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_cidr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcCidr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_attachment: {
        value: cdktf.listMapperHcl(connectorAwsVpcTgwAttachmentToHclTerraform, true)(this._tgwAttachment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorAwsVpcTgwAttachmentList",
      },
      vpc_route_table: {
        value: cdktf.listMapperHcl(connectorAwsVpcVpcRouteTableToHclTerraform, true)(this._vpcRouteTable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorAwsVpcVpcRouteTableList",
      },
      vpc_subnet: {
        value: cdktf.listMapperHcl(connectorAwsVpcVpcSubnetToHclTerraform, true)(this._vpcSubnet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorAwsVpcVpcSubnetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
