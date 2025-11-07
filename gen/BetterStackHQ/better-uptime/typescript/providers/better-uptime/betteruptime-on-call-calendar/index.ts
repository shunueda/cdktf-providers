// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeOnCallCalendarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the on-call calendar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar#name BetteruptimeOnCallCalendar#name}
  */
  readonly name: string;
  /**
  * Used to specify the team the resource should be created in when using global tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar#team_name BetteruptimeOnCallCalendar#team_name}
  */
  readonly teamName?: string;
  /**
  * on_call_rotation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar#on_call_rotation BetteruptimeOnCallCalendar#on_call_rotation}
  */
  readonly onCallRotation?: BetteruptimeOnCallCalendarOnCallRotation;
}
export interface BetteruptimeOnCallCalendarOnCallUsers {
}

export function betteruptimeOnCallCalendarOnCallUsersToTerraform(struct?: BetteruptimeOnCallCalendarOnCallUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function betteruptimeOnCallCalendarOnCallUsersToHclTerraform(struct?: BetteruptimeOnCallCalendarOnCallUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BetteruptimeOnCallCalendarOnCallUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BetteruptimeOnCallCalendarOnCallUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeOnCallCalendarOnCallUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // phone_numbers - computed: true, optional: false, required: false
  public get phoneNumbers() {
    return this.getListAttribute('phone_numbers');
  }
}

export class BetteruptimeOnCallCalendarOnCallUsersList extends cdktf.ComplexList {

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
  public get(index: number): BetteruptimeOnCallCalendarOnCallUsersOutputReference {
    return new BetteruptimeOnCallCalendarOnCallUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BetteruptimeOnCallCalendarOnCallRotation {
  /**
  * End time of the rotation in RFC 3339 format (e.g. `2026-01-01T00:00:00Z`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar#end_rotations_at BetteruptimeOnCallCalendar#end_rotations_at}
  */
  readonly endRotationsAt: string;
  /**
  * The interval unit for rotation_length. Must be one of: `hour`, `day`, `week`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar#rotation_interval BetteruptimeOnCallCalendar#rotation_interval}
  */
  readonly rotationInterval: string;
  /**
  * The length of each rotation shift. See `rotation_interval` for units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar#rotation_length BetteruptimeOnCallCalendar#rotation_length}
  */
  readonly rotationLength: number;
  /**
  * Start time of the rotation in RFC 3339 format (e.g. `2026-01-01T00:00:00Z`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar#start_rotations_at BetteruptimeOnCallCalendar#start_rotations_at}
  */
  readonly startRotationsAt: string;
  /**
  * List of email addresses for users participating in the rotation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar#users BetteruptimeOnCallCalendar#users}
  */
  readonly users: string[];
}

export function betteruptimeOnCallCalendarOnCallRotationToTerraform(struct?: BetteruptimeOnCallCalendarOnCallRotationOutputReference | BetteruptimeOnCallCalendarOnCallRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_rotations_at: cdktf.stringToTerraform(struct!.endRotationsAt),
    rotation_interval: cdktf.stringToTerraform(struct!.rotationInterval),
    rotation_length: cdktf.numberToTerraform(struct!.rotationLength),
    start_rotations_at: cdktf.stringToTerraform(struct!.startRotationsAt),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
  }
}


export function betteruptimeOnCallCalendarOnCallRotationToHclTerraform(struct?: BetteruptimeOnCallCalendarOnCallRotationOutputReference | BetteruptimeOnCallCalendarOnCallRotation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_rotations_at: {
      value: cdktf.stringToHclTerraform(struct!.endRotationsAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation_interval: {
      value: cdktf.stringToHclTerraform(struct!.rotationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation_length: {
      value: cdktf.numberToHclTerraform(struct!.rotationLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_rotations_at: {
      value: cdktf.stringToHclTerraform(struct!.startRotationsAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BetteruptimeOnCallCalendarOnCallRotationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BetteruptimeOnCallCalendarOnCallRotation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endRotationsAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.endRotationsAt = this._endRotationsAt;
    }
    if (this._rotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationInterval = this._rotationInterval;
    }
    if (this._rotationLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationLength = this._rotationLength;
    }
    if (this._startRotationsAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startRotationsAt = this._startRotationsAt;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BetteruptimeOnCallCalendarOnCallRotation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endRotationsAt = undefined;
      this._rotationInterval = undefined;
      this._rotationLength = undefined;
      this._startRotationsAt = undefined;
      this._users = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endRotationsAt = value.endRotationsAt;
      this._rotationInterval = value.rotationInterval;
      this._rotationLength = value.rotationLength;
      this._startRotationsAt = value.startRotationsAt;
      this._users = value.users;
    }
  }

  // end_rotations_at - computed: false, optional: false, required: true
  private _endRotationsAt?: string; 
  public get endRotationsAt() {
    return this.getStringAttribute('end_rotations_at');
  }
  public set endRotationsAt(value: string) {
    this._endRotationsAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endRotationsAtInput() {
    return this._endRotationsAt;
  }

  // rotation_interval - computed: false, optional: false, required: true
  private _rotationInterval?: string; 
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
  public set rotationInterval(value: string) {
    this._rotationInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }

  // rotation_length - computed: false, optional: false, required: true
  private _rotationLength?: number; 
  public get rotationLength() {
    return this.getNumberAttribute('rotation_length');
  }
  public set rotationLength(value: number) {
    this._rotationLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationLengthInput() {
    return this._rotationLength;
  }

  // start_rotations_at - computed: false, optional: false, required: true
  private _startRotationsAt?: string; 
  public get startRotationsAt() {
    return this.getStringAttribute('start_rotations_at');
  }
  public set startRotationsAt(value: string) {
    this._startRotationsAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startRotationsAtInput() {
    return this._startRotationsAt;
  }

  // users - computed: false, optional: false, required: true
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar betteruptime_on_call_calendar}
*/
export class BetteruptimeOnCallCalendar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_on_call_calendar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeOnCallCalendar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeOnCallCalendar to import
  * @param importFromId The id of the existing BetteruptimeOnCallCalendar that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeOnCallCalendar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_on_call_calendar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_on_call_calendar betteruptime_on_call_calendar} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeOnCallCalendarConfig
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeOnCallCalendarConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_on_call_calendar',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._teamName = config.teamName;
    this._onCallRotation.internalValue = config.onCallRotation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_calendar - computed: true, optional: false, required: false
  public get defaultCalendar() {
    return this.getBooleanAttribute('default_calendar');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // on_call_users - computed: true, optional: false, required: false
  private _onCallUsers = new BetteruptimeOnCallCalendarOnCallUsersList(this, "on_call_users", false);
  public get onCallUsers() {
    return this._onCallUsers;
  }

  // team_name - computed: false, optional: true, required: false
  private _teamName?: string; 
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
  public set teamName(value: string) {
    this._teamName = value;
  }
  public resetTeamName() {
    this._teamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamNameInput() {
    return this._teamName;
  }

  // on_call_rotation - computed: false, optional: true, required: false
  private _onCallRotation = new BetteruptimeOnCallCalendarOnCallRotationOutputReference(this, "on_call_rotation");
  public get onCallRotation() {
    return this._onCallRotation;
  }
  public putOnCallRotation(value: BetteruptimeOnCallCalendarOnCallRotation) {
    this._onCallRotation.internalValue = value;
  }
  public resetOnCallRotation() {
    this._onCallRotation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCallRotationInput() {
    return this._onCallRotation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      team_name: cdktf.stringToTerraform(this._teamName),
      on_call_rotation: betteruptimeOnCallCalendarOnCallRotationToTerraform(this._onCallRotation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_name: {
        value: cdktf.stringToHclTerraform(this._teamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_call_rotation: {
        value: betteruptimeOnCallCalendarOnCallRotationToHclTerraform(this._onCallRotation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BetteruptimeOnCallCalendarOnCallRotationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
