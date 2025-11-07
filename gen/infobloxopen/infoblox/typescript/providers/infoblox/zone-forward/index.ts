// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneForwardConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#comment ZoneForward#comment}
  */
  readonly comment?: string;
  /**
  * Determines if the zone is disabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#disable ZoneForward#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes of the zone forward to be added/updated, as a map in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#ext_attrs ZoneForward#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * A forward stub server name server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#external_ns_group ZoneForward#external_ns_group}
  */
  readonly externalNsGroup?: string;
  /**
  * Determines if the appliance sends queries to forwarders only, and not to other internal or Internet root servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#forwarders_only ZoneForward#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of this DNS zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#fqdn ZoneForward#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#id ZoneForward#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A forwarding member name server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#ns_group ZoneForward#ns_group}
  */
  readonly nsGroup?: string;
  /**
  * The DNS view in which the zone is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#view ZoneForward#view}
  */
  readonly view?: string;
  /**
  * The format of the zone. Valid values are: FORWARD, IPV4, IPV6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#zone_format ZoneForward#zone_format}
  */
  readonly zoneFormat?: string;
  /**
  * forward_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#forward_to ZoneForward#forward_to}
  */
  readonly forwardTo?: ZoneForwardForwardTo[] | cdktf.IResolvable;
  /**
  * forwarding_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#forwarding_servers ZoneForward#forwarding_servers}
  */
  readonly forwardingServers?: ZoneForwardForwardingServers[] | cdktf.IResolvable;
}
export interface ZoneForwardForwardTo {
  /**
  * The IP address of the remote name server to which you want the Infoblox appliance to forward queries for a specified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#address ZoneForward#address}
  */
  readonly address: string;
  /**
  * The name of the remote name server to which you want the Infoblox appliance to forward queries for a specified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#name ZoneForward#name}
  */
  readonly name: string;
}

export function zoneForwardForwardToToTerraform(struct?: ZoneForwardForwardTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zoneForwardForwardToToHclTerraform(struct?: ZoneForwardForwardTo | cdktf.IResolvable): any {
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

export class ZoneForwardForwardToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZoneForwardForwardTo | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneForwardForwardTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
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
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
}

export class ZoneForwardForwardToList extends cdktf.ComplexList {
  public internalValue? : ZoneForwardForwardTo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZoneForwardForwardToOutputReference {
    return new ZoneForwardForwardToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneForwardForwardingServersForwardTo {
  /**
  * The IP address of the remote name server to which you want the Infoblox appliance to forward queries for a specified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#address ZoneForward#address}
  */
  readonly address: string;
  /**
  * The name of the remote name server to which you want the Infoblox appliance to forward queries for a specified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#name ZoneForward#name}
  */
  readonly name: string;
}

export function zoneForwardForwardingServersForwardToToTerraform(struct?: ZoneForwardForwardingServersForwardTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zoneForwardForwardingServersForwardToToHclTerraform(struct?: ZoneForwardForwardingServersForwardTo | cdktf.IResolvable): any {
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

export class ZoneForwardForwardingServersForwardToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZoneForwardForwardingServersForwardTo | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneForwardForwardingServersForwardTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
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
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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
}

export class ZoneForwardForwardingServersForwardToList extends cdktf.ComplexList {
  public internalValue? : ZoneForwardForwardingServersForwardTo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZoneForwardForwardingServersForwardToOutputReference {
    return new ZoneForwardForwardingServersForwardToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneForwardForwardingServers {
  /**
  * Determines if the appliance sends queries to forwarders only, and not to other internal or Internet root servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#forwarders_only ZoneForward#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of this Grid member in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#name ZoneForward#name}
  */
  readonly name: string;
  /**
  * Determines if the appliance sends queries to name servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#use_override_forwarders ZoneForward#use_override_forwarders}
  */
  readonly useOverrideForwarders?: boolean | cdktf.IResolvable;
  /**
  * forward_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#forward_to ZoneForward#forward_to}
  */
  readonly forwardTo?: ZoneForwardForwardingServersForwardTo[] | cdktf.IResolvable;
}

export function zoneForwardForwardingServersToTerraform(struct?: ZoneForwardForwardingServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarders_only: cdktf.booleanToTerraform(struct!.forwardersOnly),
    name: cdktf.stringToTerraform(struct!.name),
    use_override_forwarders: cdktf.booleanToTerraform(struct!.useOverrideForwarders),
    forward_to: cdktf.listMapper(zoneForwardForwardingServersForwardToToTerraform, true)(struct!.forwardTo),
  }
}


export function zoneForwardForwardingServersToHclTerraform(struct?: ZoneForwardForwardingServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarders_only: {
      value: cdktf.booleanToHclTerraform(struct!.forwardersOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_override_forwarders: {
      value: cdktf.booleanToHclTerraform(struct!.useOverrideForwarders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_to: {
      value: cdktf.listMapperHcl(zoneForwardForwardingServersForwardToToHclTerraform, true)(struct!.forwardTo),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneForwardForwardingServersForwardToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneForwardForwardingServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZoneForwardForwardingServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardersOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardersOnly = this._forwardersOnly;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useOverrideForwarders !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOverrideForwarders = this._useOverrideForwarders;
    }
    if (this._forwardTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardTo = this._forwardTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneForwardForwardingServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardersOnly = undefined;
      this._name = undefined;
      this._useOverrideForwarders = undefined;
      this._forwardTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardersOnly = value.forwardersOnly;
      this._name = value.name;
      this._useOverrideForwarders = value.useOverrideForwarders;
      this._forwardTo.internalValue = value.forwardTo;
    }
  }

  // forwarders_only - computed: false, optional: true, required: false
  private _forwardersOnly?: boolean | cdktf.IResolvable; 
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }
  public set forwardersOnly(value: boolean | cdktf.IResolvable) {
    this._forwardersOnly = value;
  }
  public resetForwardersOnly() {
    this._forwardersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersOnlyInput() {
    return this._forwardersOnly;
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

  // use_override_forwarders - computed: false, optional: true, required: false
  private _useOverrideForwarders?: boolean | cdktf.IResolvable; 
  public get useOverrideForwarders() {
    return this.getBooleanAttribute('use_override_forwarders');
  }
  public set useOverrideForwarders(value: boolean | cdktf.IResolvable) {
    this._useOverrideForwarders = value;
  }
  public resetUseOverrideForwarders() {
    this._useOverrideForwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOverrideForwardersInput() {
    return this._useOverrideForwarders;
  }

  // forward_to - computed: false, optional: true, required: false
  private _forwardTo = new ZoneForwardForwardingServersForwardToList(this, "forward_to", false);
  public get forwardTo() {
    return this._forwardTo;
  }
  public putForwardTo(value: ZoneForwardForwardingServersForwardTo[] | cdktf.IResolvable) {
    this._forwardTo.internalValue = value;
  }
  public resetForwardTo() {
    this._forwardTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToInput() {
    return this._forwardTo.internalValue;
  }
}

export class ZoneForwardForwardingServersList extends cdktf.ComplexList {
  public internalValue? : ZoneForwardForwardingServers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZoneForwardForwardingServersOutputReference {
    return new ZoneForwardForwardingServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward infoblox_zone_forward}
*/
export class ZoneForward extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_zone_forward";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneForward resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneForward to import
  * @param importFromId The id of the existing ZoneForward that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneForward to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_zone_forward", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_forward infoblox_zone_forward} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneForwardConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneForwardConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_zone_forward',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0'
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
    this._disable = config.disable;
    this._extAttrs = config.extAttrs;
    this._externalNsGroup = config.externalNsGroup;
    this._forwardersOnly = config.forwardersOnly;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._nsGroup = config.nsGroup;
    this._view = config.view;
    this._zoneFormat = config.zoneFormat;
    this._forwardTo.internalValue = config.forwardTo;
    this._forwardingServers.internalValue = config.forwardingServers;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // ext_attrs - computed: false, optional: true, required: false
  private _extAttrs?: string; 
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }
  public set extAttrs(value: string) {
    this._extAttrs = value;
  }
  public resetExtAttrs() {
    this._extAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAttrsInput() {
    return this._extAttrs;
  }

  // external_ns_group - computed: false, optional: true, required: false
  private _externalNsGroup?: string; 
  public get externalNsGroup() {
    return this.getStringAttribute('external_ns_group');
  }
  public set externalNsGroup(value: string) {
    this._externalNsGroup = value;
  }
  public resetExternalNsGroup() {
    this._externalNsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNsGroupInput() {
    return this._externalNsGroup;
  }

  // forwarders_only - computed: false, optional: true, required: false
  private _forwardersOnly?: boolean | cdktf.IResolvable; 
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }
  public set forwardersOnly(value: boolean | cdktf.IResolvable) {
    this._forwardersOnly = value;
  }
  public resetForwardersOnly() {
    this._forwardersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersOnlyInput() {
    return this._forwardersOnly;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // ns_group - computed: false, optional: true, required: false
  private _nsGroup?: string; 
  public get nsGroup() {
    return this.getStringAttribute('ns_group');
  }
  public set nsGroup(value: string) {
    this._nsGroup = value;
  }
  public resetNsGroup() {
    this._nsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsGroupInput() {
    return this._nsGroup;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // zone_format - computed: false, optional: true, required: false
  private _zoneFormat?: string; 
  public get zoneFormat() {
    return this.getStringAttribute('zone_format');
  }
  public set zoneFormat(value: string) {
    this._zoneFormat = value;
  }
  public resetZoneFormat() {
    this._zoneFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneFormatInput() {
    return this._zoneFormat;
  }

  // forward_to - computed: false, optional: true, required: false
  private _forwardTo = new ZoneForwardForwardToList(this, "forward_to", false);
  public get forwardTo() {
    return this._forwardTo;
  }
  public putForwardTo(value: ZoneForwardForwardTo[] | cdktf.IResolvable) {
    this._forwardTo.internalValue = value;
  }
  public resetForwardTo() {
    this._forwardTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToInput() {
    return this._forwardTo.internalValue;
  }

  // forwarding_servers - computed: false, optional: true, required: false
  private _forwardingServers = new ZoneForwardForwardingServersList(this, "forwarding_servers", false);
  public get forwardingServers() {
    return this._forwardingServers;
  }
  public putForwardingServers(value: ZoneForwardForwardingServers[] | cdktf.IResolvable) {
    this._forwardingServers.internalValue = value;
  }
  public resetForwardingServers() {
    this._forwardingServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingServersInput() {
    return this._forwardingServers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      external_ns_group: cdktf.stringToTerraform(this._externalNsGroup),
      forwarders_only: cdktf.booleanToTerraform(this._forwardersOnly),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      ns_group: cdktf.stringToTerraform(this._nsGroup),
      view: cdktf.stringToTerraform(this._view),
      zone_format: cdktf.stringToTerraform(this._zoneFormat),
      forward_to: cdktf.listMapper(zoneForwardForwardToToTerraform, true)(this._forwardTo.internalValue),
      forwarding_servers: cdktf.listMapper(zoneForwardForwardingServersToTerraform, true)(this._forwardingServers.internalValue),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_ns_group: {
        value: cdktf.stringToHclTerraform(this._externalNsGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarders_only: {
        value: cdktf.booleanToHclTerraform(this._forwardersOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      ns_group: {
        value: cdktf.stringToHclTerraform(this._nsGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_format: {
        value: cdktf.stringToHclTerraform(this._zoneFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_to: {
        value: cdktf.listMapperHcl(zoneForwardForwardToToHclTerraform, true)(this._forwardTo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneForwardForwardToList",
      },
      forwarding_servers: {
        value: cdktf.listMapperHcl(zoneForwardForwardingServersToHclTerraform, true)(this._forwardingServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneForwardForwardingServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
