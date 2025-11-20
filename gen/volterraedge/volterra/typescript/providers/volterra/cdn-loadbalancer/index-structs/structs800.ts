import * as cdktf from 'cdktf';
import { CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement,
cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementToTerraform,
cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementToHclTerraform,
CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementOutputReference,
CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication,
cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationToTerraform,
cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationToHclTerraform,
CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationOutputReference,
CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain,
cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainToTerraform,
cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainToHclTerraform,
CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainOutputReference,
CdnLoadbalancerBotDefensePolicyJsInsertAllPages,
cdnLoadbalancerBotDefensePolicyJsInsertAllPagesToTerraform,
cdnLoadbalancerBotDefensePolicyJsInsertAllPagesToHclTerraform,
CdnLoadbalancerBotDefensePolicyJsInsertAllPagesOutputReference,
CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExcept,
cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptToTerraform,
cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptToHclTerraform,
CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptOutputReference,
CdnLoadbalancerBotDefensePolicyJsInsertionRules,
cdnLoadbalancerBotDefensePolicyJsInsertionRulesToTerraform,
cdnLoadbalancerBotDefensePolicyJsInsertionRulesToHclTerraform,
CdnLoadbalancerBotDefensePolicyJsInsertionRulesOutputReference,
CdnLoadbalancerBotDefensePolicyMobileSdkConfig,
cdnLoadbalancerBotDefensePolicyMobileSdkConfigToTerraform,
cdnLoadbalancerBotDefensePolicyMobileSdkConfigToHclTerraform,
CdnLoadbalancerBotDefensePolicyMobileSdkConfigOutputReference } from './structs400'
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#apply CdnLoadbalancer#apply}
  */
  readonly apply?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#money_transfer CdnLoadbalancer#money_transfer}
  */
  readonly moneyTransfer?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: cdktf.booleanToTerraform(struct!.apply),
    money_transfer: cdktf.booleanToTerraform(struct!.moneyTransfer),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: cdktf.booleanToHclTerraform(struct!.apply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    money_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.moneyTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apply !== undefined) {
      hasAnyValues = true;
      internalValueResult.apply = this._apply;
    }
    if (this._moneyTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.moneyTransfer = this._moneyTransfer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apply = undefined;
      this._moneyTransfer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apply = value.apply;
      this._moneyTransfer = value.moneyTransfer;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply?: boolean | cdktf.IResolvable; 
  public get apply() {
    return this.getBooleanAttribute('apply');
  }
  public set apply(value: boolean | cdktf.IResolvable) {
    this._apply = value;
  }
  public resetApply() {
    this._apply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply;
  }

  // money_transfer - computed: false, optional: true, required: false
  private _moneyTransfer?: boolean | cdktf.IResolvable; 
  public get moneyTransfer() {
    return this.getBooleanAttribute('money_transfer');
  }
  public set moneyTransfer(value: boolean | cdktf.IResolvable) {
    this._moneyTransfer = value;
  }
  public resetMoneyTransfer() {
    this._moneyTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moneyTransferInput() {
    return this._moneyTransfer;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#checkin CdnLoadbalancer#checkin}
  */
  readonly checkin?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkin: cdktf.booleanToTerraform(struct!.checkin),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkin: {
      value: cdktf.booleanToHclTerraform(struct!.checkin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkin !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkin = this._checkin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkin = value.checkin;
    }
  }

  // checkin - computed: false, optional: true, required: false
  private _checkin?: boolean | cdktf.IResolvable; 
  public get checkin() {
    return this.getBooleanAttribute('checkin');
  }
  public set checkin(value: boolean | cdktf.IResolvable) {
    this._checkin = value;
  }
  public resetCheckin() {
    this._checkin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkinInput() {
    return this._checkin;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#create CdnLoadbalancer#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#update CdnLoadbalancer#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#view CdnLoadbalancer#view}
  */
  readonly view?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    update: cdktf.booleanToTerraform(struct!.update),
    view: cdktf.booleanToTerraform(struct!.view),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update: {
      value: cdktf.booleanToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view: {
      value: cdktf.booleanToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._update = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._update = value.update;
      this._view = value.view;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // view - computed: false, optional: true, required: false
  private _view?: boolean | cdktf.IResolvable; 
  public get view() {
    return this.getBooleanAttribute('view');
  }
  public set view(value: boolean | cdktf.IResolvable) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#flight_search CdnLoadbalancer#flight_search}
  */
  readonly flightSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#product_search CdnLoadbalancer#product_search}
  */
  readonly productSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#reservation_search CdnLoadbalancer#reservation_search}
  */
  readonly reservationSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#room_search CdnLoadbalancer#room_search}
  */
  readonly roomSearch?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flight_search: cdktf.booleanToTerraform(struct!.flightSearch),
    product_search: cdktf.booleanToTerraform(struct!.productSearch),
    reservation_search: cdktf.booleanToTerraform(struct!.reservationSearch),
    room_search: cdktf.booleanToTerraform(struct!.roomSearch),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flight_search: {
      value: cdktf.booleanToHclTerraform(struct!.flightSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    product_search: {
      value: cdktf.booleanToHclTerraform(struct!.productSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reservation_search: {
      value: cdktf.booleanToHclTerraform(struct!.reservationSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    room_search: {
      value: cdktf.booleanToHclTerraform(struct!.roomSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flightSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.flightSearch = this._flightSearch;
    }
    if (this._productSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.productSearch = this._productSearch;
    }
    if (this._reservationSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationSearch = this._reservationSearch;
    }
    if (this._roomSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.roomSearch = this._roomSearch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flightSearch = undefined;
      this._productSearch = undefined;
      this._reservationSearch = undefined;
      this._roomSearch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flightSearch = value.flightSearch;
      this._productSearch = value.productSearch;
      this._reservationSearch = value.reservationSearch;
      this._roomSearch = value.roomSearch;
    }
  }

  // flight_search - computed: false, optional: true, required: false
  private _flightSearch?: boolean | cdktf.IResolvable; 
  public get flightSearch() {
    return this.getBooleanAttribute('flight_search');
  }
  public set flightSearch(value: boolean | cdktf.IResolvable) {
    this._flightSearch = value;
  }
  public resetFlightSearch() {
    this._flightSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flightSearchInput() {
    return this._flightSearch;
  }

  // product_search - computed: false, optional: true, required: false
  private _productSearch?: boolean | cdktf.IResolvable; 
  public get productSearch() {
    return this.getBooleanAttribute('product_search');
  }
  public set productSearch(value: boolean | cdktf.IResolvable) {
    this._productSearch = value;
  }
  public resetProductSearch() {
    this._productSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productSearchInput() {
    return this._productSearch;
  }

  // reservation_search - computed: false, optional: true, required: false
  private _reservationSearch?: boolean | cdktf.IResolvable; 
  public get reservationSearch() {
    return this.getBooleanAttribute('reservation_search');
  }
  public set reservationSearch(value: boolean | cdktf.IResolvable) {
    this._reservationSearch = value;
  }
  public resetReservationSearch() {
    this._reservationSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationSearchInput() {
    return this._reservationSearch;
  }

  // room_search - computed: false, optional: true, required: false
  private _roomSearch?: boolean | cdktf.IResolvable; 
  public get roomSearch() {
    return this.getBooleanAttribute('room_search');
  }
  public set roomSearch(value: boolean | cdktf.IResolvable) {
    this._roomSearch = value;
  }
  public resetRoomSearch() {
    this._roomSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roomSearchInput() {
    return this._roomSearch;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#gift_card_make_purchase_with_gift_card CdnLoadbalancer#gift_card_make_purchase_with_gift_card}
  */
  readonly giftCardMakePurchaseWithGiftCard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#gift_card_validation CdnLoadbalancer#gift_card_validation}
  */
  readonly giftCardValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shop_add_to_cart CdnLoadbalancer#shop_add_to_cart}
  */
  readonly shopAddToCart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shop_checkout CdnLoadbalancer#shop_checkout}
  */
  readonly shopCheckout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shop_choose_seat CdnLoadbalancer#shop_choose_seat}
  */
  readonly shopChooseSeat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shop_enter_drawing_submission CdnLoadbalancer#shop_enter_drawing_submission}
  */
  readonly shopEnterDrawingSubmission?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shop_make_payment CdnLoadbalancer#shop_make_payment}
  */
  readonly shopMakePayment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shop_order CdnLoadbalancer#shop_order}
  */
  readonly shopOrder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shop_price_inquiry CdnLoadbalancer#shop_price_inquiry}
  */
  readonly shopPriceInquiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shop_promo_code_validation CdnLoadbalancer#shop_promo_code_validation}
  */
  readonly shopPromoCodeValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shop_purchase_gift_card CdnLoadbalancer#shop_purchase_gift_card}
  */
  readonly shopPurchaseGiftCard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shop_update_quantity CdnLoadbalancer#shop_update_quantity}
  */
  readonly shopUpdateQuantity?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gift_card_make_purchase_with_gift_card: cdktf.booleanToTerraform(struct!.giftCardMakePurchaseWithGiftCard),
    gift_card_validation: cdktf.booleanToTerraform(struct!.giftCardValidation),
    shop_add_to_cart: cdktf.booleanToTerraform(struct!.shopAddToCart),
    shop_checkout: cdktf.booleanToTerraform(struct!.shopCheckout),
    shop_choose_seat: cdktf.booleanToTerraform(struct!.shopChooseSeat),
    shop_enter_drawing_submission: cdktf.booleanToTerraform(struct!.shopEnterDrawingSubmission),
    shop_make_payment: cdktf.booleanToTerraform(struct!.shopMakePayment),
    shop_order: cdktf.booleanToTerraform(struct!.shopOrder),
    shop_price_inquiry: cdktf.booleanToTerraform(struct!.shopPriceInquiry),
    shop_promo_code_validation: cdktf.booleanToTerraform(struct!.shopPromoCodeValidation),
    shop_purchase_gift_card: cdktf.booleanToTerraform(struct!.shopPurchaseGiftCard),
    shop_update_quantity: cdktf.booleanToTerraform(struct!.shopUpdateQuantity),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gift_card_make_purchase_with_gift_card: {
      value: cdktf.booleanToHclTerraform(struct!.giftCardMakePurchaseWithGiftCard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gift_card_validation: {
      value: cdktf.booleanToHclTerraform(struct!.giftCardValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_add_to_cart: {
      value: cdktf.booleanToHclTerraform(struct!.shopAddToCart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_checkout: {
      value: cdktf.booleanToHclTerraform(struct!.shopCheckout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_choose_seat: {
      value: cdktf.booleanToHclTerraform(struct!.shopChooseSeat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_enter_drawing_submission: {
      value: cdktf.booleanToHclTerraform(struct!.shopEnterDrawingSubmission),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_make_payment: {
      value: cdktf.booleanToHclTerraform(struct!.shopMakePayment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_order: {
      value: cdktf.booleanToHclTerraform(struct!.shopOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_price_inquiry: {
      value: cdktf.booleanToHclTerraform(struct!.shopPriceInquiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_promo_code_validation: {
      value: cdktf.booleanToHclTerraform(struct!.shopPromoCodeValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_purchase_gift_card: {
      value: cdktf.booleanToHclTerraform(struct!.shopPurchaseGiftCard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_update_quantity: {
      value: cdktf.booleanToHclTerraform(struct!.shopUpdateQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._giftCardMakePurchaseWithGiftCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.giftCardMakePurchaseWithGiftCard = this._giftCardMakePurchaseWithGiftCard;
    }
    if (this._giftCardValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.giftCardValidation = this._giftCardValidation;
    }
    if (this._shopAddToCart !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopAddToCart = this._shopAddToCart;
    }
    if (this._shopCheckout !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopCheckout = this._shopCheckout;
    }
    if (this._shopChooseSeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopChooseSeat = this._shopChooseSeat;
    }
    if (this._shopEnterDrawingSubmission !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopEnterDrawingSubmission = this._shopEnterDrawingSubmission;
    }
    if (this._shopMakePayment !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopMakePayment = this._shopMakePayment;
    }
    if (this._shopOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopOrder = this._shopOrder;
    }
    if (this._shopPriceInquiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopPriceInquiry = this._shopPriceInquiry;
    }
    if (this._shopPromoCodeValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopPromoCodeValidation = this._shopPromoCodeValidation;
    }
    if (this._shopPurchaseGiftCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopPurchaseGiftCard = this._shopPurchaseGiftCard;
    }
    if (this._shopUpdateQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopUpdateQuantity = this._shopUpdateQuantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._giftCardMakePurchaseWithGiftCard = undefined;
      this._giftCardValidation = undefined;
      this._shopAddToCart = undefined;
      this._shopCheckout = undefined;
      this._shopChooseSeat = undefined;
      this._shopEnterDrawingSubmission = undefined;
      this._shopMakePayment = undefined;
      this._shopOrder = undefined;
      this._shopPriceInquiry = undefined;
      this._shopPromoCodeValidation = undefined;
      this._shopPurchaseGiftCard = undefined;
      this._shopUpdateQuantity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._giftCardMakePurchaseWithGiftCard = value.giftCardMakePurchaseWithGiftCard;
      this._giftCardValidation = value.giftCardValidation;
      this._shopAddToCart = value.shopAddToCart;
      this._shopCheckout = value.shopCheckout;
      this._shopChooseSeat = value.shopChooseSeat;
      this._shopEnterDrawingSubmission = value.shopEnterDrawingSubmission;
      this._shopMakePayment = value.shopMakePayment;
      this._shopOrder = value.shopOrder;
      this._shopPriceInquiry = value.shopPriceInquiry;
      this._shopPromoCodeValidation = value.shopPromoCodeValidation;
      this._shopPurchaseGiftCard = value.shopPurchaseGiftCard;
      this._shopUpdateQuantity = value.shopUpdateQuantity;
    }
  }

  // gift_card_make_purchase_with_gift_card - computed: false, optional: true, required: false
  private _giftCardMakePurchaseWithGiftCard?: boolean | cdktf.IResolvable; 
  public get giftCardMakePurchaseWithGiftCard() {
    return this.getBooleanAttribute('gift_card_make_purchase_with_gift_card');
  }
  public set giftCardMakePurchaseWithGiftCard(value: boolean | cdktf.IResolvable) {
    this._giftCardMakePurchaseWithGiftCard = value;
  }
  public resetGiftCardMakePurchaseWithGiftCard() {
    this._giftCardMakePurchaseWithGiftCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giftCardMakePurchaseWithGiftCardInput() {
    return this._giftCardMakePurchaseWithGiftCard;
  }

  // gift_card_validation - computed: false, optional: true, required: false
  private _giftCardValidation?: boolean | cdktf.IResolvable; 
  public get giftCardValidation() {
    return this.getBooleanAttribute('gift_card_validation');
  }
  public set giftCardValidation(value: boolean | cdktf.IResolvable) {
    this._giftCardValidation = value;
  }
  public resetGiftCardValidation() {
    this._giftCardValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giftCardValidationInput() {
    return this._giftCardValidation;
  }

  // shop_add_to_cart - computed: false, optional: true, required: false
  private _shopAddToCart?: boolean | cdktf.IResolvable; 
  public get shopAddToCart() {
    return this.getBooleanAttribute('shop_add_to_cart');
  }
  public set shopAddToCart(value: boolean | cdktf.IResolvable) {
    this._shopAddToCart = value;
  }
  public resetShopAddToCart() {
    this._shopAddToCart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopAddToCartInput() {
    return this._shopAddToCart;
  }

  // shop_checkout - computed: false, optional: true, required: false
  private _shopCheckout?: boolean | cdktf.IResolvable; 
  public get shopCheckout() {
    return this.getBooleanAttribute('shop_checkout');
  }
  public set shopCheckout(value: boolean | cdktf.IResolvable) {
    this._shopCheckout = value;
  }
  public resetShopCheckout() {
    this._shopCheckout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopCheckoutInput() {
    return this._shopCheckout;
  }

  // shop_choose_seat - computed: false, optional: true, required: false
  private _shopChooseSeat?: boolean | cdktf.IResolvable; 
  public get shopChooseSeat() {
    return this.getBooleanAttribute('shop_choose_seat');
  }
  public set shopChooseSeat(value: boolean | cdktf.IResolvable) {
    this._shopChooseSeat = value;
  }
  public resetShopChooseSeat() {
    this._shopChooseSeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopChooseSeatInput() {
    return this._shopChooseSeat;
  }

  // shop_enter_drawing_submission - computed: false, optional: true, required: false
  private _shopEnterDrawingSubmission?: boolean | cdktf.IResolvable; 
  public get shopEnterDrawingSubmission() {
    return this.getBooleanAttribute('shop_enter_drawing_submission');
  }
  public set shopEnterDrawingSubmission(value: boolean | cdktf.IResolvable) {
    this._shopEnterDrawingSubmission = value;
  }
  public resetShopEnterDrawingSubmission() {
    this._shopEnterDrawingSubmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopEnterDrawingSubmissionInput() {
    return this._shopEnterDrawingSubmission;
  }

  // shop_make_payment - computed: false, optional: true, required: false
  private _shopMakePayment?: boolean | cdktf.IResolvable; 
  public get shopMakePayment() {
    return this.getBooleanAttribute('shop_make_payment');
  }
  public set shopMakePayment(value: boolean | cdktf.IResolvable) {
    this._shopMakePayment = value;
  }
  public resetShopMakePayment() {
    this._shopMakePayment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopMakePaymentInput() {
    return this._shopMakePayment;
  }

  // shop_order - computed: false, optional: true, required: false
  private _shopOrder?: boolean | cdktf.IResolvable; 
  public get shopOrder() {
    return this.getBooleanAttribute('shop_order');
  }
  public set shopOrder(value: boolean | cdktf.IResolvable) {
    this._shopOrder = value;
  }
  public resetShopOrder() {
    this._shopOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopOrderInput() {
    return this._shopOrder;
  }

  // shop_price_inquiry - computed: false, optional: true, required: false
  private _shopPriceInquiry?: boolean | cdktf.IResolvable; 
  public get shopPriceInquiry() {
    return this.getBooleanAttribute('shop_price_inquiry');
  }
  public set shopPriceInquiry(value: boolean | cdktf.IResolvable) {
    this._shopPriceInquiry = value;
  }
  public resetShopPriceInquiry() {
    this._shopPriceInquiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopPriceInquiryInput() {
    return this._shopPriceInquiry;
  }

  // shop_promo_code_validation - computed: false, optional: true, required: false
  private _shopPromoCodeValidation?: boolean | cdktf.IResolvable; 
  public get shopPromoCodeValidation() {
    return this.getBooleanAttribute('shop_promo_code_validation');
  }
  public set shopPromoCodeValidation(value: boolean | cdktf.IResolvable) {
    this._shopPromoCodeValidation = value;
  }
  public resetShopPromoCodeValidation() {
    this._shopPromoCodeValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopPromoCodeValidationInput() {
    return this._shopPromoCodeValidation;
  }

  // shop_purchase_gift_card - computed: false, optional: true, required: false
  private _shopPurchaseGiftCard?: boolean | cdktf.IResolvable; 
  public get shopPurchaseGiftCard() {
    return this.getBooleanAttribute('shop_purchase_gift_card');
  }
  public set shopPurchaseGiftCard(value: boolean | cdktf.IResolvable) {
    this._shopPurchaseGiftCard = value;
  }
  public resetShopPurchaseGiftCard() {
    this._shopPurchaseGiftCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopPurchaseGiftCardInput() {
    return this._shopPurchaseGiftCard;
  }

  // shop_update_quantity - computed: false, optional: true, required: false
  private _shopUpdateQuantity?: boolean | cdktf.IResolvable; 
  public get shopUpdateQuantity() {
    return this.getBooleanAttribute('shop_update_quantity');
  }
  public set shopUpdateQuantity(value: boolean | cdktf.IResolvable) {
    this._shopUpdateQuantity = value;
  }
  public resetShopUpdateQuantity() {
    this._shopUpdateQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopUpdateQuantityInput() {
    return this._shopUpdateQuantity;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel {
  /**
  * account_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#account_management CdnLoadbalancer#account_management}
  */
  readonly accountManagement?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#authentication CdnLoadbalancer#authentication}
  */
  readonly authentication?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication;
  /**
  * financial_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#financial_services CdnLoadbalancer#financial_services}
  */
  readonly financialServices?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices;
  /**
  * flight block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#flight CdnLoadbalancer#flight}
  */
  readonly flight?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight;
  /**
  * profile_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#profile_management CdnLoadbalancer#profile_management}
  */
  readonly profileManagement?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#search CdnLoadbalancer#search}
  */
  readonly search?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch;
  /**
  * shopping_gift_cards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#shopping_gift_cards CdnLoadbalancer#shopping_gift_cards}
  */
  readonly shoppingGiftCards?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_management: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementToTerraform(struct!.accountManagement),
    authentication: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationToTerraform(struct!.authentication),
    financial_services: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesToTerraform(struct!.financialServices),
    flight: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightToTerraform(struct!.flight),
    profile_management: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementToTerraform(struct!.profileManagement),
    search: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchToTerraform(struct!.search),
    shopping_gift_cards: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsToTerraform(struct!.shoppingGiftCards),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_management: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementToHclTerraform(struct!.accountManagement),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementList",
    },
    authentication: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationList",
    },
    financial_services: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesToHclTerraform(struct!.financialServices),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesList",
    },
    flight: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightToHclTerraform(struct!.flight),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightList",
    },
    profile_management: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementToHclTerraform(struct!.profileManagement),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementList",
    },
    search: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchList",
    },
    shopping_gift_cards: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsToHclTerraform(struct!.shoppingGiftCards),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountManagement = this._accountManagement?.internalValue;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._financialServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.financialServices = this._financialServices?.internalValue;
    }
    if (this._flight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flight = this._flight?.internalValue;
    }
    if (this._profileManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileManagement = this._profileManagement?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    if (this._shoppingGiftCards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shoppingGiftCards = this._shoppingGiftCards?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountManagement.internalValue = undefined;
      this._authentication.internalValue = undefined;
      this._financialServices.internalValue = undefined;
      this._flight.internalValue = undefined;
      this._profileManagement.internalValue = undefined;
      this._search.internalValue = undefined;
      this._shoppingGiftCards.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountManagement.internalValue = value.accountManagement;
      this._authentication.internalValue = value.authentication;
      this._financialServices.internalValue = value.financialServices;
      this._flight.internalValue = value.flight;
      this._profileManagement.internalValue = value.profileManagement;
      this._search.internalValue = value.search;
      this._shoppingGiftCards.internalValue = value.shoppingGiftCards;
    }
  }

  // account_management - computed: false, optional: true, required: false
  private _accountManagement = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementOutputReference(this, "account_management");
  public get accountManagement() {
    return this._accountManagement;
  }
  public putAccountManagement(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement) {
    this._accountManagement.internalValue = value;
  }
  public resetAccountManagement() {
    this._accountManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountManagementInput() {
    return this._accountManagement.internalValue;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // financial_services - computed: false, optional: true, required: false
  private _financialServices = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesOutputReference(this, "financial_services");
  public get financialServices() {
    return this._financialServices;
  }
  public putFinancialServices(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices) {
    this._financialServices.internalValue = value;
  }
  public resetFinancialServices() {
    this._financialServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialServicesInput() {
    return this._financialServices.internalValue;
  }

  // flight - computed: false, optional: true, required: false
  private _flight = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightOutputReference(this, "flight");
  public get flight() {
    return this._flight;
  }
  public putFlight(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight) {
    this._flight.internalValue = value;
  }
  public resetFlight() {
    this._flight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flightInput() {
    return this._flight.internalValue;
  }

  // profile_management - computed: false, optional: true, required: false
  private _profileManagement = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementOutputReference(this, "profile_management");
  public get profileManagement() {
    return this._profileManagement;
  }
  public putProfileManagement(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement) {
    this._profileManagement.internalValue = value;
  }
  public resetProfileManagement() {
    this._profileManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileManagementInput() {
    return this._profileManagement.internalValue;
  }

  // search - computed: false, optional: true, required: false
  private _search = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // shopping_gift_cards - computed: false, optional: true, required: false
  private _shoppingGiftCards = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsOutputReference(this, "shopping_gift_cards");
  public get shoppingGiftCards() {
    return this._shoppingGiftCards;
  }
  public putShoppingGiftCards(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards) {
    this._shoppingGiftCards.internalValue = value;
  }
  public resetShoppingGiftCards() {
    this._shoppingGiftCards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shoppingGiftCardsInput() {
    return this._shoppingGiftCards.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersOutputReference {
    return new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#body CdnLoadbalancer#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#body_hash CdnLoadbalancer#body_hash}
  */
  readonly bodyHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#status CdnLoadbalancer#status}
  */
  readonly status?: string;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    body_hash: cdktf.stringToTerraform(struct!.bodyHash),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_hash: {
      value: cdktf.stringToHclTerraform(struct!.bodyHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._bodyHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyHash = this._bodyHash;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._bodyHash = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._bodyHash = value.bodyHash;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_hash - computed: false, optional: true, required: false
  private _bodyHash?: string; 
  public get bodyHash() {
    return this.getStringAttribute('body_hash');
  }
  public set bodyHash(value: string) {
    this._bodyHash = value;
  }
  public resetBodyHash() {
    this._bodyHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyHashInput() {
    return this._bodyHash;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#auto_type_header_name CdnLoadbalancer#auto_type_header_name}
  */
  readonly autoTypeHeaderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#inference_header_name CdnLoadbalancer#inference_header_name}
  */
  readonly inferenceHeaderName: string;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_type_header_name: cdktf.stringToTerraform(struct!.autoTypeHeaderName),
    inference_header_name: cdktf.stringToTerraform(struct!.inferenceHeaderName),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_type_header_name: {
      value: cdktf.stringToHclTerraform(struct!.autoTypeHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_header_name: {
      value: cdktf.stringToHclTerraform(struct!.inferenceHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoTypeHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTypeHeaderName = this._autoTypeHeaderName;
    }
    if (this._inferenceHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceHeaderName = this._inferenceHeaderName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoTypeHeaderName = undefined;
      this._inferenceHeaderName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoTypeHeaderName = value.autoTypeHeaderName;
      this._inferenceHeaderName = value.inferenceHeaderName;
    }
  }

  // auto_type_header_name - computed: false, optional: false, required: true
  private _autoTypeHeaderName?: string; 
  public get autoTypeHeaderName() {
    return this.getStringAttribute('auto_type_header_name');
  }
  public set autoTypeHeaderName(value: string) {
    this._autoTypeHeaderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTypeHeaderNameInput() {
    return this._autoTypeHeaderName;
  }

  // inference_header_name - computed: false, optional: false, required: true
  private _inferenceHeaderName?: string; 
  public get inferenceHeaderName() {
    return this.getStringAttribute('inference_header_name');
  }
  public set inferenceHeaderName(value: string) {
    this._inferenceHeaderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceHeaderNameInput() {
    return this._inferenceHeaderName;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#no_headers CdnLoadbalancer#no_headers}
  */
  readonly noHeaders?: boolean | cdktf.IResolvable;
  /**
  * append_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#append_headers CdnLoadbalancer#append_headers}
  */
  readonly appendHeaders?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_headers: cdktf.booleanToTerraform(struct!.noHeaders),
    append_headers: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersToTerraform(struct!.appendHeaders),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_headers: {
      value: cdktf.booleanToHclTerraform(struct!.noHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    append_headers: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersToHclTerraform(struct!.appendHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHeaders = this._noHeaders;
    }
    if (this._appendHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendHeaders = this._appendHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noHeaders = undefined;
      this._appendHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noHeaders = value.noHeaders;
      this._appendHeaders.internalValue = value.appendHeaders;
    }
  }

  // no_headers - computed: false, optional: true, required: false
  private _noHeaders?: boolean | cdktf.IResolvable; 
  public get noHeaders() {
    return this.getBooleanAttribute('no_headers');
  }
  public set noHeaders(value: boolean | cdktf.IResolvable) {
    this._noHeaders = value;
  }
  public resetNoHeaders() {
    this._noHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeadersInput() {
    return this._noHeaders;
  }

  // append_headers - computed: false, optional: true, required: false
  private _appendHeaders = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersOutputReference(this, "append_headers");
  public get appendHeaders() {
    return this._appendHeaders;
  }
  public putAppendHeaders(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders) {
    this._appendHeaders.internalValue = value;
  }
  public resetAppendHeaders() {
    this._appendHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendHeadersInput() {
    return this._appendHeaders.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#uri CdnLoadbalancer#uri}
  */
  readonly uri: string;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#none CdnLoadbalancer#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#block CdnLoadbalancer#block}
  */
  readonly block?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock;
  /**
  * flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#flag CdnLoadbalancer#flag}
  */
  readonly flag?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#redirect CdnLoadbalancer#redirect}
  */
  readonly redirect?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.booleanToTerraform(struct!.none),
    block: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockToTerraform(struct!.block),
    flag: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagToTerraform(struct!.flag),
    redirect: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectToTerraform(struct!.redirect),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockList",
    },
    flag: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagToHclTerraform(struct!.flag),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagList",
    },
    redirect: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._flag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flag = this._flag?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._none = undefined;
      this._block.internalValue = undefined;
      this._flag.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._none = value.none;
      this._block.internalValue = value.block;
      this._flag.internalValue = value.flag;
      this._redirect.internalValue = value.redirect;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // block - computed: false, optional: true, required: false
  private _block = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // flag - computed: false, optional: true, required: false
  private _flag = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagOutputReference(this, "flag");
  public get flag() {
    return this._flag;
  }
  public putFlag(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag) {
    this._flag.internalValue = value;
  }
  public resetFlag() {
    this._flag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPathToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPathOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPathToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPathOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsOutputReference {
    return new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItemToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItemOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItemToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItemOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItem;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
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
    item: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItemToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItemOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItemToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItemOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItem;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
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
    item: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersOutputReference {
    return new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#mobile_identifier CdnLoadbalancer#mobile_identifier}
  */
  readonly mobileIdentifier?: string;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#header CdnLoadbalancer#header}
  */
  readonly header?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeader;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaders[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mobile_identifier: cdktf.stringToTerraform(struct!.mobileIdentifier),
    header: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderToTerraform(struct!.header),
    headers: cdktf.listMapper(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersToTerraform, true)(struct!.headers),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileOutputReference | CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mobile_identifier: {
      value: cdktf.stringToHclTerraform(struct!.mobileIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mobileIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileIdentifier = this._mobileIdentifier;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mobileIdentifier = undefined;
      this._header.internalValue = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mobileIdentifier = value.mobileIdentifier;
      this._header.internalValue = value.header;
      this._headers.internalValue = value.headers;
    }
  }

  // mobile_identifier - computed: false, optional: true, required: false
  private _mobileIdentifier?: string; 
  public get mobileIdentifier() {
    return this.getStringAttribute('mobile_identifier');
  }
  public set mobileIdentifier(value: string) {
    this._mobileIdentifier = value;
  }
  public resetMobileIdentifier() {
    this._mobileIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileIdentifierInput() {
    return this._mobileIdentifier;
  }

  // header - computed: false, optional: true, required: false
  private _header = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface CdnLoadbalancerBotDefensePolicyProtectedAppEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_good_bots CdnLoadbalancer#allow_good_bots}
  */
  readonly allowGoodBots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#http_methods CdnLoadbalancer#http_methods}
  */
  readonly httpMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#mitigate_good_bots CdnLoadbalancer#mitigate_good_bots}
  */
  readonly mitigateGoodBots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#mobile CdnLoadbalancer#mobile}
  */
  readonly mobile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#protocol CdnLoadbalancer#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#undefined_flow_label CdnLoadbalancer#undefined_flow_label}
  */
  readonly undefinedFlowLabel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#web CdnLoadbalancer#web}
  */
  readonly web?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain;
  /**
  * flow_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#flow_label CdnLoadbalancer#flow_label}
  */
  readonly flowLabel?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata;
  /**
  * mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#mitigation CdnLoadbalancer#mitigation}
  */
  readonly mitigation: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPath;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams[] | cdktf.IResolvable;
  /**
  * web_mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#web_mobile CdnLoadbalancer#web_mobile}
  */
  readonly webMobile?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile;
}

export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsToTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_good_bots: cdktf.booleanToTerraform(struct!.allowGoodBots),
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpMethods),
    mitigate_good_bots: cdktf.booleanToTerraform(struct!.mitigateGoodBots),
    mobile: cdktf.booleanToTerraform(struct!.mobile),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    undefined_flow_label: cdktf.booleanToTerraform(struct!.undefinedFlowLabel),
    web: cdktf.booleanToTerraform(struct!.web),
    domain: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainToTerraform(struct!.domain),
    flow_label: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelToTerraform(struct!.flowLabel),
    headers: cdktf.listMapper(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersToTerraform, true)(struct!.headers),
    metadata: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataToTerraform(struct!.metadata),
    mitigation: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationToTerraform(struct!.mitigation),
    path: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPathToTerraform(struct!.path),
    query_params: cdktf.listMapper(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsToTerraform, true)(struct!.queryParams),
    web_mobile: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileToTerraform(struct!.webMobile),
  }
}


export function cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyProtectedAppEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_good_bots: {
      value: cdktf.booleanToHclTerraform(struct!.allowGoodBots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mitigate_good_bots: {
      value: cdktf.booleanToHclTerraform(struct!.mitigateGoodBots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mobile: {
      value: cdktf.booleanToHclTerraform(struct!.mobile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    undefined_flow_label: {
      value: cdktf.booleanToHclTerraform(struct!.undefinedFlowLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web: {
      value: cdktf.booleanToHclTerraform(struct!.web),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainList",
    },
    flow_label: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelToHclTerraform(struct!.flowLabel),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersList",
    },
    metadata: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataList",
    },
    mitigation: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationToHclTerraform(struct!.mitigation),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationList",
    },
    path: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPathList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsList",
    },
    web_mobile: {
      value: cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileToHclTerraform(struct!.webMobile),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefensePolicyProtectedAppEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowGoodBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowGoodBots = this._allowGoodBots;
    }
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._httpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods;
    }
    if (this._mitigateGoodBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigateGoodBots = this._mitigateGoodBots;
    }
    if (this._mobile !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobile = this._mobile;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._undefinedFlowLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefinedFlowLabel = this._undefinedFlowLabel;
    }
    if (this._web !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._flowLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLabel = this._flowLabel?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._mitigation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigation = this._mitigation?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    if (this._webMobile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webMobile = this._webMobile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowGoodBots = undefined;
      this._anyDomain = undefined;
      this._httpMethods = undefined;
      this._mitigateGoodBots = undefined;
      this._mobile = undefined;
      this._protocol = undefined;
      this._undefinedFlowLabel = undefined;
      this._web = undefined;
      this._domain.internalValue = undefined;
      this._flowLabel.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._mitigation.internalValue = undefined;
      this._path.internalValue = undefined;
      this._queryParams.internalValue = undefined;
      this._webMobile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowGoodBots = value.allowGoodBots;
      this._anyDomain = value.anyDomain;
      this._httpMethods = value.httpMethods;
      this._mitigateGoodBots = value.mitigateGoodBots;
      this._mobile = value.mobile;
      this._protocol = value.protocol;
      this._undefinedFlowLabel = value.undefinedFlowLabel;
      this._web = value.web;
      this._domain.internalValue = value.domain;
      this._flowLabel.internalValue = value.flowLabel;
      this._headers.internalValue = value.headers;
      this._metadata.internalValue = value.metadata;
      this._mitigation.internalValue = value.mitigation;
      this._path.internalValue = value.path;
      this._queryParams.internalValue = value.queryParams;
      this._webMobile.internalValue = value.webMobile;
    }
  }

  // allow_good_bots - computed: false, optional: true, required: false
  private _allowGoodBots?: boolean | cdktf.IResolvable; 
  public get allowGoodBots() {
    return this.getBooleanAttribute('allow_good_bots');
  }
  public set allowGoodBots(value: boolean | cdktf.IResolvable) {
    this._allowGoodBots = value;
  }
  public resetAllowGoodBots() {
    this._allowGoodBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGoodBotsInput() {
    return this._allowGoodBots;
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // http_methods - computed: false, optional: false, required: true
  private _httpMethods?: string[]; 
  public get httpMethods() {
    return this.getListAttribute('http_methods');
  }
  public set httpMethods(value: string[]) {
    this._httpMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods;
  }

  // mitigate_good_bots - computed: false, optional: true, required: false
  private _mitigateGoodBots?: boolean | cdktf.IResolvable; 
  public get mitigateGoodBots() {
    return this.getBooleanAttribute('mitigate_good_bots');
  }
  public set mitigateGoodBots(value: boolean | cdktf.IResolvable) {
    this._mitigateGoodBots = value;
  }
  public resetMitigateGoodBots() {
    this._mitigateGoodBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigateGoodBotsInput() {
    return this._mitigateGoodBots;
  }

  // mobile - computed: false, optional: true, required: false
  private _mobile?: boolean | cdktf.IResolvable; 
  public get mobile() {
    return this.getBooleanAttribute('mobile');
  }
  public set mobile(value: boolean | cdktf.IResolvable) {
    this._mobile = value;
  }
  public resetMobile() {
    this._mobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // undefined_flow_label - computed: false, optional: true, required: false
  private _undefinedFlowLabel?: boolean | cdktf.IResolvable; 
  public get undefinedFlowLabel() {
    return this.getBooleanAttribute('undefined_flow_label');
  }
  public set undefinedFlowLabel(value: boolean | cdktf.IResolvable) {
    this._undefinedFlowLabel = value;
  }
  public resetUndefinedFlowLabel() {
    this._undefinedFlowLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedFlowLabelInput() {
    return this._undefinedFlowLabel;
  }

  // web - computed: false, optional: true, required: false
  private _web?: boolean | cdktf.IResolvable; 
  public get web() {
    return this.getBooleanAttribute('web');
  }
  public set web(value: boolean | cdktf.IResolvable) {
    this._web = value;
  }
  public resetWeb() {
    this._web = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // flow_label - computed: false, optional: true, required: false
  private _flowLabel = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelOutputReference(this, "flow_label");
  public get flowLabel() {
    return this._flowLabel;
  }
  public putFlowLabel(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel) {
    this._flowLabel.internalValue = value;
  }
  public resetFlowLabel() {
    this._flowLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelInput() {
    return this._flowLabel.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // mitigation - computed: false, optional: false, required: true
  private _mitigation = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationOutputReference(this, "mitigation");
  public get mitigation() {
    return this._mitigation;
  }
  public putMitigation(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation) {
    this._mitigation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationInput() {
    return this._mitigation.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }

  // web_mobile - computed: false, optional: true, required: false
  private _webMobile = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileOutputReference(this, "web_mobile");
  public get webMobile() {
    return this._webMobile;
  }
  public putWebMobile(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile) {
    this._webMobile.internalValue = value;
  }
  public resetWebMobile() {
    this._webMobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webMobileInput() {
    return this._webMobile.internalValue;
  }
}

export class CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefensePolicyProtectedAppEndpoints[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsOutputReference {
    return new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefensePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_js_insert CdnLoadbalancer#disable_js_insert}
  */
  readonly disableJsInsert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_mobile_sdk CdnLoadbalancer#disable_mobile_sdk}
  */
  readonly disableMobileSdk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#javascript_mode CdnLoadbalancer#javascript_mode}
  */
  readonly javascriptMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_download_path CdnLoadbalancer#js_download_path}
  */
  readonly jsDownloadPath?: string;
  /**
  * js_insert_all_pages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_insert_all_pages CdnLoadbalancer#js_insert_all_pages}
  */
  readonly jsInsertAllPages?: CdnLoadbalancerBotDefensePolicyJsInsertAllPages;
  /**
  * js_insert_all_pages_except block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_insert_all_pages_except CdnLoadbalancer#js_insert_all_pages_except}
  */
  readonly jsInsertAllPagesExcept?: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExcept;
  /**
  * js_insertion_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_insertion_rules CdnLoadbalancer#js_insertion_rules}
  */
  readonly jsInsertionRules?: CdnLoadbalancerBotDefensePolicyJsInsertionRules;
  /**
  * mobile_sdk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#mobile_sdk_config CdnLoadbalancer#mobile_sdk_config}
  */
  readonly mobileSdkConfig?: CdnLoadbalancerBotDefensePolicyMobileSdkConfig;
  /**
  * protected_app_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#protected_app_endpoints CdnLoadbalancer#protected_app_endpoints}
  */
  readonly protectedAppEndpoints: CdnLoadbalancerBotDefensePolicyProtectedAppEndpoints[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefensePolicyToTerraform(struct?: CdnLoadbalancerBotDefensePolicyOutputReference | CdnLoadbalancerBotDefensePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_js_insert: cdktf.booleanToTerraform(struct!.disableJsInsert),
    disable_mobile_sdk: cdktf.booleanToTerraform(struct!.disableMobileSdk),
    javascript_mode: cdktf.stringToTerraform(struct!.javascriptMode),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
    js_insert_all_pages: cdnLoadbalancerBotDefensePolicyJsInsertAllPagesToTerraform(struct!.jsInsertAllPages),
    js_insert_all_pages_except: cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptToTerraform(struct!.jsInsertAllPagesExcept),
    js_insertion_rules: cdnLoadbalancerBotDefensePolicyJsInsertionRulesToTerraform(struct!.jsInsertionRules),
    mobile_sdk_config: cdnLoadbalancerBotDefensePolicyMobileSdkConfigToTerraform(struct!.mobileSdkConfig),
    protected_app_endpoints: cdktf.listMapper(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsToTerraform, true)(struct!.protectedAppEndpoints),
  }
}


export function cdnLoadbalancerBotDefensePolicyToHclTerraform(struct?: CdnLoadbalancerBotDefensePolicyOutputReference | CdnLoadbalancerBotDefensePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_js_insert: {
      value: cdktf.booleanToHclTerraform(struct!.disableJsInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_mobile_sdk: {
      value: cdktf.booleanToHclTerraform(struct!.disableMobileSdk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    javascript_mode: {
      value: cdktf.stringToHclTerraform(struct!.javascriptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_insert_all_pages: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertAllPagesToHclTerraform(struct!.jsInsertAllPages),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertAllPagesList",
    },
    js_insert_all_pages_except: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptToHclTerraform(struct!.jsInsertAllPagesExcept),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptList",
    },
    js_insertion_rules: {
      value: cdnLoadbalancerBotDefensePolicyJsInsertionRulesToHclTerraform(struct!.jsInsertionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyJsInsertionRulesList",
    },
    mobile_sdk_config: {
      value: cdnLoadbalancerBotDefensePolicyMobileSdkConfigToHclTerraform(struct!.mobileSdkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyMobileSdkConfigList",
    },
    protected_app_endpoints: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefensePolicyProtectedAppEndpointsToHclTerraform, true)(struct!.protectedAppEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefensePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefensePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableJsInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableJsInsert = this._disableJsInsert;
    }
    if (this._disableMobileSdk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMobileSdk = this._disableMobileSdk;
    }
    if (this._javascriptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptMode = this._javascriptMode;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    if (this._jsInsertAllPages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPages = this._jsInsertAllPages?.internalValue;
    }
    if (this._jsInsertAllPagesExcept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPagesExcept = this._jsInsertAllPagesExcept?.internalValue;
    }
    if (this._jsInsertionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertionRules = this._jsInsertionRules?.internalValue;
    }
    if (this._mobileSdkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileSdkConfig = this._mobileSdkConfig?.internalValue;
    }
    if (this._protectedAppEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedAppEndpoints = this._protectedAppEndpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefensePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableJsInsert = undefined;
      this._disableMobileSdk = undefined;
      this._javascriptMode = undefined;
      this._jsDownloadPath = undefined;
      this._jsInsertAllPages.internalValue = undefined;
      this._jsInsertAllPagesExcept.internalValue = undefined;
      this._jsInsertionRules.internalValue = undefined;
      this._mobileSdkConfig.internalValue = undefined;
      this._protectedAppEndpoints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableJsInsert = value.disableJsInsert;
      this._disableMobileSdk = value.disableMobileSdk;
      this._javascriptMode = value.javascriptMode;
      this._jsDownloadPath = value.jsDownloadPath;
      this._jsInsertAllPages.internalValue = value.jsInsertAllPages;
      this._jsInsertAllPagesExcept.internalValue = value.jsInsertAllPagesExcept;
      this._jsInsertionRules.internalValue = value.jsInsertionRules;
      this._mobileSdkConfig.internalValue = value.mobileSdkConfig;
      this._protectedAppEndpoints.internalValue = value.protectedAppEndpoints;
    }
  }

  // disable_js_insert - computed: false, optional: true, required: false
  private _disableJsInsert?: boolean | cdktf.IResolvable; 
  public get disableJsInsert() {
    return this.getBooleanAttribute('disable_js_insert');
  }
  public set disableJsInsert(value: boolean | cdktf.IResolvable) {
    this._disableJsInsert = value;
  }
  public resetDisableJsInsert() {
    this._disableJsInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableJsInsertInput() {
    return this._disableJsInsert;
  }

  // disable_mobile_sdk - computed: false, optional: true, required: false
  private _disableMobileSdk?: boolean | cdktf.IResolvable; 
  public get disableMobileSdk() {
    return this.getBooleanAttribute('disable_mobile_sdk');
  }
  public set disableMobileSdk(value: boolean | cdktf.IResolvable) {
    this._disableMobileSdk = value;
  }
  public resetDisableMobileSdk() {
    this._disableMobileSdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMobileSdkInput() {
    return this._disableMobileSdk;
  }

  // javascript_mode - computed: false, optional: false, required: true
  private _javascriptMode?: string; 
  public get javascriptMode() {
    return this.getStringAttribute('javascript_mode');
  }
  public set javascriptMode(value: string) {
    this._javascriptMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptModeInput() {
    return this._javascriptMode;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }

  // js_insert_all_pages - computed: false, optional: true, required: false
  private _jsInsertAllPages = new CdnLoadbalancerBotDefensePolicyJsInsertAllPagesOutputReference(this, "js_insert_all_pages");
  public get jsInsertAllPages() {
    return this._jsInsertAllPages;
  }
  public putJsInsertAllPages(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPages) {
    this._jsInsertAllPages.internalValue = value;
  }
  public resetJsInsertAllPages() {
    this._jsInsertAllPages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesInput() {
    return this._jsInsertAllPages.internalValue;
  }

  // js_insert_all_pages_except - computed: false, optional: true, required: false
  private _jsInsertAllPagesExcept = new CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExceptOutputReference(this, "js_insert_all_pages_except");
  public get jsInsertAllPagesExcept() {
    return this._jsInsertAllPagesExcept;
  }
  public putJsInsertAllPagesExcept(value: CdnLoadbalancerBotDefensePolicyJsInsertAllPagesExcept) {
    this._jsInsertAllPagesExcept.internalValue = value;
  }
  public resetJsInsertAllPagesExcept() {
    this._jsInsertAllPagesExcept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesExceptInput() {
    return this._jsInsertAllPagesExcept.internalValue;
  }

  // js_insertion_rules - computed: false, optional: true, required: false
  private _jsInsertionRules = new CdnLoadbalancerBotDefensePolicyJsInsertionRulesOutputReference(this, "js_insertion_rules");
  public get jsInsertionRules() {
    return this._jsInsertionRules;
  }
  public putJsInsertionRules(value: CdnLoadbalancerBotDefensePolicyJsInsertionRules) {
    this._jsInsertionRules.internalValue = value;
  }
  public resetJsInsertionRules() {
    this._jsInsertionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertionRulesInput() {
    return this._jsInsertionRules.internalValue;
  }

  // mobile_sdk_config - computed: false, optional: true, required: false
  private _mobileSdkConfig = new CdnLoadbalancerBotDefensePolicyMobileSdkConfigOutputReference(this, "mobile_sdk_config");
  public get mobileSdkConfig() {
    return this._mobileSdkConfig;
  }
  public putMobileSdkConfig(value: CdnLoadbalancerBotDefensePolicyMobileSdkConfig) {
    this._mobileSdkConfig.internalValue = value;
  }
  public resetMobileSdkConfig() {
    this._mobileSdkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileSdkConfigInput() {
    return this._mobileSdkConfig.internalValue;
  }

  // protected_app_endpoints - computed: false, optional: false, required: true
  private _protectedAppEndpoints = new CdnLoadbalancerBotDefensePolicyProtectedAppEndpointsList(this, "protected_app_endpoints", false);
  public get protectedAppEndpoints() {
    return this._protectedAppEndpoints;
  }
  public putProtectedAppEndpoints(value: CdnLoadbalancerBotDefensePolicyProtectedAppEndpoints[] | cdktf.IResolvable) {
    this._protectedAppEndpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedAppEndpointsInput() {
    return this._protectedAppEndpoints.internalValue;
  }
}
export interface CdnLoadbalancerBotDefense {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_cors_support CdnLoadbalancer#disable_cors_support}
  */
  readonly disableCorsSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enable_cors_support CdnLoadbalancer#enable_cors_support}
  */
  readonly enableCorsSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regional_endpoint CdnLoadbalancer#regional_endpoint}
  */
  readonly regionalEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#timeout CdnLoadbalancer#timeout}
  */
  readonly timeout?: number;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#policy CdnLoadbalancer#policy}
  */
  readonly policy: CdnLoadbalancerBotDefensePolicy;
}

export function cdnLoadbalancerBotDefenseToTerraform(struct?: CdnLoadbalancerBotDefenseOutputReference | CdnLoadbalancerBotDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_cors_support: cdktf.booleanToTerraform(struct!.disableCorsSupport),
    enable_cors_support: cdktf.booleanToTerraform(struct!.enableCorsSupport),
    regional_endpoint: cdktf.stringToTerraform(struct!.regionalEndpoint),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    policy: cdnLoadbalancerBotDefensePolicyToTerraform(struct!.policy),
  }
}


export function cdnLoadbalancerBotDefenseToHclTerraform(struct?: CdnLoadbalancerBotDefenseOutputReference | CdnLoadbalancerBotDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_cors_support: {
      value: cdktf.booleanToHclTerraform(struct!.disableCorsSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_cors_support: {
      value: cdktf.booleanToHclTerraform(struct!.enableCorsSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regional_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.regionalEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy: {
      value: cdnLoadbalancerBotDefensePolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefensePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableCorsSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCorsSupport = this._disableCorsSupport;
    }
    if (this._enableCorsSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCorsSupport = this._enableCorsSupport;
    }
    if (this._regionalEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionalEndpoint = this._regionalEndpoint;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableCorsSupport = undefined;
      this._enableCorsSupport = undefined;
      this._regionalEndpoint = undefined;
      this._timeout = undefined;
      this._policy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableCorsSupport = value.disableCorsSupport;
      this._enableCorsSupport = value.enableCorsSupport;
      this._regionalEndpoint = value.regionalEndpoint;
      this._timeout = value.timeout;
      this._policy.internalValue = value.policy;
    }
  }

  // disable_cors_support - computed: false, optional: true, required: false
  private _disableCorsSupport?: boolean | cdktf.IResolvable; 
  public get disableCorsSupport() {
    return this.getBooleanAttribute('disable_cors_support');
  }
  public set disableCorsSupport(value: boolean | cdktf.IResolvable) {
    this._disableCorsSupport = value;
  }
  public resetDisableCorsSupport() {
    this._disableCorsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCorsSupportInput() {
    return this._disableCorsSupport;
  }

  // enable_cors_support - computed: false, optional: true, required: false
  private _enableCorsSupport?: boolean | cdktf.IResolvable; 
  public get enableCorsSupport() {
    return this.getBooleanAttribute('enable_cors_support');
  }
  public set enableCorsSupport(value: boolean | cdktf.IResolvable) {
    this._enableCorsSupport = value;
  }
  public resetEnableCorsSupport() {
    this._enableCorsSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCorsSupportInput() {
    return this._enableCorsSupport;
  }

  // regional_endpoint - computed: false, optional: false, required: true
  private _regionalEndpoint?: string; 
  public get regionalEndpoint() {
    return this.getStringAttribute('regional_endpoint');
  }
  public set regionalEndpoint(value: string) {
    this._regionalEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalEndpointInput() {
    return this._regionalEndpoint;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new CdnLoadbalancerBotDefensePolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: CdnLoadbalancerBotDefensePolicy) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertAllPages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#javascript_location CdnLoadbalancer#javascript_location}
  */
  readonly javascriptLocation?: string;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertAllPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertAllPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertAllPages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomainToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomainOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomainOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadataOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadataOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPathToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPathOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPathOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPath;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStructToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomainToTerraform(struct!.domain),
    metadata: cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStructToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomainList",
    },
    metadata: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadataList",
    },
    path: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStructOutputReference {
    return new CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExcept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#javascript_location CdnLoadbalancer#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exclude_list CdnLoadbalancer#exclude_list}
  */
  readonly excludeList?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    exclude_list: cdktf.listMapper(cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExcept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExcept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._excludeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomainToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomainOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomainToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomainOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadataToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadataOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadataToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadataOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPathToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPathOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPathToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPathOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPath;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStructToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomainToTerraform(struct!.domain),
    metadata: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStructToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomainList",
    },
    metadata: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadataList",
    },
    path: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStructOutputReference {
    return new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomainToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomainOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomainToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomainOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadataToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadataOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadataToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadataOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPathToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPathOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPathToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPathOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#javascript_location CdnLoadbalancer#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPath;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    domain: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomainToTerraform(struct!.domain),
    metadata: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomainList",
    },
    metadata: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadataList",
    },
    path: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._javascriptLocation = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._javascriptLocation = value.javascriptLocation;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesOutputReference {
    return new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedJsInsertionRules {
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exclude_list CdnLoadbalancer#exclude_list}
  */
  readonly excludeList?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#rules CdnLoadbalancer#rules}
  */
  readonly rules: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStructToTerraform, true)(struct!.excludeList),
    rules: cdktf.listMapper(cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesOutputReference | CdnLoadbalancerBotDefenseAdvancedJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStructList",
    },
    rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedJsInsertionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeList.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeList.internalValue = value.excludeList;
      this._rules.internalValue = value.rules;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedMobile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerBotDefenseAdvancedMobileToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedMobileOutputReference | CdnLoadbalancerBotDefenseAdvancedMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedMobileToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedMobileOutputReference | CdnLoadbalancerBotDefenseAdvancedMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItemToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItemOutputReference | CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItemToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItemOutputReference | CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItem;
}

export function cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
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
    item: {
      value: cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersOutputReference {
    return new CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifier {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierOutputReference | CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersToTerraform, true)(struct!.headers),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierOutputReference | CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedMobileSdkConfig {
  /**
  * mobile_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#mobile_identifier CdnLoadbalancer#mobile_identifier}
  */
  readonly mobileIdentifier?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifier;
}

export function cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigOutputReference | CdnLoadbalancerBotDefenseAdvancedMobileSdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mobile_identifier: cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierToTerraform(struct!.mobileIdentifier),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigOutputReference | CdnLoadbalancerBotDefenseAdvancedMobileSdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mobile_identifier: {
      value: cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierToHclTerraform(struct!.mobileIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedMobileSdkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mobileIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileIdentifier = this._mobileIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mobileIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mobileIdentifier.internalValue = value.mobileIdentifier;
    }
  }

  // mobile_identifier - computed: false, optional: true, required: false
  private _mobileIdentifier = new CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifierOutputReference(this, "mobile_identifier");
  public get mobileIdentifier() {
    return this._mobileIdentifier;
  }
  public putMobileIdentifier(value: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigMobileIdentifier) {
    this._mobileIdentifier.internalValue = value;
  }
  public resetMobileIdentifier() {
    this._mobileIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileIdentifierInput() {
    return this._mobileIdentifier.internalValue;
  }
}
export interface CdnLoadbalancerBotDefenseAdvancedWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerBotDefenseAdvancedWebToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedWebOutputReference | CdnLoadbalancerBotDefenseAdvancedWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedWebToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedWebOutputReference | CdnLoadbalancerBotDefenseAdvancedWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvancedWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvancedWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerBotDefenseAdvanced {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_js_insert CdnLoadbalancer#disable_js_insert}
  */
  readonly disableJsInsert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_mobile_sdk CdnLoadbalancer#disable_mobile_sdk}
  */
  readonly disableMobileSdk?: boolean | cdktf.IResolvable;
  /**
  * js_insert_all_pages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_insert_all_pages CdnLoadbalancer#js_insert_all_pages}
  */
  readonly jsInsertAllPages?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPages;
  /**
  * js_insert_all_pages_except block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_insert_all_pages_except CdnLoadbalancer#js_insert_all_pages_except}
  */
  readonly jsInsertAllPagesExcept?: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExcept;
  /**
  * js_insertion_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_insertion_rules CdnLoadbalancer#js_insertion_rules}
  */
  readonly jsInsertionRules?: CdnLoadbalancerBotDefenseAdvancedJsInsertionRules;
  /**
  * mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#mobile CdnLoadbalancer#mobile}
  */
  readonly mobile?: CdnLoadbalancerBotDefenseAdvancedMobile;
  /**
  * mobile_sdk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#mobile_sdk_config CdnLoadbalancer#mobile_sdk_config}
  */
  readonly mobileSdkConfig?: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfig;
  /**
  * web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#web CdnLoadbalancer#web}
  */
  readonly web?: CdnLoadbalancerBotDefenseAdvancedWeb;
}

export function cdnLoadbalancerBotDefenseAdvancedToTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedOutputReference | CdnLoadbalancerBotDefenseAdvanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_js_insert: cdktf.booleanToTerraform(struct!.disableJsInsert),
    disable_mobile_sdk: cdktf.booleanToTerraform(struct!.disableMobileSdk),
    js_insert_all_pages: cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesToTerraform(struct!.jsInsertAllPages),
    js_insert_all_pages_except: cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptToTerraform(struct!.jsInsertAllPagesExcept),
    js_insertion_rules: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesToTerraform(struct!.jsInsertionRules),
    mobile: cdnLoadbalancerBotDefenseAdvancedMobileToTerraform(struct!.mobile),
    mobile_sdk_config: cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigToTerraform(struct!.mobileSdkConfig),
    web: cdnLoadbalancerBotDefenseAdvancedWebToTerraform(struct!.web),
  }
}


export function cdnLoadbalancerBotDefenseAdvancedToHclTerraform(struct?: CdnLoadbalancerBotDefenseAdvancedOutputReference | CdnLoadbalancerBotDefenseAdvanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_js_insert: {
      value: cdktf.booleanToHclTerraform(struct!.disableJsInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_mobile_sdk: {
      value: cdktf.booleanToHclTerraform(struct!.disableMobileSdk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    js_insert_all_pages: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesToHclTerraform(struct!.jsInsertAllPages),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesList",
    },
    js_insert_all_pages_except: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptToHclTerraform(struct!.jsInsertAllPagesExcept),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptList",
    },
    js_insertion_rules: {
      value: cdnLoadbalancerBotDefenseAdvancedJsInsertionRulesToHclTerraform(struct!.jsInsertionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesList",
    },
    mobile: {
      value: cdnLoadbalancerBotDefenseAdvancedMobileToHclTerraform(struct!.mobile),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedMobileList",
    },
    mobile_sdk_config: {
      value: cdnLoadbalancerBotDefenseAdvancedMobileSdkConfigToHclTerraform(struct!.mobileSdkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigList",
    },
    web: {
      value: cdnLoadbalancerBotDefenseAdvancedWebToHclTerraform(struct!.web),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBotDefenseAdvancedWebList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBotDefenseAdvancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBotDefenseAdvanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableJsInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableJsInsert = this._disableJsInsert;
    }
    if (this._disableMobileSdk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMobileSdk = this._disableMobileSdk;
    }
    if (this._jsInsertAllPages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPages = this._jsInsertAllPages?.internalValue;
    }
    if (this._jsInsertAllPagesExcept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPagesExcept = this._jsInsertAllPagesExcept?.internalValue;
    }
    if (this._jsInsertionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertionRules = this._jsInsertionRules?.internalValue;
    }
    if (this._mobile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobile = this._mobile?.internalValue;
    }
    if (this._mobileSdkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileSdkConfig = this._mobileSdkConfig?.internalValue;
    }
    if (this._web?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBotDefenseAdvanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableJsInsert = undefined;
      this._disableMobileSdk = undefined;
      this._jsInsertAllPages.internalValue = undefined;
      this._jsInsertAllPagesExcept.internalValue = undefined;
      this._jsInsertionRules.internalValue = undefined;
      this._mobile.internalValue = undefined;
      this._mobileSdkConfig.internalValue = undefined;
      this._web.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableJsInsert = value.disableJsInsert;
      this._disableMobileSdk = value.disableMobileSdk;
      this._jsInsertAllPages.internalValue = value.jsInsertAllPages;
      this._jsInsertAllPagesExcept.internalValue = value.jsInsertAllPagesExcept;
      this._jsInsertionRules.internalValue = value.jsInsertionRules;
      this._mobile.internalValue = value.mobile;
      this._mobileSdkConfig.internalValue = value.mobileSdkConfig;
      this._web.internalValue = value.web;
    }
  }

  // disable_js_insert - computed: false, optional: true, required: false
  private _disableJsInsert?: boolean | cdktf.IResolvable; 
  public get disableJsInsert() {
    return this.getBooleanAttribute('disable_js_insert');
  }
  public set disableJsInsert(value: boolean | cdktf.IResolvable) {
    this._disableJsInsert = value;
  }
  public resetDisableJsInsert() {
    this._disableJsInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableJsInsertInput() {
    return this._disableJsInsert;
  }

  // disable_mobile_sdk - computed: false, optional: true, required: false
  private _disableMobileSdk?: boolean | cdktf.IResolvable; 
  public get disableMobileSdk() {
    return this.getBooleanAttribute('disable_mobile_sdk');
  }
  public set disableMobileSdk(value: boolean | cdktf.IResolvable) {
    this._disableMobileSdk = value;
  }
  public resetDisableMobileSdk() {
    this._disableMobileSdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMobileSdkInput() {
    return this._disableMobileSdk;
  }

  // js_insert_all_pages - computed: false, optional: true, required: false
  private _jsInsertAllPages = new CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesOutputReference(this, "js_insert_all_pages");
  public get jsInsertAllPages() {
    return this._jsInsertAllPages;
  }
  public putJsInsertAllPages(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPages) {
    this._jsInsertAllPages.internalValue = value;
  }
  public resetJsInsertAllPages() {
    this._jsInsertAllPages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesInput() {
    return this._jsInsertAllPages.internalValue;
  }

  // js_insert_all_pages_except - computed: false, optional: true, required: false
  private _jsInsertAllPagesExcept = new CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExceptOutputReference(this, "js_insert_all_pages_except");
  public get jsInsertAllPagesExcept() {
    return this._jsInsertAllPagesExcept;
  }
  public putJsInsertAllPagesExcept(value: CdnLoadbalancerBotDefenseAdvancedJsInsertAllPagesExcept) {
    this._jsInsertAllPagesExcept.internalValue = value;
  }
  public resetJsInsertAllPagesExcept() {
    this._jsInsertAllPagesExcept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesExceptInput() {
    return this._jsInsertAllPagesExcept.internalValue;
  }

  // js_insertion_rules - computed: false, optional: true, required: false
  private _jsInsertionRules = new CdnLoadbalancerBotDefenseAdvancedJsInsertionRulesOutputReference(this, "js_insertion_rules");
  public get jsInsertionRules() {
    return this._jsInsertionRules;
  }
  public putJsInsertionRules(value: CdnLoadbalancerBotDefenseAdvancedJsInsertionRules) {
    this._jsInsertionRules.internalValue = value;
  }
  public resetJsInsertionRules() {
    this._jsInsertionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertionRulesInput() {
    return this._jsInsertionRules.internalValue;
  }

  // mobile - computed: false, optional: true, required: false
  private _mobile = new CdnLoadbalancerBotDefenseAdvancedMobileOutputReference(this, "mobile");
  public get mobile() {
    return this._mobile;
  }
  public putMobile(value: CdnLoadbalancerBotDefenseAdvancedMobile) {
    this._mobile.internalValue = value;
  }
  public resetMobile() {
    this._mobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile.internalValue;
  }

  // mobile_sdk_config - computed: false, optional: true, required: false
  private _mobileSdkConfig = new CdnLoadbalancerBotDefenseAdvancedMobileSdkConfigOutputReference(this, "mobile_sdk_config");
  public get mobileSdkConfig() {
    return this._mobileSdkConfig;
  }
  public putMobileSdkConfig(value: CdnLoadbalancerBotDefenseAdvancedMobileSdkConfig) {
    this._mobileSdkConfig.internalValue = value;
  }
  public resetMobileSdkConfig() {
    this._mobileSdkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileSdkConfigInput() {
    return this._mobileSdkConfig.internalValue;
  }

  // web - computed: false, optional: true, required: false
  private _web = new CdnLoadbalancerBotDefenseAdvancedWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
  public putWeb(value: CdnLoadbalancerBotDefenseAdvancedWeb) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }
}
export interface CdnLoadbalancerCacheRulesEligibleForCacheHostnameUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerCacheRulesEligibleForCacheHostnameUriToTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheHostnameUriOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheHostnameUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerCacheRulesEligibleForCacheHostnameUriToHclTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheHostnameUriOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheHostnameUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesEligibleForCacheHostnameUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesEligibleForCacheHostnameUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesEligibleForCacheHostnameUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUriToTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUriOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUriToHclTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUriOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriToTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriToHclTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQueryToTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQueryOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQueryToHclTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQueryOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUriToTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUriToHclTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUri {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_override CdnLoadbalancer#cache_override}
  */
  readonly cacheOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ignore_response_cookie CdnLoadbalancer#ignore_response_cookie}
  */
  readonly ignoreResponseCookie?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUriToTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_override: cdktf.booleanToTerraform(struct!.cacheOverride),
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
    ignore_response_cookie: cdktf.booleanToTerraform(struct!.ignoreResponseCookie),
  }
}


export function cdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUriToHclTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference | CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_override: {
      value: cdktf.booleanToHclTerraform(struct!.cacheOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_response_cookie: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResponseCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheOverride = this._cacheOverride;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._ignoreResponseCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResponseCookie = this._ignoreResponseCookie;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheOverride = undefined;
      this._cacheTtl = undefined;
      this._ignoreResponseCookie = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheOverride = value.cacheOverride;
      this._cacheTtl = value.cacheTtl;
      this._ignoreResponseCookie = value.ignoreResponseCookie;
    }
  }

  // cache_override - computed: false, optional: true, required: false
  private _cacheOverride?: boolean | cdktf.IResolvable; 
  public get cacheOverride() {
    return this.getBooleanAttribute('cache_override');
  }
  public set cacheOverride(value: boolean | cdktf.IResolvable) {
    this._cacheOverride = value;
  }
  public resetCacheOverride() {
    this._cacheOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheOverrideInput() {
    return this._cacheOverride;
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // ignore_response_cookie - computed: false, optional: true, required: false
  private _ignoreResponseCookie?: boolean | cdktf.IResolvable; 
  public get ignoreResponseCookie() {
    return this.getBooleanAttribute('ignore_response_cookie');
  }
  public set ignoreResponseCookie(value: boolean | cdktf.IResolvable) {
    this._ignoreResponseCookie = value;
  }
  public resetIgnoreResponseCookie() {
    this._ignoreResponseCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResponseCookieInput() {
    return this._ignoreResponseCookie;
  }
}
export interface CdnLoadbalancerCacheRulesEligibleForCache {
  /**
  * hostname_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#hostname_uri CdnLoadbalancer#hostname_uri}
  */
  readonly hostnameUri?: CdnLoadbalancerCacheRulesEligibleForCacheHostnameUri;
  /**
  * scheme_hostname_request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#scheme_hostname_request_uri CdnLoadbalancer#scheme_hostname_request_uri}
  */
  readonly schemeHostnameRequestUri?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUri;
  /**
  * scheme_hostname_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#scheme_hostname_uri CdnLoadbalancer#scheme_hostname_uri}
  */
  readonly schemeHostnameUri?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUri;
  /**
  * scheme_hostname_uri_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#scheme_hostname_uri_query CdnLoadbalancer#scheme_hostname_uri_query}
  */
  readonly schemeHostnameUriQuery?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQuery;
  /**
  * scheme_proxy_host_request_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#scheme_proxy_host_request_uri CdnLoadbalancer#scheme_proxy_host_request_uri}
  */
  readonly schemeProxyHostRequestUri?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUri;
  /**
  * scheme_proxy_host_uri block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#scheme_proxy_host_uri CdnLoadbalancer#scheme_proxy_host_uri}
  */
  readonly schemeProxyHostUri?: CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUri;
}

export function cdnLoadbalancerCacheRulesEligibleForCacheToTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheOutputReference | CdnLoadbalancerCacheRulesEligibleForCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname_uri: cdnLoadbalancerCacheRulesEligibleForCacheHostnameUriToTerraform(struct!.hostnameUri),
    scheme_hostname_request_uri: cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUriToTerraform(struct!.schemeHostnameRequestUri),
    scheme_hostname_uri: cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriToTerraform(struct!.schemeHostnameUri),
    scheme_hostname_uri_query: cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQueryToTerraform(struct!.schemeHostnameUriQuery),
    scheme_proxy_host_request_uri: cdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUriToTerraform(struct!.schemeProxyHostRequestUri),
    scheme_proxy_host_uri: cdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUriToTerraform(struct!.schemeProxyHostUri),
  }
}


export function cdnLoadbalancerCacheRulesEligibleForCacheToHclTerraform(struct?: CdnLoadbalancerCacheRulesEligibleForCacheOutputReference | CdnLoadbalancerCacheRulesEligibleForCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname_uri: {
      value: cdnLoadbalancerCacheRulesEligibleForCacheHostnameUriToHclTerraform(struct!.hostnameUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesEligibleForCacheHostnameUriList",
    },
    scheme_hostname_request_uri: {
      value: cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUriToHclTerraform(struct!.schemeHostnameRequestUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUriList",
    },
    scheme_hostname_uri: {
      value: cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriToHclTerraform(struct!.schemeHostnameUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriList",
    },
    scheme_hostname_uri_query: {
      value: cdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQueryToHclTerraform(struct!.schemeHostnameUriQuery),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQueryList",
    },
    scheme_proxy_host_request_uri: {
      value: cdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUriToHclTerraform(struct!.schemeProxyHostRequestUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUriList",
    },
    scheme_proxy_host_uri: {
      value: cdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUriToHclTerraform(struct!.schemeProxyHostUri),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUriList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesEligibleForCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesEligibleForCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnameUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnameUri = this._hostnameUri?.internalValue;
    }
    if (this._schemeHostnameRequestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeHostnameRequestUri = this._schemeHostnameRequestUri?.internalValue;
    }
    if (this._schemeHostnameUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeHostnameUri = this._schemeHostnameUri?.internalValue;
    }
    if (this._schemeHostnameUriQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeHostnameUriQuery = this._schemeHostnameUriQuery?.internalValue;
    }
    if (this._schemeProxyHostRequestUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeProxyHostRequestUri = this._schemeProxyHostRequestUri?.internalValue;
    }
    if (this._schemeProxyHostUri?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemeProxyHostUri = this._schemeProxyHostUri?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesEligibleForCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostnameUri.internalValue = undefined;
      this._schemeHostnameRequestUri.internalValue = undefined;
      this._schemeHostnameUri.internalValue = undefined;
      this._schemeHostnameUriQuery.internalValue = undefined;
      this._schemeProxyHostRequestUri.internalValue = undefined;
      this._schemeProxyHostUri.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostnameUri.internalValue = value.hostnameUri;
      this._schemeHostnameRequestUri.internalValue = value.schemeHostnameRequestUri;
      this._schemeHostnameUri.internalValue = value.schemeHostnameUri;
      this._schemeHostnameUriQuery.internalValue = value.schemeHostnameUriQuery;
      this._schemeProxyHostRequestUri.internalValue = value.schemeProxyHostRequestUri;
      this._schemeProxyHostUri.internalValue = value.schemeProxyHostUri;
    }
  }

  // hostname_uri - computed: false, optional: true, required: false
  private _hostnameUri = new CdnLoadbalancerCacheRulesEligibleForCacheHostnameUriOutputReference(this, "hostname_uri");
  public get hostnameUri() {
    return this._hostnameUri;
  }
  public putHostnameUri(value: CdnLoadbalancerCacheRulesEligibleForCacheHostnameUri) {
    this._hostnameUri.internalValue = value;
  }
  public resetHostnameUri() {
    this._hostnameUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameUriInput() {
    return this._hostnameUri.internalValue;
  }

  // scheme_hostname_request_uri - computed: false, optional: true, required: false
  private _schemeHostnameRequestUri = new CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUriOutputReference(this, "scheme_hostname_request_uri");
  public get schemeHostnameRequestUri() {
    return this._schemeHostnameRequestUri;
  }
  public putSchemeHostnameRequestUri(value: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameRequestUri) {
    this._schemeHostnameRequestUri.internalValue = value;
  }
  public resetSchemeHostnameRequestUri() {
    this._schemeHostnameRequestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeHostnameRequestUriInput() {
    return this._schemeHostnameRequestUri.internalValue;
  }

  // scheme_hostname_uri - computed: false, optional: true, required: false
  private _schemeHostnameUri = new CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriOutputReference(this, "scheme_hostname_uri");
  public get schemeHostnameUri() {
    return this._schemeHostnameUri;
  }
  public putSchemeHostnameUri(value: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUri) {
    this._schemeHostnameUri.internalValue = value;
  }
  public resetSchemeHostnameUri() {
    this._schemeHostnameUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeHostnameUriInput() {
    return this._schemeHostnameUri.internalValue;
  }

  // scheme_hostname_uri_query - computed: false, optional: true, required: false
  private _schemeHostnameUriQuery = new CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQueryOutputReference(this, "scheme_hostname_uri_query");
  public get schemeHostnameUriQuery() {
    return this._schemeHostnameUriQuery;
  }
  public putSchemeHostnameUriQuery(value: CdnLoadbalancerCacheRulesEligibleForCacheSchemeHostnameUriQuery) {
    this._schemeHostnameUriQuery.internalValue = value;
  }
  public resetSchemeHostnameUriQuery() {
    this._schemeHostnameUriQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeHostnameUriQueryInput() {
    return this._schemeHostnameUriQuery.internalValue;
  }

  // scheme_proxy_host_request_uri - computed: false, optional: true, required: false
  private _schemeProxyHostRequestUri = new CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUriOutputReference(this, "scheme_proxy_host_request_uri");
  public get schemeProxyHostRequestUri() {
    return this._schemeProxyHostRequestUri;
  }
  public putSchemeProxyHostRequestUri(value: CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostRequestUri) {
    this._schemeProxyHostRequestUri.internalValue = value;
  }
  public resetSchemeProxyHostRequestUri() {
    this._schemeProxyHostRequestUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeProxyHostRequestUriInput() {
    return this._schemeProxyHostRequestUri.internalValue;
  }

  // scheme_proxy_host_uri - computed: false, optional: true, required: false
  private _schemeProxyHostUri = new CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUriOutputReference(this, "scheme_proxy_host_uri");
  public get schemeProxyHostUri() {
    return this._schemeProxyHostUri;
  }
  public putSchemeProxyHostUri(value: CdnLoadbalancerCacheRulesEligibleForCacheSchemeProxyHostUri) {
    this._schemeProxyHostUri.internalValue = value;
  }
  public resetSchemeProxyHostUri() {
    this._schemeProxyHostUri.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeProxyHostUriInput() {
    return this._schemeProxyHostUri.internalValue;
  }
}
export interface CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#contains CdnLoadbalancer#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_contain CdnLoadbalancer#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_end_with CdnLoadbalancer#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_equal CdnLoadbalancer#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_start_with CdnLoadbalancer#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#endswith CdnLoadbalancer#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#equals CdnLoadbalancer#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#match_regex CdnLoadbalancer#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#startswith CdnLoadbalancer#startswith}
  */
  readonly startswith?: string;
}

export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference | CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToHclTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference | CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#operator CdnLoadbalancer#operator}
  */
  readonly operator?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator;
}

export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToTerraform(struct!.operator),
  }
}


export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToHclTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator.internalValue = value.operator;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOutputReference {
    return new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#contains CdnLoadbalancer#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_contain CdnLoadbalancer#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_end_with CdnLoadbalancer#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_equal CdnLoadbalancer#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_start_with CdnLoadbalancer#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#endswith CdnLoadbalancer#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#equals CdnLoadbalancer#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#match_regex CdnLoadbalancer#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#startswith CdnLoadbalancer#startswith}
  */
  readonly startswith?: string;
}

export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference | CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToHclTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference | CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#operator CdnLoadbalancer#operator}
  */
  readonly operator?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator;
}

export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToTerraform(struct!.operator),
  }
}


export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToHclTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator.internalValue = value.operator;
    }
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

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOutputReference {
    return new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#contains CdnLoadbalancer#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_contain CdnLoadbalancer#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_end_with CdnLoadbalancer#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_equal CdnLoadbalancer#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_start_with CdnLoadbalancer#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#endswith CdnLoadbalancer#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#equals CdnLoadbalancer#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#match_regex CdnLoadbalancer#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#startswith CdnLoadbalancer#startswith}
  */
  readonly startswith?: string;
}

export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference | CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToHclTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference | CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatch {
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#operator CdnLoadbalancer#operator}
  */
  readonly operator?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator;
}

export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference | CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToTerraform(struct!.operator),
  }
}


export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToHclTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference | CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator.internalValue = value.operator;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}
export interface CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#contains CdnLoadbalancer#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_contain CdnLoadbalancer#does_not_contain}
  */
  readonly doesNotContain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_end_with CdnLoadbalancer#does_not_end_with}
  */
  readonly doesNotEndWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_equal CdnLoadbalancer#does_not_equal}
  */
  readonly doesNotEqual?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#does_not_start_with CdnLoadbalancer#does_not_start_with}
  */
  readonly doesNotStartWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#endswith CdnLoadbalancer#endswith}
  */
  readonly endswith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#equals CdnLoadbalancer#equals}
  */
  readonly equalTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#match_regex CdnLoadbalancer#match_regex}
  */
  readonly matchRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#startswith CdnLoadbalancer#startswith}
  */
  readonly startswith?: string;
}

export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference | CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contains: cdktf.stringToTerraform(struct!.contains),
    does_not_contain: cdktf.stringToTerraform(struct!.doesNotContain),
    does_not_end_with: cdktf.stringToTerraform(struct!.doesNotEndWith),
    does_not_equal: cdktf.stringToTerraform(struct!.doesNotEqual),
    does_not_start_with: cdktf.stringToTerraform(struct!.doesNotStartWith),
    endswith: cdktf.stringToTerraform(struct!.endswith),
    equals: cdktf.stringToTerraform(struct!.equalTo),
    match_regex: cdktf.stringToTerraform(struct!.matchRegex),
    startswith: cdktf.stringToTerraform(struct!.startswith),
  }
}


export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToHclTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference | CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_contain: {
      value: cdktf.stringToHclTerraform(struct!.doesNotContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_end_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEndWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_equal: {
      value: cdktf.stringToHclTerraform(struct!.doesNotEqual),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    does_not_start_with: {
      value: cdktf.stringToHclTerraform(struct!.doesNotStartWith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endswith: {
      value: cdktf.stringToHclTerraform(struct!.endswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    equals: {
      value: cdktf.stringToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_regex: {
      value: cdktf.stringToHclTerraform(struct!.matchRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    startswith: {
      value: cdktf.stringToHclTerraform(struct!.startswith),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._doesNotContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotContain = this._doesNotContain;
    }
    if (this._doesNotEndWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEndWith = this._doesNotEndWith;
    }
    if (this._doesNotEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotEqual = this._doesNotEqual;
    }
    if (this._doesNotStartWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.doesNotStartWith = this._doesNotStartWith;
    }
    if (this._endswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.endswith = this._endswith;
    }
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    if (this._matchRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchRegex = this._matchRegex;
    }
    if (this._startswith !== undefined) {
      hasAnyValues = true;
      internalValueResult.startswith = this._startswith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contains = undefined;
      this._doesNotContain = undefined;
      this._doesNotEndWith = undefined;
      this._doesNotEqual = undefined;
      this._doesNotStartWith = undefined;
      this._endswith = undefined;
      this._equals = undefined;
      this._matchRegex = undefined;
      this._startswith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contains = value.contains;
      this._doesNotContain = value.doesNotContain;
      this._doesNotEndWith = value.doesNotEndWith;
      this._doesNotEqual = value.doesNotEqual;
      this._doesNotStartWith = value.doesNotStartWith;
      this._endswith = value.endswith;
      this._equals = value.equalTo;
      this._matchRegex = value.matchRegex;
      this._startswith = value.startswith;
    }
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // does_not_contain - computed: false, optional: true, required: false
  private _doesNotContain?: string; 
  public get doesNotContain() {
    return this.getStringAttribute('does_not_contain');
  }
  public set doesNotContain(value: string) {
    this._doesNotContain = value;
  }
  public resetDoesNotContain() {
    this._doesNotContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotContainInput() {
    return this._doesNotContain;
  }

  // does_not_end_with - computed: false, optional: true, required: false
  private _doesNotEndWith?: string; 
  public get doesNotEndWith() {
    return this.getStringAttribute('does_not_end_with');
  }
  public set doesNotEndWith(value: string) {
    this._doesNotEndWith = value;
  }
  public resetDoesNotEndWith() {
    this._doesNotEndWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEndWithInput() {
    return this._doesNotEndWith;
  }

  // does_not_equal - computed: false, optional: true, required: false
  private _doesNotEqual?: string; 
  public get doesNotEqual() {
    return this.getStringAttribute('does_not_equal');
  }
  public set doesNotEqual(value: string) {
    this._doesNotEqual = value;
  }
  public resetDoesNotEqual() {
    this._doesNotEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotEqualInput() {
    return this._doesNotEqual;
  }

  // does_not_start_with - computed: false, optional: true, required: false
  private _doesNotStartWith?: string; 
  public get doesNotStartWith() {
    return this.getStringAttribute('does_not_start_with');
  }
  public set doesNotStartWith(value: string) {
    this._doesNotStartWith = value;
  }
  public resetDoesNotStartWith() {
    this._doesNotStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doesNotStartWithInput() {
    return this._doesNotStartWith;
  }

  // endswith - computed: false, optional: true, required: false
  private _endswith?: string; 
  public get endswith() {
    return this.getStringAttribute('endswith');
  }
  public set endswith(value: string) {
    this._endswith = value;
  }
  public resetEndswith() {
    this._endswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endswithInput() {
    return this._endswith;
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: string; 
  public get equalTo() {
    return this.getStringAttribute('equals');
  }
  public set equalTo(value: string) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }

  // match_regex - computed: false, optional: true, required: false
  private _matchRegex?: string; 
  public get matchRegex() {
    return this.getStringAttribute('match_regex');
  }
  public set matchRegex(value: string) {
    this._matchRegex = value;
  }
  public resetMatchRegex() {
    this._matchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRegexInput() {
    return this._matchRegex;
  }

  // startswith - computed: false, optional: true, required: false
  private _startswith?: string; 
  public get startswith() {
    return this.getStringAttribute('startswith');
  }
  public set startswith(value: string) {
    this._startswith = value;
  }
  public resetStartswith() {
    this._startswith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startswithInput() {
    return this._startswith;
  }
}
export interface CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#operator CdnLoadbalancer#operator}
  */
  readonly operator?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator;
}

export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToTerraform(struct!.operator),
  }
}


export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToHclTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable): any {
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
    operator: {
      value: cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorToHclTerraform(struct!.operator),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator.internalValue = value.operator;
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

  // operator - computed: false, optional: true, required: false
  private _operator = new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperatorOutputReference(this, "operator");
  public get operator() {
    return this._operator;
  }
  public putOperator(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOperator) {
    this._operator.internalValue = value;
  }
  public resetOperator() {
    this._operator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator.internalValue;
  }
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOutputReference {
    return new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpression {
  /**
  * cache_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_headers CdnLoadbalancer#cache_headers}
  */
  readonly cacheHeaders?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders[] | cdktf.IResolvable;
  /**
  * cookie_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_matcher CdnLoadbalancer#cookie_matcher}
  */
  readonly cookieMatcher?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher[] | cdktf.IResolvable;
  /**
  * path_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path_match CdnLoadbalancer#path_match}
  */
  readonly pathMatch?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatch;
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_parameters CdnLoadbalancer#query_parameters}
  */
  readonly queryParameters?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters[] | cdktf.IResolvable;
}

export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionToTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_headers: cdktf.listMapper(cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToTerraform, true)(struct!.cacheHeaders),
    cookie_matcher: cdktf.listMapper(cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToTerraform, true)(struct!.cookieMatcher),
    path_match: cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToTerraform(struct!.pathMatch),
    query_parameters: cdktf.listMapper(cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToTerraform, true)(struct!.queryParameters),
  }
}


export function cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionToHclTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersToHclTerraform, true)(struct!.cacheHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersList",
    },
    cookie_matcher: {
      value: cdktf.listMapperHcl(cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherToHclTerraform, true)(struct!.cookieMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherList",
    },
    path_match: {
      value: cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchToHclTerraform(struct!.pathMatch),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchList",
    },
    query_parameters: {
      value: cdktf.listMapperHcl(cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersToHclTerraform, true)(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheHeaders = this._cacheHeaders?.internalValue;
    }
    if (this._cookieMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatcher = this._cookieMatcher?.internalValue;
    }
    if (this._pathMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMatch = this._pathMatch?.internalValue;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheHeaders.internalValue = undefined;
      this._cookieMatcher.internalValue = undefined;
      this._pathMatch.internalValue = undefined;
      this._queryParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheHeaders.internalValue = value.cacheHeaders;
      this._cookieMatcher.internalValue = value.cookieMatcher;
      this._pathMatch.internalValue = value.pathMatch;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // cache_headers - computed: false, optional: true, required: false
  private _cacheHeaders = new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeadersList(this, "cache_headers", false);
  public get cacheHeaders() {
    return this._cacheHeaders;
  }
  public putCacheHeaders(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCacheHeaders[] | cdktf.IResolvable) {
    this._cacheHeaders.internalValue = value;
  }
  public resetCacheHeaders() {
    this._cacheHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheHeadersInput() {
    return this._cacheHeaders.internalValue;
  }

  // cookie_matcher - computed: false, optional: true, required: false
  private _cookieMatcher = new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcherList(this, "cookie_matcher", false);
  public get cookieMatcher() {
    return this._cookieMatcher;
  }
  public putCookieMatcher(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionCookieMatcher[] | cdktf.IResolvable) {
    this._cookieMatcher.internalValue = value;
  }
  public resetCookieMatcher() {
    this._cookieMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatcherInput() {
    return this._cookieMatcher.internalValue;
  }

  // path_match - computed: false, optional: true, required: false
  private _pathMatch = new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatchOutputReference(this, "path_match");
  public get pathMatch() {
    return this._pathMatch;
  }
  public putPathMatch(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionPathMatch) {
    this._pathMatch.internalValue = value;
  }
  public resetPathMatch() {
    this._pathMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMatchInput() {
    return this._pathMatch.internalValue;
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParametersList(this, "query_parameters", false);
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionQueryParameters[] | cdktf.IResolvable) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }
}

export class CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpression[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionOutputReference {
    return new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerCacheRulesRuleExpressionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expression_name CdnLoadbalancer#expression_name}
  */
  readonly expressionName: string;
  /**
  * cache_rule_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_rule_expression CdnLoadbalancer#cache_rule_expression}
  */
  readonly cacheRuleExpression: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpression[] | cdktf.IResolvable;
}

export function cdnLoadbalancerCacheRulesRuleExpressionListStructToTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression_name: cdktf.stringToTerraform(struct!.expressionName),
    cache_rule_expression: cdktf.listMapper(cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionToTerraform, true)(struct!.cacheRuleExpression),
  }
}


export function cdnLoadbalancerCacheRulesRuleExpressionListStructToHclTerraform(struct?: CdnLoadbalancerCacheRulesRuleExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression_name: {
      value: cdktf.stringToHclTerraform(struct!.expressionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_rule_expression: {
      value: cdktf.listMapperHcl(cdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionToHclTerraform, true)(struct!.cacheRuleExpression),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesRuleExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerCacheRulesRuleExpressionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionName = this._expressionName;
    }
    if (this._cacheRuleExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRuleExpression = this._cacheRuleExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRulesRuleExpressionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressionName = undefined;
      this._cacheRuleExpression.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressionName = value.expressionName;
      this._cacheRuleExpression.internalValue = value.cacheRuleExpression;
    }
  }

  // expression_name - computed: false, optional: false, required: true
  private _expressionName?: string; 
  public get expressionName() {
    return this.getStringAttribute('expression_name');
  }
  public set expressionName(value: string) {
    this._expressionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionNameInput() {
    return this._expressionName;
  }

  // cache_rule_expression - computed: false, optional: false, required: true
  private _cacheRuleExpression = new CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpressionList(this, "cache_rule_expression", false);
  public get cacheRuleExpression() {
    return this._cacheRuleExpression;
  }
  public putCacheRuleExpression(value: CdnLoadbalancerCacheRulesRuleExpressionListCacheRuleExpression[] | cdktf.IResolvable) {
    this._cacheRuleExpression.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRuleExpressionInput() {
    return this._cacheRuleExpression.internalValue;
  }
}

export class CdnLoadbalancerCacheRulesRuleExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerCacheRulesRuleExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerCacheRulesRuleExpressionListStructOutputReference {
    return new CdnLoadbalancerCacheRulesRuleExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerCacheRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_bypass CdnLoadbalancer#cache_bypass}
  */
  readonly cacheBypass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#rule_name CdnLoadbalancer#rule_name}
  */
  readonly ruleName: string;
  /**
  * eligible_for_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#eligible_for_cache CdnLoadbalancer#eligible_for_cache}
  */
  readonly eligibleForCache?: CdnLoadbalancerCacheRulesEligibleForCache;
  /**
  * rule_expression_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#rule_expression_list CdnLoadbalancer#rule_expression_list}
  */
  readonly ruleExpressionList: CdnLoadbalancerCacheRulesRuleExpressionListStruct[] | cdktf.IResolvable;
}

export function cdnLoadbalancerCacheRulesToTerraform(struct?: CdnLoadbalancerCacheRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_bypass: cdktf.booleanToTerraform(struct!.cacheBypass),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    eligible_for_cache: cdnLoadbalancerCacheRulesEligibleForCacheToTerraform(struct!.eligibleForCache),
    rule_expression_list: cdktf.listMapper(cdnLoadbalancerCacheRulesRuleExpressionListStructToTerraform, true)(struct!.ruleExpressionList),
  }
}


export function cdnLoadbalancerCacheRulesToHclTerraform(struct?: CdnLoadbalancerCacheRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_bypass: {
      value: cdktf.booleanToHclTerraform(struct!.cacheBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eligible_for_cache: {
      value: cdnLoadbalancerCacheRulesEligibleForCacheToHclTerraform(struct!.eligibleForCache),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesEligibleForCacheList",
    },
    rule_expression_list: {
      value: cdktf.listMapperHcl(cdnLoadbalancerCacheRulesRuleExpressionListStructToHclTerraform, true)(struct!.ruleExpressionList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCacheRulesRuleExpressionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCacheRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerCacheRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheBypass = this._cacheBypass;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._eligibleForCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligibleForCache = this._eligibleForCache?.internalValue;
    }
    if (this._ruleExpressionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleExpressionList = this._ruleExpressionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCacheRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheBypass = undefined;
      this._ruleName = undefined;
      this._eligibleForCache.internalValue = undefined;
      this._ruleExpressionList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheBypass = value.cacheBypass;
      this._ruleName = value.ruleName;
      this._eligibleForCache.internalValue = value.eligibleForCache;
      this._ruleExpressionList.internalValue = value.ruleExpressionList;
    }
  }

  // cache_bypass - computed: false, optional: true, required: false
  private _cacheBypass?: boolean | cdktf.IResolvable; 
  public get cacheBypass() {
    return this.getBooleanAttribute('cache_bypass');
  }
  public set cacheBypass(value: boolean | cdktf.IResolvable) {
    this._cacheBypass = value;
  }
  public resetCacheBypass() {
    this._cacheBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBypassInput() {
    return this._cacheBypass;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // eligible_for_cache - computed: false, optional: true, required: false
  private _eligibleForCache = new CdnLoadbalancerCacheRulesEligibleForCacheOutputReference(this, "eligible_for_cache");
  public get eligibleForCache() {
    return this._eligibleForCache;
  }
  public putEligibleForCache(value: CdnLoadbalancerCacheRulesEligibleForCache) {
    this._eligibleForCache.internalValue = value;
  }
  public resetEligibleForCache() {
    this._eligibleForCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleForCacheInput() {
    return this._eligibleForCache.internalValue;
  }

  // rule_expression_list - computed: false, optional: false, required: true
  private _ruleExpressionList = new CdnLoadbalancerCacheRulesRuleExpressionListStructList(this, "rule_expression_list", false);
  public get ruleExpressionList() {
    return this._ruleExpressionList;
  }
  public putRuleExpressionList(value: CdnLoadbalancerCacheRulesRuleExpressionListStruct[] | cdktf.IResolvable) {
    this._ruleExpressionList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleExpressionListInput() {
    return this._ruleExpressionList.internalValue;
  }
}

export class CdnLoadbalancerCacheRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerCacheRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerCacheRulesOutputReference {
    return new CdnLoadbalancerCacheRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerCaptchaChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function cdnLoadbalancerCaptchaChallengeToTerraform(struct?: CdnLoadbalancerCaptchaChallengeOutputReference | CdnLoadbalancerCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function cdnLoadbalancerCaptchaChallengeToHclTerraform(struct?: CdnLoadbalancerCaptchaChallengeOutputReference | CdnLoadbalancerCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCaptchaChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCaptchaChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCaptchaChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }
}
export interface CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function cdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParametersToTerraform(struct?: CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParametersOutputReference | CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function cdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParametersToHclTerraform(struct?: CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParametersOutputReference | CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }
}
export interface CdnLoadbalancerChallengeOnCacheMissJsChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_script_delay CdnLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function cdnLoadbalancerChallengeOnCacheMissJsChallengeParametersToTerraform(struct?: CdnLoadbalancerChallengeOnCacheMissJsChallengeParametersOutputReference | CdnLoadbalancerChallengeOnCacheMissJsChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function cdnLoadbalancerChallengeOnCacheMissJsChallengeParametersToHclTerraform(struct?: CdnLoadbalancerChallengeOnCacheMissJsChallengeParametersOutputReference | CdnLoadbalancerChallengeOnCacheMissJsChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerChallengeOnCacheMissJsChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerChallengeOnCacheMissJsChallengeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerChallengeOnCacheMissJsChallengeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigationToTerraform(struct?: CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigationOutputReference | CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigationToHclTerraform(struct?: CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigationOutputReference | CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerChallengeOnCacheMiss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#default_captcha_challenge_parameters CdnLoadbalancer#default_captcha_challenge_parameters}
  */
  readonly defaultCaptchaChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#default_js_challenge_parameters CdnLoadbalancer#default_js_challenge_parameters}
  */
  readonly defaultJsChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#default_mitigation_settings CdnLoadbalancer#default_mitigation_settings}
  */
  readonly defaultMitigationSettings?: boolean | cdktf.IResolvable;
  /**
  * captcha_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#captcha_challenge_parameters CdnLoadbalancer#captcha_challenge_parameters}
  */
  readonly captchaChallengeParameters?: CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParameters;
  /**
  * js_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_challenge_parameters CdnLoadbalancer#js_challenge_parameters}
  */
  readonly jsChallengeParameters?: CdnLoadbalancerChallengeOnCacheMissJsChallengeParameters;
  /**
  * malicious_user_mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#malicious_user_mitigation CdnLoadbalancer#malicious_user_mitigation}
  */
  readonly maliciousUserMitigation?: CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigation;
}

export function cdnLoadbalancerChallengeOnCacheMissToTerraform(struct?: CdnLoadbalancerChallengeOnCacheMissOutputReference | CdnLoadbalancerChallengeOnCacheMiss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_captcha_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultCaptchaChallengeParameters),
    default_js_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultJsChallengeParameters),
    default_mitigation_settings: cdktf.booleanToTerraform(struct!.defaultMitigationSettings),
    captcha_challenge_parameters: cdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParametersToTerraform(struct!.captchaChallengeParameters),
    js_challenge_parameters: cdnLoadbalancerChallengeOnCacheMissJsChallengeParametersToTerraform(struct!.jsChallengeParameters),
    malicious_user_mitigation: cdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigationToTerraform(struct!.maliciousUserMitigation),
  }
}


export function cdnLoadbalancerChallengeOnCacheMissToHclTerraform(struct?: CdnLoadbalancerChallengeOnCacheMissOutputReference | CdnLoadbalancerChallengeOnCacheMiss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_captcha_challenge_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultCaptchaChallengeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_js_challenge_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultJsChallengeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_mitigation_settings: {
      value: cdktf.booleanToHclTerraform(struct!.defaultMitigationSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    captcha_challenge_parameters: {
      value: cdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParametersToHclTerraform(struct!.captchaChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParametersList",
    },
    js_challenge_parameters: {
      value: cdnLoadbalancerChallengeOnCacheMissJsChallengeParametersToHclTerraform(struct!.jsChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerChallengeOnCacheMissJsChallengeParametersList",
    },
    malicious_user_mitigation: {
      value: cdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigationToHclTerraform(struct!.maliciousUserMitigation),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerChallengeOnCacheMissOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerChallengeOnCacheMiss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCaptchaChallengeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCaptchaChallengeParameters = this._defaultCaptchaChallengeParameters;
    }
    if (this._defaultJsChallengeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultJsChallengeParameters = this._defaultJsChallengeParameters;
    }
    if (this._defaultMitigationSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMitigationSettings = this._defaultMitigationSettings;
    }
    if (this._captchaChallengeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaChallengeParameters = this._captchaChallengeParameters?.internalValue;
    }
    if (this._jsChallengeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsChallengeParameters = this._jsChallengeParameters?.internalValue;
    }
    if (this._maliciousUserMitigation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousUserMitigation = this._maliciousUserMitigation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerChallengeOnCacheMiss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultCaptchaChallengeParameters = undefined;
      this._defaultJsChallengeParameters = undefined;
      this._defaultMitigationSettings = undefined;
      this._captchaChallengeParameters.internalValue = undefined;
      this._jsChallengeParameters.internalValue = undefined;
      this._maliciousUserMitigation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultCaptchaChallengeParameters = value.defaultCaptchaChallengeParameters;
      this._defaultJsChallengeParameters = value.defaultJsChallengeParameters;
      this._defaultMitigationSettings = value.defaultMitigationSettings;
      this._captchaChallengeParameters.internalValue = value.captchaChallengeParameters;
      this._jsChallengeParameters.internalValue = value.jsChallengeParameters;
      this._maliciousUserMitigation.internalValue = value.maliciousUserMitigation;
    }
  }

  // default_captcha_challenge_parameters - computed: false, optional: true, required: false
  private _defaultCaptchaChallengeParameters?: boolean | cdktf.IResolvable; 
  public get defaultCaptchaChallengeParameters() {
    return this.getBooleanAttribute('default_captcha_challenge_parameters');
  }
  public set defaultCaptchaChallengeParameters(value: boolean | cdktf.IResolvable) {
    this._defaultCaptchaChallengeParameters = value;
  }
  public resetDefaultCaptchaChallengeParameters() {
    this._defaultCaptchaChallengeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCaptchaChallengeParametersInput() {
    return this._defaultCaptchaChallengeParameters;
  }

  // default_js_challenge_parameters - computed: false, optional: true, required: false
  private _defaultJsChallengeParameters?: boolean | cdktf.IResolvable; 
  public get defaultJsChallengeParameters() {
    return this.getBooleanAttribute('default_js_challenge_parameters');
  }
  public set defaultJsChallengeParameters(value: boolean | cdktf.IResolvable) {
    this._defaultJsChallengeParameters = value;
  }
  public resetDefaultJsChallengeParameters() {
    this._defaultJsChallengeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultJsChallengeParametersInput() {
    return this._defaultJsChallengeParameters;
  }

  // default_mitigation_settings - computed: false, optional: true, required: false
  private _defaultMitigationSettings?: boolean | cdktf.IResolvable; 
  public get defaultMitigationSettings() {
    return this.getBooleanAttribute('default_mitigation_settings');
  }
  public set defaultMitigationSettings(value: boolean | cdktf.IResolvable) {
    this._defaultMitigationSettings = value;
  }
  public resetDefaultMitigationSettings() {
    this._defaultMitigationSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMitigationSettingsInput() {
    return this._defaultMitigationSettings;
  }

  // captcha_challenge_parameters - computed: false, optional: true, required: false
  private _captchaChallengeParameters = new CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParametersOutputReference(this, "captcha_challenge_parameters");
  public get captchaChallengeParameters() {
    return this._captchaChallengeParameters;
  }
  public putCaptchaChallengeParameters(value: CdnLoadbalancerChallengeOnCacheMissCaptchaChallengeParameters) {
    this._captchaChallengeParameters.internalValue = value;
  }
  public resetCaptchaChallengeParameters() {
    this._captchaChallengeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaChallengeParametersInput() {
    return this._captchaChallengeParameters.internalValue;
  }

  // js_challenge_parameters - computed: false, optional: true, required: false
  private _jsChallengeParameters = new CdnLoadbalancerChallengeOnCacheMissJsChallengeParametersOutputReference(this, "js_challenge_parameters");
  public get jsChallengeParameters() {
    return this._jsChallengeParameters;
  }
  public putJsChallengeParameters(value: CdnLoadbalancerChallengeOnCacheMissJsChallengeParameters) {
    this._jsChallengeParameters.internalValue = value;
  }
  public resetJsChallengeParameters() {
    this._jsChallengeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsChallengeParametersInput() {
    return this._jsChallengeParameters.internalValue;
  }

  // malicious_user_mitigation - computed: false, optional: true, required: false
  private _maliciousUserMitigation = new CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigationOutputReference(this, "malicious_user_mitigation");
  public get maliciousUserMitigation() {
    return this._maliciousUserMitigation;
  }
  public putMaliciousUserMitigation(value: CdnLoadbalancerChallengeOnCacheMissMaliciousUserMitigation) {
    this._maliciousUserMitigation.internalValue = value;
  }
  public resetMaliciousUserMitigation() {
    this._maliciousUserMitigation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUserMitigationInput() {
    return this._maliciousUserMitigation.internalValue;
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToTerraform(struct!.domain),
    metadata: cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainList",
    },
    metadata: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataList",
    },
    path: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference {
    return new CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept {
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exclude_list CdnLoadbalancer#exclude_list}
  */
  readonly excludeList?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainToTerraform(struct!.domain),
    metadata: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainList",
    },
    metadata: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataList",
    },
    path: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructOutputReference {
    return new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainToTerraform(struct!.domain),
    metadata: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainList",
    },
    metadata: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataList",
    },
    path: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesOutputReference {
    return new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerClientSideDefensePolicyJsInsertionRules {
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exclude_list CdnLoadbalancer#exclude_list}
  */
  readonly excludeList?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#rules CdnLoadbalancer#rules}
  */
  readonly rules: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructToTerraform, true)(struct!.excludeList),
    rules: cdktf.listMapper(cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesOutputReference | CdnLoadbalancerClientSideDefensePolicyJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructList",
    },
    rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicyJsInsertionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeList.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeList.internalValue = value.excludeList;
      this._rules.internalValue = value.rules;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface CdnLoadbalancerClientSideDefensePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_js_insert CdnLoadbalancer#disable_js_insert}
  */
  readonly disableJsInsert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_insert_all_pages CdnLoadbalancer#js_insert_all_pages}
  */
  readonly jsInsertAllPages?: boolean | cdktf.IResolvable;
  /**
  * js_insert_all_pages_except block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_insert_all_pages_except CdnLoadbalancer#js_insert_all_pages_except}
  */
  readonly jsInsertAllPagesExcept?: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept;
  /**
  * js_insertion_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#js_insertion_rules CdnLoadbalancer#js_insertion_rules}
  */
  readonly jsInsertionRules?: CdnLoadbalancerClientSideDefensePolicyJsInsertionRules;
}

export function cdnLoadbalancerClientSideDefensePolicyToTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyOutputReference | CdnLoadbalancerClientSideDefensePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_js_insert: cdktf.booleanToTerraform(struct!.disableJsInsert),
    js_insert_all_pages: cdktf.booleanToTerraform(struct!.jsInsertAllPages),
    js_insert_all_pages_except: cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptToTerraform(struct!.jsInsertAllPagesExcept),
    js_insertion_rules: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesToTerraform(struct!.jsInsertionRules),
  }
}


export function cdnLoadbalancerClientSideDefensePolicyToHclTerraform(struct?: CdnLoadbalancerClientSideDefensePolicyOutputReference | CdnLoadbalancerClientSideDefensePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_js_insert: {
      value: cdktf.booleanToHclTerraform(struct!.disableJsInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    js_insert_all_pages: {
      value: cdktf.booleanToHclTerraform(struct!.jsInsertAllPages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    js_insert_all_pages_except: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptToHclTerraform(struct!.jsInsertAllPagesExcept),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptList",
    },
    js_insertion_rules: {
      value: cdnLoadbalancerClientSideDefensePolicyJsInsertionRulesToHclTerraform(struct!.jsInsertionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefensePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefensePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableJsInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableJsInsert = this._disableJsInsert;
    }
    if (this._jsInsertAllPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPages = this._jsInsertAllPages;
    }
    if (this._jsInsertAllPagesExcept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPagesExcept = this._jsInsertAllPagesExcept?.internalValue;
    }
    if (this._jsInsertionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertionRules = this._jsInsertionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefensePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableJsInsert = undefined;
      this._jsInsertAllPages = undefined;
      this._jsInsertAllPagesExcept.internalValue = undefined;
      this._jsInsertionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableJsInsert = value.disableJsInsert;
      this._jsInsertAllPages = value.jsInsertAllPages;
      this._jsInsertAllPagesExcept.internalValue = value.jsInsertAllPagesExcept;
      this._jsInsertionRules.internalValue = value.jsInsertionRules;
    }
  }

  // disable_js_insert - computed: false, optional: true, required: false
  private _disableJsInsert?: boolean | cdktf.IResolvable; 
  public get disableJsInsert() {
    return this.getBooleanAttribute('disable_js_insert');
  }
  public set disableJsInsert(value: boolean | cdktf.IResolvable) {
    this._disableJsInsert = value;
  }
  public resetDisableJsInsert() {
    this._disableJsInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableJsInsertInput() {
    return this._disableJsInsert;
  }

  // js_insert_all_pages - computed: false, optional: true, required: false
  private _jsInsertAllPages?: boolean | cdktf.IResolvable; 
  public get jsInsertAllPages() {
    return this.getBooleanAttribute('js_insert_all_pages');
  }
  public set jsInsertAllPages(value: boolean | cdktf.IResolvable) {
    this._jsInsertAllPages = value;
  }
  public resetJsInsertAllPages() {
    this._jsInsertAllPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesInput() {
    return this._jsInsertAllPages;
  }

  // js_insert_all_pages_except - computed: false, optional: true, required: false
  private _jsInsertAllPagesExcept = new CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference(this, "js_insert_all_pages_except");
  public get jsInsertAllPagesExcept() {
    return this._jsInsertAllPagesExcept;
  }
  public putJsInsertAllPagesExcept(value: CdnLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept) {
    this._jsInsertAllPagesExcept.internalValue = value;
  }
  public resetJsInsertAllPagesExcept() {
    this._jsInsertAllPagesExcept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesExceptInput() {
    return this._jsInsertAllPagesExcept.internalValue;
  }

  // js_insertion_rules - computed: false, optional: true, required: false
  private _jsInsertionRules = new CdnLoadbalancerClientSideDefensePolicyJsInsertionRulesOutputReference(this, "js_insertion_rules");
  public get jsInsertionRules() {
    return this._jsInsertionRules;
  }
  public putJsInsertionRules(value: CdnLoadbalancerClientSideDefensePolicyJsInsertionRules) {
    this._jsInsertionRules.internalValue = value;
  }
  public resetJsInsertionRules() {
    this._jsInsertionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertionRulesInput() {
    return this._jsInsertionRules.internalValue;
  }
}
export interface CdnLoadbalancerClientSideDefense {
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#policy CdnLoadbalancer#policy}
  */
  readonly policy: CdnLoadbalancerClientSideDefensePolicy;
}

export function cdnLoadbalancerClientSideDefenseToTerraform(struct?: CdnLoadbalancerClientSideDefenseOutputReference | CdnLoadbalancerClientSideDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdnLoadbalancerClientSideDefensePolicyToTerraform(struct!.policy),
  }
}


export function cdnLoadbalancerClientSideDefenseToHclTerraform(struct?: CdnLoadbalancerClientSideDefenseOutputReference | CdnLoadbalancerClientSideDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdnLoadbalancerClientSideDefensePolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerClientSideDefensePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerClientSideDefenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerClientSideDefense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerClientSideDefense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy.internalValue = value.policy;
    }
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new CdnLoadbalancerClientSideDefensePolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: CdnLoadbalancerClientSideDefensePolicy) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface CdnLoadbalancerCorsPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_credentials CdnLoadbalancer#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_headers CdnLoadbalancer#allow_headers}
  */
  readonly allowHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_methods CdnLoadbalancer#allow_methods}
  */
  readonly allowMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_origin CdnLoadbalancer#allow_origin}
  */
  readonly allowOrigin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow_origin_regex CdnLoadbalancer#allow_origin_regex}
  */
  readonly allowOriginRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disabled CdnLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expose_headers CdnLoadbalancer#expose_headers}
  */
  readonly exposeHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#max_age CdnLoadbalancer#max_age}
  */
  readonly maxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#maximum_age CdnLoadbalancer#maximum_age}
  */
  readonly maximumAge?: number;
}

export function cdnLoadbalancerCorsPolicyToTerraform(struct?: CdnLoadbalancerCorsPolicyOutputReference | CdnLoadbalancerCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.stringToTerraform(struct!.allowHeaders),
    allow_methods: cdktf.stringToTerraform(struct!.allowMethods),
    allow_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigin),
    allow_origin_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegex),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.stringToTerraform(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    maximum_age: cdktf.numberToTerraform(struct!.maximumAge),
  }
}


export function cdnLoadbalancerCorsPolicyToHclTerraform(struct?: CdnLoadbalancerCorsPolicyOutputReference | CdnLoadbalancerCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.stringToHclTerraform(struct!.allowHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_methods: {
      value: cdktf.stringToHclTerraform(struct!.allowMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_origin: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOriginRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktf.stringToHclTerraform(struct!.exposeHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_age: {
      value: cdktf.numberToHclTerraform(struct!.maximumAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigin = this._allowOrigin;
    }
    if (this._allowOriginRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegex = this._allowOriginRegex;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maximumAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumAge = this._maximumAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigin = undefined;
      this._allowOriginRegex = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
      this._maximumAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOrigin = value.allowOrigin;
      this._allowOriginRegex = value.allowOriginRegex;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
      this._maximumAge = value.maximumAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string; 
  public get allowHeaders() {
    return this.getStringAttribute('allow_headers');
  }
  public set allowHeaders(value: string) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string; 
  public get allowMethods() {
    return this.getStringAttribute('allow_methods');
  }
  public set allowMethods(value: string) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin - computed: false, optional: true, required: false
  private _allowOrigin?: string[]; 
  public get allowOrigin() {
    return this.getListAttribute('allow_origin');
  }
  public set allowOrigin(value: string[]) {
    this._allowOrigin = value;
  }
  public resetAllowOrigin() {
    this._allowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginInput() {
    return this._allowOrigin;
  }

  // allow_origin_regex - computed: false, optional: true, required: false
  private _allowOriginRegex?: string[]; 
  public get allowOriginRegex() {
    return this.getListAttribute('allow_origin_regex');
  }
  public set allowOriginRegex(value: string[]) {
    this._allowOriginRegex = value;
  }
  public resetAllowOriginRegex() {
    this._allowOriginRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexInput() {
    return this._allowOriginRegex;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string; 
  public get exposeHeaders() {
    return this.getStringAttribute('expose_headers');
  }
  public set exposeHeaders(value: string) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // maximum_age - computed: false, optional: true, required: false
  private _maximumAge?: number; 
  public get maximumAge() {
    return this.getNumberAttribute('maximum_age');
  }
  public set maximumAge(value: number) {
    this._maximumAge = value;
  }
  public resetMaximumAge() {
    this._maximumAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAgeInput() {
    return this._maximumAge;
  }
}
export interface CdnLoadbalancerCsrfPolicyCustomDomainListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domains CdnLoadbalancer#domains}
  */
  readonly domains: string[];
}

export function cdnLoadbalancerCsrfPolicyCustomDomainListStructToTerraform(struct?: CdnLoadbalancerCsrfPolicyCustomDomainListStructOutputReference | CdnLoadbalancerCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
  }
}


export function cdnLoadbalancerCsrfPolicyCustomDomainListStructToHclTerraform(struct?: CdnLoadbalancerCsrfPolicyCustomDomainListStructOutputReference | CdnLoadbalancerCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCsrfPolicyCustomDomainListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCsrfPolicyCustomDomainListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCsrfPolicyCustomDomainListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }
}
export interface CdnLoadbalancerCsrfPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_load_balancer_domains CdnLoadbalancer#all_load_balancer_domains}
  */
  readonly allLoadBalancerDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disabled CdnLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * custom_domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_domain_list CdnLoadbalancer#custom_domain_list}
  */
  readonly customDomainList?: CdnLoadbalancerCsrfPolicyCustomDomainListStruct;
}

export function cdnLoadbalancerCsrfPolicyToTerraform(struct?: CdnLoadbalancerCsrfPolicyOutputReference | CdnLoadbalancerCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_load_balancer_domains: cdktf.booleanToTerraform(struct!.allLoadBalancerDomains),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    custom_domain_list: cdnLoadbalancerCsrfPolicyCustomDomainListStructToTerraform(struct!.customDomainList),
  }
}


export function cdnLoadbalancerCsrfPolicyToHclTerraform(struct?: CdnLoadbalancerCsrfPolicyOutputReference | CdnLoadbalancerCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_load_balancer_domains: {
      value: cdktf.booleanToHclTerraform(struct!.allLoadBalancerDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_domain_list: {
      value: cdnLoadbalancerCsrfPolicyCustomDomainListStructToHclTerraform(struct!.customDomainList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCsrfPolicyCustomDomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCsrfPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCsrfPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allLoadBalancerDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allLoadBalancerDomains = this._allLoadBalancerDomains;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._customDomainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomainList = this._customDomainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCsrfPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allLoadBalancerDomains = undefined;
      this._disabled = undefined;
      this._customDomainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allLoadBalancerDomains = value.allLoadBalancerDomains;
      this._disabled = value.disabled;
      this._customDomainList.internalValue = value.customDomainList;
    }
  }

  // all_load_balancer_domains - computed: false, optional: true, required: false
  private _allLoadBalancerDomains?: boolean | cdktf.IResolvable; 
  public get allLoadBalancerDomains() {
    return this.getBooleanAttribute('all_load_balancer_domains');
  }
  public set allLoadBalancerDomains(value: boolean | cdktf.IResolvable) {
    this._allLoadBalancerDomains = value;
  }
  public resetAllLoadBalancerDomains() {
    this._allLoadBalancerDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allLoadBalancerDomainsInput() {
    return this._allLoadBalancerDomains;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // custom_domain_list - computed: false, optional: true, required: false
  private _customDomainList = new CdnLoadbalancerCsrfPolicyCustomDomainListStructOutputReference(this, "custom_domain_list");
  public get customDomainList() {
    return this._customDomainList;
  }
  public putCustomDomainList(value: CdnLoadbalancerCsrfPolicyCustomDomainListStruct) {
    this._customDomainList.internalValue = value;
  }
  public resetCustomDomainList() {
    this._customDomainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainListInput() {
    return this._customDomainList.internalValue;
  }
}
export interface CdnLoadbalancerCustomCacheRuleCdnCacheRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerCustomCacheRuleCdnCacheRulesToTerraform(struct?: CdnLoadbalancerCustomCacheRuleCdnCacheRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerCustomCacheRuleCdnCacheRulesToHclTerraform(struct?: CdnLoadbalancerCustomCacheRuleCdnCacheRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCustomCacheRuleCdnCacheRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerCustomCacheRuleCdnCacheRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCustomCacheRuleCdnCacheRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class CdnLoadbalancerCustomCacheRuleCdnCacheRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerCustomCacheRuleCdnCacheRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerCustomCacheRuleCdnCacheRulesOutputReference {
    return new CdnLoadbalancerCustomCacheRuleCdnCacheRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerCustomCacheRule {
  /**
  * cdn_cache_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cdn_cache_rules CdnLoadbalancer#cdn_cache_rules}
  */
  readonly cdnCacheRules?: CdnLoadbalancerCustomCacheRuleCdnCacheRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerCustomCacheRuleToTerraform(struct?: CdnLoadbalancerCustomCacheRuleOutputReference | CdnLoadbalancerCustomCacheRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdn_cache_rules: cdktf.listMapper(cdnLoadbalancerCustomCacheRuleCdnCacheRulesToTerraform, true)(struct!.cdnCacheRules),
  }
}


export function cdnLoadbalancerCustomCacheRuleToHclTerraform(struct?: CdnLoadbalancerCustomCacheRuleOutputReference | CdnLoadbalancerCustomCacheRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdn_cache_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerCustomCacheRuleCdnCacheRulesToHclTerraform, true)(struct!.cdnCacheRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCustomCacheRuleCdnCacheRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCustomCacheRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCustomCacheRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdnCacheRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdnCacheRules = this._cdnCacheRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCustomCacheRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdnCacheRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdnCacheRules.internalValue = value.cdnCacheRules;
    }
  }

  // cdn_cache_rules - computed: false, optional: true, required: false
  private _cdnCacheRules = new CdnLoadbalancerCustomCacheRuleCdnCacheRulesList(this, "cdn_cache_rules", false);
  public get cdnCacheRules() {
    return this._cdnCacheRules;
  }
  public putCdnCacheRules(value: CdnLoadbalancerCustomCacheRuleCdnCacheRules[] | cdktf.IResolvable) {
    this._cdnCacheRules.internalValue = value;
  }
  public resetCdnCacheRules() {
    this._cdnCacheRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnCacheRulesInput() {
    return this._cdnCacheRules.internalValue;
  }
}
export interface CdnLoadbalancerDataGuardRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerDataGuardRulesMetadataToTerraform(struct?: CdnLoadbalancerDataGuardRulesMetadataOutputReference | CdnLoadbalancerDataGuardRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerDataGuardRulesMetadataToHclTerraform(struct?: CdnLoadbalancerDataGuardRulesMetadataOutputReference | CdnLoadbalancerDataGuardRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDataGuardRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDataGuardRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDataGuardRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerDataGuardRulesPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerDataGuardRulesPathToTerraform(struct?: CdnLoadbalancerDataGuardRulesPathOutputReference | CdnLoadbalancerDataGuardRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerDataGuardRulesPathToHclTerraform(struct?: CdnLoadbalancerDataGuardRulesPathOutputReference | CdnLoadbalancerDataGuardRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDataGuardRulesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDataGuardRulesPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDataGuardRulesPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerDataGuardRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#apply_data_guard CdnLoadbalancer#apply_data_guard}
  */
  readonly applyDataGuard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#skip_data_guard CdnLoadbalancer#skip_data_guard}
  */
  readonly skipDataGuard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerDataGuardRulesMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerDataGuardRulesPath;
}

export function cdnLoadbalancerDataGuardRulesToTerraform(struct?: CdnLoadbalancerDataGuardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    apply_data_guard: cdktf.booleanToTerraform(struct!.applyDataGuard),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    skip_data_guard: cdktf.booleanToTerraform(struct!.skipDataGuard),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
    metadata: cdnLoadbalancerDataGuardRulesMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerDataGuardRulesPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerDataGuardRulesToHclTerraform(struct?: CdnLoadbalancerDataGuardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apply_data_guard: {
      value: cdktf.booleanToHclTerraform(struct!.applyDataGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_data_guard: {
      value: cdktf.booleanToHclTerraform(struct!.skipDataGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdnLoadbalancerDataGuardRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDataGuardRulesMetadataList",
    },
    path: {
      value: cdnLoadbalancerDataGuardRulesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDataGuardRulesPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDataGuardRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerDataGuardRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._applyDataGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyDataGuard = this._applyDataGuard;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._skipDataGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDataGuard = this._skipDataGuard;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDataGuardRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._applyDataGuard = undefined;
      this._exactValue = undefined;
      this._skipDataGuard = undefined;
      this._suffixValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._applyDataGuard = value.applyDataGuard;
      this._exactValue = value.exactValue;
      this._skipDataGuard = value.skipDataGuard;
      this._suffixValue = value.suffixValue;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // apply_data_guard - computed: false, optional: true, required: false
  private _applyDataGuard?: boolean | cdktf.IResolvable; 
  public get applyDataGuard() {
    return this.getBooleanAttribute('apply_data_guard');
  }
  public set applyDataGuard(value: boolean | cdktf.IResolvable) {
    this._applyDataGuard = value;
  }
  public resetApplyDataGuard() {
    this._applyDataGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyDataGuardInput() {
    return this._applyDataGuard;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // skip_data_guard - computed: false, optional: true, required: false
  private _skipDataGuard?: boolean | cdktf.IResolvable; 
  public get skipDataGuard() {
    return this.getBooleanAttribute('skip_data_guard');
  }
  public set skipDataGuard(value: boolean | cdktf.IResolvable) {
    this._skipDataGuard = value;
  }
  public resetSkipDataGuard() {
    this._skipDataGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDataGuardInput() {
    return this._skipDataGuard;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerDataGuardRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerDataGuardRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerDataGuardRulesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerDataGuardRulesPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerDataGuardRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerDataGuardRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerDataGuardRulesOutputReference {
    return new CdnLoadbalancerDataGuardRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
}

export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
  }
}


export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }
}
export interface CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface CdnLoadbalancerDdosMitigationRulesDdosClientSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#country_list CdnLoadbalancer#country_list}
  */
  readonly countryList?: string[];
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct;
  /**
  * ja4_tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ja4_tls_fingerprint_matcher CdnLoadbalancer#ja4_tls_fingerprint_matcher}
  */
  readonly ja4TlsFingerprintMatcher?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher;
}

export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryList),
    asn_list: cdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToTerraform(struct!.asnList),
    ja4_tls_fingerprint_matcher: cdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToTerraform(struct!.ja4TlsFingerprintMatcher),
    tls_fingerprint_matcher: cdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countryList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    asn_list: {
      value: cdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructList",
    },
    ja4_tls_fingerprint_matcher: {
      value: cdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToHclTerraform(struct!.ja4TlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesDdosClientSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryList = this._countryList;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._ja4TlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4TlsFingerprintMatcher = this._ja4TlsFingerprintMatcher?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesDdosClientSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countryList = undefined;
      this._asnList.internalValue = undefined;
      this._ja4TlsFingerprintMatcher.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countryList = value.countryList;
      this._asnList.internalValue = value.asnList;
      this._ja4TlsFingerprintMatcher.internalValue = value.ja4TlsFingerprintMatcher;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // country_list - computed: false, optional: true, required: false
  private _countryList?: string[]; 
  public get countryList() {
    return this.getListAttribute('country_list');
  }
  public set countryList(value: string[]) {
    this._countryList = value;
  }
  public resetCountryList() {
    this._countryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryListInput() {
    return this._countryList;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // ja4_tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _ja4TlsFingerprintMatcher = new CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference(this, "ja4_tls_fingerprint_matcher");
  public get ja4TlsFingerprintMatcher() {
    return this._ja4TlsFingerprintMatcher;
  }
  public putJa4TlsFingerprintMatcher(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher) {
    this._ja4TlsFingerprintMatcher.internalValue = value;
  }
  public resetJa4TlsFingerprintMatcher() {
    this._ja4TlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4TlsFingerprintMatcherInput() {
    return this._ja4TlsFingerprintMatcher.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerDdosMitigationRulesIpPrefixListStructToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference | CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function cdnLoadbalancerDdosMitigationRulesIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference | CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface CdnLoadbalancerDdosMitigationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerDdosMitigationRulesMetadataToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesMetadataOutputReference | CdnLoadbalancerDdosMitigationRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerDdosMitigationRulesMetadataToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesMetadataOutputReference | CdnLoadbalancerDdosMitigationRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDdosMitigationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerDdosMitigationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#block CdnLoadbalancer#block}
  */
  readonly block?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expiration_timestamp CdnLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * ddos_client_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ddos_client_source CdnLoadbalancer#ddos_client_source}
  */
  readonly ddosClientSource?: CdnLoadbalancerDdosMitigationRulesDdosClientSource;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerDdosMitigationRulesMetadata;
}

export function cdnLoadbalancerDdosMitigationRulesToTerraform(struct?: CdnLoadbalancerDdosMitigationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.booleanToTerraform(struct!.block),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    ddos_client_source: cdnLoadbalancerDdosMitigationRulesDdosClientSourceToTerraform(struct!.ddosClientSource),
    ip_prefix_list: cdnLoadbalancerDdosMitigationRulesIpPrefixListStructToTerraform(struct!.ipPrefixList),
    metadata: cdnLoadbalancerDdosMitigationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerDdosMitigationRulesToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.booleanToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddos_client_source: {
      value: cdnLoadbalancerDdosMitigationRulesDdosClientSourceToHclTerraform(struct!.ddosClientSource),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesDdosClientSourceList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerDdosMitigationRulesIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesIpPrefixListStructList",
    },
    metadata: {
      value: cdnLoadbalancerDdosMitigationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDdosMitigationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerDdosMitigationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._ddosClientSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosClientSource = this._ddosClientSource?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._block = undefined;
      this._expirationTimestamp = undefined;
      this._ddosClientSource.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._block = value.block;
      this._expirationTimestamp = value.expirationTimestamp;
      this._ddosClientSource.internalValue = value.ddosClientSource;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._metadata.internalValue = value.metadata;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: boolean | cdktf.IResolvable; 
  public get block() {
    return this.getBooleanAttribute('block');
  }
  public set block(value: boolean | cdktf.IResolvable) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // ddos_client_source - computed: false, optional: true, required: false
  private _ddosClientSource = new CdnLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference(this, "ddos_client_source");
  public get ddosClientSource() {
    return this._ddosClientSource;
  }
  public putDdosClientSource(value: CdnLoadbalancerDdosMitigationRulesDdosClientSource) {
    this._ddosClientSource.internalValue = value;
  }
  public resetDdosClientSource() {
    this._ddosClientSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosClientSourceInput() {
    return this._ddosClientSource.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new CdnLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerDdosMitigationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerDdosMitigationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerDdosMitigationRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerDdosMitigationRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerDdosMitigationRulesOutputReference {
    return new CdnLoadbalancerDdosMitigationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerDefaultCacheActionEligibleForCache {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_ttl CdnLoadbalancer#cache_ttl}
  */
  readonly cacheTtl: string;
}

export function cdnLoadbalancerDefaultCacheActionEligibleForCacheToTerraform(struct?: CdnLoadbalancerDefaultCacheActionEligibleForCacheOutputReference | CdnLoadbalancerDefaultCacheActionEligibleForCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_ttl: cdktf.stringToTerraform(struct!.cacheTtl),
  }
}


export function cdnLoadbalancerDefaultCacheActionEligibleForCacheToHclTerraform(struct?: CdnLoadbalancerDefaultCacheActionEligibleForCacheOutputReference | CdnLoadbalancerDefaultCacheActionEligibleForCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_ttl: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDefaultCacheActionEligibleForCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDefaultCacheActionEligibleForCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDefaultCacheActionEligibleForCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheTtl = value.cacheTtl;
    }
  }

  // cache_ttl - computed: false, optional: false, required: true
  private _cacheTtl?: string; 
  public get cacheTtl() {
    return this.getStringAttribute('cache_ttl');
  }
  public set cacheTtl(value: string) {
    this._cacheTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }
}
export interface CdnLoadbalancerDefaultCacheAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_disabled CdnLoadbalancer#cache_disabled}
  */
  readonly cacheDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_ttl_default CdnLoadbalancer#cache_ttl_default}
  */
  readonly cacheTtlDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cache_ttl_override CdnLoadbalancer#cache_ttl_override}
  */
  readonly cacheTtlOverride?: string;
  /**
  * eligible_for_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#eligible_for_cache CdnLoadbalancer#eligible_for_cache}
  */
  readonly eligibleForCache?: CdnLoadbalancerDefaultCacheActionEligibleForCache;
}

export function cdnLoadbalancerDefaultCacheActionToTerraform(struct?: CdnLoadbalancerDefaultCacheActionOutputReference | CdnLoadbalancerDefaultCacheAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_disabled: cdktf.booleanToTerraform(struct!.cacheDisabled),
    cache_ttl_default: cdktf.stringToTerraform(struct!.cacheTtlDefault),
    cache_ttl_override: cdktf.stringToTerraform(struct!.cacheTtlOverride),
    eligible_for_cache: cdnLoadbalancerDefaultCacheActionEligibleForCacheToTerraform(struct!.eligibleForCache),
  }
}


export function cdnLoadbalancerDefaultCacheActionToHclTerraform(struct?: CdnLoadbalancerDefaultCacheActionOutputReference | CdnLoadbalancerDefaultCacheAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.cacheDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl_default: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtlDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_ttl_override: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtlOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eligible_for_cache: {
      value: cdnLoadbalancerDefaultCacheActionEligibleForCacheToHclTerraform(struct!.eligibleForCache),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDefaultCacheActionEligibleForCacheList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDefaultCacheActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDefaultCacheAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDisabled = this._cacheDisabled;
    }
    if (this._cacheTtlDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlDefault = this._cacheTtlDefault;
    }
    if (this._cacheTtlOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlOverride = this._cacheTtlOverride;
    }
    if (this._eligibleForCache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eligibleForCache = this._eligibleForCache?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDefaultCacheAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheDisabled = undefined;
      this._cacheTtlDefault = undefined;
      this._cacheTtlOverride = undefined;
      this._eligibleForCache.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheDisabled = value.cacheDisabled;
      this._cacheTtlDefault = value.cacheTtlDefault;
      this._cacheTtlOverride = value.cacheTtlOverride;
      this._eligibleForCache.internalValue = value.eligibleForCache;
    }
  }

  // cache_disabled - computed: false, optional: true, required: false
  private _cacheDisabled?: boolean | cdktf.IResolvable; 
  public get cacheDisabled() {
    return this.getBooleanAttribute('cache_disabled');
  }
  public set cacheDisabled(value: boolean | cdktf.IResolvable) {
    this._cacheDisabled = value;
  }
  public resetCacheDisabled() {
    this._cacheDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDisabledInput() {
    return this._cacheDisabled;
  }

  // cache_ttl_default - computed: false, optional: true, required: false
  private _cacheTtlDefault?: string; 
  public get cacheTtlDefault() {
    return this.getStringAttribute('cache_ttl_default');
  }
  public set cacheTtlDefault(value: string) {
    this._cacheTtlDefault = value;
  }
  public resetCacheTtlDefault() {
    this._cacheTtlDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlDefaultInput() {
    return this._cacheTtlDefault;
  }

  // cache_ttl_override - computed: false, optional: true, required: false
  private _cacheTtlOverride?: string; 
  public get cacheTtlOverride() {
    return this.getStringAttribute('cache_ttl_override');
  }
  public set cacheTtlOverride(value: string) {
    this._cacheTtlOverride = value;
  }
  public resetCacheTtlOverride() {
    this._cacheTtlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlOverrideInput() {
    return this._cacheTtlOverride;
  }

  // eligible_for_cache - computed: false, optional: true, required: false
  private _eligibleForCache = new CdnLoadbalancerDefaultCacheActionEligibleForCacheOutputReference(this, "eligible_for_cache");
  public get eligibleForCache() {
    return this._eligibleForCache;
  }
  public putEligibleForCache(value: CdnLoadbalancerDefaultCacheActionEligibleForCache) {
    this._eligibleForCache.internalValue = value;
  }
  public resetEligibleForCache() {
    this._eligibleForCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleForCacheInput() {
    return this._eligibleForCache.internalValue;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#secret_encoding CdnLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#version CdnLoadbalancer#version}
  */
  readonly version?: number;
}

export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#secret_encoding_type CdnLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#blindfold_secret_info_internal CdnLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#vault_secret_info CdnLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#wingman_secret_info CdnLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo;
}

export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#user CdnLoadbalancer#user}
  */
  readonly user?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#password CdnLoadbalancer#password}
  */
  readonly password?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword;
}

export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.stringToTerraform(struct!.user),
    password: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct!.password),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._user = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._user = value.user;
      this._password.internalValue = value.password;
    }
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // password - computed: false, optional: true, required: false
  private _password = new CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain: string;
  /**
  * simple_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#simple_login CdnLoadbalancer#simple_login}
  */
  readonly simpleLogin?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin;
}

export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    simple_login: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct!.simpleLogin),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simple_login: {
      value: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct!.simpleLogin),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._simpleLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleLogin = this._simpleLogin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._simpleLogin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._simpleLogin.internalValue = value.simpleLogin;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // simple_login - computed: false, optional: true, required: false
  private _simpleLogin = new CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference(this, "simple_login");
  public get simpleLogin() {
    return this._simpleLogin;
  }
  public putSimpleLogin(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin) {
    this._simpleLogin.internalValue = value;
  }
  public resetSimpleLogin() {
    this._simpleLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleLoginInput() {
    return this._simpleLogin.internalValue;
  }
}

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference {
    return new CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig {
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domains CdnLoadbalancer#domains}
  */
  readonly domains: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable;
}

export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToTerraform, true)(struct!.domains),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToHclTerraform, true)(struct!.domains),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains.internalValue = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains = new CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiCrawler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_api_crawler CdnLoadbalancer#disable_api_crawler}
  */
  readonly disableApiCrawler?: boolean | cdktf.IResolvable;
  /**
  * api_crawler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_crawler_config CdnLoadbalancer#api_crawler_config}
  */
  readonly apiCrawlerConfig?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig;
}

export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_api_crawler: cdktf.booleanToTerraform(struct!.disableApiCrawler),
    api_crawler_config: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigToTerraform(struct!.apiCrawlerConfig),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiCrawlerToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiCrawlerOutputReference | CdnLoadbalancerEnableApiDiscoveryApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_api_crawler: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiCrawler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_crawler_config: {
      value: cdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigToHclTerraform(struct!.apiCrawlerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiCrawlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiCrawler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableApiCrawler !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiCrawler = this._disableApiCrawler;
    }
    if (this._apiCrawlerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCrawlerConfig = this._apiCrawlerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiCrawler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableApiCrawler = undefined;
      this._apiCrawlerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableApiCrawler = value.disableApiCrawler;
      this._apiCrawlerConfig.internalValue = value.apiCrawlerConfig;
    }
  }

  // disable_api_crawler - computed: false, optional: true, required: false
  private _disableApiCrawler?: boolean | cdktf.IResolvable; 
  public get disableApiCrawler() {
    return this.getBooleanAttribute('disable_api_crawler');
  }
  public set disableApiCrawler(value: boolean | cdktf.IResolvable) {
    this._disableApiCrawler = value;
  }
  public resetDisableApiCrawler() {
    this._disableApiCrawler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiCrawlerInput() {
    return this._disableApiCrawler;
  }

  // api_crawler_config - computed: false, optional: true, required: false
  private _apiCrawlerConfig = new CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference(this, "api_crawler_config");
  public get apiCrawlerConfig() {
    return this._apiCrawlerConfig;
  }
  public putApiCrawlerConfig(value: CdnLoadbalancerEnableApiDiscoveryApiCrawlerApiCrawlerConfig) {
    this._apiCrawlerConfig.internalValue = value;
  }
  public resetApiCrawlerConfig() {
    this._apiCrawlerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCrawlerConfigInput() {
    return this._apiCrawlerConfig.internalValue;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_code_repo CdnLoadbalancer#api_code_repo}
  */
  readonly apiCodeRepo: string[];
}

export function cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_code_repo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiCodeRepo),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_code_repo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiCodeRepo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiCodeRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCodeRepo = this._apiCodeRepo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiCodeRepo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiCodeRepo = value.apiCodeRepo;
    }
  }

  // api_code_repo - computed: false, optional: false, required: true
  private _apiCodeRepo?: string[]; 
  public get apiCodeRepo() {
    return this.getListAttribute('api_code_repo');
  }
  public set apiCodeRepo(value: string[]) {
    this._apiCodeRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCodeRepoInput() {
    return this._apiCodeRepo;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_repos CdnLoadbalancer#all_repos}
  */
  readonly allRepos?: boolean | cdktf.IResolvable;
  /**
  * code_base_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#code_base_integration CdnLoadbalancer#code_base_integration}
  */
  readonly codeBaseIntegration: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration;
  /**
  * selected_repos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#selected_repos CdnLoadbalancer#selected_repos}
  */
  readonly selectedRepos?: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos;
}

export function cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_repos: cdktf.booleanToTerraform(struct!.allRepos),
    code_base_integration: cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct!.codeBaseIntegration),
    selected_repos: cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct!.selectedRepos),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_repos: {
      value: cdktf.booleanToHclTerraform(struct!.allRepos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_base_integration: {
      value: cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct!.codeBaseIntegration),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationList",
    },
    selected_repos: {
      value: cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct!.selectedRepos),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRepos = this._allRepos;
    }
    if (this._codeBaseIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegration = this._codeBaseIntegration?.internalValue;
    }
    if (this._selectedRepos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedRepos = this._selectedRepos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allRepos = undefined;
      this._codeBaseIntegration.internalValue = undefined;
      this._selectedRepos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allRepos = value.allRepos;
      this._codeBaseIntegration.internalValue = value.codeBaseIntegration;
      this._selectedRepos.internalValue = value.selectedRepos;
    }
  }

  // all_repos - computed: false, optional: true, required: false
  private _allRepos?: boolean | cdktf.IResolvable; 
  public get allRepos() {
    return this.getBooleanAttribute('all_repos');
  }
  public set allRepos(value: boolean | cdktf.IResolvable) {
    this._allRepos = value;
  }
  public resetAllRepos() {
    this._allRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allReposInput() {
    return this._allRepos;
  }

  // code_base_integration - computed: false, optional: false, required: true
  private _codeBaseIntegration = new CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference(this, "code_base_integration");
  public get codeBaseIntegration() {
    return this._codeBaseIntegration;
  }
  public putCodeBaseIntegration(value: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration) {
    this._codeBaseIntegration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationInput() {
    return this._codeBaseIntegration.internalValue;
  }

  // selected_repos - computed: false, optional: true, required: false
  private _selectedRepos = new CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference(this, "selected_repos");
  public get selectedRepos() {
    return this._selectedRepos;
  }
  public putSelectedRepos(value: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos) {
    this._selectedRepos.internalValue = value;
  }
  public resetSelectedRepos() {
    this._selectedRepos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedReposInput() {
    return this._selectedRepos.internalValue;
  }
}

export class CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference {
    return new CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan {
  /**
  * code_base_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#code_base_integrations CdnLoadbalancer#code_base_integrations}
  */
  readonly codeBaseIntegrations: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable;
}

export function cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference | CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_base_integrations: cdktf.listMapper(cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform, true)(struct!.codeBaseIntegrations),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference | CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_base_integrations: {
      value: cdktf.listMapperHcl(cdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform, true)(struct!.codeBaseIntegrations),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeBaseIntegrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegrations = this._codeBaseIntegrations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeBaseIntegrations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeBaseIntegrations.internalValue = value.codeBaseIntegrations;
    }
  }

  // code_base_integrations - computed: false, optional: false, required: true
  private _codeBaseIntegrations = new CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList(this, "code_base_integrations", false);
  public get codeBaseIntegrations() {
    return this._codeBaseIntegrations;
  }
  public putCodeBaseIntegrations(value: CdnLoadbalancerEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable) {
    this._codeBaseIntegrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationsInput() {
    return this._codeBaseIntegrations.internalValue;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery {
  /**
  * api_discovery_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_discovery_ref CdnLoadbalancer#api_discovery_ref}
  */
  readonly apiDiscoveryRef: CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef;
}

export function cdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference | CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_discovery_ref: cdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct!.apiDiscoveryRef),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference | CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_discovery_ref: {
      value: cdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct!.apiDiscoveryRef),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiDiscoveryRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryRef = this._apiDiscoveryRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiDiscoveryRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiDiscoveryRef.internalValue = value.apiDiscoveryRef;
    }
  }

  // api_discovery_ref - computed: false, optional: false, required: true
  private _apiDiscoveryRef = new CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference(this, "api_discovery_ref");
  public get apiDiscoveryRef() {
    return this._apiDiscoveryRef;
  }
  public putApiDiscoveryRef(value: CdnLoadbalancerEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef) {
    this._apiDiscoveryRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryRefInput() {
    return this._apiDiscoveryRef.internalValue;
  }
}
export interface CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#purge_duration_for_inactive_discovered_apis CdnLoadbalancer#purge_duration_for_inactive_discovered_apis}
  */
  readonly purgeDurationForInactiveDiscoveredApis?: number;
}

export function cdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsOutputReference | CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_duration_for_inactive_discovered_apis: cdktf.numberToTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
  }
}


export function cdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsOutputReference | CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_duration_for_inactive_discovered_apis: {
      value: cdktf.numberToHclTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._purgeDurationForInactiveDiscoveredApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeDurationForInactiveDiscoveredApis = this._purgeDurationForInactiveDiscoveredApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoveryDiscoveredApiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._purgeDurationForInactiveDiscoveredApis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._purgeDurationForInactiveDiscoveredApis = value.purgeDurationForInactiveDiscoveredApis;
    }
  }

  // purge_duration_for_inactive_discovered_apis - computed: false, optional: true, required: false
  private _purgeDurationForInactiveDiscoveredApis?: number; 
  public get purgeDurationForInactiveDiscoveredApis() {
    return this.getNumberAttribute('purge_duration_for_inactive_discovered_apis');
  }
  public set purgeDurationForInactiveDiscoveredApis(value: number) {
    this._purgeDurationForInactiveDiscoveredApis = value;
  }
  public resetPurgeDurationForInactiveDiscoveredApis() {
    this._purgeDurationForInactiveDiscoveredApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeDurationForInactiveDiscoveredApisInput() {
    return this._purgeDurationForInactiveDiscoveredApis;
  }
}
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_path CdnLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods: string[];
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpointPath = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpointPath = value.apiEndpointPath;
      this._methods = value.methods;
    }
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_sections CdnLoadbalancer#custom_sections}
  */
  readonly customSections: string[];
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSections),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSections = value.customSections;
    }
  }

  // custom_sections - computed: false, optional: false, required: true
  private _customSections?: string[]; 
  public get customSections() {
    return this.getListAttribute('custom_sections');
  }
  public set customSections(value: string[]) {
    this._customSections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections;
  }
}
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct?: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
