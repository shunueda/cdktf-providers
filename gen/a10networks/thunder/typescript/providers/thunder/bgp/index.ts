// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable ASDot notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#asdot Bgp#asdot}
  */
  readonly asdot?: number;
  /**
  * Enable ASDot+ notation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#asdot_plus Bgp#asdot_plus}
  */
  readonly asdotPlus?: number;
  /**
  * Enable the router to send 4-octet ASN capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#extended_asn_cap Bgp#extended_asn_cap}
  */
  readonly extendedAsnCap?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#id Bgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#uuid Bgp#uuid}
  */
  readonly uuid?: string;
  /**
  * disable_advertisement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#disable_advertisement Bgp#disable_advertisement}
  */
  readonly disableAdvertisement?: BgpDisableAdvertisement;
  /**
  * nexthop_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#nexthop_trigger Bgp#nexthop_trigger}
  */
  readonly nexthopTrigger?: BgpNexthopTrigger;
}
export interface BgpDisableAdvertisement {
  /**
  * Upon boot-up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#on_boot Bgp#on_boot}
  */
  readonly onBoot?: number;
}

export function bgpDisableAdvertisementToTerraform(struct?: BgpDisableAdvertisementOutputReference | BgpDisableAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_boot: cdktf.numberToTerraform(struct!.onBoot),
  }
}


export function bgpDisableAdvertisementToHclTerraform(struct?: BgpDisableAdvertisementOutputReference | BgpDisableAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_boot: {
      value: cdktf.numberToHclTerraform(struct!.onBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpDisableAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpDisableAdvertisement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.onBoot = this._onBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpDisableAdvertisement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onBoot = value.onBoot;
    }
  }

  // on_boot - computed: false, optional: true, required: false
  private _onBoot?: number; 
  public get onBoot() {
    return this.getNumberAttribute('on_boot');
  }
  public set onBoot(value: number) {
    this._onBoot = value;
  }
  public resetOnBoot() {
    this._onBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onBootInput() {
    return this._onBoot;
  }
}
export interface BgpNexthopTrigger {
  /**
  * Configure nexthop trigger delay time interval (Nexthop Trigger Delay time interval between 1 and 100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#delay Bgp#delay}
  */
  readonly delay?: number;
  /**
  * Enable the nexthop tracking functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#enable Bgp#enable}
  */
  readonly enable?: number;
}

export function bgpNexthopTriggerToTerraform(struct?: BgpNexthopTriggerOutputReference | BgpNexthopTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.numberToTerraform(struct!.delay),
    enable: cdktf.numberToTerraform(struct!.enable),
  }
}


export function bgpNexthopTriggerToHclTerraform(struct?: BgpNexthopTriggerOutputReference | BgpNexthopTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpNexthopTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpNexthopTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpNexthopTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delay = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delay = value.delay;
      this._enable = value.enable;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp thunder_bgp}
*/
export class Bgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bgp to import
  * @param importFromId The id of the existing Bgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/bgp thunder_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BgpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_bgp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asdot = config.asdot;
    this._asdotPlus = config.asdotPlus;
    this._extendedAsnCap = config.extendedAsnCap;
    this._id = config.id;
    this._uuid = config.uuid;
    this._disableAdvertisement.internalValue = config.disableAdvertisement;
    this._nexthopTrigger.internalValue = config.nexthopTrigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asdot - computed: false, optional: true, required: false
  private _asdot?: number; 
  public get asdot() {
    return this.getNumberAttribute('asdot');
  }
  public set asdot(value: number) {
    this._asdot = value;
  }
  public resetAsdot() {
    this._asdot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asdotInput() {
    return this._asdot;
  }

  // asdot_plus - computed: false, optional: true, required: false
  private _asdotPlus?: number; 
  public get asdotPlus() {
    return this.getNumberAttribute('asdot_plus');
  }
  public set asdotPlus(value: number) {
    this._asdotPlus = value;
  }
  public resetAsdotPlus() {
    this._asdotPlus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asdotPlusInput() {
    return this._asdotPlus;
  }

  // extended_asn_cap - computed: false, optional: true, required: false
  private _extendedAsnCap?: number; 
  public get extendedAsnCap() {
    return this.getNumberAttribute('extended_asn_cap');
  }
  public set extendedAsnCap(value: number) {
    this._extendedAsnCap = value;
  }
  public resetExtendedAsnCap() {
    this._extendedAsnCap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAsnCapInput() {
    return this._extendedAsnCap;
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

  // disable_advertisement - computed: false, optional: true, required: false
  private _disableAdvertisement = new BgpDisableAdvertisementOutputReference(this, "disable_advertisement");
  public get disableAdvertisement() {
    return this._disableAdvertisement;
  }
  public putDisableAdvertisement(value: BgpDisableAdvertisement) {
    this._disableAdvertisement.internalValue = value;
  }
  public resetDisableAdvertisement() {
    this._disableAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAdvertisementInput() {
    return this._disableAdvertisement.internalValue;
  }

  // nexthop_trigger - computed: false, optional: true, required: false
  private _nexthopTrigger = new BgpNexthopTriggerOutputReference(this, "nexthop_trigger");
  public get nexthopTrigger() {
    return this._nexthopTrigger;
  }
  public putNexthopTrigger(value: BgpNexthopTrigger) {
    this._nexthopTrigger.internalValue = value;
  }
  public resetNexthopTrigger() {
    this._nexthopTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopTriggerInput() {
    return this._nexthopTrigger.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asdot: cdktf.numberToTerraform(this._asdot),
      asdot_plus: cdktf.numberToTerraform(this._asdotPlus),
      extended_asn_cap: cdktf.numberToTerraform(this._extendedAsnCap),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      disable_advertisement: bgpDisableAdvertisementToTerraform(this._disableAdvertisement.internalValue),
      nexthop_trigger: bgpNexthopTriggerToTerraform(this._nexthopTrigger.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asdot: {
        value: cdktf.numberToHclTerraform(this._asdot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      asdot_plus: {
        value: cdktf.numberToHclTerraform(this._asdotPlus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_asn_cap: {
        value: cdktf.numberToHclTerraform(this._extendedAsnCap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      disable_advertisement: {
        value: bgpDisableAdvertisementToHclTerraform(this._disableAdvertisement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpDisableAdvertisementList",
      },
      nexthop_trigger: {
        value: bgpNexthopTriggerToHclTerraform(this._nexthopTrigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpNexthopTriggerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
