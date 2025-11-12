// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciVrfLeakEpgBdSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#allow_l3out_advertisement DataAciVrfLeakEpgBdSubnet#allow_l3out_advertisement}
  */
  readonly allowL3OutAdvertisement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#annotation DataAciVrfLeakEpgBdSubnet#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#description DataAciVrfLeakEpgBdSubnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#id DataAciVrfLeakEpgBdSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#ip DataAciVrfLeakEpgBdSubnet#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#name_alias DataAciVrfLeakEpgBdSubnet#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#vrf_dn DataAciVrfLeakEpgBdSubnet#vrf_dn}
  */
  readonly vrfDn: string;
  /**
  * leak_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#leak_to DataAciVrfLeakEpgBdSubnet#leak_to}
  */
  readonly leakTo?: DataAciVrfLeakEpgBdSubnetLeakTo[] | cdktf.IResolvable;
}
export interface DataAciVrfLeakEpgBdSubnetLeakTo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#allow_l3out_advertisement DataAciVrfLeakEpgBdSubnet#allow_l3out_advertisement}
  */
  readonly allowL3OutAdvertisement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#vrf_dn DataAciVrfLeakEpgBdSubnet#vrf_dn}
  */
  readonly vrfDn?: string;
}

export function dataAciVrfLeakEpgBdSubnetLeakToToTerraform(struct?: DataAciVrfLeakEpgBdSubnetLeakTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_l3out_advertisement: cdktf.stringToTerraform(struct!.allowL3OutAdvertisement),
    vrf_dn: cdktf.stringToTerraform(struct!.vrfDn),
  }
}


export function dataAciVrfLeakEpgBdSubnetLeakToToHclTerraform(struct?: DataAciVrfLeakEpgBdSubnetLeakTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_l3out_advertisement: {
      value: cdktf.stringToHclTerraform(struct!.allowL3OutAdvertisement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf_dn: {
      value: cdktf.stringToHclTerraform(struct!.vrfDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAciVrfLeakEpgBdSubnetLeakToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAciVrfLeakEpgBdSubnetLeakTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowL3OutAdvertisement !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowL3OutAdvertisement = this._allowL3OutAdvertisement;
    }
    if (this._vrfDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfDn = this._vrfDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAciVrfLeakEpgBdSubnetLeakTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowL3OutAdvertisement = undefined;
      this._vrfDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowL3OutAdvertisement = value.allowL3OutAdvertisement;
      this._vrfDn = value.vrfDn;
    }
  }

  // allow_l3out_advertisement - computed: false, optional: true, required: false
  private _allowL3OutAdvertisement?: string; 
  public get allowL3OutAdvertisement() {
    return this.getStringAttribute('allow_l3out_advertisement');
  }
  public set allowL3OutAdvertisement(value: string) {
    this._allowL3OutAdvertisement = value;
  }
  public resetAllowL3OutAdvertisement() {
    this._allowL3OutAdvertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowL3OutAdvertisementInput() {
    return this._allowL3OutAdvertisement;
  }

  // vrf_dn - computed: false, optional: true, required: false
  private _vrfDn?: string; 
  public get vrfDn() {
    return this.getStringAttribute('vrf_dn');
  }
  public set vrfDn(value: string) {
    this._vrfDn = value;
  }
  public resetVrfDn() {
    this._vrfDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDnInput() {
    return this._vrfDn;
  }
}

export class DataAciVrfLeakEpgBdSubnetLeakToList extends cdktf.ComplexList {
  public internalValue? : DataAciVrfLeakEpgBdSubnetLeakTo[] | cdktf.IResolvable

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
  public get(index: number): DataAciVrfLeakEpgBdSubnetLeakToOutputReference {
    return new DataAciVrfLeakEpgBdSubnetLeakToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet aci_vrf_leak_epg_bd_subnet}
*/
export class DataAciVrfLeakEpgBdSubnet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_vrf_leak_epg_bd_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciVrfLeakEpgBdSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciVrfLeakEpgBdSubnet to import
  * @param importFromId The id of the existing DataAciVrfLeakEpgBdSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciVrfLeakEpgBdSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_vrf_leak_epg_bd_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/vrf_leak_epg_bd_subnet aci_vrf_leak_epg_bd_subnet} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciVrfLeakEpgBdSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciVrfLeakEpgBdSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_vrf_leak_epg_bd_subnet',
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
    this._allowL3OutAdvertisement = config.allowL3OutAdvertisement;
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._ip = config.ip;
    this._nameAlias = config.nameAlias;
    this._vrfDn = config.vrfDn;
    this._leakTo.internalValue = config.leakTo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_l3out_advertisement - computed: false, optional: true, required: false
  private _allowL3OutAdvertisement?: string; 
  public get allowL3OutAdvertisement() {
    return this.getStringAttribute('allow_l3out_advertisement');
  }
  public set allowL3OutAdvertisement(value: string) {
    this._allowL3OutAdvertisement = value;
  }
  public resetAllowL3OutAdvertisement() {
    this._allowL3OutAdvertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowL3OutAdvertisementInput() {
    return this._allowL3OutAdvertisement;
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

  // vrf_dn - computed: false, optional: false, required: true
  private _vrfDn?: string; 
  public get vrfDn() {
    return this.getStringAttribute('vrf_dn');
  }
  public set vrfDn(value: string) {
    this._vrfDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDnInput() {
    return this._vrfDn;
  }

  // leak_to - computed: false, optional: true, required: false
  private _leakTo = new DataAciVrfLeakEpgBdSubnetLeakToList(this, "leak_to", true);
  public get leakTo() {
    return this._leakTo;
  }
  public putLeakTo(value: DataAciVrfLeakEpgBdSubnetLeakTo[] | cdktf.IResolvable) {
    this._leakTo.internalValue = value;
  }
  public resetLeakTo() {
    this._leakTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leakToInput() {
    return this._leakTo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_l3out_advertisement: cdktf.stringToTerraform(this._allowL3OutAdvertisement),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      vrf_dn: cdktf.stringToTerraform(this._vrfDn),
      leak_to: cdktf.listMapper(dataAciVrfLeakEpgBdSubnetLeakToToTerraform, true)(this._leakTo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_l3out_advertisement: {
        value: cdktf.stringToHclTerraform(this._allowL3OutAdvertisement),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_dn: {
        value: cdktf.stringToHclTerraform(this._vrfDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leak_to: {
        value: cdktf.listMapperHcl(dataAciVrfLeakEpgBdSubnetLeakToToHclTerraform, true)(this._leakTo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAciVrfLeakEpgBdSubnetLeakToList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
