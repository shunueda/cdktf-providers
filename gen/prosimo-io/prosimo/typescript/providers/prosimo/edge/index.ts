// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Cloud Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#cloud_name Edge#cloud_name}
  */
  readonly cloudName: string;
  /**
  * Cloud Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#cloud_region Edge#cloud_region}
  */
  readonly cloudRegion: string;
  /**
  * Set this to true if you would like the edge to be decommissioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#decommission_edge Edge#decommission_edge}
  */
  readonly decommissionEdge: boolean | cdktf.IResolvable;
  /**
  * Set this to true if you would like to deploy the edge 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#deploy_edge Edge#deploy_edge}
  */
  readonly deployEdge: boolean | cdktf.IResolvable;
  /**
  * Subnet Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#ip_range Edge#ip_range}
  */
  readonly ipRange: string;
  /**
  * Name of source vpc, applicable when vpc_source is existing vpc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#vpc_name Edge#vpc_name}
  */
  readonly vpcName?: string;
  /**
  * VPC Source: Available options: Prosimo/Existing, applicable only for AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#vpc_source Edge#vpc_source}
  */
  readonly vpcSource?: string;
  /**
  * Wait for the rollout of the task to complete. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#wait_for_rollout Edge#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * node_size_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#node_size_settings Edge#node_size_settings}
  */
  readonly nodeSizeSettings?: EdgeNodeSizeSettings[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#timeouts Edge#timeouts}
  */
  readonly timeouts?: EdgeTimeouts;
}
export interface EdgeNodeSizeSettingsBandwidthRange {
  /**
  * Maximum Bandwidth Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#max Edge#max}
  */
  readonly max: number;
  /**
  * Minimum Bandwidth Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#min Edge#min}
  */
  readonly min: number;
}

export function edgeNodeSizeSettingsBandwidthRangeToTerraform(struct?: EdgeNodeSizeSettingsBandwidthRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function edgeNodeSizeSettingsBandwidthRangeToHclTerraform(struct?: EdgeNodeSizeSettingsBandwidthRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeNodeSizeSettingsBandwidthRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeNodeSizeSettingsBandwidthRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeNodeSizeSettingsBandwidthRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class EdgeNodeSizeSettingsBandwidthRangeList extends cdktf.ComplexList {
  public internalValue? : EdgeNodeSizeSettingsBandwidthRange[] | cdktf.IResolvable

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
  public get(index: number): EdgeNodeSizeSettingsBandwidthRangeOutputReference {
    return new EdgeNodeSizeSettingsBandwidthRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeNodeSizeSettings {
  /**
  * bandwidth_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#bandwidth_range Edge#bandwidth_range}
  */
  readonly bandwidthRange?: EdgeNodeSizeSettingsBandwidthRange[] | cdktf.IResolvable;
}

export function edgeNodeSizeSettingsToTerraform(struct?: EdgeNodeSizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_range: cdktf.listMapper(edgeNodeSizeSettingsBandwidthRangeToTerraform, true)(struct!.bandwidthRange),
  }
}


export function edgeNodeSizeSettingsToHclTerraform(struct?: EdgeNodeSizeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_range: {
      value: cdktf.listMapperHcl(edgeNodeSizeSettingsBandwidthRangeToHclTerraform, true)(struct!.bandwidthRange),
      isBlock: true,
      type: "set",
      storageClassType: "EdgeNodeSizeSettingsBandwidthRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeNodeSizeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeNodeSizeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthRange = this._bandwidthRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeNodeSizeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthRange.internalValue = value.bandwidthRange;
    }
  }

  // bandwidth_range - computed: false, optional: true, required: false
  private _bandwidthRange = new EdgeNodeSizeSettingsBandwidthRangeList(this, "bandwidth_range", true);
  public get bandwidthRange() {
    return this._bandwidthRange;
  }
  public putBandwidthRange(value: EdgeNodeSizeSettingsBandwidthRange[] | cdktf.IResolvable) {
    this._bandwidthRange.internalValue = value;
  }
  public resetBandwidthRange() {
    this._bandwidthRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthRangeInput() {
    return this._bandwidthRange.internalValue;
  }
}

export class EdgeNodeSizeSettingsList extends cdktf.ComplexList {
  public internalValue? : EdgeNodeSizeSettings[] | cdktf.IResolvable

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
  public get(index: number): EdgeNodeSizeSettingsOutputReference {
    return new EdgeNodeSizeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#create Edge#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#delete Edge#delete}
  */
  readonly delete?: string;
}

export function edgeTimeoutsToTerraform(struct?: EdgeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function edgeTimeoutsToHclTerraform(struct?: EdgeTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EdgeTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge prosimo_edge}
*/
export class Edge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_edge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Edge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Edge to import
  * @param importFromId The id of the existing Edge that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Edge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_edge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/edge prosimo_edge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_edge',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudName = config.cloudName;
    this._cloudRegion = config.cloudRegion;
    this._decommissionEdge = config.decommissionEdge;
    this._deployEdge = config.deployEdge;
    this._ipRange = config.ipRange;
    this._vpcName = config.vpcName;
    this._vpcSource = config.vpcSource;
    this._waitForRollout = config.waitForRollout;
    this._nodeSizeSettings.internalValue = config.nodeSizeSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_name - computed: false, optional: false, required: true
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // cloud_region - computed: false, optional: false, required: true
  private _cloudRegion?: string; 
  public get cloudRegion() {
    return this.getStringAttribute('cloud_region');
  }
  public set cloudRegion(value: string) {
    this._cloudRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRegionInput() {
    return this._cloudRegion;
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // decommission_edge - computed: false, optional: false, required: true
  private _decommissionEdge?: boolean | cdktf.IResolvable; 
  public get decommissionEdge() {
    return this.getBooleanAttribute('decommission_edge');
  }
  public set decommissionEdge(value: boolean | cdktf.IResolvable) {
    this._decommissionEdge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get decommissionEdgeInput() {
    return this._decommissionEdge;
  }

  // deploy_edge - computed: false, optional: false, required: true
  private _deployEdge?: boolean | cdktf.IResolvable; 
  public get deployEdge() {
    return this.getBooleanAttribute('deploy_edge');
  }
  public set deployEdge(value: boolean | cdktf.IResolvable) {
    this._deployEdge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployEdgeInput() {
    return this._deployEdge;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_range - computed: false, optional: false, required: true
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // papp_fqdn - computed: true, optional: false, required: false
  public get pappFqdn() {
    return this.getStringAttribute('papp_fqdn');
  }

  // reg_status - computed: true, optional: false, required: false
  public get regStatus() {
    return this.getStringAttribute('reg_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // vpc_name - computed: false, optional: true, required: false
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  public resetVpcName() {
    this._vpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }

  // vpc_source - computed: false, optional: true, required: false
  private _vpcSource?: string; 
  public get vpcSource() {
    return this.getStringAttribute('vpc_source');
  }
  public set vpcSource(value: string) {
    this._vpcSource = value;
  }
  public resetVpcSource() {
    this._vpcSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSourceInput() {
    return this._vpcSource;
  }

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // node_size_settings - computed: false, optional: true, required: false
  private _nodeSizeSettings = new EdgeNodeSizeSettingsList(this, "node_size_settings", true);
  public get nodeSizeSettings() {
    return this._nodeSizeSettings;
  }
  public putNodeSizeSettings(value: EdgeNodeSizeSettings[] | cdktf.IResolvable) {
    this._nodeSizeSettings.internalValue = value;
  }
  public resetNodeSizeSettings() {
    this._nodeSizeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeSettingsInput() {
    return this._nodeSizeSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EdgeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EdgeTimeouts) {
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
      cloud_name: cdktf.stringToTerraform(this._cloudName),
      cloud_region: cdktf.stringToTerraform(this._cloudRegion),
      decommission_edge: cdktf.booleanToTerraform(this._decommissionEdge),
      deploy_edge: cdktf.booleanToTerraform(this._deployEdge),
      ip_range: cdktf.stringToTerraform(this._ipRange),
      vpc_name: cdktf.stringToTerraform(this._vpcName),
      vpc_source: cdktf.stringToTerraform(this._vpcSource),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      node_size_settings: cdktf.listMapper(edgeNodeSizeSettingsToTerraform, true)(this._nodeSizeSettings.internalValue),
      timeouts: edgeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_name: {
        value: cdktf.stringToHclTerraform(this._cloudName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_region: {
        value: cdktf.stringToHclTerraform(this._cloudRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decommission_edge: {
        value: cdktf.booleanToHclTerraform(this._decommissionEdge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy_edge: {
        value: cdktf.booleanToHclTerraform(this._deployEdge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_range: {
        value: cdktf.stringToHclTerraform(this._ipRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_name: {
        value: cdktf.stringToHclTerraform(this._vpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_source: {
        value: cdktf.stringToHclTerraform(this._vpcSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_rollout: {
        value: cdktf.booleanToHclTerraform(this._waitForRollout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_size_settings: {
        value: cdktf.listMapperHcl(edgeNodeSizeSettingsToHclTerraform, true)(this._nodeSizeSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgeNodeSizeSettingsList",
      },
      timeouts: {
        value: edgeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EdgeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
