// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrfcontextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#cloud_ref Vrfcontext#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#description Vrfcontext#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#id Vrfcontext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#lldp_enable Vrfcontext#lldp_enable}
  */
  readonly lldpEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#name Vrfcontext#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#system_default Vrfcontext#system_default}
  */
  readonly systemDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#tenant_ref Vrfcontext#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#uuid Vrfcontext#uuid}
  */
  readonly uuid?: string;
  /**
  * attrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#attrs Vrfcontext#attrs}
  */
  readonly attrs?: VrfcontextAttrs[] | cdktf.IResolvable;
  /**
  * bfd_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#bfd_profile Vrfcontext#bfd_profile}
  */
  readonly bfdProfile?: VrfcontextBfdProfile[] | cdktf.IResolvable;
  /**
  * bgp_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#bgp_profile Vrfcontext#bgp_profile}
  */
  readonly bgpProfile?: VrfcontextBgpProfile[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#configpb_attributes Vrfcontext#configpb_attributes}
  */
  readonly configpbAttributes?: VrfcontextConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * debugvrfcontext block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#debugvrfcontext Vrfcontext#debugvrfcontext}
  */
  readonly debugvrfcontext?: VrfcontextDebugvrfcontext[] | cdktf.IResolvable;
  /**
  * gateway_mon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#gateway_mon Vrfcontext#gateway_mon}
  */
  readonly gatewayMon?: VrfcontextGatewayMon[] | cdktf.IResolvable;
  /**
  * internal_gateway_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#internal_gateway_monitor Vrfcontext#internal_gateway_monitor}
  */
  readonly internalGatewayMonitor?: VrfcontextInternalGatewayMonitor[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#markers Vrfcontext#markers}
  */
  readonly markers?: VrfcontextMarkers[] | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#static_routes Vrfcontext#static_routes}
  */
  readonly staticRoutes?: VrfcontextStaticRoutes[] | cdktf.IResolvable;
}
export interface VrfcontextAttrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#key Vrfcontext#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#value Vrfcontext#value}
  */
  readonly value?: string;
}

export function vrfcontextAttrsToTerraform(struct?: VrfcontextAttrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfcontextAttrsToHclTerraform(struct?: VrfcontextAttrs | cdktf.IResolvable): any {
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

export class VrfcontextAttrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextAttrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextAttrs | cdktf.IResolvable | undefined) {
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfcontextAttrsList extends cdktf.ComplexList {
  public internalValue? : VrfcontextAttrs[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextAttrsOutputReference {
    return new VrfcontextAttrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBfdProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#minrx Vrfcontext#minrx}
  */
  readonly minrx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#mintx Vrfcontext#mintx}
  */
  readonly mintx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#multi Vrfcontext#multi}
  */
  readonly multi?: string;
}

export function vrfcontextBfdProfileToTerraform(struct?: VrfcontextBfdProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minrx: cdktf.stringToTerraform(struct!.minrx),
    mintx: cdktf.stringToTerraform(struct!.mintx),
    multi: cdktf.stringToTerraform(struct!.multi),
  }
}


export function vrfcontextBfdProfileToHclTerraform(struct?: VrfcontextBfdProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minrx: {
      value: cdktf.stringToHclTerraform(struct!.minrx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mintx: {
      value: cdktf.stringToHclTerraform(struct!.mintx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi: {
      value: cdktf.stringToHclTerraform(struct!.multi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextBfdProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBfdProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minrx !== undefined) {
      hasAnyValues = true;
      internalValueResult.minrx = this._minrx;
    }
    if (this._mintx !== undefined) {
      hasAnyValues = true;
      internalValueResult.mintx = this._mintx;
    }
    if (this._multi !== undefined) {
      hasAnyValues = true;
      internalValueResult.multi = this._multi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextBfdProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minrx = undefined;
      this._mintx = undefined;
      this._multi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minrx = value.minrx;
      this._mintx = value.mintx;
      this._multi = value.multi;
    }
  }

  // minrx - computed: false, optional: true, required: false
  private _minrx?: string; 
  public get minrx() {
    return this.getStringAttribute('minrx');
  }
  public set minrx(value: string) {
    this._minrx = value;
  }
  public resetMinrx() {
    this._minrx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minrxInput() {
    return this._minrx;
  }

  // mintx - computed: false, optional: true, required: false
  private _mintx?: string; 
  public get mintx() {
    return this.getStringAttribute('mintx');
  }
  public set mintx(value: string) {
    this._mintx = value;
  }
  public resetMintx() {
    this._mintx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mintxInput() {
    return this._mintx;
  }

  // multi - computed: false, optional: true, required: false
  private _multi?: string; 
  public get multi() {
    return this.getStringAttribute('multi');
  }
  public set multi(value: string) {
    this._multi = value;
  }
  public resetMulti() {
    this._multi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiInput() {
    return this._multi;
  }
}

export class VrfcontextBfdProfileList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBfdProfile[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBfdProfileOutputReference {
    return new VrfcontextBfdProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfileIpCommunitiesIpBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#addr Vrfcontext#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#type Vrfcontext#type}
  */
  readonly type: string;
}

export function vrfcontextBgpProfileIpCommunitiesIpBeginToTerraform(struct?: VrfcontextBgpProfileIpCommunitiesIpBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vrfcontextBgpProfileIpCommunitiesIpBeginToHclTerraform(struct?: VrfcontextBgpProfileIpCommunitiesIpBegin | cdktf.IResolvable): any {
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

export class VrfcontextBgpProfileIpCommunitiesIpBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfileIpCommunitiesIpBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextBgpProfileIpCommunitiesIpBegin | cdktf.IResolvable | undefined) {
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

export class VrfcontextBgpProfileIpCommunitiesIpBeginList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfileIpCommunitiesIpBegin[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfileIpCommunitiesIpBeginOutputReference {
    return new VrfcontextBgpProfileIpCommunitiesIpBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfileIpCommunitiesIpEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#addr Vrfcontext#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#type Vrfcontext#type}
  */
  readonly type: string;
}

export function vrfcontextBgpProfileIpCommunitiesIpEndToTerraform(struct?: VrfcontextBgpProfileIpCommunitiesIpEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vrfcontextBgpProfileIpCommunitiesIpEndToHclTerraform(struct?: VrfcontextBgpProfileIpCommunitiesIpEnd | cdktf.IResolvable): any {
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

export class VrfcontextBgpProfileIpCommunitiesIpEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfileIpCommunitiesIpEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextBgpProfileIpCommunitiesIpEnd | cdktf.IResolvable | undefined) {
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

export class VrfcontextBgpProfileIpCommunitiesIpEndList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfileIpCommunitiesIpEnd[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfileIpCommunitiesIpEndOutputReference {
    return new VrfcontextBgpProfileIpCommunitiesIpEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfileIpCommunities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#community Vrfcontext#community}
  */
  readonly community: string[];
  /**
  * ip_begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#ip_begin Vrfcontext#ip_begin}
  */
  readonly ipBegin: VrfcontextBgpProfileIpCommunitiesIpBegin[] | cdktf.IResolvable;
  /**
  * ip_end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#ip_end Vrfcontext#ip_end}
  */
  readonly ipEnd?: VrfcontextBgpProfileIpCommunitiesIpEnd[] | cdktf.IResolvable;
}

export function vrfcontextBgpProfileIpCommunitiesToTerraform(struct?: VrfcontextBgpProfileIpCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
    ip_begin: cdktf.listMapper(vrfcontextBgpProfileIpCommunitiesIpBeginToTerraform, true)(struct!.ipBegin),
    ip_end: cdktf.listMapper(vrfcontextBgpProfileIpCommunitiesIpEndToTerraform, true)(struct!.ipEnd),
  }
}


export function vrfcontextBgpProfileIpCommunitiesToHclTerraform(struct?: VrfcontextBgpProfileIpCommunities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.community),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_begin: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfileIpCommunitiesIpBeginToHclTerraform, true)(struct!.ipBegin),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextBgpProfileIpCommunitiesIpBeginList",
    },
    ip_end: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfileIpCommunitiesIpEndToHclTerraform, true)(struct!.ipEnd),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextBgpProfileIpCommunitiesIpEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextBgpProfileIpCommunitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfileIpCommunities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._ipBegin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBegin = this._ipBegin?.internalValue;
    }
    if (this._ipEnd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEnd = this._ipEnd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextBgpProfileIpCommunities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
      this._ipBegin.internalValue = undefined;
      this._ipEnd.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
      this._ipBegin.internalValue = value.ipBegin;
      this._ipEnd.internalValue = value.ipEnd;
    }
  }

  // community - computed: false, optional: false, required: true
  private _community?: string[]; 
  public get community() {
    return this.getListAttribute('community');
  }
  public set community(value: string[]) {
    this._community = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // ip_begin - computed: false, optional: false, required: true
  private _ipBegin = new VrfcontextBgpProfileIpCommunitiesIpBeginList(this, "ip_begin", true);
  public get ipBegin() {
    return this._ipBegin;
  }
  public putIpBegin(value: VrfcontextBgpProfileIpCommunitiesIpBegin[] | cdktf.IResolvable) {
    this._ipBegin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBeginInput() {
    return this._ipBegin.internalValue;
  }

  // ip_end - computed: false, optional: true, required: false
  private _ipEnd = new VrfcontextBgpProfileIpCommunitiesIpEndList(this, "ip_end", true);
  public get ipEnd() {
    return this._ipEnd;
  }
  public putIpEnd(value: VrfcontextBgpProfileIpCommunitiesIpEnd[] | cdktf.IResolvable) {
    this._ipEnd.internalValue = value;
  }
  public resetIpEnd() {
    this._ipEnd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEndInput() {
    return this._ipEnd.internalValue;
  }
}

export class VrfcontextBgpProfileIpCommunitiesList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfileIpCommunities[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfileIpCommunitiesOutputReference {
    return new VrfcontextBgpProfileIpCommunitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfilePeersPeerIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#addr Vrfcontext#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#type Vrfcontext#type}
  */
  readonly type: string;
}

export function vrfcontextBgpProfilePeersPeerIpToTerraform(struct?: VrfcontextBgpProfilePeersPeerIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vrfcontextBgpProfilePeersPeerIpToHclTerraform(struct?: VrfcontextBgpProfilePeersPeerIp | cdktf.IResolvable): any {
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

export class VrfcontextBgpProfilePeersPeerIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfilePeersPeerIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextBgpProfilePeersPeerIp | cdktf.IResolvable | undefined) {
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

export class VrfcontextBgpProfilePeersPeerIpList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfilePeersPeerIp[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfilePeersPeerIpOutputReference {
    return new VrfcontextBgpProfilePeersPeerIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfilePeersPeerIp6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#addr Vrfcontext#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#type Vrfcontext#type}
  */
  readonly type: string;
}

export function vrfcontextBgpProfilePeersPeerIp6ToTerraform(struct?: VrfcontextBgpProfilePeersPeerIp6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vrfcontextBgpProfilePeersPeerIp6ToHclTerraform(struct?: VrfcontextBgpProfilePeersPeerIp6 | cdktf.IResolvable): any {
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

export class VrfcontextBgpProfilePeersPeerIp6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfilePeersPeerIp6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextBgpProfilePeersPeerIp6 | cdktf.IResolvable | undefined) {
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

export class VrfcontextBgpProfilePeersPeerIp6List extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfilePeersPeerIp6[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfilePeersPeerIp6OutputReference {
    return new VrfcontextBgpProfilePeersPeerIp6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfilePeersSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#addr Vrfcontext#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#type Vrfcontext#type}
  */
  readonly type: string;
}

export function vrfcontextBgpProfilePeersSubnetIpAddrToTerraform(struct?: VrfcontextBgpProfilePeersSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vrfcontextBgpProfilePeersSubnetIpAddrToHclTerraform(struct?: VrfcontextBgpProfilePeersSubnetIpAddr | cdktf.IResolvable): any {
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

export class VrfcontextBgpProfilePeersSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfilePeersSubnetIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextBgpProfilePeersSubnetIpAddr | cdktf.IResolvable | undefined) {
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

export class VrfcontextBgpProfilePeersSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfilePeersSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfilePeersSubnetIpAddrOutputReference {
    return new VrfcontextBgpProfilePeersSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfilePeersSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#mask Vrfcontext#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#ip_addr Vrfcontext#ip_addr}
  */
  readonly ipAddr: VrfcontextBgpProfilePeersSubnetIpAddr[] | cdktf.IResolvable;
}

export function vrfcontextBgpProfilePeersSubnetToTerraform(struct?: VrfcontextBgpProfilePeersSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(vrfcontextBgpProfilePeersSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function vrfcontextBgpProfilePeersSubnetToHclTerraform(struct?: VrfcontextBgpProfilePeersSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfilePeersSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextBgpProfilePeersSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextBgpProfilePeersSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfilePeersSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextBgpProfilePeersSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new VrfcontextBgpProfilePeersSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: VrfcontextBgpProfilePeersSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class VrfcontextBgpProfilePeersSubnetList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfilePeersSubnet[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfilePeersSubnetOutputReference {
    return new VrfcontextBgpProfilePeersSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfilePeersSubnet6IpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#addr Vrfcontext#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#type Vrfcontext#type}
  */
  readonly type: string;
}

export function vrfcontextBgpProfilePeersSubnet6IpAddrToTerraform(struct?: VrfcontextBgpProfilePeersSubnet6IpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vrfcontextBgpProfilePeersSubnet6IpAddrToHclTerraform(struct?: VrfcontextBgpProfilePeersSubnet6IpAddr | cdktf.IResolvable): any {
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

export class VrfcontextBgpProfilePeersSubnet6IpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfilePeersSubnet6IpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextBgpProfilePeersSubnet6IpAddr | cdktf.IResolvable | undefined) {
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

export class VrfcontextBgpProfilePeersSubnet6IpAddrList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfilePeersSubnet6IpAddr[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfilePeersSubnet6IpAddrOutputReference {
    return new VrfcontextBgpProfilePeersSubnet6IpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfilePeersSubnet6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#mask Vrfcontext#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#ip_addr Vrfcontext#ip_addr}
  */
  readonly ipAddr: VrfcontextBgpProfilePeersSubnet6IpAddr[] | cdktf.IResolvable;
}

export function vrfcontextBgpProfilePeersSubnet6ToTerraform(struct?: VrfcontextBgpProfilePeersSubnet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(vrfcontextBgpProfilePeersSubnet6IpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function vrfcontextBgpProfilePeersSubnet6ToHclTerraform(struct?: VrfcontextBgpProfilePeersSubnet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfilePeersSubnet6IpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextBgpProfilePeersSubnet6IpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextBgpProfilePeersSubnet6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfilePeersSubnet6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextBgpProfilePeersSubnet6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new VrfcontextBgpProfilePeersSubnet6IpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: VrfcontextBgpProfilePeersSubnet6IpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class VrfcontextBgpProfilePeersSubnet6List extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfilePeersSubnet6[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfilePeersSubnet6OutputReference {
    return new VrfcontextBgpProfilePeersSubnet6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfilePeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#advertise_snat_ip Vrfcontext#advertise_snat_ip}
  */
  readonly advertiseSnatIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#advertise_vip Vrfcontext#advertise_vip}
  */
  readonly advertiseVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#advertisement_interval Vrfcontext#advertisement_interval}
  */
  readonly advertisementInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#bfd Vrfcontext#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#connect_timer Vrfcontext#connect_timer}
  */
  readonly connectTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#ebgp_multihop Vrfcontext#ebgp_multihop}
  */
  readonly ebgpMultihop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#hold_time Vrfcontext#hold_time}
  */
  readonly holdTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#ibgp_local_as_override Vrfcontext#ibgp_local_as_override}
  */
  readonly ibgpLocalAsOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#keepalive_interval Vrfcontext#keepalive_interval}
  */
  readonly keepaliveInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#label Vrfcontext#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#local_as Vrfcontext#local_as}
  */
  readonly localAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#md5_secret Vrfcontext#md5_secret}
  */
  readonly md5Secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#network_ref Vrfcontext#network_ref}
  */
  readonly networkRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#remote_as Vrfcontext#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#shutdown Vrfcontext#shutdown}
  */
  readonly shutdown?: string;
  /**
  * peer_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#peer_ip Vrfcontext#peer_ip}
  */
  readonly peerIp?: VrfcontextBgpProfilePeersPeerIp[] | cdktf.IResolvable;
  /**
  * peer_ip6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#peer_ip6 Vrfcontext#peer_ip6}
  */
  readonly peerIp6?: VrfcontextBgpProfilePeersPeerIp6[] | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#subnet Vrfcontext#subnet}
  */
  readonly subnet?: VrfcontextBgpProfilePeersSubnet[] | cdktf.IResolvable;
  /**
  * subnet6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#subnet6 Vrfcontext#subnet6}
  */
  readonly subnet6?: VrfcontextBgpProfilePeersSubnet6[] | cdktf.IResolvable;
}

export function vrfcontextBgpProfilePeersToTerraform(struct?: VrfcontextBgpProfilePeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_snat_ip: cdktf.stringToTerraform(struct!.advertiseSnatIp),
    advertise_vip: cdktf.stringToTerraform(struct!.advertiseVip),
    advertisement_interval: cdktf.stringToTerraform(struct!.advertisementInterval),
    bfd: cdktf.stringToTerraform(struct!.bfd),
    connect_timer: cdktf.stringToTerraform(struct!.connectTimer),
    ebgp_multihop: cdktf.stringToTerraform(struct!.ebgpMultihop),
    hold_time: cdktf.stringToTerraform(struct!.holdTime),
    ibgp_local_as_override: cdktf.stringToTerraform(struct!.ibgpLocalAsOverride),
    keepalive_interval: cdktf.stringToTerraform(struct!.keepaliveInterval),
    label: cdktf.stringToTerraform(struct!.label),
    local_as: cdktf.stringToTerraform(struct!.localAs),
    md5_secret: cdktf.stringToTerraform(struct!.md5Secret),
    network_ref: cdktf.stringToTerraform(struct!.networkRef),
    remote_as: cdktf.stringToTerraform(struct!.remoteAs),
    shutdown: cdktf.stringToTerraform(struct!.shutdown),
    peer_ip: cdktf.listMapper(vrfcontextBgpProfilePeersPeerIpToTerraform, true)(struct!.peerIp),
    peer_ip6: cdktf.listMapper(vrfcontextBgpProfilePeersPeerIp6ToTerraform, true)(struct!.peerIp6),
    subnet: cdktf.listMapper(vrfcontextBgpProfilePeersSubnetToTerraform, true)(struct!.subnet),
    subnet6: cdktf.listMapper(vrfcontextBgpProfilePeersSubnet6ToTerraform, true)(struct!.subnet6),
  }
}


export function vrfcontextBgpProfilePeersToHclTerraform(struct?: VrfcontextBgpProfilePeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_snat_ip: {
      value: cdktf.stringToHclTerraform(struct!.advertiseSnatIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advertise_vip: {
      value: cdktf.stringToHclTerraform(struct!.advertiseVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advertisement_interval: {
      value: cdktf.stringToHclTerraform(struct!.advertisementInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: cdktf.stringToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timer: {
      value: cdktf.stringToHclTerraform(struct!.connectTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_multihop: {
      value: cdktf.stringToHclTerraform(struct!.ebgpMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.stringToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ibgp_local_as_override: {
      value: cdktf.stringToHclTerraform(struct!.ibgpLocalAsOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_interval: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_as: {
      value: cdktf.stringToHclTerraform(struct!.localAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md5_secret: {
      value: cdktf.stringToHclTerraform(struct!.md5Secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ref: {
      value: cdktf.stringToHclTerraform(struct!.networkRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as: {
      value: cdktf.stringToHclTerraform(struct!.remoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown: {
      value: cdktf.stringToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_ip: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfilePeersPeerIpToHclTerraform, true)(struct!.peerIp),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextBgpProfilePeersPeerIpList",
    },
    peer_ip6: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfilePeersPeerIp6ToHclTerraform, true)(struct!.peerIp6),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextBgpProfilePeersPeerIp6List",
    },
    subnet: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfilePeersSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextBgpProfilePeersSubnetList",
    },
    subnet6: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfilePeersSubnet6ToHclTerraform, true)(struct!.subnet6),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextBgpProfilePeersSubnet6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextBgpProfilePeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfilePeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseSnatIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseSnatIp = this._advertiseSnatIp;
    }
    if (this._advertiseVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseVip = this._advertiseVip;
    }
    if (this._advertisementInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementInterval = this._advertisementInterval;
    }
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._connectTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimer = this._connectTimer;
    }
    if (this._ebgpMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihop = this._ebgpMultihop;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._ibgpLocalAsOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibgpLocalAsOverride = this._ibgpLocalAsOverride;
    }
    if (this._keepaliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveInterval = this._keepaliveInterval;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._localAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAs = this._localAs;
    }
    if (this._md5Secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Secret = this._md5Secret;
    }
    if (this._networkRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRef = this._networkRef;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._peerIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp?.internalValue;
    }
    if (this._peerIp6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp6 = this._peerIp6?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnet6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet6 = this._subnet6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextBgpProfilePeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseSnatIp = undefined;
      this._advertiseVip = undefined;
      this._advertisementInterval = undefined;
      this._bfd = undefined;
      this._connectTimer = undefined;
      this._ebgpMultihop = undefined;
      this._holdTime = undefined;
      this._ibgpLocalAsOverride = undefined;
      this._keepaliveInterval = undefined;
      this._label = undefined;
      this._localAs = undefined;
      this._md5Secret = undefined;
      this._networkRef = undefined;
      this._remoteAs = undefined;
      this._shutdown = undefined;
      this._peerIp.internalValue = undefined;
      this._peerIp6.internalValue = undefined;
      this._subnet.internalValue = undefined;
      this._subnet6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseSnatIp = value.advertiseSnatIp;
      this._advertiseVip = value.advertiseVip;
      this._advertisementInterval = value.advertisementInterval;
      this._bfd = value.bfd;
      this._connectTimer = value.connectTimer;
      this._ebgpMultihop = value.ebgpMultihop;
      this._holdTime = value.holdTime;
      this._ibgpLocalAsOverride = value.ibgpLocalAsOverride;
      this._keepaliveInterval = value.keepaliveInterval;
      this._label = value.label;
      this._localAs = value.localAs;
      this._md5Secret = value.md5Secret;
      this._networkRef = value.networkRef;
      this._remoteAs = value.remoteAs;
      this._shutdown = value.shutdown;
      this._peerIp.internalValue = value.peerIp;
      this._peerIp6.internalValue = value.peerIp6;
      this._subnet.internalValue = value.subnet;
      this._subnet6.internalValue = value.subnet6;
    }
  }

  // advertise_snat_ip - computed: false, optional: true, required: false
  private _advertiseSnatIp?: string; 
  public get advertiseSnatIp() {
    return this.getStringAttribute('advertise_snat_ip');
  }
  public set advertiseSnatIp(value: string) {
    this._advertiseSnatIp = value;
  }
  public resetAdvertiseSnatIp() {
    this._advertiseSnatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseSnatIpInput() {
    return this._advertiseSnatIp;
  }

  // advertise_vip - computed: false, optional: true, required: false
  private _advertiseVip?: string; 
  public get advertiseVip() {
    return this.getStringAttribute('advertise_vip');
  }
  public set advertiseVip(value: string) {
    this._advertiseVip = value;
  }
  public resetAdvertiseVip() {
    this._advertiseVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseVipInput() {
    return this._advertiseVip;
  }

  // advertisement_interval - computed: false, optional: true, required: false
  private _advertisementInterval?: string; 
  public get advertisementInterval() {
    return this.getStringAttribute('advertisement_interval');
  }
  public set advertisementInterval(value: string) {
    this._advertisementInterval = value;
  }
  public resetAdvertisementInterval() {
    this._advertisementInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalInput() {
    return this._advertisementInterval;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // connect_timer - computed: false, optional: true, required: false
  private _connectTimer?: string; 
  public get connectTimer() {
    return this.getStringAttribute('connect_timer');
  }
  public set connectTimer(value: string) {
    this._connectTimer = value;
  }
  public resetConnectTimer() {
    this._connectTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimerInput() {
    return this._connectTimer;
  }

  // ebgp_multihop - computed: false, optional: true, required: false
  private _ebgpMultihop?: string; 
  public get ebgpMultihop() {
    return this.getStringAttribute('ebgp_multihop');
  }
  public set ebgpMultihop(value: string) {
    this._ebgpMultihop = value;
  }
  public resetEbgpMultihop() {
    this._ebgpMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopInput() {
    return this._ebgpMultihop;
  }

  // hold_time - computed: true, optional: true, required: false
  private _holdTime?: string; 
  public get holdTime() {
    return this.getStringAttribute('hold_time');
  }
  public set holdTime(value: string) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // ibgp_local_as_override - computed: true, optional: true, required: false
  private _ibgpLocalAsOverride?: string; 
  public get ibgpLocalAsOverride() {
    return this.getStringAttribute('ibgp_local_as_override');
  }
  public set ibgpLocalAsOverride(value: string) {
    this._ibgpLocalAsOverride = value;
  }
  public resetIbgpLocalAsOverride() {
    this._ibgpLocalAsOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpLocalAsOverrideInput() {
    return this._ibgpLocalAsOverride;
  }

  // keepalive_interval - computed: true, optional: true, required: false
  private _keepaliveInterval?: string; 
  public get keepaliveInterval() {
    return this.getStringAttribute('keepalive_interval');
  }
  public set keepaliveInterval(value: string) {
    this._keepaliveInterval = value;
  }
  public resetKeepaliveInterval() {
    this._keepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveIntervalInput() {
    return this._keepaliveInterval;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // local_as - computed: true, optional: true, required: false
  private _localAs?: string; 
  public get localAs() {
    return this.getStringAttribute('local_as');
  }
  public set localAs(value: string) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // md5_secret - computed: true, optional: true, required: false
  private _md5Secret?: string; 
  public get md5Secret() {
    return this.getStringAttribute('md5_secret');
  }
  public set md5Secret(value: string) {
    this._md5Secret = value;
  }
  public resetMd5Secret() {
    this._md5Secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5SecretInput() {
    return this._md5Secret;
  }

  // network_ref - computed: true, optional: true, required: false
  private _networkRef?: string; 
  public get networkRef() {
    return this.getStringAttribute('network_ref');
  }
  public set networkRef(value: string) {
    this._networkRef = value;
  }
  public resetNetworkRef() {
    this._networkRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRefInput() {
    return this._networkRef;
  }

  // remote_as - computed: true, optional: true, required: false
  private _remoteAs?: string; 
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }
  public set remoteAs(value: string) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: string; 
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }
  public set shutdown(value: string) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp = new VrfcontextBgpProfilePeersPeerIpList(this, "peer_ip", true);
  public get peerIp() {
    return this._peerIp;
  }
  public putPeerIp(value: VrfcontextBgpProfilePeersPeerIp[] | cdktf.IResolvable) {
    this._peerIp.internalValue = value;
  }
  public resetPeerIp() {
    this._peerIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp.internalValue;
  }

  // peer_ip6 - computed: false, optional: true, required: false
  private _peerIp6 = new VrfcontextBgpProfilePeersPeerIp6List(this, "peer_ip6", true);
  public get peerIp6() {
    return this._peerIp6;
  }
  public putPeerIp6(value: VrfcontextBgpProfilePeersPeerIp6[] | cdktf.IResolvable) {
    this._peerIp6.internalValue = value;
  }
  public resetPeerIp6() {
    this._peerIp6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIp6Input() {
    return this._peerIp6.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new VrfcontextBgpProfilePeersSubnetList(this, "subnet", true);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: VrfcontextBgpProfilePeersSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6 = new VrfcontextBgpProfilePeersSubnet6List(this, "subnet6", true);
  public get subnet6() {
    return this._subnet6;
  }
  public putSubnet6(value: VrfcontextBgpProfilePeersSubnet6[] | cdktf.IResolvable) {
    this._subnet6.internalValue = value;
  }
  public resetSubnet6() {
    this._subnet6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6.internalValue;
  }
}

export class VrfcontextBgpProfilePeersList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfilePeers[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfilePeersOutputReference {
    return new VrfcontextBgpProfilePeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfileRoutingOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#advertise_default_route Vrfcontext#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#advertise_learned_routes Vrfcontext#advertise_learned_routes}
  */
  readonly advertiseLearnedRoutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#label Vrfcontext#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#learn_only_default_route Vrfcontext#learn_only_default_route}
  */
  readonly learnOnlyDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#learn_routes Vrfcontext#learn_routes}
  */
  readonly learnRoutes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#max_learn_limit Vrfcontext#max_learn_limit}
  */
  readonly maxLearnLimit?: string;
}

export function vrfcontextBgpProfileRoutingOptionsToTerraform(struct?: VrfcontextBgpProfileRoutingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_default_route: cdktf.stringToTerraform(struct!.advertiseDefaultRoute),
    advertise_learned_routes: cdktf.stringToTerraform(struct!.advertiseLearnedRoutes),
    label: cdktf.stringToTerraform(struct!.label),
    learn_only_default_route: cdktf.stringToTerraform(struct!.learnOnlyDefaultRoute),
    learn_routes: cdktf.stringToTerraform(struct!.learnRoutes),
    max_learn_limit: cdktf.stringToTerraform(struct!.maxLearnLimit),
  }
}


export function vrfcontextBgpProfileRoutingOptionsToHclTerraform(struct?: VrfcontextBgpProfileRoutingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_default_route: {
      value: cdktf.stringToHclTerraform(struct!.advertiseDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advertise_learned_routes: {
      value: cdktf.stringToHclTerraform(struct!.advertiseLearnedRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learn_only_default_route: {
      value: cdktf.stringToHclTerraform(struct!.learnOnlyDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learn_routes: {
      value: cdktf.stringToHclTerraform(struct!.learnRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_learn_limit: {
      value: cdktf.stringToHclTerraform(struct!.maxLearnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextBgpProfileRoutingOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfileRoutingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseDefaultRoute = this._advertiseDefaultRoute;
    }
    if (this._advertiseLearnedRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseLearnedRoutes = this._advertiseLearnedRoutes;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._learnOnlyDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnOnlyDefaultRoute = this._learnOnlyDefaultRoute;
    }
    if (this._learnRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnRoutes = this._learnRoutes;
    }
    if (this._maxLearnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLearnLimit = this._maxLearnLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextBgpProfileRoutingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = undefined;
      this._advertiseLearnedRoutes = undefined;
      this._label = undefined;
      this._learnOnlyDefaultRoute = undefined;
      this._learnRoutes = undefined;
      this._maxLearnLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = value.advertiseDefaultRoute;
      this._advertiseLearnedRoutes = value.advertiseLearnedRoutes;
      this._label = value.label;
      this._learnOnlyDefaultRoute = value.learnOnlyDefaultRoute;
      this._learnRoutes = value.learnRoutes;
      this._maxLearnLimit = value.maxLearnLimit;
    }
  }

  // advertise_default_route - computed: true, optional: true, required: false
  private _advertiseDefaultRoute?: string; 
  public get advertiseDefaultRoute() {
    return this.getStringAttribute('advertise_default_route');
  }
  public set advertiseDefaultRoute(value: string) {
    this._advertiseDefaultRoute = value;
  }
  public resetAdvertiseDefaultRoute() {
    this._advertiseDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseDefaultRouteInput() {
    return this._advertiseDefaultRoute;
  }

  // advertise_learned_routes - computed: true, optional: true, required: false
  private _advertiseLearnedRoutes?: string; 
  public get advertiseLearnedRoutes() {
    return this.getStringAttribute('advertise_learned_routes');
  }
  public set advertiseLearnedRoutes(value: string) {
    this._advertiseLearnedRoutes = value;
  }
  public resetAdvertiseLearnedRoutes() {
    this._advertiseLearnedRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseLearnedRoutesInput() {
    return this._advertiseLearnedRoutes;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // learn_only_default_route - computed: true, optional: true, required: false
  private _learnOnlyDefaultRoute?: string; 
  public get learnOnlyDefaultRoute() {
    return this.getStringAttribute('learn_only_default_route');
  }
  public set learnOnlyDefaultRoute(value: string) {
    this._learnOnlyDefaultRoute = value;
  }
  public resetLearnOnlyDefaultRoute() {
    this._learnOnlyDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnOnlyDefaultRouteInput() {
    return this._learnOnlyDefaultRoute;
  }

  // learn_routes - computed: true, optional: true, required: false
  private _learnRoutes?: string; 
  public get learnRoutes() {
    return this.getStringAttribute('learn_routes');
  }
  public set learnRoutes(value: string) {
    this._learnRoutes = value;
  }
  public resetLearnRoutes() {
    this._learnRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnRoutesInput() {
    return this._learnRoutes;
  }

  // max_learn_limit - computed: false, optional: true, required: false
  private _maxLearnLimit?: string; 
  public get maxLearnLimit() {
    return this.getStringAttribute('max_learn_limit');
  }
  public set maxLearnLimit(value: string) {
    this._maxLearnLimit = value;
  }
  public resetMaxLearnLimit() {
    this._maxLearnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLearnLimitInput() {
    return this._maxLearnLimit;
  }
}

export class VrfcontextBgpProfileRoutingOptionsList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfileRoutingOptions[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfileRoutingOptionsOutputReference {
    return new VrfcontextBgpProfileRoutingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextBgpProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#community Vrfcontext#community}
  */
  readonly community?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#hold_time Vrfcontext#hold_time}
  */
  readonly holdTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#ibgp Vrfcontext#ibgp}
  */
  readonly ibgp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#keepalive_interval Vrfcontext#keepalive_interval}
  */
  readonly keepaliveInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#local_as Vrfcontext#local_as}
  */
  readonly localAs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#local_preference Vrfcontext#local_preference}
  */
  readonly localPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#num_as_path_prepend Vrfcontext#num_as_path_prepend}
  */
  readonly numAsPathPrepend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#send_community Vrfcontext#send_community}
  */
  readonly sendCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#shutdown Vrfcontext#shutdown}
  */
  readonly shutdown?: string;
  /**
  * ip_communities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#ip_communities Vrfcontext#ip_communities}
  */
  readonly ipCommunities?: VrfcontextBgpProfileIpCommunities[] | cdktf.IResolvable;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#peers Vrfcontext#peers}
  */
  readonly peers?: VrfcontextBgpProfilePeers[] | cdktf.IResolvable;
  /**
  * routing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#routing_options Vrfcontext#routing_options}
  */
  readonly routingOptions?: VrfcontextBgpProfileRoutingOptions[] | cdktf.IResolvable;
}

export function vrfcontextBgpProfileToTerraform(struct?: VrfcontextBgpProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
    hold_time: cdktf.stringToTerraform(struct!.holdTime),
    ibgp: cdktf.stringToTerraform(struct!.ibgp),
    keepalive_interval: cdktf.stringToTerraform(struct!.keepaliveInterval),
    local_as: cdktf.stringToTerraform(struct!.localAs),
    local_preference: cdktf.stringToTerraform(struct!.localPreference),
    num_as_path_prepend: cdktf.stringToTerraform(struct!.numAsPathPrepend),
    send_community: cdktf.stringToTerraform(struct!.sendCommunity),
    shutdown: cdktf.stringToTerraform(struct!.shutdown),
    ip_communities: cdktf.listMapper(vrfcontextBgpProfileIpCommunitiesToTerraform, true)(struct!.ipCommunities),
    peers: cdktf.listMapper(vrfcontextBgpProfilePeersToTerraform, true)(struct!.peers),
    routing_options: cdktf.listMapper(vrfcontextBgpProfileRoutingOptionsToTerraform, true)(struct!.routingOptions),
  }
}


export function vrfcontextBgpProfileToHclTerraform(struct?: VrfcontextBgpProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.community),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hold_time: {
      value: cdktf.stringToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ibgp: {
      value: cdktf.stringToHclTerraform(struct!.ibgp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_interval: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_as: {
      value: cdktf.stringToHclTerraform(struct!.localAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_preference: {
      value: cdktf.stringToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_as_path_prepend: {
      value: cdktf.stringToHclTerraform(struct!.numAsPathPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown: {
      value: cdktf.stringToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_communities: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfileIpCommunitiesToHclTerraform, true)(struct!.ipCommunities),
      isBlock: true,
      type: "list",
      storageClassType: "VrfcontextBgpProfileIpCommunitiesList",
    },
    peers: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfilePeersToHclTerraform, true)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "VrfcontextBgpProfilePeersList",
    },
    routing_options: {
      value: cdktf.listMapperHcl(vrfcontextBgpProfileRoutingOptionsToHclTerraform, true)(struct!.routingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "VrfcontextBgpProfileRoutingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextBgpProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextBgpProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._ibgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibgp = this._ibgp;
    }
    if (this._keepaliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveInterval = this._keepaliveInterval;
    }
    if (this._localAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAs = this._localAs;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._numAsPathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.numAsPathPrepend = this._numAsPathPrepend;
    }
    if (this._sendCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._ipCommunities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCommunities = this._ipCommunities?.internalValue;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._routingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingOptions = this._routingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextBgpProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._community = undefined;
      this._holdTime = undefined;
      this._ibgp = undefined;
      this._keepaliveInterval = undefined;
      this._localAs = undefined;
      this._localPreference = undefined;
      this._numAsPathPrepend = undefined;
      this._sendCommunity = undefined;
      this._shutdown = undefined;
      this._ipCommunities.internalValue = undefined;
      this._peers.internalValue = undefined;
      this._routingOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._community = value.community;
      this._holdTime = value.holdTime;
      this._ibgp = value.ibgp;
      this._keepaliveInterval = value.keepaliveInterval;
      this._localAs = value.localAs;
      this._localPreference = value.localPreference;
      this._numAsPathPrepend = value.numAsPathPrepend;
      this._sendCommunity = value.sendCommunity;
      this._shutdown = value.shutdown;
      this._ipCommunities.internalValue = value.ipCommunities;
      this._peers.internalValue = value.peers;
      this._routingOptions.internalValue = value.routingOptions;
    }
  }

  // community - computed: false, optional: true, required: false
  private _community?: string[]; 
  public get community() {
    return this.getListAttribute('community');
  }
  public set community(value: string[]) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: string; 
  public get holdTime() {
    return this.getStringAttribute('hold_time');
  }
  public set holdTime(value: string) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // ibgp - computed: false, optional: false, required: true
  private _ibgp?: string; 
  public get ibgp() {
    return this.getStringAttribute('ibgp');
  }
  public set ibgp(value: string) {
    this._ibgp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpInput() {
    return this._ibgp;
  }

  // keepalive_interval - computed: false, optional: true, required: false
  private _keepaliveInterval?: string; 
  public get keepaliveInterval() {
    return this.getStringAttribute('keepalive_interval');
  }
  public set keepaliveInterval(value: string) {
    this._keepaliveInterval = value;
  }
  public resetKeepaliveInterval() {
    this._keepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveIntervalInput() {
    return this._keepaliveInterval;
  }

  // local_as - computed: false, optional: false, required: true
  private _localAs?: string; 
  public get localAs() {
    return this.getStringAttribute('local_as');
  }
  public set localAs(value: string) {
    this._localAs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // local_preference - computed: true, optional: true, required: false
  private _localPreference?: string; 
  public get localPreference() {
    return this.getStringAttribute('local_preference');
  }
  public set localPreference(value: string) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // num_as_path_prepend - computed: true, optional: true, required: false
  private _numAsPathPrepend?: string; 
  public get numAsPathPrepend() {
    return this.getStringAttribute('num_as_path_prepend');
  }
  public set numAsPathPrepend(value: string) {
    this._numAsPathPrepend = value;
  }
  public resetNumAsPathPrepend() {
    this._numAsPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numAsPathPrependInput() {
    return this._numAsPathPrepend;
  }

  // send_community - computed: false, optional: true, required: false
  private _sendCommunity?: string; 
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }
  public set sendCommunity(value: string) {
    this._sendCommunity = value;
  }
  public resetSendCommunity() {
    this._sendCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: string; 
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }
  public set shutdown(value: string) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // ip_communities - computed: false, optional: true, required: false
  private _ipCommunities = new VrfcontextBgpProfileIpCommunitiesList(this, "ip_communities", false);
  public get ipCommunities() {
    return this._ipCommunities;
  }
  public putIpCommunities(value: VrfcontextBgpProfileIpCommunities[] | cdktf.IResolvable) {
    this._ipCommunities.internalValue = value;
  }
  public resetIpCommunities() {
    this._ipCommunities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCommunitiesInput() {
    return this._ipCommunities.internalValue;
  }

  // peers - computed: false, optional: true, required: false
  private _peers = new VrfcontextBgpProfilePeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: VrfcontextBgpProfilePeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // routing_options - computed: false, optional: true, required: false
  private _routingOptions = new VrfcontextBgpProfileRoutingOptionsList(this, "routing_options", false);
  public get routingOptions() {
    return this._routingOptions;
  }
  public putRoutingOptions(value: VrfcontextBgpProfileRoutingOptions[] | cdktf.IResolvable) {
    this._routingOptions.internalValue = value;
  }
  public resetRoutingOptions() {
    this._routingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingOptionsInput() {
    return this._routingOptions.internalValue;
  }
}

export class VrfcontextBgpProfileList extends cdktf.ComplexList {
  public internalValue? : VrfcontextBgpProfile[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextBgpProfileOutputReference {
    return new VrfcontextBgpProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#version Vrfcontext#version}
  */
  readonly version?: string;
}

export function vrfcontextConfigpbAttributesToTerraform(struct?: VrfcontextConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function vrfcontextConfigpbAttributesToHclTerraform(struct?: VrfcontextConfigpbAttributes | cdktf.IResolvable): any {
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

export class VrfcontextConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class VrfcontextConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : VrfcontextConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextConfigpbAttributesOutputReference {
    return new VrfcontextConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextDebugvrfcontextFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#flag Vrfcontext#flag}
  */
  readonly flag: string;
}

export function vrfcontextDebugvrfcontextFlagsToTerraform(struct?: VrfcontextDebugvrfcontextFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flag: cdktf.stringToTerraform(struct!.flag),
  }
}


export function vrfcontextDebugvrfcontextFlagsToHclTerraform(struct?: VrfcontextDebugvrfcontextFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flag: {
      value: cdktf.stringToHclTerraform(struct!.flag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextDebugvrfcontextFlagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextDebugvrfcontextFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flag !== undefined) {
      hasAnyValues = true;
      internalValueResult.flag = this._flag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextDebugvrfcontextFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flag = value.flag;
    }
  }

  // flag - computed: false, optional: false, required: true
  private _flag?: string; 
  public get flag() {
    return this.getStringAttribute('flag');
  }
  public set flag(value: string) {
    this._flag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag;
  }
}

export class VrfcontextDebugvrfcontextFlagsList extends cdktf.ComplexList {
  public internalValue? : VrfcontextDebugvrfcontextFlags[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextDebugvrfcontextFlagsOutputReference {
    return new VrfcontextDebugvrfcontextFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextDebugvrfcontext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#command_buffer_interval Vrfcontext#command_buffer_interval}
  */
  readonly commandBufferInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#command_buffer_size Vrfcontext#command_buffer_size}
  */
  readonly commandBufferSize?: string;
  /**
  * flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#flags Vrfcontext#flags}
  */
  readonly flags?: VrfcontextDebugvrfcontextFlags[] | cdktf.IResolvable;
}

export function vrfcontextDebugvrfcontextToTerraform(struct?: VrfcontextDebugvrfcontext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_buffer_interval: cdktf.stringToTerraform(struct!.commandBufferInterval),
    command_buffer_size: cdktf.stringToTerraform(struct!.commandBufferSize),
    flags: cdktf.listMapper(vrfcontextDebugvrfcontextFlagsToTerraform, true)(struct!.flags),
  }
}


export function vrfcontextDebugvrfcontextToHclTerraform(struct?: VrfcontextDebugvrfcontext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_buffer_interval: {
      value: cdktf.stringToHclTerraform(struct!.commandBufferInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command_buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.commandBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flags: {
      value: cdktf.listMapperHcl(vrfcontextDebugvrfcontextFlagsToHclTerraform, true)(struct!.flags),
      isBlock: true,
      type: "list",
      storageClassType: "VrfcontextDebugvrfcontextFlagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextDebugvrfcontextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextDebugvrfcontext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandBufferInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandBufferInterval = this._commandBufferInterval;
    }
    if (this._commandBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandBufferSize = this._commandBufferSize;
    }
    if (this._flags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextDebugvrfcontext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commandBufferInterval = undefined;
      this._commandBufferSize = undefined;
      this._flags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commandBufferInterval = value.commandBufferInterval;
      this._commandBufferSize = value.commandBufferSize;
      this._flags.internalValue = value.flags;
    }
  }

  // command_buffer_interval - computed: false, optional: true, required: false
  private _commandBufferInterval?: string; 
  public get commandBufferInterval() {
    return this.getStringAttribute('command_buffer_interval');
  }
  public set commandBufferInterval(value: string) {
    this._commandBufferInterval = value;
  }
  public resetCommandBufferInterval() {
    this._commandBufferInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandBufferIntervalInput() {
    return this._commandBufferInterval;
  }

  // command_buffer_size - computed: false, optional: true, required: false
  private _commandBufferSize?: string; 
  public get commandBufferSize() {
    return this.getStringAttribute('command_buffer_size');
  }
  public set commandBufferSize(value: string) {
    this._commandBufferSize = value;
  }
  public resetCommandBufferSize() {
    this._commandBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandBufferSizeInput() {
    return this._commandBufferSize;
  }

  // flags - computed: false, optional: true, required: false
  private _flags = new VrfcontextDebugvrfcontextFlagsList(this, "flags", false);
  public get flags() {
    return this._flags;
  }
  public putFlags(value: VrfcontextDebugvrfcontextFlags[] | cdktf.IResolvable) {
    this._flags.internalValue = value;
  }
  public resetFlags() {
    this._flags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags.internalValue;
  }
}

export class VrfcontextDebugvrfcontextList extends cdktf.ComplexList {
  public internalValue? : VrfcontextDebugvrfcontext[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextDebugvrfcontextOutputReference {
    return new VrfcontextDebugvrfcontextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextGatewayMonGatewayIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#addr Vrfcontext#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#type Vrfcontext#type}
  */
  readonly type: string;
}

export function vrfcontextGatewayMonGatewayIpToTerraform(struct?: VrfcontextGatewayMonGatewayIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vrfcontextGatewayMonGatewayIpToHclTerraform(struct?: VrfcontextGatewayMonGatewayIp | cdktf.IResolvable): any {
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

export class VrfcontextGatewayMonGatewayIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextGatewayMonGatewayIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextGatewayMonGatewayIp | cdktf.IResolvable | undefined) {
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

export class VrfcontextGatewayMonGatewayIpList extends cdktf.ComplexList {
  public internalValue? : VrfcontextGatewayMonGatewayIp[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextGatewayMonGatewayIpOutputReference {
    return new VrfcontextGatewayMonGatewayIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextGatewayMonSubnetIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#addr Vrfcontext#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#type Vrfcontext#type}
  */
  readonly type: string;
}

export function vrfcontextGatewayMonSubnetIpAddrToTerraform(struct?: VrfcontextGatewayMonSubnetIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vrfcontextGatewayMonSubnetIpAddrToHclTerraform(struct?: VrfcontextGatewayMonSubnetIpAddr | cdktf.IResolvable): any {
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

export class VrfcontextGatewayMonSubnetIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextGatewayMonSubnetIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextGatewayMonSubnetIpAddr | cdktf.IResolvable | undefined) {
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

export class VrfcontextGatewayMonSubnetIpAddrList extends cdktf.ComplexList {
  public internalValue? : VrfcontextGatewayMonSubnetIpAddr[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextGatewayMonSubnetIpAddrOutputReference {
    return new VrfcontextGatewayMonSubnetIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextGatewayMonSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#mask Vrfcontext#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#ip_addr Vrfcontext#ip_addr}
  */
  readonly ipAddr: VrfcontextGatewayMonSubnetIpAddr[] | cdktf.IResolvable;
}

export function vrfcontextGatewayMonSubnetToTerraform(struct?: VrfcontextGatewayMonSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(vrfcontextGatewayMonSubnetIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function vrfcontextGatewayMonSubnetToHclTerraform(struct?: VrfcontextGatewayMonSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(vrfcontextGatewayMonSubnetIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextGatewayMonSubnetIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextGatewayMonSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextGatewayMonSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextGatewayMonSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new VrfcontextGatewayMonSubnetIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: VrfcontextGatewayMonSubnetIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class VrfcontextGatewayMonSubnetList extends cdktf.ComplexList {
  public internalValue? : VrfcontextGatewayMonSubnet[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextGatewayMonSubnetOutputReference {
    return new VrfcontextGatewayMonSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextGatewayMon {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#gateway_monitor_fail_threshold Vrfcontext#gateway_monitor_fail_threshold}
  */
  readonly gatewayMonitorFailThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#gateway_monitor_interval Vrfcontext#gateway_monitor_interval}
  */
  readonly gatewayMonitorInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#gateway_monitor_success_threshold Vrfcontext#gateway_monitor_success_threshold}
  */
  readonly gatewayMonitorSuccessThreshold?: string;
  /**
  * gateway_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#gateway_ip Vrfcontext#gateway_ip}
  */
  readonly gatewayIp: VrfcontextGatewayMonGatewayIp[] | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#subnet Vrfcontext#subnet}
  */
  readonly subnet?: VrfcontextGatewayMonSubnet[] | cdktf.IResolvable;
}

export function vrfcontextGatewayMonToTerraform(struct?: VrfcontextGatewayMon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_monitor_fail_threshold: cdktf.stringToTerraform(struct!.gatewayMonitorFailThreshold),
    gateway_monitor_interval: cdktf.stringToTerraform(struct!.gatewayMonitorInterval),
    gateway_monitor_success_threshold: cdktf.stringToTerraform(struct!.gatewayMonitorSuccessThreshold),
    gateway_ip: cdktf.listMapper(vrfcontextGatewayMonGatewayIpToTerraform, true)(struct!.gatewayIp),
    subnet: cdktf.listMapper(vrfcontextGatewayMonSubnetToTerraform, true)(struct!.subnet),
  }
}


export function vrfcontextGatewayMonToHclTerraform(struct?: VrfcontextGatewayMon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_monitor_fail_threshold: {
      value: cdktf.stringToHclTerraform(struct!.gatewayMonitorFailThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_monitor_interval: {
      value: cdktf.stringToHclTerraform(struct!.gatewayMonitorInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_monitor_success_threshold: {
      value: cdktf.stringToHclTerraform(struct!.gatewayMonitorSuccessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_ip: {
      value: cdktf.listMapperHcl(vrfcontextGatewayMonGatewayIpToHclTerraform, true)(struct!.gatewayIp),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextGatewayMonGatewayIpList",
    },
    subnet: {
      value: cdktf.listMapperHcl(vrfcontextGatewayMonSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextGatewayMonSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextGatewayMonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextGatewayMon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayMonitorFailThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMonitorFailThreshold = this._gatewayMonitorFailThreshold;
    }
    if (this._gatewayMonitorInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMonitorInterval = this._gatewayMonitorInterval;
    }
    if (this._gatewayMonitorSuccessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMonitorSuccessThreshold = this._gatewayMonitorSuccessThreshold;
    }
    if (this._gatewayIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextGatewayMon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayMonitorFailThreshold = undefined;
      this._gatewayMonitorInterval = undefined;
      this._gatewayMonitorSuccessThreshold = undefined;
      this._gatewayIp.internalValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayMonitorFailThreshold = value.gatewayMonitorFailThreshold;
      this._gatewayMonitorInterval = value.gatewayMonitorInterval;
      this._gatewayMonitorSuccessThreshold = value.gatewayMonitorSuccessThreshold;
      this._gatewayIp.internalValue = value.gatewayIp;
      this._subnet.internalValue = value.subnet;
    }
  }

  // gateway_monitor_fail_threshold - computed: false, optional: true, required: false
  private _gatewayMonitorFailThreshold?: string; 
  public get gatewayMonitorFailThreshold() {
    return this.getStringAttribute('gateway_monitor_fail_threshold');
  }
  public set gatewayMonitorFailThreshold(value: string) {
    this._gatewayMonitorFailThreshold = value;
  }
  public resetGatewayMonitorFailThreshold() {
    this._gatewayMonitorFailThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMonitorFailThresholdInput() {
    return this._gatewayMonitorFailThreshold;
  }

  // gateway_monitor_interval - computed: false, optional: true, required: false
  private _gatewayMonitorInterval?: string; 
  public get gatewayMonitorInterval() {
    return this.getStringAttribute('gateway_monitor_interval');
  }
  public set gatewayMonitorInterval(value: string) {
    this._gatewayMonitorInterval = value;
  }
  public resetGatewayMonitorInterval() {
    this._gatewayMonitorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMonitorIntervalInput() {
    return this._gatewayMonitorInterval;
  }

  // gateway_monitor_success_threshold - computed: false, optional: true, required: false
  private _gatewayMonitorSuccessThreshold?: string; 
  public get gatewayMonitorSuccessThreshold() {
    return this.getStringAttribute('gateway_monitor_success_threshold');
  }
  public set gatewayMonitorSuccessThreshold(value: string) {
    this._gatewayMonitorSuccessThreshold = value;
  }
  public resetGatewayMonitorSuccessThreshold() {
    this._gatewayMonitorSuccessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMonitorSuccessThresholdInput() {
    return this._gatewayMonitorSuccessThreshold;
  }

  // gateway_ip - computed: false, optional: false, required: true
  private _gatewayIp = new VrfcontextGatewayMonGatewayIpList(this, "gateway_ip", true);
  public get gatewayIp() {
    return this._gatewayIp;
  }
  public putGatewayIp(value: VrfcontextGatewayMonGatewayIp[] | cdktf.IResolvable) {
    this._gatewayIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new VrfcontextGatewayMonSubnetList(this, "subnet", true);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: VrfcontextGatewayMonSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class VrfcontextGatewayMonList extends cdktf.ComplexList {
  public internalValue? : VrfcontextGatewayMon[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextGatewayMonOutputReference {
    return new VrfcontextGatewayMonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextInternalGatewayMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#disable_gateway_monitor Vrfcontext#disable_gateway_monitor}
  */
  readonly disableGatewayMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#gateway_monitor_failure_threshold Vrfcontext#gateway_monitor_failure_threshold}
  */
  readonly gatewayMonitorFailureThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#gateway_monitor_interval Vrfcontext#gateway_monitor_interval}
  */
  readonly gatewayMonitorInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#gateway_monitor_success_threshold Vrfcontext#gateway_monitor_success_threshold}
  */
  readonly gatewayMonitorSuccessThreshold?: string;
}

export function vrfcontextInternalGatewayMonitorToTerraform(struct?: VrfcontextInternalGatewayMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_gateway_monitor: cdktf.stringToTerraform(struct!.disableGatewayMonitor),
    gateway_monitor_failure_threshold: cdktf.stringToTerraform(struct!.gatewayMonitorFailureThreshold),
    gateway_monitor_interval: cdktf.stringToTerraform(struct!.gatewayMonitorInterval),
    gateway_monitor_success_threshold: cdktf.stringToTerraform(struct!.gatewayMonitorSuccessThreshold),
  }
}


export function vrfcontextInternalGatewayMonitorToHclTerraform(struct?: VrfcontextInternalGatewayMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_gateway_monitor: {
      value: cdktf.stringToHclTerraform(struct!.disableGatewayMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_monitor_failure_threshold: {
      value: cdktf.stringToHclTerraform(struct!.gatewayMonitorFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_monitor_interval: {
      value: cdktf.stringToHclTerraform(struct!.gatewayMonitorInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_monitor_success_threshold: {
      value: cdktf.stringToHclTerraform(struct!.gatewayMonitorSuccessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextInternalGatewayMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextInternalGatewayMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableGatewayMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGatewayMonitor = this._disableGatewayMonitor;
    }
    if (this._gatewayMonitorFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMonitorFailureThreshold = this._gatewayMonitorFailureThreshold;
    }
    if (this._gatewayMonitorInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMonitorInterval = this._gatewayMonitorInterval;
    }
    if (this._gatewayMonitorSuccessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMonitorSuccessThreshold = this._gatewayMonitorSuccessThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextInternalGatewayMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableGatewayMonitor = undefined;
      this._gatewayMonitorFailureThreshold = undefined;
      this._gatewayMonitorInterval = undefined;
      this._gatewayMonitorSuccessThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableGatewayMonitor = value.disableGatewayMonitor;
      this._gatewayMonitorFailureThreshold = value.gatewayMonitorFailureThreshold;
      this._gatewayMonitorInterval = value.gatewayMonitorInterval;
      this._gatewayMonitorSuccessThreshold = value.gatewayMonitorSuccessThreshold;
    }
  }

  // disable_gateway_monitor - computed: false, optional: true, required: false
  private _disableGatewayMonitor?: string; 
  public get disableGatewayMonitor() {
    return this.getStringAttribute('disable_gateway_monitor');
  }
  public set disableGatewayMonitor(value: string) {
    this._disableGatewayMonitor = value;
  }
  public resetDisableGatewayMonitor() {
    this._disableGatewayMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGatewayMonitorInput() {
    return this._disableGatewayMonitor;
  }

  // gateway_monitor_failure_threshold - computed: false, optional: true, required: false
  private _gatewayMonitorFailureThreshold?: string; 
  public get gatewayMonitorFailureThreshold() {
    return this.getStringAttribute('gateway_monitor_failure_threshold');
  }
  public set gatewayMonitorFailureThreshold(value: string) {
    this._gatewayMonitorFailureThreshold = value;
  }
  public resetGatewayMonitorFailureThreshold() {
    this._gatewayMonitorFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMonitorFailureThresholdInput() {
    return this._gatewayMonitorFailureThreshold;
  }

  // gateway_monitor_interval - computed: false, optional: true, required: false
  private _gatewayMonitorInterval?: string; 
  public get gatewayMonitorInterval() {
    return this.getStringAttribute('gateway_monitor_interval');
  }
  public set gatewayMonitorInterval(value: string) {
    this._gatewayMonitorInterval = value;
  }
  public resetGatewayMonitorInterval() {
    this._gatewayMonitorInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMonitorIntervalInput() {
    return this._gatewayMonitorInterval;
  }

  // gateway_monitor_success_threshold - computed: false, optional: true, required: false
  private _gatewayMonitorSuccessThreshold?: string; 
  public get gatewayMonitorSuccessThreshold() {
    return this.getStringAttribute('gateway_monitor_success_threshold');
  }
  public set gatewayMonitorSuccessThreshold(value: string) {
    this._gatewayMonitorSuccessThreshold = value;
  }
  public resetGatewayMonitorSuccessThreshold() {
    this._gatewayMonitorSuccessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMonitorSuccessThresholdInput() {
    return this._gatewayMonitorSuccessThreshold;
  }
}

export class VrfcontextInternalGatewayMonitorList extends cdktf.ComplexList {
  public internalValue? : VrfcontextInternalGatewayMonitor[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextInternalGatewayMonitorOutputReference {
    return new VrfcontextInternalGatewayMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#key Vrfcontext#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#values Vrfcontext#values}
  */
  readonly values?: string[];
}

export function vrfcontextMarkersToTerraform(struct?: VrfcontextMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function vrfcontextMarkersToHclTerraform(struct?: VrfcontextMarkers | cdktf.IResolvable): any {
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

export class VrfcontextMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextMarkers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextMarkers | cdktf.IResolvable | undefined) {
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

export class VrfcontextMarkersList extends cdktf.ComplexList {
  public internalValue? : VrfcontextMarkers[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextMarkersOutputReference {
    return new VrfcontextMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextStaticRoutesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#key Vrfcontext#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#value Vrfcontext#value}
  */
  readonly value?: string;
}

export function vrfcontextStaticRoutesLabelsToTerraform(struct?: VrfcontextStaticRoutesLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vrfcontextStaticRoutesLabelsToHclTerraform(struct?: VrfcontextStaticRoutesLabels | cdktf.IResolvable): any {
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

export class VrfcontextStaticRoutesLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextStaticRoutesLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextStaticRoutesLabels | cdktf.IResolvable | undefined) {
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class VrfcontextStaticRoutesLabelsList extends cdktf.ComplexList {
  public internalValue? : VrfcontextStaticRoutesLabels[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextStaticRoutesLabelsOutputReference {
    return new VrfcontextStaticRoutesLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextStaticRoutesNextHop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#addr Vrfcontext#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#type Vrfcontext#type}
  */
  readonly type: string;
}

export function vrfcontextStaticRoutesNextHopToTerraform(struct?: VrfcontextStaticRoutesNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vrfcontextStaticRoutesNextHopToHclTerraform(struct?: VrfcontextStaticRoutesNextHop | cdktf.IResolvable): any {
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

export class VrfcontextStaticRoutesNextHopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextStaticRoutesNextHop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextStaticRoutesNextHop | cdktf.IResolvable | undefined) {
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

export class VrfcontextStaticRoutesNextHopList extends cdktf.ComplexList {
  public internalValue? : VrfcontextStaticRoutesNextHop[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextStaticRoutesNextHopOutputReference {
    return new VrfcontextStaticRoutesNextHopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextStaticRoutesPrefixIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#addr Vrfcontext#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#type Vrfcontext#type}
  */
  readonly type: string;
}

export function vrfcontextStaticRoutesPrefixIpAddrToTerraform(struct?: VrfcontextStaticRoutesPrefixIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vrfcontextStaticRoutesPrefixIpAddrToHclTerraform(struct?: VrfcontextStaticRoutesPrefixIpAddr | cdktf.IResolvable): any {
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

export class VrfcontextStaticRoutesPrefixIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextStaticRoutesPrefixIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VrfcontextStaticRoutesPrefixIpAddr | cdktf.IResolvable | undefined) {
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

export class VrfcontextStaticRoutesPrefixIpAddrList extends cdktf.ComplexList {
  public internalValue? : VrfcontextStaticRoutesPrefixIpAddr[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextStaticRoutesPrefixIpAddrOutputReference {
    return new VrfcontextStaticRoutesPrefixIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextStaticRoutesPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#mask Vrfcontext#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#ip_addr Vrfcontext#ip_addr}
  */
  readonly ipAddr: VrfcontextStaticRoutesPrefixIpAddr[] | cdktf.IResolvable;
}

export function vrfcontextStaticRoutesPrefixToTerraform(struct?: VrfcontextStaticRoutesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(vrfcontextStaticRoutesPrefixIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function vrfcontextStaticRoutesPrefixToHclTerraform(struct?: VrfcontextStaticRoutesPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(vrfcontextStaticRoutesPrefixIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextStaticRoutesPrefixIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextStaticRoutesPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextStaticRoutesPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextStaticRoutesPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new VrfcontextStaticRoutesPrefixIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: VrfcontextStaticRoutesPrefixIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class VrfcontextStaticRoutesPrefixList extends cdktf.ComplexList {
  public internalValue? : VrfcontextStaticRoutesPrefix[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextStaticRoutesPrefixOutputReference {
    return new VrfcontextStaticRoutesPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VrfcontextStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#disable_gateway_monitor Vrfcontext#disable_gateway_monitor}
  */
  readonly disableGatewayMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#if_name Vrfcontext#if_name}
  */
  readonly ifName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#route_id Vrfcontext#route_id}
  */
  readonly routeId: string;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#labels Vrfcontext#labels}
  */
  readonly labels?: VrfcontextStaticRoutesLabels[] | cdktf.IResolvable;
  /**
  * next_hop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#next_hop Vrfcontext#next_hop}
  */
  readonly nextHop: VrfcontextStaticRoutesNextHop[] | cdktf.IResolvable;
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#prefix Vrfcontext#prefix}
  */
  readonly prefix: VrfcontextStaticRoutesPrefix[] | cdktf.IResolvable;
}

export function vrfcontextStaticRoutesToTerraform(struct?: VrfcontextStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_gateway_monitor: cdktf.stringToTerraform(struct!.disableGatewayMonitor),
    if_name: cdktf.stringToTerraform(struct!.ifName),
    route_id: cdktf.stringToTerraform(struct!.routeId),
    labels: cdktf.listMapper(vrfcontextStaticRoutesLabelsToTerraform, true)(struct!.labels),
    next_hop: cdktf.listMapper(vrfcontextStaticRoutesNextHopToTerraform, true)(struct!.nextHop),
    prefix: cdktf.listMapper(vrfcontextStaticRoutesPrefixToTerraform, true)(struct!.prefix),
  }
}


export function vrfcontextStaticRoutesToHclTerraform(struct?: VrfcontextStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_gateway_monitor: {
      value: cdktf.stringToHclTerraform(struct!.disableGatewayMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_name: {
      value: cdktf.stringToHclTerraform(struct!.ifName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_id: {
      value: cdktf.stringToHclTerraform(struct!.routeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(vrfcontextStaticRoutesLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "VrfcontextStaticRoutesLabelsList",
    },
    next_hop: {
      value: cdktf.listMapperHcl(vrfcontextStaticRoutesNextHopToHclTerraform, true)(struct!.nextHop),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextStaticRoutesNextHopList",
    },
    prefix: {
      value: cdktf.listMapperHcl(vrfcontextStaticRoutesPrefixToHclTerraform, true)(struct!.prefix),
      isBlock: true,
      type: "set",
      storageClassType: "VrfcontextStaticRoutesPrefixList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrfcontextStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrfcontextStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableGatewayMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGatewayMonitor = this._disableGatewayMonitor;
    }
    if (this._ifName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifName = this._ifName;
    }
    if (this._routeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeId = this._routeId;
    }
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    if (this._prefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrfcontextStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableGatewayMonitor = undefined;
      this._ifName = undefined;
      this._routeId = undefined;
      this._labels.internalValue = undefined;
      this._nextHop.internalValue = undefined;
      this._prefix.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableGatewayMonitor = value.disableGatewayMonitor;
      this._ifName = value.ifName;
      this._routeId = value.routeId;
      this._labels.internalValue = value.labels;
      this._nextHop.internalValue = value.nextHop;
      this._prefix.internalValue = value.prefix;
    }
  }

  // disable_gateway_monitor - computed: true, optional: true, required: false
  private _disableGatewayMonitor?: string; 
  public get disableGatewayMonitor() {
    return this.getStringAttribute('disable_gateway_monitor');
  }
  public set disableGatewayMonitor(value: string) {
    this._disableGatewayMonitor = value;
  }
  public resetDisableGatewayMonitor() {
    this._disableGatewayMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGatewayMonitorInput() {
    return this._disableGatewayMonitor;
  }

  // if_name - computed: true, optional: true, required: false
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  public resetIfName() {
    this._ifName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // route_id - computed: false, optional: false, required: true
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new VrfcontextStaticRoutesLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: VrfcontextStaticRoutesLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop = new VrfcontextStaticRoutesNextHopList(this, "next_hop", true);
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: VrfcontextStaticRoutesNextHop[] | cdktf.IResolvable) {
    this._nextHop.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix = new VrfcontextStaticRoutesPrefixList(this, "prefix", true);
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: VrfcontextStaticRoutesPrefix[] | cdktf.IResolvable) {
    this._prefix.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }
}

export class VrfcontextStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : VrfcontextStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): VrfcontextStaticRoutesOutputReference {
    return new VrfcontextStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext avi_vrfcontext}
*/
export class Vrfcontext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_vrfcontext";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vrfcontext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vrfcontext to import
  * @param importFromId The id of the existing Vrfcontext that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vrfcontext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_vrfcontext", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/vrfcontext avi_vrfcontext} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrfcontextConfig
  */
  public constructor(scope: Construct, id: string, config: VrfcontextConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_vrfcontext',
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
    this._description = config.description;
    this._id = config.id;
    this._lldpEnable = config.lldpEnable;
    this._name = config.name;
    this._systemDefault = config.systemDefault;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._attrs.internalValue = config.attrs;
    this._bfdProfile.internalValue = config.bfdProfile;
    this._bgpProfile.internalValue = config.bgpProfile;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._debugvrfcontext.internalValue = config.debugvrfcontext;
    this._gatewayMon.internalValue = config.gatewayMon;
    this._internalGatewayMonitor.internalValue = config.internalGatewayMonitor;
    this._markers.internalValue = config.markers;
    this._staticRoutes.internalValue = config.staticRoutes;
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

  // description - computed: true, optional: true, required: false
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

  // lldp_enable - computed: false, optional: true, required: false
  private _lldpEnable?: string; 
  public get lldpEnable() {
    return this.getStringAttribute('lldp_enable');
  }
  public set lldpEnable(value: string) {
    this._lldpEnable = value;
  }
  public resetLldpEnable() {
    this._lldpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpEnableInput() {
    return this._lldpEnable;
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

  // system_default - computed: false, optional: true, required: false
  private _systemDefault?: string; 
  public get systemDefault() {
    return this.getStringAttribute('system_default');
  }
  public set systemDefault(value: string) {
    this._systemDefault = value;
  }
  public resetSystemDefault() {
    this._systemDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDefaultInput() {
    return this._systemDefault;
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

  // attrs - computed: false, optional: true, required: false
  private _attrs = new VrfcontextAttrsList(this, "attrs", false);
  public get attrs() {
    return this._attrs;
  }
  public putAttrs(value: VrfcontextAttrs[] | cdktf.IResolvable) {
    this._attrs.internalValue = value;
  }
  public resetAttrs() {
    this._attrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs.internalValue;
  }

  // bfd_profile - computed: false, optional: true, required: false
  private _bfdProfile = new VrfcontextBfdProfileList(this, "bfd_profile", true);
  public get bfdProfile() {
    return this._bfdProfile;
  }
  public putBfdProfile(value: VrfcontextBfdProfile[] | cdktf.IResolvable) {
    this._bfdProfile.internalValue = value;
  }
  public resetBfdProfile() {
    this._bfdProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdProfileInput() {
    return this._bfdProfile.internalValue;
  }

  // bgp_profile - computed: false, optional: true, required: false
  private _bgpProfile = new VrfcontextBgpProfileList(this, "bgp_profile", true);
  public get bgpProfile() {
    return this._bgpProfile;
  }
  public putBgpProfile(value: VrfcontextBgpProfile[] | cdktf.IResolvable) {
    this._bgpProfile.internalValue = value;
  }
  public resetBgpProfile() {
    this._bgpProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpProfileInput() {
    return this._bgpProfile.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new VrfcontextConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: VrfcontextConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // debugvrfcontext - computed: false, optional: true, required: false
  private _debugvrfcontext = new VrfcontextDebugvrfcontextList(this, "debugvrfcontext", true);
  public get debugvrfcontext() {
    return this._debugvrfcontext;
  }
  public putDebugvrfcontext(value: VrfcontextDebugvrfcontext[] | cdktf.IResolvable) {
    this._debugvrfcontext.internalValue = value;
  }
  public resetDebugvrfcontext() {
    this._debugvrfcontext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugvrfcontextInput() {
    return this._debugvrfcontext.internalValue;
  }

  // gateway_mon - computed: false, optional: true, required: false
  private _gatewayMon = new VrfcontextGatewayMonList(this, "gateway_mon", false);
  public get gatewayMon() {
    return this._gatewayMon;
  }
  public putGatewayMon(value: VrfcontextGatewayMon[] | cdktf.IResolvable) {
    this._gatewayMon.internalValue = value;
  }
  public resetGatewayMon() {
    this._gatewayMon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMonInput() {
    return this._gatewayMon.internalValue;
  }

  // internal_gateway_monitor - computed: false, optional: true, required: false
  private _internalGatewayMonitor = new VrfcontextInternalGatewayMonitorList(this, "internal_gateway_monitor", true);
  public get internalGatewayMonitor() {
    return this._internalGatewayMonitor;
  }
  public putInternalGatewayMonitor(value: VrfcontextInternalGatewayMonitor[] | cdktf.IResolvable) {
    this._internalGatewayMonitor.internalValue = value;
  }
  public resetInternalGatewayMonitor() {
    this._internalGatewayMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalGatewayMonitorInput() {
    return this._internalGatewayMonitor.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new VrfcontextMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: VrfcontextMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new VrfcontextStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VrfcontextStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lldp_enable: cdktf.stringToTerraform(this._lldpEnable),
      name: cdktf.stringToTerraform(this._name),
      system_default: cdktf.stringToTerraform(this._systemDefault),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      attrs: cdktf.listMapper(vrfcontextAttrsToTerraform, true)(this._attrs.internalValue),
      bfd_profile: cdktf.listMapper(vrfcontextBfdProfileToTerraform, true)(this._bfdProfile.internalValue),
      bgp_profile: cdktf.listMapper(vrfcontextBgpProfileToTerraform, true)(this._bgpProfile.internalValue),
      configpb_attributes: cdktf.listMapper(vrfcontextConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      debugvrfcontext: cdktf.listMapper(vrfcontextDebugvrfcontextToTerraform, true)(this._debugvrfcontext.internalValue),
      gateway_mon: cdktf.listMapper(vrfcontextGatewayMonToTerraform, true)(this._gatewayMon.internalValue),
      internal_gateway_monitor: cdktf.listMapper(vrfcontextInternalGatewayMonitorToTerraform, true)(this._internalGatewayMonitor.internalValue),
      markers: cdktf.listMapper(vrfcontextMarkersToTerraform, true)(this._markers.internalValue),
      static_routes: cdktf.listMapper(vrfcontextStaticRoutesToTerraform, true)(this._staticRoutes.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      lldp_enable: {
        value: cdktf.stringToHclTerraform(this._lldpEnable),
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
      system_default: {
        value: cdktf.stringToHclTerraform(this._systemDefault),
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
      attrs: {
        value: cdktf.listMapperHcl(vrfcontextAttrsToHclTerraform, true)(this._attrs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfcontextAttrsList",
      },
      bfd_profile: {
        value: cdktf.listMapperHcl(vrfcontextBfdProfileToHclTerraform, true)(this._bfdProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfcontextBfdProfileList",
      },
      bgp_profile: {
        value: cdktf.listMapperHcl(vrfcontextBgpProfileToHclTerraform, true)(this._bgpProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfcontextBgpProfileList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(vrfcontextConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfcontextConfigpbAttributesList",
      },
      debugvrfcontext: {
        value: cdktf.listMapperHcl(vrfcontextDebugvrfcontextToHclTerraform, true)(this._debugvrfcontext.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfcontextDebugvrfcontextList",
      },
      gateway_mon: {
        value: cdktf.listMapperHcl(vrfcontextGatewayMonToHclTerraform, true)(this._gatewayMon.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfcontextGatewayMonList",
      },
      internal_gateway_monitor: {
        value: cdktf.listMapperHcl(vrfcontextInternalGatewayMonitorToHclTerraform, true)(this._internalGatewayMonitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrfcontextInternalGatewayMonitorList",
      },
      markers: {
        value: cdktf.listMapperHcl(vrfcontextMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfcontextMarkersList",
      },
      static_routes: {
        value: cdktf.listMapperHcl(vrfcontextStaticRoutesToHclTerraform, true)(this._staticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrfcontextStaticRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
