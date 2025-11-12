// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/default_launchpad
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultLaunchpadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/default_launchpad#id DefaultLaunchpad#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * group_launchpads block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/default_launchpad#group_launchpads DefaultLaunchpad#group_launchpads}
  */
  readonly groupLaunchpads?: DefaultLaunchpadGroupLaunchpads;
}
export interface DefaultLaunchpadGroupLaunchpadsGroupLaunchpad {
  /**
  * State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/default_launchpad#is_enabled DefaultLaunchpad#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Launchpad
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/default_launchpad#launchpad_id DefaultLaunchpad#launchpad_id}
  */
  readonly launchpadId: string;
  /**
  * User Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/default_launchpad#user_group_id DefaultLaunchpad#user_group_id}
  */
  readonly userGroupId: string;
}

export function defaultLaunchpadGroupLaunchpadsGroupLaunchpadToTerraform(struct?: DefaultLaunchpadGroupLaunchpadsGroupLaunchpad | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    launchpad_id: cdktf.stringToTerraform(struct!.launchpadId),
    user_group_id: cdktf.stringToTerraform(struct!.userGroupId),
  }
}


export function defaultLaunchpadGroupLaunchpadsGroupLaunchpadToHclTerraform(struct?: DefaultLaunchpadGroupLaunchpadsGroupLaunchpad | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    launchpad_id: {
      value: cdktf.stringToHclTerraform(struct!.launchpadId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group_id: {
      value: cdktf.stringToHclTerraform(struct!.userGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLaunchpadGroupLaunchpadsGroupLaunchpadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultLaunchpadGroupLaunchpadsGroupLaunchpad | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._launchpadId !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchpadId = this._launchpadId;
    }
    if (this._userGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupId = this._userGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLaunchpadGroupLaunchpadsGroupLaunchpad | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isEnabled = undefined;
      this._launchpadId = undefined;
      this._userGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isEnabled = value.isEnabled;
      this._launchpadId = value.launchpadId;
      this._userGroupId = value.userGroupId;
    }
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // launchpad_id - computed: false, optional: false, required: true
  private _launchpadId?: string; 
  public get launchpadId() {
    return this.getStringAttribute('launchpad_id');
  }
  public set launchpadId(value: string) {
    this._launchpadId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchpadIdInput() {
    return this._launchpadId;
  }

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }
}

export class DefaultLaunchpadGroupLaunchpadsGroupLaunchpadList extends cdktf.ComplexList {
  public internalValue? : DefaultLaunchpadGroupLaunchpadsGroupLaunchpad[] | cdktf.IResolvable

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
  public get(index: number): DefaultLaunchpadGroupLaunchpadsGroupLaunchpadOutputReference {
    return new DefaultLaunchpadGroupLaunchpadsGroupLaunchpadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DefaultLaunchpadGroupLaunchpads {
  /**
  * group_launchpad block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/default_launchpad#group_launchpad DefaultLaunchpad#group_launchpad}
  */
  readonly groupLaunchpad: DefaultLaunchpadGroupLaunchpadsGroupLaunchpad[] | cdktf.IResolvable;
}

export function defaultLaunchpadGroupLaunchpadsToTerraform(struct?: DefaultLaunchpadGroupLaunchpadsOutputReference | DefaultLaunchpadGroupLaunchpads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_launchpad: cdktf.listMapper(defaultLaunchpadGroupLaunchpadsGroupLaunchpadToTerraform, true)(struct!.groupLaunchpad),
  }
}


export function defaultLaunchpadGroupLaunchpadsToHclTerraform(struct?: DefaultLaunchpadGroupLaunchpadsOutputReference | DefaultLaunchpadGroupLaunchpads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_launchpad: {
      value: cdktf.listMapperHcl(defaultLaunchpadGroupLaunchpadsGroupLaunchpadToHclTerraform, true)(struct!.groupLaunchpad),
      isBlock: true,
      type: "set",
      storageClassType: "DefaultLaunchpadGroupLaunchpadsGroupLaunchpadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLaunchpadGroupLaunchpadsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DefaultLaunchpadGroupLaunchpads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupLaunchpad?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLaunchpad = this._groupLaunchpad?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLaunchpadGroupLaunchpads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupLaunchpad.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupLaunchpad.internalValue = value.groupLaunchpad;
    }
  }

  // group_launchpad - computed: false, optional: false, required: true
  private _groupLaunchpad = new DefaultLaunchpadGroupLaunchpadsGroupLaunchpadList(this, "group_launchpad", true);
  public get groupLaunchpad() {
    return this._groupLaunchpad;
  }
  public putGroupLaunchpad(value: DefaultLaunchpadGroupLaunchpadsGroupLaunchpad[] | cdktf.IResolvable) {
    this._groupLaunchpad.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLaunchpadInput() {
    return this._groupLaunchpad.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/default_launchpad dynatrace_default_launchpad}
*/
export class DefaultLaunchpad extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_default_launchpad";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultLaunchpad resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultLaunchpad to import
  * @param importFromId The id of the existing DefaultLaunchpad that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/default_launchpad#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultLaunchpad to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_default_launchpad", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/default_launchpad dynatrace_default_launchpad} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultLaunchpadConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultLaunchpadConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_default_launchpad',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._groupLaunchpads.internalValue = config.groupLaunchpads;
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

  // group_launchpads - computed: false, optional: true, required: false
  private _groupLaunchpads = new DefaultLaunchpadGroupLaunchpadsOutputReference(this, "group_launchpads");
  public get groupLaunchpads() {
    return this._groupLaunchpads;
  }
  public putGroupLaunchpads(value: DefaultLaunchpadGroupLaunchpads) {
    this._groupLaunchpads.internalValue = value;
  }
  public resetGroupLaunchpads() {
    this._groupLaunchpads.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLaunchpadsInput() {
    return this._groupLaunchpads.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      group_launchpads: defaultLaunchpadGroupLaunchpadsToTerraform(this._groupLaunchpads.internalValue),
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
      group_launchpads: {
        value: defaultLaunchpadGroupLaunchpadsToHclTerraform(this._groupLaunchpads.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DefaultLaunchpadGroupLaunchpadsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
