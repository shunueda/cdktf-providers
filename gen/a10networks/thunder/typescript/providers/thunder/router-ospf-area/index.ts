// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspfAreaConfig extends cdktf.TerraformMetaArguments {
  /**
  * OSPF area ID in IP address format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#area_ipv4 RouterOspfArea#area_ipv4}
  */
  readonly areaIpv4: string;
  /**
  * OSPF area ID as a decimal value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#area_num RouterOspfArea#area_num}
  */
  readonly areaNum: number;
  /**
  * Set the summary-default cost of a NSSA or stub area (Stub's advertised default summary cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#default_cost RouterOspfArea#default_cost}
  */
  readonly defaultCost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#id RouterOspfArea#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ProcessId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#process_id RouterOspfArea#process_id}
  */
  readonly processId: string;
  /**
  * 'default': Set default shortcutting behavior; 'disable': Disable shortcutting through the area; 'enable': Enable shortcutting through the area;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#shortcut RouterOspfArea#shortcut}
  */
  readonly shortcut?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#uuid RouterOspfArea#uuid}
  */
  readonly uuid?: string;
  /**
  * auth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#auth_cfg RouterOspfArea#auth_cfg}
  */
  readonly authCfg?: RouterOspfAreaAuthCfg;
  /**
  * filter_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#filter_lists RouterOspfArea#filter_lists}
  */
  readonly filterLists?: RouterOspfAreaFilterLists[] | cdktf.IResolvable;
  /**
  * nssa_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#nssa_cfg RouterOspfArea#nssa_cfg}
  */
  readonly nssaCfg?: RouterOspfAreaNssaCfg;
  /**
  * range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#range_list RouterOspfArea#range_list}
  */
  readonly rangeList?: RouterOspfAreaRangeListStruct[] | cdktf.IResolvable;
  /**
  * stub_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#stub_cfg RouterOspfArea#stub_cfg}
  */
  readonly stubCfg?: RouterOspfAreaStubCfg;
  /**
  * virtual_link_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#virtual_link_list RouterOspfArea#virtual_link_list}
  */
  readonly virtualLinkList?: RouterOspfAreaVirtualLinkListStruct[] | cdktf.IResolvable;
}
export interface RouterOspfAreaAuthCfg {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#authentication RouterOspfArea#authentication}
  */
  readonly authentication?: number;
  /**
  * Use message-digest authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#message_digest RouterOspfArea#message_digest}
  */
  readonly messageDigest?: number;
}

export function routerOspfAreaAuthCfgToTerraform(struct?: RouterOspfAreaAuthCfgOutputReference | RouterOspfAreaAuthCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    message_digest: cdktf.numberToTerraform(struct!.messageDigest),
  }
}


export function routerOspfAreaAuthCfgToHclTerraform(struct?: RouterOspfAreaAuthCfgOutputReference | RouterOspfAreaAuthCfg): any {
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

export class RouterOspfAreaAuthCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfAreaAuthCfg | undefined {
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

  public set internalValue(value: RouterOspfAreaAuthCfg | undefined) {
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
export interface RouterOspfAreaFilterLists {
  /**
  * 'in': Filter networks sent to this area; 'out': Filter networks sent from this area;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#acl_direction RouterOspfArea#acl_direction}
  */
  readonly aclDirection?: string;
  /**
  * Filter networks by access-list (Name of an access-list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#acl_name RouterOspfArea#acl_name}
  */
  readonly aclName?: string;
  /**
  * Filter networks between OSPF areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#filter_list RouterOspfArea#filter_list}
  */
  readonly filterList?: number;
  /**
  * 'in': Filter networks sent to this area; 'out': Filter networks sent from this area;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#plist_direction RouterOspfArea#plist_direction}
  */
  readonly plistDirection?: string;
  /**
  * Filter networks by prefix-list (Name of an IP prefix-list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#plist_name RouterOspfArea#plist_name}
  */
  readonly plistName?: string;
}

export function routerOspfAreaFilterListsToTerraform(struct?: RouterOspfAreaFilterLists | cdktf.IResolvable): any {
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


export function routerOspfAreaFilterListsToHclTerraform(struct?: RouterOspfAreaFilterLists | cdktf.IResolvable): any {
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

export class RouterOspfAreaFilterListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaFilterLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterOspfAreaFilterLists | cdktf.IResolvable | undefined) {
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

export class RouterOspfAreaFilterListsList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaFilterLists[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaFilterListsOutputReference {
    return new RouterOspfAreaFilterListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfAreaNssaCfg {
  /**
  * Originate Type 7 default into NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#default_information_originate RouterOspfArea#default_information_originate}
  */
  readonly defaultInformationOriginate?: number;
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#metric RouterOspfArea#metric}
  */
  readonly metric?: number;
  /**
  * OSPF metric type (OSPF metric type for default routes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#metric_type RouterOspfArea#metric_type}
  */
  readonly metricType?: number;
  /**
  * No redistribution into this NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#no_redistribution RouterOspfArea#no_redistribution}
  */
  readonly noRedistribution?: number;
  /**
  * Do not send summary LSA into NSSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#no_summary RouterOspfArea#no_summary}
  */
  readonly noSummary?: number;
  /**
  * Specify a NSSA area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#nssa RouterOspfArea#nssa}
  */
  readonly nssa?: number;
  /**
  * 'always': Translate always; 'candidate': Candidate for translator (default); 'never': Do not translate;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#translator_role RouterOspfArea#translator_role}
  */
  readonly translatorRole?: string;
}

export function routerOspfAreaNssaCfgToTerraform(struct?: RouterOspfAreaNssaCfgOutputReference | RouterOspfAreaNssaCfg): any {
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


export function routerOspfAreaNssaCfgToHclTerraform(struct?: RouterOspfAreaNssaCfgOutputReference | RouterOspfAreaNssaCfg): any {
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

export class RouterOspfAreaNssaCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfAreaNssaCfg | undefined {
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

  public set internalValue(value: RouterOspfAreaNssaCfg | undefined) {
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
export interface RouterOspfAreaRangeListStruct {
  /**
  * Area range for IPv4 prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#area_range_prefix RouterOspfArea#area_range_prefix}
  */
  readonly areaRangePrefix?: string;
  /**
  * 'advertise': Advertise this range (default); 'not-advertise': DoNotAdvertise this range;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#option RouterOspfArea#option}
  */
  readonly option?: string;
}

export function routerOspfAreaRangeListStructToTerraform(struct?: RouterOspfAreaRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_range_prefix: cdktf.stringToTerraform(struct!.areaRangePrefix),
    option: cdktf.stringToTerraform(struct!.option),
  }
}


export function routerOspfAreaRangeListStructToHclTerraform(struct?: RouterOspfAreaRangeListStruct | cdktf.IResolvable): any {
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

export class RouterOspfAreaRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaRangeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterOspfAreaRangeListStruct | cdktf.IResolvable | undefined) {
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

export class RouterOspfAreaRangeListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaRangeListStructOutputReference {
    return new RouterOspfAreaRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfAreaStubCfg {
  /**
  * Do not inject inter-area routes into area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#no_summary RouterOspfArea#no_summary}
  */
  readonly noSummary?: number;
  /**
  * Configure OSPF area as stub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#stub RouterOspfArea#stub}
  */
  readonly stub?: number;
}

export function routerOspfAreaStubCfgToTerraform(struct?: RouterOspfAreaStubCfgOutputReference | RouterOspfAreaStubCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_summary: cdktf.numberToTerraform(struct!.noSummary),
    stub: cdktf.numberToTerraform(struct!.stub),
  }
}


export function routerOspfAreaStubCfgToHclTerraform(struct?: RouterOspfAreaStubCfgOutputReference | RouterOspfAreaStubCfg): any {
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

export class RouterOspfAreaStubCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterOspfAreaStubCfg | undefined {
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

  public set internalValue(value: RouterOspfAreaStubCfg | undefined) {
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
export interface RouterOspfAreaVirtualLinkListStruct {
  /**
  * Set authentication key (Authentication key (8 chars))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#authentication_key RouterOspfArea#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#bfd RouterOspfArea#bfd}
  */
  readonly bfd?: number;
  /**
  * Dead router detection time (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#dead_interval RouterOspfArea#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Hello packet interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#hello_interval RouterOspfArea#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Use MD5 algorithm (Authentication key (16 chars))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#md5 RouterOspfArea#md5}
  */
  readonly md5?: string;
  /**
  * Set message digest key (Key ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#message_digest_key RouterOspfArea#message_digest_key}
  */
  readonly messageDigestKey?: number;
  /**
  * LSA retransmit interval (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#retransmit_interval RouterOspfArea#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * LSA transmission delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#transmit_delay RouterOspfArea#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use null authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#virtual_link_auth_type RouterOspfArea#virtual_link_auth_type}
  */
  readonly virtualLinkAuthType?: string;
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#virtual_link_authentication RouterOspfArea#virtual_link_authentication}
  */
  readonly virtualLinkAuthentication?: number;
  /**
  * ID (IP addr) associated with virtual link neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#virtual_link_ip_addr RouterOspfArea#virtual_link_ip_addr}
  */
  readonly virtualLinkIpAddr?: string;
}

export function routerOspfAreaVirtualLinkListStructToTerraform(struct?: RouterOspfAreaVirtualLinkListStruct | cdktf.IResolvable): any {
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


export function routerOspfAreaVirtualLinkListStructToHclTerraform(struct?: RouterOspfAreaVirtualLinkListStruct | cdktf.IResolvable): any {
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

export class RouterOspfAreaVirtualLinkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfAreaVirtualLinkListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterOspfAreaVirtualLinkListStruct | cdktf.IResolvable | undefined) {
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

export class RouterOspfAreaVirtualLinkListStructList extends cdktf.ComplexList {
  public internalValue? : RouterOspfAreaVirtualLinkListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfAreaVirtualLinkListStructOutputReference {
    return new RouterOspfAreaVirtualLinkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area thunder_router_ospf_area}
*/
export class RouterOspfArea extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_ospf_area";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspfArea resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspfArea to import
  * @param importFromId The id of the existing RouterOspfArea that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspfArea to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_ospf_area", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ospf_area thunder_router_ospf_area} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspfAreaConfig
  */
  public constructor(scope: Construct, id: string, config: RouterOspfAreaConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_ospf_area',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areaIpv4 = config.areaIpv4;
    this._areaNum = config.areaNum;
    this._defaultCost = config.defaultCost;
    this._id = config.id;
    this._processId = config.processId;
    this._shortcut = config.shortcut;
    this._uuid = config.uuid;
    this._authCfg.internalValue = config.authCfg;
    this._filterLists.internalValue = config.filterLists;
    this._nssaCfg.internalValue = config.nssaCfg;
    this._rangeList.internalValue = config.rangeList;
    this._stubCfg.internalValue = config.stubCfg;
    this._virtualLinkList.internalValue = config.virtualLinkList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
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
  private _authCfg = new RouterOspfAreaAuthCfgOutputReference(this, "auth_cfg");
  public get authCfg() {
    return this._authCfg;
  }
  public putAuthCfg(value: RouterOspfAreaAuthCfg) {
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
  private _filterLists = new RouterOspfAreaFilterListsList(this, "filter_lists", false);
  public get filterLists() {
    return this._filterLists;
  }
  public putFilterLists(value: RouterOspfAreaFilterLists[] | cdktf.IResolvable) {
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
  private _nssaCfg = new RouterOspfAreaNssaCfgOutputReference(this, "nssa_cfg");
  public get nssaCfg() {
    return this._nssaCfg;
  }
  public putNssaCfg(value: RouterOspfAreaNssaCfg) {
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
  private _rangeList = new RouterOspfAreaRangeListStructList(this, "range_list", false);
  public get rangeList() {
    return this._rangeList;
  }
  public putRangeList(value: RouterOspfAreaRangeListStruct[] | cdktf.IResolvable) {
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
  private _stubCfg = new RouterOspfAreaStubCfgOutputReference(this, "stub_cfg");
  public get stubCfg() {
    return this._stubCfg;
  }
  public putStubCfg(value: RouterOspfAreaStubCfg) {
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
  private _virtualLinkList = new RouterOspfAreaVirtualLinkListStructList(this, "virtual_link_list", false);
  public get virtualLinkList() {
    return this._virtualLinkList;
  }
  public putVirtualLinkList(value: RouterOspfAreaVirtualLinkListStruct[] | cdktf.IResolvable) {
    this._virtualLinkList.internalValue = value;
  }
  public resetVirtualLinkList() {
    this._virtualLinkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkListInput() {
    return this._virtualLinkList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_ipv4: cdktf.stringToTerraform(this._areaIpv4),
      area_num: cdktf.numberToTerraform(this._areaNum),
      default_cost: cdktf.numberToTerraform(this._defaultCost),
      id: cdktf.stringToTerraform(this._id),
      process_id: cdktf.stringToTerraform(this._processId),
      shortcut: cdktf.stringToTerraform(this._shortcut),
      uuid: cdktf.stringToTerraform(this._uuid),
      auth_cfg: routerOspfAreaAuthCfgToTerraform(this._authCfg.internalValue),
      filter_lists: cdktf.listMapper(routerOspfAreaFilterListsToTerraform, true)(this._filterLists.internalValue),
      nssa_cfg: routerOspfAreaNssaCfgToTerraform(this._nssaCfg.internalValue),
      range_list: cdktf.listMapper(routerOspfAreaRangeListStructToTerraform, true)(this._rangeList.internalValue),
      stub_cfg: routerOspfAreaStubCfgToTerraform(this._stubCfg.internalValue),
      virtual_link_list: cdktf.listMapper(routerOspfAreaVirtualLinkListStructToTerraform, true)(this._virtualLinkList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_ipv4: {
        value: cdktf.stringToHclTerraform(this._areaIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area_num: {
        value: cdktf.numberToHclTerraform(this._areaNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_cost: {
        value: cdktf.numberToHclTerraform(this._defaultCost),
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
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shortcut: {
        value: cdktf.stringToHclTerraform(this._shortcut),
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
      auth_cfg: {
        value: routerOspfAreaAuthCfgToHclTerraform(this._authCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfAreaAuthCfgList",
      },
      filter_lists: {
        value: cdktf.listMapperHcl(routerOspfAreaFilterListsToHclTerraform, true)(this._filterLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfAreaFilterListsList",
      },
      nssa_cfg: {
        value: routerOspfAreaNssaCfgToHclTerraform(this._nssaCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfAreaNssaCfgList",
      },
      range_list: {
        value: cdktf.listMapperHcl(routerOspfAreaRangeListStructToHclTerraform, true)(this._rangeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfAreaRangeListStructList",
      },
      stub_cfg: {
        value: routerOspfAreaStubCfgToHclTerraform(this._stubCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfAreaStubCfgList",
      },
      virtual_link_list: {
        value: cdktf.listMapperHcl(routerOspfAreaVirtualLinkListStructToHclTerraform, true)(this._virtualLinkList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfAreaVirtualLinkListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
