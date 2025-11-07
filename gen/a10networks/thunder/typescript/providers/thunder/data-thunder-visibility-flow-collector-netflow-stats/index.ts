// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityFlowCollectorNetflowStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#id DataThunderVisibilityFlowCollectorNetflowStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#stats DataThunderVisibilityFlowCollectorNetflowStats#stats}
  */
  readonly stats?: DataThunderVisibilityFlowCollectorNetflowStatsStats;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#template DataThunderVisibilityFlowCollectorNetflowStats#template}
  */
  readonly template?: DataThunderVisibilityFlowCollectorNetflowStatsTemplate;
}
export interface DataThunderVisibilityFlowCollectorNetflowStatsStats {
  /**
  * nflow pkts from not configured agents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#agent_not_found DataThunderVisibilityFlowCollectorNetflowStats#agent_not_found}
  */
  readonly agentNotFound?: number;
  /**
  * Total nflow fragment packets dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#frag_dropped DataThunderVisibilityFlowCollectorNetflowStats#frag_dropped}
  */
  readonly fragDropped?: number;
  /**
  * Total nflow packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#pkts_rcvd DataThunderVisibilityFlowCollectorNetflowStats#pkts_rcvd}
  */
  readonly pktsRcvd?: number;
  /**
  * Total templates dropped because of maximum limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#template_drop_exceeded DataThunderVisibilityFlowCollectorNetflowStats#template_drop_exceeded}
  */
  readonly templateDropExceeded?: number;
  /**
  * Total templates dropped becuase of out of memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#template_drop_out_of_memory DataThunderVisibilityFlowCollectorNetflowStats#template_drop_out_of_memory}
  */
  readonly templateDropOutOfMemory?: number;
  /**
  * nflow sample direction is unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#unknown_dir DataThunderVisibilityFlowCollectorNetflowStats#unknown_dir}
  */
  readonly unknownDir?: number;
  /**
  * Total v10(IPFIX) templates created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#v10_templates_created DataThunderVisibilityFlowCollectorNetflowStats#v10_templates_created}
  */
  readonly v10TemplatesCreated?: number;
  /**
  * Total v10(IPFIX) templates deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#v10_templates_deleted DataThunderVisibilityFlowCollectorNetflowStats#v10_templates_deleted}
  */
  readonly v10TemplatesDeleted?: number;
  /**
  * Total v9 templates created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#v9_templates_created DataThunderVisibilityFlowCollectorNetflowStats#v9_templates_created}
  */
  readonly v9TemplatesCreated?: number;
  /**
  * Total v9 templates deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#v9_templates_deleted DataThunderVisibilityFlowCollectorNetflowStats#v9_templates_deleted}
  */
  readonly v9TemplatesDeleted?: number;
  /**
  * nflow version not supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#version_not_supported DataThunderVisibilityFlowCollectorNetflowStats#version_not_supported}
  */
  readonly versionNotSupported?: number;
}

export function dataThunderVisibilityFlowCollectorNetflowStatsStatsToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowStatsStatsOutputReference | DataThunderVisibilityFlowCollectorNetflowStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_not_found: cdktf.numberToTerraform(struct!.agentNotFound),
    frag_dropped: cdktf.numberToTerraform(struct!.fragDropped),
    pkts_rcvd: cdktf.numberToTerraform(struct!.pktsRcvd),
    template_drop_exceeded: cdktf.numberToTerraform(struct!.templateDropExceeded),
    template_drop_out_of_memory: cdktf.numberToTerraform(struct!.templateDropOutOfMemory),
    unknown_dir: cdktf.numberToTerraform(struct!.unknownDir),
    v10_templates_created: cdktf.numberToTerraform(struct!.v10TemplatesCreated),
    v10_templates_deleted: cdktf.numberToTerraform(struct!.v10TemplatesDeleted),
    v9_templates_created: cdktf.numberToTerraform(struct!.v9TemplatesCreated),
    v9_templates_deleted: cdktf.numberToTerraform(struct!.v9TemplatesDeleted),
    version_not_supported: cdktf.numberToTerraform(struct!.versionNotSupported),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowStatsStatsToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowStatsStatsOutputReference | DataThunderVisibilityFlowCollectorNetflowStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_not_found: {
      value: cdktf.numberToHclTerraform(struct!.agentNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_dropped: {
      value: cdktf.numberToHclTerraform(struct!.fragDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.pktsRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_drop_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.templateDropExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_drop_out_of_memory: {
      value: cdktf.numberToHclTerraform(struct!.templateDropOutOfMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_dir: {
      value: cdktf.numberToHclTerraform(struct!.unknownDir),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v10_templates_created: {
      value: cdktf.numberToHclTerraform(struct!.v10TemplatesCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v10_templates_deleted: {
      value: cdktf.numberToHclTerraform(struct!.v10TemplatesDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v9_templates_created: {
      value: cdktf.numberToHclTerraform(struct!.v9TemplatesCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v9_templates_deleted: {
      value: cdktf.numberToHclTerraform(struct!.v9TemplatesDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.versionNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentNotFound = this._agentNotFound;
    }
    if (this._fragDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragDropped = this._fragDropped;
    }
    if (this._pktsRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRcvd = this._pktsRcvd;
    }
    if (this._templateDropExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDropExceeded = this._templateDropExceeded;
    }
    if (this._templateDropOutOfMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDropOutOfMemory = this._templateDropOutOfMemory;
    }
    if (this._unknownDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownDir = this._unknownDir;
    }
    if (this._v10TemplatesCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.v10TemplatesCreated = this._v10TemplatesCreated;
    }
    if (this._v10TemplatesDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.v10TemplatesDeleted = this._v10TemplatesDeleted;
    }
    if (this._v9TemplatesCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.v9TemplatesCreated = this._v9TemplatesCreated;
    }
    if (this._v9TemplatesDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.v9TemplatesDeleted = this._v9TemplatesDeleted;
    }
    if (this._versionNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNotSupported = this._versionNotSupported;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentNotFound = undefined;
      this._fragDropped = undefined;
      this._pktsRcvd = undefined;
      this._templateDropExceeded = undefined;
      this._templateDropOutOfMemory = undefined;
      this._unknownDir = undefined;
      this._v10TemplatesCreated = undefined;
      this._v10TemplatesDeleted = undefined;
      this._v9TemplatesCreated = undefined;
      this._v9TemplatesDeleted = undefined;
      this._versionNotSupported = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentNotFound = value.agentNotFound;
      this._fragDropped = value.fragDropped;
      this._pktsRcvd = value.pktsRcvd;
      this._templateDropExceeded = value.templateDropExceeded;
      this._templateDropOutOfMemory = value.templateDropOutOfMemory;
      this._unknownDir = value.unknownDir;
      this._v10TemplatesCreated = value.v10TemplatesCreated;
      this._v10TemplatesDeleted = value.v10TemplatesDeleted;
      this._v9TemplatesCreated = value.v9TemplatesCreated;
      this._v9TemplatesDeleted = value.v9TemplatesDeleted;
      this._versionNotSupported = value.versionNotSupported;
    }
  }

  // agent_not_found - computed: false, optional: true, required: false
  private _agentNotFound?: number; 
  public get agentNotFound() {
    return this.getNumberAttribute('agent_not_found');
  }
  public set agentNotFound(value: number) {
    this._agentNotFound = value;
  }
  public resetAgentNotFound() {
    this._agentNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNotFoundInput() {
    return this._agentNotFound;
  }

  // frag_dropped - computed: false, optional: true, required: false
  private _fragDropped?: number; 
  public get fragDropped() {
    return this.getNumberAttribute('frag_dropped');
  }
  public set fragDropped(value: number) {
    this._fragDropped = value;
  }
  public resetFragDropped() {
    this._fragDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragDroppedInput() {
    return this._fragDropped;
  }

  // pkts_rcvd - computed: false, optional: true, required: false
  private _pktsRcvd?: number; 
  public get pktsRcvd() {
    return this.getNumberAttribute('pkts_rcvd');
  }
  public set pktsRcvd(value: number) {
    this._pktsRcvd = value;
  }
  public resetPktsRcvd() {
    this._pktsRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRcvdInput() {
    return this._pktsRcvd;
  }

  // template_drop_exceeded - computed: false, optional: true, required: false
  private _templateDropExceeded?: number; 
  public get templateDropExceeded() {
    return this.getNumberAttribute('template_drop_exceeded');
  }
  public set templateDropExceeded(value: number) {
    this._templateDropExceeded = value;
  }
  public resetTemplateDropExceeded() {
    this._templateDropExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDropExceededInput() {
    return this._templateDropExceeded;
  }

  // template_drop_out_of_memory - computed: false, optional: true, required: false
  private _templateDropOutOfMemory?: number; 
  public get templateDropOutOfMemory() {
    return this.getNumberAttribute('template_drop_out_of_memory');
  }
  public set templateDropOutOfMemory(value: number) {
    this._templateDropOutOfMemory = value;
  }
  public resetTemplateDropOutOfMemory() {
    this._templateDropOutOfMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDropOutOfMemoryInput() {
    return this._templateDropOutOfMemory;
  }

  // unknown_dir - computed: false, optional: true, required: false
  private _unknownDir?: number; 
  public get unknownDir() {
    return this.getNumberAttribute('unknown_dir');
  }
  public set unknownDir(value: number) {
    this._unknownDir = value;
  }
  public resetUnknownDir() {
    this._unknownDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownDirInput() {
    return this._unknownDir;
  }

  // v10_templates_created - computed: false, optional: true, required: false
  private _v10TemplatesCreated?: number; 
  public get v10TemplatesCreated() {
    return this.getNumberAttribute('v10_templates_created');
  }
  public set v10TemplatesCreated(value: number) {
    this._v10TemplatesCreated = value;
  }
  public resetV10TemplatesCreated() {
    this._v10TemplatesCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v10TemplatesCreatedInput() {
    return this._v10TemplatesCreated;
  }

  // v10_templates_deleted - computed: false, optional: true, required: false
  private _v10TemplatesDeleted?: number; 
  public get v10TemplatesDeleted() {
    return this.getNumberAttribute('v10_templates_deleted');
  }
  public set v10TemplatesDeleted(value: number) {
    this._v10TemplatesDeleted = value;
  }
  public resetV10TemplatesDeleted() {
    this._v10TemplatesDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v10TemplatesDeletedInput() {
    return this._v10TemplatesDeleted;
  }

  // v9_templates_created - computed: false, optional: true, required: false
  private _v9TemplatesCreated?: number; 
  public get v9TemplatesCreated() {
    return this.getNumberAttribute('v9_templates_created');
  }
  public set v9TemplatesCreated(value: number) {
    this._v9TemplatesCreated = value;
  }
  public resetV9TemplatesCreated() {
    this._v9TemplatesCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v9TemplatesCreatedInput() {
    return this._v9TemplatesCreated;
  }

  // v9_templates_deleted - computed: false, optional: true, required: false
  private _v9TemplatesDeleted?: number; 
  public get v9TemplatesDeleted() {
    return this.getNumberAttribute('v9_templates_deleted');
  }
  public set v9TemplatesDeleted(value: number) {
    this._v9TemplatesDeleted = value;
  }
  public resetV9TemplatesDeleted() {
    this._v9TemplatesDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v9TemplatesDeletedInput() {
    return this._v9TemplatesDeleted;
  }

  // version_not_supported - computed: false, optional: true, required: false
  private _versionNotSupported?: number; 
  public get versionNotSupported() {
    return this.getNumberAttribute('version_not_supported');
  }
  public set versionNotSupported(value: number) {
    this._versionNotSupported = value;
  }
  public resetVersionNotSupported() {
    this._versionNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNotSupportedInput() {
    return this._versionNotSupported;
  }
}
export interface DataThunderVisibilityFlowCollectorNetflowStatsTemplateStats {
  /**
  * Netflow templates added to the delete queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#templates_added_to_delq DataThunderVisibilityFlowCollectorNetflowStats#templates_added_to_delq}
  */
  readonly templatesAddedToDelq?: number;
  /**
  * Netflow templates removed from the delete queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#templates_removed_from_delq DataThunderVisibilityFlowCollectorNetflowStats#templates_removed_from_delq}
  */
  readonly templatesRemovedFromDelq?: number;
}

export function dataThunderVisibilityFlowCollectorNetflowStatsTemplateStatsToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowStatsTemplateStatsOutputReference | DataThunderVisibilityFlowCollectorNetflowStatsTemplateStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    templates_added_to_delq: cdktf.numberToTerraform(struct!.templatesAddedToDelq),
    templates_removed_from_delq: cdktf.numberToTerraform(struct!.templatesRemovedFromDelq),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowStatsTemplateStatsToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowStatsTemplateStatsOutputReference | DataThunderVisibilityFlowCollectorNetflowStatsTemplateStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    templates_added_to_delq: {
      value: cdktf.numberToHclTerraform(struct!.templatesAddedToDelq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    templates_removed_from_delq: {
      value: cdktf.numberToHclTerraform(struct!.templatesRemovedFromDelq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowStatsTemplateStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowStatsTemplateStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templatesAddedToDelq !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatesAddedToDelq = this._templatesAddedToDelq;
    }
    if (this._templatesRemovedFromDelq !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatesRemovedFromDelq = this._templatesRemovedFromDelq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowStatsTemplateStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templatesAddedToDelq = undefined;
      this._templatesRemovedFromDelq = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templatesAddedToDelq = value.templatesAddedToDelq;
      this._templatesRemovedFromDelq = value.templatesRemovedFromDelq;
    }
  }

  // templates_added_to_delq - computed: false, optional: true, required: false
  private _templatesAddedToDelq?: number; 
  public get templatesAddedToDelq() {
    return this.getNumberAttribute('templates_added_to_delq');
  }
  public set templatesAddedToDelq(value: number) {
    this._templatesAddedToDelq = value;
  }
  public resetTemplatesAddedToDelq() {
    this._templatesAddedToDelq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesAddedToDelqInput() {
    return this._templatesAddedToDelq;
  }

  // templates_removed_from_delq - computed: false, optional: true, required: false
  private _templatesRemovedFromDelq?: number; 
  public get templatesRemovedFromDelq() {
    return this.getNumberAttribute('templates_removed_from_delq');
  }
  public set templatesRemovedFromDelq(value: number) {
    this._templatesRemovedFromDelq = value;
  }
  public resetTemplatesRemovedFromDelq() {
    this._templatesRemovedFromDelq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesRemovedFromDelqInput() {
    return this._templatesRemovedFromDelq;
  }
}
export interface DataThunderVisibilityFlowCollectorNetflowStatsTemplate {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#stats DataThunderVisibilityFlowCollectorNetflowStats#stats}
  */
  readonly stats?: DataThunderVisibilityFlowCollectorNetflowStatsTemplateStats;
}

export function dataThunderVisibilityFlowCollectorNetflowStatsTemplateToTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowStatsTemplateOutputReference | DataThunderVisibilityFlowCollectorNetflowStatsTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderVisibilityFlowCollectorNetflowStatsTemplateStatsToTerraform(struct!.stats),
  }
}


export function dataThunderVisibilityFlowCollectorNetflowStatsTemplateToHclTerraform(struct?: DataThunderVisibilityFlowCollectorNetflowStatsTemplateOutputReference | DataThunderVisibilityFlowCollectorNetflowStatsTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderVisibilityFlowCollectorNetflowStatsTemplateStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityFlowCollectorNetflowStatsTemplateStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityFlowCollectorNetflowStatsTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityFlowCollectorNetflowStatsTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityFlowCollectorNetflowStatsTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityFlowCollectorNetflowStatsTemplateStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityFlowCollectorNetflowStatsTemplateStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats thunder_visibility_flow_collector_netflow_stats}
*/
export class DataThunderVisibilityFlowCollectorNetflowStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_flow_collector_netflow_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityFlowCollectorNetflowStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityFlowCollectorNetflowStats to import
  * @param importFromId The id of the existing DataThunderVisibilityFlowCollectorNetflowStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityFlowCollectorNetflowStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_flow_collector_netflow_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_flow_collector_netflow_stats thunder_visibility_flow_collector_netflow_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityFlowCollectorNetflowStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityFlowCollectorNetflowStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_flow_collector_netflow_stats',
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
    this._id = config.id;
    this._stats.internalValue = config.stats;
    this._template.internalValue = config.template;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderVisibilityFlowCollectorNetflowStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityFlowCollectorNetflowStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataThunderVisibilityFlowCollectorNetflowStatsTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataThunderVisibilityFlowCollectorNetflowStatsTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderVisibilityFlowCollectorNetflowStatsStatsToTerraform(this._stats.internalValue),
      template: dataThunderVisibilityFlowCollectorNetflowStatsTemplateToTerraform(this._template.internalValue),
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
      stats: {
        value: dataThunderVisibilityFlowCollectorNetflowStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityFlowCollectorNetflowStatsStatsList",
      },
      template: {
        value: dataThunderVisibilityFlowCollectorNetflowStatsTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityFlowCollectorNetflowStatsTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
