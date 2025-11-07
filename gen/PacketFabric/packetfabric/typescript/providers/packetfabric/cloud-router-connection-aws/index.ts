// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRouterConnectionAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#account_uuid CloudRouterConnectionAws#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * The AWS account ID to connect with. Must be 12 characters long. Can also be set with the PF_AWS_ACCOUNT_ID or AWS_ACCOUNT_ID environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#aws_account_id CloudRouterConnectionAws#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * BGP session ID generated when the cloud-side connection is provisioned by PacketFabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#bgp_settings_uuid CloudRouterConnectionAws#bgp_settings_uuid}
  */
  readonly bgpSettingsUuid?: string;
  /**
  * Circuit ID of the target cloud router. This starts with "PF-L3-CUST-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#circuit_id CloudRouterConnectionAws#circuit_id}
  */
  readonly circuitId: string;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#description CloudRouterConnectionAws#description}
  */
  readonly description: string;
  /**
  * Whether PacketFabric should allocate a public IP address for this connection. Set this to true if you intend to use a public VIF on the AWS side. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#is_public CloudRouterConnectionAws#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Label value linked to an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#labels CloudRouterConnectionAws#labels}
  */
  readonly labels?: string[];
  /**
  * Set this to true if you intend to use DNAT on this connection. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#maybe_dnat CloudRouterConnectionAws#maybe_dnat}
  */
  readonly maybeDnat?: boolean | cdktf.IResolvable;
  /**
  * Set this to true if you intend to use NAT on this connection. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#maybe_nat CloudRouterConnectionAws#maybe_nat}
  */
  readonly maybeNat?: boolean | cdktf.IResolvable;
  /**
  * Purchase order number or identifier of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#po_number CloudRouterConnectionAws#po_number}
  */
  readonly poNumber?: string;
  /**
  * The POP in which you want to provision the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#pop CloudRouterConnectionAws#pop}
  */
  readonly pop: string;
  /**
  * UUID of the published quote line which this connection should be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#published_quote_line_uuid CloudRouterConnectionAws#published_quote_line_uuid}
  */
  readonly publishedQuoteLineUuid?: string;
  /**
  * The desired speed of the new connection.
  * 
  * 	 Available: 50Mbps 100Mbps 200Mbps 300Mbps 400Mbps 500Mbps 1Gbps 2Gbps 5Gbps 10Gbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#speed CloudRouterConnectionAws#speed}
  */
  readonly speed: string;
  /**
  * Subscription term of the Cloud Router Connection
  * 
  * 	Enum: ["1", "12", "24", "36"] Defaults: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#subscription_term CloudRouterConnectionAws#subscription_term}
  */
  readonly subscriptionTerm?: number;
  /**
  * The desired availability zone of the connection.
  * 
  * 	Example: "A"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#zone CloudRouterConnectionAws#zone}
  */
  readonly zone: string;
  /**
  * cloud_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#cloud_settings CloudRouterConnectionAws#cloud_settings}
  */
  readonly cloudSettings?: CloudRouterConnectionAwsCloudSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#timeouts CloudRouterConnectionAws#timeouts}
  */
  readonly timeouts?: CloudRouterConnectionAwsTimeouts;
}
export interface CloudRouterConnectionAwsCloudSettingsAwsGateways {
  /**
  * The ASN of the AWS Gateway to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#asn CloudRouterConnectionAws#asn}
  */
  readonly asn?: number;
  /**
  * The ID of the AWS Gateway to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#id CloudRouterConnectionAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the AWS Gateway, required if creating a new DirectConnect Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#name CloudRouterConnectionAws#name}
  */
  readonly name?: string;
  /**
  * An array of subnet IDs to associate with this Gateway. Required for transit Gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#subnet_ids CloudRouterConnectionAws#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * The type of this AWS Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#type CloudRouterConnectionAws#type}
  */
  readonly type: string;
  /**
  * The AWS VPC ID this Gateway should be associated with. Required for private and transit Gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#vpc_id CloudRouterConnectionAws#vpc_id}
  */
  readonly vpcId?: string;
}

export function cloudRouterConnectionAwsCloudSettingsAwsGatewaysToTerraform(struct?: CloudRouterConnectionAwsCloudSettingsAwsGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    type: cdktf.stringToTerraform(struct!.type),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function cloudRouterConnectionAwsCloudSettingsAwsGatewaysToHclTerraform(struct?: CloudRouterConnectionAwsCloudSettingsAwsGateways | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionAwsCloudSettingsAwsGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRouterConnectionAwsCloudSettingsAwsGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionAwsCloudSettingsAwsGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._id = undefined;
      this._name = undefined;
      this._subnetIds = undefined;
      this._type = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._id = value.id;
      this._name = value.name;
      this._subnetIds = value.subnetIds;
      this._type = value.type;
      this._vpcId = value.vpcId;
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

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // vpc_id - computed: false, optional: true, required: false
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
}

export class CloudRouterConnectionAwsCloudSettingsAwsGatewaysList extends cdktf.ComplexList {
  public internalValue? : CloudRouterConnectionAwsCloudSettingsAwsGateways[] | cdktf.IResolvable

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
  public get(index: number): CloudRouterConnectionAwsCloudSettingsAwsGatewaysOutputReference {
    return new CloudRouterConnectionAwsCloudSettingsAwsGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappings {
  /**
  * Post-translation prefix must be equal to or included within the conditional IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#conditional_prefix CloudRouterConnectionAws#conditional_prefix}
  */
  readonly conditionalPrefix?: string;
  /**
  * Post-translation IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#private_prefix CloudRouterConnectionAws#private_prefix}
  */
  readonly privatePrefix: string;
  /**
  * Pre-translation IP prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#public_prefix CloudRouterConnectionAws#public_prefix}
  */
  readonly publicPrefix: string;
}

export function cloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappingsToTerraform(struct?: CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_prefix: cdktf.stringToTerraform(struct!.conditionalPrefix),
    private_prefix: cdktf.stringToTerraform(struct!.privatePrefix),
    public_prefix: cdktf.stringToTerraform(struct!.publicPrefix),
  }
}


export function cloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappingsToHclTerraform(struct?: CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_prefix: {
      value: cdktf.stringToHclTerraform(struct!.conditionalPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_prefix: {
      value: cdktf.stringToHclTerraform(struct!.privatePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_prefix: {
      value: cdktf.stringToHclTerraform(struct!.publicPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalPrefix = this._conditionalPrefix;
    }
    if (this._privatePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatePrefix = this._privatePrefix;
    }
    if (this._publicPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPrefix = this._publicPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalPrefix = undefined;
      this._privatePrefix = undefined;
      this._publicPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalPrefix = value.conditionalPrefix;
      this._privatePrefix = value.privatePrefix;
      this._publicPrefix = value.publicPrefix;
    }
  }

  // conditional_prefix - computed: false, optional: true, required: false
  private _conditionalPrefix?: string; 
  public get conditionalPrefix() {
    return this.getStringAttribute('conditional_prefix');
  }
  public set conditionalPrefix(value: string) {
    this._conditionalPrefix = value;
  }
  public resetConditionalPrefix() {
    this._conditionalPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalPrefixInput() {
    return this._conditionalPrefix;
  }

  // private_prefix - computed: false, optional: false, required: true
  private _privatePrefix?: string; 
  public get privatePrefix() {
    return this.getStringAttribute('private_prefix');
  }
  public set privatePrefix(value: string) {
    this._privatePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePrefixInput() {
    return this._privatePrefix;
  }

  // public_prefix - computed: false, optional: false, required: true
  private _publicPrefix?: string; 
  public get publicPrefix() {
    return this.getStringAttribute('public_prefix');
  }
  public set publicPrefix(value: string) {
    this._publicPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPrefixInput() {
    return this._publicPrefix;
  }
}

export class CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappingsList extends cdktf.ComplexList {
  public internalValue? : CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappings[] | cdktf.IResolvable

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
  public get(index: number): CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappingsOutputReference {
    return new CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRouterConnectionAwsCloudSettingsBgpSettingsNat {
  /**
  * If using NAT overload, the direction of the NAT connection (input=ingress, output=egress). 
  * 		Enum: output, input. Defaults: output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#direction CloudRouterConnectionAws#direction}
  */
  readonly direction?: string;
  /**
  * The NAT type of the NAT connection, source NAT (overload) or destination NAT (inline_dnat). 
  * 		Enum: overload, inline_dnat. Defaults: overload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#nat_type CloudRouterConnectionAws#nat_type}
  */
  readonly natType?: string;
  /**
  * If using NAT overload, all prefixes that are NATed on this connection will be translated to the pool prefix address.
  * 
  * 	Example: 10.0.0.0/32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#pool_prefixes CloudRouterConnectionAws#pool_prefixes}
  */
  readonly poolPrefixes?: string[];
  /**
  * If using NAT overload, this is the prefixes from the cloud that you want to associate with the NAT pool.
  * 
  * 	Example: 10.0.0.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#pre_nat_sources CloudRouterConnectionAws#pre_nat_sources}
  */
  readonly preNatSources?: string[];
  /**
  * dnat_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#dnat_mappings CloudRouterConnectionAws#dnat_mappings}
  */
  readonly dnatMappings?: CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappings[] | cdktf.IResolvable;
}

export function cloudRouterConnectionAwsCloudSettingsBgpSettingsNatToTerraform(struct?: CloudRouterConnectionAwsCloudSettingsBgpSettingsNatOutputReference | CloudRouterConnectionAwsCloudSettingsBgpSettingsNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    nat_type: cdktf.stringToTerraform(struct!.natType),
    pool_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.poolPrefixes),
    pre_nat_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preNatSources),
    dnat_mappings: cdktf.listMapper(cloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappingsToTerraform, true)(struct!.dnatMappings),
  }
}


export function cloudRouterConnectionAwsCloudSettingsBgpSettingsNatToHclTerraform(struct?: CloudRouterConnectionAwsCloudSettingsBgpSettingsNatOutputReference | CloudRouterConnectionAwsCloudSettingsBgpSettingsNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_type: {
      value: cdktf.stringToHclTerraform(struct!.natType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.poolPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pre_nat_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preNatSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dnat_mappings: {
      value: cdktf.listMapperHcl(cloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappingsToHclTerraform, true)(struct!.dnatMappings),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionAwsCloudSettingsBgpSettingsNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRouterConnectionAwsCloudSettingsBgpSettingsNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._natType !== undefined) {
      hasAnyValues = true;
      internalValueResult.natType = this._natType;
    }
    if (this._poolPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolPrefixes = this._poolPrefixes;
    }
    if (this._preNatSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.preNatSources = this._preNatSources;
    }
    if (this._dnatMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnatMappings = this._dnatMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionAwsCloudSettingsBgpSettingsNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._direction = undefined;
      this._natType = undefined;
      this._poolPrefixes = undefined;
      this._preNatSources = undefined;
      this._dnatMappings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._direction = value.direction;
      this._natType = value.natType;
      this._poolPrefixes = value.poolPrefixes;
      this._preNatSources = value.preNatSources;
      this._dnatMappings.internalValue = value.dnatMappings;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // nat_type - computed: false, optional: true, required: false
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  public resetNatType() {
    this._natType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
  }

  // pool_prefixes - computed: false, optional: true, required: false
  private _poolPrefixes?: string[]; 
  public get poolPrefixes() {
    return this.getListAttribute('pool_prefixes');
  }
  public set poolPrefixes(value: string[]) {
    this._poolPrefixes = value;
  }
  public resetPoolPrefixes() {
    this._poolPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolPrefixesInput() {
    return this._poolPrefixes;
  }

  // pre_nat_sources - computed: false, optional: true, required: false
  private _preNatSources?: string[]; 
  public get preNatSources() {
    return this.getListAttribute('pre_nat_sources');
  }
  public set preNatSources(value: string[]) {
    this._preNatSources = value;
  }
  public resetPreNatSources() {
    this._preNatSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preNatSourcesInput() {
    return this._preNatSources;
  }

  // dnat_mappings - computed: false, optional: true, required: false
  private _dnatMappings = new CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappingsList(this, "dnat_mappings", true);
  public get dnatMappings() {
    return this._dnatMappings;
  }
  public putDnatMappings(value: CloudRouterConnectionAwsCloudSettingsBgpSettingsNatDnatMappings[] | cdktf.IResolvable) {
    this._dnatMappings.internalValue = value;
  }
  public resetDnatMappings() {
    this._dnatMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnatMappingsInput() {
    return this._dnatMappings.internalValue;
  }
}
export interface CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixes {
  /**
  * The BGP prepend value of this prefix. It is used when type = out.
  * 
  * 	Available range is 1 through 5. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#as_prepend CloudRouterConnectionAws#as_prepend}
  */
  readonly asPrepend?: number;
  /**
  * The local_preference of this prefix. It is used when type = in.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#local_preference CloudRouterConnectionAws#local_preference}
  */
  readonly localPreference?: number;
  /**
  * The match type of this prefix.
  * 
  * 	Enum: `"exact"` `"orlonger"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#match_type CloudRouterConnectionAws#match_type}
  */
  readonly matchType?: string;
  /**
  * The MED of this prefix. It is used when type = out.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#med CloudRouterConnectionAws#med}
  */
  readonly med?: number;
  /**
  * The actual IP Prefix of this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#prefix CloudRouterConnectionAws#prefix}
  */
  readonly prefix: string;
  /**
  * Whether this prefix is in (Allowed Prefixes from Cloud) or out (Allowed Prefixes to Cloud).
  * 		Enum: in, out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#type CloudRouterConnectionAws#type}
  */
  readonly type: string;
}

export function cloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixesToTerraform(struct?: CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_prepend: cdktf.numberToTerraform(struct!.asPrepend),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    med: cdktf.numberToTerraform(struct!.med),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixesToHclTerraform(struct?: CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_prepend: {
      value: cdktf.numberToHclTerraform(struct!.asPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med: {
      value: cdktf.numberToHclTerraform(struct!.med),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
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

export class CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPrepend = this._asPrepend;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._med !== undefined) {
      hasAnyValues = true;
      internalValueResult.med = this._med;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPrepend = undefined;
      this._localPreference = undefined;
      this._matchType = undefined;
      this._med = undefined;
      this._prefix = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPrepend = value.asPrepend;
      this._localPreference = value.localPreference;
      this._matchType = value.matchType;
      this._med = value.med;
      this._prefix = value.prefix;
      this._type = value.type;
    }
  }

  // as_prepend - computed: false, optional: true, required: false
  private _asPrepend?: number; 
  public get asPrepend() {
    return this.getNumberAttribute('as_prepend');
  }
  public set asPrepend(value: number) {
    this._asPrepend = value;
  }
  public resetAsPrepend() {
    this._asPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPrependInput() {
    return this._asPrepend;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // med - computed: false, optional: true, required: false
  private _med?: number; 
  public get med() {
    return this.getNumberAttribute('med');
  }
  public set med(value: number) {
    this._med = value;
  }
  public resetMed() {
    this._med = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInput() {
    return this._med;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
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
}

export class CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixesList extends cdktf.ComplexList {
  public internalValue? : CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixes[] | cdktf.IResolvable

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
  public get(index: number): CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixesOutputReference {
    return new CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRouterConnectionAwsCloudSettingsBgpSettings {
  /**
  * The BGP prepend value for this instance. It is used when type = out.
  * 
  * 	Available range is 1 through 5. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#as_prepend CloudRouterConnectionAws#as_prepend}
  */
  readonly asPrepend?: number;
  /**
  * If you are using BFD, this is the interval (in milliseconds) at which to send test packets to peers.
  * 
  * 	Available range is 3 through 30000. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#bfd_interval CloudRouterConnectionAws#bfd_interval}
  */
  readonly bfdInterval?: number;
  /**
  * If you are using BFD, this is the number of consecutive packets that can be lost before BFD considers a peer down and shuts down BGP.
  * 
  * 	Available range is 2 through 16. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#bfd_multiplier CloudRouterConnectionAws#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Whether this BGP session is disabled. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#disabled CloudRouterConnectionAws#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The prefix of the customer router. Required for public VIFs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#l3_address CloudRouterConnectionAws#l3_address}
  */
  readonly l3Address?: string;
  /**
  * The local preference for this instance. When the same route is received in multiple locations, those with a higher local preference value are preferred by the cloud router. It is used when type = in.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#local_preference CloudRouterConnectionAws#local_preference}
  */
  readonly localPreference?: number;
  /**
  * The MD5 value of the authenticated BGP sessions. Required for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#md5 CloudRouterConnectionAws#md5}
  */
  readonly md5?: string;
  /**
  * The Multi-Exit Discriminator of this instance. When the same route is advertised in multiple locations, those with a lower MED are preferred by the peer AS. It is used when type = out.
  * 
  * 	Available range is 1 through 4294967295. Defaults: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#med CloudRouterConnectionAws#med}
  */
  readonly med?: number;
  /**
  * Whether to use exact match or longer for all prefixes. Defaults: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#orlonger CloudRouterConnectionAws#orlonger}
  */
  readonly orlonger?: boolean | cdktf.IResolvable;
  /**
  * The prefix of the remote router. Required for public VIFs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#remote_address CloudRouterConnectionAws#remote_address}
  */
  readonly remoteAddress?: string;
  /**
  * nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#nat CloudRouterConnectionAws#nat}
  */
  readonly nat?: CloudRouterConnectionAwsCloudSettingsBgpSettingsNat;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#prefixes CloudRouterConnectionAws#prefixes}
  */
  readonly prefixes: CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixes[] | cdktf.IResolvable;
}

export function cloudRouterConnectionAwsCloudSettingsBgpSettingsToTerraform(struct?: CloudRouterConnectionAwsCloudSettingsBgpSettingsOutputReference | CloudRouterConnectionAwsCloudSettingsBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_prepend: cdktf.numberToTerraform(struct!.asPrepend),
    bfd_interval: cdktf.numberToTerraform(struct!.bfdInterval),
    bfd_multiplier: cdktf.numberToTerraform(struct!.bfdMultiplier),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    l3_address: cdktf.stringToTerraform(struct!.l3Address),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    md5: cdktf.stringToTerraform(struct!.md5),
    med: cdktf.numberToTerraform(struct!.med),
    orlonger: cdktf.booleanToTerraform(struct!.orlonger),
    remote_address: cdktf.stringToTerraform(struct!.remoteAddress),
    nat: cloudRouterConnectionAwsCloudSettingsBgpSettingsNatToTerraform(struct!.nat),
    prefixes: cdktf.listMapper(cloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixesToTerraform, true)(struct!.prefixes),
  }
}


export function cloudRouterConnectionAwsCloudSettingsBgpSettingsToHclTerraform(struct?: CloudRouterConnectionAwsCloudSettingsBgpSettingsOutputReference | CloudRouterConnectionAwsCloudSettingsBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_prepend: {
      value: cdktf.numberToHclTerraform(struct!.asPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bfdMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    l3_address: {
      value: cdktf.stringToHclTerraform(struct!.l3Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5: {
      value: cdktf.stringToHclTerraform(struct!.md5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med: {
      value: cdktf.numberToHclTerraform(struct!.med),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    orlonger: {
      value: cdktf.booleanToHclTerraform(struct!.orlonger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_address: {
      value: cdktf.stringToHclTerraform(struct!.remoteAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat: {
      value: cloudRouterConnectionAwsCloudSettingsBgpSettingsNatToHclTerraform(struct!.nat),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRouterConnectionAwsCloudSettingsBgpSettingsNatList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionAwsCloudSettingsBgpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRouterConnectionAwsCloudSettingsBgpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPrepend = this._asPrepend;
    }
    if (this._bfdInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdInterval = this._bfdInterval;
    }
    if (this._bfdMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdMultiplier = this._bfdMultiplier;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._l3Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Address = this._l3Address;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._md5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5;
    }
    if (this._med !== undefined) {
      hasAnyValues = true;
      internalValueResult.med = this._med;
    }
    if (this._orlonger !== undefined) {
      hasAnyValues = true;
      internalValueResult.orlonger = this._orlonger;
    }
    if (this._remoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddress = this._remoteAddress;
    }
    if (this._nat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionAwsCloudSettingsBgpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asPrepend = undefined;
      this._bfdInterval = undefined;
      this._bfdMultiplier = undefined;
      this._disabled = undefined;
      this._l3Address = undefined;
      this._localPreference = undefined;
      this._md5 = undefined;
      this._med = undefined;
      this._orlonger = undefined;
      this._remoteAddress = undefined;
      this._nat.internalValue = undefined;
      this._prefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asPrepend = value.asPrepend;
      this._bfdInterval = value.bfdInterval;
      this._bfdMultiplier = value.bfdMultiplier;
      this._disabled = value.disabled;
      this._l3Address = value.l3Address;
      this._localPreference = value.localPreference;
      this._md5 = value.md5;
      this._med = value.med;
      this._orlonger = value.orlonger;
      this._remoteAddress = value.remoteAddress;
      this._nat.internalValue = value.nat;
      this._prefixes.internalValue = value.prefixes;
    }
  }

  // as_prepend - computed: false, optional: true, required: false
  private _asPrepend?: number; 
  public get asPrepend() {
    return this.getNumberAttribute('as_prepend');
  }
  public set asPrepend(value: number) {
    this._asPrepend = value;
  }
  public resetAsPrepend() {
    this._asPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPrependInput() {
    return this._asPrepend;
  }

  // bfd_interval - computed: false, optional: true, required: false
  private _bfdInterval?: number; 
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }
  public set bfdInterval(value: number) {
    this._bfdInterval = value;
  }
  public resetBfdInterval() {
    this._bfdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalInput() {
    return this._bfdInterval;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // l3_address - computed: false, optional: true, required: false
  private _l3Address?: string; 
  public get l3Address() {
    return this.getStringAttribute('l3_address');
  }
  public set l3Address(value: string) {
    this._l3Address = value;
  }
  public resetL3Address() {
    this._l3Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3AddressInput() {
    return this._l3Address;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5?: string; 
  public get md5() {
    return this.getStringAttribute('md5');
  }
  public set md5(value: string) {
    this._md5 = value;
  }
  public resetMd5() {
    this._md5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5;
  }

  // med - computed: false, optional: true, required: false
  private _med?: number; 
  public get med() {
    return this.getNumberAttribute('med');
  }
  public set med(value: number) {
    this._med = value;
  }
  public resetMed() {
    this._med = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInput() {
    return this._med;
  }

  // orlonger - computed: false, optional: true, required: false
  private _orlonger?: boolean | cdktf.IResolvable; 
  public get orlonger() {
    return this.getBooleanAttribute('orlonger');
  }
  public set orlonger(value: boolean | cdktf.IResolvable) {
    this._orlonger = value;
  }
  public resetOrlonger() {
    this._orlonger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orlongerInput() {
    return this._orlonger;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // nat - computed: false, optional: true, required: false
  private _nat = new CloudRouterConnectionAwsCloudSettingsBgpSettingsNatOutputReference(this, "nat");
  public get nat() {
    return this._nat;
  }
  public putNat(value: CloudRouterConnectionAwsCloudSettingsBgpSettingsNat) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // prefixes - computed: false, optional: false, required: true
  private _prefixes = new CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixesList(this, "prefixes", true);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: CloudRouterConnectionAwsCloudSettingsBgpSettingsPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }
}
export interface CloudRouterConnectionAwsCloudSettings {
  /**
  * The AWS region that should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#aws_region CloudRouterConnectionAws#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The type of VIF to use for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#aws_vif_type CloudRouterConnectionAws#aws_vif_type}
  */
  readonly awsVifType: string;
  /**
  * The UUID of the credentials to be used with this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#credentials_uuid CloudRouterConnectionAws#credentials_uuid}
  */
  readonly credentialsUuid: string;
  /**
  * Maximum Transmission Unit this port supports (size of the largest supported PDU).
  * 
  * 	Enum: ["1500", "9001"] Defaults: 1500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#mtu CloudRouterConnectionAws#mtu}
  */
  readonly mtu?: number;
  /**
  * aws_gateways block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#aws_gateways CloudRouterConnectionAws#aws_gateways}
  */
  readonly awsGateways?: CloudRouterConnectionAwsCloudSettingsAwsGateways[] | cdktf.IResolvable;
  /**
  * bgp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#bgp_settings CloudRouterConnectionAws#bgp_settings}
  */
  readonly bgpSettings: CloudRouterConnectionAwsCloudSettingsBgpSettings;
}

export function cloudRouterConnectionAwsCloudSettingsToTerraform(struct?: CloudRouterConnectionAwsCloudSettingsOutputReference | CloudRouterConnectionAwsCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_vif_type: cdktf.stringToTerraform(struct!.awsVifType),
    credentials_uuid: cdktf.stringToTerraform(struct!.credentialsUuid),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    aws_gateways: cdktf.listMapper(cloudRouterConnectionAwsCloudSettingsAwsGatewaysToTerraform, true)(struct!.awsGateways),
    bgp_settings: cloudRouterConnectionAwsCloudSettingsBgpSettingsToTerraform(struct!.bgpSettings),
  }
}


export function cloudRouterConnectionAwsCloudSettingsToHclTerraform(struct?: CloudRouterConnectionAwsCloudSettingsOutputReference | CloudRouterConnectionAwsCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_vif_type: {
      value: cdktf.stringToHclTerraform(struct!.awsVifType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_uuid: {
      value: cdktf.stringToHclTerraform(struct!.credentialsUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aws_gateways: {
      value: cdktf.listMapperHcl(cloudRouterConnectionAwsCloudSettingsAwsGatewaysToHclTerraform, true)(struct!.awsGateways),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRouterConnectionAwsCloudSettingsAwsGatewaysList",
    },
    bgp_settings: {
      value: cloudRouterConnectionAwsCloudSettingsBgpSettingsToHclTerraform(struct!.bgpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRouterConnectionAwsCloudSettingsBgpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRouterConnectionAwsCloudSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRouterConnectionAwsCloudSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsVifType !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsVifType = this._awsVifType;
    }
    if (this._credentialsUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsUuid = this._credentialsUuid;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._awsGateways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsGateways = this._awsGateways?.internalValue;
    }
    if (this._bgpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpSettings = this._bgpSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionAwsCloudSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._awsVifType = undefined;
      this._credentialsUuid = undefined;
      this._mtu = undefined;
      this._awsGateways.internalValue = undefined;
      this._bgpSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegion = value.awsRegion;
      this._awsVifType = value.awsVifType;
      this._credentialsUuid = value.credentialsUuid;
      this._mtu = value.mtu;
      this._awsGateways.internalValue = value.awsGateways;
      this._bgpSettings.internalValue = value.bgpSettings;
    }
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_vif_type - computed: false, optional: false, required: true
  private _awsVifType?: string; 
  public get awsVifType() {
    return this.getStringAttribute('aws_vif_type');
  }
  public set awsVifType(value: string) {
    this._awsVifType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsVifTypeInput() {
    return this._awsVifType;
  }

  // credentials_uuid - computed: false, optional: false, required: true
  private _credentialsUuid?: string; 
  public get credentialsUuid() {
    return this.getStringAttribute('credentials_uuid');
  }
  public set credentialsUuid(value: string) {
    this._credentialsUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsUuidInput() {
    return this._credentialsUuid;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // aws_gateways - computed: false, optional: true, required: false
  private _awsGateways = new CloudRouterConnectionAwsCloudSettingsAwsGatewaysList(this, "aws_gateways", false);
  public get awsGateways() {
    return this._awsGateways;
  }
  public putAwsGateways(value: CloudRouterConnectionAwsCloudSettingsAwsGateways[] | cdktf.IResolvable) {
    this._awsGateways.internalValue = value;
  }
  public resetAwsGateways() {
    this._awsGateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsGatewaysInput() {
    return this._awsGateways.internalValue;
  }

  // bgp_settings - computed: false, optional: false, required: true
  private _bgpSettings = new CloudRouterConnectionAwsCloudSettingsBgpSettingsOutputReference(this, "bgp_settings");
  public get bgpSettings() {
    return this._bgpSettings;
  }
  public putBgpSettings(value: CloudRouterConnectionAwsCloudSettingsBgpSettings) {
    this._bgpSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings.internalValue;
  }
}
export interface CloudRouterConnectionAwsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#create CloudRouterConnectionAws#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#delete CloudRouterConnectionAws#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#read CloudRouterConnectionAws#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#update CloudRouterConnectionAws#update}
  */
  readonly update?: string;
}

export function cloudRouterConnectionAwsTimeoutsToTerraform(struct?: CloudRouterConnectionAwsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudRouterConnectionAwsTimeoutsToHclTerraform(struct?: CloudRouterConnectionAwsTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class CloudRouterConnectionAwsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudRouterConnectionAwsTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRouterConnectionAwsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws packetfabric_cloud_router_connection_aws}
*/
export class CloudRouterConnectionAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cloud_router_connection_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudRouterConnectionAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudRouterConnectionAws to import
  * @param importFromId The id of the existing CloudRouterConnectionAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudRouterConnectionAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cloud_router_connection_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cloud_router_connection_aws packetfabric_cloud_router_connection_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRouterConnectionAwsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRouterConnectionAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cloud_router_connection_aws',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountUuid = config.accountUuid;
    this._awsAccountId = config.awsAccountId;
    this._bgpSettingsUuid = config.bgpSettingsUuid;
    this._circuitId = config.circuitId;
    this._description = config.description;
    this._isPublic = config.isPublic;
    this._labels = config.labels;
    this._maybeDnat = config.maybeDnat;
    this._maybeNat = config.maybeNat;
    this._poNumber = config.poNumber;
    this._pop = config.pop;
    this._publishedQuoteLineUuid = config.publishedQuoteLineUuid;
    this._speed = config.speed;
    this._subscriptionTerm = config.subscriptionTerm;
    this._zone = config.zone;
    this._cloudSettings.internalValue = config.cloudSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_uuid - computed: false, optional: false, required: true
  private _accountUuid?: string; 
  public get accountUuid() {
    return this.getStringAttribute('account_uuid');
  }
  public set accountUuid(value: string) {
    this._accountUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUuidInput() {
    return this._accountUuid;
  }

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

  // bgp_settings_uuid - computed: true, optional: true, required: false
  private _bgpSettingsUuid?: string; 
  public get bgpSettingsUuid() {
    return this.getStringAttribute('bgp_settings_uuid');
  }
  public set bgpSettingsUuid(value: string) {
    this._bgpSettingsUuid = value;
  }
  public resetBgpSettingsUuid() {
    this._bgpSettingsUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsUuidInput() {
    return this._bgpSettingsUuid;
  }

  // circuit_id - computed: false, optional: false, required: true
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // cloud_provider_connection_id - computed: true, optional: false, required: false
  public get cloudProviderConnectionId() {
    return this.getStringAttribute('cloud_provider_connection_id');
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

  // etl - computed: true, optional: false, required: false
  public get etl() {
    return this.getNumberAttribute('etl');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // maybe_dnat - computed: false, optional: true, required: false
  private _maybeDnat?: boolean | cdktf.IResolvable; 
  public get maybeDnat() {
    return this.getBooleanAttribute('maybe_dnat');
  }
  public set maybeDnat(value: boolean | cdktf.IResolvable) {
    this._maybeDnat = value;
  }
  public resetMaybeDnat() {
    this._maybeDnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maybeDnatInput() {
    return this._maybeDnat;
  }

  // maybe_nat - computed: false, optional: true, required: false
  private _maybeNat?: boolean | cdktf.IResolvable; 
  public get maybeNat() {
    return this.getBooleanAttribute('maybe_nat');
  }
  public set maybeNat(value: boolean | cdktf.IResolvable) {
    this._maybeNat = value;
  }
  public resetMaybeNat() {
    this._maybeNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maybeNatInput() {
    return this._maybeNat;
  }

  // po_number - computed: false, optional: true, required: false
  private _poNumber?: string; 
  public get poNumber() {
    return this.getStringAttribute('po_number');
  }
  public set poNumber(value: string) {
    this._poNumber = value;
  }
  public resetPoNumber() {
    this._poNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poNumberInput() {
    return this._poNumber;
  }

  // pop - computed: false, optional: false, required: true
  private _pop?: string; 
  public get pop() {
    return this.getStringAttribute('pop');
  }
  public set pop(value: string) {
    this._pop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get popInput() {
    return this._pop;
  }

  // published_quote_line_uuid - computed: false, optional: true, required: false
  private _publishedQuoteLineUuid?: string; 
  public get publishedQuoteLineUuid() {
    return this.getStringAttribute('published_quote_line_uuid');
  }
  public set publishedQuoteLineUuid(value: string) {
    this._publishedQuoteLineUuid = value;
  }
  public resetPublishedQuoteLineUuid() {
    this._publishedQuoteLineUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedQuoteLineUuidInput() {
    return this._publishedQuoteLineUuid;
  }

  // speed - computed: false, optional: false, required: true
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // subscription_term - computed: false, optional: true, required: false
  private _subscriptionTerm?: number; 
  public get subscriptionTerm() {
    return this.getNumberAttribute('subscription_term');
  }
  public set subscriptionTerm(value: number) {
    this._subscriptionTerm = value;
  }
  public resetSubscriptionTerm() {
    this._subscriptionTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTermInput() {
    return this._subscriptionTerm;
  }

  // vlan_id_pf - computed: true, optional: false, required: false
  public get vlanIdPf() {
    return this.getNumberAttribute('vlan_id_pf');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // cloud_settings - computed: false, optional: true, required: false
  private _cloudSettings = new CloudRouterConnectionAwsCloudSettingsOutputReference(this, "cloud_settings");
  public get cloudSettings() {
    return this._cloudSettings;
  }
  public putCloudSettings(value: CloudRouterConnectionAwsCloudSettings) {
    this._cloudSettings.internalValue = value;
  }
  public resetCloudSettings() {
    this._cloudSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSettingsInput() {
    return this._cloudSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudRouterConnectionAwsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudRouterConnectionAwsTimeouts) {
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
      account_uuid: cdktf.stringToTerraform(this._accountUuid),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      bgp_settings_uuid: cdktf.stringToTerraform(this._bgpSettingsUuid),
      circuit_id: cdktf.stringToTerraform(this._circuitId),
      description: cdktf.stringToTerraform(this._description),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      maybe_dnat: cdktf.booleanToTerraform(this._maybeDnat),
      maybe_nat: cdktf.booleanToTerraform(this._maybeNat),
      po_number: cdktf.stringToTerraform(this._poNumber),
      pop: cdktf.stringToTerraform(this._pop),
      published_quote_line_uuid: cdktf.stringToTerraform(this._publishedQuoteLineUuid),
      speed: cdktf.stringToTerraform(this._speed),
      subscription_term: cdktf.numberToTerraform(this._subscriptionTerm),
      zone: cdktf.stringToTerraform(this._zone),
      cloud_settings: cloudRouterConnectionAwsCloudSettingsToTerraform(this._cloudSettings.internalValue),
      timeouts: cloudRouterConnectionAwsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_uuid: {
        value: cdktf.stringToHclTerraform(this._accountUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_settings_uuid: {
        value: cdktf.stringToHclTerraform(this._bgpSettingsUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      circuit_id: {
        value: cdktf.stringToHclTerraform(this._circuitId),
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
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      maybe_dnat: {
        value: cdktf.booleanToHclTerraform(this._maybeDnat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maybe_nat: {
        value: cdktf.booleanToHclTerraform(this._maybeNat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      po_number: {
        value: cdktf.stringToHclTerraform(this._poNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pop: {
        value: cdktf.stringToHclTerraform(this._pop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published_quote_line_uuid: {
        value: cdktf.stringToHclTerraform(this._publishedQuoteLineUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_term: {
        value: cdktf.numberToHclTerraform(this._subscriptionTerm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_settings: {
        value: cloudRouterConnectionAwsCloudSettingsToHclTerraform(this._cloudSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRouterConnectionAwsCloudSettingsList",
      },
      timeouts: {
        value: cloudRouterConnectionAwsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudRouterConnectionAwsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
