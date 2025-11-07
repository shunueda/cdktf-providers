// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneDelegatedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#comment ZoneDelegated#comment}
  */
  readonly comment?: string;
  /**
  * TTL value for zone-delegated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#delegated_ttl ZoneDelegated#delegated_ttl}
  */
  readonly delegatedTtl?: number;
  /**
  * Determines if the zone is disabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#disable ZoneDelegated#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes, as a map in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#ext_attrs ZoneDelegated#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * The FQDN of the delegated zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#fqdn ZoneDelegated#fqdn}
  */
  readonly fqdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#id ZoneDelegated#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If you enable this flag, other administrators cannot make conflicting changes. This is for administration purposes only. The zone will continue to serve DNS data even when it is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#locked ZoneDelegated#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * The delegation NS group bound with delegated zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#ns_group ZoneDelegated#ns_group}
  */
  readonly nsGroup?: string;
  /**
  * The DNS view in which the zone is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#view ZoneDelegated#view}
  */
  readonly view?: string;
  /**
  * The format of the zone. Valid values are: FORWARD, IPV4, IPV6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#zone_format ZoneDelegated#zone_format}
  */
  readonly zoneFormat?: string;
  /**
  * delegate_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#delegate_to ZoneDelegated#delegate_to}
  */
  readonly delegateTo?: ZoneDelegatedDelegateTo[] | cdktf.IResolvable;
}
export interface ZoneDelegatedDelegateTo {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#address ZoneDelegated#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#name ZoneDelegated#name}
  */
  readonly name: string;
}

export function zoneDelegatedDelegateToToTerraform(struct?: ZoneDelegatedDelegateTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function zoneDelegatedDelegateToToHclTerraform(struct?: ZoneDelegatedDelegateTo | cdktf.IResolvable): any {
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

export class ZoneDelegatedDelegateToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ZoneDelegatedDelegateTo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ZoneDelegatedDelegateTo | cdktf.IResolvable | undefined) {
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

export class ZoneDelegatedDelegateToList extends cdktf.ComplexList {
  public internalValue? : ZoneDelegatedDelegateTo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ZoneDelegatedDelegateToOutputReference {
    return new ZoneDelegatedDelegateToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated infoblox_zone_delegated}
*/
export class ZoneDelegated extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_zone_delegated";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZoneDelegated resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZoneDelegated to import
  * @param importFromId The id of the existing ZoneDelegated that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZoneDelegated to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_zone_delegated", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/zone_delegated infoblox_zone_delegated} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneDelegatedConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneDelegatedConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_zone_delegated',
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
    this._delegatedTtl = config.delegatedTtl;
    this._disable = config.disable;
    this._extAttrs = config.extAttrs;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._locked = config.locked;
    this._nsGroup = config.nsGroup;
    this._view = config.view;
    this._zoneFormat = config.zoneFormat;
    this._delegateTo.internalValue = config.delegateTo;
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

  // delegated_ttl - computed: false, optional: true, required: false
  private _delegatedTtl?: number; 
  public get delegatedTtl() {
    return this.getNumberAttribute('delegated_ttl');
  }
  public set delegatedTtl(value: number) {
    this._delegatedTtl = value;
  }
  public resetDelegatedTtl() {
    this._delegatedTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedTtlInput() {
    return this._delegatedTtl;
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

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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

  // delegate_to - computed: false, optional: true, required: false
  private _delegateTo = new ZoneDelegatedDelegateToList(this, "delegate_to", false);
  public get delegateTo() {
    return this._delegateTo;
  }
  public putDelegateTo(value: ZoneDelegatedDelegateTo[] | cdktf.IResolvable) {
    this._delegateTo.internalValue = value;
  }
  public resetDelegateTo() {
    this._delegateTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateToInput() {
    return this._delegateTo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      delegated_ttl: cdktf.numberToTerraform(this._delegatedTtl),
      disable: cdktf.booleanToTerraform(this._disable),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      locked: cdktf.booleanToTerraform(this._locked),
      ns_group: cdktf.stringToTerraform(this._nsGroup),
      view: cdktf.stringToTerraform(this._view),
      zone_format: cdktf.stringToTerraform(this._zoneFormat),
      delegate_to: cdktf.listMapper(zoneDelegatedDelegateToToTerraform, true)(this._delegateTo.internalValue),
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
      delegated_ttl: {
        value: cdktf.numberToHclTerraform(this._delegatedTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      delegate_to: {
        value: cdktf.listMapperHcl(zoneDelegatedDelegateToToHclTerraform, true)(this._delegateTo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneDelegatedDelegateToList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
