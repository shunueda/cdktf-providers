// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringjobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#active Monitoringjob#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#config Monitoringjob#config}
  */
  readonly config: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#frequency Monitoringjob#frequency}
  */
  readonly frequency: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#id Monitoringjob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#job_type Monitoringjob#job_type}
  */
  readonly jobType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#mute Monitoringjob#mute}
  */
  readonly mute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#name Monitoringjob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#notes Monitoringjob#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#notify_delay Monitoringjob#notify_delay}
  */
  readonly notifyDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#notify_failback Monitoringjob#notify_failback}
  */
  readonly notifyFailback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#notify_list Monitoringjob#notify_list}
  */
  readonly notifyList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#notify_regional Monitoringjob#notify_regional}
  */
  readonly notifyRegional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#notify_repeat Monitoringjob#notify_repeat}
  */
  readonly notifyRepeat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#policy Monitoringjob#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#rapid_recheck Monitoringjob#rapid_recheck}
  */
  readonly rapidRecheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#regions Monitoringjob#regions}
  */
  readonly regions: string[];
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#rules Monitoringjob#rules}
  */
  readonly rules?: MonitoringjobRules[] | cdktf.IResolvable;
}
export interface MonitoringjobRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#comparison Monitoringjob#comparison}
  */
  readonly comparison: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#key Monitoringjob#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#value Monitoringjob#value}
  */
  readonly value: string;
}

export function monitoringjobRulesToTerraform(struct?: MonitoringjobRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitoringjobRulesToHclTerraform(struct?: MonitoringjobRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison: {
      value: cdktf.stringToHclTerraform(struct!.comparison),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitoringjobRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringjobRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringjobRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparison = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparison = value.comparison;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // comparison - computed: false, optional: false, required: true
  private _comparison?: string; 
  public get comparison() {
    return this.getStringAttribute('comparison');
  }
  public set comparison(value: string) {
    this._comparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MonitoringjobRulesList extends cdktf.ComplexList {
  public internalValue? : MonitoringjobRules[] | cdktf.IResolvable

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
  public get(index: number): MonitoringjobRulesOutputReference {
    return new MonitoringjobRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob ns1_monitoringjob}
*/
export class Monitoringjob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_monitoringjob";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Monitoringjob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Monitoringjob to import
  * @param importFromId The id of the existing Monitoringjob that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Monitoringjob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_monitoringjob", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/resources/monitoringjob ns1_monitoringjob} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringjobConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringjobConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_monitoringjob',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._config = config.config;
    this._frequency = config.frequency;
    this._id = config.id;
    this._jobType = config.jobType;
    this._mute = config.mute;
    this._name = config.name;
    this._notes = config.notes;
    this._notifyDelay = config.notifyDelay;
    this._notifyFailback = config.notifyFailback;
    this._notifyList = config.notifyList;
    this._notifyRegional = config.notifyRegional;
    this._notifyRepeat = config.notifyRepeat;
    this._policy = config.policy;
    this._rapidRecheck = config.rapidRecheck;
    this._regions = config.regions;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // config - computed: false, optional: false, required: true
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // job_type - computed: false, optional: false, required: true
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // mute - computed: false, optional: true, required: false
  private _mute?: boolean | cdktf.IResolvable; 
  public get mute() {
    return this.getBooleanAttribute('mute');
  }
  public set mute(value: boolean | cdktf.IResolvable) {
    this._mute = value;
  }
  public resetMute() {
    this._mute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteInput() {
    return this._mute;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // notify_delay - computed: false, optional: true, required: false
  private _notifyDelay?: number; 
  public get notifyDelay() {
    return this.getNumberAttribute('notify_delay');
  }
  public set notifyDelay(value: number) {
    this._notifyDelay = value;
  }
  public resetNotifyDelay() {
    this._notifyDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDelayInput() {
    return this._notifyDelay;
  }

  // notify_failback - computed: false, optional: true, required: false
  private _notifyFailback?: boolean | cdktf.IResolvable; 
  public get notifyFailback() {
    return this.getBooleanAttribute('notify_failback');
  }
  public set notifyFailback(value: boolean | cdktf.IResolvable) {
    this._notifyFailback = value;
  }
  public resetNotifyFailback() {
    this._notifyFailback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyFailbackInput() {
    return this._notifyFailback;
  }

  // notify_list - computed: false, optional: true, required: false
  private _notifyList?: string; 
  public get notifyList() {
    return this.getStringAttribute('notify_list');
  }
  public set notifyList(value: string) {
    this._notifyList = value;
  }
  public resetNotifyList() {
    this._notifyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyListInput() {
    return this._notifyList;
  }

  // notify_regional - computed: false, optional: true, required: false
  private _notifyRegional?: boolean | cdktf.IResolvable; 
  public get notifyRegional() {
    return this.getBooleanAttribute('notify_regional');
  }
  public set notifyRegional(value: boolean | cdktf.IResolvable) {
    this._notifyRegional = value;
  }
  public resetNotifyRegional() {
    this._notifyRegional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRegionalInput() {
    return this._notifyRegional;
  }

  // notify_repeat - computed: false, optional: true, required: false
  private _notifyRepeat?: number; 
  public get notifyRepeat() {
    return this.getNumberAttribute('notify_repeat');
  }
  public set notifyRepeat(value: number) {
    this._notifyRepeat = value;
  }
  public resetNotifyRepeat() {
    this._notifyRepeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRepeatInput() {
    return this._notifyRepeat;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // rapid_recheck - computed: false, optional: true, required: false
  private _rapidRecheck?: boolean | cdktf.IResolvable; 
  public get rapidRecheck() {
    return this.getBooleanAttribute('rapid_recheck');
  }
  public set rapidRecheck(value: boolean | cdktf.IResolvable) {
    this._rapidRecheck = value;
  }
  public resetRapidRecheck() {
    this._rapidRecheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidRecheckInput() {
    return this._rapidRecheck;
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new MonitoringjobRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: MonitoringjobRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      frequency: cdktf.numberToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      job_type: cdktf.stringToTerraform(this._jobType),
      mute: cdktf.booleanToTerraform(this._mute),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      notify_delay: cdktf.numberToTerraform(this._notifyDelay),
      notify_failback: cdktf.booleanToTerraform(this._notifyFailback),
      notify_list: cdktf.stringToTerraform(this._notifyList),
      notify_regional: cdktf.booleanToTerraform(this._notifyRegional),
      notify_repeat: cdktf.numberToTerraform(this._notifyRepeat),
      policy: cdktf.stringToTerraform(this._policy),
      rapid_recheck: cdktf.booleanToTerraform(this._rapidRecheck),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      rules: cdktf.listMapper(monitoringjobRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
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
      job_type: {
        value: cdktf.stringToHclTerraform(this._jobType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mute: {
        value: cdktf.booleanToHclTerraform(this._mute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_delay: {
        value: cdktf.numberToHclTerraform(this._notifyDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      notify_failback: {
        value: cdktf.booleanToHclTerraform(this._notifyFailback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_list: {
        value: cdktf.stringToHclTerraform(this._notifyList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_regional: {
        value: cdktf.booleanToHclTerraform(this._notifyRegional),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_repeat: {
        value: cdktf.numberToHclTerraform(this._notifyRepeat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rapid_recheck: {
        value: cdktf.booleanToHclTerraform(this._rapidRecheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rules: {
        value: cdktf.listMapperHcl(monitoringjobRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitoringjobRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
