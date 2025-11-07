// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementAccessRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#color ManagementAccessRole#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#comments ManagementAccessRole#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#id ManagementAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#ignore_errors ManagementAccessRole#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#ignore_warnings ManagementAccessRole#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#name ManagementAccessRole#name}
  */
  readonly name: string;
  /**
  * Collection of Network objects identified by the name or UID that can access the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#networks ManagementAccessRole#networks}
  */
  readonly networks?: string[];
  /**
  * Remote access clients identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#remote_access_clients ManagementAccessRole#remote_access_clients}
  */
  readonly remoteAccessClients?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#tags ManagementAccessRole#tags}
  */
  readonly tags?: string[];
  /**
  * machines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#machines ManagementAccessRole#machines}
  */
  readonly machines?: ManagementAccessRoleMachines[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#timeouts ManagementAccessRole#timeouts}
  */
  readonly timeouts?: ManagementAccessRoleTimeouts;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#users ManagementAccessRole#users}
  */
  readonly users?: ManagementAccessRoleUsers[] | cdktf.IResolvable;
}
export interface ManagementAccessRoleMachines {
  /**
  * When source is "Active Directory" use "base-dn" to refine the query in AD database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#base_dn ManagementAccessRole#base_dn}
  */
  readonly baseDn?: string;
  /**
  * Name or UID of an object selected from source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#selection ManagementAccessRole#selection}
  */
  readonly selection?: string[];
  /**
  * Active Directory name or UID or Identity Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#source ManagementAccessRole#source}
  */
  readonly source?: string;
}

export function managementAccessRoleMachinesToTerraform(struct?: ManagementAccessRoleMachines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    selection: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selection),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function managementAccessRoleMachinesToHclTerraform(struct?: ManagementAccessRoleMachines | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selection),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessRoleMachinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessRoleMachines | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._selection !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessRoleMachines | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._selection = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._selection = value.selection;
      this._source = value.source;
    }
  }

  // base_dn - computed: false, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // selection - computed: false, optional: true, required: false
  private _selection?: string[]; 
  public get selection() {
    return cdktf.Fn.tolist(this.getListAttribute('selection'));
  }
  public set selection(value: string[]) {
    this._selection = value;
  }
  public resetSelection() {
    this._selection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ManagementAccessRoleMachinesList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessRoleMachines[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessRoleMachinesOutputReference {
    return new ManagementAccessRoleMachinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementAccessRoleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#create ManagementAccessRole#create}
  */
  readonly create?: string;
}

export function managementAccessRoleTimeoutsToTerraform(struct?: ManagementAccessRoleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function managementAccessRoleTimeoutsToHclTerraform(struct?: ManagementAccessRoleTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessRoleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManagementAccessRoleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessRoleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}
export interface ManagementAccessRoleUsers {
  /**
  * When source is "Active Directory" use "base-dn" to refine the query in AD database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#base_dn ManagementAccessRole#base_dn}
  */
  readonly baseDn?: string;
  /**
  * Name or UID of an object selected from source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#selection ManagementAccessRole#selection}
  */
  readonly selection?: string[];
  /**
  * Active Directory name or UID or Identity Tag  or Internal User Groups or LDAP groups or Guests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#source ManagementAccessRole#source}
  */
  readonly source?: string;
}

export function managementAccessRoleUsersToTerraform(struct?: ManagementAccessRoleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    selection: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selection),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function managementAccessRoleUsersToHclTerraform(struct?: ManagementAccessRoleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selection),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAccessRoleUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAccessRoleUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._selection !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAccessRoleUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._selection = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._selection = value.selection;
      this._source = value.source;
    }
  }

  // base_dn - computed: false, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // selection - computed: false, optional: true, required: false
  private _selection?: string[]; 
  public get selection() {
    return cdktf.Fn.tolist(this.getListAttribute('selection'));
  }
  public set selection(value: string[]) {
    this._selection = value;
  }
  public resetSelection() {
    this._selection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ManagementAccessRoleUsersList extends cdktf.ComplexList {
  public internalValue? : ManagementAccessRoleUsers[] | cdktf.IResolvable

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
  public get(index: number): ManagementAccessRoleUsersOutputReference {
    return new ManagementAccessRoleUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role checkpoint_management_access_role}
*/
export class ManagementAccessRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_access_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementAccessRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementAccessRole to import
  * @param importFromId The id of the existing ManagementAccessRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementAccessRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_access_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_role checkpoint_management_access_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementAccessRoleConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementAccessRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_access_role',
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
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._networks = config.networks;
    this._remoteAccessClients = config.remoteAccessClients;
    this._tags = config.tags;
    this._machines.internalValue = config.machines;
    this._timeouts.internalValue = config.timeouts;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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

  // networks - computed: false, optional: true, required: false
  private _networks?: string[]; 
  public get networks() {
    return cdktf.Fn.tolist(this.getListAttribute('networks'));
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // remote_access_clients - computed: false, optional: true, required: false
  private _remoteAccessClients?: string; 
  public get remoteAccessClients() {
    return this.getStringAttribute('remote_access_clients');
  }
  public set remoteAccessClients(value: string) {
    this._remoteAccessClients = value;
  }
  public resetRemoteAccessClients() {
    this._remoteAccessClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAccessClientsInput() {
    return this._remoteAccessClients;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // machines - computed: false, optional: true, required: false
  private _machines = new ManagementAccessRoleMachinesList(this, "machines", false);
  public get machines() {
    return this._machines;
  }
  public putMachines(value: ManagementAccessRoleMachines[] | cdktf.IResolvable) {
    this._machines.internalValue = value;
  }
  public resetMachines() {
    this._machines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinesInput() {
    return this._machines.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManagementAccessRoleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManagementAccessRoleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new ManagementAccessRoleUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: ManagementAccessRoleUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
      remote_access_clients: cdktf.stringToTerraform(this._remoteAccessClients),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      machines: cdktf.listMapper(managementAccessRoleMachinesToTerraform, true)(this._machines.internalValue),
      timeouts: managementAccessRoleTimeoutsToTerraform(this._timeouts.internalValue),
      users: cdktf.listMapper(managementAccessRoleUsersToTerraform, true)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remote_access_clients: {
        value: cdktf.stringToHclTerraform(this._remoteAccessClients),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      machines: {
        value: cdktf.listMapperHcl(managementAccessRoleMachinesToHclTerraform, true)(this._machines.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementAccessRoleMachinesList",
      },
      timeouts: {
        value: managementAccessRoleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManagementAccessRoleTimeouts",
      },
      users: {
        value: cdktf.listMapperHcl(managementAccessRoleUsersToHclTerraform, true)(this._users.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementAccessRoleUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
