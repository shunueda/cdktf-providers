// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContractConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#annotation Contract#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#description Contract#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#filter_entry_ids Contract#filter_entry_ids}
  */
  readonly filterEntryIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#filter_ids Contract#filter_ids}
  */
  readonly filterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#id Contract#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#name Contract#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#name_alias Contract#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#prio Contract#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#relation_vz_rs_graph_att Contract#relation_vz_rs_graph_att}
  */
  readonly relationVzRsGraphAtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#scope Contract#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#target_dscp Contract#target_dscp}
  */
  readonly targetDscp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#tenant_dn Contract#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#filter Contract#filter}
  */
  readonly filter?: ContractFilter[] | cdktf.IResolvable;
}
export interface ContractFilterFilterEntry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#annotation Contract#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#apply_to_frag Contract#apply_to_frag}
  */
  readonly applyToFrag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#arp_opc Contract#arp_opc}
  */
  readonly arpOpc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#d_from_port Contract#d_from_port}
  */
  readonly dFromPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#d_to_port Contract#d_to_port}
  */
  readonly dToPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#description Contract#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#entry_annotation Contract#entry_annotation}
  */
  readonly entryAnnotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#entry_description Contract#entry_description}
  */
  readonly entryDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#entry_name_alias Contract#entry_name_alias}
  */
  readonly entryNameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#ether_t Contract#ether_t}
  */
  readonly etherT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#filter_entry_name Contract#filter_entry_name}
  */
  readonly filterEntryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#icmpv4_t Contract#icmpv4_t}
  */
  readonly icmpv4T?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#icmpv6_t Contract#icmpv6_t}
  */
  readonly icmpv6T?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#match_dscp Contract#match_dscp}
  */
  readonly matchDscp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#prot Contract#prot}
  */
  readonly prot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#s_from_port Contract#s_from_port}
  */
  readonly sFromPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#s_to_port Contract#s_to_port}
  */
  readonly sToPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#stateful Contract#stateful}
  */
  readonly stateful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#tcp_rules Contract#tcp_rules}
  */
  readonly tcpRules?: string;
}

export function contractFilterFilterEntryToTerraform(struct?: ContractFilterFilterEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    apply_to_frag: cdktf.stringToTerraform(struct!.applyToFrag),
    arp_opc: cdktf.stringToTerraform(struct!.arpOpc),
    d_from_port: cdktf.stringToTerraform(struct!.dFromPort),
    d_to_port: cdktf.stringToTerraform(struct!.dToPort),
    description: cdktf.stringToTerraform(struct!.description),
    entry_annotation: cdktf.stringToTerraform(struct!.entryAnnotation),
    entry_description: cdktf.stringToTerraform(struct!.entryDescription),
    entry_name_alias: cdktf.stringToTerraform(struct!.entryNameAlias),
    ether_t: cdktf.stringToTerraform(struct!.etherT),
    filter_entry_name: cdktf.stringToTerraform(struct!.filterEntryName),
    icmpv4_t: cdktf.stringToTerraform(struct!.icmpv4T),
    icmpv6_t: cdktf.stringToTerraform(struct!.icmpv6T),
    match_dscp: cdktf.stringToTerraform(struct!.matchDscp),
    prot: cdktf.stringToTerraform(struct!.prot),
    s_from_port: cdktf.stringToTerraform(struct!.sFromPort),
    s_to_port: cdktf.stringToTerraform(struct!.sToPort),
    stateful: cdktf.stringToTerraform(struct!.stateful),
    tcp_rules: cdktf.stringToTerraform(struct!.tcpRules),
  }
}


export function contractFilterFilterEntryToHclTerraform(struct?: ContractFilterFilterEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apply_to_frag: {
      value: cdktf.stringToHclTerraform(struct!.applyToFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arp_opc: {
      value: cdktf.stringToHclTerraform(struct!.arpOpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    d_from_port: {
      value: cdktf.stringToHclTerraform(struct!.dFromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    d_to_port: {
      value: cdktf.stringToHclTerraform(struct!.dToPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_annotation: {
      value: cdktf.stringToHclTerraform(struct!.entryAnnotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_description: {
      value: cdktf.stringToHclTerraform(struct!.entryDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_name_alias: {
      value: cdktf.stringToHclTerraform(struct!.entryNameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ether_t: {
      value: cdktf.stringToHclTerraform(struct!.etherT),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_entry_name: {
      value: cdktf.stringToHclTerraform(struct!.filterEntryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmpv4_t: {
      value: cdktf.stringToHclTerraform(struct!.icmpv4T),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmpv6_t: {
      value: cdktf.stringToHclTerraform(struct!.icmpv6T),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_dscp: {
      value: cdktf.stringToHclTerraform(struct!.matchDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prot: {
      value: cdktf.stringToHclTerraform(struct!.prot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s_from_port: {
      value: cdktf.stringToHclTerraform(struct!.sFromPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s_to_port: {
      value: cdktf.stringToHclTerraform(struct!.sToPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stateful: {
      value: cdktf.stringToHclTerraform(struct!.stateful),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_rules: {
      value: cdktf.stringToHclTerraform(struct!.tcpRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContractFilterFilterEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContractFilterFilterEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._applyToFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyToFrag = this._applyToFrag;
    }
    if (this._arpOpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpOpc = this._arpOpc;
    }
    if (this._dFromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dFromPort = this._dFromPort;
    }
    if (this._dToPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dToPort = this._dToPort;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._entryAnnotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAnnotation = this._entryAnnotation;
    }
    if (this._entryDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDescription = this._entryDescription;
    }
    if (this._entryNameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryNameAlias = this._entryNameAlias;
    }
    if (this._etherT !== undefined) {
      hasAnyValues = true;
      internalValueResult.etherT = this._etherT;
    }
    if (this._filterEntryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEntryName = this._filterEntryName;
    }
    if (this._icmpv4T !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv4T = this._icmpv4T;
    }
    if (this._icmpv6T !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6T = this._icmpv6T;
    }
    if (this._matchDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDscp = this._matchDscp;
    }
    if (this._prot !== undefined) {
      hasAnyValues = true;
      internalValueResult.prot = this._prot;
    }
    if (this._sFromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sFromPort = this._sFromPort;
    }
    if (this._sToPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sToPort = this._sToPort;
    }
    if (this._stateful !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful;
    }
    if (this._tcpRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRules = this._tcpRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContractFilterFilterEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._applyToFrag = undefined;
      this._arpOpc = undefined;
      this._dFromPort = undefined;
      this._dToPort = undefined;
      this._description = undefined;
      this._entryAnnotation = undefined;
      this._entryDescription = undefined;
      this._entryNameAlias = undefined;
      this._etherT = undefined;
      this._filterEntryName = undefined;
      this._icmpv4T = undefined;
      this._icmpv6T = undefined;
      this._matchDscp = undefined;
      this._prot = undefined;
      this._sFromPort = undefined;
      this._sToPort = undefined;
      this._stateful = undefined;
      this._tcpRules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._applyToFrag = value.applyToFrag;
      this._arpOpc = value.arpOpc;
      this._dFromPort = value.dFromPort;
      this._dToPort = value.dToPort;
      this._description = value.description;
      this._entryAnnotation = value.entryAnnotation;
      this._entryDescription = value.entryDescription;
      this._entryNameAlias = value.entryNameAlias;
      this._etherT = value.etherT;
      this._filterEntryName = value.filterEntryName;
      this._icmpv4T = value.icmpv4T;
      this._icmpv6T = value.icmpv6T;
      this._matchDscp = value.matchDscp;
      this._prot = value.prot;
      this._sFromPort = value.sFromPort;
      this._sToPort = value.sToPort;
      this._stateful = value.stateful;
      this._tcpRules = value.tcpRules;
    }
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

  // entry_annotation - computed: true, optional: true, required: false
  private _entryAnnotation?: string; 
  public get entryAnnotation() {
    return this.getStringAttribute('entry_annotation');
  }
  public set entryAnnotation(value: string) {
    this._entryAnnotation = value;
  }
  public resetEntryAnnotation() {
    this._entryAnnotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAnnotationInput() {
    return this._entryAnnotation;
  }

  // entry_description - computed: true, optional: true, required: false
  private _entryDescription?: string; 
  public get entryDescription() {
    return this.getStringAttribute('entry_description');
  }
  public set entryDescription(value: string) {
    this._entryDescription = value;
  }
  public resetEntryDescription() {
    this._entryDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDescriptionInput() {
    return this._entryDescription;
  }

  // entry_name_alias - computed: true, optional: true, required: false
  private _entryNameAlias?: string; 
  public get entryNameAlias() {
    return this.getStringAttribute('entry_name_alias');
  }
  public set entryNameAlias(value: string) {
    this._entryNameAlias = value;
  }
  public resetEntryNameAlias() {
    this._entryNameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryNameAliasInput() {
    return this._entryNameAlias;
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

  // filter_entry_name - computed: false, optional: false, required: true
  private _filterEntryName?: string; 
  public get filterEntryName() {
    return this.getStringAttribute('filter_entry_name');
  }
  public set filterEntryName(value: string) {
    this._filterEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEntryNameInput() {
    return this._filterEntryName;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
}

export class ContractFilterFilterEntryList extends cdktf.ComplexList {
  public internalValue? : ContractFilterFilterEntry[] | cdktf.IResolvable

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
  public get(index: number): ContractFilterFilterEntryOutputReference {
    return new ContractFilterFilterEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContractFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#annotation Contract#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#description Contract#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#filter_name Contract#filter_name}
  */
  readonly filterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#name_alias Contract#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * filter_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#filter_entry Contract#filter_entry}
  */
  readonly filterEntry?: ContractFilterFilterEntry[] | cdktf.IResolvable;
}

export function contractFilterToTerraform(struct?: ContractFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    description: cdktf.stringToTerraform(struct!.description),
    filter_name: cdktf.stringToTerraform(struct!.filterName),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    filter_entry: cdktf.listMapper(contractFilterFilterEntryToTerraform, true)(struct!.filterEntry),
  }
}


export function contractFilterToHclTerraform(struct?: ContractFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_name: {
      value: cdktf.stringToHclTerraform(struct!.filterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_alias: {
      value: cdktf.stringToHclTerraform(struct!.nameAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_entry: {
      value: cdktf.listMapperHcl(contractFilterFilterEntryToHclTerraform, true)(struct!.filterEntry),
      isBlock: true,
      type: "list",
      storageClassType: "ContractFilterFilterEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContractFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContractFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterName = this._filterName;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._filterEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEntry = this._filterEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContractFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._description = undefined;
      this._filterName = undefined;
      this._nameAlias = undefined;
      this._filterEntry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._description = value.description;
      this._filterName = value.filterName;
      this._nameAlias = value.nameAlias;
      this._filterEntry.internalValue = value.filterEntry;
    }
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

  // filter_name - computed: false, optional: false, required: true
  private _filterName?: string; 
  public get filterName() {
    return this.getStringAttribute('filter_name');
  }
  public set filterName(value: string) {
    this._filterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNameInput() {
    return this._filterName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // filter_entry - computed: false, optional: true, required: false
  private _filterEntry = new ContractFilterFilterEntryList(this, "filter_entry", false);
  public get filterEntry() {
    return this._filterEntry;
  }
  public putFilterEntry(value: ContractFilterFilterEntry[] | cdktf.IResolvable) {
    this._filterEntry.internalValue = value;
  }
  public resetFilterEntry() {
    this._filterEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEntryInput() {
    return this._filterEntry.internalValue;
  }
}

export class ContractFilterList extends cdktf.ComplexList {
  public internalValue? : ContractFilter[] | cdktf.IResolvable

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
  public get(index: number): ContractFilterOutputReference {
    return new ContractFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract aci_contract}
*/
export class Contract extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_contract";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Contract resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Contract to import
  * @param importFromId The id of the existing Contract that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Contract to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_contract", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract aci_contract} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContractConfig
  */
  public constructor(scope: Construct, id: string, config: ContractConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_contract',
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
    this._annotation = config.annotation;
    this._description = config.description;
    this._filterEntryIds = config.filterEntryIds;
    this._filterIds = config.filterIds;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._prio = config.prio;
    this._relationVzRsGraphAtt = config.relationVzRsGraphAtt;
    this._scope = config.scope;
    this._targetDscp = config.targetDscp;
    this._tenantDn = config.tenantDn;
    this._filter.internalValue = config.filter;
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

  // filter_entry_ids - computed: true, optional: true, required: false
  private _filterEntryIds?: string[]; 
  public get filterEntryIds() {
    return this.getListAttribute('filter_entry_ids');
  }
  public set filterEntryIds(value: string[]) {
    this._filterEntryIds = value;
  }
  public resetFilterEntryIds() {
    this._filterEntryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEntryIdsInput() {
    return this._filterEntryIds;
  }

  // filter_ids - computed: true, optional: true, required: false
  private _filterIds?: string[]; 
  public get filterIds() {
    return this.getListAttribute('filter_ids');
  }
  public set filterIds(value: string[]) {
    this._filterIds = value;
  }
  public resetFilterIds() {
    this._filterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterIdsInput() {
    return this._filterIds;
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

  // prio - computed: true, optional: true, required: false
  private _prio?: string; 
  public get prio() {
    return this.getStringAttribute('prio');
  }
  public set prio(value: string) {
    this._prio = value;
  }
  public resetPrio() {
    this._prio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioInput() {
    return this._prio;
  }

  // relation_vz_rs_graph_att - computed: false, optional: true, required: false
  private _relationVzRsGraphAtt?: string; 
  public get relationVzRsGraphAtt() {
    return this.getStringAttribute('relation_vz_rs_graph_att');
  }
  public set relationVzRsGraphAtt(value: string) {
    this._relationVzRsGraphAtt = value;
  }
  public resetRelationVzRsGraphAtt() {
    this._relationVzRsGraphAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVzRsGraphAttInput() {
    return this._relationVzRsGraphAtt;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ContractFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ContractFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      filter_entry_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterEntryIds),
      filter_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      prio: cdktf.stringToTerraform(this._prio),
      relation_vz_rs_graph_att: cdktf.stringToTerraform(this._relationVzRsGraphAtt),
      scope: cdktf.stringToTerraform(this._scope),
      target_dscp: cdktf.stringToTerraform(this._targetDscp),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      filter: cdktf.listMapper(contractFilterToTerraform, true)(this._filter.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_entry_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterEntryIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      prio: {
        value: cdktf.stringToHclTerraform(this._prio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vz_rs_graph_att: {
        value: cdktf.stringToHclTerraform(this._relationVzRsGraphAtt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
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
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(contractFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContractFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
