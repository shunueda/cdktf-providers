// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#annotation Subnet#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#anycast_mac Subnet#anycast_mac}
  */
  readonly anycastMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#ctrl Subnet#ctrl}
  */
  readonly ctrl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#description Subnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#id Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#ip Subnet#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#ip_data_plane_learning Subnet#ip_data_plane_learning}
  */
  readonly ipDataPlaneLearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#name_alias Subnet#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#next_hop_addr Subnet#next_hop_addr}
  */
  readonly nextHopAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#parent_dn Subnet#parent_dn}
  */
  readonly parentDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#preferred Subnet#preferred}
  */
  readonly preferred?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#relation_fv_rs_bd_subnet_to_out Subnet#relation_fv_rs_bd_subnet_to_out}
  */
  readonly relationFvRsBdSubnetToOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#relation_fv_rs_bd_subnet_to_profile Subnet#relation_fv_rs_bd_subnet_to_profile}
  */
  readonly relationFvRsBdSubnetToProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#relation_fv_rs_nd_pfx_pol Subnet#relation_fv_rs_nd_pfx_pol}
  */
  readonly relationFvRsNdPfxPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#scope Subnet#scope}
  */
  readonly scope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#virtual Subnet#virtual}
  */
  readonly virtual?: string;
  /**
  * msnlb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#msnlb Subnet#msnlb}
  */
  readonly msnlb?: SubnetMsnlb;
}
export interface SubnetMsnlb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#group Subnet#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#mac Subnet#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#mode Subnet#mode}
  */
  readonly mode?: string;
}

export function subnetMsnlbToTerraform(struct?: SubnetMsnlbOutputReference | SubnetMsnlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    mac: cdktf.stringToTerraform(struct!.mac),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function subnetMsnlbToHclTerraform(struct?: SubnetMsnlbOutputReference | SubnetMsnlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubnetMsnlbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SubnetMsnlb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetMsnlb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._group = undefined;
      this._mac = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._group = value.group;
      this._mac = value.mac;
      this._mode = value.mode;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // mac - computed: false, optional: true, required: false
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

  // mode - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet aci_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subnet to import
  * @param importFromId The id of the existing Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/subnet aci_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_subnet',
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
    this._anycastMac = config.anycastMac;
    this._ctrl = config.ctrl;
    this._description = config.description;
    this._id = config.id;
    this._ip = config.ip;
    this._ipDataPlaneLearning = config.ipDataPlaneLearning;
    this._nameAlias = config.nameAlias;
    this._nextHopAddr = config.nextHopAddr;
    this._parentDn = config.parentDn;
    this._preferred = config.preferred;
    this._relationFvRsBdSubnetToOut = config.relationFvRsBdSubnetToOut;
    this._relationFvRsBdSubnetToProfile = config.relationFvRsBdSubnetToProfile;
    this._relationFvRsNdPfxPol = config.relationFvRsNdPfxPol;
    this._scope = config.scope;
    this._virtual = config.virtual;
    this._msnlb.internalValue = config.msnlb;
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

  // anycast_mac - computed: false, optional: true, required: false
  private _anycastMac?: string; 
  public get anycastMac() {
    return this.getStringAttribute('anycast_mac');
  }
  public set anycastMac(value: string) {
    this._anycastMac = value;
  }
  public resetAnycastMac() {
    this._anycastMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastMacInput() {
    return this._anycastMac;
  }

  // ctrl - computed: true, optional: true, required: false
  private _ctrl?: string[]; 
  public get ctrl() {
    return this.getListAttribute('ctrl');
  }
  public set ctrl(value: string[]) {
    this._ctrl = value;
  }
  public resetCtrl() {
    this._ctrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlInput() {
    return this._ctrl;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip_data_plane_learning - computed: true, optional: true, required: false
  private _ipDataPlaneLearning?: string; 
  public get ipDataPlaneLearning() {
    return this.getStringAttribute('ip_data_plane_learning');
  }
  public set ipDataPlaneLearning(value: string) {
    this._ipDataPlaneLearning = value;
  }
  public resetIpDataPlaneLearning() {
    this._ipDataPlaneLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDataPlaneLearningInput() {
    return this._ipDataPlaneLearning;
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

  // next_hop_addr - computed: false, optional: true, required: false
  private _nextHopAddr?: string; 
  public get nextHopAddr() {
    return this.getStringAttribute('next_hop_addr');
  }
  public set nextHopAddr(value: string) {
    this._nextHopAddr = value;
  }
  public resetNextHopAddr() {
    this._nextHopAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopAddrInput() {
    return this._nextHopAddr;
  }

  // parent_dn - computed: false, optional: false, required: true
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // preferred - computed: true, optional: true, required: false
  private _preferred?: string; 
  public get preferred() {
    return this.getStringAttribute('preferred');
  }
  public set preferred(value: string) {
    this._preferred = value;
  }
  public resetPreferred() {
    this._preferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredInput() {
    return this._preferred;
  }

  // relation_fv_rs_bd_subnet_to_out - computed: false, optional: true, required: false
  private _relationFvRsBdSubnetToOut?: string[]; 
  public get relationFvRsBdSubnetToOut() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_bd_subnet_to_out'));
  }
  public set relationFvRsBdSubnetToOut(value: string[]) {
    this._relationFvRsBdSubnetToOut = value;
  }
  public resetRelationFvRsBdSubnetToOut() {
    this._relationFvRsBdSubnetToOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdSubnetToOutInput() {
    return this._relationFvRsBdSubnetToOut;
  }

  // relation_fv_rs_bd_subnet_to_profile - computed: false, optional: true, required: false
  private _relationFvRsBdSubnetToProfile?: string; 
  public get relationFvRsBdSubnetToProfile() {
    return this.getStringAttribute('relation_fv_rs_bd_subnet_to_profile');
  }
  public set relationFvRsBdSubnetToProfile(value: string) {
    this._relationFvRsBdSubnetToProfile = value;
  }
  public resetRelationFvRsBdSubnetToProfile() {
    this._relationFvRsBdSubnetToProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsBdSubnetToProfileInput() {
    return this._relationFvRsBdSubnetToProfile;
  }

  // relation_fv_rs_nd_pfx_pol - computed: false, optional: true, required: false
  private _relationFvRsNdPfxPol?: string; 
  public get relationFvRsNdPfxPol() {
    return this.getStringAttribute('relation_fv_rs_nd_pfx_pol');
  }
  public set relationFvRsNdPfxPol(value: string) {
    this._relationFvRsNdPfxPol = value;
  }
  public resetRelationFvRsNdPfxPol() {
    this._relationFvRsNdPfxPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsNdPfxPolInput() {
    return this._relationFvRsNdPfxPol;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // virtual - computed: true, optional: true, required: false
  private _virtual?: string; 
  public get virtual() {
    return this.getStringAttribute('virtual');
  }
  public set virtual(value: string) {
    this._virtual = value;
  }
  public resetVirtual() {
    this._virtual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInput() {
    return this._virtual;
  }

  // msnlb - computed: false, optional: true, required: false
  private _msnlb = new SubnetMsnlbOutputReference(this, "msnlb");
  public get msnlb() {
    return this._msnlb;
  }
  public putMsnlb(value: SubnetMsnlb) {
    this._msnlb.internalValue = value;
  }
  public resetMsnlb() {
    this._msnlb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msnlbInput() {
    return this._msnlb.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      anycast_mac: cdktf.stringToTerraform(this._anycastMac),
      ctrl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ctrl),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip_data_plane_learning: cdktf.stringToTerraform(this._ipDataPlaneLearning),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      next_hop_addr: cdktf.stringToTerraform(this._nextHopAddr),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      preferred: cdktf.stringToTerraform(this._preferred),
      relation_fv_rs_bd_subnet_to_out: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsBdSubnetToOut),
      relation_fv_rs_bd_subnet_to_profile: cdktf.stringToTerraform(this._relationFvRsBdSubnetToProfile),
      relation_fv_rs_nd_pfx_pol: cdktf.stringToTerraform(this._relationFvRsNdPfxPol),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
      virtual: cdktf.stringToTerraform(this._virtual),
      msnlb: subnetMsnlbToTerraform(this._msnlb.internalValue),
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
      anycast_mac: {
        value: cdktf.stringToHclTerraform(this._anycastMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ctrl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ctrl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_data_plane_learning: {
        value: cdktf.stringToHclTerraform(this._ipDataPlaneLearning),
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
      next_hop_addr: {
        value: cdktf.stringToHclTerraform(this._nextHopAddr),
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
      preferred: {
        value: cdktf.stringToHclTerraform(this._preferred),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_bd_subnet_to_out: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsBdSubnetToOut),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_bd_subnet_to_profile: {
        value: cdktf.stringToHclTerraform(this._relationFvRsBdSubnetToProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_nd_pfx_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsNdPfxPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      virtual: {
        value: cdktf.stringToHclTerraform(this._virtual),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msnlb: {
        value: subnetMsnlbToHclTerraform(this._msnlb.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SubnetMsnlbList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
