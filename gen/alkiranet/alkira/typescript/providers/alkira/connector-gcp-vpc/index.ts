// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorGcpVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#billing_tag_ids ConnectorGcpVpc#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * ID of resource `credential_gcp_vpc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#credential_id ConnectorGcpVpc#credential_id}
  */
  readonly credentialId: string;
  /**
  * A specific BGP ASN for the connector. This field cannot be updated once the connector has been provisioned. The ASN can be any private ASN (`64512 - 65534`, `4200000000 - 4294967294`) that is not used elsewhere in the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#customer_asn ConnectorGcpVpc#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#cxp ConnectorGcpVpc#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#description ConnectorGcpVpc#description}
  */
  readonly description?: string;
  /**
  * Is the connector enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#enabled ConnectorGcpVpc#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A list of additional CXPs where the connector should be provisioned for failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#failover_cxps ConnectorGcpVpc#failover_cxps}
  */
  readonly failoverCxps?: string[];
  /**
  * GCP Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#gcp_project_id ConnectorGcpVpc#gcp_project_id}
  */
  readonly gcpProjectId?: string;
  /**
  * GCP region where VPC resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#gcp_region ConnectorGcpVpc#gcp_region}
  */
  readonly gcpRegion: string;
  /**
  * GCP VPC name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#gcp_vpc_name ConnectorGcpVpc#gcp_vpc_name}
  */
  readonly gcpVpcName: string;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#group ConnectorGcpVpc#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#id ConnectorGcpVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#name ConnectorGcpVpc#name}
  */
  readonly name: string;
  /**
  * The ID of the scale group associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#scale_group_id ConnectorGcpVpc#scale_group_id}
  */
  readonly scaleGroupId?: string;
  /**
  * The ID of the segment associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#segment_id ConnectorGcpVpc#segment_id}
  */
  readonly segmentId: string;
  /**
  * The size of the connector, one of `5XSMALL`,`XSMALL`,`SMALL`, `MEDIUM`, `LARGE`, `2LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#size ConnectorGcpVpc#size}
  */
  readonly size: string;
  /**
  * gcp_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#gcp_routing ConnectorGcpVpc#gcp_routing}
  */
  readonly gcpRouting?: ConnectorGcpVpcGcpRouting[] | cdktf.IResolvable;
  /**
  * vpc_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#vpc_subnet ConnectorGcpVpc#vpc_subnet}
  */
  readonly vpcSubnet?: ConnectorGcpVpcVpcSubnet[] | cdktf.IResolvable;
}
export interface ConnectorGcpVpcGcpRouting {
  /**
  * Specifies the source of the routes that need to be imported. The value could be `ADVERTISE_DEFAULT_ROUTE` and `ADVERTISE_CUSTOM_PREFIX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#custom_prefix ConnectorGcpVpc#custom_prefix}
  */
  readonly customPrefix: string;
  /**
  * IDs of prefix lists defined on the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#prefix_list_ids ConnectorGcpVpc#prefix_list_ids}
  */
  readonly prefixListIds: number[];
}

export function connectorGcpVpcGcpRoutingToTerraform(struct?: ConnectorGcpVpcGcpRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_prefix: cdktf.stringToTerraform(struct!.customPrefix),
    prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.prefixListIds),
  }
}


export function connectorGcpVpcGcpRoutingToHclTerraform(struct?: ConnectorGcpVpcGcpRouting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_prefix: {
      value: cdktf.stringToHclTerraform(struct!.customPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.prefixListIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorGcpVpcGcpRoutingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorGcpVpcGcpRouting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPrefix = this._customPrefix;
    }
    if (this._prefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIds = this._prefixListIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorGcpVpcGcpRouting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customPrefix = undefined;
      this._prefixListIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customPrefix = value.customPrefix;
      this._prefixListIds = value.prefixListIds;
    }
  }

  // custom_prefix - computed: false, optional: false, required: true
  private _customPrefix?: string; 
  public get customPrefix() {
    return this.getStringAttribute('custom_prefix');
  }
  public set customPrefix(value: string) {
    this._customPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customPrefixInput() {
    return this._customPrefix;
  }

  // prefix_list_ids - computed: false, optional: false, required: true
  private _prefixListIds?: number[]; 
  public get prefixListIds() {
    return this.getNumberListAttribute('prefix_list_ids');
  }
  public set prefixListIds(value: number[]) {
    this._prefixListIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdsInput() {
    return this._prefixListIds;
  }
}

export class ConnectorGcpVpcGcpRoutingList extends cdktf.ComplexList {
  public internalValue? : ConnectorGcpVpcGcpRouting[] | cdktf.IResolvable

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
  public get(index: number): ConnectorGcpVpcGcpRoutingOutputReference {
    return new ConnectorGcpVpcGcpRoutingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorGcpVpcVpcSubnet {
  /**
  * The CIDR of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#cidr ConnectorGcpVpc#cidr}
  */
  readonly cidr?: string;
  /**
  * An identifier for the subnetwork resource with format `projects/{{project}}/regions/{{region}}/subnetworks/{{name}}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#id ConnectorGcpVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function connectorGcpVpcVpcSubnetToTerraform(struct?: ConnectorGcpVpcVpcSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function connectorGcpVpcVpcSubnetToHclTerraform(struct?: ConnectorGcpVpcVpcSubnet | cdktf.IResolvable): any {
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

export class ConnectorGcpVpcVpcSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorGcpVpcVpcSubnet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConnectorGcpVpcVpcSubnet | cdktf.IResolvable | undefined) {
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

export class ConnectorGcpVpcVpcSubnetList extends cdktf.ComplexList {
  public internalValue? : ConnectorGcpVpcVpcSubnet[] | cdktf.IResolvable

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
  public get(index: number): ConnectorGcpVpcVpcSubnetOutputReference {
    return new ConnectorGcpVpcVpcSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc alkira_connector_gcp_vpc}
*/
export class ConnectorGcpVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_gcp_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorGcpVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorGcpVpc to import
  * @param importFromId The id of the existing ConnectorGcpVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorGcpVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_gcp_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_vpc alkira_connector_gcp_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorGcpVpcConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorGcpVpcConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_gcp_vpc',
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
    this._billingTagIds = config.billingTagIds;
    this._credentialId = config.credentialId;
    this._customerAsn = config.customerAsn;
    this._cxp = config.cxp;
    this._description = config.description;
    this._enabled = config.enabled;
    this._failoverCxps = config.failoverCxps;
    this._gcpProjectId = config.gcpProjectId;
    this._gcpRegion = config.gcpRegion;
    this._gcpVpcName = config.gcpVpcName;
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._scaleGroupId = config.scaleGroupId;
    this._segmentId = config.segmentId;
    this._size = config.size;
    this._gcpRouting.internalValue = config.gcpRouting;
    this._vpcSubnet.internalValue = config.vpcSubnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // gcp_project_id - computed: false, optional: true, required: false
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  public resetGcpProjectId() {
    this._gcpProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // gcp_region - computed: false, optional: false, required: true
  private _gcpRegion?: string; 
  public get gcpRegion() {
    return this.getStringAttribute('gcp_region');
  }
  public set gcpRegion(value: string) {
    this._gcpRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpRegionInput() {
    return this._gcpRegion;
  }

  // gcp_vpc_name - computed: false, optional: false, required: true
  private _gcpVpcName?: string; 
  public get gcpVpcName() {
    return this.getStringAttribute('gcp_vpc_name');
  }
  public set gcpVpcName(value: string) {
    this._gcpVpcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpVpcNameInput() {
    return this._gcpVpcName;
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

  // gcp_routing - computed: false, optional: true, required: false
  private _gcpRouting = new ConnectorGcpVpcGcpRoutingList(this, "gcp_routing", false);
  public get gcpRouting() {
    return this._gcpRouting;
  }
  public putGcpRouting(value: ConnectorGcpVpcGcpRouting[] | cdktf.IResolvable) {
    this._gcpRouting.internalValue = value;
  }
  public resetGcpRouting() {
    this._gcpRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpRoutingInput() {
    return this._gcpRouting.internalValue;
  }

  // vpc_subnet - computed: false, optional: true, required: false
  private _vpcSubnet = new ConnectorGcpVpcVpcSubnetList(this, "vpc_subnet", true);
  public get vpcSubnet() {
    return this._vpcSubnet;
  }
  public putVpcSubnet(value: ConnectorGcpVpcVpcSubnet[] | cdktf.IResolvable) {
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
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      credential_id: cdktf.stringToTerraform(this._credentialId),
      customer_asn: cdktf.numberToTerraform(this._customerAsn),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      failover_cxps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._failoverCxps),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      gcp_region: cdktf.stringToTerraform(this._gcpRegion),
      gcp_vpc_name: cdktf.stringToTerraform(this._gcpVpcName),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scale_group_id: cdktf.stringToTerraform(this._scaleGroupId),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      size: cdktf.stringToTerraform(this._size),
      gcp_routing: cdktf.listMapper(connectorGcpVpcGcpRoutingToTerraform, true)(this._gcpRouting.internalValue),
      vpc_subnet: cdktf.listMapper(connectorGcpVpcVpcSubnetToTerraform, true)(this._vpcSubnet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      customer_asn: {
        value: cdktf.numberToHclTerraform(this._customerAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_region: {
        value: cdktf.stringToHclTerraform(this._gcpRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_vpc_name: {
        value: cdktf.stringToHclTerraform(this._gcpVpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      gcp_routing: {
        value: cdktf.listMapperHcl(connectorGcpVpcGcpRoutingToHclTerraform, true)(this._gcpRouting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorGcpVpcGcpRoutingList",
      },
      vpc_subnet: {
        value: cdktf.listMapperHcl(connectorGcpVpcVpcSubnetToHclTerraform, true)(this._vpcSubnet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorGcpVpcVpcSubnetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
