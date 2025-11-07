// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityconsoleInstallObjectsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2#category SecurityconsoleInstallObjectsV2#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2#dynamic_sort_subtable SecurityconsoleInstallObjectsV2#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2#fmgadom SecurityconsoleInstallObjectsV2#fmgadom}
  */
  readonly fmgadom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2#force_recreate SecurityconsoleInstallObjectsV2#force_recreate}
  */
  readonly forceRecreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2#id SecurityconsoleInstallObjectsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2#objects SecurityconsoleInstallObjectsV2#objects}
  */
  readonly objects?: string[];
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2#scope SecurityconsoleInstallObjectsV2#scope}
  */
  readonly scope?: SecurityconsoleInstallObjectsV2Scope[] | cdktf.IResolvable;
}
export interface SecurityconsoleInstallObjectsV2Scope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2#name SecurityconsoleInstallObjectsV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2#vdom SecurityconsoleInstallObjectsV2#vdom}
  */
  readonly vdom?: string;
}

export function securityconsoleInstallObjectsV2ScopeToTerraform(struct?: SecurityconsoleInstallObjectsV2Scope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function securityconsoleInstallObjectsV2ScopeToHclTerraform(struct?: SecurityconsoleInstallObjectsV2Scope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityconsoleInstallObjectsV2ScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityconsoleInstallObjectsV2Scope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityconsoleInstallObjectsV2Scope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
    }
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class SecurityconsoleInstallObjectsV2ScopeList extends cdktf.ComplexList {
  public internalValue? : SecurityconsoleInstallObjectsV2Scope[] | cdktf.IResolvable

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
  public get(index: number): SecurityconsoleInstallObjectsV2ScopeOutputReference {
    return new SecurityconsoleInstallObjectsV2ScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2 fortimanager_securityconsole_install_objects_v2}
*/
export class SecurityconsoleInstallObjectsV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_securityconsole_install_objects_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityconsoleInstallObjectsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityconsoleInstallObjectsV2 to import
  * @param importFromId The id of the existing SecurityconsoleInstallObjectsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityconsoleInstallObjectsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_securityconsole_install_objects_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_install_objects_v2 fortimanager_securityconsole_install_objects_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityconsoleInstallObjectsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityconsoleInstallObjectsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_securityconsole_install_objects_v2',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fmgadom = config.fmgadom;
    this._forceRecreate = config.forceRecreate;
    this._id = config.id;
    this._objects = config.objects;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // fmgadom - computed: true, optional: true, required: false
  private _fmgadom?: string; 
  public get fmgadom() {
    return this.getStringAttribute('fmgadom');
  }
  public set fmgadom(value: string) {
    this._fmgadom = value;
  }
  public resetFmgadom() {
    this._fmgadom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgadomInput() {
    return this._fmgadom;
  }

  // force_recreate - computed: true, optional: true, required: false
  private _forceRecreate?: string; 
  public get forceRecreate() {
    return this.getStringAttribute('force_recreate');
  }
  public set forceRecreate(value: string) {
    this._forceRecreate = value;
  }
  public resetForceRecreate() {
    this._forceRecreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRecreateInput() {
    return this._forceRecreate;
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

  // objects - computed: true, optional: true, required: false
  private _objects?: string[]; 
  public get objects() {
    return cdktf.Fn.tolist(this.getListAttribute('objects'));
  }
  public set objects(value: string[]) {
    this._objects = value;
  }
  public resetObjects() {
    this._objects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new SecurityconsoleInstallObjectsV2ScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: SecurityconsoleInstallObjectsV2Scope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fmgadom: cdktf.stringToTerraform(this._fmgadom),
      force_recreate: cdktf.stringToTerraform(this._forceRecreate),
      id: cdktf.stringToTerraform(this._id),
      objects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objects),
      scope: cdktf.listMapper(securityconsoleInstallObjectsV2ScopeToTerraform, true)(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      fmgadom: {
        value: cdktf.stringToHclTerraform(this._fmgadom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_recreate: {
        value: cdktf.stringToHclTerraform(this._forceRecreate),
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
      objects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objects),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scope: {
        value: cdktf.listMapperHcl(securityconsoleInstallObjectsV2ScopeToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityconsoleInstallObjectsV2ScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
