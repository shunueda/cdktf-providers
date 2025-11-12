// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserNsxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#adom ObjectUserNsx#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#dynamic_sort_subtable ObjectUserNsx#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#fmgip ObjectUserNsx#fmgip}
  */
  readonly fmgip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#fmgpasswd ObjectUserNsx#fmgpasswd}
  */
  readonly fmgpasswd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#fmguser ObjectUserNsx#fmguser}
  */
  readonly fmguser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#id ObjectUserNsx#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#if_allgroup ObjectUserNsx#if_allgroup}
  */
  readonly ifAllgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#name ObjectUserNsx#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#password ObjectUserNsx#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#scopetype ObjectUserNsx#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#server ObjectUserNsx#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#service_id ObjectUserNsx#service_id}
  */
  readonly serviceId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#service_manager_id ObjectUserNsx#service_manager_id}
  */
  readonly serviceManagerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#service_manager_rev ObjectUserNsx#service_manager_rev}
  */
  readonly serviceManagerRev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#status ObjectUserNsx#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#user ObjectUserNsx#user}
  */
  readonly user?: string;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#service ObjectUserNsx#service}
  */
  readonly service?: ObjectUserNsxService[] | cdktf.IResolvable;
}
export interface ObjectUserNsxService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#id ObjectUserNsx#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#integration ObjectUserNsx#integration}
  */
  readonly integration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#name ObjectUserNsx#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#ref_id ObjectUserNsx#ref_id}
  */
  readonly refId?: string;
}

export function objectUserNsxServiceToTerraform(struct?: ObjectUserNsxService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    integration: cdktf.stringToTerraform(struct!.integration),
    name: cdktf.stringToTerraform(struct!.name),
    ref_id: cdktf.stringToTerraform(struct!.refId),
  }
}


export function objectUserNsxServiceToHclTerraform(struct?: ObjectUserNsxService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integration: {
      value: cdktf.stringToHclTerraform(struct!.integration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectUserNsxServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserNsxService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._integration !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectUserNsxService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._integration = undefined;
      this._name = undefined;
      this._refId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._integration = value.integration;
      this._name = value.name;
      this._refId = value.refId;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // integration - computed: false, optional: true, required: false
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  public resetIntegration() {
    this._integration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
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

  // ref_id - computed: false, optional: true, required: false
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }
}

export class ObjectUserNsxServiceList extends cdktf.ComplexList {
  public internalValue? : ObjectUserNsxService[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserNsxServiceOutputReference {
    return new ObjectUserNsxServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx fortimanager_object_user_nsx}
*/
export class ObjectUserNsx extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_nsx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserNsx resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserNsx to import
  * @param importFromId The id of the existing ObjectUserNsx that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserNsx to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_nsx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_nsx fortimanager_object_user_nsx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserNsxConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectUserNsxConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_nsx',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fmgip = config.fmgip;
    this._fmgpasswd = config.fmgpasswd;
    this._fmguser = config.fmguser;
    this._id = config.id;
    this._ifAllgroup = config.ifAllgroup;
    this._name = config.name;
    this._password = config.password;
    this._scopetype = config.scopetype;
    this._server = config.server;
    this._serviceId = config.serviceId;
    this._serviceManagerId = config.serviceManagerId;
    this._serviceManagerRev = config.serviceManagerRev;
    this._status = config.status;
    this._user = config.user;
    this._service.internalValue = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fmgip - computed: false, optional: true, required: false
  private _fmgip?: string; 
  public get fmgip() {
    return this.getStringAttribute('fmgip');
  }
  public set fmgip(value: string) {
    this._fmgip = value;
  }
  public resetFmgip() {
    this._fmgip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgipInput() {
    return this._fmgip;
  }

  // fmgpasswd - computed: true, optional: true, required: false
  private _fmgpasswd?: string[]; 
  public get fmgpasswd() {
    return cdktf.Fn.tolist(this.getListAttribute('fmgpasswd'));
  }
  public set fmgpasswd(value: string[]) {
    this._fmgpasswd = value;
  }
  public resetFmgpasswd() {
    this._fmgpasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgpasswdInput() {
    return this._fmgpasswd;
  }

  // fmguser - computed: false, optional: true, required: false
  private _fmguser?: string; 
  public get fmguser() {
    return this.getStringAttribute('fmguser');
  }
  public set fmguser(value: string) {
    this._fmguser = value;
  }
  public resetFmguser() {
    this._fmguser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmguserInput() {
    return this._fmguser;
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

  // if_allgroup - computed: true, optional: true, required: false
  private _ifAllgroup?: string; 
  public get ifAllgroup() {
    return this.getStringAttribute('if_allgroup');
  }
  public set ifAllgroup(value: string) {
    this._ifAllgroup = value;
  }
  public resetIfAllgroup() {
    this._ifAllgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifAllgroupInput() {
    return this._ifAllgroup;
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

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string[]; 
  public get serviceId() {
    return cdktf.Fn.tolist(this.getListAttribute('service_id'));
  }
  public set serviceId(value: string[]) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_manager_id - computed: false, optional: true, required: false
  private _serviceManagerId?: string; 
  public get serviceManagerId() {
    return this.getStringAttribute('service_manager_id');
  }
  public set serviceManagerId(value: string) {
    this._serviceManagerId = value;
  }
  public resetServiceManagerId() {
    this._serviceManagerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagerIdInput() {
    return this._serviceManagerId;
  }

  // service_manager_rev - computed: false, optional: true, required: false
  private _serviceManagerRev?: number; 
  public get serviceManagerRev() {
    return this.getNumberAttribute('service_manager_rev');
  }
  public set serviceManagerRev(value: number) {
    this._serviceManagerRev = value;
  }
  public resetServiceManagerRev() {
    this._serviceManagerRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagerRevInput() {
    return this._serviceManagerRev;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // service - computed: false, optional: true, required: false
  private _service = new ObjectUserNsxServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: ObjectUserNsxService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fmgip: cdktf.stringToTerraform(this._fmgip),
      fmgpasswd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fmgpasswd),
      fmguser: cdktf.stringToTerraform(this._fmguser),
      id: cdktf.stringToTerraform(this._id),
      if_allgroup: cdktf.stringToTerraform(this._ifAllgroup),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server: cdktf.stringToTerraform(this._server),
      service_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceId),
      service_manager_id: cdktf.stringToTerraform(this._serviceManagerId),
      service_manager_rev: cdktf.numberToTerraform(this._serviceManagerRev),
      status: cdktf.stringToTerraform(this._status),
      user: cdktf.stringToTerraform(this._user),
      service: cdktf.listMapper(objectUserNsxServiceToTerraform, true)(this._service.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmgip: {
        value: cdktf.stringToHclTerraform(this._fmgip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmgpasswd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fmgpasswd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fmguser: {
        value: cdktf.stringToHclTerraform(this._fmguser),
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
      if_allgroup: {
        value: cdktf.stringToHclTerraform(this._ifAllgroup),
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
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_manager_id: {
        value: cdktf.stringToHclTerraform(this._serviceManagerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_manager_rev: {
        value: cdktf.numberToHclTerraform(this._serviceManagerRev),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.listMapperHcl(objectUserNsxServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserNsxServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
