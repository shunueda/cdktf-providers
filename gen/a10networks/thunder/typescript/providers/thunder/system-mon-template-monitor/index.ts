// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemMonTemplateMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#id SystemMonTemplateMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor template ID Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#id1 SystemMonTemplateMonitor#id1}
  */
  readonly id1: number;
  /**
  * 'monitor-and': Configures the monitors in current template to work with AND logic; 'monitor-or': Configures the monitors in current template to work with OR logic;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#monitor_relation SystemMonTemplateMonitor#monitor_relation}
  */
  readonly monitorRelation?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#user_tag SystemMonTemplateMonitor#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#uuid SystemMonTemplateMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * clear_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#clear_cfg SystemMonTemplateMonitor#clear_cfg}
  */
  readonly clearCfg?: SystemMonTemplateMonitorClearCfg[] | cdktf.IResolvable;
  /**
  * link_disable_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#link_disable_cfg SystemMonTemplateMonitor#link_disable_cfg}
  */
  readonly linkDisableCfg?: SystemMonTemplateMonitorLinkDisableCfg[] | cdktf.IResolvable;
  /**
  * link_down_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#link_down_cfg SystemMonTemplateMonitor#link_down_cfg}
  */
  readonly linkDownCfg?: SystemMonTemplateMonitorLinkDownCfg[] | cdktf.IResolvable;
  /**
  * link_enable_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#link_enable_cfg SystemMonTemplateMonitor#link_enable_cfg}
  */
  readonly linkEnableCfg?: SystemMonTemplateMonitorLinkEnableCfg[] | cdktf.IResolvable;
  /**
  * link_up_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#link_up_cfg SystemMonTemplateMonitor#link_up_cfg}
  */
  readonly linkUpCfg?: SystemMonTemplateMonitorLinkUpCfg[] | cdktf.IResolvable;
}
export interface SystemMonTemplateMonitorClearCfg {
  /**
  * Partition name to clear
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#clear_all_partition SystemMonTemplateMonitor#clear_all_partition}
  */
  readonly clearAllPartition?: string;
  /**
  * Clear all partitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#clear_all_partition_all SystemMonTemplateMonitor#clear_all_partition_all}
  */
  readonly clearAllPartitionAll?: number;
  /**
  * Sequence number (Specify the port physical port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#clear_all_sequence SystemMonTemplateMonitor#clear_all_sequence}
  */
  readonly clearAllSequence?: number;
  /**
  * Partition name to clear
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#clear_partition SystemMonTemplateMonitor#clear_partition}
  */
  readonly clearPartition?: string;
  /**
  * Clear all partitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#clear_partition_all SystemMonTemplateMonitor#clear_partition_all}
  */
  readonly clearPartitionAll?: number;
  /**
  * Specify the port physical port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#clear_sequence SystemMonTemplateMonitor#clear_sequence}
  */
  readonly clearSequence?: number;
  /**
  * 'all': Clear all sessions; 'sequence': Sequence number;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#sessions SystemMonTemplateMonitor#sessions}
  */
  readonly sessions?: string;
}

export function systemMonTemplateMonitorClearCfgToTerraform(struct?: SystemMonTemplateMonitorClearCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_all_partition: cdktf.stringToTerraform(struct!.clearAllPartition),
    clear_all_partition_all: cdktf.numberToTerraform(struct!.clearAllPartitionAll),
    clear_all_sequence: cdktf.numberToTerraform(struct!.clearAllSequence),
    clear_partition: cdktf.stringToTerraform(struct!.clearPartition),
    clear_partition_all: cdktf.numberToTerraform(struct!.clearPartitionAll),
    clear_sequence: cdktf.numberToTerraform(struct!.clearSequence),
    sessions: cdktf.stringToTerraform(struct!.sessions),
  }
}


export function systemMonTemplateMonitorClearCfgToHclTerraform(struct?: SystemMonTemplateMonitorClearCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_all_partition: {
      value: cdktf.stringToHclTerraform(struct!.clearAllPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clear_all_partition_all: {
      value: cdktf.numberToHclTerraform(struct!.clearAllPartitionAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_all_sequence: {
      value: cdktf.numberToHclTerraform(struct!.clearAllSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_partition: {
      value: cdktf.stringToHclTerraform(struct!.clearPartition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clear_partition_all: {
      value: cdktf.numberToHclTerraform(struct!.clearPartitionAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_sequence: {
      value: cdktf.numberToHclTerraform(struct!.clearSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessions: {
      value: cdktf.stringToHclTerraform(struct!.sessions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMonTemplateMonitorClearCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorClearCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearAllPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearAllPartition = this._clearAllPartition;
    }
    if (this._clearAllPartitionAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearAllPartitionAll = this._clearAllPartitionAll;
    }
    if (this._clearAllSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearAllSequence = this._clearAllSequence;
    }
    if (this._clearPartition !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPartition = this._clearPartition;
    }
    if (this._clearPartitionAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearPartitionAll = this._clearPartitionAll;
    }
    if (this._clearSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSequence = this._clearSequence;
    }
    if (this._sessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessions = this._sessions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMonTemplateMonitorClearCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearAllPartition = undefined;
      this._clearAllPartitionAll = undefined;
      this._clearAllSequence = undefined;
      this._clearPartition = undefined;
      this._clearPartitionAll = undefined;
      this._clearSequence = undefined;
      this._sessions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clearAllPartition = value.clearAllPartition;
      this._clearAllPartitionAll = value.clearAllPartitionAll;
      this._clearAllSequence = value.clearAllSequence;
      this._clearPartition = value.clearPartition;
      this._clearPartitionAll = value.clearPartitionAll;
      this._clearSequence = value.clearSequence;
      this._sessions = value.sessions;
    }
  }

  // clear_all_partition - computed: false, optional: true, required: false
  private _clearAllPartition?: string; 
  public get clearAllPartition() {
    return this.getStringAttribute('clear_all_partition');
  }
  public set clearAllPartition(value: string) {
    this._clearAllPartition = value;
  }
  public resetClearAllPartition() {
    this._clearAllPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearAllPartitionInput() {
    return this._clearAllPartition;
  }

  // clear_all_partition_all - computed: false, optional: true, required: false
  private _clearAllPartitionAll?: number; 
  public get clearAllPartitionAll() {
    return this.getNumberAttribute('clear_all_partition_all');
  }
  public set clearAllPartitionAll(value: number) {
    this._clearAllPartitionAll = value;
  }
  public resetClearAllPartitionAll() {
    this._clearAllPartitionAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearAllPartitionAllInput() {
    return this._clearAllPartitionAll;
  }

  // clear_all_sequence - computed: false, optional: true, required: false
  private _clearAllSequence?: number; 
  public get clearAllSequence() {
    return this.getNumberAttribute('clear_all_sequence');
  }
  public set clearAllSequence(value: number) {
    this._clearAllSequence = value;
  }
  public resetClearAllSequence() {
    this._clearAllSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearAllSequenceInput() {
    return this._clearAllSequence;
  }

  // clear_partition - computed: false, optional: true, required: false
  private _clearPartition?: string; 
  public get clearPartition() {
    return this.getStringAttribute('clear_partition');
  }
  public set clearPartition(value: string) {
    this._clearPartition = value;
  }
  public resetClearPartition() {
    this._clearPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPartitionInput() {
    return this._clearPartition;
  }

  // clear_partition_all - computed: false, optional: true, required: false
  private _clearPartitionAll?: number; 
  public get clearPartitionAll() {
    return this.getNumberAttribute('clear_partition_all');
  }
  public set clearPartitionAll(value: number) {
    this._clearPartitionAll = value;
  }
  public resetClearPartitionAll() {
    this._clearPartitionAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearPartitionAllInput() {
    return this._clearPartitionAll;
  }

  // clear_sequence - computed: false, optional: true, required: false
  private _clearSequence?: number; 
  public get clearSequence() {
    return this.getNumberAttribute('clear_sequence');
  }
  public set clearSequence(value: number) {
    this._clearSequence = value;
  }
  public resetClearSequence() {
    this._clearSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSequenceInput() {
    return this._clearSequence;
  }

  // sessions - computed: false, optional: true, required: false
  private _sessions?: string; 
  public get sessions() {
    return this.getStringAttribute('sessions');
  }
  public set sessions(value: string) {
    this._sessions = value;
  }
  public resetSessions() {
    this._sessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsInput() {
    return this._sessions;
  }
}

export class SystemMonTemplateMonitorClearCfgList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorClearCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorClearCfgOutputReference {
    return new SystemMonTemplateMonitorClearCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMonTemplateMonitorLinkDisableCfg {
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#dis_sequence SystemMonTemplateMonitor#dis_sequence}
  */
  readonly disSequence?: number;
  /**
  * Specify the physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#diseth SystemMonTemplateMonitor#diseth}
  */
  readonly diseth?: number;
}

export function systemMonTemplateMonitorLinkDisableCfgToTerraform(struct?: SystemMonTemplateMonitorLinkDisableCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dis_sequence: cdktf.numberToTerraform(struct!.disSequence),
    diseth: cdktf.numberToTerraform(struct!.diseth),
  }
}


export function systemMonTemplateMonitorLinkDisableCfgToHclTerraform(struct?: SystemMonTemplateMonitorLinkDisableCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dis_sequence: {
      value: cdktf.numberToHclTerraform(struct!.disSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    diseth: {
      value: cdktf.numberToHclTerraform(struct!.diseth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMonTemplateMonitorLinkDisableCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorLinkDisableCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.disSequence = this._disSequence;
    }
    if (this._diseth !== undefined) {
      hasAnyValues = true;
      internalValueResult.diseth = this._diseth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMonTemplateMonitorLinkDisableCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disSequence = undefined;
      this._diseth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disSequence = value.disSequence;
      this._diseth = value.diseth;
    }
  }

  // dis_sequence - computed: false, optional: true, required: false
  private _disSequence?: number; 
  public get disSequence() {
    return this.getNumberAttribute('dis_sequence');
  }
  public set disSequence(value: number) {
    this._disSequence = value;
  }
  public resetDisSequence() {
    this._disSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disSequenceInput() {
    return this._disSequence;
  }

  // diseth - computed: false, optional: true, required: false
  private _diseth?: number; 
  public get diseth() {
    return this.getNumberAttribute('diseth');
  }
  public set diseth(value: number) {
    this._diseth = value;
  }
  public resetDiseth() {
    this._diseth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disethInput() {
    return this._diseth;
  }
}

export class SystemMonTemplateMonitorLinkDisableCfgList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorLinkDisableCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorLinkDisableCfgOutputReference {
    return new SystemMonTemplateMonitorLinkDisableCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMonTemplateMonitorLinkDownCfg {
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#link_down_sequence1 SystemMonTemplateMonitor#link_down_sequence1}
  */
  readonly linkDownSequence1?: number;
  /**
  * Sequence number (Specify the seqeuence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#link_down_sequence2 SystemMonTemplateMonitor#link_down_sequence2}
  */
  readonly linkDownSequence2?: number;
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#link_down_sequence3 SystemMonTemplateMonitor#link_down_sequence3}
  */
  readonly linkDownSequence3?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#linkdown_ethernet1 SystemMonTemplateMonitor#linkdown_ethernet1}
  */
  readonly linkdownEthernet1?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#linkdown_ethernet2 SystemMonTemplateMonitor#linkdown_ethernet2}
  */
  readonly linkdownEthernet2?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#linkdown_ethernet3 SystemMonTemplateMonitor#linkdown_ethernet3}
  */
  readonly linkdownEthernet3?: number;
}

export function systemMonTemplateMonitorLinkDownCfgToTerraform(struct?: SystemMonTemplateMonitorLinkDownCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_down_sequence1: cdktf.numberToTerraform(struct!.linkDownSequence1),
    link_down_sequence2: cdktf.numberToTerraform(struct!.linkDownSequence2),
    link_down_sequence3: cdktf.numberToTerraform(struct!.linkDownSequence3),
    linkdown_ethernet1: cdktf.numberToTerraform(struct!.linkdownEthernet1),
    linkdown_ethernet2: cdktf.numberToTerraform(struct!.linkdownEthernet2),
    linkdown_ethernet3: cdktf.numberToTerraform(struct!.linkdownEthernet3),
  }
}


export function systemMonTemplateMonitorLinkDownCfgToHclTerraform(struct?: SystemMonTemplateMonitorLinkDownCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_down_sequence1: {
      value: cdktf.numberToHclTerraform(struct!.linkDownSequence1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_down_sequence2: {
      value: cdktf.numberToHclTerraform(struct!.linkDownSequence2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_down_sequence3: {
      value: cdktf.numberToHclTerraform(struct!.linkDownSequence3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linkdown_ethernet1: {
      value: cdktf.numberToHclTerraform(struct!.linkdownEthernet1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linkdown_ethernet2: {
      value: cdktf.numberToHclTerraform(struct!.linkdownEthernet2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linkdown_ethernet3: {
      value: cdktf.numberToHclTerraform(struct!.linkdownEthernet3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMonTemplateMonitorLinkDownCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorLinkDownCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkDownSequence1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDownSequence1 = this._linkDownSequence1;
    }
    if (this._linkDownSequence2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDownSequence2 = this._linkDownSequence2;
    }
    if (this._linkDownSequence3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDownSequence3 = this._linkDownSequence3;
    }
    if (this._linkdownEthernet1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkdownEthernet1 = this._linkdownEthernet1;
    }
    if (this._linkdownEthernet2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkdownEthernet2 = this._linkdownEthernet2;
    }
    if (this._linkdownEthernet3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkdownEthernet3 = this._linkdownEthernet3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMonTemplateMonitorLinkDownCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linkDownSequence1 = undefined;
      this._linkDownSequence2 = undefined;
      this._linkDownSequence3 = undefined;
      this._linkdownEthernet1 = undefined;
      this._linkdownEthernet2 = undefined;
      this._linkdownEthernet3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linkDownSequence1 = value.linkDownSequence1;
      this._linkDownSequence2 = value.linkDownSequence2;
      this._linkDownSequence3 = value.linkDownSequence3;
      this._linkdownEthernet1 = value.linkdownEthernet1;
      this._linkdownEthernet2 = value.linkdownEthernet2;
      this._linkdownEthernet3 = value.linkdownEthernet3;
    }
  }

  // link_down_sequence1 - computed: false, optional: true, required: false
  private _linkDownSequence1?: number; 
  public get linkDownSequence1() {
    return this.getNumberAttribute('link_down_sequence1');
  }
  public set linkDownSequence1(value: number) {
    this._linkDownSequence1 = value;
  }
  public resetLinkDownSequence1() {
    this._linkDownSequence1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownSequence1Input() {
    return this._linkDownSequence1;
  }

  // link_down_sequence2 - computed: false, optional: true, required: false
  private _linkDownSequence2?: number; 
  public get linkDownSequence2() {
    return this.getNumberAttribute('link_down_sequence2');
  }
  public set linkDownSequence2(value: number) {
    this._linkDownSequence2 = value;
  }
  public resetLinkDownSequence2() {
    this._linkDownSequence2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownSequence2Input() {
    return this._linkDownSequence2;
  }

  // link_down_sequence3 - computed: false, optional: true, required: false
  private _linkDownSequence3?: number; 
  public get linkDownSequence3() {
    return this.getNumberAttribute('link_down_sequence3');
  }
  public set linkDownSequence3(value: number) {
    this._linkDownSequence3 = value;
  }
  public resetLinkDownSequence3() {
    this._linkDownSequence3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownSequence3Input() {
    return this._linkDownSequence3;
  }

  // linkdown_ethernet1 - computed: false, optional: true, required: false
  private _linkdownEthernet1?: number; 
  public get linkdownEthernet1() {
    return this.getNumberAttribute('linkdown_ethernet1');
  }
  public set linkdownEthernet1(value: number) {
    this._linkdownEthernet1 = value;
  }
  public resetLinkdownEthernet1() {
    this._linkdownEthernet1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkdownEthernet1Input() {
    return this._linkdownEthernet1;
  }

  // linkdown_ethernet2 - computed: false, optional: true, required: false
  private _linkdownEthernet2?: number; 
  public get linkdownEthernet2() {
    return this.getNumberAttribute('linkdown_ethernet2');
  }
  public set linkdownEthernet2(value: number) {
    this._linkdownEthernet2 = value;
  }
  public resetLinkdownEthernet2() {
    this._linkdownEthernet2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkdownEthernet2Input() {
    return this._linkdownEthernet2;
  }

  // linkdown_ethernet3 - computed: false, optional: true, required: false
  private _linkdownEthernet3?: number; 
  public get linkdownEthernet3() {
    return this.getNumberAttribute('linkdown_ethernet3');
  }
  public set linkdownEthernet3(value: number) {
    this._linkdownEthernet3 = value;
  }
  public resetLinkdownEthernet3() {
    this._linkdownEthernet3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkdownEthernet3Input() {
    return this._linkdownEthernet3;
  }
}

export class SystemMonTemplateMonitorLinkDownCfgList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorLinkDownCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorLinkDownCfgOutputReference {
    return new SystemMonTemplateMonitorLinkDownCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMonTemplateMonitorLinkEnableCfg {
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#ena_sequence SystemMonTemplateMonitor#ena_sequence}
  */
  readonly enaSequence?: number;
  /**
  * Specify the physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#enaeth SystemMonTemplateMonitor#enaeth}
  */
  readonly enaeth?: number;
}

export function systemMonTemplateMonitorLinkEnableCfgToTerraform(struct?: SystemMonTemplateMonitorLinkEnableCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ena_sequence: cdktf.numberToTerraform(struct!.enaSequence),
    enaeth: cdktf.numberToTerraform(struct!.enaeth),
  }
}


export function systemMonTemplateMonitorLinkEnableCfgToHclTerraform(struct?: SystemMonTemplateMonitorLinkEnableCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ena_sequence: {
      value: cdktf.numberToHclTerraform(struct!.enaSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enaeth: {
      value: cdktf.numberToHclTerraform(struct!.enaeth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMonTemplateMonitorLinkEnableCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorLinkEnableCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enaSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.enaSequence = this._enaSequence;
    }
    if (this._enaeth !== undefined) {
      hasAnyValues = true;
      internalValueResult.enaeth = this._enaeth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMonTemplateMonitorLinkEnableCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enaSequence = undefined;
      this._enaeth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enaSequence = value.enaSequence;
      this._enaeth = value.enaeth;
    }
  }

  // ena_sequence - computed: false, optional: true, required: false
  private _enaSequence?: number; 
  public get enaSequence() {
    return this.getNumberAttribute('ena_sequence');
  }
  public set enaSequence(value: number) {
    this._enaSequence = value;
  }
  public resetEnaSequence() {
    this._enaSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaSequenceInput() {
    return this._enaSequence;
  }

  // enaeth - computed: false, optional: true, required: false
  private _enaeth?: number; 
  public get enaeth() {
    return this.getNumberAttribute('enaeth');
  }
  public set enaeth(value: number) {
    this._enaeth = value;
  }
  public resetEnaeth() {
    this._enaeth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enaethInput() {
    return this._enaeth;
  }
}

export class SystemMonTemplateMonitorLinkEnableCfgList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorLinkEnableCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorLinkEnableCfgOutputReference {
    return new SystemMonTemplateMonitorLinkEnableCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMonTemplateMonitorLinkUpCfg {
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#link_up_sequence1 SystemMonTemplateMonitor#link_up_sequence1}
  */
  readonly linkUpSequence1?: number;
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#link_up_sequence2 SystemMonTemplateMonitor#link_up_sequence2}
  */
  readonly linkUpSequence2?: number;
  /**
  * Sequence number (Specify the sequece number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#link_up_sequence3 SystemMonTemplateMonitor#link_up_sequence3}
  */
  readonly linkUpSequence3?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#linkup_ethernet1 SystemMonTemplateMonitor#linkup_ethernet1}
  */
  readonly linkupEthernet1?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#linkup_ethernet2 SystemMonTemplateMonitor#linkup_ethernet2}
  */
  readonly linkupEthernet2?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#linkup_ethernet3 SystemMonTemplateMonitor#linkup_ethernet3}
  */
  readonly linkupEthernet3?: number;
}

export function systemMonTemplateMonitorLinkUpCfgToTerraform(struct?: SystemMonTemplateMonitorLinkUpCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_up_sequence1: cdktf.numberToTerraform(struct!.linkUpSequence1),
    link_up_sequence2: cdktf.numberToTerraform(struct!.linkUpSequence2),
    link_up_sequence3: cdktf.numberToTerraform(struct!.linkUpSequence3),
    linkup_ethernet1: cdktf.numberToTerraform(struct!.linkupEthernet1),
    linkup_ethernet2: cdktf.numberToTerraform(struct!.linkupEthernet2),
    linkup_ethernet3: cdktf.numberToTerraform(struct!.linkupEthernet3),
  }
}


export function systemMonTemplateMonitorLinkUpCfgToHclTerraform(struct?: SystemMonTemplateMonitorLinkUpCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_up_sequence1: {
      value: cdktf.numberToHclTerraform(struct!.linkUpSequence1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_sequence2: {
      value: cdktf.numberToHclTerraform(struct!.linkUpSequence2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_sequence3: {
      value: cdktf.numberToHclTerraform(struct!.linkUpSequence3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linkup_ethernet1: {
      value: cdktf.numberToHclTerraform(struct!.linkupEthernet1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linkup_ethernet2: {
      value: cdktf.numberToHclTerraform(struct!.linkupEthernet2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linkup_ethernet3: {
      value: cdktf.numberToHclTerraform(struct!.linkupEthernet3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMonTemplateMonitorLinkUpCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorLinkUpCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkUpSequence1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpSequence1 = this._linkUpSequence1;
    }
    if (this._linkUpSequence2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpSequence2 = this._linkUpSequence2;
    }
    if (this._linkUpSequence3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpSequence3 = this._linkUpSequence3;
    }
    if (this._linkupEthernet1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkupEthernet1 = this._linkupEthernet1;
    }
    if (this._linkupEthernet2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkupEthernet2 = this._linkupEthernet2;
    }
    if (this._linkupEthernet3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkupEthernet3 = this._linkupEthernet3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMonTemplateMonitorLinkUpCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linkUpSequence1 = undefined;
      this._linkUpSequence2 = undefined;
      this._linkUpSequence3 = undefined;
      this._linkupEthernet1 = undefined;
      this._linkupEthernet2 = undefined;
      this._linkupEthernet3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linkUpSequence1 = value.linkUpSequence1;
      this._linkUpSequence2 = value.linkUpSequence2;
      this._linkUpSequence3 = value.linkUpSequence3;
      this._linkupEthernet1 = value.linkupEthernet1;
      this._linkupEthernet2 = value.linkupEthernet2;
      this._linkupEthernet3 = value.linkupEthernet3;
    }
  }

  // link_up_sequence1 - computed: false, optional: true, required: false
  private _linkUpSequence1?: number; 
  public get linkUpSequence1() {
    return this.getNumberAttribute('link_up_sequence1');
  }
  public set linkUpSequence1(value: number) {
    this._linkUpSequence1 = value;
  }
  public resetLinkUpSequence1() {
    this._linkUpSequence1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpSequence1Input() {
    return this._linkUpSequence1;
  }

  // link_up_sequence2 - computed: false, optional: true, required: false
  private _linkUpSequence2?: number; 
  public get linkUpSequence2() {
    return this.getNumberAttribute('link_up_sequence2');
  }
  public set linkUpSequence2(value: number) {
    this._linkUpSequence2 = value;
  }
  public resetLinkUpSequence2() {
    this._linkUpSequence2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpSequence2Input() {
    return this._linkUpSequence2;
  }

  // link_up_sequence3 - computed: false, optional: true, required: false
  private _linkUpSequence3?: number; 
  public get linkUpSequence3() {
    return this.getNumberAttribute('link_up_sequence3');
  }
  public set linkUpSequence3(value: number) {
    this._linkUpSequence3 = value;
  }
  public resetLinkUpSequence3() {
    this._linkUpSequence3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpSequence3Input() {
    return this._linkUpSequence3;
  }

  // linkup_ethernet1 - computed: false, optional: true, required: false
  private _linkupEthernet1?: number; 
  public get linkupEthernet1() {
    return this.getNumberAttribute('linkup_ethernet1');
  }
  public set linkupEthernet1(value: number) {
    this._linkupEthernet1 = value;
  }
  public resetLinkupEthernet1() {
    this._linkupEthernet1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkupEthernet1Input() {
    return this._linkupEthernet1;
  }

  // linkup_ethernet2 - computed: false, optional: true, required: false
  private _linkupEthernet2?: number; 
  public get linkupEthernet2() {
    return this.getNumberAttribute('linkup_ethernet2');
  }
  public set linkupEthernet2(value: number) {
    this._linkupEthernet2 = value;
  }
  public resetLinkupEthernet2() {
    this._linkupEthernet2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkupEthernet2Input() {
    return this._linkupEthernet2;
  }

  // linkup_ethernet3 - computed: false, optional: true, required: false
  private _linkupEthernet3?: number; 
  public get linkupEthernet3() {
    return this.getNumberAttribute('linkup_ethernet3');
  }
  public set linkupEthernet3(value: number) {
    this._linkupEthernet3 = value;
  }
  public resetLinkupEthernet3() {
    this._linkupEthernet3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkupEthernet3Input() {
    return this._linkupEthernet3;
  }
}

export class SystemMonTemplateMonitorLinkUpCfgList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorLinkUpCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorLinkUpCfgOutputReference {
    return new SystemMonTemplateMonitorLinkUpCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor thunder_system_mon_template_monitor}
*/
export class SystemMonTemplateMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_mon_template_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemMonTemplateMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemMonTemplateMonitor to import
  * @param importFromId The id of the existing SystemMonTemplateMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemMonTemplateMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_mon_template_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_mon_template_monitor thunder_system_mon_template_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemMonTemplateMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: SystemMonTemplateMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_mon_template_monitor',
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
    this._id = config.id;
    this._id1 = config.id1;
    this._monitorRelation = config.monitorRelation;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._clearCfg.internalValue = config.clearCfg;
    this._linkDisableCfg.internalValue = config.linkDisableCfg;
    this._linkDownCfg.internalValue = config.linkDownCfg;
    this._linkEnableCfg.internalValue = config.linkEnableCfg;
    this._linkUpCfg.internalValue = config.linkUpCfg;
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

  // id1 - computed: false, optional: false, required: true
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // monitor_relation - computed: false, optional: true, required: false
  private _monitorRelation?: string; 
  public get monitorRelation() {
    return this.getStringAttribute('monitor_relation');
  }
  public set monitorRelation(value: string) {
    this._monitorRelation = value;
  }
  public resetMonitorRelation() {
    this._monitorRelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorRelationInput() {
    return this._monitorRelation;
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

  // clear_cfg - computed: false, optional: true, required: false
  private _clearCfg = new SystemMonTemplateMonitorClearCfgList(this, "clear_cfg", false);
  public get clearCfg() {
    return this._clearCfg;
  }
  public putClearCfg(value: SystemMonTemplateMonitorClearCfg[] | cdktf.IResolvable) {
    this._clearCfg.internalValue = value;
  }
  public resetClearCfg() {
    this._clearCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearCfgInput() {
    return this._clearCfg.internalValue;
  }

  // link_disable_cfg - computed: false, optional: true, required: false
  private _linkDisableCfg = new SystemMonTemplateMonitorLinkDisableCfgList(this, "link_disable_cfg", false);
  public get linkDisableCfg() {
    return this._linkDisableCfg;
  }
  public putLinkDisableCfg(value: SystemMonTemplateMonitorLinkDisableCfg[] | cdktf.IResolvable) {
    this._linkDisableCfg.internalValue = value;
  }
  public resetLinkDisableCfg() {
    this._linkDisableCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDisableCfgInput() {
    return this._linkDisableCfg.internalValue;
  }

  // link_down_cfg - computed: false, optional: true, required: false
  private _linkDownCfg = new SystemMonTemplateMonitorLinkDownCfgList(this, "link_down_cfg", false);
  public get linkDownCfg() {
    return this._linkDownCfg;
  }
  public putLinkDownCfg(value: SystemMonTemplateMonitorLinkDownCfg[] | cdktf.IResolvable) {
    this._linkDownCfg.internalValue = value;
  }
  public resetLinkDownCfg() {
    this._linkDownCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownCfgInput() {
    return this._linkDownCfg.internalValue;
  }

  // link_enable_cfg - computed: false, optional: true, required: false
  private _linkEnableCfg = new SystemMonTemplateMonitorLinkEnableCfgList(this, "link_enable_cfg", false);
  public get linkEnableCfg() {
    return this._linkEnableCfg;
  }
  public putLinkEnableCfg(value: SystemMonTemplateMonitorLinkEnableCfg[] | cdktf.IResolvable) {
    this._linkEnableCfg.internalValue = value;
  }
  public resetLinkEnableCfg() {
    this._linkEnableCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkEnableCfgInput() {
    return this._linkEnableCfg.internalValue;
  }

  // link_up_cfg - computed: false, optional: true, required: false
  private _linkUpCfg = new SystemMonTemplateMonitorLinkUpCfgList(this, "link_up_cfg", false);
  public get linkUpCfg() {
    return this._linkUpCfg;
  }
  public putLinkUpCfg(value: SystemMonTemplateMonitorLinkUpCfg[] | cdktf.IResolvable) {
    this._linkUpCfg.internalValue = value;
  }
  public resetLinkUpCfg() {
    this._linkUpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpCfgInput() {
    return this._linkUpCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.numberToTerraform(this._id1),
      monitor_relation: cdktf.stringToTerraform(this._monitorRelation),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      clear_cfg: cdktf.listMapper(systemMonTemplateMonitorClearCfgToTerraform, true)(this._clearCfg.internalValue),
      link_disable_cfg: cdktf.listMapper(systemMonTemplateMonitorLinkDisableCfgToTerraform, true)(this._linkDisableCfg.internalValue),
      link_down_cfg: cdktf.listMapper(systemMonTemplateMonitorLinkDownCfgToTerraform, true)(this._linkDownCfg.internalValue),
      link_enable_cfg: cdktf.listMapper(systemMonTemplateMonitorLinkEnableCfgToTerraform, true)(this._linkEnableCfg.internalValue),
      link_up_cfg: cdktf.listMapper(systemMonTemplateMonitorLinkUpCfgToTerraform, true)(this._linkUpCfg.internalValue),
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
      id1: {
        value: cdktf.numberToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_relation: {
        value: cdktf.stringToHclTerraform(this._monitorRelation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      clear_cfg: {
        value: cdktf.listMapperHcl(systemMonTemplateMonitorClearCfgToHclTerraform, true)(this._clearCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemMonTemplateMonitorClearCfgList",
      },
      link_disable_cfg: {
        value: cdktf.listMapperHcl(systemMonTemplateMonitorLinkDisableCfgToHclTerraform, true)(this._linkDisableCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemMonTemplateMonitorLinkDisableCfgList",
      },
      link_down_cfg: {
        value: cdktf.listMapperHcl(systemMonTemplateMonitorLinkDownCfgToHclTerraform, true)(this._linkDownCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemMonTemplateMonitorLinkDownCfgList",
      },
      link_enable_cfg: {
        value: cdktf.listMapperHcl(systemMonTemplateMonitorLinkEnableCfgToHclTerraform, true)(this._linkEnableCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemMonTemplateMonitorLinkEnableCfgList",
      },
      link_up_cfg: {
        value: cdktf.listMapperHcl(systemMonTemplateMonitorLinkUpCfgToHclTerraform, true)(this._linkUpCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemMonTemplateMonitorLinkUpCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
