// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OspfAreaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Area ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#area_id OspfArea#area_id}
  */
  readonly areaId: string;
  /**
  * Configure context identifier in support of edge protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#context_identifier OspfArea#context_identifier}
  */
  readonly contextIdentifier?: string[];
  /**
  * Export policy for Inter Area Prefix LSAs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#inter_area_prefix_export OspfArea#inter_area_prefix_export}
  */
  readonly interAreaPrefixExport?: string[];
  /**
  * Import policy for Inter Area Prefix LSAs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#inter_area_prefix_import OspfArea#inter_area_prefix_import}
  */
  readonly interAreaPrefixImport?: string[];
  /**
  * Export policy for Type 3 Summary LSAs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#network_summary_export OspfArea#network_summary_export}
  */
  readonly networkSummaryExport?: string[];
  /**
  * Import policy for Type 3 Summary LSAs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#network_summary_import OspfArea#network_summary_import}
  */
  readonly networkSummaryImport?: string[];
  /**
  * Disable context identifier advertisements in this area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#no_context_identifier_advertisement OspfArea#no_context_identifier_advertisement}
  */
  readonly noContextIdentifierAdvertisement?: boolean | cdktf.IResolvable;
  /**
  * OSPFv3 realm configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#realm OspfArea#realm}
  */
  readonly realm?: string;
  /**
  * Routing instance for ospf area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#routing_instance OspfArea#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Version of ospf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#version OspfArea#version}
  */
  readonly version?: string;
  /**
  * area_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#area_range OspfArea#area_range}
  */
  readonly areaRange?: OspfAreaAreaRange[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#interface OspfArea#interface}
  */
  readonly interface?: OspfAreaInterface[] | cdktf.IResolvable;
  /**
  * nssa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#nssa OspfArea#nssa}
  */
  readonly nssa?: OspfAreaNssa;
  /**
  * stub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#stub OspfArea#stub}
  */
  readonly stub?: OspfAreaStub;
  /**
  * virtual_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#virtual_link OspfArea#virtual_link}
  */
  readonly virtualLink?: OspfAreaVirtualLink[] | cdktf.IResolvable;
}
export interface OspfAreaAreaRange {
  /**
  * Enforce exact match for advertisement of this area range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#exact OspfArea#exact}
  */
  readonly exact?: boolean | cdktf.IResolvable;
  /**
  * Override the dynamic metric for this area-range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#override_metric OspfArea#override_metric}
  */
  readonly overrideMetric?: number;
  /**
  * Range to summarize routes in this area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#range OspfArea#range}
  */
  readonly range: string;
  /**
  * Restrict advertisement of this area range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#restrict OspfArea#restrict}
  */
  readonly restrict?: boolean | cdktf.IResolvable;
}

export function ospfAreaAreaRangeToTerraform(struct?: OspfAreaAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.booleanToTerraform(struct!.exact),
    override_metric: cdktf.numberToTerraform(struct!.overrideMetric),
    range: cdktf.stringToTerraform(struct!.range),
    restrict: cdktf.booleanToTerraform(struct!.restrict),
  }
}


export function ospfAreaAreaRangeToHclTerraform(struct?: OspfAreaAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.booleanToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_metric: {
      value: cdktf.numberToHclTerraform(struct!.overrideMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict: {
      value: cdktf.booleanToHclTerraform(struct!.restrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaAreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfAreaAreaRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._overrideMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideMetric = this._overrideMetric;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._restrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrict = this._restrict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaAreaRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._overrideMetric = undefined;
      this._range = undefined;
      this._restrict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._overrideMetric = value.overrideMetric;
      this._range = value.range;
      this._restrict = value.restrict;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: boolean | cdktf.IResolvable; 
  public get exact() {
    return this.getBooleanAttribute('exact');
  }
  public set exact(value: boolean | cdktf.IResolvable) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // override_metric - computed: false, optional: true, required: false
  private _overrideMetric?: number; 
  public get overrideMetric() {
    return this.getNumberAttribute('override_metric');
  }
  public set overrideMetric(value: number) {
    this._overrideMetric = value;
  }
  public resetOverrideMetric() {
    this._overrideMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideMetricInput() {
    return this._overrideMetric;
  }

  // range - computed: false, optional: false, required: true
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // restrict - computed: false, optional: true, required: false
  private _restrict?: boolean | cdktf.IResolvable; 
  public get restrict() {
    return this.getBooleanAttribute('restrict');
  }
  public set restrict(value: boolean | cdktf.IResolvable) {
    this._restrict = value;
  }
  public resetRestrict() {
    this._restrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictInput() {
    return this._restrict;
  }
}

export class OspfAreaAreaRangeList extends cdktf.ComplexList {
  public internalValue? : OspfAreaAreaRange[] | cdktf.IResolvable

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
  public get(index: number): OspfAreaAreaRangeOutputReference {
    return new OspfAreaAreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfAreaInterfaceAuthenticationMd5 {
  /**
  * MD5 authentication key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#key OspfArea#key}
  */
  readonly key: string;
  /**
  * Key ID for MD5 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#key_id OspfArea#key_id}
  */
  readonly keyId: number;
  /**
  * Start time for key transmission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#start_time OspfArea#start_time}
  */
  readonly startTime?: string;
}

export function ospfAreaInterfaceAuthenticationMd5ToTerraform(struct?: OspfAreaInterfaceAuthenticationMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    key_id: cdktf.numberToTerraform(struct!.keyId),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function ospfAreaInterfaceAuthenticationMd5ToHclTerraform(struct?: OspfAreaInterfaceAuthenticationMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaInterfaceAuthenticationMd5OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfAreaInterfaceAuthenticationMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaInterfaceAuthenticationMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._keyId = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._keyId = value.keyId;
      this._startTime = value.startTime;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class OspfAreaInterfaceAuthenticationMd5List extends cdktf.ComplexList {
  public internalValue? : OspfAreaInterfaceAuthenticationMd5[] | cdktf.IResolvable

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
  public get(index: number): OspfAreaInterfaceAuthenticationMd5OutputReference {
    return new OspfAreaInterfaceAuthenticationMd5OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfAreaInterfaceBandwidthBasedMetrics {
  /**
  * Bandwidth threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#bandwidth OspfArea#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Metric associated with specified bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#metric OspfArea#metric}
  */
  readonly metric: number;
}

export function ospfAreaInterfaceBandwidthBasedMetricsToTerraform(struct?: OspfAreaInterfaceBandwidthBasedMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.stringToTerraform(struct!.bandwidth),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function ospfAreaInterfaceBandwidthBasedMetricsToHclTerraform(struct?: OspfAreaInterfaceBandwidthBasedMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaInterfaceBandwidthBasedMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfAreaInterfaceBandwidthBasedMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaInterfaceBandwidthBasedMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._metric = value.metric;
    }
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}

export class OspfAreaInterfaceBandwidthBasedMetricsList extends cdktf.ComplexList {
  public internalValue? : OspfAreaInterfaceBandwidthBasedMetrics[] | cdktf.IResolvable

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
  public get(index: number): OspfAreaInterfaceBandwidthBasedMetricsOutputReference {
    return new OspfAreaInterfaceBandwidthBasedMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfAreaInterfaceBfdLivenessDetection {
  /**
  * Authentication algorithm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#authentication_algorithm OspfArea#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Authentication key chain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#authentication_key_chain OspfArea#authentication_key_chain}
  */
  readonly authenticationKeyChain?: string;
  /**
  * Verify authentication only if authentication is negotiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#authentication_loose_check OspfArea#authentication_loose_check}
  */
  readonly authenticationLooseCheck?: boolean | cdktf.IResolvable;
  /**
  * High detection-time triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#detection_time_threshold OspfArea#detection_time_threshold}
  */
  readonly detectionTimeThreshold?: number;
  /**
  * Setup BFD sessions only to Full neighbors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#full_neighbors_only OspfArea#full_neighbors_only}
  */
  readonly fullNeighborsOnly?: boolean | cdktf.IResolvable;
  /**
  * Time to hold the session-UP notification to the client (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#holddown_interval OspfArea#holddown_interval}
  */
  readonly holddownInterval?: number;
  /**
  * Minimum transmit and receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#minimum_interval OspfArea#minimum_interval}
  */
  readonly minimumInterval?: number;
  /**
  * Minimum receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#minimum_receive_interval OspfArea#minimum_receive_interval}
  */
  readonly minimumReceiveInterval?: number;
  /**
  * Detection time multiplier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#multiplier OspfArea#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Disable adaptation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#no_adaptation OspfArea#no_adaptation}
  */
  readonly noAdaptation?: boolean | cdktf.IResolvable;
  /**
  * Minimum transmit interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#transmit_interval_minimum_interval OspfArea#transmit_interval_minimum_interval}
  */
  readonly transmitIntervalMinimumInterval?: number;
  /**
  * High transmit interval triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#transmit_interval_threshold OspfArea#transmit_interval_threshold}
  */
  readonly transmitIntervalThreshold?: number;
  /**
  * BFD protocol version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#version OspfArea#version}
  */
  readonly version?: string;
}

export function ospfAreaInterfaceBfdLivenessDetectionToTerraform(struct?: OspfAreaInterfaceBfdLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_algorithm: cdktf.stringToTerraform(struct!.authenticationAlgorithm),
    authentication_key_chain: cdktf.stringToTerraform(struct!.authenticationKeyChain),
    authentication_loose_check: cdktf.booleanToTerraform(struct!.authenticationLooseCheck),
    detection_time_threshold: cdktf.numberToTerraform(struct!.detectionTimeThreshold),
    full_neighbors_only: cdktf.booleanToTerraform(struct!.fullNeighborsOnly),
    holddown_interval: cdktf.numberToTerraform(struct!.holddownInterval),
    minimum_interval: cdktf.numberToTerraform(struct!.minimumInterval),
    minimum_receive_interval: cdktf.numberToTerraform(struct!.minimumReceiveInterval),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    no_adaptation: cdktf.booleanToTerraform(struct!.noAdaptation),
    transmit_interval_minimum_interval: cdktf.numberToTerraform(struct!.transmitIntervalMinimumInterval),
    transmit_interval_threshold: cdktf.numberToTerraform(struct!.transmitIntervalThreshold),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ospfAreaInterfaceBfdLivenessDetectionToHclTerraform(struct?: OspfAreaInterfaceBfdLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key_chain: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKeyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_loose_check: {
      value: cdktf.booleanToHclTerraform(struct!.authenticationLooseCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detection_time_threshold: {
      value: cdktf.numberToHclTerraform(struct!.detectionTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_neighbors_only: {
      value: cdktf.booleanToHclTerraform(struct!.fullNeighborsOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    holddown_interval: {
      value: cdktf.numberToHclTerraform(struct!.holddownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.minimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_receive_interval: {
      value: cdktf.numberToHclTerraform(struct!.minimumReceiveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_adaptation: {
      value: cdktf.booleanToHclTerraform(struct!.noAdaptation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transmit_interval_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_interval_threshold: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaInterfaceBfdLivenessDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OspfAreaInterfaceBfdLivenessDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationAlgorithm = this._authenticationAlgorithm;
    }
    if (this._authenticationKeyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyChain = this._authenticationKeyChain;
    }
    if (this._authenticationLooseCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationLooseCheck = this._authenticationLooseCheck;
    }
    if (this._detectionTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionTimeThreshold = this._detectionTimeThreshold;
    }
    if (this._fullNeighborsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullNeighborsOnly = this._fullNeighborsOnly;
    }
    if (this._holddownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.holddownInterval = this._holddownInterval;
    }
    if (this._minimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInterval = this._minimumInterval;
    }
    if (this._minimumReceiveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumReceiveInterval = this._minimumReceiveInterval;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._noAdaptation !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAdaptation = this._noAdaptation;
    }
    if (this._transmitIntervalMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalMinimumInterval = this._transmitIntervalMinimumInterval;
    }
    if (this._transmitIntervalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalThreshold = this._transmitIntervalThreshold;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaInterfaceBfdLivenessDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationAlgorithm = undefined;
      this._authenticationKeyChain = undefined;
      this._authenticationLooseCheck = undefined;
      this._detectionTimeThreshold = undefined;
      this._fullNeighborsOnly = undefined;
      this._holddownInterval = undefined;
      this._minimumInterval = undefined;
      this._minimumReceiveInterval = undefined;
      this._multiplier = undefined;
      this._noAdaptation = undefined;
      this._transmitIntervalMinimumInterval = undefined;
      this._transmitIntervalThreshold = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationAlgorithm = value.authenticationAlgorithm;
      this._authenticationKeyChain = value.authenticationKeyChain;
      this._authenticationLooseCheck = value.authenticationLooseCheck;
      this._detectionTimeThreshold = value.detectionTimeThreshold;
      this._fullNeighborsOnly = value.fullNeighborsOnly;
      this._holddownInterval = value.holddownInterval;
      this._minimumInterval = value.minimumInterval;
      this._minimumReceiveInterval = value.minimumReceiveInterval;
      this._multiplier = value.multiplier;
      this._noAdaptation = value.noAdaptation;
      this._transmitIntervalMinimumInterval = value.transmitIntervalMinimumInterval;
      this._transmitIntervalThreshold = value.transmitIntervalThreshold;
      this._version = value.version;
    }
  }

  // authentication_algorithm - computed: false, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // authentication_key_chain - computed: false, optional: true, required: false
  private _authenticationKeyChain?: string; 
  public get authenticationKeyChain() {
    return this.getStringAttribute('authentication_key_chain');
  }
  public set authenticationKeyChain(value: string) {
    this._authenticationKeyChain = value;
  }
  public resetAuthenticationKeyChain() {
    this._authenticationKeyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyChainInput() {
    return this._authenticationKeyChain;
  }

  // authentication_loose_check - computed: false, optional: true, required: false
  private _authenticationLooseCheck?: boolean | cdktf.IResolvable; 
  public get authenticationLooseCheck() {
    return this.getBooleanAttribute('authentication_loose_check');
  }
  public set authenticationLooseCheck(value: boolean | cdktf.IResolvable) {
    this._authenticationLooseCheck = value;
  }
  public resetAuthenticationLooseCheck() {
    this._authenticationLooseCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationLooseCheckInput() {
    return this._authenticationLooseCheck;
  }

  // detection_time_threshold - computed: false, optional: true, required: false
  private _detectionTimeThreshold?: number; 
  public get detectionTimeThreshold() {
    return this.getNumberAttribute('detection_time_threshold');
  }
  public set detectionTimeThreshold(value: number) {
    this._detectionTimeThreshold = value;
  }
  public resetDetectionTimeThreshold() {
    this._detectionTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionTimeThresholdInput() {
    return this._detectionTimeThreshold;
  }

  // full_neighbors_only - computed: false, optional: true, required: false
  private _fullNeighborsOnly?: boolean | cdktf.IResolvable; 
  public get fullNeighborsOnly() {
    return this.getBooleanAttribute('full_neighbors_only');
  }
  public set fullNeighborsOnly(value: boolean | cdktf.IResolvable) {
    this._fullNeighborsOnly = value;
  }
  public resetFullNeighborsOnly() {
    this._fullNeighborsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNeighborsOnlyInput() {
    return this._fullNeighborsOnly;
  }

  // holddown_interval - computed: false, optional: true, required: false
  private _holddownInterval?: number; 
  public get holddownInterval() {
    return this.getNumberAttribute('holddown_interval');
  }
  public set holddownInterval(value: number) {
    this._holddownInterval = value;
  }
  public resetHolddownInterval() {
    this._holddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownIntervalInput() {
    return this._holddownInterval;
  }

  // minimum_interval - computed: false, optional: true, required: false
  private _minimumInterval?: number; 
  public get minimumInterval() {
    return this.getNumberAttribute('minimum_interval');
  }
  public set minimumInterval(value: number) {
    this._minimumInterval = value;
  }
  public resetMinimumInterval() {
    this._minimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumIntervalInput() {
    return this._minimumInterval;
  }

  // minimum_receive_interval - computed: false, optional: true, required: false
  private _minimumReceiveInterval?: number; 
  public get minimumReceiveInterval() {
    return this.getNumberAttribute('minimum_receive_interval');
  }
  public set minimumReceiveInterval(value: number) {
    this._minimumReceiveInterval = value;
  }
  public resetMinimumReceiveInterval() {
    this._minimumReceiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumReceiveIntervalInput() {
    return this._minimumReceiveInterval;
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

  // no_adaptation - computed: false, optional: true, required: false
  private _noAdaptation?: boolean | cdktf.IResolvable; 
  public get noAdaptation() {
    return this.getBooleanAttribute('no_adaptation');
  }
  public set noAdaptation(value: boolean | cdktf.IResolvable) {
    this._noAdaptation = value;
  }
  public resetNoAdaptation() {
    this._noAdaptation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdaptationInput() {
    return this._noAdaptation;
  }

  // transmit_interval_minimum_interval - computed: false, optional: true, required: false
  private _transmitIntervalMinimumInterval?: number; 
  public get transmitIntervalMinimumInterval() {
    return this.getNumberAttribute('transmit_interval_minimum_interval');
  }
  public set transmitIntervalMinimumInterval(value: number) {
    this._transmitIntervalMinimumInterval = value;
  }
  public resetTransmitIntervalMinimumInterval() {
    this._transmitIntervalMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalMinimumIntervalInput() {
    return this._transmitIntervalMinimumInterval;
  }

  // transmit_interval_threshold - computed: false, optional: true, required: false
  private _transmitIntervalThreshold?: number; 
  public get transmitIntervalThreshold() {
    return this.getNumberAttribute('transmit_interval_threshold');
  }
  public set transmitIntervalThreshold(value: number) {
    this._transmitIntervalThreshold = value;
  }
  public resetTransmitIntervalThreshold() {
    this._transmitIntervalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalThresholdInput() {
    return this._transmitIntervalThreshold;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface OspfAreaInterfaceNeighbor {
  /**
  * Address of neighbor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#address OspfArea#address}
  */
  readonly address: string;
  /**
  * Eligible to be DR on an NBMA network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#eligible OspfArea#eligible}
  */
  readonly eligible?: boolean | cdktf.IResolvable;
}

export function ospfAreaInterfaceNeighborToTerraform(struct?: OspfAreaInterfaceNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    eligible: cdktf.booleanToTerraform(struct!.eligible),
  }
}


export function ospfAreaInterfaceNeighborToHclTerraform(struct?: OspfAreaInterfaceNeighbor | cdktf.IResolvable): any {
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
    eligible: {
      value: cdktf.booleanToHclTerraform(struct!.eligible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaInterfaceNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfAreaInterfaceNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._eligible !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligible = this._eligible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaInterfaceNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._eligible = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._eligible = value.eligible;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // eligible - computed: false, optional: true, required: false
  private _eligible?: boolean | cdktf.IResolvable; 
  public get eligible() {
    return this.getBooleanAttribute('eligible');
  }
  public set eligible(value: boolean | cdktf.IResolvable) {
    this._eligible = value;
  }
  public resetEligible() {
    this._eligible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleInput() {
    return this._eligible;
  }
}

export class OspfAreaInterfaceNeighborList extends cdktf.ComplexList {
  public internalValue? : OspfAreaInterfaceNeighbor[] | cdktf.IResolvable

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
  public get(index: number): OspfAreaInterfaceNeighborOutputReference {
    return new OspfAreaInterfaceNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfAreaInterface {
  /**
  * Authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#authentication_simple_password OspfArea#authentication_simple_password}
  */
  readonly authenticationSimplePassword?: string;
  /**
  * Dead interval (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#dead_interval OspfArea#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Interface functions as a demand circuit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#demand_circuit OspfArea#demand_circuit}
  */
  readonly demandCircuit?: boolean | cdktf.IResolvable;
  /**
  * Disable OSPF on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#disable OspfArea#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Learn neighbors dynamically on a p2mp interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#dynamic_neighbors OspfArea#dynamic_neighbors}
  */
  readonly dynamicNeighbors?: boolean | cdktf.IResolvable;
  /**
  * Enable flood reduction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#flood_reduction OspfArea#flood_reduction}
  */
  readonly floodReduction?: boolean | cdktf.IResolvable;
  /**
  * Hello interval (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#hello_interval OspfArea#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Type of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#interface_type OspfArea#interface_type}
  */
  readonly interfaceType?: string;
  /**
  * IPSec security association name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#ipsec_sa OspfArea#ipsec_sa}
  */
  readonly ipsecSa?: string;
  /**
  * Type to define adjacency SID is eligible for protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#ipv4_adjacency_segment_protected_type OspfArea#ipv4_adjacency_segment_protected_type}
  */
  readonly ipv4AdjacencySegmentProtectedType?: string;
  /**
  * Value for index or label to define adjacency SID is eligible for protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#ipv4_adjacency_segment_protected_value OspfArea#ipv4_adjacency_segment_protected_value}
  */
  readonly ipv4AdjacencySegmentProtectedValue?: string;
  /**
  * Type to define adjacency SID uneligible for protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#ipv4_adjacency_segment_unprotected_type OspfArea#ipv4_adjacency_segment_unprotected_type}
  */
  readonly ipv4AdjacencySegmentUnprotectedType?: string;
  /**
  * Value for index or label to define adjacency SID uneligible for protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#ipv4_adjacency_segment_unprotected_value OspfArea#ipv4_adjacency_segment_unprotected_value}
  */
  readonly ipv4AdjacencySegmentUnprotectedValue?: string;
  /**
  * Protect interface from link faults only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#link_protection OspfArea#link_protection}
  */
  readonly linkProtection?: boolean | cdktf.IResolvable;
  /**
  * Interface metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#metric OspfArea#metric}
  */
  readonly metric?: number;
  /**
  * Maximum OSPF packet size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#mtu OspfArea#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of interface or interface-range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#name OspfArea#name}
  */
  readonly name: string;
  /**
  * Do not advertise an adjacency segment for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#no_advertise_adjacency_segment OspfArea#no_advertise_adjacency_segment}
  */
  readonly noAdvertiseAdjacencySegment?: boolean | cdktf.IResolvable;
  /**
  * Not eligible to backup traffic from protected interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#no_eligible_backup OspfArea#no_eligible_backup}
  */
  readonly noEligibleBackup?: boolean | cdktf.IResolvable;
  /**
  * Not eligible for Remote-LFA backup traffic from protected interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#no_eligible_remote_backup OspfArea#no_eligible_remote_backup}
  */
  readonly noEligibleRemoteBackup?: boolean | cdktf.IResolvable;
  /**
  * Do not send interface state change traps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#no_interface_state_traps OspfArea#no_interface_state_traps}
  */
  readonly noInterfaceStateTraps?: boolean | cdktf.IResolvable;
  /**
  * Don't inform other protocols about neighbor down events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#no_neighbor_down_notification OspfArea#no_neighbor_down_notification}
  */
  readonly noNeighborDownNotification?: boolean | cdktf.IResolvable;
  /**
  * Protect interface from both link and node faults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#node_link_protection OspfArea#node_link_protection}
  */
  readonly nodeLinkProtection?: boolean | cdktf.IResolvable;
  /**
  * Do not run OSPF, but advertise it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#passive OspfArea#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Advertise TE link information, remote address of the link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#passive_traffic_engineering_remote_node_id OspfArea#passive_traffic_engineering_remote_node_id}
  */
  readonly passiveTrafficEngineeringRemoteNodeId?: string;
  /**
  * Advertise TE link information, TE Router-ID of the remote node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#passive_traffic_engineering_remote_node_router_id OspfArea#passive_traffic_engineering_remote_node_router_id}
  */
  readonly passiveTrafficEngineeringRemoteNodeRouterId?: string;
  /**
  * Poll interval for NBMA interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#poll_interval OspfArea#poll_interval}
  */
  readonly pollInterval?: number;
  /**
  * Designated router priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#priority OspfArea#priority}
  */
  readonly priority?: number;
  /**
  * Retransmission interval (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#retransmit_interval OspfArea#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Treat interface as secondary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#secondary OspfArea#secondary}
  */
  readonly secondary?: boolean | cdktf.IResolvable;
  /**
  * Enable strict bfd over this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#strict_bfd OspfArea#strict_bfd}
  */
  readonly strictBfd?: boolean | cdktf.IResolvable;
  /**
  * Traffic engineering metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#te_metric OspfArea#te_metric}
  */
  readonly teMetric?: number;
  /**
  * Transit delay (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#transit_delay OspfArea#transit_delay}
  */
  readonly transitDelay?: number;
  /**
  * authentication_md5 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#authentication_md5 OspfArea#authentication_md5}
  */
  readonly authenticationMd5?: OspfAreaInterfaceAuthenticationMd5[] | cdktf.IResolvable;
  /**
  * bandwidth_based_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#bandwidth_based_metrics OspfArea#bandwidth_based_metrics}
  */
  readonly bandwidthBasedMetrics?: OspfAreaInterfaceBandwidthBasedMetrics[] | cdktf.IResolvable;
  /**
  * bfd_liveness_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#bfd_liveness_detection OspfArea#bfd_liveness_detection}
  */
  readonly bfdLivenessDetection?: OspfAreaInterfaceBfdLivenessDetection;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#neighbor OspfArea#neighbor}
  */
  readonly neighbor?: OspfAreaInterfaceNeighbor[] | cdktf.IResolvable;
}

export function ospfAreaInterfaceToTerraform(struct?: OspfAreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_simple_password: cdktf.stringToTerraform(struct!.authenticationSimplePassword),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    demand_circuit: cdktf.booleanToTerraform(struct!.demandCircuit),
    disable: cdktf.booleanToTerraform(struct!.disable),
    dynamic_neighbors: cdktf.booleanToTerraform(struct!.dynamicNeighbors),
    flood_reduction: cdktf.booleanToTerraform(struct!.floodReduction),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    interface_type: cdktf.stringToTerraform(struct!.interfaceType),
    ipsec_sa: cdktf.stringToTerraform(struct!.ipsecSa),
    ipv4_adjacency_segment_protected_type: cdktf.stringToTerraform(struct!.ipv4AdjacencySegmentProtectedType),
    ipv4_adjacency_segment_protected_value: cdktf.stringToTerraform(struct!.ipv4AdjacencySegmentProtectedValue),
    ipv4_adjacency_segment_unprotected_type: cdktf.stringToTerraform(struct!.ipv4AdjacencySegmentUnprotectedType),
    ipv4_adjacency_segment_unprotected_value: cdktf.stringToTerraform(struct!.ipv4AdjacencySegmentUnprotectedValue),
    link_protection: cdktf.booleanToTerraform(struct!.linkProtection),
    metric: cdktf.numberToTerraform(struct!.metric),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    no_advertise_adjacency_segment: cdktf.booleanToTerraform(struct!.noAdvertiseAdjacencySegment),
    no_eligible_backup: cdktf.booleanToTerraform(struct!.noEligibleBackup),
    no_eligible_remote_backup: cdktf.booleanToTerraform(struct!.noEligibleRemoteBackup),
    no_interface_state_traps: cdktf.booleanToTerraform(struct!.noInterfaceStateTraps),
    no_neighbor_down_notification: cdktf.booleanToTerraform(struct!.noNeighborDownNotification),
    node_link_protection: cdktf.booleanToTerraform(struct!.nodeLinkProtection),
    passive: cdktf.booleanToTerraform(struct!.passive),
    passive_traffic_engineering_remote_node_id: cdktf.stringToTerraform(struct!.passiveTrafficEngineeringRemoteNodeId),
    passive_traffic_engineering_remote_node_router_id: cdktf.stringToTerraform(struct!.passiveTrafficEngineeringRemoteNodeRouterId),
    poll_interval: cdktf.numberToTerraform(struct!.pollInterval),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    secondary: cdktf.booleanToTerraform(struct!.secondary),
    strict_bfd: cdktf.booleanToTerraform(struct!.strictBfd),
    te_metric: cdktf.numberToTerraform(struct!.teMetric),
    transit_delay: cdktf.numberToTerraform(struct!.transitDelay),
    authentication_md5: cdktf.listMapper(ospfAreaInterfaceAuthenticationMd5ToTerraform, true)(struct!.authenticationMd5),
    bandwidth_based_metrics: cdktf.listMapper(ospfAreaInterfaceBandwidthBasedMetricsToTerraform, true)(struct!.bandwidthBasedMetrics),
    bfd_liveness_detection: ospfAreaInterfaceBfdLivenessDetectionToTerraform(struct!.bfdLivenessDetection),
    neighbor: cdktf.listMapper(ospfAreaInterfaceNeighborToTerraform, true)(struct!.neighbor),
  }
}


export function ospfAreaInterfaceToHclTerraform(struct?: OspfAreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_simple_password: {
      value: cdktf.stringToHclTerraform(struct!.authenticationSimplePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    demand_circuit: {
      value: cdktf.booleanToHclTerraform(struct!.demandCircuit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_neighbors: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicNeighbors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flood_reduction: {
      value: cdktf.booleanToHclTerraform(struct!.floodReduction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_type: {
      value: cdktf.stringToHclTerraform(struct!.interfaceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_sa: {
      value: cdktf.stringToHclTerraform(struct!.ipsecSa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_adjacency_segment_protected_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AdjacencySegmentProtectedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_adjacency_segment_protected_value: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AdjacencySegmentProtectedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_adjacency_segment_unprotected_type: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AdjacencySegmentUnprotectedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_adjacency_segment_unprotected_value: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AdjacencySegmentUnprotectedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_protection: {
      value: cdktf.booleanToHclTerraform(struct!.linkProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_advertise_adjacency_segment: {
      value: cdktf.booleanToHclTerraform(struct!.noAdvertiseAdjacencySegment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_eligible_backup: {
      value: cdktf.booleanToHclTerraform(struct!.noEligibleBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_eligible_remote_backup: {
      value: cdktf.booleanToHclTerraform(struct!.noEligibleRemoteBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_interface_state_traps: {
      value: cdktf.booleanToHclTerraform(struct!.noInterfaceStateTraps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_neighbor_down_notification: {
      value: cdktf.booleanToHclTerraform(struct!.noNeighborDownNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_link_protection: {
      value: cdktf.booleanToHclTerraform(struct!.nodeLinkProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passive: {
      value: cdktf.booleanToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passive_traffic_engineering_remote_node_id: {
      value: cdktf.stringToHclTerraform(struct!.passiveTrafficEngineeringRemoteNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive_traffic_engineering_remote_node_router_id: {
      value: cdktf.stringToHclTerraform(struct!.passiveTrafficEngineeringRemoteNodeRouterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary: {
      value: cdktf.booleanToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_bfd: {
      value: cdktf.booleanToHclTerraform(struct!.strictBfd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    te_metric: {
      value: cdktf.numberToHclTerraform(struct!.teMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_md5: {
      value: cdktf.listMapperHcl(ospfAreaInterfaceAuthenticationMd5ToHclTerraform, true)(struct!.authenticationMd5),
      isBlock: true,
      type: "list",
      storageClassType: "OspfAreaInterfaceAuthenticationMd5List",
    },
    bandwidth_based_metrics: {
      value: cdktf.listMapperHcl(ospfAreaInterfaceBandwidthBasedMetricsToHclTerraform, true)(struct!.bandwidthBasedMetrics),
      isBlock: true,
      type: "set",
      storageClassType: "OspfAreaInterfaceBandwidthBasedMetricsList",
    },
    bfd_liveness_detection: {
      value: ospfAreaInterfaceBfdLivenessDetectionToHclTerraform(struct!.bfdLivenessDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "OspfAreaInterfaceBfdLivenessDetection",
    },
    neighbor: {
      value: cdktf.listMapperHcl(ospfAreaInterfaceNeighborToHclTerraform, true)(struct!.neighbor),
      isBlock: true,
      type: "set",
      storageClassType: "OspfAreaInterfaceNeighborList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfAreaInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationSimplePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationSimplePassword = this._authenticationSimplePassword;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._demandCircuit !== undefined) {
      hasAnyValues = true;
      internalValueResult.demandCircuit = this._demandCircuit;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._dynamicNeighbors !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicNeighbors = this._dynamicNeighbors;
    }
    if (this._floodReduction !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodReduction = this._floodReduction;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._interfaceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceType = this._interfaceType;
    }
    if (this._ipsecSa !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSa = this._ipsecSa;
    }
    if (this._ipv4AdjacencySegmentProtectedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AdjacencySegmentProtectedType = this._ipv4AdjacencySegmentProtectedType;
    }
    if (this._ipv4AdjacencySegmentProtectedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AdjacencySegmentProtectedValue = this._ipv4AdjacencySegmentProtectedValue;
    }
    if (this._ipv4AdjacencySegmentUnprotectedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AdjacencySegmentUnprotectedType = this._ipv4AdjacencySegmentUnprotectedType;
    }
    if (this._ipv4AdjacencySegmentUnprotectedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AdjacencySegmentUnprotectedValue = this._ipv4AdjacencySegmentUnprotectedValue;
    }
    if (this._linkProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkProtection = this._linkProtection;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noAdvertiseAdjacencySegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAdvertiseAdjacencySegment = this._noAdvertiseAdjacencySegment;
    }
    if (this._noEligibleBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noEligibleBackup = this._noEligibleBackup;
    }
    if (this._noEligibleRemoteBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noEligibleRemoteBackup = this._noEligibleRemoteBackup;
    }
    if (this._noInterfaceStateTraps !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInterfaceStateTraps = this._noInterfaceStateTraps;
    }
    if (this._noNeighborDownNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNeighborDownNotification = this._noNeighborDownNotification;
    }
    if (this._nodeLinkProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLinkProtection = this._nodeLinkProtection;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._passiveTrafficEngineeringRemoteNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveTrafficEngineeringRemoteNodeId = this._passiveTrafficEngineeringRemoteNodeId;
    }
    if (this._passiveTrafficEngineeringRemoteNodeRouterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveTrafficEngineeringRemoteNodeRouterId = this._passiveTrafficEngineeringRemoteNodeRouterId;
    }
    if (this._pollInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollInterval = this._pollInterval;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    if (this._strictBfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictBfd = this._strictBfd;
    }
    if (this._teMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.teMetric = this._teMetric;
    }
    if (this._transitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitDelay = this._transitDelay;
    }
    if (this._authenticationMd5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMd5 = this._authenticationMd5?.internalValue;
    }
    if (this._bandwidthBasedMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthBasedMetrics = this._bandwidthBasedMetrics?.internalValue;
    }
    if (this._bfdLivenessDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdLivenessDetection = this._bfdLivenessDetection?.internalValue;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationSimplePassword = undefined;
      this._deadInterval = undefined;
      this._demandCircuit = undefined;
      this._disable = undefined;
      this._dynamicNeighbors = undefined;
      this._floodReduction = undefined;
      this._helloInterval = undefined;
      this._interfaceType = undefined;
      this._ipsecSa = undefined;
      this._ipv4AdjacencySegmentProtectedType = undefined;
      this._ipv4AdjacencySegmentProtectedValue = undefined;
      this._ipv4AdjacencySegmentUnprotectedType = undefined;
      this._ipv4AdjacencySegmentUnprotectedValue = undefined;
      this._linkProtection = undefined;
      this._metric = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._noAdvertiseAdjacencySegment = undefined;
      this._noEligibleBackup = undefined;
      this._noEligibleRemoteBackup = undefined;
      this._noInterfaceStateTraps = undefined;
      this._noNeighborDownNotification = undefined;
      this._nodeLinkProtection = undefined;
      this._passive = undefined;
      this._passiveTrafficEngineeringRemoteNodeId = undefined;
      this._passiveTrafficEngineeringRemoteNodeRouterId = undefined;
      this._pollInterval = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._secondary = undefined;
      this._strictBfd = undefined;
      this._teMetric = undefined;
      this._transitDelay = undefined;
      this._authenticationMd5.internalValue = undefined;
      this._bandwidthBasedMetrics.internalValue = undefined;
      this._bfdLivenessDetection.internalValue = undefined;
      this._neighbor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationSimplePassword = value.authenticationSimplePassword;
      this._deadInterval = value.deadInterval;
      this._demandCircuit = value.demandCircuit;
      this._disable = value.disable;
      this._dynamicNeighbors = value.dynamicNeighbors;
      this._floodReduction = value.floodReduction;
      this._helloInterval = value.helloInterval;
      this._interfaceType = value.interfaceType;
      this._ipsecSa = value.ipsecSa;
      this._ipv4AdjacencySegmentProtectedType = value.ipv4AdjacencySegmentProtectedType;
      this._ipv4AdjacencySegmentProtectedValue = value.ipv4AdjacencySegmentProtectedValue;
      this._ipv4AdjacencySegmentUnprotectedType = value.ipv4AdjacencySegmentUnprotectedType;
      this._ipv4AdjacencySegmentUnprotectedValue = value.ipv4AdjacencySegmentUnprotectedValue;
      this._linkProtection = value.linkProtection;
      this._metric = value.metric;
      this._mtu = value.mtu;
      this._name = value.name;
      this._noAdvertiseAdjacencySegment = value.noAdvertiseAdjacencySegment;
      this._noEligibleBackup = value.noEligibleBackup;
      this._noEligibleRemoteBackup = value.noEligibleRemoteBackup;
      this._noInterfaceStateTraps = value.noInterfaceStateTraps;
      this._noNeighborDownNotification = value.noNeighborDownNotification;
      this._nodeLinkProtection = value.nodeLinkProtection;
      this._passive = value.passive;
      this._passiveTrafficEngineeringRemoteNodeId = value.passiveTrafficEngineeringRemoteNodeId;
      this._passiveTrafficEngineeringRemoteNodeRouterId = value.passiveTrafficEngineeringRemoteNodeRouterId;
      this._pollInterval = value.pollInterval;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._secondary = value.secondary;
      this._strictBfd = value.strictBfd;
      this._teMetric = value.teMetric;
      this._transitDelay = value.transitDelay;
      this._authenticationMd5.internalValue = value.authenticationMd5;
      this._bandwidthBasedMetrics.internalValue = value.bandwidthBasedMetrics;
      this._bfdLivenessDetection.internalValue = value.bfdLivenessDetection;
      this._neighbor.internalValue = value.neighbor;
    }
  }

  // authentication_simple_password - computed: false, optional: true, required: false
  private _authenticationSimplePassword?: string; 
  public get authenticationSimplePassword() {
    return this.getStringAttribute('authentication_simple_password');
  }
  public set authenticationSimplePassword(value: string) {
    this._authenticationSimplePassword = value;
  }
  public resetAuthenticationSimplePassword() {
    this._authenticationSimplePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSimplePasswordInput() {
    return this._authenticationSimplePassword;
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

  // demand_circuit - computed: false, optional: true, required: false
  private _demandCircuit?: boolean | cdktf.IResolvable; 
  public get demandCircuit() {
    return this.getBooleanAttribute('demand_circuit');
  }
  public set demandCircuit(value: boolean | cdktf.IResolvable) {
    this._demandCircuit = value;
  }
  public resetDemandCircuit() {
    this._demandCircuit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demandCircuitInput() {
    return this._demandCircuit;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dynamic_neighbors - computed: false, optional: true, required: false
  private _dynamicNeighbors?: boolean | cdktf.IResolvable; 
  public get dynamicNeighbors() {
    return this.getBooleanAttribute('dynamic_neighbors');
  }
  public set dynamicNeighbors(value: boolean | cdktf.IResolvable) {
    this._dynamicNeighbors = value;
  }
  public resetDynamicNeighbors() {
    this._dynamicNeighbors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicNeighborsInput() {
    return this._dynamicNeighbors;
  }

  // flood_reduction - computed: false, optional: true, required: false
  private _floodReduction?: boolean | cdktf.IResolvable; 
  public get floodReduction() {
    return this.getBooleanAttribute('flood_reduction');
  }
  public set floodReduction(value: boolean | cdktf.IResolvable) {
    this._floodReduction = value;
  }
  public resetFloodReduction() {
    this._floodReduction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodReductionInput() {
    return this._floodReduction;
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

  // interface_type - computed: false, optional: true, required: false
  private _interfaceType?: string; 
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }
  public set interfaceType(value: string) {
    this._interfaceType = value;
  }
  public resetInterfaceType() {
    this._interfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTypeInput() {
    return this._interfaceType;
  }

  // ipsec_sa - computed: false, optional: true, required: false
  private _ipsecSa?: string; 
  public get ipsecSa() {
    return this.getStringAttribute('ipsec_sa');
  }
  public set ipsecSa(value: string) {
    this._ipsecSa = value;
  }
  public resetIpsecSa() {
    this._ipsecSa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaInput() {
    return this._ipsecSa;
  }

  // ipv4_adjacency_segment_protected_type - computed: false, optional: true, required: false
  private _ipv4AdjacencySegmentProtectedType?: string; 
  public get ipv4AdjacencySegmentProtectedType() {
    return this.getStringAttribute('ipv4_adjacency_segment_protected_type');
  }
  public set ipv4AdjacencySegmentProtectedType(value: string) {
    this._ipv4AdjacencySegmentProtectedType = value;
  }
  public resetIpv4AdjacencySegmentProtectedType() {
    this._ipv4AdjacencySegmentProtectedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AdjacencySegmentProtectedTypeInput() {
    return this._ipv4AdjacencySegmentProtectedType;
  }

  // ipv4_adjacency_segment_protected_value - computed: false, optional: true, required: false
  private _ipv4AdjacencySegmentProtectedValue?: string; 
  public get ipv4AdjacencySegmentProtectedValue() {
    return this.getStringAttribute('ipv4_adjacency_segment_protected_value');
  }
  public set ipv4AdjacencySegmentProtectedValue(value: string) {
    this._ipv4AdjacencySegmentProtectedValue = value;
  }
  public resetIpv4AdjacencySegmentProtectedValue() {
    this._ipv4AdjacencySegmentProtectedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AdjacencySegmentProtectedValueInput() {
    return this._ipv4AdjacencySegmentProtectedValue;
  }

  // ipv4_adjacency_segment_unprotected_type - computed: false, optional: true, required: false
  private _ipv4AdjacencySegmentUnprotectedType?: string; 
  public get ipv4AdjacencySegmentUnprotectedType() {
    return this.getStringAttribute('ipv4_adjacency_segment_unprotected_type');
  }
  public set ipv4AdjacencySegmentUnprotectedType(value: string) {
    this._ipv4AdjacencySegmentUnprotectedType = value;
  }
  public resetIpv4AdjacencySegmentUnprotectedType() {
    this._ipv4AdjacencySegmentUnprotectedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AdjacencySegmentUnprotectedTypeInput() {
    return this._ipv4AdjacencySegmentUnprotectedType;
  }

  // ipv4_adjacency_segment_unprotected_value - computed: false, optional: true, required: false
  private _ipv4AdjacencySegmentUnprotectedValue?: string; 
  public get ipv4AdjacencySegmentUnprotectedValue() {
    return this.getStringAttribute('ipv4_adjacency_segment_unprotected_value');
  }
  public set ipv4AdjacencySegmentUnprotectedValue(value: string) {
    this._ipv4AdjacencySegmentUnprotectedValue = value;
  }
  public resetIpv4AdjacencySegmentUnprotectedValue() {
    this._ipv4AdjacencySegmentUnprotectedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AdjacencySegmentUnprotectedValueInput() {
    return this._ipv4AdjacencySegmentUnprotectedValue;
  }

  // link_protection - computed: false, optional: true, required: false
  private _linkProtection?: boolean | cdktf.IResolvable; 
  public get linkProtection() {
    return this.getBooleanAttribute('link_protection');
  }
  public set linkProtection(value: boolean | cdktf.IResolvable) {
    this._linkProtection = value;
  }
  public resetLinkProtection() {
    this._linkProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkProtectionInput() {
    return this._linkProtection;
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

  // no_advertise_adjacency_segment - computed: false, optional: true, required: false
  private _noAdvertiseAdjacencySegment?: boolean | cdktf.IResolvable; 
  public get noAdvertiseAdjacencySegment() {
    return this.getBooleanAttribute('no_advertise_adjacency_segment');
  }
  public set noAdvertiseAdjacencySegment(value: boolean | cdktf.IResolvable) {
    this._noAdvertiseAdjacencySegment = value;
  }
  public resetNoAdvertiseAdjacencySegment() {
    this._noAdvertiseAdjacencySegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdvertiseAdjacencySegmentInput() {
    return this._noAdvertiseAdjacencySegment;
  }

  // no_eligible_backup - computed: false, optional: true, required: false
  private _noEligibleBackup?: boolean | cdktf.IResolvable; 
  public get noEligibleBackup() {
    return this.getBooleanAttribute('no_eligible_backup');
  }
  public set noEligibleBackup(value: boolean | cdktf.IResolvable) {
    this._noEligibleBackup = value;
  }
  public resetNoEligibleBackup() {
    this._noEligibleBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noEligibleBackupInput() {
    return this._noEligibleBackup;
  }

  // no_eligible_remote_backup - computed: false, optional: true, required: false
  private _noEligibleRemoteBackup?: boolean | cdktf.IResolvable; 
  public get noEligibleRemoteBackup() {
    return this.getBooleanAttribute('no_eligible_remote_backup');
  }
  public set noEligibleRemoteBackup(value: boolean | cdktf.IResolvable) {
    this._noEligibleRemoteBackup = value;
  }
  public resetNoEligibleRemoteBackup() {
    this._noEligibleRemoteBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noEligibleRemoteBackupInput() {
    return this._noEligibleRemoteBackup;
  }

  // no_interface_state_traps - computed: false, optional: true, required: false
  private _noInterfaceStateTraps?: boolean | cdktf.IResolvable; 
  public get noInterfaceStateTraps() {
    return this.getBooleanAttribute('no_interface_state_traps');
  }
  public set noInterfaceStateTraps(value: boolean | cdktf.IResolvable) {
    this._noInterfaceStateTraps = value;
  }
  public resetNoInterfaceStateTraps() {
    this._noInterfaceStateTraps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInterfaceStateTrapsInput() {
    return this._noInterfaceStateTraps;
  }

  // no_neighbor_down_notification - computed: false, optional: true, required: false
  private _noNeighborDownNotification?: boolean | cdktf.IResolvable; 
  public get noNeighborDownNotification() {
    return this.getBooleanAttribute('no_neighbor_down_notification');
  }
  public set noNeighborDownNotification(value: boolean | cdktf.IResolvable) {
    this._noNeighborDownNotification = value;
  }
  public resetNoNeighborDownNotification() {
    this._noNeighborDownNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNeighborDownNotificationInput() {
    return this._noNeighborDownNotification;
  }

  // node_link_protection - computed: false, optional: true, required: false
  private _nodeLinkProtection?: boolean | cdktf.IResolvable; 
  public get nodeLinkProtection() {
    return this.getBooleanAttribute('node_link_protection');
  }
  public set nodeLinkProtection(value: boolean | cdktf.IResolvable) {
    this._nodeLinkProtection = value;
  }
  public resetNodeLinkProtection() {
    this._nodeLinkProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLinkProtectionInput() {
    return this._nodeLinkProtection;
  }

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // passive_traffic_engineering_remote_node_id - computed: false, optional: true, required: false
  private _passiveTrafficEngineeringRemoteNodeId?: string; 
  public get passiveTrafficEngineeringRemoteNodeId() {
    return this.getStringAttribute('passive_traffic_engineering_remote_node_id');
  }
  public set passiveTrafficEngineeringRemoteNodeId(value: string) {
    this._passiveTrafficEngineeringRemoteNodeId = value;
  }
  public resetPassiveTrafficEngineeringRemoteNodeId() {
    this._passiveTrafficEngineeringRemoteNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveTrafficEngineeringRemoteNodeIdInput() {
    return this._passiveTrafficEngineeringRemoteNodeId;
  }

  // passive_traffic_engineering_remote_node_router_id - computed: false, optional: true, required: false
  private _passiveTrafficEngineeringRemoteNodeRouterId?: string; 
  public get passiveTrafficEngineeringRemoteNodeRouterId() {
    return this.getStringAttribute('passive_traffic_engineering_remote_node_router_id');
  }
  public set passiveTrafficEngineeringRemoteNodeRouterId(value: string) {
    this._passiveTrafficEngineeringRemoteNodeRouterId = value;
  }
  public resetPassiveTrafficEngineeringRemoteNodeRouterId() {
    this._passiveTrafficEngineeringRemoteNodeRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveTrafficEngineeringRemoteNodeRouterIdInput() {
    return this._passiveTrafficEngineeringRemoteNodeRouterId;
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

  // secondary - computed: false, optional: true, required: false
  private _secondary?: boolean | cdktf.IResolvable; 
  public get secondary() {
    return this.getBooleanAttribute('secondary');
  }
  public set secondary(value: boolean | cdktf.IResolvable) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }

  // strict_bfd - computed: false, optional: true, required: false
  private _strictBfd?: boolean | cdktf.IResolvable; 
  public get strictBfd() {
    return this.getBooleanAttribute('strict_bfd');
  }
  public set strictBfd(value: boolean | cdktf.IResolvable) {
    this._strictBfd = value;
  }
  public resetStrictBfd() {
    this._strictBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictBfdInput() {
    return this._strictBfd;
  }

  // te_metric - computed: false, optional: true, required: false
  private _teMetric?: number; 
  public get teMetric() {
    return this.getNumberAttribute('te_metric');
  }
  public set teMetric(value: number) {
    this._teMetric = value;
  }
  public resetTeMetric() {
    this._teMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teMetricInput() {
    return this._teMetric;
  }

  // transit_delay - computed: false, optional: true, required: false
  private _transitDelay?: number; 
  public get transitDelay() {
    return this.getNumberAttribute('transit_delay');
  }
  public set transitDelay(value: number) {
    this._transitDelay = value;
  }
  public resetTransitDelay() {
    this._transitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitDelayInput() {
    return this._transitDelay;
  }

  // authentication_md5 - computed: false, optional: true, required: false
  private _authenticationMd5 = new OspfAreaInterfaceAuthenticationMd5List(this, "authentication_md5", false);
  public get authenticationMd5() {
    return this._authenticationMd5;
  }
  public putAuthenticationMd5(value: OspfAreaInterfaceAuthenticationMd5[] | cdktf.IResolvable) {
    this._authenticationMd5.internalValue = value;
  }
  public resetAuthenticationMd5() {
    this._authenticationMd5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMd5Input() {
    return this._authenticationMd5.internalValue;
  }

  // bandwidth_based_metrics - computed: false, optional: true, required: false
  private _bandwidthBasedMetrics = new OspfAreaInterfaceBandwidthBasedMetricsList(this, "bandwidth_based_metrics", true);
  public get bandwidthBasedMetrics() {
    return this._bandwidthBasedMetrics;
  }
  public putBandwidthBasedMetrics(value: OspfAreaInterfaceBandwidthBasedMetrics[] | cdktf.IResolvable) {
    this._bandwidthBasedMetrics.internalValue = value;
  }
  public resetBandwidthBasedMetrics() {
    this._bandwidthBasedMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthBasedMetricsInput() {
    return this._bandwidthBasedMetrics.internalValue;
  }

  // bfd_liveness_detection - computed: false, optional: true, required: false
  private _bfdLivenessDetection = new OspfAreaInterfaceBfdLivenessDetectionOutputReference(this, "bfd_liveness_detection");
  public get bfdLivenessDetection() {
    return this._bfdLivenessDetection;
  }
  public putBfdLivenessDetection(value: OspfAreaInterfaceBfdLivenessDetection) {
    this._bfdLivenessDetection.internalValue = value;
  }
  public resetBfdLivenessDetection() {
    this._bfdLivenessDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdLivenessDetectionInput() {
    return this._bfdLivenessDetection.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new OspfAreaInterfaceNeighborList(this, "neighbor", true);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: OspfAreaInterfaceNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }
}

export class OspfAreaInterfaceList extends cdktf.ComplexList {
  public internalValue? : OspfAreaInterface[] | cdktf.IResolvable

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
  public get(index: number): OspfAreaInterfaceOutputReference {
    return new OspfAreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfAreaNssaAreaRange {
  /**
  * Enforce exact match for advertisement of this area range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#exact OspfArea#exact}
  */
  readonly exact?: boolean | cdktf.IResolvable;
  /**
  * Override the dynamic metric for this area-range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#override_metric OspfArea#override_metric}
  */
  readonly overrideMetric?: number;
  /**
  * Range to summarize routes in this area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#range OspfArea#range}
  */
  readonly range: string;
  /**
  * Restrict advertisement of this area range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#restrict OspfArea#restrict}
  */
  readonly restrict?: boolean | cdktf.IResolvable;
}

export function ospfAreaNssaAreaRangeToTerraform(struct?: OspfAreaNssaAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.booleanToTerraform(struct!.exact),
    override_metric: cdktf.numberToTerraform(struct!.overrideMetric),
    range: cdktf.stringToTerraform(struct!.range),
    restrict: cdktf.booleanToTerraform(struct!.restrict),
  }
}


export function ospfAreaNssaAreaRangeToHclTerraform(struct?: OspfAreaNssaAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.booleanToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override_metric: {
      value: cdktf.numberToHclTerraform(struct!.overrideMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restrict: {
      value: cdktf.booleanToHclTerraform(struct!.restrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaNssaAreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfAreaNssaAreaRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._overrideMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideMetric = this._overrideMetric;
    }
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._restrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrict = this._restrict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaNssaAreaRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._overrideMetric = undefined;
      this._range = undefined;
      this._restrict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._overrideMetric = value.overrideMetric;
      this._range = value.range;
      this._restrict = value.restrict;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: boolean | cdktf.IResolvable; 
  public get exact() {
    return this.getBooleanAttribute('exact');
  }
  public set exact(value: boolean | cdktf.IResolvable) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // override_metric - computed: false, optional: true, required: false
  private _overrideMetric?: number; 
  public get overrideMetric() {
    return this.getNumberAttribute('override_metric');
  }
  public set overrideMetric(value: number) {
    this._overrideMetric = value;
  }
  public resetOverrideMetric() {
    this._overrideMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideMetricInput() {
    return this._overrideMetric;
  }

  // range - computed: false, optional: false, required: true
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // restrict - computed: false, optional: true, required: false
  private _restrict?: boolean | cdktf.IResolvable; 
  public get restrict() {
    return this.getBooleanAttribute('restrict');
  }
  public set restrict(value: boolean | cdktf.IResolvable) {
    this._restrict = value;
  }
  public resetRestrict() {
    this._restrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictInput() {
    return this._restrict;
  }
}

export class OspfAreaNssaAreaRangeList extends cdktf.ComplexList {
  public internalValue? : OspfAreaNssaAreaRange[] | cdktf.IResolvable

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
  public get(index: number): OspfAreaNssaAreaRangeOutputReference {
    return new OspfAreaNssaAreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspfAreaNssaDefaultLsa {
  /**
  * Metric for the default route in this area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#default_metric OspfArea#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * External metric type for the default type 7 LSA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#metric_type OspfArea#metric_type}
  */
  readonly metricType?: number;
  /**
  * Flood type 7 default LSA if no-summaries is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#type_7 OspfArea#type_7}
  */
  readonly type7?: boolean | cdktf.IResolvable;
}

export function ospfAreaNssaDefaultLsaToTerraform(struct?: OspfAreaNssaDefaultLsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_metric: cdktf.numberToTerraform(struct!.defaultMetric),
    metric_type: cdktf.numberToTerraform(struct!.metricType),
    type_7: cdktf.booleanToTerraform(struct!.type7),
  }
}


export function ospfAreaNssaDefaultLsaToHclTerraform(struct?: OspfAreaNssaDefaultLsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultMetric),
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
    type_7: {
      value: cdktf.booleanToHclTerraform(struct!.type7),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaNssaDefaultLsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OspfAreaNssaDefaultLsa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMetric = this._defaultMetric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._type7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.type7 = this._type7;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaNssaDefaultLsa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMetric = undefined;
      this._metricType = undefined;
      this._type7 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMetric = value.defaultMetric;
      this._metricType = value.metricType;
      this._type7 = value.type7;
    }
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

  // type_7 - computed: false, optional: true, required: false
  private _type7?: boolean | cdktf.IResolvable; 
  public get type7() {
    return this.getBooleanAttribute('type_7');
  }
  public set type7(value: boolean | cdktf.IResolvable) {
    this._type7 = value;
  }
  public resetType7() {
    this._type7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get type7Input() {
    return this._type7;
  }
}
export interface OspfAreaNssa {
  /**
  * Don't flood summary LSAs into this NSSA area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#no_summaries OspfArea#no_summaries}
  */
  readonly noSummaries?: boolean | cdktf.IResolvable;
  /**
  * Flood summary LSAs into this NSSA area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#summaries OspfArea#summaries}
  */
  readonly summaries?: boolean | cdktf.IResolvable;
  /**
  * area_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#area_range OspfArea#area_range}
  */
  readonly areaRange?: OspfAreaNssaAreaRange[] | cdktf.IResolvable;
  /**
  * default_lsa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#default_lsa OspfArea#default_lsa}
  */
  readonly defaultLsa?: OspfAreaNssaDefaultLsa;
}

export function ospfAreaNssaToTerraform(struct?: OspfAreaNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_summaries: cdktf.booleanToTerraform(struct!.noSummaries),
    summaries: cdktf.booleanToTerraform(struct!.summaries),
    area_range: cdktf.listMapper(ospfAreaNssaAreaRangeToTerraform, true)(struct!.areaRange),
    default_lsa: ospfAreaNssaDefaultLsaToTerraform(struct!.defaultLsa),
  }
}


export function ospfAreaNssaToHclTerraform(struct?: OspfAreaNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_summaries: {
      value: cdktf.booleanToHclTerraform(struct!.noSummaries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    summaries: {
      value: cdktf.booleanToHclTerraform(struct!.summaries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    area_range: {
      value: cdktf.listMapperHcl(ospfAreaNssaAreaRangeToHclTerraform, true)(struct!.areaRange),
      isBlock: true,
      type: "set",
      storageClassType: "OspfAreaNssaAreaRangeList",
    },
    default_lsa: {
      value: ospfAreaNssaDefaultLsaToHclTerraform(struct!.defaultLsa),
      isBlock: true,
      type: "struct",
      storageClassType: "OspfAreaNssaDefaultLsa",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OspfAreaNssa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSummaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummaries = this._noSummaries;
    }
    if (this._summaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaries = this._summaries;
    }
    if (this._areaRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaRange = this._areaRange?.internalValue;
    }
    if (this._defaultLsa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLsa = this._defaultLsa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaNssa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noSummaries = undefined;
      this._summaries = undefined;
      this._areaRange.internalValue = undefined;
      this._defaultLsa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noSummaries = value.noSummaries;
      this._summaries = value.summaries;
      this._areaRange.internalValue = value.areaRange;
      this._defaultLsa.internalValue = value.defaultLsa;
    }
  }

  // no_summaries - computed: false, optional: true, required: false
  private _noSummaries?: boolean | cdktf.IResolvable; 
  public get noSummaries() {
    return this.getBooleanAttribute('no_summaries');
  }
  public set noSummaries(value: boolean | cdktf.IResolvable) {
    this._noSummaries = value;
  }
  public resetNoSummaries() {
    this._noSummaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummariesInput() {
    return this._noSummaries;
  }

  // summaries - computed: false, optional: true, required: false
  private _summaries?: boolean | cdktf.IResolvable; 
  public get summaries() {
    return this.getBooleanAttribute('summaries');
  }
  public set summaries(value: boolean | cdktf.IResolvable) {
    this._summaries = value;
  }
  public resetSummaries() {
    this._summaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summariesInput() {
    return this._summaries;
  }

  // area_range - computed: false, optional: true, required: false
  private _areaRange = new OspfAreaNssaAreaRangeList(this, "area_range", true);
  public get areaRange() {
    return this._areaRange;
  }
  public putAreaRange(value: OspfAreaNssaAreaRange[] | cdktf.IResolvable) {
    this._areaRange.internalValue = value;
  }
  public resetAreaRange() {
    this._areaRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaRangeInput() {
    return this._areaRange.internalValue;
  }

  // default_lsa - computed: false, optional: true, required: false
  private _defaultLsa = new OspfAreaNssaDefaultLsaOutputReference(this, "default_lsa");
  public get defaultLsa() {
    return this._defaultLsa;
  }
  public putDefaultLsa(value: OspfAreaNssaDefaultLsa) {
    this._defaultLsa.internalValue = value;
  }
  public resetDefaultLsa() {
    this._defaultLsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLsaInput() {
    return this._defaultLsa.internalValue;
  }
}
export interface OspfAreaStub {
  /**
  * Metric for the default route in this stub area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#default_metric OspfArea#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * Don't flood summary LSAs into this stub area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#no_summaries OspfArea#no_summaries}
  */
  readonly noSummaries?: boolean | cdktf.IResolvable;
  /**
  * Flood summary LSAs into this stub area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#summaries OspfArea#summaries}
  */
  readonly summaries?: boolean | cdktf.IResolvable;
}

export function ospfAreaStubToTerraform(struct?: OspfAreaStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_metric: cdktf.numberToTerraform(struct!.defaultMetric),
    no_summaries: cdktf.booleanToTerraform(struct!.noSummaries),
    summaries: cdktf.booleanToTerraform(struct!.summaries),
  }
}


export function ospfAreaStubToHclTerraform(struct?: OspfAreaStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_summaries: {
      value: cdktf.booleanToHclTerraform(struct!.noSummaries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    summaries: {
      value: cdktf.booleanToHclTerraform(struct!.summaries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OspfAreaStub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMetric = this._defaultMetric;
    }
    if (this._noSummaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummaries = this._noSummaries;
    }
    if (this._summaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaries = this._summaries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaStub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMetric = undefined;
      this._noSummaries = undefined;
      this._summaries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMetric = value.defaultMetric;
      this._noSummaries = value.noSummaries;
      this._summaries = value.summaries;
    }
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

  // no_summaries - computed: false, optional: true, required: false
  private _noSummaries?: boolean | cdktf.IResolvable; 
  public get noSummaries() {
    return this.getBooleanAttribute('no_summaries');
  }
  public set noSummaries(value: boolean | cdktf.IResolvable) {
    this._noSummaries = value;
  }
  public resetNoSummaries() {
    this._noSummaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummariesInput() {
    return this._noSummaries;
  }

  // summaries - computed: false, optional: true, required: false
  private _summaries?: boolean | cdktf.IResolvable; 
  public get summaries() {
    return this.getBooleanAttribute('summaries');
  }
  public set summaries(value: boolean | cdktf.IResolvable) {
    this._summaries = value;
  }
  public resetSummaries() {
    this._summaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summariesInput() {
    return this._summaries;
  }
}
export interface OspfAreaVirtualLink {
  /**
  * Dead interval (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#dead_interval OspfArea#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Interface functions as a demand circuit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#demand_circuit OspfArea#demand_circuit}
  */
  readonly demandCircuit?: boolean | cdktf.IResolvable;
  /**
  * Disable this virtual link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#disable OspfArea#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Enable flood reduction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#flood_reduction OspfArea#flood_reduction}
  */
  readonly floodReduction?: boolean | cdktf.IResolvable;
  /**
  * Hello interval (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#hello_interval OspfArea#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * IPSec security association name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#ipsec_sa OspfArea#ipsec_sa}
  */
  readonly ipsecSa?: string;
  /**
  * Maximum OSPF packet size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#mtu OspfArea#mtu}
  */
  readonly mtu?: number;
  /**
  * Router ID of a virtual neighbor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#neighbor_id OspfArea#neighbor_id}
  */
  readonly neighborId: string;
  /**
  * Retransmission interval (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#retransmit_interval OspfArea#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Transit area in common with virtual neighbor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#transit_area OspfArea#transit_area}
  */
  readonly transitArea: string;
  /**
  * Transit delay (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#transit_delay OspfArea#transit_delay}
  */
  readonly transitDelay?: number;
}

export function ospfAreaVirtualLinkToTerraform(struct?: OspfAreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    demand_circuit: cdktf.booleanToTerraform(struct!.demandCircuit),
    disable: cdktf.booleanToTerraform(struct!.disable),
    flood_reduction: cdktf.booleanToTerraform(struct!.floodReduction),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    ipsec_sa: cdktf.stringToTerraform(struct!.ipsecSa),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    neighbor_id: cdktf.stringToTerraform(struct!.neighborId),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transit_area: cdktf.stringToTerraform(struct!.transitArea),
    transit_delay: cdktf.numberToTerraform(struct!.transitDelay),
  }
}


export function ospfAreaVirtualLinkToHclTerraform(struct?: OspfAreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    demand_circuit: {
      value: cdktf.booleanToHclTerraform(struct!.demandCircuit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flood_reduction: {
      value: cdktf.booleanToHclTerraform(struct!.floodReduction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_sa: {
      value: cdktf.stringToHclTerraform(struct!.ipsecSa),
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
    neighbor_id: {
      value: cdktf.stringToHclTerraform(struct!.neighborId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transit_area: {
      value: cdktf.stringToHclTerraform(struct!.transitArea),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfAreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspfAreaVirtualLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._demandCircuit !== undefined) {
      hasAnyValues = true;
      internalValueResult.demandCircuit = this._demandCircuit;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._floodReduction !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodReduction = this._floodReduction;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._ipsecSa !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSa = this._ipsecSa;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._neighborId !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborId = this._neighborId;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transitArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitArea = this._transitArea;
    }
    if (this._transitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitDelay = this._transitDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfAreaVirtualLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deadInterval = undefined;
      this._demandCircuit = undefined;
      this._disable = undefined;
      this._floodReduction = undefined;
      this._helloInterval = undefined;
      this._ipsecSa = undefined;
      this._mtu = undefined;
      this._neighborId = undefined;
      this._retransmitInterval = undefined;
      this._transitArea = undefined;
      this._transitDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deadInterval = value.deadInterval;
      this._demandCircuit = value.demandCircuit;
      this._disable = value.disable;
      this._floodReduction = value.floodReduction;
      this._helloInterval = value.helloInterval;
      this._ipsecSa = value.ipsecSa;
      this._mtu = value.mtu;
      this._neighborId = value.neighborId;
      this._retransmitInterval = value.retransmitInterval;
      this._transitArea = value.transitArea;
      this._transitDelay = value.transitDelay;
    }
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

  // demand_circuit - computed: false, optional: true, required: false
  private _demandCircuit?: boolean | cdktf.IResolvable; 
  public get demandCircuit() {
    return this.getBooleanAttribute('demand_circuit');
  }
  public set demandCircuit(value: boolean | cdktf.IResolvable) {
    this._demandCircuit = value;
  }
  public resetDemandCircuit() {
    this._demandCircuit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demandCircuitInput() {
    return this._demandCircuit;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // flood_reduction - computed: false, optional: true, required: false
  private _floodReduction?: boolean | cdktf.IResolvable; 
  public get floodReduction() {
    return this.getBooleanAttribute('flood_reduction');
  }
  public set floodReduction(value: boolean | cdktf.IResolvable) {
    this._floodReduction = value;
  }
  public resetFloodReduction() {
    this._floodReduction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodReductionInput() {
    return this._floodReduction;
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

  // ipsec_sa - computed: false, optional: true, required: false
  private _ipsecSa?: string; 
  public get ipsecSa() {
    return this.getStringAttribute('ipsec_sa');
  }
  public set ipsecSa(value: string) {
    this._ipsecSa = value;
  }
  public resetIpsecSa() {
    this._ipsecSa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaInput() {
    return this._ipsecSa;
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

  // neighbor_id - computed: false, optional: false, required: true
  private _neighborId?: string; 
  public get neighborId() {
    return this.getStringAttribute('neighbor_id');
  }
  public set neighborId(value: string) {
    this._neighborId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborIdInput() {
    return this._neighborId;
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

  // transit_area - computed: false, optional: false, required: true
  private _transitArea?: string; 
  public get transitArea() {
    return this.getStringAttribute('transit_area');
  }
  public set transitArea(value: string) {
    this._transitArea = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitAreaInput() {
    return this._transitArea;
  }

  // transit_delay - computed: false, optional: true, required: false
  private _transitDelay?: number; 
  public get transitDelay() {
    return this.getNumberAttribute('transit_delay');
  }
  public set transitDelay(value: number) {
    this._transitDelay = value;
  }
  public resetTransitDelay() {
    this._transitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitDelayInput() {
    return this._transitDelay;
  }
}

export class OspfAreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : OspfAreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): OspfAreaVirtualLinkOutputReference {
    return new OspfAreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area junos_ospf_area}
*/
export class OspfArea extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_ospf_area";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OspfArea resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OspfArea to import
  * @param importFromId The id of the existing OspfArea that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OspfArea to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_ospf_area", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf_area junos_ospf_area} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OspfAreaConfig
  */
  public constructor(scope: Construct, id: string, config: OspfAreaConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_ospf_area',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areaId = config.areaId;
    this._contextIdentifier = config.contextIdentifier;
    this._interAreaPrefixExport = config.interAreaPrefixExport;
    this._interAreaPrefixImport = config.interAreaPrefixImport;
    this._networkSummaryExport = config.networkSummaryExport;
    this._networkSummaryImport = config.networkSummaryImport;
    this._noContextIdentifierAdvertisement = config.noContextIdentifierAdvertisement;
    this._realm = config.realm;
    this._routingInstance = config.routingInstance;
    this._version = config.version;
    this._areaRange.internalValue = config.areaRange;
    this._interface.internalValue = config.interface;
    this._nssa.internalValue = config.nssa;
    this._stub.internalValue = config.stub;
    this._virtualLink.internalValue = config.virtualLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_id - computed: false, optional: false, required: true
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }

  // context_identifier - computed: false, optional: true, required: false
  private _contextIdentifier?: string[]; 
  public get contextIdentifier() {
    return cdktf.Fn.tolist(this.getListAttribute('context_identifier'));
  }
  public set contextIdentifier(value: string[]) {
    this._contextIdentifier = value;
  }
  public resetContextIdentifier() {
    this._contextIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextIdentifierInput() {
    return this._contextIdentifier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inter_area_prefix_export - computed: false, optional: true, required: false
  private _interAreaPrefixExport?: string[]; 
  public get interAreaPrefixExport() {
    return this.getListAttribute('inter_area_prefix_export');
  }
  public set interAreaPrefixExport(value: string[]) {
    this._interAreaPrefixExport = value;
  }
  public resetInterAreaPrefixExport() {
    this._interAreaPrefixExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interAreaPrefixExportInput() {
    return this._interAreaPrefixExport;
  }

  // inter_area_prefix_import - computed: false, optional: true, required: false
  private _interAreaPrefixImport?: string[]; 
  public get interAreaPrefixImport() {
    return this.getListAttribute('inter_area_prefix_import');
  }
  public set interAreaPrefixImport(value: string[]) {
    this._interAreaPrefixImport = value;
  }
  public resetInterAreaPrefixImport() {
    this._interAreaPrefixImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interAreaPrefixImportInput() {
    return this._interAreaPrefixImport;
  }

  // network_summary_export - computed: false, optional: true, required: false
  private _networkSummaryExport?: string[]; 
  public get networkSummaryExport() {
    return this.getListAttribute('network_summary_export');
  }
  public set networkSummaryExport(value: string[]) {
    this._networkSummaryExport = value;
  }
  public resetNetworkSummaryExport() {
    this._networkSummaryExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSummaryExportInput() {
    return this._networkSummaryExport;
  }

  // network_summary_import - computed: false, optional: true, required: false
  private _networkSummaryImport?: string[]; 
  public get networkSummaryImport() {
    return this.getListAttribute('network_summary_import');
  }
  public set networkSummaryImport(value: string[]) {
    this._networkSummaryImport = value;
  }
  public resetNetworkSummaryImport() {
    this._networkSummaryImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSummaryImportInput() {
    return this._networkSummaryImport;
  }

  // no_context_identifier_advertisement - computed: false, optional: true, required: false
  private _noContextIdentifierAdvertisement?: boolean | cdktf.IResolvable; 
  public get noContextIdentifierAdvertisement() {
    return this.getBooleanAttribute('no_context_identifier_advertisement');
  }
  public set noContextIdentifierAdvertisement(value: boolean | cdktf.IResolvable) {
    this._noContextIdentifierAdvertisement = value;
  }
  public resetNoContextIdentifierAdvertisement() {
    this._noContextIdentifierAdvertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noContextIdentifierAdvertisementInput() {
    return this._noContextIdentifierAdvertisement;
  }

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // area_range - computed: false, optional: true, required: false
  private _areaRange = new OspfAreaAreaRangeList(this, "area_range", true);
  public get areaRange() {
    return this._areaRange;
  }
  public putAreaRange(value: OspfAreaAreaRange[] | cdktf.IResolvable) {
    this._areaRange.internalValue = value;
  }
  public resetAreaRange() {
    this._areaRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaRangeInput() {
    return this._areaRange.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new OspfAreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: OspfAreaInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nssa - computed: false, optional: true, required: false
  private _nssa = new OspfAreaNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }
  public putNssa(value: OspfAreaNssa) {
    this._nssa.internalValue = value;
  }
  public resetNssa() {
    this._nssa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaInput() {
    return this._nssa.internalValue;
  }

  // stub - computed: false, optional: true, required: false
  private _stub = new OspfAreaStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
  public putStub(value: OspfAreaStub) {
    this._stub.internalValue = value;
  }
  public resetStub() {
    this._stub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubInput() {
    return this._stub.internalValue;
  }

  // virtual_link - computed: false, optional: true, required: false
  private _virtualLink = new OspfAreaVirtualLinkList(this, "virtual_link", true);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: OspfAreaVirtualLink[] | cdktf.IResolvable) {
    this._virtualLink.internalValue = value;
  }
  public resetVirtualLink() {
    this._virtualLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkInput() {
    return this._virtualLink.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_id: cdktf.stringToTerraform(this._areaId),
      context_identifier: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contextIdentifier),
      inter_area_prefix_export: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interAreaPrefixExport),
      inter_area_prefix_import: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interAreaPrefixImport),
      network_summary_export: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkSummaryExport),
      network_summary_import: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkSummaryImport),
      no_context_identifier_advertisement: cdktf.booleanToTerraform(this._noContextIdentifierAdvertisement),
      realm: cdktf.stringToTerraform(this._realm),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      version: cdktf.stringToTerraform(this._version),
      area_range: cdktf.listMapper(ospfAreaAreaRangeToTerraform, true)(this._areaRange.internalValue),
      interface: cdktf.listMapper(ospfAreaInterfaceToTerraform, true)(this._interface.internalValue),
      nssa: ospfAreaNssaToTerraform(this._nssa.internalValue),
      stub: ospfAreaStubToTerraform(this._stub.internalValue),
      virtual_link: cdktf.listMapper(ospfAreaVirtualLinkToTerraform, true)(this._virtualLink.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_id: {
        value: cdktf.stringToHclTerraform(this._areaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context_identifier: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contextIdentifier),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      inter_area_prefix_export: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interAreaPrefixExport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      inter_area_prefix_import: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interAreaPrefixImport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      network_summary_export: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkSummaryExport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      network_summary_import: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkSummaryImport),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      no_context_identifier_advertisement: {
        value: cdktf.booleanToHclTerraform(this._noContextIdentifierAdvertisement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area_range: {
        value: cdktf.listMapperHcl(ospfAreaAreaRangeToHclTerraform, true)(this._areaRange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfAreaAreaRangeList",
      },
      interface: {
        value: cdktf.listMapperHcl(ospfAreaInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OspfAreaInterfaceList",
      },
      nssa: {
        value: ospfAreaNssaToHclTerraform(this._nssa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OspfAreaNssa",
      },
      stub: {
        value: ospfAreaStubToHclTerraform(this._stub.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OspfAreaStub",
      },
      virtual_link: {
        value: cdktf.listMapperHcl(ospfAreaVirtualLinkToHclTerraform, true)(this._virtualLink.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OspfAreaVirtualLinkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
