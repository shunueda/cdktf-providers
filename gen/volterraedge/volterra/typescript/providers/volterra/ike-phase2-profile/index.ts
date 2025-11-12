// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IkePhase2ProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#annotations IkePhase2Profile#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#authentication_algos IkePhase2Profile#authentication_algos}
  */
  readonly authenticationAlgos: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#description IkePhase2Profile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#disable IkePhase2Profile#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#disable_pfs IkePhase2Profile#disable_pfs}
  */
  readonly disablePfs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#encryption_algos IkePhase2Profile#encryption_algos}
  */
  readonly encryptionAlgos: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#id IkePhase2Profile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#labels IkePhase2Profile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#name IkePhase2Profile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#namespace IkePhase2Profile#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#use_default_keylifetime IkePhase2Profile#use_default_keylifetime}
  */
  readonly useDefaultKeylifetime?: boolean | cdktf.IResolvable;
  /**
  * dh_group_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#dh_group_set IkePhase2Profile#dh_group_set}
  */
  readonly dhGroupSet?: IkePhase2ProfileDhGroupSet;
  /**
  * ike_keylifetime_hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#ike_keylifetime_hours IkePhase2Profile#ike_keylifetime_hours}
  */
  readonly ikeKeylifetimeHours?: IkePhase2ProfileIkeKeylifetimeHours;
  /**
  * ike_keylifetime_minutes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#ike_keylifetime_minutes IkePhase2Profile#ike_keylifetime_minutes}
  */
  readonly ikeKeylifetimeMinutes?: IkePhase2ProfileIkeKeylifetimeMinutes;
}
export interface IkePhase2ProfileDhGroupSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#dh_groups IkePhase2Profile#dh_groups}
  */
  readonly dhGroups?: string[];
}

export function ikePhase2ProfileDhGroupSetToTerraform(struct?: IkePhase2ProfileDhGroupSetOutputReference | IkePhase2ProfileDhGroupSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dh_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhGroups),
  }
}


export function ikePhase2ProfileDhGroupSetToHclTerraform(struct?: IkePhase2ProfileDhGroupSetOutputReference | IkePhase2ProfileDhGroupSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dh_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IkePhase2ProfileDhGroupSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IkePhase2ProfileDhGroupSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroups = this._dhGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkePhase2ProfileDhGroupSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhGroups = value.dhGroups;
    }
  }

  // dh_groups - computed: false, optional: true, required: false
  private _dhGroups?: string[]; 
  public get dhGroups() {
    return this.getListAttribute('dh_groups');
  }
  public set dhGroups(value: string[]) {
    this._dhGroups = value;
  }
  public resetDhGroups() {
    this._dhGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupsInput() {
    return this._dhGroups;
  }
}
export interface IkePhase2ProfileIkeKeylifetimeHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#duration IkePhase2Profile#duration}
  */
  readonly duration?: number;
}

export function ikePhase2ProfileIkeKeylifetimeHoursToTerraform(struct?: IkePhase2ProfileIkeKeylifetimeHoursOutputReference | IkePhase2ProfileIkeKeylifetimeHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function ikePhase2ProfileIkeKeylifetimeHoursToHclTerraform(struct?: IkePhase2ProfileIkeKeylifetimeHoursOutputReference | IkePhase2ProfileIkeKeylifetimeHours): any {
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

export class IkePhase2ProfileIkeKeylifetimeHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IkePhase2ProfileIkeKeylifetimeHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkePhase2ProfileIkeKeylifetimeHours | undefined) {
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
export interface IkePhase2ProfileIkeKeylifetimeMinutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#duration IkePhase2Profile#duration}
  */
  readonly duration?: number;
}

export function ikePhase2ProfileIkeKeylifetimeMinutesToTerraform(struct?: IkePhase2ProfileIkeKeylifetimeMinutesOutputReference | IkePhase2ProfileIkeKeylifetimeMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function ikePhase2ProfileIkeKeylifetimeMinutesToHclTerraform(struct?: IkePhase2ProfileIkeKeylifetimeMinutesOutputReference | IkePhase2ProfileIkeKeylifetimeMinutes): any {
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

export class IkePhase2ProfileIkeKeylifetimeMinutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IkePhase2ProfileIkeKeylifetimeMinutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IkePhase2ProfileIkeKeylifetimeMinutes | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile volterra_ike_phase2_profile}
*/
export class IkePhase2Profile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_ike_phase2_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IkePhase2Profile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IkePhase2Profile to import
  * @param importFromId The id of the existing IkePhase2Profile that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IkePhase2Profile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_ike_phase2_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ike_phase2_profile volterra_ike_phase2_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IkePhase2ProfileConfig
  */
  public constructor(scope: Construct, id: string, config: IkePhase2ProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_ike_phase2_profile',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
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
    this._disable = config.disable;
    this._disablePfs = config.disablePfs;
    this._encryptionAlgos = config.encryptionAlgos;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._useDefaultKeylifetime = config.useDefaultKeylifetime;
    this._dhGroupSet.internalValue = config.dhGroupSet;
    this._ikeKeylifetimeHours.internalValue = config.ikeKeylifetimeHours;
    this._ikeKeylifetimeMinutes.internalValue = config.ikeKeylifetimeMinutes;
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

  // authentication_algos - computed: false, optional: false, required: true
  private _authenticationAlgos?: string[]; 
  public get authenticationAlgos() {
    return this.getListAttribute('authentication_algos');
  }
  public set authenticationAlgos(value: string[]) {
    this._authenticationAlgos = value;
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

  // disable_pfs - computed: false, optional: true, required: false
  private _disablePfs?: boolean | cdktf.IResolvable; 
  public get disablePfs() {
    return this.getBooleanAttribute('disable_pfs');
  }
  public set disablePfs(value: boolean | cdktf.IResolvable) {
    this._disablePfs = value;
  }
  public resetDisablePfs() {
    this._disablePfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePfsInput() {
    return this._disablePfs;
  }

  // encryption_algos - computed: false, optional: false, required: true
  private _encryptionAlgos?: string[]; 
  public get encryptionAlgos() {
    return this.getListAttribute('encryption_algos');
  }
  public set encryptionAlgos(value: string[]) {
    this._encryptionAlgos = value;
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

  // dh_group_set - computed: false, optional: true, required: false
  private _dhGroupSet = new IkePhase2ProfileDhGroupSetOutputReference(this, "dh_group_set");
  public get dhGroupSet() {
    return this._dhGroupSet;
  }
  public putDhGroupSet(value: IkePhase2ProfileDhGroupSet) {
    this._dhGroupSet.internalValue = value;
  }
  public resetDhGroupSet() {
    this._dhGroupSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupSetInput() {
    return this._dhGroupSet.internalValue;
  }

  // ike_keylifetime_hours - computed: false, optional: true, required: false
  private _ikeKeylifetimeHours = new IkePhase2ProfileIkeKeylifetimeHoursOutputReference(this, "ike_keylifetime_hours");
  public get ikeKeylifetimeHours() {
    return this._ikeKeylifetimeHours;
  }
  public putIkeKeylifetimeHours(value: IkePhase2ProfileIkeKeylifetimeHours) {
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
  private _ikeKeylifetimeMinutes = new IkePhase2ProfileIkeKeylifetimeMinutesOutputReference(this, "ike_keylifetime_minutes");
  public get ikeKeylifetimeMinutes() {
    return this._ikeKeylifetimeMinutes;
  }
  public putIkeKeylifetimeMinutes(value: IkePhase2ProfileIkeKeylifetimeMinutes) {
    this._ikeKeylifetimeMinutes.internalValue = value;
  }
  public resetIkeKeylifetimeMinutes() {
    this._ikeKeylifetimeMinutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeKeylifetimeMinutesInput() {
    return this._ikeKeylifetimeMinutes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      authentication_algos: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationAlgos),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disable_pfs: cdktf.booleanToTerraform(this._disablePfs),
      encryption_algos: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encryptionAlgos),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      use_default_keylifetime: cdktf.booleanToTerraform(this._useDefaultKeylifetime),
      dh_group_set: ikePhase2ProfileDhGroupSetToTerraform(this._dhGroupSet.internalValue),
      ike_keylifetime_hours: ikePhase2ProfileIkeKeylifetimeHoursToTerraform(this._ikeKeylifetimeHours.internalValue),
      ike_keylifetime_minutes: ikePhase2ProfileIkeKeylifetimeMinutesToTerraform(this._ikeKeylifetimeMinutes.internalValue),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_pfs: {
        value: cdktf.booleanToHclTerraform(this._disablePfs),
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
      use_default_keylifetime: {
        value: cdktf.booleanToHclTerraform(this._useDefaultKeylifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dh_group_set: {
        value: ikePhase2ProfileDhGroupSetToHclTerraform(this._dhGroupSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IkePhase2ProfileDhGroupSetList",
      },
      ike_keylifetime_hours: {
        value: ikePhase2ProfileIkeKeylifetimeHoursToHclTerraform(this._ikeKeylifetimeHours.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IkePhase2ProfileIkeKeylifetimeHoursList",
      },
      ike_keylifetime_minutes: {
        value: ikePhase2ProfileIkeKeylifetimeMinutesToHclTerraform(this._ikeKeylifetimeMinutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IkePhase2ProfileIkeKeylifetimeMinutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
