// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use reference bandwidth method to assign OSPF cost (The reference bandwidth in terms of Mbits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#auto_cost_reference_bandwidth RouterOspf#auto_cost_reference_bandwidth}
  */
  readonly autoCostReferenceBandwidth?: number;
  /**
  * Enable BFD on all interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#bfd_all_interfaces RouterOspf#bfd_all_interfaces}
  */
  readonly bfdAllInterfaces?: number;
  /**
  * Set metric of redistributed routes (Default metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#default_metric RouterOspf#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * external LSA equivalance check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#extern_lsa_equivalence_check RouterOspf#extern_lsa_equivalence_check}
  */
  readonly externLsaEquivalenceCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#id RouterOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number allowed to process DD concurrently (Number of DD process)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#max_concurrent_dd RouterOspf#max_concurrent_dd}
  */
  readonly maxConcurrentDd?: number;
  /**
  * Maximum number of non-backbone areas (OSPF area limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#maximum_area RouterOspf#maximum_area}
  */
  readonly maximumArea?: number;
  /**
  * OSPF process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#process_id RouterOspf#process_id}
  */
  readonly processId: number;
  /**
  * Compatible with RFC 1583
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#rfc1583_compatible RouterOspf#rfc1583_compatible}
  */
  readonly rfc1583Compatible?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#user_tag RouterOspf#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#uuid RouterOspf#uuid}
  */
  readonly uuid?: string;
  /**
  * area_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#area_list RouterOspf#area_list}
  */
  readonly areaList?: RouterOspfAreaListStruct[] | cdktf.IResolvable;
  /**
  * default_information block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#default_information RouterOspf#default_information}
  */
  readonly defaultInformation?: RouterOspfDefaultInformation;
  /**
  * distance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#distance RouterOspf#distance}
  */
  readonly distance?: RouterOspfDistance;
  /**
  * distribute_internal_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#distribute_internal_list RouterOspf#distribute_internal_list}
  */
  readonly distributeInternalList?: RouterOspfDistributeInternalListStruct[] | cdktf.IResolvable;
  /**
  * distribute_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#distribute_lists RouterOspf#distribute_lists}
  */
  readonly distributeLists?: RouterOspfDistributeLists[] | cdktf.IResolvable;
  /**
  * ha_standby_extra_cost block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ha_standby_extra_cost RouterOspf#ha_standby_extra_cost}
  */
  readonly haStandbyExtraCost?: RouterOspfHaStandbyExtraCost[] | cdktf.IResolvable;
  /**
  * host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#host_list RouterOspf#host_list}
  */
  readonly hostList?: RouterOspfHostListStruct[] | cdktf.IResolvable;
  /**
  * log_adjacency_changes_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#log_adjacency_changes_cfg RouterOspf#log_adjacency_changes_cfg}
  */
  readonly logAdjacencyChangesCfg?: RouterOspfLogAdjacencyChangesCfg;
  /**
  * neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#neighbor_list RouterOspf#neighbor_list}
  */
  readonly neighborList?: RouterOspfNeighborListStruct[] | cdktf.IResolvable;
  /**
  * network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#network_list RouterOspf#network_list}
  */
  readonly networkList?: RouterOspfNetworkListStruct[] | cdktf.IResolvable;
  /**
  * ospf_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ospf_1 RouterOspf#ospf_1}
  */
  readonly ospf1?: RouterOspfOspf1;
  /**
  * overflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#overflow RouterOspf#overflow}
  */
  readonly overflow?: RouterOspfOverflow;
  /**
  * passive_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#passive_interface RouterOspf#passive_interface}
  */
  readonly passiveInterface?: RouterOspfPassiveInterface;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#redistribute RouterOspf#redistribute}
  */
  readonly redistribute?: RouterOspfRedistribute;
  /**
  * router_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#router_id RouterOspf#router_id}
  */
  readonly routerId?: RouterOspfRouterId;
  /**
  * summary_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#summary_address_list RouterOspf#summary_address_list}
  */
  readonly summaryAddressList?: RouterOspfSummaryAddressListStruct[] | cdktf.IResolvable;
  /**
  * timers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#timers RouterOspf#timers}
  */
  readonly timers?: RouterOspfTimers;
}
export interface RouterOspfAreaListAuthCfg {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#authentication RouterOspf#authentication}
  */
  readonly authentication?: number;
  /**
  * Use message-digest authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#message_digest RouterOspf#message_digest}
  */
  readonly messageDigest?: number;
}

export function routerOspfAreaListAuthCfgToTerraform(struct?: RouterOspfAreaListAuthCfgOutputReference | RouterOspfAreaListAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    message_digest: cdktf.numberToTerraform(struct!.messageDigest),
  }
}


export function routerOspfAreaListAuthCfgToHclTerraform(struct?: RouterOspfAreaListAuthCfgOutputReference | RouterOspfAreaListAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.numberToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_digest: {
      value: cdktf.numberToHclTerraform(struct!.messageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaListAuthCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfAreaListAuthCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._messageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigest = this._messageDigest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaListAuthCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication = undefined;
      this._messageDigest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication = value.authentication;
      this._messageDigest = value.messageDigest;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: number; 
  public get authentication() {
    return this.getNumberAttribute('authentication');
  }
  public set authentication(value: number) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // message_digest - computed: false, optional: true, required: false
  private _messageDigest?: number; 
  public get messageDigest() {
    return this.getNumberAttribute('message_digest');
  }
  public set messageDigest(value: number) {
    this._messageDigest = value;
  }
  public resetMessageDigest() {
    this._messageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestInput() {
    return this._messageDigest;
  }
}
export interface RouterOspfAreaListFilterLists {
  /**
  * 'in': Filter networks sent to this area; 'out': Filter networks sent from this area;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#acl_direction RouterOspf#acl_direction}
  */
  readonly aclDirection?: string;
  /**
  * Filter networks by access-list (Name of an access-list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#acl_name RouterOspf#acl_name}
  */
  readonly aclName?: string;
  /**
  * Filter networks between OSPF areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#filter_list RouterOspf#filter_list}
  */
  readonly filterList?: number;
  /**
  * 'in': Filter networks sent to this area; 'out': Filter networks sent from this area;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#plist_direction RouterOspf#plist_direction}
  */
  readonly plistDirection?: string;
  /**
  * Filter networks by prefix-list (Name of an IP prefix-list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#plist_name RouterOspf#plist_name}
  */
  readonly plistName?: string;
}

export function routerOspfAreaListFilterListsToTerraform(struct?: RouterOspfAreaListFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_direction: cdktf.stringToTerraform(struct!.aclDirection),
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    filter_list: cdktf.numberToTerraform(struct!.filterList),
    plist_direction: cdktf.stringToTerraform(struct!.plistDirection),
    plist_name: cdktf.stringToTerraform(struct!.plistName),
  }
}


export function routerOspfAreaListFilterListsToHclTerraform(struct?: RouterOspfAreaListFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_direction: {
      value: cdktf.stringToHclTerraform(struct!.aclDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list: {
      value: cdktf.numberToHclTerraform(struct!.filterList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    plist_direction: {
      value: cdktf.stringToHclTerraform(struct!.plistDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plist_name: {
      value: cdktf.stringToHclTerraform(struct!.plistName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaListFilterListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaListFilterLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclDirection = this._aclDirection;
    }
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._filterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList;
    }
    if (this._plistDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.plistDirection = this._plistDirection;
    }
    if (this._plistName !== undefined) {
      hasAnyValues = true;
      internalValueResult.plistName = this._plistName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaListFilterLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclDirection = undefined;
      this._aclName = undefined;
      this._filterList = undefined;
      this._plistDirection = undefined;
      this._plistName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclDirection = value.aclDirection;
      this._aclName = value.aclName;
      this._filterList = value.filterList;
      this._plistDirection = value.plistDirection;
      this._plistName = value.plistName;
    }
  }

  // acl_direction - computed: false, optional: true, required: false
  private _aclDirection?: string; 
  public get aclDirection() {
    return this.getStringAttribute('acl_direction');
  }
  public set aclDirection(value: string) {
    this._aclDirection = value;
  }
  public resetAclDirection() {
    this._aclDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclDirectionInput() {
    return this._aclDirection;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList?: number; 
  public get filterList() {
    return this.getNumberAttribute('filter_list');
  }
  public set filterList(value: number) {
    this._filterList = value;
  }
  public resetFilterList() {
    this._filterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList;
  }

  // plist_direction - computed: false, optional: true, required: false
  private _plistDirection?: string; 
  public get plistDirection() {
    return this.getStringAttribute('plist_direction');
  }
  public set plistDirection(value: string) {
    this._plistDirection = value;
  }
  public resetPlistDirection() {
    this._plistDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plistDirectionInput() {
    return this._plistDirection;
  }

  // plist_name - computed: false, optional: true, required: false
  private _plistName?: string; 
  public get plistName() {
    return this.getStringAttribute('plist_name');
  }
  public set plistName(value: string) {
    this._plistName = value;
  }
  public resetPlistName() {
    this._plistName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plistNameInput() {
    return this._plistName;
  }
}

export class RouterOspfAreaListFilterListsList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaListFilterLists[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaListFilterListsOutputReference {
    return new RouterOspfAreaListFilterListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfAreaListNssaCfg {
  /**
  * Originate Type 7 default into NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#default_information_originate RouterOspf#default_information_originate}
  */
  readonly defaultInformationOriginate?: number;
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric RouterOspf#metric}
  */
  readonly metric?: number;
  /**
  * OSPF metric type (OSPF metric type for default routes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric_type RouterOspf#metric_type}
  */
  readonly metricType?: number;
  /**
  * No redistribution into this NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#no_redistribution RouterOspf#no_redistribution}
  */
  readonly noRedistribution?: number;
  /**
  * Do not send summary LSA into NSSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#no_summary RouterOspf#no_summary}
  */
  readonly noSummary?: number;
  /**
  * Specify a NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#nssa RouterOspf#nssa}
  */
  readonly nssa?: number;
  /**
  * 'always': Translate always; 'candidate': Candidate for translator (default); 'never': Do not translate;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#translator_role RouterOspf#translator_role}
  */
  readonly translatorRole?: string;
}

export function routerOspfAreaListNssaCfgToTerraform(struct?: RouterOspfAreaListNssaCfgOutputReference | RouterOspfAreaListNssaCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_information_originate: cdktf.numberToTerraform(struct!.defaultInformationOriginate),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.numberToTerraform(struct!.metricType),
    no_redistribution: cdktf.numberToTerraform(struct!.noRedistribution),
    no_summary: cdktf.numberToTerraform(struct!.noSummary),
    nssa: cdktf.numberToTerraform(struct!.nssa),
    translator_role: cdktf.stringToTerraform(struct!.translatorRole),
  }
}


export function routerOspfAreaListNssaCfgToHclTerraform(struct?: RouterOspfAreaListNssaCfgOutputReference | RouterOspfAreaListNssaCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_information_originate: {
      value: cdktf.numberToHclTerraform(struct!.defaultInformationOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.numberToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_redistribution: {
      value: cdktf.numberToHclTerraform(struct!.noRedistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_summary: {
      value: cdktf.numberToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nssa: {
      value: cdktf.numberToHclTerraform(struct!.nssa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    translator_role: {
      value: cdktf.stringToHclTerraform(struct!.translatorRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaListNssaCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfAreaListNssaCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultInformationOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationOriginate = this._defaultInformationOriginate;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._noRedistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRedistribution = this._noRedistribution;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    if (this._nssa !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssa = this._nssa;
    }
    if (this._translatorRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatorRole = this._translatorRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaListNssaCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultInformationOriginate = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._noRedistribution = undefined;
      this._noSummary = undefined;
      this._nssa = undefined;
      this._translatorRole = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultInformationOriginate = value.defaultInformationOriginate;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._noRedistribution = value.noRedistribution;
      this._noSummary = value.noSummary;
      this._nssa = value.nssa;
      this._translatorRole = value.translatorRole;
    }
  }

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate?: number; 
  public get defaultInformationOriginate() {
    return this.getNumberAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: number) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: number; 
  public get metricType() {
    return this.getNumberAttribute('metric_type');
  }
  public set metricType(value: number) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // no_redistribution - computed: false, optional: true, required: false
  private _noRedistribution?: number; 
  public get noRedistribution() {
    return this.getNumberAttribute('no_redistribution');
  }
  public set noRedistribution(value: number) {
    this._noRedistribution = value;
  }
  public resetNoRedistribution() {
    this._noRedistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRedistributionInput() {
    return this._noRedistribution;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: number; 
  public get noSummary() {
    return this.getNumberAttribute('no_summary');
  }
  public set noSummary(value: number) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }

  // nssa - computed: false, optional: true, required: false
  private _nssa?: number; 
  public get nssa() {
    return this.getNumberAttribute('nssa');
  }
  public set nssa(value: number) {
    this._nssa = value;
  }
  public resetNssa() {
    this._nssa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaInput() {
    return this._nssa;
  }

  // translator_role - computed: false, optional: true, required: false
  private _translatorRole?: string; 
  public get translatorRole() {
    return this.getStringAttribute('translator_role');
  }
  public set translatorRole(value: string) {
    this._translatorRole = value;
  }
  public resetTranslatorRole() {
    this._translatorRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatorRoleInput() {
    return this._translatorRole;
  }
}
export interface RouterOspfAreaListRangeListStruct {
  /**
  * Area range for IPv4 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#area_range_prefix RouterOspf#area_range_prefix}
  */
  readonly areaRangePrefix?: string;
  /**
  * 'advertise': Advertise this range (default); 'not-advertise': DoNotAdvertise this range;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#option RouterOspf#option}
  */
  readonly option?: string;
}

export function routerOspfAreaListRangeListStructToTerraform(struct?: RouterOspfAreaListRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_range_prefix: cdktf.stringToTerraform(struct!.areaRangePrefix),
    option: cdktf.stringToTerraform(struct!.option),
  }
}


export function routerOspfAreaListRangeListStructToHclTerraform(struct?: RouterOspfAreaListRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_range_prefix: {
      value: cdktf.stringToHclTerraform(struct!.areaRangePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaListRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaListRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaRangePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaRangePrefix = this._areaRangePrefix;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaListRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaRangePrefix = undefined;
      this._option = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaRangePrefix = value.areaRangePrefix;
      this._option = value.option;
    }
  }

  // area_range_prefix - computed: false, optional: true, required: false
  private _areaRangePrefix?: string; 
  public get areaRangePrefix() {
    return this.getStringAttribute('area_range_prefix');
  }
  public set areaRangePrefix(value: string) {
    this._areaRangePrefix = value;
  }
  public resetAreaRangePrefix() {
    this._areaRangePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaRangePrefixInput() {
    return this._areaRangePrefix;
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }
}

export class RouterOspfAreaListRangeListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaListRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaListRangeListStructOutputReference {
    return new RouterOspfAreaListRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfAreaListStubCfg {
  /**
  * Do not inject inter-area routes into area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#no_summary RouterOspf#no_summary}
  */
  readonly noSummary?: number;
  /**
  * Configure OSPF area as stub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#stub RouterOspf#stub}
  */
  readonly stub?: number;
}

export function routerOspfAreaListStubCfgToTerraform(struct?: RouterOspfAreaListStubCfgOutputReference | RouterOspfAreaListStubCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_summary: cdktf.numberToTerraform(struct!.noSummary),
    stub: cdktf.numberToTerraform(struct!.stub),
  }
}


export function routerOspfAreaListStubCfgToHclTerraform(struct?: RouterOspfAreaListStubCfgOutputReference | RouterOspfAreaListStubCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_summary: {
      value: cdktf.numberToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stub: {
      value: cdktf.numberToHclTerraform(struct!.stub),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaListStubCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfAreaListStubCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    if (this._stub !== undefined) {
      hasAnyValues = true;
      internalValueResult.stub = this._stub;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaListStubCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSummary = undefined;
      this._stub = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSummary = value.noSummary;
      this._stub = value.stub;
    }
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: number; 
  public get noSummary() {
    return this.getNumberAttribute('no_summary');
  }
  public set noSummary(value: number) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }

  // stub - computed: false, optional: true, required: false
  private _stub?: number; 
  public get stub() {
    return this.getNumberAttribute('stub');
  }
  public set stub(value: number) {
    this._stub = value;
  }
  public resetStub() {
    this._stub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubInput() {
    return this._stub;
  }
}
export interface RouterOspfAreaListVirtualLinkListStruct {
  /**
  * Set authentication key (Authentication key (8 chars))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#authentication_key RouterOspf#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#bfd RouterOspf#bfd}
  */
  readonly bfd?: number;
  /**
  * Dead router detection time (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#dead_interval RouterOspf#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Hello packet interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#hello_interval RouterOspf#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Use MD5 algorithm (Authentication key (16 chars))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#md5 RouterOspf#md5}
  */
  readonly md5?: string;
  /**
  * Set message digest key (Key ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#message_digest_key RouterOspf#message_digest_key}
  */
  readonly messageDigestKey?: number;
  /**
  * LSA retransmit interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#retransmit_interval RouterOspf#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * LSA transmission delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#transmit_delay RouterOspf#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use null authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#virtual_link_auth_type RouterOspf#virtual_link_auth_type}
  */
  readonly virtualLinkAuthType?: string;
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#virtual_link_authentication RouterOspf#virtual_link_authentication}
  */
  readonly virtualLinkAuthentication?: number;
  /**
  * ID (IP addr) associated with virtual link neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#virtual_link_ip_addr RouterOspf#virtual_link_ip_addr}
  */
  readonly virtualLinkIpAddr?: string;
}

export function routerOspfAreaListVirtualLinkListStructToTerraform(struct?: RouterOspfAreaListVirtualLinkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    bfd: cdktf.numberToTerraform(struct!.bfd),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    md5: cdktf.stringToTerraform(struct!.md5),
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    virtual_link_auth_type: cdktf.stringToTerraform(struct!.virtualLinkAuthType),
    virtual_link_authentication: cdktf.numberToTerraform(struct!.virtualLinkAuthentication),
    virtual_link_ip_addr: cdktf.stringToTerraform(struct!.virtualLinkIpAddr),
  }
}


export function routerOspfAreaListVirtualLinkListStructToHclTerraform(struct?: RouterOspfAreaListVirtualLinkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
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
    message_digest_key: {
      value: cdktf.numberToHclTerraform(struct!.messageDigestKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_link_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.virtualLinkAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_link_authentication: {
      value: cdktf.numberToHclTerraform(struct!.virtualLinkAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_link_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.virtualLinkIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaListVirtualLinkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaListVirtualLinkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._md5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5;
    }
    if (this._messageDigestKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestKey = this._messageDigestKey;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._virtualLinkAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLinkAuthType = this._virtualLinkAuthType;
    }
    if (this._virtualLinkAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLinkAuthentication = this._virtualLinkAuthentication;
    }
    if (this._virtualLinkIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLinkIpAddr = this._virtualLinkIpAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaListVirtualLinkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
      this._bfd = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._md5 = undefined;
      this._messageDigestKey = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._virtualLinkAuthType = undefined;
      this._virtualLinkAuthentication = undefined;
      this._virtualLinkIpAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
      this._bfd = value.bfd;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._md5 = value.md5;
      this._messageDigestKey = value.messageDigestKey;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._virtualLinkAuthType = value.virtualLinkAuthType;
      this._virtualLinkAuthentication = value.virtualLinkAuthentication;
      this._virtualLinkIpAddr = value.virtualLinkIpAddr;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
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

  // message_digest_key - computed: false, optional: true, required: false
  private _messageDigestKey?: number; 
  public get messageDigestKey() {
    return this.getNumberAttribute('message_digest_key');
  }
  public set messageDigestKey(value: number) {
    this._messageDigestKey = value;
  }
  public resetMessageDigestKey() {
    this._messageDigestKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestKeyInput() {
    return this._messageDigestKey;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
  }

  // virtual_link_auth_type - computed: false, optional: true, required: false
  private _virtualLinkAuthType?: string; 
  public get virtualLinkAuthType() {
    return this.getStringAttribute('virtual_link_auth_type');
  }
  public set virtualLinkAuthType(value: string) {
    this._virtualLinkAuthType = value;
  }
  public resetVirtualLinkAuthType() {
    this._virtualLinkAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkAuthTypeInput() {
    return this._virtualLinkAuthType;
  }

  // virtual_link_authentication - computed: false, optional: true, required: false
  private _virtualLinkAuthentication?: number; 
  public get virtualLinkAuthentication() {
    return this.getNumberAttribute('virtual_link_authentication');
  }
  public set virtualLinkAuthentication(value: number) {
    this._virtualLinkAuthentication = value;
  }
  public resetVirtualLinkAuthentication() {
    this._virtualLinkAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkAuthenticationInput() {
    return this._virtualLinkAuthentication;
  }

  // virtual_link_ip_addr - computed: false, optional: true, required: false
  private _virtualLinkIpAddr?: string; 
  public get virtualLinkIpAddr() {
    return this.getStringAttribute('virtual_link_ip_addr');
  }
  public set virtualLinkIpAddr(value: string) {
    this._virtualLinkIpAddr = value;
  }
  public resetVirtualLinkIpAddr() {
    this._virtualLinkIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkIpAddrInput() {
    return this._virtualLinkIpAddr;
  }
}

export class RouterOspfAreaListVirtualLinkListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaListVirtualLinkListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaListVirtualLinkListStructOutputReference {
    return new RouterOspfAreaListVirtualLinkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfAreaListStruct {
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#area_ipv4 RouterOspf#area_ipv4}
  */
  readonly areaIpv4: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#area_num RouterOspf#area_num}
  */
  readonly areaNum: number;
  /**
  * Set the summary-default cost of a NSSA or stub area (Stub's advertised default summary cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#default_cost RouterOspf#default_cost}
  */
  readonly defaultCost?: number;
  /**
  * 'default': Set default shortcutting behavior; 'disable': Disable shortcutting through the area; 'enable': Enable shortcutting through the area;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#shortcut RouterOspf#shortcut}
  */
  readonly shortcut?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#uuid RouterOspf#uuid}
  */
  readonly uuid?: string;
  /**
  * auth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#auth_cfg RouterOspf#auth_cfg}
  */
  readonly authCfg?: RouterOspfAreaListAuthCfg;
  /**
  * filter_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#filter_lists RouterOspf#filter_lists}
  */
  readonly filterLists?: RouterOspfAreaListFilterLists[] | cdktf.IResolvable;
  /**
  * nssa_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#nssa_cfg RouterOspf#nssa_cfg}
  */
  readonly nssaCfg?: RouterOspfAreaListNssaCfg;
  /**
  * range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#range_list RouterOspf#range_list}
  */
  readonly rangeList?: RouterOspfAreaListRangeListStruct[] | cdktf.IResolvable;
  /**
  * stub_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#stub_cfg RouterOspf#stub_cfg}
  */
  readonly stubCfg?: RouterOspfAreaListStubCfg;
  /**
  * virtual_link_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#virtual_link_list RouterOspf#virtual_link_list}
  */
  readonly virtualLinkList?: RouterOspfAreaListVirtualLinkListStruct[] | cdktf.IResolvable;
}

export function routerOspfAreaListStructToTerraform(struct?: RouterOspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_ipv4: cdktf.stringToTerraform(struct!.areaIpv4),
    area_num: cdktf.numberToTerraform(struct!.areaNum),
    default_cost: cdktf.numberToTerraform(struct!.defaultCost),
    shortcut: cdktf.stringToTerraform(struct!.shortcut),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    auth_cfg: routerOspfAreaListAuthCfgToTerraform(struct!.authCfg),
    filter_lists: cdktf.listMapper(routerOspfAreaListFilterListsToTerraform, true)(struct!.filterLists),
    nssa_cfg: routerOspfAreaListNssaCfgToTerraform(struct!.nssaCfg),
    range_list: cdktf.listMapper(routerOspfAreaListRangeListStructToTerraform, true)(struct!.rangeList),
    stub_cfg: routerOspfAreaListStubCfgToTerraform(struct!.stubCfg),
    virtual_link_list: cdktf.listMapper(routerOspfAreaListVirtualLinkListStructToTerraform, true)(struct!.virtualLinkList),
  }
}


export function routerOspfAreaListStructToHclTerraform(struct?: RouterOspfAreaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.areaIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_num: {
      value: cdktf.numberToHclTerraform(struct!.areaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_cost: {
      value: cdktf.numberToHclTerraform(struct!.defaultCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shortcut: {
      value: cdktf.stringToHclTerraform(struct!.shortcut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_cfg: {
      value: routerOspfAreaListAuthCfgToHclTerraform(struct!.authCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfAreaListAuthCfgList",
    },
    filter_lists: {
      value: cdktf.listMapperHcl(routerOspfAreaListFilterListsToHclTerraform, true)(struct!.filterLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfAreaListFilterListsList",
    },
    nssa_cfg: {
      value: routerOspfAreaListNssaCfgToHclTerraform(struct!.nssaCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfAreaListNssaCfgList",
    },
    range_list: {
      value: cdktf.listMapperHcl(routerOspfAreaListRangeListStructToHclTerraform, true)(struct!.rangeList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfAreaListRangeListStructList",
    },
    stub_cfg: {
      value: routerOspfAreaListStubCfgToHclTerraform(struct!.stubCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfAreaListStubCfgList",
    },
    virtual_link_list: {
      value: cdktf.listMapperHcl(routerOspfAreaListVirtualLinkListStructToHclTerraform, true)(struct!.virtualLinkList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfAreaListVirtualLinkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfAreaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIpv4 = this._areaIpv4;
    }
    if (this._areaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaNum = this._areaNum;
    }
    if (this._defaultCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCost = this._defaultCost;
    }
    if (this._shortcut !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortcut = this._shortcut;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCfg = this._authCfg?.internalValue;
    }
    if (this._filterLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterLists = this._filterLists?.internalValue;
    }
    if (this._nssaCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaCfg = this._nssaCfg?.internalValue;
    }
    if (this._rangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeList = this._rangeList?.internalValue;
    }
    if (this._stubCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stubCfg = this._stubCfg?.internalValue;
    }
    if (this._virtualLinkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLinkList = this._virtualLinkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfAreaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaIpv4 = undefined;
      this._areaNum = undefined;
      this._defaultCost = undefined;
      this._shortcut = undefined;
      this._uuid = undefined;
      this._authCfg.internalValue = undefined;
      this._filterLists.internalValue = undefined;
      this._nssaCfg.internalValue = undefined;
      this._rangeList.internalValue = undefined;
      this._stubCfg.internalValue = undefined;
      this._virtualLinkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaIpv4 = value.areaIpv4;
      this._areaNum = value.areaNum;
      this._defaultCost = value.defaultCost;
      this._shortcut = value.shortcut;
      this._uuid = value.uuid;
      this._authCfg.internalValue = value.authCfg;
      this._filterLists.internalValue = value.filterLists;
      this._nssaCfg.internalValue = value.nssaCfg;
      this._rangeList.internalValue = value.rangeList;
      this._stubCfg.internalValue = value.stubCfg;
      this._virtualLinkList.internalValue = value.virtualLinkList;
    }
  }

  // area_ipv4 - computed: false, optional: false, required: true
  private _areaIpv4?: string; 
  public get areaIpv4() {
    return this.getStringAttribute('area_ipv4');
  }
  public set areaIpv4(value: string) {
    this._areaIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIpv4Input() {
    return this._areaIpv4;
  }

  // area_num - computed: false, optional: false, required: true
  private _areaNum?: number; 
  public get areaNum() {
    return this.getNumberAttribute('area_num');
  }
  public set areaNum(value: number) {
    this._areaNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaNumInput() {
    return this._areaNum;
  }

  // default_cost - computed: false, optional: true, required: false
  private _defaultCost?: number; 
  public get defaultCost() {
    return this.getNumberAttribute('default_cost');
  }
  public set defaultCost(value: number) {
    this._defaultCost = value;
  }
  public resetDefaultCost() {
    this._defaultCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCostInput() {
    return this._defaultCost;
  }

  // shortcut - computed: false, optional: true, required: false
  private _shortcut?: string; 
  public get shortcut() {
    return this.getStringAttribute('shortcut');
  }
  public set shortcut(value: string) {
    this._shortcut = value;
  }
  public resetShortcut() {
    this._shortcut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortcutInput() {
    return this._shortcut;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // auth_cfg - computed: false, optional: true, required: false
  private _authCfg = new RouterOspfAreaListAuthCfgOutputReference(this, "auth_cfg");
  public get authCfg() {
    return this._authCfg;
  }
  public putAuthCfg(value: RouterOspfAreaListAuthCfg) {
    this._authCfg.internalValue = value;
  }
  public resetAuthCfg() {
    this._authCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCfgInput() {
    return this._authCfg.internalValue;
  }

  // filter_lists - computed: false, optional: true, required: false
  private _filterLists = new RouterOspfAreaListFilterListsList(this, "filter_lists", false);
  public get filterLists() {
    return this._filterLists;
  }
  public putFilterLists(value: RouterOspfAreaListFilterLists[] | cdktf.IResolvable) {
    this._filterLists.internalValue = value;
  }
  public resetFilterLists() {
    this._filterLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListsInput() {
    return this._filterLists.internalValue;
  }

  // nssa_cfg - computed: false, optional: true, required: false
  private _nssaCfg = new RouterOspfAreaListNssaCfgOutputReference(this, "nssa_cfg");
  public get nssaCfg() {
    return this._nssaCfg;
  }
  public putNssaCfg(value: RouterOspfAreaListNssaCfg) {
    this._nssaCfg.internalValue = value;
  }
  public resetNssaCfg() {
    this._nssaCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaCfgInput() {
    return this._nssaCfg.internalValue;
  }

  // range_list - computed: false, optional: true, required: false
  private _rangeList = new RouterOspfAreaListRangeListStructList(this, "range_list", false);
  public get rangeList() {
    return this._rangeList;
  }
  public putRangeList(value: RouterOspfAreaListRangeListStruct[] | cdktf.IResolvable) {
    this._rangeList.internalValue = value;
  }
  public resetRangeList() {
    this._rangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeListInput() {
    return this._rangeList.internalValue;
  }

  // stub_cfg - computed: false, optional: true, required: false
  private _stubCfg = new RouterOspfAreaListStubCfgOutputReference(this, "stub_cfg");
  public get stubCfg() {
    return this._stubCfg;
  }
  public putStubCfg(value: RouterOspfAreaListStubCfg) {
    this._stubCfg.internalValue = value;
  }
  public resetStubCfg() {
    this._stubCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubCfgInput() {
    return this._stubCfg.internalValue;
  }

  // virtual_link_list - computed: false, optional: true, required: false
  private _virtualLinkList = new RouterOspfAreaListVirtualLinkListStructList(this, "virtual_link_list", false);
  public get virtualLinkList() {
    return this._virtualLinkList;
  }
  public putVirtualLinkList(value: RouterOspfAreaListVirtualLinkListStruct[] | cdktf.IResolvable) {
    this._virtualLinkList.internalValue = value;
  }
  public resetVirtualLinkList() {
    this._virtualLinkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkListInput() {
    return this._virtualLinkList.internalValue;
  }
}

export class RouterOspfAreaListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaListStructOutputReference {
    return new RouterOspfAreaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfDefaultInformation {
  /**
  * Always advertise default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#always RouterOspf#always}
  */
  readonly always?: number;
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric RouterOspf#metric}
  */
  readonly metric?: number;
  /**
  * OSPF metric type for default routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric_type RouterOspf#metric_type}
  */
  readonly metricType?: number;
  /**
  * Distribute a default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#originate RouterOspf#originate}
  */
  readonly originate?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#route_map RouterOspf#route_map}
  */
  readonly routeMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#uuid RouterOspf#uuid}
  */
  readonly uuid?: string;
}

export function routerOspfDefaultInformationToTerraform(struct?: RouterOspfDefaultInformationOutputReference | RouterOspfDefaultInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.numberToTerraform(struct!.always),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.numberToTerraform(struct!.metricType),
    originate: cdktf.numberToTerraform(struct!.originate),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerOspfDefaultInformationToHclTerraform(struct?: RouterOspfDefaultInformationOutputReference | RouterOspfDefaultInformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.numberToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.numberToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    originate: {
      value: cdktf.numberToHclTerraform(struct!.originate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfDefaultInformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfDefaultInformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._originate !== undefined) {
      hasAnyValues = true;
      internalValueResult.originate = this._originate;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfDefaultInformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._always = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._originate = undefined;
      this._routeMap = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._always = value.always;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._originate = value.originate;
      this._routeMap = value.routeMap;
      this._uuid = value.uuid;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: number; 
  public get always() {
    return this.getNumberAttribute('always');
  }
  public set always(value: number) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: number; 
  public get metricType() {
    return this.getNumberAttribute('metric_type');
  }
  public set metricType(value: number) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // originate - computed: false, optional: true, required: false
  private _originate?: number; 
  public get originate() {
    return this.getNumberAttribute('originate');
  }
  public set originate(value: number) {
    this._originate = value;
  }
  public resetOriginate() {
    this._originate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originateInput() {
    return this._originate;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface RouterOspfDistanceDistanceOspf {
  /**
  * External routes (Distance for external routes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#distance_external RouterOspf#distance_external}
  */
  readonly distanceExternal?: number;
  /**
  * Inter-area routes (Distance for inter-area routes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#distance_inter_area RouterOspf#distance_inter_area}
  */
  readonly distanceInterArea?: number;
  /**
  * Intra-area routes (Distance for intra-area routes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#distance_intra_area RouterOspf#distance_intra_area}
  */
  readonly distanceIntraArea?: number;
}

export function routerOspfDistanceDistanceOspfToTerraform(struct?: RouterOspfDistanceDistanceOspfOutputReference | RouterOspfDistanceDistanceOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance_external: cdktf.numberToTerraform(struct!.distanceExternal),
    distance_inter_area: cdktf.numberToTerraform(struct!.distanceInterArea),
    distance_intra_area: cdktf.numberToTerraform(struct!.distanceIntraArea),
  }
}


export function routerOspfDistanceDistanceOspfToHclTerraform(struct?: RouterOspfDistanceDistanceOspfOutputReference | RouterOspfDistanceDistanceOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance_external: {
      value: cdktf.numberToHclTerraform(struct!.distanceExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_inter_area: {
      value: cdktf.numberToHclTerraform(struct!.distanceInterArea),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_intra_area: {
      value: cdktf.numberToHclTerraform(struct!.distanceIntraArea),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfDistanceDistanceOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfDistanceDistanceOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distanceExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceExternal = this._distanceExternal;
    }
    if (this._distanceInterArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceInterArea = this._distanceInterArea;
    }
    if (this._distanceIntraArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceIntraArea = this._distanceIntraArea;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfDistanceDistanceOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distanceExternal = undefined;
      this._distanceInterArea = undefined;
      this._distanceIntraArea = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distanceExternal = value.distanceExternal;
      this._distanceInterArea = value.distanceInterArea;
      this._distanceIntraArea = value.distanceIntraArea;
    }
  }

  // distance_external - computed: false, optional: true, required: false
  private _distanceExternal?: number; 
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }
  public set distanceExternal(value: number) {
    this._distanceExternal = value;
  }
  public resetDistanceExternal() {
    this._distanceExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceExternalInput() {
    return this._distanceExternal;
  }

  // distance_inter_area - computed: false, optional: true, required: false
  private _distanceInterArea?: number; 
  public get distanceInterArea() {
    return this.getNumberAttribute('distance_inter_area');
  }
  public set distanceInterArea(value: number) {
    this._distanceInterArea = value;
  }
  public resetDistanceInterArea() {
    this._distanceInterArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInterAreaInput() {
    return this._distanceInterArea;
  }

  // distance_intra_area - computed: false, optional: true, required: false
  private _distanceIntraArea?: number; 
  public get distanceIntraArea() {
    return this.getNumberAttribute('distance_intra_area');
  }
  public set distanceIntraArea(value: number) {
    this._distanceIntraArea = value;
  }
  public resetDistanceIntraArea() {
    this._distanceIntraArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceIntraAreaInput() {
    return this._distanceIntraArea;
  }
}
export interface RouterOspfDistance {
  /**
  * OSPF Administrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#distance_value RouterOspf#distance_value}
  */
  readonly distanceValue?: number;
  /**
  * distance_ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#distance_ospf RouterOspf#distance_ospf}
  */
  readonly distanceOspf?: RouterOspfDistanceDistanceOspf;
}

export function routerOspfDistanceToTerraform(struct?: RouterOspfDistanceOutputReference | RouterOspfDistance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance_value: cdktf.numberToTerraform(struct!.distanceValue),
    distance_ospf: routerOspfDistanceDistanceOspfToTerraform(struct!.distanceOspf),
  }
}


export function routerOspfDistanceToHclTerraform(struct?: RouterOspfDistanceOutputReference | RouterOspfDistance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance_value: {
      value: cdktf.numberToHclTerraform(struct!.distanceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_ospf: {
      value: routerOspfDistanceDistanceOspfToHclTerraform(struct!.distanceOspf),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfDistanceDistanceOspfList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfDistanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfDistance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distanceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceValue = this._distanceValue;
    }
    if (this._distanceOspf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceOspf = this._distanceOspf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfDistance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distanceValue = undefined;
      this._distanceOspf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distanceValue = value.distanceValue;
      this._distanceOspf.internalValue = value.distanceOspf;
    }
  }

  // distance_value - computed: false, optional: true, required: false
  private _distanceValue?: number; 
  public get distanceValue() {
    return this.getNumberAttribute('distance_value');
  }
  public set distanceValue(value: number) {
    this._distanceValue = value;
  }
  public resetDistanceValue() {
    this._distanceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceValueInput() {
    return this._distanceValue;
  }

  // distance_ospf - computed: false, optional: true, required: false
  private _distanceOspf = new RouterOspfDistanceDistanceOspfOutputReference(this, "distance_ospf");
  public get distanceOspf() {
    return this._distanceOspf;
  }
  public putDistanceOspf(value: RouterOspfDistanceDistanceOspf) {
    this._distanceOspf.internalValue = value;
  }
  public resetDistanceOspf() {
    this._distanceOspf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceOspfInput() {
    return this._distanceOspf.internalValue;
  }
}
export interface RouterOspfDistributeInternalListStruct {
  /**
  * OSPF area ID as a IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#di_area_ipv4 RouterOspf#di_area_ipv4}
  */
  readonly diAreaIpv4?: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#di_area_num RouterOspf#di_area_num}
  */
  readonly diAreaNum?: number;
  /**
  * Cost of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#di_cost RouterOspf#di_cost}
  */
  readonly diCost?: number;
  /**
  * 'lw4o6': LW4O6 Prefix; 'floating-ip': Floating IP; 'ip-nat': IP NAT; 'ip-nat-list': IP NAT list; 'static-nat': Static NAT; 'vip': Only not flagged Virtual IP (VIP); 'vip-only-flagged': Selected Virtual IP (VIP);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#di_type RouterOspf#di_type}
  */
  readonly diType?: string;
}

export function routerOspfDistributeInternalListStructToTerraform(struct?: RouterOspfDistributeInternalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    di_area_ipv4: cdktf.stringToTerraform(struct!.diAreaIpv4),
    di_area_num: cdktf.numberToTerraform(struct!.diAreaNum),
    di_cost: cdktf.numberToTerraform(struct!.diCost),
    di_type: cdktf.stringToTerraform(struct!.diType),
  }
}


export function routerOspfDistributeInternalListStructToHclTerraform(struct?: RouterOspfDistributeInternalListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    di_area_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.diAreaIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    di_area_num: {
      value: cdktf.numberToHclTerraform(struct!.diAreaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    di_cost: {
      value: cdktf.numberToHclTerraform(struct!.diCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    di_type: {
      value: cdktf.stringToHclTerraform(struct!.diType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfDistributeInternalListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfDistributeInternalListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diAreaIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.diAreaIpv4 = this._diAreaIpv4;
    }
    if (this._diAreaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.diAreaNum = this._diAreaNum;
    }
    if (this._diCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.diCost = this._diCost;
    }
    if (this._diType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diType = this._diType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfDistributeInternalListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diAreaIpv4 = undefined;
      this._diAreaNum = undefined;
      this._diCost = undefined;
      this._diType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diAreaIpv4 = value.diAreaIpv4;
      this._diAreaNum = value.diAreaNum;
      this._diCost = value.diCost;
      this._diType = value.diType;
    }
  }

  // di_area_ipv4 - computed: false, optional: true, required: false
  private _diAreaIpv4?: string; 
  public get diAreaIpv4() {
    return this.getStringAttribute('di_area_ipv4');
  }
  public set diAreaIpv4(value: string) {
    this._diAreaIpv4 = value;
  }
  public resetDiAreaIpv4() {
    this._diAreaIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diAreaIpv4Input() {
    return this._diAreaIpv4;
  }

  // di_area_num - computed: false, optional: true, required: false
  private _diAreaNum?: number; 
  public get diAreaNum() {
    return this.getNumberAttribute('di_area_num');
  }
  public set diAreaNum(value: number) {
    this._diAreaNum = value;
  }
  public resetDiAreaNum() {
    this._diAreaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diAreaNumInput() {
    return this._diAreaNum;
  }

  // di_cost - computed: false, optional: true, required: false
  private _diCost?: number; 
  public get diCost() {
    return this.getNumberAttribute('di_cost');
  }
  public set diCost(value: number) {
    this._diCost = value;
  }
  public resetDiCost() {
    this._diCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diCostInput() {
    return this._diCost;
  }

  // di_type - computed: false, optional: true, required: false
  private _diType?: string; 
  public get diType() {
    return this.getStringAttribute('di_type');
  }
  public set diType(value: string) {
    this._diType = value;
  }
  public resetDiType() {
    this._diType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diTypeInput() {
    return this._diType;
  }
}

export class RouterOspfDistributeInternalListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfDistributeInternalListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfDistributeInternalListStructOutputReference {
    return new RouterOspfDistributeInternalListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfDistributeLists {
  /**
  * 'in': Filter incoming routing updates; 'out': Filter outgoing routing updates;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#direction RouterOspf#direction}
  */
  readonly direction?: string;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#option RouterOspf#option}
  */
  readonly option?: string;
  /**
  * OSPF process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ospf_id RouterOspf#ospf_id}
  */
  readonly ospfId?: number;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'lw4o6': LW4O6 Prefix; 'ip-nat': IP NAT; 'ip-nat-list': IP NAT list; 'static-nat': Static NAT; 'isis': ISO IS-IS; 'ospf': Open Shortest Path First (OSPF); 'rip': Routing Information Protocol (RIP); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#protocol RouterOspf#protocol}
  */
  readonly protocol?: string;
  /**
  * Access-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#value RouterOspf#value}
  */
  readonly value?: string;
}

export function routerOspfDistributeListsToTerraform(struct?: RouterOspfDistributeLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    option: cdktf.stringToTerraform(struct!.option),
    ospf_id: cdktf.numberToTerraform(struct!.ospfId),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routerOspfDistributeListsToHclTerraform(struct?: RouterOspfDistributeLists | cdktf.IResolvable): any {
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
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf_id: {
      value: cdktf.numberToHclTerraform(struct!.ospfId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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

export class RouterOspfDistributeListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfDistributeLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._ospfId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfId = this._ospfId;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfDistributeLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._option = undefined;
      this._ospfId = undefined;
      this._protocol = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._option = value.option;
      this._ospfId = value.ospfId;
      this._protocol = value.protocol;
      this._value = value.value;
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

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // ospf_id - computed: false, optional: true, required: false
  private _ospfId?: number; 
  public get ospfId() {
    return this.getNumberAttribute('ospf_id');
  }
  public set ospfId(value: number) {
    this._ospfId = value;
  }
  public resetOspfId() {
    this._ospfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfIdInput() {
    return this._ospfId;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class RouterOspfDistributeListsList extends cdktf.ComplexList {
  public internalValue? : RouterOspfDistributeLists[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfDistributeListsOutputReference {
    return new RouterOspfDistributeListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfHaStandbyExtraCost {
  /**
  * The extra cost value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#extra_cost RouterOspf#extra_cost}
  */
  readonly extraCost?: number;
  /**
  * Group (Group ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#group RouterOspf#group}
  */
  readonly group?: number;
}

export function routerOspfHaStandbyExtraCostToTerraform(struct?: RouterOspfHaStandbyExtraCost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_cost: cdktf.numberToTerraform(struct!.extraCost),
    group: cdktf.numberToTerraform(struct!.group),
  }
}


export function routerOspfHaStandbyExtraCostToHclTerraform(struct?: RouterOspfHaStandbyExtraCost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra_cost: {
      value: cdktf.numberToHclTerraform(struct!.extraCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group: {
      value: cdktf.numberToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfHaStandbyExtraCostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfHaStandbyExtraCost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraCost = this._extraCost;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfHaStandbyExtraCost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extraCost = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extraCost = value.extraCost;
      this._group = value.group;
    }
  }

  // extra_cost - computed: false, optional: true, required: false
  private _extraCost?: number; 
  public get extraCost() {
    return this.getNumberAttribute('extra_cost');
  }
  public set extraCost(value: number) {
    this._extraCost = value;
  }
  public resetExtraCost() {
    this._extraCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraCostInput() {
    return this._extraCost;
  }

  // group - computed: false, optional: true, required: false
  private _group?: number; 
  public get group() {
    return this.getNumberAttribute('group');
  }
  public set group(value: number) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}

export class RouterOspfHaStandbyExtraCostList extends cdktf.ComplexList {
  public internalValue? : RouterOspfHaStandbyExtraCost[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfHaStandbyExtraCostOutputReference {
    return new RouterOspfHaStandbyExtraCostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfHostListAreaCfg {
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#area_ipv4 RouterOspf#area_ipv4}
  */
  readonly areaIpv4?: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#area_num RouterOspf#area_num}
  */
  readonly areaNum?: number;
  /**
  * Cost of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#cost RouterOspf#cost}
  */
  readonly cost?: number;
}

export function routerOspfHostListAreaCfgToTerraform(struct?: RouterOspfHostListAreaCfgOutputReference | RouterOspfHostListAreaCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_ipv4: cdktf.stringToTerraform(struct!.areaIpv4),
    area_num: cdktf.numberToTerraform(struct!.areaNum),
    cost: cdktf.numberToTerraform(struct!.cost),
  }
}


export function routerOspfHostListAreaCfgToHclTerraform(struct?: RouterOspfHostListAreaCfgOutputReference | RouterOspfHostListAreaCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.areaIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_num: {
      value: cdktf.numberToHclTerraform(struct!.areaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfHostListAreaCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfHostListAreaCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaIpv4 = this._areaIpv4;
    }
    if (this._areaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaNum = this._areaNum;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfHostListAreaCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areaIpv4 = undefined;
      this._areaNum = undefined;
      this._cost = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areaIpv4 = value.areaIpv4;
      this._areaNum = value.areaNum;
      this._cost = value.cost;
    }
  }

  // area_ipv4 - computed: false, optional: true, required: false
  private _areaIpv4?: string; 
  public get areaIpv4() {
    return this.getStringAttribute('area_ipv4');
  }
  public set areaIpv4(value: string) {
    this._areaIpv4 = value;
  }
  public resetAreaIpv4() {
    this._areaIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIpv4Input() {
    return this._areaIpv4;
  }

  // area_num - computed: false, optional: true, required: false
  private _areaNum?: number; 
  public get areaNum() {
    return this.getNumberAttribute('area_num');
  }
  public set areaNum(value: number) {
    this._areaNum = value;
  }
  public resetAreaNum() {
    this._areaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaNumInput() {
    return this._areaNum;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }
}
export interface RouterOspfHostListStruct {
  /**
  * Host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#host_address RouterOspf#host_address}
  */
  readonly hostAddress?: string;
  /**
  * area_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#area_cfg RouterOspf#area_cfg}
  */
  readonly areaCfg?: RouterOspfHostListAreaCfg;
}

export function routerOspfHostListStructToTerraform(struct?: RouterOspfHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_address: cdktf.stringToTerraform(struct!.hostAddress),
    area_cfg: routerOspfHostListAreaCfgToTerraform(struct!.areaCfg),
  }
}


export function routerOspfHostListStructToHclTerraform(struct?: RouterOspfHostListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_address: {
      value: cdktf.stringToHclTerraform(struct!.hostAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_cfg: {
      value: routerOspfHostListAreaCfgToHclTerraform(struct!.areaCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfHostListAreaCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfHostListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfHostListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAddress = this._hostAddress;
    }
    if (this._areaCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaCfg = this._areaCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfHostListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostAddress = undefined;
      this._areaCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostAddress = value.hostAddress;
      this._areaCfg.internalValue = value.areaCfg;
    }
  }

  // host_address - computed: false, optional: true, required: false
  private _hostAddress?: string; 
  public get hostAddress() {
    return this.getStringAttribute('host_address');
  }
  public set hostAddress(value: string) {
    this._hostAddress = value;
  }
  public resetHostAddress() {
    this._hostAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAddressInput() {
    return this._hostAddress;
  }

  // area_cfg - computed: false, optional: true, required: false
  private _areaCfg = new RouterOspfHostListAreaCfgOutputReference(this, "area_cfg");
  public get areaCfg() {
    return this._areaCfg;
  }
  public putAreaCfg(value: RouterOspfHostListAreaCfg) {
    this._areaCfg.internalValue = value;
  }
  public resetAreaCfg() {
    this._areaCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaCfgInput() {
    return this._areaCfg.internalValue;
  }
}

export class RouterOspfHostListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfHostListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfHostListStructOutputReference {
    return new RouterOspfHostListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfLogAdjacencyChangesCfg {
  /**
  * 'detail': Log changes in adjacency state; 'disable': Disable logging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#state RouterOspf#state}
  */
  readonly state?: string;
}

export function routerOspfLogAdjacencyChangesCfgToTerraform(struct?: RouterOspfLogAdjacencyChangesCfgOutputReference | RouterOspfLogAdjacencyChangesCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function routerOspfLogAdjacencyChangesCfgToHclTerraform(struct?: RouterOspfLogAdjacencyChangesCfgOutputReference | RouterOspfLogAdjacencyChangesCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfLogAdjacencyChangesCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfLogAdjacencyChangesCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfLogAdjacencyChangesCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface RouterOspfNeighborListStruct {
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#address RouterOspf#address}
  */
  readonly address?: string;
  /**
  * OSPF cost for point-to-multipoint neighbor (Metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#cost RouterOspf#cost}
  */
  readonly cost?: number;
  /**
  * OSPF dead-router polling interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#poll_interval RouterOspf#poll_interval}
  */
  readonly pollInterval?: number;
  /**
  * OSPF priority of non-broadcast neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#priority RouterOspf#priority}
  */
  readonly priority?: number;
}

export function routerOspfNeighborListStructToTerraform(struct?: RouterOspfNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    cost: cdktf.numberToTerraform(struct!.cost),
    poll_interval: cdktf.numberToTerraform(struct!.pollInterval),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function routerOspfNeighborListStructToHclTerraform(struct?: RouterOspfNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poll_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfNeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfNeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._pollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollInterval = this._pollInterval;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfNeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._cost = undefined;
      this._pollInterval = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._cost = value.cost;
      this._pollInterval = value.pollInterval;
      this._priority = value.priority;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // poll_interval - computed: false, optional: true, required: false
  private _pollInterval?: number; 
  public get pollInterval() {
    return this.getNumberAttribute('poll_interval');
  }
  public set pollInterval(value: number) {
    this._pollInterval = value;
  }
  public resetPollInterval() {
    this._pollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class RouterOspfNeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfNeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfNeighborListStructOutputReference {
    return new RouterOspfNeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfNetworkListNetworkArea {
  /**
  * Instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#instance_value RouterOspf#instance_value}
  */
  readonly instanceValue?: number;
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#network_area_ipv4 RouterOspf#network_area_ipv4}
  */
  readonly networkAreaIpv4?: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#network_area_num RouterOspf#network_area_num}
  */
  readonly networkAreaNum?: number;
}

export function routerOspfNetworkListNetworkAreaToTerraform(struct?: RouterOspfNetworkListNetworkAreaOutputReference | RouterOspfNetworkListNetworkArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_value: cdktf.numberToTerraform(struct!.instanceValue),
    network_area_ipv4: cdktf.stringToTerraform(struct!.networkAreaIpv4),
    network_area_num: cdktf.numberToTerraform(struct!.networkAreaNum),
  }
}


export function routerOspfNetworkListNetworkAreaToHclTerraform(struct?: RouterOspfNetworkListNetworkAreaOutputReference | RouterOspfNetworkListNetworkArea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_value: {
      value: cdktf.numberToHclTerraform(struct!.instanceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_area_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.networkAreaIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_area_num: {
      value: cdktf.numberToHclTerraform(struct!.networkAreaNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfNetworkListNetworkAreaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfNetworkListNetworkArea | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceValue = this._instanceValue;
    }
    if (this._networkAreaIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAreaIpv4 = this._networkAreaIpv4;
    }
    if (this._networkAreaNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAreaNum = this._networkAreaNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfNetworkListNetworkArea | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceValue = undefined;
      this._networkAreaIpv4 = undefined;
      this._networkAreaNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceValue = value.instanceValue;
      this._networkAreaIpv4 = value.networkAreaIpv4;
      this._networkAreaNum = value.networkAreaNum;
    }
  }

  // instance_value - computed: false, optional: true, required: false
  private _instanceValue?: number; 
  public get instanceValue() {
    return this.getNumberAttribute('instance_value');
  }
  public set instanceValue(value: number) {
    this._instanceValue = value;
  }
  public resetInstanceValue() {
    this._instanceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceValueInput() {
    return this._instanceValue;
  }

  // network_area_ipv4 - computed: false, optional: true, required: false
  private _networkAreaIpv4?: string; 
  public get networkAreaIpv4() {
    return this.getStringAttribute('network_area_ipv4');
  }
  public set networkAreaIpv4(value: string) {
    this._networkAreaIpv4 = value;
  }
  public resetNetworkAreaIpv4() {
    this._networkAreaIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAreaIpv4Input() {
    return this._networkAreaIpv4;
  }

  // network_area_num - computed: false, optional: true, required: false
  private _networkAreaNum?: number; 
  public get networkAreaNum() {
    return this.getNumberAttribute('network_area_num');
  }
  public set networkAreaNum(value: number) {
    this._networkAreaNum = value;
  }
  public resetNetworkAreaNum() {
    this._networkAreaNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAreaNumInput() {
    return this._networkAreaNum;
  }
}
export interface RouterOspfNetworkListStruct {
  /**
  * Network number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#network_ipv4 RouterOspf#network_ipv4}
  */
  readonly networkIpv4?: string;
  /**
  * OSPF network prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#network_ipv4_cidr RouterOspf#network_ipv4_cidr}
  */
  readonly networkIpv4Cidr?: string;
  /**
  * OSPF wild card bits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#network_ipv4_mask RouterOspf#network_ipv4_mask}
  */
  readonly networkIpv4Mask?: string;
  /**
  * network_area block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#network_area RouterOspf#network_area}
  */
  readonly networkArea?: RouterOspfNetworkListNetworkArea;
}

export function routerOspfNetworkListStructToTerraform(struct?: RouterOspfNetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_ipv4: cdktf.stringToTerraform(struct!.networkIpv4),
    network_ipv4_cidr: cdktf.stringToTerraform(struct!.networkIpv4Cidr),
    network_ipv4_mask: cdktf.stringToTerraform(struct!.networkIpv4Mask),
    network_area: routerOspfNetworkListNetworkAreaToTerraform(struct!.networkArea),
  }
}


export function routerOspfNetworkListStructToHclTerraform(struct?: RouterOspfNetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.networkIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ipv4_cidr: {
      value: cdktf.stringToHclTerraform(struct!.networkIpv4Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.networkIpv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_area: {
      value: routerOspfNetworkListNetworkAreaToHclTerraform(struct!.networkArea),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfNetworkListNetworkAreaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfNetworkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfNetworkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIpv4 = this._networkIpv4;
    }
    if (this._networkIpv4Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIpv4Cidr = this._networkIpv4Cidr;
    }
    if (this._networkIpv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIpv4Mask = this._networkIpv4Mask;
    }
    if (this._networkArea?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkArea = this._networkArea?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfNetworkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkIpv4 = undefined;
      this._networkIpv4Cidr = undefined;
      this._networkIpv4Mask = undefined;
      this._networkArea.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkIpv4 = value.networkIpv4;
      this._networkIpv4Cidr = value.networkIpv4Cidr;
      this._networkIpv4Mask = value.networkIpv4Mask;
      this._networkArea.internalValue = value.networkArea;
    }
  }

  // network_ipv4 - computed: false, optional: true, required: false
  private _networkIpv4?: string; 
  public get networkIpv4() {
    return this.getStringAttribute('network_ipv4');
  }
  public set networkIpv4(value: string) {
    this._networkIpv4 = value;
  }
  public resetNetworkIpv4() {
    this._networkIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIpv4Input() {
    return this._networkIpv4;
  }

  // network_ipv4_cidr - computed: false, optional: true, required: false
  private _networkIpv4Cidr?: string; 
  public get networkIpv4Cidr() {
    return this.getStringAttribute('network_ipv4_cidr');
  }
  public set networkIpv4Cidr(value: string) {
    this._networkIpv4Cidr = value;
  }
  public resetNetworkIpv4Cidr() {
    this._networkIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIpv4CidrInput() {
    return this._networkIpv4Cidr;
  }

  // network_ipv4_mask - computed: false, optional: true, required: false
  private _networkIpv4Mask?: string; 
  public get networkIpv4Mask() {
    return this.getStringAttribute('network_ipv4_mask');
  }
  public set networkIpv4Mask(value: string) {
    this._networkIpv4Mask = value;
  }
  public resetNetworkIpv4Mask() {
    this._networkIpv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIpv4MaskInput() {
    return this._networkIpv4Mask;
  }

  // network_area - computed: false, optional: true, required: false
  private _networkArea = new RouterOspfNetworkListNetworkAreaOutputReference(this, "network_area");
  public get networkArea() {
    return this._networkArea;
  }
  public putNetworkArea(value: RouterOspfNetworkListNetworkArea) {
    this._networkArea.internalValue = value;
  }
  public resetNetworkArea() {
    this._networkArea.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAreaInput() {
    return this._networkArea.internalValue;
  }
}

export class RouterOspfNetworkListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfNetworkListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfNetworkListStructOutputReference {
    return new RouterOspfNetworkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfOspf1AbrType {
  /**
  * 'cisco': Alternative ABR, Cisco implementation (RFC3509); 'ibm': Alternative ABR, IBM implementation (RFC3509); 'shortcut': Shortcut ABR; 'standard': Standard behavior (RFC2328);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#option RouterOspf#option}
  */
  readonly option?: string;
}

export function routerOspfOspf1AbrTypeToTerraform(struct?: RouterOspfOspf1AbrTypeOutputReference | RouterOspfOspf1AbrType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
  }
}


export function routerOspfOspf1AbrTypeToHclTerraform(struct?: RouterOspfOspf1AbrTypeOutputReference | RouterOspfOspf1AbrType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfOspf1AbrTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfOspf1AbrType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfOspf1AbrType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._option = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._option = value.option;
    }
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }
}
export interface RouterOspfOspf1 {
  /**
  * abr_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#abr_type RouterOspf#abr_type}
  */
  readonly abrType?: RouterOspfOspf1AbrType;
}

export function routerOspfOspf1ToTerraform(struct?: RouterOspfOspf1OutputReference | RouterOspfOspf1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr_type: routerOspfOspf1AbrTypeToTerraform(struct!.abrType),
  }
}


export function routerOspfOspf1ToHclTerraform(struct?: RouterOspfOspf1OutputReference | RouterOspfOspf1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr_type: {
      value: routerOspfOspf1AbrTypeToHclTerraform(struct!.abrType),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfOspf1AbrTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfOspf1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfOspf1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abrType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abrType = this._abrType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfOspf1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abrType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abrType.internalValue = value.abrType;
    }
  }

  // abr_type - computed: false, optional: true, required: false
  private _abrType = new RouterOspfOspf1AbrTypeOutputReference(this, "abr_type");
  public get abrType() {
    return this._abrType;
  }
  public putAbrType(value: RouterOspfOspf1AbrType) {
    this._abrType.internalValue = value;
  }
  public resetAbrType() {
    this._abrType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrTypeInput() {
    return this._abrType.internalValue;
  }
}
export interface RouterOspfOverflowDatabase {
  /**
  * Maximum number of LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#count1 RouterOspf#count1}
  */
  readonly count1?: number;
  /**
  * Maximum number of LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#db_external RouterOspf#db_external}
  */
  readonly dbExternal?: number;
  /**
  * 'hard': Hard limit: Instance will be shutdown if exceeded; 'soft': Soft limit: Warning will be given if exceeded;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#limit RouterOspf#limit}
  */
  readonly limit?: string;
  /**
  * Time to recover (0 not recover)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#recovery_time RouterOspf#recovery_time}
  */
  readonly recoveryTime?: number;
}

export function routerOspfOverflowDatabaseToTerraform(struct?: RouterOspfOverflowDatabaseOutputReference | RouterOspfOverflowDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count1: cdktf.numberToTerraform(struct!.count1),
    db_external: cdktf.numberToTerraform(struct!.dbExternal),
    limit: cdktf.stringToTerraform(struct!.limit),
    recovery_time: cdktf.numberToTerraform(struct!.recoveryTime),
  }
}


export function routerOspfOverflowDatabaseToHclTerraform(struct?: RouterOspfOverflowDatabaseOutputReference | RouterOspfOverflowDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count1: {
      value: cdktf.numberToHclTerraform(struct!.count1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_external: {
      value: cdktf.numberToHclTerraform(struct!.dbExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_time: {
      value: cdktf.numberToHclTerraform(struct!.recoveryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfOverflowDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfOverflowDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.count1 = this._count1;
    }
    if (this._dbExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbExternal = this._dbExternal;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._recoveryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryTime = this._recoveryTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfOverflowDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count1 = undefined;
      this._dbExternal = undefined;
      this._limit = undefined;
      this._recoveryTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count1 = value.count1;
      this._dbExternal = value.dbExternal;
      this._limit = value.limit;
      this._recoveryTime = value.recoveryTime;
    }
  }

  // count1 - computed: false, optional: true, required: false
  private _count1?: number; 
  public get count1() {
    return this.getNumberAttribute('count1');
  }
  public set count1(value: number) {
    this._count1 = value;
  }
  public resetCount1() {
    this._count1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get count1Input() {
    return this._count1;
  }

  // db_external - computed: false, optional: true, required: false
  private _dbExternal?: number; 
  public get dbExternal() {
    return this.getNumberAttribute('db_external');
  }
  public set dbExternal(value: number) {
    this._dbExternal = value;
  }
  public resetDbExternal() {
    this._dbExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbExternalInput() {
    return this._dbExternal;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // recovery_time - computed: false, optional: true, required: false
  private _recoveryTime?: number; 
  public get recoveryTime() {
    return this.getNumberAttribute('recovery_time');
  }
  public set recoveryTime(value: number) {
    this._recoveryTime = value;
  }
  public resetRecoveryTime() {
    this._recoveryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryTimeInput() {
    return this._recoveryTime;
  }
}
export interface RouterOspfOverflow {
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#database RouterOspf#database}
  */
  readonly database?: RouterOspfOverflowDatabase;
}

export function routerOspfOverflowToTerraform(struct?: RouterOspfOverflowOutputReference | RouterOspfOverflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: routerOspfOverflowDatabaseToTerraform(struct!.database),
  }
}


export function routerOspfOverflowToHclTerraform(struct?: RouterOspfOverflowOutputReference | RouterOspfOverflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: routerOspfOverflowDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfOverflowDatabaseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfOverflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfOverflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfOverflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database.internalValue = value.database;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database = new RouterOspfOverflowDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: RouterOspfOverflowDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }
}
export interface RouterOspfPassiveInterfaceEthCfg {
  /**
  * Address of Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#eth_address RouterOspf#eth_address}
  */
  readonly ethAddress?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ethernet RouterOspf#ethernet}
  */
  readonly ethernet?: number;
}

export function routerOspfPassiveInterfaceEthCfgToTerraform(struct?: RouterOspfPassiveInterfaceEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eth_address: cdktf.stringToTerraform(struct!.ethAddress),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
  }
}


export function routerOspfPassiveInterfaceEthCfgToHclTerraform(struct?: RouterOspfPassiveInterfaceEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eth_address: {
      value: cdktf.stringToHclTerraform(struct!.ethAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfPassiveInterfaceEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfPassiveInterfaceEthCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethAddress = this._ethAddress;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfPassiveInterfaceEthCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethAddress = undefined;
      this._ethernet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethAddress = value.ethAddress;
      this._ethernet = value.ethernet;
    }
  }

  // eth_address - computed: false, optional: true, required: false
  private _ethAddress?: string; 
  public get ethAddress() {
    return this.getStringAttribute('eth_address');
  }
  public set ethAddress(value: string) {
    this._ethAddress = value;
  }
  public resetEthAddress() {
    this._ethAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethAddressInput() {
    return this._ethAddress;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }
}

export class RouterOspfPassiveInterfaceEthCfgList extends cdktf.ComplexList {
  public internalValue? : RouterOspfPassiveInterfaceEthCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfPassiveInterfaceEthCfgOutputReference {
    return new RouterOspfPassiveInterfaceEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfPassiveInterfaceLifCfg {
  /**
  * Logical interface (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#lif RouterOspf#lif}
  */
  readonly lif?: string;
  /**
  * Address of Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#lif_address RouterOspf#lif_address}
  */
  readonly lifAddress?: string;
}

export function routerOspfPassiveInterfaceLifCfgToTerraform(struct?: RouterOspfPassiveInterfaceLifCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lif: cdktf.stringToTerraform(struct!.lif),
    lif_address: cdktf.stringToTerraform(struct!.lifAddress),
  }
}


export function routerOspfPassiveInterfaceLifCfgToHclTerraform(struct?: RouterOspfPassiveInterfaceLifCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lif_address: {
      value: cdktf.stringToHclTerraform(struct!.lifAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfPassiveInterfaceLifCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfPassiveInterfaceLifCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._lifAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifAddress = this._lifAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfPassiveInterfaceLifCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lif = undefined;
      this._lifAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lif = value.lif;
      this._lifAddress = value.lifAddress;
    }
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }

  // lif_address - computed: false, optional: true, required: false
  private _lifAddress?: string; 
  public get lifAddress() {
    return this.getStringAttribute('lif_address');
  }
  public set lifAddress(value: string) {
    this._lifAddress = value;
  }
  public resetLifAddress() {
    this._lifAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifAddressInput() {
    return this._lifAddress;
  }
}

export class RouterOspfPassiveInterfaceLifCfgList extends cdktf.ComplexList {
  public internalValue? : RouterOspfPassiveInterfaceLifCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfPassiveInterfaceLifCfgOutputReference {
    return new RouterOspfPassiveInterfaceLifCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfPassiveInterfaceLoopbackCfg {
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#loopback RouterOspf#loopback}
  */
  readonly loopback?: number;
  /**
  * Address of Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#loopback_address RouterOspf#loopback_address}
  */
  readonly loopbackAddress?: string;
}

export function routerOspfPassiveInterfaceLoopbackCfgToTerraform(struct?: RouterOspfPassiveInterfaceLoopbackCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loopback: cdktf.numberToTerraform(struct!.loopback),
    loopback_address: cdktf.stringToTerraform(struct!.loopbackAddress),
  }
}


export function routerOspfPassiveInterfaceLoopbackCfgToHclTerraform(struct?: RouterOspfPassiveInterfaceLoopbackCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loopback_address: {
      value: cdktf.stringToHclTerraform(struct!.loopbackAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfPassiveInterfaceLoopbackCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfPassiveInterfaceLoopbackCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._loopbackAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackAddress = this._loopbackAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfPassiveInterfaceLoopbackCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loopback = undefined;
      this._loopbackAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loopback = value.loopback;
      this._loopbackAddress = value.loopbackAddress;
    }
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: number; 
  public get loopback() {
    return this.getNumberAttribute('loopback');
  }
  public set loopback(value: number) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }

  // loopback_address - computed: false, optional: true, required: false
  private _loopbackAddress?: string; 
  public get loopbackAddress() {
    return this.getStringAttribute('loopback_address');
  }
  public set loopbackAddress(value: string) {
    this._loopbackAddress = value;
  }
  public resetLoopbackAddress() {
    this._loopbackAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackAddressInput() {
    return this._loopbackAddress;
  }
}

export class RouterOspfPassiveInterfaceLoopbackCfgList extends cdktf.ComplexList {
  public internalValue? : RouterOspfPassiveInterfaceLoopbackCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfPassiveInterfaceLoopbackCfgOutputReference {
    return new RouterOspfPassiveInterfaceLoopbackCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfPassiveInterfaceTrunkCfg {
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#trunk RouterOspf#trunk}
  */
  readonly trunk?: number;
  /**
  * Address of Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#trunk_address RouterOspf#trunk_address}
  */
  readonly trunkAddress?: string;
}

export function routerOspfPassiveInterfaceTrunkCfgToTerraform(struct?: RouterOspfPassiveInterfaceTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk: cdktf.numberToTerraform(struct!.trunk),
    trunk_address: cdktf.stringToTerraform(struct!.trunkAddress),
  }
}


export function routerOspfPassiveInterfaceTrunkCfgToHclTerraform(struct?: RouterOspfPassiveInterfaceTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk_address: {
      value: cdktf.stringToHclTerraform(struct!.trunkAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfPassiveInterfaceTrunkCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfPassiveInterfaceTrunkCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._trunkAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkAddress = this._trunkAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfPassiveInterfaceTrunkCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trunk = undefined;
      this._trunkAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trunk = value.trunk;
      this._trunkAddress = value.trunkAddress;
    }
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // trunk_address - computed: false, optional: true, required: false
  private _trunkAddress?: string; 
  public get trunkAddress() {
    return this.getStringAttribute('trunk_address');
  }
  public set trunkAddress(value: string) {
    this._trunkAddress = value;
  }
  public resetTrunkAddress() {
    this._trunkAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkAddressInput() {
    return this._trunkAddress;
  }
}

export class RouterOspfPassiveInterfaceTrunkCfgList extends cdktf.ComplexList {
  public internalValue? : RouterOspfPassiveInterfaceTrunkCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfPassiveInterfaceTrunkCfgOutputReference {
    return new RouterOspfPassiveInterfaceTrunkCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfPassiveInterfaceTunnelCfg {
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#tunnel RouterOspf#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Address of Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#tunnel_address RouterOspf#tunnel_address}
  */
  readonly tunnelAddress?: string;
}

export function routerOspfPassiveInterfaceTunnelCfgToTerraform(struct?: RouterOspfPassiveInterfaceTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    tunnel_address: cdktf.stringToTerraform(struct!.tunnelAddress),
  }
}


export function routerOspfPassiveInterfaceTunnelCfgToHclTerraform(struct?: RouterOspfPassiveInterfaceTunnelCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_address: {
      value: cdktf.stringToHclTerraform(struct!.tunnelAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfPassiveInterfaceTunnelCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfPassiveInterfaceTunnelCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._tunnelAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelAddress = this._tunnelAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfPassiveInterfaceTunnelCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tunnel = undefined;
      this._tunnelAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tunnel = value.tunnel;
      this._tunnelAddress = value.tunnelAddress;
    }
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }

  // tunnel_address - computed: false, optional: true, required: false
  private _tunnelAddress?: string; 
  public get tunnelAddress() {
    return this.getStringAttribute('tunnel_address');
  }
  public set tunnelAddress(value: string) {
    this._tunnelAddress = value;
  }
  public resetTunnelAddress() {
    this._tunnelAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelAddressInput() {
    return this._tunnelAddress;
  }
}

export class RouterOspfPassiveInterfaceTunnelCfgList extends cdktf.ComplexList {
  public internalValue? : RouterOspfPassiveInterfaceTunnelCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfPassiveInterfaceTunnelCfgOutputReference {
    return new RouterOspfPassiveInterfaceTunnelCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfPassiveInterfaceVeCfg {
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ve RouterOspf#ve}
  */
  readonly ve?: number;
  /**
  * Address of Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ve_address RouterOspf#ve_address}
  */
  readonly veAddress?: string;
}

export function routerOspfPassiveInterfaceVeCfgToTerraform(struct?: RouterOspfPassiveInterfaceVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve: cdktf.numberToTerraform(struct!.ve),
    ve_address: cdktf.stringToTerraform(struct!.veAddress),
  }
}


export function routerOspfPassiveInterfaceVeCfgToHclTerraform(struct?: RouterOspfPassiveInterfaceVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve_address: {
      value: cdktf.stringToHclTerraform(struct!.veAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfPassiveInterfaceVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfPassiveInterfaceVeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    if (this._veAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.veAddress = this._veAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfPassiveInterfaceVeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ve = undefined;
      this._veAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ve = value.ve;
      this._veAddress = value.veAddress;
    }
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }

  // ve_address - computed: false, optional: true, required: false
  private _veAddress?: string; 
  public get veAddress() {
    return this.getStringAttribute('ve_address');
  }
  public set veAddress(value: string) {
    this._veAddress = value;
  }
  public resetVeAddress() {
    this._veAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veAddressInput() {
    return this._veAddress;
  }
}

export class RouterOspfPassiveInterfaceVeCfgList extends cdktf.ComplexList {
  public internalValue? : RouterOspfPassiveInterfaceVeCfg[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfPassiveInterfaceVeCfgOutputReference {
    return new RouterOspfPassiveInterfaceVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfPassiveInterface {
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#eth_cfg RouterOspf#eth_cfg}
  */
  readonly ethCfg?: RouterOspfPassiveInterfaceEthCfg[] | cdktf.IResolvable;
  /**
  * lif_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#lif_cfg RouterOspf#lif_cfg}
  */
  readonly lifCfg?: RouterOspfPassiveInterfaceLifCfg[] | cdktf.IResolvable;
  /**
  * loopback_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#loopback_cfg RouterOspf#loopback_cfg}
  */
  readonly loopbackCfg?: RouterOspfPassiveInterfaceLoopbackCfg[] | cdktf.IResolvable;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#trunk_cfg RouterOspf#trunk_cfg}
  */
  readonly trunkCfg?: RouterOspfPassiveInterfaceTrunkCfg[] | cdktf.IResolvable;
  /**
  * tunnel_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#tunnel_cfg RouterOspf#tunnel_cfg}
  */
  readonly tunnelCfg?: RouterOspfPassiveInterfaceTunnelCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ve_cfg RouterOspf#ve_cfg}
  */
  readonly veCfg?: RouterOspfPassiveInterfaceVeCfg[] | cdktf.IResolvable;
}

export function routerOspfPassiveInterfaceToTerraform(struct?: RouterOspfPassiveInterfaceOutputReference | RouterOspfPassiveInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eth_cfg: cdktf.listMapper(routerOspfPassiveInterfaceEthCfgToTerraform, true)(struct!.ethCfg),
    lif_cfg: cdktf.listMapper(routerOspfPassiveInterfaceLifCfgToTerraform, true)(struct!.lifCfg),
    loopback_cfg: cdktf.listMapper(routerOspfPassiveInterfaceLoopbackCfgToTerraform, true)(struct!.loopbackCfg),
    trunk_cfg: cdktf.listMapper(routerOspfPassiveInterfaceTrunkCfgToTerraform, true)(struct!.trunkCfg),
    tunnel_cfg: cdktf.listMapper(routerOspfPassiveInterfaceTunnelCfgToTerraform, true)(struct!.tunnelCfg),
    ve_cfg: cdktf.listMapper(routerOspfPassiveInterfaceVeCfgToTerraform, true)(struct!.veCfg),
  }
}


export function routerOspfPassiveInterfaceToHclTerraform(struct?: RouterOspfPassiveInterfaceOutputReference | RouterOspfPassiveInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eth_cfg: {
      value: cdktf.listMapperHcl(routerOspfPassiveInterfaceEthCfgToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfPassiveInterfaceEthCfgList",
    },
    lif_cfg: {
      value: cdktf.listMapperHcl(routerOspfPassiveInterfaceLifCfgToHclTerraform, true)(struct!.lifCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfPassiveInterfaceLifCfgList",
    },
    loopback_cfg: {
      value: cdktf.listMapperHcl(routerOspfPassiveInterfaceLoopbackCfgToHclTerraform, true)(struct!.loopbackCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfPassiveInterfaceLoopbackCfgList",
    },
    trunk_cfg: {
      value: cdktf.listMapperHcl(routerOspfPassiveInterfaceTrunkCfgToHclTerraform, true)(struct!.trunkCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfPassiveInterfaceTrunkCfgList",
    },
    tunnel_cfg: {
      value: cdktf.listMapperHcl(routerOspfPassiveInterfaceTunnelCfgToHclTerraform, true)(struct!.tunnelCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfPassiveInterfaceTunnelCfgList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(routerOspfPassiveInterfaceVeCfgToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfPassiveInterfaceVeCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfPassiveInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfPassiveInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethCfg = this._ethCfg?.internalValue;
    }
    if (this._lifCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifCfg = this._lifCfg?.internalValue;
    }
    if (this._loopbackCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackCfg = this._loopbackCfg?.internalValue;
    }
    if (this._trunkCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkCfg = this._trunkCfg?.internalValue;
    }
    if (this._tunnelCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelCfg = this._tunnelCfg?.internalValue;
    }
    if (this._veCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veCfg = this._veCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfPassiveInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethCfg.internalValue = undefined;
      this._lifCfg.internalValue = undefined;
      this._loopbackCfg.internalValue = undefined;
      this._trunkCfg.internalValue = undefined;
      this._tunnelCfg.internalValue = undefined;
      this._veCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethCfg.internalValue = value.ethCfg;
      this._lifCfg.internalValue = value.lifCfg;
      this._loopbackCfg.internalValue = value.loopbackCfg;
      this._trunkCfg.internalValue = value.trunkCfg;
      this._tunnelCfg.internalValue = value.tunnelCfg;
      this._veCfg.internalValue = value.veCfg;
    }
  }

  // eth_cfg - computed: false, optional: true, required: false
  private _ethCfg = new RouterOspfPassiveInterfaceEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: RouterOspfPassiveInterfaceEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // lif_cfg - computed: false, optional: true, required: false
  private _lifCfg = new RouterOspfPassiveInterfaceLifCfgList(this, "lif_cfg", false);
  public get lifCfg() {
    return this._lifCfg;
  }
  public putLifCfg(value: RouterOspfPassiveInterfaceLifCfg[] | cdktf.IResolvable) {
    this._lifCfg.internalValue = value;
  }
  public resetLifCfg() {
    this._lifCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifCfgInput() {
    return this._lifCfg.internalValue;
  }

  // loopback_cfg - computed: false, optional: true, required: false
  private _loopbackCfg = new RouterOspfPassiveInterfaceLoopbackCfgList(this, "loopback_cfg", false);
  public get loopbackCfg() {
    return this._loopbackCfg;
  }
  public putLoopbackCfg(value: RouterOspfPassiveInterfaceLoopbackCfg[] | cdktf.IResolvable) {
    this._loopbackCfg.internalValue = value;
  }
  public resetLoopbackCfg() {
    this._loopbackCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackCfgInput() {
    return this._loopbackCfg.internalValue;
  }

  // trunk_cfg - computed: false, optional: true, required: false
  private _trunkCfg = new RouterOspfPassiveInterfaceTrunkCfgList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: RouterOspfPassiveInterfaceTrunkCfg[] | cdktf.IResolvable) {
    this._trunkCfg.internalValue = value;
  }
  public resetTrunkCfg() {
    this._trunkCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkCfgInput() {
    return this._trunkCfg.internalValue;
  }

  // tunnel_cfg - computed: false, optional: true, required: false
  private _tunnelCfg = new RouterOspfPassiveInterfaceTunnelCfgList(this, "tunnel_cfg", false);
  public get tunnelCfg() {
    return this._tunnelCfg;
  }
  public putTunnelCfg(value: RouterOspfPassiveInterfaceTunnelCfg[] | cdktf.IResolvable) {
    this._tunnelCfg.internalValue = value;
  }
  public resetTunnelCfg() {
    this._tunnelCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCfgInput() {
    return this._tunnelCfg.internalValue;
  }

  // ve_cfg - computed: false, optional: true, required: false
  private _veCfg = new RouterOspfPassiveInterfaceVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: RouterOspfPassiveInterfaceVeCfg[] | cdktf.IResolvable) {
    this._veCfg.internalValue = value;
  }
  public resetVeCfg() {
    this._veCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veCfgInput() {
    return this._veCfg.internalValue;
  }
}
export interface RouterOspfRedistributeIpNatFloatingListStruct {
  /**
  * Floating-IP as forward address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ip_nat_floating_ip_forward RouterOspf#ip_nat_floating_ip_forward}
  */
  readonly ipNatFloatingIpForward?: string;
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ip_nat_prefix RouterOspf#ip_nat_prefix}
  */
  readonly ipNatPrefix?: string;
}

export function routerOspfRedistributeIpNatFloatingListStructToTerraform(struct?: RouterOspfRedistributeIpNatFloatingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat_floating_ip_forward: cdktf.stringToTerraform(struct!.ipNatFloatingIpForward),
    ip_nat_prefix: cdktf.stringToTerraform(struct!.ipNatPrefix),
  }
}


export function routerOspfRedistributeIpNatFloatingListStructToHclTerraform(struct?: RouterOspfRedistributeIpNatFloatingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_nat_floating_ip_forward: {
      value: cdktf.stringToHclTerraform(struct!.ipNatFloatingIpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_nat_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipNatPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfRedistributeIpNatFloatingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistributeIpNatFloatingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNatFloatingIpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatFloatingIpForward = this._ipNatFloatingIpForward;
    }
    if (this._ipNatPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatPrefix = this._ipNatPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRedistributeIpNatFloatingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipNatFloatingIpForward = undefined;
      this._ipNatPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipNatFloatingIpForward = value.ipNatFloatingIpForward;
      this._ipNatPrefix = value.ipNatPrefix;
    }
  }

  // ip_nat_floating_ip_forward - computed: false, optional: true, required: false
  private _ipNatFloatingIpForward?: string; 
  public get ipNatFloatingIpForward() {
    return this.getStringAttribute('ip_nat_floating_ip_forward');
  }
  public set ipNatFloatingIpForward(value: string) {
    this._ipNatFloatingIpForward = value;
  }
  public resetIpNatFloatingIpForward() {
    this._ipNatFloatingIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatFloatingIpForwardInput() {
    return this._ipNatFloatingIpForward;
  }

  // ip_nat_prefix - computed: false, optional: true, required: false
  private _ipNatPrefix?: string; 
  public get ipNatPrefix() {
    return this.getStringAttribute('ip_nat_prefix');
  }
  public set ipNatPrefix(value: string) {
    this._ipNatPrefix = value;
  }
  public resetIpNatPrefix() {
    this._ipNatPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatPrefixInput() {
    return this._ipNatPrefix;
  }
}

export class RouterOspfRedistributeIpNatFloatingListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistributeIpNatFloatingListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeIpNatFloatingListStructOutputReference {
    return new RouterOspfRedistributeIpNatFloatingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfRedistributeOspfListStruct {
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric_ospf RouterOspf#metric_ospf}
  */
  readonly metricOspf?: number;
  /**
  * '1': Set OSPF External Type 1 metrics; '2': Set OSPF External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric_type_ospf RouterOspf#metric_type_ospf}
  */
  readonly metricTypeOspf?: string;
  /**
  * Open Shortest Path First (OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ospf RouterOspf#ospf}
  */
  readonly ospf?: number;
  /**
  * OSPF process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#process_id RouterOspf#process_id}
  */
  readonly processId?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#route_map_ospf RouterOspf#route_map_ospf}
  */
  readonly routeMapOspf?: string;
  /**
  * Set tag for routes redistributed into OSPF (32-bit tag value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#tag_ospf RouterOspf#tag_ospf}
  */
  readonly tagOspf?: number;
}

export function routerOspfRedistributeOspfListStructToTerraform(struct?: RouterOspfRedistributeOspfListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_ospf: cdktf.numberToTerraform(struct!.metricOspf),
    metric_type_ospf: cdktf.stringToTerraform(struct!.metricTypeOspf),
    ospf: cdktf.numberToTerraform(struct!.ospf),
    process_id: cdktf.numberToTerraform(struct!.processId),
    route_map_ospf: cdktf.stringToTerraform(struct!.routeMapOspf),
    tag_ospf: cdktf.numberToTerraform(struct!.tagOspf),
  }
}


export function routerOspfRedistributeOspfListStructToHclTerraform(struct?: RouterOspfRedistributeOspfListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_ospf: {
      value: cdktf.numberToHclTerraform(struct!.metricOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type_ospf: {
      value: cdktf.stringToHclTerraform(struct!.metricTypeOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf: {
      value: cdktf.numberToHclTerraform(struct!.ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    process_id: {
      value: cdktf.numberToHclTerraform(struct!.processId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map_ospf: {
      value: cdktf.stringToHclTerraform(struct!.routeMapOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_ospf: {
      value: cdktf.numberToHclTerraform(struct!.tagOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfRedistributeOspfListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistributeOspfListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricOspf = this._metricOspf;
    }
    if (this._metricTypeOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTypeOspf = this._metricTypeOspf;
    }
    if (this._ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf;
    }
    if (this._processId !== undefined) {
      hasAnyValues = true;
      internalValueResult.processId = this._processId;
    }
    if (this._routeMapOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOspf = this._routeMapOspf;
    }
    if (this._tagOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagOspf = this._tagOspf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRedistributeOspfListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricOspf = undefined;
      this._metricTypeOspf = undefined;
      this._ospf = undefined;
      this._processId = undefined;
      this._routeMapOspf = undefined;
      this._tagOspf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricOspf = value.metricOspf;
      this._metricTypeOspf = value.metricTypeOspf;
      this._ospf = value.ospf;
      this._processId = value.processId;
      this._routeMapOspf = value.routeMapOspf;
      this._tagOspf = value.tagOspf;
    }
  }

  // metric_ospf - computed: false, optional: true, required: false
  private _metricOspf?: number; 
  public get metricOspf() {
    return this.getNumberAttribute('metric_ospf');
  }
  public set metricOspf(value: number) {
    this._metricOspf = value;
  }
  public resetMetricOspf() {
    this._metricOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOspfInput() {
    return this._metricOspf;
  }

  // metric_type_ospf - computed: false, optional: true, required: false
  private _metricTypeOspf?: string; 
  public get metricTypeOspf() {
    return this.getStringAttribute('metric_type_ospf');
  }
  public set metricTypeOspf(value: string) {
    this._metricTypeOspf = value;
  }
  public resetMetricTypeOspf() {
    this._metricTypeOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeOspfInput() {
    return this._metricTypeOspf;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf?: number; 
  public get ospf() {
    return this.getNumberAttribute('ospf');
  }
  public set ospf(value: number) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
  }

  // process_id - computed: false, optional: true, required: false
  private _processId?: number; 
  public get processId() {
    return this.getNumberAttribute('process_id');
  }
  public set processId(value: number) {
    this._processId = value;
  }
  public resetProcessId() {
    this._processId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // route_map_ospf - computed: false, optional: true, required: false
  private _routeMapOspf?: string; 
  public get routeMapOspf() {
    return this.getStringAttribute('route_map_ospf');
  }
  public set routeMapOspf(value: string) {
    this._routeMapOspf = value;
  }
  public resetRouteMapOspf() {
    this._routeMapOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOspfInput() {
    return this._routeMapOspf;
  }

  // tag_ospf - computed: false, optional: true, required: false
  private _tagOspf?: number; 
  public get tagOspf() {
    return this.getNumberAttribute('tag_ospf');
  }
  public set tagOspf(value: number) {
    this._tagOspf = value;
  }
  public resetTagOspf() {
    this._tagOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagOspfInput() {
    return this._tagOspf;
  }
}

export class RouterOspfRedistributeOspfListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistributeOspfListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeOspfListStructOutputReference {
    return new RouterOspfRedistributeOspfListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfRedistributeRedistListStruct {
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric RouterOspf#metric}
  */
  readonly metric?: number;
  /**
  * '1': Set OSPF External Type 1 metrics; '2': Set OSPF External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric_type RouterOspf#metric_type}
  */
  readonly metricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#route_map RouterOspf#route_map}
  */
  readonly routeMap?: string;
  /**
  * Set tag for routes redistributed into OSPF (32-bit tag value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#tag RouterOspf#tag}
  */
  readonly tag?: number;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'lw4o6': LW4O6 Prefix; 'nat-map': NAT MAP Prefix; 'static-nat': Static NAT; 'isis': ISO IS-IS; 'rip': Routing Information Protocol (RIP); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#type RouterOspf#type}
  */
  readonly type?: string;
}

export function routerOspfRedistributeRedistListStructToTerraform(struct?: RouterOspfRedistributeRedistListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    tag: cdktf.numberToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerOspfRedistributeRedistListStructToHclTerraform(struct?: RouterOspfRedistributeRedistListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class RouterOspfRedistributeRedistListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistributeRedistListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRedistributeRedistListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._routeMap = undefined;
      this._tag = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._routeMap = value.routeMap;
      this._tag = value.tag;
      this._type = value.type;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

export class RouterOspfRedistributeRedistListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistributeRedistListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeRedistListStructOutputReference {
    return new RouterOspfRedistributeRedistListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfRedistributeVipFloatingListStruct {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#vip_address RouterOspf#vip_address}
  */
  readonly vipAddress?: string;
  /**
  * Floating-IP as forward address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#vip_floating_ip_forward RouterOspf#vip_floating_ip_forward}
  */
  readonly vipFloatingIpForward?: string;
}

export function routerOspfRedistributeVipFloatingListStructToTerraform(struct?: RouterOspfRedistributeVipFloatingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_address: cdktf.stringToTerraform(struct!.vipAddress),
    vip_floating_ip_forward: cdktf.stringToTerraform(struct!.vipFloatingIpForward),
  }
}


export function routerOspfRedistributeVipFloatingListStructToHclTerraform(struct?: RouterOspfRedistributeVipFloatingListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_address: {
      value: cdktf.stringToHclTerraform(struct!.vipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_floating_ip_forward: {
      value: cdktf.stringToHclTerraform(struct!.vipFloatingIpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfRedistributeVipFloatingListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistributeVipFloatingListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipAddress = this._vipAddress;
    }
    if (this._vipFloatingIpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipFloatingIpForward = this._vipFloatingIpForward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRedistributeVipFloatingListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vipAddress = undefined;
      this._vipFloatingIpForward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vipAddress = value.vipAddress;
      this._vipFloatingIpForward = value.vipFloatingIpForward;
    }
  }

  // vip_address - computed: false, optional: true, required: false
  private _vipAddress?: string; 
  public get vipAddress() {
    return this.getStringAttribute('vip_address');
  }
  public set vipAddress(value: string) {
    this._vipAddress = value;
  }
  public resetVipAddress() {
    this._vipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipAddressInput() {
    return this._vipAddress;
  }

  // vip_floating_ip_forward - computed: false, optional: true, required: false
  private _vipFloatingIpForward?: string; 
  public get vipFloatingIpForward() {
    return this.getStringAttribute('vip_floating_ip_forward');
  }
  public set vipFloatingIpForward(value: string) {
    this._vipFloatingIpForward = value;
  }
  public resetVipFloatingIpForward() {
    this._vipFloatingIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipFloatingIpForwardInput() {
    return this._vipFloatingIpForward;
  }
}

export class RouterOspfRedistributeVipFloatingListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistributeVipFloatingListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeVipFloatingListStructOutputReference {
    return new RouterOspfRedistributeVipFloatingListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfRedistributeVipListStruct {
  /**
  * '1': Set OSPF External Type 1 metrics; '2': Set OSPF External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric_type_vip RouterOspf#metric_type_vip}
  */
  readonly metricTypeVip?: string;
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric_vip RouterOspf#metric_vip}
  */
  readonly metricVip?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#route_map_vip RouterOspf#route_map_vip}
  */
  readonly routeMapVip?: string;
  /**
  * Set tag for routes redistributed into OSPF (32-bit tag value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#tag_vip RouterOspf#tag_vip}
  */
  readonly tagVip?: number;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#type_vip RouterOspf#type_vip}
  */
  readonly typeVip?: string;
}

export function routerOspfRedistributeVipListStructToTerraform(struct?: RouterOspfRedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type_vip: cdktf.stringToTerraform(struct!.metricTypeVip),
    metric_vip: cdktf.numberToTerraform(struct!.metricVip),
    route_map_vip: cdktf.stringToTerraform(struct!.routeMapVip),
    tag_vip: cdktf.numberToTerraform(struct!.tagVip),
    type_vip: cdktf.stringToTerraform(struct!.typeVip),
  }
}


export function routerOspfRedistributeVipListStructToHclTerraform(struct?: RouterOspfRedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type_vip: {
      value: cdktf.stringToHclTerraform(struct!.metricTypeVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_vip: {
      value: cdktf.numberToHclTerraform(struct!.metricVip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map_vip: {
      value: cdktf.stringToHclTerraform(struct!.routeMapVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_vip: {
      value: cdktf.numberToHclTerraform(struct!.tagVip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_vip: {
      value: cdktf.stringToHclTerraform(struct!.typeVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfRedistributeVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistributeVipListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricTypeVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTypeVip = this._metricTypeVip;
    }
    if (this._metricVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricVip = this._metricVip;
    }
    if (this._routeMapVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapVip = this._routeMapVip;
    }
    if (this._tagVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagVip = this._tagVip;
    }
    if (this._typeVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeVip = this._typeVip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRedistributeVipListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricTypeVip = undefined;
      this._metricVip = undefined;
      this._routeMapVip = undefined;
      this._tagVip = undefined;
      this._typeVip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricTypeVip = value.metricTypeVip;
      this._metricVip = value.metricVip;
      this._routeMapVip = value.routeMapVip;
      this._tagVip = value.tagVip;
      this._typeVip = value.typeVip;
    }
  }

  // metric_type_vip - computed: false, optional: true, required: false
  private _metricTypeVip?: string; 
  public get metricTypeVip() {
    return this.getStringAttribute('metric_type_vip');
  }
  public set metricTypeVip(value: string) {
    this._metricTypeVip = value;
  }
  public resetMetricTypeVip() {
    this._metricTypeVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeVipInput() {
    return this._metricTypeVip;
  }

  // metric_vip - computed: false, optional: true, required: false
  private _metricVip?: number; 
  public get metricVip() {
    return this.getNumberAttribute('metric_vip');
  }
  public set metricVip(value: number) {
    this._metricVip = value;
  }
  public resetMetricVip() {
    this._metricVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricVipInput() {
    return this._metricVip;
  }

  // route_map_vip - computed: false, optional: true, required: false
  private _routeMapVip?: string; 
  public get routeMapVip() {
    return this.getStringAttribute('route_map_vip');
  }
  public set routeMapVip(value: string) {
    this._routeMapVip = value;
  }
  public resetRouteMapVip() {
    this._routeMapVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapVipInput() {
    return this._routeMapVip;
  }

  // tag_vip - computed: false, optional: true, required: false
  private _tagVip?: number; 
  public get tagVip() {
    return this.getNumberAttribute('tag_vip');
  }
  public set tagVip(value: number) {
    this._tagVip = value;
  }
  public resetTagVip() {
    this._tagVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagVipInput() {
    return this._tagVip;
  }

  // type_vip - computed: false, optional: true, required: false
  private _typeVip?: string; 
  public get typeVip() {
    return this.getStringAttribute('type_vip');
  }
  public set typeVip(value: string) {
    this._typeVip = value;
  }
  public resetTypeVip() {
    this._typeVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeVipInput() {
    return this._typeVip;
  }
}

export class RouterOspfRedistributeVipListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistributeVipListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeVipListStructOutputReference {
    return new RouterOspfRedistributeVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfRedistribute {
  /**
  * IP-NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ip_nat RouterOspf#ip_nat}
  */
  readonly ipNat?: number;
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric_ip_nat RouterOspf#metric_ip_nat}
  */
  readonly metricIpNat?: number;
  /**
  * '1': Set OSPF External Type 1 metrics; '2': Set OSPF External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#metric_type_ip_nat RouterOspf#metric_type_ip_nat}
  */
  readonly metricTypeIpNat?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#route_map_ip_nat RouterOspf#route_map_ip_nat}
  */
  readonly routeMapIpNat?: string;
  /**
  * Set tag for routes redistributed into OSPF (32-bit tag value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#tag_ip_nat RouterOspf#tag_ip_nat}
  */
  readonly tagIpNat?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#uuid RouterOspf#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_nat_floating_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ip_nat_floating_list RouterOspf#ip_nat_floating_list}
  */
  readonly ipNatFloatingList?: RouterOspfRedistributeIpNatFloatingListStruct[] | cdktf.IResolvable;
  /**
  * ospf_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#ospf_list RouterOspf#ospf_list}
  */
  readonly ospfList?: RouterOspfRedistributeOspfListStruct[] | cdktf.IResolvable;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#redist_list RouterOspf#redist_list}
  */
  readonly redistList?: RouterOspfRedistributeRedistListStruct[] | cdktf.IResolvable;
  /**
  * vip_floating_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#vip_floating_list RouterOspf#vip_floating_list}
  */
  readonly vipFloatingList?: RouterOspfRedistributeVipFloatingListStruct[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#vip_list RouterOspf#vip_list}
  */
  readonly vipList?: RouterOspfRedistributeVipListStruct[] | cdktf.IResolvable;
}

export function routerOspfRedistributeToTerraform(struct?: RouterOspfRedistributeOutputReference | RouterOspfRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat: cdktf.numberToTerraform(struct!.ipNat),
    metric_ip_nat: cdktf.numberToTerraform(struct!.metricIpNat),
    metric_type_ip_nat: cdktf.stringToTerraform(struct!.metricTypeIpNat),
    route_map_ip_nat: cdktf.stringToTerraform(struct!.routeMapIpNat),
    tag_ip_nat: cdktf.numberToTerraform(struct!.tagIpNat),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ip_nat_floating_list: cdktf.listMapper(routerOspfRedistributeIpNatFloatingListStructToTerraform, true)(struct!.ipNatFloatingList),
    ospf_list: cdktf.listMapper(routerOspfRedistributeOspfListStructToTerraform, true)(struct!.ospfList),
    redist_list: cdktf.listMapper(routerOspfRedistributeRedistListStructToTerraform, true)(struct!.redistList),
    vip_floating_list: cdktf.listMapper(routerOspfRedistributeVipFloatingListStructToTerraform, true)(struct!.vipFloatingList),
    vip_list: cdktf.listMapper(routerOspfRedistributeVipListStructToTerraform, true)(struct!.vipList),
  }
}


export function routerOspfRedistributeToHclTerraform(struct?: RouterOspfRedistributeOutputReference | RouterOspfRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_nat: {
      value: cdktf.numberToHclTerraform(struct!.ipNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_ip_nat: {
      value: cdktf.numberToHclTerraform(struct!.metricIpNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type_ip_nat: {
      value: cdktf.stringToHclTerraform(struct!.metricTypeIpNat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_ip_nat: {
      value: cdktf.stringToHclTerraform(struct!.routeMapIpNat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_ip_nat: {
      value: cdktf.numberToHclTerraform(struct!.tagIpNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_nat_floating_list: {
      value: cdktf.listMapperHcl(routerOspfRedistributeIpNatFloatingListStructToHclTerraform, true)(struct!.ipNatFloatingList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfRedistributeIpNatFloatingListStructList",
    },
    ospf_list: {
      value: cdktf.listMapperHcl(routerOspfRedistributeOspfListStructToHclTerraform, true)(struct!.ospfList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfRedistributeOspfListStructList",
    },
    redist_list: {
      value: cdktf.listMapperHcl(routerOspfRedistributeRedistListStructToHclTerraform, true)(struct!.redistList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfRedistributeRedistListStructList",
    },
    vip_floating_list: {
      value: cdktf.listMapperHcl(routerOspfRedistributeVipFloatingListStructToHclTerraform, true)(struct!.vipFloatingList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfRedistributeVipFloatingListStructList",
    },
    vip_list: {
      value: cdktf.listMapperHcl(routerOspfRedistributeVipListStructToHclTerraform, true)(struct!.vipList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfRedistributeVipListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfRedistributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNat = this._ipNat;
    }
    if (this._metricIpNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricIpNat = this._metricIpNat;
    }
    if (this._metricTypeIpNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTypeIpNat = this._metricTypeIpNat;
    }
    if (this._routeMapIpNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapIpNat = this._routeMapIpNat;
    }
    if (this._tagIpNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagIpNat = this._tagIpNat;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ipNatFloatingList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatFloatingList = this._ipNatFloatingList?.internalValue;
    }
    if (this._ospfList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfList = this._ospfList?.internalValue;
    }
    if (this._redistList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistList = this._redistList?.internalValue;
    }
    if (this._vipFloatingList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipFloatingList = this._vipFloatingList?.internalValue;
    }
    if (this._vipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipList = this._vipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRedistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipNat = undefined;
      this._metricIpNat = undefined;
      this._metricTypeIpNat = undefined;
      this._routeMapIpNat = undefined;
      this._tagIpNat = undefined;
      this._uuid = undefined;
      this._ipNatFloatingList.internalValue = undefined;
      this._ospfList.internalValue = undefined;
      this._redistList.internalValue = undefined;
      this._vipFloatingList.internalValue = undefined;
      this._vipList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipNat = value.ipNat;
      this._metricIpNat = value.metricIpNat;
      this._metricTypeIpNat = value.metricTypeIpNat;
      this._routeMapIpNat = value.routeMapIpNat;
      this._tagIpNat = value.tagIpNat;
      this._uuid = value.uuid;
      this._ipNatFloatingList.internalValue = value.ipNatFloatingList;
      this._ospfList.internalValue = value.ospfList;
      this._redistList.internalValue = value.redistList;
      this._vipFloatingList.internalValue = value.vipFloatingList;
      this._vipList.internalValue = value.vipList;
    }
  }

  // ip_nat - computed: false, optional: true, required: false
  private _ipNat?: number; 
  public get ipNat() {
    return this.getNumberAttribute('ip_nat');
  }
  public set ipNat(value: number) {
    this._ipNat = value;
  }
  public resetIpNat() {
    this._ipNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatInput() {
    return this._ipNat;
  }

  // metric_ip_nat - computed: false, optional: true, required: false
  private _metricIpNat?: number; 
  public get metricIpNat() {
    return this.getNumberAttribute('metric_ip_nat');
  }
  public set metricIpNat(value: number) {
    this._metricIpNat = value;
  }
  public resetMetricIpNat() {
    this._metricIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIpNatInput() {
    return this._metricIpNat;
  }

  // metric_type_ip_nat - computed: false, optional: true, required: false
  private _metricTypeIpNat?: string; 
  public get metricTypeIpNat() {
    return this.getStringAttribute('metric_type_ip_nat');
  }
  public set metricTypeIpNat(value: string) {
    this._metricTypeIpNat = value;
  }
  public resetMetricTypeIpNat() {
    this._metricTypeIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeIpNatInput() {
    return this._metricTypeIpNat;
  }

  // route_map_ip_nat - computed: false, optional: true, required: false
  private _routeMapIpNat?: string; 
  public get routeMapIpNat() {
    return this.getStringAttribute('route_map_ip_nat');
  }
  public set routeMapIpNat(value: string) {
    this._routeMapIpNat = value;
  }
  public resetRouteMapIpNat() {
    this._routeMapIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapIpNatInput() {
    return this._routeMapIpNat;
  }

  // tag_ip_nat - computed: false, optional: true, required: false
  private _tagIpNat?: number; 
  public get tagIpNat() {
    return this.getNumberAttribute('tag_ip_nat');
  }
  public set tagIpNat(value: number) {
    this._tagIpNat = value;
  }
  public resetTagIpNat() {
    this._tagIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIpNatInput() {
    return this._tagIpNat;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ip_nat_floating_list - computed: false, optional: true, required: false
  private _ipNatFloatingList = new RouterOspfRedistributeIpNatFloatingListStructList(this, "ip_nat_floating_list", false);
  public get ipNatFloatingList() {
    return this._ipNatFloatingList;
  }
  public putIpNatFloatingList(value: RouterOspfRedistributeIpNatFloatingListStruct[] | cdktf.IResolvable) {
    this._ipNatFloatingList.internalValue = value;
  }
  public resetIpNatFloatingList() {
    this._ipNatFloatingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatFloatingListInput() {
    return this._ipNatFloatingList.internalValue;
  }

  // ospf_list - computed: false, optional: true, required: false
  private _ospfList = new RouterOspfRedistributeOspfListStructList(this, "ospf_list", false);
  public get ospfList() {
    return this._ospfList;
  }
  public putOspfList(value: RouterOspfRedistributeOspfListStruct[] | cdktf.IResolvable) {
    this._ospfList.internalValue = value;
  }
  public resetOspfList() {
    this._ospfList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfListInput() {
    return this._ospfList.internalValue;
  }

  // redist_list - computed: false, optional: true, required: false
  private _redistList = new RouterOspfRedistributeRedistListStructList(this, "redist_list", false);
  public get redistList() {
    return this._redistList;
  }
  public putRedistList(value: RouterOspfRedistributeRedistListStruct[] | cdktf.IResolvable) {
    this._redistList.internalValue = value;
  }
  public resetRedistList() {
    this._redistList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistListInput() {
    return this._redistList.internalValue;
  }

  // vip_floating_list - computed: false, optional: true, required: false
  private _vipFloatingList = new RouterOspfRedistributeVipFloatingListStructList(this, "vip_floating_list", false);
  public get vipFloatingList() {
    return this._vipFloatingList;
  }
  public putVipFloatingList(value: RouterOspfRedistributeVipFloatingListStruct[] | cdktf.IResolvable) {
    this._vipFloatingList.internalValue = value;
  }
  public resetVipFloatingList() {
    this._vipFloatingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipFloatingListInput() {
    return this._vipFloatingList.internalValue;
  }

  // vip_list - computed: false, optional: true, required: false
  private _vipList = new RouterOspfRedistributeVipListStructList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: RouterOspfRedistributeVipListStruct[] | cdktf.IResolvable) {
    this._vipList.internalValue = value;
  }
  public resetVipList() {
    this._vipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipListInput() {
    return this._vipList.internalValue;
  }
}
export interface RouterOspfRouterId {
  /**
  * OSPF router-id in IPv4 address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#value RouterOspf#value}
  */
  readonly value?: string;
}

export function routerOspfRouterIdToTerraform(struct?: RouterOspfRouterIdOutputReference | RouterOspfRouterId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function routerOspfRouterIdToHclTerraform(struct?: RouterOspfRouterIdOutputReference | RouterOspfRouterId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class RouterOspfRouterIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfRouterId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRouterId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RouterOspfSummaryAddressListStruct {
  /**
  * Suppress routes that match the prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#not_advertise RouterOspf#not_advertise}
  */
  readonly notAdvertise?: number;
  /**
  * Configure IP address summaries (Summary prefix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#summary_address RouterOspf#summary_address}
  */
  readonly summaryAddress?: string;
  /**
  * Set tag (32-bit tag value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#tag RouterOspf#tag}
  */
  readonly tag?: number;
}

export function routerOspfSummaryAddressListStructToTerraform(struct?: RouterOspfSummaryAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_advertise: cdktf.numberToTerraform(struct!.notAdvertise),
    summary_address: cdktf.stringToTerraform(struct!.summaryAddress),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerOspfSummaryAddressListStructToHclTerraform(struct?: RouterOspfSummaryAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_advertise: {
      value: cdktf.numberToHclTerraform(struct!.notAdvertise),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    summary_address: {
      value: cdktf.stringToHclTerraform(struct!.summaryAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfSummaryAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfSummaryAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notAdvertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAdvertise = this._notAdvertise;
    }
    if (this._summaryAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryAddress = this._summaryAddress;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfSummaryAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notAdvertise = undefined;
      this._summaryAddress = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notAdvertise = value.notAdvertise;
      this._summaryAddress = value.summaryAddress;
      this._tag = value.tag;
    }
  }

  // not_advertise - computed: false, optional: true, required: false
  private _notAdvertise?: number; 
  public get notAdvertise() {
    return this.getNumberAttribute('not_advertise');
  }
  public set notAdvertise(value: number) {
    this._notAdvertise = value;
  }
  public resetNotAdvertise() {
    this._notAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAdvertiseInput() {
    return this._notAdvertise;
  }

  // summary_address - computed: false, optional: true, required: false
  private _summaryAddress?: string; 
  public get summaryAddress() {
    return this.getStringAttribute('summary_address');
  }
  public set summaryAddress(value: string) {
    this._summaryAddress = value;
  }
  public resetSummaryAddress() {
    this._summaryAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddressInput() {
    return this._summaryAddress;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterOspfSummaryAddressListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfSummaryAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfSummaryAddressListStructOutputReference {
    return new RouterOspfSummaryAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfTimersSpfExp {
  /**
  * Maximum delay between receiving a change to SPF calculation in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#max_delay RouterOspf#max_delay}
  */
  readonly maxDelay?: number;
  /**
  * Minimum delay between receiving a change to SPF calculation in milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#min_delay RouterOspf#min_delay}
  */
  readonly minDelay?: number;
}

export function routerOspfTimersSpfExpToTerraform(struct?: RouterOspfTimersSpfExpOutputReference | RouterOspfTimersSpfExp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_delay: cdktf.numberToTerraform(struct!.maxDelay),
    min_delay: cdktf.numberToTerraform(struct!.minDelay),
  }
}


export function routerOspfTimersSpfExpToHclTerraform(struct?: RouterOspfTimersSpfExpOutputReference | RouterOspfTimersSpfExp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_delay: {
      value: cdktf.numberToHclTerraform(struct!.minDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfTimersSpfExpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfTimersSpfExp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDelay = this._maxDelay;
    }
    if (this._minDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDelay = this._minDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfTimersSpfExp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxDelay = undefined;
      this._minDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxDelay = value.maxDelay;
      this._minDelay = value.minDelay;
    }
  }

  // max_delay - computed: false, optional: true, required: false
  private _maxDelay?: number; 
  public get maxDelay() {
    return this.getNumberAttribute('max_delay');
  }
  public set maxDelay(value: number) {
    this._maxDelay = value;
  }
  public resetMaxDelay() {
    this._maxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelayInput() {
    return this._maxDelay;
  }

  // min_delay - computed: false, optional: true, required: false
  private _minDelay?: number; 
  public get minDelay() {
    return this.getNumberAttribute('min_delay');
  }
  public set minDelay(value: number) {
    this._minDelay = value;
  }
  public resetMinDelay() {
    this._minDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelayInput() {
    return this._minDelay;
  }
}
export interface RouterOspfTimersSpf {
  /**
  * exp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#exp RouterOspf#exp}
  */
  readonly exp?: RouterOspfTimersSpfExp;
}

export function routerOspfTimersSpfToTerraform(struct?: RouterOspfTimersSpfOutputReference | RouterOspfTimersSpf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exp: routerOspfTimersSpfExpToTerraform(struct!.exp),
  }
}


export function routerOspfTimersSpfToHclTerraform(struct?: RouterOspfTimersSpfOutputReference | RouterOspfTimersSpf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exp: {
      value: routerOspfTimersSpfExpToHclTerraform(struct!.exp),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfTimersSpfExpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfTimersSpfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfTimersSpf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exp = this._exp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfTimersSpf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exp.internalValue = value.exp;
    }
  }

  // exp - computed: false, optional: true, required: false
  private _exp = new RouterOspfTimersSpfExpOutputReference(this, "exp");
  public get exp() {
    return this._exp;
  }
  public putExp(value: RouterOspfTimersSpfExp) {
    this._exp.internalValue = value;
  }
  public resetExp() {
    this._exp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expInput() {
    return this._exp.internalValue;
  }
}
export interface RouterOspfTimers {
  /**
  * spf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#spf RouterOspf#spf}
  */
  readonly spf?: RouterOspfTimersSpf;
}

export function routerOspfTimersToTerraform(struct?: RouterOspfTimersOutputReference | RouterOspfTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spf: routerOspfTimersSpfToTerraform(struct!.spf),
  }
}


export function routerOspfTimersToHclTerraform(struct?: RouterOspfTimersOutputReference | RouterOspfTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spf: {
      value: routerOspfTimersSpfToHclTerraform(struct!.spf),
      isBlock: true,
      type: "list",
      storageClassType: "RouterOspfTimersSpfList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfTimers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spf = this._spf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfTimers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._spf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._spf.internalValue = value.spf;
    }
  }

  // spf - computed: false, optional: true, required: false
  private _spf = new RouterOspfTimersSpfOutputReference(this, "spf");
  public get spf() {
    return this._spf;
  }
  public putSpf(value: RouterOspfTimersSpf) {
    this._spf.internalValue = value;
  }
  public resetSpf() {
    this._spf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfInput() {
    return this._spf.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf thunder_router_ospf}
*/
export class RouterOspf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspf to import
  * @param importFromId The id of the existing RouterOspf that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf thunder_router_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspfConfig
  */
  public constructor(scope: Construct, id: string, config: RouterOspfConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_ospf',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCostReferenceBandwidth = config.autoCostReferenceBandwidth;
    this._bfdAllInterfaces = config.bfdAllInterfaces;
    this._defaultMetric = config.defaultMetric;
    this._externLsaEquivalenceCheck = config.externLsaEquivalenceCheck;
    this._id = config.id;
    this._maxConcurrentDd = config.maxConcurrentDd;
    this._maximumArea = config.maximumArea;
    this._processId = config.processId;
    this._rfc1583Compatible = config.rfc1583Compatible;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._areaList.internalValue = config.areaList;
    this._defaultInformation.internalValue = config.defaultInformation;
    this._distance.internalValue = config.distance;
    this._distributeInternalList.internalValue = config.distributeInternalList;
    this._distributeLists.internalValue = config.distributeLists;
    this._haStandbyExtraCost.internalValue = config.haStandbyExtraCost;
    this._hostList.internalValue = config.hostList;
    this._logAdjacencyChangesCfg.internalValue = config.logAdjacencyChangesCfg;
    this._neighborList.internalValue = config.neighborList;
    this._networkList.internalValue = config.networkList;
    this._ospf1.internalValue = config.ospf1;
    this._overflow.internalValue = config.overflow;
    this._passiveInterface.internalValue = config.passiveInterface;
    this._redistribute.internalValue = config.redistribute;
    this._routerId.internalValue = config.routerId;
    this._summaryAddressList.internalValue = config.summaryAddressList;
    this._timers.internalValue = config.timers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_cost_reference_bandwidth - computed: false, optional: true, required: false
  private _autoCostReferenceBandwidth?: number; 
  public get autoCostReferenceBandwidth() {
    return this.getNumberAttribute('auto_cost_reference_bandwidth');
  }
  public set autoCostReferenceBandwidth(value: number) {
    this._autoCostReferenceBandwidth = value;
  }
  public resetAutoCostReferenceBandwidth() {
    this._autoCostReferenceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCostReferenceBandwidthInput() {
    return this._autoCostReferenceBandwidth;
  }

  // bfd_all_interfaces - computed: false, optional: true, required: false
  private _bfdAllInterfaces?: number; 
  public get bfdAllInterfaces() {
    return this.getNumberAttribute('bfd_all_interfaces');
  }
  public set bfdAllInterfaces(value: number) {
    this._bfdAllInterfaces = value;
  }
  public resetBfdAllInterfaces() {
    this._bfdAllInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdAllInterfacesInput() {
    return this._bfdAllInterfaces;
  }

  // default_metric - computed: false, optional: true, required: false
  private _defaultMetric?: number; 
  public get defaultMetric() {
    return this.getNumberAttribute('default_metric');
  }
  public set defaultMetric(value: number) {
    this._defaultMetric = value;
  }
  public resetDefaultMetric() {
    this._defaultMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMetricInput() {
    return this._defaultMetric;
  }

  // extern_lsa_equivalence_check - computed: false, optional: true, required: false
  private _externLsaEquivalenceCheck?: number; 
  public get externLsaEquivalenceCheck() {
    return this.getNumberAttribute('extern_lsa_equivalence_check');
  }
  public set externLsaEquivalenceCheck(value: number) {
    this._externLsaEquivalenceCheck = value;
  }
  public resetExternLsaEquivalenceCheck() {
    this._externLsaEquivalenceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externLsaEquivalenceCheckInput() {
    return this._externLsaEquivalenceCheck;
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

  // max_concurrent_dd - computed: false, optional: true, required: false
  private _maxConcurrentDd?: number; 
  public get maxConcurrentDd() {
    return this.getNumberAttribute('max_concurrent_dd');
  }
  public set maxConcurrentDd(value: number) {
    this._maxConcurrentDd = value;
  }
  public resetMaxConcurrentDd() {
    this._maxConcurrentDd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentDdInput() {
    return this._maxConcurrentDd;
  }

  // maximum_area - computed: false, optional: true, required: false
  private _maximumArea?: number; 
  public get maximumArea() {
    return this.getNumberAttribute('maximum_area');
  }
  public set maximumArea(value: number) {
    this._maximumArea = value;
  }
  public resetMaximumArea() {
    this._maximumArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAreaInput() {
    return this._maximumArea;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: number; 
  public get processId() {
    return this.getNumberAttribute('process_id');
  }
  public set processId(value: number) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // rfc1583_compatible - computed: false, optional: true, required: false
  private _rfc1583Compatible?: number; 
  public get rfc1583Compatible() {
    return this.getNumberAttribute('rfc1583_compatible');
  }
  public set rfc1583Compatible(value: number) {
    this._rfc1583Compatible = value;
  }
  public resetRfc1583Compatible() {
    this._rfc1583Compatible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc1583CompatibleInput() {
    return this._rfc1583Compatible;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // area_list - computed: false, optional: true, required: false
  private _areaList = new RouterOspfAreaListStructList(this, "area_list", false);
  public get areaList() {
    return this._areaList;
  }
  public putAreaList(value: RouterOspfAreaListStruct[] | cdktf.IResolvable) {
    this._areaList.internalValue = value;
  }
  public resetAreaList() {
    this._areaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaListInput() {
    return this._areaList.internalValue;
  }

  // default_information - computed: false, optional: true, required: false
  private _defaultInformation = new RouterOspfDefaultInformationOutputReference(this, "default_information");
  public get defaultInformation() {
    return this._defaultInformation;
  }
  public putDefaultInformation(value: RouterOspfDefaultInformation) {
    this._defaultInformation.internalValue = value;
  }
  public resetDefaultInformation() {
    this._defaultInformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationInput() {
    return this._defaultInformation.internalValue;
  }

  // distance - computed: false, optional: true, required: false
  private _distance = new RouterOspfDistanceOutputReference(this, "distance");
  public get distance() {
    return this._distance;
  }
  public putDistance(value: RouterOspfDistance) {
    this._distance.internalValue = value;
  }
  public resetDistance() {
    this._distance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance.internalValue;
  }

  // distribute_internal_list - computed: false, optional: true, required: false
  private _distributeInternalList = new RouterOspfDistributeInternalListStructList(this, "distribute_internal_list", false);
  public get distributeInternalList() {
    return this._distributeInternalList;
  }
  public putDistributeInternalList(value: RouterOspfDistributeInternalListStruct[] | cdktf.IResolvable) {
    this._distributeInternalList.internalValue = value;
  }
  public resetDistributeInternalList() {
    this._distributeInternalList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeInternalListInput() {
    return this._distributeInternalList.internalValue;
  }

  // distribute_lists - computed: false, optional: true, required: false
  private _distributeLists = new RouterOspfDistributeListsList(this, "distribute_lists", false);
  public get distributeLists() {
    return this._distributeLists;
  }
  public putDistributeLists(value: RouterOspfDistributeLists[] | cdktf.IResolvable) {
    this._distributeLists.internalValue = value;
  }
  public resetDistributeLists() {
    this._distributeLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListsInput() {
    return this._distributeLists.internalValue;
  }

  // ha_standby_extra_cost - computed: false, optional: true, required: false
  private _haStandbyExtraCost = new RouterOspfHaStandbyExtraCostList(this, "ha_standby_extra_cost", false);
  public get haStandbyExtraCost() {
    return this._haStandbyExtraCost;
  }
  public putHaStandbyExtraCost(value: RouterOspfHaStandbyExtraCost[] | cdktf.IResolvable) {
    this._haStandbyExtraCost.internalValue = value;
  }
  public resetHaStandbyExtraCost() {
    this._haStandbyExtraCost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStandbyExtraCostInput() {
    return this._haStandbyExtraCost.internalValue;
  }

  // host_list - computed: false, optional: true, required: false
  private _hostList = new RouterOspfHostListStructList(this, "host_list", false);
  public get hostList() {
    return this._hostList;
  }
  public putHostList(value: RouterOspfHostListStruct[] | cdktf.IResolvable) {
    this._hostList.internalValue = value;
  }
  public resetHostList() {
    this._hostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostListInput() {
    return this._hostList.internalValue;
  }

  // log_adjacency_changes_cfg - computed: false, optional: true, required: false
  private _logAdjacencyChangesCfg = new RouterOspfLogAdjacencyChangesCfgOutputReference(this, "log_adjacency_changes_cfg");
  public get logAdjacencyChangesCfg() {
    return this._logAdjacencyChangesCfg;
  }
  public putLogAdjacencyChangesCfg(value: RouterOspfLogAdjacencyChangesCfg) {
    this._logAdjacencyChangesCfg.internalValue = value;
  }
  public resetLogAdjacencyChangesCfg() {
    this._logAdjacencyChangesCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAdjacencyChangesCfgInput() {
    return this._logAdjacencyChangesCfg.internalValue;
  }

  // neighbor_list - computed: false, optional: true, required: false
  private _neighborList = new RouterOspfNeighborListStructList(this, "neighbor_list", false);
  public get neighborList() {
    return this._neighborList;
  }
  public putNeighborList(value: RouterOspfNeighborListStruct[] | cdktf.IResolvable) {
    this._neighborList.internalValue = value;
  }
  public resetNeighborList() {
    this._neighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborListInput() {
    return this._neighborList.internalValue;
  }

  // network_list - computed: false, optional: true, required: false
  private _networkList = new RouterOspfNetworkListStructList(this, "network_list", false);
  public get networkList() {
    return this._networkList;
  }
  public putNetworkList(value: RouterOspfNetworkListStruct[] | cdktf.IResolvable) {
    this._networkList.internalValue = value;
  }
  public resetNetworkList() {
    this._networkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkListInput() {
    return this._networkList.internalValue;
  }

  // ospf_1 - computed: false, optional: true, required: false
  private _ospf1 = new RouterOspfOspf1OutputReference(this, "ospf_1");
  public get ospf1() {
    return this._ospf1;
  }
  public putOspf1(value: RouterOspfOspf1) {
    this._ospf1.internalValue = value;
  }
  public resetOspf1() {
    this._ospf1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf1Input() {
    return this._ospf1.internalValue;
  }

  // overflow - computed: false, optional: true, required: false
  private _overflow = new RouterOspfOverflowOutputReference(this, "overflow");
  public get overflow() {
    return this._overflow;
  }
  public putOverflow(value: RouterOspfOverflow) {
    this._overflow.internalValue = value;
  }
  public resetOverflow() {
    this._overflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowInput() {
    return this._overflow.internalValue;
  }

  // passive_interface - computed: false, optional: true, required: false
  private _passiveInterface = new RouterOspfPassiveInterfaceOutputReference(this, "passive_interface");
  public get passiveInterface() {
    return this._passiveInterface;
  }
  public putPassiveInterface(value: RouterOspfPassiveInterface) {
    this._passiveInterface.internalValue = value;
  }
  public resetPassiveInterface() {
    this._passiveInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInterfaceInput() {
    return this._passiveInterface.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterOspfRedistributeOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterOspfRedistribute) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId = new RouterOspfRouterIdOutputReference(this, "router_id");
  public get routerId() {
    return this._routerId;
  }
  public putRouterId(value: RouterOspfRouterId) {
    this._routerId.internalValue = value;
  }
  public resetRouterId() {
    this._routerId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId.internalValue;
  }

  // summary_address_list - computed: false, optional: true, required: false
  private _summaryAddressList = new RouterOspfSummaryAddressListStructList(this, "summary_address_list", false);
  public get summaryAddressList() {
    return this._summaryAddressList;
  }
  public putSummaryAddressList(value: RouterOspfSummaryAddressListStruct[] | cdktf.IResolvable) {
    this._summaryAddressList.internalValue = value;
  }
  public resetSummaryAddressList() {
    this._summaryAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddressListInput() {
    return this._summaryAddressList.internalValue;
  }

  // timers - computed: false, optional: true, required: false
  private _timers = new RouterOspfTimersOutputReference(this, "timers");
  public get timers() {
    return this._timers;
  }
  public putTimers(value: RouterOspfTimers) {
    this._timers.internalValue = value;
  }
  public resetTimers() {
    this._timers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_cost_reference_bandwidth: cdktf.numberToTerraform(this._autoCostReferenceBandwidth),
      bfd_all_interfaces: cdktf.numberToTerraform(this._bfdAllInterfaces),
      default_metric: cdktf.numberToTerraform(this._defaultMetric),
      extern_lsa_equivalence_check: cdktf.numberToTerraform(this._externLsaEquivalenceCheck),
      id: cdktf.stringToTerraform(this._id),
      max_concurrent_dd: cdktf.numberToTerraform(this._maxConcurrentDd),
      maximum_area: cdktf.numberToTerraform(this._maximumArea),
      process_id: cdktf.numberToTerraform(this._processId),
      rfc1583_compatible: cdktf.numberToTerraform(this._rfc1583Compatible),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      area_list: cdktf.listMapper(routerOspfAreaListStructToTerraform, true)(this._areaList.internalValue),
      default_information: routerOspfDefaultInformationToTerraform(this._defaultInformation.internalValue),
      distance: routerOspfDistanceToTerraform(this._distance.internalValue),
      distribute_internal_list: cdktf.listMapper(routerOspfDistributeInternalListStructToTerraform, true)(this._distributeInternalList.internalValue),
      distribute_lists: cdktf.listMapper(routerOspfDistributeListsToTerraform, true)(this._distributeLists.internalValue),
      ha_standby_extra_cost: cdktf.listMapper(routerOspfHaStandbyExtraCostToTerraform, true)(this._haStandbyExtraCost.internalValue),
      host_list: cdktf.listMapper(routerOspfHostListStructToTerraform, true)(this._hostList.internalValue),
      log_adjacency_changes_cfg: routerOspfLogAdjacencyChangesCfgToTerraform(this._logAdjacencyChangesCfg.internalValue),
      neighbor_list: cdktf.listMapper(routerOspfNeighborListStructToTerraform, true)(this._neighborList.internalValue),
      network_list: cdktf.listMapper(routerOspfNetworkListStructToTerraform, true)(this._networkList.internalValue),
      ospf_1: routerOspfOspf1ToTerraform(this._ospf1.internalValue),
      overflow: routerOspfOverflowToTerraform(this._overflow.internalValue),
      passive_interface: routerOspfPassiveInterfaceToTerraform(this._passiveInterface.internalValue),
      redistribute: routerOspfRedistributeToTerraform(this._redistribute.internalValue),
      router_id: routerOspfRouterIdToTerraform(this._routerId.internalValue),
      summary_address_list: cdktf.listMapper(routerOspfSummaryAddressListStructToTerraform, true)(this._summaryAddressList.internalValue),
      timers: routerOspfTimersToTerraform(this._timers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_cost_reference_bandwidth: {
        value: cdktf.numberToHclTerraform(this._autoCostReferenceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_all_interfaces: {
        value: cdktf.numberToHclTerraform(this._bfdAllInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_metric: {
        value: cdktf.numberToHclTerraform(this._defaultMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extern_lsa_equivalence_check: {
        value: cdktf.numberToHclTerraform(this._externLsaEquivalenceCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_dd: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentDd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_area: {
        value: cdktf.numberToHclTerraform(this._maximumArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_id: {
        value: cdktf.numberToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rfc1583_compatible: {
        value: cdktf.numberToHclTerraform(this._rfc1583Compatible),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area_list: {
        value: cdktf.listMapperHcl(routerOspfAreaListStructToHclTerraform, true)(this._areaList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfAreaListStructList",
      },
      default_information: {
        value: routerOspfDefaultInformationToHclTerraform(this._defaultInformation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfDefaultInformationList",
      },
      distance: {
        value: routerOspfDistanceToHclTerraform(this._distance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfDistanceList",
      },
      distribute_internal_list: {
        value: cdktf.listMapperHcl(routerOspfDistributeInternalListStructToHclTerraform, true)(this._distributeInternalList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfDistributeInternalListStructList",
      },
      distribute_lists: {
        value: cdktf.listMapperHcl(routerOspfDistributeListsToHclTerraform, true)(this._distributeLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfDistributeListsList",
      },
      ha_standby_extra_cost: {
        value: cdktf.listMapperHcl(routerOspfHaStandbyExtraCostToHclTerraform, true)(this._haStandbyExtraCost.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfHaStandbyExtraCostList",
      },
      host_list: {
        value: cdktf.listMapperHcl(routerOspfHostListStructToHclTerraform, true)(this._hostList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfHostListStructList",
      },
      log_adjacency_changes_cfg: {
        value: routerOspfLogAdjacencyChangesCfgToHclTerraform(this._logAdjacencyChangesCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfLogAdjacencyChangesCfgList",
      },
      neighbor_list: {
        value: cdktf.listMapperHcl(routerOspfNeighborListStructToHclTerraform, true)(this._neighborList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfNeighborListStructList",
      },
      network_list: {
        value: cdktf.listMapperHcl(routerOspfNetworkListStructToHclTerraform, true)(this._networkList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfNetworkListStructList",
      },
      ospf_1: {
        value: routerOspfOspf1ToHclTerraform(this._ospf1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfOspf1List",
      },
      overflow: {
        value: routerOspfOverflowToHclTerraform(this._overflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfOverflowList",
      },
      passive_interface: {
        value: routerOspfPassiveInterfaceToHclTerraform(this._passiveInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfPassiveInterfaceList",
      },
      redistribute: {
        value: routerOspfRedistributeToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfRedistributeList",
      },
      router_id: {
        value: routerOspfRouterIdToHclTerraform(this._routerId.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfRouterIdList",
      },
      summary_address_list: {
        value: cdktf.listMapperHcl(routerOspfSummaryAddressListStructToHclTerraform, true)(this._summaryAddressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfSummaryAddressListStructList",
      },
      timers: {
        value: routerOspfTimersToHclTerraform(this._timers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfTimersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
