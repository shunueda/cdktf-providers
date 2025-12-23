// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#cloud_ref Networkservice#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#id Networkservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#name Networkservice#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#se_group_ref Networkservice#se_group_ref}
  */
  readonly seGroupRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#service_type Networkservice#service_type}
  */
  readonly serviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#tenant_ref Networkservice#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#uuid Networkservice#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#vrf_ref Networkservice#vrf_ref}
  */
  readonly vrfRef: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#configpb_attributes Networkservice#configpb_attributes}
  */
  readonly configpbAttributes?: NetworkserviceConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#markers Networkservice#markers}
  */
  readonly markers?: NetworkserviceMarkers[] | cdktf.IResolvable;
  /**
  * routing_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#routing_service Networkservice#routing_service}
  */
  readonly routingService?: NetworkserviceRoutingService[] | cdktf.IResolvable;
}
export interface NetworkserviceConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#version Networkservice#version}
  */
  readonly version?: string;
}

export function networkserviceConfigpbAttributesToTerraform(struct?: NetworkserviceConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function networkserviceConfigpbAttributesToHclTerraform(struct?: NetworkserviceConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkserviceConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkserviceConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkserviceConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class NetworkserviceConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : NetworkserviceConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): NetworkserviceConfigpbAttributesOutputReference {
    return new NetworkserviceConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkserviceMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#key Networkservice#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#values Networkservice#values}
  */
  readonly values?: string[];
}

export function networkserviceMarkersToTerraform(struct?: NetworkserviceMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkserviceMarkersToHclTerraform(struct?: NetworkserviceMarkers | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkserviceMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkserviceMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkserviceMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkserviceMarkersList extends cdktf.ComplexList {
  public internalValue? : NetworkserviceMarkers[] | cdktf.IResolvable

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
  public get(index: number): NetworkserviceMarkersOutputReference {
    return new NetworkserviceMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkserviceRoutingServiceFloatingIntfIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#addr Networkservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#type Networkservice#type}
  */
  readonly type: string;
}

export function networkserviceRoutingServiceFloatingIntfIpToTerraform(struct?: NetworkserviceRoutingServiceFloatingIntfIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkserviceRoutingServiceFloatingIntfIpToHclTerraform(struct?: NetworkserviceRoutingServiceFloatingIntfIp | cdktf.IResolvable): any {
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

export class NetworkserviceRoutingServiceFloatingIntfIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkserviceRoutingServiceFloatingIntfIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkserviceRoutingServiceFloatingIntfIp | cdktf.IResolvable | undefined) {
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

export class NetworkserviceRoutingServiceFloatingIntfIpList extends cdktf.ComplexList {
  public internalValue? : NetworkserviceRoutingServiceFloatingIntfIp[] | cdktf.IResolvable

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
  public get(index: number): NetworkserviceRoutingServiceFloatingIntfIpOutputReference {
    return new NetworkserviceRoutingServiceFloatingIntfIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkserviceRoutingServiceFloatingIntfIp6Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#addr Networkservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#type Networkservice#type}
  */
  readonly type: string;
}

export function networkserviceRoutingServiceFloatingIntfIp6AddressesToTerraform(struct?: NetworkserviceRoutingServiceFloatingIntfIp6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkserviceRoutingServiceFloatingIntfIp6AddressesToHclTerraform(struct?: NetworkserviceRoutingServiceFloatingIntfIp6Addresses | cdktf.IResolvable): any {
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

export class NetworkserviceRoutingServiceFloatingIntfIp6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkserviceRoutingServiceFloatingIntfIp6Addresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkserviceRoutingServiceFloatingIntfIp6Addresses | cdktf.IResolvable | undefined) {
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

export class NetworkserviceRoutingServiceFloatingIntfIp6AddressesList extends cdktf.ComplexList {
  public internalValue? : NetworkserviceRoutingServiceFloatingIntfIp6Addresses[] | cdktf.IResolvable

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
  public get(index: number): NetworkserviceRoutingServiceFloatingIntfIp6AddressesOutputReference {
    return new NetworkserviceRoutingServiceFloatingIntfIp6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkserviceRoutingServiceFloatingIntfIp6Se2Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#addr Networkservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#type Networkservice#type}
  */
  readonly type: string;
}

export function networkserviceRoutingServiceFloatingIntfIp6Se2AddressesToTerraform(struct?: NetworkserviceRoutingServiceFloatingIntfIp6Se2Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkserviceRoutingServiceFloatingIntfIp6Se2AddressesToHclTerraform(struct?: NetworkserviceRoutingServiceFloatingIntfIp6Se2Addresses | cdktf.IResolvable): any {
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

export class NetworkserviceRoutingServiceFloatingIntfIp6Se2AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkserviceRoutingServiceFloatingIntfIp6Se2Addresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkserviceRoutingServiceFloatingIntfIp6Se2Addresses | cdktf.IResolvable | undefined) {
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

export class NetworkserviceRoutingServiceFloatingIntfIp6Se2AddressesList extends cdktf.ComplexList {
  public internalValue? : NetworkserviceRoutingServiceFloatingIntfIp6Se2Addresses[] | cdktf.IResolvable

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
  public get(index: number): NetworkserviceRoutingServiceFloatingIntfIp6Se2AddressesOutputReference {
    return new NetworkserviceRoutingServiceFloatingIntfIp6Se2AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkserviceRoutingServiceFloatingIntfIpSe2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#addr Networkservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#type Networkservice#type}
  */
  readonly type: string;
}

export function networkserviceRoutingServiceFloatingIntfIpSe2ToTerraform(struct?: NetworkserviceRoutingServiceFloatingIntfIpSe2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkserviceRoutingServiceFloatingIntfIpSe2ToHclTerraform(struct?: NetworkserviceRoutingServiceFloatingIntfIpSe2 | cdktf.IResolvable): any {
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

export class NetworkserviceRoutingServiceFloatingIntfIpSe2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkserviceRoutingServiceFloatingIntfIpSe2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkserviceRoutingServiceFloatingIntfIpSe2 | cdktf.IResolvable | undefined) {
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

export class NetworkserviceRoutingServiceFloatingIntfIpSe2List extends cdktf.ComplexList {
  public internalValue? : NetworkserviceRoutingServiceFloatingIntfIpSe2[] | cdktf.IResolvable

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
  public get(index: number): NetworkserviceRoutingServiceFloatingIntfIpSe2OutputReference {
    return new NetworkserviceRoutingServiceFloatingIntfIpSe2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkserviceRoutingServiceFlowtableProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#icmp_idle_timeout Networkservice#icmp_idle_timeout}
  */
  readonly icmpIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#tcp_closed_timeout Networkservice#tcp_closed_timeout}
  */
  readonly tcpClosedTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#tcp_connection_setup_timeout Networkservice#tcp_connection_setup_timeout}
  */
  readonly tcpConnectionSetupTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#tcp_half_closed_timeout Networkservice#tcp_half_closed_timeout}
  */
  readonly tcpHalfClosedTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#tcp_idle_timeout Networkservice#tcp_idle_timeout}
  */
  readonly tcpIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#tcp_reset_timeout Networkservice#tcp_reset_timeout}
  */
  readonly tcpResetTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#udp_idle_timeout Networkservice#udp_idle_timeout}
  */
  readonly udpIdleTimeout?: string;
}

export function networkserviceRoutingServiceFlowtableProfileToTerraform(struct?: NetworkserviceRoutingServiceFlowtableProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_idle_timeout: cdktf.stringToTerraform(struct!.icmpIdleTimeout),
    tcp_closed_timeout: cdktf.stringToTerraform(struct!.tcpClosedTimeout),
    tcp_connection_setup_timeout: cdktf.stringToTerraform(struct!.tcpConnectionSetupTimeout),
    tcp_half_closed_timeout: cdktf.stringToTerraform(struct!.tcpHalfClosedTimeout),
    tcp_idle_timeout: cdktf.stringToTerraform(struct!.tcpIdleTimeout),
    tcp_reset_timeout: cdktf.stringToTerraform(struct!.tcpResetTimeout),
    udp_idle_timeout: cdktf.stringToTerraform(struct!.udpIdleTimeout),
  }
}


export function networkserviceRoutingServiceFlowtableProfileToHclTerraform(struct?: NetworkserviceRoutingServiceFlowtableProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.icmpIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_closed_timeout: {
      value: cdktf.stringToHclTerraform(struct!.tcpClosedTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_connection_setup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.tcpConnectionSetupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_half_closed_timeout: {
      value: cdktf.stringToHclTerraform(struct!.tcpHalfClosedTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.tcpIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_reset_timeout: {
      value: cdktf.stringToHclTerraform(struct!.tcpResetTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.udpIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkserviceRoutingServiceFlowtableProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkserviceRoutingServiceFlowtableProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpIdleTimeout = this._icmpIdleTimeout;
    }
    if (this._tcpClosedTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpClosedTimeout = this._tcpClosedTimeout;
    }
    if (this._tcpConnectionSetupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConnectionSetupTimeout = this._tcpConnectionSetupTimeout;
    }
    if (this._tcpHalfClosedTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHalfClosedTimeout = this._tcpHalfClosedTimeout;
    }
    if (this._tcpIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpIdleTimeout = this._tcpIdleTimeout;
    }
    if (this._tcpResetTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpResetTimeout = this._tcpResetTimeout;
    }
    if (this._udpIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpIdleTimeout = this._udpIdleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkserviceRoutingServiceFlowtableProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpIdleTimeout = undefined;
      this._tcpClosedTimeout = undefined;
      this._tcpConnectionSetupTimeout = undefined;
      this._tcpHalfClosedTimeout = undefined;
      this._tcpIdleTimeout = undefined;
      this._tcpResetTimeout = undefined;
      this._udpIdleTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpIdleTimeout = value.icmpIdleTimeout;
      this._tcpClosedTimeout = value.tcpClosedTimeout;
      this._tcpConnectionSetupTimeout = value.tcpConnectionSetupTimeout;
      this._tcpHalfClosedTimeout = value.tcpHalfClosedTimeout;
      this._tcpIdleTimeout = value.tcpIdleTimeout;
      this._tcpResetTimeout = value.tcpResetTimeout;
      this._udpIdleTimeout = value.udpIdleTimeout;
    }
  }

  // icmp_idle_timeout - computed: false, optional: true, required: false
  private _icmpIdleTimeout?: string; 
  public get icmpIdleTimeout() {
    return this.getStringAttribute('icmp_idle_timeout');
  }
  public set icmpIdleTimeout(value: string) {
    this._icmpIdleTimeout = value;
  }
  public resetIcmpIdleTimeout() {
    this._icmpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpIdleTimeoutInput() {
    return this._icmpIdleTimeout;
  }

  // tcp_closed_timeout - computed: false, optional: true, required: false
  private _tcpClosedTimeout?: string; 
  public get tcpClosedTimeout() {
    return this.getStringAttribute('tcp_closed_timeout');
  }
  public set tcpClosedTimeout(value: string) {
    this._tcpClosedTimeout = value;
  }
  public resetTcpClosedTimeout() {
    this._tcpClosedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpClosedTimeoutInput() {
    return this._tcpClosedTimeout;
  }

  // tcp_connection_setup_timeout - computed: false, optional: true, required: false
  private _tcpConnectionSetupTimeout?: string; 
  public get tcpConnectionSetupTimeout() {
    return this.getStringAttribute('tcp_connection_setup_timeout');
  }
  public set tcpConnectionSetupTimeout(value: string) {
    this._tcpConnectionSetupTimeout = value;
  }
  public resetTcpConnectionSetupTimeout() {
    this._tcpConnectionSetupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnectionSetupTimeoutInput() {
    return this._tcpConnectionSetupTimeout;
  }

  // tcp_half_closed_timeout - computed: false, optional: true, required: false
  private _tcpHalfClosedTimeout?: string; 
  public get tcpHalfClosedTimeout() {
    return this.getStringAttribute('tcp_half_closed_timeout');
  }
  public set tcpHalfClosedTimeout(value: string) {
    this._tcpHalfClosedTimeout = value;
  }
  public resetTcpHalfClosedTimeout() {
    this._tcpHalfClosedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHalfClosedTimeoutInput() {
    return this._tcpHalfClosedTimeout;
  }

  // tcp_idle_timeout - computed: false, optional: true, required: false
  private _tcpIdleTimeout?: string; 
  public get tcpIdleTimeout() {
    return this.getStringAttribute('tcp_idle_timeout');
  }
  public set tcpIdleTimeout(value: string) {
    this._tcpIdleTimeout = value;
  }
  public resetTcpIdleTimeout() {
    this._tcpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIdleTimeoutInput() {
    return this._tcpIdleTimeout;
  }

  // tcp_reset_timeout - computed: false, optional: true, required: false
  private _tcpResetTimeout?: string; 
  public get tcpResetTimeout() {
    return this.getStringAttribute('tcp_reset_timeout');
  }
  public set tcpResetTimeout(value: string) {
    this._tcpResetTimeout = value;
  }
  public resetTcpResetTimeout() {
    this._tcpResetTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResetTimeoutInput() {
    return this._tcpResetTimeout;
  }

  // udp_idle_timeout - computed: false, optional: true, required: false
  private _udpIdleTimeout?: string; 
  public get udpIdleTimeout() {
    return this.getStringAttribute('udp_idle_timeout');
  }
  public set udpIdleTimeout(value: string) {
    this._udpIdleTimeout = value;
  }
  public resetUdpIdleTimeout() {
    this._udpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimeoutInput() {
    return this._udpIdleTimeout;
  }
}

export class NetworkserviceRoutingServiceFlowtableProfileList extends cdktf.ComplexList {
  public internalValue? : NetworkserviceRoutingServiceFlowtableProfile[] | cdktf.IResolvable

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
  public get(index: number): NetworkserviceRoutingServiceFlowtableProfileOutputReference {
    return new NetworkserviceRoutingServiceFlowtableProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkserviceRoutingService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#advertise_backend_networks Networkservice#advertise_backend_networks}
  */
  readonly advertiseBackendNetworks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#enable_auto_gateway Networkservice#enable_auto_gateway}
  */
  readonly enableAutoGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#enable_routing Networkservice#enable_routing}
  */
  readonly enableRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#enable_vip_on_all_interfaces Networkservice#enable_vip_on_all_interfaces}
  */
  readonly enableVipOnAllInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#enable_vmac Networkservice#enable_vmac}
  */
  readonly enableVmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#graceful_restart Networkservice#graceful_restart}
  */
  readonly gracefulRestart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#nat_policy_ref Networkservice#nat_policy_ref}
  */
  readonly natPolicyRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#routing_by_linux_ipstack Networkservice#routing_by_linux_ipstack}
  */
  readonly routingByLinuxIpstack?: string;
  /**
  * floating_intf_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#floating_intf_ip Networkservice#floating_intf_ip}
  */
  readonly floatingIntfIp?: NetworkserviceRoutingServiceFloatingIntfIp[] | cdktf.IResolvable;
  /**
  * floating_intf_ip6_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#floating_intf_ip6_addresses Networkservice#floating_intf_ip6_addresses}
  */
  readonly floatingIntfIp6Addresses?: NetworkserviceRoutingServiceFloatingIntfIp6Addresses[] | cdktf.IResolvable;
  /**
  * floating_intf_ip6_se_2_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#floating_intf_ip6_se_2_addresses Networkservice#floating_intf_ip6_se_2_addresses}
  */
  readonly floatingIntfIp6Se2Addresses?: NetworkserviceRoutingServiceFloatingIntfIp6Se2Addresses[] | cdktf.IResolvable;
  /**
  * floating_intf_ip_se_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#floating_intf_ip_se_2 Networkservice#floating_intf_ip_se_2}
  */
  readonly floatingIntfIpSe2?: NetworkserviceRoutingServiceFloatingIntfIpSe2[] | cdktf.IResolvable;
  /**
  * flowtable_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#flowtable_profile Networkservice#flowtable_profile}
  */
  readonly flowtableProfile?: NetworkserviceRoutingServiceFlowtableProfile[] | cdktf.IResolvable;
}

export function networkserviceRoutingServiceToTerraform(struct?: NetworkserviceRoutingService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_backend_networks: cdktf.stringToTerraform(struct!.advertiseBackendNetworks),
    enable_auto_gateway: cdktf.stringToTerraform(struct!.enableAutoGateway),
    enable_routing: cdktf.stringToTerraform(struct!.enableRouting),
    enable_vip_on_all_interfaces: cdktf.stringToTerraform(struct!.enableVipOnAllInterfaces),
    enable_vmac: cdktf.stringToTerraform(struct!.enableVmac),
    graceful_restart: cdktf.stringToTerraform(struct!.gracefulRestart),
    nat_policy_ref: cdktf.stringToTerraform(struct!.natPolicyRef),
    routing_by_linux_ipstack: cdktf.stringToTerraform(struct!.routingByLinuxIpstack),
    floating_intf_ip: cdktf.listMapper(networkserviceRoutingServiceFloatingIntfIpToTerraform, true)(struct!.floatingIntfIp),
    floating_intf_ip6_addresses: cdktf.listMapper(networkserviceRoutingServiceFloatingIntfIp6AddressesToTerraform, true)(struct!.floatingIntfIp6Addresses),
    floating_intf_ip6_se_2_addresses: cdktf.listMapper(networkserviceRoutingServiceFloatingIntfIp6Se2AddressesToTerraform, true)(struct!.floatingIntfIp6Se2Addresses),
    floating_intf_ip_se_2: cdktf.listMapper(networkserviceRoutingServiceFloatingIntfIpSe2ToTerraform, true)(struct!.floatingIntfIpSe2),
    flowtable_profile: cdktf.listMapper(networkserviceRoutingServiceFlowtableProfileToTerraform, true)(struct!.flowtableProfile),
  }
}


export function networkserviceRoutingServiceToHclTerraform(struct?: NetworkserviceRoutingService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_backend_networks: {
      value: cdktf.stringToHclTerraform(struct!.advertiseBackendNetworks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_auto_gateway: {
      value: cdktf.stringToHclTerraform(struct!.enableAutoGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_routing: {
      value: cdktf.stringToHclTerraform(struct!.enableRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_vip_on_all_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.enableVipOnAllInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_vmac: {
      value: cdktf.stringToHclTerraform(struct!.enableVmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_restart: {
      value: cdktf.stringToHclTerraform(struct!.gracefulRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_policy_ref: {
      value: cdktf.stringToHclTerraform(struct!.natPolicyRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_by_linux_ipstack: {
      value: cdktf.stringToHclTerraform(struct!.routingByLinuxIpstack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_intf_ip: {
      value: cdktf.listMapperHcl(networkserviceRoutingServiceFloatingIntfIpToHclTerraform, true)(struct!.floatingIntfIp),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkserviceRoutingServiceFloatingIntfIpList",
    },
    floating_intf_ip6_addresses: {
      value: cdktf.listMapperHcl(networkserviceRoutingServiceFloatingIntfIp6AddressesToHclTerraform, true)(struct!.floatingIntfIp6Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkserviceRoutingServiceFloatingIntfIp6AddressesList",
    },
    floating_intf_ip6_se_2_addresses: {
      value: cdktf.listMapperHcl(networkserviceRoutingServiceFloatingIntfIp6Se2AddressesToHclTerraform, true)(struct!.floatingIntfIp6Se2Addresses),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkserviceRoutingServiceFloatingIntfIp6Se2AddressesList",
    },
    floating_intf_ip_se_2: {
      value: cdktf.listMapperHcl(networkserviceRoutingServiceFloatingIntfIpSe2ToHclTerraform, true)(struct!.floatingIntfIpSe2),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkserviceRoutingServiceFloatingIntfIpSe2List",
    },
    flowtable_profile: {
      value: cdktf.listMapperHcl(networkserviceRoutingServiceFlowtableProfileToHclTerraform, true)(struct!.flowtableProfile),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkserviceRoutingServiceFlowtableProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkserviceRoutingServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkserviceRoutingService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseBackendNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseBackendNetworks = this._advertiseBackendNetworks;
    }
    if (this._enableAutoGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoGateway = this._enableAutoGateway;
    }
    if (this._enableRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRouting = this._enableRouting;
    }
    if (this._enableVipOnAllInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVipOnAllInterfaces = this._enableVipOnAllInterfaces;
    }
    if (this._enableVmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVmac = this._enableVmac;
    }
    if (this._gracefulRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart;
    }
    if (this._natPolicyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPolicyRef = this._natPolicyRef;
    }
    if (this._routingByLinuxIpstack !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingByLinuxIpstack = this._routingByLinuxIpstack;
    }
    if (this._floatingIntfIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIntfIp = this._floatingIntfIp?.internalValue;
    }
    if (this._floatingIntfIp6Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIntfIp6Addresses = this._floatingIntfIp6Addresses?.internalValue;
    }
    if (this._floatingIntfIp6Se2Addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIntfIp6Se2Addresses = this._floatingIntfIp6Se2Addresses?.internalValue;
    }
    if (this._floatingIntfIpSe2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIntfIpSe2 = this._floatingIntfIpSe2?.internalValue;
    }
    if (this._flowtableProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowtableProfile = this._flowtableProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkserviceRoutingService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseBackendNetworks = undefined;
      this._enableAutoGateway = undefined;
      this._enableRouting = undefined;
      this._enableVipOnAllInterfaces = undefined;
      this._enableVmac = undefined;
      this._gracefulRestart = undefined;
      this._natPolicyRef = undefined;
      this._routingByLinuxIpstack = undefined;
      this._floatingIntfIp.internalValue = undefined;
      this._floatingIntfIp6Addresses.internalValue = undefined;
      this._floatingIntfIp6Se2Addresses.internalValue = undefined;
      this._floatingIntfIpSe2.internalValue = undefined;
      this._flowtableProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseBackendNetworks = value.advertiseBackendNetworks;
      this._enableAutoGateway = value.enableAutoGateway;
      this._enableRouting = value.enableRouting;
      this._enableVipOnAllInterfaces = value.enableVipOnAllInterfaces;
      this._enableVmac = value.enableVmac;
      this._gracefulRestart = value.gracefulRestart;
      this._natPolicyRef = value.natPolicyRef;
      this._routingByLinuxIpstack = value.routingByLinuxIpstack;
      this._floatingIntfIp.internalValue = value.floatingIntfIp;
      this._floatingIntfIp6Addresses.internalValue = value.floatingIntfIp6Addresses;
      this._floatingIntfIp6Se2Addresses.internalValue = value.floatingIntfIp6Se2Addresses;
      this._floatingIntfIpSe2.internalValue = value.floatingIntfIpSe2;
      this._flowtableProfile.internalValue = value.flowtableProfile;
    }
  }

  // advertise_backend_networks - computed: false, optional: true, required: false
  private _advertiseBackendNetworks?: string; 
  public get advertiseBackendNetworks() {
    return this.getStringAttribute('advertise_backend_networks');
  }
  public set advertiseBackendNetworks(value: string) {
    this._advertiseBackendNetworks = value;
  }
  public resetAdvertiseBackendNetworks() {
    this._advertiseBackendNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseBackendNetworksInput() {
    return this._advertiseBackendNetworks;
  }

  // enable_auto_gateway - computed: false, optional: true, required: false
  private _enableAutoGateway?: string; 
  public get enableAutoGateway() {
    return this.getStringAttribute('enable_auto_gateway');
  }
  public set enableAutoGateway(value: string) {
    this._enableAutoGateway = value;
  }
  public resetEnableAutoGateway() {
    this._enableAutoGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoGatewayInput() {
    return this._enableAutoGateway;
  }

  // enable_routing - computed: false, optional: true, required: false
  private _enableRouting?: string; 
  public get enableRouting() {
    return this.getStringAttribute('enable_routing');
  }
  public set enableRouting(value: string) {
    this._enableRouting = value;
  }
  public resetEnableRouting() {
    this._enableRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRoutingInput() {
    return this._enableRouting;
  }

  // enable_vip_on_all_interfaces - computed: false, optional: true, required: false
  private _enableVipOnAllInterfaces?: string; 
  public get enableVipOnAllInterfaces() {
    return this.getStringAttribute('enable_vip_on_all_interfaces');
  }
  public set enableVipOnAllInterfaces(value: string) {
    this._enableVipOnAllInterfaces = value;
  }
  public resetEnableVipOnAllInterfaces() {
    this._enableVipOnAllInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVipOnAllInterfacesInput() {
    return this._enableVipOnAllInterfaces;
  }

  // enable_vmac - computed: false, optional: true, required: false
  private _enableVmac?: string; 
  public get enableVmac() {
    return this.getStringAttribute('enable_vmac');
  }
  public set enableVmac(value: string) {
    this._enableVmac = value;
  }
  public resetEnableVmac() {
    this._enableVmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVmacInput() {
    return this._enableVmac;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart?: string; 
  public get gracefulRestart() {
    return this.getStringAttribute('graceful_restart');
  }
  public set gracefulRestart(value: string) {
    this._gracefulRestart = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart;
  }

  // nat_policy_ref - computed: true, optional: true, required: false
  private _natPolicyRef?: string; 
  public get natPolicyRef() {
    return this.getStringAttribute('nat_policy_ref');
  }
  public set natPolicyRef(value: string) {
    this._natPolicyRef = value;
  }
  public resetNatPolicyRef() {
    this._natPolicyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPolicyRefInput() {
    return this._natPolicyRef;
  }

  // routing_by_linux_ipstack - computed: false, optional: true, required: false
  private _routingByLinuxIpstack?: string; 
  public get routingByLinuxIpstack() {
    return this.getStringAttribute('routing_by_linux_ipstack');
  }
  public set routingByLinuxIpstack(value: string) {
    this._routingByLinuxIpstack = value;
  }
  public resetRoutingByLinuxIpstack() {
    this._routingByLinuxIpstack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingByLinuxIpstackInput() {
    return this._routingByLinuxIpstack;
  }

  // floating_intf_ip - computed: false, optional: true, required: false
  private _floatingIntfIp = new NetworkserviceRoutingServiceFloatingIntfIpList(this, "floating_intf_ip", false);
  public get floatingIntfIp() {
    return this._floatingIntfIp;
  }
  public putFloatingIntfIp(value: NetworkserviceRoutingServiceFloatingIntfIp[] | cdktf.IResolvable) {
    this._floatingIntfIp.internalValue = value;
  }
  public resetFloatingIntfIp() {
    this._floatingIntfIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIntfIpInput() {
    return this._floatingIntfIp.internalValue;
  }

  // floating_intf_ip6_addresses - computed: false, optional: true, required: false
  private _floatingIntfIp6Addresses = new NetworkserviceRoutingServiceFloatingIntfIp6AddressesList(this, "floating_intf_ip6_addresses", false);
  public get floatingIntfIp6Addresses() {
    return this._floatingIntfIp6Addresses;
  }
  public putFloatingIntfIp6Addresses(value: NetworkserviceRoutingServiceFloatingIntfIp6Addresses[] | cdktf.IResolvable) {
    this._floatingIntfIp6Addresses.internalValue = value;
  }
  public resetFloatingIntfIp6Addresses() {
    this._floatingIntfIp6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIntfIp6AddressesInput() {
    return this._floatingIntfIp6Addresses.internalValue;
  }

  // floating_intf_ip6_se_2_addresses - computed: false, optional: true, required: false
  private _floatingIntfIp6Se2Addresses = new NetworkserviceRoutingServiceFloatingIntfIp6Se2AddressesList(this, "floating_intf_ip6_se_2_addresses", false);
  public get floatingIntfIp6Se2Addresses() {
    return this._floatingIntfIp6Se2Addresses;
  }
  public putFloatingIntfIp6Se2Addresses(value: NetworkserviceRoutingServiceFloatingIntfIp6Se2Addresses[] | cdktf.IResolvable) {
    this._floatingIntfIp6Se2Addresses.internalValue = value;
  }
  public resetFloatingIntfIp6Se2Addresses() {
    this._floatingIntfIp6Se2Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIntfIp6Se2AddressesInput() {
    return this._floatingIntfIp6Se2Addresses.internalValue;
  }

  // floating_intf_ip_se_2 - computed: false, optional: true, required: false
  private _floatingIntfIpSe2 = new NetworkserviceRoutingServiceFloatingIntfIpSe2List(this, "floating_intf_ip_se_2", false);
  public get floatingIntfIpSe2() {
    return this._floatingIntfIpSe2;
  }
  public putFloatingIntfIpSe2(value: NetworkserviceRoutingServiceFloatingIntfIpSe2[] | cdktf.IResolvable) {
    this._floatingIntfIpSe2.internalValue = value;
  }
  public resetFloatingIntfIpSe2() {
    this._floatingIntfIpSe2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIntfIpSe2Input() {
    return this._floatingIntfIpSe2.internalValue;
  }

  // flowtable_profile - computed: false, optional: true, required: false
  private _flowtableProfile = new NetworkserviceRoutingServiceFlowtableProfileList(this, "flowtable_profile", true);
  public get flowtableProfile() {
    return this._flowtableProfile;
  }
  public putFlowtableProfile(value: NetworkserviceRoutingServiceFlowtableProfile[] | cdktf.IResolvable) {
    this._flowtableProfile.internalValue = value;
  }
  public resetFlowtableProfile() {
    this._flowtableProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowtableProfileInput() {
    return this._flowtableProfile.internalValue;
  }
}

export class NetworkserviceRoutingServiceList extends cdktf.ComplexList {
  public internalValue? : NetworkserviceRoutingService[] | cdktf.IResolvable

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
  public get(index: number): NetworkserviceRoutingServiceOutputReference {
    return new NetworkserviceRoutingServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice avi_networkservice}
*/
export class Networkservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_networkservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Networkservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Networkservice to import
  * @param importFromId The id of the existing Networkservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Networkservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_networkservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/networkservice avi_networkservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkserviceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkserviceConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_networkservice',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudRef = config.cloudRef;
    this._id = config.id;
    this._name = config.name;
    this._seGroupRef = config.seGroupRef;
    this._serviceType = config.serviceType;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._vrfRef = config.vrfRef;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._markers.internalValue = config.markers;
    this._routingService.internalValue = config.routingService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
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

  // se_group_ref - computed: false, optional: false, required: true
  private _seGroupRef?: string; 
  public get seGroupRef() {
    return this.getStringAttribute('se_group_ref');
  }
  public set seGroupRef(value: string) {
    this._seGroupRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seGroupRefInput() {
    return this._seGroupRef;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vrf_ref - computed: false, optional: false, required: true
  private _vrfRef?: string; 
  public get vrfRef() {
    return this.getStringAttribute('vrf_ref');
  }
  public set vrfRef(value: string) {
    this._vrfRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfRefInput() {
    return this._vrfRef;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new NetworkserviceConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: NetworkserviceConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new NetworkserviceMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: NetworkserviceMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // routing_service - computed: false, optional: true, required: false
  private _routingService = new NetworkserviceRoutingServiceList(this, "routing_service", true);
  public get routingService() {
    return this._routingService;
  }
  public putRoutingService(value: NetworkserviceRoutingService[] | cdktf.IResolvable) {
    this._routingService.internalValue = value;
  }
  public resetRoutingService() {
    this._routingService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingServiceInput() {
    return this._routingService.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      se_group_ref: cdktf.stringToTerraform(this._seGroupRef),
      service_type: cdktf.stringToTerraform(this._serviceType),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrf_ref: cdktf.stringToTerraform(this._vrfRef),
      configpb_attributes: cdktf.listMapper(networkserviceConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      markers: cdktf.listMapper(networkserviceMarkersToTerraform, true)(this._markers.internalValue),
      routing_service: cdktf.listMapper(networkserviceRoutingServiceToTerraform, true)(this._routingService.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_group_ref: {
        value: cdktf.stringToHclTerraform(this._seGroupRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_ref: {
        value: cdktf.stringToHclTerraform(this._vrfRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(networkserviceConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkserviceConfigpbAttributesList",
      },
      markers: {
        value: cdktf.listMapperHcl(networkserviceMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkserviceMarkersList",
      },
      routing_service: {
        value: cdktf.listMapperHcl(networkserviceRoutingServiceToHclTerraform, true)(this._routingService.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkserviceRoutingServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
