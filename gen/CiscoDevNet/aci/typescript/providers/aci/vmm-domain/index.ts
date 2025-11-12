// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmmDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#access_mode VmmDomain#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#annotation VmmDomain#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#arp_learning VmmDomain#arp_learning}
  */
  readonly arpLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#ave_time_out VmmDomain#ave_time_out}
  */
  readonly aveTimeOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#config_infra_pg VmmDomain#config_infra_pg}
  */
  readonly configInfraPg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#ctrl_knob VmmDomain#ctrl_knob}
  */
  readonly ctrlKnob?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#delimiter VmmDomain#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#enable_ave VmmDomain#enable_ave}
  */
  readonly enableAve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#enable_tag VmmDomain#enable_tag}
  */
  readonly enableTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#enable_vm_folder VmmDomain#enable_vm_folder}
  */
  readonly enableVmFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#encap_mode VmmDomain#encap_mode}
  */
  readonly encapMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#enf_pref VmmDomain#enf_pref}
  */
  readonly enfPref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#ep_inventory_type VmmDomain#ep_inventory_type}
  */
  readonly epInventoryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#ep_ret_time VmmDomain#ep_ret_time}
  */
  readonly epRetTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#hv_avail_monitor VmmDomain#hv_avail_monitor}
  */
  readonly hvAvailMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#id VmmDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#mcast_addr VmmDomain#mcast_addr}
  */
  readonly mcastAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#mode VmmDomain#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#name VmmDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#name_alias VmmDomain#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#pref_encap_mode VmmDomain#pref_encap_mode}
  */
  readonly prefEncapMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#provider_profile_dn VmmDomain#provider_profile_dn}
  */
  readonly providerProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_infra_rs_dom_vxlan_ns_def VmmDomain#relation_infra_rs_dom_vxlan_ns_def}
  */
  readonly relationInfraRsDomVxlanNsDef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_infra_rs_vip_addr_ns VmmDomain#relation_infra_rs_vip_addr_ns}
  */
  readonly relationInfraRsVipAddrNs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_infra_rs_vlan_ns VmmDomain#relation_infra_rs_vlan_ns}
  */
  readonly relationInfraRsVlanNs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_infra_rs_vlan_ns_def VmmDomain#relation_infra_rs_vlan_ns_def}
  */
  readonly relationInfraRsVlanNsDef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_vmm_rs_default_cdp_if_pol VmmDomain#relation_vmm_rs_default_cdp_if_pol}
  */
  readonly relationVmmRsDefaultCdpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_vmm_rs_default_fw_pol VmmDomain#relation_vmm_rs_default_fw_pol}
  */
  readonly relationVmmRsDefaultFwPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_vmm_rs_default_l2_inst_pol VmmDomain#relation_vmm_rs_default_l2_inst_pol}
  */
  readonly relationVmmRsDefaultL2InstPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_vmm_rs_default_lacp_lag_pol VmmDomain#relation_vmm_rs_default_lacp_lag_pol}
  */
  readonly relationVmmRsDefaultLacpLagPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_vmm_rs_default_lldp_if_pol VmmDomain#relation_vmm_rs_default_lldp_if_pol}
  */
  readonly relationVmmRsDefaultLldpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_vmm_rs_default_stp_if_pol VmmDomain#relation_vmm_rs_default_stp_if_pol}
  */
  readonly relationVmmRsDefaultStpIfPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_vmm_rs_dom_mcast_addr_ns VmmDomain#relation_vmm_rs_dom_mcast_addr_ns}
  */
  readonly relationVmmRsDomMcastAddrNs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#relation_vmm_rs_pref_enhanced_lag_pol VmmDomain#relation_vmm_rs_pref_enhanced_lag_pol}
  */
  readonly relationVmmRsPrefEnhancedLagPol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain aci_vmm_domain}
*/
export class VmmDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_vmm_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmmDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmmDomain to import
  * @param importFromId The id of the existing VmmDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmmDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_vmm_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_domain aci_vmm_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmmDomainConfig
  */
  public constructor(scope: Construct, id: string, config: VmmDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_vmm_domain',
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
    this._accessMode = config.accessMode;
    this._annotation = config.annotation;
    this._arpLearning = config.arpLearning;
    this._aveTimeOut = config.aveTimeOut;
    this._configInfraPg = config.configInfraPg;
    this._ctrlKnob = config.ctrlKnob;
    this._delimiter = config.delimiter;
    this._enableAve = config.enableAve;
    this._enableTag = config.enableTag;
    this._enableVmFolder = config.enableVmFolder;
    this._encapMode = config.encapMode;
    this._enfPref = config.enfPref;
    this._epInventoryType = config.epInventoryType;
    this._epRetTime = config.epRetTime;
    this._hvAvailMonitor = config.hvAvailMonitor;
    this._id = config.id;
    this._mcastAddr = config.mcastAddr;
    this._mode = config.mode;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._prefEncapMode = config.prefEncapMode;
    this._providerProfileDn = config.providerProfileDn;
    this._relationInfraRsDomVxlanNsDef = config.relationInfraRsDomVxlanNsDef;
    this._relationInfraRsVipAddrNs = config.relationInfraRsVipAddrNs;
    this._relationInfraRsVlanNs = config.relationInfraRsVlanNs;
    this._relationInfraRsVlanNsDef = config.relationInfraRsVlanNsDef;
    this._relationVmmRsDefaultCdpIfPol = config.relationVmmRsDefaultCdpIfPol;
    this._relationVmmRsDefaultFwPol = config.relationVmmRsDefaultFwPol;
    this._relationVmmRsDefaultL2InstPol = config.relationVmmRsDefaultL2InstPol;
    this._relationVmmRsDefaultLacpLagPol = config.relationVmmRsDefaultLacpLagPol;
    this._relationVmmRsDefaultLldpIfPol = config.relationVmmRsDefaultLldpIfPol;
    this._relationVmmRsDefaultStpIfPol = config.relationVmmRsDefaultStpIfPol;
    this._relationVmmRsDomMcastAddrNs = config.relationVmmRsDomMcastAddrNs;
    this._relationVmmRsPrefEnhancedLagPol = config.relationVmmRsPrefEnhancedLagPol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // annotation - computed: false, optional: true, required: false
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

  // arp_learning - computed: true, optional: true, required: false
  private _arpLearning?: string; 
  public get arpLearning() {
    return this.getStringAttribute('arp_learning');
  }
  public set arpLearning(value: string) {
    this._arpLearning = value;
  }
  public resetArpLearning() {
    this._arpLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpLearningInput() {
    return this._arpLearning;
  }

  // ave_time_out - computed: true, optional: true, required: false
  private _aveTimeOut?: string; 
  public get aveTimeOut() {
    return this.getStringAttribute('ave_time_out');
  }
  public set aveTimeOut(value: string) {
    this._aveTimeOut = value;
  }
  public resetAveTimeOut() {
    this._aveTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aveTimeOutInput() {
    return this._aveTimeOut;
  }

  // config_infra_pg - computed: true, optional: true, required: false
  private _configInfraPg?: string; 
  public get configInfraPg() {
    return this.getStringAttribute('config_infra_pg');
  }
  public set configInfraPg(value: string) {
    this._configInfraPg = value;
  }
  public resetConfigInfraPg() {
    this._configInfraPg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInfraPgInput() {
    return this._configInfraPg;
  }

  // ctrl_knob - computed: true, optional: true, required: false
  private _ctrlKnob?: string; 
  public get ctrlKnob() {
    return this.getStringAttribute('ctrl_knob');
  }
  public set ctrlKnob(value: string) {
    this._ctrlKnob = value;
  }
  public resetCtrlKnob() {
    this._ctrlKnob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlKnobInput() {
    return this._ctrlKnob;
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

  // enable_ave - computed: true, optional: true, required: false
  private _enableAve?: string; 
  public get enableAve() {
    return this.getStringAttribute('enable_ave');
  }
  public set enableAve(value: string) {
    this._enableAve = value;
  }
  public resetEnableAve() {
    this._enableAve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAveInput() {
    return this._enableAve;
  }

  // enable_tag - computed: true, optional: true, required: false
  private _enableTag?: string; 
  public get enableTag() {
    return this.getStringAttribute('enable_tag');
  }
  public set enableTag(value: string) {
    this._enableTag = value;
  }
  public resetEnableTag() {
    this._enableTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTagInput() {
    return this._enableTag;
  }

  // enable_vm_folder - computed: true, optional: true, required: false
  private _enableVmFolder?: string; 
  public get enableVmFolder() {
    return this.getStringAttribute('enable_vm_folder');
  }
  public set enableVmFolder(value: string) {
    this._enableVmFolder = value;
  }
  public resetEnableVmFolder() {
    this._enableVmFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVmFolderInput() {
    return this._enableVmFolder;
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

  // enf_pref - computed: true, optional: true, required: false
  private _enfPref?: string; 
  public get enfPref() {
    return this.getStringAttribute('enf_pref');
  }
  public set enfPref(value: string) {
    this._enfPref = value;
  }
  public resetEnfPref() {
    this._enfPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enfPrefInput() {
    return this._enfPref;
  }

  // ep_inventory_type - computed: true, optional: true, required: false
  private _epInventoryType?: string; 
  public get epInventoryType() {
    return this.getStringAttribute('ep_inventory_type');
  }
  public set epInventoryType(value: string) {
    this._epInventoryType = value;
  }
  public resetEpInventoryType() {
    this._epInventoryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epInventoryTypeInput() {
    return this._epInventoryType;
  }

  // ep_ret_time - computed: true, optional: true, required: false
  private _epRetTime?: string; 
  public get epRetTime() {
    return this.getStringAttribute('ep_ret_time');
  }
  public set epRetTime(value: string) {
    this._epRetTime = value;
  }
  public resetEpRetTime() {
    this._epRetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epRetTimeInput() {
    return this._epRetTime;
  }

  // hv_avail_monitor - computed: true, optional: true, required: false
  private _hvAvailMonitor?: string; 
  public get hvAvailMonitor() {
    return this.getStringAttribute('hv_avail_monitor');
  }
  public set hvAvailMonitor(value: string) {
    this._hvAvailMonitor = value;
  }
  public resetHvAvailMonitor() {
    this._hvAvailMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hvAvailMonitorInput() {
    return this._hvAvailMonitor;
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

  // mcast_addr - computed: true, optional: true, required: false
  private _mcastAddr?: string; 
  public get mcastAddr() {
    return this.getStringAttribute('mcast_addr');
  }
  public set mcastAddr(value: string) {
    this._mcastAddr = value;
  }
  public resetMcastAddr() {
    this._mcastAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastAddrInput() {
    return this._mcastAddr;
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

  // pref_encap_mode - computed: true, optional: true, required: false
  private _prefEncapMode?: string; 
  public get prefEncapMode() {
    return this.getStringAttribute('pref_encap_mode');
  }
  public set prefEncapMode(value: string) {
    this._prefEncapMode = value;
  }
  public resetPrefEncapMode() {
    this._prefEncapMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefEncapModeInput() {
    return this._prefEncapMode;
  }

  // provider_profile_dn - computed: false, optional: false, required: true
  private _providerProfileDn?: string; 
  public get providerProfileDn() {
    return this.getStringAttribute('provider_profile_dn');
  }
  public set providerProfileDn(value: string) {
    this._providerProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerProfileDnInput() {
    return this._providerProfileDn;
  }

  // relation_infra_rs_dom_vxlan_ns_def - computed: false, optional: true, required: false
  private _relationInfraRsDomVxlanNsDef?: string; 
  public get relationInfraRsDomVxlanNsDef() {
    return this.getStringAttribute('relation_infra_rs_dom_vxlan_ns_def');
  }
  public set relationInfraRsDomVxlanNsDef(value: string) {
    this._relationInfraRsDomVxlanNsDef = value;
  }
  public resetRelationInfraRsDomVxlanNsDef() {
    this._relationInfraRsDomVxlanNsDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsDomVxlanNsDefInput() {
    return this._relationInfraRsDomVxlanNsDef;
  }

  // relation_infra_rs_vip_addr_ns - computed: false, optional: true, required: false
  private _relationInfraRsVipAddrNs?: string; 
  public get relationInfraRsVipAddrNs() {
    return this.getStringAttribute('relation_infra_rs_vip_addr_ns');
  }
  public set relationInfraRsVipAddrNs(value: string) {
    this._relationInfraRsVipAddrNs = value;
  }
  public resetRelationInfraRsVipAddrNs() {
    this._relationInfraRsVipAddrNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsVipAddrNsInput() {
    return this._relationInfraRsVipAddrNs;
  }

  // relation_infra_rs_vlan_ns - computed: false, optional: true, required: false
  private _relationInfraRsVlanNs?: string; 
  public get relationInfraRsVlanNs() {
    return this.getStringAttribute('relation_infra_rs_vlan_ns');
  }
  public set relationInfraRsVlanNs(value: string) {
    this._relationInfraRsVlanNs = value;
  }
  public resetRelationInfraRsVlanNs() {
    this._relationInfraRsVlanNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsVlanNsInput() {
    return this._relationInfraRsVlanNs;
  }

  // relation_infra_rs_vlan_ns_def - computed: false, optional: true, required: false
  private _relationInfraRsVlanNsDef?: string; 
  public get relationInfraRsVlanNsDef() {
    return this.getStringAttribute('relation_infra_rs_vlan_ns_def');
  }
  public set relationInfraRsVlanNsDef(value: string) {
    this._relationInfraRsVlanNsDef = value;
  }
  public resetRelationInfraRsVlanNsDef() {
    this._relationInfraRsVlanNsDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsVlanNsDefInput() {
    return this._relationInfraRsVlanNsDef;
  }

  // relation_vmm_rs_default_cdp_if_pol - computed: true, optional: true, required: false
  private _relationVmmRsDefaultCdpIfPol?: string; 
  public get relationVmmRsDefaultCdpIfPol() {
    return this.getStringAttribute('relation_vmm_rs_default_cdp_if_pol');
  }
  public set relationVmmRsDefaultCdpIfPol(value: string) {
    this._relationVmmRsDefaultCdpIfPol = value;
  }
  public resetRelationVmmRsDefaultCdpIfPol() {
    this._relationVmmRsDefaultCdpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsDefaultCdpIfPolInput() {
    return this._relationVmmRsDefaultCdpIfPol;
  }

  // relation_vmm_rs_default_fw_pol - computed: true, optional: true, required: false
  private _relationVmmRsDefaultFwPol?: string; 
  public get relationVmmRsDefaultFwPol() {
    return this.getStringAttribute('relation_vmm_rs_default_fw_pol');
  }
  public set relationVmmRsDefaultFwPol(value: string) {
    this._relationVmmRsDefaultFwPol = value;
  }
  public resetRelationVmmRsDefaultFwPol() {
    this._relationVmmRsDefaultFwPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsDefaultFwPolInput() {
    return this._relationVmmRsDefaultFwPol;
  }

  // relation_vmm_rs_default_l2_inst_pol - computed: true, optional: true, required: false
  private _relationVmmRsDefaultL2InstPol?: string; 
  public get relationVmmRsDefaultL2InstPol() {
    return this.getStringAttribute('relation_vmm_rs_default_l2_inst_pol');
  }
  public set relationVmmRsDefaultL2InstPol(value: string) {
    this._relationVmmRsDefaultL2InstPol = value;
  }
  public resetRelationVmmRsDefaultL2InstPol() {
    this._relationVmmRsDefaultL2InstPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsDefaultL2InstPolInput() {
    return this._relationVmmRsDefaultL2InstPol;
  }

  // relation_vmm_rs_default_lacp_lag_pol - computed: true, optional: true, required: false
  private _relationVmmRsDefaultLacpLagPol?: string; 
  public get relationVmmRsDefaultLacpLagPol() {
    return this.getStringAttribute('relation_vmm_rs_default_lacp_lag_pol');
  }
  public set relationVmmRsDefaultLacpLagPol(value: string) {
    this._relationVmmRsDefaultLacpLagPol = value;
  }
  public resetRelationVmmRsDefaultLacpLagPol() {
    this._relationVmmRsDefaultLacpLagPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsDefaultLacpLagPolInput() {
    return this._relationVmmRsDefaultLacpLagPol;
  }

  // relation_vmm_rs_default_lldp_if_pol - computed: true, optional: true, required: false
  private _relationVmmRsDefaultLldpIfPol?: string; 
  public get relationVmmRsDefaultLldpIfPol() {
    return this.getStringAttribute('relation_vmm_rs_default_lldp_if_pol');
  }
  public set relationVmmRsDefaultLldpIfPol(value: string) {
    this._relationVmmRsDefaultLldpIfPol = value;
  }
  public resetRelationVmmRsDefaultLldpIfPol() {
    this._relationVmmRsDefaultLldpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsDefaultLldpIfPolInput() {
    return this._relationVmmRsDefaultLldpIfPol;
  }

  // relation_vmm_rs_default_stp_if_pol - computed: true, optional: true, required: false
  private _relationVmmRsDefaultStpIfPol?: string; 
  public get relationVmmRsDefaultStpIfPol() {
    return this.getStringAttribute('relation_vmm_rs_default_stp_if_pol');
  }
  public set relationVmmRsDefaultStpIfPol(value: string) {
    this._relationVmmRsDefaultStpIfPol = value;
  }
  public resetRelationVmmRsDefaultStpIfPol() {
    this._relationVmmRsDefaultStpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsDefaultStpIfPolInput() {
    return this._relationVmmRsDefaultStpIfPol;
  }

  // relation_vmm_rs_dom_mcast_addr_ns - computed: false, optional: true, required: false
  private _relationVmmRsDomMcastAddrNs?: string; 
  public get relationVmmRsDomMcastAddrNs() {
    return this.getStringAttribute('relation_vmm_rs_dom_mcast_addr_ns');
  }
  public set relationVmmRsDomMcastAddrNs(value: string) {
    this._relationVmmRsDomMcastAddrNs = value;
  }
  public resetRelationVmmRsDomMcastAddrNs() {
    this._relationVmmRsDomMcastAddrNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsDomMcastAddrNsInput() {
    return this._relationVmmRsDomMcastAddrNs;
  }

  // relation_vmm_rs_pref_enhanced_lag_pol - computed: false, optional: true, required: false
  private _relationVmmRsPrefEnhancedLagPol?: string; 
  public get relationVmmRsPrefEnhancedLagPol() {
    return this.getStringAttribute('relation_vmm_rs_pref_enhanced_lag_pol');
  }
  public set relationVmmRsPrefEnhancedLagPol(value: string) {
    this._relationVmmRsPrefEnhancedLagPol = value;
  }
  public resetRelationVmmRsPrefEnhancedLagPol() {
    this._relationVmmRsPrefEnhancedLagPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsPrefEnhancedLagPolInput() {
    return this._relationVmmRsPrefEnhancedLagPol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      annotation: cdktf.stringToTerraform(this._annotation),
      arp_learning: cdktf.stringToTerraform(this._arpLearning),
      ave_time_out: cdktf.stringToTerraform(this._aveTimeOut),
      config_infra_pg: cdktf.stringToTerraform(this._configInfraPg),
      ctrl_knob: cdktf.stringToTerraform(this._ctrlKnob),
      delimiter: cdktf.stringToTerraform(this._delimiter),
      enable_ave: cdktf.stringToTerraform(this._enableAve),
      enable_tag: cdktf.stringToTerraform(this._enableTag),
      enable_vm_folder: cdktf.stringToTerraform(this._enableVmFolder),
      encap_mode: cdktf.stringToTerraform(this._encapMode),
      enf_pref: cdktf.stringToTerraform(this._enfPref),
      ep_inventory_type: cdktf.stringToTerraform(this._epInventoryType),
      ep_ret_time: cdktf.stringToTerraform(this._epRetTime),
      hv_avail_monitor: cdktf.stringToTerraform(this._hvAvailMonitor),
      id: cdktf.stringToTerraform(this._id),
      mcast_addr: cdktf.stringToTerraform(this._mcastAddr),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      pref_encap_mode: cdktf.stringToTerraform(this._prefEncapMode),
      provider_profile_dn: cdktf.stringToTerraform(this._providerProfileDn),
      relation_infra_rs_dom_vxlan_ns_def: cdktf.stringToTerraform(this._relationInfraRsDomVxlanNsDef),
      relation_infra_rs_vip_addr_ns: cdktf.stringToTerraform(this._relationInfraRsVipAddrNs),
      relation_infra_rs_vlan_ns: cdktf.stringToTerraform(this._relationInfraRsVlanNs),
      relation_infra_rs_vlan_ns_def: cdktf.stringToTerraform(this._relationInfraRsVlanNsDef),
      relation_vmm_rs_default_cdp_if_pol: cdktf.stringToTerraform(this._relationVmmRsDefaultCdpIfPol),
      relation_vmm_rs_default_fw_pol: cdktf.stringToTerraform(this._relationVmmRsDefaultFwPol),
      relation_vmm_rs_default_l2_inst_pol: cdktf.stringToTerraform(this._relationVmmRsDefaultL2InstPol),
      relation_vmm_rs_default_lacp_lag_pol: cdktf.stringToTerraform(this._relationVmmRsDefaultLacpLagPol),
      relation_vmm_rs_default_lldp_if_pol: cdktf.stringToTerraform(this._relationVmmRsDefaultLldpIfPol),
      relation_vmm_rs_default_stp_if_pol: cdktf.stringToTerraform(this._relationVmmRsDefaultStpIfPol),
      relation_vmm_rs_dom_mcast_addr_ns: cdktf.stringToTerraform(this._relationVmmRsDomMcastAddrNs),
      relation_vmm_rs_pref_enhanced_lag_pol: cdktf.stringToTerraform(this._relationVmmRsPrefEnhancedLagPol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
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
      arp_learning: {
        value: cdktf.stringToHclTerraform(this._arpLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ave_time_out: {
        value: cdktf.stringToHclTerraform(this._aveTimeOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_infra_pg: {
        value: cdktf.stringToHclTerraform(this._configInfraPg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ctrl_knob: {
        value: cdktf.stringToHclTerraform(this._ctrlKnob),
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
      enable_ave: {
        value: cdktf.stringToHclTerraform(this._enableAve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_tag: {
        value: cdktf.stringToHclTerraform(this._enableTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_vm_folder: {
        value: cdktf.stringToHclTerraform(this._enableVmFolder),
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
      enf_pref: {
        value: cdktf.stringToHclTerraform(this._enfPref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_inventory_type: {
        value: cdktf.stringToHclTerraform(this._epInventoryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_ret_time: {
        value: cdktf.stringToHclTerraform(this._epRetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hv_avail_monitor: {
        value: cdktf.stringToHclTerraform(this._hvAvailMonitor),
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
      mcast_addr: {
        value: cdktf.stringToHclTerraform(this._mcastAddr),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      pref_encap_mode: {
        value: cdktf.stringToHclTerraform(this._prefEncapMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_profile_dn: {
        value: cdktf.stringToHclTerraform(this._providerProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_dom_vxlan_ns_def: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsDomVxlanNsDef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_vip_addr_ns: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsVipAddrNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_vlan_ns: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsVlanNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_infra_rs_vlan_ns_def: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsVlanNsDef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_default_cdp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsDefaultCdpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_default_fw_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsDefaultFwPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_default_l2_inst_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsDefaultL2InstPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_default_lacp_lag_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsDefaultLacpLagPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_default_lldp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsDefaultLldpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_default_stp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsDefaultStpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_dom_mcast_addr_ns: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsDomMcastAddrNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_pref_enhanced_lag_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsPrefEnhancedLagPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
