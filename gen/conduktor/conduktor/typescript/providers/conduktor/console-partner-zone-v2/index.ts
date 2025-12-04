// https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsolePartnerZoneV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Custom labels for the partner zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#labels ConsolePartnerZoneV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Partner Zone name, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#name ConsolePartnerZoneV2#name}
  */
  readonly name: string;
  /**
  * Partner Zone specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#spec ConsolePartnerZoneV2#spec}
  */
  readonly spec: ConsolePartnerZoneV2Spec;
}
export interface ConsolePartnerZoneV2SpecAuthenticationMode {
  /**
  * Must be a Local Gateway Service Account. It doesn't need to exist before creating the Partner Zone. The service account will be created automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#service_account ConsolePartnerZoneV2#service_account}
  */
  readonly serviceAccount: string;
  /**
  * Authentication type for the partner zone. Valid values are: MTLS, OAUTHBEARER, PLAIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#type ConsolePartnerZoneV2#type}
  */
  readonly type: string;
}

export function consolePartnerZoneV2SpecAuthenticationModeToTerraform(struct?: ConsolePartnerZoneV2SpecAuthenticationMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function consolePartnerZoneV2SpecAuthenticationModeToHclTerraform(struct?: ConsolePartnerZoneV2SpecAuthenticationMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
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

export class ConsolePartnerZoneV2SpecAuthenticationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsolePartnerZoneV2SpecAuthenticationMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsolePartnerZoneV2SpecAuthenticationMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceAccount = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceAccount = value.serviceAccount;
      this._type = value.type;
    }
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
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
export interface ConsolePartnerZoneV2SpecHeadersAddOnProduce {
  /**
  * Key to add to the request headers when producing messages to the topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#key ConsolePartnerZoneV2#key}
  */
  readonly key: string;
  /**
  * If set to true, the header will override any existing header with the same key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#override_if_exists ConsolePartnerZoneV2#override_if_exists}
  */
  readonly overrideIfExists: boolean | cdktf.IResolvable;
  /**
  * Value to add to the request headers when producing messages to the topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#value ConsolePartnerZoneV2#value}
  */
  readonly value: string;
}

export function consolePartnerZoneV2SpecHeadersAddOnProduceToTerraform(struct?: ConsolePartnerZoneV2SpecHeadersAddOnProduce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    override_if_exists: cdktf.booleanToTerraform(struct!.overrideIfExists),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function consolePartnerZoneV2SpecHeadersAddOnProduceToHclTerraform(struct?: ConsolePartnerZoneV2SpecHeadersAddOnProduce | cdktf.IResolvable): any {
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
    override_if_exists: {
      value: cdktf.booleanToHclTerraform(struct!.overrideIfExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ConsolePartnerZoneV2SpecHeadersAddOnProduceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConsolePartnerZoneV2SpecHeadersAddOnProduce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._overrideIfExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideIfExists = this._overrideIfExists;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsolePartnerZoneV2SpecHeadersAddOnProduce | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._overrideIfExists = undefined;
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
      this._overrideIfExists = value.overrideIfExists;
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

  // override_if_exists - computed: false, optional: false, required: true
  private _overrideIfExists?: boolean | cdktf.IResolvable; 
  public get overrideIfExists() {
    return this.getBooleanAttribute('override_if_exists');
  }
  public set overrideIfExists(value: boolean | cdktf.IResolvable) {
    this._overrideIfExists = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideIfExistsInput() {
    return this._overrideIfExists;
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

export class ConsolePartnerZoneV2SpecHeadersAddOnProduceList extends cdktf.ComplexList {
  public internalValue? : ConsolePartnerZoneV2SpecHeadersAddOnProduce[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConsolePartnerZoneV2SpecHeadersAddOnProduceOutputReference {
    return new ConsolePartnerZoneV2SpecHeadersAddOnProduceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsolePartnerZoneV2SpecHeadersRemoveOnConsume {
  /**
  * Must be a valid java regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#key_regex ConsolePartnerZoneV2#key_regex}
  */
  readonly keyRegex: string;
}

export function consolePartnerZoneV2SpecHeadersRemoveOnConsumeToTerraform(struct?: ConsolePartnerZoneV2SpecHeadersRemoveOnConsume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_regex: cdktf.stringToTerraform(struct!.keyRegex),
  }
}


export function consolePartnerZoneV2SpecHeadersRemoveOnConsumeToHclTerraform(struct?: ConsolePartnerZoneV2SpecHeadersRemoveOnConsume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_regex: {
      value: cdktf.stringToHclTerraform(struct!.keyRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsolePartnerZoneV2SpecHeadersRemoveOnConsumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConsolePartnerZoneV2SpecHeadersRemoveOnConsume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRegex = this._keyRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsolePartnerZoneV2SpecHeadersRemoveOnConsume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyRegex = value.keyRegex;
    }
  }

  // key_regex - computed: false, optional: false, required: true
  private _keyRegex?: string; 
  public get keyRegex() {
    return this.getStringAttribute('key_regex');
  }
  public set keyRegex(value: string) {
    this._keyRegex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRegexInput() {
    return this._keyRegex;
  }
}

export class ConsolePartnerZoneV2SpecHeadersRemoveOnConsumeList extends cdktf.ComplexList {
  public internalValue? : ConsolePartnerZoneV2SpecHeadersRemoveOnConsume[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConsolePartnerZoneV2SpecHeadersRemoveOnConsumeOutputReference {
    return new ConsolePartnerZoneV2SpecHeadersRemoveOnConsumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsolePartnerZoneV2SpecHeaders {
  /**
  * Sets a key-value pair to be added when producing to the partner zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#add_on_produce ConsolePartnerZoneV2#add_on_produce}
  */
  readonly addOnProduce?: ConsolePartnerZoneV2SpecHeadersAddOnProduce[] | cdktf.IResolvable;
  /**
  * Regular expression for finding the keys of headers to be removed on consume of the partner zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#remove_on_consume ConsolePartnerZoneV2#remove_on_consume}
  */
  readonly removeOnConsume?: ConsolePartnerZoneV2SpecHeadersRemoveOnConsume[] | cdktf.IResolvable;
}

export function consolePartnerZoneV2SpecHeadersToTerraform(struct?: ConsolePartnerZoneV2SpecHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_on_produce: cdktf.listMapper(consolePartnerZoneV2SpecHeadersAddOnProduceToTerraform, false)(struct!.addOnProduce),
    remove_on_consume: cdktf.listMapper(consolePartnerZoneV2SpecHeadersRemoveOnConsumeToTerraform, false)(struct!.removeOnConsume),
  }
}


export function consolePartnerZoneV2SpecHeadersToHclTerraform(struct?: ConsolePartnerZoneV2SpecHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_on_produce: {
      value: cdktf.listMapperHcl(consolePartnerZoneV2SpecHeadersAddOnProduceToHclTerraform, false)(struct!.addOnProduce),
      isBlock: true,
      type: "set",
      storageClassType: "ConsolePartnerZoneV2SpecHeadersAddOnProduceList",
    },
    remove_on_consume: {
      value: cdktf.listMapperHcl(consolePartnerZoneV2SpecHeadersRemoveOnConsumeToHclTerraform, false)(struct!.removeOnConsume),
      isBlock: true,
      type: "set",
      storageClassType: "ConsolePartnerZoneV2SpecHeadersRemoveOnConsumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsolePartnerZoneV2SpecHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsolePartnerZoneV2SpecHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addOnProduce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addOnProduce = this._addOnProduce?.internalValue;
    }
    if (this._removeOnConsume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeOnConsume = this._removeOnConsume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsolePartnerZoneV2SpecHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addOnProduce.internalValue = undefined;
      this._removeOnConsume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addOnProduce.internalValue = value.addOnProduce;
      this._removeOnConsume.internalValue = value.removeOnConsume;
    }
  }

  // add_on_produce - computed: false, optional: true, required: false
  private _addOnProduce = new ConsolePartnerZoneV2SpecHeadersAddOnProduceList(this, "add_on_produce", true);
  public get addOnProduce() {
    return this._addOnProduce;
  }
  public putAddOnProduce(value: ConsolePartnerZoneV2SpecHeadersAddOnProduce[] | cdktf.IResolvable) {
    this._addOnProduce.internalValue = value;
  }
  public resetAddOnProduce() {
    this._addOnProduce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addOnProduceInput() {
    return this._addOnProduce.internalValue;
  }

  // remove_on_consume - computed: false, optional: true, required: false
  private _removeOnConsume = new ConsolePartnerZoneV2SpecHeadersRemoveOnConsumeList(this, "remove_on_consume", true);
  public get removeOnConsume() {
    return this._removeOnConsume;
  }
  public putRemoveOnConsume(value: ConsolePartnerZoneV2SpecHeadersRemoveOnConsume[] | cdktf.IResolvable) {
    this._removeOnConsume.internalValue = value;
  }
  public resetRemoveOnConsume() {
    this._removeOnConsume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeOnConsumeInput() {
    return this._removeOnConsume.internalValue;
  }
}
export interface ConsolePartnerZoneV2SpecPartner {
  /**
  * Email of the Partner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#email ConsolePartnerZoneV2#email}
  */
  readonly email?: string;
  /**
  * Name of the Partner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#name ConsolePartnerZoneV2#name}
  */
  readonly name: string;
  /**
  * Phone number of the Partner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#phone ConsolePartnerZoneV2#phone}
  */
  readonly phone?: string;
  /**
  * Role of the Partner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#role ConsolePartnerZoneV2#role}
  */
  readonly role?: string;
}

export function consolePartnerZoneV2SpecPartnerToTerraform(struct?: ConsolePartnerZoneV2SpecPartner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
    phone: cdktf.stringToTerraform(struct!.phone),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function consolePartnerZoneV2SpecPartnerToHclTerraform(struct?: ConsolePartnerZoneV2SpecPartner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsolePartnerZoneV2SpecPartnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsolePartnerZoneV2SpecPartner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsolePartnerZoneV2SpecPartner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._name = undefined;
      this._phone = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._name = value.name;
      this._phone = value.phone;
      this._role = value.role;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // role - computed: false, optional: true, required: false
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
export interface ConsolePartnerZoneV2SpecTopics {
  /**
  * Internal name of the topic that you want to share with your partner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#backing_topic ConsolePartnerZoneV2#backing_topic}
  */
  readonly backingTopic: string;
  /**
  * Name of the topic as it should appear to your partner. This can be different from backing_topic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#name ConsolePartnerZoneV2#name}
  */
  readonly name: string;
  /**
  * Permission to apply on the topic for the partner. Valid values are: READ, WRITE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#permission ConsolePartnerZoneV2#permission}
  */
  readonly permission: string;
}

export function consolePartnerZoneV2SpecTopicsToTerraform(struct?: ConsolePartnerZoneV2SpecTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_topic: cdktf.stringToTerraform(struct!.backingTopic),
    name: cdktf.stringToTerraform(struct!.name),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function consolePartnerZoneV2SpecTopicsToHclTerraform(struct?: ConsolePartnerZoneV2SpecTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_topic: {
      value: cdktf.stringToHclTerraform(struct!.backingTopic),
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsolePartnerZoneV2SpecTopicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConsolePartnerZoneV2SpecTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backingTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingTopic = this._backingTopic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsolePartnerZoneV2SpecTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backingTopic = undefined;
      this._name = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backingTopic = value.backingTopic;
      this._name = value.name;
      this._permission = value.permission;
    }
  }

  // backing_topic - computed: false, optional: false, required: true
  private _backingTopic?: string; 
  public get backingTopic() {
    return this.getStringAttribute('backing_topic');
  }
  public set backingTopic(value: string) {
    this._backingTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backingTopicInput() {
    return this._backingTopic;
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

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class ConsolePartnerZoneV2SpecTopicsList extends cdktf.ComplexList {
  public internalValue? : ConsolePartnerZoneV2SpecTopics[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConsolePartnerZoneV2SpecTopicsOutputReference {
    return new ConsolePartnerZoneV2SpecTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsolePartnerZoneV2SpecTrafficControlPolicies {
  /**
  * Sets the maximum number of commits requests (in requests/minute) that the partner can make per Gateway node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#limit_commit_offset ConsolePartnerZoneV2#limit_commit_offset}
  */
  readonly limitCommitOffset?: number;
  /**
  * Sets the maximum rate (in bytes/s) at which the partner can consume messages from the topics per Gateway node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#max_consume_rate ConsolePartnerZoneV2#max_consume_rate}
  */
  readonly maxConsumeRate?: number;
  /**
  * Sets the maximum rate (in bytes/s) at which the partner can produce messages to the topics per Gateway node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#max_produce_rate ConsolePartnerZoneV2#max_produce_rate}
  */
  readonly maxProduceRate?: number;
}

export function consolePartnerZoneV2SpecTrafficControlPoliciesToTerraform(struct?: ConsolePartnerZoneV2SpecTrafficControlPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit_commit_offset: cdktf.numberToTerraform(struct!.limitCommitOffset),
    max_consume_rate: cdktf.numberToTerraform(struct!.maxConsumeRate),
    max_produce_rate: cdktf.numberToTerraform(struct!.maxProduceRate),
  }
}


export function consolePartnerZoneV2SpecTrafficControlPoliciesToHclTerraform(struct?: ConsolePartnerZoneV2SpecTrafficControlPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit_commit_offset: {
      value: cdktf.numberToHclTerraform(struct!.limitCommitOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_consume_rate: {
      value: cdktf.numberToHclTerraform(struct!.maxConsumeRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_produce_rate: {
      value: cdktf.numberToHclTerraform(struct!.maxProduceRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsolePartnerZoneV2SpecTrafficControlPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsolePartnerZoneV2SpecTrafficControlPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitCommitOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCommitOffset = this._limitCommitOffset;
    }
    if (this._maxConsumeRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConsumeRate = this._maxConsumeRate;
    }
    if (this._maxProduceRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProduceRate = this._maxProduceRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsolePartnerZoneV2SpecTrafficControlPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitCommitOffset = undefined;
      this._maxConsumeRate = undefined;
      this._maxProduceRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitCommitOffset = value.limitCommitOffset;
      this._maxConsumeRate = value.maxConsumeRate;
      this._maxProduceRate = value.maxProduceRate;
    }
  }

  // limit_commit_offset - computed: false, optional: true, required: false
  private _limitCommitOffset?: number; 
  public get limitCommitOffset() {
    return this.getNumberAttribute('limit_commit_offset');
  }
  public set limitCommitOffset(value: number) {
    this._limitCommitOffset = value;
  }
  public resetLimitCommitOffset() {
    this._limitCommitOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCommitOffsetInput() {
    return this._limitCommitOffset;
  }

  // max_consume_rate - computed: false, optional: true, required: false
  private _maxConsumeRate?: number; 
  public get maxConsumeRate() {
    return this.getNumberAttribute('max_consume_rate');
  }
  public set maxConsumeRate(value: number) {
    this._maxConsumeRate = value;
  }
  public resetMaxConsumeRate() {
    this._maxConsumeRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConsumeRateInput() {
    return this._maxConsumeRate;
  }

  // max_produce_rate - computed: false, optional: true, required: false
  private _maxProduceRate?: number; 
  public get maxProduceRate() {
    return this.getNumberAttribute('max_produce_rate');
  }
  public set maxProduceRate(value: number) {
    this._maxProduceRate = value;
  }
  public resetMaxProduceRate() {
    this._maxProduceRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxProduceRateInput() {
    return this._maxProduceRate;
  }
}
export interface ConsolePartnerZoneV2Spec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#authentication_mode ConsolePartnerZoneV2#authentication_mode}
  */
  readonly authenticationMode: ConsolePartnerZoneV2SpecAuthenticationMode;
  /**
  * Cluster name linked with the partner zone. Must be a valid Console cluster with the Provider configured as Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#cluster ConsolePartnerZoneV2#cluster}
  */
  readonly cluster: string;
  /**
  * Description of the partner zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#description ConsolePartnerZoneV2#description}
  */
  readonly description?: string;
  /**
  * Display name of the partner zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#display_name ConsolePartnerZoneV2#display_name}
  */
  readonly displayName?: string;
  /**
  * Key-Value HTTP headers to add to requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#headers ConsolePartnerZoneV2#headers}
  */
  readonly headers?: ConsolePartnerZoneV2SpecHeaders;
  /**
  * Partner information for the partner zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#partner ConsolePartnerZoneV2#partner}
  */
  readonly partner?: ConsolePartnerZoneV2SpecPartner;
  /**
  * Set of all topics to be exposed in the partner zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#topics ConsolePartnerZoneV2#topics}
  */
  readonly topics: ConsolePartnerZoneV2SpecTopics[] | cdktf.IResolvable;
  /**
  * Traffic control policies for the partner zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#traffic_control_policies ConsolePartnerZoneV2#traffic_control_policies}
  */
  readonly trafficControlPolicies?: ConsolePartnerZoneV2SpecTrafficControlPolicies;
  /**
  * URL of the partner zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#url ConsolePartnerZoneV2#url}
  */
  readonly url?: string;
}

export function consolePartnerZoneV2SpecToTerraform(struct?: ConsolePartnerZoneV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_mode: consolePartnerZoneV2SpecAuthenticationModeToTerraform(struct!.authenticationMode),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    headers: consolePartnerZoneV2SpecHeadersToTerraform(struct!.headers),
    partner: consolePartnerZoneV2SpecPartnerToTerraform(struct!.partner),
    topics: cdktf.listMapper(consolePartnerZoneV2SpecTopicsToTerraform, false)(struct!.topics),
    traffic_control_policies: consolePartnerZoneV2SpecTrafficControlPoliciesToTerraform(struct!.trafficControlPolicies),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function consolePartnerZoneV2SpecToHclTerraform(struct?: ConsolePartnerZoneV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_mode: {
      value: consolePartnerZoneV2SpecAuthenticationModeToHclTerraform(struct!.authenticationMode),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsolePartnerZoneV2SpecAuthenticationMode",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
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
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: consolePartnerZoneV2SpecHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsolePartnerZoneV2SpecHeaders",
    },
    partner: {
      value: consolePartnerZoneV2SpecPartnerToHclTerraform(struct!.partner),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsolePartnerZoneV2SpecPartner",
    },
    topics: {
      value: cdktf.listMapperHcl(consolePartnerZoneV2SpecTopicsToHclTerraform, false)(struct!.topics),
      isBlock: true,
      type: "set",
      storageClassType: "ConsolePartnerZoneV2SpecTopicsList",
    },
    traffic_control_policies: {
      value: consolePartnerZoneV2SpecTrafficControlPoliciesToHclTerraform(struct!.trafficControlPolicies),
      isBlock: true,
      type: "struct",
      storageClassType: "ConsolePartnerZoneV2SpecTrafficControlPolicies",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsolePartnerZoneV2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsolePartnerZoneV2Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMode = this._authenticationMode?.internalValue;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._partner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partner = this._partner?.internalValue;
    }
    if (this._topics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics?.internalValue;
    }
    if (this._trafficControlPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficControlPolicies = this._trafficControlPolicies?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsolePartnerZoneV2Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationMode.internalValue = undefined;
      this._cluster = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._headers.internalValue = undefined;
      this._partner.internalValue = undefined;
      this._topics.internalValue = undefined;
      this._trafficControlPolicies.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationMode.internalValue = value.authenticationMode;
      this._cluster = value.cluster;
      this._description = value.description;
      this._displayName = value.displayName;
      this._headers.internalValue = value.headers;
      this._partner.internalValue = value.partner;
      this._topics.internalValue = value.topics;
      this._trafficControlPolicies.internalValue = value.trafficControlPolicies;
      this._url = value.url;
    }
  }

  // authentication_mode - computed: false, optional: false, required: true
  private _authenticationMode = new ConsolePartnerZoneV2SpecAuthenticationModeOutputReference(this, "authentication_mode");
  public get authenticationMode() {
    return this._authenticationMode;
  }
  public putAuthenticationMode(value: ConsolePartnerZoneV2SpecAuthenticationMode) {
    this._authenticationMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode.internalValue;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ConsolePartnerZoneV2SpecHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ConsolePartnerZoneV2SpecHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // partner - computed: false, optional: true, required: false
  private _partner = new ConsolePartnerZoneV2SpecPartnerOutputReference(this, "partner");
  public get partner() {
    return this._partner;
  }
  public putPartner(value: ConsolePartnerZoneV2SpecPartner) {
    this._partner.internalValue = value;
  }
  public resetPartner() {
    this._partner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerInput() {
    return this._partner.internalValue;
  }

  // topics - computed: false, optional: false, required: true
  private _topics = new ConsolePartnerZoneV2SpecTopicsList(this, "topics", true);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: ConsolePartnerZoneV2SpecTopics[] | cdktf.IResolvable) {
    this._topics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
  }

  // traffic_control_policies - computed: false, optional: true, required: false
  private _trafficControlPolicies = new ConsolePartnerZoneV2SpecTrafficControlPoliciesOutputReference(this, "traffic_control_policies");
  public get trafficControlPolicies() {
    return this._trafficControlPolicies;
  }
  public putTrafficControlPolicies(value: ConsolePartnerZoneV2SpecTrafficControlPolicies) {
    this._trafficControlPolicies.internalValue = value;
  }
  public resetTrafficControlPolicies() {
    this._trafficControlPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficControlPoliciesInput() {
    return this._trafficControlPolicies.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2 conduktor_console_partner_zone_v2}
*/
export class ConsolePartnerZoneV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_partner_zone_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsolePartnerZoneV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsolePartnerZoneV2 to import
  * @param importFromId The id of the existing ConsolePartnerZoneV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsolePartnerZoneV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_partner_zone_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_partner_zone_v2 conduktor_console_partner_zone_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsolePartnerZoneV2Config
  */
  public constructor(scope: Construct, id: string, config: ConsolePartnerZoneV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_partner_zone_v2',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labels = config.labels;
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new ConsolePartnerZoneV2SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsolePartnerZoneV2Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      spec: consolePartnerZoneV2SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
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
      spec: {
        value: consolePartnerZoneV2SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsolePartnerZoneV2Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
