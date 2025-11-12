// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciFilterEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#annotation DataAciFilterEntry#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#apply_to_frag DataAciFilterEntry#apply_to_frag}
  */
  readonly applyToFrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#arp_opc DataAciFilterEntry#arp_opc}
  */
  readonly arpOpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#d_from_port DataAciFilterEntry#d_from_port}
  */
  readonly dFromPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#d_to_port DataAciFilterEntry#d_to_port}
  */
  readonly dToPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#description DataAciFilterEntry#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#ether_t DataAciFilterEntry#ether_t}
  */
  readonly etherT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#filter_dn DataAciFilterEntry#filter_dn}
  */
  readonly filterDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#icmpv4_t DataAciFilterEntry#icmpv4_t}
  */
  readonly icmpv4T?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#icmpv6_t DataAciFilterEntry#icmpv6_t}
  */
  readonly icmpv6T?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#id DataAciFilterEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#match_dscp DataAciFilterEntry#match_dscp}
  */
  readonly matchDscp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#name DataAciFilterEntry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#name_alias DataAciFilterEntry#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#prot DataAciFilterEntry#prot}
  */
  readonly prot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#s_from_port DataAciFilterEntry#s_from_port}
  */
  readonly sFromPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#s_to_port DataAciFilterEntry#s_to_port}
  */
  readonly sToPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#stateful DataAciFilterEntry#stateful}
  */
  readonly stateful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#tcp_rules DataAciFilterEntry#tcp_rules}
  */
  readonly tcpRules?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry aci_filter_entry}
*/
export class DataAciFilterEntry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_filter_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciFilterEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciFilterEntry to import
  * @param importFromId The id of the existing DataAciFilterEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciFilterEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_filter_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/filter_entry aci_filter_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciFilterEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciFilterEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_filter_entry',
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
    this._annotation = config.annotation;
    this._applyToFrag = config.applyToFrag;
    this._arpOpc = config.arpOpc;
    this._dFromPort = config.dFromPort;
    this._dToPort = config.dToPort;
    this._description = config.description;
    this._etherT = config.etherT;
    this._filterDn = config.filterDn;
    this._icmpv4T = config.icmpv4T;
    this._icmpv6T = config.icmpv6T;
    this._id = config.id;
    this._matchDscp = config.matchDscp;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._prot = config.prot;
    this._sFromPort = config.sFromPort;
    this._sToPort = config.sToPort;
    this._stateful = config.stateful;
    this._tcpRules = config.tcpRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // apply_to_frag - computed: true, optional: true, required: false
  private _applyToFrag?: string; 
  public get applyToFrag() {
    return this.getStringAttribute('apply_to_frag');
  }
  public set applyToFrag(value: string) {
    this._applyToFrag = value;
  }
  public resetApplyToFrag() {
    this._applyToFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToFragInput() {
    return this._applyToFrag;
  }

  // arp_opc - computed: true, optional: true, required: false
  private _arpOpc?: string; 
  public get arpOpc() {
    return this.getStringAttribute('arp_opc');
  }
  public set arpOpc(value: string) {
    this._arpOpc = value;
  }
  public resetArpOpc() {
    this._arpOpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpOpcInput() {
    return this._arpOpc;
  }

  // d_from_port - computed: true, optional: true, required: false
  private _dFromPort?: string; 
  public get dFromPort() {
    return this.getStringAttribute('d_from_port');
  }
  public set dFromPort(value: string) {
    this._dFromPort = value;
  }
  public resetDFromPort() {
    this._dFromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dFromPortInput() {
    return this._dFromPort;
  }

  // d_to_port - computed: true, optional: true, required: false
  private _dToPort?: string; 
  public get dToPort() {
    return this.getStringAttribute('d_to_port');
  }
  public set dToPort(value: string) {
    this._dToPort = value;
  }
  public resetDToPort() {
    this._dToPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dToPortInput() {
    return this._dToPort;
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

  // ether_t - computed: true, optional: true, required: false
  private _etherT?: string; 
  public get etherT() {
    return this.getStringAttribute('ether_t');
  }
  public set etherT(value: string) {
    this._etherT = value;
  }
  public resetEtherT() {
    this._etherT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etherTInput() {
    return this._etherT;
  }

  // filter_dn - computed: false, optional: false, required: true
  private _filterDn?: string; 
  public get filterDn() {
    return this.getStringAttribute('filter_dn');
  }
  public set filterDn(value: string) {
    this._filterDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDnInput() {
    return this._filterDn;
  }

  // icmpv4_t - computed: true, optional: true, required: false
  private _icmpv4T?: string; 
  public get icmpv4T() {
    return this.getStringAttribute('icmpv4_t');
  }
  public set icmpv4T(value: string) {
    this._icmpv4T = value;
  }
  public resetIcmpv4T() {
    this._icmpv4T = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv4TInput() {
    return this._icmpv4T;
  }

  // icmpv6_t - computed: true, optional: true, required: false
  private _icmpv6T?: string; 
  public get icmpv6T() {
    return this.getStringAttribute('icmpv6_t');
  }
  public set icmpv6T(value: string) {
    this._icmpv6T = value;
  }
  public resetIcmpv6T() {
    this._icmpv6T = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6TInput() {
    return this._icmpv6T;
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

  // match_dscp - computed: true, optional: true, required: false
  private _matchDscp?: string; 
  public get matchDscp() {
    return this.getStringAttribute('match_dscp');
  }
  public set matchDscp(value: string) {
    this._matchDscp = value;
  }
  public resetMatchDscp() {
    this._matchDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDscpInput() {
    return this._matchDscp;
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

  // prot - computed: true, optional: true, required: false
  private _prot?: string; 
  public get prot() {
    return this.getStringAttribute('prot');
  }
  public set prot(value: string) {
    this._prot = value;
  }
  public resetProt() {
    this._prot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protInput() {
    return this._prot;
  }

  // s_from_port - computed: true, optional: true, required: false
  private _sFromPort?: string; 
  public get sFromPort() {
    return this.getStringAttribute('s_from_port');
  }
  public set sFromPort(value: string) {
    this._sFromPort = value;
  }
  public resetSFromPort() {
    this._sFromPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sFromPortInput() {
    return this._sFromPort;
  }

  // s_to_port - computed: true, optional: true, required: false
  private _sToPort?: string; 
  public get sToPort() {
    return this.getStringAttribute('s_to_port');
  }
  public set sToPort(value: string) {
    this._sToPort = value;
  }
  public resetSToPort() {
    this._sToPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sToPortInput() {
    return this._sToPort;
  }

  // stateful - computed: true, optional: true, required: false
  private _stateful?: string; 
  public get stateful() {
    return this.getStringAttribute('stateful');
  }
  public set stateful(value: string) {
    this._stateful = value;
  }
  public resetStateful() {
    this._stateful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful;
  }

  // tcp_rules - computed: true, optional: true, required: false
  private _tcpRules?: string; 
  public get tcpRules() {
    return this.getStringAttribute('tcp_rules');
  }
  public set tcpRules(value: string) {
    this._tcpRules = value;
  }
  public resetTcpRules() {
    this._tcpRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRulesInput() {
    return this._tcpRules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      apply_to_frag: cdktf.stringToTerraform(this._applyToFrag),
      arp_opc: cdktf.stringToTerraform(this._arpOpc),
      d_from_port: cdktf.stringToTerraform(this._dFromPort),
      d_to_port: cdktf.stringToTerraform(this._dToPort),
      description: cdktf.stringToTerraform(this._description),
      ether_t: cdktf.stringToTerraform(this._etherT),
      filter_dn: cdktf.stringToTerraform(this._filterDn),
      icmpv4_t: cdktf.stringToTerraform(this._icmpv4T),
      icmpv6_t: cdktf.stringToTerraform(this._icmpv6T),
      id: cdktf.stringToTerraform(this._id),
      match_dscp: cdktf.stringToTerraform(this._matchDscp),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      prot: cdktf.stringToTerraform(this._prot),
      s_from_port: cdktf.stringToTerraform(this._sFromPort),
      s_to_port: cdktf.stringToTerraform(this._sToPort),
      stateful: cdktf.stringToTerraform(this._stateful),
      tcp_rules: cdktf.stringToTerraform(this._tcpRules),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apply_to_frag: {
        value: cdktf.stringToHclTerraform(this._applyToFrag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_opc: {
        value: cdktf.stringToHclTerraform(this._arpOpc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      d_from_port: {
        value: cdktf.stringToHclTerraform(this._dFromPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      d_to_port: {
        value: cdktf.stringToHclTerraform(this._dToPort),
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
      ether_t: {
        value: cdktf.stringToHclTerraform(this._etherT),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_dn: {
        value: cdktf.stringToHclTerraform(this._filterDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpv4_t: {
        value: cdktf.stringToHclTerraform(this._icmpv4T),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmpv6_t: {
        value: cdktf.stringToHclTerraform(this._icmpv6T),
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
      match_dscp: {
        value: cdktf.stringToHclTerraform(this._matchDscp),
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
      prot: {
        value: cdktf.stringToHclTerraform(this._prot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s_from_port: {
        value: cdktf.stringToHclTerraform(this._sFromPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s_to_port: {
        value: cdktf.stringToHclTerraform(this._sToPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stateful: {
        value: cdktf.stringToHclTerraform(this._stateful),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_rules: {
        value: cdktf.stringToHclTerraform(this._tcpRules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
