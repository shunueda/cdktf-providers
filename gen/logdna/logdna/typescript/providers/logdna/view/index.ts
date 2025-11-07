// https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#apps View#apps}
  */
  readonly apps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#categories View#categories}
  */
  readonly categories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#hosts View#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#id View#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#levels View#levels}
  */
  readonly levels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#name View#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#presetid View#presetid}
  */
  readonly presetid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#query View#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#tags View#tags}
  */
  readonly tags?: string[];
  /**
  * email_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#email_channel View#email_channel}
  */
  readonly emailChannel?: ViewEmailChannel[] | cdktf.IResolvable;
  /**
  * pagerduty_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#pagerduty_channel View#pagerduty_channel}
  */
  readonly pagerdutyChannel?: ViewPagerdutyChannel[] | cdktf.IResolvable;
  /**
  * slack_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#slack_channel View#slack_channel}
  */
  readonly slackChannel?: ViewSlackChannel[] | cdktf.IResolvable;
  /**
  * webhook_channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#webhook_channel View#webhook_channel}
  */
  readonly webhookChannel?: ViewWebhookChannel[] | cdktf.IResolvable;
}
export interface ViewEmailChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#emails View#emails}
  */
  readonly emails: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#immediate View#immediate}
  */
  readonly immediate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#operator View#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#terminal View#terminal}
  */
  readonly terminal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#timezone View#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#triggerinterval View#triggerinterval}
  */
  readonly triggerinterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#triggerlimit View#triggerlimit}
  */
  readonly triggerlimit: number;
}

export function viewEmailChannelToTerraform(struct?: ViewEmailChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
    immediate: cdktf.stringToTerraform(struct!.immediate),
    operator: cdktf.stringToTerraform(struct!.operator),
    terminal: cdktf.stringToTerraform(struct!.terminal),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    triggerinterval: cdktf.stringToTerraform(struct!.triggerinterval),
    triggerlimit: cdktf.numberToTerraform(struct!.triggerlimit),
  }
}


export function viewEmailChannelToHclTerraform(struct?: ViewEmailChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    immediate: {
      value: cdktf.stringToHclTerraform(struct!.immediate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terminal: {
      value: cdktf.stringToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggerinterval: {
      value: cdktf.stringToHclTerraform(struct!.triggerinterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggerlimit: {
      value: cdktf.numberToHclTerraform(struct!.triggerlimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewEmailChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViewEmailChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    if (this._immediate !== undefined) {
      hasAnyValues = true;
      internalValueResult.immediate = this._immediate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._triggerinterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerinterval = this._triggerinterval;
    }
    if (this._triggerlimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerlimit = this._triggerlimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewEmailChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emails = undefined;
      this._immediate = undefined;
      this._operator = undefined;
      this._terminal = undefined;
      this._timezone = undefined;
      this._triggerinterval = undefined;
      this._triggerlimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emails = value.emails;
      this._immediate = value.immediate;
      this._operator = value.operator;
      this._terminal = value.terminal;
      this._timezone = value.timezone;
      this._triggerinterval = value.triggerinterval;
      this._triggerlimit = value.triggerlimit;
    }
  }

  // emails - computed: false, optional: false, required: true
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // immediate - computed: false, optional: true, required: false
  private _immediate?: string; 
  public get immediate() {
    return this.getStringAttribute('immediate');
  }
  public set immediate(value: string) {
    this._immediate = value;
  }
  public resetImmediate() {
    this._immediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateInput() {
    return this._immediate;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: string; 
  public get terminal() {
    return this.getStringAttribute('terminal');
  }
  public set terminal(value: string) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // triggerinterval - computed: false, optional: true, required: false
  private _triggerinterval?: string; 
  public get triggerinterval() {
    return this.getStringAttribute('triggerinterval');
  }
  public set triggerinterval(value: string) {
    this._triggerinterval = value;
  }
  public resetTriggerinterval() {
    this._triggerinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerintervalInput() {
    return this._triggerinterval;
  }

  // triggerlimit - computed: false, optional: false, required: true
  private _triggerlimit?: number; 
  public get triggerlimit() {
    return this.getNumberAttribute('triggerlimit');
  }
  public set triggerlimit(value: number) {
    this._triggerlimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerlimitInput() {
    return this._triggerlimit;
  }
}

export class ViewEmailChannelList extends cdktf.ComplexList {
  public internalValue? : ViewEmailChannel[] | cdktf.IResolvable

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
  public get(index: number): ViewEmailChannelOutputReference {
    return new ViewEmailChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViewPagerdutyChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#autoresolve View#autoresolve}
  */
  readonly autoresolve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#autoresolveinterval View#autoresolveinterval}
  */
  readonly autoresolveinterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#autoresolvelimit View#autoresolvelimit}
  */
  readonly autoresolvelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#immediate View#immediate}
  */
  readonly immediate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#key View#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#operator View#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#terminal View#terminal}
  */
  readonly terminal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#triggerinterval View#triggerinterval}
  */
  readonly triggerinterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#triggerlimit View#triggerlimit}
  */
  readonly triggerlimit: number;
}

export function viewPagerdutyChannelToTerraform(struct?: ViewPagerdutyChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoresolve: cdktf.booleanToTerraform(struct!.autoresolve),
    autoresolveinterval: cdktf.stringToTerraform(struct!.autoresolveinterval),
    autoresolvelimit: cdktf.numberToTerraform(struct!.autoresolvelimit),
    immediate: cdktf.stringToTerraform(struct!.immediate),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    terminal: cdktf.stringToTerraform(struct!.terminal),
    triggerinterval: cdktf.stringToTerraform(struct!.triggerinterval),
    triggerlimit: cdktf.numberToTerraform(struct!.triggerlimit),
  }
}


export function viewPagerdutyChannelToHclTerraform(struct?: ViewPagerdutyChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoresolve: {
      value: cdktf.booleanToHclTerraform(struct!.autoresolve),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoresolveinterval: {
      value: cdktf.stringToHclTerraform(struct!.autoresolveinterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoresolvelimit: {
      value: cdktf.numberToHclTerraform(struct!.autoresolvelimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    immediate: {
      value: cdktf.stringToHclTerraform(struct!.immediate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terminal: {
      value: cdktf.stringToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggerinterval: {
      value: cdktf.stringToHclTerraform(struct!.triggerinterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggerlimit: {
      value: cdktf.numberToHclTerraform(struct!.triggerlimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewPagerdutyChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViewPagerdutyChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoresolve !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoresolve = this._autoresolve;
    }
    if (this._autoresolveinterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoresolveinterval = this._autoresolveinterval;
    }
    if (this._autoresolvelimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoresolvelimit = this._autoresolvelimit;
    }
    if (this._immediate !== undefined) {
      hasAnyValues = true;
      internalValueResult.immediate = this._immediate;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._triggerinterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerinterval = this._triggerinterval;
    }
    if (this._triggerlimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerlimit = this._triggerlimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewPagerdutyChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoresolve = undefined;
      this._autoresolveinterval = undefined;
      this._autoresolvelimit = undefined;
      this._immediate = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._terminal = undefined;
      this._triggerinterval = undefined;
      this._triggerlimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoresolve = value.autoresolve;
      this._autoresolveinterval = value.autoresolveinterval;
      this._autoresolvelimit = value.autoresolvelimit;
      this._immediate = value.immediate;
      this._key = value.key;
      this._operator = value.operator;
      this._terminal = value.terminal;
      this._triggerinterval = value.triggerinterval;
      this._triggerlimit = value.triggerlimit;
    }
  }

  // autoresolve - computed: false, optional: true, required: false
  private _autoresolve?: boolean | cdktf.IResolvable; 
  public get autoresolve() {
    return this.getBooleanAttribute('autoresolve');
  }
  public set autoresolve(value: boolean | cdktf.IResolvable) {
    this._autoresolve = value;
  }
  public resetAutoresolve() {
    this._autoresolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoresolveInput() {
    return this._autoresolve;
  }

  // autoresolveinterval - computed: false, optional: true, required: false
  private _autoresolveinterval?: string; 
  public get autoresolveinterval() {
    return this.getStringAttribute('autoresolveinterval');
  }
  public set autoresolveinterval(value: string) {
    this._autoresolveinterval = value;
  }
  public resetAutoresolveinterval() {
    this._autoresolveinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoresolveintervalInput() {
    return this._autoresolveinterval;
  }

  // autoresolvelimit - computed: false, optional: true, required: false
  private _autoresolvelimit?: number; 
  public get autoresolvelimit() {
    return this.getNumberAttribute('autoresolvelimit');
  }
  public set autoresolvelimit(value: number) {
    this._autoresolvelimit = value;
  }
  public resetAutoresolvelimit() {
    this._autoresolvelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoresolvelimitInput() {
    return this._autoresolvelimit;
  }

  // immediate - computed: false, optional: true, required: false
  private _immediate?: string; 
  public get immediate() {
    return this.getStringAttribute('immediate');
  }
  public set immediate(value: string) {
    this._immediate = value;
  }
  public resetImmediate() {
    this._immediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateInput() {
    return this._immediate;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: string; 
  public get terminal() {
    return this.getStringAttribute('terminal');
  }
  public set terminal(value: string) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // triggerinterval - computed: false, optional: true, required: false
  private _triggerinterval?: string; 
  public get triggerinterval() {
    return this.getStringAttribute('triggerinterval');
  }
  public set triggerinterval(value: string) {
    this._triggerinterval = value;
  }
  public resetTriggerinterval() {
    this._triggerinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerintervalInput() {
    return this._triggerinterval;
  }

  // triggerlimit - computed: false, optional: false, required: true
  private _triggerlimit?: number; 
  public get triggerlimit() {
    return this.getNumberAttribute('triggerlimit');
  }
  public set triggerlimit(value: number) {
    this._triggerlimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerlimitInput() {
    return this._triggerlimit;
  }
}

export class ViewPagerdutyChannelList extends cdktf.ComplexList {
  public internalValue? : ViewPagerdutyChannel[] | cdktf.IResolvable

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
  public get(index: number): ViewPagerdutyChannelOutputReference {
    return new ViewPagerdutyChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViewSlackChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#immediate View#immediate}
  */
  readonly immediate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#operator View#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#terminal View#terminal}
  */
  readonly terminal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#triggerinterval View#triggerinterval}
  */
  readonly triggerinterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#triggerlimit View#triggerlimit}
  */
  readonly triggerlimit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#url View#url}
  */
  readonly url: string;
}

export function viewSlackChannelToTerraform(struct?: ViewSlackChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immediate: cdktf.stringToTerraform(struct!.immediate),
    operator: cdktf.stringToTerraform(struct!.operator),
    terminal: cdktf.stringToTerraform(struct!.terminal),
    triggerinterval: cdktf.stringToTerraform(struct!.triggerinterval),
    triggerlimit: cdktf.numberToTerraform(struct!.triggerlimit),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function viewSlackChannelToHclTerraform(struct?: ViewSlackChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    immediate: {
      value: cdktf.stringToHclTerraform(struct!.immediate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terminal: {
      value: cdktf.stringToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggerinterval: {
      value: cdktf.stringToHclTerraform(struct!.triggerinterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggerlimit: {
      value: cdktf.numberToHclTerraform(struct!.triggerlimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewSlackChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViewSlackChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immediate !== undefined) {
      hasAnyValues = true;
      internalValueResult.immediate = this._immediate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._triggerinterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerinterval = this._triggerinterval;
    }
    if (this._triggerlimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerlimit = this._triggerlimit;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewSlackChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._immediate = undefined;
      this._operator = undefined;
      this._terminal = undefined;
      this._triggerinterval = undefined;
      this._triggerlimit = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._immediate = value.immediate;
      this._operator = value.operator;
      this._terminal = value.terminal;
      this._triggerinterval = value.triggerinterval;
      this._triggerlimit = value.triggerlimit;
      this._url = value.url;
    }
  }

  // immediate - computed: false, optional: true, required: false
  private _immediate?: string; 
  public get immediate() {
    return this.getStringAttribute('immediate');
  }
  public set immediate(value: string) {
    this._immediate = value;
  }
  public resetImmediate() {
    this._immediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateInput() {
    return this._immediate;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: string; 
  public get terminal() {
    return this.getStringAttribute('terminal');
  }
  public set terminal(value: string) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // triggerinterval - computed: false, optional: true, required: false
  private _triggerinterval?: string; 
  public get triggerinterval() {
    return this.getStringAttribute('triggerinterval');
  }
  public set triggerinterval(value: string) {
    this._triggerinterval = value;
  }
  public resetTriggerinterval() {
    this._triggerinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerintervalInput() {
    return this._triggerinterval;
  }

  // triggerlimit - computed: false, optional: false, required: true
  private _triggerlimit?: number; 
  public get triggerlimit() {
    return this.getNumberAttribute('triggerlimit');
  }
  public set triggerlimit(value: number) {
    this._triggerlimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerlimitInput() {
    return this._triggerlimit;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ViewSlackChannelList extends cdktf.ComplexList {
  public internalValue? : ViewSlackChannel[] | cdktf.IResolvable

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
  public get(index: number): ViewSlackChannelOutputReference {
    return new ViewSlackChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViewWebhookChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#bodytemplate View#bodytemplate}
  */
  readonly bodytemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#headers View#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#immediate View#immediate}
  */
  readonly immediate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#method View#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#operator View#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#terminal View#terminal}
  */
  readonly terminal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#triggerinterval View#triggerinterval}
  */
  readonly triggerinterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#triggerlimit View#triggerlimit}
  */
  readonly triggerlimit: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#url View#url}
  */
  readonly url: string;
}

export function viewWebhookChannelToTerraform(struct?: ViewWebhookChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bodytemplate: cdktf.stringToTerraform(struct!.bodytemplate),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    immediate: cdktf.stringToTerraform(struct!.immediate),
    method: cdktf.stringToTerraform(struct!.method),
    operator: cdktf.stringToTerraform(struct!.operator),
    terminal: cdktf.stringToTerraform(struct!.terminal),
    triggerinterval: cdktf.stringToTerraform(struct!.triggerinterval),
    triggerlimit: cdktf.numberToTerraform(struct!.triggerlimit),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function viewWebhookChannelToHclTerraform(struct?: ViewWebhookChannel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bodytemplate: {
      value: cdktf.stringToHclTerraform(struct!.bodytemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    immediate: {
      value: cdktf.stringToHclTerraform(struct!.immediate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terminal: {
      value: cdktf.stringToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggerinterval: {
      value: cdktf.stringToHclTerraform(struct!.triggerinterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggerlimit: {
      value: cdktf.numberToHclTerraform(struct!.triggerlimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewWebhookChannelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViewWebhookChannel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodytemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodytemplate = this._bodytemplate;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._immediate !== undefined) {
      hasAnyValues = true;
      internalValueResult.immediate = this._immediate;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._triggerinterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerinterval = this._triggerinterval;
    }
    if (this._triggerlimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerlimit = this._triggerlimit;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewWebhookChannel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bodytemplate = undefined;
      this._headers = undefined;
      this._immediate = undefined;
      this._method = undefined;
      this._operator = undefined;
      this._terminal = undefined;
      this._triggerinterval = undefined;
      this._triggerlimit = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bodytemplate = value.bodytemplate;
      this._headers = value.headers;
      this._immediate = value.immediate;
      this._method = value.method;
      this._operator = value.operator;
      this._terminal = value.terminal;
      this._triggerinterval = value.triggerinterval;
      this._triggerlimit = value.triggerlimit;
      this._url = value.url;
    }
  }

  // bodytemplate - computed: false, optional: true, required: false
  private _bodytemplate?: string; 
  public get bodytemplate() {
    return this.getStringAttribute('bodytemplate');
  }
  public set bodytemplate(value: string) {
    this._bodytemplate = value;
  }
  public resetBodytemplate() {
    this._bodytemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodytemplateInput() {
    return this._bodytemplate;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // immediate - computed: false, optional: true, required: false
  private _immediate?: string; 
  public get immediate() {
    return this.getStringAttribute('immediate');
  }
  public set immediate(value: string) {
    this._immediate = value;
  }
  public resetImmediate() {
    this._immediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateInput() {
    return this._immediate;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: string; 
  public get terminal() {
    return this.getStringAttribute('terminal');
  }
  public set terminal(value: string) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // triggerinterval - computed: false, optional: true, required: false
  private _triggerinterval?: string; 
  public get triggerinterval() {
    return this.getStringAttribute('triggerinterval');
  }
  public set triggerinterval(value: string) {
    this._triggerinterval = value;
  }
  public resetTriggerinterval() {
    this._triggerinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerintervalInput() {
    return this._triggerinterval;
  }

  // triggerlimit - computed: false, optional: false, required: true
  private _triggerlimit?: number; 
  public get triggerlimit() {
    return this.getNumberAttribute('triggerlimit');
  }
  public set triggerlimit(value: number) {
    this._triggerlimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerlimitInput() {
    return this._triggerlimit;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ViewWebhookChannelList extends cdktf.ComplexList {
  public internalValue? : ViewWebhookChannel[] | cdktf.IResolvable

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
  public get(index: number): ViewWebhookChannelOutputReference {
    return new ViewWebhookChannelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view logdna_view}
*/
export class View extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logdna_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a View resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the View to import
  * @param importFromId The id of the existing View that should be imported. Refer to the {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the View to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logdna_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/view logdna_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ViewConfig
  */
  public constructor(scope: Construct, id: string, config: ViewConfig) {
    super(scope, id, {
      terraformResourceType: 'logdna_view',
      terraformGeneratorMetadata: {
        providerName: 'logdna',
        providerVersion: '1.17.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apps = config.apps;
    this._categories = config.categories;
    this._hosts = config.hosts;
    this._id = config.id;
    this._levels = config.levels;
    this._name = config.name;
    this._presetid = config.presetid;
    this._query = config.query;
    this._tags = config.tags;
    this._emailChannel.internalValue = config.emailChannel;
    this._pagerdutyChannel.internalValue = config.pagerdutyChannel;
    this._slackChannel.internalValue = config.slackChannel;
    this._webhookChannel.internalValue = config.webhookChannel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apps - computed: false, optional: true, required: false
  private _apps?: string[]; 
  public get apps() {
    return this.getListAttribute('apps');
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  public resetApps() {
    this._apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // levels - computed: false, optional: true, required: false
  private _levels?: string[]; 
  public get levels() {
    return this.getListAttribute('levels');
  }
  public set levels(value: string[]) {
    this._levels = value;
  }
  public resetLevels() {
    this._levels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelsInput() {
    return this._levels;
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

  // presetid - computed: false, optional: true, required: false
  private _presetid?: string; 
  public get presetid() {
    return this.getStringAttribute('presetid');
  }
  public set presetid(value: string) {
    this._presetid = value;
  }
  public resetPresetid() {
    this._presetid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetidInput() {
    return this._presetid;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // email_channel - computed: false, optional: true, required: false
  private _emailChannel = new ViewEmailChannelList(this, "email_channel", false);
  public get emailChannel() {
    return this._emailChannel;
  }
  public putEmailChannel(value: ViewEmailChannel[] | cdktf.IResolvable) {
    this._emailChannel.internalValue = value;
  }
  public resetEmailChannel() {
    this._emailChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailChannelInput() {
    return this._emailChannel.internalValue;
  }

  // pagerduty_channel - computed: false, optional: true, required: false
  private _pagerdutyChannel = new ViewPagerdutyChannelList(this, "pagerduty_channel", false);
  public get pagerdutyChannel() {
    return this._pagerdutyChannel;
  }
  public putPagerdutyChannel(value: ViewPagerdutyChannel[] | cdktf.IResolvable) {
    this._pagerdutyChannel.internalValue = value;
  }
  public resetPagerdutyChannel() {
    this._pagerdutyChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyChannelInput() {
    return this._pagerdutyChannel.internalValue;
  }

  // slack_channel - computed: false, optional: true, required: false
  private _slackChannel = new ViewSlackChannelList(this, "slack_channel", false);
  public get slackChannel() {
    return this._slackChannel;
  }
  public putSlackChannel(value: ViewSlackChannel[] | cdktf.IResolvable) {
    this._slackChannel.internalValue = value;
  }
  public resetSlackChannel() {
    this._slackChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackChannelInput() {
    return this._slackChannel.internalValue;
  }

  // webhook_channel - computed: false, optional: true, required: false
  private _webhookChannel = new ViewWebhookChannelList(this, "webhook_channel", false);
  public get webhookChannel() {
    return this._webhookChannel;
  }
  public putWebhookChannel(value: ViewWebhookChannel[] | cdktf.IResolvable) {
    this._webhookChannel.internalValue = value;
  }
  public resetWebhookChannel() {
    this._webhookChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookChannelInput() {
    return this._webhookChannel.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apps),
      categories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categories),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      id: cdktf.stringToTerraform(this._id),
      levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._levels),
      name: cdktf.stringToTerraform(this._name),
      presetid: cdktf.stringToTerraform(this._presetid),
      query: cdktf.stringToTerraform(this._query),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      email_channel: cdktf.listMapper(viewEmailChannelToTerraform, true)(this._emailChannel.internalValue),
      pagerduty_channel: cdktf.listMapper(viewPagerdutyChannelToTerraform, true)(this._pagerdutyChannel.internalValue),
      slack_channel: cdktf.listMapper(viewSlackChannelToTerraform, true)(this._slackChannel.internalValue),
      webhook_channel: cdktf.listMapper(viewWebhookChannelToTerraform, true)(this._webhookChannel.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      categories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._levels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      presetid: {
        value: cdktf.stringToHclTerraform(this._presetid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      email_channel: {
        value: cdktf.listMapperHcl(viewEmailChannelToHclTerraform, true)(this._emailChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ViewEmailChannelList",
      },
      pagerduty_channel: {
        value: cdktf.listMapperHcl(viewPagerdutyChannelToHclTerraform, true)(this._pagerdutyChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ViewPagerdutyChannelList",
      },
      slack_channel: {
        value: cdktf.listMapperHcl(viewSlackChannelToHclTerraform, true)(this._slackChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ViewSlackChannelList",
      },
      webhook_channel: {
        value: cdktf.listMapperHcl(viewWebhookChannelToHclTerraform, true)(this._webhookChannel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ViewWebhookChannelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
