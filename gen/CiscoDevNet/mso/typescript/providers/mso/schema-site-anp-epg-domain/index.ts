// https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaSiteAnpEpgDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#allow_micro_segmentation SchemaSiteAnpEpgDomain#allow_micro_segmentation}
  */
  readonly allowMicroSegmentation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#allow_promiscuous SchemaSiteAnpEpgDomain#allow_promiscuous}
  */
  readonly allowPromiscuous?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#anp_name SchemaSiteAnpEpgDomain#anp_name}
  */
  readonly anpName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#binding_type SchemaSiteAnpEpgDomain#binding_type}
  */
  readonly bindingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#custom_epg_name SchemaSiteAnpEpgDomain#custom_epg_name}
  */
  readonly customEpgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#delimiter SchemaSiteAnpEpgDomain#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#deploy_immediacy SchemaSiteAnpEpgDomain#deploy_immediacy}
  */
  readonly deployImmediacy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#dn SchemaSiteAnpEpgDomain#dn}
  */
  readonly dn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#domain_dn SchemaSiteAnpEpgDomain#domain_dn}
  */
  readonly domainDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#domain_name SchemaSiteAnpEpgDomain#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#domain_type SchemaSiteAnpEpgDomain#domain_type}
  */
  readonly domainType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#enhanced_lag_policy_dn SchemaSiteAnpEpgDomain#enhanced_lag_policy_dn}
  */
  readonly enhancedLagPolicyDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#enhanced_lag_policy_name SchemaSiteAnpEpgDomain#enhanced_lag_policy_name}
  */
  readonly enhancedLagPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#epg_name SchemaSiteAnpEpgDomain#epg_name}
  */
  readonly epgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#forged_transmits SchemaSiteAnpEpgDomain#forged_transmits}
  */
  readonly forgedTransmits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#id SchemaSiteAnpEpgDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#mac_changes SchemaSiteAnpEpgDomain#mac_changes}
  */
  readonly macChanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#micro_seg_vlan SchemaSiteAnpEpgDomain#micro_seg_vlan}
  */
  readonly microSegVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#micro_seg_vlan_type SchemaSiteAnpEpgDomain#micro_seg_vlan_type}
  */
  readonly microSegVlanType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#netflow SchemaSiteAnpEpgDomain#netflow}
  */
  readonly netflow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#num_ports SchemaSiteAnpEpgDomain#num_ports}
  */
  readonly numPorts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#port_allocation SchemaSiteAnpEpgDomain#port_allocation}
  */
  readonly portAllocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#port_encap_vlan SchemaSiteAnpEpgDomain#port_encap_vlan}
  */
  readonly portEncapVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#port_encap_vlan_type SchemaSiteAnpEpgDomain#port_encap_vlan_type}
  */
  readonly portEncapVlanType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#resolution_immediacy SchemaSiteAnpEpgDomain#resolution_immediacy}
  */
  readonly resolutionImmediacy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#schema_id SchemaSiteAnpEpgDomain#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#site_id SchemaSiteAnpEpgDomain#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#switch_type SchemaSiteAnpEpgDomain#switch_type}
  */
  readonly switchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#switching_mode SchemaSiteAnpEpgDomain#switching_mode}
  */
  readonly switchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#template_name SchemaSiteAnpEpgDomain#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#vlan_encap_mode SchemaSiteAnpEpgDomain#vlan_encap_mode}
  */
  readonly vlanEncapMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#vmm_domain_type SchemaSiteAnpEpgDomain#vmm_domain_type}
  */
  readonly vmmDomainType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain mso_schema_site_anp_epg_domain}
*/
export class SchemaSiteAnpEpgDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_anp_epg_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaSiteAnpEpgDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaSiteAnpEpgDomain to import
  * @param importFromId The id of the existing SchemaSiteAnpEpgDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaSiteAnpEpgDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_anp_epg_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.6.0/docs/resources/schema_site_anp_epg_domain mso_schema_site_anp_epg_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaSiteAnpEpgDomainConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaSiteAnpEpgDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_anp_epg_domain',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowMicroSegmentation = config.allowMicroSegmentation;
    this._allowPromiscuous = config.allowPromiscuous;
    this._anpName = config.anpName;
    this._bindingType = config.bindingType;
    this._customEpgName = config.customEpgName;
    this._delimiter = config.delimiter;
    this._deployImmediacy = config.deployImmediacy;
    this._dn = config.dn;
    this._domainDn = config.domainDn;
    this._domainName = config.domainName;
    this._domainType = config.domainType;
    this._enhancedLagPolicyDn = config.enhancedLagPolicyDn;
    this._enhancedLagPolicyName = config.enhancedLagPolicyName;
    this._epgName = config.epgName;
    this._forgedTransmits = config.forgedTransmits;
    this._id = config.id;
    this._macChanges = config.macChanges;
    this._microSegVlan = config.microSegVlan;
    this._microSegVlanType = config.microSegVlanType;
    this._netflow = config.netflow;
    this._numPorts = config.numPorts;
    this._portAllocation = config.portAllocation;
    this._portEncapVlan = config.portEncapVlan;
    this._portEncapVlanType = config.portEncapVlanType;
    this._resolutionImmediacy = config.resolutionImmediacy;
    this._schemaId = config.schemaId;
    this._siteId = config.siteId;
    this._switchType = config.switchType;
    this._switchingMode = config.switchingMode;
    this._templateName = config.templateName;
    this._vlanEncapMode = config.vlanEncapMode;
    this._vmmDomainType = config.vmmDomainType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_micro_segmentation - computed: true, optional: true, required: false
  private _allowMicroSegmentation?: boolean | cdktf.IResolvable; 
  public get allowMicroSegmentation() {
    return this.getBooleanAttribute('allow_micro_segmentation');
  }
  public set allowMicroSegmentation(value: boolean | cdktf.IResolvable) {
    this._allowMicroSegmentation = value;
  }
  public resetAllowMicroSegmentation() {
    this._allowMicroSegmentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMicroSegmentationInput() {
    return this._allowMicroSegmentation;
  }

  // allow_promiscuous - computed: true, optional: true, required: false
  private _allowPromiscuous?: string; 
  public get allowPromiscuous() {
    return this.getStringAttribute('allow_promiscuous');
  }
  public set allowPromiscuous(value: string) {
    this._allowPromiscuous = value;
  }
  public resetAllowPromiscuous() {
    this._allowPromiscuous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPromiscuousInput() {
    return this._allowPromiscuous;
  }

  // anp_name - computed: false, optional: false, required: true
  private _anpName?: string; 
  public get anpName() {
    return this.getStringAttribute('anp_name');
  }
  public set anpName(value: string) {
    this._anpName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anpNameInput() {
    return this._anpName;
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

  // deploy_immediacy - computed: false, optional: false, required: true
  private _deployImmediacy?: string; 
  public get deployImmediacy() {
    return this.getStringAttribute('deploy_immediacy');
  }
  public set deployImmediacy(value: string) {
    this._deployImmediacy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployImmediacyInput() {
    return this._deployImmediacy;
  }

  // dn - computed: false, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // domain_dn - computed: false, optional: true, required: false
  private _domainDn?: string; 
  public get domainDn() {
    return this.getStringAttribute('domain_dn');
  }
  public set domainDn(value: string) {
    this._domainDn = value;
  }
  public resetDomainDn() {
    this._domainDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainDnInput() {
    return this._domainDn;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_type - computed: false, optional: true, required: false
  private _domainType?: string; 
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }
  public set domainType(value: string) {
    this._domainType = value;
  }
  public resetDomainType() {
    this._domainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainTypeInput() {
    return this._domainType;
  }

  // enhanced_lag_policy_dn - computed: true, optional: true, required: false
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

  // enhanced_lag_policy_name - computed: true, optional: true, required: false
  private _enhancedLagPolicyName?: string; 
  public get enhancedLagPolicyName() {
    return this.getStringAttribute('enhanced_lag_policy_name');
  }
  public set enhancedLagPolicyName(value: string) {
    this._enhancedLagPolicyName = value;
  }
  public resetEnhancedLagPolicyName() {
    this._enhancedLagPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedLagPolicyNameInput() {
    return this._enhancedLagPolicyName;
  }

  // epg_name - computed: false, optional: false, required: true
  private _epgName?: string; 
  public get epgName() {
    return this.getStringAttribute('epg_name');
  }
  public set epgName(value: string) {
    this._epgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epgNameInput() {
    return this._epgName;
  }

  // forged_transmits - computed: true, optional: true, required: false
  private _forgedTransmits?: string; 
  public get forgedTransmits() {
    return this.getStringAttribute('forged_transmits');
  }
  public set forgedTransmits(value: string) {
    this._forgedTransmits = value;
  }
  public resetForgedTransmits() {
    this._forgedTransmits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgedTransmitsInput() {
    return this._forgedTransmits;
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

  // mac_changes - computed: true, optional: true, required: false
  private _macChanges?: string; 
  public get macChanges() {
    return this.getStringAttribute('mac_changes');
  }
  public set macChanges(value: string) {
    this._macChanges = value;
  }
  public resetMacChanges() {
    this._macChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macChangesInput() {
    return this._macChanges;
  }

  // micro_seg_vlan - computed: true, optional: true, required: false
  private _microSegVlan?: number; 
  public get microSegVlan() {
    return this.getNumberAttribute('micro_seg_vlan');
  }
  public set microSegVlan(value: number) {
    this._microSegVlan = value;
  }
  public resetMicroSegVlan() {
    this._microSegVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microSegVlanInput() {
    return this._microSegVlan;
  }

  // micro_seg_vlan_type - computed: true, optional: true, required: false
  private _microSegVlanType?: string; 
  public get microSegVlanType() {
    return this.getStringAttribute('micro_seg_vlan_type');
  }
  public set microSegVlanType(value: string) {
    this._microSegVlanType = value;
  }
  public resetMicroSegVlanType() {
    this._microSegVlanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microSegVlanTypeInput() {
    return this._microSegVlanType;
  }

  // netflow - computed: true, optional: true, required: false
  private _netflow?: string; 
  public get netflow() {
    return this.getStringAttribute('netflow');
  }
  public set netflow(value: string) {
    this._netflow = value;
  }
  public resetNetflow() {
    this._netflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow;
  }

  // num_ports - computed: true, optional: true, required: false
  private _numPorts?: number; 
  public get numPorts() {
    return this.getNumberAttribute('num_ports');
  }
  public set numPorts(value: number) {
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

  // port_encap_vlan - computed: true, optional: true, required: false
  private _portEncapVlan?: number; 
  public get portEncapVlan() {
    return this.getNumberAttribute('port_encap_vlan');
  }
  public set portEncapVlan(value: number) {
    this._portEncapVlan = value;
  }
  public resetPortEncapVlan() {
    this._portEncapVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEncapVlanInput() {
    return this._portEncapVlan;
  }

  // port_encap_vlan_type - computed: true, optional: true, required: false
  private _portEncapVlanType?: string; 
  public get portEncapVlanType() {
    return this.getStringAttribute('port_encap_vlan_type');
  }
  public set portEncapVlanType(value: string) {
    this._portEncapVlanType = value;
  }
  public resetPortEncapVlanType() {
    this._portEncapVlanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portEncapVlanTypeInput() {
    return this._portEncapVlanType;
  }

  // resolution_immediacy - computed: false, optional: false, required: true
  private _resolutionImmediacy?: string; 
  public get resolutionImmediacy() {
    return this.getStringAttribute('resolution_immediacy');
  }
  public set resolutionImmediacy(value: string) {
    this._resolutionImmediacy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionImmediacyInput() {
    return this._resolutionImmediacy;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // switch_type - computed: true, optional: true, required: false
  private _switchType?: string; 
  public get switchType() {
    return this.getStringAttribute('switch_type');
  }
  public set switchType(value: string) {
    this._switchType = value;
  }
  public resetSwitchType() {
    this._switchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchTypeInput() {
    return this._switchType;
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

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // vlan_encap_mode - computed: true, optional: true, required: false
  private _vlanEncapMode?: string; 
  public get vlanEncapMode() {
    return this.getStringAttribute('vlan_encap_mode');
  }
  public set vlanEncapMode(value: string) {
    this._vlanEncapMode = value;
  }
  public resetVlanEncapMode() {
    this._vlanEncapMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanEncapModeInput() {
    return this._vlanEncapMode;
  }

  // vmm_domain_type - computed: false, optional: true, required: false
  private _vmmDomainType?: string; 
  public get vmmDomainType() {
    return this.getStringAttribute('vmm_domain_type');
  }
  public set vmmDomainType(value: string) {
    this._vmmDomainType = value;
  }
  public resetVmmDomainType() {
    this._vmmDomainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmDomainTypeInput() {
    return this._vmmDomainType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_micro_segmentation: cdktf.booleanToTerraform(this._allowMicroSegmentation),
      allow_promiscuous: cdktf.stringToTerraform(this._allowPromiscuous),
      anp_name: cdktf.stringToTerraform(this._anpName),
      binding_type: cdktf.stringToTerraform(this._bindingType),
      custom_epg_name: cdktf.stringToTerraform(this._customEpgName),
      delimiter: cdktf.stringToTerraform(this._delimiter),
      deploy_immediacy: cdktf.stringToTerraform(this._deployImmediacy),
      dn: cdktf.stringToTerraform(this._dn),
      domain_dn: cdktf.stringToTerraform(this._domainDn),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_type: cdktf.stringToTerraform(this._domainType),
      enhanced_lag_policy_dn: cdktf.stringToTerraform(this._enhancedLagPolicyDn),
      enhanced_lag_policy_name: cdktf.stringToTerraform(this._enhancedLagPolicyName),
      epg_name: cdktf.stringToTerraform(this._epgName),
      forged_transmits: cdktf.stringToTerraform(this._forgedTransmits),
      id: cdktf.stringToTerraform(this._id),
      mac_changes: cdktf.stringToTerraform(this._macChanges),
      micro_seg_vlan: cdktf.numberToTerraform(this._microSegVlan),
      micro_seg_vlan_type: cdktf.stringToTerraform(this._microSegVlanType),
      netflow: cdktf.stringToTerraform(this._netflow),
      num_ports: cdktf.numberToTerraform(this._numPorts),
      port_allocation: cdktf.stringToTerraform(this._portAllocation),
      port_encap_vlan: cdktf.numberToTerraform(this._portEncapVlan),
      port_encap_vlan_type: cdktf.stringToTerraform(this._portEncapVlanType),
      resolution_immediacy: cdktf.stringToTerraform(this._resolutionImmediacy),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_id: cdktf.stringToTerraform(this._siteId),
      switch_type: cdktf.stringToTerraform(this._switchType),
      switching_mode: cdktf.stringToTerraform(this._switchingMode),
      template_name: cdktf.stringToTerraform(this._templateName),
      vlan_encap_mode: cdktf.stringToTerraform(this._vlanEncapMode),
      vmm_domain_type: cdktf.stringToTerraform(this._vmmDomainType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_micro_segmentation: {
        value: cdktf.booleanToHclTerraform(this._allowMicroSegmentation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_promiscuous: {
        value: cdktf.stringToHclTerraform(this._allowPromiscuous),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anp_name: {
        value: cdktf.stringToHclTerraform(this._anpName),
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
      deploy_immediacy: {
        value: cdktf.stringToHclTerraform(this._deployImmediacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_dn: {
        value: cdktf.stringToHclTerraform(this._domainDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_type: {
        value: cdktf.stringToHclTerraform(this._domainType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_lag_policy_dn: {
        value: cdktf.stringToHclTerraform(this._enhancedLagPolicyDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_lag_policy_name: {
        value: cdktf.stringToHclTerraform(this._enhancedLagPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epg_name: {
        value: cdktf.stringToHclTerraform(this._epgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forged_transmits: {
        value: cdktf.stringToHclTerraform(this._forgedTransmits),
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
      mac_changes: {
        value: cdktf.stringToHclTerraform(this._macChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      micro_seg_vlan: {
        value: cdktf.numberToHclTerraform(this._microSegVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      micro_seg_vlan_type: {
        value: cdktf.stringToHclTerraform(this._microSegVlanType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow: {
        value: cdktf.stringToHclTerraform(this._netflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_ports: {
        value: cdktf.numberToHclTerraform(this._numPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_allocation: {
        value: cdktf.stringToHclTerraform(this._portAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_encap_vlan: {
        value: cdktf.numberToHclTerraform(this._portEncapVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_encap_vlan_type: {
        value: cdktf.stringToHclTerraform(this._portEncapVlanType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolution_immediacy: {
        value: cdktf.stringToHclTerraform(this._resolutionImmediacy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_type: {
        value: cdktf.stringToHclTerraform(this._switchType),
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
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_encap_mode: {
        value: cdktf.stringToHclTerraform(this._vlanEncapMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmm_domain_type: {
        value: cdktf.stringToHclTerraform(this._vmmDomainType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
