// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsAwsHostedConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID for the billing account that should be billed. Can also be set with the PF_ACCOUNT_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#account_uuid CsAwsHostedConnection#account_uuid}
  */
  readonly accountUuid: string;
  /**
  * The AWS account ID to connect with. Must be 12 characters long. Can also be set with the PF_AWS_ACCOUNT_ID or AWS_ACCOUNT_ID environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#aws_account_id CsAwsHostedConnection#aws_account_id}
  */
  readonly awsAccountId: string;
  /**
  * A brief description of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#description CsAwsHostedConnection#description}
  */
  readonly description: string;
  /**
  * Label value linked to an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#labels CsAwsHostedConnection#labels}
  */
  readonly labels?: string[];
  /**
  * Purchase order number or identifier of a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#po_number CsAwsHostedConnection#po_number}
  */
  readonly poNumber?: string;
  /**
  * The POP in which the hosted connection should be provisioned (the cloud on-ramp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#pop CsAwsHostedConnection#pop}
  */
  readonly pop: string;
  /**
  * The circuit ID of the PacketFabric port you want to connect to AWS. This starts with "PF-AP-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#port CsAwsHostedConnection#port}
  */
  readonly port: string;
  /**
  * The speed of the new connection.
  * 
  * 	Available: 50Mbps 100Mbps 200Mbps 300Mbps 400Mbps 500Mbps 1Gbps 2Gbps 5Gbps 10Gbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#speed CsAwsHostedConnection#speed}
  */
  readonly speed: string;
  /**
  * Valid S-VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#src_svlan CsAwsHostedConnection#src_svlan}
  */
  readonly srcSvlan?: number;
  /**
  * Valid VLAN range is from 4-4094, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#vlan CsAwsHostedConnection#vlan}
  */
  readonly vlan: number;
  /**
  * The desired availability zone of the connection.
  * 
  * 	Example: "A"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#zone CsAwsHostedConnection#zone}
  */
  readonly zone: string;
  /**
  * cloud_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#cloud_settings CsAwsHostedConnection#cloud_settings}
  */
  readonly cloudSettings?: CsAwsHostedConnectionCloudSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#timeouts CsAwsHostedConnection#timeouts}
  */
  readonly timeouts?: CsAwsHostedConnectionTimeouts;
}
export interface CsAwsHostedConnectionCloudSettingsAwsGateways {
  /**
  * An array of allowed prefixes. Required on the DirectConnect Gateway when the other Gateway is of type transit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#allowed_prefixes CsAwsHostedConnection#allowed_prefixes}
  */
  readonly allowedPrefixes?: string[];
  /**
  * The ASN of the AWS Gateway to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#asn CsAwsHostedConnection#asn}
  */
  readonly asn?: number;
  /**
  * The ID of the AWS Gateway to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#id CsAwsHostedConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the AWS Gateway, required if creating a new DirectConnect Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#name CsAwsHostedConnection#name}
  */
  readonly name?: string;
  /**
  * An array of subnet IDs to associate with this Gateway. Required for transit Gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#subnet_ids CsAwsHostedConnection#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * The type of this AWS Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#type CsAwsHostedConnection#type}
  */
  readonly type: string;
  /**
  * The AWS VPC ID this Gateway should be associated with. Required for private and transit Gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#vpc_id CsAwsHostedConnection#vpc_id}
  */
  readonly vpcId?: string;
}

export function csAwsHostedConnectionCloudSettingsAwsGatewaysToTerraform(struct?: CsAwsHostedConnectionCloudSettingsAwsGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedPrefixes),
    asn: cdktf.numberToTerraform(struct!.asn),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    type: cdktf.stringToTerraform(struct!.type),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function csAwsHostedConnectionCloudSettingsAwsGatewaysToHclTerraform(struct?: CsAwsHostedConnectionCloudSettingsAwsGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class CsAwsHostedConnectionCloudSettingsAwsGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsAwsHostedConnectionCloudSettingsAwsGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPrefixes = this._allowedPrefixes;
    }
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

  public set internalValue(value: CsAwsHostedConnectionCloudSettingsAwsGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedPrefixes = undefined;
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
      this._allowedPrefixes = value.allowedPrefixes;
      this._asn = value.asn;
      this._id = value.id;
      this._name = value.name;
      this._subnetIds = value.subnetIds;
      this._type = value.type;
      this._vpcId = value.vpcId;
    }
  }

  // allowed_prefixes - computed: false, optional: true, required: false
  private _allowedPrefixes?: string[]; 
  public get allowedPrefixes() {
    return this.getListAttribute('allowed_prefixes');
  }
  public set allowedPrefixes(value: string[]) {
    this._allowedPrefixes = value;
  }
  public resetAllowedPrefixes() {
    this._allowedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrefixesInput() {
    return this._allowedPrefixes;
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

export class CsAwsHostedConnectionCloudSettingsAwsGatewaysList extends cdktf.ComplexList {
  public internalValue? : CsAwsHostedConnectionCloudSettingsAwsGateways[] | cdktf.IResolvable

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
  public get(index: number): CsAwsHostedConnectionCloudSettingsAwsGatewaysOutputReference {
    return new CsAwsHostedConnectionCloudSettingsAwsGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsAwsHostedConnectionCloudSettingsBgpSettings {
  /**
  * The address family that should be used. Defaults: ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#address_family CsAwsHostedConnection#address_family}
  */
  readonly addressFamily?: string;
  /**
  * An array of prefixes that will be advertised. Required for public VIFs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#advertised_prefixes CsAwsHostedConnection#advertised_prefixes}
  */
  readonly advertisedPrefixes?: string[];
  /**
  * The customer ASN of this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#customer_asn CsAwsHostedConnection#customer_asn}
  */
  readonly customerAsn: number;
  /**
  * The prefix of the customer router. Required for public VIFs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#l3_address CsAwsHostedConnection#l3_address}
  */
  readonly l3Address?: string;
  /**
  * The MD5 value of the authenticated BGP sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#md5 CsAwsHostedConnection#md5}
  */
  readonly md5?: string;
  /**
  * The prefix of the remote router. Required for public VIFs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#remote_address CsAwsHostedConnection#remote_address}
  */
  readonly remoteAddress?: string;
}

export function csAwsHostedConnectionCloudSettingsBgpSettingsToTerraform(struct?: CsAwsHostedConnectionCloudSettingsBgpSettingsOutputReference | CsAwsHostedConnectionCloudSettingsBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    advertised_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advertisedPrefixes),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    l3_address: cdktf.stringToTerraform(struct!.l3Address),
    md5: cdktf.stringToTerraform(struct!.md5),
    remote_address: cdktf.stringToTerraform(struct!.remoteAddress),
  }
}


export function csAwsHostedConnectionCloudSettingsBgpSettingsToHclTerraform(struct?: CsAwsHostedConnectionCloudSettingsBgpSettingsOutputReference | CsAwsHostedConnectionCloudSettingsBgpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advertised_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advertisedPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    customer_asn: {
      value: cdktf.numberToHclTerraform(struct!.customerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_address: {
      value: cdktf.stringToHclTerraform(struct!.l3Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md5: {
      value: cdktf.stringToHclTerraform(struct!.md5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_address: {
      value: cdktf.stringToHclTerraform(struct!.remoteAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsAwsHostedConnectionCloudSettingsBgpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsAwsHostedConnectionCloudSettingsBgpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._advertisedPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedPrefixes = this._advertisedPrefixes;
    }
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._l3Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Address = this._l3Address;
    }
    if (this._md5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5;
    }
    if (this._remoteAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAddress = this._remoteAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsAwsHostedConnectionCloudSettingsBgpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressFamily = undefined;
      this._advertisedPrefixes = undefined;
      this._customerAsn = undefined;
      this._l3Address = undefined;
      this._md5 = undefined;
      this._remoteAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressFamily = value.addressFamily;
      this._advertisedPrefixes = value.advertisedPrefixes;
      this._customerAsn = value.customerAsn;
      this._l3Address = value.l3Address;
      this._md5 = value.md5;
      this._remoteAddress = value.remoteAddress;
    }
  }

  // address_family - computed: false, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // advertised_prefixes - computed: false, optional: true, required: false
  private _advertisedPrefixes?: string[]; 
  public get advertisedPrefixes() {
    return this.getListAttribute('advertised_prefixes');
  }
  public set advertisedPrefixes(value: string[]) {
    this._advertisedPrefixes = value;
  }
  public resetAdvertisedPrefixes() {
    this._advertisedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedPrefixesInput() {
    return this._advertisedPrefixes;
  }

  // customer_asn - computed: false, optional: false, required: true
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
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
}
export interface CsAwsHostedConnectionCloudSettings {
  /**
  * The AWS region that should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#aws_region CsAwsHostedConnection#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The type of VIF to use for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#aws_vif_type CsAwsHostedConnection#aws_vif_type}
  */
  readonly awsVifType: string;
  /**
  * The UUID of the credentials to be used with this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#credentials_uuid CsAwsHostedConnection#credentials_uuid}
  */
  readonly credentialsUuid: string;
  /**
  * Maximum Transmission Unit this port supports (size of the largest supported PDU).
  * 
  * 	Enum: ["1500", "9001"] Defaults: 1500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#mtu CsAwsHostedConnection#mtu}
  */
  readonly mtu?: number;
  /**
  * aws_gateways block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#aws_gateways CsAwsHostedConnection#aws_gateways}
  */
  readonly awsGateways?: CsAwsHostedConnectionCloudSettingsAwsGateways[] | cdktf.IResolvable;
  /**
  * bgp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#bgp_settings CsAwsHostedConnection#bgp_settings}
  */
  readonly bgpSettings: CsAwsHostedConnectionCloudSettingsBgpSettings;
}

export function csAwsHostedConnectionCloudSettingsToTerraform(struct?: CsAwsHostedConnectionCloudSettingsOutputReference | CsAwsHostedConnectionCloudSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_vif_type: cdktf.stringToTerraform(struct!.awsVifType),
    credentials_uuid: cdktf.stringToTerraform(struct!.credentialsUuid),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    aws_gateways: cdktf.listMapper(csAwsHostedConnectionCloudSettingsAwsGatewaysToTerraform, true)(struct!.awsGateways),
    bgp_settings: csAwsHostedConnectionCloudSettingsBgpSettingsToTerraform(struct!.bgpSettings),
  }
}


export function csAwsHostedConnectionCloudSettingsToHclTerraform(struct?: CsAwsHostedConnectionCloudSettingsOutputReference | CsAwsHostedConnectionCloudSettings): any {
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
      value: cdktf.listMapperHcl(csAwsHostedConnectionCloudSettingsAwsGatewaysToHclTerraform, true)(struct!.awsGateways),
      isBlock: true,
      type: "list",
      storageClassType: "CsAwsHostedConnectionCloudSettingsAwsGatewaysList",
    },
    bgp_settings: {
      value: csAwsHostedConnectionCloudSettingsBgpSettingsToHclTerraform(struct!.bgpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CsAwsHostedConnectionCloudSettingsBgpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsAwsHostedConnectionCloudSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CsAwsHostedConnectionCloudSettings | undefined {
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

  public set internalValue(value: CsAwsHostedConnectionCloudSettings | undefined) {
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
  private _awsGateways = new CsAwsHostedConnectionCloudSettingsAwsGatewaysList(this, "aws_gateways", false);
  public get awsGateways() {
    return this._awsGateways;
  }
  public putAwsGateways(value: CsAwsHostedConnectionCloudSettingsAwsGateways[] | cdktf.IResolvable) {
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
  private _bgpSettings = new CsAwsHostedConnectionCloudSettingsBgpSettingsOutputReference(this, "bgp_settings");
  public get bgpSettings() {
    return this._bgpSettings;
  }
  public putBgpSettings(value: CsAwsHostedConnectionCloudSettingsBgpSettings) {
    this._bgpSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSettingsInput() {
    return this._bgpSettings.internalValue;
  }
}
export interface CsAwsHostedConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#create CsAwsHostedConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#delete CsAwsHostedConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#read CsAwsHostedConnection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#update CsAwsHostedConnection#update}
  */
  readonly update?: string;
}

export function csAwsHostedConnectionTimeoutsToTerraform(struct?: CsAwsHostedConnectionTimeouts | cdktf.IResolvable): any {
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


export function csAwsHostedConnectionTimeoutsToHclTerraform(struct?: CsAwsHostedConnectionTimeouts | cdktf.IResolvable): any {
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

export class CsAwsHostedConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsAwsHostedConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsAwsHostedConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection packetfabric_cs_aws_hosted_connection}
*/
export class CsAwsHostedConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cs_aws_hosted_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsAwsHostedConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsAwsHostedConnection to import
  * @param importFromId The id of the existing CsAwsHostedConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsAwsHostedConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cs_aws_hosted_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/resources/cs_aws_hosted_connection packetfabric_cs_aws_hosted_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsAwsHostedConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: CsAwsHostedConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cs_aws_hosted_connection',
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
    this._description = config.description;
    this._labels = config.labels;
    this._poNumber = config.poNumber;
    this._pop = config.pop;
    this._port = config.port;
    this._speed = config.speed;
    this._srcSvlan = config.srcSvlan;
    this._vlan = config.vlan;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // src_svlan - computed: false, optional: true, required: false
  private _srcSvlan?: number; 
  public get srcSvlan() {
    return this.getNumberAttribute('src_svlan');
  }
  public set srcSvlan(value: number) {
    this._srcSvlan = value;
  }
  public resetSrcSvlan() {
    this._srcSvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSvlanInput() {
    return this._srcSvlan;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
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
  private _cloudSettings = new CsAwsHostedConnectionCloudSettingsOutputReference(this, "cloud_settings");
  public get cloudSettings() {
    return this._cloudSettings;
  }
  public putCloudSettings(value: CsAwsHostedConnectionCloudSettings) {
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
  private _timeouts = new CsAwsHostedConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsAwsHostedConnectionTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      po_number: cdktf.stringToTerraform(this._poNumber),
      pop: cdktf.stringToTerraform(this._pop),
      port: cdktf.stringToTerraform(this._port),
      speed: cdktf.stringToTerraform(this._speed),
      src_svlan: cdktf.numberToTerraform(this._srcSvlan),
      vlan: cdktf.numberToTerraform(this._vlan),
      zone: cdktf.stringToTerraform(this._zone),
      cloud_settings: csAwsHostedConnectionCloudSettingsToTerraform(this._cloudSettings.internalValue),
      timeouts: csAwsHostedConnectionTimeoutsToTerraform(this._timeouts.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
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
      src_svlan: {
        value: cdktf.numberToHclTerraform(this._srcSvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
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
        value: csAwsHostedConnectionCloudSettingsToHclTerraform(this._cloudSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CsAwsHostedConnectionCloudSettingsList",
      },
      timeouts: {
        value: csAwsHostedConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsAwsHostedConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
