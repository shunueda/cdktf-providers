// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityconsoleAssignPackageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package#dynamic_sort_subtable SecurityconsoleAssignPackage#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package#flags SecurityconsoleAssignPackage#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package#force_recreate SecurityconsoleAssignPackage#force_recreate}
  */
  readonly forceRecreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package#id SecurityconsoleAssignPackage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package#pkg SecurityconsoleAssignPackage#pkg}
  */
  readonly pkg?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package#target SecurityconsoleAssignPackage#target}
  */
  readonly target?: SecurityconsoleAssignPackageTarget[] | cdktf.IResolvable;
}
export interface SecurityconsoleAssignPackageTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package#adom SecurityconsoleAssignPackage#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package#excluded SecurityconsoleAssignPackage#excluded}
  */
  readonly excluded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package#pkg SecurityconsoleAssignPackage#pkg}
  */
  readonly pkg?: string;
}

export function securityconsoleAssignPackageTargetToTerraform(struct?: SecurityconsoleAssignPackageTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adom: cdktf.stringToTerraform(struct!.adom),
    excluded: cdktf.stringToTerraform(struct!.excluded),
    pkg: cdktf.stringToTerraform(struct!.pkg),
  }
}


export function securityconsoleAssignPackageTargetToHclTerraform(struct?: SecurityconsoleAssignPackageTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adom: {
      value: cdktf.stringToHclTerraform(struct!.adom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded: {
      value: cdktf.stringToHclTerraform(struct!.excluded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkg: {
      value: cdktf.stringToHclTerraform(struct!.pkg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityconsoleAssignPackageTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityconsoleAssignPackageTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adom !== undefined) {
      hasAnyValues = true;
      internalValueResult.adom = this._adom;
    }
    if (this._excluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.excluded = this._excluded;
    }
    if (this._pkg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkg = this._pkg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityconsoleAssignPackageTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adom = undefined;
      this._excluded = undefined;
      this._pkg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adom = value.adom;
      this._excluded = value.excluded;
      this._pkg = value.pkg;
    }
  }

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

  // excluded - computed: true, optional: true, required: false
  private _excluded?: string; 
  public get excluded() {
    return this.getStringAttribute('excluded');
  }
  public set excluded(value: string) {
    this._excluded = value;
  }
  public resetExcluded() {
    this._excluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedInput() {
    return this._excluded;
  }

  // pkg - computed: false, optional: true, required: false
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  public resetPkg() {
    this._pkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }
}

export class SecurityconsoleAssignPackageTargetList extends cdktf.ComplexList {
  public internalValue? : SecurityconsoleAssignPackageTarget[] | cdktf.IResolvable

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
  public get(index: number): SecurityconsoleAssignPackageTargetOutputReference {
    return new SecurityconsoleAssignPackageTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package fortimanager_securityconsole_assign_package}
*/
export class SecurityconsoleAssignPackage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_securityconsole_assign_package";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityconsoleAssignPackage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityconsoleAssignPackage to import
  * @param importFromId The id of the existing SecurityconsoleAssignPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityconsoleAssignPackage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_securityconsole_assign_package", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_assign_package fortimanager_securityconsole_assign_package} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityconsoleAssignPackageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityconsoleAssignPackageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_securityconsole_assign_package',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._flags = config.flags;
    this._forceRecreate = config.forceRecreate;
    this._id = config.id;
    this._pkg = config.pkg;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // flags - computed: true, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return cdktf.Fn.tolist(this.getListAttribute('flags'));
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
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

  // pkg - computed: false, optional: true, required: false
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  public resetPkg() {
    this._pkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // target - computed: false, optional: true, required: false
  private _target = new SecurityconsoleAssignPackageTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: SecurityconsoleAssignPackageTarget[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._flags),
      force_recreate: cdktf.stringToTerraform(this._forceRecreate),
      id: cdktf.stringToTerraform(this._id),
      pkg: cdktf.stringToTerraform(this._pkg),
      target: cdktf.listMapper(securityconsoleAssignPackageTargetToTerraform, true)(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._flags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.listMapperHcl(securityconsoleAssignPackageTargetToHclTerraform, true)(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityconsoleAssignPackageTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
