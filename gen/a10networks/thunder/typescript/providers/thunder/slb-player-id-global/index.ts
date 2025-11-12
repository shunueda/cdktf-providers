// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbPlayerIdGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Absolute max record expiration value (default 10 minutes) (Absolute max record expiration time in minutes, default 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#abs_max_expiration SlbPlayerIdGlobal#abs_max_expiration}
  */
  readonly absMaxExpiration?: number;
  /**
  * Enable 64 bit player id check. Default is 32 bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#enable_64bit_player_id SlbPlayerIdGlobal#enable_64bit_player_id}
  */
  readonly enable64BitPlayerId?: number;
  /**
  * Time to playerid enforcement after bootup (default 480 seconds) (Time to playerid enforcement in seconds, default 480)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#enforcement_timer SlbPlayerIdGlobal#enforcement_timer}
  */
  readonly enforcementTimer?: number;
  /**
  * Forces the device to be in passive mode (Only stats and no packet drops)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#force_passive SlbPlayerIdGlobal#force_passive}
  */
  readonly forcePassive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#id SlbPlayerIdGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Minimum record expiration value (default 1 min) (Min record expiration time in minutes, default 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#min_expiration SlbPlayerIdGlobal#min_expiration}
  */
  readonly minExpiration?: number;
  /**
  * Packet activity record expiration value (default 5 minutes) (Packet activity record expiration time in minutes, default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#pkt_activity_expiration SlbPlayerIdGlobal#pkt_activity_expiration}
  */
  readonly pktActivityExpiration?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#uuid SlbPlayerIdGlobal#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#sampling_enable SlbPlayerIdGlobal#sampling_enable}
  */
  readonly samplingEnable?: SlbPlayerIdGlobalSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbPlayerIdGlobalSamplingEnable {
  /**
  * 'all': all; 'total_playerids_created': Playerid records created; 'total_playerids_deleted': Playerid records deleted; 'total_abs_max_age_outs': Playerid records max time aged out; 'total_pkt_activity_age_outs': Playerid records idle timeout; 'total_invalid_playerid_pkts': Invalid playerid packets; 'total_invalid_playerid_drops': Invalid playerid packet drops; 'total_valid_playerid_pkts': Valid playerid packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#counters1 SlbPlayerIdGlobal#counters1}
  */
  readonly counters1?: string;
}

export function slbPlayerIdGlobalSamplingEnableToTerraform(struct?: SlbPlayerIdGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbPlayerIdGlobalSamplingEnableToHclTerraform(struct?: SlbPlayerIdGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbPlayerIdGlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbPlayerIdGlobalSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbPlayerIdGlobalSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbPlayerIdGlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbPlayerIdGlobalSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbPlayerIdGlobalSamplingEnableOutputReference {
    return new SlbPlayerIdGlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global thunder_slb_player_id_global}
*/
export class SlbPlayerIdGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_player_id_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbPlayerIdGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbPlayerIdGlobal to import
  * @param importFromId The id of the existing SlbPlayerIdGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbPlayerIdGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_player_id_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_global thunder_slb_player_id_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbPlayerIdGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbPlayerIdGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_player_id_global',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._absMaxExpiration = config.absMaxExpiration;
    this._enable64BitPlayerId = config.enable64BitPlayerId;
    this._enforcementTimer = config.enforcementTimer;
    this._forcePassive = config.forcePassive;
    this._id = config.id;
    this._minExpiration = config.minExpiration;
    this._pktActivityExpiration = config.pktActivityExpiration;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abs_max_expiration - computed: false, optional: true, required: false
  private _absMaxExpiration?: number; 
  public get absMaxExpiration() {
    return this.getNumberAttribute('abs_max_expiration');
  }
  public set absMaxExpiration(value: number) {
    this._absMaxExpiration = value;
  }
  public resetAbsMaxExpiration() {
    this._absMaxExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absMaxExpirationInput() {
    return this._absMaxExpiration;
  }

  // enable_64bit_player_id - computed: false, optional: true, required: false
  private _enable64BitPlayerId?: number; 
  public get enable64BitPlayerId() {
    return this.getNumberAttribute('enable_64bit_player_id');
  }
  public set enable64BitPlayerId(value: number) {
    this._enable64BitPlayerId = value;
  }
  public resetEnable64BitPlayerId() {
    this._enable64BitPlayerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enable64BitPlayerIdInput() {
    return this._enable64BitPlayerId;
  }

  // enforcement_timer - computed: false, optional: true, required: false
  private _enforcementTimer?: number; 
  public get enforcementTimer() {
    return this.getNumberAttribute('enforcement_timer');
  }
  public set enforcementTimer(value: number) {
    this._enforcementTimer = value;
  }
  public resetEnforcementTimer() {
    this._enforcementTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementTimerInput() {
    return this._enforcementTimer;
  }

  // force_passive - computed: false, optional: true, required: false
  private _forcePassive?: number; 
  public get forcePassive() {
    return this.getNumberAttribute('force_passive');
  }
  public set forcePassive(value: number) {
    this._forcePassive = value;
  }
  public resetForcePassive() {
    this._forcePassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePassiveInput() {
    return this._forcePassive;
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

  // min_expiration - computed: false, optional: true, required: false
  private _minExpiration?: number; 
  public get minExpiration() {
    return this.getNumberAttribute('min_expiration');
  }
  public set minExpiration(value: number) {
    this._minExpiration = value;
  }
  public resetMinExpiration() {
    this._minExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minExpirationInput() {
    return this._minExpiration;
  }

  // pkt_activity_expiration - computed: false, optional: true, required: false
  private _pktActivityExpiration?: number; 
  public get pktActivityExpiration() {
    return this.getNumberAttribute('pkt_activity_expiration');
  }
  public set pktActivityExpiration(value: number) {
    this._pktActivityExpiration = value;
  }
  public resetPktActivityExpiration() {
    this._pktActivityExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktActivityExpirationInput() {
    return this._pktActivityExpiration;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbPlayerIdGlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbPlayerIdGlobalSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abs_max_expiration: cdktf.numberToTerraform(this._absMaxExpiration),
      enable_64bit_player_id: cdktf.numberToTerraform(this._enable64BitPlayerId),
      enforcement_timer: cdktf.numberToTerraform(this._enforcementTimer),
      force_passive: cdktf.numberToTerraform(this._forcePassive),
      id: cdktf.stringToTerraform(this._id),
      min_expiration: cdktf.numberToTerraform(this._minExpiration),
      pkt_activity_expiration: cdktf.numberToTerraform(this._pktActivityExpiration),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbPlayerIdGlobalSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abs_max_expiration: {
        value: cdktf.numberToHclTerraform(this._absMaxExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_64bit_player_id: {
        value: cdktf.numberToHclTerraform(this._enable64BitPlayerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enforcement_timer: {
        value: cdktf.numberToHclTerraform(this._enforcementTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_passive: {
        value: cdktf.numberToHclTerraform(this._forcePassive),
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
      min_expiration: {
        value: cdktf.numberToHclTerraform(this._minExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pkt_activity_expiration: {
        value: cdktf.numberToHclTerraform(this._pktActivityExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbPlayerIdGlobalSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbPlayerIdGlobalSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
