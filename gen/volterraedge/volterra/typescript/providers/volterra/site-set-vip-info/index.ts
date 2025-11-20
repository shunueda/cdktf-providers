// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteSetVipInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#id SiteSetVipInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#name SiteSetVipInfo#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#namespace SiteSetVipInfo#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#site_type SiteSetVipInfo#site_type}
  */
  readonly siteType: string;
  /**
  * vip_params_per_az block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#vip_params_per_az SiteSetVipInfo#vip_params_per_az}
  */
  readonly vipParamsPerAz: SiteSetVipInfoVipParamsPerAz[] | cdktf.IResolvable;
}
export interface SiteSetVipInfoVipParamsPerAz {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#az_name SiteSetVipInfo#az_name}
  */
  readonly azName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#inside_vip SiteSetVipInfo#inside_vip}
  */
  readonly insideVip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#inside_vip_cname SiteSetVipInfo#inside_vip_cname}
  */
  readonly insideVipCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#outside_vip SiteSetVipInfo#outside_vip}
  */
  readonly outsideVip: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#outside_vip_cname SiteSetVipInfo#outside_vip_cname}
  */
  readonly outsideVipCname?: string;
}

export function siteSetVipInfoVipParamsPerAzToTerraform(struct?: SiteSetVipInfoVipParamsPerAz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az_name: cdktf.stringToTerraform(struct!.azName),
    inside_vip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insideVip),
    inside_vip_cname: cdktf.stringToTerraform(struct!.insideVipCname),
    outside_vip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outsideVip),
    outside_vip_cname: cdktf.stringToTerraform(struct!.outsideVipCname),
  }
}


export function siteSetVipInfoVipParamsPerAzToHclTerraform(struct?: SiteSetVipInfoVipParamsPerAz | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az_name: {
      value: cdktf.stringToHclTerraform(struct!.azName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_vip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.insideVip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inside_vip_cname: {
      value: cdktf.stringToHclTerraform(struct!.insideVipCname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_vip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outsideVip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    outside_vip_cname: {
      value: cdktf.stringToHclTerraform(struct!.outsideVipCname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSetVipInfoVipParamsPerAzOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSetVipInfoVipParamsPerAz | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azName = this._azName;
    }
    if (this._insideVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideVip = this._insideVip;
    }
    if (this._insideVipCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideVipCname = this._insideVipCname;
    }
    if (this._outsideVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideVip = this._outsideVip;
    }
    if (this._outsideVipCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideVipCname = this._outsideVipCname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSetVipInfoVipParamsPerAz | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azName = undefined;
      this._insideVip = undefined;
      this._insideVipCname = undefined;
      this._outsideVip = undefined;
      this._outsideVipCname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azName = value.azName;
      this._insideVip = value.insideVip;
      this._insideVipCname = value.insideVipCname;
      this._outsideVip = value.outsideVip;
      this._outsideVipCname = value.outsideVipCname;
    }
  }

  // az_name - computed: false, optional: true, required: false
  private _azName?: string; 
  public get azName() {
    return this.getStringAttribute('az_name');
  }
  public set azName(value: string) {
    this._azName = value;
  }
  public resetAzName() {
    this._azName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azNameInput() {
    return this._azName;
  }

  // inside_vip - computed: false, optional: true, required: false
  private _insideVip?: string[]; 
  public get insideVip() {
    return this.getListAttribute('inside_vip');
  }
  public set insideVip(value: string[]) {
    this._insideVip = value;
  }
  public resetInsideVip() {
    this._insideVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideVipInput() {
    return this._insideVip;
  }

  // inside_vip_cname - computed: false, optional: true, required: false
  private _insideVipCname?: string; 
  public get insideVipCname() {
    return this.getStringAttribute('inside_vip_cname');
  }
  public set insideVipCname(value: string) {
    this._insideVipCname = value;
  }
  public resetInsideVipCname() {
    this._insideVipCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideVipCnameInput() {
    return this._insideVipCname;
  }

  // outside_vip - computed: false, optional: false, required: true
  private _outsideVip?: string[]; 
  public get outsideVip() {
    return this.getListAttribute('outside_vip');
  }
  public set outsideVip(value: string[]) {
    this._outsideVip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideVipInput() {
    return this._outsideVip;
  }

  // outside_vip_cname - computed: false, optional: true, required: false
  private _outsideVipCname?: string; 
  public get outsideVipCname() {
    return this.getStringAttribute('outside_vip_cname');
  }
  public set outsideVipCname(value: string) {
    this._outsideVipCname = value;
  }
  public resetOutsideVipCname() {
    this._outsideVipCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideVipCnameInput() {
    return this._outsideVipCname;
  }
}

export class SiteSetVipInfoVipParamsPerAzList extends cdktf.ComplexList {
  public internalValue? : SiteSetVipInfoVipParamsPerAz[] | cdktf.IResolvable

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
  public get(index: number): SiteSetVipInfoVipParamsPerAzOutputReference {
    return new SiteSetVipInfoVipParamsPerAzOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info volterra_site_set_vip_info}
*/
export class SiteSetVipInfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_site_set_vip_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteSetVipInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteSetVipInfo to import
  * @param importFromId The id of the existing SiteSetVipInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteSetVipInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_site_set_vip_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/site_set_vip_info volterra_site_set_vip_info} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteSetVipInfoConfig
  */
  public constructor(scope: Construct, id: string, config: SiteSetVipInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_site_set_vip_info',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._siteType = config.siteType;
    this._vipParamsPerAz.internalValue = config.vipParamsPerAz;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // site_type - computed: false, optional: false, required: true
  private _siteType?: string; 
  public get siteType() {
    return this.getStringAttribute('site_type');
  }
  public set siteType(value: string) {
    this._siteType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTypeInput() {
    return this._siteType;
  }

  // vip_params_per_az - computed: false, optional: false, required: true
  private _vipParamsPerAz = new SiteSetVipInfoVipParamsPerAzList(this, "vip_params_per_az", false);
  public get vipParamsPerAz() {
    return this._vipParamsPerAz;
  }
  public putVipParamsPerAz(value: SiteSetVipInfoVipParamsPerAz[] | cdktf.IResolvable) {
    this._vipParamsPerAz.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipParamsPerAzInput() {
    return this._vipParamsPerAz.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      site_type: cdktf.stringToTerraform(this._siteType),
      vip_params_per_az: cdktf.listMapper(siteSetVipInfoVipParamsPerAzToTerraform, true)(this._vipParamsPerAz.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_type: {
        value: cdktf.stringToHclTerraform(this._siteType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_params_per_az: {
        value: cdktf.listMapperHcl(siteSetVipInfoVipParamsPerAzToHclTerraform, true)(this._vipParamsPerAz.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteSetVipInfoVipParamsPerAzList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
