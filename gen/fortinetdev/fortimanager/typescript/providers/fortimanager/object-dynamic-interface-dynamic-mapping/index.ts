// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectDynamicInterfaceDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#adom ObjectDynamicInterfaceDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#dynamic_sort_subtable ObjectDynamicInterfaceDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#egress_shaping_profile ObjectDynamicInterfaceDynamicMappingA#egress_shaping_profile}
  */
  readonly egressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#id ObjectDynamicInterfaceDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#ingress_shaping_profile ObjectDynamicInterfaceDynamicMappingA#ingress_shaping_profile}
  */
  readonly ingressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#interface ObjectDynamicInterfaceDynamicMappingA#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#intrazone_deny ObjectDynamicInterfaceDynamicMappingA#intrazone_deny}
  */
  readonly intrazoneDeny?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#local_intf ObjectDynamicInterfaceDynamicMappingA#local_intf}
  */
  readonly localIntf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#scopetype ObjectDynamicInterfaceDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#_scope ObjectDynamicInterfaceDynamicMappingA#_scope}
  */
  readonly scope?: ObjectDynamicInterfaceDynamicMappingScopeA[] | cdktf.IResolvable;
}
export interface ObjectDynamicInterfaceDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#name ObjectDynamicInterfaceDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#vdom ObjectDynamicInterfaceDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectDynamicInterfaceDynamicMappingScopeAToTerraform(struct?: ObjectDynamicInterfaceDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectDynamicInterfaceDynamicMappingScopeAToHclTerraform(struct?: ObjectDynamicInterfaceDynamicMappingScopeA | cdktf.IResolvable): any {
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

export class ObjectDynamicInterfaceDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectDynamicInterfaceDynamicMappingScopeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectDynamicInterfaceDynamicMappingScopeA | cdktf.IResolvable | undefined) {
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

export class ObjectDynamicInterfaceDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectDynamicInterfaceDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectDynamicInterfaceDynamicMappingScopeAOutputReference {
    return new ObjectDynamicInterfaceDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping fortimanager_object_dynamic_interface_dynamic_mapping}
*/
export class ObjectDynamicInterfaceDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_dynamic_interface_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectDynamicInterfaceDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectDynamicInterfaceDynamicMappingA to import
  * @param importFromId The id of the existing ObjectDynamicInterfaceDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectDynamicInterfaceDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_dynamic_interface_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface_dynamic_mapping fortimanager_object_dynamic_interface_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectDynamicInterfaceDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectDynamicInterfaceDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_dynamic_interface_dynamic_mapping',
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
    this._egressShapingProfile = config.egressShapingProfile;
    this._id = config.id;
    this._ingressShapingProfile = config.ingressShapingProfile;
    this._interface = config.interface;
    this._intrazoneDeny = config.intrazoneDeny;
    this._localIntf = config.localIntf;
    this._scopetype = config.scopetype;
    this._scope.internalValue = config.scope;
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

  // egress_shaping_profile - computed: false, optional: true, required: false
  private _egressShapingProfile?: string; 
  public get egressShapingProfile() {
    return this.getStringAttribute('egress_shaping_profile');
  }
  public set egressShapingProfile(value: string) {
    this._egressShapingProfile = value;
  }
  public resetEgressShapingProfile() {
    this._egressShapingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressShapingProfileInput() {
    return this._egressShapingProfile;
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

  // ingress_shaping_profile - computed: false, optional: true, required: false
  private _ingressShapingProfile?: string; 
  public get ingressShapingProfile() {
    return this.getStringAttribute('ingress_shaping_profile');
  }
  public set ingressShapingProfile(value: string) {
    this._ingressShapingProfile = value;
  }
  public resetIngressShapingProfile() {
    this._ingressShapingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressShapingProfileInput() {
    return this._ingressShapingProfile;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // intrazone_deny - computed: false, optional: true, required: false
  private _intrazoneDeny?: string; 
  public get intrazoneDeny() {
    return this.getStringAttribute('intrazone_deny');
  }
  public set intrazoneDeny(value: string) {
    this._intrazoneDeny = value;
  }
  public resetIntrazoneDeny() {
    this._intrazoneDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intrazoneDenyInput() {
    return this._intrazoneDeny;
  }

  // local_intf - computed: true, optional: true, required: false
  private _localIntf?: string[]; 
  public get localIntf() {
    return cdktf.Fn.tolist(this.getListAttribute('local_intf'));
  }
  public set localIntf(value: string[]) {
    this._localIntf = value;
  }
  public resetLocalIntf() {
    this._localIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIntfInput() {
    return this._localIntf;
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

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectDynamicInterfaceDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectDynamicInterfaceDynamicMappingScopeA[] | cdktf.IResolvable) {
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
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      egress_shaping_profile: cdktf.stringToTerraform(this._egressShapingProfile),
      id: cdktf.stringToTerraform(this._id),
      ingress_shaping_profile: cdktf.stringToTerraform(this._ingressShapingProfile),
      interface: cdktf.stringToTerraform(this._interface),
      intrazone_deny: cdktf.stringToTerraform(this._intrazoneDeny),
      local_intf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localIntf),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      _scope: cdktf.listMapper(objectDynamicInterfaceDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
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
      egress_shaping_profile: {
        value: cdktf.stringToHclTerraform(this._egressShapingProfile),
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
      ingress_shaping_profile: {
        value: cdktf.stringToHclTerraform(this._ingressShapingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intrazone_deny: {
        value: cdktf.stringToHclTerraform(this._intrazoneDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_intf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localIntf),
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
      _scope: {
        value: cdktf.listMapperHcl(objectDynamicInterfaceDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectDynamicInterfaceDynamicMappingScopeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
