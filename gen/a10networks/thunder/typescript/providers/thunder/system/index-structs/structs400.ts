import * as cdktf from 'cdktf';
import { SystemMonTemplateLinkBlockAsDown,
systemMonTemplateLinkBlockAsDownToTerraform,
systemMonTemplateLinkBlockAsDownToHclTerraform,
SystemMonTemplateLinkBlockAsDownOutputReference } from './structs0'
export interface SystemMonTemplateLinkDownOnRestart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemMonTemplateLinkDownOnRestartToTerraform(struct?: SystemMonTemplateLinkDownOnRestartOutputReference | SystemMonTemplateLinkDownOnRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemMonTemplateLinkDownOnRestartToHclTerraform(struct?: SystemMonTemplateLinkDownOnRestartOutputReference | SystemMonTemplateLinkDownOnRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMonTemplateLinkDownOnRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemMonTemplateLinkDownOnRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMonTemplateLinkDownOnRestart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface SystemMonTemplateMonitorListClearCfg {
  /**
  * Sequence number (Specify the port physical port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#clear_all_sequence System#clear_all_sequence}
  */
  readonly clearAllSequence?: number;
  /**
  * Specify the port physical port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#clear_sequence System#clear_sequence}
  */
  readonly clearSequence?: number;
  /**
  * 'all': Clear all sessions; 'sequence': Sequence number;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sessions System#sessions}
  */
  readonly sessions?: string;
}

export function systemMonTemplateMonitorListClearCfgToTerraform(struct?: SystemMonTemplateMonitorListClearCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_all_sequence: cdktf.numberToTerraform(struct!.clearAllSequence),
    clear_sequence: cdktf.numberToTerraform(struct!.clearSequence),
    sessions: cdktf.stringToTerraform(struct!.sessions),
  }
}


export function systemMonTemplateMonitorListClearCfgToHclTerraform(struct?: SystemMonTemplateMonitorListClearCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_all_sequence: {
      value: cdktf.numberToHclTerraform(struct!.clearAllSequence),
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

export class SystemMonTemplateMonitorListClearCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorListClearCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearAllSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearAllSequence = this._clearAllSequence;
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

  public set internalValue(value: SystemMonTemplateMonitorListClearCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clearAllSequence = undefined;
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
      this._clearAllSequence = value.clearAllSequence;
      this._clearSequence = value.clearSequence;
      this._sessions = value.sessions;
    }
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

export class SystemMonTemplateMonitorListClearCfgList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorListClearCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorListClearCfgOutputReference {
    return new SystemMonTemplateMonitorListClearCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMonTemplateMonitorListLinkDisableCfg {
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#dis_sequence System#dis_sequence}
  */
  readonly disSequence?: number;
  /**
  * Specify the physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#diseth System#diseth}
  */
  readonly diseth?: number;
}

export function systemMonTemplateMonitorListLinkDisableCfgToTerraform(struct?: SystemMonTemplateMonitorListLinkDisableCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dis_sequence: cdktf.numberToTerraform(struct!.disSequence),
    diseth: cdktf.numberToTerraform(struct!.diseth),
  }
}


export function systemMonTemplateMonitorListLinkDisableCfgToHclTerraform(struct?: SystemMonTemplateMonitorListLinkDisableCfg | cdktf.IResolvable): any {
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

export class SystemMonTemplateMonitorListLinkDisableCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorListLinkDisableCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemMonTemplateMonitorListLinkDisableCfg | cdktf.IResolvable | undefined) {
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

export class SystemMonTemplateMonitorListLinkDisableCfgList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorListLinkDisableCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorListLinkDisableCfgOutputReference {
    return new SystemMonTemplateMonitorListLinkDisableCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMonTemplateMonitorListLinkDownCfg {
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_down_sequence1 System#link_down_sequence1}
  */
  readonly linkDownSequence1?: number;
  /**
  * Sequence number (Specify the seqeuence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_down_sequence2 System#link_down_sequence2}
  */
  readonly linkDownSequence2?: number;
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_down_sequence3 System#link_down_sequence3}
  */
  readonly linkDownSequence3?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#linkdown_ethernet1 System#linkdown_ethernet1}
  */
  readonly linkdownEthernet1?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#linkdown_ethernet2 System#linkdown_ethernet2}
  */
  readonly linkdownEthernet2?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#linkdown_ethernet3 System#linkdown_ethernet3}
  */
  readonly linkdownEthernet3?: number;
}

export function systemMonTemplateMonitorListLinkDownCfgToTerraform(struct?: SystemMonTemplateMonitorListLinkDownCfg | cdktf.IResolvable): any {
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


export function systemMonTemplateMonitorListLinkDownCfgToHclTerraform(struct?: SystemMonTemplateMonitorListLinkDownCfg | cdktf.IResolvable): any {
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

export class SystemMonTemplateMonitorListLinkDownCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorListLinkDownCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemMonTemplateMonitorListLinkDownCfg | cdktf.IResolvable | undefined) {
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

export class SystemMonTemplateMonitorListLinkDownCfgList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorListLinkDownCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorListLinkDownCfgOutputReference {
    return new SystemMonTemplateMonitorListLinkDownCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMonTemplateMonitorListLinkEnableCfg {
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ena_sequence System#ena_sequence}
  */
  readonly enaSequence?: number;
  /**
  * Specify the physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enaeth System#enaeth}
  */
  readonly enaeth?: number;
}

export function systemMonTemplateMonitorListLinkEnableCfgToTerraform(struct?: SystemMonTemplateMonitorListLinkEnableCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ena_sequence: cdktf.numberToTerraform(struct!.enaSequence),
    enaeth: cdktf.numberToTerraform(struct!.enaeth),
  }
}


export function systemMonTemplateMonitorListLinkEnableCfgToHclTerraform(struct?: SystemMonTemplateMonitorListLinkEnableCfg | cdktf.IResolvable): any {
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

export class SystemMonTemplateMonitorListLinkEnableCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorListLinkEnableCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemMonTemplateMonitorListLinkEnableCfg | cdktf.IResolvable | undefined) {
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

export class SystemMonTemplateMonitorListLinkEnableCfgList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorListLinkEnableCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorListLinkEnableCfgOutputReference {
    return new SystemMonTemplateMonitorListLinkEnableCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMonTemplateMonitorListLinkUpCfg {
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_up_sequence1 System#link_up_sequence1}
  */
  readonly linkUpSequence1?: number;
  /**
  * Sequence number (Specify the sequence number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_up_sequence2 System#link_up_sequence2}
  */
  readonly linkUpSequence2?: number;
  /**
  * Sequence number (Specify the sequece number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_up_sequence3 System#link_up_sequence3}
  */
  readonly linkUpSequence3?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#linkup_ethernet1 System#linkup_ethernet1}
  */
  readonly linkupEthernet1?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#linkup_ethernet2 System#linkup_ethernet2}
  */
  readonly linkupEthernet2?: number;
  /**
  * Specify the port physical port number (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#linkup_ethernet3 System#linkup_ethernet3}
  */
  readonly linkupEthernet3?: number;
}

export function systemMonTemplateMonitorListLinkUpCfgToTerraform(struct?: SystemMonTemplateMonitorListLinkUpCfg | cdktf.IResolvable): any {
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


export function systemMonTemplateMonitorListLinkUpCfgToHclTerraform(struct?: SystemMonTemplateMonitorListLinkUpCfg | cdktf.IResolvable): any {
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

export class SystemMonTemplateMonitorListLinkUpCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorListLinkUpCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemMonTemplateMonitorListLinkUpCfg | cdktf.IResolvable | undefined) {
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

export class SystemMonTemplateMonitorListLinkUpCfgList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorListLinkUpCfg[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorListLinkUpCfgOutputReference {
    return new SystemMonTemplateMonitorListLinkUpCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMonTemplateMonitorListStruct {
  /**
  * Monitor template ID Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#id1 System#id1}
  */
  readonly id1: number;
  /**
  * 'monitor-and': Configures the monitors in current template to work with AND logic; 'monitor-or': Configures the monitors in current template to work with OR logic;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#monitor_relation System#monitor_relation}
  */
  readonly monitorRelation?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#user_tag System#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * clear_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#clear_cfg System#clear_cfg}
  */
  readonly clearCfg?: SystemMonTemplateMonitorListClearCfg[] | cdktf.IResolvable;
  /**
  * link_disable_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_disable_cfg System#link_disable_cfg}
  */
  readonly linkDisableCfg?: SystemMonTemplateMonitorListLinkDisableCfg[] | cdktf.IResolvable;
  /**
  * link_down_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_down_cfg System#link_down_cfg}
  */
  readonly linkDownCfg?: SystemMonTemplateMonitorListLinkDownCfg[] | cdktf.IResolvable;
  /**
  * link_enable_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_enable_cfg System#link_enable_cfg}
  */
  readonly linkEnableCfg?: SystemMonTemplateMonitorListLinkEnableCfg[] | cdktf.IResolvable;
  /**
  * link_up_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_up_cfg System#link_up_cfg}
  */
  readonly linkUpCfg?: SystemMonTemplateMonitorListLinkUpCfg[] | cdktf.IResolvable;
}

export function systemMonTemplateMonitorListStructToTerraform(struct?: SystemMonTemplateMonitorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id1: cdktf.numberToTerraform(struct!.id1),
    monitor_relation: cdktf.stringToTerraform(struct!.monitorRelation),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    clear_cfg: cdktf.listMapper(systemMonTemplateMonitorListClearCfgToTerraform, true)(struct!.clearCfg),
    link_disable_cfg: cdktf.listMapper(systemMonTemplateMonitorListLinkDisableCfgToTerraform, true)(struct!.linkDisableCfg),
    link_down_cfg: cdktf.listMapper(systemMonTemplateMonitorListLinkDownCfgToTerraform, true)(struct!.linkDownCfg),
    link_enable_cfg: cdktf.listMapper(systemMonTemplateMonitorListLinkEnableCfgToTerraform, true)(struct!.linkEnableCfg),
    link_up_cfg: cdktf.listMapper(systemMonTemplateMonitorListLinkUpCfgToTerraform, true)(struct!.linkUpCfg),
  }
}


export function systemMonTemplateMonitorListStructToHclTerraform(struct?: SystemMonTemplateMonitorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_relation: {
      value: cdktf.stringToHclTerraform(struct!.monitorRelation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
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
    clear_cfg: {
      value: cdktf.listMapperHcl(systemMonTemplateMonitorListClearCfgToHclTerraform, true)(struct!.clearCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemMonTemplateMonitorListClearCfgList",
    },
    link_disable_cfg: {
      value: cdktf.listMapperHcl(systemMonTemplateMonitorListLinkDisableCfgToHclTerraform, true)(struct!.linkDisableCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemMonTemplateMonitorListLinkDisableCfgList",
    },
    link_down_cfg: {
      value: cdktf.listMapperHcl(systemMonTemplateMonitorListLinkDownCfgToHclTerraform, true)(struct!.linkDownCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemMonTemplateMonitorListLinkDownCfgList",
    },
    link_enable_cfg: {
      value: cdktf.listMapperHcl(systemMonTemplateMonitorListLinkEnableCfgToHclTerraform, true)(struct!.linkEnableCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemMonTemplateMonitorListLinkEnableCfgList",
    },
    link_up_cfg: {
      value: cdktf.listMapperHcl(systemMonTemplateMonitorListLinkUpCfgToHclTerraform, true)(struct!.linkUpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemMonTemplateMonitorListLinkUpCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMonTemplateMonitorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemMonTemplateMonitorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._monitorRelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorRelation = this._monitorRelation;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._clearCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearCfg = this._clearCfg?.internalValue;
    }
    if (this._linkDisableCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDisableCfg = this._linkDisableCfg?.internalValue;
    }
    if (this._linkDownCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDownCfg = this._linkDownCfg?.internalValue;
    }
    if (this._linkEnableCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkEnableCfg = this._linkEnableCfg?.internalValue;
    }
    if (this._linkUpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpCfg = this._linkUpCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMonTemplateMonitorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id1 = undefined;
      this._monitorRelation = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._clearCfg.internalValue = undefined;
      this._linkDisableCfg.internalValue = undefined;
      this._linkDownCfg.internalValue = undefined;
      this._linkEnableCfg.internalValue = undefined;
      this._linkUpCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id1 = value.id1;
      this._monitorRelation = value.monitorRelation;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._clearCfg.internalValue = value.clearCfg;
      this._linkDisableCfg.internalValue = value.linkDisableCfg;
      this._linkDownCfg.internalValue = value.linkDownCfg;
      this._linkEnableCfg.internalValue = value.linkEnableCfg;
      this._linkUpCfg.internalValue = value.linkUpCfg;
    }
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
  private _clearCfg = new SystemMonTemplateMonitorListClearCfgList(this, "clear_cfg", false);
  public get clearCfg() {
    return this._clearCfg;
  }
  public putClearCfg(value: SystemMonTemplateMonitorListClearCfg[] | cdktf.IResolvable) {
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
  private _linkDisableCfg = new SystemMonTemplateMonitorListLinkDisableCfgList(this, "link_disable_cfg", false);
  public get linkDisableCfg() {
    return this._linkDisableCfg;
  }
  public putLinkDisableCfg(value: SystemMonTemplateMonitorListLinkDisableCfg[] | cdktf.IResolvable) {
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
  private _linkDownCfg = new SystemMonTemplateMonitorListLinkDownCfgList(this, "link_down_cfg", false);
  public get linkDownCfg() {
    return this._linkDownCfg;
  }
  public putLinkDownCfg(value: SystemMonTemplateMonitorListLinkDownCfg[] | cdktf.IResolvable) {
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
  private _linkEnableCfg = new SystemMonTemplateMonitorListLinkEnableCfgList(this, "link_enable_cfg", false);
  public get linkEnableCfg() {
    return this._linkEnableCfg;
  }
  public putLinkEnableCfg(value: SystemMonTemplateMonitorListLinkEnableCfg[] | cdktf.IResolvable) {
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
  private _linkUpCfg = new SystemMonTemplateMonitorListLinkUpCfgList(this, "link_up_cfg", false);
  public get linkUpCfg() {
    return this._linkUpCfg;
  }
  public putLinkUpCfg(value: SystemMonTemplateMonitorListLinkUpCfg[] | cdktf.IResolvable) {
    this._linkUpCfg.internalValue = value;
  }
  public resetLinkUpCfg() {
    this._linkUpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpCfgInput() {
    return this._linkUpCfg.internalValue;
  }
}

export class SystemMonTemplateMonitorListStructList extends cdktf.ComplexList {
  public internalValue? : SystemMonTemplateMonitorListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemMonTemplateMonitorListStructOutputReference {
    return new SystemMonTemplateMonitorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemMonTemplate {
  /**
  * link_block_as_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_block_as_down System#link_block_as_down}
  */
  readonly linkBlockAsDown?: SystemMonTemplateLinkBlockAsDown;
  /**
  * link_down_on_restart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_down_on_restart System#link_down_on_restart}
  */
  readonly linkDownOnRestart?: SystemMonTemplateLinkDownOnRestart;
  /**
  * monitor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#monitor_list System#monitor_list}
  */
  readonly monitorList?: SystemMonTemplateMonitorListStruct[] | cdktf.IResolvable;
}

export function systemMonTemplateToTerraform(struct?: SystemMonTemplateOutputReference | SystemMonTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_block_as_down: systemMonTemplateLinkBlockAsDownToTerraform(struct!.linkBlockAsDown),
    link_down_on_restart: systemMonTemplateLinkDownOnRestartToTerraform(struct!.linkDownOnRestart),
    monitor_list: cdktf.listMapper(systemMonTemplateMonitorListStructToTerraform, true)(struct!.monitorList),
  }
}


export function systemMonTemplateToHclTerraform(struct?: SystemMonTemplateOutputReference | SystemMonTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_block_as_down: {
      value: systemMonTemplateLinkBlockAsDownToHclTerraform(struct!.linkBlockAsDown),
      isBlock: true,
      type: "list",
      storageClassType: "SystemMonTemplateLinkBlockAsDownList",
    },
    link_down_on_restart: {
      value: systemMonTemplateLinkDownOnRestartToHclTerraform(struct!.linkDownOnRestart),
      isBlock: true,
      type: "list",
      storageClassType: "SystemMonTemplateLinkDownOnRestartList",
    },
    monitor_list: {
      value: cdktf.listMapperHcl(systemMonTemplateMonitorListStructToHclTerraform, true)(struct!.monitorList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemMonTemplateMonitorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMonTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemMonTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkBlockAsDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkBlockAsDown = this._linkBlockAsDown?.internalValue;
    }
    if (this._linkDownOnRestart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDownOnRestart = this._linkDownOnRestart?.internalValue;
    }
    if (this._monitorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorList = this._monitorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMonTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkBlockAsDown.internalValue = undefined;
      this._linkDownOnRestart.internalValue = undefined;
      this._monitorList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkBlockAsDown.internalValue = value.linkBlockAsDown;
      this._linkDownOnRestart.internalValue = value.linkDownOnRestart;
      this._monitorList.internalValue = value.monitorList;
    }
  }

  // link_block_as_down - computed: false, optional: true, required: false
  private _linkBlockAsDown = new SystemMonTemplateLinkBlockAsDownOutputReference(this, "link_block_as_down");
  public get linkBlockAsDown() {
    return this._linkBlockAsDown;
  }
  public putLinkBlockAsDown(value: SystemMonTemplateLinkBlockAsDown) {
    this._linkBlockAsDown.internalValue = value;
  }
  public resetLinkBlockAsDown() {
    this._linkBlockAsDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkBlockAsDownInput() {
    return this._linkBlockAsDown.internalValue;
  }

  // link_down_on_restart - computed: false, optional: true, required: false
  private _linkDownOnRestart = new SystemMonTemplateLinkDownOnRestartOutputReference(this, "link_down_on_restart");
  public get linkDownOnRestart() {
    return this._linkDownOnRestart;
  }
  public putLinkDownOnRestart(value: SystemMonTemplateLinkDownOnRestart) {
    this._linkDownOnRestart.internalValue = value;
  }
  public resetLinkDownOnRestart() {
    this._linkDownOnRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownOnRestartInput() {
    return this._linkDownOnRestart.internalValue;
  }

  // monitor_list - computed: false, optional: true, required: false
  private _monitorList = new SystemMonTemplateMonitorListStructList(this, "monitor_list", false);
  public get monitorList() {
    return this._monitorList;
  }
  public putMonitorList(value: SystemMonTemplateMonitorListStruct[] | cdktf.IResolvable) {
    this._monitorList.internalValue = value;
  }
  public resetMonitorList() {
    this._monitorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorListInput() {
    return this._monitorList.internalValue;
  }
}
export interface SystemMultiQueueSupport {
  /**
  * Enable Multi-Queue-Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
}

export function systemMultiQueueSupportToTerraform(struct?: SystemMultiQueueSupportOutputReference | SystemMultiQueueSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
  }
}


export function systemMultiQueueSupportToHclTerraform(struct?: SystemMultiQueueSupportOutputReference | SystemMultiQueueSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemMultiQueueSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemMultiQueueSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemMultiQueueSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface SystemNdiscRaSamplingEnable {
  /**
  * 'all': all; 'good_recv': Good Router Solicitations (R.S.) Received; 'periodic_sent': Periodic Router Advertisements (R.A.) Sent; 'rate_limit': R.S. Rate Limited; 'bad_hop_limit': R.S. Bad Hop Limit; 'truncated': R.S. Truncated; 'bad_icmpv6_csum': R.S. Bad ICMPv6 Checksum; 'bad_icmpv6_code': R.S. Unknown ICMPv6 Code; 'bad_icmpv6_option': R.S. Bad ICMPv6 Option; 'l2_addr_and_unspec': R.S. Src Link-Layer Option and Unspecified Address; 'no_free_buffers': No Free Buffers to send R.A.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemNdiscRaSamplingEnableToTerraform(struct?: SystemNdiscRaSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemNdiscRaSamplingEnableToHclTerraform(struct?: SystemNdiscRaSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNdiscRaSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemNdiscRaSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNdiscRaSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemNdiscRaSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemNdiscRaSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemNdiscRaSamplingEnableOutputReference {
    return new SystemNdiscRaSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemNdiscRa {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemNdiscRaSamplingEnable[] | cdktf.IResolvable;
}

export function systemNdiscRaToTerraform(struct?: SystemNdiscRaOutputReference | SystemNdiscRa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemNdiscRaSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemNdiscRaToHclTerraform(struct?: SystemNdiscRaOutputReference | SystemNdiscRa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemNdiscRaSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemNdiscRaSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNdiscRaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemNdiscRa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNdiscRa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemNdiscRaSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemNdiscRaSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemNetvscMonitor {
  /**
  * Enable/Disable auto-recovery from Rx/Tx hang
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemNetvscMonitorToTerraform(struct?: SystemNetvscMonitorOutputReference | SystemNetvscMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemNetvscMonitorToHclTerraform(struct?: SystemNetvscMonitorOutputReference | SystemNetvscMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNetvscMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemNetvscMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNetvscMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface SystemNsmA10Lb {
  /**
  * NSM will terminate a10lb if no response received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#kill System#kill}
  */
  readonly kill?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemNsmA10LbToTerraform(struct?: SystemNsmA10LbOutputReference | SystemNsmA10Lb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kill: cdktf.numberToTerraform(struct!.kill),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemNsmA10LbToHclTerraform(struct?: SystemNsmA10LbOutputReference | SystemNsmA10Lb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kill: {
      value: cdktf.numberToHclTerraform(struct!.kill),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNsmA10LbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemNsmA10Lb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kill !== undefined) {
      hasAnyValues = true;
      internalValueResult.kill = this._kill;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNsmA10Lb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kill = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kill = value.kill;
      this._uuid = value.uuid;
    }
  }

  // kill - computed: false, optional: true, required: false
  private _kill?: number; 
  public get kill() {
    return this.getNumberAttribute('kill');
  }
  public set kill(value: number) {
    this._kill = value;
  }
  public resetKill() {
    this._kill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get killInput() {
    return this._kill;
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
export interface SystemPasswordPolicy {
  /**
  * 'Strict': Strict: Max Age-60 Days; 'Medium': Medium: Max Age- 90 Days; 'Simple': Simple: Max Age-120 Days;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#aging System#aging}
  */
  readonly aging?: string;
  /**
  * 'Strict': Strict: Min length:8, Min Lower Case:2, Min Upper Case:2, Min Numbers:2, Min Special Character:1, CHANGE Min 8 Characters; 'Medium': Medium: Min length:6, Min Lower Case:2, Min Upper Case:2, Min Numbers:1, Min Special Character:1, CHANGE Min 6 Characters; 'Default': Default: Min length:9, Min Lower Case:1, Min Upper Case:1, Min Numbers:1, Min Special Character:1, CHANGE Min 1 Characters; 'Simple': Simple: Min length:4, Min Lower Case:1, Min Upper Case:1, Min Numbers:1, Min Special Character:0, CHANGE Min 4 Characters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#complexity System#complexity}
  */
  readonly complexity?: string;
  /**
  * '0': Will disable the check; '3': Three consecutive characters on keyboard will not be allowed.; '4': Four consecutive characters on keyboard will not be allowed.; '5': Five consecutive characters on keyboard will not be allowed.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#forbid_consecutive_character System#forbid_consecutive_character}
  */
  readonly forbidConsecutiveCharacter?: string;
  /**
  * 'Strict': Strict: Does not allow upto 5 old passwords; 'Medium': Medium: Does not allow upto 4 old passwords; 'Simple': Simple: Does not allow upto 3 old passwords;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#history System#history}
  */
  readonly history?: string;
  /**
  * Configure custom password length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#min_pswd_len System#min_pswd_len}
  */
  readonly minPswdLen?: number;
  /**
  * 'enable': Prohibition of consecutive repeated input of the same letter/number, case sensitive; 'disable': Will not check if the password contains repeat characters;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#repeat_character_check System#repeat_character_check}
  */
  readonly repeatCharacterCheck?: string;
  /**
  * 'enable': Prohibition to set password contains user account, case sensitive; 'disable': Will not check if the password contains user account;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#username_check System#username_check}
  */
  readonly usernameCheck?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemPasswordPolicyToTerraform(struct?: SystemPasswordPolicyOutputReference | SystemPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aging: cdktf.stringToTerraform(struct!.aging),
    complexity: cdktf.stringToTerraform(struct!.complexity),
    forbid_consecutive_character: cdktf.stringToTerraform(struct!.forbidConsecutiveCharacter),
    history: cdktf.stringToTerraform(struct!.history),
    min_pswd_len: cdktf.numberToTerraform(struct!.minPswdLen),
    repeat_character_check: cdktf.stringToTerraform(struct!.repeatCharacterCheck),
    username_check: cdktf.stringToTerraform(struct!.usernameCheck),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemPasswordPolicyToHclTerraform(struct?: SystemPasswordPolicyOutputReference | SystemPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aging: {
      value: cdktf.stringToHclTerraform(struct!.aging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    complexity: {
      value: cdktf.stringToHclTerraform(struct!.complexity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forbid_consecutive_character: {
      value: cdktf.stringToHclTerraform(struct!.forbidConsecutiveCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    history: {
      value: cdktf.stringToHclTerraform(struct!.history),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_pswd_len: {
      value: cdktf.numberToHclTerraform(struct!.minPswdLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat_character_check: {
      value: cdktf.stringToHclTerraform(struct!.repeatCharacterCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_check: {
      value: cdktf.stringToHclTerraform(struct!.usernameCheck),
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

export class SystemPasswordPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemPasswordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aging !== undefined) {
      hasAnyValues = true;
      internalValueResult.aging = this._aging;
    }
    if (this._complexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexity = this._complexity;
    }
    if (this._forbidConsecutiveCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbidConsecutiveCharacter = this._forbidConsecutiveCharacter;
    }
    if (this._history !== undefined) {
      hasAnyValues = true;
      internalValueResult.history = this._history;
    }
    if (this._minPswdLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPswdLen = this._minPswdLen;
    }
    if (this._repeatCharacterCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatCharacterCheck = this._repeatCharacterCheck;
    }
    if (this._usernameCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameCheck = this._usernameCheck;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPasswordPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aging = undefined;
      this._complexity = undefined;
      this._forbidConsecutiveCharacter = undefined;
      this._history = undefined;
      this._minPswdLen = undefined;
      this._repeatCharacterCheck = undefined;
      this._usernameCheck = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aging = value.aging;
      this._complexity = value.complexity;
      this._forbidConsecutiveCharacter = value.forbidConsecutiveCharacter;
      this._history = value.history;
      this._minPswdLen = value.minPswdLen;
      this._repeatCharacterCheck = value.repeatCharacterCheck;
      this._usernameCheck = value.usernameCheck;
      this._uuid = value.uuid;
    }
  }

  // aging - computed: false, optional: true, required: false
  private _aging?: string; 
  public get aging() {
    return this.getStringAttribute('aging');
  }
  public set aging(value: string) {
    this._aging = value;
  }
  public resetAging() {
    this._aging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingInput() {
    return this._aging;
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity?: string; 
  public get complexity() {
    return this.getStringAttribute('complexity');
  }
  public set complexity(value: string) {
    this._complexity = value;
  }
  public resetComplexity() {
    this._complexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity;
  }

  // forbid_consecutive_character - computed: false, optional: true, required: false
  private _forbidConsecutiveCharacter?: string; 
  public get forbidConsecutiveCharacter() {
    return this.getStringAttribute('forbid_consecutive_character');
  }
  public set forbidConsecutiveCharacter(value: string) {
    this._forbidConsecutiveCharacter = value;
  }
  public resetForbidConsecutiveCharacter() {
    this._forbidConsecutiveCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbidConsecutiveCharacterInput() {
    return this._forbidConsecutiveCharacter;
  }

  // history - computed: false, optional: true, required: false
  private _history?: string; 
  public get history() {
    return this.getStringAttribute('history');
  }
  public set history(value: string) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
  }

  // min_pswd_len - computed: false, optional: true, required: false
  private _minPswdLen?: number; 
  public get minPswdLen() {
    return this.getNumberAttribute('min_pswd_len');
  }
  public set minPswdLen(value: number) {
    this._minPswdLen = value;
  }
  public resetMinPswdLen() {
    this._minPswdLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPswdLenInput() {
    return this._minPswdLen;
  }

  // repeat_character_check - computed: false, optional: true, required: false
  private _repeatCharacterCheck?: string; 
  public get repeatCharacterCheck() {
    return this.getStringAttribute('repeat_character_check');
  }
  public set repeatCharacterCheck(value: string) {
    this._repeatCharacterCheck = value;
  }
  public resetRepeatCharacterCheck() {
    this._repeatCharacterCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCharacterCheckInput() {
    return this._repeatCharacterCheck;
  }

  // username_check - computed: false, optional: true, required: false
  private _usernameCheck?: string; 
  public get usernameCheck() {
    return this.getStringAttribute('username_check');
  }
  public set usernameCheck(value: string) {
    this._usernameCheck = value;
  }
  public resetUsernameCheck() {
    this._usernameCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCheckInput() {
    return this._usernameCheck;
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
export interface SystemPathListStruct {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ifpair_eth_end System#ifpair_eth_end}
  */
  readonly ifpairEthEnd?: number;
  /**
  * Ethernet port (Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ifpair_eth_start System#ifpair_eth_start}
  */
  readonly ifpairEthStart?: number;
  /**
  * Trunk Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ifpair_trunk_end System#ifpair_trunk_end}
  */
  readonly ifpairTrunkEnd?: number;
  /**
  * Trunk groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ifpair_trunk_start System#ifpair_trunk_start}
  */
  readonly ifpairTrunkStart?: number;
  /**
  * Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l2hm_attach System#l2hm_attach}
  */
  readonly l2HmAttach?: string;
  /**
  * Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l2hm_path_name System#l2hm_path_name}
  */
  readonly l2HmPathName: string;
  /**
  * Test-API Interface (Ethernet Interface)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l2hm_setup_test_api System#l2hm_setup_test_api}
  */
  readonly l2HmSetupTestApi?: number;
  /**
  * VLAN id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l2hm_vlan System#l2hm_vlan}
  */
  readonly l2HmVlan?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#user_tag System#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemPathListStructToTerraform(struct?: SystemPathListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ifpair_eth_end: cdktf.numberToTerraform(struct!.ifpairEthEnd),
    ifpair_eth_start: cdktf.numberToTerraform(struct!.ifpairEthStart),
    ifpair_trunk_end: cdktf.numberToTerraform(struct!.ifpairTrunkEnd),
    ifpair_trunk_start: cdktf.numberToTerraform(struct!.ifpairTrunkStart),
    l2hm_attach: cdktf.stringToTerraform(struct!.l2HmAttach),
    l2hm_path_name: cdktf.stringToTerraform(struct!.l2HmPathName),
    l2hm_setup_test_api: cdktf.numberToTerraform(struct!.l2HmSetupTestApi),
    l2hm_vlan: cdktf.numberToTerraform(struct!.l2HmVlan),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemPathListStructToHclTerraform(struct?: SystemPathListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ifpair_eth_end: {
      value: cdktf.numberToHclTerraform(struct!.ifpairEthEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifpair_eth_start: {
      value: cdktf.numberToHclTerraform(struct!.ifpairEthStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifpair_trunk_end: {
      value: cdktf.numberToHclTerraform(struct!.ifpairTrunkEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ifpair_trunk_start: {
      value: cdktf.numberToHclTerraform(struct!.ifpairTrunkStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2hm_attach: {
      value: cdktf.stringToHclTerraform(struct!.l2HmAttach),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l2hm_path_name: {
      value: cdktf.stringToHclTerraform(struct!.l2HmPathName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l2hm_setup_test_api: {
      value: cdktf.numberToHclTerraform(struct!.l2HmSetupTestApi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2hm_vlan: {
      value: cdktf.numberToHclTerraform(struct!.l2HmVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
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

export class SystemPathListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemPathListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifpairEthEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifpairEthEnd = this._ifpairEthEnd;
    }
    if (this._ifpairEthStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifpairEthStart = this._ifpairEthStart;
    }
    if (this._ifpairTrunkEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifpairTrunkEnd = this._ifpairTrunkEnd;
    }
    if (this._ifpairTrunkStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifpairTrunkStart = this._ifpairTrunkStart;
    }
    if (this._l2HmAttach !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2HmAttach = this._l2HmAttach;
    }
    if (this._l2HmPathName !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2HmPathName = this._l2HmPathName;
    }
    if (this._l2HmSetupTestApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2HmSetupTestApi = this._l2HmSetupTestApi;
    }
    if (this._l2HmVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2HmVlan = this._l2HmVlan;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPathListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifpairEthEnd = undefined;
      this._ifpairEthStart = undefined;
      this._ifpairTrunkEnd = undefined;
      this._ifpairTrunkStart = undefined;
      this._l2HmAttach = undefined;
      this._l2HmPathName = undefined;
      this._l2HmSetupTestApi = undefined;
      this._l2HmVlan = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifpairEthEnd = value.ifpairEthEnd;
      this._ifpairEthStart = value.ifpairEthStart;
      this._ifpairTrunkEnd = value.ifpairTrunkEnd;
      this._ifpairTrunkStart = value.ifpairTrunkStart;
      this._l2HmAttach = value.l2HmAttach;
      this._l2HmPathName = value.l2HmPathName;
      this._l2HmSetupTestApi = value.l2HmSetupTestApi;
      this._l2HmVlan = value.l2HmVlan;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // ifpair_eth_end - computed: false, optional: true, required: false
  private _ifpairEthEnd?: number; 
  public get ifpairEthEnd() {
    return this.getNumberAttribute('ifpair_eth_end');
  }
  public set ifpairEthEnd(value: number) {
    this._ifpairEthEnd = value;
  }
  public resetIfpairEthEnd() {
    this._ifpairEthEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifpairEthEndInput() {
    return this._ifpairEthEnd;
  }

  // ifpair_eth_start - computed: false, optional: true, required: false
  private _ifpairEthStart?: number; 
  public get ifpairEthStart() {
    return this.getNumberAttribute('ifpair_eth_start');
  }
  public set ifpairEthStart(value: number) {
    this._ifpairEthStart = value;
  }
  public resetIfpairEthStart() {
    this._ifpairEthStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifpairEthStartInput() {
    return this._ifpairEthStart;
  }

  // ifpair_trunk_end - computed: false, optional: true, required: false
  private _ifpairTrunkEnd?: number; 
  public get ifpairTrunkEnd() {
    return this.getNumberAttribute('ifpair_trunk_end');
  }
  public set ifpairTrunkEnd(value: number) {
    this._ifpairTrunkEnd = value;
  }
  public resetIfpairTrunkEnd() {
    this._ifpairTrunkEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifpairTrunkEndInput() {
    return this._ifpairTrunkEnd;
  }

  // ifpair_trunk_start - computed: false, optional: true, required: false
  private _ifpairTrunkStart?: number; 
  public get ifpairTrunkStart() {
    return this.getNumberAttribute('ifpair_trunk_start');
  }
  public set ifpairTrunkStart(value: number) {
    this._ifpairTrunkStart = value;
  }
  public resetIfpairTrunkStart() {
    this._ifpairTrunkStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifpairTrunkStartInput() {
    return this._ifpairTrunkStart;
  }

  // l2hm_attach - computed: false, optional: true, required: false
  private _l2HmAttach?: string; 
  public get l2HmAttach() {
    return this.getStringAttribute('l2hm_attach');
  }
  public set l2HmAttach(value: string) {
    this._l2HmAttach = value;
  }
  public resetL2HmAttach() {
    this._l2HmAttach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmAttachInput() {
    return this._l2HmAttach;
  }

  // l2hm_path_name - computed: false, optional: false, required: true
  private _l2HmPathName?: string; 
  public get l2HmPathName() {
    return this.getStringAttribute('l2hm_path_name');
  }
  public set l2HmPathName(value: string) {
    this._l2HmPathName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmPathNameInput() {
    return this._l2HmPathName;
  }

  // l2hm_setup_test_api - computed: false, optional: true, required: false
  private _l2HmSetupTestApi?: number; 
  public get l2HmSetupTestApi() {
    return this.getNumberAttribute('l2hm_setup_test_api');
  }
  public set l2HmSetupTestApi(value: number) {
    this._l2HmSetupTestApi = value;
  }
  public resetL2HmSetupTestApi() {
    this._l2HmSetupTestApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmSetupTestApiInput() {
    return this._l2HmSetupTestApi;
  }

  // l2hm_vlan - computed: false, optional: true, required: false
  private _l2HmVlan?: number; 
  public get l2HmVlan() {
    return this.getNumberAttribute('l2hm_vlan');
  }
  public set l2HmVlan(value: number) {
    this._l2HmVlan = value;
  }
  public resetL2HmVlan() {
    this._l2HmVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2HmVlanInput() {
    return this._l2HmVlan;
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
}

export class SystemPathListStructList extends cdktf.ComplexList {
  public internalValue? : SystemPathListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemPathListStructOutputReference {
    return new SystemPathListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemPbslbSamplingEnable {
  /**
  * 'all': all; 'curr_entries': Current PBSLB Entry Count; 'total_v4_entries_created': Total V4 Entry Count Created; 'total_v4_entries_freed': Total V4 Entry Count Freed; 'total_v6_entries_created': Total V6 Entry Count Created; 'total_v6_entries_freed': Total V6 Entry Count Freed; 'total_domain_entries_created': Total Domain Entry Count Created; 'total_domain_entries_freed': Total Domain Entry Count Freed; 'total_direct_action_entries_created': Total Direct Action Entry Count Created; 'total_direct_action_entries_freed': Total Direct Action Entry Count Freed; 'curr_entries_target_global': Current Entry Target Global; 'curr_entries_target_vserver': Current Entry Target Vserver; 'curr_entries_target_vport': Current Entry Target Vport; 'curr_entries_target_LOC': Current Entry Target LOC; 'curr_entries_target_rserver': Current Entry Target Rserver; 'curr_entries_target_rport': Current Entry Target Rport; 'curr_entries_target_service': Current Entry Target Service; 'curr_entries_stats': Current Entry Stats Count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemPbslbSamplingEnableToTerraform(struct?: SystemPbslbSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemPbslbSamplingEnableToHclTerraform(struct?: SystemPbslbSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPbslbSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemPbslbSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPbslbSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemPbslbSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemPbslbSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemPbslbSamplingEnableOutputReference {
    return new SystemPbslbSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemPbslb {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemPbslbSamplingEnable[] | cdktf.IResolvable;
}

export function systemPbslbToTerraform(struct?: SystemPbslbOutputReference | SystemPbslb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemPbslbSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemPbslbToHclTerraform(struct?: SystemPbslbOutputReference | SystemPbslb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemPbslbSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemPbslbSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPbslbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemPbslb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPbslb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemPbslbSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemPbslbSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemPerVlanLimit {
  /**
  * broadcast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#bcast System#bcast}
  */
  readonly bcast?: number;
  /**
  * IP multicast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ipmcast System#ipmcast}
  */
  readonly ipmcast?: number;
  /**
  * multicast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#mcast System#mcast}
  */
  readonly mcast?: number;
  /**
  * unknown unicast packets (per second limit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#unknown_ucast System#unknown_ucast}
  */
  readonly unknownUcast?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemPerVlanLimitToTerraform(struct?: SystemPerVlanLimitOutputReference | SystemPerVlanLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bcast: cdktf.numberToTerraform(struct!.bcast),
    ipmcast: cdktf.numberToTerraform(struct!.ipmcast),
    mcast: cdktf.numberToTerraform(struct!.mcast),
    unknown_ucast: cdktf.numberToTerraform(struct!.unknownUcast),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemPerVlanLimitToHclTerraform(struct?: SystemPerVlanLimitOutputReference | SystemPerVlanLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bcast: {
      value: cdktf.numberToHclTerraform(struct!.bcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipmcast: {
      value: cdktf.numberToHclTerraform(struct!.ipmcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcast: {
      value: cdktf.numberToHclTerraform(struct!.mcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_ucast: {
      value: cdktf.numberToHclTerraform(struct!.unknownUcast),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPerVlanLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemPerVlanLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.bcast = this._bcast;
    }
    if (this._ipmcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmcast = this._ipmcast;
    }
    if (this._mcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcast = this._mcast;
    }
    if (this._unknownUcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownUcast = this._unknownUcast;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPerVlanLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bcast = undefined;
      this._ipmcast = undefined;
      this._mcast = undefined;
      this._unknownUcast = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bcast = value.bcast;
      this._ipmcast = value.ipmcast;
      this._mcast = value.mcast;
      this._unknownUcast = value.unknownUcast;
      this._uuid = value.uuid;
    }
  }

  // bcast - computed: false, optional: true, required: false
  private _bcast?: number; 
  public get bcast() {
    return this.getNumberAttribute('bcast');
  }
  public set bcast(value: number) {
    this._bcast = value;
  }
  public resetBcast() {
    this._bcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcastInput() {
    return this._bcast;
  }

  // ipmcast - computed: false, optional: true, required: false
  private _ipmcast?: number; 
  public get ipmcast() {
    return this.getNumberAttribute('ipmcast');
  }
  public set ipmcast(value: number) {
    this._ipmcast = value;
  }
  public resetIpmcast() {
    this._ipmcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmcastInput() {
    return this._ipmcast;
  }

  // mcast - computed: false, optional: true, required: false
  private _mcast?: number; 
  public get mcast() {
    return this.getNumberAttribute('mcast');
  }
  public set mcast(value: number) {
    this._mcast = value;
  }
  public resetMcast() {
    this._mcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastInput() {
    return this._mcast;
  }

  // unknown_ucast - computed: false, optional: true, required: false
  private _unknownUcast?: number; 
  public get unknownUcast() {
    return this.getNumberAttribute('unknown_ucast');
  }
  public set unknownUcast(value: number) {
    this._unknownUcast = value;
  }
  public resetUnknownUcast() {
    this._unknownUcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUcastInput() {
    return this._unknownUcast;
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
export interface SystemPlatformtype {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemPlatformtypeToTerraform(struct?: SystemPlatformtypeOutputReference | SystemPlatformtype): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemPlatformtypeToHclTerraform(struct?: SystemPlatformtypeOutputReference | SystemPlatformtype): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemPlatformtypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemPlatformtype | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPlatformtype | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemPortCount {
  /**
  * Total Ports to be allocated for alg types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#port_count_alg System#port_count_alg}
  */
  readonly portCountAlg?: number;
  /**
  * Total Ports to be allocated for hm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#port_count_hm System#port_count_hm}
  */
  readonly portCountHm?: number;
  /**
  * Total Ports to be allocated for kernel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#port_count_kernel System#port_count_kernel}
  */
  readonly portCountKernel?: number;
  /**
  * Total Ports to be allocated for logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#port_count_logging System#port_count_logging}
  */
  readonly portCountLogging?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemPortCountToTerraform(struct?: SystemPortCountOutputReference | SystemPortCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_count_alg: cdktf.numberToTerraform(struct!.portCountAlg),
    port_count_hm: cdktf.numberToTerraform(struct!.portCountHm),
    port_count_kernel: cdktf.numberToTerraform(struct!.portCountKernel),
    port_count_logging: cdktf.numberToTerraform(struct!.portCountLogging),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemPortCountToHclTerraform(struct?: SystemPortCountOutputReference | SystemPortCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_count_alg: {
      value: cdktf.numberToHclTerraform(struct!.portCountAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_count_hm: {
      value: cdktf.numberToHclTerraform(struct!.portCountHm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_count_kernel: {
      value: cdktf.numberToHclTerraform(struct!.portCountKernel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_count_logging: {
      value: cdktf.numberToHclTerraform(struct!.portCountLogging),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPortCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemPortCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portCountAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCountAlg = this._portCountAlg;
    }
    if (this._portCountHm !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCountHm = this._portCountHm;
    }
    if (this._portCountKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCountKernel = this._portCountKernel;
    }
    if (this._portCountLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCountLogging = this._portCountLogging;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPortCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portCountAlg = undefined;
      this._portCountHm = undefined;
      this._portCountKernel = undefined;
      this._portCountLogging = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portCountAlg = value.portCountAlg;
      this._portCountHm = value.portCountHm;
      this._portCountKernel = value.portCountKernel;
      this._portCountLogging = value.portCountLogging;
      this._uuid = value.uuid;
    }
  }

  // port_count_alg - computed: false, optional: true, required: false
  private _portCountAlg?: number; 
  public get portCountAlg() {
    return this.getNumberAttribute('port_count_alg');
  }
  public set portCountAlg(value: number) {
    this._portCountAlg = value;
  }
  public resetPortCountAlg() {
    this._portCountAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountAlgInput() {
    return this._portCountAlg;
  }

  // port_count_hm - computed: false, optional: true, required: false
  private _portCountHm?: number; 
  public get portCountHm() {
    return this.getNumberAttribute('port_count_hm');
  }
  public set portCountHm(value: number) {
    this._portCountHm = value;
  }
  public resetPortCountHm() {
    this._portCountHm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountHmInput() {
    return this._portCountHm;
  }

  // port_count_kernel - computed: false, optional: true, required: false
  private _portCountKernel?: number; 
  public get portCountKernel() {
    return this.getNumberAttribute('port_count_kernel');
  }
  public set portCountKernel(value: number) {
    this._portCountKernel = value;
  }
  public resetPortCountKernel() {
    this._portCountKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountKernelInput() {
    return this._portCountKernel;
  }

  // port_count_logging - computed: false, optional: true, required: false
  private _portCountLogging?: number; 
  public get portCountLogging() {
    return this.getNumberAttribute('port_count_logging');
  }
  public set portCountLogging(value: number) {
    this._portCountLogging = value;
  }
  public resetPortCountLogging() {
    this._portCountLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountLoggingInput() {
    return this._portCountLogging;
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
export interface SystemPortInfo {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemPortInfoToTerraform(struct?: SystemPortInfoOutputReference | SystemPortInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemPortInfoToHclTerraform(struct?: SystemPortInfoOutputReference | SystemPortInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemPortInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemPortInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPortInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemPortListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemPortListStructToTerraform(struct?: SystemPortListStructOutputReference | SystemPortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemPortListStructToHclTerraform(struct?: SystemPortListStructOutputReference | SystemPortListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemPortListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemPortListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPortListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemPorts {
  /**
  * Link detection interval in msecs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_detection_interval System#link_detection_interval}
  */
  readonly linkDetectionInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemPortsToTerraform(struct?: SystemPortsOutputReference | SystemPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_detection_interval: cdktf.numberToTerraform(struct!.linkDetectionInterval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemPortsToHclTerraform(struct?: SystemPortsOutputReference | SystemPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_detection_interval: {
      value: cdktf.numberToHclTerraform(struct!.linkDetectionInterval),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkDetectionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDetectionInterval = this._linkDetectionInterval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkDetectionInterval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkDetectionInterval = value.linkDetectionInterval;
      this._uuid = value.uuid;
    }
  }

  // link_detection_interval - computed: false, optional: true, required: false
  private _linkDetectionInterval?: number; 
  public get linkDetectionInterval() {
    return this.getNumberAttribute('link_detection_interval');
  }
  public set linkDetectionInterval(value: number) {
    this._linkDetectionInterval = value;
  }
  public resetLinkDetectionInterval() {
    this._linkDetectionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDetectionIntervalInput() {
    return this._linkDetectionInterval;
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
export interface SystemPowerOnSelfTest {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemPowerOnSelfTestToTerraform(struct?: SystemPowerOnSelfTestOutputReference | SystemPowerOnSelfTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemPowerOnSelfTestToHclTerraform(struct?: SystemPowerOnSelfTestOutputReference | SystemPowerOnSelfTest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemPowerOnSelfTestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemPowerOnSelfTest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPowerOnSelfTest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemProbeNetworkDevices {
}

export function systemProbeNetworkDevicesToTerraform(struct?: SystemProbeNetworkDevicesOutputReference | SystemProbeNetworkDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function systemProbeNetworkDevicesToHclTerraform(struct?: SystemProbeNetworkDevicesOutputReference | SystemProbeNetworkDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SystemProbeNetworkDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemProbeNetworkDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemProbeNetworkDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SystemPsuInfo {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemPsuInfoToTerraform(struct?: SystemPsuInfoOutputReference | SystemPsuInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemPsuInfoToHclTerraform(struct?: SystemPsuInfoOutputReference | SystemPsuInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemPsuInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemPsuInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemPsuInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemQInQ {
  /**
  * Enable 802.1QinQ on all physical ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable_all_ports System#enable_all_ports}
  */
  readonly enableAllPorts?: number;
  /**
  * TPID for inner VLAN (Inner TPID, 16 bit hex value, default is 8100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#inner_tpid System#inner_tpid}
  */
  readonly innerTpid?: string;
  /**
  * TPID for outer VLAN (Outer TPID, 16 bit hex value, default is 8100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#outer_tpid System#outer_tpid}
  */
  readonly outerTpid?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemQInQToTerraform(struct?: SystemQInQOutputReference | SystemQInQ): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_all_ports: cdktf.numberToTerraform(struct!.enableAllPorts),
    inner_tpid: cdktf.stringToTerraform(struct!.innerTpid),
    outer_tpid: cdktf.stringToTerraform(struct!.outerTpid),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemQInQToHclTerraform(struct?: SystemQInQOutputReference | SystemQInQ): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_all_ports: {
      value: cdktf.numberToHclTerraform(struct!.enableAllPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inner_tpid: {
      value: cdktf.stringToHclTerraform(struct!.innerTpid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outer_tpid: {
      value: cdktf.stringToHclTerraform(struct!.outerTpid),
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

export class SystemQInQOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemQInQ | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAllPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAllPorts = this._enableAllPorts;
    }
    if (this._innerTpid !== undefined) {
      hasAnyValues = true;
      internalValueResult.innerTpid = this._innerTpid;
    }
    if (this._outerTpid !== undefined) {
      hasAnyValues = true;
      internalValueResult.outerTpid = this._outerTpid;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemQInQ | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAllPorts = undefined;
      this._innerTpid = undefined;
      this._outerTpid = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAllPorts = value.enableAllPorts;
      this._innerTpid = value.innerTpid;
      this._outerTpid = value.outerTpid;
      this._uuid = value.uuid;
    }
  }

  // enable_all_ports - computed: false, optional: true, required: false
  private _enableAllPorts?: number; 
  public get enableAllPorts() {
    return this.getNumberAttribute('enable_all_ports');
  }
  public set enableAllPorts(value: number) {
    this._enableAllPorts = value;
  }
  public resetEnableAllPorts() {
    this._enableAllPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAllPortsInput() {
    return this._enableAllPorts;
  }

  // inner_tpid - computed: false, optional: true, required: false
  private _innerTpid?: string; 
  public get innerTpid() {
    return this.getStringAttribute('inner_tpid');
  }
  public set innerTpid(value: string) {
    this._innerTpid = value;
  }
  public resetInnerTpid() {
    this._innerTpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innerTpidInput() {
    return this._innerTpid;
  }

  // outer_tpid - computed: false, optional: true, required: false
  private _outerTpid?: string; 
  public get outerTpid() {
    return this.getStringAttribute('outer_tpid');
  }
  public set outerTpid(value: string) {
    this._outerTpid = value;
  }
  public resetOuterTpid() {
    this._outerTpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerTpidInput() {
    return this._outerTpid;
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
export interface SystemQueuingBuffer {
  /**
  * Enable/Disable micro-burst traffic support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemQueuingBufferToTerraform(struct?: SystemQueuingBufferOutputReference | SystemQueuingBuffer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemQueuingBufferToHclTerraform(struct?: SystemQueuingBufferOutputReference | SystemQueuingBuffer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemQueuingBufferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemQueuingBuffer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemQueuingBuffer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface SystemRadiusServerAttribute {
  /**
  * 'inside-ipv6-prefix': Framed IPv6 Prefix; 'inside-ip': Inside IP address; 'inside-ipv6': Inside IPv6 address; 'imei': International Mobile Equipment Identity (IMEI); 'imsi': International Mobile Subscriber Identity (IMSI); 'msisdn': Mobile Subscriber Integrated Services Digital Network-Number (MSISDN); 'custom1': Customized attribute 1; 'custom2': Customized attribute 2; 'custom3': Customized attribute 3; 'custom4': Customized attribute 4; 'custom5': Customized attribute 5; 'custom6': Customized attribute 6;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#attribute_value System#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * RADIUS attribute number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#custom_number System#custom_number}
  */
  readonly customNumber?: number;
  /**
  * RADIUS vendor attribute information (RADIUS vendor ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#custom_vendor System#custom_vendor}
  */
  readonly customVendor?: number;
  /**
  * Customized attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#name System#name}
  */
  readonly name?: string;
  /**
  * RADIUS attribute number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#number System#number}
  */
  readonly number?: number;
  /**
  * '32': Prefix length 32; '48': Prefix length 48; '64': Prefix length 64; '80': Prefix length 80; '96': Prefix length 96; '112': Prefix length 112;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#prefix_length System#prefix_length}
  */
  readonly prefixLength?: string;
  /**
  * RADIUS attribute number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#prefix_number System#prefix_number}
  */
  readonly prefixNumber?: number;
  /**
  * RADIUS vendor attribute information (RADIUS vendor ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#prefix_vendor System#prefix_vendor}
  */
  readonly prefixVendor?: number;
  /**
  * 'hexadecimal': Type of attribute value is hexadecimal;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#value System#value}
  */
  readonly value?: string;
  /**
  * RADIUS vendor attribute information (RADIUS vendor ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#vendor System#vendor}
  */
  readonly vendor?: number;
}

export function systemRadiusServerAttributeToTerraform(struct?: SystemRadiusServerAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
    custom_number: cdktf.numberToTerraform(struct!.customNumber),
    custom_vendor: cdktf.numberToTerraform(struct!.customVendor),
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    prefix_number: cdktf.numberToTerraform(struct!.prefixNumber),
    prefix_vendor: cdktf.numberToTerraform(struct!.prefixVendor),
    value: cdktf.stringToTerraform(struct!.value),
    vendor: cdktf.numberToTerraform(struct!.vendor),
  }
}


export function systemRadiusServerAttributeToHclTerraform(struct?: SystemRadiusServerAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.attributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_number: {
      value: cdktf.numberToHclTerraform(struct!.customNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_vendor: {
      value: cdktf.numberToHclTerraform(struct!.customVendor),
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
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_number: {
      value: cdktf.numberToHclTerraform(struct!.prefixNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_vendor: {
      value: cdktf.numberToHclTerraform(struct!.prefixVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.numberToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemRadiusServerAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemRadiusServerAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValue = this._attributeValue;
    }
    if (this._customNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNumber = this._customNumber;
    }
    if (this._customVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVendor = this._customVendor;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._prefixNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixNumber = this._prefixNumber;
    }
    if (this._prefixVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVendor = this._prefixVendor;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemRadiusServerAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeValue = undefined;
      this._customNumber = undefined;
      this._customVendor = undefined;
      this._name = undefined;
      this._number = undefined;
      this._prefixLength = undefined;
      this._prefixNumber = undefined;
      this._prefixVendor = undefined;
      this._value = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeValue = value.attributeValue;
      this._customNumber = value.customNumber;
      this._customVendor = value.customVendor;
      this._name = value.name;
      this._number = value.number;
      this._prefixLength = value.prefixLength;
      this._prefixNumber = value.prefixNumber;
      this._prefixVendor = value.prefixVendor;
      this._value = value.value;
      this._vendor = value.vendor;
    }
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // custom_number - computed: false, optional: true, required: false
  private _customNumber?: number; 
  public get customNumber() {
    return this.getNumberAttribute('custom_number');
  }
  public set customNumber(value: number) {
    this._customNumber = value;
  }
  public resetCustomNumber() {
    this._customNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNumberInput() {
    return this._customNumber;
  }

  // custom_vendor - computed: false, optional: true, required: false
  private _customVendor?: number; 
  public get customVendor() {
    return this.getNumberAttribute('custom_vendor');
  }
  public set customVendor(value: number) {
    this._customVendor = value;
  }
  public resetCustomVendor() {
    this._customVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVendorInput() {
    return this._customVendor;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // prefix_number - computed: false, optional: true, required: false
  private _prefixNumber?: number; 
  public get prefixNumber() {
    return this.getNumberAttribute('prefix_number');
  }
  public set prefixNumber(value: number) {
    this._prefixNumber = value;
  }
  public resetPrefixNumber() {
    this._prefixNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNumberInput() {
    return this._prefixNumber;
  }

  // prefix_vendor - computed: false, optional: true, required: false
  private _prefixVendor?: number; 
  public get prefixVendor() {
    return this.getNumberAttribute('prefix_vendor');
  }
  public set prefixVendor(value: number) {
    this._prefixVendor = value;
  }
  public resetPrefixVendor() {
    this._prefixVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVendorInput() {
    return this._prefixVendor;
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

  // vendor - computed: false, optional: true, required: false
  private _vendor?: number; 
  public get vendor() {
    return this.getNumberAttribute('vendor');
  }
  public set vendor(value: number) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

export class SystemRadiusServerAttributeList extends cdktf.ComplexList {
  public internalValue? : SystemRadiusServerAttribute[] | cdktf.IResolvable

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
  public get(index: number): SystemRadiusServerAttributeOutputReference {
    return new SystemRadiusServerAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemRadiusServerRemoteIpListStruct {
  /**
  * IP-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ip_list_name System#ip_list_name}
  */
  readonly ipListName?: string;
  /**
  * Configure shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ip_list_secret System#ip_list_secret}
  */
  readonly ipListSecret?: number;
  /**
  * The RADIUS secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ip_list_secret_string System#ip_list_secret_string}
  */
  readonly ipListSecretString?: string;
}

export function systemRadiusServerRemoteIpListStructToTerraform(struct?: SystemRadiusServerRemoteIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_list_name: cdktf.stringToTerraform(struct!.ipListName),
    ip_list_secret: cdktf.numberToTerraform(struct!.ipListSecret),
    ip_list_secret_string: cdktf.stringToTerraform(struct!.ipListSecretString),
  }
}


export function systemRadiusServerRemoteIpListStructToHclTerraform(struct?: SystemRadiusServerRemoteIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_list_name: {
      value: cdktf.stringToHclTerraform(struct!.ipListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_list_secret: {
      value: cdktf.numberToHclTerraform(struct!.ipListSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_list_secret_string: {
      value: cdktf.stringToHclTerraform(struct!.ipListSecretString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemRadiusServerRemoteIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemRadiusServerRemoteIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipListName = this._ipListName;
    }
    if (this._ipListSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipListSecret = this._ipListSecret;
    }
    if (this._ipListSecretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipListSecretString = this._ipListSecretString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemRadiusServerRemoteIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipListName = undefined;
      this._ipListSecret = undefined;
      this._ipListSecretString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipListName = value.ipListName;
      this._ipListSecret = value.ipListSecret;
      this._ipListSecretString = value.ipListSecretString;
    }
  }

  // ip_list_name - computed: false, optional: true, required: false
  private _ipListName?: string; 
  public get ipListName() {
    return this.getStringAttribute('ip_list_name');
  }
  public set ipListName(value: string) {
    this._ipListName = value;
  }
  public resetIpListName() {
    this._ipListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListNameInput() {
    return this._ipListName;
  }

  // ip_list_secret - computed: false, optional: true, required: false
  private _ipListSecret?: number; 
  public get ipListSecret() {
    return this.getNumberAttribute('ip_list_secret');
  }
  public set ipListSecret(value: number) {
    this._ipListSecret = value;
  }
  public resetIpListSecret() {
    this._ipListSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListSecretInput() {
    return this._ipListSecret;
  }

  // ip_list_secret_string - computed: false, optional: true, required: false
  private _ipListSecretString?: string; 
  public get ipListSecretString() {
    return this.getStringAttribute('ip_list_secret_string');
  }
  public set ipListSecretString(value: string) {
    this._ipListSecretString = value;
  }
  public resetIpListSecretString() {
    this._ipListSecretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListSecretStringInput() {
    return this._ipListSecretString;
  }
}

export class SystemRadiusServerRemoteIpListStructList extends cdktf.ComplexList {
  public internalValue? : SystemRadiusServerRemoteIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemRadiusServerRemoteIpListStructOutputReference {
    return new SystemRadiusServerRemoteIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemRadiusServerRemote {
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ip_list System#ip_list}
  */
  readonly ipList?: SystemRadiusServerRemoteIpListStruct[] | cdktf.IResolvable;
}

export function systemRadiusServerRemoteToTerraform(struct?: SystemRadiusServerRemoteOutputReference | SystemRadiusServerRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_list: cdktf.listMapper(systemRadiusServerRemoteIpListStructToTerraform, true)(struct!.ipList),
  }
}


export function systemRadiusServerRemoteToHclTerraform(struct?: SystemRadiusServerRemoteOutputReference | SystemRadiusServerRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_list: {
      value: cdktf.listMapperHcl(systemRadiusServerRemoteIpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemRadiusServerRemoteIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemRadiusServerRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemRadiusServerRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemRadiusServerRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipList.internalValue = value.ipList;
    }
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new SystemRadiusServerRemoteIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: SystemRadiusServerRemoteIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }
}
export interface SystemRadiusServerSamplingEnable {
  /**
  * 'all': all; 'msisdn-received': MSISDN Received; 'imei-received': IMEI Received; 'imsi-received': IMSI Received; 'custom-received': Custom attribute Received; 'radius-request-received': RADIUS Request Received; 'radius-request-dropped': RADIUS Request Dropped (Malformed Packet); 'request-bad-secret-dropped': RADIUS Request Bad Secret Dropped; 'request-no-key-vap-dropped': RADIUS Request No Key Attribute Dropped; 'request-malformed-dropped': RADIUS Request Malformed Dropped; 'request-ignored': RADIUS Request Ignored; 'radius-table-full': RADIUS Request Dropped (Table Full); 'secret-not-configured-dropped': RADIUS Secret Not Configured Dropped; 'ha-standby-dropped': HA Standby Dropped; 'ipv6-prefix-length-mismatch': Framed IPV6 Prefix Length Mismatch; 'invalid-key': Radius Request has Invalid Key Field; 'smp-created': RADIUS SMP Created; 'smp-deleted': RADIUS SMP Deleted; 'smp-mem-allocated': RADIUS SMP Memory Allocated; 'smp-mem-alloc-failed': RADIUS SMP Memory Allocation Failed; 'smp-mem-freed': RADIUS SMP Memory Freed; 'smp-in-rml': RADIUS SMP in RML; 'mem-allocated': RADIUS Memory Allocated; 'mem-alloc-failed': RADIUS Memory Allocation Failed; 'mem-freed': RADIUS Memory Freed; 'ha-sync-create-sent': HA Record Sync Create Sent; 'ha-sync-delete-sent': HA Record Sync Delete Sent; 'ha-sync-create-recv': HA Record Sync Create Received; 'ha-sync-delete-recv': HA Record Sync Delete Received; 'acct-on-filters-full': RADIUS Acct On Request Ignored(Filters Full); 'acct-on-dup-request': Duplicate RADIUS Acct On Request; 'ip-mismatch-delete': Radius Entry IP Mismatch Delete; 'ip-add-race-drop': Radius Entry IP Add Race Drop; 'ha-sync-no-key-vap-dropped': HA Record Sync No key dropped; 'inter-card-msg-fail-drop': Inter-Card Message Fail Drop; 'radius-packets-redirected': RADIUS packets redirected (SO); 'radius-packets-redirect-fail-dropped': RADIUS packets dropped due to redirect failure (SO); 'radius-packets-process-local': RADIUS packets processed locally without redirection (SO); 'radius-packets-dropped-not-lo': RADIUS packets dropped dest not loopback (SO); 'radius-inter-card-dup-redir': RADIUS packet dropped as redirected by other blade (SO);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemRadiusServerSamplingEnableToTerraform(struct?: SystemRadiusServerSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemRadiusServerSamplingEnableToHclTerraform(struct?: SystemRadiusServerSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemRadiusServerSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemRadiusServerSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemRadiusServerSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemRadiusServerSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemRadiusServerSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemRadiusServerSamplingEnableOutputReference {
    return new SystemRadiusServerSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemRadiusServer {
  /**
  * 'ignore': Ignore (default); 'append-entry': Append the AVPs to existing entry; 'replace-entry': Replace the AVPs of existing entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#accounting_interim_update System#accounting_interim_update}
  */
  readonly accountingInterimUpdate?: string;
  /**
  * 'ignore': Ignore (default); 'delete-entries-using-attribute': Delete entries matching attribute in RADIUS Table;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#accounting_on System#accounting_on}
  */
  readonly accountingOn?: string;
  /**
  * 'ignore': Ignore; 'append-entry': Append the AVPs to existing entry (default); 'replace-entry': Replace the AVPs of existing entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#accounting_start System#accounting_start}
  */
  readonly accountingStart?: string;
  /**
  * 'ignore': Ignore; 'delete-entry': Delete the entry (default); 'delete-entry-and-sessions': Delete the entry and data sessions associated(CGN only);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#accounting_stop System#accounting_stop}
  */
  readonly accountingStop?: string;
  /**
  * 'msisdn': Clear using MSISDN; 'imei': Clear using IMEI; 'imsi': Clear using IMSI; 'custom1': Clear using CUSTOM1 attribute configured; 'custom2': Clear using CUSTOM2 attribute configured; 'custom3': Clear using CUSTOM3 attribute configured; 'custom4': Clear using CUSTOM4 attribute configured; 'custom5': Clear using CUSTOM5 attribute configured; 'custom6': Clear using CUSTOM6 attribute configured;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#attribute_name System#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Clear using customized attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#custom_attribute_name System#custom_attribute_name}
  */
  readonly customAttributeName?: string;
  /**
  * Toggle option for RADIUS reply packet(Default: Accounting response will be sent)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#disable_reply System#disable_reply}
  */
  readonly disableReply?: number;
  /**
  * Configure the listen port of RADIUS server (default 1813) (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#listen_port System#listen_port}
  */
  readonly listenPort?: number;
  /**
  * Configure shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#secret System#secret}
  */
  readonly secret?: number;
  /**
  * The RADIUS secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#secret_string System#secret_string}
  */
  readonly secretString?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * Join a VRRP-A failover group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#vrid System#vrid}
  */
  readonly vrid?: number;
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#attribute System#attribute}
  */
  readonly attribute?: SystemRadiusServerAttribute[] | cdktf.IResolvable;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#remote System#remote}
  */
  readonly remote?: SystemRadiusServerRemote;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemRadiusServerSamplingEnable[] | cdktf.IResolvable;
}

export function systemRadiusServerToTerraform(struct?: SystemRadiusServerOutputReference | SystemRadiusServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounting_interim_update: cdktf.stringToTerraform(struct!.accountingInterimUpdate),
    accounting_on: cdktf.stringToTerraform(struct!.accountingOn),
    accounting_start: cdktf.stringToTerraform(struct!.accountingStart),
    accounting_stop: cdktf.stringToTerraform(struct!.accountingStop),
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    custom_attribute_name: cdktf.stringToTerraform(struct!.customAttributeName),
    disable_reply: cdktf.numberToTerraform(struct!.disableReply),
    listen_port: cdktf.numberToTerraform(struct!.listenPort),
    secret: cdktf.numberToTerraform(struct!.secret),
    secret_string: cdktf.stringToTerraform(struct!.secretString),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    attribute: cdktf.listMapper(systemRadiusServerAttributeToTerraform, true)(struct!.attribute),
    remote: systemRadiusServerRemoteToTerraform(struct!.remote),
    sampling_enable: cdktf.listMapper(systemRadiusServerSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemRadiusServerToHclTerraform(struct?: SystemRadiusServerOutputReference | SystemRadiusServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounting_interim_update: {
      value: cdktf.stringToHclTerraform(struct!.accountingInterimUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accounting_on: {
      value: cdktf.stringToHclTerraform(struct!.accountingOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accounting_start: {
      value: cdktf.stringToHclTerraform(struct!.accountingStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accounting_stop: {
      value: cdktf.stringToHclTerraform(struct!.accountingStop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.customAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_reply: {
      value: cdktf.numberToHclTerraform(struct!.disableReply),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listen_port: {
      value: cdktf.numberToHclTerraform(struct!.listenPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.numberToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_string: {
      value: cdktf.stringToHclTerraform(struct!.secretString),
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
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attribute: {
      value: cdktf.listMapperHcl(systemRadiusServerAttributeToHclTerraform, true)(struct!.attribute),
      isBlock: true,
      type: "list",
      storageClassType: "SystemRadiusServerAttributeList",
    },
    remote: {
      value: systemRadiusServerRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "SystemRadiusServerRemoteList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemRadiusServerSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemRadiusServerSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemRadiusServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemRadiusServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountingInterimUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingInterimUpdate = this._accountingInterimUpdate;
    }
    if (this._accountingOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingOn = this._accountingOn;
    }
    if (this._accountingStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingStart = this._accountingStart;
    }
    if (this._accountingStop !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingStop = this._accountingStop;
    }
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._customAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributeName = this._customAttributeName;
    }
    if (this._disableReply !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableReply = this._disableReply;
    }
    if (this._listenPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenPort = this._listenPort;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretString = this._secretString;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._attribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemRadiusServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountingInterimUpdate = undefined;
      this._accountingOn = undefined;
      this._accountingStart = undefined;
      this._accountingStop = undefined;
      this._attributeName = undefined;
      this._customAttributeName = undefined;
      this._disableReply = undefined;
      this._listenPort = undefined;
      this._secret = undefined;
      this._secretString = undefined;
      this._uuid = undefined;
      this._vrid = undefined;
      this._attribute.internalValue = undefined;
      this._remote.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountingInterimUpdate = value.accountingInterimUpdate;
      this._accountingOn = value.accountingOn;
      this._accountingStart = value.accountingStart;
      this._accountingStop = value.accountingStop;
      this._attributeName = value.attributeName;
      this._customAttributeName = value.customAttributeName;
      this._disableReply = value.disableReply;
      this._listenPort = value.listenPort;
      this._secret = value.secret;
      this._secretString = value.secretString;
      this._uuid = value.uuid;
      this._vrid = value.vrid;
      this._attribute.internalValue = value.attribute;
      this._remote.internalValue = value.remote;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // accounting_interim_update - computed: false, optional: true, required: false
  private _accountingInterimUpdate?: string; 
  public get accountingInterimUpdate() {
    return this.getStringAttribute('accounting_interim_update');
  }
  public set accountingInterimUpdate(value: string) {
    this._accountingInterimUpdate = value;
  }
  public resetAccountingInterimUpdate() {
    this._accountingInterimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInterimUpdateInput() {
    return this._accountingInterimUpdate;
  }

  // accounting_on - computed: false, optional: true, required: false
  private _accountingOn?: string; 
  public get accountingOn() {
    return this.getStringAttribute('accounting_on');
  }
  public set accountingOn(value: string) {
    this._accountingOn = value;
  }
  public resetAccountingOn() {
    this._accountingOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingOnInput() {
    return this._accountingOn;
  }

  // accounting_start - computed: false, optional: true, required: false
  private _accountingStart?: string; 
  public get accountingStart() {
    return this.getStringAttribute('accounting_start');
  }
  public set accountingStart(value: string) {
    this._accountingStart = value;
  }
  public resetAccountingStart() {
    this._accountingStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingStartInput() {
    return this._accountingStart;
  }

  // accounting_stop - computed: false, optional: true, required: false
  private _accountingStop?: string; 
  public get accountingStop() {
    return this.getStringAttribute('accounting_stop');
  }
  public set accountingStop(value: string) {
    this._accountingStop = value;
  }
  public resetAccountingStop() {
    this._accountingStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingStopInput() {
    return this._accountingStop;
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // custom_attribute_name - computed: false, optional: true, required: false
  private _customAttributeName?: string; 
  public get customAttributeName() {
    return this.getStringAttribute('custom_attribute_name');
  }
  public set customAttributeName(value: string) {
    this._customAttributeName = value;
  }
  public resetCustomAttributeName() {
    this._customAttributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributeNameInput() {
    return this._customAttributeName;
  }

  // disable_reply - computed: false, optional: true, required: false
  private _disableReply?: number; 
  public get disableReply() {
    return this.getNumberAttribute('disable_reply');
  }
  public set disableReply(value: number) {
    this._disableReply = value;
  }
  public resetDisableReply() {
    this._disableReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReplyInput() {
    return this._disableReply;
  }

  // listen_port - computed: false, optional: true, required: false
  private _listenPort?: number; 
  public get listenPort() {
    return this.getNumberAttribute('listen_port');
  }
  public set listenPort(value: number) {
    this._listenPort = value;
  }
  public resetListenPort() {
    this._listenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenPortInput() {
    return this._listenPort;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: number; 
  public get secret() {
    return this.getNumberAttribute('secret');
  }
  public set secret(value: number) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_string - computed: false, optional: true, required: false
  private _secretString?: string; 
  public get secretString() {
    return this.getStringAttribute('secret_string');
  }
  public set secretString(value: string) {
    this._secretString = value;
  }
  public resetSecretString() {
    this._secretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringInput() {
    return this._secretString;
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

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute = new SystemRadiusServerAttributeList(this, "attribute", false);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: SystemRadiusServerAttribute[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new SystemRadiusServerRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: SystemRadiusServerRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemRadiusServerSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemRadiusServerSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemRadius {
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#server System#server}
  */
  readonly server?: SystemRadiusServer;
}

export function systemRadiusToTerraform(struct?: SystemRadiusOutputReference | SystemRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: systemRadiusServerToTerraform(struct!.server),
  }
}


export function systemRadiusToHclTerraform(struct?: SystemRadiusOutputReference | SystemRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: systemRadiusServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "SystemRadiusServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemRadiusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemRadius | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemRadius | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._server.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._server.internalValue = value.server;
    }
  }

  // server - computed: false, optional: true, required: false
  private _server = new SystemRadiusServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: SystemRadiusServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface SystemReboot {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemRebootToTerraform(struct?: SystemRebootOutputReference | SystemReboot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemRebootToHclTerraform(struct?: SystemRebootOutputReference | SystemReboot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemRebootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemReboot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemReboot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfg {
  /**
  * Enter the number of cache-template allowed (cache-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#cache_template_max System#cache_template_max}
  */
  readonly cacheTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#cache_template_min_guarantee System#cache_template_min_guarantee}
  */
  readonly cacheTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesCacheTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_template_max: cdktf.numberToTerraform(struct!.cacheTemplateMax),
    cache_template_min_guarantee: cdktf.numberToTerraform(struct!.cacheTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesCacheTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_template_max: {
      value: cdktf.numberToHclTerraform(struct!.cacheTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.cacheTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateMax = this._cacheTemplateMax;
    }
    if (this._cacheTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateMinGuarantee = this._cacheTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTemplateMax = undefined;
      this._cacheTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTemplateMax = value.cacheTemplateMax;
      this._cacheTemplateMinGuarantee = value.cacheTemplateMinGuarantee;
    }
  }

  // cache_template_max - computed: false, optional: true, required: false
  private _cacheTemplateMax?: number; 
  public get cacheTemplateMax() {
    return this.getNumberAttribute('cache_template_max');
  }
  public set cacheTemplateMax(value: number) {
    this._cacheTemplateMax = value;
  }
  public resetCacheTemplateMax() {
    this._cacheTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateMaxInput() {
    return this._cacheTemplateMax;
  }

  // cache_template_min_guarantee - computed: false, optional: true, required: false
  private _cacheTemplateMinGuarantee?: number; 
  public get cacheTemplateMinGuarantee() {
    return this.getNumberAttribute('cache_template_min_guarantee');
  }
  public set cacheTemplateMinGuarantee(value: number) {
    this._cacheTemplateMinGuarantee = value;
  }
  public resetCacheTemplateMinGuarantee() {
    this._cacheTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateMinGuaranteeInput() {
    return this._cacheTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfg {
  /**
  * Enter the number of client-ssl-template allowed (client-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#client_ssl_template_max System#client_ssl_template_max}
  */
  readonly clientSslTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#client_ssl_template_min_guarantee System#client_ssl_template_min_guarantee}
  */
  readonly clientSslTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ssl_template_max: cdktf.numberToTerraform(struct!.clientSslTemplateMax),
    client_ssl_template_min_guarantee: cdktf.numberToTerraform(struct!.clientSslTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ssl_template_max: {
      value: cdktf.numberToHclTerraform(struct!.clientSslTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ssl_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.clientSslTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSslTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateMax = this._clientSslTemplateMax;
    }
    if (this._clientSslTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateMinGuarantee = this._clientSslTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientSslTemplateMax = undefined;
      this._clientSslTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientSslTemplateMax = value.clientSslTemplateMax;
      this._clientSslTemplateMinGuarantee = value.clientSslTemplateMinGuarantee;
    }
  }

  // client_ssl_template_max - computed: false, optional: true, required: false
  private _clientSslTemplateMax?: number; 
  public get clientSslTemplateMax() {
    return this.getNumberAttribute('client_ssl_template_max');
  }
  public set clientSslTemplateMax(value: number) {
    this._clientSslTemplateMax = value;
  }
  public resetClientSslTemplateMax() {
    this._clientSslTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateMaxInput() {
    return this._clientSslTemplateMax;
  }

  // client_ssl_template_min_guarantee - computed: false, optional: true, required: false
  private _clientSslTemplateMinGuarantee?: number; 
  public get clientSslTemplateMinGuarantee() {
    return this.getNumberAttribute('client_ssl_template_min_guarantee');
  }
  public set clientSslTemplateMinGuarantee(value: number) {
    this._clientSslTemplateMinGuarantee = value;
  }
  public resetClientSslTemplateMinGuarantee() {
    this._clientSslTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateMinGuaranteeInput() {
    return this._clientSslTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfg {
  /**
  * Enter the number of conn-reuse-template allowed (conn-reuse-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#conn_reuse_template_max System#conn_reuse_template_max}
  */
  readonly connReuseTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#conn_reuse_template_min_guarantee System#conn_reuse_template_min_guarantee}
  */
  readonly connReuseTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_reuse_template_max: cdktf.numberToTerraform(struct!.connReuseTemplateMax),
    conn_reuse_template_min_guarantee: cdktf.numberToTerraform(struct!.connReuseTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_reuse_template_max: {
      value: cdktf.numberToHclTerraform(struct!.connReuseTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_reuse_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.connReuseTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connReuseTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateMax = this._connReuseTemplateMax;
    }
    if (this._connReuseTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateMinGuarantee = this._connReuseTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connReuseTemplateMax = undefined;
      this._connReuseTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connReuseTemplateMax = value.connReuseTemplateMax;
      this._connReuseTemplateMinGuarantee = value.connReuseTemplateMinGuarantee;
    }
  }

  // conn_reuse_template_max - computed: false, optional: true, required: false
  private _connReuseTemplateMax?: number; 
  public get connReuseTemplateMax() {
    return this.getNumberAttribute('conn_reuse_template_max');
  }
  public set connReuseTemplateMax(value: number) {
    this._connReuseTemplateMax = value;
  }
  public resetConnReuseTemplateMax() {
    this._connReuseTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateMaxInput() {
    return this._connReuseTemplateMax;
  }

  // conn_reuse_template_min_guarantee - computed: false, optional: true, required: false
  private _connReuseTemplateMinGuarantee?: number; 
  public get connReuseTemplateMinGuarantee() {
    return this.getNumberAttribute('conn_reuse_template_min_guarantee');
  }
  public set connReuseTemplateMinGuarantee(value: number) {
    this._connReuseTemplateMinGuarantee = value;
  }
  public resetConnReuseTemplateMinGuarantee() {
    this._connReuseTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateMinGuaranteeInput() {
    return this._connReuseTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfg {
  /**
  * Enter the number of fast-tcp-template allowed (fast-tcp-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fast_tcp_template_max System#fast_tcp_template_max}
  */
  readonly fastTcpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fast_tcp_template_min_guarantee System#fast_tcp_template_min_guarantee}
  */
  readonly fastTcpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_tcp_template_max: cdktf.numberToTerraform(struct!.fastTcpTemplateMax),
    fast_tcp_template_min_guarantee: cdktf.numberToTerraform(struct!.fastTcpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_tcp_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fastTcpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_tcp_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.fastTcpTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastTcpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateMax = this._fastTcpTemplateMax;
    }
    if (this._fastTcpTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateMinGuarantee = this._fastTcpTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fastTcpTemplateMax = undefined;
      this._fastTcpTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fastTcpTemplateMax = value.fastTcpTemplateMax;
      this._fastTcpTemplateMinGuarantee = value.fastTcpTemplateMinGuarantee;
    }
  }

  // fast_tcp_template_max - computed: false, optional: true, required: false
  private _fastTcpTemplateMax?: number; 
  public get fastTcpTemplateMax() {
    return this.getNumberAttribute('fast_tcp_template_max');
  }
  public set fastTcpTemplateMax(value: number) {
    this._fastTcpTemplateMax = value;
  }
  public resetFastTcpTemplateMax() {
    this._fastTcpTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateMaxInput() {
    return this._fastTcpTemplateMax;
  }

  // fast_tcp_template_min_guarantee - computed: false, optional: true, required: false
  private _fastTcpTemplateMinGuarantee?: number; 
  public get fastTcpTemplateMinGuarantee() {
    return this.getNumberAttribute('fast_tcp_template_min_guarantee');
  }
  public set fastTcpTemplateMinGuarantee(value: number) {
    this._fastTcpTemplateMinGuarantee = value;
  }
  public resetFastTcpTemplateMinGuarantee() {
    this._fastTcpTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateMinGuaranteeInput() {
    return this._fastTcpTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfg {
  /**
  * Enter the number of fast-udp-template allowed (fast-udp-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fast_udp_template_max System#fast_udp_template_max}
  */
  readonly fastUdpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fast_udp_template_min_guarantee System#fast_udp_template_min_guarantee}
  */
  readonly fastUdpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_udp_template_max: cdktf.numberToTerraform(struct!.fastUdpTemplateMax),
    fast_udp_template_min_guarantee: cdktf.numberToTerraform(struct!.fastUdpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_udp_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fastUdpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_udp_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.fastUdpTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastUdpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateMax = this._fastUdpTemplateMax;
    }
    if (this._fastUdpTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateMinGuarantee = this._fastUdpTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fastUdpTemplateMax = undefined;
      this._fastUdpTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fastUdpTemplateMax = value.fastUdpTemplateMax;
      this._fastUdpTemplateMinGuarantee = value.fastUdpTemplateMinGuarantee;
    }
  }

  // fast_udp_template_max - computed: false, optional: true, required: false
  private _fastUdpTemplateMax?: number; 
  public get fastUdpTemplateMax() {
    return this.getNumberAttribute('fast_udp_template_max');
  }
  public set fastUdpTemplateMax(value: number) {
    this._fastUdpTemplateMax = value;
  }
  public resetFastUdpTemplateMax() {
    this._fastUdpTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateMaxInput() {
    return this._fastUdpTemplateMax;
  }

  // fast_udp_template_min_guarantee - computed: false, optional: true, required: false
  private _fastUdpTemplateMinGuarantee?: number; 
  public get fastUdpTemplateMinGuarantee() {
    return this.getNumberAttribute('fast_udp_template_min_guarantee');
  }
  public set fastUdpTemplateMinGuarantee(value: number) {
    this._fastUdpTemplateMinGuarantee = value;
  }
  public resetFastUdpTemplateMinGuarantee() {
    this._fastUdpTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateMinGuaranteeInput() {
    return this._fastUdpTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesFixTemplateCfg {
  /**
  * Enter the number of fix-template allowed (fix-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fix_template_max System#fix_template_max}
  */
  readonly fixTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fix_template_min_guarantee System#fix_template_min_guarantee}
  */
  readonly fixTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesFixTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesFixTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fix_template_max: cdktf.numberToTerraform(struct!.fixTemplateMax),
    fix_template_min_guarantee: cdktf.numberToTerraform(struct!.fixTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesFixTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesFixTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fix_template_max: {
      value: cdktf.numberToHclTerraform(struct!.fixTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fix_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.fixTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesFixTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateMax = this._fixTemplateMax;
    }
    if (this._fixTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateMinGuarantee = this._fixTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesFixTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixTemplateMax = undefined;
      this._fixTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixTemplateMax = value.fixTemplateMax;
      this._fixTemplateMinGuarantee = value.fixTemplateMinGuarantee;
    }
  }

  // fix_template_max - computed: false, optional: true, required: false
  private _fixTemplateMax?: number; 
  public get fixTemplateMax() {
    return this.getNumberAttribute('fix_template_max');
  }
  public set fixTemplateMax(value: number) {
    this._fixTemplateMax = value;
  }
  public resetFixTemplateMax() {
    this._fixTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateMaxInput() {
    return this._fixTemplateMax;
  }

  // fix_template_min_guarantee - computed: false, optional: true, required: false
  private _fixTemplateMinGuarantee?: number; 
  public get fixTemplateMinGuarantee() {
    return this.getNumberAttribute('fix_template_min_guarantee');
  }
  public set fixTemplateMinGuarantee(value: number) {
    this._fixTemplateMinGuarantee = value;
  }
  public resetFixTemplateMinGuarantee() {
    this._fixTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateMinGuaranteeInput() {
    return this._fixTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfg {
  /**
  * Enter the number of gslb-device allowed (gslb-device count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_device_max System#gslb_device_max}
  */
  readonly gslbDeviceMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_device_min_guarantee System#gslb_device_min_guarantee}
  */
  readonly gslbDeviceMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbDeviceCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_device_max: cdktf.numberToTerraform(struct!.gslbDeviceMax),
    gslb_device_min_guarantee: cdktf.numberToTerraform(struct!.gslbDeviceMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbDeviceCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_device_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbDeviceMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_device_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbDeviceMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbDeviceMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceMax = this._gslbDeviceMax;
    }
    if (this._gslbDeviceMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceMinGuarantee = this._gslbDeviceMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbDeviceMax = undefined;
      this._gslbDeviceMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbDeviceMax = value.gslbDeviceMax;
      this._gslbDeviceMinGuarantee = value.gslbDeviceMinGuarantee;
    }
  }

  // gslb_device_max - computed: false, optional: true, required: false
  private _gslbDeviceMax?: number; 
  public get gslbDeviceMax() {
    return this.getNumberAttribute('gslb_device_max');
  }
  public set gslbDeviceMax(value: number) {
    this._gslbDeviceMax = value;
  }
  public resetGslbDeviceMax() {
    this._gslbDeviceMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceMaxInput() {
    return this._gslbDeviceMax;
  }

  // gslb_device_min_guarantee - computed: false, optional: true, required: false
  private _gslbDeviceMinGuarantee?: number; 
  public get gslbDeviceMinGuarantee() {
    return this.getNumberAttribute('gslb_device_min_guarantee');
  }
  public set gslbDeviceMinGuarantee(value: number) {
    this._gslbDeviceMinGuarantee = value;
  }
  public resetGslbDeviceMinGuarantee() {
    this._gslbDeviceMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceMinGuaranteeInput() {
    return this._gslbDeviceMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfg {
  /**
  * Enter the number of gslb-geo-location allowed (gslb-geo-location count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_geo_location_max System#gslb_geo_location_max}
  */
  readonly gslbGeoLocationMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_geo_location_min_guarantee System#gslb_geo_location_min_guarantee}
  */
  readonly gslbGeoLocationMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_geo_location_max: cdktf.numberToTerraform(struct!.gslbGeoLocationMax),
    gslb_geo_location_min_guarantee: cdktf.numberToTerraform(struct!.gslbGeoLocationMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_geo_location_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbGeoLocationMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_geo_location_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbGeoLocationMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbGeoLocationMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationMax = this._gslbGeoLocationMax;
    }
    if (this._gslbGeoLocationMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationMinGuarantee = this._gslbGeoLocationMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbGeoLocationMax = undefined;
      this._gslbGeoLocationMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbGeoLocationMax = value.gslbGeoLocationMax;
      this._gslbGeoLocationMinGuarantee = value.gslbGeoLocationMinGuarantee;
    }
  }

  // gslb_geo_location_max - computed: false, optional: true, required: false
  private _gslbGeoLocationMax?: number; 
  public get gslbGeoLocationMax() {
    return this.getNumberAttribute('gslb_geo_location_max');
  }
  public set gslbGeoLocationMax(value: number) {
    this._gslbGeoLocationMax = value;
  }
  public resetGslbGeoLocationMax() {
    this._gslbGeoLocationMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationMaxInput() {
    return this._gslbGeoLocationMax;
  }

  // gslb_geo_location_min_guarantee - computed: false, optional: true, required: false
  private _gslbGeoLocationMinGuarantee?: number; 
  public get gslbGeoLocationMinGuarantee() {
    return this.getNumberAttribute('gslb_geo_location_min_guarantee');
  }
  public set gslbGeoLocationMinGuarantee(value: number) {
    this._gslbGeoLocationMinGuarantee = value;
  }
  public resetGslbGeoLocationMinGuarantee() {
    this._gslbGeoLocationMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationMinGuaranteeInput() {
    return this._gslbGeoLocationMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbIpListCfg {
  /**
  * Enter the number of gslb-ip-list allowed (gslb-ip-list count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_ip_list_max System#gslb_ip_list_max}
  */
  readonly gslbIpListMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_ip_list_min_guarantee System#gslb_ip_list_min_guarantee}
  */
  readonly gslbIpListMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbIpListCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbIpListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_ip_list_max: cdktf.numberToTerraform(struct!.gslbIpListMax),
    gslb_ip_list_min_guarantee: cdktf.numberToTerraform(struct!.gslbIpListMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbIpListCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbIpListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_ip_list_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbIpListMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_ip_list_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbIpListMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbIpListCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbIpListMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListMax = this._gslbIpListMax;
    }
    if (this._gslbIpListMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListMinGuarantee = this._gslbIpListMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbIpListCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbIpListMax = undefined;
      this._gslbIpListMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbIpListMax = value.gslbIpListMax;
      this._gslbIpListMinGuarantee = value.gslbIpListMinGuarantee;
    }
  }

  // gslb_ip_list_max - computed: false, optional: true, required: false
  private _gslbIpListMax?: number; 
  public get gslbIpListMax() {
    return this.getNumberAttribute('gslb_ip_list_max');
  }
  public set gslbIpListMax(value: number) {
    this._gslbIpListMax = value;
  }
  public resetGslbIpListMax() {
    this._gslbIpListMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListMaxInput() {
    return this._gslbIpListMax;
  }

  // gslb_ip_list_min_guarantee - computed: false, optional: true, required: false
  private _gslbIpListMinGuarantee?: number; 
  public get gslbIpListMinGuarantee() {
    return this.getNumberAttribute('gslb_ip_list_min_guarantee');
  }
  public set gslbIpListMinGuarantee(value: number) {
    this._gslbIpListMinGuarantee = value;
  }
  public resetGslbIpListMinGuarantee() {
    this._gslbIpListMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListMinGuaranteeInput() {
    return this._gslbIpListMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfg {
  /**
  * Enter the number of gslb-policy allowed (gslb-policy count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_policy_max System#gslb_policy_max}
  */
  readonly gslbPolicyMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_policy_min_guarantee System#gslb_policy_min_guarantee}
  */
  readonly gslbPolicyMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbPolicyCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_policy_max: cdktf.numberToTerraform(struct!.gslbPolicyMax),
    gslb_policy_min_guarantee: cdktf.numberToTerraform(struct!.gslbPolicyMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbPolicyCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_policy_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbPolicyMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_policy_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbPolicyMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbPolicyMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyMax = this._gslbPolicyMax;
    }
    if (this._gslbPolicyMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyMinGuarantee = this._gslbPolicyMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbPolicyMax = undefined;
      this._gslbPolicyMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbPolicyMax = value.gslbPolicyMax;
      this._gslbPolicyMinGuarantee = value.gslbPolicyMinGuarantee;
    }
  }

  // gslb_policy_max - computed: false, optional: true, required: false
  private _gslbPolicyMax?: number; 
  public get gslbPolicyMax() {
    return this.getNumberAttribute('gslb_policy_max');
  }
  public set gslbPolicyMax(value: number) {
    this._gslbPolicyMax = value;
  }
  public resetGslbPolicyMax() {
    this._gslbPolicyMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyMaxInput() {
    return this._gslbPolicyMax;
  }

  // gslb_policy_min_guarantee - computed: false, optional: true, required: false
  private _gslbPolicyMinGuarantee?: number; 
  public get gslbPolicyMinGuarantee() {
    return this.getNumberAttribute('gslb_policy_min_guarantee');
  }
  public set gslbPolicyMinGuarantee(value: number) {
    this._gslbPolicyMinGuarantee = value;
  }
  public resetGslbPolicyMinGuarantee() {
    this._gslbPolicyMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyMinGuaranteeInput() {
    return this._gslbPolicyMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbServiceCfg {
  /**
  * Enter the number of gslb-service allowed (gslb-service count (default is max-value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_service_max System#gslb_service_max}
  */
  readonly gslbServiceMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_service_min_guarantee System#gslb_service_min_guarantee}
  */
  readonly gslbServiceMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbServiceCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServiceCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_max: cdktf.numberToTerraform(struct!.gslbServiceMax),
    gslb_service_min_guarantee: cdktf.numberToTerraform(struct!.gslbServiceMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbServiceCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServiceCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_service_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbServiceCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbServiceMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceMax = this._gslbServiceMax;
    }
    if (this._gslbServiceMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceMinGuarantee = this._gslbServiceMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbServiceCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbServiceMax = undefined;
      this._gslbServiceMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbServiceMax = value.gslbServiceMax;
      this._gslbServiceMinGuarantee = value.gslbServiceMinGuarantee;
    }
  }

  // gslb_service_max - computed: false, optional: true, required: false
  private _gslbServiceMax?: number; 
  public get gslbServiceMax() {
    return this.getNumberAttribute('gslb_service_max');
  }
  public set gslbServiceMax(value: number) {
    this._gslbServiceMax = value;
  }
  public resetGslbServiceMax() {
    this._gslbServiceMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceMaxInput() {
    return this._gslbServiceMax;
  }

  // gslb_service_min_guarantee - computed: false, optional: true, required: false
  private _gslbServiceMinGuarantee?: number; 
  public get gslbServiceMinGuarantee() {
    return this.getNumberAttribute('gslb_service_min_guarantee');
  }
  public set gslbServiceMinGuarantee(value: number) {
    this._gslbServiceMinGuarantee = value;
  }
  public resetGslbServiceMinGuarantee() {
    this._gslbServiceMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceMinGuaranteeInput() {
    return this._gslbServiceMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfg {
  /**
  * Enter the number of gslb-service-ip allowed (gslb-service-ip count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_service_ip_max System#gslb_service_ip_max}
  */
  readonly gslbServiceIpMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_service_ip_min_guarantee System#gslb_service_ip_min_guarantee}
  */
  readonly gslbServiceIpMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_ip_max: cdktf.numberToTerraform(struct!.gslbServiceIpMax),
    gslb_service_ip_min_guarantee: cdktf.numberToTerraform(struct!.gslbServiceIpMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_service_ip_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceIpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_ip_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbServiceIpMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbServiceIpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpMax = this._gslbServiceIpMax;
    }
    if (this._gslbServiceIpMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpMinGuarantee = this._gslbServiceIpMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbServiceIpMax = undefined;
      this._gslbServiceIpMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbServiceIpMax = value.gslbServiceIpMax;
      this._gslbServiceIpMinGuarantee = value.gslbServiceIpMinGuarantee;
    }
  }

  // gslb_service_ip_max - computed: false, optional: true, required: false
  private _gslbServiceIpMax?: number; 
  public get gslbServiceIpMax() {
    return this.getNumberAttribute('gslb_service_ip_max');
  }
  public set gslbServiceIpMax(value: number) {
    this._gslbServiceIpMax = value;
  }
  public resetGslbServiceIpMax() {
    this._gslbServiceIpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpMaxInput() {
    return this._gslbServiceIpMax;
  }

  // gslb_service_ip_min_guarantee - computed: false, optional: true, required: false
  private _gslbServiceIpMinGuarantee?: number; 
  public get gslbServiceIpMinGuarantee() {
    return this.getNumberAttribute('gslb_service_ip_min_guarantee');
  }
  public set gslbServiceIpMinGuarantee(value: number) {
    this._gslbServiceIpMinGuarantee = value;
  }
  public resetGslbServiceIpMinGuarantee() {
    this._gslbServiceIpMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpMinGuaranteeInput() {
    return this._gslbServiceIpMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfg {
  /**
  * Enter the number of gslb-service-port allowed ( gslb-service-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_service_port_max System#gslb_service_port_max}
  */
  readonly gslbServicePortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_service_port_min_guarantee System#gslb_service_port_min_guarantee}
  */
  readonly gslbServicePortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbServicePortCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_service_port_max: cdktf.numberToTerraform(struct!.gslbServicePortMax),
    gslb_service_port_min_guarantee: cdktf.numberToTerraform(struct!.gslbServicePortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbServicePortCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_service_port_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbServicePortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_service_port_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbServicePortMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbServicePortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortMax = this._gslbServicePortMax;
    }
    if (this._gslbServicePortMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortMinGuarantee = this._gslbServicePortMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbServicePortMax = undefined;
      this._gslbServicePortMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbServicePortMax = value.gslbServicePortMax;
      this._gslbServicePortMinGuarantee = value.gslbServicePortMinGuarantee;
    }
  }

  // gslb_service_port_max - computed: false, optional: true, required: false
  private _gslbServicePortMax?: number; 
  public get gslbServicePortMax() {
    return this.getNumberAttribute('gslb_service_port_max');
  }
  public set gslbServicePortMax(value: number) {
    this._gslbServicePortMax = value;
  }
  public resetGslbServicePortMax() {
    this._gslbServicePortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortMaxInput() {
    return this._gslbServicePortMax;
  }

  // gslb_service_port_min_guarantee - computed: false, optional: true, required: false
  private _gslbServicePortMinGuarantee?: number; 
  public get gslbServicePortMinGuarantee() {
    return this.getNumberAttribute('gslb_service_port_min_guarantee');
  }
  public set gslbServicePortMinGuarantee(value: number) {
    this._gslbServicePortMinGuarantee = value;
  }
  public resetGslbServicePortMinGuarantee() {
    this._gslbServicePortMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortMinGuaranteeInput() {
    return this._gslbServicePortMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbSiteCfg {
  /**
  * Enter the number of gslb-site allowed (gslb-site count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_site_max System#gslb_site_max}
  */
  readonly gslbSiteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_site_min_guarantee System#gslb_site_min_guarantee}
  */
  readonly gslbSiteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbSiteCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbSiteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_site_max: cdktf.numberToTerraform(struct!.gslbSiteMax),
    gslb_site_min_guarantee: cdktf.numberToTerraform(struct!.gslbSiteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbSiteCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbSiteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_site_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbSiteMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_site_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbSiteMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbSiteCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbSiteMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteMax = this._gslbSiteMax;
    }
    if (this._gslbSiteMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteMinGuarantee = this._gslbSiteMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbSiteCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbSiteMax = undefined;
      this._gslbSiteMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbSiteMax = value.gslbSiteMax;
      this._gslbSiteMinGuarantee = value.gslbSiteMinGuarantee;
    }
  }

  // gslb_site_max - computed: false, optional: true, required: false
  private _gslbSiteMax?: number; 
  public get gslbSiteMax() {
    return this.getNumberAttribute('gslb_site_max');
  }
  public set gslbSiteMax(value: number) {
    this._gslbSiteMax = value;
  }
  public resetGslbSiteMax() {
    this._gslbSiteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteMaxInput() {
    return this._gslbSiteMax;
  }

  // gslb_site_min_guarantee - computed: false, optional: true, required: false
  private _gslbSiteMinGuarantee?: number; 
  public get gslbSiteMinGuarantee() {
    return this.getNumberAttribute('gslb_site_min_guarantee');
  }
  public set gslbSiteMinGuarantee(value: number) {
    this._gslbSiteMinGuarantee = value;
  }
  public resetGslbSiteMinGuarantee() {
    this._gslbSiteMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteMinGuaranteeInput() {
    return this._gslbSiteMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfg {
  /**
  * Enter the number of gslb-svc-group allowed (gslb-svc-group count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_svc_group_max System#gslb_svc_group_max}
  */
  readonly gslbSvcGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_svc_group_min_guarantee System#gslb_svc_group_min_guarantee}
  */
  readonly gslbSvcGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_svc_group_max: cdktf.numberToTerraform(struct!.gslbSvcGroupMax),
    gslb_svc_group_min_guarantee: cdktf.numberToTerraform(struct!.gslbSvcGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_svc_group_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbSvcGroupMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_svc_group_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbSvcGroupMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbSvcGroupMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcGroupMax = this._gslbSvcGroupMax;
    }
    if (this._gslbSvcGroupMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcGroupMinGuarantee = this._gslbSvcGroupMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbSvcGroupMax = undefined;
      this._gslbSvcGroupMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbSvcGroupMax = value.gslbSvcGroupMax;
      this._gslbSvcGroupMinGuarantee = value.gslbSvcGroupMinGuarantee;
    }
  }

  // gslb_svc_group_max - computed: false, optional: true, required: false
  private _gslbSvcGroupMax?: number; 
  public get gslbSvcGroupMax() {
    return this.getNumberAttribute('gslb_svc_group_max');
  }
  public set gslbSvcGroupMax(value: number) {
    this._gslbSvcGroupMax = value;
  }
  public resetGslbSvcGroupMax() {
    this._gslbSvcGroupMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcGroupMaxInput() {
    return this._gslbSvcGroupMax;
  }

  // gslb_svc_group_min_guarantee - computed: false, optional: true, required: false
  private _gslbSvcGroupMinGuarantee?: number; 
  public get gslbSvcGroupMinGuarantee() {
    return this.getNumberAttribute('gslb_svc_group_min_guarantee');
  }
  public set gslbSvcGroupMinGuarantee(value: number) {
    this._gslbSvcGroupMinGuarantee = value;
  }
  public resetGslbSvcGroupMinGuarantee() {
    this._gslbSvcGroupMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcGroupMinGuaranteeInput() {
    return this._gslbSvcGroupMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfg {
  /**
  * Enter the number of gslb-template allowed (gslb-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_template_max System#gslb_template_max}
  */
  readonly gslbTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_template_min_guarantee System#gslb_template_min_guarantee}
  */
  readonly gslbTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_template_max: cdktf.numberToTerraform(struct!.gslbTemplateMax),
    gslb_template_min_guarantee: cdktf.numberToTerraform(struct!.gslbTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_template_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateMax = this._gslbTemplateMax;
    }
    if (this._gslbTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateMinGuarantee = this._gslbTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbTemplateMax = undefined;
      this._gslbTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbTemplateMax = value.gslbTemplateMax;
      this._gslbTemplateMinGuarantee = value.gslbTemplateMinGuarantee;
    }
  }

  // gslb_template_max - computed: false, optional: true, required: false
  private _gslbTemplateMax?: number; 
  public get gslbTemplateMax() {
    return this.getNumberAttribute('gslb_template_max');
  }
  public set gslbTemplateMax(value: number) {
    this._gslbTemplateMax = value;
  }
  public resetGslbTemplateMax() {
    this._gslbTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateMaxInput() {
    return this._gslbTemplateMax;
  }

  // gslb_template_min_guarantee - computed: false, optional: true, required: false
  private _gslbTemplateMinGuarantee?: number; 
  public get gslbTemplateMinGuarantee() {
    return this.getNumberAttribute('gslb_template_min_guarantee');
  }
  public set gslbTemplateMinGuarantee(value: number) {
    this._gslbTemplateMinGuarantee = value;
  }
  public resetGslbTemplateMinGuarantee() {
    this._gslbTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateMinGuaranteeInput() {
    return this._gslbTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesGslbZoneCfg {
  /**
  * Enter the number of gslb-zone allowed (gslb-zone count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_zone_max System#gslb_zone_max}
  */
  readonly gslbZoneMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_zone_min_guarantee System#gslb_zone_min_guarantee}
  */
  readonly gslbZoneMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesGslbZoneCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbZoneCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_zone_max: cdktf.numberToTerraform(struct!.gslbZoneMax),
    gslb_zone_min_guarantee: cdktf.numberToTerraform(struct!.gslbZoneMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesGslbZoneCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesGslbZoneCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_zone_max: {
      value: cdktf.numberToHclTerraform(struct!.gslbZoneMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_zone_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.gslbZoneMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesGslbZoneCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbZoneMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneMax = this._gslbZoneMax;
    }
    if (this._gslbZoneMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneMinGuarantee = this._gslbZoneMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesGslbZoneCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gslbZoneMax = undefined;
      this._gslbZoneMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gslbZoneMax = value.gslbZoneMax;
      this._gslbZoneMinGuarantee = value.gslbZoneMinGuarantee;
    }
  }

  // gslb_zone_max - computed: false, optional: true, required: false
  private _gslbZoneMax?: number; 
  public get gslbZoneMax() {
    return this.getNumberAttribute('gslb_zone_max');
  }
  public set gslbZoneMax(value: number) {
    this._gslbZoneMax = value;
  }
  public resetGslbZoneMax() {
    this._gslbZoneMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneMaxInput() {
    return this._gslbZoneMax;
  }

  // gslb_zone_min_guarantee - computed: false, optional: true, required: false
  private _gslbZoneMinGuarantee?: number; 
  public get gslbZoneMinGuarantee() {
    return this.getNumberAttribute('gslb_zone_min_guarantee');
  }
  public set gslbZoneMinGuarantee(value: number) {
    this._gslbZoneMinGuarantee = value;
  }
  public resetGslbZoneMinGuarantee() {
    this._gslbZoneMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneMinGuaranteeInput() {
    return this._gslbZoneMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfg {
  /**
  * Enter the number of health monitors allowed (health-monitor count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#health_monitor_max System#health_monitor_max}
  */
  readonly healthMonitorMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#health_monitor_min_guarantee System#health_monitor_min_guarantee}
  */
  readonly healthMonitorMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesHealthMonitorCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_monitor_max: cdktf.numberToTerraform(struct!.healthMonitorMax),
    health_monitor_min_guarantee: cdktf.numberToTerraform(struct!.healthMonitorMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesHealthMonitorCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_monitor_max: {
      value: cdktf.numberToHclTerraform(struct!.healthMonitorMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_monitor_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.healthMonitorMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthMonitorMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorMax = this._healthMonitorMax;
    }
    if (this._healthMonitorMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorMinGuarantee = this._healthMonitorMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthMonitorMax = undefined;
      this._healthMonitorMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthMonitorMax = value.healthMonitorMax;
      this._healthMonitorMinGuarantee = value.healthMonitorMinGuarantee;
    }
  }

  // health_monitor_max - computed: false, optional: true, required: false
  private _healthMonitorMax?: number; 
  public get healthMonitorMax() {
    return this.getNumberAttribute('health_monitor_max');
  }
  public set healthMonitorMax(value: number) {
    this._healthMonitorMax = value;
  }
  public resetHealthMonitorMax() {
    this._healthMonitorMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorMaxInput() {
    return this._healthMonitorMax;
  }

  // health_monitor_min_guarantee - computed: false, optional: true, required: false
  private _healthMonitorMinGuarantee?: number; 
  public get healthMonitorMinGuarantee() {
    return this.getNumberAttribute('health_monitor_min_guarantee');
  }
  public set healthMonitorMinGuarantee(value: number) {
    this._healthMonitorMinGuarantee = value;
  }
  public resetHealthMonitorMinGuarantee() {
    this._healthMonitorMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorMinGuaranteeInput() {
    return this._healthMonitorMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfg {
  /**
  * Enter the number of http-template allowed (http-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#http_template_max System#http_template_max}
  */
  readonly httpTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#http_template_min_guarantee System#http_template_min_guarantee}
  */
  readonly httpTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesHttpTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_template_max: cdktf.numberToTerraform(struct!.httpTemplateMax),
    http_template_min_guarantee: cdktf.numberToTerraform(struct!.httpTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesHttpTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_template_max: {
      value: cdktf.numberToHclTerraform(struct!.httpTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.httpTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateMax = this._httpTemplateMax;
    }
    if (this._httpTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateMinGuarantee = this._httpTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpTemplateMax = undefined;
      this._httpTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpTemplateMax = value.httpTemplateMax;
      this._httpTemplateMinGuarantee = value.httpTemplateMinGuarantee;
    }
  }

  // http_template_max - computed: false, optional: true, required: false
  private _httpTemplateMax?: number; 
  public get httpTemplateMax() {
    return this.getNumberAttribute('http_template_max');
  }
  public set httpTemplateMax(value: number) {
    this._httpTemplateMax = value;
  }
  public resetHttpTemplateMax() {
    this._httpTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateMaxInput() {
    return this._httpTemplateMax;
  }

  // http_template_min_guarantee - computed: false, optional: true, required: false
  private _httpTemplateMinGuarantee?: number; 
  public get httpTemplateMinGuarantee() {
    return this.getNumberAttribute('http_template_min_guarantee');
  }
  public set httpTemplateMinGuarantee(value: number) {
    this._httpTemplateMinGuarantee = value;
  }
  public resetHttpTemplateMinGuarantee() {
    this._httpTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateMinGuaranteeInput() {
    return this._httpTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfg {
  /**
  * Enter the number of link-cost-template allowed (link-cost-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_cost_template_max System#link_cost_template_max}
  */
  readonly linkCostTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_cost_template_min_guarantee System#link_cost_template_min_guarantee}
  */
  readonly linkCostTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    link_cost_template_max: cdktf.numberToTerraform(struct!.linkCostTemplateMax),
    link_cost_template_min_guarantee: cdktf.numberToTerraform(struct!.linkCostTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    link_cost_template_max: {
      value: cdktf.numberToHclTerraform(struct!.linkCostTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.linkCostTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkCostTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateMax = this._linkCostTemplateMax;
    }
    if (this._linkCostTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateMinGuarantee = this._linkCostTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkCostTemplateMax = undefined;
      this._linkCostTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkCostTemplateMax = value.linkCostTemplateMax;
      this._linkCostTemplateMinGuarantee = value.linkCostTemplateMinGuarantee;
    }
  }

  // link_cost_template_max - computed: false, optional: true, required: false
  private _linkCostTemplateMax?: number; 
  public get linkCostTemplateMax() {
    return this.getNumberAttribute('link_cost_template_max');
  }
  public set linkCostTemplateMax(value: number) {
    this._linkCostTemplateMax = value;
  }
  public resetLinkCostTemplateMax() {
    this._linkCostTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateMaxInput() {
    return this._linkCostTemplateMax;
  }

  // link_cost_template_min_guarantee - computed: false, optional: true, required: false
  private _linkCostTemplateMinGuarantee?: number; 
  public get linkCostTemplateMinGuarantee() {
    return this.getNumberAttribute('link_cost_template_min_guarantee');
  }
  public set linkCostTemplateMinGuarantee(value: number) {
    this._linkCostTemplateMinGuarantee = value;
  }
  public resetLinkCostTemplateMinGuarantee() {
    this._linkCostTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateMinGuaranteeInput() {
    return this._linkCostTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfg {
  /**
  * Enter the number of pbslb-entry allowed (pbslb-entry count)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#pbslb_entry_max System#pbslb_entry_max}
  */
  readonly pbslbEntryMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#pbslb_entry_min_guarantee System#pbslb_entry_min_guarantee}
  */
  readonly pbslbEntryMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesPbslbEntryCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbslb_entry_max: cdktf.numberToTerraform(struct!.pbslbEntryMax),
    pbslb_entry_min_guarantee: cdktf.numberToTerraform(struct!.pbslbEntryMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesPbslbEntryCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbslb_entry_max: {
      value: cdktf.numberToHclTerraform(struct!.pbslbEntryMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_entry_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.pbslbEntryMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbslbEntryMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryMax = this._pbslbEntryMax;
    }
    if (this._pbslbEntryMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryMinGuarantee = this._pbslbEntryMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pbslbEntryMax = undefined;
      this._pbslbEntryMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pbslbEntryMax = value.pbslbEntryMax;
      this._pbslbEntryMinGuarantee = value.pbslbEntryMinGuarantee;
    }
  }

  // pbslb_entry_max - computed: false, optional: true, required: false
  private _pbslbEntryMax?: number; 
  public get pbslbEntryMax() {
    return this.getNumberAttribute('pbslb_entry_max');
  }
  public set pbslbEntryMax(value: number) {
    this._pbslbEntryMax = value;
  }
  public resetPbslbEntryMax() {
    this._pbslbEntryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryMaxInput() {
    return this._pbslbEntryMax;
  }

  // pbslb_entry_min_guarantee - computed: false, optional: true, required: false
  private _pbslbEntryMinGuarantee?: number; 
  public get pbslbEntryMinGuarantee() {
    return this.getNumberAttribute('pbslb_entry_min_guarantee');
  }
  public set pbslbEntryMinGuarantee(value: number) {
    this._pbslbEntryMinGuarantee = value;
  }
  public resetPbslbEntryMinGuarantee() {
    this._pbslbEntryMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryMinGuaranteeInput() {
    return this._pbslbEntryMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfg {
  /**
  * Enter the number of persist-cookie-template allowed (persist-cookie-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#persist_cookie_template_max System#persist_cookie_template_max}
  */
  readonly persistCookieTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#persist_cookie_template_min_guarantee System#persist_cookie_template_min_guarantee}
  */
  readonly persistCookieTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist_cookie_template_max: cdktf.numberToTerraform(struct!.persistCookieTemplateMax),
    persist_cookie_template_min_guarantee: cdktf.numberToTerraform(struct!.persistCookieTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persist_cookie_template_max: {
      value: cdktf.numberToHclTerraform(struct!.persistCookieTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_cookie_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.persistCookieTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistCookieTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateMax = this._persistCookieTemplateMax;
    }
    if (this._persistCookieTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateMinGuarantee = this._persistCookieTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistCookieTemplateMax = undefined;
      this._persistCookieTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistCookieTemplateMax = value.persistCookieTemplateMax;
      this._persistCookieTemplateMinGuarantee = value.persistCookieTemplateMinGuarantee;
    }
  }

  // persist_cookie_template_max - computed: false, optional: true, required: false
  private _persistCookieTemplateMax?: number; 
  public get persistCookieTemplateMax() {
    return this.getNumberAttribute('persist_cookie_template_max');
  }
  public set persistCookieTemplateMax(value: number) {
    this._persistCookieTemplateMax = value;
  }
  public resetPersistCookieTemplateMax() {
    this._persistCookieTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateMaxInput() {
    return this._persistCookieTemplateMax;
  }

  // persist_cookie_template_min_guarantee - computed: false, optional: true, required: false
  private _persistCookieTemplateMinGuarantee?: number; 
  public get persistCookieTemplateMinGuarantee() {
    return this.getNumberAttribute('persist_cookie_template_min_guarantee');
  }
  public set persistCookieTemplateMinGuarantee(value: number) {
    this._persistCookieTemplateMinGuarantee = value;
  }
  public resetPersistCookieTemplateMinGuarantee() {
    this._persistCookieTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateMinGuaranteeInput() {
    return this._persistCookieTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfg {
  /**
  * Enter the number of persist-srcip-template allowed (persist-source-ip-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#persist_srcip_template_max System#persist_srcip_template_max}
  */
  readonly persistSrcipTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#persist_srcip_template_min_guarantee System#persist_srcip_template_min_guarantee}
  */
  readonly persistSrcipTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persist_srcip_template_max: cdktf.numberToTerraform(struct!.persistSrcipTemplateMax),
    persist_srcip_template_min_guarantee: cdktf.numberToTerraform(struct!.persistSrcipTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persist_srcip_template_max: {
      value: cdktf.numberToHclTerraform(struct!.persistSrcipTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persist_srcip_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.persistSrcipTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistSrcipTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateMax = this._persistSrcipTemplateMax;
    }
    if (this._persistSrcipTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateMinGuarantee = this._persistSrcipTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistSrcipTemplateMax = undefined;
      this._persistSrcipTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistSrcipTemplateMax = value.persistSrcipTemplateMax;
      this._persistSrcipTemplateMinGuarantee = value.persistSrcipTemplateMinGuarantee;
    }
  }

  // persist_srcip_template_max - computed: false, optional: true, required: false
  private _persistSrcipTemplateMax?: number; 
  public get persistSrcipTemplateMax() {
    return this.getNumberAttribute('persist_srcip_template_max');
  }
  public set persistSrcipTemplateMax(value: number) {
    this._persistSrcipTemplateMax = value;
  }
  public resetPersistSrcipTemplateMax() {
    this._persistSrcipTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateMaxInput() {
    return this._persistSrcipTemplateMax;
  }

  // persist_srcip_template_min_guarantee - computed: false, optional: true, required: false
  private _persistSrcipTemplateMinGuarantee?: number; 
  public get persistSrcipTemplateMinGuarantee() {
    return this.getNumberAttribute('persist_srcip_template_min_guarantee');
  }
  public set persistSrcipTemplateMinGuarantee(value: number) {
    this._persistSrcipTemplateMinGuarantee = value;
  }
  public resetPersistSrcipTemplateMinGuarantee() {
    this._persistSrcipTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateMinGuaranteeInput() {
    return this._persistSrcipTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfg {
  /**
  * Enter the number of proxy-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#proxy_template_max System#proxy_template_max}
  */
  readonly proxyTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#proxy_template_min_guarantee System#proxy_template_min_guarantee}
  */
  readonly proxyTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesProxyTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_template_max: cdktf.numberToTerraform(struct!.proxyTemplateMax),
    proxy_template_min_guarantee: cdktf.numberToTerraform(struct!.proxyTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesProxyTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_template_max: {
      value: cdktf.numberToHclTerraform(struct!.proxyTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.proxyTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateMax = this._proxyTemplateMax;
    }
    if (this._proxyTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateMinGuarantee = this._proxyTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyTemplateMax = undefined;
      this._proxyTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyTemplateMax = value.proxyTemplateMax;
      this._proxyTemplateMinGuarantee = value.proxyTemplateMinGuarantee;
    }
  }

  // proxy_template_max - computed: false, optional: true, required: false
  private _proxyTemplateMax?: number; 
  public get proxyTemplateMax() {
    return this.getNumberAttribute('proxy_template_max');
  }
  public set proxyTemplateMax(value: number) {
    this._proxyTemplateMax = value;
  }
  public resetProxyTemplateMax() {
    this._proxyTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateMaxInput() {
    return this._proxyTemplateMax;
  }

  // proxy_template_min_guarantee - computed: false, optional: true, required: false
  private _proxyTemplateMinGuarantee?: number; 
  public get proxyTemplateMinGuarantee() {
    return this.getNumberAttribute('proxy_template_min_guarantee');
  }
  public set proxyTemplateMinGuarantee(value: number) {
    this._proxyTemplateMinGuarantee = value;
  }
  public resetProxyTemplateMinGuarantee() {
    this._proxyTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateMinGuaranteeInput() {
    return this._proxyTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesRealPortCfg {
  /**
  * Enter the number of real-ports allowed (real-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#real_port_max System#real_port_max}
  */
  readonly realPortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#real_port_min_guarantee System#real_port_min_guarantee}
  */
  readonly realPortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesRealPortCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesRealPortCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesRealPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    real_port_max: cdktf.numberToTerraform(struct!.realPortMax),
    real_port_min_guarantee: cdktf.numberToTerraform(struct!.realPortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesRealPortCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesRealPortCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesRealPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    real_port_max: {
      value: cdktf.numberToHclTerraform(struct!.realPortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_port_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.realPortMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesRealPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesRealPortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realPortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortMax = this._realPortMax;
    }
    if (this._realPortMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortMinGuarantee = this._realPortMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesRealPortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realPortMax = undefined;
      this._realPortMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realPortMax = value.realPortMax;
      this._realPortMinGuarantee = value.realPortMinGuarantee;
    }
  }

  // real_port_max - computed: false, optional: true, required: false
  private _realPortMax?: number; 
  public get realPortMax() {
    return this.getNumberAttribute('real_port_max');
  }
  public set realPortMax(value: number) {
    this._realPortMax = value;
  }
  public resetRealPortMax() {
    this._realPortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortMaxInput() {
    return this._realPortMax;
  }

  // real_port_min_guarantee - computed: false, optional: true, required: false
  private _realPortMinGuarantee?: number; 
  public get realPortMinGuarantee() {
    return this.getNumberAttribute('real_port_min_guarantee');
  }
  public set realPortMinGuarantee(value: number) {
    this._realPortMinGuarantee = value;
  }
  public resetRealPortMinGuarantee() {
    this._realPortMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortMinGuaranteeInput() {
    return this._realPortMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesRealServerCfg {
  /**
  * Enter the number of real-servers allowed (real-server count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#real_server_max System#real_server_max}
  */
  readonly realServerMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#real_server_min_guarantee System#real_server_min_guarantee}
  */
  readonly realServerMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesRealServerCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesRealServerCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesRealServerCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    real_server_max: cdktf.numberToTerraform(struct!.realServerMax),
    real_server_min_guarantee: cdktf.numberToTerraform(struct!.realServerMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesRealServerCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesRealServerCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesRealServerCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    real_server_max: {
      value: cdktf.numberToHclTerraform(struct!.realServerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    real_server_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.realServerMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesRealServerCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesRealServerCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realServerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerMax = this._realServerMax;
    }
    if (this._realServerMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerMinGuarantee = this._realServerMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesRealServerCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realServerMax = undefined;
      this._realServerMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realServerMax = value.realServerMax;
      this._realServerMinGuarantee = value.realServerMinGuarantee;
    }
  }

  // real_server_max - computed: false, optional: true, required: false
  private _realServerMax?: number; 
  public get realServerMax() {
    return this.getNumberAttribute('real_server_max');
  }
  public set realServerMax(value: number) {
    this._realServerMax = value;
  }
  public resetRealServerMax() {
    this._realServerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerMaxInput() {
    return this._realServerMax;
  }

  // real_server_min_guarantee - computed: false, optional: true, required: false
  private _realServerMinGuarantee?: number; 
  public get realServerMinGuarantee() {
    return this.getNumberAttribute('real_server_min_guarantee');
  }
  public set realServerMinGuarantee(value: number) {
    this._realServerMinGuarantee = value;
  }
  public resetRealServerMinGuarantee() {
    this._realServerMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerMinGuaranteeInput() {
    return this._realServerMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfg {
  /**
  * Enter the number of server-ssl-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#server_ssl_template_max System#server_ssl_template_max}
  */
  readonly serverSslTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#server_ssl_template_min_guarantee System#server_ssl_template_min_guarantee}
  */
  readonly serverSslTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_ssl_template_max: cdktf.numberToTerraform(struct!.serverSslTemplateMax),
    server_ssl_template_min_guarantee: cdktf.numberToTerraform(struct!.serverSslTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_ssl_template_max: {
      value: cdktf.numberToHclTerraform(struct!.serverSslTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ssl_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.serverSslTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverSslTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateMax = this._serverSslTemplateMax;
    }
    if (this._serverSslTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateMinGuarantee = this._serverSslTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverSslTemplateMax = undefined;
      this._serverSslTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverSslTemplateMax = value.serverSslTemplateMax;
      this._serverSslTemplateMinGuarantee = value.serverSslTemplateMinGuarantee;
    }
  }

  // server_ssl_template_max - computed: false, optional: true, required: false
  private _serverSslTemplateMax?: number; 
  public get serverSslTemplateMax() {
    return this.getNumberAttribute('server_ssl_template_max');
  }
  public set serverSslTemplateMax(value: number) {
    this._serverSslTemplateMax = value;
  }
  public resetServerSslTemplateMax() {
    this._serverSslTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateMaxInput() {
    return this._serverSslTemplateMax;
  }

  // server_ssl_template_min_guarantee - computed: false, optional: true, required: false
  private _serverSslTemplateMinGuarantee?: number; 
  public get serverSslTemplateMinGuarantee() {
    return this.getNumberAttribute('server_ssl_template_min_guarantee');
  }
  public set serverSslTemplateMinGuarantee(value: number) {
    this._serverSslTemplateMinGuarantee = value;
  }
  public resetServerSslTemplateMinGuarantee() {
    this._serverSslTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateMinGuaranteeInput() {
    return this._serverSslTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesServiceGroupCfg {
  /**
  * Enter the number of service groups allowed (service-group count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#service_group_max System#service_group_max}
  */
  readonly serviceGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#service_group_min_guarantee System#service_group_min_guarantee}
  */
  readonly serviceGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesServiceGroupCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesServiceGroupCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_group_max: cdktf.numberToTerraform(struct!.serviceGroupMax),
    service_group_min_guarantee: cdktf.numberToTerraform(struct!.serviceGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesServiceGroupCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesServiceGroupCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_group_max: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_group_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.serviceGroupMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesServiceGroupCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceGroupMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupMax = this._serviceGroupMax;
    }
    if (this._serviceGroupMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupMinGuarantee = this._serviceGroupMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesServiceGroupCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceGroupMax = undefined;
      this._serviceGroupMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceGroupMax = value.serviceGroupMax;
      this._serviceGroupMinGuarantee = value.serviceGroupMinGuarantee;
    }
  }

  // service_group_max - computed: false, optional: true, required: false
  private _serviceGroupMax?: number; 
  public get serviceGroupMax() {
    return this.getNumberAttribute('service_group_max');
  }
  public set serviceGroupMax(value: number) {
    this._serviceGroupMax = value;
  }
  public resetServiceGroupMax() {
    this._serviceGroupMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMaxInput() {
    return this._serviceGroupMax;
  }

  // service_group_min_guarantee - computed: false, optional: true, required: false
  private _serviceGroupMinGuarantee?: number; 
  public get serviceGroupMinGuarantee() {
    return this.getNumberAttribute('service_group_min_guarantee');
  }
  public set serviceGroupMinGuarantee(value: number) {
    this._serviceGroupMinGuarantee = value;
  }
  public resetServiceGroupMinGuarantee() {
    this._serviceGroupMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupMinGuaranteeInput() {
    return this._serviceGroupMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfg {
  /**
  * Enter the number of stream-template allowed (server-ssl-template count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#stream_template_max System#stream_template_max}
  */
  readonly streamTemplateMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#stream_template_min_guarantee System#stream_template_min_guarantee}
  */
  readonly streamTemplateMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesStreamTemplateCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stream_template_max: cdktf.numberToTerraform(struct!.streamTemplateMax),
    stream_template_min_guarantee: cdktf.numberToTerraform(struct!.streamTemplateMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesStreamTemplateCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stream_template_max: {
      value: cdktf.numberToHclTerraform(struct!.streamTemplateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_template_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.streamTemplateMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._streamTemplateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateMax = this._streamTemplateMax;
    }
    if (this._streamTemplateMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateMinGuarantee = this._streamTemplateMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._streamTemplateMax = undefined;
      this._streamTemplateMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._streamTemplateMax = value.streamTemplateMax;
      this._streamTemplateMinGuarantee = value.streamTemplateMinGuarantee;
    }
  }

  // stream_template_max - computed: false, optional: true, required: false
  private _streamTemplateMax?: number; 
  public get streamTemplateMax() {
    return this.getNumberAttribute('stream_template_max');
  }
  public set streamTemplateMax(value: number) {
    this._streamTemplateMax = value;
  }
  public resetStreamTemplateMax() {
    this._streamTemplateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateMaxInput() {
    return this._streamTemplateMax;
  }

  // stream_template_min_guarantee - computed: false, optional: true, required: false
  private _streamTemplateMinGuarantee?: number; 
  public get streamTemplateMinGuarantee() {
    return this.getNumberAttribute('stream_template_min_guarantee');
  }
  public set streamTemplateMinGuarantee(value: number) {
    this._streamTemplateMinGuarantee = value;
  }
  public resetStreamTemplateMinGuarantee() {
    this._streamTemplateMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateMinGuaranteeInput() {
    return this._streamTemplateMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesVirtualPortCfg {
  /**
  * Enter the number of virtual-port allowed (virtual-port count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#virtual_port_max System#virtual_port_max}
  */
  readonly virtualPortMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#virtual_port_min_guarantee System#virtual_port_min_guarantee}
  */
  readonly virtualPortMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesVirtualPortCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesVirtualPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_port_max: cdktf.numberToTerraform(struct!.virtualPortMax),
    virtual_port_min_guarantee: cdktf.numberToTerraform(struct!.virtualPortMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesVirtualPortCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesVirtualPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_port_max: {
      value: cdktf.numberToHclTerraform(struct!.virtualPortMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_port_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.virtualPortMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesVirtualPortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualPortMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortMax = this._virtualPortMax;
    }
    if (this._virtualPortMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortMinGuarantee = this._virtualPortMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesVirtualPortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualPortMax = undefined;
      this._virtualPortMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualPortMax = value.virtualPortMax;
      this._virtualPortMinGuarantee = value.virtualPortMinGuarantee;
    }
  }

  // virtual_port_max - computed: false, optional: true, required: false
  private _virtualPortMax?: number; 
  public get virtualPortMax() {
    return this.getNumberAttribute('virtual_port_max');
  }
  public set virtualPortMax(value: number) {
    this._virtualPortMax = value;
  }
  public resetVirtualPortMax() {
    this._virtualPortMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortMaxInput() {
    return this._virtualPortMax;
  }

  // virtual_port_min_guarantee - computed: false, optional: true, required: false
  private _virtualPortMinGuarantee?: number; 
  public get virtualPortMinGuarantee() {
    return this.getNumberAttribute('virtual_port_min_guarantee');
  }
  public set virtualPortMinGuarantee(value: number) {
    this._virtualPortMinGuarantee = value;
  }
  public resetVirtualPortMinGuarantee() {
    this._virtualPortMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortMinGuaranteeInput() {
    return this._virtualPortMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResourcesVirtualServerCfg {
  /**
  * Enter the number of virtual-servers allowed (virtual-server count (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#virtual_server_max System#virtual_server_max}
  */
  readonly virtualServerMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#virtual_server_min_guarantee System#virtual_server_min_guarantee}
  */
  readonly virtualServerMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListAppResourcesVirtualServerCfgToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesVirtualServerCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_server_max: cdktf.numberToTerraform(struct!.virtualServerMax),
    virtual_server_min_guarantee: cdktf.numberToTerraform(struct!.virtualServerMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListAppResourcesVirtualServerCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgOutputReference | SystemResourceAccountingTemplateListAppResourcesVirtualServerCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_server_max: {
      value: cdktf.numberToHclTerraform(struct!.virtualServerMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.virtualServerMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResourcesVirtualServerCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServerMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerMax = this._virtualServerMax;
    }
    if (this._virtualServerMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerMinGuarantee = this._virtualServerMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResourcesVirtualServerCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServerMax = undefined;
      this._virtualServerMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServerMax = value.virtualServerMax;
      this._virtualServerMinGuarantee = value.virtualServerMinGuarantee;
    }
  }

  // virtual_server_max - computed: false, optional: true, required: false
  private _virtualServerMax?: number; 
  public get virtualServerMax() {
    return this.getNumberAttribute('virtual_server_max');
  }
  public set virtualServerMax(value: number) {
    this._virtualServerMax = value;
  }
  public resetVirtualServerMax() {
    this._virtualServerMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerMaxInput() {
    return this._virtualServerMax;
  }

  // virtual_server_min_guarantee - computed: false, optional: true, required: false
  private _virtualServerMinGuarantee?: number; 
  public get virtualServerMinGuarantee() {
    return this.getNumberAttribute('virtual_server_min_guarantee');
  }
  public set virtualServerMinGuarantee(value: number) {
    this._virtualServerMinGuarantee = value;
  }
  public resetVirtualServerMinGuarantee() {
    this._virtualServerMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerMinGuaranteeInput() {
    return this._virtualServerMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListAppResources {
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#threshold System#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * cache_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#cache_template_cfg System#cache_template_cfg}
  */
  readonly cacheTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfg;
  /**
  * client_ssl_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#client_ssl_template_cfg System#client_ssl_template_cfg}
  */
  readonly clientSslTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfg;
  /**
  * conn_reuse_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#conn_reuse_template_cfg System#conn_reuse_template_cfg}
  */
  readonly connReuseTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfg;
  /**
  * fast_tcp_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fast_tcp_template_cfg System#fast_tcp_template_cfg}
  */
  readonly fastTcpTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfg;
  /**
  * fast_udp_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fast_udp_template_cfg System#fast_udp_template_cfg}
  */
  readonly fastUdpTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfg;
  /**
  * fix_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fix_template_cfg System#fix_template_cfg}
  */
  readonly fixTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesFixTemplateCfg;
  /**
  * gslb_device_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_device_cfg System#gslb_device_cfg}
  */
  readonly gslbDeviceCfg?: SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfg;
  /**
  * gslb_geo_location_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_geo_location_cfg System#gslb_geo_location_cfg}
  */
  readonly gslbGeoLocationCfg?: SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfg;
  /**
  * gslb_ip_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_ip_list_cfg System#gslb_ip_list_cfg}
  */
  readonly gslbIpListCfg?: SystemResourceAccountingTemplateListAppResourcesGslbIpListCfg;
  /**
  * gslb_policy_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_policy_cfg System#gslb_policy_cfg}
  */
  readonly gslbPolicyCfg?: SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfg;
  /**
  * gslb_service_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_service_cfg System#gslb_service_cfg}
  */
  readonly gslbServiceCfg?: SystemResourceAccountingTemplateListAppResourcesGslbServiceCfg;
  /**
  * gslb_service_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_service_ip_cfg System#gslb_service_ip_cfg}
  */
  readonly gslbServiceIpCfg?: SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfg;
  /**
  * gslb_service_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_service_port_cfg System#gslb_service_port_cfg}
  */
  readonly gslbServicePortCfg?: SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfg;
  /**
  * gslb_site_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_site_cfg System#gslb_site_cfg}
  */
  readonly gslbSiteCfg?: SystemResourceAccountingTemplateListAppResourcesGslbSiteCfg;
  /**
  * gslb_svc_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_svc_group_cfg System#gslb_svc_group_cfg}
  */
  readonly gslbSvcGroupCfg?: SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfg;
  /**
  * gslb_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_template_cfg System#gslb_template_cfg}
  */
  readonly gslbTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfg;
  /**
  * gslb_zone_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#gslb_zone_cfg System#gslb_zone_cfg}
  */
  readonly gslbZoneCfg?: SystemResourceAccountingTemplateListAppResourcesGslbZoneCfg;
  /**
  * health_monitor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#health_monitor_cfg System#health_monitor_cfg}
  */
  readonly healthMonitorCfg?: SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfg;
  /**
  * http_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#http_template_cfg System#http_template_cfg}
  */
  readonly httpTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfg;
  /**
  * link_cost_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#link_cost_template_cfg System#link_cost_template_cfg}
  */
  readonly linkCostTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfg;
  /**
  * pbslb_entry_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#pbslb_entry_cfg System#pbslb_entry_cfg}
  */
  readonly pbslbEntryCfg?: SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfg;
  /**
  * persist_cookie_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#persist_cookie_template_cfg System#persist_cookie_template_cfg}
  */
  readonly persistCookieTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfg;
  /**
  * persist_srcip_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#persist_srcip_template_cfg System#persist_srcip_template_cfg}
  */
  readonly persistSrcipTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfg;
  /**
  * proxy_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#proxy_template_cfg System#proxy_template_cfg}
  */
  readonly proxyTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfg;
  /**
  * real_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#real_port_cfg System#real_port_cfg}
  */
  readonly realPortCfg?: SystemResourceAccountingTemplateListAppResourcesRealPortCfg;
  /**
  * real_server_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#real_server_cfg System#real_server_cfg}
  */
  readonly realServerCfg?: SystemResourceAccountingTemplateListAppResourcesRealServerCfg;
  /**
  * server_ssl_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#server_ssl_template_cfg System#server_ssl_template_cfg}
  */
  readonly serverSslTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfg;
  /**
  * service_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#service_group_cfg System#service_group_cfg}
  */
  readonly serviceGroupCfg?: SystemResourceAccountingTemplateListAppResourcesServiceGroupCfg;
  /**
  * stream_template_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#stream_template_cfg System#stream_template_cfg}
  */
  readonly streamTemplateCfg?: SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfg;
  /**
  * virtual_port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#virtual_port_cfg System#virtual_port_cfg}
  */
  readonly virtualPortCfg?: SystemResourceAccountingTemplateListAppResourcesVirtualPortCfg;
  /**
  * virtual_server_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#virtual_server_cfg System#virtual_server_cfg}
  */
  readonly virtualServerCfg?: SystemResourceAccountingTemplateListAppResourcesVirtualServerCfg;
}

export function systemResourceAccountingTemplateListAppResourcesToTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesOutputReference | SystemResourceAccountingTemplateListAppResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cache_template_cfg: systemResourceAccountingTemplateListAppResourcesCacheTemplateCfgToTerraform(struct!.cacheTemplateCfg),
    client_ssl_template_cfg: systemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgToTerraform(struct!.clientSslTemplateCfg),
    conn_reuse_template_cfg: systemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgToTerraform(struct!.connReuseTemplateCfg),
    fast_tcp_template_cfg: systemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgToTerraform(struct!.fastTcpTemplateCfg),
    fast_udp_template_cfg: systemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgToTerraform(struct!.fastUdpTemplateCfg),
    fix_template_cfg: systemResourceAccountingTemplateListAppResourcesFixTemplateCfgToTerraform(struct!.fixTemplateCfg),
    gslb_device_cfg: systemResourceAccountingTemplateListAppResourcesGslbDeviceCfgToTerraform(struct!.gslbDeviceCfg),
    gslb_geo_location_cfg: systemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgToTerraform(struct!.gslbGeoLocationCfg),
    gslb_ip_list_cfg: systemResourceAccountingTemplateListAppResourcesGslbIpListCfgToTerraform(struct!.gslbIpListCfg),
    gslb_policy_cfg: systemResourceAccountingTemplateListAppResourcesGslbPolicyCfgToTerraform(struct!.gslbPolicyCfg),
    gslb_service_cfg: systemResourceAccountingTemplateListAppResourcesGslbServiceCfgToTerraform(struct!.gslbServiceCfg),
    gslb_service_ip_cfg: systemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgToTerraform(struct!.gslbServiceIpCfg),
    gslb_service_port_cfg: systemResourceAccountingTemplateListAppResourcesGslbServicePortCfgToTerraform(struct!.gslbServicePortCfg),
    gslb_site_cfg: systemResourceAccountingTemplateListAppResourcesGslbSiteCfgToTerraform(struct!.gslbSiteCfg),
    gslb_svc_group_cfg: systemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgToTerraform(struct!.gslbSvcGroupCfg),
    gslb_template_cfg: systemResourceAccountingTemplateListAppResourcesGslbTemplateCfgToTerraform(struct!.gslbTemplateCfg),
    gslb_zone_cfg: systemResourceAccountingTemplateListAppResourcesGslbZoneCfgToTerraform(struct!.gslbZoneCfg),
    health_monitor_cfg: systemResourceAccountingTemplateListAppResourcesHealthMonitorCfgToTerraform(struct!.healthMonitorCfg),
    http_template_cfg: systemResourceAccountingTemplateListAppResourcesHttpTemplateCfgToTerraform(struct!.httpTemplateCfg),
    link_cost_template_cfg: systemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgToTerraform(struct!.linkCostTemplateCfg),
    pbslb_entry_cfg: systemResourceAccountingTemplateListAppResourcesPbslbEntryCfgToTerraform(struct!.pbslbEntryCfg),
    persist_cookie_template_cfg: systemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgToTerraform(struct!.persistCookieTemplateCfg),
    persist_srcip_template_cfg: systemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgToTerraform(struct!.persistSrcipTemplateCfg),
    proxy_template_cfg: systemResourceAccountingTemplateListAppResourcesProxyTemplateCfgToTerraform(struct!.proxyTemplateCfg),
    real_port_cfg: systemResourceAccountingTemplateListAppResourcesRealPortCfgToTerraform(struct!.realPortCfg),
    real_server_cfg: systemResourceAccountingTemplateListAppResourcesRealServerCfgToTerraform(struct!.realServerCfg),
    server_ssl_template_cfg: systemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgToTerraform(struct!.serverSslTemplateCfg),
    service_group_cfg: systemResourceAccountingTemplateListAppResourcesServiceGroupCfgToTerraform(struct!.serviceGroupCfg),
    stream_template_cfg: systemResourceAccountingTemplateListAppResourcesStreamTemplateCfgToTerraform(struct!.streamTemplateCfg),
    virtual_port_cfg: systemResourceAccountingTemplateListAppResourcesVirtualPortCfgToTerraform(struct!.virtualPortCfg),
    virtual_server_cfg: systemResourceAccountingTemplateListAppResourcesVirtualServerCfgToTerraform(struct!.virtualServerCfg),
  }
}


export function systemResourceAccountingTemplateListAppResourcesToHclTerraform(struct?: SystemResourceAccountingTemplateListAppResourcesOutputReference | SystemResourceAccountingTemplateListAppResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
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
    cache_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesCacheTemplateCfgToHclTerraform(struct!.cacheTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgList",
    },
    client_ssl_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgToHclTerraform(struct!.clientSslTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgList",
    },
    conn_reuse_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgToHclTerraform(struct!.connReuseTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgList",
    },
    fast_tcp_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgToHclTerraform(struct!.fastTcpTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgList",
    },
    fast_udp_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgToHclTerraform(struct!.fastUdpTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgList",
    },
    fix_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesFixTemplateCfgToHclTerraform(struct!.fixTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgList",
    },
    gslb_device_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbDeviceCfgToHclTerraform(struct!.gslbDeviceCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgList",
    },
    gslb_geo_location_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgToHclTerraform(struct!.gslbGeoLocationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgList",
    },
    gslb_ip_list_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbIpListCfgToHclTerraform(struct!.gslbIpListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgList",
    },
    gslb_policy_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbPolicyCfgToHclTerraform(struct!.gslbPolicyCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgList",
    },
    gslb_service_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbServiceCfgToHclTerraform(struct!.gslbServiceCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgList",
    },
    gslb_service_ip_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgToHclTerraform(struct!.gslbServiceIpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgList",
    },
    gslb_service_port_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbServicePortCfgToHclTerraform(struct!.gslbServicePortCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgList",
    },
    gslb_site_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbSiteCfgToHclTerraform(struct!.gslbSiteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgList",
    },
    gslb_svc_group_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgToHclTerraform(struct!.gslbSvcGroupCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgList",
    },
    gslb_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbTemplateCfgToHclTerraform(struct!.gslbTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgList",
    },
    gslb_zone_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesGslbZoneCfgToHclTerraform(struct!.gslbZoneCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgList",
    },
    health_monitor_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesHealthMonitorCfgToHclTerraform(struct!.healthMonitorCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgList",
    },
    http_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesHttpTemplateCfgToHclTerraform(struct!.httpTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgList",
    },
    link_cost_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgToHclTerraform(struct!.linkCostTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgList",
    },
    pbslb_entry_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesPbslbEntryCfgToHclTerraform(struct!.pbslbEntryCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgList",
    },
    persist_cookie_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgToHclTerraform(struct!.persistCookieTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgList",
    },
    persist_srcip_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgToHclTerraform(struct!.persistSrcipTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgList",
    },
    proxy_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesProxyTemplateCfgToHclTerraform(struct!.proxyTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgList",
    },
    real_port_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesRealPortCfgToHclTerraform(struct!.realPortCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesRealPortCfgList",
    },
    real_server_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesRealServerCfgToHclTerraform(struct!.realServerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesRealServerCfgList",
    },
    server_ssl_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgToHclTerraform(struct!.serverSslTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgList",
    },
    service_group_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesServiceGroupCfgToHclTerraform(struct!.serviceGroupCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgList",
    },
    stream_template_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesStreamTemplateCfgToHclTerraform(struct!.streamTemplateCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgList",
    },
    virtual_port_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesVirtualPortCfgToHclTerraform(struct!.virtualPortCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgList",
    },
    virtual_server_cfg: {
      value: systemResourceAccountingTemplateListAppResourcesVirtualServerCfgToHclTerraform(struct!.virtualServerCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListAppResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListAppResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._cacheTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTemplateCfg = this._cacheTemplateCfg?.internalValue;
    }
    if (this._clientSslTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSslTemplateCfg = this._clientSslTemplateCfg?.internalValue;
    }
    if (this._connReuseTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connReuseTemplateCfg = this._connReuseTemplateCfg?.internalValue;
    }
    if (this._fastTcpTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTcpTemplateCfg = this._fastTcpTemplateCfg?.internalValue;
    }
    if (this._fastUdpTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastUdpTemplateCfg = this._fastUdpTemplateCfg?.internalValue;
    }
    if (this._fixTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixTemplateCfg = this._fixTemplateCfg?.internalValue;
    }
    if (this._gslbDeviceCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDeviceCfg = this._gslbDeviceCfg?.internalValue;
    }
    if (this._gslbGeoLocationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbGeoLocationCfg = this._gslbGeoLocationCfg?.internalValue;
    }
    if (this._gslbIpListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbIpListCfg = this._gslbIpListCfg?.internalValue;
    }
    if (this._gslbPolicyCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbPolicyCfg = this._gslbPolicyCfg?.internalValue;
    }
    if (this._gslbServiceCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceCfg = this._gslbServiceCfg?.internalValue;
    }
    if (this._gslbServiceIpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServiceIpCfg = this._gslbServiceIpCfg?.internalValue;
    }
    if (this._gslbServicePortCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbServicePortCfg = this._gslbServicePortCfg?.internalValue;
    }
    if (this._gslbSiteCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSiteCfg = this._gslbSiteCfg?.internalValue;
    }
    if (this._gslbSvcGroupCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbSvcGroupCfg = this._gslbSvcGroupCfg?.internalValue;
    }
    if (this._gslbTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbTemplateCfg = this._gslbTemplateCfg?.internalValue;
    }
    if (this._gslbZoneCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbZoneCfg = this._gslbZoneCfg?.internalValue;
    }
    if (this._healthMonitorCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitorCfg = this._healthMonitorCfg?.internalValue;
    }
    if (this._httpTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTemplateCfg = this._httpTemplateCfg?.internalValue;
    }
    if (this._linkCostTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostTemplateCfg = this._linkCostTemplateCfg?.internalValue;
    }
    if (this._pbslbEntryCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryCfg = this._pbslbEntryCfg?.internalValue;
    }
    if (this._persistCookieTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistCookieTemplateCfg = this._persistCookieTemplateCfg?.internalValue;
    }
    if (this._persistSrcipTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistSrcipTemplateCfg = this._persistSrcipTemplateCfg?.internalValue;
    }
    if (this._proxyTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTemplateCfg = this._proxyTemplateCfg?.internalValue;
    }
    if (this._realPortCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realPortCfg = this._realPortCfg?.internalValue;
    }
    if (this._realServerCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realServerCfg = this._realServerCfg?.internalValue;
    }
    if (this._serverSslTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSslTemplateCfg = this._serverSslTemplateCfg?.internalValue;
    }
    if (this._serviceGroupCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupCfg = this._serviceGroupCfg?.internalValue;
    }
    if (this._streamTemplateCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamTemplateCfg = this._streamTemplateCfg?.internalValue;
    }
    if (this._virtualPortCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPortCfg = this._virtualPortCfg?.internalValue;
    }
    if (this._virtualServerCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerCfg = this._virtualServerCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListAppResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._uuid = undefined;
      this._cacheTemplateCfg.internalValue = undefined;
      this._clientSslTemplateCfg.internalValue = undefined;
      this._connReuseTemplateCfg.internalValue = undefined;
      this._fastTcpTemplateCfg.internalValue = undefined;
      this._fastUdpTemplateCfg.internalValue = undefined;
      this._fixTemplateCfg.internalValue = undefined;
      this._gslbDeviceCfg.internalValue = undefined;
      this._gslbGeoLocationCfg.internalValue = undefined;
      this._gslbIpListCfg.internalValue = undefined;
      this._gslbPolicyCfg.internalValue = undefined;
      this._gslbServiceCfg.internalValue = undefined;
      this._gslbServiceIpCfg.internalValue = undefined;
      this._gslbServicePortCfg.internalValue = undefined;
      this._gslbSiteCfg.internalValue = undefined;
      this._gslbSvcGroupCfg.internalValue = undefined;
      this._gslbTemplateCfg.internalValue = undefined;
      this._gslbZoneCfg.internalValue = undefined;
      this._healthMonitorCfg.internalValue = undefined;
      this._httpTemplateCfg.internalValue = undefined;
      this._linkCostTemplateCfg.internalValue = undefined;
      this._pbslbEntryCfg.internalValue = undefined;
      this._persistCookieTemplateCfg.internalValue = undefined;
      this._persistSrcipTemplateCfg.internalValue = undefined;
      this._proxyTemplateCfg.internalValue = undefined;
      this._realPortCfg.internalValue = undefined;
      this._realServerCfg.internalValue = undefined;
      this._serverSslTemplateCfg.internalValue = undefined;
      this._serviceGroupCfg.internalValue = undefined;
      this._streamTemplateCfg.internalValue = undefined;
      this._virtualPortCfg.internalValue = undefined;
      this._virtualServerCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._uuid = value.uuid;
      this._cacheTemplateCfg.internalValue = value.cacheTemplateCfg;
      this._clientSslTemplateCfg.internalValue = value.clientSslTemplateCfg;
      this._connReuseTemplateCfg.internalValue = value.connReuseTemplateCfg;
      this._fastTcpTemplateCfg.internalValue = value.fastTcpTemplateCfg;
      this._fastUdpTemplateCfg.internalValue = value.fastUdpTemplateCfg;
      this._fixTemplateCfg.internalValue = value.fixTemplateCfg;
      this._gslbDeviceCfg.internalValue = value.gslbDeviceCfg;
      this._gslbGeoLocationCfg.internalValue = value.gslbGeoLocationCfg;
      this._gslbIpListCfg.internalValue = value.gslbIpListCfg;
      this._gslbPolicyCfg.internalValue = value.gslbPolicyCfg;
      this._gslbServiceCfg.internalValue = value.gslbServiceCfg;
      this._gslbServiceIpCfg.internalValue = value.gslbServiceIpCfg;
      this._gslbServicePortCfg.internalValue = value.gslbServicePortCfg;
      this._gslbSiteCfg.internalValue = value.gslbSiteCfg;
      this._gslbSvcGroupCfg.internalValue = value.gslbSvcGroupCfg;
      this._gslbTemplateCfg.internalValue = value.gslbTemplateCfg;
      this._gslbZoneCfg.internalValue = value.gslbZoneCfg;
      this._healthMonitorCfg.internalValue = value.healthMonitorCfg;
      this._httpTemplateCfg.internalValue = value.httpTemplateCfg;
      this._linkCostTemplateCfg.internalValue = value.linkCostTemplateCfg;
      this._pbslbEntryCfg.internalValue = value.pbslbEntryCfg;
      this._persistCookieTemplateCfg.internalValue = value.persistCookieTemplateCfg;
      this._persistSrcipTemplateCfg.internalValue = value.persistSrcipTemplateCfg;
      this._proxyTemplateCfg.internalValue = value.proxyTemplateCfg;
      this._realPortCfg.internalValue = value.realPortCfg;
      this._realServerCfg.internalValue = value.realServerCfg;
      this._serverSslTemplateCfg.internalValue = value.serverSslTemplateCfg;
      this._serviceGroupCfg.internalValue = value.serviceGroupCfg;
      this._streamTemplateCfg.internalValue = value.streamTemplateCfg;
      this._virtualPortCfg.internalValue = value.virtualPortCfg;
      this._virtualServerCfg.internalValue = value.virtualServerCfg;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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

  // cache_template_cfg - computed: false, optional: true, required: false
  private _cacheTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfgOutputReference(this, "cache_template_cfg");
  public get cacheTemplateCfg() {
    return this._cacheTemplateCfg;
  }
  public putCacheTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesCacheTemplateCfg) {
    this._cacheTemplateCfg.internalValue = value;
  }
  public resetCacheTemplateCfg() {
    this._cacheTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTemplateCfgInput() {
    return this._cacheTemplateCfg.internalValue;
  }

  // client_ssl_template_cfg - computed: false, optional: true, required: false
  private _clientSslTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfgOutputReference(this, "client_ssl_template_cfg");
  public get clientSslTemplateCfg() {
    return this._clientSslTemplateCfg;
  }
  public putClientSslTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesClientSslTemplateCfg) {
    this._clientSslTemplateCfg.internalValue = value;
  }
  public resetClientSslTemplateCfg() {
    this._clientSslTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSslTemplateCfgInput() {
    return this._clientSslTemplateCfg.internalValue;
  }

  // conn_reuse_template_cfg - computed: false, optional: true, required: false
  private _connReuseTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfgOutputReference(this, "conn_reuse_template_cfg");
  public get connReuseTemplateCfg() {
    return this._connReuseTemplateCfg;
  }
  public putConnReuseTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesConnReuseTemplateCfg) {
    this._connReuseTemplateCfg.internalValue = value;
  }
  public resetConnReuseTemplateCfg() {
    this._connReuseTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseTemplateCfgInput() {
    return this._connReuseTemplateCfg.internalValue;
  }

  // fast_tcp_template_cfg - computed: false, optional: true, required: false
  private _fastTcpTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfgOutputReference(this, "fast_tcp_template_cfg");
  public get fastTcpTemplateCfg() {
    return this._fastTcpTemplateCfg;
  }
  public putFastTcpTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesFastTcpTemplateCfg) {
    this._fastTcpTemplateCfg.internalValue = value;
  }
  public resetFastTcpTemplateCfg() {
    this._fastTcpTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTcpTemplateCfgInput() {
    return this._fastTcpTemplateCfg.internalValue;
  }

  // fast_udp_template_cfg - computed: false, optional: true, required: false
  private _fastUdpTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfgOutputReference(this, "fast_udp_template_cfg");
  public get fastUdpTemplateCfg() {
    return this._fastUdpTemplateCfg;
  }
  public putFastUdpTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesFastUdpTemplateCfg) {
    this._fastUdpTemplateCfg.internalValue = value;
  }
  public resetFastUdpTemplateCfg() {
    this._fastUdpTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastUdpTemplateCfgInput() {
    return this._fastUdpTemplateCfg.internalValue;
  }

  // fix_template_cfg - computed: false, optional: true, required: false
  private _fixTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesFixTemplateCfgOutputReference(this, "fix_template_cfg");
  public get fixTemplateCfg() {
    return this._fixTemplateCfg;
  }
  public putFixTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesFixTemplateCfg) {
    this._fixTemplateCfg.internalValue = value;
  }
  public resetFixTemplateCfg() {
    this._fixTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixTemplateCfgInput() {
    return this._fixTemplateCfg.internalValue;
  }

  // gslb_device_cfg - computed: false, optional: true, required: false
  private _gslbDeviceCfg = new SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfgOutputReference(this, "gslb_device_cfg");
  public get gslbDeviceCfg() {
    return this._gslbDeviceCfg;
  }
  public putGslbDeviceCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbDeviceCfg) {
    this._gslbDeviceCfg.internalValue = value;
  }
  public resetGslbDeviceCfg() {
    this._gslbDeviceCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDeviceCfgInput() {
    return this._gslbDeviceCfg.internalValue;
  }

  // gslb_geo_location_cfg - computed: false, optional: true, required: false
  private _gslbGeoLocationCfg = new SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfgOutputReference(this, "gslb_geo_location_cfg");
  public get gslbGeoLocationCfg() {
    return this._gslbGeoLocationCfg;
  }
  public putGslbGeoLocationCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbGeoLocationCfg) {
    this._gslbGeoLocationCfg.internalValue = value;
  }
  public resetGslbGeoLocationCfg() {
    this._gslbGeoLocationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeoLocationCfgInput() {
    return this._gslbGeoLocationCfg.internalValue;
  }

  // gslb_ip_list_cfg - computed: false, optional: true, required: false
  private _gslbIpListCfg = new SystemResourceAccountingTemplateListAppResourcesGslbIpListCfgOutputReference(this, "gslb_ip_list_cfg");
  public get gslbIpListCfg() {
    return this._gslbIpListCfg;
  }
  public putGslbIpListCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbIpListCfg) {
    this._gslbIpListCfg.internalValue = value;
  }
  public resetGslbIpListCfg() {
    this._gslbIpListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbIpListCfgInput() {
    return this._gslbIpListCfg.internalValue;
  }

  // gslb_policy_cfg - computed: false, optional: true, required: false
  private _gslbPolicyCfg = new SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfgOutputReference(this, "gslb_policy_cfg");
  public get gslbPolicyCfg() {
    return this._gslbPolicyCfg;
  }
  public putGslbPolicyCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbPolicyCfg) {
    this._gslbPolicyCfg.internalValue = value;
  }
  public resetGslbPolicyCfg() {
    this._gslbPolicyCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbPolicyCfgInput() {
    return this._gslbPolicyCfg.internalValue;
  }

  // gslb_service_cfg - computed: false, optional: true, required: false
  private _gslbServiceCfg = new SystemResourceAccountingTemplateListAppResourcesGslbServiceCfgOutputReference(this, "gslb_service_cfg");
  public get gslbServiceCfg() {
    return this._gslbServiceCfg;
  }
  public putGslbServiceCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbServiceCfg) {
    this._gslbServiceCfg.internalValue = value;
  }
  public resetGslbServiceCfg() {
    this._gslbServiceCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceCfgInput() {
    return this._gslbServiceCfg.internalValue;
  }

  // gslb_service_ip_cfg - computed: false, optional: true, required: false
  private _gslbServiceIpCfg = new SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfgOutputReference(this, "gslb_service_ip_cfg");
  public get gslbServiceIpCfg() {
    return this._gslbServiceIpCfg;
  }
  public putGslbServiceIpCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbServiceIpCfg) {
    this._gslbServiceIpCfg.internalValue = value;
  }
  public resetGslbServiceIpCfg() {
    this._gslbServiceIpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServiceIpCfgInput() {
    return this._gslbServiceIpCfg.internalValue;
  }

  // gslb_service_port_cfg - computed: false, optional: true, required: false
  private _gslbServicePortCfg = new SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfgOutputReference(this, "gslb_service_port_cfg");
  public get gslbServicePortCfg() {
    return this._gslbServicePortCfg;
  }
  public putGslbServicePortCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbServicePortCfg) {
    this._gslbServicePortCfg.internalValue = value;
  }
  public resetGslbServicePortCfg() {
    this._gslbServicePortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbServicePortCfgInput() {
    return this._gslbServicePortCfg.internalValue;
  }

  // gslb_site_cfg - computed: false, optional: true, required: false
  private _gslbSiteCfg = new SystemResourceAccountingTemplateListAppResourcesGslbSiteCfgOutputReference(this, "gslb_site_cfg");
  public get gslbSiteCfg() {
    return this._gslbSiteCfg;
  }
  public putGslbSiteCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbSiteCfg) {
    this._gslbSiteCfg.internalValue = value;
  }
  public resetGslbSiteCfg() {
    this._gslbSiteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSiteCfgInput() {
    return this._gslbSiteCfg.internalValue;
  }

  // gslb_svc_group_cfg - computed: false, optional: true, required: false
  private _gslbSvcGroupCfg = new SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfgOutputReference(this, "gslb_svc_group_cfg");
  public get gslbSvcGroupCfg() {
    return this._gslbSvcGroupCfg;
  }
  public putGslbSvcGroupCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbSvcGroupCfg) {
    this._gslbSvcGroupCfg.internalValue = value;
  }
  public resetGslbSvcGroupCfg() {
    this._gslbSvcGroupCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbSvcGroupCfgInput() {
    return this._gslbSvcGroupCfg.internalValue;
  }

  // gslb_template_cfg - computed: false, optional: true, required: false
  private _gslbTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfgOutputReference(this, "gslb_template_cfg");
  public get gslbTemplateCfg() {
    return this._gslbTemplateCfg;
  }
  public putGslbTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbTemplateCfg) {
    this._gslbTemplateCfg.internalValue = value;
  }
  public resetGslbTemplateCfg() {
    this._gslbTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbTemplateCfgInput() {
    return this._gslbTemplateCfg.internalValue;
  }

  // gslb_zone_cfg - computed: false, optional: true, required: false
  private _gslbZoneCfg = new SystemResourceAccountingTemplateListAppResourcesGslbZoneCfgOutputReference(this, "gslb_zone_cfg");
  public get gslbZoneCfg() {
    return this._gslbZoneCfg;
  }
  public putGslbZoneCfg(value: SystemResourceAccountingTemplateListAppResourcesGslbZoneCfg) {
    this._gslbZoneCfg.internalValue = value;
  }
  public resetGslbZoneCfg() {
    this._gslbZoneCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbZoneCfgInput() {
    return this._gslbZoneCfg.internalValue;
  }

  // health_monitor_cfg - computed: false, optional: true, required: false
  private _healthMonitorCfg = new SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfgOutputReference(this, "health_monitor_cfg");
  public get healthMonitorCfg() {
    return this._healthMonitorCfg;
  }
  public putHealthMonitorCfg(value: SystemResourceAccountingTemplateListAppResourcesHealthMonitorCfg) {
    this._healthMonitorCfg.internalValue = value;
  }
  public resetHealthMonitorCfg() {
    this._healthMonitorCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorCfgInput() {
    return this._healthMonitorCfg.internalValue;
  }

  // http_template_cfg - computed: false, optional: true, required: false
  private _httpTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfgOutputReference(this, "http_template_cfg");
  public get httpTemplateCfg() {
    return this._httpTemplateCfg;
  }
  public putHttpTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesHttpTemplateCfg) {
    this._httpTemplateCfg.internalValue = value;
  }
  public resetHttpTemplateCfg() {
    this._httpTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTemplateCfgInput() {
    return this._httpTemplateCfg.internalValue;
  }

  // link_cost_template_cfg - computed: false, optional: true, required: false
  private _linkCostTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfgOutputReference(this, "link_cost_template_cfg");
  public get linkCostTemplateCfg() {
    return this._linkCostTemplateCfg;
  }
  public putLinkCostTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesLinkCostTemplateCfg) {
    this._linkCostTemplateCfg.internalValue = value;
  }
  public resetLinkCostTemplateCfg() {
    this._linkCostTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostTemplateCfgInput() {
    return this._linkCostTemplateCfg.internalValue;
  }

  // pbslb_entry_cfg - computed: false, optional: true, required: false
  private _pbslbEntryCfg = new SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfgOutputReference(this, "pbslb_entry_cfg");
  public get pbslbEntryCfg() {
    return this._pbslbEntryCfg;
  }
  public putPbslbEntryCfg(value: SystemResourceAccountingTemplateListAppResourcesPbslbEntryCfg) {
    this._pbslbEntryCfg.internalValue = value;
  }
  public resetPbslbEntryCfg() {
    this._pbslbEntryCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryCfgInput() {
    return this._pbslbEntryCfg.internalValue;
  }

  // persist_cookie_template_cfg - computed: false, optional: true, required: false
  private _persistCookieTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfgOutputReference(this, "persist_cookie_template_cfg");
  public get persistCookieTemplateCfg() {
    return this._persistCookieTemplateCfg;
  }
  public putPersistCookieTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesPersistCookieTemplateCfg) {
    this._persistCookieTemplateCfg.internalValue = value;
  }
  public resetPersistCookieTemplateCfg() {
    this._persistCookieTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistCookieTemplateCfgInput() {
    return this._persistCookieTemplateCfg.internalValue;
  }

  // persist_srcip_template_cfg - computed: false, optional: true, required: false
  private _persistSrcipTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfgOutputReference(this, "persist_srcip_template_cfg");
  public get persistSrcipTemplateCfg() {
    return this._persistSrcipTemplateCfg;
  }
  public putPersistSrcipTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesPersistSrcipTemplateCfg) {
    this._persistSrcipTemplateCfg.internalValue = value;
  }
  public resetPersistSrcipTemplateCfg() {
    this._persistSrcipTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistSrcipTemplateCfgInput() {
    return this._persistSrcipTemplateCfg.internalValue;
  }

  // proxy_template_cfg - computed: false, optional: true, required: false
  private _proxyTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfgOutputReference(this, "proxy_template_cfg");
  public get proxyTemplateCfg() {
    return this._proxyTemplateCfg;
  }
  public putProxyTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesProxyTemplateCfg) {
    this._proxyTemplateCfg.internalValue = value;
  }
  public resetProxyTemplateCfg() {
    this._proxyTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTemplateCfgInput() {
    return this._proxyTemplateCfg.internalValue;
  }

  // real_port_cfg - computed: false, optional: true, required: false
  private _realPortCfg = new SystemResourceAccountingTemplateListAppResourcesRealPortCfgOutputReference(this, "real_port_cfg");
  public get realPortCfg() {
    return this._realPortCfg;
  }
  public putRealPortCfg(value: SystemResourceAccountingTemplateListAppResourcesRealPortCfg) {
    this._realPortCfg.internalValue = value;
  }
  public resetRealPortCfg() {
    this._realPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realPortCfgInput() {
    return this._realPortCfg.internalValue;
  }

  // real_server_cfg - computed: false, optional: true, required: false
  private _realServerCfg = new SystemResourceAccountingTemplateListAppResourcesRealServerCfgOutputReference(this, "real_server_cfg");
  public get realServerCfg() {
    return this._realServerCfg;
  }
  public putRealServerCfg(value: SystemResourceAccountingTemplateListAppResourcesRealServerCfg) {
    this._realServerCfg.internalValue = value;
  }
  public resetRealServerCfg() {
    this._realServerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realServerCfgInput() {
    return this._realServerCfg.internalValue;
  }

  // server_ssl_template_cfg - computed: false, optional: true, required: false
  private _serverSslTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfgOutputReference(this, "server_ssl_template_cfg");
  public get serverSslTemplateCfg() {
    return this._serverSslTemplateCfg;
  }
  public putServerSslTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesServerSslTemplateCfg) {
    this._serverSslTemplateCfg.internalValue = value;
  }
  public resetServerSslTemplateCfg() {
    this._serverSslTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSslTemplateCfgInput() {
    return this._serverSslTemplateCfg.internalValue;
  }

  // service_group_cfg - computed: false, optional: true, required: false
  private _serviceGroupCfg = new SystemResourceAccountingTemplateListAppResourcesServiceGroupCfgOutputReference(this, "service_group_cfg");
  public get serviceGroupCfg() {
    return this._serviceGroupCfg;
  }
  public putServiceGroupCfg(value: SystemResourceAccountingTemplateListAppResourcesServiceGroupCfg) {
    this._serviceGroupCfg.internalValue = value;
  }
  public resetServiceGroupCfg() {
    this._serviceGroupCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupCfgInput() {
    return this._serviceGroupCfg.internalValue;
  }

  // stream_template_cfg - computed: false, optional: true, required: false
  private _streamTemplateCfg = new SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfgOutputReference(this, "stream_template_cfg");
  public get streamTemplateCfg() {
    return this._streamTemplateCfg;
  }
  public putStreamTemplateCfg(value: SystemResourceAccountingTemplateListAppResourcesStreamTemplateCfg) {
    this._streamTemplateCfg.internalValue = value;
  }
  public resetStreamTemplateCfg() {
    this._streamTemplateCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamTemplateCfgInput() {
    return this._streamTemplateCfg.internalValue;
  }

  // virtual_port_cfg - computed: false, optional: true, required: false
  private _virtualPortCfg = new SystemResourceAccountingTemplateListAppResourcesVirtualPortCfgOutputReference(this, "virtual_port_cfg");
  public get virtualPortCfg() {
    return this._virtualPortCfg;
  }
  public putVirtualPortCfg(value: SystemResourceAccountingTemplateListAppResourcesVirtualPortCfg) {
    this._virtualPortCfg.internalValue = value;
  }
  public resetVirtualPortCfg() {
    this._virtualPortCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortCfgInput() {
    return this._virtualPortCfg.internalValue;
  }

  // virtual_server_cfg - computed: false, optional: true, required: false
  private _virtualServerCfg = new SystemResourceAccountingTemplateListAppResourcesVirtualServerCfgOutputReference(this, "virtual_server_cfg");
  public get virtualServerCfg() {
    return this._virtualServerCfg;
  }
  public putVirtualServerCfg(value: SystemResourceAccountingTemplateListAppResourcesVirtualServerCfg) {
    this._virtualServerCfg.internalValue = value;
  }
  public resetVirtualServerCfg() {
    this._virtualServerCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerCfgInput() {
    return this._virtualServerCfg.internalValue;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfg {
  /**
  * Enter the number of ACL lines allowed (IPV4 ACL lines (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ipv4_acl_line_max System#ipv4_acl_line_max}
  */
  readonly ipv4AclLineMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ipv4_acl_line_min_guarantee System#ipv4_acl_line_min_guarantee}
  */
  readonly ipv4AclLineMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_acl_line_max: cdktf.numberToTerraform(struct!.ipv4AclLineMax),
    ipv4_acl_line_min_guarantee: cdktf.numberToTerraform(struct!.ipv4AclLineMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_acl_line_max: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AclLineMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_acl_line_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AclLineMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4AclLineMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AclLineMax = this._ipv4AclLineMax;
    }
    if (this._ipv4AclLineMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AclLineMinGuarantee = this._ipv4AclLineMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4AclLineMax = undefined;
      this._ipv4AclLineMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4AclLineMax = value.ipv4AclLineMax;
      this._ipv4AclLineMinGuarantee = value.ipv4AclLineMinGuarantee;
    }
  }

  // ipv4_acl_line_max - computed: false, optional: true, required: false
  private _ipv4AclLineMax?: number; 
  public get ipv4AclLineMax() {
    return this.getNumberAttribute('ipv4_acl_line_max');
  }
  public set ipv4AclLineMax(value: number) {
    this._ipv4AclLineMax = value;
  }
  public resetIpv4AclLineMax() {
    this._ipv4AclLineMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclLineMaxInput() {
    return this._ipv4AclLineMax;
  }

  // ipv4_acl_line_min_guarantee - computed: false, optional: true, required: false
  private _ipv4AclLineMinGuarantee?: number; 
  public get ipv4AclLineMinGuarantee() {
    return this.getNumberAttribute('ipv4_acl_line_min_guarantee');
  }
  public set ipv4AclLineMinGuarantee(value: number) {
    this._ipv4AclLineMinGuarantee = value;
  }
  public resetIpv4AclLineMinGuarantee() {
    this._ipv4AclLineMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclLineMinGuaranteeInput() {
    return this._ipv4AclLineMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfg {
  /**
  * Enter the number of ACL lines allowed (IPV6 ACL lines (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ipv6_acl_line_max System#ipv6_acl_line_max}
  */
  readonly ipv6AclLineMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ipv6_acl_line_min_guarantee System#ipv6_acl_line_min_guarantee}
  */
  readonly ipv6AclLineMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_acl_line_max: cdktf.numberToTerraform(struct!.ipv6AclLineMax),
    ipv6_acl_line_min_guarantee: cdktf.numberToTerraform(struct!.ipv6AclLineMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_acl_line_max: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AclLineMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_acl_line_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AclLineMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6AclLineMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AclLineMax = this._ipv6AclLineMax;
    }
    if (this._ipv6AclLineMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AclLineMinGuarantee = this._ipv6AclLineMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6AclLineMax = undefined;
      this._ipv6AclLineMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6AclLineMax = value.ipv6AclLineMax;
      this._ipv6AclLineMinGuarantee = value.ipv6AclLineMinGuarantee;
    }
  }

  // ipv6_acl_line_max - computed: false, optional: true, required: false
  private _ipv6AclLineMax?: number; 
  public get ipv6AclLineMax() {
    return this.getNumberAttribute('ipv6_acl_line_max');
  }
  public set ipv6AclLineMax(value: number) {
    this._ipv6AclLineMax = value;
  }
  public resetIpv6AclLineMax() {
    this._ipv6AclLineMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclLineMaxInput() {
    return this._ipv6AclLineMax;
  }

  // ipv6_acl_line_min_guarantee - computed: false, optional: true, required: false
  private _ipv6AclLineMinGuarantee?: number; 
  public get ipv6AclLineMinGuarantee() {
    return this.getNumberAttribute('ipv6_acl_line_min_guarantee');
  }
  public set ipv6AclLineMinGuarantee(value: number) {
    this._ipv6AclLineMinGuarantee = value;
  }
  public resetIpv6AclLineMinGuarantee() {
    this._ipv6AclLineMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclLineMinGuaranteeInput() {
    return this._ipv6AclLineMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfg {
  /**
  * Enter the number of object groups allowed (Object group (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#object_group_max System#object_group_max}
  */
  readonly objectGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#object_group_min_guarantee System#object_group_min_guarantee}
  */
  readonly objectGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_group_max: cdktf.numberToTerraform(struct!.objectGroupMax),
    object_group_min_guarantee: cdktf.numberToTerraform(struct!.objectGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_group_max: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_group_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectGroupMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupMax = this._objectGroupMax;
    }
    if (this._objectGroupMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupMinGuarantee = this._objectGroupMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectGroupMax = undefined;
      this._objectGroupMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectGroupMax = value.objectGroupMax;
      this._objectGroupMinGuarantee = value.objectGroupMinGuarantee;
    }
  }

  // object_group_max - computed: false, optional: true, required: false
  private _objectGroupMax?: number; 
  public get objectGroupMax() {
    return this.getNumberAttribute('object_group_max');
  }
  public set objectGroupMax(value: number) {
    this._objectGroupMax = value;
  }
  public resetObjectGroupMax() {
    this._objectGroupMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupMaxInput() {
    return this._objectGroupMax;
  }

  // object_group_min_guarantee - computed: false, optional: true, required: false
  private _objectGroupMinGuarantee?: number; 
  public get objectGroupMinGuarantee() {
    return this.getNumberAttribute('object_group_min_guarantee');
  }
  public set objectGroupMinGuarantee(value: number) {
    this._objectGroupMinGuarantee = value;
  }
  public resetObjectGroupMinGuarantee() {
    this._objectGroupMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupMinGuaranteeInput() {
    return this._objectGroupMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfg {
  /**
  * Enter the number of object group clauses allowed (Object group clauses (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#object_group_clause_max System#object_group_clause_max}
  */
  readonly objectGroupClauseMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#object_group_clause_min_guarantee System#object_group_clause_min_guarantee}
  */
  readonly objectGroupClauseMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_group_clause_max: cdktf.numberToTerraform(struct!.objectGroupClauseMax),
    object_group_clause_min_guarantee: cdktf.numberToTerraform(struct!.objectGroupClauseMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_group_clause_max: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupClauseMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_group_clause_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupClauseMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectGroupClauseMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupClauseMax = this._objectGroupClauseMax;
    }
    if (this._objectGroupClauseMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupClauseMinGuarantee = this._objectGroupClauseMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectGroupClauseMax = undefined;
      this._objectGroupClauseMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectGroupClauseMax = value.objectGroupClauseMax;
      this._objectGroupClauseMinGuarantee = value.objectGroupClauseMinGuarantee;
    }
  }

  // object_group_clause_max - computed: false, optional: true, required: false
  private _objectGroupClauseMax?: number; 
  public get objectGroupClauseMax() {
    return this.getNumberAttribute('object_group_clause_max');
  }
  public set objectGroupClauseMax(value: number) {
    this._objectGroupClauseMax = value;
  }
  public resetObjectGroupClauseMax() {
    this._objectGroupClauseMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupClauseMaxInput() {
    return this._objectGroupClauseMax;
  }

  // object_group_clause_min_guarantee - computed: false, optional: true, required: false
  private _objectGroupClauseMinGuarantee?: number; 
  public get objectGroupClauseMinGuarantee() {
    return this.getNumberAttribute('object_group_clause_min_guarantee');
  }
  public set objectGroupClauseMinGuarantee(value: number) {
    this._objectGroupClauseMinGuarantee = value;
  }
  public resetObjectGroupClauseMinGuarantee() {
    this._objectGroupClauseMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupClauseMinGuaranteeInput() {
    return this._objectGroupClauseMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfg {
  /**
  * Enter the number of static arp entries allowed (Static arp (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_arp_max System#static_arp_max}
  */
  readonly staticArpMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_arp_min_guarantee System#static_arp_min_guarantee}
  */
  readonly staticArpMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesStaticArpCfgToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_arp_max: cdktf.numberToTerraform(struct!.staticArpMax),
    static_arp_min_guarantee: cdktf.numberToTerraform(struct!.staticArpMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesStaticArpCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_arp_max: {
      value: cdktf.numberToHclTerraform(struct!.staticArpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_arp_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticArpMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticArpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticArpMax = this._staticArpMax;
    }
    if (this._staticArpMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticArpMinGuarantee = this._staticArpMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticArpMax = undefined;
      this._staticArpMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticArpMax = value.staticArpMax;
      this._staticArpMinGuarantee = value.staticArpMinGuarantee;
    }
  }

  // static_arp_max - computed: false, optional: true, required: false
  private _staticArpMax?: number; 
  public get staticArpMax() {
    return this.getNumberAttribute('static_arp_max');
  }
  public set staticArpMax(value: number) {
    this._staticArpMax = value;
  }
  public resetStaticArpMax() {
    this._staticArpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpMaxInput() {
    return this._staticArpMax;
  }

  // static_arp_min_guarantee - computed: false, optional: true, required: false
  private _staticArpMinGuarantee?: number; 
  public get staticArpMinGuarantee() {
    return this.getNumberAttribute('static_arp_min_guarantee');
  }
  public set staticArpMinGuarantee(value: number) {
    this._staticArpMinGuarantee = value;
  }
  public resetStaticArpMinGuarantee() {
    this._staticArpMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpMinGuaranteeInput() {
    return this._staticArpMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfg {
  /**
  * Enter the number of static ipv4 routes allowed (Static ipv4 routes (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_ipv4_route_max System#static_ipv4_route_max}
  */
  readonly staticIpv4RouteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_ipv4_route_min_guarantee System#static_ipv4_route_min_guarantee}
  */
  readonly staticIpv4RouteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_ipv4_route_max: cdktf.numberToTerraform(struct!.staticIpv4RouteMax),
    static_ipv4_route_min_guarantee: cdktf.numberToTerraform(struct!.staticIpv4RouteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_ipv4_route_max: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv4RouteMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ipv4_route_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv4RouteMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticIpv4RouteMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4RouteMax = this._staticIpv4RouteMax;
    }
    if (this._staticIpv4RouteMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4RouteMinGuarantee = this._staticIpv4RouteMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticIpv4RouteMax = undefined;
      this._staticIpv4RouteMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticIpv4RouteMax = value.staticIpv4RouteMax;
      this._staticIpv4RouteMinGuarantee = value.staticIpv4RouteMinGuarantee;
    }
  }

  // static_ipv4_route_max - computed: false, optional: true, required: false
  private _staticIpv4RouteMax?: number; 
  public get staticIpv4RouteMax() {
    return this.getNumberAttribute('static_ipv4_route_max');
  }
  public set staticIpv4RouteMax(value: number) {
    this._staticIpv4RouteMax = value;
  }
  public resetStaticIpv4RouteMax() {
    this._staticIpv4RouteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4RouteMaxInput() {
    return this._staticIpv4RouteMax;
  }

  // static_ipv4_route_min_guarantee - computed: false, optional: true, required: false
  private _staticIpv4RouteMinGuarantee?: number; 
  public get staticIpv4RouteMinGuarantee() {
    return this.getNumberAttribute('static_ipv4_route_min_guarantee');
  }
  public set staticIpv4RouteMinGuarantee(value: number) {
    this._staticIpv4RouteMinGuarantee = value;
  }
  public resetStaticIpv4RouteMinGuarantee() {
    this._staticIpv4RouteMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4RouteMinGuaranteeInput() {
    return this._staticIpv4RouteMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfg {
  /**
  * Enter the number of static ipv6 routes allowed (Static ipv6 routes (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_ipv6_route_max System#static_ipv6_route_max}
  */
  readonly staticIpv6RouteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_ipv6_route_min_guarantee System#static_ipv6_route_min_guarantee}
  */
  readonly staticIpv6RouteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_ipv6_route_max: cdktf.numberToTerraform(struct!.staticIpv6RouteMax),
    static_ipv6_route_min_guarantee: cdktf.numberToTerraform(struct!.staticIpv6RouteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_ipv6_route_max: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv6RouteMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ipv6_route_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv6RouteMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticIpv6RouteMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6RouteMax = this._staticIpv6RouteMax;
    }
    if (this._staticIpv6RouteMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6RouteMinGuarantee = this._staticIpv6RouteMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticIpv6RouteMax = undefined;
      this._staticIpv6RouteMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticIpv6RouteMax = value.staticIpv6RouteMax;
      this._staticIpv6RouteMinGuarantee = value.staticIpv6RouteMinGuarantee;
    }
  }

  // static_ipv6_route_max - computed: false, optional: true, required: false
  private _staticIpv6RouteMax?: number; 
  public get staticIpv6RouteMax() {
    return this.getNumberAttribute('static_ipv6_route_max');
  }
  public set staticIpv6RouteMax(value: number) {
    this._staticIpv6RouteMax = value;
  }
  public resetStaticIpv6RouteMax() {
    this._staticIpv6RouteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6RouteMaxInput() {
    return this._staticIpv6RouteMax;
  }

  // static_ipv6_route_min_guarantee - computed: false, optional: true, required: false
  private _staticIpv6RouteMinGuarantee?: number; 
  public get staticIpv6RouteMinGuarantee() {
    return this.getNumberAttribute('static_ipv6_route_min_guarantee');
  }
  public set staticIpv6RouteMinGuarantee(value: number) {
    this._staticIpv6RouteMinGuarantee = value;
  }
  public resetStaticIpv6RouteMinGuarantee() {
    this._staticIpv6RouteMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6RouteMinGuaranteeInput() {
    return this._staticIpv6RouteMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfg {
  /**
  * Enter the number of static MAC entries allowed (Static MACs (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_mac_max System#static_mac_max}
  */
  readonly staticMacMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_mac_min_guarantee System#static_mac_min_guarantee}
  */
  readonly staticMacMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesStaticMacCfgToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_mac_max: cdktf.numberToTerraform(struct!.staticMacMax),
    static_mac_min_guarantee: cdktf.numberToTerraform(struct!.staticMacMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesStaticMacCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_mac_max: {
      value: cdktf.numberToHclTerraform(struct!.staticMacMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_mac_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticMacMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticMacMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticMacMax = this._staticMacMax;
    }
    if (this._staticMacMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticMacMinGuarantee = this._staticMacMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticMacMax = undefined;
      this._staticMacMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticMacMax = value.staticMacMax;
      this._staticMacMinGuarantee = value.staticMacMinGuarantee;
    }
  }

  // static_mac_max - computed: false, optional: true, required: false
  private _staticMacMax?: number; 
  public get staticMacMax() {
    return this.getNumberAttribute('static_mac_max');
  }
  public set staticMacMax(value: number) {
    this._staticMacMax = value;
  }
  public resetStaticMacMax() {
    this._staticMacMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacMaxInput() {
    return this._staticMacMax;
  }

  // static_mac_min_guarantee - computed: false, optional: true, required: false
  private _staticMacMinGuarantee?: number; 
  public get staticMacMinGuarantee() {
    return this.getNumberAttribute('static_mac_min_guarantee');
  }
  public set staticMacMinGuarantee(value: number) {
    this._staticMacMinGuarantee = value;
  }
  public resetStaticMacMinGuarantee() {
    this._staticMacMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacMinGuaranteeInput() {
    return this._staticMacMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfg {
  /**
  * Enter the number of static neighbor entries allowed (Static neighbors (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_neighbor_max System#static_neighbor_max}
  */
  readonly staticNeighborMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_neighbor_min_guarantee System#static_neighbor_min_guarantee}
  */
  readonly staticNeighborMinGuarantee?: number;
}

export function systemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_neighbor_max: cdktf.numberToTerraform(struct!.staticNeighborMax),
    static_neighbor_min_guarantee: cdktf.numberToTerraform(struct!.staticNeighborMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgOutputReference | SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_neighbor_max: {
      value: cdktf.numberToHclTerraform(struct!.staticNeighborMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_neighbor_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticNeighborMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticNeighborMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNeighborMax = this._staticNeighborMax;
    }
    if (this._staticNeighborMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNeighborMinGuarantee = this._staticNeighborMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticNeighborMax = undefined;
      this._staticNeighborMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticNeighborMax = value.staticNeighborMax;
      this._staticNeighborMinGuarantee = value.staticNeighborMinGuarantee;
    }
  }

  // static_neighbor_max - computed: false, optional: true, required: false
  private _staticNeighborMax?: number; 
  public get staticNeighborMax() {
    return this.getNumberAttribute('static_neighbor_max');
  }
  public set staticNeighborMax(value: number) {
    this._staticNeighborMax = value;
  }
  public resetStaticNeighborMax() {
    this._staticNeighborMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNeighborMaxInput() {
    return this._staticNeighborMax;
  }

  // static_neighbor_min_guarantee - computed: false, optional: true, required: false
  private _staticNeighborMinGuarantee?: number; 
  public get staticNeighborMinGuarantee() {
    return this.getNumberAttribute('static_neighbor_min_guarantee');
  }
  public set staticNeighborMinGuarantee(value: number) {
    this._staticNeighborMinGuarantee = value;
  }
  public resetStaticNeighborMinGuarantee() {
    this._staticNeighborMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNeighborMinGuaranteeInput() {
    return this._staticNeighborMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListNetworkResources {
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#threshold System#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * ipv4_acl_line_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ipv4_acl_line_cfg System#ipv4_acl_line_cfg}
  */
  readonly ipv4AclLineCfg?: SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfg;
  /**
  * ipv6_acl_line_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ipv6_acl_line_cfg System#ipv6_acl_line_cfg}
  */
  readonly ipv6AclLineCfg?: SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfg;
  /**
  * object_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#object_group_cfg System#object_group_cfg}
  */
  readonly objectGroupCfg?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfg;
  /**
  * object_group_clause_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#object_group_clause_cfg System#object_group_clause_cfg}
  */
  readonly objectGroupClauseCfg?: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfg;
  /**
  * static_arp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_arp_cfg System#static_arp_cfg}
  */
  readonly staticArpCfg?: SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfg;
  /**
  * static_ipv4_route_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_ipv4_route_cfg System#static_ipv4_route_cfg}
  */
  readonly staticIpv4RouteCfg?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfg;
  /**
  * static_ipv6_route_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_ipv6_route_cfg System#static_ipv6_route_cfg}
  */
  readonly staticIpv6RouteCfg?: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfg;
  /**
  * static_mac_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_mac_cfg System#static_mac_cfg}
  */
  readonly staticMacCfg?: SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfg;
  /**
  * static_neighbor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#static_neighbor_cfg System#static_neighbor_cfg}
  */
  readonly staticNeighborCfg?: SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfg;
}

export function systemResourceAccountingTemplateListNetworkResourcesToTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesOutputReference | SystemResourceAccountingTemplateListNetworkResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ipv4_acl_line_cfg: systemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgToTerraform(struct!.ipv4AclLineCfg),
    ipv6_acl_line_cfg: systemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgToTerraform(struct!.ipv6AclLineCfg),
    object_group_cfg: systemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgToTerraform(struct!.objectGroupCfg),
    object_group_clause_cfg: systemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgToTerraform(struct!.objectGroupClauseCfg),
    static_arp_cfg: systemResourceAccountingTemplateListNetworkResourcesStaticArpCfgToTerraform(struct!.staticArpCfg),
    static_ipv4_route_cfg: systemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgToTerraform(struct!.staticIpv4RouteCfg),
    static_ipv6_route_cfg: systemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgToTerraform(struct!.staticIpv6RouteCfg),
    static_mac_cfg: systemResourceAccountingTemplateListNetworkResourcesStaticMacCfgToTerraform(struct!.staticMacCfg),
    static_neighbor_cfg: systemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgToTerraform(struct!.staticNeighborCfg),
  }
}


export function systemResourceAccountingTemplateListNetworkResourcesToHclTerraform(struct?: SystemResourceAccountingTemplateListNetworkResourcesOutputReference | SystemResourceAccountingTemplateListNetworkResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
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
    ipv4_acl_line_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgToHclTerraform(struct!.ipv4AclLineCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgList",
    },
    ipv6_acl_line_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgToHclTerraform(struct!.ipv6AclLineCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgList",
    },
    object_group_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgToHclTerraform(struct!.objectGroupCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgList",
    },
    object_group_clause_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgToHclTerraform(struct!.objectGroupClauseCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgList",
    },
    static_arp_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesStaticArpCfgToHclTerraform(struct!.staticArpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgList",
    },
    static_ipv4_route_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgToHclTerraform(struct!.staticIpv4RouteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgList",
    },
    static_ipv6_route_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgToHclTerraform(struct!.staticIpv6RouteCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgList",
    },
    static_mac_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesStaticMacCfgToHclTerraform(struct!.staticMacCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgList",
    },
    static_neighbor_cfg: {
      value: systemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgToHclTerraform(struct!.staticNeighborCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListNetworkResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListNetworkResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ipv4AclLineCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AclLineCfg = this._ipv4AclLineCfg?.internalValue;
    }
    if (this._ipv6AclLineCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AclLineCfg = this._ipv6AclLineCfg?.internalValue;
    }
    if (this._objectGroupCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupCfg = this._objectGroupCfg?.internalValue;
    }
    if (this._objectGroupClauseCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupClauseCfg = this._objectGroupClauseCfg?.internalValue;
    }
    if (this._staticArpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticArpCfg = this._staticArpCfg?.internalValue;
    }
    if (this._staticIpv4RouteCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4RouteCfg = this._staticIpv4RouteCfg?.internalValue;
    }
    if (this._staticIpv6RouteCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6RouteCfg = this._staticIpv6RouteCfg?.internalValue;
    }
    if (this._staticMacCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticMacCfg = this._staticMacCfg?.internalValue;
    }
    if (this._staticNeighborCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNeighborCfg = this._staticNeighborCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListNetworkResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._uuid = undefined;
      this._ipv4AclLineCfg.internalValue = undefined;
      this._ipv6AclLineCfg.internalValue = undefined;
      this._objectGroupCfg.internalValue = undefined;
      this._objectGroupClauseCfg.internalValue = undefined;
      this._staticArpCfg.internalValue = undefined;
      this._staticIpv4RouteCfg.internalValue = undefined;
      this._staticIpv6RouteCfg.internalValue = undefined;
      this._staticMacCfg.internalValue = undefined;
      this._staticNeighborCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._uuid = value.uuid;
      this._ipv4AclLineCfg.internalValue = value.ipv4AclLineCfg;
      this._ipv6AclLineCfg.internalValue = value.ipv6AclLineCfg;
      this._objectGroupCfg.internalValue = value.objectGroupCfg;
      this._objectGroupClauseCfg.internalValue = value.objectGroupClauseCfg;
      this._staticArpCfg.internalValue = value.staticArpCfg;
      this._staticIpv4RouteCfg.internalValue = value.staticIpv4RouteCfg;
      this._staticIpv6RouteCfg.internalValue = value.staticIpv6RouteCfg;
      this._staticMacCfg.internalValue = value.staticMacCfg;
      this._staticNeighborCfg.internalValue = value.staticNeighborCfg;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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

  // ipv4_acl_line_cfg - computed: false, optional: true, required: false
  private _ipv4AclLineCfg = new SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfgOutputReference(this, "ipv4_acl_line_cfg");
  public get ipv4AclLineCfg() {
    return this._ipv4AclLineCfg;
  }
  public putIpv4AclLineCfg(value: SystemResourceAccountingTemplateListNetworkResourcesIpv4AclLineCfg) {
    this._ipv4AclLineCfg.internalValue = value;
  }
  public resetIpv4AclLineCfg() {
    this._ipv4AclLineCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclLineCfgInput() {
    return this._ipv4AclLineCfg.internalValue;
  }

  // ipv6_acl_line_cfg - computed: false, optional: true, required: false
  private _ipv6AclLineCfg = new SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfgOutputReference(this, "ipv6_acl_line_cfg");
  public get ipv6AclLineCfg() {
    return this._ipv6AclLineCfg;
  }
  public putIpv6AclLineCfg(value: SystemResourceAccountingTemplateListNetworkResourcesIpv6AclLineCfg) {
    this._ipv6AclLineCfg.internalValue = value;
  }
  public resetIpv6AclLineCfg() {
    this._ipv6AclLineCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclLineCfgInput() {
    return this._ipv6AclLineCfg.internalValue;
  }

  // object_group_cfg - computed: false, optional: true, required: false
  private _objectGroupCfg = new SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfgOutputReference(this, "object_group_cfg");
  public get objectGroupCfg() {
    return this._objectGroupCfg;
  }
  public putObjectGroupCfg(value: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupCfg) {
    this._objectGroupCfg.internalValue = value;
  }
  public resetObjectGroupCfg() {
    this._objectGroupCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupCfgInput() {
    return this._objectGroupCfg.internalValue;
  }

  // object_group_clause_cfg - computed: false, optional: true, required: false
  private _objectGroupClauseCfg = new SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfgOutputReference(this, "object_group_clause_cfg");
  public get objectGroupClauseCfg() {
    return this._objectGroupClauseCfg;
  }
  public putObjectGroupClauseCfg(value: SystemResourceAccountingTemplateListNetworkResourcesObjectGroupClauseCfg) {
    this._objectGroupClauseCfg.internalValue = value;
  }
  public resetObjectGroupClauseCfg() {
    this._objectGroupClauseCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupClauseCfgInput() {
    return this._objectGroupClauseCfg.internalValue;
  }

  // static_arp_cfg - computed: false, optional: true, required: false
  private _staticArpCfg = new SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfgOutputReference(this, "static_arp_cfg");
  public get staticArpCfg() {
    return this._staticArpCfg;
  }
  public putStaticArpCfg(value: SystemResourceAccountingTemplateListNetworkResourcesStaticArpCfg) {
    this._staticArpCfg.internalValue = value;
  }
  public resetStaticArpCfg() {
    this._staticArpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpCfgInput() {
    return this._staticArpCfg.internalValue;
  }

  // static_ipv4_route_cfg - computed: false, optional: true, required: false
  private _staticIpv4RouteCfg = new SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfgOutputReference(this, "static_ipv4_route_cfg");
  public get staticIpv4RouteCfg() {
    return this._staticIpv4RouteCfg;
  }
  public putStaticIpv4RouteCfg(value: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv4RouteCfg) {
    this._staticIpv4RouteCfg.internalValue = value;
  }
  public resetStaticIpv4RouteCfg() {
    this._staticIpv4RouteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4RouteCfgInput() {
    return this._staticIpv4RouteCfg.internalValue;
  }

  // static_ipv6_route_cfg - computed: false, optional: true, required: false
  private _staticIpv6RouteCfg = new SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfgOutputReference(this, "static_ipv6_route_cfg");
  public get staticIpv6RouteCfg() {
    return this._staticIpv6RouteCfg;
  }
  public putStaticIpv6RouteCfg(value: SystemResourceAccountingTemplateListNetworkResourcesStaticIpv6RouteCfg) {
    this._staticIpv6RouteCfg.internalValue = value;
  }
  public resetStaticIpv6RouteCfg() {
    this._staticIpv6RouteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6RouteCfgInput() {
    return this._staticIpv6RouteCfg.internalValue;
  }

  // static_mac_cfg - computed: false, optional: true, required: false
  private _staticMacCfg = new SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfgOutputReference(this, "static_mac_cfg");
  public get staticMacCfg() {
    return this._staticMacCfg;
  }
  public putStaticMacCfg(value: SystemResourceAccountingTemplateListNetworkResourcesStaticMacCfg) {
    this._staticMacCfg.internalValue = value;
  }
  public resetStaticMacCfg() {
    this._staticMacCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacCfgInput() {
    return this._staticMacCfg.internalValue;
  }

  // static_neighbor_cfg - computed: false, optional: true, required: false
  private _staticNeighborCfg = new SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfgOutputReference(this, "static_neighbor_cfg");
  public get staticNeighborCfg() {
    return this._staticNeighborCfg;
  }
  public putStaticNeighborCfg(value: SystemResourceAccountingTemplateListNetworkResourcesStaticNeighborCfg) {
    this._staticNeighborCfg.internalValue = value;
  }
  public resetStaticNeighborCfg() {
    this._staticNeighborCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNeighborCfgInput() {
    return this._staticNeighborCfg.internalValue;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesBwLimitCfg {
  /**
  * Enter the bandwidth limit in mbps (Bandwidth limit in Mbit/s (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#bw_limit_max System#bw_limit_max}
  */
  readonly bwLimitMax?: number;
  /**
  * Disable watermark (90% drop, keep existing sessions, drop  new sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#bw_limit_watermark_disable System#bw_limit_watermark_disable}
  */
  readonly bwLimitWatermarkDisable?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesBwLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesBwLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bw_limit_max: cdktf.numberToTerraform(struct!.bwLimitMax),
    bw_limit_watermark_disable: cdktf.numberToTerraform(struct!.bwLimitWatermarkDisable),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesBwLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesBwLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bw_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.bwLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bw_limit_watermark_disable: {
      value: cdktf.numberToHclTerraform(struct!.bwLimitWatermarkDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesBwLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bwLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwLimitMax = this._bwLimitMax;
    }
    if (this._bwLimitWatermarkDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwLimitWatermarkDisable = this._bwLimitWatermarkDisable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesBwLimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bwLimitMax = undefined;
      this._bwLimitWatermarkDisable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bwLimitMax = value.bwLimitMax;
      this._bwLimitWatermarkDisable = value.bwLimitWatermarkDisable;
    }
  }

  // bw_limit_max - computed: false, optional: true, required: false
  private _bwLimitMax?: number; 
  public get bwLimitMax() {
    return this.getNumberAttribute('bw_limit_max');
  }
  public set bwLimitMax(value: number) {
    this._bwLimitMax = value;
  }
  public resetBwLimitMax() {
    this._bwLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwLimitMaxInput() {
    return this._bwLimitMax;
  }

  // bw_limit_watermark_disable - computed: false, optional: true, required: false
  private _bwLimitWatermarkDisable?: number; 
  public get bwLimitWatermarkDisable() {
    return this.getNumberAttribute('bw_limit_watermark_disable');
  }
  public set bwLimitWatermarkDisable(value: number) {
    this._bwLimitWatermarkDisable = value;
  }
  public resetBwLimitWatermarkDisable() {
    this._bwLimitWatermarkDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwLimitWatermarkDisableInput() {
    return this._bwLimitWatermarkDisable;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfg {
  /**
  * Enter the Concurrent Session limit (cps) (Concurrent-Session cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#concurrent_session_limit_max System#concurrent_session_limit_max}
  */
  readonly concurrentSessionLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_session_limit_max: cdktf.numberToTerraform(struct!.concurrentSessionLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_session_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.concurrentSessionLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentSessionLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentSessionLimitMax = this._concurrentSessionLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrentSessionLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrentSessionLimitMax = value.concurrentSessionLimitMax;
    }
  }

  // concurrent_session_limit_max - computed: false, optional: true, required: false
  private _concurrentSessionLimitMax?: number; 
  public get concurrentSessionLimitMax() {
    return this.getNumberAttribute('concurrent_session_limit_max');
  }
  public set concurrentSessionLimitMax(value: number) {
    this._concurrentSessionLimitMax = value;
  }
  public resetConcurrentSessionLimitMax() {
    this._concurrentSessionLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSessionLimitMaxInput() {
    return this._concurrentSessionLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfg {
  /**
  * Enter the Firewall cps limit (Firewall cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fwcps_limit_max System#fwcps_limit_max}
  */
  readonly fwcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fwcps_limit_max: cdktf.numberToTerraform(struct!.fwcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fwcps_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.fwcpsLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwcpsLimitMax = this._fwcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fwcpsLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fwcpsLimitMax = value.fwcpsLimitMax;
    }
  }

  // fwcps_limit_max - computed: false, optional: true, required: false
  private _fwcpsLimitMax?: number; 
  public get fwcpsLimitMax() {
    return this.getNumberAttribute('fwcps_limit_max');
  }
  public set fwcpsLimitMax(value: number) {
    this._fwcpsLimitMax = value;
  }
  public resetFwcpsLimitMax() {
    this._fwcpsLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwcpsLimitMaxInput() {
    return this._fwcpsLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfg {
  /**
  * Enter the l4 session limit in % (0.01% to 99.99%) (Enter a number from 0.01 to 99.99 (up to 2 digits precision))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l4_session_limit_max System#l4_session_limit_max}
  */
  readonly l4SessionLimitMax?: string;
  /**
  * minimum guaranteed value in % (up to 2 digits precision) (Enter a number from 0 to 99.99)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l4_session_limit_min_guarantee System#l4_session_limit_min_guarantee}
  */
  readonly l4SessionLimitMinGuarantee?: string;
}

export function systemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l4_session_limit_max: cdktf.stringToTerraform(struct!.l4SessionLimitMax),
    l4_session_limit_min_guarantee: cdktf.stringToTerraform(struct!.l4SessionLimitMinGuarantee),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l4_session_limit_max: {
      value: cdktf.stringToHclTerraform(struct!.l4SessionLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_session_limit_min_guarantee: {
      value: cdktf.stringToHclTerraform(struct!.l4SessionLimitMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l4SessionLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionLimitMax = this._l4SessionLimitMax;
    }
    if (this._l4SessionLimitMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionLimitMinGuarantee = this._l4SessionLimitMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l4SessionLimitMax = undefined;
      this._l4SessionLimitMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l4SessionLimitMax = value.l4SessionLimitMax;
      this._l4SessionLimitMinGuarantee = value.l4SessionLimitMinGuarantee;
    }
  }

  // l4_session_limit_max - computed: false, optional: true, required: false
  private _l4SessionLimitMax?: string; 
  public get l4SessionLimitMax() {
    return this.getStringAttribute('l4_session_limit_max');
  }
  public set l4SessionLimitMax(value: string) {
    this._l4SessionLimitMax = value;
  }
  public resetL4SessionLimitMax() {
    this._l4SessionLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionLimitMaxInput() {
    return this._l4SessionLimitMax;
  }

  // l4_session_limit_min_guarantee - computed: false, optional: true, required: false
  private _l4SessionLimitMinGuarantee?: string; 
  public get l4SessionLimitMinGuarantee() {
    return this.getStringAttribute('l4_session_limit_min_guarantee');
  }
  public set l4SessionLimitMinGuarantee(value: string) {
    this._l4SessionLimitMinGuarantee = value;
  }
  public resetL4SessionLimitMinGuarantee() {
    this._l4SessionLimitMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionLimitMinGuaranteeInput() {
    return this._l4SessionLimitMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfg {
  /**
  * Enter the L4 cps limit (L4 cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l4cps_limit_max System#l4cps_limit_max}
  */
  readonly l4CpsLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l4cps_limit_max: cdktf.numberToTerraform(struct!.l4CpsLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l4cps_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.l4CpsLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l4CpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpsLimitMax = this._l4CpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l4CpsLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l4CpsLimitMax = value.l4CpsLimitMax;
    }
  }

  // l4cps_limit_max - computed: false, optional: true, required: false
  private _l4CpsLimitMax?: number; 
  public get l4CpsLimitMax() {
    return this.getNumberAttribute('l4cps_limit_max');
  }
  public set l4CpsLimitMax(value: number) {
    this._l4CpsLimitMax = value;
  }
  public resetL4CpsLimitMax() {
    this._l4CpsLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpsLimitMaxInput() {
    return this._l4CpsLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfg {
  /**
  * L7cps-limit (L7 cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l7cps_limit_max System#l7cps_limit_max}
  */
  readonly l7CpsLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l7cps_limit_max: cdktf.numberToTerraform(struct!.l7CpsLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l7cps_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.l7CpsLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l7CpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7CpsLimitMax = this._l7CpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l7CpsLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l7CpsLimitMax = value.l7CpsLimitMax;
    }
  }

  // l7cps_limit_max - computed: false, optional: true, required: false
  private _l7CpsLimitMax?: number; 
  public get l7CpsLimitMax() {
    return this.getNumberAttribute('l7cps_limit_max');
  }
  public set l7CpsLimitMax(value: number) {
    this._l7CpsLimitMax = value;
  }
  public resetL7CpsLimitMax() {
    this._l7CpsLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7CpsLimitMaxInput() {
    return this._l7CpsLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfg {
  /**
  * Enter the Nat cps limit (NAT cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#natcps_limit_max System#natcps_limit_max}
  */
  readonly natcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    natcps_limit_max: cdktf.numberToTerraform(struct!.natcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    natcps_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.natcpsLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.natcpsLimitMax = this._natcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._natcpsLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._natcpsLimitMax = value.natcpsLimitMax;
    }
  }

  // natcps_limit_max - computed: false, optional: true, required: false
  private _natcpsLimitMax?: number; 
  public get natcpsLimitMax() {
    return this.getNumberAttribute('natcps_limit_max');
  }
  public set natcpsLimitMax(value: number) {
    this._natcpsLimitMax = value;
  }
  public resetNatcpsLimitMax() {
    this._natcpsLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natcpsLimitMaxInput() {
    return this._natcpsLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfg {
  /**
  * Enter the ssl throughput limit in mbps (SSL Througput limit in Mbit/s (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ssl_throughput_limit_max System#ssl_throughput_limit_max}
  */
  readonly sslThroughputLimitMax?: number;
  /**
  * Disable watermark (90% drop, keep existing sessions, drop  new sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ssl_throughput_limit_watermark_disable System#ssl_throughput_limit_watermark_disable}
  */
  readonly sslThroughputLimitWatermarkDisable?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_throughput_limit_max: cdktf.numberToTerraform(struct!.sslThroughputLimitMax),
    ssl_throughput_limit_watermark_disable: cdktf.numberToTerraform(struct!.sslThroughputLimitWatermarkDisable),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_throughput_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.sslThroughputLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_throughput_limit_watermark_disable: {
      value: cdktf.numberToHclTerraform(struct!.sslThroughputLimitWatermarkDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslThroughputLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslThroughputLimitMax = this._sslThroughputLimitMax;
    }
    if (this._sslThroughputLimitWatermarkDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslThroughputLimitWatermarkDisable = this._sslThroughputLimitWatermarkDisable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sslThroughputLimitMax = undefined;
      this._sslThroughputLimitWatermarkDisable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sslThroughputLimitMax = value.sslThroughputLimitMax;
      this._sslThroughputLimitWatermarkDisable = value.sslThroughputLimitWatermarkDisable;
    }
  }

  // ssl_throughput_limit_max - computed: false, optional: true, required: false
  private _sslThroughputLimitMax?: number; 
  public get sslThroughputLimitMax() {
    return this.getNumberAttribute('ssl_throughput_limit_max');
  }
  public set sslThroughputLimitMax(value: number) {
    this._sslThroughputLimitMax = value;
  }
  public resetSslThroughputLimitMax() {
    this._sslThroughputLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslThroughputLimitMaxInput() {
    return this._sslThroughputLimitMax;
  }

  // ssl_throughput_limit_watermark_disable - computed: false, optional: true, required: false
  private _sslThroughputLimitWatermarkDisable?: number; 
  public get sslThroughputLimitWatermarkDisable() {
    return this.getNumberAttribute('ssl_throughput_limit_watermark_disable');
  }
  public set sslThroughputLimitWatermarkDisable(value: number) {
    this._sslThroughputLimitWatermarkDisable = value;
  }
  public resetSslThroughputLimitWatermarkDisable() {
    this._sslThroughputLimitWatermarkDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslThroughputLimitWatermarkDisableInput() {
    return this._sslThroughputLimitWatermarkDisable;
  }
}
export interface SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfg {
  /**
  * Enter the SSL cps limit (SSL cps limit (no limits applied by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sslcps_limit_max System#sslcps_limit_max}
  */
  readonly sslcpsLimitMax?: number;
}

export function systemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sslcps_limit_max: cdktf.numberToTerraform(struct!.sslcpsLimitMax),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgOutputReference | SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sslcps_limit_max: {
      value: cdktf.numberToHclTerraform(struct!.sslcpsLimitMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslcpsLimitMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslcpsLimitMax = this._sslcpsLimitMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sslcpsLimitMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sslcpsLimitMax = value.sslcpsLimitMax;
    }
  }

  // sslcps_limit_max - computed: false, optional: true, required: false
  private _sslcpsLimitMax?: number; 
  public get sslcpsLimitMax() {
    return this.getNumberAttribute('sslcps_limit_max');
  }
  public set sslcpsLimitMax(value: number) {
    this._sslcpsLimitMax = value;
  }
  public resetSslcpsLimitMax() {
    this._sslcpsLimitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslcpsLimitMaxInput() {
    return this._sslcpsLimitMax;
  }
}
export interface SystemResourceAccountingTemplateListSystemResources {
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#threshold System#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * bw_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#bw_limit_cfg System#bw_limit_cfg}
  */
  readonly bwLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesBwLimitCfg;
  /**
  * concurrent_session_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#concurrent_session_limit_cfg System#concurrent_session_limit_cfg}
  */
  readonly concurrentSessionLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfg;
  /**
  * fwcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#fwcps_limit_cfg System#fwcps_limit_cfg}
  */
  readonly fwcpsLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfg;
  /**
  * l4_session_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l4_session_limit_cfg System#l4_session_limit_cfg}
  */
  readonly l4SessionLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfg;
  /**
  * l4cps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l4cps_limit_cfg System#l4cps_limit_cfg}
  */
  readonly l4CpsLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfg;
  /**
  * l7cps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l7cps_limit_cfg System#l7cps_limit_cfg}
  */
  readonly l7CpsLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfg;
  /**
  * natcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#natcps_limit_cfg System#natcps_limit_cfg}
  */
  readonly natcpsLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfg;
  /**
  * ssl_throughput_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ssl_throughput_limit_cfg System#ssl_throughput_limit_cfg}
  */
  readonly sslThroughputLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfg;
  /**
  * sslcps_limit_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sslcps_limit_cfg System#sslcps_limit_cfg}
  */
  readonly sslcpsLimitCfg?: SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfg;
}

export function systemResourceAccountingTemplateListSystemResourcesToTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesOutputReference | SystemResourceAccountingTemplateListSystemResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    bw_limit_cfg: systemResourceAccountingTemplateListSystemResourcesBwLimitCfgToTerraform(struct!.bwLimitCfg),
    concurrent_session_limit_cfg: systemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgToTerraform(struct!.concurrentSessionLimitCfg),
    fwcps_limit_cfg: systemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgToTerraform(struct!.fwcpsLimitCfg),
    l4_session_limit_cfg: systemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgToTerraform(struct!.l4SessionLimitCfg),
    l4cps_limit_cfg: systemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgToTerraform(struct!.l4CpsLimitCfg),
    l7cps_limit_cfg: systemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgToTerraform(struct!.l7CpsLimitCfg),
    natcps_limit_cfg: systemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgToTerraform(struct!.natcpsLimitCfg),
    ssl_throughput_limit_cfg: systemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgToTerraform(struct!.sslThroughputLimitCfg),
    sslcps_limit_cfg: systemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgToTerraform(struct!.sslcpsLimitCfg),
  }
}


export function systemResourceAccountingTemplateListSystemResourcesToHclTerraform(struct?: SystemResourceAccountingTemplateListSystemResourcesOutputReference | SystemResourceAccountingTemplateListSystemResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
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
    bw_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesBwLimitCfgToHclTerraform(struct!.bwLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgList",
    },
    concurrent_session_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgToHclTerraform(struct!.concurrentSessionLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgList",
    },
    fwcps_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgToHclTerraform(struct!.fwcpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgList",
    },
    l4_session_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgToHclTerraform(struct!.l4SessionLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgList",
    },
    l4cps_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgToHclTerraform(struct!.l4CpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgList",
    },
    l7cps_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgToHclTerraform(struct!.l7CpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgList",
    },
    natcps_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgToHclTerraform(struct!.natcpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgList",
    },
    ssl_throughput_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgToHclTerraform(struct!.sslThroughputLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgList",
    },
    sslcps_limit_cfg: {
      value: systemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgToHclTerraform(struct!.sslcpsLimitCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListSystemResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateListSystemResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._bwLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwLimitCfg = this._bwLimitCfg?.internalValue;
    }
    if (this._concurrentSessionLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentSessionLimitCfg = this._concurrentSessionLimitCfg?.internalValue;
    }
    if (this._fwcpsLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwcpsLimitCfg = this._fwcpsLimitCfg?.internalValue;
    }
    if (this._l4SessionLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionLimitCfg = this._l4SessionLimitCfg?.internalValue;
    }
    if (this._l4CpsLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpsLimitCfg = this._l4CpsLimitCfg?.internalValue;
    }
    if (this._l7CpsLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7CpsLimitCfg = this._l7CpsLimitCfg?.internalValue;
    }
    if (this._natcpsLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natcpsLimitCfg = this._natcpsLimitCfg?.internalValue;
    }
    if (this._sslThroughputLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslThroughputLimitCfg = this._sslThroughputLimitCfg?.internalValue;
    }
    if (this._sslcpsLimitCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslcpsLimitCfg = this._sslcpsLimitCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListSystemResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._uuid = undefined;
      this._bwLimitCfg.internalValue = undefined;
      this._concurrentSessionLimitCfg.internalValue = undefined;
      this._fwcpsLimitCfg.internalValue = undefined;
      this._l4SessionLimitCfg.internalValue = undefined;
      this._l4CpsLimitCfg.internalValue = undefined;
      this._l7CpsLimitCfg.internalValue = undefined;
      this._natcpsLimitCfg.internalValue = undefined;
      this._sslThroughputLimitCfg.internalValue = undefined;
      this._sslcpsLimitCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._uuid = value.uuid;
      this._bwLimitCfg.internalValue = value.bwLimitCfg;
      this._concurrentSessionLimitCfg.internalValue = value.concurrentSessionLimitCfg;
      this._fwcpsLimitCfg.internalValue = value.fwcpsLimitCfg;
      this._l4SessionLimitCfg.internalValue = value.l4SessionLimitCfg;
      this._l4CpsLimitCfg.internalValue = value.l4CpsLimitCfg;
      this._l7CpsLimitCfg.internalValue = value.l7CpsLimitCfg;
      this._natcpsLimitCfg.internalValue = value.natcpsLimitCfg;
      this._sslThroughputLimitCfg.internalValue = value.sslThroughputLimitCfg;
      this._sslcpsLimitCfg.internalValue = value.sslcpsLimitCfg;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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

  // bw_limit_cfg - computed: false, optional: true, required: false
  private _bwLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesBwLimitCfgOutputReference(this, "bw_limit_cfg");
  public get bwLimitCfg() {
    return this._bwLimitCfg;
  }
  public putBwLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesBwLimitCfg) {
    this._bwLimitCfg.internalValue = value;
  }
  public resetBwLimitCfg() {
    this._bwLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwLimitCfgInput() {
    return this._bwLimitCfg.internalValue;
  }

  // concurrent_session_limit_cfg - computed: false, optional: true, required: false
  private _concurrentSessionLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfgOutputReference(this, "concurrent_session_limit_cfg");
  public get concurrentSessionLimitCfg() {
    return this._concurrentSessionLimitCfg;
  }
  public putConcurrentSessionLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesConcurrentSessionLimitCfg) {
    this._concurrentSessionLimitCfg.internalValue = value;
  }
  public resetConcurrentSessionLimitCfg() {
    this._concurrentSessionLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSessionLimitCfgInput() {
    return this._concurrentSessionLimitCfg.internalValue;
  }

  // fwcps_limit_cfg - computed: false, optional: true, required: false
  private _fwcpsLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfgOutputReference(this, "fwcps_limit_cfg");
  public get fwcpsLimitCfg() {
    return this._fwcpsLimitCfg;
  }
  public putFwcpsLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesFwcpsLimitCfg) {
    this._fwcpsLimitCfg.internalValue = value;
  }
  public resetFwcpsLimitCfg() {
    this._fwcpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwcpsLimitCfgInput() {
    return this._fwcpsLimitCfg.internalValue;
  }

  // l4_session_limit_cfg - computed: false, optional: true, required: false
  private _l4SessionLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfgOutputReference(this, "l4_session_limit_cfg");
  public get l4SessionLimitCfg() {
    return this._l4SessionLimitCfg;
  }
  public putL4SessionLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesL4SessionLimitCfg) {
    this._l4SessionLimitCfg.internalValue = value;
  }
  public resetL4SessionLimitCfg() {
    this._l4SessionLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionLimitCfgInput() {
    return this._l4SessionLimitCfg.internalValue;
  }

  // l4cps_limit_cfg - computed: false, optional: true, required: false
  private _l4CpsLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfgOutputReference(this, "l4cps_limit_cfg");
  public get l4CpsLimitCfg() {
    return this._l4CpsLimitCfg;
  }
  public putL4CpsLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesL4CpsLimitCfg) {
    this._l4CpsLimitCfg.internalValue = value;
  }
  public resetL4CpsLimitCfg() {
    this._l4CpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpsLimitCfgInput() {
    return this._l4CpsLimitCfg.internalValue;
  }

  // l7cps_limit_cfg - computed: false, optional: true, required: false
  private _l7CpsLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfgOutputReference(this, "l7cps_limit_cfg");
  public get l7CpsLimitCfg() {
    return this._l7CpsLimitCfg;
  }
  public putL7CpsLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesL7CpsLimitCfg) {
    this._l7CpsLimitCfg.internalValue = value;
  }
  public resetL7CpsLimitCfg() {
    this._l7CpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7CpsLimitCfgInput() {
    return this._l7CpsLimitCfg.internalValue;
  }

  // natcps_limit_cfg - computed: false, optional: true, required: false
  private _natcpsLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfgOutputReference(this, "natcps_limit_cfg");
  public get natcpsLimitCfg() {
    return this._natcpsLimitCfg;
  }
  public putNatcpsLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesNatcpsLimitCfg) {
    this._natcpsLimitCfg.internalValue = value;
  }
  public resetNatcpsLimitCfg() {
    this._natcpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natcpsLimitCfgInput() {
    return this._natcpsLimitCfg.internalValue;
  }

  // ssl_throughput_limit_cfg - computed: false, optional: true, required: false
  private _sslThroughputLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfgOutputReference(this, "ssl_throughput_limit_cfg");
  public get sslThroughputLimitCfg() {
    return this._sslThroughputLimitCfg;
  }
  public putSslThroughputLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesSslThroughputLimitCfg) {
    this._sslThroughputLimitCfg.internalValue = value;
  }
  public resetSslThroughputLimitCfg() {
    this._sslThroughputLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslThroughputLimitCfgInput() {
    return this._sslThroughputLimitCfg.internalValue;
  }

  // sslcps_limit_cfg - computed: false, optional: true, required: false
  private _sslcpsLimitCfg = new SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfgOutputReference(this, "sslcps_limit_cfg");
  public get sslcpsLimitCfg() {
    return this._sslcpsLimitCfg;
  }
  public putSslcpsLimitCfg(value: SystemResourceAccountingTemplateListSystemResourcesSslcpsLimitCfg) {
    this._sslcpsLimitCfg.internalValue = value;
  }
  public resetSslcpsLimitCfg() {
    this._sslcpsLimitCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslcpsLimitCfgInput() {
    return this._sslcpsLimitCfg.internalValue;
  }
}
export interface SystemResourceAccountingTemplateListStruct {
  /**
  * Enter template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#name System#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#user_tag System#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * app_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#app_resources System#app_resources}
  */
  readonly appResources?: SystemResourceAccountingTemplateListAppResources;
  /**
  * network_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#network_resources System#network_resources}
  */
  readonly networkResources?: SystemResourceAccountingTemplateListNetworkResources;
  /**
  * system_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#system_resources System#system_resources}
  */
  readonly systemResources?: SystemResourceAccountingTemplateListSystemResources;
}

export function systemResourceAccountingTemplateListStructToTerraform(struct?: SystemResourceAccountingTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    app_resources: systemResourceAccountingTemplateListAppResourcesToTerraform(struct!.appResources),
    network_resources: systemResourceAccountingTemplateListNetworkResourcesToTerraform(struct!.networkResources),
    system_resources: systemResourceAccountingTemplateListSystemResourcesToTerraform(struct!.systemResources),
  }
}


export function systemResourceAccountingTemplateListStructToHclTerraform(struct?: SystemResourceAccountingTemplateListStruct | cdktf.IResolvable): any {
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
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
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
    app_resources: {
      value: systemResourceAccountingTemplateListAppResourcesToHclTerraform(struct!.appResources),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListAppResourcesList",
    },
    network_resources: {
      value: systemResourceAccountingTemplateListNetworkResourcesToHclTerraform(struct!.networkResources),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListNetworkResourcesList",
    },
    system_resources: {
      value: systemResourceAccountingTemplateListSystemResourcesToHclTerraform(struct!.systemResources),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListSystemResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemResourceAccountingTemplateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._appResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appResources = this._appResources?.internalValue;
    }
    if (this._networkResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkResources = this._networkResources?.internalValue;
    }
    if (this._systemResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemResources = this._systemResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._appResources.internalValue = undefined;
      this._networkResources.internalValue = undefined;
      this._systemResources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._appResources.internalValue = value.appResources;
      this._networkResources.internalValue = value.networkResources;
      this._systemResources.internalValue = value.systemResources;
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

  // app_resources - computed: false, optional: true, required: false
  private _appResources = new SystemResourceAccountingTemplateListAppResourcesOutputReference(this, "app_resources");
  public get appResources() {
    return this._appResources;
  }
  public putAppResources(value: SystemResourceAccountingTemplateListAppResources) {
    this._appResources.internalValue = value;
  }
  public resetAppResources() {
    this._appResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appResourcesInput() {
    return this._appResources.internalValue;
  }

  // network_resources - computed: false, optional: true, required: false
  private _networkResources = new SystemResourceAccountingTemplateListNetworkResourcesOutputReference(this, "network_resources");
  public get networkResources() {
    return this._networkResources;
  }
  public putNetworkResources(value: SystemResourceAccountingTemplateListNetworkResources) {
    this._networkResources.internalValue = value;
  }
  public resetNetworkResources() {
    this._networkResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourcesInput() {
    return this._networkResources.internalValue;
  }

  // system_resources - computed: false, optional: true, required: false
  private _systemResources = new SystemResourceAccountingTemplateListSystemResourcesOutputReference(this, "system_resources");
  public get systemResources() {
    return this._systemResources;
  }
  public putSystemResources(value: SystemResourceAccountingTemplateListSystemResources) {
    this._systemResources.internalValue = value;
  }
  public resetSystemResources() {
    this._systemResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemResourcesInput() {
    return this._systemResources.internalValue;
  }
}

export class SystemResourceAccountingTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : SystemResourceAccountingTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemResourceAccountingTemplateListStructOutputReference {
    return new SystemResourceAccountingTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemResourceAccounting {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#template_list System#template_list}
  */
  readonly templateList?: SystemResourceAccountingTemplateListStruct[] | cdktf.IResolvable;
}

export function systemResourceAccountingToTerraform(struct?: SystemResourceAccountingOutputReference | SystemResourceAccounting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template_list: cdktf.listMapper(systemResourceAccountingTemplateListStructToTerraform, true)(struct!.templateList),
  }
}


export function systemResourceAccountingToHclTerraform(struct?: SystemResourceAccountingOutputReference | SystemResourceAccounting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_list: {
      value: cdktf.listMapperHcl(systemResourceAccountingTemplateListStructToHclTerraform, true)(struct!.templateList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceAccountingTemplateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccounting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._templateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateList = this._templateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccounting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._templateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._templateList.internalValue = value.templateList;
    }
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

  // template_list - computed: false, optional: true, required: false
  private _templateList = new SystemResourceAccountingTemplateListStructList(this, "template_list", false);
  public get templateList() {
    return this._templateList;
  }
  public putTemplateList(value: SystemResourceAccountingTemplateListStruct[] | cdktf.IResolvable) {
    this._templateList.internalValue = value;
  }
  public resetTemplateList() {
    this._templateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateListInput() {
    return this._templateList.internalValue;
  }
}
export interface SystemResourceUsageVisibility {
  /**
  * Total number of monitored entities for visibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#monitored_entity_count System#monitored_entity_count}
  */
  readonly monitoredEntityCount?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemResourceUsageVisibilityToTerraform(struct?: SystemResourceUsageVisibilityOutputReference | SystemResourceUsageVisibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitored_entity_count: cdktf.numberToTerraform(struct!.monitoredEntityCount),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemResourceUsageVisibilityToHclTerraform(struct?: SystemResourceUsageVisibilityOutputReference | SystemResourceUsageVisibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitored_entity_count: {
      value: cdktf.numberToHclTerraform(struct!.monitoredEntityCount),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceUsageVisibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceUsageVisibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitoredEntityCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredEntityCount = this._monitoredEntityCount;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceUsageVisibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monitoredEntityCount = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monitoredEntityCount = value.monitoredEntityCount;
      this._uuid = value.uuid;
    }
  }

  // monitored_entity_count - computed: false, optional: true, required: false
  private _monitoredEntityCount?: number; 
  public get monitoredEntityCount() {
    return this.getNumberAttribute('monitored_entity_count');
  }
  public set monitoredEntityCount(value: number) {
    this._monitoredEntityCount = value;
  }
  public resetMonitoredEntityCount() {
    this._monitoredEntityCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredEntityCountInput() {
    return this._monitoredEntityCount;
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
export interface SystemResourceUsage {
  /**
  * Total aFleX table entry in the system (Total aFlex entry in the system)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#aflex_table_entry_count System#aflex_table_entry_count}
  */
  readonly aflexTableEntryCount?: number;
  /**
  * Specify maximum html file size for each html page in auth portal (in KB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#auth_portal_html_file_size System#auth_portal_html_file_size}
  */
  readonly authPortalHtmlFileSize?: number;
  /**
  * Specify maximum image file size for default portal (in KB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#auth_portal_image_file_size System#auth_portal_image_file_size}
  */
  readonly authPortalImageFileSize?: number;
  /**
  * Total auth sessions in the system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#auth_session_count System#auth_session_count}
  */
  readonly authSessionCount?: number;
  /**
  * Specify the maximum number of authorization policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#authz_policy_number System#authz_policy_number}
  */
  readonly authzPolicyNumber?: number;
  /**
  * Total entries for AC class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#class_list_ac_entry_count System#class_list_ac_entry_count}
  */
  readonly classListAcEntryCount?: number;
  /**
  * Total entries for class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#class_list_entry_count System#class_list_entry_count}
  */
  readonly classListEntryCount?: number;
  /**
  * Total IPv6 addresses for class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#class_list_ipv6_addr_count System#class_list_ipv6_addr_count}
  */
  readonly classListIpv6AddrCount?: number;
  /**
  * Specify the maximum number of IPsec SA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ipsec_sa_number System#ipsec_sa_number}
  */
  readonly ipsecSaNumber?: number;
  /**
  * Total Sessions in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#l4_session_count System#l4_session_count}
  */
  readonly l4SessionCount?: number;
  /**
  * Specify the maximum number of collections supported by aFleX authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#max_aflex_authz_collection_number System#max_aflex_authz_collection_number}
  */
  readonly maxAflexAuthzCollectionNumber?: number;
  /**
  * Set maximum aFleX file size (Maximum file size in KBytes, default is 32K)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#max_aflex_file_size System#max_aflex_file_size}
  */
  readonly maxAflexFileSize?: number;
  /**
  * Total configurable NAT Pool addresses in the System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#nat_pool_addr_count System#nat_pool_addr_count}
  */
  readonly natPoolAddrCount?: number;
  /**
  * Total configurable CGNV6 RADIUS Table entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#radius_table_size System#radius_table_size}
  */
  readonly radiusTableSize?: number;
  /**
  * Specify the maximum memory used by ram cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ram_cache_memory_limit System#ram_cache_memory_limit}
  */
  readonly ramCacheMemoryLimit?: number;
  /**
  * Total SSL context memory needed in units of MB. Will be rounded to closest multiple of 2MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ssl_context_memory System#ssl_context_memory}
  */
  readonly sslContextMemory?: number;
  /**
  * Total SSL DMA memory needed in units of MB. Will be rounded to closest multiple of 2MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#ssl_dma_memory System#ssl_dma_memory}
  */
  readonly sslDmaMemory?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * visibility block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#visibility System#visibility}
  */
  readonly visibility?: SystemResourceUsageVisibility;
}

export function systemResourceUsageToTerraform(struct?: SystemResourceUsageOutputReference | SystemResourceUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_table_entry_count: cdktf.numberToTerraform(struct!.aflexTableEntryCount),
    auth_portal_html_file_size: cdktf.numberToTerraform(struct!.authPortalHtmlFileSize),
    auth_portal_image_file_size: cdktf.numberToTerraform(struct!.authPortalImageFileSize),
    auth_session_count: cdktf.numberToTerraform(struct!.authSessionCount),
    authz_policy_number: cdktf.numberToTerraform(struct!.authzPolicyNumber),
    class_list_ac_entry_count: cdktf.numberToTerraform(struct!.classListAcEntryCount),
    class_list_entry_count: cdktf.numberToTerraform(struct!.classListEntryCount),
    class_list_ipv6_addr_count: cdktf.numberToTerraform(struct!.classListIpv6AddrCount),
    ipsec_sa_number: cdktf.numberToTerraform(struct!.ipsecSaNumber),
    l4_session_count: cdktf.numberToTerraform(struct!.l4SessionCount),
    max_aflex_authz_collection_number: cdktf.numberToTerraform(struct!.maxAflexAuthzCollectionNumber),
    max_aflex_file_size: cdktf.numberToTerraform(struct!.maxAflexFileSize),
    nat_pool_addr_count: cdktf.numberToTerraform(struct!.natPoolAddrCount),
    radius_table_size: cdktf.numberToTerraform(struct!.radiusTableSize),
    ram_cache_memory_limit: cdktf.numberToTerraform(struct!.ramCacheMemoryLimit),
    ssl_context_memory: cdktf.numberToTerraform(struct!.sslContextMemory),
    ssl_dma_memory: cdktf.numberToTerraform(struct!.sslDmaMemory),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    visibility: systemResourceUsageVisibilityToTerraform(struct!.visibility),
  }
}


export function systemResourceUsageToHclTerraform(struct?: SystemResourceUsageOutputReference | SystemResourceUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_table_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.aflexTableEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_portal_html_file_size: {
      value: cdktf.numberToHclTerraform(struct!.authPortalHtmlFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_portal_image_file_size: {
      value: cdktf.numberToHclTerraform(struct!.authPortalImageFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_session_count: {
      value: cdktf.numberToHclTerraform(struct!.authSessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authz_policy_number: {
      value: cdktf.numberToHclTerraform(struct!.authzPolicyNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_ac_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.classListAcEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.classListEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_ipv6_addr_count: {
      value: cdktf.numberToHclTerraform(struct!.classListIpv6AddrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_sa_number: {
      value: cdktf.numberToHclTerraform(struct!.ipsecSaNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_session_count: {
      value: cdktf.numberToHclTerraform(struct!.l4SessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_aflex_authz_collection_number: {
      value: cdktf.numberToHclTerraform(struct!.maxAflexAuthzCollectionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_aflex_file_size: {
      value: cdktf.numberToHclTerraform(struct!.maxAflexFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_addr_count: {
      value: cdktf.numberToHclTerraform(struct!.natPoolAddrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_size: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ram_cache_memory_limit: {
      value: cdktf.numberToHclTerraform(struct!.ramCacheMemoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_context_memory: {
      value: cdktf.numberToHclTerraform(struct!.sslContextMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_dma_memory: {
      value: cdktf.numberToHclTerraform(struct!.sslDmaMemory),
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
    visibility: {
      value: systemResourceUsageVisibilityToHclTerraform(struct!.visibility),
      isBlock: true,
      type: "list",
      storageClassType: "SystemResourceUsageVisibilityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexTableEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexTableEntryCount = this._aflexTableEntryCount;
    }
    if (this._authPortalHtmlFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalHtmlFileSize = this._authPortalHtmlFileSize;
    }
    if (this._authPortalImageFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalImageFileSize = this._authPortalImageFileSize;
    }
    if (this._authSessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSessionCount = this._authSessionCount;
    }
    if (this._authzPolicyNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzPolicyNumber = this._authzPolicyNumber;
    }
    if (this._classListAcEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListAcEntryCount = this._classListAcEntryCount;
    }
    if (this._classListEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListEntryCount = this._classListEntryCount;
    }
    if (this._classListIpv6AddrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListIpv6AddrCount = this._classListIpv6AddrCount;
    }
    if (this._ipsecSaNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecSaNumber = this._ipsecSaNumber;
    }
    if (this._l4SessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SessionCount = this._l4SessionCount;
    }
    if (this._maxAflexAuthzCollectionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAflexAuthzCollectionNumber = this._maxAflexAuthzCollectionNumber;
    }
    if (this._maxAflexFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAflexFileSize = this._maxAflexFileSize;
    }
    if (this._natPoolAddrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolAddrCount = this._natPoolAddrCount;
    }
    if (this._radiusTableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableSize = this._radiusTableSize;
    }
    if (this._ramCacheMemoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramCacheMemoryLimit = this._ramCacheMemoryLimit;
    }
    if (this._sslContextMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslContextMemory = this._sslContextMemory;
    }
    if (this._sslDmaMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslDmaMemory = this._sslDmaMemory;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._visibility?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflexTableEntryCount = undefined;
      this._authPortalHtmlFileSize = undefined;
      this._authPortalImageFileSize = undefined;
      this._authSessionCount = undefined;
      this._authzPolicyNumber = undefined;
      this._classListAcEntryCount = undefined;
      this._classListEntryCount = undefined;
      this._classListIpv6AddrCount = undefined;
      this._ipsecSaNumber = undefined;
      this._l4SessionCount = undefined;
      this._maxAflexAuthzCollectionNumber = undefined;
      this._maxAflexFileSize = undefined;
      this._natPoolAddrCount = undefined;
      this._radiusTableSize = undefined;
      this._ramCacheMemoryLimit = undefined;
      this._sslContextMemory = undefined;
      this._sslDmaMemory = undefined;
      this._uuid = undefined;
      this._visibility.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflexTableEntryCount = value.aflexTableEntryCount;
      this._authPortalHtmlFileSize = value.authPortalHtmlFileSize;
      this._authPortalImageFileSize = value.authPortalImageFileSize;
      this._authSessionCount = value.authSessionCount;
      this._authzPolicyNumber = value.authzPolicyNumber;
      this._classListAcEntryCount = value.classListAcEntryCount;
      this._classListEntryCount = value.classListEntryCount;
      this._classListIpv6AddrCount = value.classListIpv6AddrCount;
      this._ipsecSaNumber = value.ipsecSaNumber;
      this._l4SessionCount = value.l4SessionCount;
      this._maxAflexAuthzCollectionNumber = value.maxAflexAuthzCollectionNumber;
      this._maxAflexFileSize = value.maxAflexFileSize;
      this._natPoolAddrCount = value.natPoolAddrCount;
      this._radiusTableSize = value.radiusTableSize;
      this._ramCacheMemoryLimit = value.ramCacheMemoryLimit;
      this._sslContextMemory = value.sslContextMemory;
      this._sslDmaMemory = value.sslDmaMemory;
      this._uuid = value.uuid;
      this._visibility.internalValue = value.visibility;
    }
  }

  // aflex_table_entry_count - computed: false, optional: true, required: false
  private _aflexTableEntryCount?: number; 
  public get aflexTableEntryCount() {
    return this.getNumberAttribute('aflex_table_entry_count');
  }
  public set aflexTableEntryCount(value: number) {
    this._aflexTableEntryCount = value;
  }
  public resetAflexTableEntryCount() {
    this._aflexTableEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexTableEntryCountInput() {
    return this._aflexTableEntryCount;
  }

  // auth_portal_html_file_size - computed: false, optional: true, required: false
  private _authPortalHtmlFileSize?: number; 
  public get authPortalHtmlFileSize() {
    return this.getNumberAttribute('auth_portal_html_file_size');
  }
  public set authPortalHtmlFileSize(value: number) {
    this._authPortalHtmlFileSize = value;
  }
  public resetAuthPortalHtmlFileSize() {
    this._authPortalHtmlFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalHtmlFileSizeInput() {
    return this._authPortalHtmlFileSize;
  }

  // auth_portal_image_file_size - computed: false, optional: true, required: false
  private _authPortalImageFileSize?: number; 
  public get authPortalImageFileSize() {
    return this.getNumberAttribute('auth_portal_image_file_size');
  }
  public set authPortalImageFileSize(value: number) {
    this._authPortalImageFileSize = value;
  }
  public resetAuthPortalImageFileSize() {
    this._authPortalImageFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalImageFileSizeInput() {
    return this._authPortalImageFileSize;
  }

  // auth_session_count - computed: false, optional: true, required: false
  private _authSessionCount?: number; 
  public get authSessionCount() {
    return this.getNumberAttribute('auth_session_count');
  }
  public set authSessionCount(value: number) {
    this._authSessionCount = value;
  }
  public resetAuthSessionCount() {
    this._authSessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSessionCountInput() {
    return this._authSessionCount;
  }

  // authz_policy_number - computed: false, optional: true, required: false
  private _authzPolicyNumber?: number; 
  public get authzPolicyNumber() {
    return this.getNumberAttribute('authz_policy_number');
  }
  public set authzPolicyNumber(value: number) {
    this._authzPolicyNumber = value;
  }
  public resetAuthzPolicyNumber() {
    this._authzPolicyNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzPolicyNumberInput() {
    return this._authzPolicyNumber;
  }

  // class_list_ac_entry_count - computed: false, optional: true, required: false
  private _classListAcEntryCount?: number; 
  public get classListAcEntryCount() {
    return this.getNumberAttribute('class_list_ac_entry_count');
  }
  public set classListAcEntryCount(value: number) {
    this._classListAcEntryCount = value;
  }
  public resetClassListAcEntryCount() {
    this._classListAcEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListAcEntryCountInput() {
    return this._classListAcEntryCount;
  }

  // class_list_entry_count - computed: false, optional: true, required: false
  private _classListEntryCount?: number; 
  public get classListEntryCount() {
    return this.getNumberAttribute('class_list_entry_count');
  }
  public set classListEntryCount(value: number) {
    this._classListEntryCount = value;
  }
  public resetClassListEntryCount() {
    this._classListEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListEntryCountInput() {
    return this._classListEntryCount;
  }

  // class_list_ipv6_addr_count - computed: false, optional: true, required: false
  private _classListIpv6AddrCount?: number; 
  public get classListIpv6AddrCount() {
    return this.getNumberAttribute('class_list_ipv6_addr_count');
  }
  public set classListIpv6AddrCount(value: number) {
    this._classListIpv6AddrCount = value;
  }
  public resetClassListIpv6AddrCount() {
    this._classListIpv6AddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListIpv6AddrCountInput() {
    return this._classListIpv6AddrCount;
  }

  // ipsec_sa_number - computed: false, optional: true, required: false
  private _ipsecSaNumber?: number; 
  public get ipsecSaNumber() {
    return this.getNumberAttribute('ipsec_sa_number');
  }
  public set ipsecSaNumber(value: number) {
    this._ipsecSaNumber = value;
  }
  public resetIpsecSaNumber() {
    this._ipsecSaNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSaNumberInput() {
    return this._ipsecSaNumber;
  }

  // l4_session_count - computed: false, optional: true, required: false
  private _l4SessionCount?: number; 
  public get l4SessionCount() {
    return this.getNumberAttribute('l4_session_count');
  }
  public set l4SessionCount(value: number) {
    this._l4SessionCount = value;
  }
  public resetL4SessionCount() {
    this._l4SessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SessionCountInput() {
    return this._l4SessionCount;
  }

  // max_aflex_authz_collection_number - computed: false, optional: true, required: false
  private _maxAflexAuthzCollectionNumber?: number; 
  public get maxAflexAuthzCollectionNumber() {
    return this.getNumberAttribute('max_aflex_authz_collection_number');
  }
  public set maxAflexAuthzCollectionNumber(value: number) {
    this._maxAflexAuthzCollectionNumber = value;
  }
  public resetMaxAflexAuthzCollectionNumber() {
    this._maxAflexAuthzCollectionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAflexAuthzCollectionNumberInput() {
    return this._maxAflexAuthzCollectionNumber;
  }

  // max_aflex_file_size - computed: false, optional: true, required: false
  private _maxAflexFileSize?: number; 
  public get maxAflexFileSize() {
    return this.getNumberAttribute('max_aflex_file_size');
  }
  public set maxAflexFileSize(value: number) {
    this._maxAflexFileSize = value;
  }
  public resetMaxAflexFileSize() {
    this._maxAflexFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAflexFileSizeInput() {
    return this._maxAflexFileSize;
  }

  // nat_pool_addr_count - computed: false, optional: true, required: false
  private _natPoolAddrCount?: number; 
  public get natPoolAddrCount() {
    return this.getNumberAttribute('nat_pool_addr_count');
  }
  public set natPoolAddrCount(value: number) {
    this._natPoolAddrCount = value;
  }
  public resetNatPoolAddrCount() {
    this._natPoolAddrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolAddrCountInput() {
    return this._natPoolAddrCount;
  }

  // radius_table_size - computed: false, optional: true, required: false
  private _radiusTableSize?: number; 
  public get radiusTableSize() {
    return this.getNumberAttribute('radius_table_size');
  }
  public set radiusTableSize(value: number) {
    this._radiusTableSize = value;
  }
  public resetRadiusTableSize() {
    this._radiusTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeInput() {
    return this._radiusTableSize;
  }

  // ram_cache_memory_limit - computed: false, optional: true, required: false
  private _ramCacheMemoryLimit?: number; 
  public get ramCacheMemoryLimit() {
    return this.getNumberAttribute('ram_cache_memory_limit');
  }
  public set ramCacheMemoryLimit(value: number) {
    this._ramCacheMemoryLimit = value;
  }
  public resetRamCacheMemoryLimit() {
    this._ramCacheMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramCacheMemoryLimitInput() {
    return this._ramCacheMemoryLimit;
  }

  // ssl_context_memory - computed: false, optional: true, required: false
  private _sslContextMemory?: number; 
  public get sslContextMemory() {
    return this.getNumberAttribute('ssl_context_memory');
  }
  public set sslContextMemory(value: number) {
    this._sslContextMemory = value;
  }
  public resetSslContextMemory() {
    this._sslContextMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslContextMemoryInput() {
    return this._sslContextMemory;
  }

  // ssl_dma_memory - computed: false, optional: true, required: false
  private _sslDmaMemory?: number; 
  public get sslDmaMemory() {
    return this.getNumberAttribute('ssl_dma_memory');
  }
  public set sslDmaMemory(value: number) {
    this._sslDmaMemory = value;
  }
  public resetSslDmaMemory() {
    this._sslDmaMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDmaMemoryInput() {
    return this._sslDmaMemory;
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

  // visibility - computed: false, optional: true, required: false
  private _visibility = new SystemResourceUsageVisibilityOutputReference(this, "visibility");
  public get visibility() {
    return this._visibility;
  }
  public putVisibility(value: SystemResourceUsageVisibility) {
    this._visibility.internalValue = value;
  }
  public resetVisibility() {
    this._visibility.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility.internalValue;
  }
}
export interface SystemSessionSamplingEnable {
  /**
  * 'all': all; 'total_l4_conn': Total L4 Count; 'conn_counter': Conn Count; 'conn_freed_counter': Conn Freed; 'total_l4_packet_count': Total L4 Packet Count; 'total_l7_packet_count': Total L7 Packet Count; 'total_l4_conn_proxy': Total L4 Conn Proxy Count; 'total_l7_conn': Total L7 Conn; 'total_tcp_conn': Total TCP Conn; 'curr_free_conn': Curr Free Conn; 'tcp_est_counter': TCP Established; 'tcp_half_open_counter': TCP Half Open; 'tcp_half_close_counter': TCP Half Closed; 'udp_counter': UDP Count; 'ip_counter': IP Count; 'other_counter': Non TCP/UDP IP sessions; 'reverse_nat_tcp_counter': Reverse NAT TCP; 'reverse_nat_udp_counter': Reverse NAT UDP; 'tcp_syn_half_open_counter': TCP SYN Half Open; 'conn_smp_alloc_counter': Conn SMP Alloc; 'conn_smp_free_counter': Conn SMP Free; 'conn_smp_aged_counter': Conn SMP Aged; 'ssl_count_curr': Curr SSL Count; 'ssl_count_total': Total SSL Count; 'server_ssl_count_curr': Current SSL Server Count; 'server_ssl_count_total': Total SSL Server Count; 'client_ssl_reuse_total': Total SSL Client Reuse; 'server_ssl_reuse_total': Total SSL Server Reuse; 'ssl_failed_total': Total SSL Failures; 'ssl_failed_ca_verification': SSL Cert Auth Verification Errors; 'ssl_server_cert_error': SSL Server Cert Errors; 'ssl_client_cert_auth_fail': SSL Client Cert Auth Failures; 'total_ip_nat_conn': Total IP Nat Conn; 'total_l2l3_conn': Totl L2/L3 Connections; 'client_ssl_ctx_malloc_failure': Client SSL Ctx malloc Failures; 'conn_type_0_available': Conn Type 0 Available; 'conn_type_1_available': Conn Type 1 Available; 'conn_type_2_available': Conn Type 2 Available; 'conn_type_3_available': Conn Type 3 Available; 'conn_type_4_available': Conn Type 4 Available; 'conn_smp_type_0_available': Conn SMP Type 0 Available; 'conn_smp_type_1_available': Conn SMP Type 1 Available; 'conn_smp_type_2_available': Conn SMP Type 2 Available; 'conn_smp_type_3_available': Conn SMP Type 3 Available; 'conn_smp_type_4_available': Conn SMP Type 4 Available; 'sctp-half-open-counter': SCTP Half Open; 'sctp-est-counter': SCTP Established; 'nonssl_bypass': NON SSL Bypass Count; 'ssl_failsafe_total': Total SSL Failsafe Count; 'ssl_forward_proxy_failed_handshake_total': Total SSL Forward Proxy Failed Handshake Count; 'ssl_forward_proxy_failed_tcp_total': Total SSL Forward Proxy Failed TCP Count; 'ssl_forward_proxy_failed_crypto_total': Total SSL Forward Proxy Failed Crypto Count; 'ssl_forward_proxy_failed_cert_verify_total': Total SSL Forward Proxy Failed Certificate Verification Count; 'ssl_forward_proxy_invalid_ocsp_stapling_total': Total SSL Forward Proxy Invalid OCSP Stapling Count; 'ssl_forward_proxy_revoked_ocsp_total': Total SSL Forward Proxy Revoked OCSP Response Count; 'ssl_forward_proxy_failed_cert_signing_total': Total SSL Forward Proxy Failed Certificate Signing Count; 'ssl_forward_proxy_failed_ssl_version_total': Total SSL Forward Proxy Unsupported version Count; 'ssl_forward_proxy_sni_bypass_total': Total SSL Forward Proxy SNI Bypass Count; 'ssl_forward_proxy_client_auth_bypass_total': Total SSL Forward Proxy Client Auth Bypass Count; 'conn_app_smp_alloc_counter': Conn APP SMP Alloc; 'diameter_conn_counter': Diameter Conn Count; 'diameter_conn_freed_counter': Diameter Conn Freed; 'debug_tcp_counter': Hidden TCP sessions for CGNv6 Stateless Technologies; 'debug_udp_counter': Hidden UDP sessions for CGNv6 Stateless Technologies; 'total_fw_conn': Total Firewall Conn; 'total_local_conn': Total Local Conn; 'total_curr_conn': Total Curr Conn; 'client_ssl_fatal_alert': client ssl fatal alert; 'client_ssl_fin_rst': client ssl fin rst; 'fp_session_fin_rst': FP Session FIN/RST; 'server_ssl_fatal_alert': server ssl fatal alert; 'server_ssl_fin_rst': server ssl fin rst; 'client_template_int_err': client template internal error; 'client_template_unknown_err': client template unknown error; 'server_template_int_err': server template int error; 'server_template_unknown_err': server template unknown error; 'total_debug_conn': Total Debug Conn; 'ssl_forward_proxy_failed_aflex_total': Total SSL Forward Proxy AFLEX Count; 'ssl_forward_proxy_cert_subject_bypass_total': Total SSL Forward Proxy Certificate Subject Bypass Count; 'ssl_forward_proxy_cert_issuer_bypass_total': Total SSL Forward Proxy Certificate Issuer Bypass Count; 'ssl_forward_proxy_cert_san_bypass_total': Total SSL Forward Proxy Certificate SAN Bypass Count; 'ssl_forward_proxy_no_sni_bypass_total': Total SSL Forward Proxy No SNI Bypass Count; 'ssl_forward_proxy_no_sni_reset_total': Total SSL Forward Proxy No SNI reset Count; 'ssl_forward_proxy_username_bypass_total': Total SSL Forward Proxy Username Bypass Count; 'ssl_forward_proxy_ad_grpup_bypass_total': Total SSL Forward Proxy AD-Group Bypass Count; 'diameter_concurrent_user_sessions_counter': Diameter Concurrent User-Sessions; 'client_ssl_session_ticket_reuse_total': Total SSL Client Session Ticket Reuse; 'server_ssl_session_ticket_reuse_total': Total SSL Server Session Ticket Reuse; 'total_clientside_early_data_connections': Total clientside early data connections; 'total_serverside_early_data_connections': Total serverside early data connections; 'total_clientside_failed_early_data-connections': Total clientside failed early data connections; 'total_serverside_failed_early_data-connections': Total serverside failed early data connections; 'ssl_forward_proxy_esni_bypass_total': Total SSL Forward Proxy ESNI Bypass Count; 'ssl_forward_proxy_esni_reset_total': Total SSL Forward Proxy ESNI Drop Count; 'total_logging_conn': Total Logging Conn; 'gtp_c_est_counter': GTP-C Established; 'gtp_c_half_open_counter': GTP-C Half Open; 'gtp_u_counter': GTP-U Count; 'gtp_c_echo_counter': GTP-C Echo Count; 'gtp_u_echo_counter': GTP-U Echo Count; 'gtp_curr_free_conn': GTP Current Available Conn; 'gtp_cum_conn_counter': GTP cumulative Conn Count; 'gtp_cum_conn_freed_counter': GTP cumulative Conn Freed; 'fw_blacklist_sess': Blacklist Sessions; 'fw_blacklist_sess_created': Blacklist Session Created; 'fw_blacklist_sess_freed': Blacklist Session Freed; 'server_tcp_est_counter': Server TCP Established; 'server_tcp_half_open_counter': Server TCP Half Open; 'sched_conn_with_wrong_next_idx_to_rml': Attempt to Put a Conn to RML Whose next_idx is NOT Invalid; 'free_conn_not_in_sp': Attempt to Free a Conn Whoes Address Not in Session Pool;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemSessionSamplingEnableToTerraform(struct?: SystemSessionSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemSessionSamplingEnableToHclTerraform(struct?: SystemSessionSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSessionSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSessionSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSessionSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemSessionSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemSessionSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemSessionSamplingEnableOutputReference {
    return new SystemSessionSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSession {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemSessionSamplingEnable[] | cdktf.IResolvable;
}

export function systemSessionToTerraform(struct?: SystemSessionOutputReference | SystemSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemSessionSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemSessionToHclTerraform(struct?: SystemSessionOutputReference | SystemSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemSessionSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemSessionSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSession | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemSessionSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemSessionSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemSessionReclaimLimit {
  /**
  * smp session scan limit (number of smp sessions per scan)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#nscan_limit System#nscan_limit}
  */
  readonly nscanLimit?: number;
  /**
  * smp session scan frequency (scan per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#scan_freq System#scan_freq}
  */
  readonly scanFreq?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemSessionReclaimLimitToTerraform(struct?: SystemSessionReclaimLimitOutputReference | SystemSessionReclaimLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nscan_limit: cdktf.numberToTerraform(struct!.nscanLimit),
    scan_freq: cdktf.numberToTerraform(struct!.scanFreq),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemSessionReclaimLimitToHclTerraform(struct?: SystemSessionReclaimLimitOutputReference | SystemSessionReclaimLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nscan_limit: {
      value: cdktf.numberToHclTerraform(struct!.nscanLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_freq: {
      value: cdktf.numberToHclTerraform(struct!.scanFreq),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSessionReclaimLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSessionReclaimLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nscanLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.nscanLimit = this._nscanLimit;
    }
    if (this._scanFreq !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanFreq = this._scanFreq;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSessionReclaimLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nscanLimit = undefined;
      this._scanFreq = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nscanLimit = value.nscanLimit;
      this._scanFreq = value.scanFreq;
      this._uuid = value.uuid;
    }
  }

  // nscan_limit - computed: false, optional: true, required: false
  private _nscanLimit?: number; 
  public get nscanLimit() {
    return this.getNumberAttribute('nscan_limit');
  }
  public set nscanLimit(value: number) {
    this._nscanLimit = value;
  }
  public resetNscanLimit() {
    this._nscanLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nscanLimitInput() {
    return this._nscanLimit;
  }

  // scan_freq - computed: false, optional: true, required: false
  private _scanFreq?: number; 
  public get scanFreq() {
    return this.getNumberAttribute('scan_freq');
  }
  public set scanFreq(value: number) {
    this._scanFreq = value;
  }
  public resetScanFreq() {
    this._scanFreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanFreqInput() {
    return this._scanFreq;
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
export interface SystemSetRxtxDescSize {
  /**
  * port index to be configured (Specify port index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#port_index System#port_index}
  */
  readonly portIndex?: number;
  /**
  * Set new rx-descriptor size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#rxd_size System#rxd_size}
  */
  readonly rxdSize?: number;
  /**
  * Set new tx-descriptor size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#txd_size System#txd_size}
  */
  readonly txdSize?: number;
}

export function systemSetRxtxDescSizeToTerraform(struct?: SystemSetRxtxDescSizeOutputReference | SystemSetRxtxDescSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_index: cdktf.numberToTerraform(struct!.portIndex),
    rxd_size: cdktf.numberToTerraform(struct!.rxdSize),
    txd_size: cdktf.numberToTerraform(struct!.txdSize),
  }
}


export function systemSetRxtxDescSizeToHclTerraform(struct?: SystemSetRxtxDescSizeOutputReference | SystemSetRxtxDescSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_index: {
      value: cdktf.numberToHclTerraform(struct!.portIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxd_size: {
      value: cdktf.numberToHclTerraform(struct!.rxdSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txd_size: {
      value: cdktf.numberToHclTerraform(struct!.txdSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSetRxtxDescSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSetRxtxDescSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.portIndex = this._portIndex;
    }
    if (this._rxdSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxdSize = this._rxdSize;
    }
    if (this._txdSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.txdSize = this._txdSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSetRxtxDescSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portIndex = undefined;
      this._rxdSize = undefined;
      this._txdSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portIndex = value.portIndex;
      this._rxdSize = value.rxdSize;
      this._txdSize = value.txdSize;
    }
  }

  // port_index - computed: false, optional: true, required: false
  private _portIndex?: number; 
  public get portIndex() {
    return this.getNumberAttribute('port_index');
  }
  public set portIndex(value: number) {
    this._portIndex = value;
  }
  public resetPortIndex() {
    this._portIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndexInput() {
    return this._portIndex;
  }

  // rxd_size - computed: false, optional: true, required: false
  private _rxdSize?: number; 
  public get rxdSize() {
    return this.getNumberAttribute('rxd_size');
  }
  public set rxdSize(value: number) {
    this._rxdSize = value;
  }
  public resetRxdSize() {
    this._rxdSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxdSizeInput() {
    return this._rxdSize;
  }

  // txd_size - computed: false, optional: true, required: false
  private _txdSize?: number; 
  public get txdSize() {
    return this.getNumberAttribute('txd_size');
  }
  public set txdSize(value: number) {
    this._txdSize = value;
  }
  public resetTxdSize() {
    this._txdSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txdSizeInput() {
    return this._txdSize;
  }
}
export interface SystemSetRxtxQueue {
  /**
  * port index to be configured (Specify port index)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#port_index System#port_index}
  */
  readonly portIndex?: number;
  /**
  * Set number of new rx queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#rxq_size System#rxq_size}
  */
  readonly rxqSize?: number;
  /**
  * Set number of new tx queues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#txq_size System#txq_size}
  */
  readonly txqSize?: number;
}

export function systemSetRxtxQueueToTerraform(struct?: SystemSetRxtxQueueOutputReference | SystemSetRxtxQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_index: cdktf.numberToTerraform(struct!.portIndex),
    rxq_size: cdktf.numberToTerraform(struct!.rxqSize),
    txq_size: cdktf.numberToTerraform(struct!.txqSize),
  }
}


export function systemSetRxtxQueueToHclTerraform(struct?: SystemSetRxtxQueueOutputReference | SystemSetRxtxQueue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_index: {
      value: cdktf.numberToHclTerraform(struct!.portIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rxq_size: {
      value: cdktf.numberToHclTerraform(struct!.rxqSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txq_size: {
      value: cdktf.numberToHclTerraform(struct!.txqSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSetRxtxQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSetRxtxQueue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.portIndex = this._portIndex;
    }
    if (this._rxqSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxqSize = this._rxqSize;
    }
    if (this._txqSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.txqSize = this._txqSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSetRxtxQueue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portIndex = undefined;
      this._rxqSize = undefined;
      this._txqSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portIndex = value.portIndex;
      this._rxqSize = value.rxqSize;
      this._txqSize = value.txqSize;
    }
  }

  // port_index - computed: false, optional: true, required: false
  private _portIndex?: number; 
  public get portIndex() {
    return this.getNumberAttribute('port_index');
  }
  public set portIndex(value: number) {
    this._portIndex = value;
  }
  public resetPortIndex() {
    this._portIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIndexInput() {
    return this._portIndex;
  }

  // rxq_size - computed: false, optional: true, required: false
  private _rxqSize?: number; 
  public get rxqSize() {
    return this.getNumberAttribute('rxq_size');
  }
  public set rxqSize(value: number) {
    this._rxqSize = value;
  }
  public resetRxqSize() {
    this._rxqSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxqSizeInput() {
    return this._rxqSize;
  }

  // txq_size - computed: false, optional: true, required: false
  private _txqSize?: number; 
  public get txqSize() {
    return this.getNumberAttribute('txq_size');
  }
  public set txqSize(value: number) {
    this._txqSize = value;
  }
  public resetTxqSize() {
    this._txqSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txqSizeInput() {
    return this._txqSize;
  }
}
export interface SystemSetTcpSynPerSec {
  /**
  * Configure Tcp SYN's per sec, default 70
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#tcp_syn_value System#tcp_syn_value}
  */
  readonly tcpSynValue?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemSetTcpSynPerSecToTerraform(struct?: SystemSetTcpSynPerSecOutputReference | SystemSetTcpSynPerSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_syn_value: cdktf.numberToTerraform(struct!.tcpSynValue),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemSetTcpSynPerSecToHclTerraform(struct?: SystemSetTcpSynPerSecOutputReference | SystemSetTcpSynPerSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_syn_value: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynValue),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSetTcpSynPerSecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSetTcpSynPerSec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpSynValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynValue = this._tcpSynValue;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSetTcpSynPerSec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcpSynValue = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcpSynValue = value.tcpSynValue;
      this._uuid = value.uuid;
    }
  }

  // tcp_syn_value - computed: false, optional: true, required: false
  private _tcpSynValue?: number; 
  public get tcpSynValue() {
    return this.getNumberAttribute('tcp_syn_value');
  }
  public set tcpSynValue(value: number) {
    this._tcpSynValue = value;
  }
  public resetTcpSynValue() {
    this._tcpSynValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynValueInput() {
    return this._tcpSynValue;
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
export interface SystemSharedPollMode {
  /**
  * Disable shared poll mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * Enable shared poll mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
}

export function systemSharedPollModeToTerraform(struct?: SystemSharedPollModeOutputReference | SystemSharedPollMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    enable: cdktf.numberToTerraform(struct!.enable),
  }
}


export function systemSharedPollModeToHclTerraform(struct?: SystemSharedPollModeOutputReference | SystemSharedPollMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSharedPollModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSharedPollMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSharedPollMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface SystemShellPrivileges {
  /**
  * enable the shell privileges for a given customer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable_shell_privileges System#enable_shell_privileges}
  */
  readonly enableShellPrivileges?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemShellPrivilegesToTerraform(struct?: SystemShellPrivilegesOutputReference | SystemShellPrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_shell_privileges: cdktf.numberToTerraform(struct!.enableShellPrivileges),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemShellPrivilegesToHclTerraform(struct?: SystemShellPrivilegesOutputReference | SystemShellPrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_shell_privileges: {
      value: cdktf.numberToHclTerraform(struct!.enableShellPrivileges),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemShellPrivilegesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemShellPrivileges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableShellPrivileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableShellPrivileges = this._enableShellPrivileges;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemShellPrivileges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableShellPrivileges = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableShellPrivileges = value.enableShellPrivileges;
      this._uuid = value.uuid;
    }
  }

  // enable_shell_privileges - computed: false, optional: true, required: false
  private _enableShellPrivileges?: number; 
  public get enableShellPrivileges() {
    return this.getNumberAttribute('enable_shell_privileges');
  }
  public set enableShellPrivileges(value: number) {
    this._enableShellPrivileges = value;
  }
  public resetEnableShellPrivileges() {
    this._enableShellPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShellPrivilegesInput() {
    return this._enableShellPrivileges;
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
export interface SystemShmLogging {
  /**
  * Enable shared memory based logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemShmLoggingToTerraform(struct?: SystemShmLoggingOutputReference | SystemShmLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemShmLoggingToHclTerraform(struct?: SystemShmLoggingOutputReference | SystemShmLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemShmLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemShmLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemShmLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface SystemShutdown {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemShutdownToTerraform(struct?: SystemShutdownOutputReference | SystemShutdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemShutdownToHclTerraform(struct?: SystemShutdownOutputReference | SystemShutdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemShutdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemShutdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemShutdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemSpeProfile {
  /**
  * 'ipv4-only': Enable IPv4 HW forward entries only; 'ipv6-only': Enable IPv6 HW forward entries only; 'ipv4-ipv6': Enable Both IPv4/IPv6 HW forward entries (shared);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#action System#action}
  */
  readonly action?: string;
}

export function systemSpeProfileToTerraform(struct?: SystemSpeProfileOutputReference | SystemSpeProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function systemSpeProfileToHclTerraform(struct?: SystemSpeProfileOutputReference | SystemSpeProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSpeProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSpeProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSpeProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}
export interface SystemSpeStatus {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemSpeStatusToTerraform(struct?: SystemSpeStatusOutputReference | SystemSpeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemSpeStatusToHclTerraform(struct?: SystemSpeStatusOutputReference | SystemSpeStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemSpeStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSpeStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSpeStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemSslReqQSamplingEnable {
  /**
  * 'all': all; 'num-ssl-queues': num-ssl-queues; 'ssl-req-q-depth-tot': ssl-req-q-depth-tot; 'ssl-req-q-inuse-tot': ssl-req-q-inuse-tot; 'ssl-hw-q-depth-tot': ssl-hw-q-depth-tot; 'ssl-hw-q-inuse-tot': ssl-hw-q-inuse-tot;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemSslReqQSamplingEnableToTerraform(struct?: SystemSslReqQSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemSslReqQSamplingEnableToHclTerraform(struct?: SystemSslReqQSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSslReqQSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSslReqQSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSslReqQSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemSslReqQSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemSslReqQSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemSslReqQSamplingEnableOutputReference {
    return new SystemSslReqQSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSslReqQ {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemSslReqQSamplingEnable[] | cdktf.IResolvable;
}

export function systemSslReqQToTerraform(struct?: SystemSslReqQOutputReference | SystemSslReqQ): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemSslReqQSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemSslReqQToHclTerraform(struct?: SystemSslReqQOutputReference | SystemSslReqQ): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemSslReqQSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemSslReqQSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSslReqQOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSslReqQ | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSslReqQ | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemSslReqQSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemSslReqQSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemSslScv {
  /**
  * Enable server certificate validation for all SSL connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemSslScvToTerraform(struct?: SystemSslScvOutputReference | SystemSslScv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemSslScvToHclTerraform(struct?: SystemSslScvOutputReference | SystemSslScv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSslScvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSslScv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSslScv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface SystemSslScvVerifyCrlSign {
  /**
  * Enable verify CRL signature during SCV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable System#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemSslScvVerifyCrlSignToTerraform(struct?: SystemSslScvVerifyCrlSignOutputReference | SystemSslScvVerifyCrlSign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemSslScvVerifyCrlSignToHclTerraform(struct?: SystemSslScvVerifyCrlSignOutputReference | SystemSslScvVerifyCrlSign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSslScvVerifyCrlSignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSslScvVerifyCrlSign | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSslScvVerifyCrlSign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
export interface SystemSslScvVerifyHost {
  /**
  * Disable verify host during SCV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemSslScvVerifyHostToTerraform(struct?: SystemSslScvVerifyHostOutputReference | SystemSslScvVerifyHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemSslScvVerifyHostToHclTerraform(struct?: SystemSslScvVerifyHostOutputReference | SystemSslScvVerifyHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSslScvVerifyHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSslScvVerifyHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSslScvVerifyHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._uuid = value.uuid;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
export interface SystemSslSetCompatibleCipher {
  /**
  * Disable setting common cipher suite in management plane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#disable System#disable}
  */
  readonly disable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemSslSetCompatibleCipherToTerraform(struct?: SystemSslSetCompatibleCipherOutputReference | SystemSslSetCompatibleCipher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.numberToTerraform(struct!.disable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemSslSetCompatibleCipherToHclTerraform(struct?: SystemSslSetCompatibleCipherOutputReference | SystemSslSetCompatibleCipher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSslSetCompatibleCipherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSslSetCompatibleCipher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSslSetCompatibleCipher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._uuid = value.uuid;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
export interface SystemSslStatus {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemSslStatusToTerraform(struct?: SystemSslStatusOutputReference | SystemSslStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemSslStatusToHclTerraform(struct?: SystemSslStatusOutputReference | SystemSslStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemSslStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSslStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSslStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemSyslogTimeMsec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#enable_flag System#enable_flag}
  */
  readonly enableFlag?: number;
}

export function systemSyslogTimeMsecToTerraform(struct?: SystemSyslogTimeMsecOutputReference | SystemSyslogTimeMsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_flag: cdktf.numberToTerraform(struct!.enableFlag),
  }
}


export function systemSyslogTimeMsecToHclTerraform(struct?: SystemSyslogTimeMsecOutputReference | SystemSyslogTimeMsec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_flag: {
      value: cdktf.numberToHclTerraform(struct!.enableFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSyslogTimeMsecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemSyslogTimeMsec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFlag = this._enableFlag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSyslogTimeMsec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableFlag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableFlag = value.enableFlag;
    }
  }

  // enable_flag - computed: false, optional: true, required: false
  private _enableFlag?: number; 
  public get enableFlag() {
    return this.getNumberAttribute('enable_flag');
  }
  public set enableFlag(value: number) {
    this._enableFlag = value;
  }
  public resetEnableFlag() {
    this._enableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlagInput() {
    return this._enableFlag;
  }
}
export interface SystemTableIntegritySamplingEnable {
  /**
  * 'all': all; 'arp-tbl-sync-start-ts-m-1st': arp table sync start time stamp master; 'nd6-tbl-sync-start-ts-m-1st': nd6 table sync start time stamp master; 'ipv4-fib-tbl-sync-start-ts-m-1st': ipv4-fib table sync start time stamp master; 'ipv6-fib-tbl-sync-start-ts-m-1st': ipv6-fib table sync start time stamp master; 'mac-tbl-sync-start-ts-m-1st': mac table sync start time stamp master; 'arp-tbl-sync-start-ts-b-1st': arp table sync start time stamp blade; 'nd6-tbl-sync-start-ts-b-1st': nd6 table sync start time stamp blade; 'ipv4-fib-tbl-sync-start-ts-b-1st': ipv4-fib table sync start time stamp blade; 'ipv6-fib-tbl-sync-start-ts-b-1st': ipv6-fib table sync start time stamp blade; 'mac-tbl-sync-start-ts-b-1st': mac table sync start time stamp blade; 'arp-tbl-sync-entries-sent-m-1st': arp table entries sent from master for T0 synchronization; 'nd6-tbl-sync-entries-sent-m-1st': nd6 table entries sent from master for T0 synchronization; 'ipv4-fib-tbl-sync-entries-sent-m-1st': ipv4-fib table entries sent from master for T0 synchronization; 'ipv6-fib-tbl-sync-entries-sent-m-1st': ipv6-fib table entries sent from master for T0 synchronization; 'mac-tbl-sync-entries-sent-m-1st': mac table entries sent from master for T0 synchronization; 'arp-tbl-sync-entries-rcvd-b-1st': arp table entries received on blade for T0 synchronization; 'nd6-tbl-sync-entries-rcvd-b-1st': nd6 table entries received on blade for T0 synchronization; 'ipv4-fib-tbl-sync-entries-rcvd-b-1st': ipv4-fib table entries received on blade for T0 synchronization; 'ipv6-fib-tbl-sync-entries-rcvd-b-1st': ipv6-fib table entries received on blade for T0 synchronization; 'mac-tbl-sync-entries-rcvd-b-1st': mac table entries received on blade for T0 synchronization; 'arp-tbl-sync-entries-added-b-1st': arp table entries added on blade for T0 synchronization; 'nd6-tbl-sync-entries-added-b-1st': nd6 table entries added on blade for T0 synchronization; 'ipv4-fib-tbl-sync-entries-added-b-1st': ipv4-fib table entries added on blade for T0 synchronization; 'ipv6-fib-tbl-sync-entries-added-b-1st': ipv6-fib table entries added on blade for T0 synchronization; 'mac-tbl-sync-entries-added-b-1st': mac table entries added on blade for T0 synchronization; 'arp-tbl-sync-entries-removed-b-1st': arp table entries removed on blade for T0 synchronization; 'nd6-tbl-sync-entries-removed-b-1st': arp table entries removed on blade for T0 synchronization; 'ipv4-fib-tbl-sync-entries-removed-b-1st': arp table entries removed on blade for T0 synchronization; 'ipv6-fib-tbl-sync-entries-removed-b-1st': arp table entries removed on blade for T0 synchronization; 'mac-tbl-sync-entries-removed-b-1st': arp table entries removed on blade for T0 synchronization; 'arp-tbl-sync-end-ts-m-1st': arp table sync end time stamp master for T0 synchronization; 'nd6-tbl-sync-end-ts-m-1st': nd6 table sync end time stamp master for T0 synchronization; 'ipv4-fib-tbl-sync-end-ts-m-1st': ipv4-fib table sync end time stamp master for T0 synchronization; 'ipv6-fib-tbl-sync-end-ts-m-1st': ipv6-fib table sync end time stamp master for T0 synchronization; 'mac-tbl-sync-end-ts-m-1st': mac table sync end time stamp master for T0 synchronization; 'arp-tbl-sync-end-ts-b-1st': arp table sync end time stamp blade for T0 synchronization; 'nd6-tbl-sync-end-ts-b-1st': nd6 table sync end time stamp blade for T0 synchronization; 'ipv4-fib-tbl-sync-end-ts-b-1st': ipv4-fib table sync end time stamp blade for T0 synchronization; 'ipv6-fib-tbl-sync-end-ts-b-1st': ipv6-fib table sync end time stamp blade for T0 synchronization; 'mac-tbl-sync-end-ts-b-1st': mac table sync end time stamp blade for T0 synchronization; 'arp-tbl-sync-start-ts-m-2nd': arp table sync start time stamp master for T-1 synchronization; 'nd6-tbl-sync-start-ts-m-2nd': nd6 table sync start time stamp master for T-1 synchronization; 'ipv4-fib-tbl-sync-start-ts-m-2nd': ipv4-fib table sync start time stamp master for T-1 synchronization; 'ipv6-fib-tbl-sync-start-ts-m-2nd': ipv6-fib table sync start time stamp master for T-1 synchronization; 'mac-tbl-sync-start-ts-m-2nd': mac table sync start time stamp master for T-1 synchronization; 'arp-tbl-sync-start-ts-b-2nd': arp table sync start time stamp blade for T-1 synchronization; 'nd6-tbl-sync-start-ts-b-2nd': nd6 table sync start time stamp blade for T-1 synchronization; 'ipv4-fib-tbl-sync-start-ts-b-2nd': ipv4-fib table sync start time stamp blade for T-1 synchronization; 'ipv6-fib-tbl-sync-start-ts-b-2nd': ipv6-fib table sync start time stamp blade for T-1 synchronization; 'mac-tbl-sync-start-ts-b-2nd': mac table sync start time stamp blade for T-1 synchronization; 'arp-tbl-sync-entries-sent-m-2nd': arp table entries sent from master for T-1 synchronization; 'nd6-tbl-sync-entries-sent-m-2nd': nd6 table entries sent from master for T-1 synchronization; 'ipv4-fib-tbl-sync-entries-sent-m-2nd': ipv4-fib table entries sent from master for T-1 synchronization; 'ipv6-fib-tbl-sync-entries-sent-m-2nd': ipv6-fib table entries sent from master for T-1 synchronization; 'mac-tbl-sync-entries-sent-m-2nd': mac table entries sent from master for T-1 synchronization; 'arp-tbl-sync-entries-rcvd-b-2nd': arp table entries received in blade for T-1 synchronization; 'nd6-tbl-sync-entries-rcvd-b-2nd': nd6 table entries received in blade for T-1 synchronization; 'ipv4-fib-tbl-sync-entries-rcvd-b-2nd': ipv4-fib table entries received in blade for T-1 synchronization; 'ipv6-fib-tbl-sync-entries-rcvd-b-2nd': ipv6-fib table entries received in blade for T-1 synchronization; 'mac-tbl-sync-entries-rcvd-b-2nd': mac table entries received in blade for T-1 synchronization; 'arp-tbl-sync-entries-added-b-2nd': arp table entries added in blade for T-1 synchronization; 'nd6-tbl-sync-entries-added-b-2nd': nd6 table entries added in blade for T-1 synchronization; 'ipv4-fib-tbl-sync-entries-added-b-2nd': ipv4-fib table entries added in blade for T-1 synchronization; 'ipv6-fib-tbl-sync-entries-added-b-2nd': ipv6-fib table entries added in blade for T-1 synchronization; 'mac-tbl-sync-entries-added-b-2nd': mac table entries added in blade for T-1 synchronization; 'arp-tbl-sync-entries-removed-b-2nd': arp table entries removed in blade for T-1 synchronization; 'nd6-tbl-sync-entries-removed-b-2nd': nd6 table entries removed in blade for T-1 synchronization; 'ipv4-fib-tbl-sync-entries-removed-b-2nd': ipv4-fib table entries removed in blade for T-1 synchronization; 'ipv6-fib-tbl-sync-entries-removed-b-2nd': ipv6-fib table entries removed in blade for T-1 synchronization; 'mac-tbl-sync-entries-removed-b-2nd': mac table entries removed in blade for T-1 synchronization; 'arp-tbl-sync-end-ts-m-2nd': arp table sync end time stamp master for T-1 synchronization; 'nd6-tbl-sync-end-ts-m-2nd': nd6 table sync end time stamp master for T-1 synchronization; 'ipv4-fib-tbl-sync-end-ts-m-2nd': ipv4-fib table sync end time stamp master for T-1 synchronization; 'ipv6-fib-tbl-sync-end-ts-m-2nd': ipv6-fib table sync end time stamp master for T-1 synchronization; 'mac-tbl-sync-end-ts-m-2nd': mac table sync end time stamp master for T-1 synchronization; 'arp-tbl-sync-end-ts-b-2nd': arp table sync end time stamp blade for T-1 synchronization; 'nd6-tbl-sync-end-ts-b-2nd': nd6 table sync end time stamp blade for T-1 synchronization; 'ipv4-fib-tbl-sync-end-ts-b-2nd': ipv4-fib table sync end time stamp blade for T-1 synchronization; 'ipv6-fib-tbl-sync-end-ts-b-2nd': ipv6-fib table sync end time stamp blade for T-1 synchronization; 'mac-tbl-sync-end-ts-b-2nd': mac table sync end time stamp blade for T-1 synchronization; 'arp-tbl-sync-start-ts-m-3rd': arp table sync start time stamp master for T-2 synchronization; 'nd6-tbl-sync-start-ts-m-3rd': nd6 table sync start time stamp master for T-2 synchronization;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
  /**
  * 'ipv4-fib-tbl-sync-start-ts-m-3rd': ipv4-fib table sync start time stamp master for T-2 synchronization; 'ipv6-fib-tbl-sync-start-ts-m-3rd': ipv6-fib table sync start time stamp master for T-2 synchronization; 'mac-tbl-sync-start-ts-m-3rd': mac table sync start time stamp master for T-2 synchronization; 'arp-tbl-sync-start-ts-b-3rd': arp table sync start time stamp blade for T-2 synchronization; 'nd6-tbl-sync-start-ts-b-3rd': nd6 table sync start time stamp blade for T-2 synchronization; 'ipv4-fib-tbl-sync-start-ts-b-3rd': ipv4-fib table sync start time stamp blade for T-2 synchronization; 'ipv6-fib-tbl-sync-start-ts-b-3rd': ipv6-fib table sync start time stamp blade for T-2 synchronization; 'mac-tbl-sync-start-ts-b-3rd': mac table sync start time stamp blade for T-2 synchronization; 'arp-tbl-sync-entries-sent-m-3rd': arp table entries sent from master for T-2 synchronization; 'nd6-tbl-sync-entries-sent-m-3rd': nd6 table entries sent from master for T-2 synchronization; 'ipv4-fib-tbl-sync-entries-sent-m-3rd': ipv4-fib table entries sent from master for T-2 synchronization; 'ipv6-fib-tbl-sync-entries-sent-m-3rd': ipv6-fib table entries sent from master for T-2 synchronization; 'mac-tbl-sync-entries-sent-m-3rd': mac table entries sent from master for T-2 synchronization; 'arp-tbl-sync-entries-rcvd-b-3rd': arp table entries received in blade for T-2 synchronization; 'nd6-tbl-sync-entries-rcvd-b-3rd': nd6 table entries received in blade for T-2 synchronization; 'ipv4-fib-tbl-sync-entries-rcvd-b-3rd': ipv4-fib table entries received in blade for T-2 synchronization; 'ipv6-fib-tbl-sync-entries-rcvd-b-3rd': ipv6-fib table entries received in blade for T-2 synchronization; 'mac-tbl-sync-entries-rcvd-b-3rd': mac table entries received in blade for T-2 synchronization; 'arp-tbl-sync-entries-added-b-3rd': arp table entries added in blade for T-2 synchronization; 'nd6-tbl-sync-entries-added-b-3rd': nd6 table entries added in blade for T-2 synchronization; 'ipv4-fib-tbl-sync-entries-added-b-3rd': ipv4-fib table entries added in blade for T-2 synchronization; 'ipv6-fib-tbl-sync-entries-added-b-3rd': ipv6-fib table entries added in blade for T-2 synchronization; 'mac-tbl-sync-entries-added-b-3rd': mac table entries added in blade for T-2 synchronization; 'arp-tbl-sync-entries-removed-b-3rd': arp table entries removed in blade for T-2 synchronization; 'nd6-tbl-sync-entries-removed-b-3rd': nd6 table entries removed in blade for T-2 synchronization; 'ipv4-fib-tbl-sync-entries-removed-b-3rd': ipv4-fib table entries removed in blade for T-2 synchronization; 'ipv6-fib-tbl-sync-entries-removed-b-3rd': ipv6-fib table entries removed in blade for T-2 synchronization; 'mac-tbl-sync-entries-removed-b-3rd': mac table entries removed in blade for T-2 synchronization; 'arp-tbl-sync-end-ts-m-3rd': arp table sync end time stamp master for T-2 synchronization; 'nd6-tbl-sync-end-ts-m-3rd': nd6 table sync end time stamp master for T-2 synchronization; 'ipv4-fib-tbl-sync-end-ts-m-3rd': ipv4-fib table sync end time stamp master for T-2 synchronization; 'ipv6-fib-tbl-sync-end-ts-m-3rd': ipv6-fib table sync end time stamp master for T-2 synchronization; 'mac-tbl-sync-end-ts-m-3rd': mac table sync end time stamp master for T-2 synchronization; 'arp-tbl-sync-end-ts-b-3rd': arp table sync end time stamp blade for T-2 synchronization; 'nd6-tbl-sync-end-ts-b-3rd': nd6 table sync end time stamp blade for T-2 synchronization; 'ipv4-fib-tbl-sync-end-ts-b-3rd': ipv4-fib table sync end time stamp blade for T-2 synchronization; 'ipv6-fib-tbl-sync-end-ts-b-3rd': ipv6-fib table sync end time stamp blade for T-2 synchronization; 'mac-tbl-sync-end-ts-b-3rd': mac table sync end time stamp blade for T-2 synchronization; 'arp-tbl-sync-start-ts-m-4th': arp table sync start time stamp master for T-3 synchronization; 'nd6-tbl-sync-start-ts-m-4th': nd6 table sync start time stamp master for T-3 synchronization; 'ipv4-fib-tbl-sync-start-ts-m-4th': ipv4-fib table sync start time stamp master for T-3 synchronization; 'ipv6-fib-tbl-sync-start-ts-m-4th': ipv6-fib table sync start time stamp master for T-3 synchronization; 'mac-tbl-sync-start-ts-m-4th': mac table sync start time stamp master for T-3 synchronization; 'arp-tbl-sync-start-ts-b-4th': arp table sync start time stamp blade for T-3 synchronization; 'nd6-tbl-sync-start-ts-b-4th': nd6 table sync start time stamp blade for T-3 synchronization; 'ipv4-fib-tbl-sync-start-ts-b-4th': ipv4-fib table sync start time stamp blade for T-3 synchronization; 'ipv6-fib-tbl-sync-start-ts-b-4th': ipv6-fib table sync start time stamp blade for T-3 synchronization; 'mac-tbl-sync-start-ts-b-4th': mac table sync start time stamp blade for T-3 synchronization; 'arp-tbl-sync-entries-sent-m-4th': arp table entries sent from master for T-3 synchronization; 'nd6-tbl-sync-entries-sent-m-4th': nd6 table entries sent from master for T-3 synchronization; 'ipv4-fib-tbl-sync-entries-sent-m-4th': ipv4-fib table entries sent from master for T-3 synchronization; 'ipv6-fib-tbl-sync-entries-sent-m-4th': ipv6-fib table entries sent from master for T-3 synchronization; 'mac-tbl-sync-entries-sent-m-4th': mac table entries sent from master for T-3 synchronization; 'arp-tbl-sync-entries-rcvd-b-4th': arp table entries received in blade for T-3 synchronization; 'nd6-tbl-sync-entries-rcvd-b-4th': nd6 table entries received in blade for T-3 synchronization; 'ipv4-fib-tbl-sync-entries-rcvd-b-4th': ipv4-fib table entries received in blade for T-3 synchronization; 'ipv6-fib-tbl-sync-entries-rcvd-b-4th': ipv6-fib table entries received in blade for T-3 synchronization; 'mac-tbl-sync-entries-rcvd-b-4th': mac table entries received in blade for T-3 synchronization; 'arp-tbl-sync-entries-added-b-4th': arp table entries added in blade for T-3 synchronization; 'nd6-tbl-sync-entries-added-b-4th': nd6 table entries added in blade for T-3 synchronization; 'ipv4-fib-tbl-sync-entries-added-b-4th': ipv4-fib table entries added in blade for T-3 synchronization; 'ipv6-fib-tbl-sync-entries-added-b-4th': ipv6-fib table entries added in blade for T-3 synchronization; 'mac-tbl-sync-entries-added-b-4th': mac table entries added in blade for T-3 synchronization; 'arp-tbl-sync-entries-removed-b-4th': arp table entries removed in blade for T-3 synchronization; 'nd6-tbl-sync-entries-removed-b-4th': nd6 table entries removed in blade for T-3 synchronization; 'ipv4-fib-tbl-sync-entries-removed-b-4th': ipv4-fib table entries removed in blade for T-3 synchronization; 'ipv6-fib-tbl-sync-entries-removed-b-4th': ipv6-fib table entries removed in blade for T-3 synchronization; 'mac-tbl-sync-entries-removed-b-4th': mac table entries removed in blade for T-3 synchronization; 'arp-tbl-sync-end-ts-m-4th': arp table sync end time stamp master for T-3 synchronization; 'nd6-tbl-sync-end-ts-m-4th': nd6 table sync end time stamp master for T-3 synchronization; 'ipv4-fib-tbl-sync-end-ts-m-4th': ipv4-fib table sync end time stamp master for T-3 synchronization; 'ipv6-fib-tbl-sync-end-ts-m-4th': ipv6-fib table sync end time stamp master for T-3 synchronization; 'mac-tbl-sync-end-ts-m-4th': mac table sync end time stamp master for T-3 synchronization; 'arp-tbl-sync-end-ts-b-4th': arp table sync end time stamp blade for T-3 synchronization; 'nd6-tbl-sync-end-ts-b-4th': nd6 table sync end time stamp blade for T-3 synchronization; 'ipv4-fib-tbl-sync-end-ts-b-4th': ipv4-fib table sync end time stamp blade for T-3 synchronization; 'ipv6-fib-tbl-sync-end-ts-b-4th': ipv6-fib table sync end time stamp blade for T-3 synchronization; 'mac-tbl-sync-end-ts-b-4th': mac table sync end time stamp blade for T-3 synchronization; 'arp-tbl-sync-start-ts-m-5th': arp table sync start time stamp master for T-4 synchronization;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters2 System#counters2}
  */
  readonly counters2?: string;
  /**
  * 'nd6-tbl-sync-start-ts-m-5th': nd6 table sync start time stamp master for T-4 synchronization; 'ipv4-fib-tbl-sync-start-ts-m-5th': ipv4-fib table sync start time stamp master for T-4 synchronization; 'ipv6-fib-tbl-sync-start-ts-m-5th': ipv6-fib table sync start time stamp master for T-4 synchronization; 'mac-tbl-sync-start-ts-m-5th': mac table sync start time stamp master for T-4 synchronization; 'arp-tbl-sync-start-ts-b-5th': arp table sync start time stamp blade for T-4 synchronization; 'nd6-tbl-sync-start-ts-b-5th': nd6 table sync start time stamp blade for T-4 synchronization; 'ipv4-fib-tbl-sync-start-ts-b-5th': ipv4-fib table sync start time stamp blade for T-4 synchronization; 'ipv6-fib-tbl-sync-start-ts-b-5th': ipv6-fib table sync start time stamp blade for T-4 synchronization; 'mac-tbl-sync-start-ts-b-5th': mac table sync start time stamp blade for T-4 synchronization; 'arp-tbl-sync-entries-sent-m-5th': arp table sync start time stamp blade for T-4 synchronization; 'nd6-tbl-sync-entries-sent-m-5th': nd6 table sync start time stamp blade for T-4 synchronization; 'ipv4-fib-tbl-sync-entries-sent-m-5th': ipv4-fib table sync start time stamp blade for T-4 synchronization; 'ipv6-fib-tbl-sync-entries-sent-m-5th': ipv6-fib table sync start time stamp blade for T-4 synchronization; 'mac-tbl-sync-entries-sent-m-5th': mac table sync start time stamp blade for T-4 synchronization; 'arp-tbl-sync-entries-rcvd-b-5th': arp table entries received in blade for T-4 synchronization; 'nd6-tbl-sync-entries-rcvd-b-5th': nd6 table entries received in blade for T-4 synchronization; 'ipv4-fib-tbl-sync-entries-rcvd-b-5th': ipv4-fib table entries received in blade for T-4 synchronization; 'ipv6-fib-tbl-sync-entries-rcvd-b-5th': ipv6-fib table entries received in blade for T-4 synchronization; 'mac-tbl-sync-entries-rcvd-b-5th': mac table entries received in blade for T-4 synchronization; 'arp-tbl-sync-entries-added-b-5th': arp table entries added in blade for T-4 synchronization; 'nd6-tbl-sync-entries-added-b-5th': nd6 table entries added in blade for T-4 synchronization; 'ipv4-fib-tbl-sync-entries-added-b-5th': ipv4-fib table entries added in blade for T-4 synchronization; 'ipv6-fib-tbl-sync-entries-added-b-5th': ipv6-fib table entries added in blade for T-4 synchronization; 'mac-tbl-sync-entries-added-b-5th': mac table entries added in blade for T-4 synchronization; 'arp-tbl-sync-entries-removed-b-5th': arp table entries removed in blade for T-4 synchronization; 'nd6-tbl-sync-entries-removed-b-5th': nd6 table entries removed in blade for T-4 synchronization; 'ipv4-fib-tbl-sync-entries-removed-b-5th': ipv4-fib table entries removed in blade for T-4 synchronization; 'ipv6-fib-tbl-sync-entries-removed-b-5th': ipv6-fib table entries removed in blade for T-4 synchronization; 'mac-tbl-sync-entries-removed-b-5th': mac table entries removed in blade for T-4 synchronization; 'arp-tbl-sync-end-ts-m-5th': arp table sync end time stamp master for T-4 synchronization; 'nd6-tbl-sync-end-ts-m-5th': nd6 table sync end time stamp master for T-4 synchronization; 'ipv4-fib-tbl-sync-end-ts-m-5th': ipv4-fib table sync end time stamp master for T-4 synchronization; 'ipv6-fib-tbl-sync-end-ts-m-5th': ipv6-fib table sync end time stamp master for T-4 synchronization; 'mac-tbl-sync-end-ts-m-5th': mac table sync end time stamp master for T-4 synchronization; 'arp-tbl-sync-end-ts-b-5th': arp table sync end time stamp blade for T-4 synchronization; 'nd6-tbl-sync-end-ts-b-5th': nd6 table sync end time stamp blade for T-4 synchronization; 'ipv4-fib-tbl-sync-end-ts-b-5th': ipv4-fib table sync end time stamp blade for T-4 synchronization; 'ipv6-fib-tbl-sync-end-ts-b-5th': ipv6-fib table sync end time stamp blade for T-4 synchronization; 'mac-tbl-sync-end-ts-b-5th': mac table sync end time stamp blade for T-4 synchronization; 'arp-tbl-sync-m': arp table sync count in master; 'nd6-tbl-sync-m': nd6 table sync count in master; 'ipv4-fib-tbl-sync-m': ipv4-fib table sync count in master; 'ipv6-fib-tbl-sync-m': ipv6-fib table sync count in master; 'mac-tbl-sync-m': mac table sync count in master; 'arp-tbl-sync-b': arp table sync count in blade; 'nd6-tbl-sync-b': nd6 table sync count in blade; 'ipv4-fib-tbl-sync-b': ipv4-fib table sync count in blade; 'ipv6-fib-tbl-sync-b': ipv6-fib table sync count in blade; 'mac-tbl-sync-b': mac table sync count in blade; 'arp-tbl-cksum-m': arp table checksum count in master; 'nd6-tbl-cksum-m': nd6 table checksum count in master; 'ipv4-fib-tbl-cksum-m': ipv4-fib table checksum count in master; 'ipv6-fib-tbl-cksum-m': ipv6-fib table checksum count in master; 'mac-tbl-cksum-m': mac table checksum count in master; 'arp-tbl-cksum-b': arp table checksum count in blade; 'nd6-tbl-cksum-b': nd6 table checksum count in blade; 'ipv4-fib-tbl-cksum-b': ipv4-fib table checksum count in blade; 'ipv6-fib-tbl-cksum-b': ipv6-fib table checksum count in blade; 'mac-tbl-cksum-b': mac table checksum count in blade; 'arp-tbl-cksum-mismatch-b': arp table checksum mismatch count in blade; 'nd6-tbl-cksum-mismatch-b': nd6 table checksum mismatch count in blade; 'ipv4-fib-tbl-cksum-mismatch-b': ipv4-fib table checksum mismatch count in blade; 'ipv6-fib-tbl-cksum-mismatch-b': ipv6-fib table checksum mismatch count in blade; 'mac-tbl-cksum-mismatch-b': mac table checksum mismatch count in blade; 'arp-tbl-cksum-cancel-m': arp table checksum cancelled count in master; 'nd6-tbl-cksum-cancel-m': nd6 table checksum cancelled count in master; 'ipv4-fib-tbl-cksum-cancel-m': ipv4-fib table checksum cancelled count in master; 'ipv6-fib-tbl-cksum-cancel-m': ipv6-fib table checksum cancelled count in master; 'mac-tbl-cksum-cancel-m': mac table checksum cancelled count in master;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters3 System#counters3}
  */
  readonly counters3?: string;
}

export function systemTableIntegritySamplingEnableToTerraform(struct?: SystemTableIntegritySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
    counters3: cdktf.stringToTerraform(struct!.counters3),
  }
}


export function systemTableIntegritySamplingEnableToHclTerraform(struct?: SystemTableIntegritySamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters3: {
      value: cdktf.stringToHclTerraform(struct!.counters3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTableIntegritySamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTableIntegritySamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    if (this._counters3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters3 = this._counters3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTableIntegritySamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
      this._counters3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
      this._counters3 = value.counters3;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }

  // counters3 - computed: false, optional: true, required: false
  private _counters3?: string; 
  public get counters3() {
    return this.getStringAttribute('counters3');
  }
  public set counters3(value: string) {
    this._counters3 = value;
  }
  public resetCounters3() {
    this._counters3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters3Input() {
    return this._counters3;
  }
}

export class SystemTableIntegritySamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemTableIntegritySamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemTableIntegritySamplingEnableOutputReference {
    return new SystemTableIntegritySamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTableIntegrity {
  /**
  * 'enable': Enable table integrity audit; 'disable': Disable table integrity audit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#audit_action System#audit_action}
  */
  readonly auditAction?: string;
  /**
  * 'enable': Enable auto-sync; 'disable': Disable auto-sync;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#auto_sync_action System#auto_sync_action}
  */
  readonly autoSyncAction?: string;
  /**
  * 'all': All tables;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#table System#table}
  */
  readonly table?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemTableIntegritySamplingEnable[] | cdktf.IResolvable;
}

export function systemTableIntegrityToTerraform(struct?: SystemTableIntegrityOutputReference | SystemTableIntegrity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_action: cdktf.stringToTerraform(struct!.auditAction),
    auto_sync_action: cdktf.stringToTerraform(struct!.autoSyncAction),
    table: cdktf.stringToTerraform(struct!.table),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemTableIntegritySamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemTableIntegrityToHclTerraform(struct?: SystemTableIntegrityOutputReference | SystemTableIntegrity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_action: {
      value: cdktf.stringToHclTerraform(struct!.auditAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_sync_action: {
      value: cdktf.stringToHclTerraform(struct!.autoSyncAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
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
    sampling_enable: {
      value: cdktf.listMapperHcl(systemTableIntegritySamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTableIntegritySamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTableIntegrityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTableIntegrity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditAction = this._auditAction;
    }
    if (this._autoSyncAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSyncAction = this._autoSyncAction;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTableIntegrity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditAction = undefined;
      this._autoSyncAction = undefined;
      this._table = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditAction = value.auditAction;
      this._autoSyncAction = value.autoSyncAction;
      this._table = value.table;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // audit_action - computed: false, optional: true, required: false
  private _auditAction?: string; 
  public get auditAction() {
    return this.getStringAttribute('audit_action');
  }
  public set auditAction(value: string) {
    this._auditAction = value;
  }
  public resetAuditAction() {
    this._auditAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditActionInput() {
    return this._auditAction;
  }

  // auto_sync_action - computed: false, optional: true, required: false
  private _autoSyncAction?: string; 
  public get autoSyncAction() {
    return this.getStringAttribute('auto_sync_action');
  }
  public set autoSyncAction(value: string) {
    this._autoSyncAction = value;
  }
  public resetAutoSyncAction() {
    this._autoSyncAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncActionInput() {
    return this._autoSyncAction;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemTableIntegritySamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemTableIntegritySamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemTcpRateLimitResetUnknownConn {
  /**
  * Log when rate exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#log_for_reset_unknown_conn System#log_for_reset_unknown_conn}
  */
  readonly logForResetUnknownConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#pkt_rate_for_reset_unknown_conn System#pkt_rate_for_reset_unknown_conn}
  */
  readonly pktRateForResetUnknownConn?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTcpRateLimitResetUnknownConnToTerraform(struct?: SystemTcpRateLimitResetUnknownConnOutputReference | SystemTcpRateLimitResetUnknownConn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_for_reset_unknown_conn: cdktf.numberToTerraform(struct!.logForResetUnknownConn),
    pkt_rate_for_reset_unknown_conn: cdktf.numberToTerraform(struct!.pktRateForResetUnknownConn),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTcpRateLimitResetUnknownConnToHclTerraform(struct?: SystemTcpRateLimitResetUnknownConnOutputReference | SystemTcpRateLimitResetUnknownConn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_for_reset_unknown_conn: {
      value: cdktf.numberToHclTerraform(struct!.logForResetUnknownConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_rate_for_reset_unknown_conn: {
      value: cdktf.numberToHclTerraform(struct!.pktRateForResetUnknownConn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpRateLimitResetUnknownConnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTcpRateLimitResetUnknownConn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logForResetUnknownConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logForResetUnknownConn = this._logForResetUnknownConn;
    }
    if (this._pktRateForResetUnknownConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktRateForResetUnknownConn = this._pktRateForResetUnknownConn;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpRateLimitResetUnknownConn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logForResetUnknownConn = undefined;
      this._pktRateForResetUnknownConn = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logForResetUnknownConn = value.logForResetUnknownConn;
      this._pktRateForResetUnknownConn = value.pktRateForResetUnknownConn;
      this._uuid = value.uuid;
    }
  }

  // log_for_reset_unknown_conn - computed: false, optional: true, required: false
  private _logForResetUnknownConn?: number; 
  public get logForResetUnknownConn() {
    return this.getNumberAttribute('log_for_reset_unknown_conn');
  }
  public set logForResetUnknownConn(value: number) {
    this._logForResetUnknownConn = value;
  }
  public resetLogForResetUnknownConn() {
    this._logForResetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForResetUnknownConnInput() {
    return this._logForResetUnknownConn;
  }

  // pkt_rate_for_reset_unknown_conn - computed: false, optional: true, required: false
  private _pktRateForResetUnknownConn?: number; 
  public get pktRateForResetUnknownConn() {
    return this.getNumberAttribute('pkt_rate_for_reset_unknown_conn');
  }
  public set pktRateForResetUnknownConn(value: number) {
    this._pktRateForResetUnknownConn = value;
  }
  public resetPktRateForResetUnknownConn() {
    this._pktRateForResetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktRateForResetUnknownConnInput() {
    return this._pktRateForResetUnknownConn;
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
export interface SystemTcpSamplingEnable {
  /**
  * 'all': all; 'activeopens': Active open conns; 'passiveopens': Passive open conns; 'attemptfails': Connect attemp failures; 'estabresets': Resets rcvd on EST conn; 'insegs': Total in TCP packets; 'outsegs': Total out TCP packets; 'retranssegs': Retransmited packets; 'inerrs': Input errors; 'outrsts': Reset Sent; 'sock_alloc': Sockets allocated; 'orphan_count': Orphan sockets; 'mem_alloc': Memory alloc; 'recv_mem': Total rx buffer; 'send_mem': Total tx buffer; 'currestab': Currently EST conns; 'currsyssnt': TCP in SYN-SNT state; 'currsynrcv': TCP in SYN-RCV state; 'currfinw1': TCP in FIN-W1 state; 'currfinw2': TCP FIN-W2 state; 'currtimew': TCP TimeW state; 'currclose': TCP in Close state; 'currclsw': TCP in CloseW state; 'currlack': TCP in LastACK state; 'currlstn': TCP in Listen state; 'currclsg': TCP in Closing state; 'pawsactiverejected': TCP paw active rej; 'syn_rcv_rstack': Rcv RST|ACK on SYN; 'syn_rcv_rst': Rcv RST on SYN; 'syn_rcv_ack': Rcv ACK on SYN; 'ax_rexmit_syn': TCP rexmit SYN; 'tcpabortontimeout': TCP abort on timeout; 'noroute': TCPIP out noroute; 'exceedmss': MSS exceeded pkt dropped; 'tfo_conns': TFO Total Connections; 'tfo_actives': TFO Current Actives; 'tfo_denied': TFO Denied;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemTcpSamplingEnableToTerraform(struct?: SystemTcpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemTcpSamplingEnableToHclTerraform(struct?: SystemTcpSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTcpSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemTcpSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemTcpSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemTcpSamplingEnableOutputReference {
    return new SystemTcpSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTcp {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * rate_limit_reset_unknown_conn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#rate_limit_reset_unknown_conn System#rate_limit_reset_unknown_conn}
  */
  readonly rateLimitResetUnknownConn?: SystemTcpRateLimitResetUnknownConn;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemTcpSamplingEnable[] | cdktf.IResolvable;
}

export function systemTcpToTerraform(struct?: SystemTcpOutputReference | SystemTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    rate_limit_reset_unknown_conn: systemTcpRateLimitResetUnknownConnToTerraform(struct!.rateLimitResetUnknownConn),
    sampling_enable: cdktf.listMapper(systemTcpSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemTcpToHclTerraform(struct?: SystemTcpOutputReference | SystemTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit_reset_unknown_conn: {
      value: systemTcpRateLimitResetUnknownConnToHclTerraform(struct!.rateLimitResetUnknownConn),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTcpRateLimitResetUnknownConnList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemTcpSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTcpSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._rateLimitResetUnknownConn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitResetUnknownConn = this._rateLimitResetUnknownConn?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._rateLimitResetUnknownConn.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._rateLimitResetUnknownConn.internalValue = value.rateLimitResetUnknownConn;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // rate_limit_reset_unknown_conn - computed: false, optional: true, required: false
  private _rateLimitResetUnknownConn = new SystemTcpRateLimitResetUnknownConnOutputReference(this, "rate_limit_reset_unknown_conn");
  public get rateLimitResetUnknownConn() {
    return this._rateLimitResetUnknownConn;
  }
  public putRateLimitResetUnknownConn(value: SystemTcpRateLimitResetUnknownConn) {
    this._rateLimitResetUnknownConn.internalValue = value;
  }
  public resetRateLimitResetUnknownConn() {
    this._rateLimitResetUnknownConn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitResetUnknownConnInput() {
    return this._rateLimitResetUnknownConn.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemTcpSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemTcpSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemTcpStatsSamplingEnable {
  /**
  * 'all': all; 'connattempt': Connect initiated; 'connects': Connect established; 'drops': Connect dropped; 'conndrops': Embryonic connect dropped; 'closed': Connect closed; 'segstimed': Segs to get RTT; 'rttupdated': Update RTT; 'delack': Delayed acks sent; 'timeoutdrop': Conn dropped in rxmt timeout; 'rexmttimeo': Retransmit timeout; 'persisttimeo': Persist timeout; 'keeptimeo': Keepalive timeout; 'keepprobe': Keepalive probe sent; 'keepdrops': Connect dropped in keepalive; 'sndtotal': Total packet sent; 'sndpack': Data packet sent; 'sndbyte': Data bytes sent; 'sndrexmitpack': Data packet retransmit; 'sndrexmitbyte': Data byte retransmit; 'sndrexmitbad': Unnecessary packet retransmit; 'sndacks': Ack packet sent; 'sndprobe': Window probe sent; 'sndurg': URG packet sent; 'sndwinup': Window update packet sent; 'sndctrl': SYN|FIN|RST packet sent; 'sndrst': RST packet sent; 'sndfin': FIN packet sent; 'sndsyn': SYN packet sent; 'rcvtotal': Total packet received; 'rcvpack': Packet received; 'rcvbyte': Bytes received; 'rcvbadoff': Packet received with bad offset; 'rcvmemdrop': Packet dropped for lack of memory; 'rcvduppack': Duplicate packet received; 'rcvdupbyte': Duplicate bytes received; 'rcvpartduppack': Packet with some duplicate data; 'rcvpartdupbyte': Dup. bytes in part-dup. packets; 'rcvoopack': Out-of-order packet received; 'rcvoobyte': Out-of-order bytes received; 'rcvpackafterwin': Packets with data after window; 'rcvbyteafterwin': Bytes rcvd after window; 'rcvwinprobe': Rcvd window probe packet; 'rcvdupack': Rcvd duplicate acks; 'rcvacktoomuch': Rcvd acks for unsent data; 'rcvackpack': Rcvd ack packets; 'rcvackbyte': Bytes acked by rcvd acks; 'rcvwinupd': Rcvd window update packets; 'pawsdrop': Segments dropped due to PAWS; 'predack': Hdr predict for acks; 'preddat': Hdr predict for data pkts; 'persistdrop': Timeout in persist state; 'badrst': Ignored RST; 'finwait2_drops': Drop FIN_WAIT_2 connection after time limit; 'sack_recovery_episode': SACK recovery episodes; 'sack_rexmits': SACK rexmit segments; 'sack_rexmit_bytes': SACK rexmit bytes; 'sack_rcv_blocks': SACK received; 'sack_send_blocks': SACK sent; 'sndcack': Challenge ACK sent; 'cacklim': Challenge ACK limited; 'reassmemdrop': Packet dropped during reassembly; 'reasstimeout': Reassembly Time Out; 'cc_idle': Congestion control window set do to idle; 'cc_reduce': Congestion control window reduced by event; 'rcvdsack': Rcvd DSACK packets; 'a2brcvwnd': ATCP to BTCP receive window; 'a2bsackpresent': ATCP to BTCP SACK options present; 'a2bdupack': ATCP to BTCP Dup/OO ACK; 'a2brxdata': ATCP to BTCP Rxmitted data; 'a2btcpoptions': ATCP to BTCP unsupported TCP options; 'a2boodata': ATCP to BTCP oo data received; 'a2bpartialack': ATCP to BTCP partial ack received; 'a2bfsmtransition': ATCP to BTCP state machine transition; 'a2btransitionnum': ATCP to BTCP total transitions; 'b2atransitionnum': ATCP to BTCP total transitions; 'bad_iochan': IO Channel Modified; 'atcpforward': Adaptive TCP forward; 'atcpsent': Adaptive TCP sent; 'atcprexmitsadrop': Adaptive TCP transmit SA drops; 'atcpsendbackack': Adaptive TCP sendback ACK; 'atcprexmit': Adaptive TCP retransmits; 'atcpbuffallocfail': Adaptive TCP buffer allocation fails; 'a2bappbuffering': Transition to full stack on when application buffers too much data; 'atcpsendfail': Adaptive TCP sent fails; 'earlyrexmit': Early Retransmission sent; 'mburstlim': Maxburst limited tx; 'a2bsndwnd': ATCP to BTCP send window; 'proxyheaderv1': Proxy header v1; 'proxyheaderv2': Proxy header v2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#counters1 System#counters1}
  */
  readonly counters1?: string;
}

export function systemTcpStatsSamplingEnableToTerraform(struct?: SystemTcpStatsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemTcpStatsSamplingEnableToHclTerraform(struct?: SystemTcpStatsSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpStatsSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTcpStatsSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpStatsSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemTcpStatsSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SystemTcpStatsSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SystemTcpStatsSamplingEnableOutputReference {
    return new SystemTcpStatsSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemTcpStats {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#sampling_enable System#sampling_enable}
  */
  readonly samplingEnable?: SystemTcpStatsSamplingEnable[] | cdktf.IResolvable;
}

export function systemTcpStatsToTerraform(struct?: SystemTcpStatsOutputReference | SystemTcpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(systemTcpStatsSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function systemTcpStatsToHclTerraform(struct?: SystemTcpStatsOutputReference | SystemTcpStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(systemTcpStatsSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTcpStatsSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTcpStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTcpStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemTcpStatsSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemTcpStatsSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}
export interface SystemTcpSynPerSec {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTcpSynPerSecToTerraform(struct?: SystemTcpSynPerSecOutputReference | SystemTcpSynPerSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTcpSynPerSecToHclTerraform(struct?: SystemTcpSynPerSecOutputReference | SystemTcpSynPerSec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemTcpSynPerSecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTcpSynPerSec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTcpSynPerSec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemTelemetryLogDeviceStatus {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTelemetryLogDeviceStatusToTerraform(struct?: SystemTelemetryLogDeviceStatusOutputReference | SystemTelemetryLogDeviceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTelemetryLogDeviceStatusToHclTerraform(struct?: SystemTelemetryLogDeviceStatusOutputReference | SystemTelemetryLogDeviceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemTelemetryLogDeviceStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLogDeviceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLogDeviceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemTelemetryLogEnvironment {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTelemetryLogEnvironmentToTerraform(struct?: SystemTelemetryLogEnvironmentOutputReference | SystemTelemetryLogEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTelemetryLogEnvironmentToHclTerraform(struct?: SystemTelemetryLogEnvironmentOutputReference | SystemTelemetryLogEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemTelemetryLogEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLogEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLogEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemTelemetryLogPartitionMetrics {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTelemetryLogPartitionMetricsToTerraform(struct?: SystemTelemetryLogPartitionMetricsOutputReference | SystemTelemetryLogPartitionMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTelemetryLogPartitionMetricsToHclTerraform(struct?: SystemTelemetryLogPartitionMetricsOutputReference | SystemTelemetryLogPartitionMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemTelemetryLogPartitionMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLogPartitionMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLogPartitionMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemTelemetryLogTopKAppSvcListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTelemetryLogTopKAppSvcListStructToTerraform(struct?: SystemTelemetryLogTopKAppSvcListStructOutputReference | SystemTelemetryLogTopKAppSvcListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTelemetryLogTopKAppSvcListStructToHclTerraform(struct?: SystemTelemetryLogTopKAppSvcListStructOutputReference | SystemTelemetryLogTopKAppSvcListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemTelemetryLogTopKAppSvcListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLogTopKAppSvcListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLogTopKAppSvcListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemTelemetryLogTopKSourceListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTelemetryLogTopKSourceListStructToTerraform(struct?: SystemTelemetryLogTopKSourceListStructOutputReference | SystemTelemetryLogTopKSourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTelemetryLogTopKSourceListStructToHclTerraform(struct?: SystemTelemetryLogTopKSourceListStructOutputReference | SystemTelemetryLogTopKSourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SystemTelemetryLogTopKSourceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLogTopKSourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLogTopKSourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface SystemTelemetryLog {
  /**
  * device_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#device_status System#device_status}
  */
  readonly deviceStatus?: SystemTelemetryLogDeviceStatus;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#environment System#environment}
  */
  readonly environment?: SystemTelemetryLogEnvironment;
  /**
  * partition_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#partition_metrics System#partition_metrics}
  */
  readonly partitionMetrics?: SystemTelemetryLogPartitionMetrics;
  /**
  * top_k_app_svc_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#top_k_app_svc_list System#top_k_app_svc_list}
  */
  readonly topKAppSvcList?: SystemTelemetryLogTopKAppSvcListStruct;
  /**
  * top_k_source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#top_k_source_list System#top_k_source_list}
  */
  readonly topKSourceList?: SystemTelemetryLogTopKSourceListStruct;
}

export function systemTelemetryLogToTerraform(struct?: SystemTelemetryLogOutputReference | SystemTelemetryLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_status: systemTelemetryLogDeviceStatusToTerraform(struct!.deviceStatus),
    environment: systemTelemetryLogEnvironmentToTerraform(struct!.environment),
    partition_metrics: systemTelemetryLogPartitionMetricsToTerraform(struct!.partitionMetrics),
    top_k_app_svc_list: systemTelemetryLogTopKAppSvcListStructToTerraform(struct!.topKAppSvcList),
    top_k_source_list: systemTelemetryLogTopKSourceListStructToTerraform(struct!.topKSourceList),
  }
}


export function systemTelemetryLogToHclTerraform(struct?: SystemTelemetryLogOutputReference | SystemTelemetryLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_status: {
      value: systemTelemetryLogDeviceStatusToHclTerraform(struct!.deviceStatus),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTelemetryLogDeviceStatusList",
    },
    environment: {
      value: systemTelemetryLogEnvironmentToHclTerraform(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTelemetryLogEnvironmentList",
    },
    partition_metrics: {
      value: systemTelemetryLogPartitionMetricsToHclTerraform(struct!.partitionMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTelemetryLogPartitionMetricsList",
    },
    top_k_app_svc_list: {
      value: systemTelemetryLogTopKAppSvcListStructToHclTerraform(struct!.topKAppSvcList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTelemetryLogTopKAppSvcListStructList",
    },
    top_k_source_list: {
      value: systemTelemetryLogTopKSourceListStructToHclTerraform(struct!.topKSourceList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemTelemetryLogTopKSourceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTelemetryLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTelemetryLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceStatus = this._deviceStatus?.internalValue;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._partitionMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionMetrics = this._partitionMetrics?.internalValue;
    }
    if (this._topKAppSvcList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topKAppSvcList = this._topKAppSvcList?.internalValue;
    }
    if (this._topKSourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topKSourceList = this._topKSourceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTelemetryLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceStatus.internalValue = undefined;
      this._environment.internalValue = undefined;
      this._partitionMetrics.internalValue = undefined;
      this._topKAppSvcList.internalValue = undefined;
      this._topKSourceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceStatus.internalValue = value.deviceStatus;
      this._environment.internalValue = value.environment;
      this._partitionMetrics.internalValue = value.partitionMetrics;
      this._topKAppSvcList.internalValue = value.topKAppSvcList;
      this._topKSourceList.internalValue = value.topKSourceList;
    }
  }

  // device_status - computed: false, optional: true, required: false
  private _deviceStatus = new SystemTelemetryLogDeviceStatusOutputReference(this, "device_status");
  public get deviceStatus() {
    return this._deviceStatus;
  }
  public putDeviceStatus(value: SystemTelemetryLogDeviceStatus) {
    this._deviceStatus.internalValue = value;
  }
  public resetDeviceStatus() {
    this._deviceStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceStatusInput() {
    return this._deviceStatus.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new SystemTelemetryLogEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: SystemTelemetryLogEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // partition_metrics - computed: false, optional: true, required: false
  private _partitionMetrics = new SystemTelemetryLogPartitionMetricsOutputReference(this, "partition_metrics");
  public get partitionMetrics() {
    return this._partitionMetrics;
  }
  public putPartitionMetrics(value: SystemTelemetryLogPartitionMetrics) {
    this._partitionMetrics.internalValue = value;
  }
  public resetPartitionMetrics() {
    this._partitionMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionMetricsInput() {
    return this._partitionMetrics.internalValue;
  }

  // top_k_app_svc_list - computed: false, optional: true, required: false
  private _topKAppSvcList = new SystemTelemetryLogTopKAppSvcListStructOutputReference(this, "top_k_app_svc_list");
  public get topKAppSvcList() {
    return this._topKAppSvcList;
  }
  public putTopKAppSvcList(value: SystemTelemetryLogTopKAppSvcListStruct) {
    this._topKAppSvcList.internalValue = value;
  }
  public resetTopKAppSvcList() {
    this._topKAppSvcList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKAppSvcListInput() {
    return this._topKAppSvcList.internalValue;
  }

  // top_k_source_list - computed: false, optional: true, required: false
  private _topKSourceList = new SystemTelemetryLogTopKSourceListStructOutputReference(this, "top_k_source_list");
  public get topKSourceList() {
    return this._topKSourceList;
  }
  public putTopKSourceList(value: SystemTelemetryLogTopKSourceListStruct) {
    this._topKSourceList.internalValue = value;
  }
  public resetTopKSourceList() {
    this._topKSourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKSourceListInput() {
    return this._topKSourceList.internalValue;
  }
}
export interface SystemTemplate {
  /**
  * Apply policy template to the whole system (Policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#template_policy System#template_policy}
  */
  readonly templatePolicy?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTemplateToTerraform(struct?: SystemTemplateOutputReference | SystemTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_policy: cdktf.stringToTerraform(struct!.templatePolicy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTemplateToHclTerraform(struct?: SystemTemplateOutputReference | SystemTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_policy: {
      value: cdktf.stringToHclTerraform(struct!.templatePolicy),
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

export class SystemTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePolicy = this._templatePolicy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templatePolicy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templatePolicy = value.templatePolicy;
      this._uuid = value.uuid;
    }
  }

  // template_policy - computed: false, optional: true, required: false
  private _templatePolicy?: string; 
  public get templatePolicy() {
    return this.getStringAttribute('template_policy');
  }
  public set templatePolicy(value: string) {
    this._templatePolicy = value;
  }
  public resetTemplatePolicy() {
    this._templatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicyInput() {
    return this._templatePolicy;
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
export interface SystemTemplateBindMonitorListStruct {
  /**
  * Monitor template ID Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#template_monitor System#template_monitor}
  */
  readonly templateMonitor: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/system#uuid System#uuid}
  */
  readonly uuid?: string;
}

export function systemTemplateBindMonitorListStructToTerraform(struct?: SystemTemplateBindMonitorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_monitor: cdktf.numberToTerraform(struct!.templateMonitor),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemTemplateBindMonitorListStructToHclTerraform(struct?: SystemTemplateBindMonitorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_monitor: {
      value: cdktf.numberToHclTerraform(struct!.templateMonitor),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemTemplateBindMonitorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemTemplateBindMonitorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateMonitor = this._templateMonitor;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemTemplateBindMonitorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._templateMonitor = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._templateMonitor = value.templateMonitor;
      this._uuid = value.uuid;
    }
  }

  // template_monitor - computed: false, optional: false, required: true
  private _templateMonitor?: number; 
  public get templateMonitor() {
    return this.getNumberAttribute('template_monitor');
  }
  public set templateMonitor(value: number) {
    this._templateMonitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateMonitorInput() {
    return this._templateMonitor;
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

export class SystemTemplateBindMonitorListStructList extends cdktf.ComplexList {
  public internalValue? : SystemTemplateBindMonitorListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemTemplateBindMonitorListStructOutputReference {
    return new SystemTemplateBindMonitorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
