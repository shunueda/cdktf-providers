// https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcoreInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#allow_app_ports GcoreInstance#allow_app_ports}
  */
  readonly allowAppPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#flavor GcoreInstance#flavor}
  */
  readonly flavor?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#flavor_id GcoreInstance#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#id GcoreInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#keypair_name GcoreInstance#keypair_name}
  */
  readonly keypairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#last_updated GcoreInstance#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#metadata_map GcoreInstance#metadata_map}
  */
  readonly metadataMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#name GcoreInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#name_template GcoreInstance#name_template}
  */
  readonly nameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#name_templates GcoreInstance#name_templates}
  */
  readonly nameTemplates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#password GcoreInstance#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#project_id GcoreInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#project_name GcoreInstance#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#region_id GcoreInstance#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#region_name GcoreInstance#region_name}
  */
  readonly regionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#server_group GcoreInstance#server_group}
  */
  readonly serverGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#status GcoreInstance#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#user_data GcoreInstance#user_data}
  */
  readonly userData?: string;
  /**
  * **Deprecated**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#userdata GcoreInstance#userdata}
  */
  readonly userdata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#username GcoreInstance#username}
  */
  readonly username?: string;
  /**
  * Current vm state, use stopped to stop vm and active to start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#vm_state GcoreInstance#vm_state}
  */
  readonly vmState?: string;
  /**
  * addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#addresses GcoreInstance#addresses}
  */
  readonly addresses?: GcoreInstanceAddresses[] | cdktf.IResolvable;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#configuration GcoreInstance#configuration}
  */
  readonly configuration?: GcoreInstanceConfiguration[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#interface GcoreInstance#interface}
  */
  readonly interface: GcoreInstanceInterface[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#metadata GcoreInstance#metadata}
  */
  readonly metadata?: GcoreInstanceMetadata[] | cdktf.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#volume GcoreInstance#volume}
  */
  readonly volume?: GcoreInstanceVolume[] | cdktf.IResolvable;
}
export interface GcoreInstanceSecurityGroup {
}

export function gcoreInstanceSecurityGroupToTerraform(struct?: GcoreInstanceSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gcoreInstanceSecurityGroupToHclTerraform(struct?: GcoreInstanceSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GcoreInstanceSecurityGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcoreInstanceSecurityGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreInstanceSecurityGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GcoreInstanceSecurityGroupList extends cdktf.ComplexList {

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
  public get(index: number): GcoreInstanceSecurityGroupOutputReference {
    return new GcoreInstanceSecurityGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcoreInstanceAddressesNet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#addr GcoreInstance#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#type GcoreInstance#type}
  */
  readonly type: string;
}

export function gcoreInstanceAddressesNetToTerraform(struct?: GcoreInstanceAddressesNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gcoreInstanceAddressesNetToHclTerraform(struct?: GcoreInstanceAddressesNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreInstanceAddressesNetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcoreInstanceAddressesNet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreInstanceAddressesNet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GcoreInstanceAddressesNetList extends cdktf.ComplexList {
  public internalValue? : GcoreInstanceAddressesNet[] | cdktf.IResolvable

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
  public get(index: number): GcoreInstanceAddressesNetOutputReference {
    return new GcoreInstanceAddressesNetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcoreInstanceAddresses {
  /**
  * net block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#net GcoreInstance#net}
  */
  readonly net: GcoreInstanceAddressesNet[] | cdktf.IResolvable;
}

export function gcoreInstanceAddressesToTerraform(struct?: GcoreInstanceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    net: cdktf.listMapper(gcoreInstanceAddressesNetToTerraform, true)(struct!.net),
  }
}


export function gcoreInstanceAddressesToHclTerraform(struct?: GcoreInstanceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    net: {
      value: cdktf.listMapperHcl(gcoreInstanceAddressesNetToHclTerraform, true)(struct!.net),
      isBlock: true,
      type: "list",
      storageClassType: "GcoreInstanceAddressesNetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreInstanceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcoreInstanceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._net?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreInstanceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._net.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._net.internalValue = value.net;
    }
  }

  // net - computed: false, optional: false, required: true
  private _net = new GcoreInstanceAddressesNetList(this, "net", false);
  public get net() {
    return this._net;
  }
  public putNet(value: GcoreInstanceAddressesNet[] | cdktf.IResolvable) {
    this._net.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net.internalValue;
  }
}

export class GcoreInstanceAddressesList extends cdktf.ComplexList {
  public internalValue? : GcoreInstanceAddresses[] | cdktf.IResolvable

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
  public get(index: number): GcoreInstanceAddressesOutputReference {
    return new GcoreInstanceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcoreInstanceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#key GcoreInstance#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#value GcoreInstance#value}
  */
  readonly value: string;
}

export function gcoreInstanceConfigurationToTerraform(struct?: GcoreInstanceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gcoreInstanceConfigurationToHclTerraform(struct?: GcoreInstanceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GcoreInstanceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcoreInstanceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreInstanceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class GcoreInstanceConfigurationList extends cdktf.ComplexList {
  public internalValue? : GcoreInstanceConfiguration[] | cdktf.IResolvable

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
  public get(index: number): GcoreInstanceConfigurationOutputReference {
    return new GcoreInstanceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcoreInstanceInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#existing_fip_id GcoreInstance#existing_fip_id}
  */
  readonly existingFipId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#fip_source GcoreInstance#fip_source}
  */
  readonly fipSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#ip_address GcoreInstance#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * required if type is 'subnet' or 'any_subnet'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#network_id GcoreInstance#network_id}
  */
  readonly networkId?: string;
  /**
  * Order of attaching interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#order GcoreInstance#order}
  */
  readonly order?: number;
  /**
  * required if type is  'reserved_fixed_ip'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#port_id GcoreInstance#port_id}
  */
  readonly portId?: string;
  /**
  * list of security group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#security_groups GcoreInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * required if type is 'subnet'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#subnet_id GcoreInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Available value is 'subnet', 'any_subnet', 'external', 'reserved_fixed_ip'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#type GcoreInstance#type}
  */
  readonly type?: string;
}

export function gcoreInstanceInterfaceToTerraform(struct?: GcoreInstanceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_fip_id: cdktf.stringToTerraform(struct!.existingFipId),
    fip_source: cdktf.stringToTerraform(struct!.fipSource),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    order: cdktf.numberToTerraform(struct!.order),
    port_id: cdktf.stringToTerraform(struct!.portId),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gcoreInstanceInterfaceToHclTerraform(struct?: GcoreInstanceInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_fip_id: {
      value: cdktf.stringToHclTerraform(struct!.existingFipId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fip_source: {
      value: cdktf.stringToHclTerraform(struct!.fipSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_id: {
      value: cdktf.stringToHclTerraform(struct!.portId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreInstanceInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcoreInstanceInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingFipId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingFipId = this._existingFipId;
    }
    if (this._fipSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.fipSource = this._fipSource;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._portId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portId = this._portId;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreInstanceInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existingFipId = undefined;
      this._fipSource = undefined;
      this._ipAddress = undefined;
      this._networkId = undefined;
      this._order = undefined;
      this._portId = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existingFipId = value.existingFipId;
      this._fipSource = value.fipSource;
      this._ipAddress = value.ipAddress;
      this._networkId = value.networkId;
      this._order = value.order;
      this._portId = value.portId;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._type = value.type;
    }
  }

  // existing_fip_id - computed: false, optional: true, required: false
  private _existingFipId?: string; 
  public get existingFipId() {
    return this.getStringAttribute('existing_fip_id');
  }
  public set existingFipId(value: string) {
    this._existingFipId = value;
  }
  public resetExistingFipId() {
    this._existingFipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingFipIdInput() {
    return this._existingFipId;
  }

  // fip_source - computed: false, optional: true, required: false
  private _fipSource?: string; 
  public get fipSource() {
    return this.getStringAttribute('fip_source');
  }
  public set fipSource(value: string) {
    this._fipSource = value;
  }
  public resetFipSource() {
    this._fipSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipSourceInput() {
    return this._fipSource;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // port_id - computed: true, optional: true, required: false
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  public resetPortId() {
    this._portId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GcoreInstanceInterfaceList extends cdktf.ComplexList {
  public internalValue? : GcoreInstanceInterface[] | cdktf.IResolvable

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
  public get(index: number): GcoreInstanceInterfaceOutputReference {
    return new GcoreInstanceInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcoreInstanceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#key GcoreInstance#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#value GcoreInstance#value}
  */
  readonly value: string;
}

export function gcoreInstanceMetadataToTerraform(struct?: GcoreInstanceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gcoreInstanceMetadataToHclTerraform(struct?: GcoreInstanceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class GcoreInstanceMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcoreInstanceMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreInstanceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class GcoreInstanceMetadataList extends cdktf.ComplexList {
  public internalValue? : GcoreInstanceMetadata[] | cdktf.IResolvable

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
  public get(index: number): GcoreInstanceMetadataOutputReference {
    return new GcoreInstanceMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcoreInstanceVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#attachment_tag GcoreInstance#attachment_tag}
  */
  readonly attachmentTag?: string;
  /**
  * If boot_index==0 volumes can not detached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#boot_index GcoreInstance#boot_index}
  */
  readonly bootIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#delete_on_termination GcoreInstance#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#id GcoreInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#image_id GcoreInstance#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#name GcoreInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#size GcoreInstance#size}
  */
  readonly size?: number;
  /**
  * Currently available only 'existing-volume' value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#source GcoreInstance#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#type_name GcoreInstance#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#volume_id GcoreInstance#volume_id}
  */
  readonly volumeId?: string;
}

export function gcoreInstanceVolumeToTerraform(struct?: GcoreInstanceVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachment_tag: cdktf.stringToTerraform(struct!.attachmentTag),
    boot_index: cdktf.numberToTerraform(struct!.bootIndex),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    id: cdktf.stringToTerraform(struct!.id),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    source: cdktf.stringToTerraform(struct!.source),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function gcoreInstanceVolumeToHclTerraform(struct?: GcoreInstanceVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachment_tag: {
      value: cdktf.stringToHclTerraform(struct!.attachmentTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_index: {
      value: cdktf.numberToHclTerraform(struct!.bootIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
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
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreInstanceVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcoreInstanceVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentTag = this._attachmentTag;
    }
    if (this._bootIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootIndex = this._bootIndex;
    }
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreInstanceVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attachmentTag = undefined;
      this._bootIndex = undefined;
      this._deleteOnTermination = undefined;
      this._id = undefined;
      this._imageId = undefined;
      this._name = undefined;
      this._size = undefined;
      this._source = undefined;
      this._typeName = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attachmentTag = value.attachmentTag;
      this._bootIndex = value.bootIndex;
      this._deleteOnTermination = value.deleteOnTermination;
      this._id = value.id;
      this._imageId = value.imageId;
      this._name = value.name;
      this._size = value.size;
      this._source = value.source;
      this._typeName = value.typeName;
      this._volumeId = value.volumeId;
    }
  }

  // attachment_tag - computed: false, optional: true, required: false
  private _attachmentTag?: string; 
  public get attachmentTag() {
    return this.getStringAttribute('attachment_tag');
  }
  public set attachmentTag(value: string) {
    this._attachmentTag = value;
  }
  public resetAttachmentTag() {
    this._attachmentTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTagInput() {
    return this._attachmentTag;
  }

  // boot_index - computed: false, optional: true, required: false
  private _bootIndex?: number; 
  public get bootIndex() {
    return this.getNumberAttribute('boot_index');
  }
  public set bootIndex(value: number) {
    this._bootIndex = value;
  }
  public resetBootIndex() {
    this._bootIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootIndexInput() {
    return this._bootIndex;
  }

  // delete_on_termination - computed: true, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
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

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}

export class GcoreInstanceVolumeList extends cdktf.ComplexList {
  public internalValue? : GcoreInstanceVolume[] | cdktf.IResolvable

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
  public get(index: number): GcoreInstanceVolumeOutputReference {
    return new GcoreInstanceVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance gcore_instance}
*/
export class GcoreInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcoreInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcoreInstance to import
  * @param importFromId The id of the existing GcoreInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcoreInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_instance gcore_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcoreInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GcoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_instance',
      terraformGeneratorMetadata: {
        providerName: 'gcorelabs',
        providerVersion: '0.3.63'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAppPorts = config.allowAppPorts;
    this._flavor = config.flavor;
    this._flavorId = config.flavorId;
    this._id = config.id;
    this._keypairName = config.keypairName;
    this._lastUpdated = config.lastUpdated;
    this._metadataMap = config.metadataMap;
    this._name = config.name;
    this._nameTemplate = config.nameTemplate;
    this._nameTemplates = config.nameTemplates;
    this._password = config.password;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._serverGroup = config.serverGroup;
    this._status = config.status;
    this._userData = config.userData;
    this._userdata = config.userdata;
    this._username = config.username;
    this._vmState = config.vmState;
    this._addresses.internalValue = config.addresses;
    this._configuration.internalValue = config.configuration;
    this._interface.internalValue = config.interface;
    this._metadata.internalValue = config.metadata;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_app_ports - computed: false, optional: true, required: false
  private _allowAppPorts?: boolean | cdktf.IResolvable; 
  public get allowAppPorts() {
    return this.getBooleanAttribute('allow_app_ports');
  }
  public set allowAppPorts(value: boolean | cdktf.IResolvable) {
    this._allowAppPorts = value;
  }
  public resetAllowAppPorts() {
    this._allowAppPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAppPortsInput() {
    return this._allowAppPorts;
  }

  // flavor - computed: true, optional: true, required: false
  private _flavor?: { [key: string]: string }; 
  public get flavor() {
    return this.getStringMapAttribute('flavor');
  }
  public set flavor(value: { [key: string]: string }) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
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

  // keypair_name - computed: false, optional: true, required: false
  private _keypairName?: string; 
  public get keypairName() {
    return this.getStringAttribute('keypair_name');
  }
  public set keypairName(value: string) {
    this._keypairName = value;
  }
  public resetKeypairName() {
    this._keypairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairNameInput() {
    return this._keypairName;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // metadata_map - computed: false, optional: true, required: false
  private _metadataMap?: { [key: string]: string }; 
  public get metadataMap() {
    return this.getStringMapAttribute('metadata_map');
  }
  public set metadataMap(value: { [key: string]: string }) {
    this._metadataMap = value;
  }
  public resetMetadataMap() {
    this._metadataMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataMapInput() {
    return this._metadataMap;
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

  // name_template - computed: false, optional: true, required: false
  private _nameTemplate?: string; 
  public get nameTemplate() {
    return this.getStringAttribute('name_template');
  }
  public set nameTemplate(value: string) {
    this._nameTemplate = value;
  }
  public resetNameTemplate() {
    this._nameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTemplateInput() {
    return this._nameTemplate;
  }

  // name_templates - computed: false, optional: true, required: false
  private _nameTemplates?: string[]; 
  public get nameTemplates() {
    return this.getListAttribute('name_templates');
  }
  public set nameTemplates(value: string[]) {
    this._nameTemplates = value;
  }
  public resetNameTemplates() {
    this._nameTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTemplatesInput() {
    return this._nameTemplates;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // security_group - computed: true, optional: false, required: false
  private _securityGroup = new GcoreInstanceSecurityGroupList(this, "security_group", false);
  public get securityGroup() {
    return this._securityGroup;
  }

  // server_group - computed: false, optional: true, required: false
  private _serverGroup?: string; 
  public get serverGroup() {
    return this.getStringAttribute('server_group');
  }
  public set serverGroup(value: string) {
    this._serverGroup = value;
  }
  public resetServerGroup() {
    this._serverGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupInput() {
    return this._serverGroup;
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

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // userdata - computed: false, optional: true, required: false
  private _userdata?: string; 
  public get userdata() {
    return this.getStringAttribute('userdata');
  }
  public set userdata(value: string) {
    this._userdata = value;
  }
  public resetUserdata() {
    this._userdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataInput() {
    return this._userdata;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vm_state - computed: true, optional: true, required: false
  private _vmState?: string; 
  public get vmState() {
    return this.getStringAttribute('vm_state');
  }
  public set vmState(value: string) {
    this._vmState = value;
  }
  public resetVmState() {
    this._vmState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmStateInput() {
    return this._vmState;
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new GcoreInstanceAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: GcoreInstanceAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new GcoreInstanceConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: GcoreInstanceConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // interface - computed: false, optional: false, required: true
  private _interface = new GcoreInstanceInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: GcoreInstanceInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new GcoreInstanceMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: GcoreInstanceMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new GcoreInstanceVolumeList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: GcoreInstanceVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_app_ports: cdktf.booleanToTerraform(this._allowAppPorts),
      flavor: cdktf.hashMapper(cdktf.stringToTerraform)(this._flavor),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      id: cdktf.stringToTerraform(this._id),
      keypair_name: cdktf.stringToTerraform(this._keypairName),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      metadata_map: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadataMap),
      name: cdktf.stringToTerraform(this._name),
      name_template: cdktf.stringToTerraform(this._nameTemplate),
      name_templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameTemplates),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      server_group: cdktf.stringToTerraform(this._serverGroup),
      status: cdktf.stringToTerraform(this._status),
      user_data: cdktf.stringToTerraform(this._userData),
      userdata: cdktf.stringToTerraform(this._userdata),
      username: cdktf.stringToTerraform(this._username),
      vm_state: cdktf.stringToTerraform(this._vmState),
      addresses: cdktf.listMapper(gcoreInstanceAddressesToTerraform, true)(this._addresses.internalValue),
      configuration: cdktf.listMapper(gcoreInstanceConfigurationToTerraform, true)(this._configuration.internalValue),
      interface: cdktf.listMapper(gcoreInstanceInterfaceToTerraform, true)(this._interface.internalValue),
      metadata: cdktf.listMapper(gcoreInstanceMetadataToTerraform, true)(this._metadata.internalValue),
      volume: cdktf.listMapper(gcoreInstanceVolumeToTerraform, true)(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_app_ports: {
        value: cdktf.booleanToHclTerraform(this._allowAppPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flavor: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._flavor),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
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
      keypair_name: {
        value: cdktf.stringToHclTerraform(this._keypairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_map: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadataMap),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_template: {
        value: cdktf.stringToHclTerraform(this._nameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameTemplates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_group: {
        value: cdktf.stringToHclTerraform(this._serverGroup),
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
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userdata: {
        value: cdktf.stringToHclTerraform(this._userdata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_state: {
        value: cdktf.stringToHclTerraform(this._vmState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addresses: {
        value: cdktf.listMapperHcl(gcoreInstanceAddressesToHclTerraform, true)(this._addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcoreInstanceAddressesList",
      },
      configuration: {
        value: cdktf.listMapperHcl(gcoreInstanceConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcoreInstanceConfigurationList",
      },
      interface: {
        value: cdktf.listMapperHcl(gcoreInstanceInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcoreInstanceInterfaceList",
      },
      metadata: {
        value: cdktf.listMapperHcl(gcoreInstanceMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcoreInstanceMetadataList",
      },
      volume: {
        value: cdktf.listMapperHcl(gcoreInstanceVolumeToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GcoreInstanceVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
