// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementAccessRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * "Accept", "Drop", "Ask", "Inform", "Reject", "User Auth", "Client Auth", "Apply Layer".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#action ManagementAccessRule#action}
  */
  readonly action?: string;
  /**
  * Action settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#action_settings ManagementAccessRule#action_settings}
  */
  readonly actionSettings?: { [key: string]: string };
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#comments ManagementAccessRule#comments}
  */
  readonly comments?: string;
  /**
  * List of processed file types that this rule applies on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#content ManagementAccessRule#content}
  */
  readonly content?: string[];
  /**
  * On which direction the file types processing is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#content_direction ManagementAccessRule#content_direction}
  */
  readonly contentDirection?: string;
  /**
  * True if negate is set for data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#content_negate ManagementAccessRule#content_negate}
  */
  readonly contentNegate?: boolean | cdktf.IResolvable;
  /**
  * Custom fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#custom_fields ManagementAccessRule#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Collection of Network objects identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#destination ManagementAccessRule#destination}
  */
  readonly destination?: string[];
  /**
  * True if negate is set for destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#destination_negate ManagementAccessRule#destination_negate}
  */
  readonly destinationNegate?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#enabled ManagementAccessRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of resource fields that will use object UIDs as object identifiers. Default is object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#fields_with_uid_identifier ManagementAccessRule#fields_with_uid_identifier}
  */
  readonly fieldsWithUidIdentifier?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#id ManagementAccessRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#ignore_errors ManagementAccessRule#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#ignore_warnings ManagementAccessRule#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Inline Layer identified by the name or UID. Relevant only if "Action" was set to "Apply Layer".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#inline_layer ManagementAccessRule#inline_layer}
  */
  readonly inlineLayer?: string;
  /**
  * Which Gateways identified by the name or UID to install the policy on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#install_on ManagementAccessRule#install_on}
  */
  readonly installOn?: string[];
  /**
  * Layer that the rule belongs to identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#layer ManagementAccessRule#layer}
  */
  readonly layer: string;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#name ManagementAccessRule#name}
  */
  readonly name?: string;
  /**
  * Position in the rulebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#position ManagementAccessRule#position}
  */
  readonly position: { [key: string]: string };
  /**
  * Collection of Network objects identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#service ManagementAccessRule#service}
  */
  readonly service?: string[];
  /**
  * True if negate is set for service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#service_negate ManagementAccessRule#service_negate}
  */
  readonly serviceNegate?: boolean | cdktf.IResolvable;
  /**
  * Collection of Network objects identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#source ManagementAccessRule#source}
  */
  readonly source?: string[];
  /**
  * True if negate is set for source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#source_negate ManagementAccessRule#source_negate}
  */
  readonly sourceNegate?: boolean | cdktf.IResolvable;
  /**
  * List of time objects. For example: "Weekend", "Off-Work", "Every-Day".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#time ManagementAccessRule#time}
  */
  readonly time?: string[];
  /**
  * Track Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#track ManagementAccessRule#track}
  */
  readonly track?: { [key: string]: string };
  /**
  * Valid values "Any", "All_GwToGw" or VPN community name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#vpn ManagementAccessRule#vpn}
  */
  readonly vpn?: string;
  /**
  * Collection of VPN communities identified by name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#vpn_communities ManagementAccessRule#vpn_communities}
  */
  readonly vpnCommunities?: string[];
  /**
  * user_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#user_check ManagementAccessRule#user_check}
  */
  readonly userCheck?: ManagementAccessRuleUserCheck;
  /**
  * vpn_directional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#vpn_directional ManagementAccessRule#vpn_directional}
  */
  readonly vpnDirectional?: ManagementAccessRuleVpnDirectional[] | cdktf.IResolvable;
}
export interface ManagementAccessRuleUserCheckCustomFrequency {
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#every ManagementAccessRule#every}
  */
  readonly every?: number;
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#unit ManagementAccessRule#unit}
  */
  readonly unit?: string;
}

export function managementAccessRuleUserCheckCustomFrequencyToTerraform(struct?: ManagementAccessRuleUserCheckCustomFrequencyOutputReference | ManagementAccessRuleUserCheckCustomFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    every: cdktf.numberToTerraform(struct!.every),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function managementAccessRuleUserCheckCustomFrequencyToHclTerraform(struct?: ManagementAccessRuleUserCheckCustomFrequencyOutputReference | ManagementAccessRuleUserCheckCustomFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessRuleUserCheckCustomFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementAccessRuleUserCheckCustomFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessRuleUserCheckCustomFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._every = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._every = value.every;
      this._unit = value.unit;
    }
  }

  // every - computed: false, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface ManagementAccessRuleUserCheck {
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#confirm ManagementAccessRule#confirm}
  */
  readonly confirm?: string;
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#frequency ManagementAccessRule#frequency}
  */
  readonly frequency?: string;
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#interaction ManagementAccessRule#interaction}
  */
  readonly interaction?: string;
  /**
  * custom_frequency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#custom_frequency ManagementAccessRule#custom_frequency}
  */
  readonly customFrequency?: ManagementAccessRuleUserCheckCustomFrequency;
}

export function managementAccessRuleUserCheckToTerraform(struct?: ManagementAccessRuleUserCheckOutputReference | ManagementAccessRuleUserCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirm: cdktf.stringToTerraform(struct!.confirm),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    interaction: cdktf.stringToTerraform(struct!.interaction),
    custom_frequency: managementAccessRuleUserCheckCustomFrequencyToTerraform(struct!.customFrequency),
  }
}


export function managementAccessRuleUserCheckToHclTerraform(struct?: ManagementAccessRuleUserCheckOutputReference | ManagementAccessRuleUserCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confirm: {
      value: cdktf.stringToHclTerraform(struct!.confirm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interaction: {
      value: cdktf.stringToHclTerraform(struct!.interaction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_frequency: {
      value: managementAccessRuleUserCheckCustomFrequencyToHclTerraform(struct!.customFrequency),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementAccessRuleUserCheckCustomFrequencyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessRuleUserCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementAccessRuleUserCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirm = this._confirm;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._interaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.interaction = this._interaction;
    }
    if (this._customFrequency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFrequency = this._customFrequency?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessRuleUserCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confirm = undefined;
      this._frequency = undefined;
      this._interaction = undefined;
      this._customFrequency.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confirm = value.confirm;
      this._frequency = value.frequency;
      this._interaction = value.interaction;
      this._customFrequency.internalValue = value.customFrequency;
    }
  }

  // confirm - computed: false, optional: true, required: false
  private _confirm?: string; 
  public get confirm() {
    return this.getStringAttribute('confirm');
  }
  public set confirm(value: string) {
    this._confirm = value;
  }
  public resetConfirm() {
    this._confirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmInput() {
    return this._confirm;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // interaction - computed: false, optional: true, required: false
  private _interaction?: string; 
  public get interaction() {
    return this.getStringAttribute('interaction');
  }
  public set interaction(value: string) {
    this._interaction = value;
  }
  public resetInteraction() {
    this._interaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactionInput() {
    return this._interaction;
  }

  // custom_frequency - computed: false, optional: true, required: false
  private _customFrequency = new ManagementAccessRuleUserCheckCustomFrequencyOutputReference(this, "custom_frequency");
  public get customFrequency() {
    return this._customFrequency;
  }
  public putCustomFrequency(value: ManagementAccessRuleUserCheckCustomFrequency) {
    this._customFrequency.internalValue = value;
  }
  public resetCustomFrequency() {
    this._customFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFrequencyInput() {
    return this._customFrequency.internalValue;
  }
}
export interface ManagementAccessRuleVpnDirectional {
  /**
  * From VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#from ManagementAccessRule#from}
  */
  readonly from?: string;
  /**
  * To VPN community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#to ManagementAccessRule#to}
  */
  readonly to?: string;
}

export function managementAccessRuleVpnDirectionalToTerraform(struct?: ManagementAccessRuleVpnDirectional | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function managementAccessRuleVpnDirectionalToHclTerraform(struct?: ManagementAccessRuleVpnDirectional | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessRuleVpnDirectionalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessRuleVpnDirectional | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessRuleVpnDirectional | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class ManagementAccessRuleVpnDirectionalList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessRuleVpnDirectional[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessRuleVpnDirectionalOutputReference {
    return new ManagementAccessRuleVpnDirectionalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule checkpoint_management_access_rule}
*/
export class ManagementAccessRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementAccessRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementAccessRule to import
  * @param importFromId The id of the existing ManagementAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_rule checkpoint_management_access_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementAccessRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementAccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._actionSettings = config.actionSettings;
    this._comments = config.comments;
    this._content = config.content;
    this._contentDirection = config.contentDirection;
    this._contentNegate = config.contentNegate;
    this._customFields = config.customFields;
    this._destination = config.destination;
    this._destinationNegate = config.destinationNegate;
    this._enabled = config.enabled;
    this._fieldsWithUidIdentifier = config.fieldsWithUidIdentifier;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._inlineLayer = config.inlineLayer;
    this._installOn = config.installOn;
    this._layer = config.layer;
    this._name = config.name;
    this._position = config.position;
    this._service = config.service;
    this._serviceNegate = config.serviceNegate;
    this._source = config.source;
    this._sourceNegate = config.sourceNegate;
    this._time = config.time;
    this._track = config.track;
    this._vpn = config.vpn;
    this._vpnCommunities = config.vpnCommunities;
    this._userCheck.internalValue = config.userCheck;
    this._vpnDirectional.internalValue = config.vpnDirectional;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // action_settings - computed: false, optional: true, required: false
  private _actionSettings?: { [key: string]: string }; 
  public get actionSettings() {
    return this.getStringMapAttribute('action_settings');
  }
  public set actionSettings(value: { [key: string]: string }) {
    this._actionSettings = value;
  }
  public resetActionSettings() {
    this._actionSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSettingsInput() {
    return this._actionSettings;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string[]; 
  public get content() {
    return cdktf.Fn.tolist(this.getListAttribute('content'));
  }
  public set content(value: string[]) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_direction - computed: false, optional: true, required: false
  private _contentDirection?: string; 
  public get contentDirection() {
    return this.getStringAttribute('content_direction');
  }
  public set contentDirection(value: string) {
    this._contentDirection = value;
  }
  public resetContentDirection() {
    this._contentDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDirectionInput() {
    return this._contentDirection;
  }

  // content_negate - computed: false, optional: true, required: false
  private _contentNegate?: boolean | cdktf.IResolvable; 
  public get contentNegate() {
    return this.getBooleanAttribute('content_negate');
  }
  public set contentNegate(value: boolean | cdktf.IResolvable) {
    this._contentNegate = value;
  }
  public resetContentNegate() {
    this._contentNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentNegateInput() {
    return this._contentNegate;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string[]; 
  public get destination() {
    return cdktf.Fn.tolist(this.getListAttribute('destination'));
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_negate - computed: false, optional: true, required: false
  private _destinationNegate?: boolean | cdktf.IResolvable; 
  public get destinationNegate() {
    return this.getBooleanAttribute('destination_negate');
  }
  public set destinationNegate(value: boolean | cdktf.IResolvable) {
    this._destinationNegate = value;
  }
  public resetDestinationNegate() {
    this._destinationNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNegateInput() {
    return this._destinationNegate;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fields_with_uid_identifier - computed: false, optional: true, required: false
  private _fieldsWithUidIdentifier?: string[]; 
  public get fieldsWithUidIdentifier() {
    return cdktf.Fn.tolist(this.getListAttribute('fields_with_uid_identifier'));
  }
  public set fieldsWithUidIdentifier(value: string[]) {
    this._fieldsWithUidIdentifier = value;
  }
  public resetFieldsWithUidIdentifier() {
    this._fieldsWithUidIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsWithUidIdentifierInput() {
    return this._fieldsWithUidIdentifier;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // inline_layer - computed: false, optional: true, required: false
  private _inlineLayer?: string; 
  public get inlineLayer() {
    return this.getStringAttribute('inline_layer');
  }
  public set inlineLayer(value: string) {
    this._inlineLayer = value;
  }
  public resetInlineLayer() {
    this._inlineLayer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineLayerInput() {
    return this._inlineLayer;
  }

  // install_on - computed: false, optional: true, required: false
  private _installOn?: string[]; 
  public get installOn() {
    return cdktf.Fn.tolist(this.getListAttribute('install_on'));
  }
  public set installOn(value: string[]) {
    this._installOn = value;
  }
  public resetInstallOn() {
    this._installOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installOnInput() {
    return this._installOn;
  }

  // layer - computed: false, optional: false, required: true
  private _layer?: string; 
  public get layer() {
    return this.getStringAttribute('layer');
  }
  public set layer(value: string) {
    this._layer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layerInput() {
    return this._layer;
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

  // position - computed: false, optional: false, required: true
  private _position?: { [key: string]: string }; 
  public get position() {
    return this.getStringMapAttribute('position');
  }
  public set position(value: { [key: string]: string }) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_negate - computed: false, optional: true, required: false
  private _serviceNegate?: boolean | cdktf.IResolvable; 
  public get serviceNegate() {
    return this.getBooleanAttribute('service_negate');
  }
  public set serviceNegate(value: boolean | cdktf.IResolvable) {
    this._serviceNegate = value;
  }
  public resetServiceNegate() {
    this._serviceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNegateInput() {
    return this._serviceNegate;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string[]; 
  public get source() {
    return cdktf.Fn.tolist(this.getListAttribute('source'));
  }
  public set source(value: string[]) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_negate - computed: false, optional: true, required: false
  private _sourceNegate?: boolean | cdktf.IResolvable; 
  public get sourceNegate() {
    return this.getBooleanAttribute('source_negate');
  }
  public set sourceNegate(value: boolean | cdktf.IResolvable) {
    this._sourceNegate = value;
  }
  public resetSourceNegate() {
    this._sourceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNegateInput() {
    return this._sourceNegate;
  }

  // time - computed: false, optional: true, required: false
  private _time?: string[]; 
  public get time() {
    return cdktf.Fn.tolist(this.getListAttribute('time'));
  }
  public set time(value: string[]) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // track - computed: false, optional: true, required: false
  private _track?: { [key: string]: string }; 
  public get track() {
    return this.getStringMapAttribute('track');
  }
  public set track(value: { [key: string]: string }) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: string; 
  public get vpn() {
    return this.getStringAttribute('vpn');
  }
  public set vpn(value: string) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }

  // vpn_communities - computed: false, optional: true, required: false
  private _vpnCommunities?: string[]; 
  public get vpnCommunities() {
    return cdktf.Fn.tolist(this.getListAttribute('vpn_communities'));
  }
  public set vpnCommunities(value: string[]) {
    this._vpnCommunities = value;
  }
  public resetVpnCommunities() {
    this._vpnCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnCommunitiesInput() {
    return this._vpnCommunities;
  }

  // user_check - computed: false, optional: true, required: false
  private _userCheck = new ManagementAccessRuleUserCheckOutputReference(this, "user_check");
  public get userCheck() {
    return this._userCheck;
  }
  public putUserCheck(value: ManagementAccessRuleUserCheck) {
    this._userCheck.internalValue = value;
  }
  public resetUserCheck() {
    this._userCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCheckInput() {
    return this._userCheck.internalValue;
  }

  // vpn_directional - computed: false, optional: true, required: false
  private _vpnDirectional = new ManagementAccessRuleVpnDirectionalList(this, "vpn_directional", false);
  public get vpnDirectional() {
    return this._vpnDirectional;
  }
  public putVpnDirectional(value: ManagementAccessRuleVpnDirectional[] | cdktf.IResolvable) {
    this._vpnDirectional.internalValue = value;
  }
  public resetVpnDirectional() {
    this._vpnDirectional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnDirectionalInput() {
    return this._vpnDirectional.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      action_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._actionSettings),
      comments: cdktf.stringToTerraform(this._comments),
      content: cdktf.listMapper(cdktf.stringToTerraform, false)(this._content),
      content_direction: cdktf.stringToTerraform(this._contentDirection),
      content_negate: cdktf.booleanToTerraform(this._contentNegate),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      destination_negate: cdktf.booleanToTerraform(this._destinationNegate),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fields_with_uid_identifier: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fieldsWithUidIdentifier),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      inline_layer: cdktf.stringToTerraform(this._inlineLayer),
      install_on: cdktf.listMapper(cdktf.stringToTerraform, false)(this._installOn),
      layer: cdktf.stringToTerraform(this._layer),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.hashMapper(cdktf.stringToTerraform)(this._position),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      service_negate: cdktf.booleanToTerraform(this._serviceNegate),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      source_negate: cdktf.booleanToTerraform(this._sourceNegate),
      time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._time),
      track: cdktf.hashMapper(cdktf.stringToTerraform)(this._track),
      vpn: cdktf.stringToTerraform(this._vpn),
      vpn_communities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpnCommunities),
      user_check: managementAccessRuleUserCheckToTerraform(this._userCheck.internalValue),
      vpn_directional: cdktf.listMapper(managementAccessRuleVpnDirectionalToTerraform, true)(this._vpnDirectional.internalValue),
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
      action_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._actionSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._content),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      content_direction: {
        value: cdktf.stringToHclTerraform(this._contentDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_negate: {
        value: cdktf.booleanToHclTerraform(this._contentNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      destination: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destination),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      destination_negate: {
        value: cdktf.booleanToHclTerraform(this._destinationNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fields_with_uid_identifier: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fieldsWithUidIdentifier),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inline_layer: {
        value: cdktf.stringToHclTerraform(this._inlineLayer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      install_on: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._installOn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      layer: {
        value: cdktf.stringToHclTerraform(this._layer),
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
      position: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._position),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_negate: {
        value: cdktf.booleanToHclTerraform(this._serviceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_negate: {
        value: cdktf.booleanToHclTerraform(this._sourceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._time),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      track: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._track),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpn: {
        value: cdktf.stringToHclTerraform(this._vpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_communities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpnCommunities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_check: {
        value: managementAccessRuleUserCheckToHclTerraform(this._userCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementAccessRuleUserCheckList",
      },
      vpn_directional: {
        value: cdktf.listMapperHcl(managementAccessRuleVpnDirectionalToHclTerraform, true)(this._vpnDirectional.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementAccessRuleVpnDirectionalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
