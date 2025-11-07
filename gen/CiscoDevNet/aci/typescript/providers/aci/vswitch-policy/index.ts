// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VswitchPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#annotation VswitchPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#description VswitchPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#id VswitchPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#name_alias VswitchPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Create relation to cdp:IfPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#relation_vmm_rs_vswitch_override_cdp_if_pol VswitchPolicy#relation_vmm_rs_vswitch_override_cdp_if_pol}
  */
  readonly relationVmmRsVswitchOverrideCdpIfPol?: string;
  /**
  * Create relation to nws:FwPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#relation_vmm_rs_vswitch_override_fw_pol VswitchPolicy#relation_vmm_rs_vswitch_override_fw_pol}
  */
  readonly relationVmmRsVswitchOverrideFwPol?: string;
  /**
  * Create relation to lacp:LagPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#relation_vmm_rs_vswitch_override_lacp_pol VswitchPolicy#relation_vmm_rs_vswitch_override_lacp_pol}
  */
  readonly relationVmmRsVswitchOverrideLacpPol?: string;
  /**
  * Create relation to lldp:IfPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#relation_vmm_rs_vswitch_override_lldp_if_pol VswitchPolicy#relation_vmm_rs_vswitch_override_lldp_if_pol}
  */
  readonly relationVmmRsVswitchOverrideLldpIfPol?: string;
  /**
  * Create relation to mcp:IfPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#relation_vmm_rs_vswitch_override_mcp_if_pol VswitchPolicy#relation_vmm_rs_vswitch_override_mcp_if_pol}
  */
  readonly relationVmmRsVswitchOverrideMcpIfPol?: string;
  /**
  * Create relation to l2:InstPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#relation_vmm_rs_vswitch_override_mtu_pol VswitchPolicy#relation_vmm_rs_vswitch_override_mtu_pol}
  */
  readonly relationVmmRsVswitchOverrideMtuPol?: string;
  /**
  * Create relation to stp:IfPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#relation_vmm_rs_vswitch_override_stp_pol VswitchPolicy#relation_vmm_rs_vswitch_override_stp_pol}
  */
  readonly relationVmmRsVswitchOverrideStpPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#vmm_domain_dn VswitchPolicy#vmm_domain_dn}
  */
  readonly vmmDomainDn: string;
  /**
  * relation_vmm_rs_vswitch_exporter_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#relation_vmm_rs_vswitch_exporter_pol VswitchPolicy#relation_vmm_rs_vswitch_exporter_pol}
  */
  readonly relationVmmRsVswitchExporterPol?: VswitchPolicyRelationVmmRsVswitchExporterPol[] | cdktf.IResolvable;
}
export interface VswitchPolicyRelationVmmRsVswitchExporterPol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#active_flow_time_out VswitchPolicy#active_flow_time_out}
  */
  readonly activeFlowTimeOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#idle_flow_time_out VswitchPolicy#idle_flow_time_out}
  */
  readonly idleFlowTimeOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#sampling_rate VswitchPolicy#sampling_rate}
  */
  readonly samplingRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#target_dn VswitchPolicy#target_dn}
  */
  readonly targetDn: string;
}

export function vswitchPolicyRelationVmmRsVswitchExporterPolToTerraform(struct?: VswitchPolicyRelationVmmRsVswitchExporterPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_flow_time_out: cdktf.stringToTerraform(struct!.activeFlowTimeOut),
    idle_flow_time_out: cdktf.stringToTerraform(struct!.idleFlowTimeOut),
    sampling_rate: cdktf.stringToTerraform(struct!.samplingRate),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function vswitchPolicyRelationVmmRsVswitchExporterPolToHclTerraform(struct?: VswitchPolicyRelationVmmRsVswitchExporterPol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_flow_time_out: {
      value: cdktf.stringToHclTerraform(struct!.activeFlowTimeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_flow_time_out: {
      value: cdktf.stringToHclTerraform(struct!.idleFlowTimeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_rate: {
      value: cdktf.stringToHclTerraform(struct!.samplingRate),
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

export class VswitchPolicyRelationVmmRsVswitchExporterPolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VswitchPolicyRelationVmmRsVswitchExporterPol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeFlowTimeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeFlowTimeOut = this._activeFlowTimeOut;
    }
    if (this._idleFlowTimeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleFlowTimeOut = this._idleFlowTimeOut;
    }
    if (this._samplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRate = this._samplingRate;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VswitchPolicyRelationVmmRsVswitchExporterPol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeFlowTimeOut = undefined;
      this._idleFlowTimeOut = undefined;
      this._samplingRate = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeFlowTimeOut = value.activeFlowTimeOut;
      this._idleFlowTimeOut = value.idleFlowTimeOut;
      this._samplingRate = value.samplingRate;
      this._targetDn = value.targetDn;
    }
  }

  // active_flow_time_out - computed: false, optional: true, required: false
  private _activeFlowTimeOut?: string; 
  public get activeFlowTimeOut() {
    return this.getStringAttribute('active_flow_time_out');
  }
  public set activeFlowTimeOut(value: string) {
    this._activeFlowTimeOut = value;
  }
  public resetActiveFlowTimeOut() {
    this._activeFlowTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeFlowTimeOutInput() {
    return this._activeFlowTimeOut;
  }

  // idle_flow_time_out - computed: false, optional: true, required: false
  private _idleFlowTimeOut?: string; 
  public get idleFlowTimeOut() {
    return this.getStringAttribute('idle_flow_time_out');
  }
  public set idleFlowTimeOut(value: string) {
    this._idleFlowTimeOut = value;
  }
  public resetIdleFlowTimeOut() {
    this._idleFlowTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleFlowTimeOutInput() {
    return this._idleFlowTimeOut;
  }

  // sampling_rate - computed: false, optional: true, required: false
  private _samplingRate?: string; 
  public get samplingRate() {
    return this.getStringAttribute('sampling_rate');
  }
  public set samplingRate(value: string) {
    this._samplingRate = value;
  }
  public resetSamplingRate() {
    this._samplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRateInput() {
    return this._samplingRate;
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

export class VswitchPolicyRelationVmmRsVswitchExporterPolList extends cdktf.ComplexList {
  public internalValue? : VswitchPolicyRelationVmmRsVswitchExporterPol[] | cdktf.IResolvable

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
  public get(index: number): VswitchPolicyRelationVmmRsVswitchExporterPolOutputReference {
    return new VswitchPolicyRelationVmmRsVswitchExporterPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy aci_vswitch_policy}
*/
export class VswitchPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_vswitch_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VswitchPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VswitchPolicy to import
  * @param importFromId The id of the existing VswitchPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VswitchPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_vswitch_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/vswitch_policy aci_vswitch_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VswitchPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VswitchPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_vswitch_policy',
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
    this._id = config.id;
    this._nameAlias = config.nameAlias;
    this._relationVmmRsVswitchOverrideCdpIfPol = config.relationVmmRsVswitchOverrideCdpIfPol;
    this._relationVmmRsVswitchOverrideFwPol = config.relationVmmRsVswitchOverrideFwPol;
    this._relationVmmRsVswitchOverrideLacpPol = config.relationVmmRsVswitchOverrideLacpPol;
    this._relationVmmRsVswitchOverrideLldpIfPol = config.relationVmmRsVswitchOverrideLldpIfPol;
    this._relationVmmRsVswitchOverrideMcpIfPol = config.relationVmmRsVswitchOverrideMcpIfPol;
    this._relationVmmRsVswitchOverrideMtuPol = config.relationVmmRsVswitchOverrideMtuPol;
    this._relationVmmRsVswitchOverrideStpPol = config.relationVmmRsVswitchOverrideStpPol;
    this._vmmDomainDn = config.vmmDomainDn;
    this._relationVmmRsVswitchExporterPol.internalValue = config.relationVmmRsVswitchExporterPol;
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

  // relation_vmm_rs_vswitch_override_cdp_if_pol - computed: false, optional: true, required: false
  private _relationVmmRsVswitchOverrideCdpIfPol?: string; 
  public get relationVmmRsVswitchOverrideCdpIfPol() {
    return this.getStringAttribute('relation_vmm_rs_vswitch_override_cdp_if_pol');
  }
  public set relationVmmRsVswitchOverrideCdpIfPol(value: string) {
    this._relationVmmRsVswitchOverrideCdpIfPol = value;
  }
  public resetRelationVmmRsVswitchOverrideCdpIfPol() {
    this._relationVmmRsVswitchOverrideCdpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVswitchOverrideCdpIfPolInput() {
    return this._relationVmmRsVswitchOverrideCdpIfPol;
  }

  // relation_vmm_rs_vswitch_override_fw_pol - computed: false, optional: true, required: false
  private _relationVmmRsVswitchOverrideFwPol?: string; 
  public get relationVmmRsVswitchOverrideFwPol() {
    return this.getStringAttribute('relation_vmm_rs_vswitch_override_fw_pol');
  }
  public set relationVmmRsVswitchOverrideFwPol(value: string) {
    this._relationVmmRsVswitchOverrideFwPol = value;
  }
  public resetRelationVmmRsVswitchOverrideFwPol() {
    this._relationVmmRsVswitchOverrideFwPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVswitchOverrideFwPolInput() {
    return this._relationVmmRsVswitchOverrideFwPol;
  }

  // relation_vmm_rs_vswitch_override_lacp_pol - computed: false, optional: true, required: false
  private _relationVmmRsVswitchOverrideLacpPol?: string; 
  public get relationVmmRsVswitchOverrideLacpPol() {
    return this.getStringAttribute('relation_vmm_rs_vswitch_override_lacp_pol');
  }
  public set relationVmmRsVswitchOverrideLacpPol(value: string) {
    this._relationVmmRsVswitchOverrideLacpPol = value;
  }
  public resetRelationVmmRsVswitchOverrideLacpPol() {
    this._relationVmmRsVswitchOverrideLacpPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVswitchOverrideLacpPolInput() {
    return this._relationVmmRsVswitchOverrideLacpPol;
  }

  // relation_vmm_rs_vswitch_override_lldp_if_pol - computed: false, optional: true, required: false
  private _relationVmmRsVswitchOverrideLldpIfPol?: string; 
  public get relationVmmRsVswitchOverrideLldpIfPol() {
    return this.getStringAttribute('relation_vmm_rs_vswitch_override_lldp_if_pol');
  }
  public set relationVmmRsVswitchOverrideLldpIfPol(value: string) {
    this._relationVmmRsVswitchOverrideLldpIfPol = value;
  }
  public resetRelationVmmRsVswitchOverrideLldpIfPol() {
    this._relationVmmRsVswitchOverrideLldpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVswitchOverrideLldpIfPolInput() {
    return this._relationVmmRsVswitchOverrideLldpIfPol;
  }

  // relation_vmm_rs_vswitch_override_mcp_if_pol - computed: false, optional: true, required: false
  private _relationVmmRsVswitchOverrideMcpIfPol?: string; 
  public get relationVmmRsVswitchOverrideMcpIfPol() {
    return this.getStringAttribute('relation_vmm_rs_vswitch_override_mcp_if_pol');
  }
  public set relationVmmRsVswitchOverrideMcpIfPol(value: string) {
    this._relationVmmRsVswitchOverrideMcpIfPol = value;
  }
  public resetRelationVmmRsVswitchOverrideMcpIfPol() {
    this._relationVmmRsVswitchOverrideMcpIfPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVswitchOverrideMcpIfPolInput() {
    return this._relationVmmRsVswitchOverrideMcpIfPol;
  }

  // relation_vmm_rs_vswitch_override_mtu_pol - computed: false, optional: true, required: false
  private _relationVmmRsVswitchOverrideMtuPol?: string; 
  public get relationVmmRsVswitchOverrideMtuPol() {
    return this.getStringAttribute('relation_vmm_rs_vswitch_override_mtu_pol');
  }
  public set relationVmmRsVswitchOverrideMtuPol(value: string) {
    this._relationVmmRsVswitchOverrideMtuPol = value;
  }
  public resetRelationVmmRsVswitchOverrideMtuPol() {
    this._relationVmmRsVswitchOverrideMtuPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVswitchOverrideMtuPolInput() {
    return this._relationVmmRsVswitchOverrideMtuPol;
  }

  // relation_vmm_rs_vswitch_override_stp_pol - computed: false, optional: true, required: false
  private _relationVmmRsVswitchOverrideStpPol?: string; 
  public get relationVmmRsVswitchOverrideStpPol() {
    return this.getStringAttribute('relation_vmm_rs_vswitch_override_stp_pol');
  }
  public set relationVmmRsVswitchOverrideStpPol(value: string) {
    this._relationVmmRsVswitchOverrideStpPol = value;
  }
  public resetRelationVmmRsVswitchOverrideStpPol() {
    this._relationVmmRsVswitchOverrideStpPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVswitchOverrideStpPolInput() {
    return this._relationVmmRsVswitchOverrideStpPol;
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

  // relation_vmm_rs_vswitch_exporter_pol - computed: false, optional: true, required: false
  private _relationVmmRsVswitchExporterPol = new VswitchPolicyRelationVmmRsVswitchExporterPolList(this, "relation_vmm_rs_vswitch_exporter_pol", true);
  public get relationVmmRsVswitchExporterPol() {
    return this._relationVmmRsVswitchExporterPol;
  }
  public putRelationVmmRsVswitchExporterPol(value: VswitchPolicyRelationVmmRsVswitchExporterPol[] | cdktf.IResolvable) {
    this._relationVmmRsVswitchExporterPol.internalValue = value;
  }
  public resetRelationVmmRsVswitchExporterPol() {
    this._relationVmmRsVswitchExporterPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVmmRsVswitchExporterPolInput() {
    return this._relationVmmRsVswitchExporterPol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_vmm_rs_vswitch_override_cdp_if_pol: cdktf.stringToTerraform(this._relationVmmRsVswitchOverrideCdpIfPol),
      relation_vmm_rs_vswitch_override_fw_pol: cdktf.stringToTerraform(this._relationVmmRsVswitchOverrideFwPol),
      relation_vmm_rs_vswitch_override_lacp_pol: cdktf.stringToTerraform(this._relationVmmRsVswitchOverrideLacpPol),
      relation_vmm_rs_vswitch_override_lldp_if_pol: cdktf.stringToTerraform(this._relationVmmRsVswitchOverrideLldpIfPol),
      relation_vmm_rs_vswitch_override_mcp_if_pol: cdktf.stringToTerraform(this._relationVmmRsVswitchOverrideMcpIfPol),
      relation_vmm_rs_vswitch_override_mtu_pol: cdktf.stringToTerraform(this._relationVmmRsVswitchOverrideMtuPol),
      relation_vmm_rs_vswitch_override_stp_pol: cdktf.stringToTerraform(this._relationVmmRsVswitchOverrideStpPol),
      vmm_domain_dn: cdktf.stringToTerraform(this._vmmDomainDn),
      relation_vmm_rs_vswitch_exporter_pol: cdktf.listMapper(vswitchPolicyRelationVmmRsVswitchExporterPolToTerraform, true)(this._relationVmmRsVswitchExporterPol.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      relation_vmm_rs_vswitch_override_cdp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsVswitchOverrideCdpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_vswitch_override_fw_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsVswitchOverrideFwPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_vswitch_override_lacp_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsVswitchOverrideLacpPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_vswitch_override_lldp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsVswitchOverrideLldpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_vswitch_override_mcp_if_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsVswitchOverrideMcpIfPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_vswitch_override_mtu_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsVswitchOverrideMtuPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_vmm_rs_vswitch_override_stp_pol: {
        value: cdktf.stringToHclTerraform(this._relationVmmRsVswitchOverrideStpPol),
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
      relation_vmm_rs_vswitch_exporter_pol: {
        value: cdktf.listMapperHcl(vswitchPolicyRelationVmmRsVswitchExporterPolToHclTerraform, true)(this._relationVmmRsVswitchExporterPol.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VswitchPolicyRelationVmmRsVswitchExporterPolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
