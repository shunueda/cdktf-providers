// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRafayGroupassociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#add_users DataRafayGroupassociation#add_users}
  */
  readonly addUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#custom_roles DataRafayGroupassociation#custom_roles}
  */
  readonly customRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#group DataRafayGroupassociation#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#id DataRafayGroupassociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IDP users vs Local users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#idp_user DataRafayGroupassociation#idp_user}
  */
  readonly idpUser?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#namespaces DataRafayGroupassociation#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#project DataRafayGroupassociation#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#remove_users DataRafayGroupassociation#remove_users}
  */
  readonly removeUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#roles DataRafayGroupassociation#roles}
  */
  readonly roles?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#timeouts DataRafayGroupassociation#timeouts}
  */
  readonly timeouts?: DataRafayGroupassociationTimeouts;
}
export interface DataRafayGroupassociationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#read DataRafayGroupassociation#read}
  */
  readonly read?: string;
}

export function dataRafayGroupassociationTimeoutsToTerraform(struct?: DataRafayGroupassociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataRafayGroupassociationTimeoutsToHclTerraform(struct?: DataRafayGroupassociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayGroupassociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRafayGroupassociationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayGroupassociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation rafay_groupassociation}
*/
export class DataRafayGroupassociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_groupassociation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRafayGroupassociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRafayGroupassociation to import
  * @param importFromId The id of the existing DataRafayGroupassociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRafayGroupassociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_groupassociation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/data-sources/groupassociation rafay_groupassociation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRafayGroupassociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataRafayGroupassociationConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_groupassociation',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.53',
        providerVersionConstraint: '1.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addUsers = config.addUsers;
    this._customRoles = config.customRoles;
    this._group = config.group;
    this._id = config.id;
    this._idpUser = config.idpUser;
    this._namespaces = config.namespaces;
    this._project = config.project;
    this._removeUsers = config.removeUsers;
    this._roles = config.roles;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_users - computed: false, optional: true, required: false
  private _addUsers?: string[]; 
  public get addUsers() {
    return this.getListAttribute('add_users');
  }
  public set addUsers(value: string[]) {
    this._addUsers = value;
  }
  public resetAddUsers() {
    this._addUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addUsersInput() {
    return this._addUsers;
  }

  // custom_roles - computed: false, optional: true, required: false
  private _customRoles?: string[]; 
  public get customRoles() {
    return this.getListAttribute('custom_roles');
  }
  public set customRoles(value: string[]) {
    this._customRoles = value;
  }
  public resetCustomRoles() {
    this._customRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRolesInput() {
    return this._customRoles;
  }

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

  // idp_user - computed: false, optional: true, required: false
  private _idpUser?: boolean | cdktf.IResolvable; 
  public get idpUser() {
    return this.getBooleanAttribute('idp_user');
  }
  public set idpUser(value: boolean | cdktf.IResolvable) {
    this._idpUser = value;
  }
  public resetIdpUser() {
    this._idpUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpUserInput() {
    return this._idpUser;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // remove_users - computed: false, optional: true, required: false
  private _removeUsers?: string[]; 
  public get removeUsers() {
    return this.getListAttribute('remove_users');
  }
  public set removeUsers(value: string[]) {
    this._removeUsers = value;
  }
  public resetRemoveUsers() {
    this._removeUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeUsersInput() {
    return this._removeUsers;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataRafayGroupassociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataRafayGroupassociationTimeouts) {
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
      add_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addUsers),
      custom_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customRoles),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      idp_user: cdktf.booleanToTerraform(this._idpUser),
      namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._namespaces),
      project: cdktf.stringToTerraform(this._project),
      remove_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._removeUsers),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      timeouts: dataRafayGroupassociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      idp_user: {
        value: cdktf.booleanToHclTerraform(this._idpUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._namespaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._removeUsers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: dataRafayGroupassociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRafayGroupassociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
