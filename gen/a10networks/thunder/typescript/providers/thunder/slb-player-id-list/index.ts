// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbPlayerIdListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list#id SlbPlayerIdList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * player_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list#player_record SlbPlayerIdList#player_record}
  */
  readonly playerRecord?: SlbPlayerIdListPlayerRecord[] | cdktf.IResolvable;
}
export interface SlbPlayerIdListPlayerRecord {
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list#game_server_ipv4 SlbPlayerIdList#game_server_ipv4}
  */
  readonly gameServerIpv4?: string;
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list#game_server_ipv6 SlbPlayerIdList#game_server_ipv6}
  */
  readonly gameServerIpv6?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list#game_server_port_v4 SlbPlayerIdList#game_server_port_v4}
  */
  readonly gameServerPortV4?: number;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list#game_server_port_v6 SlbPlayerIdList#game_server_port_v6}
  */
  readonly gameServerPortV6?: number;
  /**
  * 64/32 bit player id based on config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list#player_id SlbPlayerIdList#player_id}
  */
  readonly playerId?: number;
}

export function slbPlayerIdListPlayerRecordToTerraform(struct?: SlbPlayerIdListPlayerRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    game_server_ipv4: cdktf.stringToTerraform(struct!.gameServerIpv4),
    game_server_ipv6: cdktf.stringToTerraform(struct!.gameServerIpv6),
    game_server_port_v4: cdktf.numberToTerraform(struct!.gameServerPortV4),
    game_server_port_v6: cdktf.numberToTerraform(struct!.gameServerPortV6),
    player_id: cdktf.numberToTerraform(struct!.playerId),
  }
}


export function slbPlayerIdListPlayerRecordToHclTerraform(struct?: SlbPlayerIdListPlayerRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    game_server_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.gameServerIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    game_server_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.gameServerIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    game_server_port_v4: {
      value: cdktf.numberToHclTerraform(struct!.gameServerPortV4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    game_server_port_v6: {
      value: cdktf.numberToHclTerraform(struct!.gameServerPortV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    player_id: {
      value: cdktf.numberToHclTerraform(struct!.playerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbPlayerIdListPlayerRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbPlayerIdListPlayerRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gameServerIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gameServerIpv4 = this._gameServerIpv4;
    }
    if (this._gameServerIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gameServerIpv6 = this._gameServerIpv6;
    }
    if (this._gameServerPortV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gameServerPortV4 = this._gameServerPortV4;
    }
    if (this._gameServerPortV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gameServerPortV6 = this._gameServerPortV6;
    }
    if (this._playerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.playerId = this._playerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbPlayerIdListPlayerRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gameServerIpv4 = undefined;
      this._gameServerIpv6 = undefined;
      this._gameServerPortV4 = undefined;
      this._gameServerPortV6 = undefined;
      this._playerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gameServerIpv4 = value.gameServerIpv4;
      this._gameServerIpv6 = value.gameServerIpv6;
      this._gameServerPortV4 = value.gameServerPortV4;
      this._gameServerPortV6 = value.gameServerPortV6;
      this._playerId = value.playerId;
    }
  }

  // game_server_ipv4 - computed: false, optional: true, required: false
  private _gameServerIpv4?: string; 
  public get gameServerIpv4() {
    return this.getStringAttribute('game_server_ipv4');
  }
  public set gameServerIpv4(value: string) {
    this._gameServerIpv4 = value;
  }
  public resetGameServerIpv4() {
    this._gameServerIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerIpv4Input() {
    return this._gameServerIpv4;
  }

  // game_server_ipv6 - computed: false, optional: true, required: false
  private _gameServerIpv6?: string; 
  public get gameServerIpv6() {
    return this.getStringAttribute('game_server_ipv6');
  }
  public set gameServerIpv6(value: string) {
    this._gameServerIpv6 = value;
  }
  public resetGameServerIpv6() {
    this._gameServerIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerIpv6Input() {
    return this._gameServerIpv6;
  }

  // game_server_port_v4 - computed: false, optional: true, required: false
  private _gameServerPortV4?: number; 
  public get gameServerPortV4() {
    return this.getNumberAttribute('game_server_port_v4');
  }
  public set gameServerPortV4(value: number) {
    this._gameServerPortV4 = value;
  }
  public resetGameServerPortV4() {
    this._gameServerPortV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerPortV4Input() {
    return this._gameServerPortV4;
  }

  // game_server_port_v6 - computed: false, optional: true, required: false
  private _gameServerPortV6?: number; 
  public get gameServerPortV6() {
    return this.getNumberAttribute('game_server_port_v6');
  }
  public set gameServerPortV6(value: number) {
    this._gameServerPortV6 = value;
  }
  public resetGameServerPortV6() {
    this._gameServerPortV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerPortV6Input() {
    return this._gameServerPortV6;
  }

  // player_id - computed: false, optional: true, required: false
  private _playerId?: number; 
  public get playerId() {
    return this.getNumberAttribute('player_id');
  }
  public set playerId(value: number) {
    this._playerId = value;
  }
  public resetPlayerId() {
    this._playerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerIdInput() {
    return this._playerId;
  }
}

export class SlbPlayerIdListPlayerRecordList extends cdktf.ComplexList {
  public internalValue? : SlbPlayerIdListPlayerRecord[] | cdktf.IResolvable

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
  public get(index: number): SlbPlayerIdListPlayerRecordOutputReference {
    return new SlbPlayerIdListPlayerRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list thunder_slb_player_id_list}
*/
export class SlbPlayerIdList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_player_id_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbPlayerIdList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbPlayerIdList to import
  * @param importFromId The id of the existing SlbPlayerIdList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbPlayerIdList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_player_id_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_player_id_list thunder_slb_player_id_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbPlayerIdListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbPlayerIdListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_player_id_list',
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
    this._id = config.id;
    this._playerRecord.internalValue = config.playerRecord;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // player_record - computed: false, optional: true, required: false
  private _playerRecord = new SlbPlayerIdListPlayerRecordList(this, "player_record", false);
  public get playerRecord() {
    return this._playerRecord;
  }
  public putPlayerRecord(value: SlbPlayerIdListPlayerRecord[] | cdktf.IResolvable) {
    this._playerRecord.internalValue = value;
  }
  public resetPlayerRecord() {
    this._playerRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerRecordInput() {
    return this._playerRecord.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      player_record: cdktf.listMapper(slbPlayerIdListPlayerRecordToTerraform, true)(this._playerRecord.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      player_record: {
        value: cdktf.listMapperHcl(slbPlayerIdListPlayerRecordToHclTerraform, true)(this._playerRecord.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbPlayerIdListPlayerRecordList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
