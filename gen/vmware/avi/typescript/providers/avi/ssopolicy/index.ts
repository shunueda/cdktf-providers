// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsopolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#id Ssopolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#name Ssopolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#tenant_ref Ssopolicy#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#type Ssopolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#uuid Ssopolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#authentication_policy Ssopolicy#authentication_policy}
  */
  readonly authenticationPolicy?: SsopolicyAuthenticationPolicy[] | cdktf.IResolvable;
  /**
  * authorization_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#authorization_policy Ssopolicy#authorization_policy}
  */
  readonly authorizationPolicy?: SsopolicyAuthorizationPolicy[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#configpb_attributes Ssopolicy#configpb_attributes}
  */
  readonly configpbAttributes?: SsopolicyConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#markers Ssopolicy#markers}
  */
  readonly markers?: SsopolicyMarkers[] | cdktf.IResolvable;
}
export interface SsopolicyAuthenticationPolicyAuthnRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#type Ssopolicy#type}
  */
  readonly type?: string;
}

export function ssopolicyAuthenticationPolicyAuthnRulesActionToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesActionToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SsopolicyAuthenticationPolicyAuthnRulesActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
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

export class SsopolicyAuthenticationPolicyAuthnRulesActionList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesAction[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesActionOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#addr Ssopolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#type Ssopolicy#type}
  */
  readonly type: string;
}

export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrsToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrsToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrs | cdktf.IResolvable): any {
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

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrs | cdktf.IResolvable | undefined) {
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

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrsList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrsOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#addr Ssopolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#type Ssopolicy#type}
  */
  readonly type: string;
}

export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddrToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddrToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable): any {
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

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddrOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#mask Ssopolicy#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#ip_addr Ssopolicy#ip_addr}
  */
  readonly ipAddr: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#addr Ssopolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#type Ssopolicy#type}
  */
  readonly type: string;
}

export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBeginToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBeginToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBegin | cdktf.IResolvable): any {
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

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBegin | cdktf.IResolvable | undefined) {
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

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBeginOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#addr Ssopolicy#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#type Ssopolicy#type}
  */
  readonly type: string;
}

export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEndToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEndToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEnd | cdktf.IResolvable): any {
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

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEnd | cdktf.IResolvable | undefined) {
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

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEndOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#begin Ssopolicy#begin}
  */
  readonly begin: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#end Ssopolicy#end}
  */
  readonly end: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEnd[] | cdktf.IResolvable;
}

export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRanges[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRulesMatchClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#group_refs Ssopolicy#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_criteria Ssopolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#addrs Ssopolicy#addrs}
  */
  readonly addrs?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#prefixes Ssopolicy#prefixes}
  */
  readonly prefixes?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#ranges Ssopolicy#ranges}
  */
  readonly ranges?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRanges[] | cdktf.IResolvable;
}

export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs = new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesMatchClientIp[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_case Ssopolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_criteria Ssopolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#value Ssopolicy#value}
  */
  readonly value?: string[];
}

export function ssopolicyAuthenticationPolicyAuthnRulesMatchHostHdrToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesMatchHostHdrToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._value = value.value;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdrList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdr[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdrOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRulesMatchPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_case Ssopolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_criteria Ssopolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_decoded_string Ssopolicy#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_str Ssopolicy#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#string_group_refs Ssopolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function ssopolicyAuthenticationPolicyAuthnRulesMatchPathToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_decoded_string: cdktf.stringToTerraform(struct!.matchDecodedString),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesMatchPathToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_decoded_string: {
      value: cdktf.stringToHclTerraform(struct!.matchDecodedString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesMatchPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchDecodedString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDecodedString = this._matchDecodedString;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesMatchPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._matchDecodedString = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._matchDecodedString = value.matchDecodedString;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_decoded_string - computed: false, optional: true, required: false
  private _matchDecodedString?: string; 
  public get matchDecodedString() {
    return this.getStringAttribute('match_decoded_string');
  }
  public set matchDecodedString(value: string) {
    this._matchDecodedString = value;
  }
  public resetMatchDecodedString() {
    this._matchDecodedString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDecodedStringInput() {
    return this._matchDecodedString;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchPathList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesMatchPath[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesMatchPathOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesMatchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRulesMatch {
  /**
  * client_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#client_ip Ssopolicy#client_ip}
  */
  readonly clientIp?: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIp[] | cdktf.IResolvable;
  /**
  * host_hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#host_hdr Ssopolicy#host_hdr}
  */
  readonly hostHdr?: SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdr[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#path Ssopolicy#path}
  */
  readonly path?: SsopolicyAuthenticationPolicyAuthnRulesMatchPath[] | cdktf.IResolvable;
}

export function ssopolicyAuthenticationPolicyAuthnRulesMatchToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpToTerraform, true)(struct!.clientIp),
    host_hdr: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesMatchHostHdrToTerraform, true)(struct!.hostHdr),
    path: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesMatchPathToTerraform, true)(struct!.path),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesMatchToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesMatchClientIpToHclTerraform, true)(struct!.clientIp),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpList",
    },
    host_hdr: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesMatchHostHdrToHclTerraform, true)(struct!.hostHdr),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdrList",
    },
    path: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesMatchPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesMatchPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRulesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    if (this._hostHdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHdr = this._hostHdr?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRulesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = undefined;
      this._hostHdr.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = value.clientIp;
      this._hostHdr.internalValue = value.hostHdr;
      this._path.internalValue = value.path;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new SsopolicyAuthenticationPolicyAuthnRulesMatchClientIpList(this, "client_ip", true);
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: SsopolicyAuthenticationPolicyAuthnRulesMatchClientIp[] | cdktf.IResolvable) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }

  // host_hdr - computed: false, optional: true, required: false
  private _hostHdr = new SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdrList(this, "host_hdr", true);
  public get hostHdr() {
    return this._hostHdr;
  }
  public putHostHdr(value: SsopolicyAuthenticationPolicyAuthnRulesMatchHostHdr[] | cdktf.IResolvable) {
    this._hostHdr.internalValue = value;
  }
  public resetHostHdr() {
    this._hostHdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHdrInput() {
    return this._hostHdr.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new SsopolicyAuthenticationPolicyAuthnRulesMatchPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: SsopolicyAuthenticationPolicyAuthnRulesMatchPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class SsopolicyAuthenticationPolicyAuthnRulesMatchList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRulesMatch[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesMatchOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicyAuthnRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#enable Ssopolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#index Ssopolicy#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#name Ssopolicy#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#action Ssopolicy#action}
  */
  readonly action?: SsopolicyAuthenticationPolicyAuthnRulesAction[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match Ssopolicy#match}
  */
  readonly match?: SsopolicyAuthenticationPolicyAuthnRulesMatch[] | cdktf.IResolvable;
}

export function ssopolicyAuthenticationPolicyAuthnRulesToTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    action: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesActionToTerraform, true)(struct!.action),
    match: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesMatchToTerraform, true)(struct!.match),
  }
}


export function ssopolicyAuthenticationPolicyAuthnRulesToHclTerraform(struct?: SsopolicyAuthenticationPolicyAuthnRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
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
    action: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesActionList",
    },
    match: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthenticationPolicyAuthnRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicyAuthnRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthenticationPolicyAuthnRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._name = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._index = value.index;
      this._name = value.name;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // action - computed: false, optional: true, required: false
  private _action = new SsopolicyAuthenticationPolicyAuthnRulesActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: SsopolicyAuthenticationPolicyAuthnRulesAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new SsopolicyAuthenticationPolicyAuthnRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: SsopolicyAuthenticationPolicyAuthnRulesMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class SsopolicyAuthenticationPolicyAuthnRulesList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicyAuthnRules[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyAuthnRulesOutputReference {
    return new SsopolicyAuthenticationPolicyAuthnRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthenticationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#default_auth_profile_ref Ssopolicy#default_auth_profile_ref}
  */
  readonly defaultAuthProfileRef?: string;
  /**
  * authn_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#authn_rules Ssopolicy#authn_rules}
  */
  readonly authnRules?: SsopolicyAuthenticationPolicyAuthnRules[] | cdktf.IResolvable;
}

export function ssopolicyAuthenticationPolicyToTerraform(struct?: SsopolicyAuthenticationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_auth_profile_ref: cdktf.stringToTerraform(struct!.defaultAuthProfileRef),
    authn_rules: cdktf.listMapper(ssopolicyAuthenticationPolicyAuthnRulesToTerraform, true)(struct!.authnRules),
  }
}


export function ssopolicyAuthenticationPolicyToHclTerraform(struct?: SsopolicyAuthenticationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_auth_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.defaultAuthProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authn_rules: {
      value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyAuthnRulesToHclTerraform, true)(struct!.authnRules),
      isBlock: true,
      type: "list",
      storageClassType: "SsopolicyAuthenticationPolicyAuthnRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthenticationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthenticationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAuthProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAuthProfileRef = this._defaultAuthProfileRef;
    }
    if (this._authnRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnRules = this._authnRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthenticationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultAuthProfileRef = undefined;
      this._authnRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultAuthProfileRef = value.defaultAuthProfileRef;
      this._authnRules.internalValue = value.authnRules;
    }
  }

  // default_auth_profile_ref - computed: true, optional: true, required: false
  private _defaultAuthProfileRef?: string; 
  public get defaultAuthProfileRef() {
    return this.getStringAttribute('default_auth_profile_ref');
  }
  public set defaultAuthProfileRef(value: string) {
    this._defaultAuthProfileRef = value;
  }
  public resetDefaultAuthProfileRef() {
    this._defaultAuthProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthProfileRefInput() {
    return this._defaultAuthProfileRef;
  }

  // authn_rules - computed: false, optional: true, required: false
  private _authnRules = new SsopolicyAuthenticationPolicyAuthnRulesList(this, "authn_rules", false);
  public get authnRules() {
    return this._authnRules;
  }
  public putAuthnRules(value: SsopolicyAuthenticationPolicyAuthnRules[] | cdktf.IResolvable) {
    this._authnRules.internalValue = value;
  }
  public resetAuthnRules() {
    this._authnRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnRulesInput() {
    return this._authnRules.internalValue;
  }
}

export class SsopolicyAuthenticationPolicyList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthenticationPolicy[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthenticationPolicyOutputReference {
    return new SsopolicyAuthenticationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#status_code Ssopolicy#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#type Ssopolicy#type}
  */
  readonly type?: string;
}

export function ssopolicyAuthorizationPolicyAuthzRulesActionToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesActionToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
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

export class SsopolicyAuthorizationPolicyAuthzRulesActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRulesAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRulesAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
    }
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
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

export class SsopolicyAuthorizationPolicyAuthzRulesActionList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRulesAction[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesActionOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_criteria Ssopolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_str Ssopolicy#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#string_group_refs Ssopolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatchToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatchToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatchList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatch[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatchOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#bool_match Ssopolicy#bool_match}
  */
  readonly boolMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#int_match Ssopolicy#int_match}
  */
  readonly intMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#is_mandatory Ssopolicy#is_mandatory}
  */
  readonly isMandatory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#name Ssopolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#type Ssopolicy#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#validate Ssopolicy#validate}
  */
  readonly validate: string;
  /**
  * string_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#string_match Ssopolicy#string_match}
  */
  readonly stringMatch?: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatch[] | cdktf.IResolvable;
}

export function ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_match: cdktf.stringToTerraform(struct!.boolMatch),
    int_match: cdktf.stringToTerraform(struct!.intMatch),
    is_mandatory: cdktf.stringToTerraform(struct!.isMandatory),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    validate: cdktf.stringToTerraform(struct!.validate),
    string_match: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatchToTerraform, true)(struct!.stringMatch),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_match: {
      value: cdktf.stringToHclTerraform(struct!.boolMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    int_match: {
      value: cdktf.stringToHclTerraform(struct!.intMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_mandatory: {
      value: cdktf.stringToHclTerraform(struct!.isMandatory),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate: {
      value: cdktf.stringToHclTerraform(struct!.validate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_match: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatchToHclTerraform, true)(struct!.stringMatch),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolMatch = this._boolMatch;
    }
    if (this._intMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.intMatch = this._intMatch;
    }
    if (this._isMandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMandatory = this._isMandatory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._validate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate;
    }
    if (this._stringMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringMatch = this._stringMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolMatch = undefined;
      this._intMatch = undefined;
      this._isMandatory = undefined;
      this._name = undefined;
      this._type = undefined;
      this._validate = undefined;
      this._stringMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolMatch = value.boolMatch;
      this._intMatch = value.intMatch;
      this._isMandatory = value.isMandatory;
      this._name = value.name;
      this._type = value.type;
      this._validate = value.validate;
      this._stringMatch.internalValue = value.stringMatch;
    }
  }

  // bool_match - computed: true, optional: true, required: false
  private _boolMatch?: string; 
  public get boolMatch() {
    return this.getStringAttribute('bool_match');
  }
  public set boolMatch(value: string) {
    this._boolMatch = value;
  }
  public resetBoolMatch() {
    this._boolMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolMatchInput() {
    return this._boolMatch;
  }

  // int_match - computed: true, optional: true, required: false
  private _intMatch?: string; 
  public get intMatch() {
    return this.getStringAttribute('int_match');
  }
  public set intMatch(value: string) {
    this._intMatch = value;
  }
  public resetIntMatch() {
    this._intMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intMatchInput() {
    return this._intMatch;
  }

  // is_mandatory - computed: false, optional: false, required: true
  private _isMandatory?: string; 
  public get isMandatory() {
    return this.getStringAttribute('is_mandatory');
  }
  public set isMandatory(value: string) {
    this._isMandatory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isMandatoryInput() {
    return this._isMandatory;
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

  // validate - computed: false, optional: false, required: true
  private _validate?: string; 
  public get validate() {
    return this.getStringAttribute('validate');
  }
  public set validate(value: string) {
    this._validate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // string_match - computed: false, optional: true, required: false
  private _stringMatch = new SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatchList(this, "string_match", true);
  public get stringMatch() {
    return this._stringMatch;
  }
  public putStringMatch(value: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesStringMatch[] | cdktf.IResolvable) {
    this._stringMatch.internalValue = value;
  }
  public resetStringMatch() {
    this._stringMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringMatchInput() {
    return this._stringMatch.internalValue;
  }
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatches[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRulesMatchAccessToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#token_name Ssopolicy#token_name}
  */
  readonly tokenName?: string;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#matches Ssopolicy#matches}
  */
  readonly matches?: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatches[] | cdktf.IResolvable;
}

export function ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_name: cdktf.stringToTerraform(struct!.tokenName),
    matches: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesToTerraform, true)(struct!.matches),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_name: {
      value: cdktf.stringToHclTerraform(struct!.tokenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matches: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRulesMatchAccessToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenName = this._tokenName;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tokenName = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tokenName = value.tokenName;
      this._matches.internalValue = value.matches;
    }
  }

  // token_name - computed: true, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }
  public set tokenName(value: string) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRulesMatchAccessToken[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_criteria Ssopolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_str Ssopolicy#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#string_group_refs Ssopolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function ssopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStructToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStructToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStructList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStruct[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStructOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#attribute_name Ssopolicy#attribute_name}
  */
  readonly attributeName: string;
  /**
  * attribute_value_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#attribute_value_list Ssopolicy#attribute_value_list}
  */
  readonly attributeValueList: SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStruct[] | cdktf.IResolvable;
}

export function ssopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_value_list: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStructToTerraform, true)(struct!.attributeValueList),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_value_list: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStructToHclTerraform, true)(struct!.attributeValueList),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValueList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValueList = this._attributeValueList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValueList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValueList.internalValue = value.attributeValueList;
    }
  }

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value_list - computed: false, optional: false, required: true
  private _attributeValueList = new SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStructList(this, "attribute_value_list", true);
  public get attributeValueList() {
    return this._attributeValueList;
  }
  public putAttributeValueList(value: SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesAttributeValueListStruct[] | cdktf.IResolvable) {
    this._attributeValueList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueListInput() {
    return this._attributeValueList.internalValue;
  }
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatches[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_case Ssopolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_criteria Ssopolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#value Ssopolicy#value}
  */
  readonly value?: string[];
}

export function ssopolicyAuthorizationPolicyAuthzRulesMatchHostHdrToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesMatchHostHdrToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._value = value.value;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdrList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdr[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdrOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRulesMatchMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_criteria Ssopolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#methods Ssopolicy#methods}
  */
  readonly methods: string[];
}

export function ssopolicyAuthorizationPolicyAuthzRulesMatchMethodToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesMatchMethodToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRulesMatchMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRulesMatchMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._methods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._methods = value.methods;
    }
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchMethodList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRulesMatchMethod[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesMatchMethodOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesMatchMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRulesMatchPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_case Ssopolicy#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_criteria Ssopolicy#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_decoded_string Ssopolicy#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match_str Ssopolicy#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#string_group_refs Ssopolicy#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function ssopolicyAuthorizationPolicyAuthzRulesMatchPathToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_decoded_string: cdktf.stringToTerraform(struct!.matchDecodedString),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesMatchPathToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_decoded_string: {
      value: cdktf.stringToHclTerraform(struct!.matchDecodedString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRulesMatchPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchDecodedString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDecodedString = this._matchDecodedString;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRulesMatchPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._matchDecodedString = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._matchDecodedString = value.matchDecodedString;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_decoded_string - computed: false, optional: true, required: false
  private _matchDecodedString?: string; 
  public get matchDecodedString() {
    return this.getStringAttribute('match_decoded_string');
  }
  public set matchDecodedString(value: string) {
    this._matchDecodedString = value;
  }
  public resetMatchDecodedString() {
    this._matchDecodedString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDecodedStringInput() {
    return this._matchDecodedString;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchPathList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRulesMatchPath[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesMatchPathOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesMatchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRulesMatch {
  /**
  * access_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#access_token Ssopolicy#access_token}
  */
  readonly accessToken?: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessToken[] | cdktf.IResolvable;
  /**
  * attr_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#attr_matches Ssopolicy#attr_matches}
  */
  readonly attrMatches?: SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatches[] | cdktf.IResolvable;
  /**
  * host_hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#host_hdr Ssopolicy#host_hdr}
  */
  readonly hostHdr?: SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdr[] | cdktf.IResolvable;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#method Ssopolicy#method}
  */
  readonly method?: SsopolicyAuthorizationPolicyAuthzRulesMatchMethod[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#path Ssopolicy#path}
  */
  readonly path?: SsopolicyAuthorizationPolicyAuthzRulesMatchPath[] | cdktf.IResolvable;
}

export function ssopolicyAuthorizationPolicyAuthzRulesMatchToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenToTerraform, true)(struct!.accessToken),
    attr_matches: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesToTerraform, true)(struct!.attrMatches),
    host_hdr: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesMatchHostHdrToTerraform, true)(struct!.hostHdr),
    method: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesMatchMethodToTerraform, true)(struct!.method),
    path: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesMatchPathToTerraform, true)(struct!.path),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesMatchToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenToHclTerraform, true)(struct!.accessToken),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenList",
    },
    attr_matches: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesToHclTerraform, true)(struct!.attrMatches),
      isBlock: true,
      type: "list",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesList",
    },
    host_hdr: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesMatchHostHdrToHclTerraform, true)(struct!.hostHdr),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdrList",
    },
    method: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesMatchMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesMatchMethodList",
    },
    path: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesMatchPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesMatchPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRulesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken?.internalValue;
    }
    if (this._attrMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrMatches = this._attrMatches?.internalValue;
    }
    if (this._hostHdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHdr = this._hostHdr?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRulesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = undefined;
      this._attrMatches.internalValue = undefined;
      this._hostHdr.internalValue = undefined;
      this._method.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessToken.internalValue = value.accessToken;
      this._attrMatches.internalValue = value.attrMatches;
      this._hostHdr.internalValue = value.hostHdr;
      this._method.internalValue = value.method;
      this._path.internalValue = value.path;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken = new SsopolicyAuthorizationPolicyAuthzRulesMatchAccessTokenList(this, "access_token", true);
  public get accessToken() {
    return this._accessToken;
  }
  public putAccessToken(value: SsopolicyAuthorizationPolicyAuthzRulesMatchAccessToken[] | cdktf.IResolvable) {
    this._accessToken.internalValue = value;
  }
  public resetAccessToken() {
    this._accessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken.internalValue;
  }

  // attr_matches - computed: false, optional: true, required: false
  private _attrMatches = new SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatchesList(this, "attr_matches", false);
  public get attrMatches() {
    return this._attrMatches;
  }
  public putAttrMatches(value: SsopolicyAuthorizationPolicyAuthzRulesMatchAttrMatches[] | cdktf.IResolvable) {
    this._attrMatches.internalValue = value;
  }
  public resetAttrMatches() {
    this._attrMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrMatchesInput() {
    return this._attrMatches.internalValue;
  }

  // host_hdr - computed: false, optional: true, required: false
  private _hostHdr = new SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdrList(this, "host_hdr", true);
  public get hostHdr() {
    return this._hostHdr;
  }
  public putHostHdr(value: SsopolicyAuthorizationPolicyAuthzRulesMatchHostHdr[] | cdktf.IResolvable) {
    this._hostHdr.internalValue = value;
  }
  public resetHostHdr() {
    this._hostHdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHdrInput() {
    return this._hostHdr.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new SsopolicyAuthorizationPolicyAuthzRulesMatchMethodList(this, "method", true);
  public get method() {
    return this._method;
  }
  public putMethod(value: SsopolicyAuthorizationPolicyAuthzRulesMatchMethod[] | cdktf.IResolvable) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new SsopolicyAuthorizationPolicyAuthzRulesMatchPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: SsopolicyAuthorizationPolicyAuthzRulesMatchPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class SsopolicyAuthorizationPolicyAuthzRulesMatchList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRulesMatch[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesMatchOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicyAuthzRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#enable Ssopolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#index Ssopolicy#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#name Ssopolicy#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#action Ssopolicy#action}
  */
  readonly action: SsopolicyAuthorizationPolicyAuthzRulesAction[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#match Ssopolicy#match}
  */
  readonly match: SsopolicyAuthorizationPolicyAuthzRulesMatch[] | cdktf.IResolvable;
}

export function ssopolicyAuthorizationPolicyAuthzRulesToTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    action: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesActionToTerraform, true)(struct!.action),
    match: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesMatchToTerraform, true)(struct!.match),
  }
}


export function ssopolicyAuthorizationPolicyAuthzRulesToHclTerraform(struct?: SsopolicyAuthorizationPolicyAuthzRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
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
    action: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesActionList",
    },
    match: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyAuthzRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicyAuthzRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicyAuthzRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._name = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._index = value.index;
      this._name = value.name;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // action - computed: false, optional: false, required: true
  private _action = new SsopolicyAuthorizationPolicyAuthzRulesActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: SsopolicyAuthorizationPolicyAuthzRulesAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new SsopolicyAuthorizationPolicyAuthzRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: SsopolicyAuthorizationPolicyAuthzRulesMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class SsopolicyAuthorizationPolicyAuthzRulesList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicyAuthzRules[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyAuthzRulesOutputReference {
    return new SsopolicyAuthorizationPolicyAuthzRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyAuthorizationPolicy {
  /**
  * authz_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#authz_rules Ssopolicy#authz_rules}
  */
  readonly authzRules?: SsopolicyAuthorizationPolicyAuthzRules[] | cdktf.IResolvable;
}

export function ssopolicyAuthorizationPolicyToTerraform(struct?: SsopolicyAuthorizationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authz_rules: cdktf.listMapper(ssopolicyAuthorizationPolicyAuthzRulesToTerraform, true)(struct!.authzRules),
  }
}


export function ssopolicyAuthorizationPolicyToHclTerraform(struct?: SsopolicyAuthorizationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authz_rules: {
      value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyAuthzRulesToHclTerraform, true)(struct!.authzRules),
      isBlock: true,
      type: "list",
      storageClassType: "SsopolicyAuthorizationPolicyAuthzRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsopolicyAuthorizationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyAuthorizationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authzRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzRules = this._authzRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsopolicyAuthorizationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authzRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authzRules.internalValue = value.authzRules;
    }
  }

  // authz_rules - computed: false, optional: true, required: false
  private _authzRules = new SsopolicyAuthorizationPolicyAuthzRulesList(this, "authz_rules", false);
  public get authzRules() {
    return this._authzRules;
  }
  public putAuthzRules(value: SsopolicyAuthorizationPolicyAuthzRules[] | cdktf.IResolvable) {
    this._authzRules.internalValue = value;
  }
  public resetAuthzRules() {
    this._authzRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzRulesInput() {
    return this._authzRules.internalValue;
  }
}

export class SsopolicyAuthorizationPolicyList extends cdktf.ComplexList {
  public internalValue? : SsopolicyAuthorizationPolicy[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyAuthorizationPolicyOutputReference {
    return new SsopolicyAuthorizationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#version Ssopolicy#version}
  */
  readonly version?: string;
}

export function ssopolicyConfigpbAttributesToTerraform(struct?: SsopolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function ssopolicyConfigpbAttributesToHclTerraform(struct?: SsopolicyConfigpbAttributes | cdktf.IResolvable): any {
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

export class SsopolicyConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SsopolicyConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class SsopolicyConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : SsopolicyConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyConfigpbAttributesOutputReference {
    return new SsopolicyConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsopolicyMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#key Ssopolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#values Ssopolicy#values}
  */
  readonly values?: string[];
}

export function ssopolicyMarkersToTerraform(struct?: SsopolicyMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function ssopolicyMarkersToHclTerraform(struct?: SsopolicyMarkers | cdktf.IResolvable): any {
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

export class SsopolicyMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsopolicyMarkers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SsopolicyMarkers | cdktf.IResolvable | undefined) {
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

export class SsopolicyMarkersList extends cdktf.ComplexList {
  public internalValue? : SsopolicyMarkers[] | cdktf.IResolvable

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
  public get(index: number): SsopolicyMarkersOutputReference {
    return new SsopolicyMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy avi_ssopolicy}
*/
export class Ssopolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_ssopolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ssopolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ssopolicy to import
  * @param importFromId The id of the existing Ssopolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ssopolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_ssopolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/ssopolicy avi_ssopolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsopolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SsopolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_ssopolicy',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._type = config.type;
    this._uuid = config.uuid;
    this._authenticationPolicy.internalValue = config.authenticationPolicy;
    this._authorizationPolicy.internalValue = config.authorizationPolicy;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._markers.internalValue = config.markers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // authentication_policy - computed: false, optional: true, required: false
  private _authenticationPolicy = new SsopolicyAuthenticationPolicyList(this, "authentication_policy", true);
  public get authenticationPolicy() {
    return this._authenticationPolicy;
  }
  public putAuthenticationPolicy(value: SsopolicyAuthenticationPolicy[] | cdktf.IResolvable) {
    this._authenticationPolicy.internalValue = value;
  }
  public resetAuthenticationPolicy() {
    this._authenticationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPolicyInput() {
    return this._authenticationPolicy.internalValue;
  }

  // authorization_policy - computed: false, optional: true, required: false
  private _authorizationPolicy = new SsopolicyAuthorizationPolicyList(this, "authorization_policy", true);
  public get authorizationPolicy() {
    return this._authorizationPolicy;
  }
  public putAuthorizationPolicy(value: SsopolicyAuthorizationPolicy[] | cdktf.IResolvable) {
    this._authorizationPolicy.internalValue = value;
  }
  public resetAuthorizationPolicy() {
    this._authorizationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationPolicyInput() {
    return this._authorizationPolicy.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new SsopolicyConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: SsopolicyConfigpbAttributes[] | cdktf.IResolvable) {
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
  private _markers = new SsopolicyMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: SsopolicyMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      authentication_policy: cdktf.listMapper(ssopolicyAuthenticationPolicyToTerraform, true)(this._authenticationPolicy.internalValue),
      authorization_policy: cdktf.listMapper(ssopolicyAuthorizationPolicyToTerraform, true)(this._authorizationPolicy.internalValue),
      configpb_attributes: cdktf.listMapper(ssopolicyConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      markers: cdktf.listMapper(ssopolicyMarkersToTerraform, true)(this._markers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      authentication_policy: {
        value: cdktf.listMapperHcl(ssopolicyAuthenticationPolicyToHclTerraform, true)(this._authenticationPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SsopolicyAuthenticationPolicyList",
      },
      authorization_policy: {
        value: cdktf.listMapperHcl(ssopolicyAuthorizationPolicyToHclTerraform, true)(this._authorizationPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SsopolicyAuthorizationPolicyList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(ssopolicyConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SsopolicyConfigpbAttributesList",
      },
      markers: {
        value: cdktf.listMapperHcl(ssopolicyMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsopolicyMarkersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
