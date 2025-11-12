// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface L3OutFloatingSviConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#addr L3OutFloatingSvi#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#annotation L3OutFloatingSvi#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#autostate L3OutFloatingSvi#autostate}
  */
  readonly autostate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#description L3OutFloatingSvi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#encap L3OutFloatingSvi#encap}
  */
  readonly encap: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#encap_scope L3OutFloatingSvi#encap_scope}
  */
  readonly encapScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#id L3OutFloatingSvi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#if_inst_t L3OutFloatingSvi#if_inst_t}
  */
  readonly ifInstT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#ipv6_dad L3OutFloatingSvi#ipv6_dad}
  */
  readonly ipv6Dad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#ll_addr L3OutFloatingSvi#ll_addr}
  */
  readonly llAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#logical_interface_profile_dn L3OutFloatingSvi#logical_interface_profile_dn}
  */
  readonly logicalInterfaceProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#mac L3OutFloatingSvi#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#mode L3OutFloatingSvi#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#mtu L3OutFloatingSvi#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#node_dn L3OutFloatingSvi#node_dn}
  */
  readonly nodeDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#target_dscp L3OutFloatingSvi#target_dscp}
  */
  readonly targetDscp?: string;
  /**
  * relation_l3ext_rs_dyn_path_att block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#relation_l3ext_rs_dyn_path_att L3OutFloatingSvi#relation_l3ext_rs_dyn_path_att}
  */
  readonly relationL3ExtRsDynPathAtt?: L3OutFloatingSviRelationL3ExtRsDynPathAtt[] | cdktf.IResolvable;
}
export interface L3OutFloatingSviRelationL3ExtRsDynPathAtt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#encap L3OutFloatingSvi#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#enhanced_lag_policy_dn L3OutFloatingSvi#enhanced_lag_policy_dn}
  */
  readonly enhancedLagPolicyDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#floating_address L3OutFloatingSvi#floating_address}
  */
  readonly floatingAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#forged_transmit L3OutFloatingSvi#forged_transmit}
  */
  readonly forgedTransmit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#mac_change L3OutFloatingSvi#mac_change}
  */
  readonly macChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#promiscuous_mode L3OutFloatingSvi#promiscuous_mode}
  */
  readonly promiscuousMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#tdn L3OutFloatingSvi#tdn}
  */
  readonly tdn: string;
}

export function l3OutFloatingSviRelationL3ExtRsDynPathAttToTerraform(struct?: L3OutFloatingSviRelationL3ExtRsDynPathAtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encap: cdktf.stringToTerraform(struct!.encap),
    enhanced_lag_policy_dn: cdktf.stringToTerraform(struct!.enhancedLagPolicyDn),
    floating_address: cdktf.stringToTerraform(struct!.floatingAddress),
    forged_transmit: cdktf.stringToTerraform(struct!.forgedTransmit),
    mac_change: cdktf.stringToTerraform(struct!.macChange),
    promiscuous_mode: cdktf.stringToTerraform(struct!.promiscuousMode),
    tdn: cdktf.stringToTerraform(struct!.tdn),
  }
}


export function l3OutFloatingSviRelationL3ExtRsDynPathAttToHclTerraform(struct?: L3OutFloatingSviRelationL3ExtRsDynPathAtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enhanced_lag_policy_dn: {
      value: cdktf.stringToHclTerraform(struct!.enhancedLagPolicyDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_address: {
      value: cdktf.stringToHclTerraform(struct!.floatingAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forged_transmit: {
      value: cdktf.stringToHclTerraform(struct!.forgedTransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_change: {
      value: cdktf.stringToHclTerraform(struct!.macChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promiscuous_mode: {
      value: cdktf.stringToHclTerraform(struct!.promiscuousMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tdn: {
      value: cdktf.stringToHclTerraform(struct!.tdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class L3OutFloatingSviRelationL3ExtRsDynPathAttOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): L3OutFloatingSviRelationL3ExtRsDynPathAtt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._enhancedLagPolicyDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedLagPolicyDn = this._enhancedLagPolicyDn;
    }
    if (this._floatingAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingAddress = this._floatingAddress;
    }
    if (this._forgedTransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.forgedTransmit = this._forgedTransmit;
    }
    if (this._macChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.macChange = this._macChange;
    }
    if (this._promiscuousMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.promiscuousMode = this._promiscuousMode;
    }
    if (this._tdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tdn = this._tdn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: L3OutFloatingSviRelationL3ExtRsDynPathAtt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encap = undefined;
      this._enhancedLagPolicyDn = undefined;
      this._floatingAddress = undefined;
      this._forgedTransmit = undefined;
      this._macChange = undefined;
      this._promiscuousMode = undefined;
      this._tdn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encap = value.encap;
      this._enhancedLagPolicyDn = value.enhancedLagPolicyDn;
      this._floatingAddress = value.floatingAddress;
      this._forgedTransmit = value.forgedTransmit;
      this._macChange = value.macChange;
      this._promiscuousMode = value.promiscuousMode;
      this._tdn = value.tdn;
    }
  }

  // encap - computed: false, optional: true, required: false
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  public resetEncap() {
    this._encap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // enhanced_lag_policy_dn - computed: false, optional: true, required: false
  private _enhancedLagPolicyDn?: string; 
  public get enhancedLagPolicyDn() {
    return this.getStringAttribute('enhanced_lag_policy_dn');
  }
  public set enhancedLagPolicyDn(value: string) {
    this._enhancedLagPolicyDn = value;
  }
  public resetEnhancedLagPolicyDn() {
    this._enhancedLagPolicyDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedLagPolicyDnInput() {
    return this._enhancedLagPolicyDn;
  }

  // floating_address - computed: false, optional: false, required: true
  private _floatingAddress?: string; 
  public get floatingAddress() {
    return this.getStringAttribute('floating_address');
  }
  public set floatingAddress(value: string) {
    this._floatingAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingAddressInput() {
    return this._floatingAddress;
  }

  // forged_transmit - computed: false, optional: true, required: false
  private _forgedTransmit?: string; 
  public get forgedTransmit() {
    return this.getStringAttribute('forged_transmit');
  }
  public set forgedTransmit(value: string) {
    this._forgedTransmit = value;
  }
  public resetForgedTransmit() {
    this._forgedTransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgedTransmitInput() {
    return this._forgedTransmit;
  }

  // mac_change - computed: false, optional: true, required: false
  private _macChange?: string; 
  public get macChange() {
    return this.getStringAttribute('mac_change');
  }
  public set macChange(value: string) {
    this._macChange = value;
  }
  public resetMacChange() {
    this._macChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macChangeInput() {
    return this._macChange;
  }

  // promiscuous_mode - computed: false, optional: true, required: false
  private _promiscuousMode?: string; 
  public get promiscuousMode() {
    return this.getStringAttribute('promiscuous_mode');
  }
  public set promiscuousMode(value: string) {
    this._promiscuousMode = value;
  }
  public resetPromiscuousMode() {
    this._promiscuousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promiscuousModeInput() {
    return this._promiscuousMode;
  }

  // tdn - computed: false, optional: false, required: true
  private _tdn?: string; 
  public get tdn() {
    return this.getStringAttribute('tdn');
  }
  public set tdn(value: string) {
    this._tdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tdnInput() {
    return this._tdn;
  }
}

export class L3OutFloatingSviRelationL3ExtRsDynPathAttList extends cdktf.ComplexList {
  public internalValue? : L3OutFloatingSviRelationL3ExtRsDynPathAtt[] | cdktf.IResolvable

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
  public get(index: number): L3OutFloatingSviRelationL3ExtRsDynPathAttOutputReference {
    return new L3OutFloatingSviRelationL3ExtRsDynPathAttOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi aci_l3out_floating_svi}
*/
export class L3OutFloatingSvi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_floating_svi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a L3OutFloatingSvi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the L3OutFloatingSvi to import
  * @param importFromId The id of the existing L3OutFloatingSvi that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the L3OutFloatingSvi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_floating_svi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/l3out_floating_svi aci_l3out_floating_svi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options L3OutFloatingSviConfig
  */
  public constructor(scope: Construct, id: string, config: L3OutFloatingSviConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_floating_svi',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
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
    this._annotation = config.annotation;
    this._autostate = config.autostate;
    this._description = config.description;
    this._encap = config.encap;
    this._encapScope = config.encapScope;
    this._id = config.id;
    this._ifInstT = config.ifInstT;
    this._ipv6Dad = config.ipv6Dad;
    this._llAddr = config.llAddr;
    this._logicalInterfaceProfileDn = config.logicalInterfaceProfileDn;
    this._mac = config.mac;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._nodeDn = config.nodeDn;
    this._targetDscp = config.targetDscp;
    this._relationL3ExtRsDynPathAtt.internalValue = config.relationL3ExtRsDynPathAtt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: true, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

  // autostate - computed: true, optional: true, required: false
  private _autostate?: string; 
  public get autostate() {
    return this.getStringAttribute('autostate');
  }
  public set autostate(value: string) {
    this._autostate = value;
  }
  public resetAutostate() {
    this._autostate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autostateInput() {
    return this._autostate;
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

  // encap - computed: false, optional: false, required: true
  private _encap?: string; 
  public get encap() {
    return this.getStringAttribute('encap');
  }
  public set encap(value: string) {
    this._encap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encapInput() {
    return this._encap;
  }

  // encap_scope - computed: true, optional: true, required: false
  private _encapScope?: string; 
  public get encapScope() {
    return this.getStringAttribute('encap_scope');
  }
  public set encapScope(value: string) {
    this._encapScope = value;
  }
  public resetEncapScope() {
    this._encapScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapScopeInput() {
    return this._encapScope;
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

  // if_inst_t - computed: true, optional: true, required: false
  private _ifInstT?: string; 
  public get ifInstT() {
    return this.getStringAttribute('if_inst_t');
  }
  public set ifInstT(value: string) {
    this._ifInstT = value;
  }
  public resetIfInstT() {
    this._ifInstT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInstTInput() {
    return this._ifInstT;
  }

  // ipv6_dad - computed: true, optional: true, required: false
  private _ipv6Dad?: string; 
  public get ipv6Dad() {
    return this.getStringAttribute('ipv6_dad');
  }
  public set ipv6Dad(value: string) {
    this._ipv6Dad = value;
  }
  public resetIpv6Dad() {
    this._ipv6Dad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DadInput() {
    return this._ipv6Dad;
  }

  // ll_addr - computed: true, optional: true, required: false
  private _llAddr?: string; 
  public get llAddr() {
    return this.getStringAttribute('ll_addr');
  }
  public set llAddr(value: string) {
    this._llAddr = value;
  }
  public resetLlAddr() {
    this._llAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llAddrInput() {
    return this._llAddr;
  }

  // logical_interface_profile_dn - computed: false, optional: false, required: true
  private _logicalInterfaceProfileDn?: string; 
  public get logicalInterfaceProfileDn() {
    return this.getStringAttribute('logical_interface_profile_dn');
  }
  public set logicalInterfaceProfileDn(value: string) {
    this._logicalInterfaceProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalInterfaceProfileDnInput() {
    return this._logicalInterfaceProfileDn;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // node_dn - computed: false, optional: false, required: true
  private _nodeDn?: string; 
  public get nodeDn() {
    return this.getStringAttribute('node_dn');
  }
  public set nodeDn(value: string) {
    this._nodeDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDnInput() {
    return this._nodeDn;
  }

  // target_dscp - computed: true, optional: true, required: false
  private _targetDscp?: string; 
  public get targetDscp() {
    return this.getStringAttribute('target_dscp');
  }
  public set targetDscp(value: string) {
    this._targetDscp = value;
  }
  public resetTargetDscp() {
    this._targetDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDscpInput() {
    return this._targetDscp;
  }

  // relation_l3ext_rs_dyn_path_att - computed: false, optional: true, required: false
  private _relationL3ExtRsDynPathAtt = new L3OutFloatingSviRelationL3ExtRsDynPathAttList(this, "relation_l3ext_rs_dyn_path_att", true);
  public get relationL3ExtRsDynPathAtt() {
    return this._relationL3ExtRsDynPathAtt;
  }
  public putRelationL3ExtRsDynPathAtt(value: L3OutFloatingSviRelationL3ExtRsDynPathAtt[] | cdktf.IResolvable) {
    this._relationL3ExtRsDynPathAtt.internalValue = value;
  }
  public resetRelationL3ExtRsDynPathAtt() {
    this._relationL3ExtRsDynPathAtt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationL3ExtRsDynPathAttInput() {
    return this._relationL3ExtRsDynPathAtt.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      annotation: cdktf.stringToTerraform(this._annotation),
      autostate: cdktf.stringToTerraform(this._autostate),
      description: cdktf.stringToTerraform(this._description),
      encap: cdktf.stringToTerraform(this._encap),
      encap_scope: cdktf.stringToTerraform(this._encapScope),
      id: cdktf.stringToTerraform(this._id),
      if_inst_t: cdktf.stringToTerraform(this._ifInstT),
      ipv6_dad: cdktf.stringToTerraform(this._ipv6Dad),
      ll_addr: cdktf.stringToTerraform(this._llAddr),
      logical_interface_profile_dn: cdktf.stringToTerraform(this._logicalInterfaceProfileDn),
      mac: cdktf.stringToTerraform(this._mac),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.stringToTerraform(this._mtu),
      node_dn: cdktf.stringToTerraform(this._nodeDn),
      target_dscp: cdktf.stringToTerraform(this._targetDscp),
      relation_l3ext_rs_dyn_path_att: cdktf.listMapper(l3OutFloatingSviRelationL3ExtRsDynPathAttToTerraform, true)(this._relationL3ExtRsDynPathAtt.internalValue),
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
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autostate: {
        value: cdktf.stringToHclTerraform(this._autostate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap: {
        value: cdktf.stringToHclTerraform(this._encap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap_scope: {
        value: cdktf.stringToHclTerraform(this._encapScope),
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
      if_inst_t: {
        value: cdktf.stringToHclTerraform(this._ifInstT),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_dad: {
        value: cdktf.stringToHclTerraform(this._ipv6Dad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ll_addr: {
        value: cdktf.stringToHclTerraform(this._llAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_interface_profile_dn: {
        value: cdktf.stringToHclTerraform(this._logicalInterfaceProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_dn: {
        value: cdktf.stringToHclTerraform(this._nodeDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_dscp: {
        value: cdktf.stringToHclTerraform(this._targetDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_l3ext_rs_dyn_path_att: {
        value: cdktf.listMapperHcl(l3OutFloatingSviRelationL3ExtRsDynPathAttToHclTerraform, true)(this._relationL3ExtRsDynPathAtt.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "L3OutFloatingSviRelationL3ExtRsDynPathAttList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
