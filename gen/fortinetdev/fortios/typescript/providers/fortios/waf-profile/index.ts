// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#comment WafProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#dynamic_sort_subtable WafProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#extended_log WafProfile#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#external WafProfile#external}
  */
  readonly external?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#get_all_tables WafProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#id WafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#name WafProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#vdomparam WafProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#address_list WafProfile#address_list}
  */
  readonly addressList?: WafProfileAddressListStruct;
  /**
  * constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#constraint WafProfile#constraint}
  */
  readonly constraint?: WafProfileConstraint;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#method WafProfile#method}
  */
  readonly method?: WafProfileMethod;
  /**
  * signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#signature WafProfile#signature}
  */
  readonly signature?: WafProfileSignature;
  /**
  * url_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#url_access WafProfile#url_access}
  */
  readonly urlAccess?: WafProfileUrlAccess[] | cdktf.IResolvable;
}
export interface WafProfileAddressListBlockedAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#name WafProfile#name}
  */
  readonly name?: string;
}

export function wafProfileAddressListBlockedAddressToTerraform(struct?: WafProfileAddressListBlockedAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wafProfileAddressListBlockedAddressToHclTerraform(struct?: WafProfileAddressListBlockedAddress | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileAddressListBlockedAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafProfileAddressListBlockedAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileAddressListBlockedAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class WafProfileAddressListBlockedAddressList extends cdktf.ComplexList {
  public internalValue? : WafProfileAddressListBlockedAddress[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafProfileAddressListBlockedAddressOutputReference {
    return new WafProfileAddressListBlockedAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafProfileAddressListTrustedAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#name WafProfile#name}
  */
  readonly name?: string;
}

export function wafProfileAddressListTrustedAddressToTerraform(struct?: WafProfileAddressListTrustedAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wafProfileAddressListTrustedAddressToHclTerraform(struct?: WafProfileAddressListTrustedAddress | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileAddressListTrustedAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafProfileAddressListTrustedAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileAddressListTrustedAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class WafProfileAddressListTrustedAddressList extends cdktf.ComplexList {
  public internalValue? : WafProfileAddressListTrustedAddress[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafProfileAddressListTrustedAddressOutputReference {
    return new WafProfileAddressListTrustedAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafProfileAddressListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#blocked_log WafProfile#blocked_log}
  */
  readonly blockedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
  /**
  * blocked_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#blocked_address WafProfile#blocked_address}
  */
  readonly blockedAddress?: WafProfileAddressListBlockedAddress[] | cdktf.IResolvable;
  /**
  * trusted_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#trusted_address WafProfile#trusted_address}
  */
  readonly trustedAddress?: WafProfileAddressListTrustedAddress[] | cdktf.IResolvable;
}

export function wafProfileAddressListStructToTerraform(struct?: WafProfileAddressListStructOutputReference | WafProfileAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_log: cdktf.stringToTerraform(struct!.blockedLog),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
    blocked_address: cdktf.listMapper(wafProfileAddressListBlockedAddressToTerraform, true)(struct!.blockedAddress),
    trusted_address: cdktf.listMapper(wafProfileAddressListTrustedAddressToTerraform, true)(struct!.trustedAddress),
  }
}


export function wafProfileAddressListStructToHclTerraform(struct?: WafProfileAddressListStructOutputReference | WafProfileAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_log: {
      value: cdktf.stringToHclTerraform(struct!.blockedLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocked_address: {
      value: cdktf.listMapperHcl(wafProfileAddressListBlockedAddressToHclTerraform, true)(struct!.blockedAddress),
      isBlock: true,
      type: "set",
      storageClassType: "WafProfileAddressListBlockedAddressList",
    },
    trusted_address: {
      value: cdktf.listMapperHcl(wafProfileAddressListTrustedAddressToHclTerraform, true)(struct!.trustedAddress),
      isBlock: true,
      type: "set",
      storageClassType: "WafProfileAddressListTrustedAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileAddressListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedLog = this._blockedLog;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._blockedAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedAddress = this._blockedAddress?.internalValue;
    }
    if (this._trustedAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedAddress = this._trustedAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileAddressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockedLog = undefined;
      this._severity = undefined;
      this._status = undefined;
      this._blockedAddress.internalValue = undefined;
      this._trustedAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockedLog = value.blockedLog;
      this._severity = value.severity;
      this._status = value.status;
      this._blockedAddress.internalValue = value.blockedAddress;
      this._trustedAddress.internalValue = value.trustedAddress;
    }
  }

  // blocked_log - computed: true, optional: true, required: false
  private _blockedLog?: string; 
  public get blockedLog() {
    return this.getStringAttribute('blocked_log');
  }
  public set blockedLog(value: string) {
    this._blockedLog = value;
  }
  public resetBlockedLog() {
    this._blockedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedLogInput() {
    return this._blockedLog;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

  // blocked_address - computed: false, optional: true, required: false
  private _blockedAddress = new WafProfileAddressListBlockedAddressList(this, "blocked_address", true);
  public get blockedAddress() {
    return this._blockedAddress;
  }
  public putBlockedAddress(value: WafProfileAddressListBlockedAddress[] | cdktf.IResolvable) {
    this._blockedAddress.internalValue = value;
  }
  public resetBlockedAddress() {
    this._blockedAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedAddressInput() {
    return this._blockedAddress.internalValue;
  }

  // trusted_address - computed: false, optional: true, required: false
  private _trustedAddress = new WafProfileAddressListTrustedAddressList(this, "trusted_address", true);
  public get trustedAddress() {
    return this._trustedAddress;
  }
  public putTrustedAddress(value: WafProfileAddressListTrustedAddress[] | cdktf.IResolvable) {
    this._trustedAddress.internalValue = value;
  }
  public resetTrustedAddress() {
    this._trustedAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedAddressInput() {
    return this._trustedAddress.internalValue;
  }
}
export interface WafProfileConstraintContentLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#length WafProfile#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintContentLengthToTerraform(struct?: WafProfileConstraintContentLengthOutputReference | WafProfileConstraintContentLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    length: cdktf.numberToTerraform(struct!.length),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintContentLengthToHclTerraform(struct?: WafProfileConstraintContentLengthOutputReference | WafProfileConstraintContentLength): any {
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
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintContentLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintContentLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintContentLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._length = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._length = value.length;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintException {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#address WafProfile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#content_length WafProfile#content_length}
  */
  readonly contentLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#header_length WafProfile#header_length}
  */
  readonly headerLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#hostname WafProfile#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#id WafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#line_length WafProfile#line_length}
  */
  readonly lineLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#malformed WafProfile#malformed}
  */
  readonly malformed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_cookie WafProfile#max_cookie}
  */
  readonly maxCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_header_line WafProfile#max_header_line}
  */
  readonly maxHeaderLine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_range_segment WafProfile#max_range_segment}
  */
  readonly maxRangeSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_url_param WafProfile#max_url_param}
  */
  readonly maxUrlParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#method WafProfile#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#param_length WafProfile#param_length}
  */
  readonly paramLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#pattern WafProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#regex WafProfile#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#url_param_length WafProfile#url_param_length}
  */
  readonly urlParamLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#version WafProfile#version}
  */
  readonly version?: string;
}

export function wafProfileConstraintExceptionToTerraform(struct?: WafProfileConstraintException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    content_length: cdktf.stringToTerraform(struct!.contentLength),
    header_length: cdktf.stringToTerraform(struct!.headerLength),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    id: cdktf.numberToTerraform(struct!.id),
    line_length: cdktf.stringToTerraform(struct!.lineLength),
    malformed: cdktf.stringToTerraform(struct!.malformed),
    max_cookie: cdktf.stringToTerraform(struct!.maxCookie),
    max_header_line: cdktf.stringToTerraform(struct!.maxHeaderLine),
    max_range_segment: cdktf.stringToTerraform(struct!.maxRangeSegment),
    max_url_param: cdktf.stringToTerraform(struct!.maxUrlParam),
    method: cdktf.stringToTerraform(struct!.method),
    param_length: cdktf.stringToTerraform(struct!.paramLength),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    regex: cdktf.stringToTerraform(struct!.regex),
    url_param_length: cdktf.stringToTerraform(struct!.urlParamLength),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function wafProfileConstraintExceptionToHclTerraform(struct?: WafProfileConstraintException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_length: {
      value: cdktf.stringToHclTerraform(struct!.contentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_length: {
      value: cdktf.stringToHclTerraform(struct!.headerLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_length: {
      value: cdktf.stringToHclTerraform(struct!.lineLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    malformed: {
      value: cdktf.stringToHclTerraform(struct!.malformed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_cookie: {
      value: cdktf.stringToHclTerraform(struct!.maxCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_header_line: {
      value: cdktf.stringToHclTerraform(struct!.maxHeaderLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_range_segment: {
      value: cdktf.stringToHclTerraform(struct!.maxRangeSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_url_param: {
      value: cdktf.stringToHclTerraform(struct!.maxUrlParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_length: {
      value: cdktf.stringToHclTerraform(struct!.paramLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_param_length: {
      value: cdktf.stringToHclTerraform(struct!.urlParamLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class WafProfileConstraintExceptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafProfileConstraintException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._contentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLength = this._contentLength;
    }
    if (this._headerLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerLength = this._headerLength;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lineLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineLength = this._lineLength;
    }
    if (this._malformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformed = this._malformed;
    }
    if (this._maxCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookie = this._maxCookie;
    }
    if (this._maxHeaderLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderLine = this._maxHeaderLine;
    }
    if (this._maxRangeSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRangeSegment = this._maxRangeSegment;
    }
    if (this._maxUrlParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlParam = this._maxUrlParam;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._paramLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramLength = this._paramLength;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._urlParamLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlParamLength = this._urlParamLength;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._contentLength = undefined;
      this._headerLength = undefined;
      this._hostname = undefined;
      this._id = undefined;
      this._lineLength = undefined;
      this._malformed = undefined;
      this._maxCookie = undefined;
      this._maxHeaderLine = undefined;
      this._maxRangeSegment = undefined;
      this._maxUrlParam = undefined;
      this._method = undefined;
      this._paramLength = undefined;
      this._pattern = undefined;
      this._regex = undefined;
      this._urlParamLength = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._contentLength = value.contentLength;
      this._headerLength = value.headerLength;
      this._hostname = value.hostname;
      this._id = value.id;
      this._lineLength = value.lineLength;
      this._malformed = value.malformed;
      this._maxCookie = value.maxCookie;
      this._maxHeaderLine = value.maxHeaderLine;
      this._maxRangeSegment = value.maxRangeSegment;
      this._maxUrlParam = value.maxUrlParam;
      this._method = value.method;
      this._paramLength = value.paramLength;
      this._pattern = value.pattern;
      this._regex = value.regex;
      this._urlParamLength = value.urlParamLength;
      this._version = value.version;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // content_length - computed: true, optional: true, required: false
  private _contentLength?: string; 
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }
  public set contentLength(value: string) {
    this._contentLength = value;
  }
  public resetContentLength() {
    this._contentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthInput() {
    return this._contentLength;
  }

  // header_length - computed: true, optional: true, required: false
  private _headerLength?: string; 
  public get headerLength() {
    return this.getStringAttribute('header_length');
  }
  public set headerLength(value: string) {
    this._headerLength = value;
  }
  public resetHeaderLength() {
    this._headerLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLengthInput() {
    return this._headerLength;
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

  // line_length - computed: true, optional: true, required: false
  private _lineLength?: string; 
  public get lineLength() {
    return this.getStringAttribute('line_length');
  }
  public set lineLength(value: string) {
    this._lineLength = value;
  }
  public resetLineLength() {
    this._lineLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineLengthInput() {
    return this._lineLength;
  }

  // malformed - computed: true, optional: true, required: false
  private _malformed?: string; 
  public get malformed() {
    return this.getStringAttribute('malformed');
  }
  public set malformed(value: string) {
    this._malformed = value;
  }
  public resetMalformed() {
    this._malformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedInput() {
    return this._malformed;
  }

  // max_cookie - computed: true, optional: true, required: false
  private _maxCookie?: string; 
  public get maxCookie() {
    return this.getStringAttribute('max_cookie');
  }
  public set maxCookie(value: string) {
    this._maxCookie = value;
  }
  public resetMaxCookie() {
    this._maxCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieInput() {
    return this._maxCookie;
  }

  // max_header_line - computed: true, optional: true, required: false
  private _maxHeaderLine?: string; 
  public get maxHeaderLine() {
    return this.getStringAttribute('max_header_line');
  }
  public set maxHeaderLine(value: string) {
    this._maxHeaderLine = value;
  }
  public resetMaxHeaderLine() {
    this._maxHeaderLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderLineInput() {
    return this._maxHeaderLine;
  }

  // max_range_segment - computed: true, optional: true, required: false
  private _maxRangeSegment?: string; 
  public get maxRangeSegment() {
    return this.getStringAttribute('max_range_segment');
  }
  public set maxRangeSegment(value: string) {
    this._maxRangeSegment = value;
  }
  public resetMaxRangeSegment() {
    this._maxRangeSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRangeSegmentInput() {
    return this._maxRangeSegment;
  }

  // max_url_param - computed: true, optional: true, required: false
  private _maxUrlParam?: string; 
  public get maxUrlParam() {
    return this.getStringAttribute('max_url_param');
  }
  public set maxUrlParam(value: string) {
    this._maxUrlParam = value;
  }
  public resetMaxUrlParam() {
    this._maxUrlParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlParamInput() {
    return this._maxUrlParam;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // param_length - computed: true, optional: true, required: false
  private _paramLength?: string; 
  public get paramLength() {
    return this.getStringAttribute('param_length');
  }
  public set paramLength(value: string) {
    this._paramLength = value;
  }
  public resetParamLength() {
    this._paramLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramLengthInput() {
    return this._paramLength;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // url_param_length - computed: true, optional: true, required: false
  private _urlParamLength?: string; 
  public get urlParamLength() {
    return this.getStringAttribute('url_param_length');
  }
  public set urlParamLength(value: string) {
    this._urlParamLength = value;
  }
  public resetUrlParamLength() {
    this._urlParamLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParamLengthInput() {
    return this._urlParamLength;
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

export class WafProfileConstraintExceptionList extends cdktf.ComplexList {
  public internalValue? : WafProfileConstraintException[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafProfileConstraintExceptionOutputReference {
    return new WafProfileConstraintExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafProfileConstraintHeaderLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#length WafProfile#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintHeaderLengthToTerraform(struct?: WafProfileConstraintHeaderLengthOutputReference | WafProfileConstraintHeaderLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    length: cdktf.numberToTerraform(struct!.length),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintHeaderLengthToHclTerraform(struct?: WafProfileConstraintHeaderLengthOutputReference | WafProfileConstraintHeaderLength): any {
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
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintHeaderLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintHeaderLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintHeaderLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._length = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._length = value.length;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintHostnameToTerraform(struct?: WafProfileConstraintHostnameOutputReference | WafProfileConstraintHostname): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintHostnameToHclTerraform(struct?: WafProfileConstraintHostnameOutputReference | WafProfileConstraintHostname): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintHostnameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintHostname | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintHostname | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintLineLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#length WafProfile#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintLineLengthToTerraform(struct?: WafProfileConstraintLineLengthOutputReference | WafProfileConstraintLineLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    length: cdktf.numberToTerraform(struct!.length),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintLineLengthToHclTerraform(struct?: WafProfileConstraintLineLengthOutputReference | WafProfileConstraintLineLength): any {
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
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintLineLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintLineLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintLineLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._length = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._length = value.length;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintMalformed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintMalformedToTerraform(struct?: WafProfileConstraintMalformedOutputReference | WafProfileConstraintMalformed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintMalformedToHclTerraform(struct?: WafProfileConstraintMalformedOutputReference | WafProfileConstraintMalformed): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintMalformedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintMalformed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintMalformed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintMaxCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_cookie WafProfile#max_cookie}
  */
  readonly maxCookie?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintMaxCookieToTerraform(struct?: WafProfileConstraintMaxCookieOutputReference | WafProfileConstraintMaxCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    max_cookie: cdktf.numberToTerraform(struct!.maxCookie),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintMaxCookieToHclTerraform(struct?: WafProfileConstraintMaxCookieOutputReference | WafProfileConstraintMaxCookie): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_cookie: {
      value: cdktf.numberToHclTerraform(struct!.maxCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintMaxCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintMaxCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._maxCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookie = this._maxCookie;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintMaxCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._maxCookie = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._maxCookie = value.maxCookie;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // max_cookie - computed: true, optional: true, required: false
  private _maxCookie?: number; 
  public get maxCookie() {
    return this.getNumberAttribute('max_cookie');
  }
  public set maxCookie(value: number) {
    this._maxCookie = value;
  }
  public resetMaxCookie() {
    this._maxCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieInput() {
    return this._maxCookie;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintMaxHeaderLine {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_header_line WafProfile#max_header_line}
  */
  readonly maxHeaderLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintMaxHeaderLineToTerraform(struct?: WafProfileConstraintMaxHeaderLineOutputReference | WafProfileConstraintMaxHeaderLine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    max_header_line: cdktf.numberToTerraform(struct!.maxHeaderLine),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintMaxHeaderLineToHclTerraform(struct?: WafProfileConstraintMaxHeaderLineOutputReference | WafProfileConstraintMaxHeaderLine): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_header_line: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintMaxHeaderLineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintMaxHeaderLine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._maxHeaderLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderLine = this._maxHeaderLine;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintMaxHeaderLine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._maxHeaderLine = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._maxHeaderLine = value.maxHeaderLine;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // max_header_line - computed: true, optional: true, required: false
  private _maxHeaderLine?: number; 
  public get maxHeaderLine() {
    return this.getNumberAttribute('max_header_line');
  }
  public set maxHeaderLine(value: number) {
    this._maxHeaderLine = value;
  }
  public resetMaxHeaderLine() {
    this._maxHeaderLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderLineInput() {
    return this._maxHeaderLine;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintMaxRangeSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_range_segment WafProfile#max_range_segment}
  */
  readonly maxRangeSegment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintMaxRangeSegmentToTerraform(struct?: WafProfileConstraintMaxRangeSegmentOutputReference | WafProfileConstraintMaxRangeSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    max_range_segment: cdktf.numberToTerraform(struct!.maxRangeSegment),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintMaxRangeSegmentToHclTerraform(struct?: WafProfileConstraintMaxRangeSegmentOutputReference | WafProfileConstraintMaxRangeSegment): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_range_segment: {
      value: cdktf.numberToHclTerraform(struct!.maxRangeSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintMaxRangeSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintMaxRangeSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._maxRangeSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRangeSegment = this._maxRangeSegment;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintMaxRangeSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._maxRangeSegment = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._maxRangeSegment = value.maxRangeSegment;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // max_range_segment - computed: true, optional: true, required: false
  private _maxRangeSegment?: number; 
  public get maxRangeSegment() {
    return this.getNumberAttribute('max_range_segment');
  }
  public set maxRangeSegment(value: number) {
    this._maxRangeSegment = value;
  }
  public resetMaxRangeSegment() {
    this._maxRangeSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRangeSegmentInput() {
    return this._maxRangeSegment;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintMaxUrlParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_url_param WafProfile#max_url_param}
  */
  readonly maxUrlParam?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintMaxUrlParamToTerraform(struct?: WafProfileConstraintMaxUrlParamOutputReference | WafProfileConstraintMaxUrlParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    max_url_param: cdktf.numberToTerraform(struct!.maxUrlParam),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintMaxUrlParamToHclTerraform(struct?: WafProfileConstraintMaxUrlParamOutputReference | WafProfileConstraintMaxUrlParam): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_url_param: {
      value: cdktf.numberToHclTerraform(struct!.maxUrlParam),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintMaxUrlParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintMaxUrlParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._maxUrlParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlParam = this._maxUrlParam;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintMaxUrlParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._maxUrlParam = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._maxUrlParam = value.maxUrlParam;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // max_url_param - computed: true, optional: true, required: false
  private _maxUrlParam?: number; 
  public get maxUrlParam() {
    return this.getNumberAttribute('max_url_param');
  }
  public set maxUrlParam(value: number) {
    this._maxUrlParam = value;
  }
  public resetMaxUrlParam() {
    this._maxUrlParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlParamInput() {
    return this._maxUrlParam;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintMethodToTerraform(struct?: WafProfileConstraintMethodOutputReference | WafProfileConstraintMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintMethodToHclTerraform(struct?: WafProfileConstraintMethodOutputReference | WafProfileConstraintMethod): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintParamLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#length WafProfile#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintParamLengthToTerraform(struct?: WafProfileConstraintParamLengthOutputReference | WafProfileConstraintParamLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    length: cdktf.numberToTerraform(struct!.length),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintParamLengthToHclTerraform(struct?: WafProfileConstraintParamLengthOutputReference | WafProfileConstraintParamLength): any {
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
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintParamLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintParamLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintParamLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._length = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._length = value.length;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintUrlParamLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#length WafProfile#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintUrlParamLengthToTerraform(struct?: WafProfileConstraintUrlParamLengthOutputReference | WafProfileConstraintUrlParamLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    length: cdktf.numberToTerraform(struct!.length),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintUrlParamLengthToHclTerraform(struct?: WafProfileConstraintUrlParamLengthOutputReference | WafProfileConstraintUrlParamLength): any {
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
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintUrlParamLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintUrlParamLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintUrlParamLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._length = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._length = value.length;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraintVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileConstraintVersionToTerraform(struct?: WafProfileConstraintVersionOutputReference | WafProfileConstraintVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileConstraintVersionToHclTerraform(struct?: WafProfileConstraintVersionOutputReference | WafProfileConstraintVersion): any {
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraintVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraintVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}
export interface WafProfileConstraint {
  /**
  * content_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#content_length WafProfile#content_length}
  */
  readonly contentLength?: WafProfileConstraintContentLength;
  /**
  * exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#exception WafProfile#exception}
  */
  readonly exception?: WafProfileConstraintException[] | cdktf.IResolvable;
  /**
  * header_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#header_length WafProfile#header_length}
  */
  readonly headerLength?: WafProfileConstraintHeaderLength;
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#hostname WafProfile#hostname}
  */
  readonly hostname?: WafProfileConstraintHostname;
  /**
  * line_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#line_length WafProfile#line_length}
  */
  readonly lineLength?: WafProfileConstraintLineLength;
  /**
  * malformed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#malformed WafProfile#malformed}
  */
  readonly malformed?: WafProfileConstraintMalformed;
  /**
  * max_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_cookie WafProfile#max_cookie}
  */
  readonly maxCookie?: WafProfileConstraintMaxCookie;
  /**
  * max_header_line block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_header_line WafProfile#max_header_line}
  */
  readonly maxHeaderLine?: WafProfileConstraintMaxHeaderLine;
  /**
  * max_range_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_range_segment WafProfile#max_range_segment}
  */
  readonly maxRangeSegment?: WafProfileConstraintMaxRangeSegment;
  /**
  * max_url_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#max_url_param WafProfile#max_url_param}
  */
  readonly maxUrlParam?: WafProfileConstraintMaxUrlParam;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#method WafProfile#method}
  */
  readonly method?: WafProfileConstraintMethod;
  /**
  * param_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#param_length WafProfile#param_length}
  */
  readonly paramLength?: WafProfileConstraintParamLength;
  /**
  * url_param_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#url_param_length WafProfile#url_param_length}
  */
  readonly urlParamLength?: WafProfileConstraintUrlParamLength;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#version WafProfile#version}
  */
  readonly version?: WafProfileConstraintVersion;
}

export function wafProfileConstraintToTerraform(struct?: WafProfileConstraintOutputReference | WafProfileConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_length: wafProfileConstraintContentLengthToTerraform(struct!.contentLength),
    exception: cdktf.listMapper(wafProfileConstraintExceptionToTerraform, true)(struct!.exception),
    header_length: wafProfileConstraintHeaderLengthToTerraform(struct!.headerLength),
    hostname: wafProfileConstraintHostnameToTerraform(struct!.hostname),
    line_length: wafProfileConstraintLineLengthToTerraform(struct!.lineLength),
    malformed: wafProfileConstraintMalformedToTerraform(struct!.malformed),
    max_cookie: wafProfileConstraintMaxCookieToTerraform(struct!.maxCookie),
    max_header_line: wafProfileConstraintMaxHeaderLineToTerraform(struct!.maxHeaderLine),
    max_range_segment: wafProfileConstraintMaxRangeSegmentToTerraform(struct!.maxRangeSegment),
    max_url_param: wafProfileConstraintMaxUrlParamToTerraform(struct!.maxUrlParam),
    method: wafProfileConstraintMethodToTerraform(struct!.method),
    param_length: wafProfileConstraintParamLengthToTerraform(struct!.paramLength),
    url_param_length: wafProfileConstraintUrlParamLengthToTerraform(struct!.urlParamLength),
    version: wafProfileConstraintVersionToTerraform(struct!.version),
  }
}


export function wafProfileConstraintToHclTerraform(struct?: WafProfileConstraintOutputReference | WafProfileConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_length: {
      value: wafProfileConstraintContentLengthToHclTerraform(struct!.contentLength),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintContentLengthList",
    },
    exception: {
      value: cdktf.listMapperHcl(wafProfileConstraintExceptionToHclTerraform, true)(struct!.exception),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintExceptionList",
    },
    header_length: {
      value: wafProfileConstraintHeaderLengthToHclTerraform(struct!.headerLength),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintHeaderLengthList",
    },
    hostname: {
      value: wafProfileConstraintHostnameToHclTerraform(struct!.hostname),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintHostnameList",
    },
    line_length: {
      value: wafProfileConstraintLineLengthToHclTerraform(struct!.lineLength),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintLineLengthList",
    },
    malformed: {
      value: wafProfileConstraintMalformedToHclTerraform(struct!.malformed),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintMalformedList",
    },
    max_cookie: {
      value: wafProfileConstraintMaxCookieToHclTerraform(struct!.maxCookie),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintMaxCookieList",
    },
    max_header_line: {
      value: wafProfileConstraintMaxHeaderLineToHclTerraform(struct!.maxHeaderLine),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintMaxHeaderLineList",
    },
    max_range_segment: {
      value: wafProfileConstraintMaxRangeSegmentToHclTerraform(struct!.maxRangeSegment),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintMaxRangeSegmentList",
    },
    max_url_param: {
      value: wafProfileConstraintMaxUrlParamToHclTerraform(struct!.maxUrlParam),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintMaxUrlParamList",
    },
    method: {
      value: wafProfileConstraintMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintMethodList",
    },
    param_length: {
      value: wafProfileConstraintParamLengthToHclTerraform(struct!.paramLength),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintParamLengthList",
    },
    url_param_length: {
      value: wafProfileConstraintUrlParamLengthToHclTerraform(struct!.urlParamLength),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintUrlParamLengthList",
    },
    version: {
      value: wafProfileConstraintVersionToHclTerraform(struct!.version),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileConstraintVersionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLength = this._contentLength?.internalValue;
    }
    if (this._exception?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exception = this._exception?.internalValue;
    }
    if (this._headerLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerLength = this._headerLength?.internalValue;
    }
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._lineLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineLength = this._lineLength?.internalValue;
    }
    if (this._malformed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformed = this._malformed?.internalValue;
    }
    if (this._maxCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookie = this._maxCookie?.internalValue;
    }
    if (this._maxHeaderLine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderLine = this._maxHeaderLine?.internalValue;
    }
    if (this._maxRangeSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRangeSegment = this._maxRangeSegment?.internalValue;
    }
    if (this._maxUrlParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlParam = this._maxUrlParam?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._paramLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramLength = this._paramLength?.internalValue;
    }
    if (this._urlParamLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlParamLength = this._urlParamLength?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentLength.internalValue = undefined;
      this._exception.internalValue = undefined;
      this._headerLength.internalValue = undefined;
      this._hostname.internalValue = undefined;
      this._lineLength.internalValue = undefined;
      this._malformed.internalValue = undefined;
      this._maxCookie.internalValue = undefined;
      this._maxHeaderLine.internalValue = undefined;
      this._maxRangeSegment.internalValue = undefined;
      this._maxUrlParam.internalValue = undefined;
      this._method.internalValue = undefined;
      this._paramLength.internalValue = undefined;
      this._urlParamLength.internalValue = undefined;
      this._version.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentLength.internalValue = value.contentLength;
      this._exception.internalValue = value.exception;
      this._headerLength.internalValue = value.headerLength;
      this._hostname.internalValue = value.hostname;
      this._lineLength.internalValue = value.lineLength;
      this._malformed.internalValue = value.malformed;
      this._maxCookie.internalValue = value.maxCookie;
      this._maxHeaderLine.internalValue = value.maxHeaderLine;
      this._maxRangeSegment.internalValue = value.maxRangeSegment;
      this._maxUrlParam.internalValue = value.maxUrlParam;
      this._method.internalValue = value.method;
      this._paramLength.internalValue = value.paramLength;
      this._urlParamLength.internalValue = value.urlParamLength;
      this._version.internalValue = value.version;
    }
  }

  // content_length - computed: false, optional: true, required: false
  private _contentLength = new WafProfileConstraintContentLengthOutputReference(this, "content_length");
  public get contentLength() {
    return this._contentLength;
  }
  public putContentLength(value: WafProfileConstraintContentLength) {
    this._contentLength.internalValue = value;
  }
  public resetContentLength() {
    this._contentLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthInput() {
    return this._contentLength.internalValue;
  }

  // exception - computed: false, optional: true, required: false
  private _exception = new WafProfileConstraintExceptionList(this, "exception", false);
  public get exception() {
    return this._exception;
  }
  public putException(value: WafProfileConstraintException[] | cdktf.IResolvable) {
    this._exception.internalValue = value;
  }
  public resetException() {
    this._exception.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionInput() {
    return this._exception.internalValue;
  }

  // header_length - computed: false, optional: true, required: false
  private _headerLength = new WafProfileConstraintHeaderLengthOutputReference(this, "header_length");
  public get headerLength() {
    return this._headerLength;
  }
  public putHeaderLength(value: WafProfileConstraintHeaderLength) {
    this._headerLength.internalValue = value;
  }
  public resetHeaderLength() {
    this._headerLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLengthInput() {
    return this._headerLength.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new WafProfileConstraintHostnameOutputReference(this, "hostname");
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: WafProfileConstraintHostname) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // line_length - computed: false, optional: true, required: false
  private _lineLength = new WafProfileConstraintLineLengthOutputReference(this, "line_length");
  public get lineLength() {
    return this._lineLength;
  }
  public putLineLength(value: WafProfileConstraintLineLength) {
    this._lineLength.internalValue = value;
  }
  public resetLineLength() {
    this._lineLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineLengthInput() {
    return this._lineLength.internalValue;
  }

  // malformed - computed: false, optional: true, required: false
  private _malformed = new WafProfileConstraintMalformedOutputReference(this, "malformed");
  public get malformed() {
    return this._malformed;
  }
  public putMalformed(value: WafProfileConstraintMalformed) {
    this._malformed.internalValue = value;
  }
  public resetMalformed() {
    this._malformed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedInput() {
    return this._malformed.internalValue;
  }

  // max_cookie - computed: false, optional: true, required: false
  private _maxCookie = new WafProfileConstraintMaxCookieOutputReference(this, "max_cookie");
  public get maxCookie() {
    return this._maxCookie;
  }
  public putMaxCookie(value: WafProfileConstraintMaxCookie) {
    this._maxCookie.internalValue = value;
  }
  public resetMaxCookie() {
    this._maxCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieInput() {
    return this._maxCookie.internalValue;
  }

  // max_header_line - computed: false, optional: true, required: false
  private _maxHeaderLine = new WafProfileConstraintMaxHeaderLineOutputReference(this, "max_header_line");
  public get maxHeaderLine() {
    return this._maxHeaderLine;
  }
  public putMaxHeaderLine(value: WafProfileConstraintMaxHeaderLine) {
    this._maxHeaderLine.internalValue = value;
  }
  public resetMaxHeaderLine() {
    this._maxHeaderLine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderLineInput() {
    return this._maxHeaderLine.internalValue;
  }

  // max_range_segment - computed: false, optional: true, required: false
  private _maxRangeSegment = new WafProfileConstraintMaxRangeSegmentOutputReference(this, "max_range_segment");
  public get maxRangeSegment() {
    return this._maxRangeSegment;
  }
  public putMaxRangeSegment(value: WafProfileConstraintMaxRangeSegment) {
    this._maxRangeSegment.internalValue = value;
  }
  public resetMaxRangeSegment() {
    this._maxRangeSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRangeSegmentInput() {
    return this._maxRangeSegment.internalValue;
  }

  // max_url_param - computed: false, optional: true, required: false
  private _maxUrlParam = new WafProfileConstraintMaxUrlParamOutputReference(this, "max_url_param");
  public get maxUrlParam() {
    return this._maxUrlParam;
  }
  public putMaxUrlParam(value: WafProfileConstraintMaxUrlParam) {
    this._maxUrlParam.internalValue = value;
  }
  public resetMaxUrlParam() {
    this._maxUrlParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlParamInput() {
    return this._maxUrlParam.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new WafProfileConstraintMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: WafProfileConstraintMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // param_length - computed: false, optional: true, required: false
  private _paramLength = new WafProfileConstraintParamLengthOutputReference(this, "param_length");
  public get paramLength() {
    return this._paramLength;
  }
  public putParamLength(value: WafProfileConstraintParamLength) {
    this._paramLength.internalValue = value;
  }
  public resetParamLength() {
    this._paramLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramLengthInput() {
    return this._paramLength.internalValue;
  }

  // url_param_length - computed: false, optional: true, required: false
  private _urlParamLength = new WafProfileConstraintUrlParamLengthOutputReference(this, "url_param_length");
  public get urlParamLength() {
    return this._urlParamLength;
  }
  public putUrlParamLength(value: WafProfileConstraintUrlParamLength) {
    this._urlParamLength.internalValue = value;
  }
  public resetUrlParamLength() {
    this._urlParamLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlParamLengthInput() {
    return this._urlParamLength.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version = new WafProfileConstraintVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }
  public putVersion(value: WafProfileConstraintVersion) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }
}
export interface WafProfileMethodMethodPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#address WafProfile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#allowed_methods WafProfile#allowed_methods}
  */
  readonly allowedMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#id WafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#pattern WafProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#regex WafProfile#regex}
  */
  readonly regex?: string;
}

export function wafProfileMethodMethodPolicyToTerraform(struct?: WafProfileMethodMethodPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    allowed_methods: cdktf.stringToTerraform(struct!.allowedMethods),
    id: cdktf.numberToTerraform(struct!.id),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function wafProfileMethodMethodPolicyToHclTerraform(struct?: WafProfileMethodMethodPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_methods: {
      value: cdktf.stringToHclTerraform(struct!.allowedMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileMethodMethodPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafProfileMethodMethodPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileMethodMethodPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._allowedMethods = undefined;
      this._id = undefined;
      this._pattern = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._allowedMethods = value.allowedMethods;
      this._id = value.id;
      this._pattern = value.pattern;
      this._regex = value.regex;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods?: string; 
  public get allowedMethods() {
    return this.getStringAttribute('allowed_methods');
  }
  public set allowedMethods(value: string) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class WafProfileMethodMethodPolicyList extends cdktf.ComplexList {
  public internalValue? : WafProfileMethodMethodPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafProfileMethodMethodPolicyOutputReference {
    return new WafProfileMethodMethodPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafProfileMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#default_allowed_methods WafProfile#default_allowed_methods}
  */
  readonly defaultAllowedMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
  /**
  * method_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#method_policy WafProfile#method_policy}
  */
  readonly methodPolicy?: WafProfileMethodMethodPolicy[] | cdktf.IResolvable;
}

export function wafProfileMethodToTerraform(struct?: WafProfileMethodOutputReference | WafProfileMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_allowed_methods: cdktf.stringToTerraform(struct!.defaultAllowedMethods),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
    method_policy: cdktf.listMapper(wafProfileMethodMethodPolicyToTerraform, true)(struct!.methodPolicy),
  }
}


export function wafProfileMethodToHclTerraform(struct?: WafProfileMethodOutputReference | WafProfileMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_allowed_methods: {
      value: cdktf.stringToHclTerraform(struct!.defaultAllowedMethods),
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
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_policy: {
      value: cdktf.listMapperHcl(wafProfileMethodMethodPolicyToHclTerraform, true)(struct!.methodPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileMethodMethodPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAllowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAllowedMethods = this._defaultAllowedMethods;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._methodPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodPolicy = this._methodPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAllowedMethods = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
      this._methodPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAllowedMethods = value.defaultAllowedMethods;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
      this._methodPolicy.internalValue = value.methodPolicy;
    }
  }

  // default_allowed_methods - computed: false, optional: true, required: false
  private _defaultAllowedMethods?: string; 
  public get defaultAllowedMethods() {
    return this.getStringAttribute('default_allowed_methods');
  }
  public set defaultAllowedMethods(value: string) {
    this._defaultAllowedMethods = value;
  }
  public resetDefaultAllowedMethods() {
    this._defaultAllowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllowedMethodsInput() {
    return this._defaultAllowedMethods;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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

  // method_policy - computed: false, optional: true, required: false
  private _methodPolicy = new WafProfileMethodMethodPolicyList(this, "method_policy", false);
  public get methodPolicy() {
    return this._methodPolicy;
  }
  public putMethodPolicy(value: WafProfileMethodMethodPolicy[] | cdktf.IResolvable) {
    this._methodPolicy.internalValue = value;
  }
  public resetMethodPolicy() {
    this._methodPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPolicyInput() {
    return this._methodPolicy.internalValue;
  }
}
export interface WafProfileSignatureCustomSignature {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#case_sensitivity WafProfile#case_sensitivity}
  */
  readonly caseSensitivity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#direction WafProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#name WafProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#pattern WafProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#target WafProfile#target}
  */
  readonly target?: string;
}

export function wafProfileSignatureCustomSignatureToTerraform(struct?: WafProfileSignatureCustomSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    case_sensitivity: cdktf.stringToTerraform(struct!.caseSensitivity),
    direction: cdktf.stringToTerraform(struct!.direction),
    log: cdktf.stringToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function wafProfileSignatureCustomSignatureToHclTerraform(struct?: WafProfileSignatureCustomSignature | cdktf.IResolvable): any {
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
    case_sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.caseSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileSignatureCustomSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafProfileSignatureCustomSignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._caseSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitivity = this._caseSensitivity;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileSignatureCustomSignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._caseSensitivity = undefined;
      this._direction = undefined;
      this._log = undefined;
      this._name = undefined;
      this._pattern = undefined;
      this._severity = undefined;
      this._status = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._caseSensitivity = value.caseSensitivity;
      this._direction = value.direction;
      this._log = value.log;
      this._name = value.name;
      this._pattern = value.pattern;
      this._severity = value.severity;
      this._status = value.status;
      this._target = value.target;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // case_sensitivity - computed: true, optional: true, required: false
  private _caseSensitivity?: string; 
  public get caseSensitivity() {
    return this.getStringAttribute('case_sensitivity');
  }
  public set caseSensitivity(value: string) {
    this._caseSensitivity = value;
  }
  public resetCaseSensitivity() {
    this._caseSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitivityInput() {
    return this._caseSensitivity;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}

export class WafProfileSignatureCustomSignatureList extends cdktf.ComplexList {
  public internalValue? : WafProfileSignatureCustomSignature[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafProfileSignatureCustomSignatureOutputReference {
    return new WafProfileSignatureCustomSignatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafProfileSignatureDisabledSignature {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#id WafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function wafProfileSignatureDisabledSignatureToTerraform(struct?: WafProfileSignatureDisabledSignature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function wafProfileSignatureDisabledSignatureToHclTerraform(struct?: WafProfileSignatureDisabledSignature | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileSignatureDisabledSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafProfileSignatureDisabledSignature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileSignatureDisabledSignature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class WafProfileSignatureDisabledSignatureList extends cdktf.ComplexList {
  public internalValue? : WafProfileSignatureDisabledSignature[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafProfileSignatureDisabledSignatureOutputReference {
    return new WafProfileSignatureDisabledSignatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafProfileSignatureDisabledSubClass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#id WafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function wafProfileSignatureDisabledSubClassToTerraform(struct?: WafProfileSignatureDisabledSubClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function wafProfileSignatureDisabledSubClassToHclTerraform(struct?: WafProfileSignatureDisabledSubClass | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileSignatureDisabledSubClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafProfileSignatureDisabledSubClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileSignatureDisabledSubClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

export class WafProfileSignatureDisabledSubClassList extends cdktf.ComplexList {
  public internalValue? : WafProfileSignatureDisabledSubClass[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafProfileSignatureDisabledSubClassOutputReference {
    return new WafProfileSignatureDisabledSubClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafProfileSignatureMainClass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#id WafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#status WafProfile#status}
  */
  readonly status?: string;
}

export function wafProfileSignatureMainClassToTerraform(struct?: WafProfileSignatureMainClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function wafProfileSignatureMainClassToHclTerraform(struct?: WafProfileSignatureMainClass | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileSignatureMainClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafProfileSignatureMainClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileSignatureMainClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
      this._log = value.log;
      this._severity = value.severity;
      this._status = value.status;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
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
}

export class WafProfileSignatureMainClassList extends cdktf.ComplexList {
  public internalValue? : WafProfileSignatureMainClass[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafProfileSignatureMainClassOutputReference {
    return new WafProfileSignatureMainClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafProfileSignature {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#credit_card_detection_threshold WafProfile#credit_card_detection_threshold}
  */
  readonly creditCardDetectionThreshold?: number;
  /**
  * custom_signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#custom_signature WafProfile#custom_signature}
  */
  readonly customSignature?: WafProfileSignatureCustomSignature[] | cdktf.IResolvable;
  /**
  * disabled_signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#disabled_signature WafProfile#disabled_signature}
  */
  readonly disabledSignature?: WafProfileSignatureDisabledSignature[] | cdktf.IResolvable;
  /**
  * disabled_sub_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#disabled_sub_class WafProfile#disabled_sub_class}
  */
  readonly disabledSubClass?: WafProfileSignatureDisabledSubClass[] | cdktf.IResolvable;
  /**
  * main_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#main_class WafProfile#main_class}
  */
  readonly mainClass?: WafProfileSignatureMainClass[] | cdktf.IResolvable;
}

export function wafProfileSignatureToTerraform(struct?: WafProfileSignatureOutputReference | WafProfileSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credit_card_detection_threshold: cdktf.numberToTerraform(struct!.creditCardDetectionThreshold),
    custom_signature: cdktf.listMapper(wafProfileSignatureCustomSignatureToTerraform, true)(struct!.customSignature),
    disabled_signature: cdktf.listMapper(wafProfileSignatureDisabledSignatureToTerraform, true)(struct!.disabledSignature),
    disabled_sub_class: cdktf.listMapper(wafProfileSignatureDisabledSubClassToTerraform, true)(struct!.disabledSubClass),
    main_class: cdktf.listMapper(wafProfileSignatureMainClassToTerraform, true)(struct!.mainClass),
  }
}


export function wafProfileSignatureToHclTerraform(struct?: WafProfileSignatureOutputReference | WafProfileSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credit_card_detection_threshold: {
      value: cdktf.numberToHclTerraform(struct!.creditCardDetectionThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_signature: {
      value: cdktf.listMapperHcl(wafProfileSignatureCustomSignatureToHclTerraform, true)(struct!.customSignature),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileSignatureCustomSignatureList",
    },
    disabled_signature: {
      value: cdktf.listMapperHcl(wafProfileSignatureDisabledSignatureToHclTerraform, true)(struct!.disabledSignature),
      isBlock: true,
      type: "set",
      storageClassType: "WafProfileSignatureDisabledSignatureList",
    },
    disabled_sub_class: {
      value: cdktf.listMapperHcl(wafProfileSignatureDisabledSubClassToHclTerraform, true)(struct!.disabledSubClass),
      isBlock: true,
      type: "set",
      storageClassType: "WafProfileSignatureDisabledSubClassList",
    },
    main_class: {
      value: cdktf.listMapperHcl(wafProfileSignatureMainClassToHclTerraform, true)(struct!.mainClass),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileSignatureMainClassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileSignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafProfileSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creditCardDetectionThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.creditCardDetectionThreshold = this._creditCardDetectionThreshold;
    }
    if (this._customSignature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSignature = this._customSignature?.internalValue;
    }
    if (this._disabledSignature?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledSignature = this._disabledSignature?.internalValue;
    }
    if (this._disabledSubClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledSubClass = this._disabledSubClass?.internalValue;
    }
    if (this._mainClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._creditCardDetectionThreshold = undefined;
      this._customSignature.internalValue = undefined;
      this._disabledSignature.internalValue = undefined;
      this._disabledSubClass.internalValue = undefined;
      this._mainClass.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._creditCardDetectionThreshold = value.creditCardDetectionThreshold;
      this._customSignature.internalValue = value.customSignature;
      this._disabledSignature.internalValue = value.disabledSignature;
      this._disabledSubClass.internalValue = value.disabledSubClass;
      this._mainClass.internalValue = value.mainClass;
    }
  }

  // credit_card_detection_threshold - computed: true, optional: true, required: false
  private _creditCardDetectionThreshold?: number; 
  public get creditCardDetectionThreshold() {
    return this.getNumberAttribute('credit_card_detection_threshold');
  }
  public set creditCardDetectionThreshold(value: number) {
    this._creditCardDetectionThreshold = value;
  }
  public resetCreditCardDetectionThreshold() {
    this._creditCardDetectionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creditCardDetectionThresholdInput() {
    return this._creditCardDetectionThreshold;
  }

  // custom_signature - computed: false, optional: true, required: false
  private _customSignature = new WafProfileSignatureCustomSignatureList(this, "custom_signature", false);
  public get customSignature() {
    return this._customSignature;
  }
  public putCustomSignature(value: WafProfileSignatureCustomSignature[] | cdktf.IResolvable) {
    this._customSignature.internalValue = value;
  }
  public resetCustomSignature() {
    this._customSignature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSignatureInput() {
    return this._customSignature.internalValue;
  }

  // disabled_signature - computed: false, optional: true, required: false
  private _disabledSignature = new WafProfileSignatureDisabledSignatureList(this, "disabled_signature", true);
  public get disabledSignature() {
    return this._disabledSignature;
  }
  public putDisabledSignature(value: WafProfileSignatureDisabledSignature[] | cdktf.IResolvable) {
    this._disabledSignature.internalValue = value;
  }
  public resetDisabledSignature() {
    this._disabledSignature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledSignatureInput() {
    return this._disabledSignature.internalValue;
  }

  // disabled_sub_class - computed: false, optional: true, required: false
  private _disabledSubClass = new WafProfileSignatureDisabledSubClassList(this, "disabled_sub_class", true);
  public get disabledSubClass() {
    return this._disabledSubClass;
  }
  public putDisabledSubClass(value: WafProfileSignatureDisabledSubClass[] | cdktf.IResolvable) {
    this._disabledSubClass.internalValue = value;
  }
  public resetDisabledSubClass() {
    this._disabledSubClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledSubClassInput() {
    return this._disabledSubClass.internalValue;
  }

  // main_class - computed: false, optional: true, required: false
  private _mainClass = new WafProfileSignatureMainClassList(this, "main_class", false);
  public get mainClass() {
    return this._mainClass;
  }
  public putMainClass(value: WafProfileSignatureMainClass[] | cdktf.IResolvable) {
    this._mainClass.internalValue = value;
  }
  public resetMainClass() {
    this._mainClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassInput() {
    return this._mainClass.internalValue;
  }
}
export interface WafProfileUrlAccessAccessPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#id WafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#negate WafProfile#negate}
  */
  readonly negate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#pattern WafProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#regex WafProfile#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#srcaddr WafProfile#srcaddr}
  */
  readonly srcaddr?: string;
}

export function wafProfileUrlAccessAccessPatternToTerraform(struct?: WafProfileUrlAccessAccessPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    negate: cdktf.stringToTerraform(struct!.negate),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    regex: cdktf.stringToTerraform(struct!.regex),
    srcaddr: cdktf.stringToTerraform(struct!.srcaddr),
  }
}


export function wafProfileUrlAccessAccessPatternToHclTerraform(struct?: WafProfileUrlAccessAccessPattern | cdktf.IResolvable): any {
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
    negate: {
      value: cdktf.stringToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcaddr: {
      value: cdktf.stringToHclTerraform(struct!.srcaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileUrlAccessAccessPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafProfileUrlAccessAccessPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._srcaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcaddr = this._srcaddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileUrlAccessAccessPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._negate = undefined;
      this._pattern = undefined;
      this._regex = undefined;
      this._srcaddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._negate = value.negate;
      this._pattern = value.pattern;
      this._regex = value.regex;
      this._srcaddr = value.srcaddr;
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

  // negate - computed: true, optional: true, required: false
  private _negate?: string; 
  public get negate() {
    return this.getStringAttribute('negate');
  }
  public set negate(value: string) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // srcaddr - computed: false, optional: true, required: false
  private _srcaddr?: string; 
  public get srcaddr() {
    return this.getStringAttribute('srcaddr');
  }
  public set srcaddr(value: string) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }
}

export class WafProfileUrlAccessAccessPatternList extends cdktf.ComplexList {
  public internalValue? : WafProfileUrlAccessAccessPattern[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafProfileUrlAccessAccessPatternOutputReference {
    return new WafProfileUrlAccessAccessPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafProfileUrlAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#action WafProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#address WafProfile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#id WafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#log WafProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#severity WafProfile#severity}
  */
  readonly severity?: string;
  /**
  * access_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#access_pattern WafProfile#access_pattern}
  */
  readonly accessPattern?: WafProfileUrlAccessAccessPattern[] | cdktf.IResolvable;
}

export function wafProfileUrlAccessToTerraform(struct?: WafProfileUrlAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    address: cdktf.stringToTerraform(struct!.address),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
    severity: cdktf.stringToTerraform(struct!.severity),
    access_pattern: cdktf.listMapper(wafProfileUrlAccessAccessPatternToTerraform, true)(struct!.accessPattern),
  }
}


export function wafProfileUrlAccessToHclTerraform(struct?: WafProfileUrlAccess | cdktf.IResolvable): any {
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
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_pattern: {
      value: cdktf.listMapperHcl(wafProfileUrlAccessAccessPatternToHclTerraform, true)(struct!.accessPattern),
      isBlock: true,
      type: "list",
      storageClassType: "WafProfileUrlAccessAccessPatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafProfileUrlAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafProfileUrlAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._accessPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPattern = this._accessPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafProfileUrlAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._address = undefined;
      this._id = undefined;
      this._log = undefined;
      this._severity = undefined;
      this._accessPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._address = value.address;
      this._id = value.id;
      this._log = value.log;
      this._severity = value.severity;
      this._accessPattern.internalValue = value.accessPattern;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // access_pattern - computed: false, optional: true, required: false
  private _accessPattern = new WafProfileUrlAccessAccessPatternList(this, "access_pattern", false);
  public get accessPattern() {
    return this._accessPattern;
  }
  public putAccessPattern(value: WafProfileUrlAccessAccessPattern[] | cdktf.IResolvable) {
    this._accessPattern.internalValue = value;
  }
  public resetAccessPattern() {
    this._accessPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPatternInput() {
    return this._accessPattern.internalValue;
  }
}

export class WafProfileUrlAccessList extends cdktf.ComplexList {
  public internalValue? : WafProfileUrlAccess[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafProfileUrlAccessOutputReference {
    return new WafProfileUrlAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile fortios_waf_profile}
*/
export class WafProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_waf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafProfile to import
  * @param importFromId The id of the existing WafProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_waf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/waf_profile fortios_waf_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WafProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_waf_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extendedLog = config.extendedLog;
    this._external = config.external;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._addressList.internalValue = config.addressList;
    this._constraint.internalValue = config.constraint;
    this._method.internalValue = config.method;
    this._signature.internalValue = config.signature;
    this._urlAccess.internalValue = config.urlAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // extended_log - computed: true, optional: true, required: false
  private _extendedLog?: string; 
  public get extendedLog() {
    return this.getStringAttribute('extended_log');
  }
  public set extendedLog(value: string) {
    this._extendedLog = value;
  }
  public resetExtendedLog() {
    this._extendedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLogInput() {
    return this._extendedLog;
  }

  // external - computed: true, optional: true, required: false
  private _external?: string; 
  public get external() {
    return this.getStringAttribute('external');
  }
  public set external(value: string) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // address_list - computed: false, optional: true, required: false
  private _addressList = new WafProfileAddressListStructOutputReference(this, "address_list");
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: WafProfileAddressListStruct) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // constraint - computed: false, optional: true, required: false
  private _constraint = new WafProfileConstraintOutputReference(this, "constraint");
  public get constraint() {
    return this._constraint;
  }
  public putConstraint(value: WafProfileConstraint) {
    this._constraint.internalValue = value;
  }
  public resetConstraint() {
    this._constraint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new WafProfileMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: WafProfileMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // signature - computed: false, optional: true, required: false
  private _signature = new WafProfileSignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }
  public putSignature(value: WafProfileSignature) {
    this._signature.internalValue = value;
  }
  public resetSignature() {
    this._signature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature.internalValue;
  }

  // url_access - computed: false, optional: true, required: false
  private _urlAccess = new WafProfileUrlAccessList(this, "url_access", false);
  public get urlAccess() {
    return this._urlAccess;
  }
  public putUrlAccess(value: WafProfileUrlAccess[] | cdktf.IResolvable) {
    this._urlAccess.internalValue = value;
  }
  public resetUrlAccess() {
    this._urlAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlAccessInput() {
    return this._urlAccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      external: cdktf.stringToTerraform(this._external),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      address_list: wafProfileAddressListStructToTerraform(this._addressList.internalValue),
      constraint: wafProfileConstraintToTerraform(this._constraint.internalValue),
      method: wafProfileMethodToTerraform(this._method.internalValue),
      signature: wafProfileSignatureToTerraform(this._signature.internalValue),
      url_access: cdktf.listMapper(wafProfileUrlAccessToTerraform, true)(this._urlAccess.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      extended_log: {
        value: cdktf.stringToHclTerraform(this._extendedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external: {
        value: cdktf.stringToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_list: {
        value: wafProfileAddressListStructToHclTerraform(this._addressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafProfileAddressListStructList",
      },
      constraint: {
        value: wafProfileConstraintToHclTerraform(this._constraint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafProfileConstraintList",
      },
      method: {
        value: wafProfileMethodToHclTerraform(this._method.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafProfileMethodList",
      },
      signature: {
        value: wafProfileSignatureToHclTerraform(this._signature.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafProfileSignatureList",
      },
      url_access: {
        value: cdktf.listMapperHcl(wafProfileUrlAccessToHclTerraform, true)(this._urlAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafProfileUrlAccessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
