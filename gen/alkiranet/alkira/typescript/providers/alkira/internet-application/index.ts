// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InternetApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bi-directional IFA AZ. The value could be either `AZ0` or `AZ1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#bi_directional_az InternetApplication#bi_directional_az}
  */
  readonly biDirectionalAz?: string;
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#billing_tag_ids InternetApplication#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * BYOIP ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#byoip_id InternetApplication#byoip_id}
  */
  readonly byoipId?: number;
  /**
  * Connector ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#connector_id InternetApplication#connector_id}
  */
  readonly connectorId: number;
  /**
  * Connector Type.The value could be `AWS_VPC`, `AZURE_VNET`, `GCP_VPC`, `OCI_VCN`, `SD_WAN`, `IP_SEC` `ARUBA_EDGE_CONNECT`, or `EXPRESS_ROUTE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#connector_type InternetApplication#connector_type}
  */
  readonly connectorType: string;
  /**
  * User provided FQDN prefix that will be published on AWS Route 53.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#fqdn_prefix InternetApplication#fqdn_prefix}
  */
  readonly fqdnPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#id InternetApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The credential ID of AWS account for `target` This field can only be used when `connector_type` is `AWS_VPC` and `target`'s `type` is `ILB_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#ilb_credential_id InternetApplication#ilb_credential_id}
  */
  readonly ilbCredentialId?: string;
  /**
  * Inbound connector ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#inbound_connector_id InternetApplication#inbound_connector_id}
  */
  readonly inboundConnectorId?: string;
  /**
  * This field defines how the internet application to be opened up to the public. Value `DEFAULT` means that the native cloud internet connector is used. In this case, Alkira takes care of creating this inbound internet connector implicitly. When value `AKAMAI_PROLEXIC` is used it means that the inbound traffic is through `alkira_connector_akamai_prolexic`. You need to create and configure that connector and use it with the internet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#inbound_connector_type InternetApplication#inbound_connector_type}
  */
  readonly inboundConnectorType?: string;
  /**
  * Protocol to be associated with the resource. The value could be: `IPV4`, `IPV6` or `BOTH`. In order to use the option `IPV6` or `BOTH`, field `enable_ipv6_to_ipv4_translation` should be enabled on the associated segment and a valid IP pool range should be provided. `IPV6` and `BOTH` options are only available to Internet Applications on AWS CXPs. (**BETA**)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#internet_protocol InternetApplication#internet_protocol}
  */
  readonly internetProtocol?: string;
  /**
  * The name of the internet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#name InternetApplication#name}
  */
  readonly name: string;
  /**
  * This option pertains to the `AKAMAI_PROLEXIC` `inbound_connector_type`. The public IPs are to be used to access the internet application. These public IPs must belong to one of the BYOIP ranges configured for the connector-akamai-prolexic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#public_ips InternetApplication#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * The ID of segment associated with the internet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#segment_id InternetApplication#segment_id}
  */
  readonly segmentId: string;
  /**
  * The size of the internet application, one of `SMALL`, `MEDIUM` and `LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#size InternetApplication#size}
  */
  readonly size: string;
  /**
  * source_nat_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#source_nat_ip_pool InternetApplication#source_nat_ip_pool}
  */
  readonly sourceNatIpPool?: InternetApplicationSourceNatIpPool[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#target InternetApplication#target}
  */
  readonly target: InternetApplicationTarget[] | cdktf.IResolvable;
}
export interface InternetApplicationSourceNatIpPool {
  /**
  * The end IP of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#end_ip InternetApplication#end_ip}
  */
  readonly endIp: string;
  /**
  * The start IP of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#start_ip InternetApplication#start_ip}
  */
  readonly startIp: string;
}

export function internetApplicationSourceNatIpPoolToTerraform(struct?: InternetApplicationSourceNatIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function internetApplicationSourceNatIpPoolToHclTerraform(struct?: InternetApplicationSourceNatIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InternetApplicationSourceNatIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InternetApplicationSourceNatIpPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetApplicationSourceNatIpPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: false, required: true
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // start_ip - computed: false, optional: false, required: true
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class InternetApplicationSourceNatIpPoolList extends cdktf.ComplexList {
  public internalValue? : InternetApplicationSourceNatIpPool[] | cdktf.IResolvable

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
  public get(index: number): InternetApplicationSourceNatIpPoolOutputReference {
    return new InternetApplicationSourceNatIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InternetApplicationTarget {
  /**
  * list of ports or port ranges. Values can be mixed i.e. `["20", "100-200"]`. Value ["-1"] means any port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#port_ranges InternetApplication#port_ranges}
  */
  readonly portRanges: string[];
  /**
  * The type of the target, one of `IP` or `ILB_NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#type InternetApplication#type}
  */
  readonly type: string;
  /**
  * IFA ILB name or private IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#value InternetApplication#value}
  */
  readonly value: string;
}

export function internetApplicationTargetToTerraform(struct?: InternetApplicationTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portRanges),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function internetApplicationTargetToHclTerraform(struct?: InternetApplicationTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portRanges),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InternetApplicationTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InternetApplicationTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InternetApplicationTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portRanges = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portRanges = value.portRanges;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges?: string[]; 
  public get portRanges() {
    return this.getListAttribute('port_ranges');
  }
  public set portRanges(value: string[]) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class InternetApplicationTargetList extends cdktf.ComplexList {
  public internalValue? : InternetApplicationTarget[] | cdktf.IResolvable

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
  public get(index: number): InternetApplicationTargetOutputReference {
    return new InternetApplicationTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application alkira_internet_application}
*/
export class InternetApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_internet_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InternetApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InternetApplication to import
  * @param importFromId The id of the existing InternetApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InternetApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_internet_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/internet_application alkira_internet_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InternetApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: InternetApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_internet_application',
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
    this._biDirectionalAz = config.biDirectionalAz;
    this._billingTagIds = config.billingTagIds;
    this._byoipId = config.byoipId;
    this._connectorId = config.connectorId;
    this._connectorType = config.connectorType;
    this._fqdnPrefix = config.fqdnPrefix;
    this._id = config.id;
    this._ilbCredentialId = config.ilbCredentialId;
    this._inboundConnectorId = config.inboundConnectorId;
    this._inboundConnectorType = config.inboundConnectorType;
    this._internetProtocol = config.internetProtocol;
    this._name = config.name;
    this._publicIps = config.publicIps;
    this._segmentId = config.segmentId;
    this._size = config.size;
    this._sourceNatIpPool.internalValue = config.sourceNatIpPool;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bi_directional_az - computed: false, optional: true, required: false
  private _biDirectionalAz?: string; 
  public get biDirectionalAz() {
    return this.getStringAttribute('bi_directional_az');
  }
  public set biDirectionalAz(value: string) {
    this._biDirectionalAz = value;
  }
  public resetBiDirectionalAz() {
    this._biDirectionalAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biDirectionalAzInput() {
    return this._biDirectionalAz;
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

  // byoip_id - computed: false, optional: true, required: false
  private _byoipId?: number; 
  public get byoipId() {
    return this.getNumberAttribute('byoip_id');
  }
  public set byoipId(value: number) {
    this._byoipId = value;
  }
  public resetByoipId() {
    this._byoipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byoipIdInput() {
    return this._byoipId;
  }

  // connector_id - computed: false, optional: false, required: true
  private _connectorId?: number; 
  public get connectorId() {
    return this.getNumberAttribute('connector_id');
  }
  public set connectorId(value: number) {
    this._connectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // fqdn_prefix - computed: false, optional: false, required: true
  private _fqdnPrefix?: string; 
  public get fqdnPrefix() {
    return this.getStringAttribute('fqdn_prefix');
  }
  public set fqdnPrefix(value: string) {
    this._fqdnPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnPrefixInput() {
    return this._fqdnPrefix;
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
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

  // ilb_credential_id - computed: false, optional: true, required: false
  private _ilbCredentialId?: string; 
  public get ilbCredentialId() {
    return this.getStringAttribute('ilb_credential_id');
  }
  public set ilbCredentialId(value: string) {
    this._ilbCredentialId = value;
  }
  public resetIlbCredentialId() {
    this._ilbCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ilbCredentialIdInput() {
    return this._ilbCredentialId;
  }

  // inbound_connector_id - computed: false, optional: true, required: false
  private _inboundConnectorId?: string; 
  public get inboundConnectorId() {
    return this.getStringAttribute('inbound_connector_id');
  }
  public set inboundConnectorId(value: string) {
    this._inboundConnectorId = value;
  }
  public resetInboundConnectorId() {
    this._inboundConnectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundConnectorIdInput() {
    return this._inboundConnectorId;
  }

  // inbound_connector_type - computed: false, optional: true, required: false
  private _inboundConnectorType?: string; 
  public get inboundConnectorType() {
    return this.getStringAttribute('inbound_connector_type');
  }
  public set inboundConnectorType(value: string) {
    this._inboundConnectorType = value;
  }
  public resetInboundConnectorType() {
    this._inboundConnectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundConnectorTypeInput() {
    return this._inboundConnectorType;
  }

  // internet_protocol - computed: false, optional: true, required: false
  private _internetProtocol?: string; 
  public get internetProtocol() {
    return this.getStringAttribute('internet_protocol');
  }
  public set internetProtocol(value: string) {
    this._internetProtocol = value;
  }
  public resetInternetProtocol() {
    this._internetProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetProtocolInput() {
    return this._internetProtocol;
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

  // public_ips - computed: false, optional: true, required: false
  private _publicIps?: string[]; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[]) {
    this._publicIps = value;
  }
  public resetPublicIps() {
    this._publicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps;
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

  // source_nat_ip_pool - computed: false, optional: true, required: false
  private _sourceNatIpPool = new InternetApplicationSourceNatIpPoolList(this, "source_nat_ip_pool", true);
  public get sourceNatIpPool() {
    return this._sourceNatIpPool;
  }
  public putSourceNatIpPool(value: InternetApplicationSourceNatIpPool[] | cdktf.IResolvable) {
    this._sourceNatIpPool.internalValue = value;
  }
  public resetSourceNatIpPool() {
    this._sourceNatIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatIpPoolInput() {
    return this._sourceNatIpPool.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new InternetApplicationTargetList(this, "target", true);
  public get target() {
    return this._target;
  }
  public putTarget(value: InternetApplicationTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bi_directional_az: cdktf.stringToTerraform(this._biDirectionalAz),
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      byoip_id: cdktf.numberToTerraform(this._byoipId),
      connector_id: cdktf.numberToTerraform(this._connectorId),
      connector_type: cdktf.stringToTerraform(this._connectorType),
      fqdn_prefix: cdktf.stringToTerraform(this._fqdnPrefix),
      id: cdktf.stringToTerraform(this._id),
      ilb_credential_id: cdktf.stringToTerraform(this._ilbCredentialId),
      inbound_connector_id: cdktf.stringToTerraform(this._inboundConnectorId),
      inbound_connector_type: cdktf.stringToTerraform(this._inboundConnectorType),
      internet_protocol: cdktf.stringToTerraform(this._internetProtocol),
      name: cdktf.stringToTerraform(this._name),
      public_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicIps),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      size: cdktf.stringToTerraform(this._size),
      source_nat_ip_pool: cdktf.listMapper(internetApplicationSourceNatIpPoolToTerraform, true)(this._sourceNatIpPool.internalValue),
      target: cdktf.listMapper(internetApplicationTargetToTerraform, true)(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bi_directional_az: {
        value: cdktf.stringToHclTerraform(this._biDirectionalAz),
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
      byoip_id: {
        value: cdktf.numberToHclTerraform(this._byoipId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connector_id: {
        value: cdktf.numberToHclTerraform(this._connectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connector_type: {
        value: cdktf.stringToHclTerraform(this._connectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn_prefix: {
        value: cdktf.stringToHclTerraform(this._fqdnPrefix),
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
      ilb_credential_id: {
        value: cdktf.stringToHclTerraform(this._ilbCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_connector_id: {
        value: cdktf.stringToHclTerraform(this._inboundConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_connector_type: {
        value: cdktf.stringToHclTerraform(this._inboundConnectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_protocol: {
        value: cdktf.stringToHclTerraform(this._internetProtocol),
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
      public_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      source_nat_ip_pool: {
        value: cdktf.listMapperHcl(internetApplicationSourceNatIpPoolToHclTerraform, true)(this._sourceNatIpPool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InternetApplicationSourceNatIpPoolList",
      },
      target: {
        value: cdktf.listMapperHcl(internetApplicationTargetToHclTerraform, true)(this._target.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InternetApplicationTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
