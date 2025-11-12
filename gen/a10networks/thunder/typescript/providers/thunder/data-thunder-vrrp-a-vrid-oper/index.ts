// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVrrpAVridOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#id DataThunderVrrpAVridOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify ha VRRP-A vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#vrid_val DataThunderVrrpAVridOper#vrid_val}
  */
  readonly vridVal: number;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#oper DataThunderVrrpAVridOper#oper}
  */
  readonly oper?: DataThunderVrrpAVridOperOper;
}
export interface DataThunderVrrpAVridOperOperPeerListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#active_standby_peer DataThunderVrrpAVridOper#active_standby_peer}
  */
  readonly activeStandbyPeer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#peer_priority DataThunderVrrpAVridOper#peer_priority}
  */
  readonly peerPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#peer_state DataThunderVrrpAVridOper#peer_state}
  */
  readonly peerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#peer_unit DataThunderVrrpAVridOper#peer_unit}
  */
  readonly peerUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#peer_vrid DataThunderVrrpAVridOper#peer_vrid}
  */
  readonly peerVrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#peer_weight DataThunderVrrpAVridOper#peer_weight}
  */
  readonly peerWeight?: number;
}

export function dataThunderVrrpAVridOperOperPeerListStructToTerraform(struct?: DataThunderVrrpAVridOperOperPeerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_standby_peer: cdktf.stringToTerraform(struct!.activeStandbyPeer),
    peer_priority: cdktf.numberToTerraform(struct!.peerPriority),
    peer_state: cdktf.stringToTerraform(struct!.peerState),
    peer_unit: cdktf.numberToTerraform(struct!.peerUnit),
    peer_vrid: cdktf.numberToTerraform(struct!.peerVrid),
    peer_weight: cdktf.numberToTerraform(struct!.peerWeight),
  }
}


export function dataThunderVrrpAVridOperOperPeerListStructToHclTerraform(struct?: DataThunderVrrpAVridOperOperPeerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_standby_peer: {
      value: cdktf.stringToHclTerraform(struct!.activeStandbyPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_priority: {
      value: cdktf.numberToHclTerraform(struct!.peerPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_state: {
      value: cdktf.stringToHclTerraform(struct!.peerState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_unit: {
      value: cdktf.numberToHclTerraform(struct!.peerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_vrid: {
      value: cdktf.numberToHclTerraform(struct!.peerVrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_weight: {
      value: cdktf.numberToHclTerraform(struct!.peerWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpAVridOperOperPeerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVrrpAVridOperOperPeerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeStandbyPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeStandbyPeer = this._activeStandbyPeer;
    }
    if (this._peerPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerPriority = this._peerPriority;
    }
    if (this._peerState !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerState = this._peerState;
    }
    if (this._peerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerUnit = this._peerUnit;
    }
    if (this._peerVrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerVrid = this._peerVrid;
    }
    if (this._peerWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerWeight = this._peerWeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpAVridOperOperPeerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeStandbyPeer = undefined;
      this._peerPriority = undefined;
      this._peerState = undefined;
      this._peerUnit = undefined;
      this._peerVrid = undefined;
      this._peerWeight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeStandbyPeer = value.activeStandbyPeer;
      this._peerPriority = value.peerPriority;
      this._peerState = value.peerState;
      this._peerUnit = value.peerUnit;
      this._peerVrid = value.peerVrid;
      this._peerWeight = value.peerWeight;
    }
  }

  // active_standby_peer - computed: false, optional: true, required: false
  private _activeStandbyPeer?: string; 
  public get activeStandbyPeer() {
    return this.getStringAttribute('active_standby_peer');
  }
  public set activeStandbyPeer(value: string) {
    this._activeStandbyPeer = value;
  }
  public resetActiveStandbyPeer() {
    this._activeStandbyPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeStandbyPeerInput() {
    return this._activeStandbyPeer;
  }

  // peer_priority - computed: false, optional: true, required: false
  private _peerPriority?: number; 
  public get peerPriority() {
    return this.getNumberAttribute('peer_priority');
  }
  public set peerPriority(value: number) {
    this._peerPriority = value;
  }
  public resetPeerPriority() {
    this._peerPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPriorityInput() {
    return this._peerPriority;
  }

  // peer_state - computed: false, optional: true, required: false
  private _peerState?: string; 
  public get peerState() {
    return this.getStringAttribute('peer_state');
  }
  public set peerState(value: string) {
    this._peerState = value;
  }
  public resetPeerState() {
    this._peerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerStateInput() {
    return this._peerState;
  }

  // peer_unit - computed: false, optional: true, required: false
  private _peerUnit?: number; 
  public get peerUnit() {
    return this.getNumberAttribute('peer_unit');
  }
  public set peerUnit(value: number) {
    this._peerUnit = value;
  }
  public resetPeerUnit() {
    this._peerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerUnitInput() {
    return this._peerUnit;
  }

  // peer_vrid - computed: false, optional: true, required: false
  private _peerVrid?: number; 
  public get peerVrid() {
    return this.getNumberAttribute('peer_vrid');
  }
  public set peerVrid(value: number) {
    this._peerVrid = value;
  }
  public resetPeerVrid() {
    this._peerVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVridInput() {
    return this._peerVrid;
  }

  // peer_weight - computed: false, optional: true, required: false
  private _peerWeight?: number; 
  public get peerWeight() {
    return this.getNumberAttribute('peer_weight');
  }
  public set peerWeight(value: number) {
    this._peerWeight = value;
  }
  public resetPeerWeight() {
    this._peerWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerWeightInput() {
    return this._peerWeight;
  }
}

export class DataThunderVrrpAVridOperOperPeerListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVrrpAVridOperOperPeerListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVrrpAVridOperOperPeerListStructOutputReference {
    return new DataThunderVrrpAVridOperOperPeerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVrrpAVridOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#active_standby_local DataThunderVrrpAVridOper#active_standby_local}
  */
  readonly activeStandbyLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#became_active DataThunderVrrpAVridOper#became_active}
  */
  readonly becameActive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#force_standby DataThunderVrrpAVridOper#force_standby}
  */
  readonly forceStandby?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#init_status DataThunderVrrpAVridOper#init_status}
  */
  readonly initStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#priority DataThunderVrrpAVridOper#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#state DataThunderVrrpAVridOper#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#unit DataThunderVrrpAVridOper#unit}
  */
  readonly unit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#vrid_lead DataThunderVrrpAVridOper#vrid_lead}
  */
  readonly vridLead?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#weight DataThunderVrrpAVridOper#weight}
  */
  readonly weight?: number;
  /**
  * peer_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#peer_list DataThunderVrrpAVridOper#peer_list}
  */
  readonly peerList?: DataThunderVrrpAVridOperOperPeerListStruct[] | cdktf.IResolvable;
}

export function dataThunderVrrpAVridOperOperToTerraform(struct?: DataThunderVrrpAVridOperOperOutputReference | DataThunderVrrpAVridOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_standby_local: cdktf.stringToTerraform(struct!.activeStandbyLocal),
    became_active: cdktf.stringToTerraform(struct!.becameActive),
    force_standby: cdktf.stringToTerraform(struct!.forceStandby),
    init_status: cdktf.stringToTerraform(struct!.initStatus),
    priority: cdktf.numberToTerraform(struct!.priority),
    state: cdktf.stringToTerraform(struct!.state),
    unit: cdktf.numberToTerraform(struct!.unit),
    vrid_lead: cdktf.stringToTerraform(struct!.vridLead),
    weight: cdktf.numberToTerraform(struct!.weight),
    peer_list: cdktf.listMapper(dataThunderVrrpAVridOperOperPeerListStructToTerraform, true)(struct!.peerList),
  }
}


export function dataThunderVrrpAVridOperOperToHclTerraform(struct?: DataThunderVrrpAVridOperOperOutputReference | DataThunderVrrpAVridOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_standby_local: {
      value: cdktf.stringToHclTerraform(struct!.activeStandbyLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    became_active: {
      value: cdktf.stringToHclTerraform(struct!.becameActive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_standby: {
      value: cdktf.stringToHclTerraform(struct!.forceStandby),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_status: {
      value: cdktf.stringToHclTerraform(struct!.initStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.numberToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid_lead: {
      value: cdktf.stringToHclTerraform(struct!.vridLead),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_list: {
      value: cdktf.listMapperHcl(dataThunderVrrpAVridOperOperPeerListStructToHclTerraform, true)(struct!.peerList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVrrpAVridOperOperPeerListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpAVridOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVrrpAVridOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeStandbyLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeStandbyLocal = this._activeStandbyLocal;
    }
    if (this._becameActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.becameActive = this._becameActive;
    }
    if (this._forceStandby !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceStandby = this._forceStandby;
    }
    if (this._initStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.initStatus = this._initStatus;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._vridLead !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridLead = this._vridLead;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._peerList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerList = this._peerList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpAVridOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeStandbyLocal = undefined;
      this._becameActive = undefined;
      this._forceStandby = undefined;
      this._initStatus = undefined;
      this._priority = undefined;
      this._state = undefined;
      this._unit = undefined;
      this._vridLead = undefined;
      this._weight = undefined;
      this._peerList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeStandbyLocal = value.activeStandbyLocal;
      this._becameActive = value.becameActive;
      this._forceStandby = value.forceStandby;
      this._initStatus = value.initStatus;
      this._priority = value.priority;
      this._state = value.state;
      this._unit = value.unit;
      this._vridLead = value.vridLead;
      this._weight = value.weight;
      this._peerList.internalValue = value.peerList;
    }
  }

  // active_standby_local - computed: false, optional: true, required: false
  private _activeStandbyLocal?: string; 
  public get activeStandbyLocal() {
    return this.getStringAttribute('active_standby_local');
  }
  public set activeStandbyLocal(value: string) {
    this._activeStandbyLocal = value;
  }
  public resetActiveStandbyLocal() {
    this._activeStandbyLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeStandbyLocalInput() {
    return this._activeStandbyLocal;
  }

  // became_active - computed: false, optional: true, required: false
  private _becameActive?: string; 
  public get becameActive() {
    return this.getStringAttribute('became_active');
  }
  public set becameActive(value: string) {
    this._becameActive = value;
  }
  public resetBecameActive() {
    this._becameActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get becameActiveInput() {
    return this._becameActive;
  }

  // force_standby - computed: false, optional: true, required: false
  private _forceStandby?: string; 
  public get forceStandby() {
    return this.getStringAttribute('force_standby');
  }
  public set forceStandby(value: string) {
    this._forceStandby = value;
  }
  public resetForceStandby() {
    this._forceStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStandbyInput() {
    return this._forceStandby;
  }

  // init_status - computed: false, optional: true, required: false
  private _initStatus?: string; 
  public get initStatus() {
    return this.getStringAttribute('init_status');
  }
  public set initStatus(value: string) {
    this._initStatus = value;
  }
  public resetInitStatus() {
    this._initStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initStatusInput() {
    return this._initStatus;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: number; 
  public get unit() {
    return this.getNumberAttribute('unit');
  }
  public set unit(value: number) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // vrid_lead - computed: false, optional: true, required: false
  private _vridLead?: string; 
  public get vridLead() {
    return this.getStringAttribute('vrid_lead');
  }
  public set vridLead(value: string) {
    this._vridLead = value;
  }
  public resetVridLead() {
    this._vridLead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridLeadInput() {
    return this._vridLead;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // peer_list - computed: false, optional: true, required: false
  private _peerList = new DataThunderVrrpAVridOperOperPeerListStructList(this, "peer_list", false);
  public get peerList() {
    return this._peerList;
  }
  public putPeerList(value: DataThunderVrrpAVridOperOperPeerListStruct[] | cdktf.IResolvable) {
    this._peerList.internalValue = value;
  }
  public resetPeerList() {
    this._peerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerListInput() {
    return this._peerList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper thunder_vrrp_a_vrid_oper}
*/
export class DataThunderVrrpAVridOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_vrid_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVrrpAVridOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVrrpAVridOper to import
  * @param importFromId The id of the existing DataThunderVrrpAVridOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVrrpAVridOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_vrid_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_vrid_oper thunder_vrrp_a_vrid_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVrrpAVridOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderVrrpAVridOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_vrid_oper',
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
    this._vridVal = config.vridVal;
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

  // vrid_val - computed: false, optional: false, required: true
  private _vridVal?: number; 
  public get vridVal() {
    return this.getNumberAttribute('vrid_val');
  }
  public set vridVal(value: number) {
    this._vridVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridValInput() {
    return this._vridVal;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVrrpAVridOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVrrpAVridOperOper) {
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
      vrid_val: cdktf.numberToTerraform(this._vridVal),
      oper: dataThunderVrrpAVridOperOperToTerraform(this._oper.internalValue),
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
      vrid_val: {
        value: cdktf.numberToHclTerraform(this._vridVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oper: {
        value: dataThunderVrrpAVridOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVrrpAVridOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
