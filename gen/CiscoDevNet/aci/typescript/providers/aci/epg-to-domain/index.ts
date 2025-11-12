// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EpgToDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#allow_micro_seg EpgToDomain#allow_micro_seg}
  */
  readonly allowMicroSeg?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#annotation EpgToDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#application_epg_dn EpgToDomain#application_epg_dn}
  */
  readonly applicationEpgDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#binding_type EpgToDomain#binding_type}
  */
  readonly bindingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#custom_epg_name EpgToDomain#custom_epg_name}
  */
  readonly customEpgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#delimiter EpgToDomain#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#encap EpgToDomain#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#encap_mode EpgToDomain#encap_mode}
  */
  readonly encapMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#enhanced_lag_policy EpgToDomain#enhanced_lag_policy}
  */
  readonly enhancedLagPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#epg_cos EpgToDomain#epg_cos}
  */
  readonly epgCos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#epg_cos_pref EpgToDomain#epg_cos_pref}
  */
  readonly epgCosPref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#id EpgToDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#instr_imedcy EpgToDomain#instr_imedcy}
  */
  readonly instrImedcy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#lag_policy_name EpgToDomain#lag_policy_name}
  */
  readonly lagPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#netflow_dir EpgToDomain#netflow_dir}
  */
  readonly netflowDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#netflow_pref EpgToDomain#netflow_pref}
  */
  readonly netflowPref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#num_ports EpgToDomain#num_ports}
  */
  readonly numPorts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#port_allocation EpgToDomain#port_allocation}
  */
  readonly portAllocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#primary_encap EpgToDomain#primary_encap}
  */
  readonly primaryEncap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#primary_encap_inner EpgToDomain#primary_encap_inner}
  */
  readonly primaryEncapInner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#res_imedcy EpgToDomain#res_imedcy}
  */
  readonly resImedcy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#secondary_encap_inner EpgToDomain#secondary_encap_inner}
  */
  readonly secondaryEncapInner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#switching_mode EpgToDomain#switching_mode}
  */
  readonly switchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#tdn EpgToDomain#tdn}
  */
  readonly tdn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#vmm_allow_promiscuous EpgToDomain#vmm_allow_promiscuous}
  */
  readonly vmmAllowPromiscuous?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#vmm_forged_transmits EpgToDomain#vmm_forged_transmits}
  */
  readonly vmmForgedTransmits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#vmm_mac_changes EpgToDomain#vmm_mac_changes}
  */
  readonly vmmMacChanges?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain aci_epg_to_domain}
*/
export class EpgToDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_epg_to_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EpgToDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EpgToDomain to import
  * @param importFromId The id of the existing EpgToDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EpgToDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_epg_to_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/epg_to_domain aci_epg_to_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EpgToDomainConfig
  */
  public constructor(scope: Construct, id: string, config: EpgToDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_epg_to_domain',
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
    this._allowMicroSeg = config.allowMicroSeg;
    this._annotation = config.annotation;
    this._applicationEpgDn = config.applicationEpgDn;
    this._bindingType = config.bindingType;
    this._customEpgName = config.customEpgName;
    this._delimiter = config.delimiter;
    this._encap = config.encap;
    this._encapMode = config.encapMode;
    this._enhancedLagPolicy = config.enhancedLagPolicy;
    this._epgCos = config.epgCos;
    this._epgCosPref = config.epgCosPref;
    this._id = config.id;
    this._instrImedcy = config.instrImedcy;
    this._lagPolicyName = config.lagPolicyName;
    this._netflowDir = config.netflowDir;
    this._netflowPref = config.netflowPref;
    this._numPorts = config.numPorts;
    this._portAllocation = config.portAllocation;
    this._primaryEncap = config.primaryEncap;
    this._primaryEncapInner = config.primaryEncapInner;
    this._resImedcy = config.resImedcy;
    this._secondaryEncapInner = config.secondaryEncapInner;
    this._switchingMode = config.switchingMode;
    this._tdn = config.tdn;
    this._vmmAllowPromiscuous = config.vmmAllowPromiscuous;
    this._vmmForgedTransmits = config.vmmForgedTransmits;
    this._vmmMacChanges = config.vmmMacChanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_micro_seg - computed: true, optional: true, required: false
  private _allowMicroSeg?: boolean | cdktf.IResolvable; 
  public get allowMicroSeg() {
    return this.getBooleanAttribute('allow_micro_seg');
  }
  public set allowMicroSeg(value: boolean | cdktf.IResolvable) {
    this._allowMicroSeg = value;
  }
  public resetAllowMicroSeg() {
    this._allowMicroSeg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMicroSegInput() {
    return this._allowMicroSeg;
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

  // application_epg_dn - computed: false, optional: false, required: true
  private _applicationEpgDn?: string; 
  public get applicationEpgDn() {
    return this.getStringAttribute('application_epg_dn');
  }
  public set applicationEpgDn(value: string) {
    this._applicationEpgDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEpgDnInput() {
    return this._applicationEpgDn;
  }

  // binding_type - computed: true, optional: true, required: false
  private _bindingType?: string; 
  public get bindingType() {
    return this.getStringAttribute('binding_type');
  }
  public set bindingType(value: string) {
    this._bindingType = value;
  }
  public resetBindingType() {
    this._bindingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingTypeInput() {
    return this._bindingType;
  }

  // custom_epg_name - computed: true, optional: true, required: false
  private _customEpgName?: string; 
  public get customEpgName() {
    return this.getStringAttribute('custom_epg_name');
  }
  public set customEpgName(value: string) {
    this._customEpgName = value;
  }
  public resetCustomEpgName() {
    this._customEpgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEpgNameInput() {
    return this._customEpgName;
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // encap - computed: true, optional: true, required: false
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

  // encap_mode - computed: true, optional: true, required: false
  private _encapMode?: string; 
  public get encapMode() {
    return this.getStringAttribute('encap_mode');
  }
  public set encapMode(value: string) {
    this._encapMode = value;
  }
  public resetEncapMode() {
    this._encapMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapModeInput() {
    return this._encapMode;
  }

  // enhanced_lag_policy - computed: false, optional: true, required: false
  private _enhancedLagPolicy?: string; 
  public get enhancedLagPolicy() {
    return this.getStringAttribute('enhanced_lag_policy');
  }
  public set enhancedLagPolicy(value: string) {
    this._enhancedLagPolicy = value;
  }
  public resetEnhancedLagPolicy() {
    this._enhancedLagPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedLagPolicyInput() {
    return this._enhancedLagPolicy;
  }

  // epg_cos - computed: true, optional: true, required: false
  private _epgCos?: string; 
  public get epgCos() {
    return this.getStringAttribute('epg_cos');
  }
  public set epgCos(value: string) {
    this._epgCos = value;
  }
  public resetEpgCos() {
    this._epgCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgCosInput() {
    return this._epgCos;
  }

  // epg_cos_pref - computed: true, optional: true, required: false
  private _epgCosPref?: string; 
  public get epgCosPref() {
    return this.getStringAttribute('epg_cos_pref');
  }
  public set epgCosPref(value: string) {
    this._epgCosPref = value;
  }
  public resetEpgCosPref() {
    this._epgCosPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgCosPrefInput() {
    return this._epgCosPref;
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

  // instr_imedcy - computed: true, optional: true, required: false
  private _instrImedcy?: string; 
  public get instrImedcy() {
    return this.getStringAttribute('instr_imedcy');
  }
  public set instrImedcy(value: string) {
    this._instrImedcy = value;
  }
  public resetInstrImedcy() {
    this._instrImedcy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instrImedcyInput() {
    return this._instrImedcy;
  }

  // lag_policy_name - computed: true, optional: true, required: false
  private _lagPolicyName?: string; 
  public get lagPolicyName() {
    return this.getStringAttribute('lag_policy_name');
  }
  public set lagPolicyName(value: string) {
    this._lagPolicyName = value;
  }
  public resetLagPolicyName() {
    this._lagPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagPolicyNameInput() {
    return this._lagPolicyName;
  }

  // netflow_dir - computed: true, optional: true, required: false
  private _netflowDir?: string; 
  public get netflowDir() {
    return this.getStringAttribute('netflow_dir');
  }
  public set netflowDir(value: string) {
    this._netflowDir = value;
  }
  public resetNetflowDir() {
    this._netflowDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowDirInput() {
    return this._netflowDir;
  }

  // netflow_pref - computed: true, optional: true, required: false
  private _netflowPref?: string; 
  public get netflowPref() {
    return this.getStringAttribute('netflow_pref');
  }
  public set netflowPref(value: string) {
    this._netflowPref = value;
  }
  public resetNetflowPref() {
    this._netflowPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowPrefInput() {
    return this._netflowPref;
  }

  // num_ports - computed: true, optional: true, required: false
  private _numPorts?: string; 
  public get numPorts() {
    return this.getStringAttribute('num_ports');
  }
  public set numPorts(value: string) {
    this._numPorts = value;
  }
  public resetNumPorts() {
    this._numPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPortsInput() {
    return this._numPorts;
  }

  // port_allocation - computed: true, optional: true, required: false
  private _portAllocation?: string; 
  public get portAllocation() {
    return this.getStringAttribute('port_allocation');
  }
  public set portAllocation(value: string) {
    this._portAllocation = value;
  }
  public resetPortAllocation() {
    this._portAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portAllocationInput() {
    return this._portAllocation;
  }

  // primary_encap - computed: true, optional: true, required: false
  private _primaryEncap?: string; 
  public get primaryEncap() {
    return this.getStringAttribute('primary_encap');
  }
  public set primaryEncap(value: string) {
    this._primaryEncap = value;
  }
  public resetPrimaryEncap() {
    this._primaryEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEncapInput() {
    return this._primaryEncap;
  }

  // primary_encap_inner - computed: true, optional: true, required: false
  private _primaryEncapInner?: string; 
  public get primaryEncapInner() {
    return this.getStringAttribute('primary_encap_inner');
  }
  public set primaryEncapInner(value: string) {
    this._primaryEncapInner = value;
  }
  public resetPrimaryEncapInner() {
    this._primaryEncapInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEncapInnerInput() {
    return this._primaryEncapInner;
  }

  // res_imedcy - computed: true, optional: true, required: false
  private _resImedcy?: string; 
  public get resImedcy() {
    return this.getStringAttribute('res_imedcy');
  }
  public set resImedcy(value: string) {
    this._resImedcy = value;
  }
  public resetResImedcy() {
    this._resImedcy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resImedcyInput() {
    return this._resImedcy;
  }

  // secondary_encap_inner - computed: true, optional: true, required: false
  private _secondaryEncapInner?: string; 
  public get secondaryEncapInner() {
    return this.getStringAttribute('secondary_encap_inner');
  }
  public set secondaryEncapInner(value: string) {
    this._secondaryEncapInner = value;
  }
  public resetSecondaryEncapInner() {
    this._secondaryEncapInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEncapInnerInput() {
    return this._secondaryEncapInner;
  }

  // switching_mode - computed: true, optional: true, required: false
  private _switchingMode?: string; 
  public get switchingMode() {
    return this.getStringAttribute('switching_mode');
  }
  public set switchingMode(value: string) {
    this._switchingMode = value;
  }
  public resetSwitchingMode() {
    this._switchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingModeInput() {
    return this._switchingMode;
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

  // vmm_allow_promiscuous - computed: true, optional: true, required: false
  private _vmmAllowPromiscuous?: string; 
  public get vmmAllowPromiscuous() {
    return this.getStringAttribute('vmm_allow_promiscuous');
  }
  public set vmmAllowPromiscuous(value: string) {
    this._vmmAllowPromiscuous = value;
  }
  public resetVmmAllowPromiscuous() {
    this._vmmAllowPromiscuous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmAllowPromiscuousInput() {
    return this._vmmAllowPromiscuous;
  }

  // vmm_forged_transmits - computed: true, optional: true, required: false
  private _vmmForgedTransmits?: string; 
  public get vmmForgedTransmits() {
    return this.getStringAttribute('vmm_forged_transmits');
  }
  public set vmmForgedTransmits(value: string) {
    this._vmmForgedTransmits = value;
  }
  public resetVmmForgedTransmits() {
    this._vmmForgedTransmits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmForgedTransmitsInput() {
    return this._vmmForgedTransmits;
  }

  // vmm_id - computed: true, optional: false, required: false
  public get vmmId() {
    return this.getStringAttribute('vmm_id');
  }

  // vmm_mac_changes - computed: true, optional: true, required: false
  private _vmmMacChanges?: string; 
  public get vmmMacChanges() {
    return this.getStringAttribute('vmm_mac_changes');
  }
  public set vmmMacChanges(value: string) {
    this._vmmMacChanges = value;
  }
  public resetVmmMacChanges() {
    this._vmmMacChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmMacChangesInput() {
    return this._vmmMacChanges;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_micro_seg: cdktf.booleanToTerraform(this._allowMicroSeg),
      annotation: cdktf.stringToTerraform(this._annotation),
      application_epg_dn: cdktf.stringToTerraform(this._applicationEpgDn),
      binding_type: cdktf.stringToTerraform(this._bindingType),
      custom_epg_name: cdktf.stringToTerraform(this._customEpgName),
      delimiter: cdktf.stringToTerraform(this._delimiter),
      encap: cdktf.stringToTerraform(this._encap),
      encap_mode: cdktf.stringToTerraform(this._encapMode),
      enhanced_lag_policy: cdktf.stringToTerraform(this._enhancedLagPolicy),
      epg_cos: cdktf.stringToTerraform(this._epgCos),
      epg_cos_pref: cdktf.stringToTerraform(this._epgCosPref),
      id: cdktf.stringToTerraform(this._id),
      instr_imedcy: cdktf.stringToTerraform(this._instrImedcy),
      lag_policy_name: cdktf.stringToTerraform(this._lagPolicyName),
      netflow_dir: cdktf.stringToTerraform(this._netflowDir),
      netflow_pref: cdktf.stringToTerraform(this._netflowPref),
      num_ports: cdktf.stringToTerraform(this._numPorts),
      port_allocation: cdktf.stringToTerraform(this._portAllocation),
      primary_encap: cdktf.stringToTerraform(this._primaryEncap),
      primary_encap_inner: cdktf.stringToTerraform(this._primaryEncapInner),
      res_imedcy: cdktf.stringToTerraform(this._resImedcy),
      secondary_encap_inner: cdktf.stringToTerraform(this._secondaryEncapInner),
      switching_mode: cdktf.stringToTerraform(this._switchingMode),
      tdn: cdktf.stringToTerraform(this._tdn),
      vmm_allow_promiscuous: cdktf.stringToTerraform(this._vmmAllowPromiscuous),
      vmm_forged_transmits: cdktf.stringToTerraform(this._vmmForgedTransmits),
      vmm_mac_changes: cdktf.stringToTerraform(this._vmmMacChanges),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_micro_seg: {
        value: cdktf.booleanToHclTerraform(this._allowMicroSeg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_epg_dn: {
        value: cdktf.stringToHclTerraform(this._applicationEpgDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binding_type: {
        value: cdktf.stringToHclTerraform(this._bindingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_epg_name: {
        value: cdktf.stringToHclTerraform(this._customEpgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delimiter: {
        value: cdktf.stringToHclTerraform(this._delimiter),
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
      encap_mode: {
        value: cdktf.stringToHclTerraform(this._encapMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_lag_policy: {
        value: cdktf.stringToHclTerraform(this._enhancedLagPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epg_cos: {
        value: cdktf.stringToHclTerraform(this._epgCos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epg_cos_pref: {
        value: cdktf.stringToHclTerraform(this._epgCosPref),
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
      instr_imedcy: {
        value: cdktf.stringToHclTerraform(this._instrImedcy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lag_policy_name: {
        value: cdktf.stringToHclTerraform(this._lagPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_dir: {
        value: cdktf.stringToHclTerraform(this._netflowDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_pref: {
        value: cdktf.stringToHclTerraform(this._netflowPref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_ports: {
        value: cdktf.stringToHclTerraform(this._numPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_allocation: {
        value: cdktf.stringToHclTerraform(this._portAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_encap: {
        value: cdktf.stringToHclTerraform(this._primaryEncap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_encap_inner: {
        value: cdktf.stringToHclTerraform(this._primaryEncapInner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      res_imedcy: {
        value: cdktf.stringToHclTerraform(this._resImedcy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_encap_inner: {
        value: cdktf.stringToHclTerraform(this._secondaryEncapInner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switching_mode: {
        value: cdktf.stringToHclTerraform(this._switchingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tdn: {
        value: cdktf.stringToHclTerraform(this._tdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmm_allow_promiscuous: {
        value: cdktf.stringToHclTerraform(this._vmmAllowPromiscuous),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmm_forged_transmits: {
        value: cdktf.stringToHclTerraform(this._vmmForgedTransmits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmm_mac_changes: {
        value: cdktf.stringToHclTerraform(this._vmmMacChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
