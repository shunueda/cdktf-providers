// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationEpgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Withdraw AEPg Configuration from all Nodes in the Fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#admin_state ApplicationEpg#admin_state}
  */
  readonly adminState?: string;
  /**
  * The annotation of the Application EPG object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#application_profile_dn ApplicationEpg#application_profile_dn}
  */
  readonly applicationProfileDn?: string;
  /**
  * The contract exception tag of the Application EPG object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#contract_exception_tag ApplicationEpg#contract_exception_tag}
  */
  readonly contractExceptionTag?: string;
  /**
  * The description of the Application EPG object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#description ApplicationEpg#description}
  */
  readonly description?: string;
  /**
  * A criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#epg_useg_block_statement ApplicationEpg#epg_useg_block_statement}
  */
  readonly epgUsegBlockStatement?: ApplicationEpgEpgUsegBlockStatement;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#exception_tag ApplicationEpg#exception_tag}
  */
  readonly exceptionTag?: string;
  /**
  * Flood L2 Multicast/Broadcast and Link Local Layer based on encapsulation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#flood_in_encapsulation ApplicationEpg#flood_in_encapsulation}
  */
  readonly floodInEncapsulation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#flood_on_encap ApplicationEpg#flood_on_encap}
  */
  readonly floodOnEncap?: string;
  /**
  * The forwarding control of the Application EPG object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#forwarding_control ApplicationEpg#forwarding_control}
  */
  readonly forwardingControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#fwd_ctrl ApplicationEpg#fwd_ctrl}
  */
  readonly fwdCtrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#has_mcast_source ApplicationEpg#has_mcast_source}
  */
  readonly hasMcastSource?: string;
  /**
  * The Application EPG object has a multicast source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#has_multicast_source ApplicationEpg#has_multicast_source}
  */
  readonly hasMulticastSource?: string;
  /**
  * Parameter used to determine whether communication between endpoints within the EPG is blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#intra_epg_isolation ApplicationEpg#intra_epg_isolation}
  */
  readonly intraEpgIsolation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#is_attr_based_epg ApplicationEpg#is_attr_based_epg}
  */
  readonly isAttrBasedEpg?: string;
  /**
  * The provider label match criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#match_criteria ApplicationEpg#match_criteria}
  */
  readonly matchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#match_t ApplicationEpg#match_t}
  */
  readonly matchT?: string;
  /**
  * The name of the Application EPG object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#name ApplicationEpg#name}
  */
  readonly name?: string;
  /**
  * The name alias of the Application EPG object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#name_alias ApplicationEpg#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#parent_dn ApplicationEpg#parent_dn}
  */
  readonly parentDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#pc_enf_pref ApplicationEpg#pc_enf_pref}
  */
  readonly pcEnfPref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#pref_gr_memb ApplicationEpg#pref_gr_memb}
  */
  readonly prefGrMemb?: string;
  /**
  * Parameter used to determine whether the EPG is part of the preferred group. Members of this group are allowed to communicate without contracts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#preferred_group_member ApplicationEpg#preferred_group_member}
  */
  readonly preferredGroupMember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#prio ApplicationEpg#prio}
  */
  readonly prio?: string;
  /**
  * The Quality of Service (QoS) priority class ID. QoS refers to the capability of a network to provide better service to selected network traffic over various technologies. The primary goal of QoS is to provide priority including dedicated bandwidth, controlled jitter and latency (required by some real-time and interactive traffic), and improved loss characteristics. You can configure the bandwidth of each QoS level using QoS profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#priority ApplicationEpg#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_aepg_mon_pol ApplicationEpg#relation_fv_rs_aepg_mon_pol}
  */
  readonly relationFvRsAepgMonPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_bd ApplicationEpg#relation_fv_rs_bd}
  */
  readonly relationFvRsBd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_cons ApplicationEpg#relation_fv_rs_cons}
  */
  readonly relationFvRsCons?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_cons_if ApplicationEpg#relation_fv_rs_cons_if}
  */
  readonly relationFvRsConsIf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_cust_qos_pol ApplicationEpg#relation_fv_rs_cust_qos_pol}
  */
  readonly relationFvRsCustQosPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_dpp_pol ApplicationEpg#relation_fv_rs_dpp_pol}
  */
  readonly relationFvRsDppPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_fc_path_att ApplicationEpg#relation_fv_rs_fc_path_att}
  */
  readonly relationFvRsFcPathAtt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_intra_epg ApplicationEpg#relation_fv_rs_intra_epg}
  */
  readonly relationFvRsIntraEpg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_path_att ApplicationEpg#relation_fv_rs_path_att}
  */
  readonly relationFvRsPathAtt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_prot_by ApplicationEpg#relation_fv_rs_prot_by}
  */
  readonly relationFvRsProtBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_prov ApplicationEpg#relation_fv_rs_prov}
  */
  readonly relationFvRsProv?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_prov_def ApplicationEpg#relation_fv_rs_prov_def}
  */
  readonly relationFvRsProvDef?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_sec_inherited ApplicationEpg#relation_fv_rs_sec_inherited}
  */
  readonly relationFvRsSecInherited?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_trust_ctrl ApplicationEpg#relation_fv_rs_trust_ctrl}
  */
  readonly relationFvRsTrustCtrl?: string;
  /**
  * A source relation to the bridge domain associated to this endpoint group. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_bridge_domain ApplicationEpg#relation_to_bridge_domain}
  */
  readonly relationToBridgeDomain?: ApplicationEpgRelationToBridgeDomain;
  /**
  * The Consumer contract profile information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_consumed_contracts ApplicationEpg#relation_to_consumed_contracts}
  */
  readonly relationToConsumedContracts?: ApplicationEpgRelationToConsumedContracts[] | cdktf.IResolvable;
  /**
  * Represents that the EPg is inheriting security configuration from another EPg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_contract_masters ApplicationEpg#relation_to_contract_masters}
  */
  readonly relationToContractMasters?: ApplicationEpgRelationToContractMasters[] | cdktf.IResolvable;
  /**
  * A source relation to a custom QoS policy that enables different levels of service to be assigned to network traffic, including specifications for the Differentiated Services Code Point (DSCP) value(s) and the 802.1p Dot1p priority. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_custom_qos_policy ApplicationEpg#relation_to_custom_qos_policy}
  */
  readonly relationToCustomQosPolicy?: ApplicationEpgRelationToCustomQosPolicy;
  /**
  * Relationship for Dpp QOS policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_data_plane_policing_policy ApplicationEpg#relation_to_data_plane_policing_policy}
  */
  readonly relationToDataPlanePolicingPolicy?: ApplicationEpgRelationToDataPlanePolicingPolicy;
  /**
  * An EPG can be linked to a domain profile via the Associated Domain Profiles. The domain profiles attached can be VMM, Physical, L2 External, or L3 External Domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_domains ApplicationEpg#relation_to_domains}
  */
  readonly relationToDomains?: ApplicationEpgRelationToDomains[] | cdktf.IResolvable;
  /**
  * this object is used for creation of static association
  *                      with a Path for fcoe. Existence of this implies that the
  *                      corresponding set of policies will be resolved into the
  *                      node to which the relationship points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_fibre_channel_paths ApplicationEpg#relation_to_fibre_channel_paths}
  */
  readonly relationToFibreChannelPaths?: ApplicationEpgRelationToFibreChannelPaths[] | cdktf.IResolvable;
  /**
  * A contract for which the EPG will be a consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_imported_contracts ApplicationEpg#relation_to_imported_contracts}
  */
  readonly relationToImportedContracts?: ApplicationEpgRelationToImportedContracts[] | cdktf.IResolvable;
  /**
  * Intra EPg contract:
  *                       Represents that the EPg is moving from "allow all within epg" mode
  *                       to a "deny all within epg" mode.
  *                       The only type of traffic allowed between EPs in this EPg is the one
  *                       specified by contracts EPg associates to with this relation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_intra_epg_contracts ApplicationEpg#relation_to_intra_epg_contracts}
  */
  readonly relationToIntraEpgContracts?: ApplicationEpgRelationToIntraEpgContracts[] | cdktf.IResolvable;
  /**
  * A source relation to the monitoring policy model for the endpoint group semantic scope. This is an internal object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_monitoring_policy ApplicationEpg#relation_to_monitoring_policy}
  */
  readonly relationToMonitoringPolicy?: ApplicationEpgRelationToMonitoringPolicy;
  /**
  * A contract for which the EPG will be a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_provided_contracts ApplicationEpg#relation_to_provided_contracts}
  */
  readonly relationToProvidedContracts?: ApplicationEpgRelationToProvidedContracts[] | cdktf.IResolvable;
  /**
  * The static association with an access group is a bundled or unbundled group of ports. The existence of this object implies that the corresponding set of policies will be resolved into the node to which the relationship points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_static_leafs ApplicationEpg#relation_to_static_leafs}
  */
  readonly relationToStaticLeafs?: ApplicationEpgRelationToStaticLeafs[] | cdktf.IResolvable;
  /**
  * A source relation to an abstraction of a path endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_static_paths ApplicationEpg#relation_to_static_paths}
  */
  readonly relationToStaticPaths?: ApplicationEpgRelationToStaticPaths[] | cdktf.IResolvable;
  /**
  * The taboo contract for which the EPG will be a provider and consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_taboo_contracts ApplicationEpg#relation_to_taboo_contracts}
  */
  readonly relationToTabooContracts?: ApplicationEpgRelationToTabooContracts[] | cdktf.IResolvable;
  /**
  * Relationship for FHS trust control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_to_trust_control_policy ApplicationEpg#relation_to_trust_control_policy}
  */
  readonly relationToTrustControlPolicy?: ApplicationEpgRelationToTrustControlPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#shutdown ApplicationEpg#shutdown}
  */
  readonly shutdown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgTags[] | cdktf.IResolvable;
  /**
  * The Application EPG object is microsegmented (uSeg).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#useg_epg ApplicationEpg#useg_epg}
  */
  readonly usegEpg?: string;
  /**
  * relation_fv_rs_node_att block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#relation_fv_rs_node_att ApplicationEpg#relation_fv_rs_node_att}
  */
  readonly relationFvRsNodeAtt?: ApplicationEpgRelationFvRsNodeAtt[] | cdktf.IResolvable;
}
export interface ApplicationEpgAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgAnnotationsToTerraform(struct?: ApplicationEpgAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgAnnotationsToHclTerraform(struct?: ApplicationEpgAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgAnnotationsOutputReference {
    return new ApplicationEpgAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgEpgUsegBlockStatementAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgEpgUsegBlockStatementAnnotationsToTerraform(struct?: ApplicationEpgEpgUsegBlockStatementAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgEpgUsegBlockStatementAnnotationsToHclTerraform(struct?: ApplicationEpgEpgUsegBlockStatementAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgEpgUsegBlockStatementAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgEpgUsegBlockStatementAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgEpgUsegBlockStatementAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgEpgUsegBlockStatementAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgEpgUsegBlockStatementAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgEpgUsegBlockStatementAnnotationsOutputReference {
    return new ApplicationEpgEpgUsegBlockStatementAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgEpgUsegBlockStatementTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgEpgUsegBlockStatementTagsToTerraform(struct?: ApplicationEpgEpgUsegBlockStatementTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgEpgUsegBlockStatementTagsToHclTerraform(struct?: ApplicationEpgEpgUsegBlockStatementTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgEpgUsegBlockStatementTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgEpgUsegBlockStatementTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgEpgUsegBlockStatementTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgEpgUsegBlockStatementTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgEpgUsegBlockStatementTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgEpgUsegBlockStatementTagsOutputReference {
    return new ApplicationEpgEpgUsegBlockStatementTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgEpgUsegBlockStatement {
  /**
  * The annotation of the EPG uSeg Block Statement object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgEpgUsegBlockStatementAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the EPG uSeg Block Statement object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#description ApplicationEpg#description}
  */
  readonly description?: string;
  /**
  * The Matching Rule Type of the EPG uSeg Block Statement object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#match ApplicationEpg#match}
  */
  readonly match?: string;
  /**
  * The name of the EPG uSeg Block Statement object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#name ApplicationEpg#name}
  */
  readonly name?: string;
  /**
  * The name alias of the EPG uSeg Block Statement object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#name_alias ApplicationEpg#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The key for enabling clients to own their data for entity correlation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#owner_key ApplicationEpg#owner_key}
  */
  readonly ownerKey?: string;
  /**
  * A tag for enabling clients to add their own data. For example, to indicate who created this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#owner_tag ApplicationEpg#owner_tag}
  */
  readonly ownerTag?: string;
  /**
  * The precedence of the EPG uSeg Block Statement object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#precedence ApplicationEpg#precedence}
  */
  readonly precedence?: string;
  /**
  * The scope of the EPG uSeg Block Statement object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#scope ApplicationEpg#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgEpgUsegBlockStatementTags[] | cdktf.IResolvable;
}

export function applicationEpgEpgUsegBlockStatementToTerraform(struct?: ApplicationEpgEpgUsegBlockStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgEpgUsegBlockStatementAnnotationsToTerraform, false)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    match: cdktf.stringToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    name_alias: cdktf.stringToTerraform(struct!.nameAlias),
    owner_key: cdktf.stringToTerraform(struct!.ownerKey),
    owner_tag: cdktf.stringToTerraform(struct!.ownerTag),
    precedence: cdktf.stringToTerraform(struct!.precedence),
    scope: cdktf.stringToTerraform(struct!.scope),
    tags: cdktf.listMapper(applicationEpgEpgUsegBlockStatementTagsToTerraform, false)(struct!.tags),
  }
}


export function applicationEpgEpgUsegBlockStatementToHclTerraform(struct?: ApplicationEpgEpgUsegBlockStatement | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgEpgUsegBlockStatementAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgEpgUsegBlockStatementAnnotationsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    owner_key: {
      value: cdktf.stringToHclTerraform(struct!.ownerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_tag: {
      value: cdktf.stringToHclTerraform(struct!.ownerTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    precedence: {
      value: cdktf.stringToHclTerraform(struct!.precedence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgEpgUsegBlockStatementTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgEpgUsegBlockStatementTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgEpgUsegBlockStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationEpgEpgUsegBlockStatement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAlias = this._nameAlias;
    }
    if (this._ownerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerKey = this._ownerKey;
    }
    if (this._ownerTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerTag = this._ownerTag;
    }
    if (this._precedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.precedence = this._precedence;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgEpgUsegBlockStatement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._description = undefined;
      this._match = undefined;
      this._name = undefined;
      this._nameAlias = undefined;
      this._ownerKey = undefined;
      this._ownerTag = undefined;
      this._precedence = undefined;
      this._scope = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._description = value.description;
      this._match = value.match;
      this._name = value.name;
      this._nameAlias = value.nameAlias;
      this._ownerKey = value.ownerKey;
      this._ownerTag = value.ownerTag;
      this._precedence = value.precedence;
      this._scope = value.scope;
      this._tags.internalValue = value.tags;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgEpgUsegBlockStatementAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgEpgUsegBlockStatementAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // match - computed: true, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // name - computed: true, optional: true, required: false
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

  // owner_key - computed: true, optional: true, required: false
  private _ownerKey?: string; 
  public get ownerKey() {
    return this.getStringAttribute('owner_key');
  }
  public set ownerKey(value: string) {
    this._ownerKey = value;
  }
  public resetOwnerKey() {
    this._ownerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerKeyInput() {
    return this._ownerKey;
  }

  // owner_tag - computed: true, optional: true, required: false
  private _ownerTag?: string; 
  public get ownerTag() {
    return this.getStringAttribute('owner_tag');
  }
  public set ownerTag(value: string) {
    this._ownerTag = value;
  }
  public resetOwnerTag() {
    this._ownerTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTagInput() {
    return this._ownerTag;
  }

  // precedence - computed: true, optional: true, required: false
  private _precedence?: string; 
  public get precedence() {
    return this.getStringAttribute('precedence');
  }
  public set precedence(value: string) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgEpgUsegBlockStatementTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgEpgUsegBlockStatementTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface ApplicationEpgRelationToBridgeDomainAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToBridgeDomainAnnotationsToTerraform(struct?: ApplicationEpgRelationToBridgeDomainAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToBridgeDomainAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToBridgeDomainAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToBridgeDomainAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToBridgeDomainAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToBridgeDomainAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToBridgeDomainAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToBridgeDomainAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToBridgeDomainAnnotationsOutputReference {
    return new ApplicationEpgRelationToBridgeDomainAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToBridgeDomainTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToBridgeDomainTagsToTerraform(struct?: ApplicationEpgRelationToBridgeDomainTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToBridgeDomainTagsToHclTerraform(struct?: ApplicationEpgRelationToBridgeDomainTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToBridgeDomainTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToBridgeDomainTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToBridgeDomainTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToBridgeDomainTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToBridgeDomainTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToBridgeDomainTagsOutputReference {
    return new ApplicationEpgRelationToBridgeDomainTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToBridgeDomain {
  /**
  * The annotation of the Relation To Bridge Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToBridgeDomainAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the bridge domain associated with this EPG.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#bridge_domain_name ApplicationEpg#bridge_domain_name}
  */
  readonly bridgeDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToBridgeDomainTags[] | cdktf.IResolvable;
}

export function applicationEpgRelationToBridgeDomainToTerraform(struct?: ApplicationEpgRelationToBridgeDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToBridgeDomainAnnotationsToTerraform, false)(struct!.annotations),
    bridge_domain_name: cdktf.stringToTerraform(struct!.bridgeDomainName),
    tags: cdktf.listMapper(applicationEpgRelationToBridgeDomainTagsToTerraform, false)(struct!.tags),
  }
}


export function applicationEpgRelationToBridgeDomainToHclTerraform(struct?: ApplicationEpgRelationToBridgeDomain | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToBridgeDomainAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToBridgeDomainAnnotationsList",
    },
    bridge_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.bridgeDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToBridgeDomainTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToBridgeDomainTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToBridgeDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationEpgRelationToBridgeDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._bridgeDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridgeDomainName = this._bridgeDomainName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToBridgeDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._bridgeDomainName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._bridgeDomainName = value.bridgeDomainName;
      this._tags.internalValue = value.tags;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToBridgeDomainAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToBridgeDomainAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // bridge_domain_name - computed: true, optional: true, required: false
  private _bridgeDomainName?: string; 
  public get bridgeDomainName() {
    return this.getStringAttribute('bridge_domain_name');
  }
  public set bridgeDomainName(value: string) {
    this._bridgeDomainName = value;
  }
  public resetBridgeDomainName() {
    this._bridgeDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeDomainNameInput() {
    return this._bridgeDomainName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToBridgeDomainTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToBridgeDomainTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface ApplicationEpgRelationToConsumedContractsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToConsumedContractsAnnotationsToTerraform(struct?: ApplicationEpgRelationToConsumedContractsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToConsumedContractsAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToConsumedContractsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToConsumedContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToConsumedContractsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToConsumedContractsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToConsumedContractsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToConsumedContractsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToConsumedContractsAnnotationsOutputReference {
    return new ApplicationEpgRelationToConsumedContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToConsumedContractsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToConsumedContractsTagsToTerraform(struct?: ApplicationEpgRelationToConsumedContractsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToConsumedContractsTagsToHclTerraform(struct?: ApplicationEpgRelationToConsumedContractsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToConsumedContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToConsumedContractsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToConsumedContractsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToConsumedContractsTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToConsumedContractsTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToConsumedContractsTagsOutputReference {
    return new ApplicationEpgRelationToConsumedContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToConsumedContracts {
  /**
  * The annotation of the Relation To Consumed Contract object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToConsumedContractsAnnotations[] | cdktf.IResolvable;
  /**
  * The consumer contract name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#contract_name ApplicationEpg#contract_name}
  */
  readonly contractName?: string;
  /**
  * The Quality of Service (QoS) priority class ID. QoS refers to the capability of a network to provide better service to selected network traffic over various technologies. The primary goal of QoS is to provide priority including dedicated bandwidth, controlled jitter and latency (required by some real-time and interactive traffic), and improved loss characteristics. You can configure the bandwidth of each QoS level using QoS profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#priority ApplicationEpg#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToConsumedContractsTags[] | cdktf.IResolvable;
}

export function applicationEpgRelationToConsumedContractsToTerraform(struct?: ApplicationEpgRelationToConsumedContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToConsumedContractsAnnotationsToTerraform, false)(struct!.annotations),
    contract_name: cdktf.stringToTerraform(struct!.contractName),
    priority: cdktf.stringToTerraform(struct!.priority),
    tags: cdktf.listMapper(applicationEpgRelationToConsumedContractsTagsToTerraform, false)(struct!.tags),
  }
}


export function applicationEpgRelationToConsumedContractsToHclTerraform(struct?: ApplicationEpgRelationToConsumedContracts | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToConsumedContractsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToConsumedContractsAnnotationsList",
    },
    contract_name: {
      value: cdktf.stringToHclTerraform(struct!.contractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToConsumedContractsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToConsumedContractsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToConsumedContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToConsumedContracts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._contractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractName = this._contractName;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToConsumedContracts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._contractName = undefined;
      this._priority = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._contractName = value.contractName;
      this._priority = value.priority;
      this._tags.internalValue = value.tags;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToConsumedContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToConsumedContractsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // contract_name - computed: true, optional: true, required: false
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  public resetContractName() {
    this._contractName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToConsumedContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToConsumedContractsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class ApplicationEpgRelationToConsumedContractsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToConsumedContracts[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToConsumedContractsOutputReference {
    return new ApplicationEpgRelationToConsumedContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToContractMastersAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToContractMastersAnnotationsToTerraform(struct?: ApplicationEpgRelationToContractMastersAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToContractMastersAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToContractMastersAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToContractMastersAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToContractMastersAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToContractMastersAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToContractMastersAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToContractMastersAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToContractMastersAnnotationsOutputReference {
    return new ApplicationEpgRelationToContractMastersAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToContractMastersTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToContractMastersTagsToTerraform(struct?: ApplicationEpgRelationToContractMastersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToContractMastersTagsToHclTerraform(struct?: ApplicationEpgRelationToContractMastersTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToContractMastersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToContractMastersTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToContractMastersTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToContractMastersTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToContractMastersTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToContractMastersTagsOutputReference {
    return new ApplicationEpgRelationToContractMastersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToContractMasters {
  /**
  * The annotation of the Relation To Contract Master object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToContractMastersAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToContractMastersTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#target_dn ApplicationEpg#target_dn}
  */
  readonly targetDn?: string;
}

export function applicationEpgRelationToContractMastersToTerraform(struct?: ApplicationEpgRelationToContractMasters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToContractMastersAnnotationsToTerraform, false)(struct!.annotations),
    tags: cdktf.listMapper(applicationEpgRelationToContractMastersTagsToTerraform, false)(struct!.tags),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function applicationEpgRelationToContractMastersToHclTerraform(struct?: ApplicationEpgRelationToContractMasters | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToContractMastersAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToContractMastersAnnotationsList",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToContractMastersTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToContractMastersTagsList",
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

export class ApplicationEpgRelationToContractMastersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToContractMasters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToContractMasters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._tags.internalValue = value.tags;
      this._targetDn = value.targetDn;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToContractMastersAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToContractMastersAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToContractMastersTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToContractMastersTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}

export class ApplicationEpgRelationToContractMastersList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToContractMasters[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToContractMastersOutputReference {
    return new ApplicationEpgRelationToContractMastersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToCustomQosPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToCustomQosPolicyAnnotationsToTerraform(struct?: ApplicationEpgRelationToCustomQosPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToCustomQosPolicyAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToCustomQosPolicyAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToCustomQosPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToCustomQosPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToCustomQosPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToCustomQosPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToCustomQosPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToCustomQosPolicyAnnotationsOutputReference {
    return new ApplicationEpgRelationToCustomQosPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToCustomQosPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToCustomQosPolicyTagsToTerraform(struct?: ApplicationEpgRelationToCustomQosPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToCustomQosPolicyTagsToHclTerraform(struct?: ApplicationEpgRelationToCustomQosPolicyTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToCustomQosPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToCustomQosPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToCustomQosPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToCustomQosPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToCustomQosPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToCustomQosPolicyTagsOutputReference {
    return new ApplicationEpgRelationToCustomQosPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToCustomQosPolicy {
  /**
  * The annotation of the Relation To Custom QoS Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToCustomQosPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The Custom QoS traffic policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#custom_qos_policy_name ApplicationEpg#custom_qos_policy_name}
  */
  readonly customQosPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToCustomQosPolicyTags[] | cdktf.IResolvable;
}

export function applicationEpgRelationToCustomQosPolicyToTerraform(struct?: ApplicationEpgRelationToCustomQosPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToCustomQosPolicyAnnotationsToTerraform, false)(struct!.annotations),
    custom_qos_policy_name: cdktf.stringToTerraform(struct!.customQosPolicyName),
    tags: cdktf.listMapper(applicationEpgRelationToCustomQosPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function applicationEpgRelationToCustomQosPolicyToHclTerraform(struct?: ApplicationEpgRelationToCustomQosPolicy | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToCustomQosPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToCustomQosPolicyAnnotationsList",
    },
    custom_qos_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.customQosPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToCustomQosPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToCustomQosPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToCustomQosPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationEpgRelationToCustomQosPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._customQosPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customQosPolicyName = this._customQosPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToCustomQosPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._customQosPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._customQosPolicyName = value.customQosPolicyName;
      this._tags.internalValue = value.tags;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToCustomQosPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToCustomQosPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // custom_qos_policy_name - computed: true, optional: true, required: false
  private _customQosPolicyName?: string; 
  public get customQosPolicyName() {
    return this.getStringAttribute('custom_qos_policy_name');
  }
  public set customQosPolicyName(value: string) {
    this._customQosPolicyName = value;
  }
  public resetCustomQosPolicyName() {
    this._customQosPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customQosPolicyNameInput() {
    return this._customQosPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToCustomQosPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToCustomQosPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface ApplicationEpgRelationToDataPlanePolicingPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToDataPlanePolicingPolicyAnnotationsToTerraform(struct?: ApplicationEpgRelationToDataPlanePolicingPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToDataPlanePolicingPolicyAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToDataPlanePolicingPolicyAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToDataPlanePolicingPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToDataPlanePolicingPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToDataPlanePolicingPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToDataPlanePolicingPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToDataPlanePolicingPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToDataPlanePolicingPolicyAnnotationsOutputReference {
    return new ApplicationEpgRelationToDataPlanePolicingPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToDataPlanePolicingPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToDataPlanePolicingPolicyTagsToTerraform(struct?: ApplicationEpgRelationToDataPlanePolicingPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToDataPlanePolicingPolicyTagsToHclTerraform(struct?: ApplicationEpgRelationToDataPlanePolicingPolicyTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToDataPlanePolicingPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToDataPlanePolicingPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToDataPlanePolicingPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToDataPlanePolicingPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToDataPlanePolicingPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToDataPlanePolicingPolicyTagsOutputReference {
    return new ApplicationEpgRelationToDataPlanePolicingPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToDataPlanePolicingPolicy {
  /**
  * The annotation of the Relation To Data Plane Policing Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToDataPlanePolicingPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#data_plane_policing_policy_name ApplicationEpg#data_plane_policing_policy_name}
  */
  readonly dataPlanePolicingPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToDataPlanePolicingPolicyTags[] | cdktf.IResolvable;
}

export function applicationEpgRelationToDataPlanePolicingPolicyToTerraform(struct?: ApplicationEpgRelationToDataPlanePolicingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToDataPlanePolicingPolicyAnnotationsToTerraform, false)(struct!.annotations),
    data_plane_policing_policy_name: cdktf.stringToTerraform(struct!.dataPlanePolicingPolicyName),
    tags: cdktf.listMapper(applicationEpgRelationToDataPlanePolicingPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function applicationEpgRelationToDataPlanePolicingPolicyToHclTerraform(struct?: ApplicationEpgRelationToDataPlanePolicingPolicy | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToDataPlanePolicingPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToDataPlanePolicingPolicyAnnotationsList",
    },
    data_plane_policing_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.dataPlanePolicingPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToDataPlanePolicingPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToDataPlanePolicingPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToDataPlanePolicingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationEpgRelationToDataPlanePolicingPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._dataPlanePolicingPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPlanePolicingPolicyName = this._dataPlanePolicingPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToDataPlanePolicingPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._dataPlanePolicingPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._dataPlanePolicingPolicyName = value.dataPlanePolicingPolicyName;
      this._tags.internalValue = value.tags;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToDataPlanePolicingPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToDataPlanePolicingPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // data_plane_policing_policy_name - computed: true, optional: true, required: false
  private _dataPlanePolicingPolicyName?: string; 
  public get dataPlanePolicingPolicyName() {
    return this.getStringAttribute('data_plane_policing_policy_name');
  }
  public set dataPlanePolicingPolicyName(value: string) {
    this._dataPlanePolicingPolicyName = value;
  }
  public resetDataPlanePolicingPolicyName() {
    this._dataPlanePolicingPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlanePolicingPolicyNameInput() {
    return this._dataPlanePolicingPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToDataPlanePolicingPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToDataPlanePolicingPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface ApplicationEpgRelationToDomainsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToDomainsAnnotationsToTerraform(struct?: ApplicationEpgRelationToDomainsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToDomainsAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToDomainsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToDomainsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToDomainsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToDomainsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToDomainsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToDomainsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToDomainsAnnotationsOutputReference {
    return new ApplicationEpgRelationToDomainsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToDomainsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToDomainsTagsToTerraform(struct?: ApplicationEpgRelationToDomainsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToDomainsTagsToHclTerraform(struct?: ApplicationEpgRelationToDomainsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToDomainsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToDomainsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToDomainsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToDomainsTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToDomainsTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToDomainsTagsOutputReference {
    return new ApplicationEpgRelationToDomainsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToDomains {
  /**
  * The annotation of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToDomainsAnnotations[] | cdktf.IResolvable;
  /**
  * The binding type of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#binding_type ApplicationEpg#binding_type}
  */
  readonly bindingType?: string;
  /**
  * The class preference of the Relation To Domain object. Set 'useg' to allow microsegmentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#class_preference ApplicationEpg#class_preference}
  */
  readonly classPreference?: string;
  /**
  * The display name of the user configured port-group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#custom_epg_name ApplicationEpg#custom_epg_name}
  */
  readonly customEpgName?: string;
  /**
  * The delimiter of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#delimiter ApplicationEpg#delimiter}
  */
  readonly delimiter?: string;
  /**
  * The deployment immediacy of the Relation To Domain object. Specifies when the policy is pushed into the hardware policy content-addressable memory (CAM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#deployment_immediacy ApplicationEpg#deployment_immediacy}
  */
  readonly deploymentImmediacy?: string;
  /**
  * The NetFlow enabled status for the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#enable_netflow ApplicationEpg#enable_netflow}
  */
  readonly enableNetflow?: string;
  /**
  * The encapsulation of the Relation To Domain object. The encapsulation refers to the EPG VLAN when class preference is set to 'encap, or to the Secondary VLAN when class preference is set to 'useg'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#encapsulation ApplicationEpg#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * The encapsulation mode of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#encapsulation_mode ApplicationEpg#encapsulation_mode}
  */
  readonly encapsulationMode?: string;
  /**
  * The class of service (CoS) of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#epg_cos ApplicationEpg#epg_cos}
  */
  readonly epgCos?: string;
  /**
  * The class of service (CoS) preference of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#epg_cos_pref ApplicationEpg#epg_cos_pref}
  */
  readonly epgCosPref?: string;
  /**
  * The IP address management (IPAM) DHCP override of the Relation To Domain object. Only applicable for Nutanix domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#ipam_dhcp_override ApplicationEpg#ipam_dhcp_override}
  */
  readonly ipamDhcpOverride?: string;
  /**
  * The IP address management (IPAM) enabled status of the Relation To Domain object. Only applicable for Nutanix domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#ipam_enabled ApplicationEpg#ipam_enabled}
  */
  readonly ipamEnabled?: string;
  /**
  * The IP address management (IPAM) gateway of the Relation To Domain object. Only applicable for Nutanix domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#ipam_gateway ApplicationEpg#ipam_gateway}
  */
  readonly ipamGateway?: string;
  /**
  * The link aggregation group (LAG) policy name of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#lag_policy_name ApplicationEpg#lag_policy_name}
  */
  readonly lagPolicyName?: string;
  /**
  * The NetFlow monitoring direction of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#netflow_direction ApplicationEpg#netflow_direction}
  */
  readonly netflowDirection?: string;
  /**
  * The number of ports of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#number_of_ports ApplicationEpg#number_of_ports}
  */
  readonly numberOfPorts?: string;
  /**
  * Port allocation for ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#port_allocation ApplicationEpg#port_allocation}
  */
  readonly portAllocation?: string;
  /**
  * The primary encapsulation of the Relation To Domain object. This is used when the class preference is set to 'useg'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#primary_encapsulation ApplicationEpg#primary_encapsulation}
  */
  readonly primaryEncapsulation?: string;
  /**
  * The primary inner encapsulation of the Relation To Domain object. This is used for the portgroup at the VMWare Distributed Virtual Switch (DVS). This VLAN is internal to the DVS and is used for communication between the other VMs and the AVE VM at a host. Traffic is not forwarded to the fabric over the VLAN. Only applicable for Cisco ACI Virtual Edge (AVE) domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#primary_encapsulation_inner ApplicationEpg#primary_encapsulation_inner}
  */
  readonly primaryEncapsulationInner?: string;
  /**
  * The resolution immediacy of the Relation To Domain object. Specifies if policies are resolved immmediately or when needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#resolution_immediacy ApplicationEpg#resolution_immediacy}
  */
  readonly resolutionImmediacy?: string;
  /**
  * The secondary inner encapsulation of the Relation To Domain object. This is used for the portgroup at the VMWare Distributed Virtual Switch (DVS). This VLAN is internal to the DVS and is used for communication between the other VMs and the AVE VM at a host. Traffic is not forwarded to the fabric over the VLAN. Only applicable for Cisco ACI Virtual Edge (AVE) domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#secondary_encapsulation_inner ApplicationEpg#secondary_encapsulation_inner}
  */
  readonly secondaryEncapsulationInner?: string;
  /**
  * The switching mode of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#switching_mode ApplicationEpg#switching_mode}
  */
  readonly switchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToDomainsTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#target_dn ApplicationEpg#target_dn}
  */
  readonly targetDn?: string;
  /**
  * The untagged status of the Relation To Domain object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#untagged ApplicationEpg#untagged}
  */
  readonly untagged?: string;
}

export function applicationEpgRelationToDomainsToTerraform(struct?: ApplicationEpgRelationToDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToDomainsAnnotationsToTerraform, false)(struct!.annotations),
    binding_type: cdktf.stringToTerraform(struct!.bindingType),
    class_preference: cdktf.stringToTerraform(struct!.classPreference),
    custom_epg_name: cdktf.stringToTerraform(struct!.customEpgName),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    deployment_immediacy: cdktf.stringToTerraform(struct!.deploymentImmediacy),
    enable_netflow: cdktf.stringToTerraform(struct!.enableNetflow),
    encapsulation: cdktf.stringToTerraform(struct!.encapsulation),
    encapsulation_mode: cdktf.stringToTerraform(struct!.encapsulationMode),
    epg_cos: cdktf.stringToTerraform(struct!.epgCos),
    epg_cos_pref: cdktf.stringToTerraform(struct!.epgCosPref),
    ipam_dhcp_override: cdktf.stringToTerraform(struct!.ipamDhcpOverride),
    ipam_enabled: cdktf.stringToTerraform(struct!.ipamEnabled),
    ipam_gateway: cdktf.stringToTerraform(struct!.ipamGateway),
    lag_policy_name: cdktf.stringToTerraform(struct!.lagPolicyName),
    netflow_direction: cdktf.stringToTerraform(struct!.netflowDirection),
    number_of_ports: cdktf.stringToTerraform(struct!.numberOfPorts),
    port_allocation: cdktf.stringToTerraform(struct!.portAllocation),
    primary_encapsulation: cdktf.stringToTerraform(struct!.primaryEncapsulation),
    primary_encapsulation_inner: cdktf.stringToTerraform(struct!.primaryEncapsulationInner),
    resolution_immediacy: cdktf.stringToTerraform(struct!.resolutionImmediacy),
    secondary_encapsulation_inner: cdktf.stringToTerraform(struct!.secondaryEncapsulationInner),
    switching_mode: cdktf.stringToTerraform(struct!.switchingMode),
    tags: cdktf.listMapper(applicationEpgRelationToDomainsTagsToTerraform, false)(struct!.tags),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
    untagged: cdktf.stringToTerraform(struct!.untagged),
  }
}


export function applicationEpgRelationToDomainsToHclTerraform(struct?: ApplicationEpgRelationToDomains | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToDomainsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToDomainsAnnotationsList",
    },
    binding_type: {
      value: cdktf.stringToHclTerraform(struct!.bindingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_preference: {
      value: cdktf.stringToHclTerraform(struct!.classPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_epg_name: {
      value: cdktf.stringToHclTerraform(struct!.customEpgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_immediacy: {
      value: cdktf.stringToHclTerraform(struct!.deploymentImmediacy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_netflow: {
      value: cdktf.stringToHclTerraform(struct!.enableNetflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.encapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encapsulation_mode: {
      value: cdktf.stringToHclTerraform(struct!.encapsulationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    epg_cos: {
      value: cdktf.stringToHclTerraform(struct!.epgCos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    epg_cos_pref: {
      value: cdktf.stringToHclTerraform(struct!.epgCosPref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipam_dhcp_override: {
      value: cdktf.stringToHclTerraform(struct!.ipamDhcpOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipam_enabled: {
      value: cdktf.stringToHclTerraform(struct!.ipamEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipam_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipamGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lag_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.lagPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netflow_direction: {
      value: cdktf.stringToHclTerraform(struct!.netflowDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_ports: {
      value: cdktf.stringToHclTerraform(struct!.numberOfPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_allocation: {
      value: cdktf.stringToHclTerraform(struct!.portAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.primaryEncapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_encapsulation_inner: {
      value: cdktf.stringToHclTerraform(struct!.primaryEncapsulationInner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolution_immediacy: {
      value: cdktf.stringToHclTerraform(struct!.resolutionImmediacy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_encapsulation_inner: {
      value: cdktf.stringToHclTerraform(struct!.secondaryEncapsulationInner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switching_mode: {
      value: cdktf.stringToHclTerraform(struct!.switchingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToDomainsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToDomainsTagsList",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untagged: {
      value: cdktf.stringToHclTerraform(struct!.untagged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._bindingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingType = this._bindingType;
    }
    if (this._classPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.classPreference = this._classPreference;
    }
    if (this._customEpgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEpgName = this._customEpgName;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._deploymentImmediacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentImmediacy = this._deploymentImmediacy;
    }
    if (this._enableNetflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetflow = this._enableNetflow;
    }
    if (this._encapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulation = this._encapsulation;
    }
    if (this._encapsulationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulationMode = this._encapsulationMode;
    }
    if (this._epgCos !== undefined) {
      hasAnyValues = true;
      internalValueResult.epgCos = this._epgCos;
    }
    if (this._epgCosPref !== undefined) {
      hasAnyValues = true;
      internalValueResult.epgCosPref = this._epgCosPref;
    }
    if (this._ipamDhcpOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipamDhcpOverride = this._ipamDhcpOverride;
    }
    if (this._ipamEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipamEnabled = this._ipamEnabled;
    }
    if (this._ipamGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipamGateway = this._ipamGateway;
    }
    if (this._lagPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lagPolicyName = this._lagPolicyName;
    }
    if (this._netflowDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowDirection = this._netflowDirection;
    }
    if (this._numberOfPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfPorts = this._numberOfPorts;
    }
    if (this._portAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.portAllocation = this._portAllocation;
    }
    if (this._primaryEncapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryEncapsulation = this._primaryEncapsulation;
    }
    if (this._primaryEncapsulationInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryEncapsulationInner = this._primaryEncapsulationInner;
    }
    if (this._resolutionImmediacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolutionImmediacy = this._resolutionImmediacy;
    }
    if (this._secondaryEncapsulationInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryEncapsulationInner = this._secondaryEncapsulationInner;
    }
    if (this._switchingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchingMode = this._switchingMode;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    if (this._untagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.untagged = this._untagged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._bindingType = undefined;
      this._classPreference = undefined;
      this._customEpgName = undefined;
      this._delimiter = undefined;
      this._deploymentImmediacy = undefined;
      this._enableNetflow = undefined;
      this._encapsulation = undefined;
      this._encapsulationMode = undefined;
      this._epgCos = undefined;
      this._epgCosPref = undefined;
      this._ipamDhcpOverride = undefined;
      this._ipamEnabled = undefined;
      this._ipamGateway = undefined;
      this._lagPolicyName = undefined;
      this._netflowDirection = undefined;
      this._numberOfPorts = undefined;
      this._portAllocation = undefined;
      this._primaryEncapsulation = undefined;
      this._primaryEncapsulationInner = undefined;
      this._resolutionImmediacy = undefined;
      this._secondaryEncapsulationInner = undefined;
      this._switchingMode = undefined;
      this._tags.internalValue = undefined;
      this._targetDn = undefined;
      this._untagged = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._bindingType = value.bindingType;
      this._classPreference = value.classPreference;
      this._customEpgName = value.customEpgName;
      this._delimiter = value.delimiter;
      this._deploymentImmediacy = value.deploymentImmediacy;
      this._enableNetflow = value.enableNetflow;
      this._encapsulation = value.encapsulation;
      this._encapsulationMode = value.encapsulationMode;
      this._epgCos = value.epgCos;
      this._epgCosPref = value.epgCosPref;
      this._ipamDhcpOverride = value.ipamDhcpOverride;
      this._ipamEnabled = value.ipamEnabled;
      this._ipamGateway = value.ipamGateway;
      this._lagPolicyName = value.lagPolicyName;
      this._netflowDirection = value.netflowDirection;
      this._numberOfPorts = value.numberOfPorts;
      this._portAllocation = value.portAllocation;
      this._primaryEncapsulation = value.primaryEncapsulation;
      this._primaryEncapsulationInner = value.primaryEncapsulationInner;
      this._resolutionImmediacy = value.resolutionImmediacy;
      this._secondaryEncapsulationInner = value.secondaryEncapsulationInner;
      this._switchingMode = value.switchingMode;
      this._tags.internalValue = value.tags;
      this._targetDn = value.targetDn;
      this._untagged = value.untagged;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToDomainsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToDomainsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // class_preference - computed: true, optional: true, required: false
  private _classPreference?: string; 
  public get classPreference() {
    return this.getStringAttribute('class_preference');
  }
  public set classPreference(value: string) {
    this._classPreference = value;
  }
  public resetClassPreference() {
    this._classPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classPreferenceInput() {
    return this._classPreference;
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

  // deployment_immediacy - computed: true, optional: true, required: false
  private _deploymentImmediacy?: string; 
  public get deploymentImmediacy() {
    return this.getStringAttribute('deployment_immediacy');
  }
  public set deploymentImmediacy(value: string) {
    this._deploymentImmediacy = value;
  }
  public resetDeploymentImmediacy() {
    this._deploymentImmediacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentImmediacyInput() {
    return this._deploymentImmediacy;
  }

  // enable_netflow - computed: true, optional: true, required: false
  private _enableNetflow?: string; 
  public get enableNetflow() {
    return this.getStringAttribute('enable_netflow');
  }
  public set enableNetflow(value: string) {
    this._enableNetflow = value;
  }
  public resetEnableNetflow() {
    this._enableNetflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetflowInput() {
    return this._enableNetflow;
  }

  // encapsulation - computed: true, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
  }

  // encapsulation_mode - computed: true, optional: true, required: false
  private _encapsulationMode?: string; 
  public get encapsulationMode() {
    return this.getStringAttribute('encapsulation_mode');
  }
  public set encapsulationMode(value: string) {
    this._encapsulationMode = value;
  }
  public resetEncapsulationMode() {
    this._encapsulationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationModeInput() {
    return this._encapsulationMode;
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

  // ipam_dhcp_override - computed: true, optional: true, required: false
  private _ipamDhcpOverride?: string; 
  public get ipamDhcpOverride() {
    return this.getStringAttribute('ipam_dhcp_override');
  }
  public set ipamDhcpOverride(value: string) {
    this._ipamDhcpOverride = value;
  }
  public resetIpamDhcpOverride() {
    this._ipamDhcpOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamDhcpOverrideInput() {
    return this._ipamDhcpOverride;
  }

  // ipam_enabled - computed: true, optional: true, required: false
  private _ipamEnabled?: string; 
  public get ipamEnabled() {
    return this.getStringAttribute('ipam_enabled');
  }
  public set ipamEnabled(value: string) {
    this._ipamEnabled = value;
  }
  public resetIpamEnabled() {
    this._ipamEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamEnabledInput() {
    return this._ipamEnabled;
  }

  // ipam_gateway - computed: true, optional: true, required: false
  private _ipamGateway?: string; 
  public get ipamGateway() {
    return this.getStringAttribute('ipam_gateway');
  }
  public set ipamGateway(value: string) {
    this._ipamGateway = value;
  }
  public resetIpamGateway() {
    this._ipamGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamGatewayInput() {
    return this._ipamGateway;
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

  // netflow_direction - computed: true, optional: true, required: false
  private _netflowDirection?: string; 
  public get netflowDirection() {
    return this.getStringAttribute('netflow_direction');
  }
  public set netflowDirection(value: string) {
    this._netflowDirection = value;
  }
  public resetNetflowDirection() {
    this._netflowDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowDirectionInput() {
    return this._netflowDirection;
  }

  // number_of_ports - computed: true, optional: true, required: false
  private _numberOfPorts?: string; 
  public get numberOfPorts() {
    return this.getStringAttribute('number_of_ports');
  }
  public set numberOfPorts(value: string) {
    this._numberOfPorts = value;
  }
  public resetNumberOfPorts() {
    this._numberOfPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPortsInput() {
    return this._numberOfPorts;
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

  // primary_encapsulation - computed: true, optional: true, required: false
  private _primaryEncapsulation?: string; 
  public get primaryEncapsulation() {
    return this.getStringAttribute('primary_encapsulation');
  }
  public set primaryEncapsulation(value: string) {
    this._primaryEncapsulation = value;
  }
  public resetPrimaryEncapsulation() {
    this._primaryEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEncapsulationInput() {
    return this._primaryEncapsulation;
  }

  // primary_encapsulation_inner - computed: true, optional: true, required: false
  private _primaryEncapsulationInner?: string; 
  public get primaryEncapsulationInner() {
    return this.getStringAttribute('primary_encapsulation_inner');
  }
  public set primaryEncapsulationInner(value: string) {
    this._primaryEncapsulationInner = value;
  }
  public resetPrimaryEncapsulationInner() {
    this._primaryEncapsulationInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEncapsulationInnerInput() {
    return this._primaryEncapsulationInner;
  }

  // resolution_immediacy - computed: true, optional: true, required: false
  private _resolutionImmediacy?: string; 
  public get resolutionImmediacy() {
    return this.getStringAttribute('resolution_immediacy');
  }
  public set resolutionImmediacy(value: string) {
    this._resolutionImmediacy = value;
  }
  public resetResolutionImmediacy() {
    this._resolutionImmediacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionImmediacyInput() {
    return this._resolutionImmediacy;
  }

  // secondary_encapsulation_inner - computed: true, optional: true, required: false
  private _secondaryEncapsulationInner?: string; 
  public get secondaryEncapsulationInner() {
    return this.getStringAttribute('secondary_encapsulation_inner');
  }
  public set secondaryEncapsulationInner(value: string) {
    this._secondaryEncapsulationInner = value;
  }
  public resetSecondaryEncapsulationInner() {
    this._secondaryEncapsulationInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEncapsulationInnerInput() {
    return this._secondaryEncapsulationInner;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToDomainsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToDomainsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }

  // untagged - computed: true, optional: true, required: false
  private _untagged?: string; 
  public get untagged() {
    return this.getStringAttribute('untagged');
  }
  public set untagged(value: string) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }
}

export class ApplicationEpgRelationToDomainsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToDomains[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToDomainsOutputReference {
    return new ApplicationEpgRelationToDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToFibreChannelPathsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToFibreChannelPathsAnnotationsToTerraform(struct?: ApplicationEpgRelationToFibreChannelPathsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToFibreChannelPathsAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToFibreChannelPathsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToFibreChannelPathsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToFibreChannelPathsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToFibreChannelPathsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToFibreChannelPathsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToFibreChannelPathsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToFibreChannelPathsAnnotationsOutputReference {
    return new ApplicationEpgRelationToFibreChannelPathsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToFibreChannelPathsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToFibreChannelPathsTagsToTerraform(struct?: ApplicationEpgRelationToFibreChannelPathsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToFibreChannelPathsTagsToHclTerraform(struct?: ApplicationEpgRelationToFibreChannelPathsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToFibreChannelPathsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToFibreChannelPathsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToFibreChannelPathsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToFibreChannelPathsTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToFibreChannelPathsTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToFibreChannelPathsTagsOutputReference {
    return new ApplicationEpgRelationToFibreChannelPathsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToFibreChannelPaths {
  /**
  * The annotation of the Relation To Fibre Channel Path object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToFibreChannelPathsAnnotations[] | cdktf.IResolvable;
  /**
  * The description of the Relation To Fibre Channel Path object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#description ApplicationEpg#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToFibreChannelPathsTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#target_dn ApplicationEpg#target_dn}
  */
  readonly targetDn?: string;
  /**
  * The virtual storage area network (VSAN) of the Relation To Fibre Channel Path object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#vsan ApplicationEpg#vsan}
  */
  readonly vsan?: string;
  /**
  * The virtual storage area network (VSAN) mode of the Relation To Fibre Channel Path object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#vsan_mode ApplicationEpg#vsan_mode}
  */
  readonly vsanMode?: string;
}

export function applicationEpgRelationToFibreChannelPathsToTerraform(struct?: ApplicationEpgRelationToFibreChannelPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToFibreChannelPathsAnnotationsToTerraform, false)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    tags: cdktf.listMapper(applicationEpgRelationToFibreChannelPathsTagsToTerraform, false)(struct!.tags),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
    vsan: cdktf.stringToTerraform(struct!.vsan),
    vsan_mode: cdktf.stringToTerraform(struct!.vsanMode),
  }
}


export function applicationEpgRelationToFibreChannelPathsToHclTerraform(struct?: ApplicationEpgRelationToFibreChannelPaths | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToFibreChannelPathsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToFibreChannelPathsAnnotationsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToFibreChannelPathsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToFibreChannelPathsTagsList",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsan: {
      value: cdktf.stringToHclTerraform(struct!.vsan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsan_mode: {
      value: cdktf.stringToHclTerraform(struct!.vsanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToFibreChannelPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToFibreChannelPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    if (this._vsan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsan = this._vsan;
    }
    if (this._vsanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsanMode = this._vsanMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToFibreChannelPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._description = undefined;
      this._tags.internalValue = undefined;
      this._targetDn = undefined;
      this._vsan = undefined;
      this._vsanMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._description = value.description;
      this._tags.internalValue = value.tags;
      this._targetDn = value.targetDn;
      this._vsan = value.vsan;
      this._vsanMode = value.vsanMode;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToFibreChannelPathsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToFibreChannelPathsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToFibreChannelPathsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToFibreChannelPathsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }

  // vsan - computed: true, optional: true, required: false
  private _vsan?: string; 
  public get vsan() {
    return this.getStringAttribute('vsan');
  }
  public set vsan(value: string) {
    this._vsan = value;
  }
  public resetVsan() {
    this._vsan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanInput() {
    return this._vsan;
  }

  // vsan_mode - computed: true, optional: true, required: false
  private _vsanMode?: string; 
  public get vsanMode() {
    return this.getStringAttribute('vsan_mode');
  }
  public set vsanMode(value: string) {
    this._vsanMode = value;
  }
  public resetVsanMode() {
    this._vsanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanModeInput() {
    return this._vsanMode;
  }
}

export class ApplicationEpgRelationToFibreChannelPathsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToFibreChannelPaths[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToFibreChannelPathsOutputReference {
    return new ApplicationEpgRelationToFibreChannelPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToImportedContractsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToImportedContractsAnnotationsToTerraform(struct?: ApplicationEpgRelationToImportedContractsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToImportedContractsAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToImportedContractsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToImportedContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToImportedContractsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToImportedContractsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToImportedContractsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToImportedContractsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToImportedContractsAnnotationsOutputReference {
    return new ApplicationEpgRelationToImportedContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToImportedContractsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToImportedContractsTagsToTerraform(struct?: ApplicationEpgRelationToImportedContractsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToImportedContractsTagsToHclTerraform(struct?: ApplicationEpgRelationToImportedContractsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToImportedContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToImportedContractsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToImportedContractsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToImportedContractsTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToImportedContractsTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToImportedContractsTagsOutputReference {
    return new ApplicationEpgRelationToImportedContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToImportedContracts {
  /**
  * The annotation of the Relation To Imported Contract object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToImportedContractsAnnotations[] | cdktf.IResolvable;
  /**
  * The contract interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#imported_contract_name ApplicationEpg#imported_contract_name}
  */
  readonly importedContractName?: string;
  /**
  * The Quality of Service (QoS) priority class ID. QoS refers to the capability of a network to provide better service to selected network traffic over various technologies. The primary goal of QoS is to provide priority including dedicated bandwidth, controlled jitter and latency (required by some real-time and interactive traffic), and improved loss characteristics. You can configure the bandwidth of each QoS level using QoS profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#priority ApplicationEpg#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToImportedContractsTags[] | cdktf.IResolvable;
}

export function applicationEpgRelationToImportedContractsToTerraform(struct?: ApplicationEpgRelationToImportedContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToImportedContractsAnnotationsToTerraform, false)(struct!.annotations),
    imported_contract_name: cdktf.stringToTerraform(struct!.importedContractName),
    priority: cdktf.stringToTerraform(struct!.priority),
    tags: cdktf.listMapper(applicationEpgRelationToImportedContractsTagsToTerraform, false)(struct!.tags),
  }
}


export function applicationEpgRelationToImportedContractsToHclTerraform(struct?: ApplicationEpgRelationToImportedContracts | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToImportedContractsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToImportedContractsAnnotationsList",
    },
    imported_contract_name: {
      value: cdktf.stringToHclTerraform(struct!.importedContractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToImportedContractsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToImportedContractsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToImportedContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToImportedContracts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._importedContractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.importedContractName = this._importedContractName;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToImportedContracts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._importedContractName = undefined;
      this._priority = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._importedContractName = value.importedContractName;
      this._priority = value.priority;
      this._tags.internalValue = value.tags;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToImportedContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToImportedContractsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // imported_contract_name - computed: true, optional: true, required: false
  private _importedContractName?: string; 
  public get importedContractName() {
    return this.getStringAttribute('imported_contract_name');
  }
  public set importedContractName(value: string) {
    this._importedContractName = value;
  }
  public resetImportedContractName() {
    this._importedContractName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedContractNameInput() {
    return this._importedContractName;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToImportedContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToImportedContractsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class ApplicationEpgRelationToImportedContractsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToImportedContracts[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToImportedContractsOutputReference {
    return new ApplicationEpgRelationToImportedContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToIntraEpgContractsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToIntraEpgContractsAnnotationsToTerraform(struct?: ApplicationEpgRelationToIntraEpgContractsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToIntraEpgContractsAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToIntraEpgContractsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToIntraEpgContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToIntraEpgContractsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToIntraEpgContractsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToIntraEpgContractsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToIntraEpgContractsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToIntraEpgContractsAnnotationsOutputReference {
    return new ApplicationEpgRelationToIntraEpgContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToIntraEpgContractsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToIntraEpgContractsTagsToTerraform(struct?: ApplicationEpgRelationToIntraEpgContractsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToIntraEpgContractsTagsToHclTerraform(struct?: ApplicationEpgRelationToIntraEpgContractsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToIntraEpgContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToIntraEpgContractsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToIntraEpgContractsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToIntraEpgContractsTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToIntraEpgContractsTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToIntraEpgContractsTagsOutputReference {
    return new ApplicationEpgRelationToIntraEpgContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToIntraEpgContracts {
  /**
  * The annotation of the Relation To Intra EPG Contract object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToIntraEpgContractsAnnotations[] | cdktf.IResolvable;
  /**
  * The contract name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#contract_name ApplicationEpg#contract_name}
  */
  readonly contractName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToIntraEpgContractsTags[] | cdktf.IResolvable;
}

export function applicationEpgRelationToIntraEpgContractsToTerraform(struct?: ApplicationEpgRelationToIntraEpgContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToIntraEpgContractsAnnotationsToTerraform, false)(struct!.annotations),
    contract_name: cdktf.stringToTerraform(struct!.contractName),
    tags: cdktf.listMapper(applicationEpgRelationToIntraEpgContractsTagsToTerraform, false)(struct!.tags),
  }
}


export function applicationEpgRelationToIntraEpgContractsToHclTerraform(struct?: ApplicationEpgRelationToIntraEpgContracts | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToIntraEpgContractsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToIntraEpgContractsAnnotationsList",
    },
    contract_name: {
      value: cdktf.stringToHclTerraform(struct!.contractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToIntraEpgContractsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToIntraEpgContractsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToIntraEpgContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToIntraEpgContracts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._contractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractName = this._contractName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToIntraEpgContracts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._contractName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._contractName = value.contractName;
      this._tags.internalValue = value.tags;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToIntraEpgContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToIntraEpgContractsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // contract_name - computed: true, optional: true, required: false
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  public resetContractName() {
    this._contractName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToIntraEpgContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToIntraEpgContractsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class ApplicationEpgRelationToIntraEpgContractsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToIntraEpgContracts[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToIntraEpgContractsOutputReference {
    return new ApplicationEpgRelationToIntraEpgContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToMonitoringPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToMonitoringPolicyAnnotationsToTerraform(struct?: ApplicationEpgRelationToMonitoringPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToMonitoringPolicyAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToMonitoringPolicyAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToMonitoringPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToMonitoringPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToMonitoringPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToMonitoringPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToMonitoringPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToMonitoringPolicyAnnotationsOutputReference {
    return new ApplicationEpgRelationToMonitoringPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToMonitoringPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToMonitoringPolicyTagsToTerraform(struct?: ApplicationEpgRelationToMonitoringPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToMonitoringPolicyTagsToHclTerraform(struct?: ApplicationEpgRelationToMonitoringPolicyTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToMonitoringPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToMonitoringPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToMonitoringPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToMonitoringPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToMonitoringPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToMonitoringPolicyTagsOutputReference {
    return new ApplicationEpgRelationToMonitoringPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToMonitoringPolicy {
  /**
  * The annotation of the Relation From Application EPG To Monitoring Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToMonitoringPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * The name of the monitoring policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#monitoring_policy_name ApplicationEpg#monitoring_policy_name}
  */
  readonly monitoringPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToMonitoringPolicyTags[] | cdktf.IResolvable;
}

export function applicationEpgRelationToMonitoringPolicyToTerraform(struct?: ApplicationEpgRelationToMonitoringPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToMonitoringPolicyAnnotationsToTerraform, false)(struct!.annotations),
    monitoring_policy_name: cdktf.stringToTerraform(struct!.monitoringPolicyName),
    tags: cdktf.listMapper(applicationEpgRelationToMonitoringPolicyTagsToTerraform, false)(struct!.tags),
  }
}


export function applicationEpgRelationToMonitoringPolicyToHclTerraform(struct?: ApplicationEpgRelationToMonitoringPolicy | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToMonitoringPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToMonitoringPolicyAnnotationsList",
    },
    monitoring_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.monitoringPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToMonitoringPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToMonitoringPolicyTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToMonitoringPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationEpgRelationToMonitoringPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._monitoringPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringPolicyName = this._monitoringPolicyName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToMonitoringPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._monitoringPolicyName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._monitoringPolicyName = value.monitoringPolicyName;
      this._tags.internalValue = value.tags;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToMonitoringPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToMonitoringPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // monitoring_policy_name - computed: true, optional: true, required: false
  private _monitoringPolicyName?: string; 
  public get monitoringPolicyName() {
    return this.getStringAttribute('monitoring_policy_name');
  }
  public set monitoringPolicyName(value: string) {
    this._monitoringPolicyName = value;
  }
  public resetMonitoringPolicyName() {
    this._monitoringPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringPolicyNameInput() {
    return this._monitoringPolicyName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToMonitoringPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToMonitoringPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface ApplicationEpgRelationToProvidedContractsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToProvidedContractsAnnotationsToTerraform(struct?: ApplicationEpgRelationToProvidedContractsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToProvidedContractsAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToProvidedContractsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToProvidedContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToProvidedContractsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToProvidedContractsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToProvidedContractsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToProvidedContractsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToProvidedContractsAnnotationsOutputReference {
    return new ApplicationEpgRelationToProvidedContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToProvidedContractsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToProvidedContractsTagsToTerraform(struct?: ApplicationEpgRelationToProvidedContractsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToProvidedContractsTagsToHclTerraform(struct?: ApplicationEpgRelationToProvidedContractsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToProvidedContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToProvidedContractsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToProvidedContractsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToProvidedContractsTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToProvidedContractsTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToProvidedContractsTagsOutputReference {
    return new ApplicationEpgRelationToProvidedContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToProvidedContracts {
  /**
  * The annotation of the Relation To Provided Contract object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToProvidedContractsAnnotations[] | cdktf.IResolvable;
  /**
  * The provider contract name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#contract_name ApplicationEpg#contract_name}
  */
  readonly contractName?: string;
  /**
  * The provider label match criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#match_criteria ApplicationEpg#match_criteria}
  */
  readonly matchCriteria?: string;
  /**
  * The Quality of Service (QoS) priority class ID. QoS refers to the capability of a network to provide better service to selected network traffic over various technologies. The primary goal of QoS is to provide priority including dedicated bandwidth, controlled jitter and latency (required by some real-time and interactive traffic), and improved loss characteristics. You can configure the bandwidth of each QoS level using QoS profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#priority ApplicationEpg#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToProvidedContractsTags[] | cdktf.IResolvable;
}

export function applicationEpgRelationToProvidedContractsToTerraform(struct?: ApplicationEpgRelationToProvidedContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToProvidedContractsAnnotationsToTerraform, false)(struct!.annotations),
    contract_name: cdktf.stringToTerraform(struct!.contractName),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    priority: cdktf.stringToTerraform(struct!.priority),
    tags: cdktf.listMapper(applicationEpgRelationToProvidedContractsTagsToTerraform, false)(struct!.tags),
  }
}


export function applicationEpgRelationToProvidedContractsToHclTerraform(struct?: ApplicationEpgRelationToProvidedContracts | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToProvidedContractsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToProvidedContractsAnnotationsList",
    },
    contract_name: {
      value: cdktf.stringToHclTerraform(struct!.contractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToProvidedContractsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToProvidedContractsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToProvidedContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToProvidedContracts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._contractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractName = this._contractName;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToProvidedContracts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._contractName = undefined;
      this._matchCriteria = undefined;
      this._priority = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._contractName = value.contractName;
      this._matchCriteria = value.matchCriteria;
      this._priority = value.priority;
      this._tags.internalValue = value.tags;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToProvidedContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToProvidedContractsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // contract_name - computed: true, optional: true, required: false
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  public resetContractName() {
    this._contractName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // match_criteria - computed: true, optional: true, required: false
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  public resetMatchCriteria() {
    this._matchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToProvidedContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToProvidedContractsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class ApplicationEpgRelationToProvidedContractsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToProvidedContracts[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToProvidedContractsOutputReference {
    return new ApplicationEpgRelationToProvidedContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToStaticLeafsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToStaticLeafsAnnotationsToTerraform(struct?: ApplicationEpgRelationToStaticLeafsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToStaticLeafsAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToStaticLeafsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToStaticLeafsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToStaticLeafsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToStaticLeafsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToStaticLeafsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToStaticLeafsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToStaticLeafsAnnotationsOutputReference {
    return new ApplicationEpgRelationToStaticLeafsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToStaticLeafsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToStaticLeafsTagsToTerraform(struct?: ApplicationEpgRelationToStaticLeafsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToStaticLeafsTagsToHclTerraform(struct?: ApplicationEpgRelationToStaticLeafsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToStaticLeafsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToStaticLeafsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToStaticLeafsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToStaticLeafsTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToStaticLeafsTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToStaticLeafsTagsOutputReference {
    return new ApplicationEpgRelationToStaticLeafsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToStaticLeafs {
  /**
  * The annotation of the Relation To Static Leaf object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToStaticLeafsAnnotations[] | cdktf.IResolvable;
  /**
  * The deployment immediacy of the Relation To Static Leaf object. Specifies when the policy is pushed into the hardware policy content-addressable memory (CAM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#deployment_immediacy ApplicationEpg#deployment_immediacy}
  */
  readonly deploymentImmediacy?: string;
  /**
  * The description of the Relation To Static Leaf object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#description ApplicationEpg#description}
  */
  readonly description?: string;
  /**
  * The VLAN encapsulation of the Relation To Static Leaf object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#encapsulation ApplicationEpg#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * The static association mode with the path of the Relation To Static Leaf object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#mode ApplicationEpg#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToStaticLeafsTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target of this static binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#target_dn ApplicationEpg#target_dn}
  */
  readonly targetDn?: string;
}

export function applicationEpgRelationToStaticLeafsToTerraform(struct?: ApplicationEpgRelationToStaticLeafs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToStaticLeafsAnnotationsToTerraform, false)(struct!.annotations),
    deployment_immediacy: cdktf.stringToTerraform(struct!.deploymentImmediacy),
    description: cdktf.stringToTerraform(struct!.description),
    encapsulation: cdktf.stringToTerraform(struct!.encapsulation),
    mode: cdktf.stringToTerraform(struct!.mode),
    tags: cdktf.listMapper(applicationEpgRelationToStaticLeafsTagsToTerraform, false)(struct!.tags),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function applicationEpgRelationToStaticLeafsToHclTerraform(struct?: ApplicationEpgRelationToStaticLeafs | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToStaticLeafsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToStaticLeafsAnnotationsList",
    },
    deployment_immediacy: {
      value: cdktf.stringToHclTerraform(struct!.deploymentImmediacy),
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
    encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.encapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToStaticLeafsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToStaticLeafsTagsList",
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

export class ApplicationEpgRelationToStaticLeafsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToStaticLeafs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._deploymentImmediacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentImmediacy = this._deploymentImmediacy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._encapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulation = this._encapsulation;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToStaticLeafs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._deploymentImmediacy = undefined;
      this._description = undefined;
      this._encapsulation = undefined;
      this._mode = undefined;
      this._tags.internalValue = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._deploymentImmediacy = value.deploymentImmediacy;
      this._description = value.description;
      this._encapsulation = value.encapsulation;
      this._mode = value.mode;
      this._tags.internalValue = value.tags;
      this._targetDn = value.targetDn;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToStaticLeafsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToStaticLeafsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // deployment_immediacy - computed: true, optional: true, required: false
  private _deploymentImmediacy?: string; 
  public get deploymentImmediacy() {
    return this.getStringAttribute('deployment_immediacy');
  }
  public set deploymentImmediacy(value: string) {
    this._deploymentImmediacy = value;
  }
  public resetDeploymentImmediacy() {
    this._deploymentImmediacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentImmediacyInput() {
    return this._deploymentImmediacy;
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

  // encapsulation - computed: true, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
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

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToStaticLeafsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToStaticLeafsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}

export class ApplicationEpgRelationToStaticLeafsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToStaticLeafs[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToStaticLeafsOutputReference {
    return new ApplicationEpgRelationToStaticLeafsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToStaticPathsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToStaticPathsAnnotationsToTerraform(struct?: ApplicationEpgRelationToStaticPathsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToStaticPathsAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToStaticPathsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToStaticPathsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToStaticPathsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToStaticPathsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToStaticPathsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToStaticPathsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToStaticPathsAnnotationsOutputReference {
    return new ApplicationEpgRelationToStaticPathsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToStaticPathsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToStaticPathsTagsToTerraform(struct?: ApplicationEpgRelationToStaticPathsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToStaticPathsTagsToHclTerraform(struct?: ApplicationEpgRelationToStaticPathsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToStaticPathsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToStaticPathsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToStaticPathsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToStaticPathsTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToStaticPathsTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToStaticPathsTagsOutputReference {
    return new ApplicationEpgRelationToStaticPathsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToStaticPaths {
  /**
  * The annotation of the Relation To Static Path object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToStaticPathsAnnotations[] | cdktf.IResolvable;
  /**
  * The deployment immediacy of the Relation To Static Path object. Specifies when the policy is pushed into the hardware policy content-addressable memory (CAM).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#deployment_immediacy ApplicationEpg#deployment_immediacy}
  */
  readonly deploymentImmediacy?: string;
  /**
  * The description of the Relation To Static Path object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#description ApplicationEpg#description}
  */
  readonly description?: string;
  /**
  * The VLAN encapsulation of the Relation To Static Path object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#encapsulation ApplicationEpg#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * The static association mode of the Relation To Static Path object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#mode ApplicationEpg#mode}
  */
  readonly mode?: string;
  /**
  * The primary VLAN encapsulation of the Relation To Static Path object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#primary_encapsulation ApplicationEpg#primary_encapsulation}
  */
  readonly primaryEncapsulation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToStaticPathsTags[] | cdktf.IResolvable;
  /**
  * null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#target_dn ApplicationEpg#target_dn}
  */
  readonly targetDn?: string;
}

export function applicationEpgRelationToStaticPathsToTerraform(struct?: ApplicationEpgRelationToStaticPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToStaticPathsAnnotationsToTerraform, false)(struct!.annotations),
    deployment_immediacy: cdktf.stringToTerraform(struct!.deploymentImmediacy),
    description: cdktf.stringToTerraform(struct!.description),
    encapsulation: cdktf.stringToTerraform(struct!.encapsulation),
    mode: cdktf.stringToTerraform(struct!.mode),
    primary_encapsulation: cdktf.stringToTerraform(struct!.primaryEncapsulation),
    tags: cdktf.listMapper(applicationEpgRelationToStaticPathsTagsToTerraform, false)(struct!.tags),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function applicationEpgRelationToStaticPathsToHclTerraform(struct?: ApplicationEpgRelationToStaticPaths | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToStaticPathsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToStaticPathsAnnotationsList",
    },
    deployment_immediacy: {
      value: cdktf.stringToHclTerraform(struct!.deploymentImmediacy),
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
    encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.encapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_encapsulation: {
      value: cdktf.stringToHclTerraform(struct!.primaryEncapsulation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToStaticPathsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToStaticPathsTagsList",
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

export class ApplicationEpgRelationToStaticPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToStaticPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._deploymentImmediacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentImmediacy = this._deploymentImmediacy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._encapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulation = this._encapsulation;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._primaryEncapsulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryEncapsulation = this._primaryEncapsulation;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToStaticPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._deploymentImmediacy = undefined;
      this._description = undefined;
      this._encapsulation = undefined;
      this._mode = undefined;
      this._primaryEncapsulation = undefined;
      this._tags.internalValue = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._deploymentImmediacy = value.deploymentImmediacy;
      this._description = value.description;
      this._encapsulation = value.encapsulation;
      this._mode = value.mode;
      this._primaryEncapsulation = value.primaryEncapsulation;
      this._tags.internalValue = value.tags;
      this._targetDn = value.targetDn;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToStaticPathsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToStaticPathsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // deployment_immediacy - computed: true, optional: true, required: false
  private _deploymentImmediacy?: string; 
  public get deploymentImmediacy() {
    return this.getStringAttribute('deployment_immediacy');
  }
  public set deploymentImmediacy(value: string) {
    this._deploymentImmediacy = value;
  }
  public resetDeploymentImmediacy() {
    this._deploymentImmediacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentImmediacyInput() {
    return this._deploymentImmediacy;
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

  // encapsulation - computed: true, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
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

  // primary_encapsulation - computed: true, optional: true, required: false
  private _primaryEncapsulation?: string; 
  public get primaryEncapsulation() {
    return this.getStringAttribute('primary_encapsulation');
  }
  public set primaryEncapsulation(value: string) {
    this._primaryEncapsulation = value;
  }
  public resetPrimaryEncapsulation() {
    this._primaryEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEncapsulationInput() {
    return this._primaryEncapsulation;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToStaticPathsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToStaticPathsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}

export class ApplicationEpgRelationToStaticPathsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToStaticPaths[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToStaticPathsOutputReference {
    return new ApplicationEpgRelationToStaticPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToTabooContractsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToTabooContractsAnnotationsToTerraform(struct?: ApplicationEpgRelationToTabooContractsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToTabooContractsAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToTabooContractsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToTabooContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToTabooContractsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToTabooContractsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToTabooContractsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToTabooContractsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToTabooContractsAnnotationsOutputReference {
    return new ApplicationEpgRelationToTabooContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToTabooContractsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToTabooContractsTagsToTerraform(struct?: ApplicationEpgRelationToTabooContractsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToTabooContractsTagsToHclTerraform(struct?: ApplicationEpgRelationToTabooContractsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToTabooContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToTabooContractsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToTabooContractsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToTabooContractsTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToTabooContractsTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToTabooContractsTagsOutputReference {
    return new ApplicationEpgRelationToTabooContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToTabooContracts {
  /**
  * The annotation of the Relation To Taboo Contract object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToTabooContractsAnnotations[] | cdktf.IResolvable;
  /**
  * A contract for denying specific classes of traffic. Taboo rules are applied in the hardware before applying the rules of regular contracts. Without a contract, the default forwarding policy is to not allow any communication between EPGs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#taboo_contract_name ApplicationEpg#taboo_contract_name}
  */
  readonly tabooContractName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToTabooContractsTags[] | cdktf.IResolvable;
}

export function applicationEpgRelationToTabooContractsToTerraform(struct?: ApplicationEpgRelationToTabooContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToTabooContractsAnnotationsToTerraform, false)(struct!.annotations),
    taboo_contract_name: cdktf.stringToTerraform(struct!.tabooContractName),
    tags: cdktf.listMapper(applicationEpgRelationToTabooContractsTagsToTerraform, false)(struct!.tags),
  }
}


export function applicationEpgRelationToTabooContractsToHclTerraform(struct?: ApplicationEpgRelationToTabooContracts | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToTabooContractsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToTabooContractsAnnotationsList",
    },
    taboo_contract_name: {
      value: cdktf.stringToHclTerraform(struct!.tabooContractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToTabooContractsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToTabooContractsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToTabooContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToTabooContracts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._tabooContractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tabooContractName = this._tabooContractName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToTabooContracts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._tabooContractName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._tabooContractName = value.tabooContractName;
      this._tags.internalValue = value.tags;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToTabooContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToTabooContractsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // taboo_contract_name - computed: true, optional: true, required: false
  private _tabooContractName?: string; 
  public get tabooContractName() {
    return this.getStringAttribute('taboo_contract_name');
  }
  public set tabooContractName(value: string) {
    this._tabooContractName = value;
  }
  public resetTabooContractName() {
    this._tabooContractName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tabooContractNameInput() {
    return this._tabooContractName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToTabooContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToTabooContractsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class ApplicationEpgRelationToTabooContractsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToTabooContracts[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToTabooContractsOutputReference {
    return new ApplicationEpgRelationToTabooContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToTrustControlPolicyAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToTrustControlPolicyAnnotationsToTerraform(struct?: ApplicationEpgRelationToTrustControlPolicyAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToTrustControlPolicyAnnotationsToHclTerraform(struct?: ApplicationEpgRelationToTrustControlPolicyAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToTrustControlPolicyAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToTrustControlPolicyAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToTrustControlPolicyAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToTrustControlPolicyAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToTrustControlPolicyAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToTrustControlPolicyAnnotationsOutputReference {
    return new ApplicationEpgRelationToTrustControlPolicyAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToTrustControlPolicyTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgRelationToTrustControlPolicyTagsToTerraform(struct?: ApplicationEpgRelationToTrustControlPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgRelationToTrustControlPolicyTagsToHclTerraform(struct?: ApplicationEpgRelationToTrustControlPolicyTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToTrustControlPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationToTrustControlPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToTrustControlPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgRelationToTrustControlPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationToTrustControlPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationToTrustControlPolicyTagsOutputReference {
    return new ApplicationEpgRelationToTrustControlPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationToTrustControlPolicy {
  /**
  * The annotation of the Relation To Trust Control Policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotation ApplicationEpg#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#annotations ApplicationEpg#annotations}
  */
  readonly annotations?: ApplicationEpgRelationToTrustControlPolicyAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#tags ApplicationEpg#tags}
  */
  readonly tags?: ApplicationEpgRelationToTrustControlPolicyTags[] | cdktf.IResolvable;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#trust_control_policy_name ApplicationEpg#trust_control_policy_name}
  */
  readonly trustControlPolicyName?: string;
}

export function applicationEpgRelationToTrustControlPolicyToTerraform(struct?: ApplicationEpgRelationToTrustControlPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(applicationEpgRelationToTrustControlPolicyAnnotationsToTerraform, false)(struct!.annotations),
    tags: cdktf.listMapper(applicationEpgRelationToTrustControlPolicyTagsToTerraform, false)(struct!.tags),
    trust_control_policy_name: cdktf.stringToTerraform(struct!.trustControlPolicyName),
  }
}


export function applicationEpgRelationToTrustControlPolicyToHclTerraform(struct?: ApplicationEpgRelationToTrustControlPolicy | cdktf.IResolvable): any {
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
    annotations: {
      value: cdktf.listMapperHcl(applicationEpgRelationToTrustControlPolicyAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToTrustControlPolicyAnnotationsList",
    },
    tags: {
      value: cdktf.listMapperHcl(applicationEpgRelationToTrustControlPolicyTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationEpgRelationToTrustControlPolicyTagsList",
    },
    trust_control_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.trustControlPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationToTrustControlPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationEpgRelationToTrustControlPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._trustControlPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustControlPolicyName = this._trustControlPolicyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationToTrustControlPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._trustControlPolicyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._tags.internalValue = value.tags;
      this._trustControlPolicyName = value.trustControlPolicyName;
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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgRelationToTrustControlPolicyAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgRelationToTrustControlPolicyAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgRelationToTrustControlPolicyTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgRelationToTrustControlPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // trust_control_policy_name - computed: true, optional: true, required: false
  private _trustControlPolicyName?: string; 
  public get trustControlPolicyName() {
    return this.getStringAttribute('trust_control_policy_name');
  }
  public set trustControlPolicyName(value: string) {
    this._trustControlPolicyName = value;
  }
  public resetTrustControlPolicyName() {
    this._trustControlPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustControlPolicyNameInput() {
    return this._trustControlPolicyName;
  }
}
export interface ApplicationEpgTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#key ApplicationEpg#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#value ApplicationEpg#value}
  */
  readonly value?: string;
}

export function applicationEpgTagsToTerraform(struct?: ApplicationEpgTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationEpgTagsToHclTerraform(struct?: ApplicationEpgTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationEpgTagsList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgTags[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgTagsOutputReference {
    return new ApplicationEpgTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEpgRelationFvRsNodeAtt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#deployment_immediacy ApplicationEpg#deployment_immediacy}
  */
  readonly deploymentImmediacy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#description ApplicationEpg#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#encap ApplicationEpg#encap}
  */
  readonly encap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#mode ApplicationEpg#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#node_dn ApplicationEpg#node_dn}
  */
  readonly nodeDn?: string;
}

export function applicationEpgRelationFvRsNodeAttToTerraform(struct?: ApplicationEpgRelationFvRsNodeAtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_immediacy: cdktf.stringToTerraform(struct!.deploymentImmediacy),
    description: cdktf.stringToTerraform(struct!.description),
    encap: cdktf.stringToTerraform(struct!.encap),
    mode: cdktf.stringToTerraform(struct!.mode),
    node_dn: cdktf.stringToTerraform(struct!.nodeDn),
  }
}


export function applicationEpgRelationFvRsNodeAttToHclTerraform(struct?: ApplicationEpgRelationFvRsNodeAtt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_immediacy: {
      value: cdktf.stringToHclTerraform(struct!.deploymentImmediacy),
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
    encap: {
      value: cdktf.stringToHclTerraform(struct!.encap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_dn: {
      value: cdktf.stringToHclTerraform(struct!.nodeDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEpgRelationFvRsNodeAttOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEpgRelationFvRsNodeAtt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentImmediacy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentImmediacy = this._deploymentImmediacy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._encap !== undefined) {
      hasAnyValues = true;
      internalValueResult.encap = this._encap;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nodeDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDn = this._nodeDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEpgRelationFvRsNodeAtt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentImmediacy = undefined;
      this._description = undefined;
      this._encap = undefined;
      this._mode = undefined;
      this._nodeDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentImmediacy = value.deploymentImmediacy;
      this._description = value.description;
      this._encap = value.encap;
      this._mode = value.mode;
      this._nodeDn = value.nodeDn;
    }
  }

  // deployment_immediacy - computed: true, optional: true, required: false
  private _deploymentImmediacy?: string; 
  public get deploymentImmediacy() {
    return this.getStringAttribute('deployment_immediacy');
  }
  public set deploymentImmediacy(value: string) {
    this._deploymentImmediacy = value;
  }
  public resetDeploymentImmediacy() {
    this._deploymentImmediacy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentImmediacyInput() {
    return this._deploymentImmediacy;
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

  // node_dn - computed: true, optional: true, required: false
  private _nodeDn?: string; 
  public get nodeDn() {
    return this.getStringAttribute('node_dn');
  }
  public set nodeDn(value: string) {
    this._nodeDn = value;
  }
  public resetNodeDn() {
    this._nodeDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDnInput() {
    return this._nodeDn;
  }
}

export class ApplicationEpgRelationFvRsNodeAttList extends cdktf.ComplexList {
  public internalValue? : ApplicationEpgRelationFvRsNodeAtt[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEpgRelationFvRsNodeAttOutputReference {
    return new ApplicationEpgRelationFvRsNodeAttOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg aci_application_epg}
*/
export class ApplicationEpg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_application_epg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationEpg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationEpg to import
  * @param importFromId The id of the existing ApplicationEpg that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationEpg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_application_epg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/application_epg aci_application_epg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationEpgConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApplicationEpgConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_application_epg',
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
    this._adminState = config.adminState;
    this._annotation = config.annotation;
    this._annotations.internalValue = config.annotations;
    this._applicationProfileDn = config.applicationProfileDn;
    this._contractExceptionTag = config.contractExceptionTag;
    this._description = config.description;
    this._epgUsegBlockStatement.internalValue = config.epgUsegBlockStatement;
    this._exceptionTag = config.exceptionTag;
    this._floodInEncapsulation = config.floodInEncapsulation;
    this._floodOnEncap = config.floodOnEncap;
    this._forwardingControl = config.forwardingControl;
    this._fwdCtrl = config.fwdCtrl;
    this._hasMcastSource = config.hasMcastSource;
    this._hasMulticastSource = config.hasMulticastSource;
    this._intraEpgIsolation = config.intraEpgIsolation;
    this._isAttrBasedEpg = config.isAttrBasedEpg;
    this._matchCriteria = config.matchCriteria;
    this._matchT = config.matchT;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._parentDn = config.parentDn;
    this._pcEnfPref = config.pcEnfPref;
    this._prefGrMemb = config.prefGrMemb;
    this._preferredGroupMember = config.preferredGroupMember;
    this._prio = config.prio;
    this._priority = config.priority;
    this._relationFvRsAepgMonPol = config.relationFvRsAepgMonPol;
    this._relationFvRsBd = config.relationFvRsBd;
    this._relationFvRsCons = config.relationFvRsCons;
    this._relationFvRsConsIf = config.relationFvRsConsIf;
    this._relationFvRsCustQosPol = config.relationFvRsCustQosPol;
    this._relationFvRsDppPol = config.relationFvRsDppPol;
    this._relationFvRsFcPathAtt = config.relationFvRsFcPathAtt;
    this._relationFvRsIntraEpg = config.relationFvRsIntraEpg;
    this._relationFvRsPathAtt = config.relationFvRsPathAtt;
    this._relationFvRsProtBy = config.relationFvRsProtBy;
    this._relationFvRsProv = config.relationFvRsProv;
    this._relationFvRsProvDef = config.relationFvRsProvDef;
    this._relationFvRsSecInherited = config.relationFvRsSecInherited;
    this._relationFvRsTrustCtrl = config.relationFvRsTrustCtrl;
    this._relationToBridgeDomain.internalValue = config.relationToBridgeDomain;
    this._relationToConsumedContracts.internalValue = config.relationToConsumedContracts;
    this._relationToContractMasters.internalValue = config.relationToContractMasters;
    this._relationToCustomQosPolicy.internalValue = config.relationToCustomQosPolicy;
    this._relationToDataPlanePolicingPolicy.internalValue = config.relationToDataPlanePolicingPolicy;
    this._relationToDomains.internalValue = config.relationToDomains;
    this._relationToFibreChannelPaths.internalValue = config.relationToFibreChannelPaths;
    this._relationToImportedContracts.internalValue = config.relationToImportedContracts;
    this._relationToIntraEpgContracts.internalValue = config.relationToIntraEpgContracts;
    this._relationToMonitoringPolicy.internalValue = config.relationToMonitoringPolicy;
    this._relationToProvidedContracts.internalValue = config.relationToProvidedContracts;
    this._relationToStaticLeafs.internalValue = config.relationToStaticLeafs;
    this._relationToStaticPaths.internalValue = config.relationToStaticPaths;
    this._relationToTabooContracts.internalValue = config.relationToTabooContracts;
    this._relationToTrustControlPolicy.internalValue = config.relationToTrustControlPolicy;
    this._shutdown = config.shutdown;
    this._tags.internalValue = config.tags;
    this._usegEpg = config.usegEpg;
    this._relationFvRsNodeAtt.internalValue = config.relationFvRsNodeAtt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // annotations - computed: true, optional: true, required: false
  private _annotations = new ApplicationEpgAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApplicationEpgAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // application_profile_dn - computed: true, optional: true, required: false
  private _applicationProfileDn?: string; 
  public get applicationProfileDn() {
    return this.getStringAttribute('application_profile_dn');
  }
  public set applicationProfileDn(value: string) {
    this._applicationProfileDn = value;
  }
  public resetApplicationProfileDn() {
    this._applicationProfileDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProfileDnInput() {
    return this._applicationProfileDn;
  }

  // contract_exception_tag - computed: true, optional: true, required: false
  private _contractExceptionTag?: string; 
  public get contractExceptionTag() {
    return this.getStringAttribute('contract_exception_tag');
  }
  public set contractExceptionTag(value: string) {
    this._contractExceptionTag = value;
  }
  public resetContractExceptionTag() {
    this._contractExceptionTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractExceptionTagInput() {
    return this._contractExceptionTag;
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

  // epg_useg_block_statement - computed: true, optional: true, required: false
  private _epgUsegBlockStatement = new ApplicationEpgEpgUsegBlockStatementOutputReference(this, "epg_useg_block_statement");
  public get epgUsegBlockStatement() {
    return this._epgUsegBlockStatement;
  }
  public putEpgUsegBlockStatement(value: ApplicationEpgEpgUsegBlockStatement) {
    this._epgUsegBlockStatement.internalValue = value;
  }
  public resetEpgUsegBlockStatement() {
    this._epgUsegBlockStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgUsegBlockStatementInput() {
    return this._epgUsegBlockStatement.internalValue;
  }

  // exception_tag - computed: true, optional: true, required: false
  private _exceptionTag?: string; 
  public get exceptionTag() {
    return this.getStringAttribute('exception_tag');
  }
  public set exceptionTag(value: string) {
    this._exceptionTag = value;
  }
  public resetExceptionTag() {
    this._exceptionTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionTagInput() {
    return this._exceptionTag;
  }

  // flood_in_encapsulation - computed: true, optional: true, required: false
  private _floodInEncapsulation?: string; 
  public get floodInEncapsulation() {
    return this.getStringAttribute('flood_in_encapsulation');
  }
  public set floodInEncapsulation(value: string) {
    this._floodInEncapsulation = value;
  }
  public resetFloodInEncapsulation() {
    this._floodInEncapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodInEncapsulationInput() {
    return this._floodInEncapsulation;
  }

  // flood_on_encap - computed: true, optional: true, required: false
  private _floodOnEncap?: string; 
  public get floodOnEncap() {
    return this.getStringAttribute('flood_on_encap');
  }
  public set floodOnEncap(value: string) {
    this._floodOnEncap = value;
  }
  public resetFloodOnEncap() {
    this._floodOnEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodOnEncapInput() {
    return this._floodOnEncap;
  }

  // forwarding_control - computed: true, optional: true, required: false
  private _forwardingControl?: string; 
  public get forwardingControl() {
    return this.getStringAttribute('forwarding_control');
  }
  public set forwardingControl(value: string) {
    this._forwardingControl = value;
  }
  public resetForwardingControl() {
    this._forwardingControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingControlInput() {
    return this._forwardingControl;
  }

  // fwd_ctrl - computed: true, optional: true, required: false
  private _fwdCtrl?: string; 
  public get fwdCtrl() {
    return this.getStringAttribute('fwd_ctrl');
  }
  public set fwdCtrl(value: string) {
    this._fwdCtrl = value;
  }
  public resetFwdCtrl() {
    this._fwdCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdCtrlInput() {
    return this._fwdCtrl;
  }

  // has_mcast_source - computed: true, optional: true, required: false
  private _hasMcastSource?: string; 
  public get hasMcastSource() {
    return this.getStringAttribute('has_mcast_source');
  }
  public set hasMcastSource(value: string) {
    this._hasMcastSource = value;
  }
  public resetHasMcastSource() {
    this._hasMcastSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasMcastSourceInput() {
    return this._hasMcastSource;
  }

  // has_multicast_source - computed: true, optional: true, required: false
  private _hasMulticastSource?: string; 
  public get hasMulticastSource() {
    return this.getStringAttribute('has_multicast_source');
  }
  public set hasMulticastSource(value: string) {
    this._hasMulticastSource = value;
  }
  public resetHasMulticastSource() {
    this._hasMulticastSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasMulticastSourceInput() {
    return this._hasMulticastSource;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intra_epg_isolation - computed: true, optional: true, required: false
  private _intraEpgIsolation?: string; 
  public get intraEpgIsolation() {
    return this.getStringAttribute('intra_epg_isolation');
  }
  public set intraEpgIsolation(value: string) {
    this._intraEpgIsolation = value;
  }
  public resetIntraEpgIsolation() {
    this._intraEpgIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraEpgIsolationInput() {
    return this._intraEpgIsolation;
  }

  // is_attr_based_epg - computed: true, optional: true, required: false
  private _isAttrBasedEpg?: string; 
  public get isAttrBasedEpg() {
    return this.getStringAttribute('is_attr_based_epg');
  }
  public set isAttrBasedEpg(value: string) {
    this._isAttrBasedEpg = value;
  }
  public resetIsAttrBasedEpg() {
    this._isAttrBasedEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAttrBasedEpgInput() {
    return this._isAttrBasedEpg;
  }

  // match_criteria - computed: true, optional: true, required: false
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  public resetMatchCriteria() {
    this._matchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_t - computed: true, optional: true, required: false
  private _matchT?: string; 
  public get matchT() {
    return this.getStringAttribute('match_t');
  }
  public set matchT(value: string) {
    this._matchT = value;
  }
  public resetMatchT() {
    this._matchT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTInput() {
    return this._matchT;
  }

  // name - computed: true, optional: true, required: false
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

  // parent_dn - computed: true, optional: true, required: false
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

  // pc_enf_pref - computed: true, optional: true, required: false
  private _pcEnfPref?: string; 
  public get pcEnfPref() {
    return this.getStringAttribute('pc_enf_pref');
  }
  public set pcEnfPref(value: string) {
    this._pcEnfPref = value;
  }
  public resetPcEnfPref() {
    this._pcEnfPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcEnfPrefInput() {
    return this._pcEnfPref;
  }

  // pc_tag - computed: true, optional: false, required: false
  public get pcTag() {
    return this.getStringAttribute('pc_tag');
  }

  // pref_gr_memb - computed: true, optional: true, required: false
  private _prefGrMemb?: string; 
  public get prefGrMemb() {
    return this.getStringAttribute('pref_gr_memb');
  }
  public set prefGrMemb(value: string) {
    this._prefGrMemb = value;
  }
  public resetPrefGrMemb() {
    this._prefGrMemb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefGrMembInput() {
    return this._prefGrMemb;
  }

  // preferred_group_member - computed: true, optional: true, required: false
  private _preferredGroupMember?: string; 
  public get preferredGroupMember() {
    return this.getStringAttribute('preferred_group_member');
  }
  public set preferredGroupMember(value: string) {
    this._preferredGroupMember = value;
  }
  public resetPreferredGroupMember() {
    this._preferredGroupMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredGroupMemberInput() {
    return this._preferredGroupMember;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // relation_fv_rs_aepg_mon_pol - computed: true, optional: true, required: false
  private _relationFvRsAepgMonPol?: string; 
  public get relationFvRsAepgMonPol() {
    return this.getStringAttribute('relation_fv_rs_aepg_mon_pol');
  }
  public set relationFvRsAepgMonPol(value: string) {
    this._relationFvRsAepgMonPol = value;
  }
  public resetRelationFvRsAepgMonPol() {
    this._relationFvRsAepgMonPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsAepgMonPolInput() {
    return this._relationFvRsAepgMonPol;
  }

  // relation_fv_rs_bd - computed: true, optional: true, required: false
  private _relationFvRsBd?: string; 
  public get relationFvRsBd() {
    return this.getStringAttribute('relation_fv_rs_bd');
  }
  public set relationFvRsBd(value: string) {
    this._relationFvRsBd = value;
  }
  public resetRelationFvRsBd() {
    this._relationFvRsBd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdInput() {
    return this._relationFvRsBd;
  }

  // relation_fv_rs_cons - computed: true, optional: true, required: false
  private _relationFvRsCons?: string[]; 
  public get relationFvRsCons() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_cons'));
  }
  public set relationFvRsCons(value: string[]) {
    this._relationFvRsCons = value;
  }
  public resetRelationFvRsCons() {
    this._relationFvRsCons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsConsInput() {
    return this._relationFvRsCons;
  }

  // relation_fv_rs_cons_if - computed: true, optional: true, required: false
  private _relationFvRsConsIf?: string[]; 
  public get relationFvRsConsIf() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_cons_if'));
  }
  public set relationFvRsConsIf(value: string[]) {
    this._relationFvRsConsIf = value;
  }
  public resetRelationFvRsConsIf() {
    this._relationFvRsConsIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsConsIfInput() {
    return this._relationFvRsConsIf;
  }

  // relation_fv_rs_cust_qos_pol - computed: true, optional: true, required: false
  private _relationFvRsCustQosPol?: string; 
  public get relationFvRsCustQosPol() {
    return this.getStringAttribute('relation_fv_rs_cust_qos_pol');
  }
  public set relationFvRsCustQosPol(value: string) {
    this._relationFvRsCustQosPol = value;
  }
  public resetRelationFvRsCustQosPol() {
    this._relationFvRsCustQosPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCustQosPolInput() {
    return this._relationFvRsCustQosPol;
  }

  // relation_fv_rs_dpp_pol - computed: true, optional: true, required: false
  private _relationFvRsDppPol?: string; 
  public get relationFvRsDppPol() {
    return this.getStringAttribute('relation_fv_rs_dpp_pol');
  }
  public set relationFvRsDppPol(value: string) {
    this._relationFvRsDppPol = value;
  }
  public resetRelationFvRsDppPol() {
    this._relationFvRsDppPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsDppPolInput() {
    return this._relationFvRsDppPol;
  }

  // relation_fv_rs_fc_path_att - computed: true, optional: true, required: false
  private _relationFvRsFcPathAtt?: string[]; 
  public get relationFvRsFcPathAtt() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_fc_path_att'));
  }
  public set relationFvRsFcPathAtt(value: string[]) {
    this._relationFvRsFcPathAtt = value;
  }
  public resetRelationFvRsFcPathAtt() {
    this._relationFvRsFcPathAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsFcPathAttInput() {
    return this._relationFvRsFcPathAtt;
  }

  // relation_fv_rs_intra_epg - computed: true, optional: true, required: false
  private _relationFvRsIntraEpg?: string[]; 
  public get relationFvRsIntraEpg() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_intra_epg'));
  }
  public set relationFvRsIntraEpg(value: string[]) {
    this._relationFvRsIntraEpg = value;
  }
  public resetRelationFvRsIntraEpg() {
    this._relationFvRsIntraEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsIntraEpgInput() {
    return this._relationFvRsIntraEpg;
  }

  // relation_fv_rs_path_att - computed: true, optional: true, required: false
  private _relationFvRsPathAtt?: string[]; 
  public get relationFvRsPathAtt() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_path_att'));
  }
  public set relationFvRsPathAtt(value: string[]) {
    this._relationFvRsPathAtt = value;
  }
  public resetRelationFvRsPathAtt() {
    this._relationFvRsPathAtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsPathAttInput() {
    return this._relationFvRsPathAtt;
  }

  // relation_fv_rs_prot_by - computed: true, optional: true, required: false
  private _relationFvRsProtBy?: string[]; 
  public get relationFvRsProtBy() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prot_by'));
  }
  public set relationFvRsProtBy(value: string[]) {
    this._relationFvRsProtBy = value;
  }
  public resetRelationFvRsProtBy() {
    this._relationFvRsProtBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProtByInput() {
    return this._relationFvRsProtBy;
  }

  // relation_fv_rs_prov - computed: true, optional: true, required: false
  private _relationFvRsProv?: string[]; 
  public get relationFvRsProv() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prov'));
  }
  public set relationFvRsProv(value: string[]) {
    this._relationFvRsProv = value;
  }
  public resetRelationFvRsProv() {
    this._relationFvRsProv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProvInput() {
    return this._relationFvRsProv;
  }

  // relation_fv_rs_prov_def - computed: true, optional: true, required: false
  private _relationFvRsProvDef?: string[]; 
  public get relationFvRsProvDef() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prov_def'));
  }
  public set relationFvRsProvDef(value: string[]) {
    this._relationFvRsProvDef = value;
  }
  public resetRelationFvRsProvDef() {
    this._relationFvRsProvDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProvDefInput() {
    return this._relationFvRsProvDef;
  }

  // relation_fv_rs_sec_inherited - computed: true, optional: true, required: false
  private _relationFvRsSecInherited?: string[]; 
  public get relationFvRsSecInherited() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_sec_inherited'));
  }
  public set relationFvRsSecInherited(value: string[]) {
    this._relationFvRsSecInherited = value;
  }
  public resetRelationFvRsSecInherited() {
    this._relationFvRsSecInherited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsSecInheritedInput() {
    return this._relationFvRsSecInherited;
  }

  // relation_fv_rs_trust_ctrl - computed: true, optional: true, required: false
  private _relationFvRsTrustCtrl?: string; 
  public get relationFvRsTrustCtrl() {
    return this.getStringAttribute('relation_fv_rs_trust_ctrl');
  }
  public set relationFvRsTrustCtrl(value: string) {
    this._relationFvRsTrustCtrl = value;
  }
  public resetRelationFvRsTrustCtrl() {
    this._relationFvRsTrustCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsTrustCtrlInput() {
    return this._relationFvRsTrustCtrl;
  }

  // relation_to_bridge_domain - computed: true, optional: true, required: false
  private _relationToBridgeDomain = new ApplicationEpgRelationToBridgeDomainOutputReference(this, "relation_to_bridge_domain");
  public get relationToBridgeDomain() {
    return this._relationToBridgeDomain;
  }
  public putRelationToBridgeDomain(value: ApplicationEpgRelationToBridgeDomain) {
    this._relationToBridgeDomain.internalValue = value;
  }
  public resetRelationToBridgeDomain() {
    this._relationToBridgeDomain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToBridgeDomainInput() {
    return this._relationToBridgeDomain.internalValue;
  }

  // relation_to_consumed_contracts - computed: true, optional: true, required: false
  private _relationToConsumedContracts = new ApplicationEpgRelationToConsumedContractsList(this, "relation_to_consumed_contracts", true);
  public get relationToConsumedContracts() {
    return this._relationToConsumedContracts;
  }
  public putRelationToConsumedContracts(value: ApplicationEpgRelationToConsumedContracts[] | cdktf.IResolvable) {
    this._relationToConsumedContracts.internalValue = value;
  }
  public resetRelationToConsumedContracts() {
    this._relationToConsumedContracts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToConsumedContractsInput() {
    return this._relationToConsumedContracts.internalValue;
  }

  // relation_to_contract_masters - computed: true, optional: true, required: false
  private _relationToContractMasters = new ApplicationEpgRelationToContractMastersList(this, "relation_to_contract_masters", true);
  public get relationToContractMasters() {
    return this._relationToContractMasters;
  }
  public putRelationToContractMasters(value: ApplicationEpgRelationToContractMasters[] | cdktf.IResolvable) {
    this._relationToContractMasters.internalValue = value;
  }
  public resetRelationToContractMasters() {
    this._relationToContractMasters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToContractMastersInput() {
    return this._relationToContractMasters.internalValue;
  }

  // relation_to_custom_qos_policy - computed: true, optional: true, required: false
  private _relationToCustomQosPolicy = new ApplicationEpgRelationToCustomQosPolicyOutputReference(this, "relation_to_custom_qos_policy");
  public get relationToCustomQosPolicy() {
    return this._relationToCustomQosPolicy;
  }
  public putRelationToCustomQosPolicy(value: ApplicationEpgRelationToCustomQosPolicy) {
    this._relationToCustomQosPolicy.internalValue = value;
  }
  public resetRelationToCustomQosPolicy() {
    this._relationToCustomQosPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToCustomQosPolicyInput() {
    return this._relationToCustomQosPolicy.internalValue;
  }

  // relation_to_data_plane_policing_policy - computed: true, optional: true, required: false
  private _relationToDataPlanePolicingPolicy = new ApplicationEpgRelationToDataPlanePolicingPolicyOutputReference(this, "relation_to_data_plane_policing_policy");
  public get relationToDataPlanePolicingPolicy() {
    return this._relationToDataPlanePolicingPolicy;
  }
  public putRelationToDataPlanePolicingPolicy(value: ApplicationEpgRelationToDataPlanePolicingPolicy) {
    this._relationToDataPlanePolicingPolicy.internalValue = value;
  }
  public resetRelationToDataPlanePolicingPolicy() {
    this._relationToDataPlanePolicingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToDataPlanePolicingPolicyInput() {
    return this._relationToDataPlanePolicingPolicy.internalValue;
  }

  // relation_to_domains - computed: true, optional: true, required: false
  private _relationToDomains = new ApplicationEpgRelationToDomainsList(this, "relation_to_domains", true);
  public get relationToDomains() {
    return this._relationToDomains;
  }
  public putRelationToDomains(value: ApplicationEpgRelationToDomains[] | cdktf.IResolvable) {
    this._relationToDomains.internalValue = value;
  }
  public resetRelationToDomains() {
    this._relationToDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToDomainsInput() {
    return this._relationToDomains.internalValue;
  }

  // relation_to_fibre_channel_paths - computed: true, optional: true, required: false
  private _relationToFibreChannelPaths = new ApplicationEpgRelationToFibreChannelPathsList(this, "relation_to_fibre_channel_paths", true);
  public get relationToFibreChannelPaths() {
    return this._relationToFibreChannelPaths;
  }
  public putRelationToFibreChannelPaths(value: ApplicationEpgRelationToFibreChannelPaths[] | cdktf.IResolvable) {
    this._relationToFibreChannelPaths.internalValue = value;
  }
  public resetRelationToFibreChannelPaths() {
    this._relationToFibreChannelPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToFibreChannelPathsInput() {
    return this._relationToFibreChannelPaths.internalValue;
  }

  // relation_to_imported_contracts - computed: true, optional: true, required: false
  private _relationToImportedContracts = new ApplicationEpgRelationToImportedContractsList(this, "relation_to_imported_contracts", true);
  public get relationToImportedContracts() {
    return this._relationToImportedContracts;
  }
  public putRelationToImportedContracts(value: ApplicationEpgRelationToImportedContracts[] | cdktf.IResolvable) {
    this._relationToImportedContracts.internalValue = value;
  }
  public resetRelationToImportedContracts() {
    this._relationToImportedContracts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToImportedContractsInput() {
    return this._relationToImportedContracts.internalValue;
  }

  // relation_to_intra_epg_contracts - computed: true, optional: true, required: false
  private _relationToIntraEpgContracts = new ApplicationEpgRelationToIntraEpgContractsList(this, "relation_to_intra_epg_contracts", true);
  public get relationToIntraEpgContracts() {
    return this._relationToIntraEpgContracts;
  }
  public putRelationToIntraEpgContracts(value: ApplicationEpgRelationToIntraEpgContracts[] | cdktf.IResolvable) {
    this._relationToIntraEpgContracts.internalValue = value;
  }
  public resetRelationToIntraEpgContracts() {
    this._relationToIntraEpgContracts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToIntraEpgContractsInput() {
    return this._relationToIntraEpgContracts.internalValue;
  }

  // relation_to_monitoring_policy - computed: true, optional: true, required: false
  private _relationToMonitoringPolicy = new ApplicationEpgRelationToMonitoringPolicyOutputReference(this, "relation_to_monitoring_policy");
  public get relationToMonitoringPolicy() {
    return this._relationToMonitoringPolicy;
  }
  public putRelationToMonitoringPolicy(value: ApplicationEpgRelationToMonitoringPolicy) {
    this._relationToMonitoringPolicy.internalValue = value;
  }
  public resetRelationToMonitoringPolicy() {
    this._relationToMonitoringPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToMonitoringPolicyInput() {
    return this._relationToMonitoringPolicy.internalValue;
  }

  // relation_to_provided_contracts - computed: true, optional: true, required: false
  private _relationToProvidedContracts = new ApplicationEpgRelationToProvidedContractsList(this, "relation_to_provided_contracts", true);
  public get relationToProvidedContracts() {
    return this._relationToProvidedContracts;
  }
  public putRelationToProvidedContracts(value: ApplicationEpgRelationToProvidedContracts[] | cdktf.IResolvable) {
    this._relationToProvidedContracts.internalValue = value;
  }
  public resetRelationToProvidedContracts() {
    this._relationToProvidedContracts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToProvidedContractsInput() {
    return this._relationToProvidedContracts.internalValue;
  }

  // relation_to_static_leafs - computed: true, optional: true, required: false
  private _relationToStaticLeafs = new ApplicationEpgRelationToStaticLeafsList(this, "relation_to_static_leafs", true);
  public get relationToStaticLeafs() {
    return this._relationToStaticLeafs;
  }
  public putRelationToStaticLeafs(value: ApplicationEpgRelationToStaticLeafs[] | cdktf.IResolvable) {
    this._relationToStaticLeafs.internalValue = value;
  }
  public resetRelationToStaticLeafs() {
    this._relationToStaticLeafs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToStaticLeafsInput() {
    return this._relationToStaticLeafs.internalValue;
  }

  // relation_to_static_paths - computed: true, optional: true, required: false
  private _relationToStaticPaths = new ApplicationEpgRelationToStaticPathsList(this, "relation_to_static_paths", true);
  public get relationToStaticPaths() {
    return this._relationToStaticPaths;
  }
  public putRelationToStaticPaths(value: ApplicationEpgRelationToStaticPaths[] | cdktf.IResolvable) {
    this._relationToStaticPaths.internalValue = value;
  }
  public resetRelationToStaticPaths() {
    this._relationToStaticPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToStaticPathsInput() {
    return this._relationToStaticPaths.internalValue;
  }

  // relation_to_taboo_contracts - computed: true, optional: true, required: false
  private _relationToTabooContracts = new ApplicationEpgRelationToTabooContractsList(this, "relation_to_taboo_contracts", true);
  public get relationToTabooContracts() {
    return this._relationToTabooContracts;
  }
  public putRelationToTabooContracts(value: ApplicationEpgRelationToTabooContracts[] | cdktf.IResolvable) {
    this._relationToTabooContracts.internalValue = value;
  }
  public resetRelationToTabooContracts() {
    this._relationToTabooContracts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToTabooContractsInput() {
    return this._relationToTabooContracts.internalValue;
  }

  // relation_to_trust_control_policy - computed: true, optional: true, required: false
  private _relationToTrustControlPolicy = new ApplicationEpgRelationToTrustControlPolicyOutputReference(this, "relation_to_trust_control_policy");
  public get relationToTrustControlPolicy() {
    return this._relationToTrustControlPolicy;
  }
  public putRelationToTrustControlPolicy(value: ApplicationEpgRelationToTrustControlPolicy) {
    this._relationToTrustControlPolicy.internalValue = value;
  }
  public resetRelationToTrustControlPolicy() {
    this._relationToTrustControlPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToTrustControlPolicyInput() {
    return this._relationToTrustControlPolicy.internalValue;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // shutdown - computed: true, optional: true, required: false
  private _shutdown?: string; 
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }
  public set shutdown(value: string) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new ApplicationEpgTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ApplicationEpgTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // useg_epg - computed: true, optional: true, required: false
  private _usegEpg?: string; 
  public get usegEpg() {
    return this.getStringAttribute('useg_epg');
  }
  public set usegEpg(value: string) {
    this._usegEpg = value;
  }
  public resetUsegEpg() {
    this._usegEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usegEpgInput() {
    return this._usegEpg;
  }

  // relation_fv_rs_node_att - computed: false, optional: true, required: false
  private _relationFvRsNodeAtt = new ApplicationEpgRelationFvRsNodeAttList(this, "relation_fv_rs_node_att", true);
  public get relationFvRsNodeAtt() {
    return this._relationFvRsNodeAtt;
  }
  public putRelationFvRsNodeAtt(value: ApplicationEpgRelationFvRsNodeAtt[] | cdktf.IResolvable) {
    this._relationFvRsNodeAtt.internalValue = value;
  }
  public resetRelationFvRsNodeAtt() {
    this._relationFvRsNodeAtt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsNodeAttInput() {
    return this._relationFvRsNodeAtt.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(applicationEpgAnnotationsToTerraform, false)(this._annotations.internalValue),
      application_profile_dn: cdktf.stringToTerraform(this._applicationProfileDn),
      contract_exception_tag: cdktf.stringToTerraform(this._contractExceptionTag),
      description: cdktf.stringToTerraform(this._description),
      epg_useg_block_statement: applicationEpgEpgUsegBlockStatementToTerraform(this._epgUsegBlockStatement.internalValue),
      exception_tag: cdktf.stringToTerraform(this._exceptionTag),
      flood_in_encapsulation: cdktf.stringToTerraform(this._floodInEncapsulation),
      flood_on_encap: cdktf.stringToTerraform(this._floodOnEncap),
      forwarding_control: cdktf.stringToTerraform(this._forwardingControl),
      fwd_ctrl: cdktf.stringToTerraform(this._fwdCtrl),
      has_mcast_source: cdktf.stringToTerraform(this._hasMcastSource),
      has_multicast_source: cdktf.stringToTerraform(this._hasMulticastSource),
      intra_epg_isolation: cdktf.stringToTerraform(this._intraEpgIsolation),
      is_attr_based_epg: cdktf.stringToTerraform(this._isAttrBasedEpg),
      match_criteria: cdktf.stringToTerraform(this._matchCriteria),
      match_t: cdktf.stringToTerraform(this._matchT),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      pc_enf_pref: cdktf.stringToTerraform(this._pcEnfPref),
      pref_gr_memb: cdktf.stringToTerraform(this._prefGrMemb),
      preferred_group_member: cdktf.stringToTerraform(this._preferredGroupMember),
      prio: cdktf.stringToTerraform(this._prio),
      priority: cdktf.stringToTerraform(this._priority),
      relation_fv_rs_aepg_mon_pol: cdktf.stringToTerraform(this._relationFvRsAepgMonPol),
      relation_fv_rs_bd: cdktf.stringToTerraform(this._relationFvRsBd),
      relation_fv_rs_cons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsCons),
      relation_fv_rs_cons_if: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsConsIf),
      relation_fv_rs_cust_qos_pol: cdktf.stringToTerraform(this._relationFvRsCustQosPol),
      relation_fv_rs_dpp_pol: cdktf.stringToTerraform(this._relationFvRsDppPol),
      relation_fv_rs_fc_path_att: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsFcPathAtt),
      relation_fv_rs_intra_epg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsIntraEpg),
      relation_fv_rs_path_att: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsPathAtt),
      relation_fv_rs_prot_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProtBy),
      relation_fv_rs_prov: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProv),
      relation_fv_rs_prov_def: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProvDef),
      relation_fv_rs_sec_inherited: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsSecInherited),
      relation_fv_rs_trust_ctrl: cdktf.stringToTerraform(this._relationFvRsTrustCtrl),
      relation_to_bridge_domain: applicationEpgRelationToBridgeDomainToTerraform(this._relationToBridgeDomain.internalValue),
      relation_to_consumed_contracts: cdktf.listMapper(applicationEpgRelationToConsumedContractsToTerraform, false)(this._relationToConsumedContracts.internalValue),
      relation_to_contract_masters: cdktf.listMapper(applicationEpgRelationToContractMastersToTerraform, false)(this._relationToContractMasters.internalValue),
      relation_to_custom_qos_policy: applicationEpgRelationToCustomQosPolicyToTerraform(this._relationToCustomQosPolicy.internalValue),
      relation_to_data_plane_policing_policy: applicationEpgRelationToDataPlanePolicingPolicyToTerraform(this._relationToDataPlanePolicingPolicy.internalValue),
      relation_to_domains: cdktf.listMapper(applicationEpgRelationToDomainsToTerraform, false)(this._relationToDomains.internalValue),
      relation_to_fibre_channel_paths: cdktf.listMapper(applicationEpgRelationToFibreChannelPathsToTerraform, false)(this._relationToFibreChannelPaths.internalValue),
      relation_to_imported_contracts: cdktf.listMapper(applicationEpgRelationToImportedContractsToTerraform, false)(this._relationToImportedContracts.internalValue),
      relation_to_intra_epg_contracts: cdktf.listMapper(applicationEpgRelationToIntraEpgContractsToTerraform, false)(this._relationToIntraEpgContracts.internalValue),
      relation_to_monitoring_policy: applicationEpgRelationToMonitoringPolicyToTerraform(this._relationToMonitoringPolicy.internalValue),
      relation_to_provided_contracts: cdktf.listMapper(applicationEpgRelationToProvidedContractsToTerraform, false)(this._relationToProvidedContracts.internalValue),
      relation_to_static_leafs: cdktf.listMapper(applicationEpgRelationToStaticLeafsToTerraform, false)(this._relationToStaticLeafs.internalValue),
      relation_to_static_paths: cdktf.listMapper(applicationEpgRelationToStaticPathsToTerraform, false)(this._relationToStaticPaths.internalValue),
      relation_to_taboo_contracts: cdktf.listMapper(applicationEpgRelationToTabooContractsToTerraform, false)(this._relationToTabooContracts.internalValue),
      relation_to_trust_control_policy: applicationEpgRelationToTrustControlPolicyToTerraform(this._relationToTrustControlPolicy.internalValue),
      shutdown: cdktf.stringToTerraform(this._shutdown),
      tags: cdktf.listMapper(applicationEpgTagsToTerraform, false)(this._tags.internalValue),
      useg_epg: cdktf.stringToTerraform(this._usegEpg),
      relation_fv_rs_node_att: cdktf.listMapper(applicationEpgRelationFvRsNodeAttToTerraform, true)(this._relationFvRsNodeAtt.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
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
      annotations: {
        value: cdktf.listMapperHcl(applicationEpgAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgAnnotationsList",
      },
      application_profile_dn: {
        value: cdktf.stringToHclTerraform(this._applicationProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_exception_tag: {
        value: cdktf.stringToHclTerraform(this._contractExceptionTag),
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
      epg_useg_block_statement: {
        value: applicationEpgEpgUsegBlockStatementToHclTerraform(this._epgUsegBlockStatement.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationEpgEpgUsegBlockStatement",
      },
      exception_tag: {
        value: cdktf.stringToHclTerraform(this._exceptionTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flood_in_encapsulation: {
        value: cdktf.stringToHclTerraform(this._floodInEncapsulation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flood_on_encap: {
        value: cdktf.stringToHclTerraform(this._floodOnEncap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding_control: {
        value: cdktf.stringToHclTerraform(this._forwardingControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_ctrl: {
        value: cdktf.stringToHclTerraform(this._fwdCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_mcast_source: {
        value: cdktf.stringToHclTerraform(this._hasMcastSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_multicast_source: {
        value: cdktf.stringToHclTerraform(this._hasMulticastSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intra_epg_isolation: {
        value: cdktf.stringToHclTerraform(this._intraEpgIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_attr_based_epg: {
        value: cdktf.stringToHclTerraform(this._isAttrBasedEpg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_criteria: {
        value: cdktf.stringToHclTerraform(this._matchCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_t: {
        value: cdktf.stringToHclTerraform(this._matchT),
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
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pc_enf_pref: {
        value: cdktf.stringToHclTerraform(this._pcEnfPref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pref_gr_memb: {
        value: cdktf.stringToHclTerraform(this._prefGrMemb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_group_member: {
        value: cdktf.stringToHclTerraform(this._preferredGroupMember),
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
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_aepg_mon_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsAepgMonPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_bd: {
        value: cdktf.stringToHclTerraform(this._relationFvRsBd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_cons: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsCons),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_cons_if: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsConsIf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_cust_qos_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsCustQosPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_dpp_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsDppPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_fc_path_att: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsFcPathAtt),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_intra_epg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsIntraEpg),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_path_att: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsPathAtt),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_prot_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsProtBy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_prov: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsProv),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_prov_def: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsProvDef),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_sec_inherited: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsSecInherited),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_trust_ctrl: {
        value: cdktf.stringToHclTerraform(this._relationFvRsTrustCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_to_bridge_domain: {
        value: applicationEpgRelationToBridgeDomainToHclTerraform(this._relationToBridgeDomain.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationEpgRelationToBridgeDomain",
      },
      relation_to_consumed_contracts: {
        value: cdktf.listMapperHcl(applicationEpgRelationToConsumedContractsToHclTerraform, false)(this._relationToConsumedContracts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationToConsumedContractsList",
      },
      relation_to_contract_masters: {
        value: cdktf.listMapperHcl(applicationEpgRelationToContractMastersToHclTerraform, false)(this._relationToContractMasters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationToContractMastersList",
      },
      relation_to_custom_qos_policy: {
        value: applicationEpgRelationToCustomQosPolicyToHclTerraform(this._relationToCustomQosPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationEpgRelationToCustomQosPolicy",
      },
      relation_to_data_plane_policing_policy: {
        value: applicationEpgRelationToDataPlanePolicingPolicyToHclTerraform(this._relationToDataPlanePolicingPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationEpgRelationToDataPlanePolicingPolicy",
      },
      relation_to_domains: {
        value: cdktf.listMapperHcl(applicationEpgRelationToDomainsToHclTerraform, false)(this._relationToDomains.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationToDomainsList",
      },
      relation_to_fibre_channel_paths: {
        value: cdktf.listMapperHcl(applicationEpgRelationToFibreChannelPathsToHclTerraform, false)(this._relationToFibreChannelPaths.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationToFibreChannelPathsList",
      },
      relation_to_imported_contracts: {
        value: cdktf.listMapperHcl(applicationEpgRelationToImportedContractsToHclTerraform, false)(this._relationToImportedContracts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationToImportedContractsList",
      },
      relation_to_intra_epg_contracts: {
        value: cdktf.listMapperHcl(applicationEpgRelationToIntraEpgContractsToHclTerraform, false)(this._relationToIntraEpgContracts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationToIntraEpgContractsList",
      },
      relation_to_monitoring_policy: {
        value: applicationEpgRelationToMonitoringPolicyToHclTerraform(this._relationToMonitoringPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationEpgRelationToMonitoringPolicy",
      },
      relation_to_provided_contracts: {
        value: cdktf.listMapperHcl(applicationEpgRelationToProvidedContractsToHclTerraform, false)(this._relationToProvidedContracts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationToProvidedContractsList",
      },
      relation_to_static_leafs: {
        value: cdktf.listMapperHcl(applicationEpgRelationToStaticLeafsToHclTerraform, false)(this._relationToStaticLeafs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationToStaticLeafsList",
      },
      relation_to_static_paths: {
        value: cdktf.listMapperHcl(applicationEpgRelationToStaticPathsToHclTerraform, false)(this._relationToStaticPaths.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationToStaticPathsList",
      },
      relation_to_taboo_contracts: {
        value: cdktf.listMapperHcl(applicationEpgRelationToTabooContractsToHclTerraform, false)(this._relationToTabooContracts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationToTabooContractsList",
      },
      relation_to_trust_control_policy: {
        value: applicationEpgRelationToTrustControlPolicyToHclTerraform(this._relationToTrustControlPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationEpgRelationToTrustControlPolicy",
      },
      shutdown: {
        value: cdktf.stringToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(applicationEpgTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgTagsList",
      },
      useg_epg: {
        value: cdktf.stringToHclTerraform(this._usegEpg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_node_att: {
        value: cdktf.listMapperHcl(applicationEpgRelationFvRsNodeAttToHclTerraform, true)(this._relationFvRsNodeAtt.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationEpgRelationFvRsNodeAttList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
