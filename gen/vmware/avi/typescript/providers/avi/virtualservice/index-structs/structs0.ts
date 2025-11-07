import * as cdktf from 'cdktf';
export interface VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrsToTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrsToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrs | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrs | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrsOutputReference {
    return new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddrToTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddrToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddr | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddrOutputReference {
    return new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#mask Virtualservice#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip_addr Virtualservice#ip_addr}
  */
  readonly ipAddr: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesToTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesOutputReference {
    return new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBeginToTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBeginToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBegin | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBegin | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBeginOutputReference {
    return new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEndToTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEndToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEnd | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEnd | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEndOutputReference {
    return new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#begin Virtualservice#begin}
  */
  readonly begin: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#end Virtualservice#end}
  */
  readonly end: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEnd[] | cdktf.IResolvable;
}

export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesToTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRanges | cdktf.IResolvable | undefined) {
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
  private _begin = new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRanges[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesOutputReference {
    return new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#group_refs Virtualservice#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#match_criteria Virtualservice#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addrs Virtualservice#addrs}
  */
  readonly addrs?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#prefixes Virtualservice#prefixes}
  */
  readonly prefixes?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ranges Virtualservice#ranges}
  */
  readonly ranges?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRanges[] | cdktf.IResolvable;
}

export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpToTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIp | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIp | cdktf.IResolvable | undefined) {
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
  private _addrs = new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpAddrs[] | cdktf.IResolvable) {
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
  private _prefixes = new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpPrefixes[] | cdktf.IResolvable) {
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
  private _ranges = new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpRanges[] | cdktf.IResolvable) {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIp[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpOutputReference {
    return new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUris {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#match_criteria Virtualservice#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#match_str Virtualservice#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#string_group_refs Virtualservice#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function virtualserviceAnalyticsPolicyClientInsightsSamplingSampleUrisToTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUris | cdktf.IResolvable): any {
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


export function virtualserviceAnalyticsPolicyClientInsightsSamplingSampleUrisToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUris | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUrisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUris | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUris | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUrisList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUris[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUrisOutputReference {
    return new VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUrisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUris {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#match_criteria Virtualservice#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#match_str Virtualservice#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#string_group_refs Virtualservice#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function virtualserviceAnalyticsPolicyClientInsightsSamplingSkipUrisToTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUris | cdktf.IResolvable): any {
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


export function virtualserviceAnalyticsPolicyClientInsightsSamplingSkipUrisToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUris | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUrisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUris | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUris | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUrisList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUris[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUrisOutputReference {
    return new VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUrisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientInsightsSampling {
  /**
  * client_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#client_ip Virtualservice#client_ip}
  */
  readonly clientIp?: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIp[] | cdktf.IResolvable;
  /**
  * sample_uris block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#sample_uris Virtualservice#sample_uris}
  */
  readonly sampleUris?: VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUris[] | cdktf.IResolvable;
  /**
  * skip_uris block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#skip_uris Virtualservice#skip_uris}
  */
  readonly skipUris?: VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUris[] | cdktf.IResolvable;
}

export function virtualserviceAnalyticsPolicyClientInsightsSamplingToTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: cdktf.listMapper(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpToTerraform, true)(struct!.clientIp),
    sample_uris: cdktf.listMapper(virtualserviceAnalyticsPolicyClientInsightsSamplingSampleUrisToTerraform, true)(struct!.sampleUris),
    skip_uris: cdktf.listMapper(virtualserviceAnalyticsPolicyClientInsightsSamplingSkipUrisToTerraform, true)(struct!.skipUris),
  }
}


export function virtualserviceAnalyticsPolicyClientInsightsSamplingToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientInsightsSampling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientInsightsSamplingClientIpToHclTerraform, true)(struct!.clientIp),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpList",
    },
    sample_uris: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientInsightsSamplingSampleUrisToHclTerraform, true)(struct!.sampleUris),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUrisList",
    },
    skip_uris: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientInsightsSamplingSkipUrisToHclTerraform, true)(struct!.skipUris),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUrisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientInsightsSampling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    if (this._sampleUris?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleUris = this._sampleUris?.internalValue;
    }
    if (this._skipUris?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUris = this._skipUris?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientInsightsSampling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = undefined;
      this._sampleUris.internalValue = undefined;
      this._skipUris.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = value.clientIp;
      this._sampleUris.internalValue = value.sampleUris;
      this._skipUris.internalValue = value.skipUris;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIpList(this, "client_ip", true);
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingClientIp[] | cdktf.IResolvable) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }

  // sample_uris - computed: false, optional: true, required: false
  private _sampleUris = new VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUrisList(this, "sample_uris", true);
  public get sampleUris() {
    return this._sampleUris;
  }
  public putSampleUris(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingSampleUris[] | cdktf.IResolvable) {
    this._sampleUris.internalValue = value;
  }
  public resetSampleUris() {
    this._sampleUris.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleUrisInput() {
    return this._sampleUris.internalValue;
  }

  // skip_uris - computed: false, optional: true, required: false
  private _skipUris = new VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUrisList(this, "skip_uris", true);
  public get skipUris() {
    return this._skipUris;
  }
  public putSkipUris(value: VirtualserviceAnalyticsPolicyClientInsightsSamplingSkipUris[] | cdktf.IResolvable) {
    this._skipUris.internalValue = value;
  }
  public resetSkipUris() {
    this._skipUris.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUrisInput() {
    return this._skipUris.internalValue;
  }
}

export class VirtualserviceAnalyticsPolicyClientInsightsSamplingList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientInsightsSampling[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientInsightsSamplingOutputReference {
    return new VirtualserviceAnalyticsPolicyClientInsightsSamplingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrsToTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrsToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrs | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrs | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrsOutputReference {
    return new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddrToTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddrToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddr | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddrOutputReference {
    return new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#mask Virtualservice#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip_addr Virtualservice#ip_addr}
  */
  readonly ipAddr: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesToTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(virtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesOutputReference {
    return new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBeginToTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBeginToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBegin | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBegin | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBeginOutputReference {
    return new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEndToTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEndToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEnd | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEnd | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEndOutputReference {
    return new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#begin Virtualservice#begin}
  */
  readonly begin: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#end Virtualservice#end}
  */
  readonly end: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEnd[] | cdktf.IResolvable;
}

export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesToTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRanges | cdktf.IResolvable | undefined) {
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
  private _begin = new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRanges[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesOutputReference {
    return new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientLogFiltersClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#group_refs Virtualservice#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#match_criteria Virtualservice#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addrs Virtualservice#addrs}
  */
  readonly addrs?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#prefixes Virtualservice#prefixes}
  */
  readonly prefixes?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ranges Virtualservice#ranges}
  */
  readonly ranges?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRanges[] | cdktf.IResolvable;
}

export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpToTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(virtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(virtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function virtualserviceAnalyticsPolicyClientLogFiltersClientIpToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIp | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientLogFiltersClientIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIp | cdktf.IResolvable | undefined) {
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
  private _addrs = new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpAddrs[] | cdktf.IResolvable) {
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
  private _prefixes = new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpPrefixes[] | cdktf.IResolvable) {
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
  private _ranges = new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIpRanges[] | cdktf.IResolvable) {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersClientIpList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientLogFiltersClientIp[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientLogFiltersClientIpOutputReference {
    return new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientLogFiltersUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#match_criteria Virtualservice#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#match_str Virtualservice#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#string_group_refs Virtualservice#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function virtualserviceAnalyticsPolicyClientLogFiltersUriToTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersUri | cdktf.IResolvable): any {
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


export function virtualserviceAnalyticsPolicyClientLogFiltersUriToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFiltersUri | cdktf.IResolvable): any {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientLogFiltersUri | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientLogFiltersUri | cdktf.IResolvable | undefined) {
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

export class VirtualserviceAnalyticsPolicyClientLogFiltersUriList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientLogFiltersUri[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientLogFiltersUriOutputReference {
    return new VirtualserviceAnalyticsPolicyClientLogFiltersUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyClientLogFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#all_headers Virtualservice#all_headers}
  */
  readonly allHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#duration Virtualservice#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#enabled Virtualservice#enabled}
  */
  readonly enabled: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#index Virtualservice#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#name Virtualservice#name}
  */
  readonly name: string;
  /**
  * client_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#client_ip Virtualservice#client_ip}
  */
  readonly clientIp?: VirtualserviceAnalyticsPolicyClientLogFiltersClientIp[] | cdktf.IResolvable;
  /**
  * uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#uri Virtualservice#uri}
  */
  readonly uri?: VirtualserviceAnalyticsPolicyClientLogFiltersUri[] | cdktf.IResolvable;
}

export function virtualserviceAnalyticsPolicyClientLogFiltersToTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_headers: cdktf.stringToTerraform(struct!.allHeaders),
    duration: cdktf.stringToTerraform(struct!.duration),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    client_ip: cdktf.listMapper(virtualserviceAnalyticsPolicyClientLogFiltersClientIpToTerraform, true)(struct!.clientIp),
    uri: cdktf.listMapper(virtualserviceAnalyticsPolicyClientLogFiltersUriToTerraform, true)(struct!.uri),
  }
}


export function virtualserviceAnalyticsPolicyClientLogFiltersToHclTerraform(struct?: VirtualserviceAnalyticsPolicyClientLogFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_headers: {
      value: cdktf.stringToHclTerraform(struct!.allHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
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
    client_ip: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientLogFiltersClientIpToHclTerraform, true)(struct!.clientIp),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientLogFiltersClientIpList",
    },
    uri: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientLogFiltersUriToHclTerraform, true)(struct!.uri),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientLogFiltersUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyClientLogFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyClientLogFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allHeaders = this._allHeaders;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    if (this._uri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceAnalyticsPolicyClientLogFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allHeaders = undefined;
      this._duration = undefined;
      this._enabled = undefined;
      this._index = undefined;
      this._name = undefined;
      this._clientIp.internalValue = undefined;
      this._uri.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allHeaders = value.allHeaders;
      this._duration = value.duration;
      this._enabled = value.enabled;
      this._index = value.index;
      this._name = value.name;
      this._clientIp.internalValue = value.clientIp;
      this._uri.internalValue = value.uri;
    }
  }

  // all_headers - computed: false, optional: true, required: false
  private _allHeaders?: string; 
  public get allHeaders() {
    return this.getStringAttribute('all_headers');
  }
  public set allHeaders(value: string) {
    this._allHeaders = value;
  }
  public resetAllHeaders() {
    this._allHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allHeadersInput() {
    return this._allHeaders;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new VirtualserviceAnalyticsPolicyClientLogFiltersClientIpList(this, "client_ip", true);
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: VirtualserviceAnalyticsPolicyClientLogFiltersClientIp[] | cdktf.IResolvable) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }

  // uri - computed: false, optional: true, required: false
  private _uri = new VirtualserviceAnalyticsPolicyClientLogFiltersUriList(this, "uri", true);
  public get uri() {
    return this._uri;
  }
  public putUri(value: VirtualserviceAnalyticsPolicyClientLogFiltersUri[] | cdktf.IResolvable) {
    this._uri.internalValue = value;
  }
  public resetUri() {
    this._uri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri.internalValue;
  }
}

export class VirtualserviceAnalyticsPolicyClientLogFiltersList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyClientLogFilters[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyClientLogFiltersOutputReference {
    return new VirtualserviceAnalyticsPolicyClientLogFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyFullClientLogs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#duration Virtualservice#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#enabled Virtualservice#enabled}
  */
  readonly enabled: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#throttle Virtualservice#throttle}
  */
  readonly throttle?: string;
}

export function virtualserviceAnalyticsPolicyFullClientLogsToTerraform(struct?: VirtualserviceAnalyticsPolicyFullClientLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    throttle: cdktf.stringToTerraform(struct!.throttle),
  }
}


export function virtualserviceAnalyticsPolicyFullClientLogsToHclTerraform(struct?: VirtualserviceAnalyticsPolicyFullClientLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throttle: {
      value: cdktf.stringToHclTerraform(struct!.throttle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyFullClientLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyFullClientLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._throttle !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttle = this._throttle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceAnalyticsPolicyFullClientLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._enabled = undefined;
      this._throttle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._enabled = value.enabled;
      this._throttle = value.throttle;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // throttle - computed: false, optional: true, required: false
  private _throttle?: string; 
  public get throttle() {
    return this.getStringAttribute('throttle');
  }
  public set throttle(value: string) {
    this._throttle = value;
  }
  public resetThrottle() {
    this._throttle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle;
  }
}

export class VirtualserviceAnalyticsPolicyFullClientLogsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyFullClientLogs[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyFullClientLogsOutputReference {
    return new VirtualserviceAnalyticsPolicyFullClientLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyLearningLogPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#enabled Virtualservice#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#host Virtualservice#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#port Virtualservice#port}
  */
  readonly port?: string;
}

export function virtualserviceAnalyticsPolicyLearningLogPolicyToTerraform(struct?: VirtualserviceAnalyticsPolicyLearningLogPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function virtualserviceAnalyticsPolicyLearningLogPolicyToHclTerraform(struct?: VirtualserviceAnalyticsPolicyLearningLogPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyLearningLogPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyLearningLogPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceAnalyticsPolicyLearningLogPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
}

export class VirtualserviceAnalyticsPolicyLearningLogPolicyList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyLearningLogPolicy[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyLearningLogPolicyOutputReference {
    return new VirtualserviceAnalyticsPolicyLearningLogPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicyMetricsRealtimeUpdate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#duration Virtualservice#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#enabled Virtualservice#enabled}
  */
  readonly enabled: string;
}

export function virtualserviceAnalyticsPolicyMetricsRealtimeUpdateToTerraform(struct?: VirtualserviceAnalyticsPolicyMetricsRealtimeUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    enabled: cdktf.stringToTerraform(struct!.enabled),
  }
}


export function virtualserviceAnalyticsPolicyMetricsRealtimeUpdateToHclTerraform(struct?: VirtualserviceAnalyticsPolicyMetricsRealtimeUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyMetricsRealtimeUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicyMetricsRealtimeUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceAnalyticsPolicyMetricsRealtimeUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._enabled = value.enabled;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class VirtualserviceAnalyticsPolicyMetricsRealtimeUpdateList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicyMetricsRealtimeUpdate[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyMetricsRealtimeUpdateOutputReference {
    return new VirtualserviceAnalyticsPolicyMetricsRealtimeUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceAnalyticsPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#all_headers Virtualservice#all_headers}
  */
  readonly allHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#client_insights Virtualservice#client_insights}
  */
  readonly clientInsights?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#significant_log_throttle Virtualservice#significant_log_throttle}
  */
  readonly significantLogThrottle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#udf_log_throttle Virtualservice#udf_log_throttle}
  */
  readonly udfLogThrottle?: string;
  /**
  * client_insights_sampling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#client_insights_sampling Virtualservice#client_insights_sampling}
  */
  readonly clientInsightsSampling?: VirtualserviceAnalyticsPolicyClientInsightsSampling[] | cdktf.IResolvable;
  /**
  * client_log_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#client_log_filters Virtualservice#client_log_filters}
  */
  readonly clientLogFilters?: VirtualserviceAnalyticsPolicyClientLogFilters[] | cdktf.IResolvable;
  /**
  * full_client_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#full_client_logs Virtualservice#full_client_logs}
  */
  readonly fullClientLogs?: VirtualserviceAnalyticsPolicyFullClientLogs[] | cdktf.IResolvable;
  /**
  * learning_log_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#learning_log_policy Virtualservice#learning_log_policy}
  */
  readonly learningLogPolicy?: VirtualserviceAnalyticsPolicyLearningLogPolicy[] | cdktf.IResolvable;
  /**
  * metrics_realtime_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#metrics_realtime_update Virtualservice#metrics_realtime_update}
  */
  readonly metricsRealtimeUpdate?: VirtualserviceAnalyticsPolicyMetricsRealtimeUpdate[] | cdktf.IResolvable;
}

export function virtualserviceAnalyticsPolicyToTerraform(struct?: VirtualserviceAnalyticsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_headers: cdktf.stringToTerraform(struct!.allHeaders),
    client_insights: cdktf.stringToTerraform(struct!.clientInsights),
    significant_log_throttle: cdktf.stringToTerraform(struct!.significantLogThrottle),
    udf_log_throttle: cdktf.stringToTerraform(struct!.udfLogThrottle),
    client_insights_sampling: cdktf.listMapper(virtualserviceAnalyticsPolicyClientInsightsSamplingToTerraform, true)(struct!.clientInsightsSampling),
    client_log_filters: cdktf.listMapper(virtualserviceAnalyticsPolicyClientLogFiltersToTerraform, true)(struct!.clientLogFilters),
    full_client_logs: cdktf.listMapper(virtualserviceAnalyticsPolicyFullClientLogsToTerraform, true)(struct!.fullClientLogs),
    learning_log_policy: cdktf.listMapper(virtualserviceAnalyticsPolicyLearningLogPolicyToTerraform, true)(struct!.learningLogPolicy),
    metrics_realtime_update: cdktf.listMapper(virtualserviceAnalyticsPolicyMetricsRealtimeUpdateToTerraform, true)(struct!.metricsRealtimeUpdate),
  }
}


export function virtualserviceAnalyticsPolicyToHclTerraform(struct?: VirtualserviceAnalyticsPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_headers: {
      value: cdktf.stringToHclTerraform(struct!.allHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_insights: {
      value: cdktf.stringToHclTerraform(struct!.clientInsights),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    significant_log_throttle: {
      value: cdktf.stringToHclTerraform(struct!.significantLogThrottle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udf_log_throttle: {
      value: cdktf.stringToHclTerraform(struct!.udfLogThrottle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_insights_sampling: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientInsightsSamplingToHclTerraform, true)(struct!.clientInsightsSampling),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyClientInsightsSamplingList",
    },
    client_log_filters: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyClientLogFiltersToHclTerraform, true)(struct!.clientLogFilters),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceAnalyticsPolicyClientLogFiltersList",
    },
    full_client_logs: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyFullClientLogsToHclTerraform, true)(struct!.fullClientLogs),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyFullClientLogsList",
    },
    learning_log_policy: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyLearningLogPolicyToHclTerraform, true)(struct!.learningLogPolicy),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyLearningLogPolicyList",
    },
    metrics_realtime_update: {
      value: cdktf.listMapperHcl(virtualserviceAnalyticsPolicyMetricsRealtimeUpdateToHclTerraform, true)(struct!.metricsRealtimeUpdate),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceAnalyticsPolicyMetricsRealtimeUpdateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceAnalyticsPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceAnalyticsPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allHeaders = this._allHeaders;
    }
    if (this._clientInsights !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientInsights = this._clientInsights;
    }
    if (this._significantLogThrottle !== undefined) {
      hasAnyValues = true;
      internalValueResult.significantLogThrottle = this._significantLogThrottle;
    }
    if (this._udfLogThrottle !== undefined) {
      hasAnyValues = true;
      internalValueResult.udfLogThrottle = this._udfLogThrottle;
    }
    if (this._clientInsightsSampling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientInsightsSampling = this._clientInsightsSampling?.internalValue;
    }
    if (this._clientLogFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientLogFilters = this._clientLogFilters?.internalValue;
    }
    if (this._fullClientLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullClientLogs = this._fullClientLogs?.internalValue;
    }
    if (this._learningLogPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningLogPolicy = this._learningLogPolicy?.internalValue;
    }
    if (this._metricsRealtimeUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsRealtimeUpdate = this._metricsRealtimeUpdate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceAnalyticsPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allHeaders = undefined;
      this._clientInsights = undefined;
      this._significantLogThrottle = undefined;
      this._udfLogThrottle = undefined;
      this._clientInsightsSampling.internalValue = undefined;
      this._clientLogFilters.internalValue = undefined;
      this._fullClientLogs.internalValue = undefined;
      this._learningLogPolicy.internalValue = undefined;
      this._metricsRealtimeUpdate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allHeaders = value.allHeaders;
      this._clientInsights = value.clientInsights;
      this._significantLogThrottle = value.significantLogThrottle;
      this._udfLogThrottle = value.udfLogThrottle;
      this._clientInsightsSampling.internalValue = value.clientInsightsSampling;
      this._clientLogFilters.internalValue = value.clientLogFilters;
      this._fullClientLogs.internalValue = value.fullClientLogs;
      this._learningLogPolicy.internalValue = value.learningLogPolicy;
      this._metricsRealtimeUpdate.internalValue = value.metricsRealtimeUpdate;
    }
  }

  // all_headers - computed: false, optional: true, required: false
  private _allHeaders?: string; 
  public get allHeaders() {
    return this.getStringAttribute('all_headers');
  }
  public set allHeaders(value: string) {
    this._allHeaders = value;
  }
  public resetAllHeaders() {
    this._allHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allHeadersInput() {
    return this._allHeaders;
  }

  // client_insights - computed: false, optional: true, required: false
  private _clientInsights?: string; 
  public get clientInsights() {
    return this.getStringAttribute('client_insights');
  }
  public set clientInsights(value: string) {
    this._clientInsights = value;
  }
  public resetClientInsights() {
    this._clientInsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInsightsInput() {
    return this._clientInsights;
  }

  // significant_log_throttle - computed: false, optional: true, required: false
  private _significantLogThrottle?: string; 
  public get significantLogThrottle() {
    return this.getStringAttribute('significant_log_throttle');
  }
  public set significantLogThrottle(value: string) {
    this._significantLogThrottle = value;
  }
  public resetSignificantLogThrottle() {
    this._significantLogThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get significantLogThrottleInput() {
    return this._significantLogThrottle;
  }

  // udf_log_throttle - computed: false, optional: true, required: false
  private _udfLogThrottle?: string; 
  public get udfLogThrottle() {
    return this.getStringAttribute('udf_log_throttle');
  }
  public set udfLogThrottle(value: string) {
    this._udfLogThrottle = value;
  }
  public resetUdfLogThrottle() {
    this._udfLogThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udfLogThrottleInput() {
    return this._udfLogThrottle;
  }

  // client_insights_sampling - computed: false, optional: true, required: false
  private _clientInsightsSampling = new VirtualserviceAnalyticsPolicyClientInsightsSamplingList(this, "client_insights_sampling", true);
  public get clientInsightsSampling() {
    return this._clientInsightsSampling;
  }
  public putClientInsightsSampling(value: VirtualserviceAnalyticsPolicyClientInsightsSampling[] | cdktf.IResolvable) {
    this._clientInsightsSampling.internalValue = value;
  }
  public resetClientInsightsSampling() {
    this._clientInsightsSampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInsightsSamplingInput() {
    return this._clientInsightsSampling.internalValue;
  }

  // client_log_filters - computed: false, optional: true, required: false
  private _clientLogFilters = new VirtualserviceAnalyticsPolicyClientLogFiltersList(this, "client_log_filters", false);
  public get clientLogFilters() {
    return this._clientLogFilters;
  }
  public putClientLogFilters(value: VirtualserviceAnalyticsPolicyClientLogFilters[] | cdktf.IResolvable) {
    this._clientLogFilters.internalValue = value;
  }
  public resetClientLogFilters() {
    this._clientLogFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLogFiltersInput() {
    return this._clientLogFilters.internalValue;
  }

  // full_client_logs - computed: false, optional: true, required: false
  private _fullClientLogs = new VirtualserviceAnalyticsPolicyFullClientLogsList(this, "full_client_logs", true);
  public get fullClientLogs() {
    return this._fullClientLogs;
  }
  public putFullClientLogs(value: VirtualserviceAnalyticsPolicyFullClientLogs[] | cdktf.IResolvable) {
    this._fullClientLogs.internalValue = value;
  }
  public resetFullClientLogs() {
    this._fullClientLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullClientLogsInput() {
    return this._fullClientLogs.internalValue;
  }

  // learning_log_policy - computed: false, optional: true, required: false
  private _learningLogPolicy = new VirtualserviceAnalyticsPolicyLearningLogPolicyList(this, "learning_log_policy", true);
  public get learningLogPolicy() {
    return this._learningLogPolicy;
  }
  public putLearningLogPolicy(value: VirtualserviceAnalyticsPolicyLearningLogPolicy[] | cdktf.IResolvable) {
    this._learningLogPolicy.internalValue = value;
  }
  public resetLearningLogPolicy() {
    this._learningLogPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningLogPolicyInput() {
    return this._learningLogPolicy.internalValue;
  }

  // metrics_realtime_update - computed: false, optional: true, required: false
  private _metricsRealtimeUpdate = new VirtualserviceAnalyticsPolicyMetricsRealtimeUpdateList(this, "metrics_realtime_update", true);
  public get metricsRealtimeUpdate() {
    return this._metricsRealtimeUpdate;
  }
  public putMetricsRealtimeUpdate(value: VirtualserviceAnalyticsPolicyMetricsRealtimeUpdate[] | cdktf.IResolvable) {
    this._metricsRealtimeUpdate.internalValue = value;
  }
  public resetMetricsRealtimeUpdate() {
    this._metricsRealtimeUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsRealtimeUpdateInput() {
    return this._metricsRealtimeUpdate.internalValue;
  }
}

export class VirtualserviceAnalyticsPolicyList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceAnalyticsPolicy[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceAnalyticsPolicyOutputReference {
    return new VirtualserviceAnalyticsPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#version Virtualservice#version}
  */
  readonly version?: string;
}

export function virtualserviceConfigpbAttributesToTerraform(struct?: VirtualserviceConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function virtualserviceConfigpbAttributesToHclTerraform(struct?: VirtualserviceConfigpbAttributes | cdktf.IResolvable): any {
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

export class VirtualserviceConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class VirtualserviceConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceConfigpbAttributesOutputReference {
    return new VirtualserviceConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceConnectionsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#content_type Virtualservice#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#file_content Virtualservice#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#file_length Virtualservice#file_length}
  */
  readonly fileLength?: string;
}

export function virtualserviceConnectionsRateLimitActionFileToTerraform(struct?: VirtualserviceConnectionsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function virtualserviceConnectionsRateLimitActionFileToHclTerraform(struct?: VirtualserviceConnectionsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceConnectionsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceConnectionsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceConnectionsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class VirtualserviceConnectionsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceConnectionsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceConnectionsRateLimitActionFileOutputReference {
    return new VirtualserviceConnectionsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceConnectionsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#end_index Virtualservice#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#start_index Virtualservice#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#str_value Virtualservice#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceConnectionsRateLimitActionRedirectHostTokensToTerraform(struct?: VirtualserviceConnectionsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceConnectionsRateLimitActionRedirectHostTokensToHclTerraform(struct?: VirtualserviceConnectionsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class VirtualserviceConnectionsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceConnectionsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceConnectionsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class VirtualserviceConnectionsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceConnectionsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceConnectionsRateLimitActionRedirectHostTokensOutputReference {
    return new VirtualserviceConnectionsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceConnectionsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#tokens Virtualservice#tokens}
  */
  readonly tokens: VirtualserviceConnectionsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function virtualserviceConnectionsRateLimitActionRedirectHostToTerraform(struct?: VirtualserviceConnectionsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(virtualserviceConnectionsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function virtualserviceConnectionsRateLimitActionRedirectHostToHclTerraform(struct?: VirtualserviceConnectionsRateLimitActionRedirectHost | cdktf.IResolvable): any {
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
    tokens: {
      value: cdktf.listMapperHcl(virtualserviceConnectionsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceConnectionsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceConnectionsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceConnectionsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceConnectionsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new VirtualserviceConnectionsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: VirtualserviceConnectionsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class VirtualserviceConnectionsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceConnectionsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceConnectionsRateLimitActionRedirectHostOutputReference {
    return new VirtualserviceConnectionsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceConnectionsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#end_index Virtualservice#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#start_index Virtualservice#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#str_value Virtualservice#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceConnectionsRateLimitActionRedirectPathTokensToTerraform(struct?: VirtualserviceConnectionsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceConnectionsRateLimitActionRedirectPathTokensToHclTerraform(struct?: VirtualserviceConnectionsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class VirtualserviceConnectionsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceConnectionsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceConnectionsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class VirtualserviceConnectionsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceConnectionsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceConnectionsRateLimitActionRedirectPathTokensOutputReference {
    return new VirtualserviceConnectionsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceConnectionsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#tokens Virtualservice#tokens}
  */
  readonly tokens: VirtualserviceConnectionsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function virtualserviceConnectionsRateLimitActionRedirectPathToTerraform(struct?: VirtualserviceConnectionsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(virtualserviceConnectionsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function virtualserviceConnectionsRateLimitActionRedirectPathToHclTerraform(struct?: VirtualserviceConnectionsRateLimitActionRedirectPath | cdktf.IResolvable): any {
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
    tokens: {
      value: cdktf.listMapperHcl(virtualserviceConnectionsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceConnectionsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceConnectionsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceConnectionsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceConnectionsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new VirtualserviceConnectionsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: VirtualserviceConnectionsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class VirtualserviceConnectionsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceConnectionsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceConnectionsRateLimitActionRedirectPathOutputReference {
    return new VirtualserviceConnectionsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceConnectionsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#add_string Virtualservice#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#keep_query Virtualservice#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#port Virtualservice#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#protocol Virtualservice#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#status_code Virtualservice#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#host Virtualservice#host}
  */
  readonly host?: VirtualserviceConnectionsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#path Virtualservice#path}
  */
  readonly path?: VirtualserviceConnectionsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function virtualserviceConnectionsRateLimitActionRedirectToTerraform(struct?: VirtualserviceConnectionsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(virtualserviceConnectionsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(virtualserviceConnectionsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function virtualserviceConnectionsRateLimitActionRedirectToHclTerraform(struct?: VirtualserviceConnectionsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(virtualserviceConnectionsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceConnectionsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(virtualserviceConnectionsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceConnectionsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceConnectionsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceConnectionsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceConnectionsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // status_code - computed: false, optional: true, required: false
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

  // host - computed: false, optional: true, required: false
  private _host = new VirtualserviceConnectionsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: VirtualserviceConnectionsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new VirtualserviceConnectionsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: VirtualserviceConnectionsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
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

export class VirtualserviceConnectionsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceConnectionsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceConnectionsRateLimitActionRedirectOutputReference {
    return new VirtualserviceConnectionsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceConnectionsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#status_code Virtualservice#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#file Virtualservice#file}
  */
  readonly file?: VirtualserviceConnectionsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#redirect Virtualservice#redirect}
  */
  readonly redirect?: VirtualserviceConnectionsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function virtualserviceConnectionsRateLimitActionToTerraform(struct?: VirtualserviceConnectionsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(virtualserviceConnectionsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(virtualserviceConnectionsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function virtualserviceConnectionsRateLimitActionToHclTerraform(struct?: VirtualserviceConnectionsRateLimitAction | cdktf.IResolvable): any {
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
    file: {
      value: cdktf.listMapperHcl(virtualserviceConnectionsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceConnectionsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(virtualserviceConnectionsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceConnectionsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceConnectionsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceConnectionsRateLimitAction | cdktf.IResolvable | undefined {
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
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceConnectionsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
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
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
  }

  // status_code - computed: false, optional: true, required: false
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

  // file - computed: false, optional: true, required: false
  private _file = new VirtualserviceConnectionsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: VirtualserviceConnectionsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new VirtualserviceConnectionsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: VirtualserviceConnectionsRateLimitActionRedirect[] | cdktf.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class VirtualserviceConnectionsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceConnectionsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceConnectionsRateLimitActionOutputReference {
    return new VirtualserviceConnectionsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceConnectionsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#burst_sz Virtualservice#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#count Virtualservice#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#name Virtualservice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#period Virtualservice#period}
  */
  readonly period?: string;
}

export function virtualserviceConnectionsRateLimitRateLimiterToTerraform(struct?: VirtualserviceConnectionsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function virtualserviceConnectionsRateLimitRateLimiterToHclTerraform(struct?: VirtualserviceConnectionsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceConnectionsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceConnectionsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceConnectionsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}

export class VirtualserviceConnectionsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceConnectionsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceConnectionsRateLimitRateLimiterOutputReference {
    return new VirtualserviceConnectionsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceConnectionsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#explicit_tracking Virtualservice#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#fine_grain Virtualservice#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#http_cookie Virtualservice#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#http_header Virtualservice#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#action Virtualservice#action}
  */
  readonly action: VirtualserviceConnectionsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#rate_limiter Virtualservice#rate_limiter}
  */
  readonly rateLimiter?: VirtualserviceConnectionsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function virtualserviceConnectionsRateLimitToTerraform(struct?: VirtualserviceConnectionsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(virtualserviceConnectionsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(virtualserviceConnectionsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function virtualserviceConnectionsRateLimitToHclTerraform(struct?: VirtualserviceConnectionsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(virtualserviceConnectionsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceConnectionsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(virtualserviceConnectionsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceConnectionsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceConnectionsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceConnectionsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceConnectionsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new VirtualserviceConnectionsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: VirtualserviceConnectionsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new VirtualserviceConnectionsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: VirtualserviceConnectionsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class VirtualserviceConnectionsRateLimitList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceConnectionsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceConnectionsRateLimitOutputReference {
    return new VirtualserviceConnectionsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceContentRewriteRspRewriteRulesPairsReplacementString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#val Virtualservice#val}
  */
  readonly val?: string;
}

export function virtualserviceContentRewriteRspRewriteRulesPairsReplacementStringToTerraform(struct?: VirtualserviceContentRewriteRspRewriteRulesPairsReplacementString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    val: cdktf.stringToTerraform(struct!.val),
  }
}


export function virtualserviceContentRewriteRspRewriteRulesPairsReplacementStringToHclTerraform(struct?: VirtualserviceContentRewriteRspRewriteRulesPairsReplacementString | cdktf.IResolvable): any {
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
    val: {
      value: cdktf.stringToHclTerraform(struct!.val),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceContentRewriteRspRewriteRulesPairsReplacementStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceContentRewriteRspRewriteRulesPairsReplacementString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._val !== undefined) {
      hasAnyValues = true;
      internalValueResult.val = this._val;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceContentRewriteRspRewriteRulesPairsReplacementString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._val = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._val = value.val;
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

  // val - computed: true, optional: true, required: false
  private _val?: string; 
  public get val() {
    return this.getStringAttribute('val');
  }
  public set val(value: string) {
    this._val = value;
  }
  public resetVal() {
    this._val = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valInput() {
    return this._val;
  }
}

export class VirtualserviceContentRewriteRspRewriteRulesPairsReplacementStringList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceContentRewriteRspRewriteRulesPairsReplacementString[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceContentRewriteRspRewriteRulesPairsReplacementStringOutputReference {
    return new VirtualserviceContentRewriteRspRewriteRulesPairsReplacementStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceContentRewriteRspRewriteRulesPairsSearchString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#val Virtualservice#val}
  */
  readonly val: string;
}

export function virtualserviceContentRewriteRspRewriteRulesPairsSearchStringToTerraform(struct?: VirtualserviceContentRewriteRspRewriteRulesPairsSearchString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    val: cdktf.stringToTerraform(struct!.val),
  }
}


export function virtualserviceContentRewriteRspRewriteRulesPairsSearchStringToHclTerraform(struct?: VirtualserviceContentRewriteRspRewriteRulesPairsSearchString | cdktf.IResolvable): any {
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
    val: {
      value: cdktf.stringToHclTerraform(struct!.val),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceContentRewriteRspRewriteRulesPairsSearchStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceContentRewriteRspRewriteRulesPairsSearchString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._val !== undefined) {
      hasAnyValues = true;
      internalValueResult.val = this._val;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceContentRewriteRspRewriteRulesPairsSearchString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._val = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._val = value.val;
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

  // val - computed: false, optional: false, required: true
  private _val?: string; 
  public get val() {
    return this.getStringAttribute('val');
  }
  public set val(value: string) {
    this._val = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valInput() {
    return this._val;
  }
}

export class VirtualserviceContentRewriteRspRewriteRulesPairsSearchStringList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceContentRewriteRspRewriteRulesPairsSearchString[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceContentRewriteRspRewriteRulesPairsSearchStringOutputReference {
    return new VirtualserviceContentRewriteRspRewriteRulesPairsSearchStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceContentRewriteRspRewriteRulesPairs {
  /**
  * replacement_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#replacement_string Virtualservice#replacement_string}
  */
  readonly replacementString?: VirtualserviceContentRewriteRspRewriteRulesPairsReplacementString[] | cdktf.IResolvable;
  /**
  * search_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#search_string Virtualservice#search_string}
  */
  readonly searchString: VirtualserviceContentRewriteRspRewriteRulesPairsSearchString[] | cdktf.IResolvable;
}

export function virtualserviceContentRewriteRspRewriteRulesPairsToTerraform(struct?: VirtualserviceContentRewriteRspRewriteRulesPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replacement_string: cdktf.listMapper(virtualserviceContentRewriteRspRewriteRulesPairsReplacementStringToTerraform, true)(struct!.replacementString),
    search_string: cdktf.listMapper(virtualserviceContentRewriteRspRewriteRulesPairsSearchStringToTerraform, true)(struct!.searchString),
  }
}


export function virtualserviceContentRewriteRspRewriteRulesPairsToHclTerraform(struct?: VirtualserviceContentRewriteRspRewriteRulesPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replacement_string: {
      value: cdktf.listMapperHcl(virtualserviceContentRewriteRspRewriteRulesPairsReplacementStringToHclTerraform, true)(struct!.replacementString),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceContentRewriteRspRewriteRulesPairsReplacementStringList",
    },
    search_string: {
      value: cdktf.listMapperHcl(virtualserviceContentRewriteRspRewriteRulesPairsSearchStringToHclTerraform, true)(struct!.searchString),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceContentRewriteRspRewriteRulesPairsSearchStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceContentRewriteRspRewriteRulesPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceContentRewriteRspRewriteRulesPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replacementString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementString = this._replacementString?.internalValue;
    }
    if (this._searchString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchString = this._searchString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceContentRewriteRspRewriteRulesPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replacementString.internalValue = undefined;
      this._searchString.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replacementString.internalValue = value.replacementString;
      this._searchString.internalValue = value.searchString;
    }
  }

  // replacement_string - computed: false, optional: true, required: false
  private _replacementString = new VirtualserviceContentRewriteRspRewriteRulesPairsReplacementStringList(this, "replacement_string", true);
  public get replacementString() {
    return this._replacementString;
  }
  public putReplacementString(value: VirtualserviceContentRewriteRspRewriteRulesPairsReplacementString[] | cdktf.IResolvable) {
    this._replacementString.internalValue = value;
  }
  public resetReplacementString() {
    this._replacementString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementStringInput() {
    return this._replacementString.internalValue;
  }

  // search_string - computed: false, optional: false, required: true
  private _searchString = new VirtualserviceContentRewriteRspRewriteRulesPairsSearchStringList(this, "search_string", true);
  public get searchString() {
    return this._searchString;
  }
  public putSearchString(value: VirtualserviceContentRewriteRspRewriteRulesPairsSearchString[] | cdktf.IResolvable) {
    this._searchString.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchStringInput() {
    return this._searchString.internalValue;
  }
}

export class VirtualserviceContentRewriteRspRewriteRulesPairsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceContentRewriteRspRewriteRulesPairs[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceContentRewriteRspRewriteRulesPairsOutputReference {
    return new VirtualserviceContentRewriteRspRewriteRulesPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceContentRewriteRspRewriteRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#enable Virtualservice#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#index Virtualservice#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#name Virtualservice#name}
  */
  readonly name?: string;
  /**
  * pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#pairs Virtualservice#pairs}
  */
  readonly pairs?: VirtualserviceContentRewriteRspRewriteRulesPairs[] | cdktf.IResolvable;
}

export function virtualserviceContentRewriteRspRewriteRulesToTerraform(struct?: VirtualserviceContentRewriteRspRewriteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    pairs: cdktf.listMapper(virtualserviceContentRewriteRspRewriteRulesPairsToTerraform, true)(struct!.pairs),
  }
}


export function virtualserviceContentRewriteRspRewriteRulesToHclTerraform(struct?: VirtualserviceContentRewriteRspRewriteRules | cdktf.IResolvable): any {
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
    pairs: {
      value: cdktf.listMapperHcl(virtualserviceContentRewriteRspRewriteRulesPairsToHclTerraform, true)(struct!.pairs),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceContentRewriteRspRewriteRulesPairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceContentRewriteRspRewriteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceContentRewriteRspRewriteRules | cdktf.IResolvable | undefined {
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
    if (this._pairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairs = this._pairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceContentRewriteRspRewriteRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._name = undefined;
      this._pairs.internalValue = undefined;
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
      this._pairs.internalValue = value.pairs;
    }
  }

  // enable - computed: true, optional: true, required: false
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

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // pairs - computed: false, optional: true, required: false
  private _pairs = new VirtualserviceContentRewriteRspRewriteRulesPairsList(this, "pairs", false);
  public get pairs() {
    return this._pairs;
  }
  public putPairs(value: VirtualserviceContentRewriteRspRewriteRulesPairs[] | cdktf.IResolvable) {
    this._pairs.internalValue = value;
  }
  public resetPairs() {
    this._pairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairsInput() {
    return this._pairs.internalValue;
  }
}

export class VirtualserviceContentRewriteRspRewriteRulesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceContentRewriteRspRewriteRules[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceContentRewriteRspRewriteRulesOutputReference {
    return new VirtualserviceContentRewriteRspRewriteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceContentRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#rewritable_content_ref Virtualservice#rewritable_content_ref}
  */
  readonly rewritableContentRef?: string;
  /**
  * rsp_rewrite_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#rsp_rewrite_rules Virtualservice#rsp_rewrite_rules}
  */
  readonly rspRewriteRules?: VirtualserviceContentRewriteRspRewriteRules[] | cdktf.IResolvable;
}

export function virtualserviceContentRewriteToTerraform(struct?: VirtualserviceContentRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rewritable_content_ref: cdktf.stringToTerraform(struct!.rewritableContentRef),
    rsp_rewrite_rules: cdktf.listMapper(virtualserviceContentRewriteRspRewriteRulesToTerraform, true)(struct!.rspRewriteRules),
  }
}


export function virtualserviceContentRewriteToHclTerraform(struct?: VirtualserviceContentRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rewritable_content_ref: {
      value: cdktf.stringToHclTerraform(struct!.rewritableContentRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rsp_rewrite_rules: {
      value: cdktf.listMapperHcl(virtualserviceContentRewriteRspRewriteRulesToHclTerraform, true)(struct!.rspRewriteRules),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceContentRewriteRspRewriteRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceContentRewriteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceContentRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rewritableContentRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritableContentRef = this._rewritableContentRef;
    }
    if (this._rspRewriteRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspRewriteRules = this._rspRewriteRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceContentRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rewritableContentRef = undefined;
      this._rspRewriteRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rewritableContentRef = value.rewritableContentRef;
      this._rspRewriteRules.internalValue = value.rspRewriteRules;
    }
  }

  // rewritable_content_ref - computed: true, optional: true, required: false
  private _rewritableContentRef?: string; 
  public get rewritableContentRef() {
    return this.getStringAttribute('rewritable_content_ref');
  }
  public set rewritableContentRef(value: string) {
    this._rewritableContentRef = value;
  }
  public resetRewritableContentRef() {
    this._rewritableContentRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritableContentRefInput() {
    return this._rewritableContentRef;
  }

  // rsp_rewrite_rules - computed: false, optional: true, required: false
  private _rspRewriteRules = new VirtualserviceContentRewriteRspRewriteRulesList(this, "rsp_rewrite_rules", false);
  public get rspRewriteRules() {
    return this._rspRewriteRules;
  }
  public putRspRewriteRules(value: VirtualserviceContentRewriteRspRewriteRules[] | cdktf.IResolvable) {
    this._rspRewriteRules.internalValue = value;
  }
  public resetRspRewriteRules() {
    this._rspRewriteRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspRewriteRulesInput() {
    return this._rspRewriteRules.internalValue;
  }
}

export class VirtualserviceContentRewriteList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceContentRewrite[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceContentRewriteOutputReference {
    return new VirtualserviceContentRewriteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceDnsInfoCname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#cname Virtualservice#cname}
  */
  readonly cname: string;
}

export function virtualserviceDnsInfoCnameToTerraform(struct?: VirtualserviceDnsInfoCname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cname: cdktf.stringToTerraform(struct!.cname),
  }
}


export function virtualserviceDnsInfoCnameToHclTerraform(struct?: VirtualserviceDnsInfoCname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cname: {
      value: cdktf.stringToHclTerraform(struct!.cname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceDnsInfoCnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceDnsInfoCname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cname !== undefined) {
      hasAnyValues = true;
      internalValueResult.cname = this._cname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceDnsInfoCname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cname = value.cname;
    }
  }

  // cname - computed: false, optional: false, required: true
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }
}

export class VirtualserviceDnsInfoCnameList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceDnsInfoCname[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceDnsInfoCnameOutputReference {
    return new VirtualserviceDnsInfoCnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceDnsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#algorithm Virtualservice#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#fqdn Virtualservice#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#metadata Virtualservice#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#num_records_in_response Virtualservice#num_records_in_response}
  */
  readonly numRecordsInResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ttl Virtualservice#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type?: string;
  /**
  * cname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#cname Virtualservice#cname}
  */
  readonly cname?: VirtualserviceDnsInfoCname[] | cdktf.IResolvable;
}

export function virtualserviceDnsInfoToTerraform(struct?: VirtualserviceDnsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    num_records_in_response: cdktf.stringToTerraform(struct!.numRecordsInResponse),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
    cname: cdktf.listMapper(virtualserviceDnsInfoCnameToTerraform, true)(struct!.cname),
  }
}


export function virtualserviceDnsInfoToHclTerraform(struct?: VirtualserviceDnsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_records_in_response: {
      value: cdktf.stringToHclTerraform(struct!.numRecordsInResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
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
    cname: {
      value: cdktf.listMapperHcl(virtualserviceDnsInfoCnameToHclTerraform, true)(struct!.cname),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceDnsInfoCnameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceDnsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceDnsInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._numRecordsInResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRecordsInResponse = this._numRecordsInResponse;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cname = this._cname?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceDnsInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._fqdn = undefined;
      this._metadata = undefined;
      this._numRecordsInResponse = undefined;
      this._ttl = undefined;
      this._type = undefined;
      this._cname.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._fqdn = value.fqdn;
      this._metadata = value.metadata;
      this._numRecordsInResponse = value.numRecordsInResponse;
      this._ttl = value.ttl;
      this._type = value.type;
      this._cname.internalValue = value.cname;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // num_records_in_response - computed: true, optional: true, required: false
  private _numRecordsInResponse?: string; 
  public get numRecordsInResponse() {
    return this.getStringAttribute('num_records_in_response');
  }
  public set numRecordsInResponse(value: string) {
    this._numRecordsInResponse = value;
  }
  public resetNumRecordsInResponse() {
    this._numRecordsInResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRecordsInResponseInput() {
    return this._numRecordsInResponse;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // cname - computed: false, optional: true, required: false
  private _cname = new VirtualserviceDnsInfoCnameList(this, "cname", true);
  public get cname() {
    return this._cname;
  }
  public putCname(value: VirtualserviceDnsInfoCname[] | cdktf.IResolvable) {
    this._cname.internalValue = value;
  }
  public resetCname() {
    this._cname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname.internalValue;
  }
}

export class VirtualserviceDnsInfoList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceDnsInfo[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceDnsInfoOutputReference {
    return new VirtualserviceDnsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceDnsPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#dns_policy_ref Virtualservice#dns_policy_ref}
  */
  readonly dnsPolicyRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#index Virtualservice#index}
  */
  readonly index: string;
}

export function virtualserviceDnsPoliciesToTerraform(struct?: VirtualserviceDnsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_policy_ref: cdktf.stringToTerraform(struct!.dnsPolicyRef),
    index: cdktf.stringToTerraform(struct!.index),
  }
}


export function virtualserviceDnsPoliciesToHclTerraform(struct?: VirtualserviceDnsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_policy_ref: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicyRef),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceDnsPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceDnsPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsPolicyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicyRef = this._dnsPolicyRef;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceDnsPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsPolicyRef = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsPolicyRef = value.dnsPolicyRef;
      this._index = value.index;
    }
  }

  // dns_policy_ref - computed: false, optional: false, required: true
  private _dnsPolicyRef?: string; 
  public get dnsPolicyRef() {
    return this.getStringAttribute('dns_policy_ref');
  }
  public set dnsPolicyRef(value: string) {
    this._dnsPolicyRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyRefInput() {
    return this._dnsPolicyRef;
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
}

export class VirtualserviceDnsPoliciesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceDnsPolicies[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceDnsPoliciesOutputReference {
    return new VirtualserviceDnsPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceHttpPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#http_policy_set_ref Virtualservice#http_policy_set_ref}
  */
  readonly httpPolicySetRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#index Virtualservice#index}
  */
  readonly index: string;
}

export function virtualserviceHttpPoliciesToTerraform(struct?: VirtualserviceHttpPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_policy_set_ref: cdktf.stringToTerraform(struct!.httpPolicySetRef),
    index: cdktf.stringToTerraform(struct!.index),
  }
}


export function virtualserviceHttpPoliciesToHclTerraform(struct?: VirtualserviceHttpPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_policy_set_ref: {
      value: cdktf.stringToHclTerraform(struct!.httpPolicySetRef),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceHttpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceHttpPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPolicySetRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPolicySetRef = this._httpPolicySetRef;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceHttpPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpPolicySetRef = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpPolicySetRef = value.httpPolicySetRef;
      this._index = value.index;
    }
  }

  // http_policy_set_ref - computed: false, optional: false, required: true
  private _httpPolicySetRef?: string; 
  public get httpPolicySetRef() {
    return this.getStringAttribute('http_policy_set_ref');
  }
  public set httpPolicySetRef(value: string) {
    this._httpPolicySetRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPolicySetRefInput() {
    return this._httpPolicySetRef;
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
}

export class VirtualserviceHttpPoliciesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceHttpPolicies[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceHttpPoliciesOutputReference {
    return new VirtualserviceHttpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceJwtConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#audience Virtualservice#audience}
  */
  readonly audience: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#jwt_location Virtualservice#jwt_location}
  */
  readonly jwtLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#jwt_name Virtualservice#jwt_name}
  */
  readonly jwtName?: string;
}

export function virtualserviceJwtConfigToTerraform(struct?: VirtualserviceJwtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    jwt_location: cdktf.stringToTerraform(struct!.jwtLocation),
    jwt_name: cdktf.stringToTerraform(struct!.jwtName),
  }
}


export function virtualserviceJwtConfigToHclTerraform(struct?: VirtualserviceJwtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_location: {
      value: cdktf.stringToHclTerraform(struct!.jwtLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_name: {
      value: cdktf.stringToHclTerraform(struct!.jwtName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceJwtConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceJwtConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._jwtLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtLocation = this._jwtLocation;
    }
    if (this._jwtName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtName = this._jwtName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceJwtConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._jwtLocation = undefined;
      this._jwtName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._jwtLocation = value.jwtLocation;
      this._jwtName = value.jwtName;
    }
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // jwt_location - computed: false, optional: true, required: false
  private _jwtLocation?: string; 
  public get jwtLocation() {
    return this.getStringAttribute('jwt_location');
  }
  public set jwtLocation(value: string) {
    this._jwtLocation = value;
  }
  public resetJwtLocation() {
    this._jwtLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtLocationInput() {
    return this._jwtLocation;
  }

  // jwt_name - computed: true, optional: true, required: false
  private _jwtName?: string; 
  public get jwtName() {
    return this.getStringAttribute('jwt_name');
  }
  public set jwtName(value: string) {
    this._jwtName = value;
  }
  public resetJwtName() {
    this._jwtName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtNameInput() {
    return this._jwtName;
  }
}

export class VirtualserviceJwtConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceJwtConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceJwtConfigOutputReference {
    return new VirtualserviceJwtConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceL4Policies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#index Virtualservice#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#l4_policy_set_ref Virtualservice#l4_policy_set_ref}
  */
  readonly l4PolicySetRef: string;
}

export function virtualserviceL4PoliciesToTerraform(struct?: VirtualserviceL4Policies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    l4_policy_set_ref: cdktf.stringToTerraform(struct!.l4PolicySetRef),
  }
}


export function virtualserviceL4PoliciesToHclTerraform(struct?: VirtualserviceL4Policies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l4_policy_set_ref: {
      value: cdktf.stringToHclTerraform(struct!.l4PolicySetRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceL4PoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceL4Policies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._l4PolicySetRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4PolicySetRef = this._l4PolicySetRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceL4Policies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._l4PolicySetRef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._l4PolicySetRef = value.l4PolicySetRef;
    }
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

  // l4_policy_set_ref - computed: false, optional: false, required: true
  private _l4PolicySetRef?: string; 
  public get l4PolicySetRef() {
    return this.getStringAttribute('l4_policy_set_ref');
  }
  public set l4PolicySetRef(value: string) {
    this._l4PolicySetRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l4PolicySetRefInput() {
    return this._l4PolicySetRef;
  }
}

export class VirtualserviceL4PoliciesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceL4Policies[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceL4PoliciesOutputReference {
    return new VirtualserviceL4PoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceLdapVsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#realm Virtualservice#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#se_auth_ldap_bind_timeout Virtualservice#se_auth_ldap_bind_timeout}
  */
  readonly seAuthLdapBindTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#se_auth_ldap_cache_size Virtualservice#se_auth_ldap_cache_size}
  */
  readonly seAuthLdapCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#se_auth_ldap_connect_timeout Virtualservice#se_auth_ldap_connect_timeout}
  */
  readonly seAuthLdapConnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#se_auth_ldap_conns_per_server Virtualservice#se_auth_ldap_conns_per_server}
  */
  readonly seAuthLdapConnsPerServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#se_auth_ldap_reconnect_timeout Virtualservice#se_auth_ldap_reconnect_timeout}
  */
  readonly seAuthLdapReconnectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#se_auth_ldap_request_timeout Virtualservice#se_auth_ldap_request_timeout}
  */
  readonly seAuthLdapRequestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#se_auth_ldap_servers_failover_only Virtualservice#se_auth_ldap_servers_failover_only}
  */
  readonly seAuthLdapServersFailoverOnly?: string;
}

export function virtualserviceLdapVsConfigToTerraform(struct?: VirtualserviceLdapVsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realm: cdktf.stringToTerraform(struct!.realm),
    se_auth_ldap_bind_timeout: cdktf.stringToTerraform(struct!.seAuthLdapBindTimeout),
    se_auth_ldap_cache_size: cdktf.stringToTerraform(struct!.seAuthLdapCacheSize),
    se_auth_ldap_connect_timeout: cdktf.stringToTerraform(struct!.seAuthLdapConnectTimeout),
    se_auth_ldap_conns_per_server: cdktf.stringToTerraform(struct!.seAuthLdapConnsPerServer),
    se_auth_ldap_reconnect_timeout: cdktf.stringToTerraform(struct!.seAuthLdapReconnectTimeout),
    se_auth_ldap_request_timeout: cdktf.stringToTerraform(struct!.seAuthLdapRequestTimeout),
    se_auth_ldap_servers_failover_only: cdktf.stringToTerraform(struct!.seAuthLdapServersFailoverOnly),
  }
}


export function virtualserviceLdapVsConfigToHclTerraform(struct?: VirtualserviceLdapVsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_bind_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapBindTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_conns_per_server: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapConnsPerServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_reconnect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapReconnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_auth_ldap_servers_failover_only: {
      value: cdktf.stringToHclTerraform(struct!.seAuthLdapServersFailoverOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceLdapVsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceLdapVsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._seAuthLdapBindTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapBindTimeout = this._seAuthLdapBindTimeout;
    }
    if (this._seAuthLdapCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapCacheSize = this._seAuthLdapCacheSize;
    }
    if (this._seAuthLdapConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapConnectTimeout = this._seAuthLdapConnectTimeout;
    }
    if (this._seAuthLdapConnsPerServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapConnsPerServer = this._seAuthLdapConnsPerServer;
    }
    if (this._seAuthLdapReconnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapReconnectTimeout = this._seAuthLdapReconnectTimeout;
    }
    if (this._seAuthLdapRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapRequestTimeout = this._seAuthLdapRequestTimeout;
    }
    if (this._seAuthLdapServersFailoverOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.seAuthLdapServersFailoverOnly = this._seAuthLdapServersFailoverOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceLdapVsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._realm = undefined;
      this._seAuthLdapBindTimeout = undefined;
      this._seAuthLdapCacheSize = undefined;
      this._seAuthLdapConnectTimeout = undefined;
      this._seAuthLdapConnsPerServer = undefined;
      this._seAuthLdapReconnectTimeout = undefined;
      this._seAuthLdapRequestTimeout = undefined;
      this._seAuthLdapServersFailoverOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._realm = value.realm;
      this._seAuthLdapBindTimeout = value.seAuthLdapBindTimeout;
      this._seAuthLdapCacheSize = value.seAuthLdapCacheSize;
      this._seAuthLdapConnectTimeout = value.seAuthLdapConnectTimeout;
      this._seAuthLdapConnsPerServer = value.seAuthLdapConnsPerServer;
      this._seAuthLdapReconnectTimeout = value.seAuthLdapReconnectTimeout;
      this._seAuthLdapRequestTimeout = value.seAuthLdapRequestTimeout;
      this._seAuthLdapServersFailoverOnly = value.seAuthLdapServersFailoverOnly;
    }
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // se_auth_ldap_bind_timeout - computed: false, optional: true, required: false
  private _seAuthLdapBindTimeout?: string; 
  public get seAuthLdapBindTimeout() {
    return this.getStringAttribute('se_auth_ldap_bind_timeout');
  }
  public set seAuthLdapBindTimeout(value: string) {
    this._seAuthLdapBindTimeout = value;
  }
  public resetSeAuthLdapBindTimeout() {
    this._seAuthLdapBindTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapBindTimeoutInput() {
    return this._seAuthLdapBindTimeout;
  }

  // se_auth_ldap_cache_size - computed: false, optional: true, required: false
  private _seAuthLdapCacheSize?: string; 
  public get seAuthLdapCacheSize() {
    return this.getStringAttribute('se_auth_ldap_cache_size');
  }
  public set seAuthLdapCacheSize(value: string) {
    this._seAuthLdapCacheSize = value;
  }
  public resetSeAuthLdapCacheSize() {
    this._seAuthLdapCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapCacheSizeInput() {
    return this._seAuthLdapCacheSize;
  }

  // se_auth_ldap_connect_timeout - computed: false, optional: true, required: false
  private _seAuthLdapConnectTimeout?: string; 
  public get seAuthLdapConnectTimeout() {
    return this.getStringAttribute('se_auth_ldap_connect_timeout');
  }
  public set seAuthLdapConnectTimeout(value: string) {
    this._seAuthLdapConnectTimeout = value;
  }
  public resetSeAuthLdapConnectTimeout() {
    this._seAuthLdapConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapConnectTimeoutInput() {
    return this._seAuthLdapConnectTimeout;
  }

  // se_auth_ldap_conns_per_server - computed: false, optional: true, required: false
  private _seAuthLdapConnsPerServer?: string; 
  public get seAuthLdapConnsPerServer() {
    return this.getStringAttribute('se_auth_ldap_conns_per_server');
  }
  public set seAuthLdapConnsPerServer(value: string) {
    this._seAuthLdapConnsPerServer = value;
  }
  public resetSeAuthLdapConnsPerServer() {
    this._seAuthLdapConnsPerServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapConnsPerServerInput() {
    return this._seAuthLdapConnsPerServer;
  }

  // se_auth_ldap_reconnect_timeout - computed: false, optional: true, required: false
  private _seAuthLdapReconnectTimeout?: string; 
  public get seAuthLdapReconnectTimeout() {
    return this.getStringAttribute('se_auth_ldap_reconnect_timeout');
  }
  public set seAuthLdapReconnectTimeout(value: string) {
    this._seAuthLdapReconnectTimeout = value;
  }
  public resetSeAuthLdapReconnectTimeout() {
    this._seAuthLdapReconnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapReconnectTimeoutInput() {
    return this._seAuthLdapReconnectTimeout;
  }

  // se_auth_ldap_request_timeout - computed: false, optional: true, required: false
  private _seAuthLdapRequestTimeout?: string; 
  public get seAuthLdapRequestTimeout() {
    return this.getStringAttribute('se_auth_ldap_request_timeout');
  }
  public set seAuthLdapRequestTimeout(value: string) {
    this._seAuthLdapRequestTimeout = value;
  }
  public resetSeAuthLdapRequestTimeout() {
    this._seAuthLdapRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapRequestTimeoutInput() {
    return this._seAuthLdapRequestTimeout;
  }

  // se_auth_ldap_servers_failover_only - computed: false, optional: true, required: false
  private _seAuthLdapServersFailoverOnly?: string; 
  public get seAuthLdapServersFailoverOnly() {
    return this.getStringAttribute('se_auth_ldap_servers_failover_only');
  }
  public set seAuthLdapServersFailoverOnly(value: string) {
    this._seAuthLdapServersFailoverOnly = value;
  }
  public resetSeAuthLdapServersFailoverOnly() {
    this._seAuthLdapServersFailoverOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seAuthLdapServersFailoverOnlyInput() {
    return this._seAuthLdapServersFailoverOnly;
  }
}

export class VirtualserviceLdapVsConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceLdapVsConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceLdapVsConfigOutputReference {
    return new VirtualserviceLdapVsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#key Virtualservice#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#values Virtualservice#values}
  */
  readonly values?: string[];
}

export function virtualserviceMarkersToTerraform(struct?: VirtualserviceMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function virtualserviceMarkersToHclTerraform(struct?: VirtualserviceMarkers | cdktf.IResolvable): any {
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

export class VirtualserviceMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceMarkers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceMarkers | cdktf.IResolvable | undefined) {
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

export class VirtualserviceMarkersList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceMarkers[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceMarkersOutputReference {
    return new VirtualserviceMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceOauthVsConfigKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#aes_key Virtualservice#aes_key}
  */
  readonly aesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#hmac_key Virtualservice#hmac_key}
  */
  readonly hmacKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#name Virtualservice#name}
  */
  readonly name?: string;
}

export function virtualserviceOauthVsConfigKeyToTerraform(struct?: VirtualserviceOauthVsConfigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aes_key: cdktf.stringToTerraform(struct!.aesKey),
    hmac_key: cdktf.stringToTerraform(struct!.hmacKey),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualserviceOauthVsConfigKeyToHclTerraform(struct?: VirtualserviceOauthVsConfigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aes_key: {
      value: cdktf.stringToHclTerraform(struct!.aesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hmac_key: {
      value: cdktf.stringToHclTerraform(struct!.hmacKey),
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

export class VirtualserviceOauthVsConfigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceOauthVsConfigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.aesKey = this._aesKey;
    }
    if (this._hmacKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacKey = this._hmacKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceOauthVsConfigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aesKey = undefined;
      this._hmacKey = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aesKey = value.aesKey;
      this._hmacKey = value.hmacKey;
      this._name = value.name;
    }
  }

  // aes_key - computed: true, optional: true, required: false
  private _aesKey?: string; 
  public get aesKey() {
    return this.getStringAttribute('aes_key');
  }
  public set aesKey(value: string) {
    this._aesKey = value;
  }
  public resetAesKey() {
    this._aesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aesKeyInput() {
    return this._aesKey;
  }

  // hmac_key - computed: true, optional: true, required: false
  private _hmacKey?: string; 
  public get hmacKey() {
    return this.getStringAttribute('hmac_key');
  }
  public set hmacKey(value: string) {
    this._hmacKey = value;
  }
  public resetHmacKey() {
    this._hmacKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacKeyInput() {
    return this._hmacKey;
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
}

export class VirtualserviceOauthVsConfigKeyList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceOauthVsConfigKey[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceOauthVsConfigKeyOutputReference {
    return new VirtualserviceOauthVsConfigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#oidc_enable Virtualservice#oidc_enable}
  */
  readonly oidcEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#profile Virtualservice#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#userinfo Virtualservice#userinfo}
  */
  readonly userinfo?: string;
}

export function virtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfigToTerraform(struct?: VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc_enable: cdktf.stringToTerraform(struct!.oidcEnable),
    profile: cdktf.stringToTerraform(struct!.profile),
    userinfo: cdktf.stringToTerraform(struct!.userinfo),
  }
}


export function virtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfigToHclTerraform(struct?: VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc_enable: {
      value: cdktf.stringToHclTerraform(struct!.oidcEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userinfo: {
      value: cdktf.stringToHclTerraform(struct!.userinfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidcEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcEnable = this._oidcEnable;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._userinfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfo = this._userinfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oidcEnable = undefined;
      this._profile = undefined;
      this._userinfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oidcEnable = value.oidcEnable;
      this._profile = value.profile;
      this._userinfo = value.userinfo;
    }
  }

  // oidc_enable - computed: true, optional: true, required: false
  private _oidcEnable?: string; 
  public get oidcEnable() {
    return this.getStringAttribute('oidc_enable');
  }
  public set oidcEnable(value: string) {
    this._oidcEnable = value;
  }
  public resetOidcEnable() {
    this._oidcEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcEnableInput() {
    return this._oidcEnable;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // userinfo - computed: true, optional: true, required: false
  private _userinfo?: string; 
  public get userinfo() {
    return this.getStringAttribute('userinfo');
  }
  public set userinfo(value: string) {
    this._userinfo = value;
  }
  public resetUserinfo() {
    this._userinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoInput() {
    return this._userinfo;
  }
}

export class VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfigOutputReference {
    return new VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceOauthVsConfigOauthSettingsAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#client_id Virtualservice#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#client_secret Virtualservice#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#scopes Virtualservice#scopes}
  */
  readonly scopes?: string[];
  /**
  * oidc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#oidc_config Virtualservice#oidc_config}
  */
  readonly oidcConfig?: VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfig[] | cdktf.IResolvable;
}

export function virtualserviceOauthVsConfigOauthSettingsAppSettingsToTerraform(struct?: VirtualserviceOauthVsConfigOauthSettingsAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    oidc_config: cdktf.listMapper(virtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfigToTerraform, true)(struct!.oidcConfig),
  }
}


export function virtualserviceOauthVsConfigOauthSettingsAppSettingsToHclTerraform(struct?: VirtualserviceOauthVsConfigOauthSettingsAppSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oidc_config: {
      value: cdktf.listMapperHcl(virtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfigToHclTerraform, true)(struct!.oidcConfig),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceOauthVsConfigOauthSettingsAppSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceOauthVsConfigOauthSettingsAppSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._oidcConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcConfig = this._oidcConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceOauthVsConfigOauthSettingsAppSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scopes = undefined;
      this._oidcConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scopes = value.scopes;
      this._oidcConfig.internalValue = value.oidcConfig;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // oidc_config - computed: false, optional: true, required: false
  private _oidcConfig = new VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfigList(this, "oidc_config", true);
  public get oidcConfig() {
    return this._oidcConfig;
  }
  public putOidcConfig(value: VirtualserviceOauthVsConfigOauthSettingsAppSettingsOidcConfig[] | cdktf.IResolvable) {
    this._oidcConfig.internalValue = value;
  }
  public resetOidcConfig() {
    this._oidcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigInput() {
    return this._oidcConfig.internalValue;
  }
}

export class VirtualserviceOauthVsConfigOauthSettingsAppSettingsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceOauthVsConfigOauthSettingsAppSettings[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceOauthVsConfigOauthSettingsAppSettingsOutputReference {
    return new VirtualserviceOauthVsConfigOauthSettingsAppSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#audience Virtualservice#audience}
  */
  readonly audience: string;
}

export function virtualserviceOauthVsConfigOauthSettingsResourceServerJwtParamsToTerraform(struct?: VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
  }
}


export function virtualserviceOauthVsConfigOauthSettingsResourceServerJwtParamsToHclTerraform(struct?: VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
    }
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }
}

export class VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParamsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParams[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParamsOutputReference {
    return new VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#server_id Virtualservice#server_id}
  */
  readonly serverId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#server_secret Virtualservice#server_secret}
  */
  readonly serverSecret: string;
}

export function virtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParamsToTerraform(struct?: VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_id: cdktf.stringToTerraform(struct!.serverId),
    server_secret: cdktf.stringToTerraform(struct!.serverSecret),
  }
}


export function virtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParamsToHclTerraform(struct?: VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_id: {
      value: cdktf.stringToHclTerraform(struct!.serverId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_secret: {
      value: cdktf.stringToHclTerraform(struct!.serverSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverId = this._serverId;
    }
    if (this._serverSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSecret = this._serverSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverId = undefined;
      this._serverSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverId = value.serverId;
      this._serverSecret = value.serverSecret;
    }
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // server_secret - computed: false, optional: false, required: true
  private _serverSecret?: string; 
  public get serverSecret() {
    return this.getStringAttribute('server_secret');
  }
  public set serverSecret(value: string) {
    this._serverSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSecretInput() {
    return this._serverSecret;
  }
}

export class VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParamsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParams[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParamsOutputReference {
    return new VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceOauthVsConfigOauthSettingsResourceServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#access_type Virtualservice#access_type}
  */
  readonly accessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#introspection_data_timeout Virtualservice#introspection_data_timeout}
  */
  readonly introspectionDataTimeout?: string;
  /**
  * jwt_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#jwt_params Virtualservice#jwt_params}
  */
  readonly jwtParams?: VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParams[] | cdktf.IResolvable;
  /**
  * opaque_token_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#opaque_token_params Virtualservice#opaque_token_params}
  */
  readonly opaqueTokenParams?: VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParams[] | cdktf.IResolvable;
}

export function virtualserviceOauthVsConfigOauthSettingsResourceServerToTerraform(struct?: VirtualserviceOauthVsConfigOauthSettingsResourceServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    introspection_data_timeout: cdktf.stringToTerraform(struct!.introspectionDataTimeout),
    jwt_params: cdktf.listMapper(virtualserviceOauthVsConfigOauthSettingsResourceServerJwtParamsToTerraform, true)(struct!.jwtParams),
    opaque_token_params: cdktf.listMapper(virtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParamsToTerraform, true)(struct!.opaqueTokenParams),
  }
}


export function virtualserviceOauthVsConfigOauthSettingsResourceServerToHclTerraform(struct?: VirtualserviceOauthVsConfigOauthSettingsResourceServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    introspection_data_timeout: {
      value: cdktf.stringToHclTerraform(struct!.introspectionDataTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_params: {
      value: cdktf.listMapperHcl(virtualserviceOauthVsConfigOauthSettingsResourceServerJwtParamsToHclTerraform, true)(struct!.jwtParams),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParamsList",
    },
    opaque_token_params: {
      value: cdktf.listMapperHcl(virtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParamsToHclTerraform, true)(struct!.opaqueTokenParams),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceOauthVsConfigOauthSettingsResourceServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceOauthVsConfigOauthSettingsResourceServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._introspectionDataTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.introspectionDataTimeout = this._introspectionDataTimeout;
    }
    if (this._jwtParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtParams = this._jwtParams?.internalValue;
    }
    if (this._opaqueTokenParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaqueTokenParams = this._opaqueTokenParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceOauthVsConfigOauthSettingsResourceServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessType = undefined;
      this._introspectionDataTimeout = undefined;
      this._jwtParams.internalValue = undefined;
      this._opaqueTokenParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessType = value.accessType;
      this._introspectionDataTimeout = value.introspectionDataTimeout;
      this._jwtParams.internalValue = value.jwtParams;
      this._opaqueTokenParams.internalValue = value.opaqueTokenParams;
    }
  }

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // introspection_data_timeout - computed: false, optional: true, required: false
  private _introspectionDataTimeout?: string; 
  public get introspectionDataTimeout() {
    return this.getStringAttribute('introspection_data_timeout');
  }
  public set introspectionDataTimeout(value: string) {
    this._introspectionDataTimeout = value;
  }
  public resetIntrospectionDataTimeout() {
    this._introspectionDataTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionDataTimeoutInput() {
    return this._introspectionDataTimeout;
  }

  // jwt_params - computed: false, optional: true, required: false
  private _jwtParams = new VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParamsList(this, "jwt_params", true);
  public get jwtParams() {
    return this._jwtParams;
  }
  public putJwtParams(value: VirtualserviceOauthVsConfigOauthSettingsResourceServerJwtParams[] | cdktf.IResolvable) {
    this._jwtParams.internalValue = value;
  }
  public resetJwtParams() {
    this._jwtParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtParamsInput() {
    return this._jwtParams.internalValue;
  }

  // opaque_token_params - computed: false, optional: true, required: false
  private _opaqueTokenParams = new VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParamsList(this, "opaque_token_params", true);
  public get opaqueTokenParams() {
    return this._opaqueTokenParams;
  }
  public putOpaqueTokenParams(value: VirtualserviceOauthVsConfigOauthSettingsResourceServerOpaqueTokenParams[] | cdktf.IResolvable) {
    this._opaqueTokenParams.internalValue = value;
  }
  public resetOpaqueTokenParams() {
    this._opaqueTokenParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaqueTokenParamsInput() {
    return this._opaqueTokenParams.internalValue;
  }
}

export class VirtualserviceOauthVsConfigOauthSettingsResourceServerList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceOauthVsConfigOauthSettingsResourceServer[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceOauthVsConfigOauthSettingsResourceServerOutputReference {
    return new VirtualserviceOauthVsConfigOauthSettingsResourceServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceOauthVsConfigOauthSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#auth_profile_ref Virtualservice#auth_profile_ref}
  */
  readonly authProfileRef: string;
  /**
  * app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#app_settings Virtualservice#app_settings}
  */
  readonly appSettings?: VirtualserviceOauthVsConfigOauthSettingsAppSettings[] | cdktf.IResolvable;
  /**
  * resource_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#resource_server Virtualservice#resource_server}
  */
  readonly resourceServer?: VirtualserviceOauthVsConfigOauthSettingsResourceServer[] | cdktf.IResolvable;
}

export function virtualserviceOauthVsConfigOauthSettingsToTerraform(struct?: VirtualserviceOauthVsConfigOauthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_profile_ref: cdktf.stringToTerraform(struct!.authProfileRef),
    app_settings: cdktf.listMapper(virtualserviceOauthVsConfigOauthSettingsAppSettingsToTerraform, true)(struct!.appSettings),
    resource_server: cdktf.listMapper(virtualserviceOauthVsConfigOauthSettingsResourceServerToTerraform, true)(struct!.resourceServer),
  }
}


export function virtualserviceOauthVsConfigOauthSettingsToHclTerraform(struct?: VirtualserviceOauthVsConfigOauthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.authProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_settings: {
      value: cdktf.listMapperHcl(virtualserviceOauthVsConfigOauthSettingsAppSettingsToHclTerraform, true)(struct!.appSettings),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceOauthVsConfigOauthSettingsAppSettingsList",
    },
    resource_server: {
      value: cdktf.listMapperHcl(virtualserviceOauthVsConfigOauthSettingsResourceServerToHclTerraform, true)(struct!.resourceServer),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceOauthVsConfigOauthSettingsResourceServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceOauthVsConfigOauthSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceOauthVsConfigOauthSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProfileRef = this._authProfileRef;
    }
    if (this._appSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSettings = this._appSettings?.internalValue;
    }
    if (this._resourceServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceServer = this._resourceServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceOauthVsConfigOauthSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authProfileRef = undefined;
      this._appSettings.internalValue = undefined;
      this._resourceServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authProfileRef = value.authProfileRef;
      this._appSettings.internalValue = value.appSettings;
      this._resourceServer.internalValue = value.resourceServer;
    }
  }

  // auth_profile_ref - computed: false, optional: false, required: true
  private _authProfileRef?: string; 
  public get authProfileRef() {
    return this.getStringAttribute('auth_profile_ref');
  }
  public set authProfileRef(value: string) {
    this._authProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authProfileRefInput() {
    return this._authProfileRef;
  }

  // app_settings - computed: false, optional: true, required: false
  private _appSettings = new VirtualserviceOauthVsConfigOauthSettingsAppSettingsList(this, "app_settings", true);
  public get appSettings() {
    return this._appSettings;
  }
  public putAppSettings(value: VirtualserviceOauthVsConfigOauthSettingsAppSettings[] | cdktf.IResolvable) {
    this._appSettings.internalValue = value;
  }
  public resetAppSettings() {
    this._appSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSettingsInput() {
    return this._appSettings.internalValue;
  }

  // resource_server - computed: false, optional: true, required: false
  private _resourceServer = new VirtualserviceOauthVsConfigOauthSettingsResourceServerList(this, "resource_server", true);
  public get resourceServer() {
    return this._resourceServer;
  }
  public putResourceServer(value: VirtualserviceOauthVsConfigOauthSettingsResourceServer[] | cdktf.IResolvable) {
    this._resourceServer.internalValue = value;
  }
  public resetResourceServer() {
    this._resourceServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceServerInput() {
    return this._resourceServer.internalValue;
  }
}

export class VirtualserviceOauthVsConfigOauthSettingsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceOauthVsConfigOauthSettings[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceOauthVsConfigOauthSettingsOutputReference {
    return new VirtualserviceOauthVsConfigOauthSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceOauthVsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#cookie_name Virtualservice#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#cookie_timeout Virtualservice#cookie_timeout}
  */
  readonly cookieTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#logout_uri Virtualservice#logout_uri}
  */
  readonly logoutUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#post_logout_redirect_uri Virtualservice#post_logout_redirect_uri}
  */
  readonly postLogoutRedirectUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#redirect_uri Virtualservice#redirect_uri}
  */
  readonly redirectUri?: string;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#key Virtualservice#key}
  */
  readonly key?: VirtualserviceOauthVsConfigKey[] | cdktf.IResolvable;
  /**
  * oauth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#oauth_settings Virtualservice#oauth_settings}
  */
  readonly oauthSettings?: VirtualserviceOauthVsConfigOauthSettings[] | cdktf.IResolvable;
}

export function virtualserviceOauthVsConfigToTerraform(struct?: VirtualserviceOauthVsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    cookie_timeout: cdktf.stringToTerraform(struct!.cookieTimeout),
    logout_uri: cdktf.stringToTerraform(struct!.logoutUri),
    post_logout_redirect_uri: cdktf.stringToTerraform(struct!.postLogoutRedirectUri),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
    key: cdktf.listMapper(virtualserviceOauthVsConfigKeyToTerraform, true)(struct!.key),
    oauth_settings: cdktf.listMapper(virtualserviceOauthVsConfigOauthSettingsToTerraform, true)(struct!.oauthSettings),
  }
}


export function virtualserviceOauthVsConfigToHclTerraform(struct?: VirtualserviceOauthVsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_timeout: {
      value: cdktf.stringToHclTerraform(struct!.cookieTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_uri: {
      value: cdktf.stringToHclTerraform(struct!.logoutUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_logout_redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.postLogoutRedirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.listMapperHcl(virtualserviceOauthVsConfigKeyToHclTerraform, true)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceOauthVsConfigKeyList",
    },
    oauth_settings: {
      value: cdktf.listMapperHcl(virtualserviceOauthVsConfigOauthSettingsToHclTerraform, true)(struct!.oauthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceOauthVsConfigOauthSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceOauthVsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceOauthVsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._cookieTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieTimeout = this._cookieTimeout;
    }
    if (this._logoutUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUri = this._logoutUri;
    }
    if (this._postLogoutRedirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.postLogoutRedirectUri = this._postLogoutRedirectUri;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._oauthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthSettings = this._oauthSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceOauthVsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieName = undefined;
      this._cookieTimeout = undefined;
      this._logoutUri = undefined;
      this._postLogoutRedirectUri = undefined;
      this._redirectUri = undefined;
      this._key.internalValue = undefined;
      this._oauthSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieName = value.cookieName;
      this._cookieTimeout = value.cookieTimeout;
      this._logoutUri = value.logoutUri;
      this._postLogoutRedirectUri = value.postLogoutRedirectUri;
      this._redirectUri = value.redirectUri;
      this._key.internalValue = value.key;
      this._oauthSettings.internalValue = value.oauthSettings;
    }
  }

  // cookie_name - computed: true, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // cookie_timeout - computed: false, optional: true, required: false
  private _cookieTimeout?: string; 
  public get cookieTimeout() {
    return this.getStringAttribute('cookie_timeout');
  }
  public set cookieTimeout(value: string) {
    this._cookieTimeout = value;
  }
  public resetCookieTimeout() {
    this._cookieTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieTimeoutInput() {
    return this._cookieTimeout;
  }

  // logout_uri - computed: true, optional: true, required: false
  private _logoutUri?: string; 
  public get logoutUri() {
    return this.getStringAttribute('logout_uri');
  }
  public set logoutUri(value: string) {
    this._logoutUri = value;
  }
  public resetLogoutUri() {
    this._logoutUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUriInput() {
    return this._logoutUri;
  }

  // post_logout_redirect_uri - computed: true, optional: true, required: false
  private _postLogoutRedirectUri?: string; 
  public get postLogoutRedirectUri() {
    return this.getStringAttribute('post_logout_redirect_uri');
  }
  public set postLogoutRedirectUri(value: string) {
    this._postLogoutRedirectUri = value;
  }
  public resetPostLogoutRedirectUri() {
    this._postLogoutRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutRedirectUriInput() {
    return this._postLogoutRedirectUri;
  }

  // redirect_uri - computed: true, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // key - computed: false, optional: true, required: false
  private _key = new VirtualserviceOauthVsConfigKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: VirtualserviceOauthVsConfigKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // oauth_settings - computed: false, optional: true, required: false
  private _oauthSettings = new VirtualserviceOauthVsConfigOauthSettingsList(this, "oauth_settings", false);
  public get oauthSettings() {
    return this._oauthSettings;
  }
  public putOauthSettings(value: VirtualserviceOauthVsConfigOauthSettings[] | cdktf.IResolvable) {
    this._oauthSettings.internalValue = value;
  }
  public resetOauthSettings() {
    this._oauthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthSettingsInput() {
    return this._oauthSettings.internalValue;
  }
}

export class VirtualserviceOauthVsConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceOauthVsConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceOauthVsConfigOutputReference {
    return new VirtualserviceOauthVsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualservicePerformanceLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#max_concurrent_connections Virtualservice#max_concurrent_connections}
  */
  readonly maxConcurrentConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#max_throughput Virtualservice#max_throughput}
  */
  readonly maxThroughput?: string;
}

export function virtualservicePerformanceLimitsToTerraform(struct?: VirtualservicePerformanceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_connections: cdktf.stringToTerraform(struct!.maxConcurrentConnections),
    max_throughput: cdktf.stringToTerraform(struct!.maxThroughput),
  }
}


export function virtualservicePerformanceLimitsToHclTerraform(struct?: VirtualservicePerformanceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_connections: {
      value: cdktf.stringToHclTerraform(struct!.maxConcurrentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_throughput: {
      value: cdktf.stringToHclTerraform(struct!.maxThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualservicePerformanceLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualservicePerformanceLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentConnections = this._maxConcurrentConnections;
    }
    if (this._maxThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThroughput = this._maxThroughput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualservicePerformanceLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrentConnections = undefined;
      this._maxThroughput = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConcurrentConnections = value.maxConcurrentConnections;
      this._maxThroughput = value.maxThroughput;
    }
  }

  // max_concurrent_connections - computed: true, optional: true, required: false
  private _maxConcurrentConnections?: string; 
  public get maxConcurrentConnections() {
    return this.getStringAttribute('max_concurrent_connections');
  }
  public set maxConcurrentConnections(value: string) {
    this._maxConcurrentConnections = value;
  }
  public resetMaxConcurrentConnections() {
    this._maxConcurrentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentConnectionsInput() {
    return this._maxConcurrentConnections;
  }

  // max_throughput - computed: true, optional: true, required: false
  private _maxThroughput?: string; 
  public get maxThroughput() {
    return this.getStringAttribute('max_throughput');
  }
  public set maxThroughput(value: string) {
    this._maxThroughput = value;
  }
  public resetMaxThroughput() {
    this._maxThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThroughputInput() {
    return this._maxThroughput;
  }
}

export class VirtualservicePerformanceLimitsList extends cdktf.ComplexList {
  public internalValue? : VirtualservicePerformanceLimits[] | cdktf.IResolvable

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
  public get(index: number): VirtualservicePerformanceLimitsOutputReference {
    return new VirtualservicePerformanceLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceRequestsRateLimitActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#content_type Virtualservice#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#file_content Virtualservice#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#file_length Virtualservice#file_length}
  */
  readonly fileLength?: string;
}

export function virtualserviceRequestsRateLimitActionFileToTerraform(struct?: VirtualserviceRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function virtualserviceRequestsRateLimitActionFileToHclTerraform(struct?: VirtualserviceRequestsRateLimitActionFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceRequestsRateLimitActionFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceRequestsRateLimitActionFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class VirtualserviceRequestsRateLimitActionFileList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceRequestsRateLimitActionFile[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceRequestsRateLimitActionFileOutputReference {
    return new VirtualserviceRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceRequestsRateLimitActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#end_index Virtualservice#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#start_index Virtualservice#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#str_value Virtualservice#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: VirtualserviceRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: VirtualserviceRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class VirtualserviceRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceRequestsRateLimitActionRedirectHostTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class VirtualserviceRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new VirtualserviceRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceRequestsRateLimitActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#tokens Virtualservice#tokens}
  */
  readonly tokens: VirtualserviceRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function virtualserviceRequestsRateLimitActionRedirectHostToTerraform(struct?: VirtualserviceRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(virtualserviceRequestsRateLimitActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function virtualserviceRequestsRateLimitActionRedirectHostToHclTerraform(struct?: VirtualserviceRequestsRateLimitActionRedirectHost | cdktf.IResolvable): any {
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
    tokens: {
      value: cdktf.listMapperHcl(virtualserviceRequestsRateLimitActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceRequestsRateLimitActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceRequestsRateLimitActionRedirectHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new VirtualserviceRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: VirtualserviceRequestsRateLimitActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class VirtualserviceRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceRequestsRateLimitActionRedirectHostOutputReference {
    return new VirtualserviceRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceRequestsRateLimitActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#end_index Virtualservice#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#start_index Virtualservice#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#str_value Virtualservice#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: VirtualserviceRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_index: cdktf.stringToTerraform(struct!.endIndex),
    start_index: cdktf.stringToTerraform(struct!.startIndex),
    str_value: cdktf.stringToTerraform(struct!.strValue),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: VirtualserviceRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_index: {
      value: cdktf.stringToHclTerraform(struct!.endIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_index: {
      value: cdktf.stringToHclTerraform(struct!.startIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str_value: {
      value: cdktf.stringToHclTerraform(struct!.strValue),
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

export class VirtualserviceRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIndex = this._endIndex;
    }
    if (this._startIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIndex = this._startIndex;
    }
    if (this._strValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strValue = this._strValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceRequestsRateLimitActionRedirectPathTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIndex = undefined;
      this._startIndex = undefined;
      this._strValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIndex = value.endIndex;
      this._startIndex = value.startIndex;
      this._strValue = value.strValue;
      this._type = value.type;
    }
  }

  // end_index - computed: true, optional: true, required: false
  private _endIndex?: string; 
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }
  public set endIndex(value: string) {
    this._endIndex = value;
  }
  public resetEndIndex() {
    this._endIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIndexInput() {
    return this._endIndex;
  }

  // start_index - computed: true, optional: true, required: false
  private _startIndex?: string; 
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }
  public set startIndex(value: string) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // str_value - computed: true, optional: true, required: false
  private _strValue?: string; 
  public get strValue() {
    return this.getStringAttribute('str_value');
  }
  public set strValue(value: string) {
    this._strValue = value;
  }
  public resetStrValue() {
    this._strValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValueInput() {
    return this._strValue;
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

export class VirtualserviceRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new VirtualserviceRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceRequestsRateLimitActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#tokens Virtualservice#tokens}
  */
  readonly tokens: VirtualserviceRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function virtualserviceRequestsRateLimitActionRedirectPathToTerraform(struct?: VirtualserviceRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(virtualserviceRequestsRateLimitActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function virtualserviceRequestsRateLimitActionRedirectPathToHclTerraform(struct?: VirtualserviceRequestsRateLimitActionRedirectPath | cdktf.IResolvable): any {
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
    tokens: {
      value: cdktf.listMapperHcl(virtualserviceRequestsRateLimitActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceRequestsRateLimitActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._tokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokens = this._tokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceRequestsRateLimitActionRedirectPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._tokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._tokens.internalValue = value.tokens;
    }
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

  // tokens - computed: false, optional: false, required: true
  private _tokens = new VirtualserviceRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: VirtualserviceRequestsRateLimitActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class VirtualserviceRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceRequestsRateLimitActionRedirectPathOutputReference {
    return new VirtualserviceRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceRequestsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#add_string Virtualservice#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#keep_query Virtualservice#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#port Virtualservice#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#protocol Virtualservice#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#status_code Virtualservice#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#host Virtualservice#host}
  */
  readonly host?: VirtualserviceRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#path Virtualservice#path}
  */
  readonly path?: VirtualserviceRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function virtualserviceRequestsRateLimitActionRedirectToTerraform(struct?: VirtualserviceRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(virtualserviceRequestsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(virtualserviceRequestsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function virtualserviceRequestsRateLimitActionRedirectToHclTerraform(struct?: VirtualserviceRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(virtualserviceRequestsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceRequestsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(virtualserviceRequestsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceRequestsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // status_code - computed: false, optional: true, required: false
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

  // host - computed: false, optional: true, required: false
  private _host = new VirtualserviceRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: VirtualserviceRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new VirtualserviceRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: VirtualserviceRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
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

export class VirtualserviceRequestsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceRequestsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceRequestsRateLimitActionRedirectOutputReference {
    return new VirtualserviceRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceRequestsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#status_code Virtualservice#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#file Virtualservice#file}
  */
  readonly file?: VirtualserviceRequestsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#redirect Virtualservice#redirect}
  */
  readonly redirect?: VirtualserviceRequestsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function virtualserviceRequestsRateLimitActionToTerraform(struct?: VirtualserviceRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(virtualserviceRequestsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(virtualserviceRequestsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function virtualserviceRequestsRateLimitActionToHclTerraform(struct?: VirtualserviceRequestsRateLimitAction | cdktf.IResolvable): any {
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
    file: {
      value: cdktf.listMapperHcl(virtualserviceRequestsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceRequestsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(virtualserviceRequestsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceRequestsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceRequestsRateLimitAction | cdktf.IResolvable | undefined {
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
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceRequestsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
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
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
  }

  // status_code - computed: false, optional: true, required: false
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

  // file - computed: false, optional: true, required: false
  private _file = new VirtualserviceRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: VirtualserviceRequestsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new VirtualserviceRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: VirtualserviceRequestsRateLimitActionRedirect[] | cdktf.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class VirtualserviceRequestsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceRequestsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceRequestsRateLimitActionOutputReference {
    return new VirtualserviceRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceRequestsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#burst_sz Virtualservice#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#count Virtualservice#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#name Virtualservice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#period Virtualservice#period}
  */
  readonly period?: string;
}

export function virtualserviceRequestsRateLimitRateLimiterToTerraform(struct?: VirtualserviceRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function virtualserviceRequestsRateLimitRateLimiterToHclTerraform(struct?: VirtualserviceRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}

export class VirtualserviceRequestsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceRequestsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceRequestsRateLimitRateLimiterOutputReference {
    return new VirtualserviceRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceRequestsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#explicit_tracking Virtualservice#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#fine_grain Virtualservice#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#http_cookie Virtualservice#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#http_header Virtualservice#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#action Virtualservice#action}
  */
  readonly action: VirtualserviceRequestsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#rate_limiter Virtualservice#rate_limiter}
  */
  readonly rateLimiter?: VirtualserviceRequestsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function virtualserviceRequestsRateLimitToTerraform(struct?: VirtualserviceRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(virtualserviceRequestsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(virtualserviceRequestsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function virtualserviceRequestsRateLimitToHclTerraform(struct?: VirtualserviceRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(virtualserviceRequestsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceRequestsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(virtualserviceRequestsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceRequestsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceRequestsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceRequestsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new VirtualserviceRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: VirtualserviceRequestsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new VirtualserviceRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: VirtualserviceRequestsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class VirtualserviceRequestsRateLimitList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceRequestsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceRequestsRateLimitOutputReference {
    return new VirtualserviceRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSamlSpConfigKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#aes_key Virtualservice#aes_key}
  */
  readonly aesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#hmac_key Virtualservice#hmac_key}
  */
  readonly hmacKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#name Virtualservice#name}
  */
  readonly name?: string;
}

export function virtualserviceSamlSpConfigKeyToTerraform(struct?: VirtualserviceSamlSpConfigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aes_key: cdktf.stringToTerraform(struct!.aesKey),
    hmac_key: cdktf.stringToTerraform(struct!.hmacKey),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualserviceSamlSpConfigKeyToHclTerraform(struct?: VirtualserviceSamlSpConfigKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aes_key: {
      value: cdktf.stringToHclTerraform(struct!.aesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hmac_key: {
      value: cdktf.stringToHclTerraform(struct!.hmacKey),
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

export class VirtualserviceSamlSpConfigKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSamlSpConfigKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.aesKey = this._aesKey;
    }
    if (this._hmacKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacKey = this._hmacKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceSamlSpConfigKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aesKey = undefined;
      this._hmacKey = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aesKey = value.aesKey;
      this._hmacKey = value.hmacKey;
      this._name = value.name;
    }
  }

  // aes_key - computed: true, optional: true, required: false
  private _aesKey?: string; 
  public get aesKey() {
    return this.getStringAttribute('aes_key');
  }
  public set aesKey(value: string) {
    this._aesKey = value;
  }
  public resetAesKey() {
    this._aesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aesKeyInput() {
    return this._aesKey;
  }

  // hmac_key - computed: true, optional: true, required: false
  private _hmacKey?: string; 
  public get hmacKey() {
    return this.getStringAttribute('hmac_key');
  }
  public set hmacKey(value: string) {
    this._hmacKey = value;
  }
  public resetHmacKey() {
    this._hmacKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacKeyInput() {
    return this._hmacKey;
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
}

export class VirtualserviceSamlSpConfigKeyList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSamlSpConfigKey[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSamlSpConfigKeyOutputReference {
    return new VirtualserviceSamlSpConfigKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSamlSpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#acs_index Virtualservice#acs_index}
  */
  readonly acsIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#authn_req_acs_type Virtualservice#authn_req_acs_type}
  */
  readonly authnReqAcsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#cookie_name Virtualservice#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#cookie_timeout Virtualservice#cookie_timeout}
  */
  readonly cookieTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#entity_id Virtualservice#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#signing_ssl_key_and_certificate_ref Virtualservice#signing_ssl_key_and_certificate_ref}
  */
  readonly signingSslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#single_signon_url Virtualservice#single_signon_url}
  */
  readonly singleSignonUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#sp_metadata Virtualservice#sp_metadata}
  */
  readonly spMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#use_idp_session_timeout Virtualservice#use_idp_session_timeout}
  */
  readonly useIdpSessionTimeout?: string;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#key Virtualservice#key}
  */
  readonly key?: VirtualserviceSamlSpConfigKey[] | cdktf.IResolvable;
}

export function virtualserviceSamlSpConfigToTerraform(struct?: VirtualserviceSamlSpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acs_index: cdktf.stringToTerraform(struct!.acsIndex),
    authn_req_acs_type: cdktf.stringToTerraform(struct!.authnReqAcsType),
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    cookie_timeout: cdktf.stringToTerraform(struct!.cookieTimeout),
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    signing_ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.signingSslKeyAndCertificateRef),
    single_signon_url: cdktf.stringToTerraform(struct!.singleSignonUrl),
    sp_metadata: cdktf.stringToTerraform(struct!.spMetadata),
    use_idp_session_timeout: cdktf.stringToTerraform(struct!.useIdpSessionTimeout),
    key: cdktf.listMapper(virtualserviceSamlSpConfigKeyToTerraform, true)(struct!.key),
  }
}


export function virtualserviceSamlSpConfigToHclTerraform(struct?: VirtualserviceSamlSpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acs_index: {
      value: cdktf.stringToHclTerraform(struct!.acsIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authn_req_acs_type: {
      value: cdktf.stringToHclTerraform(struct!.authnReqAcsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_timeout: {
      value: cdktf.stringToHclTerraform(struct!.cookieTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.signingSslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_signon_url: {
      value: cdktf.stringToHclTerraform(struct!.singleSignonUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_metadata: {
      value: cdktf.stringToHclTerraform(struct!.spMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_idp_session_timeout: {
      value: cdktf.stringToHclTerraform(struct!.useIdpSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.listMapperHcl(virtualserviceSamlSpConfigKeyToHclTerraform, true)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceSamlSpConfigKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceSamlSpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSamlSpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acsIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsIndex = this._acsIndex;
    }
    if (this._authnReqAcsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnReqAcsType = this._authnReqAcsType;
    }
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._cookieTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieTimeout = this._cookieTimeout;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._signingSslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingSslKeyAndCertificateRef = this._signingSslKeyAndCertificateRef;
    }
    if (this._singleSignonUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleSignonUrl = this._singleSignonUrl;
    }
    if (this._spMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.spMetadata = this._spMetadata;
    }
    if (this._useIdpSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIdpSessionTimeout = this._useIdpSessionTimeout;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceSamlSpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acsIndex = undefined;
      this._authnReqAcsType = undefined;
      this._cookieName = undefined;
      this._cookieTimeout = undefined;
      this._entityId = undefined;
      this._signingSslKeyAndCertificateRef = undefined;
      this._singleSignonUrl = undefined;
      this._spMetadata = undefined;
      this._useIdpSessionTimeout = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acsIndex = value.acsIndex;
      this._authnReqAcsType = value.authnReqAcsType;
      this._cookieName = value.cookieName;
      this._cookieTimeout = value.cookieTimeout;
      this._entityId = value.entityId;
      this._signingSslKeyAndCertificateRef = value.signingSslKeyAndCertificateRef;
      this._singleSignonUrl = value.singleSignonUrl;
      this._spMetadata = value.spMetadata;
      this._useIdpSessionTimeout = value.useIdpSessionTimeout;
      this._key.internalValue = value.key;
    }
  }

  // acs_index - computed: false, optional: true, required: false
  private _acsIndex?: string; 
  public get acsIndex() {
    return this.getStringAttribute('acs_index');
  }
  public set acsIndex(value: string) {
    this._acsIndex = value;
  }
  public resetAcsIndex() {
    this._acsIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsIndexInput() {
    return this._acsIndex;
  }

  // authn_req_acs_type - computed: false, optional: true, required: false
  private _authnReqAcsType?: string; 
  public get authnReqAcsType() {
    return this.getStringAttribute('authn_req_acs_type');
  }
  public set authnReqAcsType(value: string) {
    this._authnReqAcsType = value;
  }
  public resetAuthnReqAcsType() {
    this._authnReqAcsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnReqAcsTypeInput() {
    return this._authnReqAcsType;
  }

  // cookie_name - computed: true, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // cookie_timeout - computed: false, optional: true, required: false
  private _cookieTimeout?: string; 
  public get cookieTimeout() {
    return this.getStringAttribute('cookie_timeout');
  }
  public set cookieTimeout(value: string) {
    this._cookieTimeout = value;
  }
  public resetCookieTimeout() {
    this._cookieTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieTimeoutInput() {
    return this._cookieTimeout;
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // signing_ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _signingSslKeyAndCertificateRef?: string; 
  public get signingSslKeyAndCertificateRef() {
    return this.getStringAttribute('signing_ssl_key_and_certificate_ref');
  }
  public set signingSslKeyAndCertificateRef(value: string) {
    this._signingSslKeyAndCertificateRef = value;
  }
  public resetSigningSslKeyAndCertificateRef() {
    this._signingSslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingSslKeyAndCertificateRefInput() {
    return this._signingSslKeyAndCertificateRef;
  }

  // single_signon_url - computed: false, optional: false, required: true
  private _singleSignonUrl?: string; 
  public get singleSignonUrl() {
    return this.getStringAttribute('single_signon_url');
  }
  public set singleSignonUrl(value: string) {
    this._singleSignonUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignonUrlInput() {
    return this._singleSignonUrl;
  }

  // sp_metadata - computed: true, optional: true, required: false
  private _spMetadata?: string; 
  public get spMetadata() {
    return this.getStringAttribute('sp_metadata');
  }
  public set spMetadata(value: string) {
    this._spMetadata = value;
  }
  public resetSpMetadata() {
    this._spMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spMetadataInput() {
    return this._spMetadata;
  }

  // use_idp_session_timeout - computed: true, optional: true, required: false
  private _useIdpSessionTimeout?: string; 
  public get useIdpSessionTimeout() {
    return this.getStringAttribute('use_idp_session_timeout');
  }
  public set useIdpSessionTimeout(value: string) {
    this._useIdpSessionTimeout = value;
  }
  public resetUseIdpSessionTimeout() {
    this._useIdpSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIdpSessionTimeoutInput() {
    return this._useIdpSessionTimeout;
  }

  // key - computed: false, optional: true, required: false
  private _key = new VirtualserviceSamlSpConfigKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: VirtualserviceSamlSpConfigKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class VirtualserviceSamlSpConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSamlSpConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSamlSpConfigOutputReference {
    return new VirtualserviceSamlSpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceServicePoolSelect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#service_pool_group_ref Virtualservice#service_pool_group_ref}
  */
  readonly servicePoolGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#service_pool_ref Virtualservice#service_pool_ref}
  */
  readonly servicePoolRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#service_port Virtualservice#service_port}
  */
  readonly servicePort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#service_port_range_end Virtualservice#service_port_range_end}
  */
  readonly servicePortRangeEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#service_protocol Virtualservice#service_protocol}
  */
  readonly serviceProtocol?: string;
}

export function virtualserviceServicePoolSelectToTerraform(struct?: VirtualserviceServicePoolSelect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_pool_group_ref: cdktf.stringToTerraform(struct!.servicePoolGroupRef),
    service_pool_ref: cdktf.stringToTerraform(struct!.servicePoolRef),
    service_port: cdktf.stringToTerraform(struct!.servicePort),
    service_port_range_end: cdktf.stringToTerraform(struct!.servicePortRangeEnd),
    service_protocol: cdktf.stringToTerraform(struct!.serviceProtocol),
  }
}


export function virtualserviceServicePoolSelectToHclTerraform(struct?: VirtualserviceServicePoolSelect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_pool_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.servicePoolGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_pool_ref: {
      value: cdktf.stringToHclTerraform(struct!.servicePoolRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port: {
      value: cdktf.stringToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_port_range_end: {
      value: cdktf.stringToHclTerraform(struct!.servicePortRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_protocol: {
      value: cdktf.stringToHclTerraform(struct!.serviceProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceServicePoolSelectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceServicePoolSelect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servicePoolGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePoolGroupRef = this._servicePoolGroupRef;
    }
    if (this._servicePoolRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePoolRef = this._servicePoolRef;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    if (this._servicePortRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePortRangeEnd = this._servicePortRangeEnd;
    }
    if (this._serviceProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProtocol = this._serviceProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceServicePoolSelect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._servicePoolGroupRef = undefined;
      this._servicePoolRef = undefined;
      this._servicePort = undefined;
      this._servicePortRangeEnd = undefined;
      this._serviceProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._servicePoolGroupRef = value.servicePoolGroupRef;
      this._servicePoolRef = value.servicePoolRef;
      this._servicePort = value.servicePort;
      this._servicePortRangeEnd = value.servicePortRangeEnd;
      this._serviceProtocol = value.serviceProtocol;
    }
  }

  // service_pool_group_ref - computed: true, optional: true, required: false
  private _servicePoolGroupRef?: string; 
  public get servicePoolGroupRef() {
    return this.getStringAttribute('service_pool_group_ref');
  }
  public set servicePoolGroupRef(value: string) {
    this._servicePoolGroupRef = value;
  }
  public resetServicePoolGroupRef() {
    this._servicePoolGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePoolGroupRefInput() {
    return this._servicePoolGroupRef;
  }

  // service_pool_ref - computed: true, optional: true, required: false
  private _servicePoolRef?: string; 
  public get servicePoolRef() {
    return this.getStringAttribute('service_pool_ref');
  }
  public set servicePoolRef(value: string) {
    this._servicePoolRef = value;
  }
  public resetServicePoolRef() {
    this._servicePoolRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePoolRefInput() {
    return this._servicePoolRef;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: string; 
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
  public set servicePort(value: string) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }

  // service_port_range_end - computed: false, optional: true, required: false
  private _servicePortRangeEnd?: string; 
  public get servicePortRangeEnd() {
    return this.getStringAttribute('service_port_range_end');
  }
  public set servicePortRangeEnd(value: string) {
    this._servicePortRangeEnd = value;
  }
  public resetServicePortRangeEnd() {
    this._servicePortRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortRangeEndInput() {
    return this._servicePortRangeEnd;
  }

  // service_protocol - computed: true, optional: true, required: false
  private _serviceProtocol?: string; 
  public get serviceProtocol() {
    return this.getStringAttribute('service_protocol');
  }
  public set serviceProtocol(value: string) {
    this._serviceProtocol = value;
  }
  public resetServiceProtocol() {
    this._serviceProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProtocolInput() {
    return this._serviceProtocol;
  }
}

export class VirtualserviceServicePoolSelectList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceServicePoolSelect[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceServicePoolSelectOutputReference {
    return new VirtualserviceServicePoolSelectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#enable_http2 Virtualservice#enable_http2}
  */
  readonly enableHttp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#enable_ssl Virtualservice#enable_ssl}
  */
  readonly enableSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#horizon_internal_ports Virtualservice#horizon_internal_ports}
  */
  readonly horizonInternalPorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#is_active_ftp_data_port Virtualservice#is_active_ftp_data_port}
  */
  readonly isActiveFtpDataPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#is_passive_ftp_data_port Virtualservice#is_passive_ftp_data_port}
  */
  readonly isPassiveFtpDataPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#override_application_profile_ref Virtualservice#override_application_profile_ref}
  */
  readonly overrideApplicationProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#override_network_profile_ref Virtualservice#override_network_profile_ref}
  */
  readonly overrideNetworkProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#port Virtualservice#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#port_range_end Virtualservice#port_range_end}
  */
  readonly portRangeEnd?: string;
}

export function virtualserviceServicesToTerraform(struct?: VirtualserviceServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_http2: cdktf.stringToTerraform(struct!.enableHttp2),
    enable_ssl: cdktf.stringToTerraform(struct!.enableSsl),
    horizon_internal_ports: cdktf.stringToTerraform(struct!.horizonInternalPorts),
    is_active_ftp_data_port: cdktf.stringToTerraform(struct!.isActiveFtpDataPort),
    is_passive_ftp_data_port: cdktf.stringToTerraform(struct!.isPassiveFtpDataPort),
    override_application_profile_ref: cdktf.stringToTerraform(struct!.overrideApplicationProfileRef),
    override_network_profile_ref: cdktf.stringToTerraform(struct!.overrideNetworkProfileRef),
    port: cdktf.stringToTerraform(struct!.port),
    port_range_end: cdktf.stringToTerraform(struct!.portRangeEnd),
  }
}


export function virtualserviceServicesToHclTerraform(struct?: VirtualserviceServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_http2: {
      value: cdktf.stringToHclTerraform(struct!.enableHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ssl: {
      value: cdktf.stringToHclTerraform(struct!.enableSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    horizon_internal_ports: {
      value: cdktf.stringToHclTerraform(struct!.horizonInternalPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_active_ftp_data_port: {
      value: cdktf.stringToHclTerraform(struct!.isActiveFtpDataPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_passive_ftp_data_port: {
      value: cdktf.stringToHclTerraform(struct!.isPassiveFtpDataPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_application_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.overrideApplicationProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_network_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.overrideNetworkProfileRef),
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
    port_range_end: {
      value: cdktf.stringToHclTerraform(struct!.portRangeEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttp2 = this._enableHttp2;
    }
    if (this._enableSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsl = this._enableSsl;
    }
    if (this._horizonInternalPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizonInternalPorts = this._horizonInternalPorts;
    }
    if (this._isActiveFtpDataPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActiveFtpDataPort = this._isActiveFtpDataPort;
    }
    if (this._isPassiveFtpDataPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPassiveFtpDataPort = this._isPassiveFtpDataPort;
    }
    if (this._overrideApplicationProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideApplicationProfileRef = this._overrideApplicationProfileRef;
    }
    if (this._overrideNetworkProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideNetworkProfileRef = this._overrideNetworkProfileRef;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRangeEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRangeEnd = this._portRangeEnd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableHttp2 = undefined;
      this._enableSsl = undefined;
      this._horizonInternalPorts = undefined;
      this._isActiveFtpDataPort = undefined;
      this._isPassiveFtpDataPort = undefined;
      this._overrideApplicationProfileRef = undefined;
      this._overrideNetworkProfileRef = undefined;
      this._port = undefined;
      this._portRangeEnd = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableHttp2 = value.enableHttp2;
      this._enableSsl = value.enableSsl;
      this._horizonInternalPorts = value.horizonInternalPorts;
      this._isActiveFtpDataPort = value.isActiveFtpDataPort;
      this._isPassiveFtpDataPort = value.isPassiveFtpDataPort;
      this._overrideApplicationProfileRef = value.overrideApplicationProfileRef;
      this._overrideNetworkProfileRef = value.overrideNetworkProfileRef;
      this._port = value.port;
      this._portRangeEnd = value.portRangeEnd;
    }
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: string; 
  public get enableHttp2() {
    return this.getStringAttribute('enable_http2');
  }
  public set enableHttp2(value: string) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
  }

  // enable_ssl - computed: false, optional: true, required: false
  private _enableSsl?: string; 
  public get enableSsl() {
    return this.getStringAttribute('enable_ssl');
  }
  public set enableSsl(value: string) {
    this._enableSsl = value;
  }
  public resetEnableSsl() {
    this._enableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslInput() {
    return this._enableSsl;
  }

  // horizon_internal_ports - computed: false, optional: true, required: false
  private _horizonInternalPorts?: string; 
  public get horizonInternalPorts() {
    return this.getStringAttribute('horizon_internal_ports');
  }
  public set horizonInternalPorts(value: string) {
    this._horizonInternalPorts = value;
  }
  public resetHorizonInternalPorts() {
    this._horizonInternalPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizonInternalPortsInput() {
    return this._horizonInternalPorts;
  }

  // is_active_ftp_data_port - computed: false, optional: true, required: false
  private _isActiveFtpDataPort?: string; 
  public get isActiveFtpDataPort() {
    return this.getStringAttribute('is_active_ftp_data_port');
  }
  public set isActiveFtpDataPort(value: string) {
    this._isActiveFtpDataPort = value;
  }
  public resetIsActiveFtpDataPort() {
    this._isActiveFtpDataPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveFtpDataPortInput() {
    return this._isActiveFtpDataPort;
  }

  // is_passive_ftp_data_port - computed: false, optional: true, required: false
  private _isPassiveFtpDataPort?: string; 
  public get isPassiveFtpDataPort() {
    return this.getStringAttribute('is_passive_ftp_data_port');
  }
  public set isPassiveFtpDataPort(value: string) {
    this._isPassiveFtpDataPort = value;
  }
  public resetIsPassiveFtpDataPort() {
    this._isPassiveFtpDataPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPassiveFtpDataPortInput() {
    return this._isPassiveFtpDataPort;
  }

  // override_application_profile_ref - computed: true, optional: true, required: false
  private _overrideApplicationProfileRef?: string; 
  public get overrideApplicationProfileRef() {
    return this.getStringAttribute('override_application_profile_ref');
  }
  public set overrideApplicationProfileRef(value: string) {
    this._overrideApplicationProfileRef = value;
  }
  public resetOverrideApplicationProfileRef() {
    this._overrideApplicationProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideApplicationProfileRefInput() {
    return this._overrideApplicationProfileRef;
  }

  // override_network_profile_ref - computed: true, optional: true, required: false
  private _overrideNetworkProfileRef?: string; 
  public get overrideNetworkProfileRef() {
    return this.getStringAttribute('override_network_profile_ref');
  }
  public set overrideNetworkProfileRef(value: string) {
    this._overrideNetworkProfileRef = value;
  }
  public resetOverrideNetworkProfileRef() {
    this._overrideNetworkProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideNetworkProfileRefInput() {
    return this._overrideNetworkProfileRef;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_range_end - computed: false, optional: true, required: false
  private _portRangeEnd?: string; 
  public get portRangeEnd() {
    return this.getStringAttribute('port_range_end');
  }
  public set portRangeEnd(value: string) {
    this._portRangeEnd = value;
  }
  public resetPortRangeEnd() {
    this._portRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }
}

export class VirtualserviceServicesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceServices[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceServicesOutputReference {
    return new VirtualserviceServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSidebandProfileIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceSidebandProfileIpToTerraform(struct?: VirtualserviceSidebandProfileIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceSidebandProfileIpToHclTerraform(struct?: VirtualserviceSidebandProfileIp | cdktf.IResolvable): any {
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

export class VirtualserviceSidebandProfileIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSidebandProfileIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceSidebandProfileIp | cdktf.IResolvable | undefined) {
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

export class VirtualserviceSidebandProfileIpList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSidebandProfileIp[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSidebandProfileIpOutputReference {
    return new VirtualserviceSidebandProfileIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSidebandProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#sideband_max_request_body_size Virtualservice#sideband_max_request_body_size}
  */
  readonly sidebandMaxRequestBodySize?: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip Virtualservice#ip}
  */
  readonly ip?: VirtualserviceSidebandProfileIp[] | cdktf.IResolvable;
}

export function virtualserviceSidebandProfileToTerraform(struct?: VirtualserviceSidebandProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sideband_max_request_body_size: cdktf.stringToTerraform(struct!.sidebandMaxRequestBodySize),
    ip: cdktf.listMapper(virtualserviceSidebandProfileIpToTerraform, true)(struct!.ip),
  }
}


export function virtualserviceSidebandProfileToHclTerraform(struct?: VirtualserviceSidebandProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sideband_max_request_body_size: {
      value: cdktf.stringToHclTerraform(struct!.sidebandMaxRequestBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(virtualserviceSidebandProfileIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceSidebandProfileIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceSidebandProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSidebandProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sidebandMaxRequestBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidebandMaxRequestBodySize = this._sidebandMaxRequestBodySize;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceSidebandProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sidebandMaxRequestBodySize = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sidebandMaxRequestBodySize = value.sidebandMaxRequestBodySize;
      this._ip.internalValue = value.ip;
    }
  }

  // sideband_max_request_body_size - computed: false, optional: true, required: false
  private _sidebandMaxRequestBodySize?: string; 
  public get sidebandMaxRequestBodySize() {
    return this.getStringAttribute('sideband_max_request_body_size');
  }
  public set sidebandMaxRequestBodySize(value: string) {
    this._sidebandMaxRequestBodySize = value;
  }
  public resetSidebandMaxRequestBodySize() {
    this._sidebandMaxRequestBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidebandMaxRequestBodySizeInput() {
    return this._sidebandMaxRequestBodySize;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new VirtualserviceSidebandProfileIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: VirtualserviceSidebandProfileIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class VirtualserviceSidebandProfileList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSidebandProfile[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSidebandProfileOutputReference {
    return new VirtualserviceSidebandProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSnatIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceSnatIpToTerraform(struct?: VirtualserviceSnatIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceSnatIpToHclTerraform(struct?: VirtualserviceSnatIp | cdktf.IResolvable): any {
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

export class VirtualserviceSnatIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSnatIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceSnatIp | cdktf.IResolvable | undefined) {
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

export class VirtualserviceSnatIpList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSnatIp[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSnatIpOutputReference {
    return new VirtualserviceSnatIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSnatIp6Addresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceSnatIp6AddressesToTerraform(struct?: VirtualserviceSnatIp6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceSnatIp6AddressesToHclTerraform(struct?: VirtualserviceSnatIp6Addresses | cdktf.IResolvable): any {
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

export class VirtualserviceSnatIp6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSnatIp6Addresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceSnatIp6Addresses | cdktf.IResolvable | undefined) {
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

export class VirtualserviceSnatIp6AddressesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSnatIp6Addresses[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSnatIp6AddressesOutputReference {
    return new VirtualserviceSnatIp6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSslProfileSelectorsClientIpListAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceSslProfileSelectorsClientIpListAddrsToTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceSslProfileSelectorsClientIpListAddrsToHclTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListAddrs | cdktf.IResolvable): any {
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

export class VirtualserviceSslProfileSelectorsClientIpListAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSslProfileSelectorsClientIpListAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceSslProfileSelectorsClientIpListAddrs | cdktf.IResolvable | undefined) {
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

export class VirtualserviceSslProfileSelectorsClientIpListAddrsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSslProfileSelectorsClientIpListAddrs[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSslProfileSelectorsClientIpListAddrsOutputReference {
    return new VirtualserviceSslProfileSelectorsClientIpListAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceSslProfileSelectorsClientIpListPrefixesIpAddrToTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceSslProfileSelectorsClientIpListPrefixesIpAddrToHclTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddr | cdktf.IResolvable): any {
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

export class VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddrOutputReference {
    return new VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSslProfileSelectorsClientIpListPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#mask Virtualservice#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip_addr Virtualservice#ip_addr}
  */
  readonly ipAddr: VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddr[] | cdktf.IResolvable;
}

export function virtualserviceSslProfileSelectorsClientIpListPrefixesToTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(virtualserviceSslProfileSelectorsClientIpListPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function virtualserviceSslProfileSelectorsClientIpListPrefixesToHclTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualserviceSslProfileSelectorsClientIpListPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceSslProfileSelectorsClientIpListPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSslProfileSelectorsClientIpListPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceSslProfileSelectorsClientIpListPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: VirtualserviceSslProfileSelectorsClientIpListPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class VirtualserviceSslProfileSelectorsClientIpListPrefixesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSslProfileSelectorsClientIpListPrefixes[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSslProfileSelectorsClientIpListPrefixesOutputReference {
    return new VirtualserviceSslProfileSelectorsClientIpListPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSslProfileSelectorsClientIpListRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceSslProfileSelectorsClientIpListRangesBeginToTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceSslProfileSelectorsClientIpListRangesBeginToHclTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListRangesBegin | cdktf.IResolvable): any {
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

export class VirtualserviceSslProfileSelectorsClientIpListRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSslProfileSelectorsClientIpListRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceSslProfileSelectorsClientIpListRangesBegin | cdktf.IResolvable | undefined) {
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

export class VirtualserviceSslProfileSelectorsClientIpListRangesBeginList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSslProfileSelectorsClientIpListRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSslProfileSelectorsClientIpListRangesBeginOutputReference {
    return new VirtualserviceSslProfileSelectorsClientIpListRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSslProfileSelectorsClientIpListRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceSslProfileSelectorsClientIpListRangesEndToTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceSslProfileSelectorsClientIpListRangesEndToHclTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListRangesEnd | cdktf.IResolvable): any {
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

export class VirtualserviceSslProfileSelectorsClientIpListRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSslProfileSelectorsClientIpListRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceSslProfileSelectorsClientIpListRangesEnd | cdktf.IResolvable | undefined) {
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

export class VirtualserviceSslProfileSelectorsClientIpListRangesEndList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSslProfileSelectorsClientIpListRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSslProfileSelectorsClientIpListRangesEndOutputReference {
    return new VirtualserviceSslProfileSelectorsClientIpListRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSslProfileSelectorsClientIpListRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#begin Virtualservice#begin}
  */
  readonly begin: VirtualserviceSslProfileSelectorsClientIpListRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#end Virtualservice#end}
  */
  readonly end: VirtualserviceSslProfileSelectorsClientIpListRangesEnd[] | cdktf.IResolvable;
}

export function virtualserviceSslProfileSelectorsClientIpListRangesToTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(virtualserviceSslProfileSelectorsClientIpListRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(virtualserviceSslProfileSelectorsClientIpListRangesEndToTerraform, true)(struct!.end),
  }
}


export function virtualserviceSslProfileSelectorsClientIpListRangesToHclTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(virtualserviceSslProfileSelectorsClientIpListRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceSslProfileSelectorsClientIpListRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(virtualserviceSslProfileSelectorsClientIpListRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceSslProfileSelectorsClientIpListRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceSslProfileSelectorsClientIpListRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSslProfileSelectorsClientIpListRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceSslProfileSelectorsClientIpListRanges | cdktf.IResolvable | undefined) {
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
  private _begin = new VirtualserviceSslProfileSelectorsClientIpListRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: VirtualserviceSslProfileSelectorsClientIpListRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new VirtualserviceSslProfileSelectorsClientIpListRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: VirtualserviceSslProfileSelectorsClientIpListRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class VirtualserviceSslProfileSelectorsClientIpListRangesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSslProfileSelectorsClientIpListRanges[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSslProfileSelectorsClientIpListRangesOutputReference {
    return new VirtualserviceSslProfileSelectorsClientIpListRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSslProfileSelectorsClientIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#group_refs Virtualservice#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#match_criteria Virtualservice#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addrs Virtualservice#addrs}
  */
  readonly addrs?: VirtualserviceSslProfileSelectorsClientIpListAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#prefixes Virtualservice#prefixes}
  */
  readonly prefixes?: VirtualserviceSslProfileSelectorsClientIpListPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ranges Virtualservice#ranges}
  */
  readonly ranges?: VirtualserviceSslProfileSelectorsClientIpListRanges[] | cdktf.IResolvable;
}

export function virtualserviceSslProfileSelectorsClientIpListStructToTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(virtualserviceSslProfileSelectorsClientIpListAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(virtualserviceSslProfileSelectorsClientIpListPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(virtualserviceSslProfileSelectorsClientIpListRangesToTerraform, true)(struct!.ranges),
  }
}


export function virtualserviceSslProfileSelectorsClientIpListStructToHclTerraform(struct?: VirtualserviceSslProfileSelectorsClientIpListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualserviceSslProfileSelectorsClientIpListAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceSslProfileSelectorsClientIpListAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(virtualserviceSslProfileSelectorsClientIpListPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceSslProfileSelectorsClientIpListPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(virtualserviceSslProfileSelectorsClientIpListRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceSslProfileSelectorsClientIpListRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceSslProfileSelectorsClientIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSslProfileSelectorsClientIpListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceSslProfileSelectorsClientIpListStruct | cdktf.IResolvable | undefined) {
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
  private _addrs = new VirtualserviceSslProfileSelectorsClientIpListAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: VirtualserviceSslProfileSelectorsClientIpListAddrs[] | cdktf.IResolvable) {
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
  private _prefixes = new VirtualserviceSslProfileSelectorsClientIpListPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: VirtualserviceSslProfileSelectorsClientIpListPrefixes[] | cdktf.IResolvable) {
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
  private _ranges = new VirtualserviceSslProfileSelectorsClientIpListRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: VirtualserviceSslProfileSelectorsClientIpListRanges[] | cdktf.IResolvable) {
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

export class VirtualserviceSslProfileSelectorsClientIpListStructList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSslProfileSelectorsClientIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSslProfileSelectorsClientIpListStructOutputReference {
    return new VirtualserviceSslProfileSelectorsClientIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceSslProfileSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ssl_profile_ref Virtualservice#ssl_profile_ref}
  */
  readonly sslProfileRef: string;
  /**
  * client_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#client_ip_list Virtualservice#client_ip_list}
  */
  readonly clientIpList: VirtualserviceSslProfileSelectorsClientIpListStruct[] | cdktf.IResolvable;
}

export function virtualserviceSslProfileSelectorsToTerraform(struct?: VirtualserviceSslProfileSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_profile_ref: cdktf.stringToTerraform(struct!.sslProfileRef),
    client_ip_list: cdktf.listMapper(virtualserviceSslProfileSelectorsClientIpListStructToTerraform, true)(struct!.clientIpList),
  }
}


export function virtualserviceSslProfileSelectorsToHclTerraform(struct?: VirtualserviceSslProfileSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ip_list: {
      value: cdktf.listMapperHcl(virtualserviceSslProfileSelectorsClientIpListStructToHclTerraform, true)(struct!.clientIpList),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceSslProfileSelectorsClientIpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceSslProfileSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceSslProfileSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProfileRef = this._sslProfileRef;
    }
    if (this._clientIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpList = this._clientIpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceSslProfileSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sslProfileRef = undefined;
      this._clientIpList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sslProfileRef = value.sslProfileRef;
      this._clientIpList.internalValue = value.clientIpList;
    }
  }

  // ssl_profile_ref - computed: false, optional: false, required: true
  private _sslProfileRef?: string; 
  public get sslProfileRef() {
    return this.getStringAttribute('ssl_profile_ref');
  }
  public set sslProfileRef(value: string) {
    this._sslProfileRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileRefInput() {
    return this._sslProfileRef;
  }

  // client_ip_list - computed: false, optional: false, required: true
  private _clientIpList = new VirtualserviceSslProfileSelectorsClientIpListStructList(this, "client_ip_list", true);
  public get clientIpList() {
    return this._clientIpList;
  }
  public putClientIpList(value: VirtualserviceSslProfileSelectorsClientIpListStruct[] | cdktf.IResolvable) {
    this._clientIpList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpListInput() {
    return this._clientIpList.internalValue;
  }
}

export class VirtualserviceSslProfileSelectorsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceSslProfileSelectors[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceSslProfileSelectorsOutputReference {
    return new VirtualserviceSslProfileSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsCname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#cname Virtualservice#cname}
  */
  readonly cname: string;
}

export function virtualserviceStaticDnsRecordsCnameToTerraform(struct?: VirtualserviceStaticDnsRecordsCname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cname: cdktf.stringToTerraform(struct!.cname),
  }
}


export function virtualserviceStaticDnsRecordsCnameToHclTerraform(struct?: VirtualserviceStaticDnsRecordsCname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cname: {
      value: cdktf.stringToHclTerraform(struct!.cname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceStaticDnsRecordsCnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsCname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cname !== undefined) {
      hasAnyValues = true;
      internalValueResult.cname = this._cname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceStaticDnsRecordsCname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cname = value.cname;
    }
  }

  // cname - computed: false, optional: false, required: true
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }
}

export class VirtualserviceStaticDnsRecordsCnameList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsCname[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsCnameOutputReference {
    return new VirtualserviceStaticDnsRecordsCnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsIp6AddressIp6Address {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceStaticDnsRecordsIp6AddressIp6AddressToTerraform(struct?: VirtualserviceStaticDnsRecordsIp6AddressIp6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceStaticDnsRecordsIp6AddressIp6AddressToHclTerraform(struct?: VirtualserviceStaticDnsRecordsIp6AddressIp6Address | cdktf.IResolvable): any {
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

export class VirtualserviceStaticDnsRecordsIp6AddressIp6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsIp6AddressIp6Address | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceStaticDnsRecordsIp6AddressIp6Address | cdktf.IResolvable | undefined) {
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

export class VirtualserviceStaticDnsRecordsIp6AddressIp6AddressList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsIp6AddressIp6Address[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsIp6AddressIp6AddressOutputReference {
    return new VirtualserviceStaticDnsRecordsIp6AddressIp6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsIp6Address {
  /**
  * ip6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip6_address Virtualservice#ip6_address}
  */
  readonly ip6Address: VirtualserviceStaticDnsRecordsIp6AddressIp6Address[] | cdktf.IResolvable;
}

export function virtualserviceStaticDnsRecordsIp6AddressToTerraform(struct?: VirtualserviceStaticDnsRecordsIp6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip6_address: cdktf.listMapper(virtualserviceStaticDnsRecordsIp6AddressIp6AddressToTerraform, true)(struct!.ip6Address),
  }
}


export function virtualserviceStaticDnsRecordsIp6AddressToHclTerraform(struct?: VirtualserviceStaticDnsRecordsIp6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip6_address: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsIp6AddressIp6AddressToHclTerraform, true)(struct!.ip6Address),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceStaticDnsRecordsIp6AddressIp6AddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceStaticDnsRecordsIp6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsIp6Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceStaticDnsRecordsIp6Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip6Address.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip6Address.internalValue = value.ip6Address;
    }
  }

  // ip6_address - computed: false, optional: false, required: true
  private _ip6Address = new VirtualserviceStaticDnsRecordsIp6AddressIp6AddressList(this, "ip6_address", true);
  public get ip6Address() {
    return this._ip6Address;
  }
  public putIp6Address(value: VirtualserviceStaticDnsRecordsIp6AddressIp6Address[] | cdktf.IResolvable) {
    this._ip6Address.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address.internalValue;
  }
}

export class VirtualserviceStaticDnsRecordsIp6AddressList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsIp6Address[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsIp6AddressOutputReference {
    return new VirtualserviceStaticDnsRecordsIp6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsIpAddressIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceStaticDnsRecordsIpAddressIpAddressToTerraform(struct?: VirtualserviceStaticDnsRecordsIpAddressIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceStaticDnsRecordsIpAddressIpAddressToHclTerraform(struct?: VirtualserviceStaticDnsRecordsIpAddressIpAddress | cdktf.IResolvable): any {
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

export class VirtualserviceStaticDnsRecordsIpAddressIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsIpAddressIpAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceStaticDnsRecordsIpAddressIpAddress | cdktf.IResolvable | undefined) {
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

export class VirtualserviceStaticDnsRecordsIpAddressIpAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsIpAddressIpAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsIpAddressIpAddressOutputReference {
    return new VirtualserviceStaticDnsRecordsIpAddressIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsIpAddress {
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip_address Virtualservice#ip_address}
  */
  readonly ipAddress: VirtualserviceStaticDnsRecordsIpAddressIpAddress[] | cdktf.IResolvable;
}

export function virtualserviceStaticDnsRecordsIpAddressToTerraform(struct?: VirtualserviceStaticDnsRecordsIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.listMapper(virtualserviceStaticDnsRecordsIpAddressIpAddressToTerraform, true)(struct!.ipAddress),
  }
}


export function virtualserviceStaticDnsRecordsIpAddressToHclTerraform(struct?: VirtualserviceStaticDnsRecordsIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsIpAddressIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceStaticDnsRecordsIpAddressIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceStaticDnsRecordsIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsIpAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceStaticDnsRecordsIpAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress.internalValue = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress = new VirtualserviceStaticDnsRecordsIpAddressIpAddressList(this, "ip_address", true);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: VirtualserviceStaticDnsRecordsIpAddressIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}

export class VirtualserviceStaticDnsRecordsIpAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsIpAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsIpAddressOutputReference {
    return new VirtualserviceStaticDnsRecordsIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsMxRecords {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#host Virtualservice#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#priority Virtualservice#priority}
  */
  readonly priority: string;
}

export function virtualserviceStaticDnsRecordsMxRecordsToTerraform(struct?: VirtualserviceStaticDnsRecordsMxRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function virtualserviceStaticDnsRecordsMxRecordsToHclTerraform(struct?: VirtualserviceStaticDnsRecordsMxRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceStaticDnsRecordsMxRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsMxRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceStaticDnsRecordsMxRecords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._priority = value.priority;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class VirtualserviceStaticDnsRecordsMxRecordsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsMxRecords[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsMxRecordsOutputReference {
    return new VirtualserviceStaticDnsRecordsMxRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsNsIp6Address {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceStaticDnsRecordsNsIp6AddressToTerraform(struct?: VirtualserviceStaticDnsRecordsNsIp6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceStaticDnsRecordsNsIp6AddressToHclTerraform(struct?: VirtualserviceStaticDnsRecordsNsIp6Address | cdktf.IResolvable): any {
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

export class VirtualserviceStaticDnsRecordsNsIp6AddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsNsIp6Address | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceStaticDnsRecordsNsIp6Address | cdktf.IResolvable | undefined) {
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

export class VirtualserviceStaticDnsRecordsNsIp6AddressList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsNsIp6Address[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsNsIp6AddressOutputReference {
    return new VirtualserviceStaticDnsRecordsNsIp6AddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsNsIpAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceStaticDnsRecordsNsIpAddressToTerraform(struct?: VirtualserviceStaticDnsRecordsNsIpAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceStaticDnsRecordsNsIpAddressToHclTerraform(struct?: VirtualserviceStaticDnsRecordsNsIpAddress | cdktf.IResolvable): any {
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

export class VirtualserviceStaticDnsRecordsNsIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsNsIpAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceStaticDnsRecordsNsIpAddress | cdktf.IResolvable | undefined) {
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

export class VirtualserviceStaticDnsRecordsNsIpAddressList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsNsIpAddress[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsNsIpAddressOutputReference {
    return new VirtualserviceStaticDnsRecordsNsIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsNs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#nsname Virtualservice#nsname}
  */
  readonly nsname: string;
  /**
  * ip6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip6_address Virtualservice#ip6_address}
  */
  readonly ip6Address?: VirtualserviceStaticDnsRecordsNsIp6Address[] | cdktf.IResolvable;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip_address Virtualservice#ip_address}
  */
  readonly ipAddress?: VirtualserviceStaticDnsRecordsNsIpAddress[] | cdktf.IResolvable;
}

export function virtualserviceStaticDnsRecordsNsToTerraform(struct?: VirtualserviceStaticDnsRecordsNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsname: cdktf.stringToTerraform(struct!.nsname),
    ip6_address: cdktf.listMapper(virtualserviceStaticDnsRecordsNsIp6AddressToTerraform, true)(struct!.ip6Address),
    ip_address: cdktf.listMapper(virtualserviceStaticDnsRecordsNsIpAddressToTerraform, true)(struct!.ipAddress),
  }
}


export function virtualserviceStaticDnsRecordsNsToHclTerraform(struct?: VirtualserviceStaticDnsRecordsNs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsname: {
      value: cdktf.stringToHclTerraform(struct!.nsname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_address: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsNsIp6AddressToHclTerraform, true)(struct!.ip6Address),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceStaticDnsRecordsNsIp6AddressList",
    },
    ip_address: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsNsIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceStaticDnsRecordsNsIpAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceStaticDnsRecordsNsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsNs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsname !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsname = this._nsname;
    }
    if (this._ip6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address?.internalValue;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceStaticDnsRecordsNs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nsname = undefined;
      this._ip6Address.internalValue = undefined;
      this._ipAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nsname = value.nsname;
      this._ip6Address.internalValue = value.ip6Address;
      this._ipAddress.internalValue = value.ipAddress;
    }
  }

  // nsname - computed: false, optional: false, required: true
  private _nsname?: string; 
  public get nsname() {
    return this.getStringAttribute('nsname');
  }
  public set nsname(value: string) {
    this._nsname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsnameInput() {
    return this._nsname;
  }

  // ip6_address - computed: false, optional: true, required: false
  private _ip6Address = new VirtualserviceStaticDnsRecordsNsIp6AddressList(this, "ip6_address", true);
  public get ip6Address() {
    return this._ip6Address;
  }
  public putIp6Address(value: VirtualserviceStaticDnsRecordsNsIp6Address[] | cdktf.IResolvable) {
    this._ip6Address.internalValue = value;
  }
  public resetIp6Address() {
    this._ip6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address.internalValue;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new VirtualserviceStaticDnsRecordsNsIpAddressList(this, "ip_address", true);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: VirtualserviceStaticDnsRecordsNsIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }
}

export class VirtualserviceStaticDnsRecordsNsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsNs[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsNsOutputReference {
    return new VirtualserviceStaticDnsRecordsNsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsServiceLocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#port Virtualservice#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#priority Virtualservice#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#target Virtualservice#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#weight Virtualservice#weight}
  */
  readonly weight?: string;
}

export function virtualserviceStaticDnsRecordsServiceLocatorToTerraform(struct?: VirtualserviceStaticDnsRecordsServiceLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    priority: cdktf.stringToTerraform(struct!.priority),
    target: cdktf.stringToTerraform(struct!.target),
    weight: cdktf.stringToTerraform(struct!.weight),
  }
}


export function virtualserviceStaticDnsRecordsServiceLocatorToHclTerraform(struct?: VirtualserviceStaticDnsRecordsServiceLocator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.stringToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceStaticDnsRecordsServiceLocatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsServiceLocator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceStaticDnsRecordsServiceLocator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._target = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._priority = value.priority;
      this._target = value.target;
      this._weight = value.weight;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
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

export class VirtualserviceStaticDnsRecordsServiceLocatorList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsServiceLocator[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsServiceLocatorOutputReference {
    return new VirtualserviceStaticDnsRecordsServiceLocatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecordsTxtRecords {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#text_str Virtualservice#text_str}
  */
  readonly textStr: string;
}

export function virtualserviceStaticDnsRecordsTxtRecordsToTerraform(struct?: VirtualserviceStaticDnsRecordsTxtRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text_str: cdktf.stringToTerraform(struct!.textStr),
  }
}


export function virtualserviceStaticDnsRecordsTxtRecordsToHclTerraform(struct?: VirtualserviceStaticDnsRecordsTxtRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text_str: {
      value: cdktf.stringToHclTerraform(struct!.textStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceStaticDnsRecordsTxtRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecordsTxtRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._textStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.textStr = this._textStr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceStaticDnsRecordsTxtRecords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._textStr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._textStr = value.textStr;
    }
  }

  // text_str - computed: false, optional: false, required: true
  private _textStr?: string; 
  public get textStr() {
    return this.getStringAttribute('text_str');
  }
  public set textStr(value: string) {
    this._textStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textStrInput() {
    return this._textStr;
  }
}

export class VirtualserviceStaticDnsRecordsTxtRecordsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecordsTxtRecords[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsTxtRecordsOutputReference {
    return new VirtualserviceStaticDnsRecordsTxtRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceStaticDnsRecords {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#algorithm Virtualservice#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#delegated Virtualservice#delegated}
  */
  readonly delegated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#description Virtualservice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#fqdn Virtualservice#fqdn}
  */
  readonly fqdn: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#metadata Virtualservice#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#num_records_in_response Virtualservice#num_records_in_response}
  */
  readonly numRecordsInResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ttl Virtualservice#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#wildcard_match Virtualservice#wildcard_match}
  */
  readonly wildcardMatch?: string;
  /**
  * cname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#cname Virtualservice#cname}
  */
  readonly cname?: VirtualserviceStaticDnsRecordsCname[] | cdktf.IResolvable;
  /**
  * ip6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip6_address Virtualservice#ip6_address}
  */
  readonly ip6Address?: VirtualserviceStaticDnsRecordsIp6Address[] | cdktf.IResolvable;
  /**
  * ip_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip_address Virtualservice#ip_address}
  */
  readonly ipAddress?: VirtualserviceStaticDnsRecordsIpAddress[] | cdktf.IResolvable;
  /**
  * mx_records block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#mx_records Virtualservice#mx_records}
  */
  readonly mxRecords?: VirtualserviceStaticDnsRecordsMxRecords[] | cdktf.IResolvable;
  /**
  * ns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ns Virtualservice#ns}
  */
  readonly ns?: VirtualserviceStaticDnsRecordsNs[] | cdktf.IResolvable;
  /**
  * service_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#service_locator Virtualservice#service_locator}
  */
  readonly serviceLocator?: VirtualserviceStaticDnsRecordsServiceLocator[] | cdktf.IResolvable;
  /**
  * txt_records block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#txt_records Virtualservice#txt_records}
  */
  readonly txtRecords?: VirtualserviceStaticDnsRecordsTxtRecords[] | cdktf.IResolvable;
}

export function virtualserviceStaticDnsRecordsToTerraform(struct?: VirtualserviceStaticDnsRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    delegated: cdktf.stringToTerraform(struct!.delegated),
    description: cdktf.stringToTerraform(struct!.description),
    fqdn: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdn),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    num_records_in_response: cdktf.stringToTerraform(struct!.numRecordsInResponse),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
    wildcard_match: cdktf.stringToTerraform(struct!.wildcardMatch),
    cname: cdktf.listMapper(virtualserviceStaticDnsRecordsCnameToTerraform, true)(struct!.cname),
    ip6_address: cdktf.listMapper(virtualserviceStaticDnsRecordsIp6AddressToTerraform, true)(struct!.ip6Address),
    ip_address: cdktf.listMapper(virtualserviceStaticDnsRecordsIpAddressToTerraform, true)(struct!.ipAddress),
    mx_records: cdktf.listMapper(virtualserviceStaticDnsRecordsMxRecordsToTerraform, true)(struct!.mxRecords),
    ns: cdktf.listMapper(virtualserviceStaticDnsRecordsNsToTerraform, true)(struct!.ns),
    service_locator: cdktf.listMapper(virtualserviceStaticDnsRecordsServiceLocatorToTerraform, true)(struct!.serviceLocator),
    txt_records: cdktf.listMapper(virtualserviceStaticDnsRecordsTxtRecordsToTerraform, true)(struct!.txtRecords),
  }
}


export function virtualserviceStaticDnsRecordsToHclTerraform(struct?: VirtualserviceStaticDnsRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated: {
      value: cdktf.stringToHclTerraform(struct!.delegated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_records_in_response: {
      value: cdktf.stringToHclTerraform(struct!.numRecordsInResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
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
    wildcard_match: {
      value: cdktf.stringToHclTerraform(struct!.wildcardMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cname: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsCnameToHclTerraform, true)(struct!.cname),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceStaticDnsRecordsCnameList",
    },
    ip6_address: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsIp6AddressToHclTerraform, true)(struct!.ip6Address),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceStaticDnsRecordsIp6AddressList",
    },
    ip_address: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsIpAddressToHclTerraform, true)(struct!.ipAddress),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceStaticDnsRecordsIpAddressList",
    },
    mx_records: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsMxRecordsToHclTerraform, true)(struct!.mxRecords),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceStaticDnsRecordsMxRecordsList",
    },
    ns: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsNsToHclTerraform, true)(struct!.ns),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceStaticDnsRecordsNsList",
    },
    service_locator: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsServiceLocatorToHclTerraform, true)(struct!.serviceLocator),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceStaticDnsRecordsServiceLocatorList",
    },
    txt_records: {
      value: cdktf.listMapperHcl(virtualserviceStaticDnsRecordsTxtRecordsToHclTerraform, true)(struct!.txtRecords),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceStaticDnsRecordsTxtRecordsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceStaticDnsRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceStaticDnsRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._delegated !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegated = this._delegated;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._numRecordsInResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRecordsInResponse = this._numRecordsInResponse;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wildcardMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardMatch = this._wildcardMatch;
    }
    if (this._cname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cname = this._cname?.internalValue;
    }
    if (this._ip6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address?.internalValue;
    }
    if (this._ipAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress?.internalValue;
    }
    if (this._mxRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxRecords = this._mxRecords?.internalValue;
    }
    if (this._ns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ns = this._ns?.internalValue;
    }
    if (this._serviceLocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLocator = this._serviceLocator?.internalValue;
    }
    if (this._txtRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtRecords = this._txtRecords?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceStaticDnsRecords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._delegated = undefined;
      this._description = undefined;
      this._fqdn = undefined;
      this._metadata = undefined;
      this._numRecordsInResponse = undefined;
      this._ttl = undefined;
      this._type = undefined;
      this._wildcardMatch = undefined;
      this._cname.internalValue = undefined;
      this._ip6Address.internalValue = undefined;
      this._ipAddress.internalValue = undefined;
      this._mxRecords.internalValue = undefined;
      this._ns.internalValue = undefined;
      this._serviceLocator.internalValue = undefined;
      this._txtRecords.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._delegated = value.delegated;
      this._description = value.description;
      this._fqdn = value.fqdn;
      this._metadata = value.metadata;
      this._numRecordsInResponse = value.numRecordsInResponse;
      this._ttl = value.ttl;
      this._type = value.type;
      this._wildcardMatch = value.wildcardMatch;
      this._cname.internalValue = value.cname;
      this._ip6Address.internalValue = value.ip6Address;
      this._ipAddress.internalValue = value.ipAddress;
      this._mxRecords.internalValue = value.mxRecords;
      this._ns.internalValue = value.ns;
      this._serviceLocator.internalValue = value.serviceLocator;
      this._txtRecords.internalValue = value.txtRecords;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // delegated - computed: false, optional: true, required: false
  private _delegated?: string; 
  public get delegated() {
    return this.getStringAttribute('delegated');
  }
  public set delegated(value: string) {
    this._delegated = value;
  }
  public resetDelegated() {
    this._delegated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedInput() {
    return this._delegated;
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

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string[]; 
  public get fqdn() {
    return this.getListAttribute('fqdn');
  }
  public set fqdn(value: string[]) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // num_records_in_response - computed: false, optional: true, required: false
  private _numRecordsInResponse?: string; 
  public get numRecordsInResponse() {
    return this.getStringAttribute('num_records_in_response');
  }
  public set numRecordsInResponse(value: string) {
    this._numRecordsInResponse = value;
  }
  public resetNumRecordsInResponse() {
    this._numRecordsInResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRecordsInResponseInput() {
    return this._numRecordsInResponse;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // wildcard_match - computed: false, optional: true, required: false
  private _wildcardMatch?: string; 
  public get wildcardMatch() {
    return this.getStringAttribute('wildcard_match');
  }
  public set wildcardMatch(value: string) {
    this._wildcardMatch = value;
  }
  public resetWildcardMatch() {
    this._wildcardMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardMatchInput() {
    return this._wildcardMatch;
  }

  // cname - computed: false, optional: true, required: false
  private _cname = new VirtualserviceStaticDnsRecordsCnameList(this, "cname", true);
  public get cname() {
    return this._cname;
  }
  public putCname(value: VirtualserviceStaticDnsRecordsCname[] | cdktf.IResolvable) {
    this._cname.internalValue = value;
  }
  public resetCname() {
    this._cname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname.internalValue;
  }

  // ip6_address - computed: false, optional: true, required: false
  private _ip6Address = new VirtualserviceStaticDnsRecordsIp6AddressList(this, "ip6_address", false);
  public get ip6Address() {
    return this._ip6Address;
  }
  public putIp6Address(value: VirtualserviceStaticDnsRecordsIp6Address[] | cdktf.IResolvable) {
    this._ip6Address.internalValue = value;
  }
  public resetIp6Address() {
    this._ip6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address.internalValue;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress = new VirtualserviceStaticDnsRecordsIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }
  public putIpAddress(value: VirtualserviceStaticDnsRecordsIpAddress[] | cdktf.IResolvable) {
    this._ipAddress.internalValue = value;
  }
  public resetIpAddress() {
    this._ipAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress.internalValue;
  }

  // mx_records - computed: false, optional: true, required: false
  private _mxRecords = new VirtualserviceStaticDnsRecordsMxRecordsList(this, "mx_records", false);
  public get mxRecords() {
    return this._mxRecords;
  }
  public putMxRecords(value: VirtualserviceStaticDnsRecordsMxRecords[] | cdktf.IResolvable) {
    this._mxRecords.internalValue = value;
  }
  public resetMxRecords() {
    this._mxRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxRecordsInput() {
    return this._mxRecords.internalValue;
  }

  // ns - computed: false, optional: true, required: false
  private _ns = new VirtualserviceStaticDnsRecordsNsList(this, "ns", false);
  public get ns() {
    return this._ns;
  }
  public putNs(value: VirtualserviceStaticDnsRecordsNs[] | cdktf.IResolvable) {
    this._ns.internalValue = value;
  }
  public resetNs() {
    this._ns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsInput() {
    return this._ns.internalValue;
  }

  // service_locator - computed: false, optional: true, required: false
  private _serviceLocator = new VirtualserviceStaticDnsRecordsServiceLocatorList(this, "service_locator", false);
  public get serviceLocator() {
    return this._serviceLocator;
  }
  public putServiceLocator(value: VirtualserviceStaticDnsRecordsServiceLocator[] | cdktf.IResolvable) {
    this._serviceLocator.internalValue = value;
  }
  public resetServiceLocator() {
    this._serviceLocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLocatorInput() {
    return this._serviceLocator.internalValue;
  }

  // txt_records - computed: false, optional: true, required: false
  private _txtRecords = new VirtualserviceStaticDnsRecordsTxtRecordsList(this, "txt_records", false);
  public get txtRecords() {
    return this._txtRecords;
  }
  public putTxtRecords(value: VirtualserviceStaticDnsRecordsTxtRecords[] | cdktf.IResolvable) {
    this._txtRecords.internalValue = value;
  }
  public resetTxtRecords() {
    this._txtRecords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtRecordsInput() {
    return this._txtRecords.internalValue;
  }
}

export class VirtualserviceStaticDnsRecordsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceStaticDnsRecords[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceStaticDnsRecordsOutputReference {
    return new VirtualserviceStaticDnsRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceTopologyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#dns_policy_ref Virtualservice#dns_policy_ref}
  */
  readonly dnsPolicyRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#index Virtualservice#index}
  */
  readonly index: string;
}

export function virtualserviceTopologyPoliciesToTerraform(struct?: VirtualserviceTopologyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_policy_ref: cdktf.stringToTerraform(struct!.dnsPolicyRef),
    index: cdktf.stringToTerraform(struct!.index),
  }
}


export function virtualserviceTopologyPoliciesToHclTerraform(struct?: VirtualserviceTopologyPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_policy_ref: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicyRef),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceTopologyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceTopologyPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsPolicyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicyRef = this._dnsPolicyRef;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceTopologyPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsPolicyRef = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsPolicyRef = value.dnsPolicyRef;
      this._index = value.index;
    }
  }

  // dns_policy_ref - computed: false, optional: false, required: true
  private _dnsPolicyRef?: string; 
  public get dnsPolicyRef() {
    return this.getStringAttribute('dns_policy_ref');
  }
  public set dnsPolicyRef(value: string) {
    this._dnsPolicyRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyRefInput() {
    return this._dnsPolicyRef;
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
}

export class VirtualserviceTopologyPoliciesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceTopologyPolicies[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceTopologyPoliciesOutputReference {
    return new VirtualserviceTopologyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#user_defined_type Virtualservice#user_defined_type}
  */
  readonly userDefinedType?: string;
}

export function virtualserviceVhMatchesRulesMatchesBotDetectionResultClassificationsToTerraform(struct?: VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_defined_type: cdktf.stringToTerraform(struct!.userDefinedType),
  }
}


export function virtualserviceVhMatchesRulesMatchesBotDetectionResultClassificationsToHclTerraform(struct?: VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassifications | cdktf.IResolvable): any {
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
    user_defined_type: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userDefinedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedType = this._userDefinedType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userDefinedType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userDefinedType = value.userDefinedType;
    }
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

  // user_defined_type - computed: true, optional: true, required: false
  private _userDefinedType?: string; 
  public get userDefinedType() {
    return this.getStringAttribute('user_defined_type');
  }
  public set userDefinedType(value: string) {
    this._userDefinedType = value;
  }
  public resetUserDefinedType() {
    this._userDefinedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedTypeInput() {
    return this._userDefinedType;
  }
}

export class VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassificationsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassifications[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassificationsOutputReference {
    return new VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceVhMatchesRulesMatchesBotDetectionResult {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#match_operation Virtualservice#match_operation}
  */
  readonly matchOperation: string;
  /**
  * classifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#classifications Virtualservice#classifications}
  */
  readonly classifications?: VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassifications[] | cdktf.IResolvable;
}

export function virtualserviceVhMatchesRulesMatchesBotDetectionResultToTerraform(struct?: VirtualserviceVhMatchesRulesMatchesBotDetectionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    classifications: cdktf.listMapper(virtualserviceVhMatchesRulesMatchesBotDetectionResultClassificationsToTerraform, true)(struct!.classifications),
  }
}


export function virtualserviceVhMatchesRulesMatchesBotDetectionResultToHclTerraform(struct?: VirtualserviceVhMatchesRulesMatchesBotDetectionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifications: {
      value: cdktf.listMapperHcl(virtualserviceVhMatchesRulesMatchesBotDetectionResultClassificationsToHclTerraform, true)(struct!.classifications),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceVhMatchesRulesMatchesBotDetectionResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceVhMatchesRulesMatchesBotDetectionResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._classifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifications = this._classifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualserviceVhMatchesRulesMatchesBotDetectionResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchOperation = undefined;
      this._classifications.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchOperation = value.matchOperation;
      this._classifications.internalValue = value.classifications;
    }
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // classifications - computed: false, optional: true, required: false
  private _classifications = new VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }
  public putClassifications(value: VirtualserviceVhMatchesRulesMatchesBotDetectionResultClassifications[] | cdktf.IResolvable) {
    this._classifications.internalValue = value;
  }
  public resetClassifications() {
    this._classifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsInput() {
    return this._classifications.internalValue;
  }
}

export class VirtualserviceVhMatchesRulesMatchesBotDetectionResultList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceVhMatchesRulesMatchesBotDetectionResult[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceVhMatchesRulesMatchesBotDetectionResultOutputReference {
    return new VirtualserviceVhMatchesRulesMatchesBotDetectionResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceVhMatchesRulesMatchesClientIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceVhMatchesRulesMatchesClientIpAddrsToTerraform(struct?: VirtualserviceVhMatchesRulesMatchesClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceVhMatchesRulesMatchesClientIpAddrsToHclTerraform(struct?: VirtualserviceVhMatchesRulesMatchesClientIpAddrs | cdktf.IResolvable): any {
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

export class VirtualserviceVhMatchesRulesMatchesClientIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceVhMatchesRulesMatchesClientIpAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceVhMatchesRulesMatchesClientIpAddrs | cdktf.IResolvable | undefined) {
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

export class VirtualserviceVhMatchesRulesMatchesClientIpAddrsList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceVhMatchesRulesMatchesClientIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceVhMatchesRulesMatchesClientIpAddrsOutputReference {
    return new VirtualserviceVhMatchesRulesMatchesClientIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddrToTerraform(struct?: VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddrToHclTerraform(struct?: VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddr | cdktf.IResolvable): any {
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

export class VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddrOutputReference {
    return new VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceVhMatchesRulesMatchesClientIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#mask Virtualservice#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#ip_addr Virtualservice#ip_addr}
  */
  readonly ipAddr: VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function virtualserviceVhMatchesRulesMatchesClientIpPrefixesToTerraform(struct?: VirtualserviceVhMatchesRulesMatchesClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(virtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function virtualserviceVhMatchesRulesMatchesClientIpPrefixesToHclTerraform(struct?: VirtualserviceVhMatchesRulesMatchesClientIpPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualserviceVhMatchesRulesMatchesClientIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceVhMatchesRulesMatchesClientIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceVhMatchesRulesMatchesClientIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: VirtualserviceVhMatchesRulesMatchesClientIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class VirtualserviceVhMatchesRulesMatchesClientIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceVhMatchesRulesMatchesClientIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceVhMatchesRulesMatchesClientIpPrefixesOutputReference {
    return new VirtualserviceVhMatchesRulesMatchesClientIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceVhMatchesRulesMatchesClientIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceVhMatchesRulesMatchesClientIpRangesBeginToTerraform(struct?: VirtualserviceVhMatchesRulesMatchesClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceVhMatchesRulesMatchesClientIpRangesBeginToHclTerraform(struct?: VirtualserviceVhMatchesRulesMatchesClientIpRangesBegin | cdktf.IResolvable): any {
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

export class VirtualserviceVhMatchesRulesMatchesClientIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceVhMatchesRulesMatchesClientIpRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceVhMatchesRulesMatchesClientIpRangesBegin | cdktf.IResolvable | undefined) {
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

export class VirtualserviceVhMatchesRulesMatchesClientIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceVhMatchesRulesMatchesClientIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceVhMatchesRulesMatchesClientIpRangesBeginOutputReference {
    return new VirtualserviceVhMatchesRulesMatchesClientIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualserviceVhMatchesRulesMatchesClientIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#addr Virtualservice#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/virtualservice#type Virtualservice#type}
  */
  readonly type: string;
}

export function virtualserviceVhMatchesRulesMatchesClientIpRangesEndToTerraform(struct?: VirtualserviceVhMatchesRulesMatchesClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualserviceVhMatchesRulesMatchesClientIpRangesEndToHclTerraform(struct?: VirtualserviceVhMatchesRulesMatchesClientIpRangesEnd | cdktf.IResolvable): any {
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

export class VirtualserviceVhMatchesRulesMatchesClientIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualserviceVhMatchesRulesMatchesClientIpRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualserviceVhMatchesRulesMatchesClientIpRangesEnd | cdktf.IResolvable | undefined) {
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

export class VirtualserviceVhMatchesRulesMatchesClientIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : VirtualserviceVhMatchesRulesMatchesClientIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): VirtualserviceVhMatchesRulesMatchesClientIpRangesEndOutputReference {
    return new VirtualserviceVhMatchesRulesMatchesClientIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
