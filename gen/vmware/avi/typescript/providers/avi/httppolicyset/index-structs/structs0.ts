import * as cdktf from 'cdktf';
export interface HttppolicysetConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#version Httppolicyset#version}
  */
  readonly version?: string;
}

export function httppolicysetConfigpbAttributesToTerraform(struct?: HttppolicysetConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function httppolicysetConfigpbAttributesToHclTerraform(struct?: HttppolicysetConfigpbAttributes | cdktf.IResolvable): any {
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

export class HttppolicysetConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class HttppolicysetConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetConfigpbAttributesOutputReference {
    return new HttppolicysetConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesHdrActionCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string;
}

export function httppolicysetHttpRequestPolicyRulesHdrActionCookieToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesHdrActionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function httppolicysetHttpRequestPolicyRulesHdrActionCookieToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesHdrActionCookie | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesHdrActionCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesHdrActionCookie | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesHdrActionCookie | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesHdrActionCookieList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesHdrActionCookie[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesHdrActionCookieOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesHdrActionCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesHdrActionHdrValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#is_sensitive Httppolicyset#is_sensitive}
  */
  readonly isSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#val Httppolicyset#val}
  */
  readonly val?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#var Httppolicyset#var}
  */
  readonly var?: string;
}

export function httppolicysetHttpRequestPolicyRulesHdrActionHdrValueToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesHdrActionHdrValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_sensitive: cdktf.stringToTerraform(struct!.isSensitive),
    val: cdktf.stringToTerraform(struct!.val),
    var: cdktf.stringToTerraform(struct!.var),
  }
}


export function httppolicysetHttpRequestPolicyRulesHdrActionHdrValueToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesHdrActionHdrValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.isSensitive),
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
    var: {
      value: cdktf.stringToHclTerraform(struct!.var),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesHdrActionHdrValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesHdrActionHdrValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._val !== undefined) {
      hasAnyValues = true;
      internalValueResult.val = this._val;
    }
    if (this._var !== undefined) {
      hasAnyValues = true;
      internalValueResult.var = this._var;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesHdrActionHdrValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSensitive = undefined;
      this._val = undefined;
      this._var = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSensitive = value.isSensitive;
      this._val = value.val;
      this._var = value.var;
    }
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: string; 
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }
  public set isSensitive(value: string) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
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

  // var - computed: true, optional: true, required: false
  private _var?: string; 
  public get var() {
    return this.getStringAttribute('var');
  }
  public set var(value: string) {
    this._var = value;
  }
  public resetVar() {
    this._var = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varInput() {
    return this._var;
  }
}

export class HttppolicysetHttpRequestPolicyRulesHdrActionHdrValueList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesHdrActionHdrValue[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesHdrActionHdrValueOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesHdrActionHdrValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesHdrActionHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: HttppolicysetHttpRequestPolicyRulesHdrActionHdrValue[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesHdrActionHdrToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesHdrActionHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesHdrActionHdrValueToTerraform, true)(struct!.value),
  }
}


export function httppolicysetHttpRequestPolicyRulesHdrActionHdrToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesHdrActionHdr | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesHdrActionHdrValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesHdrActionHdrValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesHdrActionHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesHdrActionHdr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesHdrActionHdr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new HttppolicysetHttpRequestPolicyRulesHdrActionHdrValueList(this, "value", true);
  public get value() {
    return this._value;
  }
  public putValue(value: HttppolicysetHttpRequestPolicyRulesHdrActionHdrValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesHdrActionHdrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesHdrActionHdr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesHdrActionHdrOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesHdrActionHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesHdrAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#action Httppolicyset#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdr_index Httppolicyset#hdr_index}
  */
  readonly hdrIndex?: string;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#cookie Httppolicyset#cookie}
  */
  readonly cookie?: HttppolicysetHttpRequestPolicyRulesHdrActionCookie[] | cdktf.IResolvable;
  /**
  * hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdr Httppolicyset#hdr}
  */
  readonly hdr?: HttppolicysetHttpRequestPolicyRulesHdrActionHdr[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesHdrActionToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesHdrAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    hdr_index: cdktf.stringToTerraform(struct!.hdrIndex),
    cookie: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesHdrActionCookieToTerraform, true)(struct!.cookie),
    hdr: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesHdrActionHdrToTerraform, true)(struct!.hdr),
  }
}


export function httppolicysetHttpRequestPolicyRulesHdrActionToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesHdrAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdr_index: {
      value: cdktf.stringToHclTerraform(struct!.hdrIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesHdrActionCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesHdrActionCookieList",
    },
    hdr: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesHdrActionHdrToHclTerraform, true)(struct!.hdr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesHdrActionHdrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesHdrActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesHdrAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._hdrIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrIndex = this._hdrIndex;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._hdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdr = this._hdr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesHdrAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._hdrIndex = undefined;
      this._cookie.internalValue = undefined;
      this._hdr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._hdrIndex = value.hdrIndex;
      this._cookie.internalValue = value.cookie;
      this._hdr.internalValue = value.hdr;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // hdr_index - computed: true, optional: true, required: false
  private _hdrIndex?: string; 
  public get hdrIndex() {
    return this.getStringAttribute('hdr_index');
  }
  public set hdrIndex(value: string) {
    this._hdrIndex = value;
  }
  public resetHdrIndex() {
    this._hdrIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrIndexInput() {
    return this._hdrIndex;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new HttppolicysetHttpRequestPolicyRulesHdrActionCookieList(this, "cookie", true);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: HttppolicysetHttpRequestPolicyRulesHdrActionCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // hdr - computed: false, optional: true, required: false
  private _hdr = new HttppolicysetHttpRequestPolicyRulesHdrActionHdrList(this, "hdr", true);
  public get hdr() {
    return this._hdr;
  }
  public putHdr(value: HttppolicysetHttpRequestPolicyRulesHdrActionHdr[] | cdktf.IResolvable) {
    this._hdr.internalValue = value;
  }
  public resetHdr() {
    this._hdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrInput() {
    return this._hdr.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesHdrActionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesHdrAction[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesHdrActionOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesHdrActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#user_defined_type Httppolicyset#user_defined_type}
  */
  readonly userDefinedType?: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassificationsToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_defined_type: cdktf.stringToTerraform(struct!.userDefinedType),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassificationsToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassifications | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassifications | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassifications | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassificationsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassifications[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassificationsOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResult {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_operation Httppolicyset#match_operation}
  */
  readonly matchOperation: string;
  /**
  * classifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#classifications Httppolicyset#classifications}
  */
  readonly classifications?: HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassifications[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesMatchBotDetectionResultToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    classifications: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassificationsToTerraform, true)(struct!.classifications),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchBotDetectionResultToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResult | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassificationsToHclTerraform, true)(struct!.classifications),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResult | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResult | cdktf.IResolvable | undefined) {
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
  private _classifications = new HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }
  public putClassifications(value: HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultClassifications[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResult[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchClientIpAddrsToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchClientIpAddrsToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrs | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrs | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrsOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddrToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddrToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddrOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#mask Httppolicyset#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ip_addr Httppolicyset#ip_addr}
  */
  readonly ipAddr: HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchClientIpRangesBeginToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchClientIpRangesBeginToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBeginOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchClientIpRangesEndToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchClientIpRangesEndToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEndOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchClientIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#begin Httppolicyset#begin}
  */
  readonly begin: HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end Httppolicyset#end}
  */
  readonly end: HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEnd[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesMatchClientIpRangesToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchClientIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchClientIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchClientIpRangesToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchClientIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchClientIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchClientIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpRanges | cdktf.IResolvable | undefined) {
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
  private _begin = new HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchClientIpRanges[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#group_refs Httppolicyset#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addrs Httppolicyset#addrs}
  */
  readonly addrs?: HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#prefixes Httppolicyset#prefixes}
  */
  readonly prefixes?: HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ranges Httppolicyset#ranges}
  */
  readonly ranges?: HttppolicysetHttpRequestPolicyRulesMatchClientIpRanges[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesMatchClientIpToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchClientIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchClientIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchClientIpToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchClientIp | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchClientIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchClientIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchClientIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchClientIp | cdktf.IResolvable | undefined) {
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
  private _addrs = new HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpAddrs[] | cdktf.IResolvable) {
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
  private _prefixes = new HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpPrefixes[] | cdktf.IResolvable) {
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
  private _ranges = new HttppolicysetHttpRequestPolicyRulesMatchClientIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: HttppolicysetHttpRequestPolicyRulesMatchClientIpRanges[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchClientIpList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchClientIp[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchClientIpOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchCookieToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchCookieToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchCookie | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchCookie | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
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
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._name = value.name;
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

export class HttppolicysetHttpRequestPolicyRulesMatchCookieList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchCookie[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchCookieOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchGeoMatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#attribute Httppolicyset#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_operation Httppolicyset#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#values Httppolicyset#values}
  */
  readonly values: string[];
}

export function httppolicysetHttpRequestPolicyRulesMatchGeoMatchesToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchGeoMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchGeoMatchesToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchGeoMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
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

export class HttppolicysetHttpRequestPolicyRulesMatchGeoMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchGeoMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchGeoMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._matchOperation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._matchOperation = value.matchOperation;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class HttppolicysetHttpRequestPolicyRulesMatchGeoMatchesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchGeoMatches[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchGeoMatchesOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchGeoMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchHdrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdr Httppolicyset#hdr}
  */
  readonly hdr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string[];
}

export function httppolicysetHttpRequestPolicyRulesMatchHdrsToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdr: cdktf.stringToTerraform(struct!.hdr),
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchHdrsToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdr: {
      value: cdktf.stringToHclTerraform(struct!.hdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class HttppolicysetHttpRequestPolicyRulesMatchHdrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchHdrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdr = this._hdr;
    }
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchHdrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdr = undefined;
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
      this._hdr = value.hdr;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._value = value.value;
    }
  }

  // hdr - computed: false, optional: false, required: true
  private _hdr?: string; 
  public get hdr() {
    return this.getStringAttribute('hdr');
  }
  public set hdr(value: string) {
    this._hdr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrInput() {
    return this._hdr;
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

export class HttppolicysetHttpRequestPolicyRulesMatchHdrsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchHdrs[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchHdrsOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchHdrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchHostHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string[];
}

export function httppolicysetHttpRequestPolicyRulesMatchHostHdrToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchHostHdr | cdktf.IResolvable): any {
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


export function httppolicysetHttpRequestPolicyRulesMatchHostHdrToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchHostHdr | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchHostHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchHostHdr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchHostHdr | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchHostHdrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchHostHdr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchHostHdrOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchHostHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchIpReputationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_operation Httppolicyset#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#reputation_types Httppolicyset#reputation_types}
  */
  readonly reputationTypes: string[];
}

export function httppolicysetHttpRequestPolicyRulesMatchIpReputationTypeToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchIpReputationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    reputation_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reputationTypes),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchIpReputationTypeToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchIpReputationType | cdktf.IResolvable): any {
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
    reputation_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reputationTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchIpReputationTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchIpReputationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._reputationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationTypes = this._reputationTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchIpReputationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchOperation = undefined;
      this._reputationTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchOperation = value.matchOperation;
      this._reputationTypes = value.reputationTypes;
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

  // reputation_types - computed: false, optional: false, required: true
  private _reputationTypes?: string[]; 
  public get reputationTypes() {
    return this.getListAttribute('reputation_types');
  }
  public set reputationTypes(value: string[]) {
    this._reputationTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationTypesInput() {
    return this._reputationTypes;
  }
}

export class HttppolicysetHttpRequestPolicyRulesMatchIpReputationTypeList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchIpReputationType[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchIpReputationTypeOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchIpReputationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#methods Httppolicyset#methods}
  */
  readonly methods: string[];
}

export function httppolicysetHttpRequestPolicyRulesMatchMethodToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchMethodToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchMethod | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchMethod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchMethod | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchMethodList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchMethod[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchMethodOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_decoded_string Httppolicyset#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_str Httppolicyset#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#string_group_refs Httppolicyset#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function httppolicysetHttpRequestPolicyRulesMatchPathToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchPath | cdktf.IResolvable): any {
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


export function httppolicysetHttpRequestPolicyRulesMatchPathToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchPath | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchPath | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchPathList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchPath[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchPathOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#protocols Httppolicyset#protocols}
  */
  readonly protocols: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchProtocolToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    protocols: cdktf.stringToTerraform(struct!.protocols),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchProtocolToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchProtocol | cdktf.IResolvable): any {
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
    protocols: {
      value: cdktf.stringToHclTerraform(struct!.protocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._protocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._protocols = value.protocols;
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

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string; 
  public get protocols() {
    return this.getStringAttribute('protocols');
  }
  public set protocols(value: string) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }
}

export class HttppolicysetHttpRequestPolicyRulesMatchProtocolList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchProtocol[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchProtocolOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_decoded_string Httppolicyset#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_str Httppolicyset#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#string_group_refs Httppolicyset#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function httppolicysetHttpRequestPolicyRulesMatchQueryToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchQuery | cdktf.IResolvable): any {
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


export function httppolicysetHttpRequestPolicyRulesMatchQueryToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchQuery | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchQuery | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchQueryList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchQuery[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchQueryOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchSourceIpAddrsToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchSourceIpAddrsToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrs | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrs | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrsOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddrToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddrToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddrOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#mask Httppolicyset#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ip_addr Httppolicyset#ip_addr}
  */
  readonly ipAddr: HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBeginToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBeginToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBeginOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEndToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEndToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEndOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchSourceIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#begin Httppolicyset#begin}
  */
  readonly begin: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end Httppolicyset#end}
  */
  readonly end: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchSourceIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRanges | cdktf.IResolvable | undefined) {
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
  private _begin = new HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchSourceIpRanges[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchSourceIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#group_refs Httppolicyset#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addrs Httppolicyset#addrs}
  */
  readonly addrs?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#prefixes Httppolicyset#prefixes}
  */
  readonly prefixes?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ranges Httppolicyset#ranges}
  */
  readonly ranges?: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRanges[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesMatchSourceIpToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchSourceIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchSourceIpToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchSourceIp | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchSourceIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchSourceIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchSourceIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIp | cdktf.IResolvable | undefined) {
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
  private _addrs = new HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpAddrs[] | cdktf.IResolvable) {
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
  private _prefixes = new HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpPrefixes[] | cdktf.IResolvable) {
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
  private _ranges = new HttppolicysetHttpRequestPolicyRulesMatchSourceIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIpRanges[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpRequestPolicyRulesMatchSourceIpList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchSourceIp[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchSourceIpOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#fingerprints Httppolicyset#fingerprints}
  */
  readonly fingerprints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_operation Httppolicyset#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#string_group_refs Httppolicyset#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function httppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatchToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fingerprints),
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatchToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprints = this._fingerprints;
    }
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fingerprints = undefined;
      this._matchOperation = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fingerprints = value.fingerprints;
      this._matchOperation = value.matchOperation;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // fingerprints - computed: false, optional: true, required: false
  private _fingerprints?: string[]; 
  public get fingerprints() {
    return this.getListAttribute('fingerprints');
  }
  public set fingerprints(value: string[]) {
    this._fingerprints = value;
  }
  public resetFingerprints() {
    this._fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintsInput() {
    return this._fingerprints;
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

export class HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatchList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatch[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatchOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#versions Httppolicyset#versions}
  */
  readonly versions: string[];
}

export function httppolicysetHttpRequestPolicyRulesMatchVersionToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchVersionToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchVersion | cdktf.IResolvable): any {
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
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._versions = value.versions;
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

  // versions - computed: false, optional: false, required: true
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class HttppolicysetHttpRequestPolicyRulesMatchVersionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchVersion[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchVersionOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatchVsPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ports Httppolicyset#ports}
  */
  readonly ports: number[];
}

export function httppolicysetHttpRequestPolicyRulesMatchVsPortToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchVsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchVsPortToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatchVsPort | cdktf.IResolvable): any {
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
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchVsPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatchVsPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatchVsPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._ports = value.ports;
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

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class HttppolicysetHttpRequestPolicyRulesMatchVsPortList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatchVsPort[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchVsPortOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchVsPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesMatch {
  /**
  * bot_detection_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#bot_detection_result Httppolicyset#bot_detection_result}
  */
  readonly botDetectionResult?: HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResult[] | cdktf.IResolvable;
  /**
  * client_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#client_ip Httppolicyset#client_ip}
  */
  readonly clientIp?: HttppolicysetHttpRequestPolicyRulesMatchClientIp[] | cdktf.IResolvable;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#cookie Httppolicyset#cookie}
  */
  readonly cookie?: HttppolicysetHttpRequestPolicyRulesMatchCookie[] | cdktf.IResolvable;
  /**
  * geo_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#geo_matches Httppolicyset#geo_matches}
  */
  readonly geoMatches?: HttppolicysetHttpRequestPolicyRulesMatchGeoMatches[] | cdktf.IResolvable;
  /**
  * hdrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdrs Httppolicyset#hdrs}
  */
  readonly hdrs?: HttppolicysetHttpRequestPolicyRulesMatchHdrs[] | cdktf.IResolvable;
  /**
  * host_hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#host_hdr Httppolicyset#host_hdr}
  */
  readonly hostHdr?: HttppolicysetHttpRequestPolicyRulesMatchHostHdr[] | cdktf.IResolvable;
  /**
  * ip_reputation_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ip_reputation_type Httppolicyset#ip_reputation_type}
  */
  readonly ipReputationType?: HttppolicysetHttpRequestPolicyRulesMatchIpReputationType[] | cdktf.IResolvable;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#method Httppolicyset#method}
  */
  readonly method?: HttppolicysetHttpRequestPolicyRulesMatchMethod[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#path Httppolicyset#path}
  */
  readonly path?: HttppolicysetHttpRequestPolicyRulesMatchPath[] | cdktf.IResolvable;
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#protocol Httppolicyset#protocol}
  */
  readonly protocol?: HttppolicysetHttpRequestPolicyRulesMatchProtocol[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#query Httppolicyset#query}
  */
  readonly query?: HttppolicysetHttpRequestPolicyRulesMatchQuery[] | cdktf.IResolvable;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#source_ip Httppolicyset#source_ip}
  */
  readonly sourceIp?: HttppolicysetHttpRequestPolicyRulesMatchSourceIp[] | cdktf.IResolvable;
  /**
  * tls_fingerprint_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#tls_fingerprint_match Httppolicyset#tls_fingerprint_match}
  */
  readonly tlsFingerprintMatch?: HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatch[] | cdktf.IResolvable;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#version Httppolicyset#version}
  */
  readonly version?: HttppolicysetHttpRequestPolicyRulesMatchVersion[] | cdktf.IResolvable;
  /**
  * vs_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#vs_port Httppolicyset#vs_port}
  */
  readonly vsPort?: HttppolicysetHttpRequestPolicyRulesMatchVsPort[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesMatchToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_detection_result: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchBotDetectionResultToTerraform, true)(struct!.botDetectionResult),
    client_ip: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchClientIpToTerraform, true)(struct!.clientIp),
    cookie: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchCookieToTerraform, true)(struct!.cookie),
    geo_matches: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchGeoMatchesToTerraform, true)(struct!.geoMatches),
    hdrs: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchHdrsToTerraform, true)(struct!.hdrs),
    host_hdr: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchHostHdrToTerraform, true)(struct!.hostHdr),
    ip_reputation_type: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchIpReputationTypeToTerraform, true)(struct!.ipReputationType),
    method: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchMethodToTerraform, true)(struct!.method),
    path: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchPathToTerraform, true)(struct!.path),
    protocol: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchProtocolToTerraform, true)(struct!.protocol),
    query: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchQueryToTerraform, true)(struct!.query),
    source_ip: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchSourceIpToTerraform, true)(struct!.sourceIp),
    tls_fingerprint_match: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatchToTerraform, true)(struct!.tlsFingerprintMatch),
    version: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchVersionToTerraform, true)(struct!.version),
    vs_port: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchVsPortToTerraform, true)(struct!.vsPort),
  }
}


export function httppolicysetHttpRequestPolicyRulesMatchToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_detection_result: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchBotDetectionResultToHclTerraform, true)(struct!.botDetectionResult),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultList",
    },
    client_ip: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchClientIpToHclTerraform, true)(struct!.clientIp),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchClientIpList",
    },
    cookie: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchCookieList",
    },
    geo_matches: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchGeoMatchesToHclTerraform, true)(struct!.geoMatches),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchGeoMatchesList",
    },
    hdrs: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchHdrsToHclTerraform, true)(struct!.hdrs),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchHdrsList",
    },
    host_hdr: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchHostHdrToHclTerraform, true)(struct!.hostHdr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchHostHdrList",
    },
    ip_reputation_type: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchIpReputationTypeToHclTerraform, true)(struct!.ipReputationType),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchIpReputationTypeList",
    },
    method: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchMethodList",
    },
    path: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchPathList",
    },
    protocol: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchProtocolToHclTerraform, true)(struct!.protocol),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchProtocolList",
    },
    query: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchQueryList",
    },
    source_ip: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchSourceIpToHclTerraform, true)(struct!.sourceIp),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchSourceIpList",
    },
    tls_fingerprint_match: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatchToHclTerraform, true)(struct!.tlsFingerprintMatch),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatchList",
    },
    version: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchVersionToHclTerraform, true)(struct!.version),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchVersionList",
    },
    vs_port: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchVsPortToHclTerraform, true)(struct!.vsPort),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchVsPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botDetectionResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botDetectionResult = this._botDetectionResult?.internalValue;
    }
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._geoMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoMatches = this._geoMatches?.internalValue;
    }
    if (this._hdrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrs = this._hdrs?.internalValue;
    }
    if (this._hostHdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHdr = this._hostHdr?.internalValue;
    }
    if (this._ipReputationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReputationType = this._ipReputationType?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    if (this._tlsFingerprintMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatch = this._tlsFingerprintMatch?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    if (this._vsPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsPort = this._vsPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botDetectionResult.internalValue = undefined;
      this._clientIp.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._geoMatches.internalValue = undefined;
      this._hdrs.internalValue = undefined;
      this._hostHdr.internalValue = undefined;
      this._ipReputationType.internalValue = undefined;
      this._method.internalValue = undefined;
      this._path.internalValue = undefined;
      this._protocol.internalValue = undefined;
      this._query.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
      this._tlsFingerprintMatch.internalValue = undefined;
      this._version.internalValue = undefined;
      this._vsPort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botDetectionResult.internalValue = value.botDetectionResult;
      this._clientIp.internalValue = value.clientIp;
      this._cookie.internalValue = value.cookie;
      this._geoMatches.internalValue = value.geoMatches;
      this._hdrs.internalValue = value.hdrs;
      this._hostHdr.internalValue = value.hostHdr;
      this._ipReputationType.internalValue = value.ipReputationType;
      this._method.internalValue = value.method;
      this._path.internalValue = value.path;
      this._protocol.internalValue = value.protocol;
      this._query.internalValue = value.query;
      this._sourceIp.internalValue = value.sourceIp;
      this._tlsFingerprintMatch.internalValue = value.tlsFingerprintMatch;
      this._version.internalValue = value.version;
      this._vsPort.internalValue = value.vsPort;
    }
  }

  // bot_detection_result - computed: false, optional: true, required: false
  private _botDetectionResult = new HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResultList(this, "bot_detection_result", true);
  public get botDetectionResult() {
    return this._botDetectionResult;
  }
  public putBotDetectionResult(value: HttppolicysetHttpRequestPolicyRulesMatchBotDetectionResult[] | cdktf.IResolvable) {
    this._botDetectionResult.internalValue = value;
  }
  public resetBotDetectionResult() {
    this._botDetectionResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDetectionResultInput() {
    return this._botDetectionResult.internalValue;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new HttppolicysetHttpRequestPolicyRulesMatchClientIpList(this, "client_ip", true);
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: HttppolicysetHttpRequestPolicyRulesMatchClientIp[] | cdktf.IResolvable) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new HttppolicysetHttpRequestPolicyRulesMatchCookieList(this, "cookie", true);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: HttppolicysetHttpRequestPolicyRulesMatchCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // geo_matches - computed: false, optional: true, required: false
  private _geoMatches = new HttppolicysetHttpRequestPolicyRulesMatchGeoMatchesList(this, "geo_matches", false);
  public get geoMatches() {
    return this._geoMatches;
  }
  public putGeoMatches(value: HttppolicysetHttpRequestPolicyRulesMatchGeoMatches[] | cdktf.IResolvable) {
    this._geoMatches.internalValue = value;
  }
  public resetGeoMatches() {
    this._geoMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchesInput() {
    return this._geoMatches.internalValue;
  }

  // hdrs - computed: false, optional: true, required: false
  private _hdrs = new HttppolicysetHttpRequestPolicyRulesMatchHdrsList(this, "hdrs", false);
  public get hdrs() {
    return this._hdrs;
  }
  public putHdrs(value: HttppolicysetHttpRequestPolicyRulesMatchHdrs[] | cdktf.IResolvable) {
    this._hdrs.internalValue = value;
  }
  public resetHdrs() {
    this._hdrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrsInput() {
    return this._hdrs.internalValue;
  }

  // host_hdr - computed: false, optional: true, required: false
  private _hostHdr = new HttppolicysetHttpRequestPolicyRulesMatchHostHdrList(this, "host_hdr", true);
  public get hostHdr() {
    return this._hostHdr;
  }
  public putHostHdr(value: HttppolicysetHttpRequestPolicyRulesMatchHostHdr[] | cdktf.IResolvable) {
    this._hostHdr.internalValue = value;
  }
  public resetHostHdr() {
    this._hostHdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHdrInput() {
    return this._hostHdr.internalValue;
  }

  // ip_reputation_type - computed: false, optional: true, required: false
  private _ipReputationType = new HttppolicysetHttpRequestPolicyRulesMatchIpReputationTypeList(this, "ip_reputation_type", true);
  public get ipReputationType() {
    return this._ipReputationType;
  }
  public putIpReputationType(value: HttppolicysetHttpRequestPolicyRulesMatchIpReputationType[] | cdktf.IResolvable) {
    this._ipReputationType.internalValue = value;
  }
  public resetIpReputationType() {
    this._ipReputationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationTypeInput() {
    return this._ipReputationType.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new HttppolicysetHttpRequestPolicyRulesMatchMethodList(this, "method", true);
  public get method() {
    return this._method;
  }
  public putMethod(value: HttppolicysetHttpRequestPolicyRulesMatchMethod[] | cdktf.IResolvable) {
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
  private _path = new HttppolicysetHttpRequestPolicyRulesMatchPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: HttppolicysetHttpRequestPolicyRulesMatchPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new HttppolicysetHttpRequestPolicyRulesMatchProtocolList(this, "protocol", true);
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: HttppolicysetHttpRequestPolicyRulesMatchProtocol[] | cdktf.IResolvable) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new HttppolicysetHttpRequestPolicyRulesMatchQueryList(this, "query", true);
  public get query() {
    return this._query;
  }
  public putQuery(value: HttppolicysetHttpRequestPolicyRulesMatchQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new HttppolicysetHttpRequestPolicyRulesMatchSourceIpList(this, "source_ip", true);
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: HttppolicysetHttpRequestPolicyRulesMatchSourceIp[] | cdktf.IResolvable) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }

  // tls_fingerprint_match - computed: false, optional: true, required: false
  private _tlsFingerprintMatch = new HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatchList(this, "tls_fingerprint_match", true);
  public get tlsFingerprintMatch() {
    return this._tlsFingerprintMatch;
  }
  public putTlsFingerprintMatch(value: HttppolicysetHttpRequestPolicyRulesMatchTlsFingerprintMatch[] | cdktf.IResolvable) {
    this._tlsFingerprintMatch.internalValue = value;
  }
  public resetTlsFingerprintMatch() {
    this._tlsFingerprintMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatchInput() {
    return this._tlsFingerprintMatch.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version = new HttppolicysetHttpRequestPolicyRulesMatchVersionList(this, "version", true);
  public get version() {
    return this._version;
  }
  public putVersion(value: HttppolicysetHttpRequestPolicyRulesMatchVersion[] | cdktf.IResolvable) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // vs_port - computed: false, optional: true, required: false
  private _vsPort = new HttppolicysetHttpRequestPolicyRulesMatchVsPortList(this, "vs_port", true);
  public get vsPort() {
    return this._vsPort;
  }
  public putVsPort(value: HttppolicysetHttpRequestPolicyRulesMatchVsPort[] | cdktf.IResolvable) {
    this._vsPort.internalValue = value;
  }
  public resetVsPort() {
    this._vsPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsPortInput() {
    return this._vsPort.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesMatchList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesMatch[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesMatchOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end_index Httppolicyset#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#start_index Httppolicyset#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#str_value Httppolicyset#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesRedirectActionHostTokensToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokens | cdktf.IResolvable): any {
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


export function httppolicysetHttpRequestPolicyRulesRedirectActionHostTokensToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokens | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokens | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokens | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokensList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokens[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokensOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRedirectActionHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#tokens Httppolicyset#tokens}
  */
  readonly tokens: HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokens[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesRedirectActionHostToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRedirectActionHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRedirectActionHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function httppolicysetHttpRequestPolicyRulesRedirectActionHostToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRedirectActionHost | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRedirectActionHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesRedirectActionHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRedirectActionHost | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRedirectActionHost | cdktf.IResolvable | undefined) {
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
  private _tokens = new HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: HttppolicysetHttpRequestPolicyRulesRedirectActionHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesRedirectActionHostList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRedirectActionHost[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRedirectActionHostOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRedirectActionHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end_index Httppolicyset#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#start_index Httppolicyset#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#str_value Httppolicyset#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesRedirectActionPathTokensToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokens | cdktf.IResolvable): any {
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


export function httppolicysetHttpRequestPolicyRulesRedirectActionPathTokensToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokens | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokens | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokens | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokensList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokens[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokensOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRedirectActionPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#tokens Httppolicyset#tokens}
  */
  readonly tokens: HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokens[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesRedirectActionPathToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRedirectActionPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRedirectActionPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function httppolicysetHttpRequestPolicyRulesRedirectActionPathToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRedirectActionPath | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRedirectActionPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesRedirectActionPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRedirectActionPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRedirectActionPath | cdktf.IResolvable | undefined) {
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
  private _tokens = new HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: HttppolicysetHttpRequestPolicyRulesRedirectActionPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesRedirectActionPathList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRedirectActionPath[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRedirectActionPathOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRedirectActionPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRedirectAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#add_string Httppolicyset#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#keep_query Httppolicyset#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#port Httppolicyset#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#protocol Httppolicyset#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#status_code Httppolicyset#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#host Httppolicyset#host}
  */
  readonly host?: HttppolicysetHttpRequestPolicyRulesRedirectActionHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#path Httppolicyset#path}
  */
  readonly path?: HttppolicysetHttpRequestPolicyRulesRedirectActionPath[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesRedirectActionToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRedirectAction | cdktf.IResolvable): any {
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
    host: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRedirectActionHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRedirectActionPathToTerraform, true)(struct!.path),
  }
}


export function httppolicysetHttpRequestPolicyRulesRedirectActionToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRedirectAction | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRedirectActionHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRedirectActionHostList",
    },
    path: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRedirectActionPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRedirectActionPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesRedirectActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRedirectAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRedirectAction | cdktf.IResolvable | undefined) {
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
  private _host = new HttppolicysetHttpRequestPolicyRulesRedirectActionHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: HttppolicysetHttpRequestPolicyRulesRedirectActionHost[] | cdktf.IResolvable) {
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
  private _path = new HttppolicysetHttpRequestPolicyRulesRedirectActionPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: HttppolicysetHttpRequestPolicyRulesRedirectActionPath[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpRequestPolicyRulesRedirectActionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRedirectAction[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRedirectActionOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRedirectActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end_index Httppolicyset#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#start_index Httppolicyset#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#str_value Httppolicyset#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokensToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokens | cdktf.IResolvable): any {
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


export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokensToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokens | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokens | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokens | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokensList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokens[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokensOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#tokens Httppolicyset#tokens}
  */
  readonly tokens: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokens[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokensToTerraform, true)(struct!.tokens),
  }
}


export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdr | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdr | cdktf.IResolvable | undefined) {
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
  private _tokens = new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end_index Httppolicyset#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#start_index Httppolicyset#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#str_value Httppolicyset#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokensToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokens | cdktf.IResolvable): any {
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


export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokensToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokens | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokens | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokens | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokensList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokens[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokensOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#tokens Httppolicyset#tokens}
  */
  readonly tokens: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokens[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionPathToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionPathToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPath | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPath | cdktf.IResolvable | undefined) {
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
  private _tokens = new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPath[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#add_string Httppolicyset#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#keep_query Httppolicyset#keep_query}
  */
  readonly keepQuery?: string;
}

export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionQueryToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
  }
}


export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionQueryToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQuery | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQuery | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
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
}

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQueryList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQuery[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQueryOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesRewriteUrlAction {
  /**
  * host_hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#host_hdr Httppolicyset#host_hdr}
  */
  readonly hostHdr?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdr[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#path Httppolicyset#path}
  */
  readonly path?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPath[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#query Httppolicyset#query}
  */
  readonly query?: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQuery[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_hdr: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrToTerraform, true)(struct!.hostHdr),
    path: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRewriteUrlActionPathToTerraform, true)(struct!.path),
    query: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRewriteUrlActionQueryToTerraform, true)(struct!.query),
  }
}


export function httppolicysetHttpRequestPolicyRulesRewriteUrlActionToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesRewriteUrlAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_hdr: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrToHclTerraform, true)(struct!.hostHdr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrList",
    },
    path: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRewriteUrlActionPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathList",
    },
    query: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRewriteUrlActionQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesRewriteUrlAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHdr = this._hostHdr?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHdr.internalValue = undefined;
      this._path.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHdr.internalValue = value.hostHdr;
      this._path.internalValue = value.path;
      this._query.internalValue = value.query;
    }
  }

  // host_hdr - computed: false, optional: true, required: false
  private _hostHdr = new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdrList(this, "host_hdr", true);
  public get hostHdr() {
    return this._hostHdr;
  }
  public putHostHdr(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionHostHdr[] | cdktf.IResolvable) {
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
  private _path = new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQueryList(this, "query", true);
  public get query() {
    return this._query;
  }
  public putQuery(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlActionQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesRewriteUrlActionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesRewriteUrlAction[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesRewriteUrlActionOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesSwitchingActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#content_type Httppolicyset#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#file_content Httppolicyset#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#file_length Httppolicyset#file_length}
  */
  readonly fileLength?: string;
}

export function httppolicysetHttpRequestPolicyRulesSwitchingActionFileToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesSwitchingActionFile | cdktf.IResolvable): any {
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


export function httppolicysetHttpRequestPolicyRulesSwitchingActionFileToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesSwitchingActionFile | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesSwitchingActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesSwitchingActionFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesSwitchingActionFile | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesSwitchingActionFileList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesSwitchingActionFile[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesSwitchingActionFileOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesSwitchingActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpRequestPolicyRulesSwitchingActionServerIpToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpRequestPolicyRulesSwitchingActionServerIpToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIp | cdktf.IResolvable): any {
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

export class HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIp | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIpList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIp[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIpOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesSwitchingActionServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hostname Httppolicyset#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#port Httppolicyset#port}
  */
  readonly port?: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ip Httppolicyset#ip}
  */
  readonly ip: HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIp[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesSwitchingActionServerToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesSwitchingActionServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.stringToTerraform(struct!.port),
    ip: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesSwitchingActionServerIpToTerraform, true)(struct!.ip),
  }
}


export function httppolicysetHttpRequestPolicyRulesSwitchingActionServerToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesSwitchingActionServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    ip: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesSwitchingActionServerIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesSwitchingActionServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesSwitchingActionServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesSwitchingActionServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._port = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._port = value.port;
      this._ip.internalValue = value.ip;
    }
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // ip - computed: false, optional: false, required: true
  private _ip = new HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: HttppolicysetHttpRequestPolicyRulesSwitchingActionServerIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesSwitchingActionServerList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesSwitchingActionServer[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesSwitchingActionServerOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesSwitchingActionServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRulesSwitchingAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#action Httppolicyset#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#other_status_code Httppolicyset#other_status_code}
  */
  readonly otherStatusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#pool_group_ref Httppolicyset#pool_group_ref}
  */
  readonly poolGroupRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#pool_ref Httppolicyset#pool_ref}
  */
  readonly poolRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#status_code Httppolicyset#status_code}
  */
  readonly statusCode?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#file Httppolicyset#file}
  */
  readonly file?: HttppolicysetHttpRequestPolicyRulesSwitchingActionFile[] | cdktf.IResolvable;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#server Httppolicyset#server}
  */
  readonly server?: HttppolicysetHttpRequestPolicyRulesSwitchingActionServer[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesSwitchingActionToTerraform(struct?: HttppolicysetHttpRequestPolicyRulesSwitchingAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    other_status_code: cdktf.stringToTerraform(struct!.otherStatusCode),
    pool_group_ref: cdktf.stringToTerraform(struct!.poolGroupRef),
    pool_ref: cdktf.stringToTerraform(struct!.poolRef),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    file: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesSwitchingActionFileToTerraform, true)(struct!.file),
    server: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesSwitchingActionServerToTerraform, true)(struct!.server),
  }
}


export function httppolicysetHttpRequestPolicyRulesSwitchingActionToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRulesSwitchingAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_status_code: {
      value: cdktf.stringToHclTerraform(struct!.otherStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_group_ref: {
      value: cdktf.stringToHclTerraform(struct!.poolGroupRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_ref: {
      value: cdktf.stringToHclTerraform(struct!.poolRef),
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
    file: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesSwitchingActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesSwitchingActionFileList",
    },
    server: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesSwitchingActionServerToHclTerraform, true)(struct!.server),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesSwitchingActionServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesSwitchingActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRulesSwitchingAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._otherStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherStatusCode = this._otherStatusCode;
    }
    if (this._poolGroupRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolGroupRef = this._poolGroupRef;
    }
    if (this._poolRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolRef = this._poolRef;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRulesSwitchingAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._otherStatusCode = undefined;
      this._poolGroupRef = undefined;
      this._poolRef = undefined;
      this._statusCode = undefined;
      this._file.internalValue = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._otherStatusCode = value.otherStatusCode;
      this._poolGroupRef = value.poolGroupRef;
      this._poolRef = value.poolRef;
      this._statusCode = value.statusCode;
      this._file.internalValue = value.file;
      this._server.internalValue = value.server;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // other_status_code - computed: true, optional: true, required: false
  private _otherStatusCode?: string; 
  public get otherStatusCode() {
    return this.getStringAttribute('other_status_code');
  }
  public set otherStatusCode(value: string) {
    this._otherStatusCode = value;
  }
  public resetOtherStatusCode() {
    this._otherStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherStatusCodeInput() {
    return this._otherStatusCode;
  }

  // pool_group_ref - computed: true, optional: true, required: false
  private _poolGroupRef?: string; 
  public get poolGroupRef() {
    return this.getStringAttribute('pool_group_ref');
  }
  public set poolGroupRef(value: string) {
    this._poolGroupRef = value;
  }
  public resetPoolGroupRef() {
    this._poolGroupRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolGroupRefInput() {
    return this._poolGroupRef;
  }

  // pool_ref - computed: true, optional: true, required: false
  private _poolRef?: string; 
  public get poolRef() {
    return this.getStringAttribute('pool_ref');
  }
  public set poolRef(value: string) {
    this._poolRef = value;
  }
  public resetPoolRef() {
    this._poolRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRefInput() {
    return this._poolRef;
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

  // file - computed: false, optional: true, required: false
  private _file = new HttppolicysetHttpRequestPolicyRulesSwitchingActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: HttppolicysetHttpRequestPolicyRulesSwitchingActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server = new HttppolicysetHttpRequestPolicyRulesSwitchingActionServerList(this, "server", true);
  public get server() {
    return this._server;
  }
  public putServer(value: HttppolicysetHttpRequestPolicyRulesSwitchingActionServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesSwitchingActionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRulesSwitchingAction[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesSwitchingActionOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesSwitchingActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#all_headers Httppolicyset#all_headers}
  */
  readonly allHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#enable Httppolicyset#enable}
  */
  readonly enable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#index Httppolicyset#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#log Httppolicyset#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name: string;
  /**
  * hdr_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdr_action Httppolicyset#hdr_action}
  */
  readonly hdrAction?: HttppolicysetHttpRequestPolicyRulesHdrAction[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match Httppolicyset#match}
  */
  readonly match?: HttppolicysetHttpRequestPolicyRulesMatch[] | cdktf.IResolvable;
  /**
  * redirect_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#redirect_action Httppolicyset#redirect_action}
  */
  readonly redirectAction?: HttppolicysetHttpRequestPolicyRulesRedirectAction[] | cdktf.IResolvable;
  /**
  * rewrite_url_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#rewrite_url_action Httppolicyset#rewrite_url_action}
  */
  readonly rewriteUrlAction?: HttppolicysetHttpRequestPolicyRulesRewriteUrlAction[] | cdktf.IResolvable;
  /**
  * switching_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#switching_action Httppolicyset#switching_action}
  */
  readonly switchingAction?: HttppolicysetHttpRequestPolicyRulesSwitchingAction[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyRulesToTerraform(struct?: HttppolicysetHttpRequestPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_headers: cdktf.stringToTerraform(struct!.allHeaders),
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    log: cdktf.stringToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    hdr_action: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesHdrActionToTerraform, true)(struct!.hdrAction),
    match: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesMatchToTerraform, true)(struct!.match),
    redirect_action: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRedirectActionToTerraform, true)(struct!.redirectAction),
    rewrite_url_action: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesRewriteUrlActionToTerraform, true)(struct!.rewriteUrlAction),
    switching_action: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesSwitchingActionToTerraform, true)(struct!.switchingAction),
  }
}


export function httppolicysetHttpRequestPolicyRulesToHclTerraform(struct?: HttppolicysetHttpRequestPolicyRules | cdktf.IResolvable): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
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
    hdr_action: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesHdrActionToHclTerraform, true)(struct!.hdrAction),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesHdrActionList",
    },
    match: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesMatchList",
    },
    redirect_action: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRedirectActionToHclTerraform, true)(struct!.redirectAction),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRedirectActionList",
    },
    rewrite_url_action: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesRewriteUrlActionToHclTerraform, true)(struct!.rewriteUrlAction),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesRewriteUrlActionList",
    },
    switching_action: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesSwitchingActionToHclTerraform, true)(struct!.switchingAction),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesSwitchingActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allHeaders = this._allHeaders;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._hdrAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrAction = this._hdrAction?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._redirectAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectAction = this._redirectAction?.internalValue;
    }
    if (this._rewriteUrlAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteUrlAction = this._rewriteUrlAction?.internalValue;
    }
    if (this._switchingAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchingAction = this._switchingAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allHeaders = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._log = undefined;
      this._name = undefined;
      this._hdrAction.internalValue = undefined;
      this._match.internalValue = undefined;
      this._redirectAction.internalValue = undefined;
      this._rewriteUrlAction.internalValue = undefined;
      this._switchingAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allHeaders = value.allHeaders;
      this._enable = value.enable;
      this._index = value.index;
      this._log = value.log;
      this._name = value.name;
      this._hdrAction.internalValue = value.hdrAction;
      this._match.internalValue = value.match;
      this._redirectAction.internalValue = value.redirectAction;
      this._rewriteUrlAction.internalValue = value.rewriteUrlAction;
      this._switchingAction.internalValue = value.switchingAction;
    }
  }

  // all_headers - computed: true, optional: true, required: false
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

  // enable - computed: false, optional: false, required: true
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // hdr_action - computed: false, optional: true, required: false
  private _hdrAction = new HttppolicysetHttpRequestPolicyRulesHdrActionList(this, "hdr_action", false);
  public get hdrAction() {
    return this._hdrAction;
  }
  public putHdrAction(value: HttppolicysetHttpRequestPolicyRulesHdrAction[] | cdktf.IResolvable) {
    this._hdrAction.internalValue = value;
  }
  public resetHdrAction() {
    this._hdrAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrActionInput() {
    return this._hdrAction.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new HttppolicysetHttpRequestPolicyRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: HttppolicysetHttpRequestPolicyRulesMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // redirect_action - computed: false, optional: true, required: false
  private _redirectAction = new HttppolicysetHttpRequestPolicyRulesRedirectActionList(this, "redirect_action", true);
  public get redirectAction() {
    return this._redirectAction;
  }
  public putRedirectAction(value: HttppolicysetHttpRequestPolicyRulesRedirectAction[] | cdktf.IResolvable) {
    this._redirectAction.internalValue = value;
  }
  public resetRedirectAction() {
    this._redirectAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionInput() {
    return this._redirectAction.internalValue;
  }

  // rewrite_url_action - computed: false, optional: true, required: false
  private _rewriteUrlAction = new HttppolicysetHttpRequestPolicyRulesRewriteUrlActionList(this, "rewrite_url_action", true);
  public get rewriteUrlAction() {
    return this._rewriteUrlAction;
  }
  public putRewriteUrlAction(value: HttppolicysetHttpRequestPolicyRulesRewriteUrlAction[] | cdktf.IResolvable) {
    this._rewriteUrlAction.internalValue = value;
  }
  public resetRewriteUrlAction() {
    this._rewriteUrlAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteUrlActionInput() {
    return this._rewriteUrlAction.internalValue;
  }

  // switching_action - computed: false, optional: true, required: false
  private _switchingAction = new HttppolicysetHttpRequestPolicyRulesSwitchingActionList(this, "switching_action", true);
  public get switchingAction() {
    return this._switchingAction;
  }
  public putSwitchingAction(value: HttppolicysetHttpRequestPolicyRulesSwitchingAction[] | cdktf.IResolvable) {
    this._switchingAction.internalValue = value;
  }
  public resetSwitchingAction() {
    this._switchingAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingActionInput() {
    return this._switchingAction.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyRulesOutputReference {
    return new HttppolicysetHttpRequestPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpRequestPolicy {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#rules Httppolicyset#rules}
  */
  readonly rules?: HttppolicysetHttpRequestPolicyRules[] | cdktf.IResolvable;
}

export function httppolicysetHttpRequestPolicyToTerraform(struct?: HttppolicysetHttpRequestPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(httppolicysetHttpRequestPolicyRulesToTerraform, true)(struct!.rules),
  }
}


export function httppolicysetHttpRequestPolicyToHclTerraform(struct?: HttppolicysetHttpRequestPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(httppolicysetHttpRequestPolicyRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpRequestPolicyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpRequestPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpRequestPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpRequestPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new HttppolicysetHttpRequestPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: HttppolicysetHttpRequestPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class HttppolicysetHttpRequestPolicyList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpRequestPolicy[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpRequestPolicyOutputReference {
    return new HttppolicysetHttpRequestPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesHdrActionCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string;
}

export function httppolicysetHttpResponsePolicyRulesHdrActionCookieToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesHdrActionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function httppolicysetHttpResponsePolicyRulesHdrActionCookieToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesHdrActionCookie | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesHdrActionCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesHdrActionCookie | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesHdrActionCookie | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesHdrActionCookieList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesHdrActionCookie[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesHdrActionCookieOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesHdrActionCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesHdrActionHdrValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#is_sensitive Httppolicyset#is_sensitive}
  */
  readonly isSensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#val Httppolicyset#val}
  */
  readonly val?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#var Httppolicyset#var}
  */
  readonly var?: string;
}

export function httppolicysetHttpResponsePolicyRulesHdrActionHdrValueToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesHdrActionHdrValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_sensitive: cdktf.stringToTerraform(struct!.isSensitive),
    val: cdktf.stringToTerraform(struct!.val),
    var: cdktf.stringToTerraform(struct!.var),
  }
}


export function httppolicysetHttpResponsePolicyRulesHdrActionHdrValueToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesHdrActionHdrValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_sensitive: {
      value: cdktf.stringToHclTerraform(struct!.isSensitive),
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
    var: {
      value: cdktf.stringToHclTerraform(struct!.var),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesHdrActionHdrValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesHdrActionHdrValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSensitive = this._isSensitive;
    }
    if (this._val !== undefined) {
      hasAnyValues = true;
      internalValueResult.val = this._val;
    }
    if (this._var !== undefined) {
      hasAnyValues = true;
      internalValueResult.var = this._var;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesHdrActionHdrValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSensitive = undefined;
      this._val = undefined;
      this._var = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSensitive = value.isSensitive;
      this._val = value.val;
      this._var = value.var;
    }
  }

  // is_sensitive - computed: false, optional: true, required: false
  private _isSensitive?: string; 
  public get isSensitive() {
    return this.getStringAttribute('is_sensitive');
  }
  public set isSensitive(value: string) {
    this._isSensitive = value;
  }
  public resetIsSensitive() {
    this._isSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveInput() {
    return this._isSensitive;
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

  // var - computed: true, optional: true, required: false
  private _var?: string; 
  public get var() {
    return this.getStringAttribute('var');
  }
  public set var(value: string) {
    this._var = value;
  }
  public resetVar() {
    this._var = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varInput() {
    return this._var;
  }
}

export class HttppolicysetHttpResponsePolicyRulesHdrActionHdrValueList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesHdrActionHdrValue[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesHdrActionHdrValueOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesHdrActionHdrValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesHdrActionHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: HttppolicysetHttpResponsePolicyRulesHdrActionHdrValue[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesHdrActionHdrToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesHdrActionHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesHdrActionHdrValueToTerraform, true)(struct!.value),
  }
}


export function httppolicysetHttpResponsePolicyRulesHdrActionHdrToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesHdrActionHdr | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesHdrActionHdrValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesHdrActionHdrValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesHdrActionHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesHdrActionHdr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesHdrActionHdr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value = new HttppolicysetHttpResponsePolicyRulesHdrActionHdrValueList(this, "value", true);
  public get value() {
    return this._value;
  }
  public putValue(value: HttppolicysetHttpResponsePolicyRulesHdrActionHdrValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class HttppolicysetHttpResponsePolicyRulesHdrActionHdrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesHdrActionHdr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesHdrActionHdrOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesHdrActionHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesHdrAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#action Httppolicyset#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdr_index Httppolicyset#hdr_index}
  */
  readonly hdrIndex?: string;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#cookie Httppolicyset#cookie}
  */
  readonly cookie?: HttppolicysetHttpResponsePolicyRulesHdrActionCookie[] | cdktf.IResolvable;
  /**
  * hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdr Httppolicyset#hdr}
  */
  readonly hdr?: HttppolicysetHttpResponsePolicyRulesHdrActionHdr[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesHdrActionToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesHdrAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    hdr_index: cdktf.stringToTerraform(struct!.hdrIndex),
    cookie: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesHdrActionCookieToTerraform, true)(struct!.cookie),
    hdr: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesHdrActionHdrToTerraform, true)(struct!.hdr),
  }
}


export function httppolicysetHttpResponsePolicyRulesHdrActionToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesHdrAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdr_index: {
      value: cdktf.stringToHclTerraform(struct!.hdrIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesHdrActionCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesHdrActionCookieList",
    },
    hdr: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesHdrActionHdrToHclTerraform, true)(struct!.hdr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesHdrActionHdrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesHdrActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesHdrAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._hdrIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrIndex = this._hdrIndex;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._hdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdr = this._hdr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesHdrAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._hdrIndex = undefined;
      this._cookie.internalValue = undefined;
      this._hdr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._hdrIndex = value.hdrIndex;
      this._cookie.internalValue = value.cookie;
      this._hdr.internalValue = value.hdr;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // hdr_index - computed: true, optional: true, required: false
  private _hdrIndex?: string; 
  public get hdrIndex() {
    return this.getStringAttribute('hdr_index');
  }
  public set hdrIndex(value: string) {
    this._hdrIndex = value;
  }
  public resetHdrIndex() {
    this._hdrIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrIndexInput() {
    return this._hdrIndex;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new HttppolicysetHttpResponsePolicyRulesHdrActionCookieList(this, "cookie", true);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: HttppolicysetHttpResponsePolicyRulesHdrActionCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // hdr - computed: false, optional: true, required: false
  private _hdr = new HttppolicysetHttpResponsePolicyRulesHdrActionHdrList(this, "hdr", true);
  public get hdr() {
    return this._hdr;
  }
  public putHdr(value: HttppolicysetHttpResponsePolicyRulesHdrActionHdr[] | cdktf.IResolvable) {
    this._hdr.internalValue = value;
  }
  public resetHdr() {
    this._hdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrInput() {
    return this._hdr.internalValue;
  }
}

export class HttppolicysetHttpResponsePolicyRulesHdrActionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesHdrAction[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesHdrActionOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesHdrActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end_index Httppolicyset#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#start_index Httppolicyset#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#str_value Httppolicyset#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpResponsePolicyRulesLocHdrActionHostTokensToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokens | cdktf.IResolvable): any {
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


export function httppolicysetHttpResponsePolicyRulesLocHdrActionHostTokensToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokens | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokens | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokens | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokensList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokens[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokensOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesLocHdrActionHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#tokens Httppolicyset#tokens}
  */
  readonly tokens: HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokens[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesLocHdrActionHostToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesLocHdrActionHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesLocHdrActionHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function httppolicysetHttpResponsePolicyRulesLocHdrActionHostToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesLocHdrActionHost | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesLocHdrActionHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesLocHdrActionHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesLocHdrActionHost | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesLocHdrActionHost | cdktf.IResolvable | undefined) {
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
  private _tokens = new HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: HttppolicysetHttpResponsePolicyRulesLocHdrActionHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class HttppolicysetHttpResponsePolicyRulesLocHdrActionHostList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesLocHdrActionHost[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesLocHdrActionHostOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesLocHdrActionHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end_index Httppolicyset#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#start_index Httppolicyset#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#str_value Httppolicyset#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpResponsePolicyRulesLocHdrActionPathTokensToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokens | cdktf.IResolvable): any {
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


export function httppolicysetHttpResponsePolicyRulesLocHdrActionPathTokensToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokens | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokens | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokens | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokensList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokens[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokensOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesLocHdrActionPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#tokens Httppolicyset#tokens}
  */
  readonly tokens: HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokens[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesLocHdrActionPathToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesLocHdrActionPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesLocHdrActionPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function httppolicysetHttpResponsePolicyRulesLocHdrActionPathToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesLocHdrActionPath | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesLocHdrActionPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesLocHdrActionPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesLocHdrActionPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesLocHdrActionPath | cdktf.IResolvable | undefined) {
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
  private _tokens = new HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: HttppolicysetHttpResponsePolicyRulesLocHdrActionPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class HttppolicysetHttpResponsePolicyRulesLocHdrActionPathList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesLocHdrActionPath[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesLocHdrActionPathOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesLocHdrActionPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesLocHdrAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#keep_query Httppolicyset#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#port Httppolicyset#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#protocol Httppolicyset#protocol}
  */
  readonly protocol: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#host Httppolicyset#host}
  */
  readonly host?: HttppolicysetHttpResponsePolicyRulesLocHdrActionHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#path Httppolicyset#path}
  */
  readonly path?: HttppolicysetHttpResponsePolicyRulesLocHdrActionPath[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesLocHdrActionToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesLocHdrAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    host: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesLocHdrActionHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesLocHdrActionPathToTerraform, true)(struct!.path),
  }
}


export function httppolicysetHttpResponsePolicyRulesLocHdrActionToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesLocHdrAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    host: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesLocHdrActionHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesLocHdrActionHostList",
    },
    path: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesLocHdrActionPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesLocHdrActionPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesLocHdrActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesLocHdrAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesLocHdrAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
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
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
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

  // host - computed: false, optional: true, required: false
  private _host = new HttppolicysetHttpResponsePolicyRulesLocHdrActionHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: HttppolicysetHttpResponsePolicyRulesLocHdrActionHost[] | cdktf.IResolvable) {
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
  private _path = new HttppolicysetHttpResponsePolicyRulesLocHdrActionPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: HttppolicysetHttpResponsePolicyRulesLocHdrActionPath[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpResponsePolicyRulesLocHdrActionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesLocHdrAction[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesLocHdrActionOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesLocHdrActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchClientIpAddrsToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchClientIpAddrsToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrs | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrs | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrsOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddrToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddrToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddrOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#mask Httppolicyset#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ip_addr Httppolicyset#ip_addr}
  */
  readonly ipAddr: HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchClientIpRangesBeginToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchClientIpRangesBeginToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBeginOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchClientIpRangesEndToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchClientIpRangesEndToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEndOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchClientIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#begin Httppolicyset#begin}
  */
  readonly begin: HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end Httppolicyset#end}
  */
  readonly end: HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEnd[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesMatchClientIpRangesToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchClientIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchClientIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchClientIpRangesToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchClientIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchClientIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchClientIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpRanges | cdktf.IResolvable | undefined) {
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
  private _begin = new HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchClientIpRanges[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#group_refs Httppolicyset#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addrs Httppolicyset#addrs}
  */
  readonly addrs?: HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#prefixes Httppolicyset#prefixes}
  */
  readonly prefixes?: HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ranges Httppolicyset#ranges}
  */
  readonly ranges?: HttppolicysetHttpResponsePolicyRulesMatchClientIpRanges[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesMatchClientIpToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchClientIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchClientIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchClientIpToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchClientIp | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchClientIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchClientIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchClientIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchClientIp | cdktf.IResolvable | undefined) {
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
  private _addrs = new HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpAddrs[] | cdktf.IResolvable) {
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
  private _prefixes = new HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpPrefixes[] | cdktf.IResolvable) {
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
  private _ranges = new HttppolicysetHttpResponsePolicyRulesMatchClientIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: HttppolicysetHttpResponsePolicyRulesMatchClientIpRanges[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchClientIpList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchClientIp[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchClientIpOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchCookieToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchCookieToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchCookie | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchCookie | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
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
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._name = value.name;
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

export class HttppolicysetHttpResponsePolicyRulesMatchCookieList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchCookie[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchCookieOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchHdrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdr Httppolicyset#hdr}
  */
  readonly hdr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string[];
}

export function httppolicysetHttpResponsePolicyRulesMatchHdrsToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdr: cdktf.stringToTerraform(struct!.hdr),
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchHdrsToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdr: {
      value: cdktf.stringToHclTerraform(struct!.hdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class HttppolicysetHttpResponsePolicyRulesMatchHdrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchHdrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdr = this._hdr;
    }
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchHdrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdr = undefined;
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
      this._hdr = value.hdr;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._value = value.value;
    }
  }

  // hdr - computed: false, optional: false, required: true
  private _hdr?: string; 
  public get hdr() {
    return this.getStringAttribute('hdr');
  }
  public set hdr(value: string) {
    this._hdr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrInput() {
    return this._hdr;
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

export class HttppolicysetHttpResponsePolicyRulesMatchHdrsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchHdrs[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchHdrsOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchHdrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchHostHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string[];
}

export function httppolicysetHttpResponsePolicyRulesMatchHostHdrToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchHostHdr | cdktf.IResolvable): any {
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


export function httppolicysetHttpResponsePolicyRulesMatchHostHdrToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchHostHdr | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchHostHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchHostHdr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchHostHdr | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchHostHdrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchHostHdr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchHostHdrOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchHostHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchLocHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string[];
}

export function httppolicysetHttpResponsePolicyRulesMatchLocHdrToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchLocHdr | cdktf.IResolvable): any {
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


export function httppolicysetHttpResponsePolicyRulesMatchLocHdrToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchLocHdr | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchLocHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchLocHdr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchLocHdr | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchLocHdrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchLocHdr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchLocHdrOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchLocHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#methods Httppolicyset#methods}
  */
  readonly methods: string[];
}

export function httppolicysetHttpResponsePolicyRulesMatchMethodToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchMethodToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchMethod | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchMethod | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchMethod | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchMethodList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchMethod[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchMethodOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_decoded_string Httppolicyset#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_str Httppolicyset#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#string_group_refs Httppolicyset#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function httppolicysetHttpResponsePolicyRulesMatchPathToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchPath | cdktf.IResolvable): any {
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


export function httppolicysetHttpResponsePolicyRulesMatchPathToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchPath | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchPath | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchPathList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchPath[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchPathOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#protocols Httppolicyset#protocols}
  */
  readonly protocols: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchProtocolToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    protocols: cdktf.stringToTerraform(struct!.protocols),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchProtocolToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchProtocol | cdktf.IResolvable): any {
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
    protocols: {
      value: cdktf.stringToHclTerraform(struct!.protocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._protocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._protocols = value.protocols;
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

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string; 
  public get protocols() {
    return this.getStringAttribute('protocols');
  }
  public set protocols(value: string) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }
}

export class HttppolicysetHttpResponsePolicyRulesMatchProtocolList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchProtocol[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchProtocolOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_decoded_string Httppolicyset#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_str Httppolicyset#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#string_group_refs Httppolicyset#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function httppolicysetHttpResponsePolicyRulesMatchQueryToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchQuery | cdktf.IResolvable): any {
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


export function httppolicysetHttpResponsePolicyRulesMatchQueryToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchQuery | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchQuery | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchQueryList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchQuery[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchQueryOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchRspHdrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdr Httppolicyset#hdr}
  */
  readonly hdr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string[];
}

export function httppolicysetHttpResponsePolicyRulesMatchRspHdrsToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchRspHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdr: cdktf.stringToTerraform(struct!.hdr),
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchRspHdrsToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchRspHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdr: {
      value: cdktf.stringToHclTerraform(struct!.hdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class HttppolicysetHttpResponsePolicyRulesMatchRspHdrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchRspHdrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdr = this._hdr;
    }
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchRspHdrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdr = undefined;
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
      this._hdr = value.hdr;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._value = value.value;
    }
  }

  // hdr - computed: false, optional: false, required: true
  private _hdr?: string; 
  public get hdr() {
    return this.getStringAttribute('hdr');
  }
  public set hdr(value: string) {
    this._hdr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrInput() {
    return this._hdr;
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

export class HttppolicysetHttpResponsePolicyRulesMatchRspHdrsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchRspHdrs[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchRspHdrsOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchRspHdrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchSourceIpAddrsToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchSourceIpAddrsToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrs | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrs | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrsOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddrToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddrToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddrOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#mask Httppolicyset#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ip_addr Httppolicyset#ip_addr}
  */
  readonly ipAddr: HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBeginToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBeginToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBeginOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEndToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEndToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable): any {
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

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEndOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchSourceIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#begin Httppolicyset#begin}
  */
  readonly begin: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end Httppolicyset#end}
  */
  readonly end: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchSourceIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRanges | cdktf.IResolvable | undefined) {
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
  private _begin = new HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchSourceIpRanges[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchSourceIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#group_refs Httppolicyset#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addrs Httppolicyset#addrs}
  */
  readonly addrs?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#prefixes Httppolicyset#prefixes}
  */
  readonly prefixes?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ranges Httppolicyset#ranges}
  */
  readonly ranges?: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRanges[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesMatchSourceIpToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchSourceIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchSourceIpToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchSourceIp | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchSourceIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchSourceIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchSourceIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIp | cdktf.IResolvable | undefined) {
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
  private _addrs = new HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpAddrs[] | cdktf.IResolvable) {
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
  private _prefixes = new HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpPrefixes[] | cdktf.IResolvable) {
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
  private _ranges = new HttppolicysetHttpResponsePolicyRulesMatchSourceIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIpRanges[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchSourceIpList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchSourceIp[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchSourceIpOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchStatusRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#begin Httppolicyset#begin}
  */
  readonly begin: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end Httppolicyset#end}
  */
  readonly end: string;
}

export function httppolicysetHttpResponsePolicyRulesMatchStatusRangesToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchStatusRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.stringToTerraform(struct!.begin),
    end: cdktf.stringToTerraform(struct!.end),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchStatusRangesToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchStatusRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.stringToHclTerraform(struct!.begin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchStatusRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchStatusRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchStatusRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin = undefined;
      this._end = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin = value.begin;
      this._end = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin?: string; 
  public get begin() {
    return this.getStringAttribute('begin');
  }
  public set begin(value: string) {
    this._begin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin;
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }
}

export class HttppolicysetHttpResponsePolicyRulesMatchStatusRangesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchStatusRanges[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchStatusRangesOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchStatusRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#status_codes Httppolicyset#status_codes}
  */
  readonly statusCodes?: number[];
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ranges Httppolicyset#ranges}
  */
  readonly ranges?: HttppolicysetHttpResponsePolicyRulesMatchStatusRanges[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesMatchStatusToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.statusCodes),
    ranges: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchStatusRangesToTerraform, true)(struct!.ranges),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchStatusToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchStatus | cdktf.IResolvable): any {
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
    status_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.statusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    ranges: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchStatusRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchStatusRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._statusCodes = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._statusCodes = value.statusCodes;
      this._ranges.internalValue = value.ranges;
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

  // status_codes - computed: false, optional: true, required: false
  private _statusCodes?: number[]; 
  public get statusCodes() {
    return this.getNumberListAttribute('status_codes');
  }
  public set statusCodes(value: number[]) {
    this._statusCodes = value;
  }
  public resetStatusCodes() {
    this._statusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new HttppolicysetHttpResponsePolicyRulesMatchStatusRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: HttppolicysetHttpResponsePolicyRulesMatchStatusRanges[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpResponsePolicyRulesMatchStatusList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchStatus[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchStatusOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#versions Httppolicyset#versions}
  */
  readonly versions: string[];
}

export function httppolicysetHttpResponsePolicyRulesMatchVersionToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchVersionToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchVersion | cdktf.IResolvable): any {
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
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._versions = value.versions;
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

  // versions - computed: false, optional: false, required: true
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class HttppolicysetHttpResponsePolicyRulesMatchVersionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchVersion[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchVersionOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatchVsPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ports Httppolicyset#ports}
  */
  readonly ports: number[];
}

export function httppolicysetHttpResponsePolicyRulesMatchVsPortToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchVsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchVsPortToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatchVsPort | cdktf.IResolvable): any {
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
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchVsPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatchVsPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatchVsPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._ports = value.ports;
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

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class HttppolicysetHttpResponsePolicyRulesMatchVsPortList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatchVsPort[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchVsPortOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchVsPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRulesMatch {
  /**
  * client_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#client_ip Httppolicyset#client_ip}
  */
  readonly clientIp?: HttppolicysetHttpResponsePolicyRulesMatchClientIp[] | cdktf.IResolvable;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#cookie Httppolicyset#cookie}
  */
  readonly cookie?: HttppolicysetHttpResponsePolicyRulesMatchCookie[] | cdktf.IResolvable;
  /**
  * hdrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdrs Httppolicyset#hdrs}
  */
  readonly hdrs?: HttppolicysetHttpResponsePolicyRulesMatchHdrs[] | cdktf.IResolvable;
  /**
  * host_hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#host_hdr Httppolicyset#host_hdr}
  */
  readonly hostHdr?: HttppolicysetHttpResponsePolicyRulesMatchHostHdr[] | cdktf.IResolvable;
  /**
  * loc_hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#loc_hdr Httppolicyset#loc_hdr}
  */
  readonly locHdr?: HttppolicysetHttpResponsePolicyRulesMatchLocHdr[] | cdktf.IResolvable;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#method Httppolicyset#method}
  */
  readonly method?: HttppolicysetHttpResponsePolicyRulesMatchMethod[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#path Httppolicyset#path}
  */
  readonly path?: HttppolicysetHttpResponsePolicyRulesMatchPath[] | cdktf.IResolvable;
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#protocol Httppolicyset#protocol}
  */
  readonly protocol?: HttppolicysetHttpResponsePolicyRulesMatchProtocol[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#query Httppolicyset#query}
  */
  readonly query?: HttppolicysetHttpResponsePolicyRulesMatchQuery[] | cdktf.IResolvable;
  /**
  * rsp_hdrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#rsp_hdrs Httppolicyset#rsp_hdrs}
  */
  readonly rspHdrs?: HttppolicysetHttpResponsePolicyRulesMatchRspHdrs[] | cdktf.IResolvable;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#source_ip Httppolicyset#source_ip}
  */
  readonly sourceIp?: HttppolicysetHttpResponsePolicyRulesMatchSourceIp[] | cdktf.IResolvable;
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#status Httppolicyset#status}
  */
  readonly status?: HttppolicysetHttpResponsePolicyRulesMatchStatus[] | cdktf.IResolvable;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#version Httppolicyset#version}
  */
  readonly version?: HttppolicysetHttpResponsePolicyRulesMatchVersion[] | cdktf.IResolvable;
  /**
  * vs_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#vs_port Httppolicyset#vs_port}
  */
  readonly vsPort?: HttppolicysetHttpResponsePolicyRulesMatchVsPort[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesMatchToTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchClientIpToTerraform, true)(struct!.clientIp),
    cookie: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchCookieToTerraform, true)(struct!.cookie),
    hdrs: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchHdrsToTerraform, true)(struct!.hdrs),
    host_hdr: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchHostHdrToTerraform, true)(struct!.hostHdr),
    loc_hdr: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchLocHdrToTerraform, true)(struct!.locHdr),
    method: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchMethodToTerraform, true)(struct!.method),
    path: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchPathToTerraform, true)(struct!.path),
    protocol: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchProtocolToTerraform, true)(struct!.protocol),
    query: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchQueryToTerraform, true)(struct!.query),
    rsp_hdrs: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchRspHdrsToTerraform, true)(struct!.rspHdrs),
    source_ip: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchSourceIpToTerraform, true)(struct!.sourceIp),
    status: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchStatusToTerraform, true)(struct!.status),
    version: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchVersionToTerraform, true)(struct!.version),
    vs_port: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchVsPortToTerraform, true)(struct!.vsPort),
  }
}


export function httppolicysetHttpResponsePolicyRulesMatchToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchClientIpToHclTerraform, true)(struct!.clientIp),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchClientIpList",
    },
    cookie: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchCookieList",
    },
    hdrs: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchHdrsToHclTerraform, true)(struct!.hdrs),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchHdrsList",
    },
    host_hdr: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchHostHdrToHclTerraform, true)(struct!.hostHdr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchHostHdrList",
    },
    loc_hdr: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchLocHdrToHclTerraform, true)(struct!.locHdr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchLocHdrList",
    },
    method: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchMethodList",
    },
    path: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchPathList",
    },
    protocol: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchProtocolToHclTerraform, true)(struct!.protocol),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchProtocolList",
    },
    query: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchQueryList",
    },
    rsp_hdrs: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchRspHdrsToHclTerraform, true)(struct!.rspHdrs),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchRspHdrsList",
    },
    source_ip: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchSourceIpToHclTerraform, true)(struct!.sourceIp),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchSourceIpList",
    },
    status: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchStatusToHclTerraform, true)(struct!.status),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchStatusList",
    },
    version: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchVersionToHclTerraform, true)(struct!.version),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchVersionList",
    },
    vs_port: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchVsPortToHclTerraform, true)(struct!.vsPort),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchVsPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRulesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._hdrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrs = this._hdrs?.internalValue;
    }
    if (this._hostHdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHdr = this._hostHdr?.internalValue;
    }
    if (this._locHdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locHdr = this._locHdr?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._rspHdrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspHdrs = this._rspHdrs?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    if (this._vsPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsPort = this._vsPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicyRulesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._hdrs.internalValue = undefined;
      this._hostHdr.internalValue = undefined;
      this._locHdr.internalValue = undefined;
      this._method.internalValue = undefined;
      this._path.internalValue = undefined;
      this._protocol.internalValue = undefined;
      this._query.internalValue = undefined;
      this._rspHdrs.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
      this._status.internalValue = undefined;
      this._version.internalValue = undefined;
      this._vsPort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp.internalValue = value.clientIp;
      this._cookie.internalValue = value.cookie;
      this._hdrs.internalValue = value.hdrs;
      this._hostHdr.internalValue = value.hostHdr;
      this._locHdr.internalValue = value.locHdr;
      this._method.internalValue = value.method;
      this._path.internalValue = value.path;
      this._protocol.internalValue = value.protocol;
      this._query.internalValue = value.query;
      this._rspHdrs.internalValue = value.rspHdrs;
      this._sourceIp.internalValue = value.sourceIp;
      this._status.internalValue = value.status;
      this._version.internalValue = value.version;
      this._vsPort.internalValue = value.vsPort;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new HttppolicysetHttpResponsePolicyRulesMatchClientIpList(this, "client_ip", true);
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: HttppolicysetHttpResponsePolicyRulesMatchClientIp[] | cdktf.IResolvable) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new HttppolicysetHttpResponsePolicyRulesMatchCookieList(this, "cookie", true);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: HttppolicysetHttpResponsePolicyRulesMatchCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // hdrs - computed: false, optional: true, required: false
  private _hdrs = new HttppolicysetHttpResponsePolicyRulesMatchHdrsList(this, "hdrs", false);
  public get hdrs() {
    return this._hdrs;
  }
  public putHdrs(value: HttppolicysetHttpResponsePolicyRulesMatchHdrs[] | cdktf.IResolvable) {
    this._hdrs.internalValue = value;
  }
  public resetHdrs() {
    this._hdrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrsInput() {
    return this._hdrs.internalValue;
  }

  // host_hdr - computed: false, optional: true, required: false
  private _hostHdr = new HttppolicysetHttpResponsePolicyRulesMatchHostHdrList(this, "host_hdr", true);
  public get hostHdr() {
    return this._hostHdr;
  }
  public putHostHdr(value: HttppolicysetHttpResponsePolicyRulesMatchHostHdr[] | cdktf.IResolvable) {
    this._hostHdr.internalValue = value;
  }
  public resetHostHdr() {
    this._hostHdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHdrInput() {
    return this._hostHdr.internalValue;
  }

  // loc_hdr - computed: false, optional: true, required: false
  private _locHdr = new HttppolicysetHttpResponsePolicyRulesMatchLocHdrList(this, "loc_hdr", true);
  public get locHdr() {
    return this._locHdr;
  }
  public putLocHdr(value: HttppolicysetHttpResponsePolicyRulesMatchLocHdr[] | cdktf.IResolvable) {
    this._locHdr.internalValue = value;
  }
  public resetLocHdr() {
    this._locHdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locHdrInput() {
    return this._locHdr.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new HttppolicysetHttpResponsePolicyRulesMatchMethodList(this, "method", true);
  public get method() {
    return this._method;
  }
  public putMethod(value: HttppolicysetHttpResponsePolicyRulesMatchMethod[] | cdktf.IResolvable) {
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
  private _path = new HttppolicysetHttpResponsePolicyRulesMatchPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: HttppolicysetHttpResponsePolicyRulesMatchPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new HttppolicysetHttpResponsePolicyRulesMatchProtocolList(this, "protocol", true);
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: HttppolicysetHttpResponsePolicyRulesMatchProtocol[] | cdktf.IResolvable) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new HttppolicysetHttpResponsePolicyRulesMatchQueryList(this, "query", true);
  public get query() {
    return this._query;
  }
  public putQuery(value: HttppolicysetHttpResponsePolicyRulesMatchQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // rsp_hdrs - computed: false, optional: true, required: false
  private _rspHdrs = new HttppolicysetHttpResponsePolicyRulesMatchRspHdrsList(this, "rsp_hdrs", false);
  public get rspHdrs() {
    return this._rspHdrs;
  }
  public putRspHdrs(value: HttppolicysetHttpResponsePolicyRulesMatchRspHdrs[] | cdktf.IResolvable) {
    this._rspHdrs.internalValue = value;
  }
  public resetRspHdrs() {
    this._rspHdrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspHdrsInput() {
    return this._rspHdrs.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new HttppolicysetHttpResponsePolicyRulesMatchSourceIpList(this, "source_ip", true);
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: HttppolicysetHttpResponsePolicyRulesMatchSourceIp[] | cdktf.IResolvable) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new HttppolicysetHttpResponsePolicyRulesMatchStatusList(this, "status", true);
  public get status() {
    return this._status;
  }
  public putStatus(value: HttppolicysetHttpResponsePolicyRulesMatchStatus[] | cdktf.IResolvable) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version = new HttppolicysetHttpResponsePolicyRulesMatchVersionList(this, "version", true);
  public get version() {
    return this._version;
  }
  public putVersion(value: HttppolicysetHttpResponsePolicyRulesMatchVersion[] | cdktf.IResolvable) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // vs_port - computed: false, optional: true, required: false
  private _vsPort = new HttppolicysetHttpResponsePolicyRulesMatchVsPortList(this, "vs_port", true);
  public get vsPort() {
    return this._vsPort;
  }
  public putVsPort(value: HttppolicysetHttpResponsePolicyRulesMatchVsPort[] | cdktf.IResolvable) {
    this._vsPort.internalValue = value;
  }
  public resetVsPort() {
    this._vsPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsPortInput() {
    return this._vsPort.internalValue;
  }
}

export class HttppolicysetHttpResponsePolicyRulesMatchList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRulesMatch[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesMatchOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#all_headers Httppolicyset#all_headers}
  */
  readonly allHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#enable Httppolicyset#enable}
  */
  readonly enable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#index Httppolicyset#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#log Httppolicyset#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name: string;
  /**
  * hdr_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdr_action Httppolicyset#hdr_action}
  */
  readonly hdrAction?: HttppolicysetHttpResponsePolicyRulesHdrAction[] | cdktf.IResolvable;
  /**
  * loc_hdr_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#loc_hdr_action Httppolicyset#loc_hdr_action}
  */
  readonly locHdrAction?: HttppolicysetHttpResponsePolicyRulesLocHdrAction[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match Httppolicyset#match}
  */
  readonly match?: HttppolicysetHttpResponsePolicyRulesMatch[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyRulesToTerraform(struct?: HttppolicysetHttpResponsePolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_headers: cdktf.stringToTerraform(struct!.allHeaders),
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    log: cdktf.stringToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    hdr_action: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesHdrActionToTerraform, true)(struct!.hdrAction),
    loc_hdr_action: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesLocHdrActionToTerraform, true)(struct!.locHdrAction),
    match: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesMatchToTerraform, true)(struct!.match),
  }
}


export function httppolicysetHttpResponsePolicyRulesToHclTerraform(struct?: HttppolicysetHttpResponsePolicyRules | cdktf.IResolvable): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
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
    hdr_action: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesHdrActionToHclTerraform, true)(struct!.hdrAction),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesHdrActionList",
    },
    loc_hdr_action: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesLocHdrActionToHclTerraform, true)(struct!.locHdrAction),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesLocHdrActionList",
    },
    match: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allHeaders = this._allHeaders;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._hdrAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrAction = this._hdrAction?.internalValue;
    }
    if (this._locHdrAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locHdrAction = this._locHdrAction?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allHeaders = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._log = undefined;
      this._name = undefined;
      this._hdrAction.internalValue = undefined;
      this._locHdrAction.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allHeaders = value.allHeaders;
      this._enable = value.enable;
      this._index = value.index;
      this._log = value.log;
      this._name = value.name;
      this._hdrAction.internalValue = value.hdrAction;
      this._locHdrAction.internalValue = value.locHdrAction;
      this._match.internalValue = value.match;
    }
  }

  // all_headers - computed: true, optional: true, required: false
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

  // enable - computed: false, optional: false, required: true
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // hdr_action - computed: false, optional: true, required: false
  private _hdrAction = new HttppolicysetHttpResponsePolicyRulesHdrActionList(this, "hdr_action", false);
  public get hdrAction() {
    return this._hdrAction;
  }
  public putHdrAction(value: HttppolicysetHttpResponsePolicyRulesHdrAction[] | cdktf.IResolvable) {
    this._hdrAction.internalValue = value;
  }
  public resetHdrAction() {
    this._hdrAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrActionInput() {
    return this._hdrAction.internalValue;
  }

  // loc_hdr_action - computed: false, optional: true, required: false
  private _locHdrAction = new HttppolicysetHttpResponsePolicyRulesLocHdrActionList(this, "loc_hdr_action", true);
  public get locHdrAction() {
    return this._locHdrAction;
  }
  public putLocHdrAction(value: HttppolicysetHttpResponsePolicyRulesLocHdrAction[] | cdktf.IResolvable) {
    this._locHdrAction.internalValue = value;
  }
  public resetLocHdrAction() {
    this._locHdrAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locHdrActionInput() {
    return this._locHdrAction.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new HttppolicysetHttpResponsePolicyRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: HttppolicysetHttpResponsePolicyRulesMatch[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpResponsePolicyRulesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicyRules[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyRulesOutputReference {
    return new HttppolicysetHttpResponsePolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpResponsePolicy {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#rules Httppolicyset#rules}
  */
  readonly rules?: HttppolicysetHttpResponsePolicyRules[] | cdktf.IResolvable;
}

export function httppolicysetHttpResponsePolicyToTerraform(struct?: HttppolicysetHttpResponsePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(httppolicysetHttpResponsePolicyRulesToTerraform, true)(struct!.rules),
  }
}


export function httppolicysetHttpResponsePolicyToHclTerraform(struct?: HttppolicysetHttpResponsePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(httppolicysetHttpResponsePolicyRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpResponsePolicyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpResponsePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpResponsePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpResponsePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new HttppolicysetHttpResponsePolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: HttppolicysetHttpResponsePolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class HttppolicysetHttpResponsePolicyList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpResponsePolicy[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpResponsePolicyOutputReference {
    return new HttppolicysetHttpResponsePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#content_type Httppolicyset#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#file_content Httppolicyset#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#file_length Httppolicyset#file_length}
  */
  readonly fileLength?: string;
}

export function httppolicysetHttpSecurityPolicyRulesActionFileToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionFile | cdktf.IResolvable): any {
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


export function httppolicysetHttpSecurityPolicyRulesActionFileToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionFile | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesActionFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesActionFile | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesActionFileList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesActionFile[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionFileOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#content_type Httppolicyset#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#file_content Httppolicyset#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#file_length Httppolicyset#file_length}
  */
  readonly fileLength?: string;
}

export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionFileToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFile | cdktf.IResolvable): any {
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


export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionFileToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFile | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFile | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFileList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFile[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFileOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end_index Httppolicyset#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#start_index Httppolicyset#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#str_value Httppolicyset#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokensToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokens | cdktf.IResolvable): any {
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


export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokensToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokens | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokens | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokens | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokensList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokens[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokensOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#tokens Httppolicyset#tokens}
  */
  readonly tokens: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokens[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokensToTerraform, true)(struct!.tokens),
  }
}


export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHost | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHost | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHost | cdktf.IResolvable | undefined) {
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
  private _tokens = new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHost[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end_index Httppolicyset#end_index}
  */
  readonly endIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#start_index Httppolicyset#start_index}
  */
  readonly startIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#str_value Httppolicyset#str_value}
  */
  readonly strValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokensToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokens | cdktf.IResolvable): any {
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


export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokensToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokens | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokens | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokens | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokensList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokens[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokensOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#tokens Httppolicyset#tokens}
  */
  readonly tokens: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokens[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    tokens: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokensToTerraform, true)(struct!.tokens),
  }
}


export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPath | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokensToHclTerraform, true)(struct!.tokens),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPath | cdktf.IResolvable | undefined) {
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
  private _tokens = new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPath[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#add_string Httppolicyset#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#keep_query Httppolicyset#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#port Httppolicyset#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#protocol Httppolicyset#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#status_code Httppolicyset#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#host Httppolicyset#host}
  */
  readonly host?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#path Httppolicyset#path}
  */
  readonly path?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPath[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirect | cdktf.IResolvable): any {
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
    host: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirect | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirect | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirect | cdktf.IResolvable | undefined) {
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
  private _host = new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectHost[] | cdktf.IResolvable) {
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
  private _path = new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectPath[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesActionRateProfileAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#status_code Httppolicyset#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#file Httppolicyset#file}
  */
  readonly file?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#redirect Httppolicyset#redirect}
  */
  readonly redirect?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirect[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function httppolicysetHttpSecurityPolicyRulesActionRateProfileActionToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileAction | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesActionRateProfileAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileAction | cdktf.IResolvable | undefined) {
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
  private _file = new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionFile[] | cdktf.IResolvable) {
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
  private _redirect = new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionRedirect[] | cdktf.IResolvable) {
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

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesActionRateProfileAction[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#burst_sz Httppolicyset#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#count Httppolicyset#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#period Httppolicyset#period}
  */
  readonly period?: string;
}

export function httppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiterToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiter | cdktf.IResolvable): any {
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


export function httppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiterToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiter | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiter | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiterList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiterOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesActionRateProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#per_client_ip Httppolicyset#per_client_ip}
  */
  readonly perClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#per_uri_path Httppolicyset#per_uri_path}
  */
  readonly perUriPath?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#action Httppolicyset#action}
  */
  readonly action: HttppolicysetHttpSecurityPolicyRulesActionRateProfileAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#rate_limiter Httppolicyset#rate_limiter}
  */
  readonly rateLimiter: HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiter[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesActionRateProfileToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_client_ip: cdktf.stringToTerraform(struct!.perClientIp),
    per_uri_path: cdktf.stringToTerraform(struct!.perUriPath),
    action: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function httppolicysetHttpSecurityPolicyRulesActionRateProfileToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesActionRateProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_client_ip: {
      value: cdktf.stringToHclTerraform(struct!.perClientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_uri_path: {
      value: cdktf.stringToHclTerraform(struct!.perUriPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionRateProfileActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesActionRateProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perClientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.perClientIp = this._perClientIp;
    }
    if (this._perUriPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.perUriPath = this._perUriPath;
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._perClientIp = undefined;
      this._perUriPath = undefined;
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
      this._perClientIp = value.perClientIp;
      this._perUriPath = value.perUriPath;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // per_client_ip - computed: true, optional: true, required: false
  private _perClientIp?: string; 
  public get perClientIp() {
    return this.getStringAttribute('per_client_ip');
  }
  public set perClientIp(value: string) {
    this._perClientIp = value;
  }
  public resetPerClientIp() {
    this._perClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perClientIpInput() {
    return this._perClientIp;
  }

  // per_uri_path - computed: true, optional: true, required: false
  private _perUriPath?: string; 
  public get perUriPath() {
    return this.getStringAttribute('per_uri_path');
  }
  public set perUriPath(value: string) {
    this._perUriPath = value;
  }
  public resetPerUriPath() {
    this._perUriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUriPathInput() {
    return this._perUriPath;
  }

  // action - computed: false, optional: false, required: true
  private _action = new HttppolicysetHttpSecurityPolicyRulesActionRateProfileActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: false, required: true
  private _rateLimiter = new HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfileRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesActionRateProfileList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesActionRateProfile[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionRateProfileOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionRateProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
