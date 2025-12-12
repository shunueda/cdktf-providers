// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ike1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#annotations Ike1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#authentication_algos Ike1#authentication_algos}
  */
  readonly authenticationAlgos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#description Ike1#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#dh_group Ike1#dh_group}
  */
  readonly dhGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#disable Ike1#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#encryption_algos Ike1#encryption_algos}
  */
  readonly encryptionAlgos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#id Ike1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#labels Ike1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#name Ike1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#namespace Ike1#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#prf Ike1#prf}
  */
  readonly prf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#reauth_disabled Ike1#reauth_disabled}
  */
  readonly reauthDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#use_default_keylifetime Ike1#use_default_keylifetime}
  */
  readonly useDefaultKeylifetime?: boolean | cdktf.IResolvable;
  /**
  * ike_keylifetime_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#ike_keylifetime_hours Ike1#ike_keylifetime_hours}
  */
  readonly ikeKeylifetimeHours?: Ike1IkeKeylifetimeHours;
  /**
  * ike_keylifetime_minutes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#ike_keylifetime_minutes Ike1#ike_keylifetime_minutes}
  */
  readonly ikeKeylifetimeMinutes?: Ike1IkeKeylifetimeMinutes;
  /**
  * reauth_timeout_days block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#reauth_timeout_days Ike1#reauth_timeout_days}
  */
  readonly reauthTimeoutDays?: Ike1ReauthTimeoutDays;
  /**
  * reauth_timeout_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#reauth_timeout_hours Ike1#reauth_timeout_hours}
  */
  readonly reauthTimeoutHours?: Ike1ReauthTimeoutHours;
}
export interface Ike1IkeKeylifetimeHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#duration Ike1#duration}
  */
  readonly duration?: number;
}

export function ike1IkeKeylifetimeHoursToTerraform(struct?: Ike1IkeKeylifetimeHoursOutputReference | Ike1IkeKeylifetimeHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function ike1IkeKeylifetimeHoursToHclTerraform(struct?: Ike1IkeKeylifetimeHoursOutputReference | Ike1IkeKeylifetimeHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ike1IkeKeylifetimeHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ike1IkeKeylifetimeHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ike1IkeKeylifetimeHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface Ike1IkeKeylifetimeMinutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#duration Ike1#duration}
  */
  readonly duration?: number;
}

export function ike1IkeKeylifetimeMinutesToTerraform(struct?: Ike1IkeKeylifetimeMinutesOutputReference | Ike1IkeKeylifetimeMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function ike1IkeKeylifetimeMinutesToHclTerraform(struct?: Ike1IkeKeylifetimeMinutesOutputReference | Ike1IkeKeylifetimeMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ike1IkeKeylifetimeMinutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ike1IkeKeylifetimeMinutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ike1IkeKeylifetimeMinutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface Ike1ReauthTimeoutDays {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#duration Ike1#duration}
  */
  readonly duration?: number;
}

export function ike1ReauthTimeoutDaysToTerraform(struct?: Ike1ReauthTimeoutDaysOutputReference | Ike1ReauthTimeoutDays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function ike1ReauthTimeoutDaysToHclTerraform(struct?: Ike1ReauthTimeoutDaysOutputReference | Ike1ReauthTimeoutDays): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ike1ReauthTimeoutDaysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ike1ReauthTimeoutDays | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ike1ReauthTimeoutDays | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface Ike1ReauthTimeoutHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#duration Ike1#duration}
  */
  readonly duration?: number;
}

export function ike1ReauthTimeoutHoursToTerraform(struct?: Ike1ReauthTimeoutHoursOutputReference | Ike1ReauthTimeoutHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function ike1ReauthTimeoutHoursToHclTerraform(struct?: Ike1ReauthTimeoutHoursOutputReference | Ike1ReauthTimeoutHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ike1ReauthTimeoutHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ike1ReauthTimeoutHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ike1ReauthTimeoutHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1 volterra_ike1}
*/
export class Ike1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_ike1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ike1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ike1 to import
  * @param importFromId The id of the existing Ike1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ike1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_ike1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/ike1 volterra_ike1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ike1Config
  */
  public constructor(scope: Construct, id: string, config: Ike1Config) {
    super(scope, id, {
      terraformResourceType: 'volterra_ike1',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._authenticationAlgos = config.authenticationAlgos;
    this._description = config.description;
    this._dhGroup = config.dhGroup;
    this._disable = config.disable;
    this._encryptionAlgos = config.encryptionAlgos;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._prf = config.prf;
    this._reauthDisabled = config.reauthDisabled;
    this._useDefaultKeylifetime = config.useDefaultKeylifetime;
    this._ikeKeylifetimeHours.internalValue = config.ikeKeylifetimeHours;
    this._ikeKeylifetimeMinutes.internalValue = config.ikeKeylifetimeMinutes;
    this._reauthTimeoutDays.internalValue = config.reauthTimeoutDays;
    this._reauthTimeoutHours.internalValue = config.reauthTimeoutHours;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // authentication_algos - computed: false, optional: true, required: false
  private _authenticationAlgos?: string[]; 
  public get authenticationAlgos() {
    return this.getListAttribute('authentication_algos');
  }
  public set authenticationAlgos(value: string[]) {
    this._authenticationAlgos = value;
  }
  public resetAuthenticationAlgos() {
    this._authenticationAlgos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgosInput() {
    return this._authenticationAlgos;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dh_group - computed: false, optional: true, required: false
  private _dhGroup?: string[]; 
  public get dhGroup() {
    return this.getListAttribute('dh_group');
  }
  public set dhGroup(value: string[]) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // encryption_algos - computed: false, optional: true, required: false
  private _encryptionAlgos?: string[]; 
  public get encryptionAlgos() {
    return this.getListAttribute('encryption_algos');
  }
  public set encryptionAlgos(value: string[]) {
    this._encryptionAlgos = value;
  }
  public resetEncryptionAlgos() {
    this._encryptionAlgos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgosInput() {
    return this._encryptionAlgos;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // prf - computed: false, optional: true, required: false
  private _prf?: string[]; 
  public get prf() {
    return this.getListAttribute('prf');
  }
  public set prf(value: string[]) {
    this._prf = value;
  }
  public resetPrf() {
    this._prf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prfInput() {
    return this._prf;
  }

  // reauth_disabled - computed: false, optional: true, required: false
  private _reauthDisabled?: boolean | cdktf.IResolvable; 
  public get reauthDisabled() {
    return this.getBooleanAttribute('reauth_disabled');
  }
  public set reauthDisabled(value: boolean | cdktf.IResolvable) {
    this._reauthDisabled = value;
  }
  public resetReauthDisabled() {
    this._reauthDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthDisabledInput() {
    return this._reauthDisabled;
  }

  // use_default_keylifetime - computed: false, optional: true, required: false
  private _useDefaultKeylifetime?: boolean | cdktf.IResolvable; 
  public get useDefaultKeylifetime() {
    return this.getBooleanAttribute('use_default_keylifetime');
  }
  public set useDefaultKeylifetime(value: boolean | cdktf.IResolvable) {
    this._useDefaultKeylifetime = value;
  }
  public resetUseDefaultKeylifetime() {
    this._useDefaultKeylifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultKeylifetimeInput() {
    return this._useDefaultKeylifetime;
  }

  // ike_keylifetime_hours - computed: false, optional: true, required: false
  private _ikeKeylifetimeHours = new Ike1IkeKeylifetimeHoursOutputReference(this, "ike_keylifetime_hours");
  public get ikeKeylifetimeHours() {
    return this._ikeKeylifetimeHours;
  }
  public putIkeKeylifetimeHours(value: Ike1IkeKeylifetimeHours) {
    this._ikeKeylifetimeHours.internalValue = value;
  }
  public resetIkeKeylifetimeHours() {
    this._ikeKeylifetimeHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeKeylifetimeHoursInput() {
    return this._ikeKeylifetimeHours.internalValue;
  }

  // ike_keylifetime_minutes - computed: false, optional: true, required: false
  private _ikeKeylifetimeMinutes = new Ike1IkeKeylifetimeMinutesOutputReference(this, "ike_keylifetime_minutes");
  public get ikeKeylifetimeMinutes() {
    return this._ikeKeylifetimeMinutes;
  }
  public putIkeKeylifetimeMinutes(value: Ike1IkeKeylifetimeMinutes) {
    this._ikeKeylifetimeMinutes.internalValue = value;
  }
  public resetIkeKeylifetimeMinutes() {
    this._ikeKeylifetimeMinutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeKeylifetimeMinutesInput() {
    return this._ikeKeylifetimeMinutes.internalValue;
  }

  // reauth_timeout_days - computed: false, optional: true, required: false
  private _reauthTimeoutDays = new Ike1ReauthTimeoutDaysOutputReference(this, "reauth_timeout_days");
  public get reauthTimeoutDays() {
    return this._reauthTimeoutDays;
  }
  public putReauthTimeoutDays(value: Ike1ReauthTimeoutDays) {
    this._reauthTimeoutDays.internalValue = value;
  }
  public resetReauthTimeoutDays() {
    this._reauthTimeoutDays.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthTimeoutDaysInput() {
    return this._reauthTimeoutDays.internalValue;
  }

  // reauth_timeout_hours - computed: false, optional: true, required: false
  private _reauthTimeoutHours = new Ike1ReauthTimeoutHoursOutputReference(this, "reauth_timeout_hours");
  public get reauthTimeoutHours() {
    return this._reauthTimeoutHours;
  }
  public putReauthTimeoutHours(value: Ike1ReauthTimeoutHours) {
    this._reauthTimeoutHours.internalValue = value;
  }
  public resetReauthTimeoutHours() {
    this._reauthTimeoutHours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthTimeoutHoursInput() {
    return this._reauthTimeoutHours.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      authentication_algos: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationAlgos),
      description: cdktf.stringToTerraform(this._description),
      dh_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhGroup),
      disable: cdktf.booleanToTerraform(this._disable),
      encryption_algos: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encryptionAlgos),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      prf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prf),
      reauth_disabled: cdktf.booleanToTerraform(this._reauthDisabled),
      use_default_keylifetime: cdktf.booleanToTerraform(this._useDefaultKeylifetime),
      ike_keylifetime_hours: ike1IkeKeylifetimeHoursToTerraform(this._ikeKeylifetimeHours.internalValue),
      ike_keylifetime_minutes: ike1IkeKeylifetimeMinutesToTerraform(this._ikeKeylifetimeMinutes.internalValue),
      reauth_timeout_days: ike1ReauthTimeoutDaysToTerraform(this._reauthTimeoutDays.internalValue),
      reauth_timeout_hours: ike1ReauthTimeoutHoursToTerraform(this._reauthTimeoutHours.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      authentication_algos: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationAlgos),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_algos: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._encryptionAlgos),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prf),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      reauth_disabled: {
        value: cdktf.booleanToHclTerraform(this._reauthDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_default_keylifetime: {
        value: cdktf.booleanToHclTerraform(this._useDefaultKeylifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ike_keylifetime_hours: {
        value: ike1IkeKeylifetimeHoursToHclTerraform(this._ikeKeylifetimeHours.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ike1IkeKeylifetimeHoursList",
      },
      ike_keylifetime_minutes: {
        value: ike1IkeKeylifetimeMinutesToHclTerraform(this._ikeKeylifetimeMinutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ike1IkeKeylifetimeMinutesList",
      },
      reauth_timeout_days: {
        value: ike1ReauthTimeoutDaysToHclTerraform(this._reauthTimeoutDays.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ike1ReauthTimeoutDaysList",
      },
      reauth_timeout_hours: {
        value: ike1ReauthTimeoutHoursToHclTerraform(this._reauthTimeoutHours.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ike1ReauthTimeoutHoursList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
