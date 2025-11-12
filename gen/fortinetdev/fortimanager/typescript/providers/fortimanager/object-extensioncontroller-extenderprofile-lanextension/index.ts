// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtensioncontrollerExtenderprofileLanextensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#adom ObjectExtensioncontrollerExtenderprofileLanextension#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#backhaul_interface ObjectExtensioncontrollerExtenderprofileLanextension#backhaul_interface}
  */
  readonly backhaulInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#backhaul_ip ObjectExtensioncontrollerExtenderprofileLanextension#backhaul_ip}
  */
  readonly backhaulIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#dynamic_sort_subtable ObjectExtensioncontrollerExtenderprofileLanextension#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#extender_profile ObjectExtensioncontrollerExtenderprofileLanextension#extender_profile}
  */
  readonly extenderProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#id ObjectExtensioncontrollerExtenderprofileLanextension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#ipsec_tunnel ObjectExtensioncontrollerExtenderprofileLanextension#ipsec_tunnel}
  */
  readonly ipsecTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#link_loadbalance ObjectExtensioncontrollerExtenderprofileLanextension#link_loadbalance}
  */
  readonly linkLoadbalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#scopetype ObjectExtensioncontrollerExtenderprofileLanextension#scopetype}
  */
  readonly scopetype?: string;
  /**
  * backhaul block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#backhaul ObjectExtensioncontrollerExtenderprofileLanextension#backhaul}
  */
  readonly backhaul?: ObjectExtensioncontrollerExtenderprofileLanextensionBackhaul[] | cdktf.IResolvable;
  /**
  * downlinks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#downlinks ObjectExtensioncontrollerExtenderprofileLanextension#downlinks}
  */
  readonly downlinks?: ObjectExtensioncontrollerExtenderprofileLanextensionDownlinks[] | cdktf.IResolvable;
  /**
  * traffic_split_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#traffic_split_services ObjectExtensioncontrollerExtenderprofileLanextension#traffic_split_services}
  */
  readonly trafficSplitServices?: ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServices[] | cdktf.IResolvable;
}
export interface ObjectExtensioncontrollerExtenderprofileLanextensionBackhaul {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#name ObjectExtensioncontrollerExtenderprofileLanextension#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#port ObjectExtensioncontrollerExtenderprofileLanextension#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#role ObjectExtensioncontrollerExtenderprofileLanextension#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#weight ObjectExtensioncontrollerExtenderprofileLanextension#weight}
  */
  readonly weight?: number;
}

export function objectExtensioncontrollerExtenderprofileLanextensionBackhaulToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanextensionBackhaul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectExtensioncontrollerExtenderprofileLanextensionBackhaulToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanextensionBackhaul | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileLanextensionBackhaul | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileLanextensionBackhaul | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._role = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._role = value.role;
      this._weight = value.weight;
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

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulList extends cdktf.ComplexList {
  public internalValue? : ObjectExtensioncontrollerExtenderprofileLanextensionBackhaul[] | cdktf.IResolvable

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
  public get(index: number): ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulOutputReference {
    return new ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectExtensioncontrollerExtenderprofileLanextensionDownlinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#name ObjectExtensioncontrollerExtenderprofileLanextension#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#port ObjectExtensioncontrollerExtenderprofileLanextension#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#pvid ObjectExtensioncontrollerExtenderprofileLanextension#pvid}
  */
  readonly pvid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#type ObjectExtensioncontrollerExtenderprofileLanextension#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#vap ObjectExtensioncontrollerExtenderprofileLanextension#vap}
  */
  readonly vap?: string[];
}

export function objectExtensioncontrollerExtenderprofileLanextensionDownlinksToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanextensionDownlinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    pvid: cdktf.numberToTerraform(struct!.pvid),
    type: cdktf.stringToTerraform(struct!.type),
    vap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vap),
  }
}


export function objectExtensioncontrollerExtenderprofileLanextensionDownlinksToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanextensionDownlinks | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvid: {
      value: cdktf.numberToHclTerraform(struct!.pvid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileLanextensionDownlinks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._pvid !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvid = this._pvid;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vap !== undefined) {
      hasAnyValues = true;
      internalValueResult.vap = this._vap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileLanextensionDownlinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._pvid = undefined;
      this._type = undefined;
      this._vap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._pvid = value.pvid;
      this._type = value.type;
      this._vap = value.vap;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // pvid - computed: false, optional: true, required: false
  private _pvid?: number; 
  public get pvid() {
    return this.getNumberAttribute('pvid');
  }
  public set pvid(value: number) {
    this._pvid = value;
  }
  public resetPvid() {
    this._pvid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvidInput() {
    return this._pvid;
  }

  // type - computed: true, optional: true, required: false
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

  // vap - computed: true, optional: true, required: false
  private _vap?: string[]; 
  public get vap() {
    return cdktf.Fn.tolist(this.getListAttribute('vap'));
  }
  public set vap(value: string[]) {
    this._vap = value;
  }
  public resetVap() {
    this._vap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vapInput() {
    return this._vap;
  }
}

export class ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksList extends cdktf.ComplexList {
  public internalValue? : ObjectExtensioncontrollerExtenderprofileLanextensionDownlinks[] | cdktf.IResolvable

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
  public get(index: number): ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksOutputReference {
    return new ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#address ObjectExtensioncontrollerExtenderprofileLanextension#address}
  */
  readonly address?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#name ObjectExtensioncontrollerExtenderprofileLanextension#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#service ObjectExtensioncontrollerExtenderprofileLanextension#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#vsdb ObjectExtensioncontrollerExtenderprofileLanextension#vsdb}
  */
  readonly vsdb?: string;
}

export function objectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServicesToTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    service: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.service),
    vsdb: cdktf.stringToTerraform(struct!.vsdb),
  }
}


export function objectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServicesToHclTerraform(struct?: ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.address),
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
    service: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.service),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vsdb: {
      value: cdktf.stringToHclTerraform(struct!.vsdb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._vsdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsdb = this._vsdb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
      this._service = undefined;
      this._vsdb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
      this._service = value.service;
      this._vsdb = value.vsdb;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string[]; 
  public get address() {
    return cdktf.Fn.tolist(this.getListAttribute('address'));
  }
  public set address(value: string[]) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // service - computed: true, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // vsdb - computed: true, optional: true, required: false
  private _vsdb?: string; 
  public get vsdb() {
    return this.getStringAttribute('vsdb');
  }
  public set vsdb(value: string) {
    this._vsdb = value;
  }
  public resetVsdb() {
    this._vsdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsdbInput() {
    return this._vsdb;
  }
}

export class ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServicesList extends cdktf.ComplexList {
  public internalValue? : ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServices[] | cdktf.IResolvable

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
  public get(index: number): ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServicesOutputReference {
    return new ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension fortimanager_object_extensioncontroller_extenderprofile_lanextension}
*/
export class ObjectExtensioncontrollerExtenderprofileLanextension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extensioncontroller_extenderprofile_lanextension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtensioncontrollerExtenderprofileLanextension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtensioncontrollerExtenderprofileLanextension to import
  * @param importFromId The id of the existing ObjectExtensioncontrollerExtenderprofileLanextension that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtensioncontrollerExtenderprofileLanextension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extensioncontroller_extenderprofile_lanextension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extensioncontroller_extenderprofile_lanextension fortimanager_object_extensioncontroller_extenderprofile_lanextension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtensioncontrollerExtenderprofileLanextensionConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectExtensioncontrollerExtenderprofileLanextensionConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extensioncontroller_extenderprofile_lanextension',
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
    this._backhaulInterface = config.backhaulInterface;
    this._backhaulIp = config.backhaulIp;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extenderProfile = config.extenderProfile;
    this._id = config.id;
    this._ipsecTunnel = config.ipsecTunnel;
    this._linkLoadbalance = config.linkLoadbalance;
    this._scopetype = config.scopetype;
    this._backhaul.internalValue = config.backhaul;
    this._downlinks.internalValue = config.downlinks;
    this._trafficSplitServices.internalValue = config.trafficSplitServices;
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

  // backhaul_interface - computed: false, optional: true, required: false
  private _backhaulInterface?: string; 
  public get backhaulInterface() {
    return this.getStringAttribute('backhaul_interface');
  }
  public set backhaulInterface(value: string) {
    this._backhaulInterface = value;
  }
  public resetBackhaulInterface() {
    this._backhaulInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulInterfaceInput() {
    return this._backhaulInterface;
  }

  // backhaul_ip - computed: false, optional: true, required: false
  private _backhaulIp?: string; 
  public get backhaulIp() {
    return this.getStringAttribute('backhaul_ip');
  }
  public set backhaulIp(value: string) {
    this._backhaulIp = value;
  }
  public resetBackhaulIp() {
    this._backhaulIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulIpInput() {
    return this._backhaulIp;
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

  // extender_profile - computed: false, optional: false, required: true
  private _extenderProfile?: string; 
  public get extenderProfile() {
    return this.getStringAttribute('extender_profile');
  }
  public set extenderProfile(value: string) {
    this._extenderProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extenderProfileInput() {
    return this._extenderProfile;
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

  // ipsec_tunnel - computed: false, optional: true, required: false
  private _ipsecTunnel?: string; 
  public get ipsecTunnel() {
    return this.getStringAttribute('ipsec_tunnel');
  }
  public set ipsecTunnel(value: string) {
    this._ipsecTunnel = value;
  }
  public resetIpsecTunnel() {
    this._ipsecTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecTunnelInput() {
    return this._ipsecTunnel;
  }

  // link_loadbalance - computed: true, optional: true, required: false
  private _linkLoadbalance?: string; 
  public get linkLoadbalance() {
    return this.getStringAttribute('link_loadbalance');
  }
  public set linkLoadbalance(value: string) {
    this._linkLoadbalance = value;
  }
  public resetLinkLoadbalance() {
    this._linkLoadbalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLoadbalanceInput() {
    return this._linkLoadbalance;
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

  // backhaul - computed: false, optional: true, required: false
  private _backhaul = new ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulList(this, "backhaul", false);
  public get backhaul() {
    return this._backhaul;
  }
  public putBackhaul(value: ObjectExtensioncontrollerExtenderprofileLanextensionBackhaul[] | cdktf.IResolvable) {
    this._backhaul.internalValue = value;
  }
  public resetBackhaul() {
    this._backhaul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backhaulInput() {
    return this._backhaul.internalValue;
  }

  // downlinks - computed: false, optional: true, required: false
  private _downlinks = new ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksList(this, "downlinks", false);
  public get downlinks() {
    return this._downlinks;
  }
  public putDownlinks(value: ObjectExtensioncontrollerExtenderprofileLanextensionDownlinks[] | cdktf.IResolvable) {
    this._downlinks.internalValue = value;
  }
  public resetDownlinks() {
    this._downlinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinksInput() {
    return this._downlinks.internalValue;
  }

  // traffic_split_services - computed: false, optional: true, required: false
  private _trafficSplitServices = new ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServicesList(this, "traffic_split_services", false);
  public get trafficSplitServices() {
    return this._trafficSplitServices;
  }
  public putTrafficSplitServices(value: ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServices[] | cdktf.IResolvable) {
    this._trafficSplitServices.internalValue = value;
  }
  public resetTrafficSplitServices() {
    this._trafficSplitServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSplitServicesInput() {
    return this._trafficSplitServices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      backhaul_interface: cdktf.stringToTerraform(this._backhaulInterface),
      backhaul_ip: cdktf.stringToTerraform(this._backhaulIp),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extender_profile: cdktf.stringToTerraform(this._extenderProfile),
      id: cdktf.stringToTerraform(this._id),
      ipsec_tunnel: cdktf.stringToTerraform(this._ipsecTunnel),
      link_loadbalance: cdktf.stringToTerraform(this._linkLoadbalance),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      backhaul: cdktf.listMapper(objectExtensioncontrollerExtenderprofileLanextensionBackhaulToTerraform, true)(this._backhaul.internalValue),
      downlinks: cdktf.listMapper(objectExtensioncontrollerExtenderprofileLanextensionDownlinksToTerraform, true)(this._downlinks.internalValue),
      traffic_split_services: cdktf.listMapper(objectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServicesToTerraform, true)(this._trafficSplitServices.internalValue),
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
      backhaul_interface: {
        value: cdktf.stringToHclTerraform(this._backhaulInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backhaul_ip: {
        value: cdktf.stringToHclTerraform(this._backhaulIp),
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
      extender_profile: {
        value: cdktf.stringToHclTerraform(this._extenderProfile),
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
      ipsec_tunnel: {
        value: cdktf.stringToHclTerraform(this._ipsecTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_loadbalance: {
        value: cdktf.stringToHclTerraform(this._linkLoadbalance),
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
      backhaul: {
        value: cdktf.listMapperHcl(objectExtensioncontrollerExtenderprofileLanextensionBackhaulToHclTerraform, true)(this._backhaul.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulList",
      },
      downlinks: {
        value: cdktf.listMapperHcl(objectExtensioncontrollerExtenderprofileLanextensionDownlinksToHclTerraform, true)(this._downlinks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileLanextensionDownlinksList",
      },
      traffic_split_services: {
        value: cdktf.listMapperHcl(objectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServicesToHclTerraform, true)(this._trafficSplitServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectExtensioncontrollerExtenderprofileLanextensionTrafficSplitServicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
