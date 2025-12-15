// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership#group GroupMembership#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership#id GroupMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership#members GroupMembership#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership#mode GroupMembership#mode}
  */
  readonly mode?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership#timeouts GroupMembership#timeouts}
  */
  readonly timeouts?: GroupMembershipTimeouts;
}
export interface GroupMembershipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership#create GroupMembership#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership#delete GroupMembership#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership#read GroupMembership#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership#update GroupMembership#update}
  */
  readonly update?: string;
}

export function groupMembershipTimeoutsToTerraform(struct?: GroupMembershipTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function groupMembershipTimeoutsToHclTerraform(struct?: GroupMembershipTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupMembershipTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupMembershipTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMembershipTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership azuredevops_group_membership}
*/
export class GroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_group_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupMembership to import
  * @param importFromId The id of the existing GroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_group_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/group_membership azuredevops_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: GroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.1',
        providerVersionConstraint: '1.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._id = config.id;
    this._members = config.members;
    this._mode = config.mode;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // members - computed: false, optional: false, required: true
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GroupMembershipTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GroupMembershipTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      mode: cdktf.stringToTerraform(this._mode),
      timeouts: groupMembershipTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: groupMembershipTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupMembershipTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
