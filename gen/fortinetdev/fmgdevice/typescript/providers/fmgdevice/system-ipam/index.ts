// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#automatic_conflict_resolution SystemIpam#automatic_conflict_resolution}
  */
  readonly automaticConflictResolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#device_name SystemIpam#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#dynamic_sort_subtable SystemIpam#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#id SystemIpam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#manage_lan_addresses SystemIpam#manage_lan_addresses}
  */
  readonly manageLanAddresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#manage_lan_extension_addresses SystemIpam#manage_lan_extension_addresses}
  */
  readonly manageLanExtensionAddresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#manage_ssid_addresses SystemIpam#manage_ssid_addresses}
  */
  readonly manageSsidAddresses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#pool_subnet SystemIpam#pool_subnet}
  */
  readonly poolSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#require_subnet_size_match SystemIpam#require_subnet_size_match}
  */
  readonly requireSubnetSizeMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#server_type SystemIpam#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#status SystemIpam#status}
  */
  readonly status?: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#pools SystemIpam#pools}
  */
  readonly pools?: SystemIpamPools[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#rules SystemIpam#rules}
  */
  readonly rules?: SystemIpamRules[] | cdktf.IResolvable;
}
export interface SystemIpamPoolsExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#exclude_subnet SystemIpam#exclude_subnet}
  */
  readonly excludeSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#id SystemIpam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function systemIpamPoolsExcludeToTerraform(struct?: SystemIpamPoolsExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeSubnet),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function systemIpamPoolsExcludeToHclTerraform(struct?: SystemIpamPoolsExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_subnet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeSubnet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpamPoolsExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpamPoolsExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSubnet = this._excludeSubnet;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpamPoolsExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeSubnet = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeSubnet = value.excludeSubnet;
      this._id = value.id;
    }
  }

  // exclude_subnet - computed: true, optional: true, required: false
  private _excludeSubnet?: string[]; 
  public get excludeSubnet() {
    return this.getListAttribute('exclude_subnet');
  }
  public set excludeSubnet(value: string[]) {
    this._excludeSubnet = value;
  }
  public resetExcludeSubnet() {
    this._excludeSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSubnetInput() {
    return this._excludeSubnet;
  }

  // id - computed: false, optional: true, required: false
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
}

export class SystemIpamPoolsExcludeList extends cdktf.ComplexList {
  public internalValue? : SystemIpamPoolsExclude[] | cdktf.IResolvable

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
  public get(index: number): SystemIpamPoolsExcludeOutputReference {
    return new SystemIpamPoolsExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpamPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#description SystemIpam#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#name SystemIpam#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#subnet SystemIpam#subnet}
  */
  readonly subnet?: string[];
  /**
  * exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#exclude SystemIpam#exclude}
  */
  readonly exclude?: SystemIpamPoolsExclude[] | cdktf.IResolvable;
}

export function systemIpamPoolsToTerraform(struct?: SystemIpamPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnet),
    exclude: cdktf.listMapper(systemIpamPoolsExcludeToTerraform, true)(struct!.exclude),
  }
}


export function systemIpamPoolsToHclTerraform(struct?: SystemIpamPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    subnet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude: {
      value: cdktf.listMapperHcl(systemIpamPoolsExcludeToHclTerraform, true)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpamPoolsExcludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpamPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpamPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpamPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._subnet = undefined;
      this._exclude.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._subnet = value.subnet;
      this._exclude.internalValue = value.exclude;
    }
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

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string[]; 
  public get subnet() {
    return this.getListAttribute('subnet');
  }
  public set subnet(value: string[]) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude = new SystemIpamPoolsExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: SystemIpamPoolsExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
  }
}

export class SystemIpamPoolsList extends cdktf.ComplexList {
  public internalValue? : SystemIpamPools[] | cdktf.IResolvable

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
  public get(index: number): SystemIpamPoolsOutputReference {
    return new SystemIpamPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpamRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#description SystemIpam#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#device SystemIpam#device}
  */
  readonly device?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#dhcp SystemIpam#dhcp}
  */
  readonly dhcp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#interface SystemIpam#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#name SystemIpam#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#pool SystemIpam#pool}
  */
  readonly pool?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#role SystemIpam#role}
  */
  readonly role?: string;
}

export function systemIpamRulesToTerraform(struct?: SystemIpamRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    device: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.device),
    dhcp: cdktf.stringToTerraform(struct!.dhcp),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    pool: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pool),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function systemIpamRulesToHclTerraform(struct?: SystemIpamRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.device),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dhcp: {
      value: cdktf.stringToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pool),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpamRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpamRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpamRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._device = undefined;
      this._dhcp = undefined;
      this._interface = undefined;
      this._name = undefined;
      this._pool = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._device = value.device;
      this._dhcp = value.dhcp;
      this._interface = value.interface;
      this._name = value.name;
      this._pool = value.pool;
      this._role = value.role;
    }
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

  // device - computed: true, optional: true, required: false
  private _device?: string[]; 
  public get device() {
    return cdktf.Fn.tolist(this.getListAttribute('device'));
  }
  public set device(value: string[]) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dhcp - computed: true, optional: true, required: false
  private _dhcp?: string; 
  public get dhcp() {
    return this.getStringAttribute('dhcp');
  }
  public set dhcp(value: string) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // pool - computed: true, optional: true, required: false
  private _pool?: string[]; 
  public get pool() {
    return cdktf.Fn.tolist(this.getListAttribute('pool'));
  }
  public set pool(value: string[]) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class SystemIpamRulesList extends cdktf.ComplexList {
  public internalValue? : SystemIpamRules[] | cdktf.IResolvable

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
  public get(index: number): SystemIpamRulesOutputReference {
    return new SystemIpamRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam fmgdevice_system_ipam}
*/
export class SystemIpam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_ipam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIpam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIpam to import
  * @param importFromId The id of the existing SystemIpam that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIpam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_ipam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ipam fmgdevice_system_ipam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_ipam',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticConflictResolution = config.automaticConflictResolution;
    this._deviceName = config.deviceName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._manageLanAddresses = config.manageLanAddresses;
    this._manageLanExtensionAddresses = config.manageLanExtensionAddresses;
    this._manageSsidAddresses = config.manageSsidAddresses;
    this._poolSubnet = config.poolSubnet;
    this._requireSubnetSizeMatch = config.requireSubnetSizeMatch;
    this._serverType = config.serverType;
    this._status = config.status;
    this._pools.internalValue = config.pools;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_conflict_resolution - computed: true, optional: true, required: false
  private _automaticConflictResolution?: string; 
  public get automaticConflictResolution() {
    return this.getStringAttribute('automatic_conflict_resolution');
  }
  public set automaticConflictResolution(value: string) {
    this._automaticConflictResolution = value;
  }
  public resetAutomaticConflictResolution() {
    this._automaticConflictResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticConflictResolutionInput() {
    return this._automaticConflictResolution;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // manage_lan_addresses - computed: true, optional: true, required: false
  private _manageLanAddresses?: string; 
  public get manageLanAddresses() {
    return this.getStringAttribute('manage_lan_addresses');
  }
  public set manageLanAddresses(value: string) {
    this._manageLanAddresses = value;
  }
  public resetManageLanAddresses() {
    this._manageLanAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageLanAddressesInput() {
    return this._manageLanAddresses;
  }

  // manage_lan_extension_addresses - computed: true, optional: true, required: false
  private _manageLanExtensionAddresses?: string; 
  public get manageLanExtensionAddresses() {
    return this.getStringAttribute('manage_lan_extension_addresses');
  }
  public set manageLanExtensionAddresses(value: string) {
    this._manageLanExtensionAddresses = value;
  }
  public resetManageLanExtensionAddresses() {
    this._manageLanExtensionAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageLanExtensionAddressesInput() {
    return this._manageLanExtensionAddresses;
  }

  // manage_ssid_addresses - computed: true, optional: true, required: false
  private _manageSsidAddresses?: string; 
  public get manageSsidAddresses() {
    return this.getStringAttribute('manage_ssid_addresses');
  }
  public set manageSsidAddresses(value: string) {
    this._manageSsidAddresses = value;
  }
  public resetManageSsidAddresses() {
    this._manageSsidAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageSsidAddressesInput() {
    return this._manageSsidAddresses;
  }

  // pool_subnet - computed: true, optional: true, required: false
  private _poolSubnet?: string[]; 
  public get poolSubnet() {
    return this.getListAttribute('pool_subnet');
  }
  public set poolSubnet(value: string[]) {
    this._poolSubnet = value;
  }
  public resetPoolSubnet() {
    this._poolSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSubnetInput() {
    return this._poolSubnet;
  }

  // require_subnet_size_match - computed: true, optional: true, required: false
  private _requireSubnetSizeMatch?: string; 
  public get requireSubnetSizeMatch() {
    return this.getStringAttribute('require_subnet_size_match');
  }
  public set requireSubnetSizeMatch(value: string) {
    this._requireSubnetSizeMatch = value;
  }
  public resetRequireSubnetSizeMatch() {
    this._requireSubnetSizeMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSubnetSizeMatchInput() {
    return this._requireSubnetSizeMatch;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
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

  // pools - computed: false, optional: true, required: false
  private _pools = new SystemIpamPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SystemIpamPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new SystemIpamRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SystemIpamRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_conflict_resolution: cdktf.stringToTerraform(this._automaticConflictResolution),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      manage_lan_addresses: cdktf.stringToTerraform(this._manageLanAddresses),
      manage_lan_extension_addresses: cdktf.stringToTerraform(this._manageLanExtensionAddresses),
      manage_ssid_addresses: cdktf.stringToTerraform(this._manageSsidAddresses),
      pool_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._poolSubnet),
      require_subnet_size_match: cdktf.stringToTerraform(this._requireSubnetSizeMatch),
      server_type: cdktf.stringToTerraform(this._serverType),
      status: cdktf.stringToTerraform(this._status),
      pools: cdktf.listMapper(systemIpamPoolsToTerraform, true)(this._pools.internalValue),
      rules: cdktf.listMapper(systemIpamRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_conflict_resolution: {
        value: cdktf.stringToHclTerraform(this._automaticConflictResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_lan_addresses: {
        value: cdktf.stringToHclTerraform(this._manageLanAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_lan_extension_addresses: {
        value: cdktf.stringToHclTerraform(this._manageLanExtensionAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_ssid_addresses: {
        value: cdktf.stringToHclTerraform(this._manageSsidAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._poolSubnet),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      require_subnet_size_match: {
        value: cdktf.stringToHclTerraform(this._requireSubnetSizeMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pools: {
        value: cdktf.listMapperHcl(systemIpamPoolsToHclTerraform, true)(this._pools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpamPoolsList",
      },
      rules: {
        value: cdktf.listMapperHcl(systemIpamRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpamRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
