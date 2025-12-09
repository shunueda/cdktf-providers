// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaSiteAnpEpgDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#anp_name DataMsoSchemaSiteAnpEpgDomain#anp_name}
  */
  readonly anpName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#domain_dn DataMsoSchemaSiteAnpEpgDomain#domain_dn}
  */
  readonly domainDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#domain_name DataMsoSchemaSiteAnpEpgDomain#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#domain_type DataMsoSchemaSiteAnpEpgDomain#domain_type}
  */
  readonly domainType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#epg_name DataMsoSchemaSiteAnpEpgDomain#epg_name}
  */
  readonly epgName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#id DataMsoSchemaSiteAnpEpgDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#schema_id DataMsoSchemaSiteAnpEpgDomain#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#site_id DataMsoSchemaSiteAnpEpgDomain#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#template_name DataMsoSchemaSiteAnpEpgDomain#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#vmm_domain_type DataMsoSchemaSiteAnpEpgDomain#vmm_domain_type}
  */
  readonly vmmDomainType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain mso_schema_site_anp_epg_domain}
*/
export class DataMsoSchemaSiteAnpEpgDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_anp_epg_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaSiteAnpEpgDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaSiteAnpEpgDomain to import
  * @param importFromId The id of the existing DataMsoSchemaSiteAnpEpgDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaSiteAnpEpgDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_anp_epg_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_anp_epg_domain mso_schema_site_anp_epg_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaSiteAnpEpgDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaSiteAnpEpgDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_anp_epg_domain',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anpName = config.anpName;
    this._domainDn = config.domainDn;
    this._domainName = config.domainName;
    this._domainType = config.domainType;
    this._epgName = config.epgName;
    this._id = config.id;
    this._schemaId = config.schemaId;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
    this._vmmDomainType = config.vmmDomainType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_micro_segmentation - computed: true, optional: false, required: false
  public get allowMicroSegmentation() {
    return this.getBooleanAttribute('allow_micro_segmentation');
  }

  // allow_promiscuous - computed: true, optional: false, required: false
  public get allowPromiscuous() {
    return this.getStringAttribute('allow_promiscuous');
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

  // binding_type - computed: true, optional: false, required: false
  public get bindingType() {
    return this.getStringAttribute('binding_type');
  }

  // custom_epg_name - computed: true, optional: false, required: false
  public get customEpgName() {
    return this.getStringAttribute('custom_epg_name');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // deploy_immediacy - computed: true, optional: false, required: false
  public get deployImmediacy() {
    return this.getStringAttribute('deploy_immediacy');
  }

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }

  // domain_dn - computed: true, optional: true, required: false
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

  // domain_name - computed: true, optional: true, required: false
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

  // domain_type - computed: true, optional: true, required: false
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

  // enhanced_lag_policy_dn - computed: true, optional: false, required: false
  public get enhancedLagPolicyDn() {
    return this.getStringAttribute('enhanced_lag_policy_dn');
  }

  // enhanced_lag_policy_name - computed: true, optional: false, required: false
  public get enhancedLagPolicyName() {
    return this.getStringAttribute('enhanced_lag_policy_name');
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

  // forged_transmits - computed: true, optional: false, required: false
  public get forgedTransmits() {
    return this.getStringAttribute('forged_transmits');
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

  // mac_changes - computed: true, optional: false, required: false
  public get macChanges() {
    return this.getStringAttribute('mac_changes');
  }

  // micro_seg_vlan - computed: true, optional: false, required: false
  public get microSegVlan() {
    return this.getNumberAttribute('micro_seg_vlan');
  }

  // micro_seg_vlan_type - computed: true, optional: false, required: false
  public get microSegVlanType() {
    return this.getStringAttribute('micro_seg_vlan_type');
  }

  // netflow - computed: true, optional: false, required: false
  public get netflow() {
    return this.getStringAttribute('netflow');
  }

  // num_ports - computed: true, optional: false, required: false
  public get numPorts() {
    return this.getNumberAttribute('num_ports');
  }

  // port_allocation - computed: true, optional: false, required: false
  public get portAllocation() {
    return this.getStringAttribute('port_allocation');
  }

  // port_encap_vlan - computed: true, optional: false, required: false
  public get portEncapVlan() {
    return this.getNumberAttribute('port_encap_vlan');
  }

  // port_encap_vlan_type - computed: true, optional: false, required: false
  public get portEncapVlanType() {
    return this.getStringAttribute('port_encap_vlan_type');
  }

  // resolution_immediacy - computed: true, optional: false, required: false
  public get resolutionImmediacy() {
    return this.getStringAttribute('resolution_immediacy');
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

  // switch_type - computed: true, optional: false, required: false
  public get switchType() {
    return this.getStringAttribute('switch_type');
  }

  // switching_mode - computed: true, optional: false, required: false
  public get switchingMode() {
    return this.getStringAttribute('switching_mode');
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

  // vlan_encap_mode - computed: true, optional: false, required: false
  public get vlanEncapMode() {
    return this.getStringAttribute('vlan_encap_mode');
  }

  // vmm_domain_type - computed: true, optional: true, required: false
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
      anp_name: cdktf.stringToTerraform(this._anpName),
      domain_dn: cdktf.stringToTerraform(this._domainDn),
      domain_name: cdktf.stringToTerraform(this._domainName),
      domain_type: cdktf.stringToTerraform(this._domainType),
      epg_name: cdktf.stringToTerraform(this._epgName),
      id: cdktf.stringToTerraform(this._id),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_id: cdktf.stringToTerraform(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
      vmm_domain_type: cdktf.stringToTerraform(this._vmmDomainType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anp_name: {
        value: cdktf.stringToHclTerraform(this._anpName),
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
      epg_name: {
        value: cdktf.stringToHclTerraform(this._epgName),
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
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
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
