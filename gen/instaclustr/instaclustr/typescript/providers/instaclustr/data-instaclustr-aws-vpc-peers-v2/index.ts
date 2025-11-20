// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrAwsVpcPeersV2Config extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the Instaclustr Account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#account_id DataInstaclustrAwsVpcPeersV2#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#id DataInstaclustrAwsVpcPeersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#filter DataInstaclustrAwsVpcPeersV2#filter}
  */
  readonly filter?: DataInstaclustrAwsVpcPeersV2Filter[] | cdktf.IResolvable;
  /**
  * peering_requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#peering_requests DataInstaclustrAwsVpcPeersV2#peering_requests}
  */
  readonly peeringRequests?: DataInstaclustrAwsVpcPeersV2PeeringRequests[] | cdktf.IResolvable;
}
export interface DataInstaclustrAwsVpcPeersV2Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#name DataInstaclustrAwsVpcPeersV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#values DataInstaclustrAwsVpcPeersV2#values}
  */
  readonly values: string[];
}

export function dataInstaclustrAwsVpcPeersV2FilterToTerraform(struct?: DataInstaclustrAwsVpcPeersV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataInstaclustrAwsVpcPeersV2FilterToHclTerraform(struct?: DataInstaclustrAwsVpcPeersV2Filter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrAwsVpcPeersV2FilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrAwsVpcPeersV2Filter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrAwsVpcPeersV2Filter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataInstaclustrAwsVpcPeersV2FilterList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAwsVpcPeersV2Filter[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAwsVpcPeersV2FilterOutputReference {
    return new DataInstaclustrAwsVpcPeersV2FilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataInstaclustrAwsVpcPeersV2PeeringRequests {
  /**
  * ID of the Cluster Data Centre
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#cdc_id DataInstaclustrAwsVpcPeersV2#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * ID of the current data centre VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#data_centre_vpc_id DataInstaclustrAwsVpcPeersV2#data_centre_vpc_id}
  */
  readonly dataCentreVpcId?: string;
  /**
  * ID of the VPC peering connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#id DataInstaclustrAwsVpcPeersV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the VPC peering connection is managed by Instaclustr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#is_managed_by_instaclustr DataInstaclustrAwsVpcPeersV2#is_managed_by_instaclustr}
  */
  readonly isManagedByInstaclustr?: boolean | cdktf.IResolvable;
  /**
  * The AWS account ID of the owner of the accepter VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#peer_aws_account_id DataInstaclustrAwsVpcPeersV2#peer_aws_account_id}
  */
  readonly peerAwsAccountId?: string;
  /**
  * Region code for the accepter VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#peer_region DataInstaclustrAwsVpcPeersV2#peer_region}
  */
  readonly peerRegion?: string;
  /**
  * The subnets for the peering VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#peer_subnets DataInstaclustrAwsVpcPeersV2#peer_subnets}
  */
  readonly peerSubnets?: string[];
  /**
  * ID of the VPC with which the peering connection is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#peer_vpc_id DataInstaclustrAwsVpcPeersV2#peer_vpc_id}
  */
  readonly peerVpcId?: string;
}

export function dataInstaclustrAwsVpcPeersV2PeeringRequestsToTerraform(struct?: DataInstaclustrAwsVpcPeersV2PeeringRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    data_centre_vpc_id: cdktf.stringToTerraform(struct!.dataCentreVpcId),
    id: cdktf.stringToTerraform(struct!.id),
    is_managed_by_instaclustr: cdktf.booleanToTerraform(struct!.isManagedByInstaclustr),
    peer_aws_account_id: cdktf.stringToTerraform(struct!.peerAwsAccountId),
    peer_region: cdktf.stringToTerraform(struct!.peerRegion),
    peer_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.peerSubnets),
    peer_vpc_id: cdktf.stringToTerraform(struct!.peerVpcId),
  }
}


export function dataInstaclustrAwsVpcPeersV2PeeringRequestsToHclTerraform(struct?: DataInstaclustrAwsVpcPeersV2PeeringRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.cdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_centre_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.dataCentreVpcId),
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
    is_managed_by_instaclustr: {
      value: cdktf.booleanToHclTerraform(struct!.isManagedByInstaclustr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peer_aws_account_id: {
      value: cdktf.stringToHclTerraform(struct!.peerAwsAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_region: {
      value: cdktf.stringToHclTerraform(struct!.peerRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.peerSubnets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    peer_vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.peerVpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrAwsVpcPeersV2PeeringRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataInstaclustrAwsVpcPeersV2PeeringRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._dataCentreVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCentreVpcId = this._dataCentreVpcId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isManagedByInstaclustr !== undefined) {
      hasAnyValues = true;
      internalValueResult.isManagedByInstaclustr = this._isManagedByInstaclustr;
    }
    if (this._peerAwsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAwsAccountId = this._peerAwsAccountId;
    }
    if (this._peerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerRegion = this._peerRegion;
    }
    if (this._peerSubnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSubnets = this._peerSubnets;
    }
    if (this._peerVpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerVpcId = this._peerVpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrAwsVpcPeersV2PeeringRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdcId = undefined;
      this._dataCentreVpcId = undefined;
      this._id = undefined;
      this._isManagedByInstaclustr = undefined;
      this._peerAwsAccountId = undefined;
      this._peerRegion = undefined;
      this._peerSubnets = undefined;
      this._peerVpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdcId = value.cdcId;
      this._dataCentreVpcId = value.dataCentreVpcId;
      this._id = value.id;
      this._isManagedByInstaclustr = value.isManagedByInstaclustr;
      this._peerAwsAccountId = value.peerAwsAccountId;
      this._peerRegion = value.peerRegion;
      this._peerSubnets = value.peerSubnets;
      this._peerVpcId = value.peerVpcId;
    }
  }

  // cdc_id - computed: true, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // data_centre_vpc_id - computed: true, optional: true, required: false
  private _dataCentreVpcId?: string; 
  public get dataCentreVpcId() {
    return this.getStringAttribute('data_centre_vpc_id');
  }
  public set dataCentreVpcId(value: string) {
    this._dataCentreVpcId = value;
  }
  public resetDataCentreVpcId() {
    this._dataCentreVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCentreVpcIdInput() {
    return this._dataCentreVpcId;
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

  // is_managed_by_instaclustr - computed: true, optional: true, required: false
  private _isManagedByInstaclustr?: boolean | cdktf.IResolvable; 
  public get isManagedByInstaclustr() {
    return this.getBooleanAttribute('is_managed_by_instaclustr');
  }
  public set isManagedByInstaclustr(value: boolean | cdktf.IResolvable) {
    this._isManagedByInstaclustr = value;
  }
  public resetIsManagedByInstaclustr() {
    this._isManagedByInstaclustr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagedByInstaclustrInput() {
    return this._isManagedByInstaclustr;
  }

  // peer_aws_account_id - computed: true, optional: true, required: false
  private _peerAwsAccountId?: string; 
  public get peerAwsAccountId() {
    return this.getStringAttribute('peer_aws_account_id');
  }
  public set peerAwsAccountId(value: string) {
    this._peerAwsAccountId = value;
  }
  public resetPeerAwsAccountId() {
    this._peerAwsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAwsAccountIdInput() {
    return this._peerAwsAccountId;
  }

  // peer_region - computed: true, optional: true, required: false
  private _peerRegion?: string; 
  public get peerRegion() {
    return this.getStringAttribute('peer_region');
  }
  public set peerRegion(value: string) {
    this._peerRegion = value;
  }
  public resetPeerRegion() {
    this._peerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionInput() {
    return this._peerRegion;
  }

  // peer_subnets - computed: true, optional: true, required: false
  private _peerSubnets?: string[]; 
  public get peerSubnets() {
    return this.getListAttribute('peer_subnets');
  }
  public set peerSubnets(value: string[]) {
    this._peerSubnets = value;
  }
  public resetPeerSubnets() {
    this._peerSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSubnetsInput() {
    return this._peerSubnets;
  }

  // peer_vpc_id - computed: true, optional: true, required: false
  private _peerVpcId?: string; 
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }
  public set peerVpcId(value: string) {
    this._peerVpcId = value;
  }
  public resetPeerVpcId() {
    this._peerVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcIdInput() {
    return this._peerVpcId;
  }
}

export class DataInstaclustrAwsVpcPeersV2PeeringRequestsList extends cdktf.ComplexList {
  public internalValue? : DataInstaclustrAwsVpcPeersV2PeeringRequests[] | cdktf.IResolvable

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
  public get(index: number): DataInstaclustrAwsVpcPeersV2PeeringRequestsOutputReference {
    return new DataInstaclustrAwsVpcPeersV2PeeringRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2 instaclustr_aws_vpc_peers_v2}
*/
export class DataInstaclustrAwsVpcPeersV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_aws_vpc_peers_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrAwsVpcPeersV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrAwsVpcPeersV2 to import
  * @param importFromId The id of the existing DataInstaclustrAwsVpcPeersV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrAwsVpcPeersV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_aws_vpc_peers_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.29/docs/data-sources/aws_vpc_peers_v2 instaclustr_aws_vpc_peers_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrAwsVpcPeersV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrAwsVpcPeersV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_aws_vpc_peers_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.29',
        providerVersionConstraint: '2.1.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._filter.internalValue = config.filter;
    this._peeringRequests.internalValue = config.peeringRequests;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataInstaclustrAwsVpcPeersV2FilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataInstaclustrAwsVpcPeersV2Filter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // peering_requests - computed: false, optional: true, required: false
  private _peeringRequests = new DataInstaclustrAwsVpcPeersV2PeeringRequestsList(this, "peering_requests", false);
  public get peeringRequests() {
    return this._peeringRequests;
  }
  public putPeeringRequests(value: DataInstaclustrAwsVpcPeersV2PeeringRequests[] | cdktf.IResolvable) {
    this._peeringRequests.internalValue = value;
  }
  public resetPeeringRequests() {
    this._peeringRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringRequestsInput() {
    return this._peeringRequests.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataInstaclustrAwsVpcPeersV2FilterToTerraform, true)(this._filter.internalValue),
      peering_requests: cdktf.listMapper(dataInstaclustrAwsVpcPeersV2PeeringRequestsToTerraform, true)(this._peeringRequests.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      filter: {
        value: cdktf.listMapperHcl(dataInstaclustrAwsVpcPeersV2FilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInstaclustrAwsVpcPeersV2FilterList",
      },
      peering_requests: {
        value: cdktf.listMapperHcl(dataInstaclustrAwsVpcPeersV2PeeringRequestsToHclTerraform, true)(this._peeringRequests.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrAwsVpcPeersV2PeeringRequestsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
