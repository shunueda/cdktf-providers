// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Host FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#absolute_name DnsHost#absolute_name}
  */
  readonly absoluteName?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#id DnsHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional. Inheritance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#inheritance_sources DnsHost#inheritance_sources}
  */
  readonly inheritanceSources?: DnsHostInheritanceSources;
  /**
  * Optional. _kerberos_keys_ contains a list of keys for GSS-TSIG signed dynamic updates.  Defaults to empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#kerberos_keys DnsHost#kerberos_keys}
  */
  readonly kerberosKeys?: DnsHostKerberosKeys[] | cdktf.IResolvable;
  /**
  * If set to `true`, the resource will retry until a matching host is found, or until the Create Timeout expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#retry_if_not_found DnsHost#retry_if_not_found}
  */
  readonly retryIfNotFound?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#server DnsHost#server}
  */
  readonly server?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#timeouts DnsHost#timeouts}
  */
  readonly timeouts?: DnsHostTimeouts;
}
export interface DnsHostAssociatedServer {
}

export function dnsHostAssociatedServerToTerraform(struct?: DnsHostAssociatedServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsHostAssociatedServerToHclTerraform(struct?: DnsHostAssociatedServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsHostAssociatedServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsHostAssociatedServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsHostAssociatedServer | undefined) {
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
export interface DnsHostInheritanceSourcesKerberosKeysValue {
}

export function dnsHostInheritanceSourcesKerberosKeysValueToTerraform(struct?: DnsHostInheritanceSourcesKerberosKeysValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsHostInheritanceSourcesKerberosKeysValueToHclTerraform(struct?: DnsHostInheritanceSourcesKerberosKeysValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsHostInheritanceSourcesKerberosKeysValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsHostInheritanceSourcesKerberosKeysValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsHostInheritanceSourcesKerberosKeysValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DnsHostInheritanceSourcesKerberosKeysValueList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DnsHostInheritanceSourcesKerberosKeysValueOutputReference {
    return new DnsHostInheritanceSourcesKerberosKeysValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsHostInheritanceSourcesKerberosKeys {
  /**
  * Optional. Inheritance setting for a field. Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#action DnsHost#action}
  */
  readonly action?: string;
}

export function dnsHostInheritanceSourcesKerberosKeysToTerraform(struct?: DnsHostInheritanceSourcesKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsHostInheritanceSourcesKerberosKeysToHclTerraform(struct?: DnsHostInheritanceSourcesKerberosKeys | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsHostInheritanceSourcesKerberosKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsHostInheritanceSourcesKerberosKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsHostInheritanceSourcesKerberosKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DnsHostInheritanceSourcesKerberosKeysValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}
export interface DnsHostInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#kerberos_keys DnsHost#kerberos_keys}
  */
  readonly kerberosKeys?: DnsHostInheritanceSourcesKerberosKeys;
}

export function dnsHostInheritanceSourcesToTerraform(struct?: DnsHostInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_keys: dnsHostInheritanceSourcesKerberosKeysToTerraform(struct!.kerberosKeys),
  }
}


export function dnsHostInheritanceSourcesToHclTerraform(struct?: DnsHostInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos_keys: {
      value: dnsHostInheritanceSourcesKerberosKeysToHclTerraform(struct!.kerberosKeys),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsHostInheritanceSourcesKerberosKeys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsHostInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsHostInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKeys = this._kerberosKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsHostInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kerberosKeys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kerberosKeys.internalValue = value.kerberosKeys;
    }
  }

  // kerberos_keys - computed: true, optional: true, required: false
  private _kerberosKeys = new DnsHostInheritanceSourcesKerberosKeysOutputReference(this, "kerberos_keys");
  public get kerberosKeys() {
    return this._kerberosKeys;
  }
  public putKerberosKeys(value: DnsHostInheritanceSourcesKerberosKeys) {
    this._kerberosKeys.internalValue = value;
  }
  public resetKerberosKeys() {
    this._kerberosKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeysInput() {
    return this._kerberosKeys.internalValue;
  }
}
export interface DnsHostKerberosKeys {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#key DnsHost#key}
  */
  readonly key: string;
}

export function dnsHostKerberosKeysToTerraform(struct?: DnsHostKerberosKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dnsHostKerberosKeysToHclTerraform(struct?: DnsHostKerberosKeys | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsHostKerberosKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DnsHostKerberosKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsHostKerberosKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // key - computed: true, optional: false, required: true
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

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // uploaded_at - computed: true, optional: false, required: false
  public get uploadedAt() {
    return this.getStringAttribute('uploaded_at');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DnsHostKerberosKeysList extends cdktf.ComplexList {
  public internalValue? : DnsHostKerberosKeys[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DnsHostKerberosKeysOutputReference {
    return new DnsHostKerberosKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsHostTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#create DnsHost#create}
  */
  readonly create?: string;
}

export function dnsHostTimeoutsToTerraform(struct?: DnsHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function dnsHostTimeoutsToHclTerraform(struct?: DnsHostTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsHostTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsHostTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host bloxone_dns_host}
*/
export class DnsHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsHost to import
  * @param importFromId The id of the existing DnsHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/dns_host bloxone_dns_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsHostConfig
  */
  public constructor(scope: Construct, id: string, config: DnsHostConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_host',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._absoluteName = config.absoluteName;
    this._id = config.id;
    this._inheritanceSources.internalValue = config.inheritanceSources;
    this._kerberosKeys.internalValue = config.kerberosKeys;
    this._retryIfNotFound = config.retryIfNotFound;
    this._server = config.server;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // absolute_name - computed: true, optional: true, required: false
  private _absoluteName?: string; 
  public get absoluteName() {
    return this.getStringAttribute('absolute_name');
  }
  public set absoluteName(value: string) {
    this._absoluteName = value;
  }
  public resetAbsoluteName() {
    this._absoluteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteNameInput() {
    return this._absoluteName;
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // anycast_addresses - computed: true, optional: false, required: false
  public get anycastAddresses() {
    return this.getListAttribute('anycast_addresses');
  }

  // associated_server - computed: true, optional: false, required: false
  private _associatedServer = new DnsHostAssociatedServerOutputReference(this, "associated_server");
  public get associatedServer() {
    return this._associatedServer;
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // dfp - computed: true, optional: false, required: false
  public get dfp() {
    return this.getBooleanAttribute('dfp');
  }

  // dfp_service - computed: true, optional: false, required: false
  public get dfpService() {
    return this.getStringAttribute('dfp_service');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DnsHostInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DnsHostInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // kerberos_keys - computed: true, optional: true, required: false
  private _kerberosKeys = new DnsHostKerberosKeysList(this, "kerberos_keys", false);
  public get kerberosKeys() {
    return this._kerberosKeys;
  }
  public putKerberosKeys(value: DnsHostKerberosKeys[] | cdktf.IResolvable) {
    this._kerberosKeys.internalValue = value;
  }
  public resetKerberosKeys() {
    this._kerberosKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKeysInput() {
    return this._kerberosKeys.internalValue;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }

  // protocol_absolute_name - computed: true, optional: false, required: false
  public get protocolAbsoluteName() {
    return this.getStringAttribute('protocol_absolute_name');
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // retry_if_not_found - computed: false, optional: true, required: false
  private _retryIfNotFound?: boolean | cdktf.IResolvable; 
  public get retryIfNotFound() {
    return this.getBooleanAttribute('retry_if_not_found');
  }
  public set retryIfNotFound(value: boolean | cdktf.IResolvable) {
    this._retryIfNotFound = value;
  }
  public resetRetryIfNotFound() {
    this._retryIfNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIfNotFoundInput() {
    return this._retryIfNotFound;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DnsHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DnsHostTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      absolute_name: cdktf.stringToTerraform(this._absoluteName),
      id: cdktf.stringToTerraform(this._id),
      inheritance_sources: dnsHostInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
      kerberos_keys: cdktf.listMapper(dnsHostKerberosKeysToTerraform, false)(this._kerberosKeys.internalValue),
      retry_if_not_found: cdktf.booleanToTerraform(this._retryIfNotFound),
      server: cdktf.stringToTerraform(this._server),
      timeouts: dnsHostTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      absolute_name: {
        value: cdktf.stringToHclTerraform(this._absoluteName),
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
      inheritance_sources: {
        value: dnsHostInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsHostInheritanceSources",
      },
      kerberos_keys: {
        value: cdktf.listMapperHcl(dnsHostKerberosKeysToHclTerraform, false)(this._kerberosKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsHostKerberosKeysList",
      },
      retry_if_not_found: {
        value: cdktf.booleanToHclTerraform(this._retryIfNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dnsHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsHostTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
