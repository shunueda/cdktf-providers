// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmmControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#annotation VmmController#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#dvs_version VmmController#dvs_version}
  */
  readonly dvsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#host_or_ip VmmController#host_or_ip}
  */
  readonly hostOrIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#id VmmController#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#inventory_trig_st VmmController#inventory_trig_st}
  */
  readonly inventoryTrigSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#mode VmmController#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#msft_config_err_msg VmmController#msft_config_err_msg}
  */
  readonly msftConfigErrMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#msft_config_issues VmmController#msft_config_issues}
  */
  readonly msftConfigIssues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#n1kv_stats_mode VmmController#n1kv_stats_mode}
  */
  readonly n1KvStatsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#name VmmController#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#name_alias VmmController#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#port VmmController#port}
  */
  readonly port?: string;
  /**
  * Create relation to vmm:UsrAccP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#relation_vmm_rs_acc VmmController#relation_vmm_rs_acc}
  */
  readonly relationVmmRsAcc?: string;
  /**
  * Create relation to mon:InfraPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#relation_vmm_rs_ctrlr_p_mon_pol VmmController#relation_vmm_rs_ctrlr_p_mon_pol}
  */
  readonly relationVmmRsCtrlrPMonPol?: string;
  /**
  * Create relation to fvns:McastAddrInstP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#relation_vmm_rs_mcast_addr_ns VmmController#relation_vmm_rs_mcast_addr_ns}
  */
  readonly relationVmmRsMcastAddrNs?: string;
  /**
  * Create relation to fv:EPg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#relation_vmm_rs_mgmt_e_pg VmmController#relation_vmm_rs_mgmt_e_pg}
  */
  readonly relationVmmRsMgmtEPg?: string;
  /**
  * Create relation to extdev:MgrP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#relation_vmm_rs_to_ext_dev_mgr VmmController#relation_vmm_rs_to_ext_dev_mgr}
  */
  readonly relationVmmRsToExtDevMgr?: string[];
  /**
  * Create relation to fvns:VxlanInstP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#relation_vmm_rs_vxlan_ns VmmController#relation_vmm_rs_vxlan_ns}
  */
  readonly relationVmmRsVxlanNs?: string;
  /**
  * Create relation to fvns:AInstP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#relation_vmm_rs_vxlan_ns_def VmmController#relation_vmm_rs_vxlan_ns_def}
  */
  readonly relationVmmRsVxlanNsDef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#root_cont_name VmmController#root_cont_name}
  */
  readonly rootContName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#scope VmmController#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#seq_num VmmController#seq_num}
  */
  readonly seqNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#stats_mode VmmController#stats_mode}
  */
  readonly statsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#vmm_domain_dn VmmController#vmm_domain_dn}
  */
  readonly vmmDomainDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#vxlan_depl_pref VmmController#vxlan_depl_pref}
  */
  readonly vxlanDeplPref?: string;
  /**
  * relation_vmm_rs_vmm_ctrlr_p block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#relation_vmm_rs_vmm_ctrlr_p VmmController#relation_vmm_rs_vmm_ctrlr_p}
  */
  readonly relationVmmRsVmmCtrlrP?: VmmControllerRelationVmmRsVmmCtrlrP[] | cdktf.IResolvable;
}
export interface VmmControllerRelationVmmRsVmmCtrlrP {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#epg_depl_pref VmmController#epg_depl_pref}
  */
  readonly epgDeplPref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#target_dn VmmController#target_dn}
  */
  readonly targetDn: string;
}

export function vmmControllerRelationVmmRsVmmCtrlrPToTerraform(struct?: VmmControllerRelationVmmRsVmmCtrlrP | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epg_depl_pref: cdktf.stringToTerraform(struct!.epgDeplPref),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function vmmControllerRelationVmmRsVmmCtrlrPToHclTerraform(struct?: VmmControllerRelationVmmRsVmmCtrlrP | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epg_depl_pref: {
      value: cdktf.stringToHclTerraform(struct!.epgDeplPref),
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

export class VmmControllerRelationVmmRsVmmCtrlrPOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmmControllerRelationVmmRsVmmCtrlrP | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epgDeplPref !== undefined) {
      hasAnyValues = true;
      internalValueResult.epgDeplPref = this._epgDeplPref;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmmControllerRelationVmmRsVmmCtrlrP | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._epgDeplPref = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._epgDeplPref = value.epgDeplPref;
      this._targetDn = value.targetDn;
    }
  }

  // epg_depl_pref - computed: false, optional: true, required: false
  private _epgDeplPref?: string; 
  public get epgDeplPref() {
    return this.getStringAttribute('epg_depl_pref');
  }
  public set epgDeplPref(value: string) {
    this._epgDeplPref = value;
  }
  public resetEpgDeplPref() {
    this._epgDeplPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgDeplPrefInput() {
    return this._epgDeplPref;
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

export class VmmControllerRelationVmmRsVmmCtrlrPList extends cdktf.ComplexList {
  public internalValue? : VmmControllerRelationVmmRsVmmCtrlrP[] | cdktf.IResolvable

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
  public get(index: number): VmmControllerRelationVmmRsVmmCtrlrPOutputReference {
    return new VmmControllerRelationVmmRsVmmCtrlrPOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller aci_vmm_controller}
*/
export class VmmController extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_vmm_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmmController resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmmController to import
  * @param importFromId The id of the existing VmmController that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmmController to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_vmm_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vmm_controller aci_vmm_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmmControllerConfig
  */
  public constructor(scope: Construct, id: string, config: VmmControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_vmm_controller',
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
    this._dvsVersion = config.dvsVersion;
    this._hostOrIp = config.hostOrIp;
    this._id = config.id;
    this._inventoryTrigSt = config.inventoryTrigSt;
    this._mode = config.mode;
    this._msftConfigErrMsg = config.msftConfigErrMsg;
    this._msftConfigIssues = config.msftConfigIssues;
    this._n1KvStatsMode = config.n1KvStatsMode;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._port = config.port;
    this._relationVmmRsAcc = config.relationVmmRsAcc;
    this._relationVmmRsCtrlrPMonPol = config.relationVmmRsCtrlrPMonPol;
    this._relationVmmRsMcastAddrNs = config.relationVmmRsMcastAddrNs;
    this._relationVmmRsMgmtEPg = config.relationVmmRsMgmtEPg;
    this._relationVmmRsToExtDevMgr = config.relationVmmRsToExtDevMgr;
    this._relationVmmRsVxlanNs = config.relationVmmRsVxlanNs;
    this._relationVmmRsVxlanNsDef = config.relationVmmRsVxlanNsDef;
    this._rootContName = config.rootContName;
    this._scope = config.scope;
    this._seqNum = config.seqNum;
    this._statsMode = config.statsMode;
    this._vmmDomainDn = config.vmmDomainDn;
    this._vxlanDeplPref = config.vxlanDeplPref;
    this._relationVmmRsVmmCtrlrP.internalValue = config.relationVmmRsVmmCtrlrP;
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

  // dvs_version - computed: true, optional: true, required: false
  private _dvsVersion?: string; 
  public get dvsVersion() {
    return this.getStringAttribute('dvs_version');
  }
  public set dvsVersion(value: string) {
    this._dvsVersion = value;
  }
  public resetDvsVersion() {
    this._dvsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvsVersionInput() {
    return this._dvsVersion;
  }

  // host_or_ip - computed: false, optional: false, required: true
  private _hostOrIp?: string; 
  public get hostOrIp() {
    return this.getStringAttribute('host_or_ip');
  }
  public set hostOrIp(value: string) {
    this._hostOrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOrIpInput() {
    return this._hostOrIp;
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

  // inventory_trig_st - computed: true, optional: true, required: false
  private _inventoryTrigSt?: string; 
  public get inventoryTrigSt() {
    return this.getStringAttribute('inventory_trig_st');
  }
  public set inventoryTrigSt(value: string) {
    this._inventoryTrigSt = value;
  }
  public resetInventoryTrigSt() {
    this._inventoryTrigSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryTrigStInput() {
    return this._inventoryTrigSt;
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

  // msft_config_err_msg - computed: true, optional: true, required: false
  private _msftConfigErrMsg?: string; 
  public get msftConfigErrMsg() {
    return this.getStringAttribute('msft_config_err_msg');
  }
  public set msftConfigErrMsg(value: string) {
    this._msftConfigErrMsg = value;
  }
  public resetMsftConfigErrMsg() {
    this._msftConfigErrMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msftConfigErrMsgInput() {
    return this._msftConfigErrMsg;
  }

  // msft_config_issues - computed: true, optional: true, required: false
  private _msftConfigIssues?: string[]; 
  public get msftConfigIssues() {
    return this.getListAttribute('msft_config_issues');
  }
  public set msftConfigIssues(value: string[]) {
    this._msftConfigIssues = value;
  }
  public resetMsftConfigIssues() {
    this._msftConfigIssues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msftConfigIssuesInput() {
    return this._msftConfigIssues;
  }

  // n1kv_stats_mode - computed: true, optional: true, required: false
  private _n1KvStatsMode?: string; 
  public get n1KvStatsMode() {
    return this.getStringAttribute('n1kv_stats_mode');
  }
  public set n1KvStatsMode(value: string) {
    this._n1KvStatsMode = value;
  }
  public resetN1KvStatsMode() {
    this._n1KvStatsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n1KvStatsModeInput() {
    return this._n1KvStatsMode;
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

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // relation_vmm_rs_acc - computed: false, optional: true, required: false
  private _relationVmmRsAcc?: string; 
  public get relationVmmRsAcc() {
    return this.getStringAttribute('relation_vmm_rs_acc');
  }
  public set relationVmmRsAcc(value: string) {
    this._relationVmmRsAcc = value;
  }
  public resetRelationVmmRsAcc() {
    this._relationVmmRsAcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsAccInput() {
    return this._relationVmmRsAcc;
  }

  // relation_vmm_rs_ctrlr_p_mon_pol - computed: false, optional: true, required: false
  private _relationVmmRsCtrlrPMonPol?: string; 
  public get relationVmmRsCtrlrPMonPol() {
    return this.getStringAttribute('relation_vmm_rs_ctrlr_p_mon_pol');
  }
  public set relationVmmRsCtrlrPMonPol(value: string) {
    this._relationVmmRsCtrlrPMonPol = value;
  }
  public resetRelationVmmRsCtrlrPMonPol() {
    this._relationVmmRsCtrlrPMonPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsCtrlrPMonPolInput() {
    return this._relationVmmRsCtrlrPMonPol;
  }

  // relation_vmm_rs_mcast_addr_ns - computed: false, optional: true, required: false
  private _relationVmmRsMcastAddrNs?: string; 
  public get relationVmmRsMcastAddrNs() {
    return this.getStringAttribute('relation_vmm_rs_mcast_addr_ns');
  }
  public set relationVmmRsMcastAddrNs(value: string) {
    this._relationVmmRsMcastAddrNs = value;
  }
  public resetRelationVmmRsMcastAddrNs() {
    this._relationVmmRsMcastAddrNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsMcastAddrNsInput() {
    return this._relationVmmRsMcastAddrNs;
  }

  // relation_vmm_rs_mgmt_e_pg - computed: false, optional: true, required: false
  private _relationVmmRsMgmtEPg?: string; 
  public get relationVmmRsMgmtEPg() {
    return this.getStringAttribute('relation_vmm_rs_mgmt_e_pg');
  }
  public set relationVmmRsMgmtEPg(value: string) {
    this._relationVmmRsMgmtEPg = value;
  }
  public resetRelationVmmRsMgmtEPg() {
    this._relationVmmRsMgmtEPg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsMgmtEPgInput() {
    return this._relationVmmRsMgmtEPg;
  }

  // relation_vmm_rs_to_ext_dev_mgr - computed: false, optional: true, required: false
  private _relationVmmRsToExtDevMgr?: string[]; 
  public get relationVmmRsToExtDevMgr() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_vmm_rs_to_ext_dev_mgr'));
  }
  public set relationVmmRsToExtDevMgr(value: string[]) {
    this._relationVmmRsToExtDevMgr = value;
  }
  public resetRelationVmmRsToExtDevMgr() {
    this._relationVmmRsToExtDevMgr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsToExtDevMgrInput() {
    return this._relationVmmRsToExtDevMgr;
  }

  // relation_vmm_rs_vxlan_ns - computed: false, optional: true, required: false
  private _relationVmmRsVxlanNs?: string; 
  public get relationVmmRsVxlanNs() {
    return this.getStringAttribute('relation_vmm_rs_vxlan_ns');
  }
  public set relationVmmRsVxlanNs(value: string) {
    this._relationVmmRsVxlanNs = value;
  }
  public resetRelationVmmRsVxlanNs() {
    this._relationVmmRsVxlanNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVxlanNsInput() {
    return this._relationVmmRsVxlanNs;
  }

  // relation_vmm_rs_vxlan_ns_def - computed: true, optional: true, required: false
  private _relationVmmRsVxlanNsDef?: string; 
  public get relationVmmRsVxlanNsDef() {
    return this.getStringAttribute('relation_vmm_rs_vxlan_ns_def');
  }
  public set relationVmmRsVxlanNsDef(value: string) {
    this._relationVmmRsVxlanNsDef = value;
  }
  public resetRelationVmmRsVxlanNsDef() {
    this._relationVmmRsVxlanNsDef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVxlanNsDefInput() {
    return this._relationVmmRsVxlanNsDef;
  }

  // root_cont_name - computed: false, optional: false, required: true
  private _rootContName?: string; 
  public get rootContName() {
    return this.getStringAttribute('root_cont_name');
  }
  public set rootContName(value: string) {
    this._rootContName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootContNameInput() {
    return this._rootContName;
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

  // seq_num - computed: true, optional: true, required: false
  private _seqNum?: string; 
  public get seqNum() {
    return this.getStringAttribute('seq_num');
  }
  public set seqNum(value: string) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // stats_mode - computed: true, optional: true, required: false
  private _statsMode?: string; 
  public get statsMode() {
    return this.getStringAttribute('stats_mode');
  }
  public set statsMode(value: string) {
    this._statsMode = value;
  }
  public resetStatsMode() {
    this._statsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsModeInput() {
    return this._statsMode;
  }

  // vmm_domain_dn - computed: false, optional: false, required: true
  private _vmmDomainDn?: string; 
  public get vmmDomainDn() {
    return this.getStringAttribute('vmm_domain_dn');
  }
  public set vmmDomainDn(value: string) {
    this._vmmDomainDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmDomainDnInput() {
    return this._vmmDomainDn;
  }

  // vxlan_depl_pref - computed: true, optional: true, required: false
  private _vxlanDeplPref?: string; 
  public get vxlanDeplPref() {
    return this.getStringAttribute('vxlan_depl_pref');
  }
  public set vxlanDeplPref(value: string) {
    this._vxlanDeplPref = value;
  }
  public resetVxlanDeplPref() {
    this._vxlanDeplPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanDeplPrefInput() {
    return this._vxlanDeplPref;
  }

  // relation_vmm_rs_vmm_ctrlr_p - computed: false, optional: true, required: false
  private _relationVmmRsVmmCtrlrP = new VmmControllerRelationVmmRsVmmCtrlrPList(this, "relation_vmm_rs_vmm_ctrlr_p", true);
  public get relationVmmRsVmmCtrlrP() {
    return this._relationVmmRsVmmCtrlrP;
  }
  public putRelationVmmRsVmmCtrlrP(value: VmmControllerRelationVmmRsVmmCtrlrP[] | cdktf.IResolvable) {
    this._relationVmmRsVmmCtrlrP.internalValue = value;
  }
  public resetRelationVmmRsVmmCtrlrP() {
    this._relationVmmRsVmmCtrlrP.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVmmCtrlrPInput() {
    return this._relationVmmRsVmmCtrlrP.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      dvs_version: cdktf.stringToTerraform(this._dvsVersion),
      host_or_ip: cdktf.stringToTerraform(this._hostOrIp),
      id: cdktf.stringToTerraform(this._id),
      inventory_trig_st: cdktf.stringToTerraform(this._inventoryTrigSt),
      mode: cdktf.stringToTerraform(this._mode),
      msft_config_err_msg: cdktf.stringToTerraform(this._msftConfigErrMsg),
      msft_config_issues: cdktf.listMapper(cdktf.stringToTerraform, false)(this._msftConfigIssues),
      n1kv_stats_mode: cdktf.stringToTerraform(this._n1KvStatsMode),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      port: cdktf.stringToTerraform(this._port),
      relation_vmm_rs_acc: cdktf.stringToTerraform(this._relationVmmRsAcc),
      relation_vmm_rs_ctrlr_p_mon_pol: cdktf.stringToTerraform(this._relationVmmRsCtrlrPMonPol),
      relation_vmm_rs_mcast_addr_ns: cdktf.stringToTerraform(this._relationVmmRsMcastAddrNs),
      relation_vmm_rs_mgmt_e_pg: cdktf.stringToTerraform(this._relationVmmRsMgmtEPg),
      relation_vmm_rs_to_ext_dev_mgr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationVmmRsToExtDevMgr),
      relation_vmm_rs_vxlan_ns: cdktf.stringToTerraform(this._relationVmmRsVxlanNs),
      relation_vmm_rs_vxlan_ns_def: cdktf.stringToTerraform(this._relationVmmRsVxlanNsDef),
      root_cont_name: cdktf.stringToTerraform(this._rootContName),
      scope: cdktf.stringToTerraform(this._scope),
      seq_num: cdktf.stringToTerraform(this._seqNum),
      stats_mode: cdktf.stringToTerraform(this._statsMode),
      vmm_domain_dn: cdktf.stringToTerraform(this._vmmDomainDn),
      vxlan_depl_pref: cdktf.stringToTerraform(this._vxlanDeplPref),
      relation_vmm_rs_vmm_ctrlr_p: cdktf.listMapper(vmmControllerRelationVmmRsVmmCtrlrPToTerraform, true)(this._relationVmmRsVmmCtrlrP.internalValue),
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
      dvs_version: {
        value: cdktf.stringToHclTerraform(this._dvsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_or_ip: {
        value: cdktf.stringToHclTerraform(this._hostOrIp),
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
      inventory_trig_st: {
        value: cdktf.stringToHclTerraform(this._inventoryTrigSt),
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
      msft_config_err_msg: {
        value: cdktf.stringToHclTerraform(this._msftConfigErrMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msft_config_issues: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._msftConfigIssues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      n1kv_stats_mode: {
        value: cdktf.stringToHclTerraform(this._n1KvStatsMode),
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_acc: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsAcc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_ctrlr_p_mon_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsCtrlrPMonPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_mcast_addr_ns: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsMcastAddrNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_mgmt_e_pg: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsMgmtEPg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_to_ext_dev_mgr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationVmmRsToExtDevMgr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_vmm_rs_vxlan_ns: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsVxlanNs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_vxlan_ns_def: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsVxlanNsDef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_cont_name: {
        value: cdktf.stringToHclTerraform(this._rootContName),
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
      seq_num: {
        value: cdktf.stringToHclTerraform(this._seqNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats_mode: {
        value: cdktf.stringToHclTerraform(this._statsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmm_domain_dn: {
        value: cdktf.stringToHclTerraform(this._vmmDomainDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vxlan_depl_pref: {
        value: cdktf.stringToHclTerraform(this._vxlanDeplPref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_vmm_ctrlr_p: {
        value: cdktf.listMapperHcl(vmmControllerRelationVmmRsVmmCtrlrPToHclTerraform, true)(this._relationVmmRsVmmCtrlrP.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmmControllerRelationVmmRsVmmCtrlrPList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
