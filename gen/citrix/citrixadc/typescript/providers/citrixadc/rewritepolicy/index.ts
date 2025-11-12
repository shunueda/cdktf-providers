// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RewritepolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#action Rewritepolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#comment Rewritepolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#id Rewritepolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#logaction Rewritepolicy#logaction}
  */
  readonly logaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#name Rewritepolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#rule Rewritepolicy#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#undefaction Rewritepolicy#undefaction}
  */
  readonly undefaction?: string;
  /**
  * csvserverbinding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#csvserverbinding Rewritepolicy#csvserverbinding}
  */
  readonly csvserverbinding?: RewritepolicyCsvserverbinding[] | cdktf.IResolvable;
  /**
  * globalbinding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#globalbinding Rewritepolicy#globalbinding}
  */
  readonly globalbinding?: RewritepolicyGlobalbinding[] | cdktf.IResolvable;
  /**
  * lbvserverbinding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#lbvserverbinding Rewritepolicy#lbvserverbinding}
  */
  readonly lbvserverbinding?: RewritepolicyLbvserverbinding[] | cdktf.IResolvable;
}
export interface RewritepolicyCsvserverbinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#bindpoint Rewritepolicy#bindpoint}
  */
  readonly bindpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#gotopriorityexpression Rewritepolicy#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#invoke Rewritepolicy#invoke}
  */
  readonly invoke?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#labelname Rewritepolicy#labelname}
  */
  readonly labelname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#labeltype Rewritepolicy#labeltype}
  */
  readonly labeltype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#name Rewritepolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#priority Rewritepolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#targetlbvserver Rewritepolicy#targetlbvserver}
  */
  readonly targetlbvserver?: string;
}

export function rewritepolicyCsvserverbindingToTerraform(struct?: RewritepolicyCsvserverbinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindpoint: cdktf.stringToTerraform(struct!.bindpoint),
    gotopriorityexpression: cdktf.stringToTerraform(struct!.gotopriorityexpression),
    invoke: cdktf.booleanToTerraform(struct!.invoke),
    labelname: cdktf.stringToTerraform(struct!.labelname),
    labeltype: cdktf.stringToTerraform(struct!.labeltype),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    targetlbvserver: cdktf.stringToTerraform(struct!.targetlbvserver),
  }
}


export function rewritepolicyCsvserverbindingToHclTerraform(struct?: RewritepolicyCsvserverbinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindpoint: {
      value: cdktf.stringToHclTerraform(struct!.bindpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gotopriorityexpression: {
      value: cdktf.stringToHclTerraform(struct!.gotopriorityexpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invoke: {
      value: cdktf.booleanToHclTerraform(struct!.invoke),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labelname: {
      value: cdktf.stringToHclTerraform(struct!.labelname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labeltype: {
      value: cdktf.stringToHclTerraform(struct!.labeltype),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    targetlbvserver: {
      value: cdktf.stringToHclTerraform(struct!.targetlbvserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RewritepolicyCsvserverbindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RewritepolicyCsvserverbinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindpoint = this._bindpoint;
    }
    if (this._gotopriorityexpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.gotopriorityexpression = this._gotopriorityexpression;
    }
    if (this._invoke !== undefined) {
      hasAnyValues = true;
      internalValueResult.invoke = this._invoke;
    }
    if (this._labelname !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelname = this._labelname;
    }
    if (this._labeltype !== undefined) {
      hasAnyValues = true;
      internalValueResult.labeltype = this._labeltype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._targetlbvserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetlbvserver = this._targetlbvserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RewritepolicyCsvserverbinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindpoint = undefined;
      this._gotopriorityexpression = undefined;
      this._invoke = undefined;
      this._labelname = undefined;
      this._labeltype = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._targetlbvserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindpoint = value.bindpoint;
      this._gotopriorityexpression = value.gotopriorityexpression;
      this._invoke = value.invoke;
      this._labelname = value.labelname;
      this._labeltype = value.labeltype;
      this._name = value.name;
      this._priority = value.priority;
      this._targetlbvserver = value.targetlbvserver;
    }
  }

  // bindpoint - computed: true, optional: true, required: false
  private _bindpoint?: string; 
  public get bindpoint() {
    return this.getStringAttribute('bindpoint');
  }
  public set bindpoint(value: string) {
    this._bindpoint = value;
  }
  public resetBindpoint() {
    this._bindpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpointInput() {
    return this._bindpoint;
  }

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
  }

  // invoke - computed: true, optional: true, required: false
  private _invoke?: boolean | cdktf.IResolvable; 
  public get invoke() {
    return this.getBooleanAttribute('invoke');
  }
  public set invoke(value: boolean | cdktf.IResolvable) {
    this._invoke = value;
  }
  public resetInvoke() {
    this._invoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeInput() {
    return this._invoke;
  }

  // labelname - computed: true, optional: true, required: false
  private _labelname?: string; 
  public get labelname() {
    return this.getStringAttribute('labelname');
  }
  public set labelname(value: string) {
    this._labelname = value;
  }
  public resetLabelname() {
    this._labelname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelnameInput() {
    return this._labelname;
  }

  // labeltype - computed: true, optional: true, required: false
  private _labeltype?: string; 
  public get labeltype() {
    return this.getStringAttribute('labeltype');
  }
  public set labeltype(value: string) {
    this._labeltype = value;
  }
  public resetLabeltype() {
    this._labeltype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labeltypeInput() {
    return this._labeltype;
  }

  // name - computed: true, optional: true, required: false
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

  // priority - computed: true, optional: true, required: false
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

  // targetlbvserver - computed: true, optional: true, required: false
  private _targetlbvserver?: string; 
  public get targetlbvserver() {
    return this.getStringAttribute('targetlbvserver');
  }
  public set targetlbvserver(value: string) {
    this._targetlbvserver = value;
  }
  public resetTargetlbvserver() {
    this._targetlbvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetlbvserverInput() {
    return this._targetlbvserver;
  }
}

export class RewritepolicyCsvserverbindingList extends cdktf.ComplexList {
  public internalValue? : RewritepolicyCsvserverbinding[] | cdktf.IResolvable

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
  public get(index: number): RewritepolicyCsvserverbindingOutputReference {
    return new RewritepolicyCsvserverbindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RewritepolicyGlobalbinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#globalbindtype Rewritepolicy#globalbindtype}
  */
  readonly globalbindtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#gotopriorityexpression Rewritepolicy#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#invoke Rewritepolicy#invoke}
  */
  readonly invoke?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#labelname Rewritepolicy#labelname}
  */
  readonly labelname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#labeltype Rewritepolicy#labeltype}
  */
  readonly labeltype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#policyname Rewritepolicy#policyname}
  */
  readonly policyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#priority Rewritepolicy#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#type Rewritepolicy#type}
  */
  readonly type?: string;
}

export function rewritepolicyGlobalbindingToTerraform(struct?: RewritepolicyGlobalbinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    globalbindtype: cdktf.stringToTerraform(struct!.globalbindtype),
    gotopriorityexpression: cdktf.stringToTerraform(struct!.gotopriorityexpression),
    invoke: cdktf.booleanToTerraform(struct!.invoke),
    labelname: cdktf.stringToTerraform(struct!.labelname),
    labeltype: cdktf.stringToTerraform(struct!.labeltype),
    policyname: cdktf.stringToTerraform(struct!.policyname),
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function rewritepolicyGlobalbindingToHclTerraform(struct?: RewritepolicyGlobalbinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    globalbindtype: {
      value: cdktf.stringToHclTerraform(struct!.globalbindtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gotopriorityexpression: {
      value: cdktf.stringToHclTerraform(struct!.gotopriorityexpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invoke: {
      value: cdktf.booleanToHclTerraform(struct!.invoke),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labelname: {
      value: cdktf.stringToHclTerraform(struct!.labelname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labeltype: {
      value: cdktf.stringToHclTerraform(struct!.labeltype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policyname: {
      value: cdktf.stringToHclTerraform(struct!.policyname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
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

export class RewritepolicyGlobalbindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RewritepolicyGlobalbinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalbindtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalbindtype = this._globalbindtype;
    }
    if (this._gotopriorityexpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.gotopriorityexpression = this._gotopriorityexpression;
    }
    if (this._invoke !== undefined) {
      hasAnyValues = true;
      internalValueResult.invoke = this._invoke;
    }
    if (this._labelname !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelname = this._labelname;
    }
    if (this._labeltype !== undefined) {
      hasAnyValues = true;
      internalValueResult.labeltype = this._labeltype;
    }
    if (this._policyname !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyname = this._policyname;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RewritepolicyGlobalbinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._globalbindtype = undefined;
      this._gotopriorityexpression = undefined;
      this._invoke = undefined;
      this._labelname = undefined;
      this._labeltype = undefined;
      this._policyname = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._globalbindtype = value.globalbindtype;
      this._gotopriorityexpression = value.gotopriorityexpression;
      this._invoke = value.invoke;
      this._labelname = value.labelname;
      this._labeltype = value.labeltype;
      this._policyname = value.policyname;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // globalbindtype - computed: true, optional: true, required: false
  private _globalbindtype?: string; 
  public get globalbindtype() {
    return this.getStringAttribute('globalbindtype');
  }
  public set globalbindtype(value: string) {
    this._globalbindtype = value;
  }
  public resetGlobalbindtype() {
    this._globalbindtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalbindtypeInput() {
    return this._globalbindtype;
  }

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
  }

  // invoke - computed: true, optional: true, required: false
  private _invoke?: boolean | cdktf.IResolvable; 
  public get invoke() {
    return this.getBooleanAttribute('invoke');
  }
  public set invoke(value: boolean | cdktf.IResolvable) {
    this._invoke = value;
  }
  public resetInvoke() {
    this._invoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeInput() {
    return this._invoke;
  }

  // labelname - computed: true, optional: true, required: false
  private _labelname?: string; 
  public get labelname() {
    return this.getStringAttribute('labelname');
  }
  public set labelname(value: string) {
    this._labelname = value;
  }
  public resetLabelname() {
    this._labelname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelnameInput() {
    return this._labelname;
  }

  // labeltype - computed: true, optional: true, required: false
  private _labeltype?: string; 
  public get labeltype() {
    return this.getStringAttribute('labeltype');
  }
  public set labeltype(value: string) {
    this._labeltype = value;
  }
  public resetLabeltype() {
    this._labeltype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labeltypeInput() {
    return this._labeltype;
  }

  // policyname - computed: true, optional: true, required: false
  private _policyname?: string; 
  public get policyname() {
    return this.getStringAttribute('policyname');
  }
  public set policyname(value: string) {
    this._policyname = value;
  }
  public resetPolicyname() {
    this._policyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policynameInput() {
    return this._policyname;
  }

  // priority - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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

export class RewritepolicyGlobalbindingList extends cdktf.ComplexList {
  public internalValue? : RewritepolicyGlobalbinding[] | cdktf.IResolvable

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
  public get(index: number): RewritepolicyGlobalbindingOutputReference {
    return new RewritepolicyGlobalbindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RewritepolicyLbvserverbinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#bindpoint Rewritepolicy#bindpoint}
  */
  readonly bindpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#gotopriorityexpression Rewritepolicy#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#invoke Rewritepolicy#invoke}
  */
  readonly invoke?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#labelname Rewritepolicy#labelname}
  */
  readonly labelname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#labeltype Rewritepolicy#labeltype}
  */
  readonly labeltype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#name Rewritepolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#priority Rewritepolicy#priority}
  */
  readonly priority?: number;
}

export function rewritepolicyLbvserverbindingToTerraform(struct?: RewritepolicyLbvserverbinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindpoint: cdktf.stringToTerraform(struct!.bindpoint),
    gotopriorityexpression: cdktf.stringToTerraform(struct!.gotopriorityexpression),
    invoke: cdktf.booleanToTerraform(struct!.invoke),
    labelname: cdktf.stringToTerraform(struct!.labelname),
    labeltype: cdktf.stringToTerraform(struct!.labeltype),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function rewritepolicyLbvserverbindingToHclTerraform(struct?: RewritepolicyLbvserverbinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindpoint: {
      value: cdktf.stringToHclTerraform(struct!.bindpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gotopriorityexpression: {
      value: cdktf.stringToHclTerraform(struct!.gotopriorityexpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invoke: {
      value: cdktf.booleanToHclTerraform(struct!.invoke),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labelname: {
      value: cdktf.stringToHclTerraform(struct!.labelname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labeltype: {
      value: cdktf.stringToHclTerraform(struct!.labeltype),
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

export class RewritepolicyLbvserverbindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RewritepolicyLbvserverbinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindpoint = this._bindpoint;
    }
    if (this._gotopriorityexpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.gotopriorityexpression = this._gotopriorityexpression;
    }
    if (this._invoke !== undefined) {
      hasAnyValues = true;
      internalValueResult.invoke = this._invoke;
    }
    if (this._labelname !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelname = this._labelname;
    }
    if (this._labeltype !== undefined) {
      hasAnyValues = true;
      internalValueResult.labeltype = this._labeltype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RewritepolicyLbvserverbinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindpoint = undefined;
      this._gotopriorityexpression = undefined;
      this._invoke = undefined;
      this._labelname = undefined;
      this._labeltype = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindpoint = value.bindpoint;
      this._gotopriorityexpression = value.gotopriorityexpression;
      this._invoke = value.invoke;
      this._labelname = value.labelname;
      this._labeltype = value.labeltype;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // bindpoint - computed: true, optional: true, required: false
  private _bindpoint?: string; 
  public get bindpoint() {
    return this.getStringAttribute('bindpoint');
  }
  public set bindpoint(value: string) {
    this._bindpoint = value;
  }
  public resetBindpoint() {
    this._bindpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpointInput() {
    return this._bindpoint;
  }

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
  }

  // invoke - computed: true, optional: true, required: false
  private _invoke?: boolean | cdktf.IResolvable; 
  public get invoke() {
    return this.getBooleanAttribute('invoke');
  }
  public set invoke(value: boolean | cdktf.IResolvable) {
    this._invoke = value;
  }
  public resetInvoke() {
    this._invoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeInput() {
    return this._invoke;
  }

  // labelname - computed: true, optional: true, required: false
  private _labelname?: string; 
  public get labelname() {
    return this.getStringAttribute('labelname');
  }
  public set labelname(value: string) {
    this._labelname = value;
  }
  public resetLabelname() {
    this._labelname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelnameInput() {
    return this._labelname;
  }

  // labeltype - computed: true, optional: true, required: false
  private _labeltype?: string; 
  public get labeltype() {
    return this.getStringAttribute('labeltype');
  }
  public set labeltype(value: string) {
    this._labeltype = value;
  }
  public resetLabeltype() {
    this._labeltype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labeltypeInput() {
    return this._labeltype;
  }

  // name - computed: true, optional: true, required: false
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

  // priority - computed: true, optional: true, required: false
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

export class RewritepolicyLbvserverbindingList extends cdktf.ComplexList {
  public internalValue? : RewritepolicyLbvserverbinding[] | cdktf.IResolvable

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
  public get(index: number): RewritepolicyLbvserverbindingOutputReference {
    return new RewritepolicyLbvserverbindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy citrixadc_rewritepolicy}
*/
export class Rewritepolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_rewritepolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rewritepolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rewritepolicy to import
  * @param importFromId The id of the existing Rewritepolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rewritepolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_rewritepolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/rewritepolicy citrixadc_rewritepolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RewritepolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RewritepolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_rewritepolicy',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._comment = config.comment;
    this._id = config.id;
    this._logaction = config.logaction;
    this._name = config.name;
    this._rule = config.rule;
    this._undefaction = config.undefaction;
    this._csvserverbinding.internalValue = config.csvserverbinding;
    this._globalbinding.internalValue = config.globalbinding;
    this._lbvserverbinding.internalValue = config.lbvserverbinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
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

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // logaction - computed: true, optional: true, required: false
  private _logaction?: string; 
  public get logaction() {
    return this.getStringAttribute('logaction');
  }
  public set logaction(value: string) {
    this._logaction = value;
  }
  public resetLogaction() {
    this._logaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logactionInput() {
    return this._logaction;
  }

  // name - computed: true, optional: true, required: false
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

  // rule - computed: true, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // undefaction - computed: true, optional: true, required: false
  private _undefaction?: string; 
  public get undefaction() {
    return this.getStringAttribute('undefaction');
  }
  public set undefaction(value: string) {
    this._undefaction = value;
  }
  public resetUndefaction() {
    this._undefaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefactionInput() {
    return this._undefaction;
  }

  // csvserverbinding - computed: false, optional: true, required: false
  private _csvserverbinding = new RewritepolicyCsvserverbindingList(this, "csvserverbinding", true);
  public get csvserverbinding() {
    return this._csvserverbinding;
  }
  public putCsvserverbinding(value: RewritepolicyCsvserverbinding[] | cdktf.IResolvable) {
    this._csvserverbinding.internalValue = value;
  }
  public resetCsvserverbinding() {
    this._csvserverbinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvserverbindingInput() {
    return this._csvserverbinding.internalValue;
  }

  // globalbinding - computed: false, optional: true, required: false
  private _globalbinding = new RewritepolicyGlobalbindingList(this, "globalbinding", true);
  public get globalbinding() {
    return this._globalbinding;
  }
  public putGlobalbinding(value: RewritepolicyGlobalbinding[] | cdktf.IResolvable) {
    this._globalbinding.internalValue = value;
  }
  public resetGlobalbinding() {
    this._globalbinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalbindingInput() {
    return this._globalbinding.internalValue;
  }

  // lbvserverbinding - computed: false, optional: true, required: false
  private _lbvserverbinding = new RewritepolicyLbvserverbindingList(this, "lbvserverbinding", true);
  public get lbvserverbinding() {
    return this._lbvserverbinding;
  }
  public putLbvserverbinding(value: RewritepolicyLbvserverbinding[] | cdktf.IResolvable) {
    this._lbvserverbinding.internalValue = value;
  }
  public resetLbvserverbinding() {
    this._lbvserverbinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbvserverbindingInput() {
    return this._lbvserverbinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      logaction: cdktf.stringToTerraform(this._logaction),
      name: cdktf.stringToTerraform(this._name),
      rule: cdktf.stringToTerraform(this._rule),
      undefaction: cdktf.stringToTerraform(this._undefaction),
      csvserverbinding: cdktf.listMapper(rewritepolicyCsvserverbindingToTerraform, true)(this._csvserverbinding.internalValue),
      globalbinding: cdktf.listMapper(rewritepolicyGlobalbindingToTerraform, true)(this._globalbinding.internalValue),
      lbvserverbinding: cdktf.listMapper(rewritepolicyLbvserverbindingToTerraform, true)(this._lbvserverbinding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      logaction: {
        value: cdktf.stringToHclTerraform(this._logaction),
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
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      undefaction: {
        value: cdktf.stringToHclTerraform(this._undefaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csvserverbinding: {
        value: cdktf.listMapperHcl(rewritepolicyCsvserverbindingToHclTerraform, true)(this._csvserverbinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RewritepolicyCsvserverbindingList",
      },
      globalbinding: {
        value: cdktf.listMapperHcl(rewritepolicyGlobalbindingToHclTerraform, true)(this._globalbinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RewritepolicyGlobalbindingList",
      },
      lbvserverbinding: {
        value: cdktf.listMapperHcl(rewritepolicyLbvserverbindingToHclTerraform, true)(this._lbvserverbinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RewritepolicyLbvserverbindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
