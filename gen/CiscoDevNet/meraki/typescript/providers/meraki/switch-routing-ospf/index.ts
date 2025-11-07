// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchRoutingOspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * OSPF areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#areas SwitchRoutingOspf#areas}
  */
  readonly areas?: SwitchRoutingOspfAreas[] | cdktf.IResolvable;
  /**
  * Time interval to determine when the peer will be declared inactive/dead. Value must be between 1 and 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#dead_timer_in_seconds SwitchRoutingOspf#dead_timer_in_seconds}
  */
  readonly deadTimerInSeconds?: number;
  /**
  * Boolean value to enable or disable OSPF routing. OSPF routing is disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#enabled SwitchRoutingOspf#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Time interval in seconds at which hello packet will be sent to OSPF neighbors to maintain connectivity. Value must be between 1 and 255. Default is 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#hello_timer_in_seconds SwitchRoutingOspf#hello_timer_in_seconds}
  */
  readonly helloTimerInSeconds?: number;
  /**
  * Boolean value to enable or disable MD5 authentication. MD5 authentication is disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#md5_authentication_enabled SwitchRoutingOspf#md5_authentication_enabled}
  */
  readonly md5AuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * MD5 authentication key index. Key index must be between 1 to 255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#md5_authentication_key_id SwitchRoutingOspf#md5_authentication_key_id}
  */
  readonly md5AuthenticationKeyId?: number;
  /**
  * MD5 authentication passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#md5_authentication_key_passphrase SwitchRoutingOspf#md5_authentication_key_passphrase}
  */
  readonly md5AuthenticationKeyPassphrase?: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#network_id SwitchRoutingOspf#network_id}
  */
  readonly networkId: string;
  /**
  * OSPF v3 areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#v3_areas SwitchRoutingOspf#v3_areas}
  */
  readonly v3Areas?: SwitchRoutingOspfV3Areas[] | cdktf.IResolvable;
  /**
  * Time interval to determine when the peer will be declared inactive/dead. Value must be between 1 and 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#v3_dead_timer_in_seconds SwitchRoutingOspf#v3_dead_timer_in_seconds}
  */
  readonly v3DeadTimerInSeconds?: number;
  /**
  * Boolean value to enable or disable V3 OSPF routing. OSPF V3 routing is disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#v3_enabled SwitchRoutingOspf#v3_enabled}
  */
  readonly v3Enabled?: boolean | cdktf.IResolvable;
  /**
  * Time interval in seconds at which hello packet will be sent to OSPF neighbors to maintain connectivity. Value must be between 1 and 255. Default is 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#v3_hello_timer_in_seconds SwitchRoutingOspf#v3_hello_timer_in_seconds}
  */
  readonly v3HelloTimerInSeconds?: number;
}
export interface SwitchRoutingOspfAreas {
  /**
  * OSPF area ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#area_id SwitchRoutingOspf#area_id}
  */
  readonly areaId: string;
  /**
  * Name of the OSPF area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#area_name SwitchRoutingOspf#area_name}
  */
  readonly areaName: string;
  /**
  * Area types in OSPF. Must be one of: ['normal', 'stub', 'nssa']
  *   - Choices: `normal`, `nssa`, `stub`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#area_type SwitchRoutingOspf#area_type}
  */
  readonly areaType: string;
}

export function switchRoutingOspfAreasToTerraform(struct?: SwitchRoutingOspfAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id: cdktf.stringToTerraform(struct!.areaId),
    area_name: cdktf.stringToTerraform(struct!.areaName),
    area_type: cdktf.stringToTerraform(struct!.areaType),
  }
}


export function switchRoutingOspfAreasToHclTerraform(struct?: SwitchRoutingOspfAreas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id: {
      value: cdktf.stringToHclTerraform(struct!.areaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_name: {
      value: cdktf.stringToHclTerraform(struct!.areaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_type: {
      value: cdktf.stringToHclTerraform(struct!.areaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchRoutingOspfAreasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SwitchRoutingOspfAreas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaId = this._areaId;
    }
    if (this._areaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaName = this._areaName;
    }
    if (this._areaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaType = this._areaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchRoutingOspfAreas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaId = undefined;
      this._areaName = undefined;
      this._areaType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaId = value.areaId;
      this._areaName = value.areaName;
      this._areaType = value.areaType;
    }
  }

  // area_id - computed: false, optional: false, required: true
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }

  // area_name - computed: false, optional: false, required: true
  private _areaName?: string; 
  public get areaName() {
    return this.getStringAttribute('area_name');
  }
  public set areaName(value: string) {
    this._areaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaNameInput() {
    return this._areaName;
  }

  // area_type - computed: false, optional: false, required: true
  private _areaType?: string; 
  public get areaType() {
    return this.getStringAttribute('area_type');
  }
  public set areaType(value: string) {
    this._areaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaTypeInput() {
    return this._areaType;
  }
}

export class SwitchRoutingOspfAreasList extends cdktf.ComplexList {
  public internalValue? : SwitchRoutingOspfAreas[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SwitchRoutingOspfAreasOutputReference {
    return new SwitchRoutingOspfAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchRoutingOspfV3Areas {
  /**
  * OSPF area ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#area_id SwitchRoutingOspf#area_id}
  */
  readonly areaId: string;
  /**
  * Name of the OSPF area
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#area_name SwitchRoutingOspf#area_name}
  */
  readonly areaName: string;
  /**
  * Area types in OSPF. Must be one of: ['normal', 'stub', 'nssa']
  *   - Choices: `normal`, `nssa`, `stub`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#area_type SwitchRoutingOspf#area_type}
  */
  readonly areaType: string;
}

export function switchRoutingOspfV3AreasToTerraform(struct?: SwitchRoutingOspfV3Areas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_id: cdktf.stringToTerraform(struct!.areaId),
    area_name: cdktf.stringToTerraform(struct!.areaName),
    area_type: cdktf.stringToTerraform(struct!.areaType),
  }
}


export function switchRoutingOspfV3AreasToHclTerraform(struct?: SwitchRoutingOspfV3Areas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_id: {
      value: cdktf.stringToHclTerraform(struct!.areaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_name: {
      value: cdktf.stringToHclTerraform(struct!.areaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area_type: {
      value: cdktf.stringToHclTerraform(struct!.areaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchRoutingOspfV3AreasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SwitchRoutingOspfV3Areas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaId = this._areaId;
    }
    if (this._areaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaName = this._areaName;
    }
    if (this._areaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaType = this._areaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchRoutingOspfV3Areas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._areaId = undefined;
      this._areaName = undefined;
      this._areaType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._areaId = value.areaId;
      this._areaName = value.areaName;
      this._areaType = value.areaType;
    }
  }

  // area_id - computed: false, optional: false, required: true
  private _areaId?: string; 
  public get areaId() {
    return this.getStringAttribute('area_id');
  }
  public set areaId(value: string) {
    this._areaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaIdInput() {
    return this._areaId;
  }

  // area_name - computed: false, optional: false, required: true
  private _areaName?: string; 
  public get areaName() {
    return this.getStringAttribute('area_name');
  }
  public set areaName(value: string) {
    this._areaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaNameInput() {
    return this._areaName;
  }

  // area_type - computed: false, optional: false, required: true
  private _areaType?: string; 
  public get areaType() {
    return this.getStringAttribute('area_type');
  }
  public set areaType(value: string) {
    this._areaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaTypeInput() {
    return this._areaType;
  }
}

export class SwitchRoutingOspfV3AreasList extends cdktf.ComplexList {
  public internalValue? : SwitchRoutingOspfV3Areas[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SwitchRoutingOspfV3AreasOutputReference {
    return new SwitchRoutingOspfV3AreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf meraki_switch_routing_ospf}
*/
export class SwitchRoutingOspf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_switch_routing_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchRoutingOspf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchRoutingOspf to import
  * @param importFromId The id of the existing SwitchRoutingOspf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchRoutingOspf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_switch_routing_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/switch_routing_ospf meraki_switch_routing_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchRoutingOspfConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchRoutingOspfConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_switch_routing_ospf',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areas.internalValue = config.areas;
    this._deadTimerInSeconds = config.deadTimerInSeconds;
    this._enabled = config.enabled;
    this._helloTimerInSeconds = config.helloTimerInSeconds;
    this._md5AuthenticationEnabled = config.md5AuthenticationEnabled;
    this._md5AuthenticationKeyId = config.md5AuthenticationKeyId;
    this._md5AuthenticationKeyPassphrase = config.md5AuthenticationKeyPassphrase;
    this._networkId = config.networkId;
    this._v3Areas.internalValue = config.v3Areas;
    this._v3DeadTimerInSeconds = config.v3DeadTimerInSeconds;
    this._v3Enabled = config.v3Enabled;
    this._v3HelloTimerInSeconds = config.v3HelloTimerInSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // areas - computed: false, optional: true, required: false
  private _areas = new SwitchRoutingOspfAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
  }
  public putAreas(value: SwitchRoutingOspfAreas[] | cdktf.IResolvable) {
    this._areas.internalValue = value;
  }
  public resetAreas() {
    this._areas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areasInput() {
    return this._areas.internalValue;
  }

  // dead_timer_in_seconds - computed: false, optional: true, required: false
  private _deadTimerInSeconds?: number; 
  public get deadTimerInSeconds() {
    return this.getNumberAttribute('dead_timer_in_seconds');
  }
  public set deadTimerInSeconds(value: number) {
    this._deadTimerInSeconds = value;
  }
  public resetDeadTimerInSeconds() {
    this._deadTimerInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadTimerInSecondsInput() {
    return this._deadTimerInSeconds;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hello_timer_in_seconds - computed: false, optional: true, required: false
  private _helloTimerInSeconds?: number; 
  public get helloTimerInSeconds() {
    return this.getNumberAttribute('hello_timer_in_seconds');
  }
  public set helloTimerInSeconds(value: number) {
    this._helloTimerInSeconds = value;
  }
  public resetHelloTimerInSeconds() {
    this._helloTimerInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloTimerInSecondsInput() {
    return this._helloTimerInSeconds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // md5_authentication_enabled - computed: false, optional: true, required: false
  private _md5AuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get md5AuthenticationEnabled() {
    return this.getBooleanAttribute('md5_authentication_enabled');
  }
  public set md5AuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._md5AuthenticationEnabled = value;
  }
  public resetMd5AuthenticationEnabled() {
    this._md5AuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5AuthenticationEnabledInput() {
    return this._md5AuthenticationEnabled;
  }

  // md5_authentication_key_id - computed: false, optional: true, required: false
  private _md5AuthenticationKeyId?: number; 
  public get md5AuthenticationKeyId() {
    return this.getNumberAttribute('md5_authentication_key_id');
  }
  public set md5AuthenticationKeyId(value: number) {
    this._md5AuthenticationKeyId = value;
  }
  public resetMd5AuthenticationKeyId() {
    this._md5AuthenticationKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5AuthenticationKeyIdInput() {
    return this._md5AuthenticationKeyId;
  }

  // md5_authentication_key_passphrase - computed: false, optional: true, required: false
  private _md5AuthenticationKeyPassphrase?: string; 
  public get md5AuthenticationKeyPassphrase() {
    return this.getStringAttribute('md5_authentication_key_passphrase');
  }
  public set md5AuthenticationKeyPassphrase(value: string) {
    this._md5AuthenticationKeyPassphrase = value;
  }
  public resetMd5AuthenticationKeyPassphrase() {
    this._md5AuthenticationKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5AuthenticationKeyPassphraseInput() {
    return this._md5AuthenticationKeyPassphrase;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // v3_areas - computed: false, optional: true, required: false
  private _v3Areas = new SwitchRoutingOspfV3AreasList(this, "v3_areas", false);
  public get v3Areas() {
    return this._v3Areas;
  }
  public putV3Areas(value: SwitchRoutingOspfV3Areas[] | cdktf.IResolvable) {
    this._v3Areas.internalValue = value;
  }
  public resetV3Areas() {
    this._v3Areas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3AreasInput() {
    return this._v3Areas.internalValue;
  }

  // v3_dead_timer_in_seconds - computed: false, optional: true, required: false
  private _v3DeadTimerInSeconds?: number; 
  public get v3DeadTimerInSeconds() {
    return this.getNumberAttribute('v3_dead_timer_in_seconds');
  }
  public set v3DeadTimerInSeconds(value: number) {
    this._v3DeadTimerInSeconds = value;
  }
  public resetV3DeadTimerInSeconds() {
    this._v3DeadTimerInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3DeadTimerInSecondsInput() {
    return this._v3DeadTimerInSeconds;
  }

  // v3_enabled - computed: false, optional: true, required: false
  private _v3Enabled?: boolean | cdktf.IResolvable; 
  public get v3Enabled() {
    return this.getBooleanAttribute('v3_enabled');
  }
  public set v3Enabled(value: boolean | cdktf.IResolvable) {
    this._v3Enabled = value;
  }
  public resetV3Enabled() {
    this._v3Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3EnabledInput() {
    return this._v3Enabled;
  }

  // v3_hello_timer_in_seconds - computed: false, optional: true, required: false
  private _v3HelloTimerInSeconds?: number; 
  public get v3HelloTimerInSeconds() {
    return this.getNumberAttribute('v3_hello_timer_in_seconds');
  }
  public set v3HelloTimerInSeconds(value: number) {
    this._v3HelloTimerInSeconds = value;
  }
  public resetV3HelloTimerInSeconds() {
    this._v3HelloTimerInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3HelloTimerInSecondsInput() {
    return this._v3HelloTimerInSeconds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      areas: cdktf.listMapper(switchRoutingOspfAreasToTerraform, false)(this._areas.internalValue),
      dead_timer_in_seconds: cdktf.numberToTerraform(this._deadTimerInSeconds),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hello_timer_in_seconds: cdktf.numberToTerraform(this._helloTimerInSeconds),
      md5_authentication_enabled: cdktf.booleanToTerraform(this._md5AuthenticationEnabled),
      md5_authentication_key_id: cdktf.numberToTerraform(this._md5AuthenticationKeyId),
      md5_authentication_key_passphrase: cdktf.stringToTerraform(this._md5AuthenticationKeyPassphrase),
      network_id: cdktf.stringToTerraform(this._networkId),
      v3_areas: cdktf.listMapper(switchRoutingOspfV3AreasToTerraform, false)(this._v3Areas.internalValue),
      v3_dead_timer_in_seconds: cdktf.numberToTerraform(this._v3DeadTimerInSeconds),
      v3_enabled: cdktf.booleanToTerraform(this._v3Enabled),
      v3_hello_timer_in_seconds: cdktf.numberToTerraform(this._v3HelloTimerInSeconds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      areas: {
        value: cdktf.listMapperHcl(switchRoutingOspfAreasToHclTerraform, false)(this._areas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchRoutingOspfAreasList",
      },
      dead_timer_in_seconds: {
        value: cdktf.numberToHclTerraform(this._deadTimerInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hello_timer_in_seconds: {
        value: cdktf.numberToHclTerraform(this._helloTimerInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      md5_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._md5AuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      md5_authentication_key_id: {
        value: cdktf.numberToHclTerraform(this._md5AuthenticationKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      md5_authentication_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._md5AuthenticationKeyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v3_areas: {
        value: cdktf.listMapperHcl(switchRoutingOspfV3AreasToHclTerraform, false)(this._v3Areas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchRoutingOspfV3AreasList",
      },
      v3_dead_timer_in_seconds: {
        value: cdktf.numberToHclTerraform(this._v3DeadTimerInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v3_enabled: {
        value: cdktf.booleanToHclTerraform(this._v3Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      v3_hello_timer_in_seconds: {
        value: cdktf.numberToHclTerraform(this._v3HelloTimerInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
