// https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_escalations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckEscalationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the check to configure escalations for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_escalations#check_id CheckEscalations#check_id}
  */
  readonly checkId: number;
  /**
  * List of escalation rules. Each escalation is triggered sequentially
  * after the specified wait time. If the list is empty, all escalations will be removed from the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_escalations#escalations CheckEscalations#escalations}
  */
  readonly escalations: CheckEscalationsEscalations[] | cdktf.IResolvable;
}
export interface CheckEscalationsEscalations {
  /**
  * List of contact group names to receive notifications for this escalation level.
  * Each contact group can contain multiple contacts (email addresses, phone numbers, or integrations).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_escalations#contact_groups CheckEscalations#contact_groups}
  */
  readonly contactGroups: string[];
  /**
  * Number of times to repeat this escalation level.
  * Use 0 to repeat indefinitely until the check recovers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_escalations#num_repeats CheckEscalations#num_repeats}
  */
  readonly numRepeats: number;
  /**
  * Time to wait (in seconds) before triggering this escalation level.
  * For the first escalation, this is the time after the initial alert. For subsequent escalations,
  * this is the time after the previous escalation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_escalations#wait_time CheckEscalations#wait_time}
  */
  readonly waitTime: number;
}

export function checkEscalationsEscalationsToTerraform(struct?: CheckEscalationsEscalations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contactGroups),
    num_repeats: cdktf.numberToTerraform(struct!.numRepeats),
    wait_time: cdktf.numberToTerraform(struct!.waitTime),
  }
}


export function checkEscalationsEscalationsToHclTerraform(struct?: CheckEscalationsEscalations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contactGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    num_repeats: {
      value: cdktf.numberToHclTerraform(struct!.numRepeats),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_time: {
      value: cdktf.numberToHclTerraform(struct!.waitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckEscalationsEscalationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CheckEscalationsEscalations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroups = this._contactGroups;
    }
    if (this._numRepeats !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRepeats = this._numRepeats;
    }
    if (this._waitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTime = this._waitTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckEscalationsEscalations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactGroups = undefined;
      this._numRepeats = undefined;
      this._waitTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactGroups = value.contactGroups;
      this._numRepeats = value.numRepeats;
      this._waitTime = value.waitTime;
    }
  }

  // contact_groups - computed: false, optional: false, required: true
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_groups'));
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // num_repeats - computed: false, optional: false, required: true
  private _numRepeats?: number; 
  public get numRepeats() {
    return this.getNumberAttribute('num_repeats');
  }
  public set numRepeats(value: number) {
    this._numRepeats = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numRepeatsInput() {
    return this._numRepeats;
  }

  // wait_time - computed: false, optional: false, required: true
  private _waitTime?: number; 
  public get waitTime() {
    return this.getNumberAttribute('wait_time');
  }
  public set waitTime(value: number) {
    this._waitTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInput() {
    return this._waitTime;
  }
}

export class CheckEscalationsEscalationsList extends cdktf.ComplexList {
  public internalValue? : CheckEscalationsEscalations[] | cdktf.IResolvable

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
  public get(index: number): CheckEscalationsEscalationsOutputReference {
    return new CheckEscalationsEscalationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_escalations uptime_check_escalations}
*/
export class CheckEscalations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_check_escalations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckEscalations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckEscalations to import
  * @param importFromId The id of the existing CheckEscalations that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_escalations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckEscalations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_check_escalations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs/resources/check_escalations uptime_check_escalations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckEscalationsConfig
  */
  public constructor(scope: Construct, id: string, config: CheckEscalationsConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_check_escalations',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkId = config.checkId;
    this._escalations.internalValue = config.escalations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_id - computed: false, optional: false, required: true
  private _checkId?: number; 
  public get checkId() {
    return this.getNumberAttribute('check_id');
  }
  public set checkId(value: number) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // escalations - computed: false, optional: false, required: true
  private _escalations = new CheckEscalationsEscalationsList(this, "escalations", false);
  public get escalations() {
    return this._escalations;
  }
  public putEscalations(value: CheckEscalationsEscalations[] | cdktf.IResolvable) {
    this._escalations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationsInput() {
    return this._escalations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_id: cdktf.numberToTerraform(this._checkId),
      escalations: cdktf.listMapper(checkEscalationsEscalationsToTerraform, false)(this._escalations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_id: {
        value: cdktf.numberToHclTerraform(this._checkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      escalations: {
        value: cdktf.listMapperHcl(checkEscalationsEscalationsToHclTerraform, false)(this._escalations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CheckEscalationsEscalationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
