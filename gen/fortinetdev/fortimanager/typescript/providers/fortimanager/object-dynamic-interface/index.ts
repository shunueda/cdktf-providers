// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectDynamicInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#adom ObjectDynamicInterface#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#color ObjectDynamicInterface#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#default_mapping ObjectDynamicInterface#default_mapping}
  */
  readonly defaultMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#defmap_intf ObjectDynamicInterface#defmap_intf}
  */
  readonly defmapIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#defmap_intrazone_deny ObjectDynamicInterface#defmap_intrazone_deny}
  */
  readonly defmapIntrazoneDeny?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#defmap_zonemember ObjectDynamicInterface#defmap_zonemember}
  */
  readonly defmapZonemember?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#description ObjectDynamicInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#dynamic_sort_subtable ObjectDynamicInterface#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#egress_shaping_profile ObjectDynamicInterface#egress_shaping_profile}
  */
  readonly egressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#id ObjectDynamicInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#ingress_shaping_profile ObjectDynamicInterface#ingress_shaping_profile}
  */
  readonly ingressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#name ObjectDynamicInterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#scopetype ObjectDynamicInterface#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#single_intf ObjectDynamicInterface#single_intf}
  */
  readonly singleIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#wildcard ObjectDynamicInterface#wildcard}
  */
  readonly wildcard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#wildcard_intf ObjectDynamicInterface#wildcard_intf}
  */
  readonly wildcardIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#zone_only ObjectDynamicInterface#zone_only}
  */
  readonly zoneOnly?: string;
  /**
  * dynamic_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#dynamic_mapping ObjectDynamicInterface#dynamic_mapping}
  */
  readonly dynamicMapping?: ObjectDynamicInterfaceDynamicMapping[] | cdktf.IResolvable;
  /**
  * platform_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#platform_mapping ObjectDynamicInterface#platform_mapping}
  */
  readonly platformMapping?: ObjectDynamicInterfacePlatformMapping[] | cdktf.IResolvable;
}
export interface ObjectDynamicInterfaceDynamicMappingScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#name ObjectDynamicInterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#vdom ObjectDynamicInterface#vdom}
  */
  readonly vdom?: string;
}

export function objectDynamicInterfaceDynamicMappingScopeToTerraform(struct?: ObjectDynamicInterfaceDynamicMappingScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectDynamicInterfaceDynamicMappingScopeToHclTerraform(struct?: ObjectDynamicInterfaceDynamicMappingScope | cdktf.IResolvable): any {
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

export class ObjectDynamicInterfaceDynamicMappingScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectDynamicInterfaceDynamicMappingScope | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectDynamicInterfaceDynamicMappingScope | cdktf.IResolvable | undefined) {
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

export class ObjectDynamicInterfaceDynamicMappingScopeList extends cdktf.ComplexList {
  public internalValue? : ObjectDynamicInterfaceDynamicMappingScope[] | cdktf.IResolvable

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
  public get(index: number): ObjectDynamicInterfaceDynamicMappingScopeOutputReference {
    return new ObjectDynamicInterfaceDynamicMappingScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectDynamicInterfaceDynamicMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#egress_shaping_profile ObjectDynamicInterface#egress_shaping_profile}
  */
  readonly egressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#ingress_shaping_profile ObjectDynamicInterface#ingress_shaping_profile}
  */
  readonly ingressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#intrazone_deny ObjectDynamicInterface#intrazone_deny}
  */
  readonly intrazoneDeny?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#local_intf ObjectDynamicInterface#local_intf}
  */
  readonly localIntf?: string[];
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#_scope ObjectDynamicInterface#_scope}
  */
  readonly scope?: ObjectDynamicInterfaceDynamicMappingScope[] | cdktf.IResolvable;
}

export function objectDynamicInterfaceDynamicMappingToTerraform(struct?: ObjectDynamicInterfaceDynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_shaping_profile: cdktf.stringToTerraform(struct!.egressShapingProfile),
    ingress_shaping_profile: cdktf.stringToTerraform(struct!.ingressShapingProfile),
    intrazone_deny: cdktf.stringToTerraform(struct!.intrazoneDeny),
    local_intf: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localIntf),
    _scope: cdktf.listMapper(objectDynamicInterfaceDynamicMappingScopeToTerraform, true)(struct!.scope),
  }
}


export function objectDynamicInterfaceDynamicMappingToHclTerraform(struct?: ObjectDynamicInterfaceDynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_shaping_profile: {
      value: cdktf.stringToHclTerraform(struct!.egressShapingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_shaping_profile: {
      value: cdktf.stringToHclTerraform(struct!.ingressShapingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intrazone_deny: {
      value: cdktf.stringToHclTerraform(struct!.intrazoneDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_intf: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localIntf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    _scope: {
      value: cdktf.listMapperHcl(objectDynamicInterfaceDynamicMappingScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectDynamicInterfaceDynamicMappingScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectDynamicInterfaceDynamicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectDynamicInterfaceDynamicMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressShapingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressShapingProfile = this._egressShapingProfile;
    }
    if (this._ingressShapingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressShapingProfile = this._ingressShapingProfile;
    }
    if (this._intrazoneDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.intrazoneDeny = this._intrazoneDeny;
    }
    if (this._localIntf !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIntf = this._localIntf;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectDynamicInterfaceDynamicMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressShapingProfile = undefined;
      this._ingressShapingProfile = undefined;
      this._intrazoneDeny = undefined;
      this._localIntf = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressShapingProfile = value.egressShapingProfile;
      this._ingressShapingProfile = value.ingressShapingProfile;
      this._intrazoneDeny = value.intrazoneDeny;
      this._localIntf = value.localIntf;
      this._scope.internalValue = value.scope;
    }
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

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectDynamicInterfaceDynamicMappingScopeList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectDynamicInterfaceDynamicMappingScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}

export class ObjectDynamicInterfaceDynamicMappingList extends cdktf.ComplexList {
  public internalValue? : ObjectDynamicInterfaceDynamicMapping[] | cdktf.IResolvable

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
  public get(index: number): ObjectDynamicInterfaceDynamicMappingOutputReference {
    return new ObjectDynamicInterfaceDynamicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectDynamicInterfacePlatformMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#egress_shaping_profile ObjectDynamicInterface#egress_shaping_profile}
  */
  readonly egressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#ingress_shaping_profile ObjectDynamicInterface#ingress_shaping_profile}
  */
  readonly ingressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#intf_zone ObjectDynamicInterface#intf_zone}
  */
  readonly intfZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#intrazone_deny ObjectDynamicInterface#intrazone_deny}
  */
  readonly intrazoneDeny?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#name ObjectDynamicInterface#name}
  */
  readonly name?: string;
}

export function objectDynamicInterfacePlatformMappingToTerraform(struct?: ObjectDynamicInterfacePlatformMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_shaping_profile: cdktf.stringToTerraform(struct!.egressShapingProfile),
    ingress_shaping_profile: cdktf.stringToTerraform(struct!.ingressShapingProfile),
    intf_zone: cdktf.stringToTerraform(struct!.intfZone),
    intrazone_deny: cdktf.stringToTerraform(struct!.intrazoneDeny),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectDynamicInterfacePlatformMappingToHclTerraform(struct?: ObjectDynamicInterfacePlatformMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_shaping_profile: {
      value: cdktf.stringToHclTerraform(struct!.egressShapingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_shaping_profile: {
      value: cdktf.stringToHclTerraform(struct!.ingressShapingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intf_zone: {
      value: cdktf.stringToHclTerraform(struct!.intfZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intrazone_deny: {
      value: cdktf.stringToHclTerraform(struct!.intrazoneDeny),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectDynamicInterfacePlatformMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectDynamicInterfacePlatformMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressShapingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressShapingProfile = this._egressShapingProfile;
    }
    if (this._ingressShapingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressShapingProfile = this._ingressShapingProfile;
    }
    if (this._intfZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfZone = this._intfZone;
    }
    if (this._intrazoneDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.intrazoneDeny = this._intrazoneDeny;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectDynamicInterfacePlatformMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressShapingProfile = undefined;
      this._ingressShapingProfile = undefined;
      this._intfZone = undefined;
      this._intrazoneDeny = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressShapingProfile = value.egressShapingProfile;
      this._ingressShapingProfile = value.ingressShapingProfile;
      this._intfZone = value.intfZone;
      this._intrazoneDeny = value.intrazoneDeny;
      this._name = value.name;
    }
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

  // intf_zone - computed: false, optional: true, required: false
  private _intfZone?: string; 
  public get intfZone() {
    return this.getStringAttribute('intf_zone');
  }
  public set intfZone(value: string) {
    this._intfZone = value;
  }
  public resetIntfZone() {
    this._intfZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfZoneInput() {
    return this._intfZone;
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
}

export class ObjectDynamicInterfacePlatformMappingList extends cdktf.ComplexList {
  public internalValue? : ObjectDynamicInterfacePlatformMapping[] | cdktf.IResolvable

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
  public get(index: number): ObjectDynamicInterfacePlatformMappingOutputReference {
    return new ObjectDynamicInterfacePlatformMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface fortimanager_object_dynamic_interface}
*/
export class ObjectDynamicInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_dynamic_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectDynamicInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectDynamicInterface to import
  * @param importFromId The id of the existing ObjectDynamicInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectDynamicInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_dynamic_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_dynamic_interface fortimanager_object_dynamic_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectDynamicInterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectDynamicInterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_dynamic_interface',
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
    this._color = config.color;
    this._defaultMapping = config.defaultMapping;
    this._defmapIntf = config.defmapIntf;
    this._defmapIntrazoneDeny = config.defmapIntrazoneDeny;
    this._defmapZonemember = config.defmapZonemember;
    this._description = config.description;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._egressShapingProfile = config.egressShapingProfile;
    this._id = config.id;
    this._ingressShapingProfile = config.ingressShapingProfile;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._singleIntf = config.singleIntf;
    this._wildcard = config.wildcard;
    this._wildcardIntf = config.wildcardIntf;
    this._zoneOnly = config.zoneOnly;
    this._dynamicMapping.internalValue = config.dynamicMapping;
    this._platformMapping.internalValue = config.platformMapping;
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

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // default_mapping - computed: false, optional: true, required: false
  private _defaultMapping?: string; 
  public get defaultMapping() {
    return this.getStringAttribute('default_mapping');
  }
  public set defaultMapping(value: string) {
    this._defaultMapping = value;
  }
  public resetDefaultMapping() {
    this._defaultMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMappingInput() {
    return this._defaultMapping;
  }

  // defmap_intf - computed: false, optional: true, required: false
  private _defmapIntf?: string; 
  public get defmapIntf() {
    return this.getStringAttribute('defmap_intf');
  }
  public set defmapIntf(value: string) {
    this._defmapIntf = value;
  }
  public resetDefmapIntf() {
    this._defmapIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defmapIntfInput() {
    return this._defmapIntf;
  }

  // defmap_intrazone_deny - computed: false, optional: true, required: false
  private _defmapIntrazoneDeny?: string; 
  public get defmapIntrazoneDeny() {
    return this.getStringAttribute('defmap_intrazone_deny');
  }
  public set defmapIntrazoneDeny(value: string) {
    this._defmapIntrazoneDeny = value;
  }
  public resetDefmapIntrazoneDeny() {
    this._defmapIntrazoneDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defmapIntrazoneDenyInput() {
    return this._defmapIntrazoneDeny;
  }

  // defmap_zonemember - computed: true, optional: true, required: false
  private _defmapZonemember?: string[]; 
  public get defmapZonemember() {
    return cdktf.Fn.tolist(this.getListAttribute('defmap_zonemember'));
  }
  public set defmapZonemember(value: string[]) {
    this._defmapZonemember = value;
  }
  public resetDefmapZonemember() {
    this._defmapZonemember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defmapZonememberInput() {
    return this._defmapZonemember;
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

  // single_intf - computed: true, optional: true, required: false
  private _singleIntf?: string; 
  public get singleIntf() {
    return this.getStringAttribute('single_intf');
  }
  public set singleIntf(value: string) {
    this._singleIntf = value;
  }
  public resetSingleIntf() {
    this._singleIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleIntfInput() {
    return this._singleIntf;
  }

  // wildcard - computed: true, optional: true, required: false
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }

  // wildcard_intf - computed: false, optional: true, required: false
  private _wildcardIntf?: string; 
  public get wildcardIntf() {
    return this.getStringAttribute('wildcard_intf');
  }
  public set wildcardIntf(value: string) {
    this._wildcardIntf = value;
  }
  public resetWildcardIntf() {
    this._wildcardIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardIntfInput() {
    return this._wildcardIntf;
  }

  // zone_only - computed: true, optional: true, required: false
  private _zoneOnly?: string; 
  public get zoneOnly() {
    return this.getStringAttribute('zone_only');
  }
  public set zoneOnly(value: string) {
    this._zoneOnly = value;
  }
  public resetZoneOnly() {
    this._zoneOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOnlyInput() {
    return this._zoneOnly;
  }

  // dynamic_mapping - computed: false, optional: true, required: false
  private _dynamicMapping = new ObjectDynamicInterfaceDynamicMappingList(this, "dynamic_mapping", false);
  public get dynamicMapping() {
    return this._dynamicMapping;
  }
  public putDynamicMapping(value: ObjectDynamicInterfaceDynamicMapping[] | cdktf.IResolvable) {
    this._dynamicMapping.internalValue = value;
  }
  public resetDynamicMapping() {
    this._dynamicMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingInput() {
    return this._dynamicMapping.internalValue;
  }

  // platform_mapping - computed: false, optional: true, required: false
  private _platformMapping = new ObjectDynamicInterfacePlatformMappingList(this, "platform_mapping", false);
  public get platformMapping() {
    return this._platformMapping;
  }
  public putPlatformMapping(value: ObjectDynamicInterfacePlatformMapping[] | cdktf.IResolvable) {
    this._platformMapping.internalValue = value;
  }
  public resetPlatformMapping() {
    this._platformMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformMappingInput() {
    return this._platformMapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      color: cdktf.numberToTerraform(this._color),
      default_mapping: cdktf.stringToTerraform(this._defaultMapping),
      defmap_intf: cdktf.stringToTerraform(this._defmapIntf),
      defmap_intrazone_deny: cdktf.stringToTerraform(this._defmapIntrazoneDeny),
      defmap_zonemember: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defmapZonemember),
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      egress_shaping_profile: cdktf.stringToTerraform(this._egressShapingProfile),
      id: cdktf.stringToTerraform(this._id),
      ingress_shaping_profile: cdktf.stringToTerraform(this._ingressShapingProfile),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      single_intf: cdktf.stringToTerraform(this._singleIntf),
      wildcard: cdktf.stringToTerraform(this._wildcard),
      wildcard_intf: cdktf.stringToTerraform(this._wildcardIntf),
      zone_only: cdktf.stringToTerraform(this._zoneOnly),
      dynamic_mapping: cdktf.listMapper(objectDynamicInterfaceDynamicMappingToTerraform, true)(this._dynamicMapping.internalValue),
      platform_mapping: cdktf.listMapper(objectDynamicInterfacePlatformMappingToTerraform, true)(this._platformMapping.internalValue),
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
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_mapping: {
        value: cdktf.stringToHclTerraform(this._defaultMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defmap_intf: {
        value: cdktf.stringToHclTerraform(this._defmapIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defmap_intrazone_deny: {
        value: cdktf.stringToHclTerraform(this._defmapIntrazoneDeny),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defmap_zonemember: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defmapZonemember),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_intf: {
        value: cdktf.stringToHclTerraform(this._singleIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard: {
        value: cdktf.stringToHclTerraform(this._wildcard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard_intf: {
        value: cdktf.stringToHclTerraform(this._wildcardIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_only: {
        value: cdktf.stringToHclTerraform(this._zoneOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_mapping: {
        value: cdktf.listMapperHcl(objectDynamicInterfaceDynamicMappingToHclTerraform, true)(this._dynamicMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectDynamicInterfaceDynamicMappingList",
      },
      platform_mapping: {
        value: cdktf.listMapperHcl(objectDynamicInterfacePlatformMappingToHclTerraform, true)(this._platformMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectDynamicInterfacePlatformMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
