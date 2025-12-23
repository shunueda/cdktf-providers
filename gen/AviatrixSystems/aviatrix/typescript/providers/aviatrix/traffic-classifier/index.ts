// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficClassifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#id TrafficClassifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#policies TrafficClassifier#policies}
  */
  readonly policies: TrafficClassifierPolicies[] | cdktf.IResolvable;
}
export interface TrafficClassifierPoliciesPortRanges {
  /**
  * High port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#high TrafficClassifier#high}
  */
  readonly high?: number;
  /**
  * Low port range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#low TrafficClassifier#low}
  */
  readonly low?: number;
}

export function trafficClassifierPoliciesPortRangesToTerraform(struct?: TrafficClassifierPoliciesPortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.numberToTerraform(struct!.high),
    low: cdktf.numberToTerraform(struct!.low),
  }
}


export function trafficClassifierPoliciesPortRangesToHclTerraform(struct?: TrafficClassifierPoliciesPortRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficClassifierPoliciesPortRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficClassifierPoliciesPortRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficClassifierPoliciesPortRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high = undefined;
      this._low = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high = value.high;
      this._low = value.low;
    }
  }

  // high - computed: false, optional: true, required: false
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: false, optional: true, required: false
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }
}

export class TrafficClassifierPoliciesPortRangesList extends cdktf.ComplexList {
  public internalValue? : TrafficClassifierPoliciesPortRanges[] | cdktf.IResolvable

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
  public get(index: number): TrafficClassifierPoliciesPortRangesOutputReference {
    return new TrafficClassifierPoliciesPortRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TrafficClassifierPolicies {
  /**
  * List of destination smart group UUIDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#destination_smart_group_uuids TrafficClassifier#destination_smart_group_uuids}
  */
  readonly destinationSmartGroupUuids: string[];
  /**
  * Enable logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#enable_logging TrafficClassifier#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * Link hierarchy UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#link_hierarchy_uuid TrafficClassifier#link_hierarchy_uuid}
  */
  readonly linkHierarchyUuid?: string;
  /**
  * Policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#name TrafficClassifier#name}
  */
  readonly name: string;
  /**
  * Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#protocol TrafficClassifier#protocol}
  */
  readonly protocol?: string;
  /**
  * Route type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#route_type TrafficClassifier#route_type}
  */
  readonly routeType?: string;
  /**
  * SLA class UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#sla_class_uuid TrafficClassifier#sla_class_uuid}
  */
  readonly slaClassUuid?: string;
  /**
  * List of source smart group UUIDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#source_smart_group_uuids TrafficClassifier#source_smart_group_uuids}
  */
  readonly sourceSmartGroupUuids: string[];
  /**
  * port_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#port_ranges TrafficClassifier#port_ranges}
  */
  readonly portRanges?: TrafficClassifierPoliciesPortRanges[] | cdktf.IResolvable;
}

export function trafficClassifierPoliciesToTerraform(struct?: TrafficClassifierPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_smart_group_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationSmartGroupUuids),
    enable_logging: cdktf.booleanToTerraform(struct!.enableLogging),
    link_hierarchy_uuid: cdktf.stringToTerraform(struct!.linkHierarchyUuid),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    route_type: cdktf.stringToTerraform(struct!.routeType),
    sla_class_uuid: cdktf.stringToTerraform(struct!.slaClassUuid),
    source_smart_group_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceSmartGroupUuids),
    port_ranges: cdktf.listMapper(trafficClassifierPoliciesPortRangesToTerraform, true)(struct!.portRanges),
  }
}


export function trafficClassifierPoliciesToHclTerraform(struct?: TrafficClassifierPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_smart_group_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationSmartGroupUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_logging: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_hierarchy_uuid: {
      value: cdktf.stringToHclTerraform(struct!.linkHierarchyUuid),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_type: {
      value: cdktf.stringToHclTerraform(struct!.routeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sla_class_uuid: {
      value: cdktf.stringToHclTerraform(struct!.slaClassUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_smart_group_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceSmartGroupUuids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port_ranges: {
      value: cdktf.listMapperHcl(trafficClassifierPoliciesPortRangesToHclTerraform, true)(struct!.portRanges),
      isBlock: true,
      type: "set",
      storageClassType: "TrafficClassifierPoliciesPortRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficClassifierPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TrafficClassifierPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationSmartGroupUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSmartGroupUuids = this._destinationSmartGroupUuids;
    }
    if (this._enableLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogging = this._enableLogging;
    }
    if (this._linkHierarchyUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkHierarchyUuid = this._linkHierarchyUuid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._routeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeType = this._routeType;
    }
    if (this._slaClassUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaClassUuid = this._slaClassUuid;
    }
    if (this._sourceSmartGroupUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSmartGroupUuids = this._sourceSmartGroupUuids;
    }
    if (this._portRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficClassifierPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationSmartGroupUuids = undefined;
      this._enableLogging = undefined;
      this._linkHierarchyUuid = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._routeType = undefined;
      this._slaClassUuid = undefined;
      this._sourceSmartGroupUuids = undefined;
      this._portRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationSmartGroupUuids = value.destinationSmartGroupUuids;
      this._enableLogging = value.enableLogging;
      this._linkHierarchyUuid = value.linkHierarchyUuid;
      this._name = value.name;
      this._protocol = value.protocol;
      this._routeType = value.routeType;
      this._slaClassUuid = value.slaClassUuid;
      this._sourceSmartGroupUuids = value.sourceSmartGroupUuids;
      this._portRanges.internalValue = value.portRanges;
    }
  }

  // destination_smart_group_uuids - computed: false, optional: false, required: true
  private _destinationSmartGroupUuids?: string[]; 
  public get destinationSmartGroupUuids() {
    return this.getListAttribute('destination_smart_group_uuids');
  }
  public set destinationSmartGroupUuids(value: string[]) {
    this._destinationSmartGroupUuids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSmartGroupUuidsInput() {
    return this._destinationSmartGroupUuids;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // link_hierarchy_uuid - computed: false, optional: true, required: false
  private _linkHierarchyUuid?: string; 
  public get linkHierarchyUuid() {
    return this.getStringAttribute('link_hierarchy_uuid');
  }
  public set linkHierarchyUuid(value: string) {
    this._linkHierarchyUuid = value;
  }
  public resetLinkHierarchyUuid() {
    this._linkHierarchyUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkHierarchyUuidInput() {
    return this._linkHierarchyUuid;
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

  // route_type - computed: false, optional: true, required: false
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  public resetRouteType() {
    this._routeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }

  // sla_class_uuid - computed: false, optional: true, required: false
  private _slaClassUuid?: string; 
  public get slaClassUuid() {
    return this.getStringAttribute('sla_class_uuid');
  }
  public set slaClassUuid(value: string) {
    this._slaClassUuid = value;
  }
  public resetSlaClassUuid() {
    this._slaClassUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaClassUuidInput() {
    return this._slaClassUuid;
  }

  // source_smart_group_uuids - computed: false, optional: false, required: true
  private _sourceSmartGroupUuids?: string[]; 
  public get sourceSmartGroupUuids() {
    return this.getListAttribute('source_smart_group_uuids');
  }
  public set sourceSmartGroupUuids(value: string[]) {
    this._sourceSmartGroupUuids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSmartGroupUuidsInput() {
    return this._sourceSmartGroupUuids;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges = new TrafficClassifierPoliciesPortRangesList(this, "port_ranges", true);
  public get portRanges() {
    return this._portRanges;
  }
  public putPortRanges(value: TrafficClassifierPoliciesPortRanges[] | cdktf.IResolvable) {
    this._portRanges.internalValue = value;
  }
  public resetPortRanges() {
    this._portRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges.internalValue;
  }
}

export class TrafficClassifierPoliciesList extends cdktf.ComplexList {
  public internalValue? : TrafficClassifierPolicies[] | cdktf.IResolvable

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
  public get(index: number): TrafficClassifierPoliciesOutputReference {
    return new TrafficClassifierPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier aviatrix_traffic_classifier}
*/
export class TrafficClassifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_traffic_classifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficClassifier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficClassifier to import
  * @param importFromId The id of the existing TrafficClassifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficClassifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_traffic_classifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/traffic_classifier aviatrix_traffic_classifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficClassifierConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficClassifierConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_traffic_classifier',
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
    this._id = config.id;
    this._policies.internalValue = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policies - computed: false, optional: false, required: true
  private _policies = new TrafficClassifierPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: TrafficClassifierPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policies: cdktf.listMapper(trafficClassifierPoliciesToTerraform, true)(this._policies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktf.listMapperHcl(trafficClassifierPoliciesToHclTerraform, true)(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TrafficClassifierPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
