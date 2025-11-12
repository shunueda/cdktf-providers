// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbPlayerIdEpOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#id DataThunderSlbPlayerIdEpOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#oper DataThunderSlbPlayerIdEpOper#oper}
  */
  readonly oper?: DataThunderSlbPlayerIdEpOperOper;
}
export interface DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#age DataThunderSlbPlayerIdEpOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#game_server_address DataThunderSlbPlayerIdEpOper#game_server_address}
  */
  readonly gameServerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#game_server_port DataThunderSlbPlayerIdEpOper#game_server_port}
  */
  readonly gameServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#idle_time DataThunderSlbPlayerIdEpOper#idle_time}
  */
  readonly idleTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#player_id DataThunderSlbPlayerIdEpOper#player_id}
  */
  readonly playerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#user_session_count DataThunderSlbPlayerIdEpOper#user_session_count}
  */
  readonly userSessionCount?: number;
}

export function dataThunderSlbPlayerIdEpOperOperPlayerIdEpListStructToTerraform(struct?: DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    game_server_address: cdktf.stringToTerraform(struct!.gameServerAddress),
    game_server_port: cdktf.numberToTerraform(struct!.gameServerPort),
    idle_time: cdktf.numberToTerraform(struct!.idleTime),
    player_id: cdktf.numberToTerraform(struct!.playerId),
    user_session_count: cdktf.numberToTerraform(struct!.userSessionCount),
  }
}


export function dataThunderSlbPlayerIdEpOperOperPlayerIdEpListStructToHclTerraform(struct?: DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    game_server_address: {
      value: cdktf.stringToHclTerraform(struct!.gameServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    game_server_port: {
      value: cdktf.numberToHclTerraform(struct!.gameServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_time: {
      value: cdktf.numberToHclTerraform(struct!.idleTime),
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
    user_session_count: {
      value: cdktf.numberToHclTerraform(struct!.userSessionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._gameServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gameServerAddress = this._gameServerAddress;
    }
    if (this._gameServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.gameServerPort = this._gameServerPort;
    }
    if (this._idleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTime = this._idleTime;
    }
    if (this._playerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.playerId = this._playerId;
    }
    if (this._userSessionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSessionCount = this._userSessionCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._gameServerAddress = undefined;
      this._gameServerPort = undefined;
      this._idleTime = undefined;
      this._playerId = undefined;
      this._userSessionCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._gameServerAddress = value.gameServerAddress;
      this._gameServerPort = value.gameServerPort;
      this._idleTime = value.idleTime;
      this._playerId = value.playerId;
      this._userSessionCount = value.userSessionCount;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // game_server_address - computed: false, optional: true, required: false
  private _gameServerAddress?: string; 
  public get gameServerAddress() {
    return this.getStringAttribute('game_server_address');
  }
  public set gameServerAddress(value: string) {
    this._gameServerAddress = value;
  }
  public resetGameServerAddress() {
    this._gameServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerAddressInput() {
    return this._gameServerAddress;
  }

  // game_server_port - computed: false, optional: true, required: false
  private _gameServerPort?: number; 
  public get gameServerPort() {
    return this.getNumberAttribute('game_server_port');
  }
  public set gameServerPort(value: number) {
    this._gameServerPort = value;
  }
  public resetGameServerPort() {
    this._gameServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerPortInput() {
    return this._gameServerPort;
  }

  // idle_time - computed: false, optional: true, required: false
  private _idleTime?: number; 
  public get idleTime() {
    return this.getNumberAttribute('idle_time');
  }
  public set idleTime(value: number) {
    this._idleTime = value;
  }
  public resetIdleTime() {
    this._idleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeInput() {
    return this._idleTime;
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

  // user_session_count - computed: false, optional: true, required: false
  private _userSessionCount?: number; 
  public get userSessionCount() {
    return this.getNumberAttribute('user_session_count');
  }
  public set userSessionCount(value: number) {
    this._userSessionCount = value;
  }
  public resetUserSessionCount() {
    this._userSessionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSessionCountInput() {
    return this._userSessionCount;
  }
}

export class DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStructOutputReference {
    return new DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbPlayerIdEpOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#filter_type DataThunderSlbPlayerIdEpOper#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#player_id DataThunderSlbPlayerIdEpOper#player_id}
  */
  readonly playerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#total_players DataThunderSlbPlayerIdEpOper#total_players}
  */
  readonly totalPlayers?: number;
  /**
  * player_id_ep_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#player_id_ep_list DataThunderSlbPlayerIdEpOper#player_id_ep_list}
  */
  readonly playerIdEpList?: DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbPlayerIdEpOperOperToTerraform(struct?: DataThunderSlbPlayerIdEpOperOperOutputReference | DataThunderSlbPlayerIdEpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    player_id: cdktf.numberToTerraform(struct!.playerId),
    total_players: cdktf.numberToTerraform(struct!.totalPlayers),
    player_id_ep_list: cdktf.listMapper(dataThunderSlbPlayerIdEpOperOperPlayerIdEpListStructToTerraform, true)(struct!.playerIdEpList),
  }
}


export function dataThunderSlbPlayerIdEpOperOperToHclTerraform(struct?: DataThunderSlbPlayerIdEpOperOperOutputReference | DataThunderSlbPlayerIdEpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    player_id: {
      value: cdktf.numberToHclTerraform(struct!.playerId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_players: {
      value: cdktf.numberToHclTerraform(struct!.totalPlayers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    player_id_ep_list: {
      value: cdktf.listMapperHcl(dataThunderSlbPlayerIdEpOperOperPlayerIdEpListStructToHclTerraform, true)(struct!.playerIdEpList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbPlayerIdEpOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbPlayerIdEpOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._playerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.playerId = this._playerId;
    }
    if (this._totalPlayers !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPlayers = this._totalPlayers;
    }
    if (this._playerIdEpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.playerIdEpList = this._playerIdEpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbPlayerIdEpOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterType = undefined;
      this._playerId = undefined;
      this._totalPlayers = undefined;
      this._playerIdEpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterType = value.filterType;
      this._playerId = value.playerId;
      this._totalPlayers = value.totalPlayers;
      this._playerIdEpList.internalValue = value.playerIdEpList;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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

  // total_players - computed: false, optional: true, required: false
  private _totalPlayers?: number; 
  public get totalPlayers() {
    return this.getNumberAttribute('total_players');
  }
  public set totalPlayers(value: number) {
    this._totalPlayers = value;
  }
  public resetTotalPlayers() {
    this._totalPlayers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPlayersInput() {
    return this._totalPlayers;
  }

  // player_id_ep_list - computed: false, optional: true, required: false
  private _playerIdEpList = new DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStructList(this, "player_id_ep_list", false);
  public get playerIdEpList() {
    return this._playerIdEpList;
  }
  public putPlayerIdEpList(value: DataThunderSlbPlayerIdEpOperOperPlayerIdEpListStruct[] | cdktf.IResolvable) {
    this._playerIdEpList.internalValue = value;
  }
  public resetPlayerIdEpList() {
    this._playerIdEpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playerIdEpListInput() {
    return this._playerIdEpList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper thunder_slb_player_id_ep_oper}
*/
export class DataThunderSlbPlayerIdEpOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_player_id_ep_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbPlayerIdEpOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbPlayerIdEpOper to import
  * @param importFromId The id of the existing DataThunderSlbPlayerIdEpOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbPlayerIdEpOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_player_id_ep_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_player_id_ep_oper thunder_slb_player_id_ep_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbPlayerIdEpOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbPlayerIdEpOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_player_id_ep_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbPlayerIdEpOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbPlayerIdEpOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbPlayerIdEpOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbPlayerIdEpOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbPlayerIdEpOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
