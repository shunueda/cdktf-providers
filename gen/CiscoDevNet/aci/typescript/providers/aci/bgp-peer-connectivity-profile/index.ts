// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpPeerConnectivityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#addr BgpPeerConnectivityProfile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#addr_t_ctrl BgpPeerConnectivityProfile#addr_t_ctrl}
  */
  readonly addrTCtrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#admin_state BgpPeerConnectivityProfile#admin_state}
  */
  readonly adminState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#allowed_self_as_cnt BgpPeerConnectivityProfile#allowed_self_as_cnt}
  */
  readonly allowedSelfAsCnt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#annotation BgpPeerConnectivityProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#as_number BgpPeerConnectivityProfile#as_number}
  */
  readonly asNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#ctrl BgpPeerConnectivityProfile#ctrl}
  */
  readonly ctrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#description BgpPeerConnectivityProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#id BgpPeerConnectivityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#local_asn BgpPeerConnectivityProfile#local_asn}
  */
  readonly localAsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#local_asn_propagate BgpPeerConnectivityProfile#local_asn_propagate}
  */
  readonly localAsnPropagate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#logical_node_profile_dn BgpPeerConnectivityProfile#logical_node_profile_dn}
  */
  readonly logicalNodeProfileDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#name_alias BgpPeerConnectivityProfile#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#parent_dn BgpPeerConnectivityProfile#parent_dn}
  */
  readonly parentDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#password BgpPeerConnectivityProfile#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#peer_ctrl BgpPeerConnectivityProfile#peer_ctrl}
  */
  readonly peerCtrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#private_a_sctrl BgpPeerConnectivityProfile#private_a_sctrl}
  */
  readonly privateASctrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#relation_bgp_rs_peer_pfx_pol BgpPeerConnectivityProfile#relation_bgp_rs_peer_pfx_pol}
  */
  readonly relationBgpRsPeerPfxPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#ttl BgpPeerConnectivityProfile#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#weight BgpPeerConnectivityProfile#weight}
  */
  readonly weight?: string;
  /**
  * relation_bgp_rs_peer_to_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#relation_bgp_rs_peer_to_profile BgpPeerConnectivityProfile#relation_bgp_rs_peer_to_profile}
  */
  readonly relationBgpRsPeerToProfile?: BgpPeerConnectivityProfileRelationBgpRsPeerToProfile[] | cdktf.IResolvable;
}
export interface BgpPeerConnectivityProfileRelationBgpRsPeerToProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#direction BgpPeerConnectivityProfile#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#target_dn BgpPeerConnectivityProfile#target_dn}
  */
  readonly targetDn: string;
}

export function bgpPeerConnectivityProfileRelationBgpRsPeerToProfileToTerraform(struct?: BgpPeerConnectivityProfileRelationBgpRsPeerToProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function bgpPeerConnectivityProfileRelationBgpRsPeerToProfileToHclTerraform(struct?: BgpPeerConnectivityProfileRelationBgpRsPeerToProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpPeerConnectivityProfileRelationBgpRsPeerToProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpPeerConnectivityProfileRelationBgpRsPeerToProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpPeerConnectivityProfileRelationBgpRsPeerToProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._targetDn = value.targetDn;
    }
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // target_dn - computed: false, optional: false, required: true
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}

export class BgpPeerConnectivityProfileRelationBgpRsPeerToProfileList extends cdktf.ComplexList {
  public internalValue? : BgpPeerConnectivityProfileRelationBgpRsPeerToProfile[] | cdktf.IResolvable

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
  public get(index: number): BgpPeerConnectivityProfileRelationBgpRsPeerToProfileOutputReference {
    return new BgpPeerConnectivityProfileRelationBgpRsPeerToProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile aci_bgp_peer_connectivity_profile}
*/
export class BgpPeerConnectivityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_bgp_peer_connectivity_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpPeerConnectivityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpPeerConnectivityProfile to import
  * @param importFromId The id of the existing BgpPeerConnectivityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpPeerConnectivityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_bgp_peer_connectivity_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/bgp_peer_connectivity_profile aci_bgp_peer_connectivity_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpPeerConnectivityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BgpPeerConnectivityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_bgp_peer_connectivity_profile',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addr = config.addr;
    this._addrTCtrl = config.addrTCtrl;
    this._adminState = config.adminState;
    this._allowedSelfAsCnt = config.allowedSelfAsCnt;
    this._annotation = config.annotation;
    this._asNumber = config.asNumber;
    this._ctrl = config.ctrl;
    this._description = config.description;
    this._id = config.id;
    this._localAsn = config.localAsn;
    this._localAsnPropagate = config.localAsnPropagate;
    this._logicalNodeProfileDn = config.logicalNodeProfileDn;
    this._nameAlias = config.nameAlias;
    this._parentDn = config.parentDn;
    this._password = config.password;
    this._peerCtrl = config.peerCtrl;
    this._privateASctrl = config.privateASctrl;
    this._relationBgpRsPeerPfxPol = config.relationBgpRsPeerPfxPol;
    this._ttl = config.ttl;
    this._weight = config.weight;
    this._relationBgpRsPeerToProfile.internalValue = config.relationBgpRsPeerToProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // addr_t_ctrl - computed: true, optional: true, required: false
  private _addrTCtrl?: string[]; 
  public get addrTCtrl() {
    return this.getListAttribute('addr_t_ctrl');
  }
  public set addrTCtrl(value: string[]) {
    this._addrTCtrl = value;
  }
  public resetAddrTCtrl() {
    this._addrTCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTCtrlInput() {
    return this._addrTCtrl;
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // allowed_self_as_cnt - computed: true, optional: true, required: false
  private _allowedSelfAsCnt?: string; 
  public get allowedSelfAsCnt() {
    return this.getStringAttribute('allowed_self_as_cnt');
  }
  public set allowedSelfAsCnt(value: string) {
    this._allowedSelfAsCnt = value;
  }
  public resetAllowedSelfAsCnt() {
    this._allowedSelfAsCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSelfAsCntInput() {
    return this._allowedSelfAsCnt;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // as_number - computed: true, optional: true, required: false
  private _asNumber?: string; 
  public get asNumber() {
    return this.getStringAttribute('as_number');
  }
  public set asNumber(value: string) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // ctrl - computed: true, optional: true, required: false
  private _ctrl?: string[]; 
  public get ctrl() {
    return this.getListAttribute('ctrl');
  }
  public set ctrl(value: string[]) {
    this._ctrl = value;
  }
  public resetCtrl() {
    this._ctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlInput() {
    return this._ctrl;
  }

  // description - computed: true, optional: true, required: false
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

  // local_asn - computed: true, optional: true, required: false
  private _localAsn?: string; 
  public get localAsn() {
    return this.getStringAttribute('local_asn');
  }
  public set localAsn(value: string) {
    this._localAsn = value;
  }
  public resetLocalAsn() {
    this._localAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
  }

  // local_asn_propagate - computed: true, optional: true, required: false
  private _localAsnPropagate?: string; 
  public get localAsnPropagate() {
    return this.getStringAttribute('local_asn_propagate');
  }
  public set localAsnPropagate(value: string) {
    this._localAsnPropagate = value;
  }
  public resetLocalAsnPropagate() {
    this._localAsnPropagate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnPropagateInput() {
    return this._localAsnPropagate;
  }

  // logical_node_profile_dn - computed: false, optional: true, required: false
  private _logicalNodeProfileDn?: string; 
  public get logicalNodeProfileDn() {
    return this.getStringAttribute('logical_node_profile_dn');
  }
  public set logicalNodeProfileDn(value: string) {
    this._logicalNodeProfileDn = value;
  }
  public resetLogicalNodeProfileDn() {
    this._logicalNodeProfileDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalNodeProfileDnInput() {
    return this._logicalNodeProfileDn;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // parent_dn - computed: false, optional: true, required: false
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  public resetParentDn() {
    this._parentDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_ctrl - computed: true, optional: true, required: false
  private _peerCtrl?: string[]; 
  public get peerCtrl() {
    return this.getListAttribute('peer_ctrl');
  }
  public set peerCtrl(value: string[]) {
    this._peerCtrl = value;
  }
  public resetPeerCtrl() {
    this._peerCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCtrlInput() {
    return this._peerCtrl;
  }

  // private_a_sctrl - computed: true, optional: true, required: false
  private _privateASctrl?: string[]; 
  public get privateASctrl() {
    return this.getListAttribute('private_a_sctrl');
  }
  public set privateASctrl(value: string[]) {
    this._privateASctrl = value;
  }
  public resetPrivateASctrl() {
    this._privateASctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateASctrlInput() {
    return this._privateASctrl;
  }

  // relation_bgp_rs_peer_pfx_pol - computed: true, optional: true, required: false
  private _relationBgpRsPeerPfxPol?: string; 
  public get relationBgpRsPeerPfxPol() {
    return this.getStringAttribute('relation_bgp_rs_peer_pfx_pol');
  }
  public set relationBgpRsPeerPfxPol(value: string) {
    this._relationBgpRsPeerPfxPol = value;
  }
  public resetRelationBgpRsPeerPfxPol() {
    this._relationBgpRsPeerPfxPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationBgpRsPeerPfxPolInput() {
    return this._relationBgpRsPeerPfxPol;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: string; 
  public get weight() {
    return this.getStringAttribute('weight');
  }
  public set weight(value: string) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // relation_bgp_rs_peer_to_profile - computed: false, optional: true, required: false
  private _relationBgpRsPeerToProfile = new BgpPeerConnectivityProfileRelationBgpRsPeerToProfileList(this, "relation_bgp_rs_peer_to_profile", true);
  public get relationBgpRsPeerToProfile() {
    return this._relationBgpRsPeerToProfile;
  }
  public putRelationBgpRsPeerToProfile(value: BgpPeerConnectivityProfileRelationBgpRsPeerToProfile[] | cdktf.IResolvable) {
    this._relationBgpRsPeerToProfile.internalValue = value;
  }
  public resetRelationBgpRsPeerToProfile() {
    this._relationBgpRsPeerToProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationBgpRsPeerToProfileInput() {
    return this._relationBgpRsPeerToProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      addr_t_ctrl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addrTCtrl),
      admin_state: cdktf.stringToTerraform(this._adminState),
      allowed_self_as_cnt: cdktf.stringToTerraform(this._allowedSelfAsCnt),
      annotation: cdktf.stringToTerraform(this._annotation),
      as_number: cdktf.stringToTerraform(this._asNumber),
      ctrl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ctrl),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      local_asn: cdktf.stringToTerraform(this._localAsn),
      local_asn_propagate: cdktf.stringToTerraform(this._localAsnPropagate),
      logical_node_profile_dn: cdktf.stringToTerraform(this._logicalNodeProfileDn),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      password: cdktf.stringToTerraform(this._password),
      peer_ctrl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerCtrl),
      private_a_sctrl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateASctrl),
      relation_bgp_rs_peer_pfx_pol: cdktf.stringToTerraform(this._relationBgpRsPeerPfxPol),
      ttl: cdktf.stringToTerraform(this._ttl),
      weight: cdktf.stringToTerraform(this._weight),
      relation_bgp_rs_peer_to_profile: cdktf.listMapper(bgpPeerConnectivityProfileRelationBgpRsPeerToProfileToTerraform, true)(this._relationBgpRsPeerToProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr: {
        value: cdktf.stringToHclTerraform(this._addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addr_t_ctrl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addrTCtrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_self_as_cnt: {
        value: cdktf.stringToHclTerraform(this._allowedSelfAsCnt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ctrl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ctrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      local_asn: {
        value: cdktf.stringToHclTerraform(this._localAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_asn_propagate: {
        value: cdktf.stringToHclTerraform(this._localAsnPropagate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_node_profile_dn: {
        value: cdktf.stringToHclTerraform(this._logicalNodeProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_ctrl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerCtrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      private_a_sctrl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateASctrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      relation_bgp_rs_peer_pfx_pol: {
        value: cdktf.stringToHclTerraform(this._relationBgpRsPeerPfxPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.stringToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_bgp_rs_peer_to_profile: {
        value: cdktf.listMapperHcl(bgpPeerConnectivityProfileRelationBgpRsPeerToProfileToHclTerraform, true)(this._relationBgpRsPeerToProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BgpPeerConnectivityProfileRelationBgpRsPeerToProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
