// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#comments RouterPolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#dst RouterPolicy#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#dynamic_sort_subtable RouterPolicy#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#end_port RouterPolicy#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#gateway RouterPolicy#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#id RouterPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#input_device RouterPolicy#input_device}
  */
  readonly inputDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#output_device RouterPolicy#output_device}
  */
  readonly outputDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#protocol RouterPolicy#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#seq_num RouterPolicy#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#src RouterPolicy#src}
  */
  readonly src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#start_port RouterPolicy#start_port}
  */
  readonly startPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#tos RouterPolicy#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#tos_mask RouterPolicy#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#interface RouterPolicy#interface}
  */
  readonly interface?: RouterPolicyInterface[] | cdktf.IResolvable;
  /**
  * nexthop_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#nexthop_group RouterPolicy#nexthop_group}
  */
  readonly nexthopGroup?: RouterPolicyNexthopGroup[] | cdktf.IResolvable;
  /**
  * pbr_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#pbr_map RouterPolicy#pbr_map}
  */
  readonly pbrMap?: RouterPolicyPbrMap[] | cdktf.IResolvable;
}
export interface RouterPolicyInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#name RouterPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#pbr_map_name RouterPolicy#pbr_map_name}
  */
  readonly pbrMapName?: string;
}

export function routerPolicyInterfaceToTerraform(struct?: RouterPolicyInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pbr_map_name: cdktf.stringToTerraform(struct!.pbrMapName),
  }
}


export function routerPolicyInterfaceToHclTerraform(struct?: RouterPolicyInterface | cdktf.IResolvable): any {
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
    pbr_map_name: {
      value: cdktf.stringToHclTerraform(struct!.pbrMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicyInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicyInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pbrMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbrMapName = this._pbrMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicyInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._pbrMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._pbrMapName = value.pbrMapName;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // pbr_map_name - computed: true, optional: true, required: false
  private _pbrMapName?: string; 
  public get pbrMapName() {
    return this.getStringAttribute('pbr_map_name');
  }
  public set pbrMapName(value: string) {
    this._pbrMapName = value;
  }
  public resetPbrMapName() {
    this._pbrMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbrMapNameInput() {
    return this._pbrMapName;
  }
}

export class RouterPolicyInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterPolicyInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicyInterfaceOutputReference {
    return new RouterPolicyInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterPolicyNexthopGroupNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#id RouterPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#nexthop_ip RouterPolicy#nexthop_ip}
  */
  readonly nexthopIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#nexthop_vrf_name RouterPolicy#nexthop_vrf_name}
  */
  readonly nexthopVrfName?: string;
}

export function routerPolicyNexthopGroupNexthopToTerraform(struct?: RouterPolicyNexthopGroupNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    nexthop_ip: cdktf.stringToTerraform(struct!.nexthopIp),
    nexthop_vrf_name: cdktf.stringToTerraform(struct!.nexthopVrfName),
  }
}


export function routerPolicyNexthopGroupNexthopToHclTerraform(struct?: RouterPolicyNexthopGroupNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nexthop_ip: {
      value: cdktf.stringToHclTerraform(struct!.nexthopIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop_vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.nexthopVrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicyNexthopGroupNexthopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicyNexthopGroupNexthop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nexthopIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopIp = this._nexthopIp;
    }
    if (this._nexthopVrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopVrfName = this._nexthopVrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicyNexthopGroupNexthop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._nexthopIp = undefined;
      this._nexthopVrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._nexthopIp = value.nexthopIp;
      this._nexthopVrfName = value.nexthopVrfName;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // nexthop_ip - computed: true, optional: true, required: false
  private _nexthopIp?: string; 
  public get nexthopIp() {
    return this.getStringAttribute('nexthop_ip');
  }
  public set nexthopIp(value: string) {
    this._nexthopIp = value;
  }
  public resetNexthopIp() {
    this._nexthopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIpInput() {
    return this._nexthopIp;
  }

  // nexthop_vrf_name - computed: true, optional: true, required: false
  private _nexthopVrfName?: string; 
  public get nexthopVrfName() {
    return this.getStringAttribute('nexthop_vrf_name');
  }
  public set nexthopVrfName(value: string) {
    this._nexthopVrfName = value;
  }
  public resetNexthopVrfName() {
    this._nexthopVrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopVrfNameInput() {
    return this._nexthopVrfName;
  }
}

export class RouterPolicyNexthopGroupNexthopList extends cdktf.ComplexList {
  public internalValue? : RouterPolicyNexthopGroupNexthop[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicyNexthopGroupNexthopOutputReference {
    return new RouterPolicyNexthopGroupNexthopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterPolicyNexthopGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#name RouterPolicy#name}
  */
  readonly name?: string;
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#nexthop RouterPolicy#nexthop}
  */
  readonly nexthop?: RouterPolicyNexthopGroupNexthop[] | cdktf.IResolvable;
}

export function routerPolicyNexthopGroupToTerraform(struct?: RouterPolicyNexthopGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: cdktf.listMapper(routerPolicyNexthopGroupNexthopToTerraform, true)(struct!.nexthop),
  }
}


export function routerPolicyNexthopGroupToHclTerraform(struct?: RouterPolicyNexthopGroup | cdktf.IResolvable): any {
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
    nexthop: {
      value: cdktf.listMapperHcl(routerPolicyNexthopGroupNexthopToHclTerraform, true)(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "RouterPolicyNexthopGroupNexthopList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicyNexthopGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicyNexthopGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicyNexthopGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nexthop.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nexthop.internalValue = value.nexthop;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new RouterPolicyNexthopGroupNexthopList(this, "nexthop", false);
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: RouterPolicyNexthopGroupNexthop[] | cdktf.IResolvable) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }
}

export class RouterPolicyNexthopGroupList extends cdktf.ComplexList {
  public internalValue? : RouterPolicyNexthopGroup[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicyNexthopGroupOutputReference {
    return new RouterPolicyNexthopGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterPolicyPbrMapRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#dst RouterPolicy#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#nexthop_group_name RouterPolicy#nexthop_group_name}
  */
  readonly nexthopGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#nexthop_ip RouterPolicy#nexthop_ip}
  */
  readonly nexthopIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#nexthop_vrf_name RouterPolicy#nexthop_vrf_name}
  */
  readonly nexthopVrfName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#seq_num RouterPolicy#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#src RouterPolicy#src}
  */
  readonly src?: string;
}

export function routerPolicyPbrMapRuleToTerraform(struct?: RouterPolicyPbrMapRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst: cdktf.stringToTerraform(struct!.dst),
    nexthop_group_name: cdktf.stringToTerraform(struct!.nexthopGroupName),
    nexthop_ip: cdktf.stringToTerraform(struct!.nexthopIp),
    nexthop_vrf_name: cdktf.stringToTerraform(struct!.nexthopVrfName),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
    src: cdktf.stringToTerraform(struct!.src),
  }
}


export function routerPolicyPbrMapRuleToHclTerraform(struct?: RouterPolicyPbrMapRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst: {
      value: cdktf.stringToHclTerraform(struct!.dst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop_group_name: {
      value: cdktf.stringToHclTerraform(struct!.nexthopGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop_ip: {
      value: cdktf.stringToHclTerraform(struct!.nexthopIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop_vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.nexthopVrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src: {
      value: cdktf.stringToHclTerraform(struct!.src),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicyPbrMapRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicyPbrMapRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._nexthopGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopGroupName = this._nexthopGroupName;
    }
    if (this._nexthopIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopIp = this._nexthopIp;
    }
    if (this._nexthopVrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopVrfName = this._nexthopVrfName;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    if (this._src !== undefined) {
      hasAnyValues = true;
      internalValueResult.src = this._src;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicyPbrMapRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dst = undefined;
      this._nexthopGroupName = undefined;
      this._nexthopIp = undefined;
      this._nexthopVrfName = undefined;
      this._seqNum = undefined;
      this._src = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dst = value.dst;
      this._nexthopGroupName = value.nexthopGroupName;
      this._nexthopIp = value.nexthopIp;
      this._nexthopVrfName = value.nexthopVrfName;
      this._seqNum = value.seqNum;
      this._src = value.src;
    }
  }

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // nexthop_group_name - computed: true, optional: true, required: false
  private _nexthopGroupName?: string; 
  public get nexthopGroupName() {
    return this.getStringAttribute('nexthop_group_name');
  }
  public set nexthopGroupName(value: string) {
    this._nexthopGroupName = value;
  }
  public resetNexthopGroupName() {
    this._nexthopGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopGroupNameInput() {
    return this._nexthopGroupName;
  }

  // nexthop_ip - computed: true, optional: true, required: false
  private _nexthopIp?: string; 
  public get nexthopIp() {
    return this.getStringAttribute('nexthop_ip');
  }
  public set nexthopIp(value: string) {
    this._nexthopIp = value;
  }
  public resetNexthopIp() {
    this._nexthopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIpInput() {
    return this._nexthopIp;
  }

  // nexthop_vrf_name - computed: true, optional: true, required: false
  private _nexthopVrfName?: string; 
  public get nexthopVrfName() {
    return this.getStringAttribute('nexthop_vrf_name');
  }
  public set nexthopVrfName(value: string) {
    this._nexthopVrfName = value;
  }
  public resetNexthopVrfName() {
    this._nexthopVrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopVrfNameInput() {
    return this._nexthopVrfName;
  }

  // seq_num - computed: true, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }
}

export class RouterPolicyPbrMapRuleList extends cdktf.ComplexList {
  public internalValue? : RouterPolicyPbrMapRule[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicyPbrMapRuleOutputReference {
    return new RouterPolicyPbrMapRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterPolicyPbrMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#comments RouterPolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#name RouterPolicy#name}
  */
  readonly name?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#rule RouterPolicy#rule}
  */
  readonly rule?: RouterPolicyPbrMapRule[] | cdktf.IResolvable;
}

export function routerPolicyPbrMapToTerraform(struct?: RouterPolicyPbrMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    name: cdktf.stringToTerraform(struct!.name),
    rule: cdktf.listMapper(routerPolicyPbrMapRuleToTerraform, true)(struct!.rule),
  }
}


export function routerPolicyPbrMapToHclTerraform(struct?: RouterPolicyPbrMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
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
    rule: {
      value: cdktf.listMapperHcl(routerPolicyPbrMapRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "RouterPolicyPbrMapRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterPolicyPbrMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterPolicyPbrMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterPolicyPbrMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comments = undefined;
      this._name = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comments = value.comments;
      this._name = value.name;
      this._rule.internalValue = value.rule;
    }
  }

  // comments - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // rule - computed: false, optional: true, required: false
  private _rule = new RouterPolicyPbrMapRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: RouterPolicyPbrMapRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class RouterPolicyPbrMapList extends cdktf.ComplexList {
  public internalValue? : RouterPolicyPbrMap[] | cdktf.IResolvable

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
  public get(index: number): RouterPolicyPbrMapOutputReference {
    return new RouterPolicyPbrMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy fortiswitch_router_policy}
*/
export class RouterPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_router_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterPolicy to import
  * @param importFromId The id of the existing RouterPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_router_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_policy fortiswitch_router_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_router_policy',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._dst = config.dst;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._endPort = config.endPort;
    this._gateway = config.gateway;
    this._id = config.id;
    this._inputDevice = config.inputDevice;
    this._outputDevice = config.outputDevice;
    this._protocol = config.protocol;
    this._seqNum = config.seqNum;
    this._src = config.src;
    this._startPort = config.startPort;
    this._tos = config.tos;
    this._tosMask = config.tosMask;
    this._interface.internalValue = config.interface;
    this._nexthopGroup.internalValue = config.nexthopGroup;
    this._pbrMap.internalValue = config.pbrMap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: true, optional: true, required: false
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

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
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

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // input_device - computed: true, optional: true, required: false
  private _inputDevice?: string; 
  public get inputDevice() {
    return this.getStringAttribute('input_device');
  }
  public set inputDevice(value: string) {
    this._inputDevice = value;
  }
  public resetInputDevice() {
    this._inputDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDeviceInput() {
    return this._inputDevice;
  }

  // output_device - computed: true, optional: true, required: false
  private _outputDevice?: string; 
  public get outputDevice() {
    return this.getStringAttribute('output_device');
  }
  public set outputDevice(value: string) {
    this._outputDevice = value;
  }
  public resetOutputDevice() {
    this._outputDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDeviceInput() {
    return this._outputDevice;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // seq_num - computed: true, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // tos - computed: true, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tos_mask - computed: true, optional: true, required: false
  private _tosMask?: string; 
  public get tosMask() {
    return this.getStringAttribute('tos_mask');
  }
  public set tosMask(value: string) {
    this._tosMask = value;
  }
  public resetTosMask() {
    this._tosMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosMaskInput() {
    return this._tosMask;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new RouterPolicyInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouterPolicyInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_group - computed: false, optional: true, required: false
  private _nexthopGroup = new RouterPolicyNexthopGroupList(this, "nexthop_group", false);
  public get nexthopGroup() {
    return this._nexthopGroup;
  }
  public putNexthopGroup(value: RouterPolicyNexthopGroup[] | cdktf.IResolvable) {
    this._nexthopGroup.internalValue = value;
  }
  public resetNexthopGroup() {
    this._nexthopGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopGroupInput() {
    return this._nexthopGroup.internalValue;
  }

  // pbr_map - computed: false, optional: true, required: false
  private _pbrMap = new RouterPolicyPbrMapList(this, "pbr_map", false);
  public get pbrMap() {
    return this._pbrMap;
  }
  public putPbrMap(value: RouterPolicyPbrMap[] | cdktf.IResolvable) {
    this._pbrMap.internalValue = value;
  }
  public resetPbrMap() {
    this._pbrMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbrMapInput() {
    return this._pbrMap.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      dst: cdktf.stringToTerraform(this._dst),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      end_port: cdktf.numberToTerraform(this._endPort),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      input_device: cdktf.stringToTerraform(this._inputDevice),
      output_device: cdktf.stringToTerraform(this._outputDevice),
      protocol: cdktf.numberToTerraform(this._protocol),
      seq_num: cdktf.numberToTerraform(this._seqNum),
      src: cdktf.stringToTerraform(this._src),
      start_port: cdktf.numberToTerraform(this._startPort),
      tos: cdktf.stringToTerraform(this._tos),
      tos_mask: cdktf.stringToTerraform(this._tosMask),
      interface: cdktf.listMapper(routerPolicyInterfaceToTerraform, true)(this._interface.internalValue),
      nexthop_group: cdktf.listMapper(routerPolicyNexthopGroupToTerraform, true)(this._nexthopGroup.internalValue),
      pbr_map: cdktf.listMapper(routerPolicyPbrMapToTerraform, true)(this._pbrMap.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst: {
        value: cdktf.stringToHclTerraform(this._dst),
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
      end_port: {
        value: cdktf.numberToHclTerraform(this._endPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      input_device: {
        value: cdktf.stringToHclTerraform(this._inputDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_device: {
        value: cdktf.stringToHclTerraform(this._outputDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seq_num: {
        value: cdktf.numberToHclTerraform(this._seqNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_port: {
        value: cdktf.numberToHclTerraform(this._startPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tos: {
        value: cdktf.stringToHclTerraform(this._tos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_mask: {
        value: cdktf.stringToHclTerraform(this._tosMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(routerPolicyInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterPolicyInterfaceList",
      },
      nexthop_group: {
        value: cdktf.listMapperHcl(routerPolicyNexthopGroupToHclTerraform, true)(this._nexthopGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterPolicyNexthopGroupList",
      },
      pbr_map: {
        value: cdktf.listMapperHcl(routerPolicyPbrMapToHclTerraform, true)(this._pbrMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterPolicyPbrMapList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
