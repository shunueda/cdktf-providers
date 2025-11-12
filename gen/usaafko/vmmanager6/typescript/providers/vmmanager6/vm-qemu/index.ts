// https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmQemuConfig extends cdktf.TerraformMetaArguments {
  /**
  * VMmanager user id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#account VmQemu#account}
  */
  readonly account?: number;
  /**
  * Anti spoofing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#anti_spoofing VmQemu#anti_spoofing}
  */
  readonly antiSpoofing?: boolean | cdktf.IResolvable;
  /**
  * VMmanager 6 cluster id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#cluster VmQemu#cluster}
  */
  readonly cluster?: number;
  /**
  * Number of vCPU's for VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#cores VmQemu#cores}
  */
  readonly cores?: number;
  /**
  * Cpu mode. Can be default, host-model, host-passthrough
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#cpu_mode VmQemu#cpu_mode}
  */
  readonly cpuMode?: string;
  /**
  * The VM description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#desc VmQemu#desc}
  */
  readonly desc?: string;
  /**
  * Disk Size of VM in Megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#disk VmQemu#disk}
  */
  readonly disk?: number;
  /**
  * Internal variable. Main disk ID of VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#disk_id VmQemu#disk_id}
  */
  readonly diskId?: number;
  /**
  * Domain for VM's ip addresses and hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#domain VmQemu#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#id VmQemu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of ipv4 addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#ipv4_number VmQemu#ipv4_number}
  */
  readonly ipv4Number?: number;
  /**
  * VMmanager ip pools, to use for ip assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#ipv4_pools VmQemu#ipv4_pools}
  */
  readonly ipv4Pools?: number[];
  /**
  * RAM Size of VM in Megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#memory VmQemu#memory}
  */
  readonly memory?: number;
  /**
  * The VM name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#name VmQemu#name}
  */
  readonly name: string;
  /**
  * VMmanager 6 node id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#node VmQemu#node}
  */
  readonly nodeAttribute?: number;
  /**
  * VMmanager 6 template id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#os VmQemu#os}
  */
  readonly os: number;
  /**
  * Password for VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#password VmQemu#password}
  */
  readonly password: string;
  /**
  * id of VM preset. Preset will overwrite your cpu/mem/disk settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#preset VmQemu#preset}
  */
  readonly preset?: number;
  /**
  * custom_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#custom_interfaces VmQemu#custom_interfaces}
  */
  readonly customInterfaces?: VmQemuCustomInterfaces[] | cdktf.IResolvable;
  /**
  * recipes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#recipes VmQemu#recipes}
  */
  readonly recipes?: VmQemuRecipes[] | cdktf.IResolvable;
  /**
  * vxlan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#vxlan VmQemu#vxlan}
  */
  readonly vxlan?: VmQemuVxlan[] | cdktf.IResolvable;
}
export interface VmQemuIpAddresses {
}

export function vmQemuIpAddressesToTerraform(struct?: VmQemuIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmQemuIpAddressesToHclTerraform(struct?: VmQemuIpAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmQemuIpAddressesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VmQemuIpAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuIpAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr - computed: true, optional: false, required: false
  public get addr() {
    return this.getStringAttribute('addr');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getNumberAttribute('family');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }

  // netid - computed: true, optional: false, required: false
  public get netid() {
    return this.getNumberAttribute('netid');
  }
}

export class VmQemuIpAddressesList extends cdktf.ComplexList {

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
  public get(index: number): VmQemuIpAddressesOutputReference {
    return new VmQemuIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmQemuCustomInterfaces {
  /**
  * Bridge name for interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#bridge VmQemu#bridge}
  */
  readonly bridge?: string;
  /**
  * How many ips add to this interface from ip_pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#ip_count VmQemu#ip_count}
  */
  readonly ipCount?: number;
  /**
  * Ip address to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#ip_name VmQemu#ip_name}
  */
  readonly ipName?: string;
  /**
  * Pool of ip addresses to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#ippool VmQemu#ippool}
  */
  readonly ippool?: number;
}

export function vmQemuCustomInterfacesToTerraform(struct?: VmQemuCustomInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    ip_count: cdktf.numberToTerraform(struct!.ipCount),
    ip_name: cdktf.stringToTerraform(struct!.ipName),
    ippool: cdktf.numberToTerraform(struct!.ippool),
  }
}


export function vmQemuCustomInterfacesToHclTerraform(struct?: VmQemuCustomInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge: {
      value: cdktf.stringToHclTerraform(struct!.bridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_count: {
      value: cdktf.numberToHclTerraform(struct!.ipCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_name: {
      value: cdktf.stringToHclTerraform(struct!.ipName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ippool: {
      value: cdktf.numberToHclTerraform(struct!.ippool),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmQemuCustomInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuCustomInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._ipCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCount = this._ipCount;
    }
    if (this._ipName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipName = this._ipName;
    }
    if (this._ippool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ippool = this._ippool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuCustomInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge = undefined;
      this._ipCount = undefined;
      this._ipName = undefined;
      this._ippool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge = value.bridge;
      this._ipCount = value.ipCount;
      this._ipName = value.ipName;
      this._ippool = value.ippool;
    }
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
  }

  // ip_count - computed: false, optional: true, required: false
  private _ipCount?: number; 
  public get ipCount() {
    return this.getNumberAttribute('ip_count');
  }
  public set ipCount(value: number) {
    this._ipCount = value;
  }
  public resetIpCount() {
    this._ipCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCountInput() {
    return this._ipCount;
  }

  // ip_name - computed: false, optional: true, required: false
  private _ipName?: string; 
  public get ipName() {
    return this.getStringAttribute('ip_name');
  }
  public set ipName(value: string) {
    this._ipName = value;
  }
  public resetIpName() {
    this._ipName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNameInput() {
    return this._ipName;
  }

  // ippool - computed: false, optional: true, required: false
  private _ippool?: number; 
  public get ippool() {
    return this.getNumberAttribute('ippool');
  }
  public set ippool(value: number) {
    this._ippool = value;
  }
  public resetIppool() {
    this._ippool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolInput() {
    return this._ippool;
  }
}

export class VmQemuCustomInterfacesList extends cdktf.ComplexList {
  public internalValue? : VmQemuCustomInterfaces[] | cdktf.IResolvable

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
  public get(index: number): VmQemuCustomInterfacesOutputReference {
    return new VmQemuCustomInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmQemuRecipesRecipeParams {
  /**
  * param name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#name VmQemu#name}
  */
  readonly name: string;
  /**
  * param value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#value VmQemu#value}
  */
  readonly value: string;
}

export function vmQemuRecipesRecipeParamsToTerraform(struct?: VmQemuRecipesRecipeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vmQemuRecipesRecipeParamsToHclTerraform(struct?: VmQemuRecipesRecipeParams | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmQemuRecipesRecipeParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuRecipesRecipeParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuRecipesRecipeParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VmQemuRecipesRecipeParamsList extends cdktf.ComplexList {
  public internalValue? : VmQemuRecipesRecipeParams[] | cdktf.IResolvable

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
  public get(index: number): VmQemuRecipesRecipeParamsOutputReference {
    return new VmQemuRecipesRecipeParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmQemuRecipes {
  /**
  * id of recipe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#recipe VmQemu#recipe}
  */
  readonly recipe: number;
  /**
  * recipe_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#recipe_params VmQemu#recipe_params}
  */
  readonly recipeParams?: VmQemuRecipesRecipeParams[] | cdktf.IResolvable;
}

export function vmQemuRecipesToTerraform(struct?: VmQemuRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recipe: cdktf.numberToTerraform(struct!.recipe),
    recipe_params: cdktf.listMapper(vmQemuRecipesRecipeParamsToTerraform, true)(struct!.recipeParams),
  }
}


export function vmQemuRecipesToHclTerraform(struct?: VmQemuRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recipe: {
      value: cdktf.numberToHclTerraform(struct!.recipe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recipe_params: {
      value: cdktf.listMapperHcl(vmQemuRecipesRecipeParamsToHclTerraform, true)(struct!.recipeParams),
      isBlock: true,
      type: "list",
      storageClassType: "VmQemuRecipesRecipeParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmQemuRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuRecipes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recipe !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipe = this._recipe;
    }
    if (this._recipeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipeParams = this._recipeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuRecipes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recipe = undefined;
      this._recipeParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recipe = value.recipe;
      this._recipeParams.internalValue = value.recipeParams;
    }
  }

  // recipe - computed: false, optional: false, required: true
  private _recipe?: number; 
  public get recipe() {
    return this.getNumberAttribute('recipe');
  }
  public set recipe(value: number) {
    this._recipe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeInput() {
    return this._recipe;
  }

  // recipe_params - computed: false, optional: true, required: false
  private _recipeParams = new VmQemuRecipesRecipeParamsList(this, "recipe_params", false);
  public get recipeParams() {
    return this._recipeParams;
  }
  public putRecipeParams(value: VmQemuRecipesRecipeParams[] | cdktf.IResolvable) {
    this._recipeParams.internalValue = value;
  }
  public resetRecipeParams() {
    this._recipeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipeParamsInput() {
    return this._recipeParams.internalValue;
  }
}

export class VmQemuRecipesList extends cdktf.ComplexList {
  public internalValue? : VmQemuRecipes[] | cdktf.IResolvable

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
  public get(index: number): VmQemuRecipesOutputReference {
    return new VmQemuRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmQemuVxlan {
  /**
  * id of VxLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#id VmQemu#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * id of network inside VxLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#ipnet VmQemu#ipnet}
  */
  readonly ipnet: number;
  /**
  * How many ips from VxLAN needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#ipv4_number VmQemu#ipv4_number}
  */
  readonly ipv4Number?: number;
}

export function vmQemuVxlanToTerraform(struct?: VmQemuVxlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ipnet: cdktf.numberToTerraform(struct!.ipnet),
    ipv4_number: cdktf.numberToTerraform(struct!.ipv4Number),
  }
}


export function vmQemuVxlanToHclTerraform(struct?: VmQemuVxlan | cdktf.IResolvable): any {
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
    ipnet: {
      value: cdktf.numberToHclTerraform(struct!.ipnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_number: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmQemuVxlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmQemuVxlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipnet = this._ipnet;
    }
    if (this._ipv4Number !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Number = this._ipv4Number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmQemuVxlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ipnet = undefined;
      this._ipv4Number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ipnet = value.ipnet;
      this._ipv4Number = value.ipv4Number;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipnet - computed: false, optional: false, required: true
  private _ipnet?: number; 
  public get ipnet() {
    return this.getNumberAttribute('ipnet');
  }
  public set ipnet(value: number) {
    this._ipnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipnetInput() {
    return this._ipnet;
  }

  // ipv4_number - computed: false, optional: true, required: false
  private _ipv4Number?: number; 
  public get ipv4Number() {
    return this.getNumberAttribute('ipv4_number');
  }
  public set ipv4Number(value: number) {
    this._ipv4Number = value;
  }
  public resetIpv4Number() {
    this._ipv4Number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NumberInput() {
    return this._ipv4Number;
  }
}

export class VmQemuVxlanList extends cdktf.ComplexList {
  public internalValue? : VmQemuVxlan[] | cdktf.IResolvable

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
  public get(index: number): VmQemuVxlanOutputReference {
    return new VmQemuVxlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu vmmanager6_vm_qemu}
*/
export class VmQemu extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmmanager6_vm_qemu";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmQemu resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmQemu to import
  * @param importFromId The id of the existing VmQemu that should be imported. Refer to the {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmQemu to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmmanager6_vm_qemu", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs/resources/vm_qemu vmmanager6_vm_qemu} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmQemuConfig
  */
  public constructor(scope: Construct, id: string, config: VmQemuConfig) {
    super(scope, id, {
      terraformResourceType: 'vmmanager6_vm_qemu',
      terraformGeneratorMetadata: {
        providerName: 'vmmanager6',
        providerVersion: '0.0.34',
        providerVersionConstraint: '0.0.34'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._antiSpoofing = config.antiSpoofing;
    this._cluster = config.cluster;
    this._cores = config.cores;
    this._cpuMode = config.cpuMode;
    this._desc = config.desc;
    this._disk = config.disk;
    this._diskId = config.diskId;
    this._domain = config.domain;
    this._id = config.id;
    this._ipv4Number = config.ipv4Number;
    this._ipv4Pools = config.ipv4Pools;
    this._memory = config.memory;
    this._name = config.name;
    this._node = config.nodeAttribute;
    this._os = config.os;
    this._password = config.password;
    this._preset = config.preset;
    this._customInterfaces.internalValue = config.customInterfaces;
    this._recipes.internalValue = config.recipes;
    this._vxlan.internalValue = config.vxlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: number; 
  public get account() {
    return this.getNumberAttribute('account');
  }
  public set account(value: number) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // anti_spoofing - computed: false, optional: true, required: false
  private _antiSpoofing?: boolean | cdktf.IResolvable; 
  public get antiSpoofing() {
    return this.getBooleanAttribute('anti_spoofing');
  }
  public set antiSpoofing(value: boolean | cdktf.IResolvable) {
    this._antiSpoofing = value;
  }
  public resetAntiSpoofing() {
    this._antiSpoofing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingInput() {
    return this._antiSpoofing;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: number; 
  public get cluster() {
    return this.getNumberAttribute('cluster');
  }
  public set cluster(value: number) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // cores - computed: false, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // cpu_mode - computed: false, optional: true, required: false
  private _cpuMode?: string; 
  public get cpuMode() {
    return this.getStringAttribute('cpu_mode');
  }
  public set cpuMode(value: string) {
    this._cpuMode = value;
  }
  public resetCpuMode() {
    this._cpuMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuModeInput() {
    return this._cpuMode;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // disk - computed: false, optional: true, required: false
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // disk_id - computed: true, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // ip_addresses - computed: true, optional: false, required: false
  private _ipAddresses = new VmQemuIpAddressesList(this, "ip_addresses", false);
  public get ipAddresses() {
    return this._ipAddresses;
  }

  // ipv4_number - computed: false, optional: true, required: false
  private _ipv4Number?: number; 
  public get ipv4Number() {
    return this.getNumberAttribute('ipv4_number');
  }
  public set ipv4Number(value: number) {
    this._ipv4Number = value;
  }
  public resetIpv4Number() {
    this._ipv4Number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NumberInput() {
    return this._ipv4Number;
  }

  // ipv4_pools - computed: false, optional: true, required: false
  private _ipv4Pools?: number[]; 
  public get ipv4Pools() {
    return this.getNumberListAttribute('ipv4_pools');
  }
  public set ipv4Pools(value: number[]) {
    this._ipv4Pools = value;
  }
  public resetIpv4Pools() {
    this._ipv4Pools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PoolsInput() {
    return this._ipv4Pools;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // node - computed: false, optional: true, required: false
  private _node?: number; 
  public get nodeAttribute() {
    return this.getNumberAttribute('node');
  }
  public set nodeAttribute(value: number) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // os - computed: false, optional: false, required: true
  private _os?: number; 
  public get os() {
    return this.getNumberAttribute('os');
  }
  public set os(value: number) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // preset - computed: false, optional: true, required: false
  private _preset?: number; 
  public get preset() {
    return this.getNumberAttribute('preset');
  }
  public set preset(value: number) {
    this._preset = value;
  }
  public resetPreset() {
    this._preset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }

  // custom_interfaces - computed: false, optional: true, required: false
  private _customInterfaces = new VmQemuCustomInterfacesList(this, "custom_interfaces", false);
  public get customInterfaces() {
    return this._customInterfaces;
  }
  public putCustomInterfaces(value: VmQemuCustomInterfaces[] | cdktf.IResolvable) {
    this._customInterfaces.internalValue = value;
  }
  public resetCustomInterfaces() {
    this._customInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInterfacesInput() {
    return this._customInterfaces.internalValue;
  }

  // recipes - computed: false, optional: true, required: false
  private _recipes = new VmQemuRecipesList(this, "recipes", false);
  public get recipes() {
    return this._recipes;
  }
  public putRecipes(value: VmQemuRecipes[] | cdktf.IResolvable) {
    this._recipes.internalValue = value;
  }
  public resetRecipes() {
    this._recipes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipesInput() {
    return this._recipes.internalValue;
  }

  // vxlan - computed: false, optional: true, required: false
  private _vxlan = new VmQemuVxlanList(this, "vxlan", false);
  public get vxlan() {
    return this._vxlan;
  }
  public putVxlan(value: VmQemuVxlan[] | cdktf.IResolvable) {
    this._vxlan.internalValue = value;
  }
  public resetVxlan() {
    this._vxlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanInput() {
    return this._vxlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.numberToTerraform(this._account),
      anti_spoofing: cdktf.booleanToTerraform(this._antiSpoofing),
      cluster: cdktf.numberToTerraform(this._cluster),
      cores: cdktf.numberToTerraform(this._cores),
      cpu_mode: cdktf.stringToTerraform(this._cpuMode),
      desc: cdktf.stringToTerraform(this._desc),
      disk: cdktf.numberToTerraform(this._disk),
      disk_id: cdktf.numberToTerraform(this._diskId),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      ipv4_number: cdktf.numberToTerraform(this._ipv4Number),
      ipv4_pools: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ipv4Pools),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      node: cdktf.numberToTerraform(this._node),
      os: cdktf.numberToTerraform(this._os),
      password: cdktf.stringToTerraform(this._password),
      preset: cdktf.numberToTerraform(this._preset),
      custom_interfaces: cdktf.listMapper(vmQemuCustomInterfacesToTerraform, true)(this._customInterfaces.internalValue),
      recipes: cdktf.listMapper(vmQemuRecipesToTerraform, true)(this._recipes.internalValue),
      vxlan: cdktf.listMapper(vmQemuVxlanToTerraform, true)(this._vxlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.numberToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      anti_spoofing: {
        value: cdktf.booleanToHclTerraform(this._antiSpoofing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster: {
        value: cdktf.numberToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cores: {
        value: cdktf.numberToHclTerraform(this._cores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_mode: {
        value: cdktf.stringToHclTerraform(this._cpuMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.numberToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_id: {
        value: cdktf.numberToHclTerraform(this._diskId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      ipv4_number: {
        value: cdktf.numberToHclTerraform(this._ipv4Number),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_pools: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ipv4Pools),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node: {
        value: cdktf.numberToHclTerraform(this._node),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      os: {
        value: cdktf.numberToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preset: {
        value: cdktf.numberToHclTerraform(this._preset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_interfaces: {
        value: cdktf.listMapperHcl(vmQemuCustomInterfacesToHclTerraform, true)(this._customInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmQemuCustomInterfacesList",
      },
      recipes: {
        value: cdktf.listMapperHcl(vmQemuRecipesToHclTerraform, true)(this._recipes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmQemuRecipesList",
      },
      vxlan: {
        value: cdktf.listMapperHcl(vmQemuVxlanToHclTerraform, true)(this._vxlan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmQemuVxlanList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
